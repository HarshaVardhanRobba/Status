# Hand check — Level 2 ticket (interpolate.ts)

## Steps

1. Open `workflows/lib/interpolate.ts` and read the `stringify()` helper
   (around line 31-37) and its surrounding comments.
2. Open `workflows/lib/interpolate.test.ts` and read the case named
   "stringifies an object result as JSON" (line 38-42).
3. Trace `stringify()` by hand for an object input, such as
   `{ url: "https://a.com" }`: it hits the `typeof value === "object"` check
   and should return `JSON.stringify(value)`.
4. Run `npx vitest run workflows/lib/interpolate.test.ts` from the repo root.
5. Confirm every test in that file passes, in particular the object case.

## Expected result

All 9 tests in `workflows/lib/interpolate.test.ts` pass, including
"stringifies an object result as JSON", which expects
`interpolate("{{ open }}", { open: { url: "https://a.com" } })` to equal
`JSON.stringify({ url: "https://a.com" })`.

## Actual result

All 9 tests passed. `stringify()` uses `typeof value === "object"` to route
objects and arrays to `JSON.stringify`, matching the ticket goal.

---

## Automated test runs (Do 3)

Two existing test files were run directly with vitest instead of by hand,
since both already cover their target files.

### workflows/tasks/run-workflow.test.ts

Command: `npx vitest run workflows/tasks/run-workflow.test.ts`

Result: 1 test file passed, 2 tests passed.

- "runs connected nodes in dependency order and interpolates upstream
  output" — passed. `open-url` ran before `extract`, and the extract node's
  `instruction` field received the interpolated upstream URL.
- "marks a step failed and stops the run when a node executor throws" —
  passed. The run rejected with the thrown error, the downstream node never
  ran, and the browser close ran anyway in the `finally` block.

### workflows/lib/graphvalidator.test.ts

Command: `npx vitest run workflows/lib/graphvalidator.test.ts`

Result: 1 test file passed, 5 tests passed.

- "passes a graph with one trigger, one edge, no cycle" — passed.
- "flags zero triggers" — passed.
- "flags two triggers" — passed.
- "flags no edges" — passed.
- "flags a cycle" — passed.

### Combined run

Command:
`npx vitest run workflows/tasks/run-workflow.test.ts workflows/lib/graphvalidator.test.ts`

Result: 2 test files passed, 7 tests passed, 0 failed. Duration ~342ms.
