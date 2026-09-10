# Bounded Context: Workflow Builder

Per docs/Week_2/glossary.md, the domain is a multi-tenant workflow builder
(Next.js + React Flow canvas + Trigger.dev runs). This is the one bounded
context the project has today.

## Inside this context

Everything a single Organization does to design and execute workflows:

- Organization — the tenant boundary every query is scoped by.
- Workflow — the org-owned graph of nodes and edges, built in the canvas.
- Node, Edge — the graph entities that make up a Workflow.
- Executor, Manifest entry — the runtime logic and UI description behind
  each node kind.
- Run — one durable Trigger.dev execution of a Workflow.
- Canvas, Logs panel — the UI surfaces for editing a Workflow and watching
  a Run.

In short: authoring a workflow, running it, and seeing what happened.

## Outside this context

- Payroll, invoicing, or any money-movement logic. Nothing here computes
  what anyone is paid or billed.
- The marketing site (landing pages, pricing page, public docs site).
  Different audience, different lifecycle, no shared entities.
- Identity and auth internals (Clerk). This context consumes a User id
  and Organization id; it does not own sign-in, sessions, or SSO.
- Anything not named in docs/Week_2/glossary.md. If a term is not in the
  glossary, it is not yet a citizen of this bounded context.

## Second bounded context

A second bounded context (candidate: billing/reporting, split out once it
has its own lifecycle and stops sharing the Organization/Workflow model
1:1) is deferred to Week 8, if it happens at all. Nothing in this doc
should be read as committing to that split.
