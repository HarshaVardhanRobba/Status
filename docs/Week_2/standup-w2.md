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
