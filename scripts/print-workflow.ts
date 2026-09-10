import { randomUUID } from "node:crypto"

import type { Workflow } from "@/lib/db/schema"

const now = new Date()

const workflow: Workflow = {
  id: randomUUID(),
  orgId: "Organization",
  name: "Workflow",
  graph: { nodes: [], edges: [] },
  createdAt: now,
  updatedAt: now,
}

console.log(`Workflow name: ${workflow.name}`)
console.log(`Workflow identity (id): ${workflow.id}`)
console.log(`Workflow attribute (orgId): ${workflow.orgId}`)
