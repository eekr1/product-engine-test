# Example Project Start Prompt

You are starting **Phase A — Intake Session** for a project through Product Engine.

## Source

Project source file:

`project-start/projects/_example/PROJECT.md`

## Session Boundary

This session exists only to produce the canonical pending `PROJECT_INPUT`, obtain explicit user approval, create the approved input, and stop.

Do not start a generation run or produce final outputs in this chat.

After approved input creation, continue in a new chat using `INPUT_START_PROMPT.md`.

## Instructions

1. Read the Product Engine authority and canonical read-order files first.
2. Read the supplied project source completely.
3. Treat the project source as raw/source context, not as a canonical Engine contract.
4. Use only the Engine authorities/templates needed for intake; do not invent a parallel workflow inside `project-start/`.
5. Preserve explicit project decisions and constraints unless they conflict with an Engine authority; surface conflicts clearly.
6. If required information is missing, use the Engine's missing-input / assumption / approval behavior rather than silently guessing.
7. Treat `demo`, `prototype`, and similar labels only as delivery-purpose/runtime-maturity context. They do not authorize new features, mock interactions, scope expansion, or reduced quality.
8. Keep current executable scope distinct from Future / Open Question / Out of Scope.
9. Stop at the canonical approval gate when approval is required.
10. Do not treat IDE/tool/plan/automatic approval as explicit user approval.
11. After explicit approval, create/update the canonical approved input and stop this session.

## Expected Result

```text
project source
→ pending PROJECT_INPUT
→ explicit user approval
→ approved PROJECT_INPUT
→ STOP / NEW CHAT
```
