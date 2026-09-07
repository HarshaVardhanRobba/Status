# Retro — Week 1

## Keep

- Standup pattern (Yesterday/Today/Blocker), same three lines every day,
  appended not rewritten. Cheap, made the audit in `docs/sprint-01.md`
  possible to write at all.
- Real PR/branch loop for Level 1, no docs-fallback shortcut, even
  though the fallback existed. Forced the actual GitHub loop early.
- Writing `docs/hand-check-level2.md` / `docs/pr-002.md` even when a
  real test suite or a real PR could have replaced them — gave a
  second, human-readable trail alongside the git history.

## Drop

- Branching a new day off whatever commit happened to be checked out,
  instead of off the previous day's finished branch. Bit twice this
  week: `week_1_day_4` was cut before W1D3's Do 4/Do 5 landed (lost
  `docs/ticket-level2.md`), and `week_1_day_5` was cut off a commit from
  before Week 1 even started (lost W1D1-D4 entirely).
- Piping command output into the wrong file. W1D2 Do 5 pasted ~280
  lines of `README.md` into `docs/linux-w1.md` instead of `git diff`/
  `git show` output — sat there undetected until this week's audit.
- Treating a docs-fallback (`pr-002.md`, `pr-002.diff`) as done-when for
  a Level 2 PR that has a real GitHub remote. The fallback is for when
  no host exists; here it became a stand-in for work not yet done for
  real (the `getByPath` fix is still uncommitted).

## Try

- Before starting a new day's branch, run
  `git log --oneline -1 <previous day's branch>` and branch from that
  exact commit, not from whatever `git checkout -b` happens to default
  to.

## One concrete change for Monday (W2D1)

**Always branch a new day with
`git checkout -b week_2_day_N origin/week_1_day_4` (or whatever the
prior day's pushed tip is) — never `git checkout -b` off an unchecked
current HEAD.** Prevents the two branch-base mistakes from this week
from repeating; costs one extra `git log --oneline -1` to confirm the
base before cutting the branch.
