# Entity vs value object: Workflow

## Why Workflow is an entity

Workflow has an identity field, `id` (`uuid().primaryKey().defaultRandom()` in
`lib/db/schema.ts`), that is stable and independent of its other fields. Two
Workflow rows with the exact same `name`, `orgId`, and `graph` are still two
different Workflows if their `id` differs — per the glossary, a Workflow is
"one row in the workflows table," and a row is picked out by its id, not by
what its columns currently hold. Renaming a Workflow (sprint-02 item 3) does
not create a new Workflow; it mutates the same one, tracked by the same id
across the change. That persistence of identity through mutation is exactly
what a value object does not have.

## The value object to add later: WorkflowGraph

`WorkflowGraph` (`{ nodes: StepNodeType[]; edges: Edge[] }`, already typed at
the top of `lib/db/schema.ts`) is the value object. It is built entirely from
existing glossary terms — a Workflow graph is made of Nodes and Edges — and
has no identity field of its own. It lives inside a Workflow as the `graph`
jsonb column, and equality is structural: two graphs with the same Nodes and
Edges are the same graph, no id needed to tell them apart. When Duplicate
Workflow (sprint-02 item 4) copies a graph to a new row, it is exactly this
value-object property that must hold: the copy is a new value, not a
reference to the same identity, which is why the sprint-02 risk on that item
warns about a shallow copy leaving the duplicate referencing the same Node
ids.
