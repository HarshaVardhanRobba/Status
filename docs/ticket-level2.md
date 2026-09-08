# Ticket: Fix interpolate() stringifying objects, instead of JSON and Student need to fix it

## Hierarchy
- Project: Status (workflow builder / node canvas app)
- Epic: Workflow node output interpolation
- Story: Field values in a workflow node can reference `{{ nodeId.path }}` placeholders and get the referenced node's output spliced in
- This issue: Sub-task (Level 2 — one-file bug)
- Source: Practice ticket, bug intentionally introduced for training

## Description
Goal: There is a bug somewhere in `workflows/lib/interpolate.ts`. When a
workflow field references a placeholder like `{{ open }}` that resolves to an
object or array (for example a node output like `{ url: "https://a.com" }`),
the text that gets spliced into the field is wrong — it does not look like
the JSON shape it is supposed to. Every other placeholder type (strings,
numbers, missing paths) still resolves correctly. I need to find the exact
line causing this and correct it so object/array results serialize the way
the comments in the file say they should.

Non-goal: This ticket does not touch `getByPath()`, the `placeholder` or
`segments` regexes, or any other file in the repo. The bug is scoped to a
single line inside one function in this file.

Done-when: An object or array value resolved from a placeholder is spliced
back into the field text as its JSON representation (matching what the
comments above the function describe), every other value type still behaves
the same as before, and the existing test suite in
`workflows/lib/interpolate.test.ts` passes with no changes made to the test
file.

How:
1. Open `workflows/lib/interpolate.ts` and read it top to bottom, paying
   attention to the comments — they describe the intended behavior of each
   function.
2. Open `workflows/lib/interpolate.test.ts` and read through the cases to
   understand what correct behavior looks like, especially the one about
   objects.
3. Trace the `stringify()` helper by hand against an object input and see
   where its actual behavior diverges from what the comments and tests
   expect.
4. Once I find the line responsible, fix it with the smallest possible
   change so the behavior matches the comments again.
5. Re-read the function after the fix and mentally trace it against every
   case in `interpolate.test.ts` to confirm nothing else broke.
6. Run the test file for this module and confirm all cases pass.

## Hours
- Hours:

## Acceptance criteria
- [ ] The step is done exactly as written.
- [ ] The one-file change only touches workflows/lib/interpolate.ts.
- [ ] Hours spent are logged before status changes to Code Review,
      QA/Testing, or Done.
- [ ] I can explain this ticket's key terms in my own words.

## Tests
- [ ] Verify workflows/lib/interpolate.ts now produces the correct result.
- [ ] The result is visible without anyone else doing the work.
- [ ] Hours is a number greater than 0 before moving the ticket.
- [ ] I can walk through the explanation out loud.
