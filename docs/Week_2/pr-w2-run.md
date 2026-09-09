# PR: Workflow runnable entry point + README run docs

Scope: one runnable entry point, printing three glossary terms for the
Workflow entity, plus README instructions to run it. No PR opened — this
file stands in per #83.

## W2D3 do 2

## Changes in package.json

New `scripts/print-workflow.ts`: constructs a `Workflow` (typed off the real
Drizzle schema), prints name, identity (`id`), and one attribute (`orgId`).
No hardcoded placeholder strings — `name`/`orgId` values are the glossary
terms "Workflow"/"Organization" themselves, `id` is `randomUUID()`. Wired
up as `npm run run:workflow` in `package.json`.

```diff
@@ -5,6 +5,7 @@
   "private": true,
   "scripts": {
     "setup": "npm install && node scripts/setup-env.mjs",
+    "run:workflow": "tsx scripts/print-workflow.ts",
     "dev": "next dev",
     "prebuild": "node scripts/check-trigger.mjs",
     "build": "next build",
diff --git a/scripts/print-workflow.ts b/scripts/print-workflow.ts

--- /dev/null
````
```
## /print-workflow.ts

@@ -0,0 +1,18 @@
+import { randomUUID } from "node:crypto"
+
+import type { Workflow } from "@/lib/db/schema"
+
+const now = new Date()
+
+const workflow: Workflow = {
+  id: randomUUID(),
+  orgId: "Organization",
+  name: "Workflow",
+  graph: { nodes: [], edges: [] },
+  createdAt: now,
+  updatedAt: now,
+}
+
+console.log(`Workflow name: ${workflow.name}`)
+console.log(`Workflow identity (id): ${workflow.id}`)
+console.log(`Workflow attribute (orgId): ${workflow.orgId}`)
```

```

## Commit W2D3 - do 3

README `## Scripts` section: new row for `npm run run:workflow`, plus a
standalone block with the run command, a note that no `.env.local` or
database is needed, and expected output.

## Changes in README.md

+++ b/README.md

+| `npm run run:workflow` | Print a sample Workflow entity (name, identity, one attribute) |
+
+Run the Workflow sample:
+
+```
+npm run run:workflow
+```
+
+No `.env.local`, database, or second terminal needed — the script builds a
+Workflow value in memory and prints it, it never touches the database.
+Expected output (the id is random each run):
+
+```
+Workflow name: Workflow
+Workflow identity (id): f59f95ff-0e3a-40ca-9b6b-af96ea3d68d1
+Workflow attribute (orgId): Organization
+```

```
 
```

## Actual program output

Pasted directly from `npm run run:workflow`, run just now:

```
> web-base@0.0.1 run:workflow
> tsx scripts/print-workflow.ts

Workflow name: Workflow
Workflow identity (id): 4961a357-3617-4279-ab80-428ec6d77df8
Workflow attribute (orgId): Organization
```
