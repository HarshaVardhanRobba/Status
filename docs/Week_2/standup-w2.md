# Standup - Week 2, Day 1 (2026-09-07)

- **Yesterday:** Audited the whole of Week 1 against real commits (docs/sprint-01.md), wrote the retro (docs/retro-w1.md) and sponsor-readable status (docs/status-w1.md), redid the Day 1 git loop unaided as a red-flag check (PR #12, passed clean), researched the four Anthropic certifications (docs/cert-anthropic-four.md), and logged git log --oneline into docs/linux-w1.md. Left two things undone: the Level 2 PR was never merged or marked merge-ready, since the real code fix for the interpolate.ts bug still is not committed anywhere.
- **Today:** Land the Level 2 fix for real — branch off week_1_day_4, commit the one-line getByPath fix, push, open the PR — then apply the retro's one process change (branch each new day from the previous day's exact pushed tip, confirmed with git log --oneline -1, not from whatever is checked out).
- **Blocker:** None yet.

# Standup - Week 2, Day 2 (2026-09-08)

- **Yesterday:** Wrote the standup (docs/Week_2/standup-w2.md), the sprint
  plan with Why + retro process change + 5-item backlog
  (docs/Week_2/sprint-02.md), a 14-term glossary for the workflow-builder
  domain with a "not this" line per term (docs/Week_2/glossary.md), and
  logged real cat/less/head/tail output with no IDE
  (docs/Week_2/linux-w2.md). Do 4 (advisor and student saying the same
  three glossary terms out loud together) never happened — no artifact for
  a conversation, carries forward.
- **Today:** Log hours before moving any ticket to Code Review/QA/Testing/Done
  plus a short audio explanation of key terms (#71); write the first entity
  from the glossary into real code, file name matching the glossary term,
  identity field explicit (#73); write docs/entity-vs-vo.md explaining why
  that type is an entity not a value object, using only existing glossary
  terms, naming one value object to add later (#72); open a small PR scoped
  to just that one entity, or docs/pr-w2-entity.md if a PR is not feasible
  (#74); practice mkdir/mv/ls -l tied to the entity file, notes appended to
  docs/linux-w2.md (#75).
- **Blocker:** Do 4 from W2D1 still open — glossary term alignment with the
  advisor has not happened yet, so the entity's name in #73 is not yet
  confirmed against a second person, just against the glossary doc alone.

# Standup - Week 2, Day 3 (2026-09-09)

- **Yesterday:** Renamed the Workflow entity type to match glossary casing
  (`workflow` -> `Workflow`, `lib/db/schema.ts`, identity field `id` already
  explicit) and fixed its one consumer (#73); wrote
  docs/Week_2/entity-vs-vo.md explaining Workflow is an entity because its
  `id` survives a rename, and naming WorkflowGraph as the value object to
  add later, built only from existing glossary terms Node and Edge (#72);
  no PR opened since the branch is not pushed, wrote
  docs/Week_2/pr-w2-entity.md instead with the full diff and test plan
  (#74); ran mkdir/mv/ls -l for real in Git Bash — moved the misplaced
  pr-w2-entity.md into docs/Week_2/, logged the ls -l permission columns,
  appended to docs/Week_2/linux-w2.md (#75). Do 4 from W2D1 (advisor and
  student saying the same glossary terms out loud) still has not happened.
- **Today:** Build a runnable entry point (CLI command or hello page) that
  constructs a Workflow and prints at least three glossary terms for it —
  name, identity, one attribute — no hard-coded strings besides real
  glossary words; document how to run it in the README, clear enough
  for a second person with no other help; open a PR, or
  docs/pr-w2-run.md if not, with the actual program output pasted into the
  description; run the program from the shell directly, not the IDE
  run button, and only chmod +x a wrapper script if the shebang line can be
  explained, output appended to docs/linux-w2.md.
- **Blocker:** Do 4 from W2D1 still open, now two days carried — needs a
  real conversation with the advisor, not another doc, before it can close.

# Standup - Week 2, Day 4 (2026-09-10)

- **Yesterday:** Built the runnable entry point,
  scripts/print-workflow.ts, constructing a Workflow entity typed off the
  real Drizzle schema and printing three glossary terms — name, identity
  (id), one attribute (orgId) — with no hardcoded strings besides the
  glossary words themselves, wired up as `npm run run:workflow` (#81);
  documented how to run it in the README Scripts section, command plus
  no-setup-needed note plus expected output (#82); no PR opened, wrote
  docs/Week_2/pr-w2-run.md instead with both diffs and the actual pasted
  program output (#83); ran the script from Git Bash directly rather than
  an IDE run button, no wrapper script so chmod +x did not apply, noted
  why, output appended to docs/Week_2/linux-w2.md (#84). Do 4 from W2D1
  still has not happened.
- **Today:** Write docs/bounded-context.md naming the bounded context
  against the project glossary, listing what is inside it and explicitly
  what is outside it (e.g. payroll, marketing site), noting a second
  bounded context is deferred to Week 8 if it happens at all; write
  docs/cloud-concepts-w2.md defining IaaS, PaaS, SaaS, region, account, and
  IAM identity in own words, plus which deployment model is expected by
  Week 10 or "undecided," without opening three cloud consoles just to
  write it; hands-on chmod/chown practice on a scratch file in /tmp,
  explaining why repo files are typically 644/755 not 777, looking into
  umask if possible, results appended to docs/linux-w2.md.
- **Blocker:** Do 4 from W2D1 still open, now three days carried — needs a
  real conversation with the advisor, not another doc, before it can close.
