# Project Start

`project-start/` is the human-facing entry workspace for starting real projects with Product Engine.

It is intentionally separate from the root `templates/` directory.

- Root `templates/` contains canonical Product Engine output document templates.
- `project-start/templates/` contains the reusable project-source skeleton plus the two reusable session-start prompt skeletons.
- `project-start/prompts/` contains generic launcher prompts for different project-start situations.
- `project-start/projects/` contains project-specific source briefs and launch prompts derived from those templates.

## Boundary

This directory does not define Engine runtime contracts, package rules, document selection logic, lifecycle vocabulary, or canonical output schemas. Those authorities remain in the existing Product Engine files and directories.

Nothing in `project-start/` may silently override `PRODUCT_ENGINE_BRAIN.md`, root `README.md`, `engine/`, `packages/`, or root `templates/`.

## Single-Skeleton Rule

Structured project instances must use one source skeleton only:

`project-start/templates/PROJECT_START_SCENARIO_TEMPLATE.md`

Project-specific source files must preserve that template's heading order. Do not create alternate project-start schemas for individual projects. Use `N/A`, `None`, or `Not defined` when a section does not apply or is not yet known.

## Two-Session Start Rule

Project start uses two deliberate sessions with a hard context boundary between them.

### Phase A — Intake Session

Project-specific `START_PROMPT.md` files derive from:

`project-start/templates/AGENT_START_PROMPT_TEMPLATE.md`

This session reads raw/source context, produces the pending `PROJECT_INPUT`, obtains explicit user approval, writes the canonical approved input, then **stops**.

It does not continue into run generation.

### Phase B — Run Session

Project-specific `INPUT_START_PROMPT.md` files derive from:

`project-start/templates/INPUT_START_PROMPT_TEMPLATE.md`

This session starts in a **new chat**. The approved `PROJECT_INPUT` is the authoritative project-context boundary. Previous chat reasoning, raw-brief discussion, remembered ideas or unapproved suggestions do not carry forward as project truth.

The Product Engine canonical boot/read order is executed again, then the normal approved input -> run -> validation -> publication lifecycle proceeds.

This session split is a usage/runtime transition layer only; it does not create a second Engine lifecycle or new authority hierarchy.

## Demo / Prototype Interpretation

At project-start level, `demo`, `sales demo`, `prototype` and similar labels describe delivery purpose/runtime maturity only.

They do not authorize:

- additional features,
- mock interactions,
- placeholder capabilities,
- scope expansion,
- reduced architecture/code/design quality.

Exact execution scope remains governed by approved input and canonical Engine/package rules.

## Recommended Flow

1. Copy the canonical project-start scenario template into `projects/<project-slug>/` and rename it for the project.
2. Fill the project source without changing its heading structure.
3. Create `START_PROMPT.md` from `AGENT_START_PROMPT_TEMPLATE.md`.
4. Create `INPUT_START_PROMPT.md` from `INPUT_START_PROMPT_TEMPLATE.md`.
5. Open Chat/Session A with `START_PROMPT.md`.
6. Let Product Engine perform intake and normalize the supplied information.
7. Stop at the Engine approval gate when approval is required.
8. After explicit approval and approved input creation, stop Session A.
9. Open a fresh Chat/Session B with `INPUT_START_PROMPT.md`.
10. Continue through the canonical approved input -> run -> output lifecycle from the fresh context boundary.

## Directory Layout

```text
project-start/
├── README.md
├── templates/
│   ├── PROJECT_START_SCENARIO_TEMPLATE.md
│   ├── AGENT_START_PROMPT_TEMPLATE.md
│   └── INPUT_START_PROMPT_TEMPLATE.md
├── prompts/
│   ├── START_NEW_PROJECT.md
│   ├── START_EXISTING_PROJECT.md
│   └── START_FROM_RAW_BRIEF.md
└── projects/
    └── _example/
        ├── PROJECT.md
        ├── START_PROMPT.md
        └── INPUT_START_PROMPT.md
```

## Project Instance Convention

A real project should normally use:

```text
projects/<project-slug>/
├── <PROJECT_NAME>_PROJECT.md
├── START_PROMPT.md
└── INPUT_START_PROMPT.md
```

Example:

```text
projects/talkx/
├── TALKX_PROJECT.md
├── START_PROMPT.md
└── INPUT_START_PROMPT.md
```

The project file describes **what the project is**. `START_PROMPT.md` describes **how intake begins**. `INPUT_START_PROMPT.md` describes **how a fresh runtime session begins from the approved input**.

These prompt files are usage-layer launchers derived from their canonical prompt templates; they are not independent Engine schemas.

## Status

This folder is a usage-layer foundation. Its structure is intentionally small and standardized. It should evolve through real project-start tests rather than speculative complexity.
