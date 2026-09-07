# Shell log - Week 1

Run in Git Bash on Windows 11, on branch `sprint-01/w1d1-docs`, before the sprint
documentation was committed. Paths are Git Bash style, so `C:\` appears as `/c/`.

## Where I started

```console
$ pwd
/c/Users/robba/OneDrive/Desktop/what

$ ls
Web-base
Week 1 D 1
Week 2 D 2
```

## Into the repository

```console
$ cd Web-base

$ pwd
/c/Users/robba/OneDrive/Desktop/what/Web-base

$ ls
AGENTS.md
CLAUDE.md
README.md
app
components
components.json
docs
drizzle
drizzle.config.ts
eslint.config.mjs
hooks
lib
liveblocks.config.ts
next.config.ts
package-lock.json
package.json
postcss.config.mjs
proxy.ts
public
removed-code.txt
scripts
skills-lock.json
src
trigger.config.ts
tsconfig.json
vitest.config.ts
workflows
worklog
```

`ls` hides dotfiles by default, so `.gitignore`, `.prettierrc`, `.claude/` and the
rest of the dot-prefixed entries are not in that listing. `ls -a` shows them.
`node_modules/` is absent because `npm install` had not been run yet at this point.

## Repository state

```console
$ git status
On branch sprint-01/w1d1-docs
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	docs/

no changes added to commit (use "git add" and/or "git commit -a")

$ git log -1 --oneline
a850cf3 updated readme
```

## Reading the output

- `pwd` prints the working directory. Every relative path in a command resolves
  against it, which is why the `cd` matters before anything else.
- `ls` lists the directory. The repository root here matches the Layout section of
  the README.
- `git status` is answering three questions at once: which branch I am on
  (`sprint-01/w1d1-docs`, not `main`), what is changed but not staged (the one-line
  README edit), and what git has never seen (`docs/`, listed as a single directory
  because none of the files inside it are tracked yet).
- `git log -1 --oneline` shows the tip commit, `a850cf3 updated readme`. Since the
  branch was cut from `main` and nothing was committed to it yet, this is still the
  commit `main` points at.

## W1D4 DO 5 

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/status-repo (week_1_day_4)
$ git status
On branch week_1_day_4
Your branch is up to date with 'origin/week_1_day_4'.

nothing to commit, working tree clean

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/status-repo (week_1_day_4)
$ git diff

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/status-repo (week_1_day_4)
$ git log --oneline -5
6f1b5db (HEAD -> week_1_day_4, origin/week_1_day_4) W1D4 do 4 done created PR
645e90c W1D4 do 3 - Added test
1a452cd W1D4 Do 2
789ef70 W1D4 - do 1
b023fa9 (main) W1D3.md done - need update

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/status-repo (week_1_day_4)
$ cat workflows/tasks/run-workflow.test.ts
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

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/status-repo (week_1_day_4)
$ 