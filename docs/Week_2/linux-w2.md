# Shell log - Week 1

## W2D1 — cat, less, head/tail (real output, Git Bash)

Ran from `docs/Week 2/`, no IDE — plain shell reading of the two files just
written (glossary.md, sprint-02.md).

### cat glossary.md

# Glossary

Domain: multi-tenant workflow builder (Next.js + React Flow canvas + Trigger.dev
runs). Terms below are the ones code, docs, and standup must all use the same
way — see sprint-02.md Why.

| Term | Definition | Not this |
|---|---|---|
| Organization | Tenant that owns a set of workflows; every DB query is scoped by its id. | Not a "team" inside one workflow, and not a User — a User belongs to an Organization, does not own workflows directly. |
| Workflow | A named, org-owned graph of nodes and edges built in the canvas; one row in the workflows table. | Not a Run — a Workflow is the design, a Run is one execution of it. |
| Node | A single step in a workflow's graph, with a kind (e.g. open-url), config fields, and a position on the canvas. | Not an Executor — a Node is the graph entity; the Executor is the function that runs when that node fires. |
| Edge | A directed connection between two nodes defining execution order. | Not a data pipe carrying values by itself — in this codebase edges only sequence nodes, outputs are referenced by id per settings.ts. |
| Executor | The function registered in node-executors.ts that performs a node's work when a run reaches it. | Not the manifest entry — the manifest describes the node for the UI; the executor is the runtime logic. |
| Manifest entry | The settings.ts record for a node kind: its label, icon, accent, input fields, and outputs. | Not the executor — adding a manifest entry alone does not make a node runnable; both pieces are required. |
| Run | One durable Trigger.dev execution of a workflow, with its own status and logs. | Not a Workflow, and not a single Node's execution — a Run walks the whole graph, one node firing is a step within it. |
| Canvas | The React Flow v12 editor surface where a workflow's nodes and edges are arranged. | Not the workflow list view — the canvas edits one workflow's graph, the list view manages workflow rows (rename, duplicate). |
| Logs panel | UI surface that shows a run's per-node output, including which node failed and its error text. | Not a generic failure banner — per sprint-02 item 2, a proper failure names the node id and error, not just "run failed." |
| Done-when | The observable condition that proves a backlog item is finished, stated as user-visible behavior. | Not a task list or an implementation note — done-when describes an outcome a user or test can check, not steps taken to get there. |
| Owner | The person accountable for a backlog item shipping. | Not the same as "who wrote the code" if work changes hands — owner is accountable for the item start to finish. |
| Blocker | Something stopping today's planned work from proceeding, stated in standup. | Not a risk — a Risk is a thing that could go wrong later; a Blocker is already stopping progress right now. |
| Risk | A known way a backlog item or sprint could go wrong, named in advance. | Not a Blocker — a Risk has not happened yet and may never happen; it is tracked so it is not a surprise if it does. |
| Tenancy boundary | The guarantee that a query scoped to one Organization's id can never return or modify another Organization's rows. | Not the same as auth/login — a user can be authenticated and still hit a tenancy bug if a query is missing its orgId filter. |


### less -F sprint-02.md (paged)

`-F` = quit-if-fits-on-one-screen, so a real terminal would have paged it;
sprint-02.md is short enough to fit one screen so less exits immediately and
prints the same as cat here. Output (full file):

```
# Sprint 02

## Why

Shared vocabulary needed so first entity in system gets named right, once,
instead of three different names drifting across code, docs, and standup.

## Process change from Week 1 retro

Branch each new day from previous day's exact pushed tip — run
`git log --oneline -1 <previous day's branch>` to confirm base, then
`git checkout -b week_2_day_N <that commit>`. Never branch off whatever is
checked out. This is what W1 lost `docs/ticket-level2.md` and four days of
history to.

## Backlog

| # | Item | Done-when | Owner | Order | Risk |
|---|------|-----------|-------|-------|------|
| 1 | First node type ships end to end | Node appears in canvas, has executor registered in `node-executors.ts`, manifest entry in `settings.ts`, runs without error | solo | 1 | React Flow v12 API differs from training data, easy to write v11 code that silently misbehaves |
| 2 | Failed run names failing node and error in logs panel | User triggers run with bad node config, logs panel shows node id and error text, not a generic failure banner | solo | 2 | Error surfaces in Trigger.dev worker logs but never reaches the UI panel |
| 3 | Rename workflow from list, org-scoped | User renames workflow from list view, name persists on reload, other orgs cannot see or rename it | solo | 3 | Missing orgId scope on the update query lets one org rename another org's workflow |
| 4 | Duplicate workflow copies graph to new row | User clicks duplicate, new row appears with copied node graph, original untouched | solo | 4 | Shallow copy leaves duplicate referencing same node ids, edits to one corrupt the other |
| 5 | Tenancy boundary test | Test in `data.ts` asserts a query scoped to org A returns zero rows for org B | solo | 5 | Test passes locally against seed data that happens to be org-unique, hides a missing WHERE clause |

## Owner

Solo across all items.

## Risks (sprint-wide)

- No second reviewer; wrong assumptions ship unchecked.
- First sprint with real velocity data from Week 1, but only one data point.
- Trigger.dev worker requires second terminal (`npx trigger.dev@latest dev`) —
  forgetting it makes runs hang, not fail loudly.
(END)

### head -n 8 sprint-02.md (top preview)

```
# Sprint 02

## Why

Shared vocabulary needed so first entity in system gets named right, once,
instead of three different names drifting across code, docs, and standup.

## Process change from Week 1 retro

```

### tail -n 8 sprint-02.md (bottom preview)

```
Solo across all items.

## Risks (sprint-wide)

- No second reviewer; wrong assumptions ship unchecked.
- First sprint with real velocity data from Week 1, but only one data point.
- Trigger.dev worker requires second terminal (`npx trigger.dev@latest dev`) —
  forgetting it makes runs hang, not fail loudly.


## head -n 8 sprint-02.md

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/Status-repo/docs/Week_2 (week_2_day_1)
$ head -n 8 sprint-02.md
# Sprint 02

## Why

Shared vocabulary needed so first entity in system gets named right, once,
instead of three different names drifting across code, docs, and standup.

## Process change from Week 1 retro

## tail -n 8 sprint-02.md

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/Status-repo/docs/Week_2 (week_2_day_1)
$ tail -n 8 sprint-02.md
Solo across all items.

## Risks (sprint-wide)

- No second reviewer; wrong assumptions ship unchecked.
- First sprint with real velocity data from Week 1, but only one data point.
- Trigger.dev worker requires second terminal (`npx trigger.dev@latest dev`) —
  forgetting it makes runs hang, not fail loudly.

## W2D2 DO 5

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/Status-repo (week_2_day_2)
$ cd docs

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/Status-repo/docs (week_2_day_2)
$ mkdir TEST

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/Status-repo/docs (week_2_day_2)
$ cd

robba@Harshavardhan MINGW64 ~
$ cd ~/OneDrive/Desktop/Status/Status-repo

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/Status-repo (week_2_day_2)
$ mv docs/pr-w2-entity.md "docs/Week_2/pr-w2-entity.md"

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/Status-repo (week_2_day_2)
$ cd docs

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/Status-repo/docs (week_2_day_2)
$ cd week_2

robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/Status-repo/docs/week_2 (week_2_day_2)
$ ls -l
total 29
-rw-r--r-- 1 robba 197609 1531 Sep  9 11:18 entity-vs-vo.md
-rw-r--r-- 1 robba 197609 3334 Sep  8 16:31 glossary.md
-rw-r--r-- 1 robba 197609 7509 Sep  8 16:31 linux-w2.md
-rw-r--r-- 1 robba 197609 2312 Sep  9 11:23 pr-w2-entity.md
-rw-r--r-- 1 robba 197609 2205 Sep  8 16:31 sprint-02.md
-rw-r--r-- 1 robba 197609 2345 Sep  8 17:06 standup-w2.md
-rw-r--r-- 1 robba 197609   32 Sep  8 16:31 status-w2.md

## W2D3 — run the Workflow entry point from the shell

No wrapper script — ran the npm script directly from Git Bash, so chmod +x
does not apply here (nothing to mark executable, `npm run` invokes node/tsx
itself).

```
robba@Harshavardhan MINGW64 ~/OneDrive/Desktop/Status/Status-repo/docs/week_2 (week_2_day_3)
$ npm run run:workflow

> web-base@0.0.1 run:workflow
> tsx scripts/print-workflow.ts

Workflow name: Workflow
Workflow identity (id): 6b749d6c-4a86-458a-b205-25501dc60fed
Workflow attribute (orgId): Organization
```
