# Retro — Week 2

## Keep

- Branch-per-day off the previous day's exact pushed tip
  (`git log --oneline -1 <prior branch>` then branch from that commit).
  W1's fix held all five days — no lost commits, no rebuild-from-memory
  like `week_1_day_4`/`week_1_day_5` cost last week.
- Standup pattern (Yesterday/Today/Blocker), appended daily, same three
  lines. Made this retro and the sprint-02 review possible to write from
  the log alone, no digging through commits.
- Reporting the Windows/NTFS chmod finding (do4, W2D5) instead of
  hiding it — `chmod 777`/`755` silently not sticking on this Git Bash
  is a real gotcha for anyone on Windows, worth having on record.

## Drop

- Sprint-02's actual backlog (5 items: node ships end to end, failed-run
  logs panel, rename, duplicate, tenancy test) was never touched. Every
  day's real work went to glossary/entity-naming/doc scaffolding
  instead. The 0/5 done-when gap (`docs/Week_2/sprint-02.md` Review)
  only surfaced at the W2D5 review — nothing caught the drift mid-week.
- Docs-fallback (`pr-w2-run.md`, `pr-w2-entity.md`) standing in for a
  real PR, repeatedly, across W2D2-D4. Retro-w1 flagged this exact
  pattern as a Drop last week and it kept happening this week too —
  the fallback is for when no host exists, not a routine substitute.
- Do 4 from W2D1 (advisor and student saying the same glossary terms
  out loud together) carried the entire week, four standups in a row,
  never closed. A doc cannot close it; only the actual conversation can.

## Try

- Mid-sprint checkpoint (end of day 2 or 3) that checks progress against
  the numbered backlog items specifically, not against whatever felt
  like the natural next doc to write. Would have caught the 0/5 gap by
  Wednesday instead of Friday's review.

## One concrete change for Week 3, Day 1

**Day 1 of Week 3 starts by picking one real backlog item and shipping
code against it before writing any new doc.** Docs/glossary/entity-name
work is legitimate but became the entire week's output by default —
forcing code-first on day 1 breaks that default before it repeats.
