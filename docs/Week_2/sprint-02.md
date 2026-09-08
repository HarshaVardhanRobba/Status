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
