# Project Start

`project-start/` is the human-facing entry workspace for starting real projects with Product Engine.

It is intentionally separate from the root `templates/` directory.

- Root `templates/` contains canonical Product Engine output document templates.
- `project-start/templates/` contains reusable starting materials used before an Engine run begins.
- `project-start/prompts/` contains generic agent prompts for different project-start situations.
- `project-start/projects/` contains project-specific source briefs and launch prompts.

## Boundary

This directory does not define Engine runtime contracts, package rules, document selection logic, lifecycle vocabulary, or canonical output schemas. Those authorities remain in the existing Product Engine files and directories.

Nothing in `project-start/` may silently override `PRODUCT_ENGINE_BRAIN.md`, root `README.md`, `engine/`, `packages/`, or root `templates/`.

## Recommended Flow

1. Pick the correct project-start scenario.
2. Create or update the project brief under `projects/<project-slug>/`.
3. Use the appropriate start prompt.
4. Let Product Engine perform intake and normalize the supplied information.
5. Stop at the Engine approval gate when approval is required.
6. Continue through the canonical input -> run -> output lifecycle only after approval.

## Directory Layout

```text
project-start/
├── README.md
├── templates/
│   ├── PROJECT_START_SCENARIO_TEMPLATE.md
│   └── AGENT_START_PROMPT_TEMPLATE.md
├── prompts/
│   ├── START_NEW_PROJECT.md
│   ├── START_EXISTING_PROJECT.md
│   └── START_FROM_RAW_BRIEF.md
└── projects/
    └── _example/
        ├── PROJECT.md
        └── START_PROMPT.md
```

## Project Instance Convention

A real project should normally use:

```text
projects/<project-slug>/
├── <PROJECT_NAME>_PROJECT.md
└── START_PROMPT.md
```

Example:

```text
projects/talkx/
├── TALKX_PROJECT.md
└── START_PROMPT.md
```

The project file describes **what the project is**. The start prompt describes **how the agent should begin processing it through Product Engine**.

## Status

This folder is a usage-layer foundation. It should evolve through real project-start tests rather than speculative complexity.
