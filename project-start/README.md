# Project Start

`project-start/` is the human-facing entry workspace for starting real projects with Product Engine.

It is intentionally separate from the root `templates/` directory.

- Root `templates/` contains canonical Product Engine output document templates.
- `project-start/templates/` contains the single reusable project-source skeleton and the single reusable agent-start prompt skeleton.
- `project-start/prompts/` contains generic launcher prompts for different project-start situations.
- `project-start/projects/` contains project-specific source briefs and launch prompts derived from those templates.

## Boundary

This directory does not define Engine runtime contracts, package rules, document selection logic, lifecycle vocabulary, or canonical output schemas. Those authorities remain in the existing Product Engine files and directories.

Nothing in `project-start/` may silently override `PRODUCT_ENGINE_BRAIN.md`, root `README.md`, `engine/`, `packages/`, or root `templates/`.

## Single-Skeleton Rule

Structured project instances must use one source skeleton only:

`project-start/templates/PROJECT_START_SCENARIO_TEMPLATE.md`

Project-specific source files must preserve that template's heading order. Do not create alternate project-start schemas for individual projects. Use `N/A`, `None`, or `Not defined` when a section does not apply or is not yet known.

Project-specific `START_PROMPT.md` files must derive from:

`project-start/templates/AGENT_START_PROMPT_TEMPLATE.md`

Only the project source path and truly project-specific start instructions should vary. The Product Engine authority, lifecycle, approval, validation, and no-parallel-workflow rules must remain intact.

## Recommended Flow

1. Copy the canonical project-start scenario template into `projects/<project-slug>/` and rename it for the project.
2. Fill the project source without changing its heading structure.
3. Create `START_PROMPT.md` from the canonical agent-start prompt template.
4. Choose the appropriate generic launcher behavior from `prompts/` when useful.
5. Let Product Engine perform intake and normalize the supplied information.
6. Stop at the Engine approval gate when approval is required.
7. Continue through the canonical input -> run -> output lifecycle only after approval.

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

The project file is an instance of `PROJECT_START_SCENARIO_TEMPLATE.md`; the start prompt is an instance of `AGENT_START_PROMPT_TEMPLATE.md`. They are not independent schemas.

## Status

This folder is a usage-layer foundation. Its structure is intentionally small and standardized. It should evolve through real project-start tests rather than speculative complexity.
