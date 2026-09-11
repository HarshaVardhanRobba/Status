# Status update — Week 2

## Terminology named

Agreed a shared vocabulary for the product (`docs/Week_2/glossary.md`) so
the app, the documentation, and daily updates all use the same words for
the same things — 14 terms in all, covering the core ones customers will
recognize: Organization (a customer account), Workflow (the thing a
customer builds), Run (one execution of a Workflow), and Node/Edge (the
steps and connections inside a Workflow and the canvas customers build
them on). This vocabulary has not yet been confirmed with the advisor in
conversation — see Blocked below.

## What is actually running

- A first real piece of the product, the Workflow entity, is built in
  code and matches the agreed vocabulary exactly (name, casing, the fact
  that it belongs to one Organization).
- A runnable command (`npm run run:workflow`) builds a Workflow and
  prints its name, its identity, and its Organization — confirms the
  entity works end to end, not just on paper. Documented in the README
  so anyone else can run it themselves.
- The bounded context for this work is named and written down
  (`docs/bounded-context.md`): what is in scope (building, running, and
  reviewing Workflows) and explicitly out of scope (billing, the
  marketing site, sign-in/authentication internals).

## What is currently blocked

- The five features planned for this sprint — a working node in the
  canvas, clear error messages on a failed run, renaming a Workflow,
  duplicating a Workflow, and a test proving one customer cannot see
  another customer's data — were not started this week. This week's time
  went to naming the vocabulary and building the one entity above
  instead. None of the planned features are done yet.
- Confirming the vocabulary with the advisor face to face has not
  happened, four days running now. Until that conversation, the names
  above are agreed on paper only, not confirmed by a second person.
- Deployment target (which cloud platform this runs on by Week 10) is
  still undecided — leaning toward a managed hosting platform, no
  commitment yet.
