# PR: Workflow entity naming + entity-vs-vo doc

Scope: one entity, matching glossary casing, plus the doc explaining why it
is an entity. No PR opened (no remote push for this branch yet) — this file
stands in per #74.

## Commit `f75c6f6` — W2D2 - do 2

Rename the exported Drizzle-derived type from lowercase `workflow` to
`Workflow`, matching the glossary term casing. Identity field (`id`) was
already explicit on the table; this only fixes the type name and its one
consumer.

```diff
diff --git a/lib/db/schema.ts b/lib/db/schema.ts
index dee4103..c6cd552 100644
--- a/lib/db/schema.ts
+++ b/lib/db/schema.ts
@@ -19,4 +19,4 @@ export const workflows = pgTable("workflows", {
   updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
 })
 
-export type workflow = typeof workflows.$inferSelect
+export type Workflow = typeof workflows.$inferSelect
diff --git a/workflows/components/workflow-navigation.tsx b/workflows/components/workflow-navigation.tsx
index 25ae67e..0573712 100644
--- a/workflows/components/workflow-navigation.tsx
+++ b/workflows/components/workflow-navigation.tsx
@@ -21,10 +21,10 @@ import {
   SidebarSeparator,
   useSidebar,
 } from "@/components/ui/sidebar"
-import type { workflow } from "@/lib/db/schema"
+import type { Workflow } from "@/lib/db/schema"
 import { generateSlug } from "@/workflows/nameslugs"
 
-function WorkflowMenu({ workflows }: { workflows: workflow[] }) {
+function WorkflowMenu({ workflows }: { workflows: Workflow[] }) {
   const pathname = usePathname()
 
   return (
@@ -50,7 +50,7 @@ export function WorkflowNavigation({
   workflows,
   createWorkflowAction,
 }: {
-  workflows: workflow[]
+  workflows: Workflow[]
   createWorkflowAction: (name: string) => Promise<void>
 }) {
   const { state } = useSidebar()
```

## Commit `401eb97` — W1D2 - do 3

Adds `docs/Week_2/entity-vs-vo.md`: why Workflow is an entity (stable `id`
survives rename), names `WorkflowGraph` as the value object to add later,
built only from existing glossary terms (Node, Edge).

## Test plan

- `npx tsc --noEmit` — only pre-existing unrelated error in
  `workflows/nodes/node-executors.ts` (`agent` key), untouched by this
  change.
- Grepped whole repo for the `workflow` type import before renaming; only
  one consumer, updated in the same commit.
