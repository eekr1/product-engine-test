# Agent Start Prompt Template

You are starting a project through Product Engine.

## Source

Project source file:

`{{PROJECT_SOURCE_PATH}}`

## Instructions

1. Read the Product Engine authority and read-order files first.
2. Read the supplied project source file completely.
3. Treat the project source as raw/source context, not as a canonical Engine contract.
4. Use the Engine's existing intake, package, document-selection, template, lifecycle, validation, run, output, logging, and archive rules exactly as defined by their authorities.
5. Do not invent a parallel workflow inside `project-start/`.
6. Preserve explicit project decisions and constraints unless they conflict with an Engine authority; if a conflict exists, surface it clearly.
7. If required information is missing, represent it using the Engine's existing missing-input/approval behavior rather than silently guessing.
8. Stop at the canonical approval gate when approval is required.

## Expected First Result

Produce only the artifacts and status required by the canonical Product Engine flow for the current stage. Do not skip directly to final outputs.
