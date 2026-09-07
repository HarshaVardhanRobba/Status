import { beforeEach, describe, expect, it, vi } from "vitest"

const metadataStore: Record<string, unknown> = {}

// task() only needs to hand back {id, run} so the test can call .run directly,
// the way the real runtime invokes it. logger and metadata are no-ops that
// record what was set, since nothing here needs the real Trigger.dev backend.
vi.mock("@trigger.dev/sdk", () => ({
  task: (options: unknown) => options,
  logger: { log: vi.fn(), error: vi.fn() },
  metadata: {
    set: vi.fn((key: string, value: unknown) => {
      metadataStore[key] = value
    }),
    flush: vi.fn(async () => undefined),
  },
}))

const getStagehand = vi.fn(async () => ({}) as never)
const closeBrowser = vi.fn(async () => undefined)

vi.mock("../lib/browserbase", () => ({
  createBrowser: () => ({
    getStagehand,
    sessionId: () => undefined,
    close: closeBrowser,
  }),
  sessionUrl: (id: string) => `https://www.browserbase.com/sessions/${id}`,
}))

const openUrlExecutor = vi.fn(async () => ({ url: "https://a.com" }))
const extractExecutor = vi.fn(async ({ values }: { values: Record<string, string> }) => ({
  text: `extracted:${values.instruction}`,
}))

vi.mock("../nodes/node-executors", () => ({
  nodeExecutors: {
    "open-url": openUrlExecutor,
    extract: extractExecutor,
  },
}))

const getWorkflow = vi.fn()

vi.mock("../test-data-lib/data", () => ({
  getWorkflow: (...args: unknown[]) => getWorkflow(...args),
}))

const { runWorkflowTask } = await import("./run-workflow")

function makeNode(id: string, type: "open-url" | "extract", values: Record<string, string>) {
  return {
    id,
    type: "step",
    position: { x: 0, y: 0 },
    data: { type, kind: "action", title: id, values },
  }
}

describe("runWorkflowTask", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("runs connected nodes in dependency order and interpolates upstream output", async () => {
    getWorkflow.mockResolvedValue({
      name: "test workflow",
      graph: {
        nodes: [
          makeNode("open", "open-url", { url: "https://a.com" }),
          makeNode("extract", "extract", {
            instruction: "read {{ open.url }}",
          }),
        ],
        edges: [{ id: "e1", source: "open", target: "extract" }],
      },
    })

    const result = await runWorkflowTask.run({
      workflowId: "w1",
      orgId: "org1",
    })

    expect(openUrlExecutor.mock.invocationCallOrder[0]).toBeLessThan(
      extractExecutor.mock.invocationCallOrder[0]
    )
    expect(extractExecutor).toHaveBeenCalledWith(
      expect.objectContaining({
        values: { instruction: "read https://a.com" },
      })
    )
    expect(result.steps.map((s) => [s.id, s.status])).toEqual([
      ["open", "done"],
      ["extract", "done"],
    ])
    expect(closeBrowser).toHaveBeenCalled()
  })

  it("marks a step failed and stops the run when a node executor throws", async () => {
    getWorkflow.mockResolvedValue({
      name: "test workflow",
      graph: {
        nodes: [
          makeNode("open", "open-url", { url: "https://a.com" }),
          makeNode("extract", "extract", { instruction: "read it" }),
        ],
        edges: [{ id: "e1", source: "open", target: "extract" }],
      },
    })

    openUrlExecutor.mockRejectedValueOnce(new Error("boom"))

    await expect(
      runWorkflowTask.run({ workflowId: "w1", orgId: "org1" })
    ).rejects.toThrow("boom")

    expect(extractExecutor).not.toHaveBeenCalled()
    expect(closeBrowser).toHaveBeenCalled()
  })
})
