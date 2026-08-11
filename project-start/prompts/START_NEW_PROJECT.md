# Start New Project

Use this prompt when the project does not yet have an established codebase or mature project documentation.

## Input

Provide a completed project scenario file based on:

`project-start/templates/PROJECT_START_SCENARIO_TEMPLATE.md`

## Agent Instruction

Read the Product Engine authority/read-order files first, then read the supplied project scenario.

Treat the scenario as source information. Process it through the canonical Product Engine intake and lifecycle.

For a new project:

- identify missing or ambiguous project information,
- apply the existing package/document selection rules,
- create only the canonical next-stage artifacts,
- preserve the Engine approval gate,
- do not generate final documentation before the lifecycle allows it,
- do not create alternative contracts inside `project-start/`.

Stop when the canonical current stage is complete and clearly report what requires approval or additional input next.
