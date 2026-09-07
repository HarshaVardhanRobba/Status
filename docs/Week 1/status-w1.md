# Status update — Week 1

## What shipped

- **Project setup.** The codebase (a tool for building automated
  workflows — think "if this happens, do that" chains that can drive a
  web browser) is cloned, documented, and installable with one command.
- **One small, real change shipped end to end.** A one-line documentation
  fix went through a branch, a commit, and a real pull request (a
  request to merge a change into the main codebase, reviewed before it
  lands) on GitHub — proving the whole ship-a-change process works.
- **A practice bug ticket, written and worked.** A small, deliberately
  introduced bug in one file was scoped into a ticket, tests were run
  against it, and the fix was documented (commit message, explanation,
  test plan) ready to ship.
- **Full audit of the week.** Every day's checklist was checked against
  what was actually committed, not just what was planned — see
  `docs/sprint-01.md` for the item-by-item breakdown.

## What is blocked / not done

- **The practice bug fix itself is not yet a real pull request.** The
  explanation and test plan are written, but the one-line code fix
  still needs to be committed on a proper branch and opened as an
  actual PR on GitHub. Not blocked on anything external — just the next
  action.
- **Four of six sprint backlog items were not started** (renaming a
  workflow, duplicating a workflow, a new "wait" node type, and a test
  for the multi-tenant boundary — the rule that one customer's data can
  never leak into another's). None were blocked; the week's time went
  to setup and the one practice ticket instead.
- **One branch was cut from the wrong starting point,** meaning a day's
  worth of documentation is missing from a later day's work. Being
  fixed as part of next week's process change (see below).

## Next ticket, Week 2 Day 1

Land the practice bug fix for real: commit the one-line code change on
its own branch, push it, and open an actual GitHub pull request against
this week's work — closing out the loop that was rehearsed in
`docs/pr-002.md` but never carried out for real.

## Process change carried into Week 2

Starting Monday, every new day's branch is cut from the exact commit the
previous day's branch actually ended on (checked with a git log command
before branching), instead of from whatever happened to be checked out.
This week, branching from the wrong point twice caused documentation
from one day to go missing from the next.
