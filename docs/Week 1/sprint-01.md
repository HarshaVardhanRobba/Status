## Stack
Language: TypeScript. Framework: Next.js 16 (App Router) with React 19, web app. Test runner: Vitest. How to run: npm run dev for the Next.js server, plus npx trigger.dev@latest dev in a second terminal for background workflow runs.

## domain
A multi-tenant workflow builder — each organization owns a set of workflows; a workflow is built visually with a node editor, and runs execute as background tasks that can drive a browser.

## do-5
sprint proves i can ship a change end to end and plan code with real stack

## d0-7
vscode, claude code extension, Eslint, tailwind, 


## Task-by-task explanation

### 1 — Standup,
File: `docs/standup-w1d1.md` (in Web-base repo).
Yesterday = "program start" (day one, nothing prior). Today = clone repo, name stack/domain, write backlog, ship Level 1 through branch + PR. Blocker = none; git identity was unset, fixed repo-local.

### 2 — Name stack
Top of this file, Stack section above.
Language TypeScript. Web framework Next.js 16 App Router + React 19 (web app, not CLI). Test runner Vitest. Run = two terminals: `npm run dev`, `npx trigger.dev@latest dev`. Second one not optional — runs hang pending without it. Pulled from repo package.json and README, not guessed.

### 3 — Name domain
Domain section above.
Multi-tenant workflow builder. Org owns workflows; workflow built in node editor; run executes as durable background task driving cloud browser, progress streams to UI. Core constraint: every query scoped by orgId, no org means redirect to /choose-organization. Fallback personal-delivery-system domain not used — real product domain exists.

### 4 — Clone repo
`git clone https://github.com/HarshaVardhanRobba/Web-base.git` into `what/Web-base`.
Repo exists, private, no fallback local init needed. Treated production-like: no direct commit to main, everything through branch + PR.

### 5 — Write sprint-01.md (in Web-base repo)
Why it matters: sprint proves loop end to end — access, stack named, plan readable by someone else, change shipped branch-to-PR. Later sprints assume loop works.
Backlog, 6 items, "As X I can Y so that Z" form, each with done-when + hour estimate:
1. Sprint docs + Level 1 loop — 2h
2. Failed run names failing node and error in logs panel — 6h
3. Rename workflow from list, org-scoped — 3h
4. Duplicate workflow, copies graph to new row — 4h
5. Wait node — executor + registry + parity.test.ts passes — 5h
6. Test pinning tenancy boundary in data.ts — 4h
Owner: solo. Order + rationale written out. Risks: five external services block startup, trigger.config.ts ships foreign project ref, forgotten second terminal, first-sprint estimates have no velocity history, solo owner means no second reviewer.

### 6 — Branch, Level 1 change, commit, PR
Branch `sprint-01/w1d1-docs` cut from main.
Level 1 change = one line in README Layout block, adding `docs/` beside drizzle/, designs/, worklog/. Level 1 because it only documents a directory that now exists — no source, no config, no dependency touched, build and runtime cannot shift.
Commit `94a7a0d`, 5 files, 309 insertions.
PR https://github.com/HarshaVardhanRobba/Web-base/pull/1 against main, open. Remote host exists, so real PR — docs/pr-001.md fallback skipped.

### 7 — docs/ide.md (in Web-base repo)
Machine: Windows 11 Home, PowerShell + Git Bash, git 2.43.0, gh 2.74.2. Editor VS Code + Claude Code extension. Extensions read live from `code --list-extensions`, grouped: used-by-this-stack (ESLint, Prettier, Tailwind, PostCSS, Error Lens, Prisma), API/debug (REST Client, Thunder Client, JWT decoder, Quokka), design/general, installed-for-other-projects (Java, Python, Go) marked unused here.
Secrets: none in repo. Keys stay in gitignored .env.local; Trigger.dev CLI creds outside repo; gh token in OS keyring.

### 8 — Linux commands
`docs/linux-w1.md` (in Web-base repo). Real output pasted, not typed from memory, ran in Git Bash so paths show /c/.
pwd at what/, ls shows three entries, cd Web-base, pwd + ls again, then git status (on sprint-01/w1d1-docs, README modified, docs/ untracked) and git log -1 --oneline (a850cf3 updated readme). Ran before the commit, so log tip still points where main points.
Doc explains reading: ls hides dotfiles, node_modules/ absent (no npm install yet), git status answers three questions at once, docs/ collapses to one line because nothing inside tracked yet.

### 9 — New repository
Split into its own repo: `HarshaVardhanRobba/Status`, path `Week 1 D 1/Status-repo`.
Files copied from Web-base working tree, fresh git history, no submodule or
remote link back to the original repo, which stays untouched on its own branch
sprint-01/w1d1-docs. Reason: keep this track separate from the Web-base repo and
its PR flow. Initial commit 5095882, pushed to origin/main.

### 10 — Live-explain script
Changed one line in README Layout block, adding docs/ next to drizzle/ and worklog/. Level 1 because it documents a directory that now exists — no source, no config, no dependency touched, build and runtime cannot change. Stack is TypeScript on Next.js 16 App Router with React 19, Clerk for auth and organizations, Neon Postgres through Drizzle, Trigger.dev v4 for background runs, Browserbase for the browser, React Flow for canvas, Vitest for tests. Runs as two processes: npm run dev, and npx trigger.dev@latest dev in second terminal.

## W1D5 — Daily checklist audit (W1D1-W1D4)

Method: checked each day's checklist against real commits on
`origin/week_1_day_1` through `origin/week_1_day_4`, not just current
tree. Branches cut at different points during the week, so some later-day
work is missing from earlier branches' descendants — flagged per item
where that bites.

### W1D1 — Sprint 01 setup

**Do 1 — Standup, yesterday=program start.** Met. Commit `ac5079e`.
Day 1 entry says exactly "program start," matches spec.

**Do 2 — Stack named at top of sprint-01.md.** Met. `## Stack` section,
top of file: language, framework, test runner, run command, all present.

**Do 3 — Domain documented, generic fallback only if nothing else
applies.** Met. `## domain` section names the real product. Fallback
domain not used since real one exists — correct call per spec.

**Do 4 — Clone real repo or init local one, no fake remote URL.** Met.
Real `git clone` of `HarshaVardhanRobba/Web-base`, a private repo that
actually exists. No invented URL anywhere.

**Do 5 — Backlog, 3-7 items, "As X I can Y so that Z" form, each with
done-when + estimate, plus owner/order/risk notes.** Partial. 6 items
present, each with an hour estimate; owner (solo), order/rationale, and
risks are all written out. Gap: items are short outcome phrases ("Wait
node — executor + registry + parity.test.ts passes — 5h"), not literal
"As X I can Y so that Z" user stories, and there's no separate done-when
line beyond the phrase itself.

**Do 6 — One Level 1 change: branch, commit, explainable message, PR.**
Met. Branch `sprint-01/w1d1-docs`, commit `94a7a0d`, PR
`HarshaVardhanRobba/Web-base#1` — real PR, done before the Status repo.

**Do 7 — docs/ide.md: IDE, extensions, no secrets in repo.** Met.
Machine, editor, and extensions all documented; secrets confirmed to
live only in gitignored `.env.local` plus outside-repo creds.

**Do 8 — pwd/ls/cd/git status/git log -1, real output pasted.** Met.
Commit `c02ccf4` has all five, run in Git Bash with real `/c/` paths, not
typed from memory.

### W1D2 — Reviewing a slice, not the whole repo

**Do 1 — Standup appended.** Met. Commit `a530c02`.

**Do 2 — Finish Day 1 PR review comments before new work, no
force-push.** Met, trivially — Day 1 PR had zero comments to address.
Checked and logged rather than silently skipped.

**Do 3 — docs/slice-map.md, max 10 lines: entry point, file touched,
not-touch list, Level 2 neighbor.** Met. 11 lines counting blanks, all
four required elements present.

**Do 4 — Formatter/linter/test-runner notes added to docs/ide.md.** Met.
Commit `a530c02` lands the first pass; expanded further on W1D3.

**Do 5 — ls -la, git diff, git show appended to linux-w1.md.** Missed.
Commit `d62f591` ("W1D2 - Do 5 done") does add a real `ls -la` output —
but there's no `git diff` and no `git show` anywhere in the file.
Instead, roughly 280 lines of `README.md`'s own content (the "How it
fits together" / "Adding a workflow node" sections) got pasted into
`docs/linux-w1.md` by mistake, most likely the wrong command piped into
the wrong file.

### W1D3 — Getting Level 1 merge-ready, defining Level 2

**Do 1 — Standup, three lines.** Met, with a small slip: the Day 3 entry
(commit `f042092`) is dated 2026-09-01, same as Day 1 and Day 2 — reads
like a copy-paste date, not a missed standup.

**Do 2 — Level 1 PR merged, or merge-ready (advisor would merge without
more discussion).** Unverifiable from git log alone. PR lives on GitHub
in the Web-base repo, outside this repo's history. Item 6 above says it
was "open" as of the Day 1 writeup; nothing later in this repo confirms
a merge or a merge-ready review pass. Check with
`gh pr view 1 --repo HarshaVardhanRobba/Web-base`.

**Do 3 — One-command install (e.g. make setup), documented in README and
docs/ide.md.** Met. Commit `f042092` adds `.env.example`, a
`npm run setup` script in `package.json`, and documents both in
`README.md` and `docs/ide.md`.

**Do 4 — docs/ticket-level2.md: goal, non-goal, done-when, approach, in
own words.** Met, with a branch-history gap: commit `fa00269` on
`origin/week_1_day_3` has all four sections written out. But
`week_1_day_4` was branched from an earlier point on `week_1_day_3`
(`b023fa9`) — before this commit and before Do 5's commit landed — so
`docs/ticket-level2.md` is absent from `week_1_day_4` and everything
built on top of it.

**Do 5 — mkdir, cp, mv, chmod practice, explicitly not chmod 777.**
Mostly met. Commit `f4bffad` logs `cp README.md README.md.bak`, moves it
into `docs/`, and runs `chmod 644` — correct call, not 777. Gap: no
`mkdir` command anywhere in the log, so one of the four commands is
missing.

### W1D4 — Actually building Level 2

**Do 1 — Standup, three lines.** Met. Commit `789ef70`.

**Do 2 — Smallest possible change matching Wednesday's scope, one idea,
no unrelated refactor.** Met, with a caveat: what landed (commit
`1a452cd`) is a different one-line bug in the same function
(`getByPath`'s `||` flipped to `&&`), not the ticket's original
`stringify()` bug. That swap happened at explicit request, to avoid
practicing the exact same bug twice. Still single-file, single-operator,
easy to explain — satisfies the shape of the instruction even though
it's a reintroduced bug rather than a fix.

**Do 3 — Run existing tests, or document manual steps + results in
docs/hand-check-level2.md.** Met. Commit `645e90c` adds both:
`docs/hand-check-level2.md` (manual steps for the ticket) and a new
`workflows/tasks/run-workflow.test.ts`. Both that file and
`workflows/lib/graphvalidator.test.ts` were run with `npx vitest run` and
passed (`npm install` was needed first — `node_modules` was missing).

**Do 4 — Open the Level 2 PR, or a docs/pr-002.md equivalent, with an
explainable commit message.** Met for the documentation half: commit
`6f1b5db` has `docs/pr-002.md` and `docs/pr-002.diff` — the fix
explanation, commit message, and test plan. Flag: the actual code fix
(`getByPath`'s guard back to `||`) is not committed anywhere in this
chain. It was applied straight to the working tree later, outside a
tracked commit. The real-PR steps written in `pr-002.md` still need to
be run for real: branch off `week_1_day_4`, commit the one-line fix,
push, open the PR.

**Do 5 — git status, git diff, git log, cat a created test file, all
appended to linux-w1.md.** Met. Commit `4f18ad0` ("W1D4 - do 5") has all
four.

### Rollup

| Day | Met | Partial / caveat | Missed | Unverifiable |
|-----|-----|-------------------|--------|---------------|
| W1D1 | 7 | 1 (Do 5, backlog format) | 0 | 0 |
| W1D2 | 4 | 0 | 1 (Do 5, git diff/show) | 0 |
| W1D3 | 3 | 2 (Do 1 date, Do 5 mkdir) | 0 | 1 (Do 2, PR merge state) |
| W1D4 | 3 | 2 (Do 2 different bug, Do 4 fix uncommitted) | 0 | 0 |

### Carry forward to next week

- `week_1_day_4` is missing `docs/ticket-level2.md` — branch was cut
  before W1D3's Do 4 and Do 5 commits landed. Worth merging or rebasing
  before building further on that branch.
- W1D2's Do 5 left stray `README.md` content inside `docs/linux-w1.md`
  (~280 lines) — clean up before that file grows any more.
- The real Level 2 fix commit (`getByPath` back to `||`) still needs to
  land on a proper branch and go through an actual PR — the docs
  (`pr-002.md`/`pr-002.diff`) are a rehearsal, not the real thing.
