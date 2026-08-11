# Start From Raw Brief

Use this prompt when the only available input is an unstructured idea, note, client request, message, or short project description.

## Input

Provide the raw brief exactly as received whenever possible.

## Agent Instruction

Read the Product Engine authority/read-order files first.

Then transform the raw brief only as far as needed to enter the canonical Product Engine intake flow.

Rules:

- separate explicit facts from assumptions,
- do not invent missing product or technical decisions,
- preserve meaningful wording and constraints from the source,
- identify material unknowns,
- use the Engine's existing missing-input and approval behavior,
- do not jump from a raw brief directly to final generated documentation,
- do not create a competing intake schema inside `project-start/`.

The goal is to hand the brief into Product Engine cleanly, not to replace Product Engine reasoning or authority.
