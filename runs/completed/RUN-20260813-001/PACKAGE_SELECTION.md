# Package Selection — RUN-20260813-001

## 1. Selection Overview

- **Base Package**: `demo-frontend` (Frontend Demo Package)
- **Extension Packages**: `existing-project` (Existing Project Extension)
- **Shared Overlay**: `packages/PLANNING_PROFILE_OVERLAY.md`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`

## 2. Resolved Canonical Documents

| Document ID | Output Relative Path | Owner Category | Reason |
|---|---|---|---|
| README-DOC | `README.md` | project | Canonical entry point & read order |
| PROJECT-BRAIN | `ai/PROJECT_BRAIN.md` | ai | Primary project context & vision owner |
| PRODUCT-RULES | `ai/PRODUCT_RULES.md` | ai | Scope & product behavior rules owner |
| TECH-CTX | `ai/TECH_CONTEXT.md` | ai | Tech stack & integration readiness owner |
| STATUS | `ai/CURRENT_STATUS.md` | ai | Phase/wave progress owner |
| TASKS | `ai/NEXT_TASKS.md` | ai | Immediate executable tasks owner |
| DECISIONS | `ai/DECISIONS.md` | ai | Persistent architecture & design decisions |
| AGENT-INST | `ai/AGENT_INSTRUCTIONS.md` | ai | Execution rules for agents owner |
| PROJ-PLAN | `project/PROJECT_PLAN.md` | project | Delivery milestones & phase planning owner |
| DESIGN | `design/DESIGN_RULES.md` | design | Visual concept & UX rules owner (Light profile) |
| WAVE-MAP | `waves/WAVE_MAP.md` | waves | Execution wave map owner |
| WAVE-PLAN | `waves/plans/WAVE_00.md` | waves | Dynamic Wave Plan instance (Foundation & Data Boundary) |
| WAVE-PLAN | `waves/plans/WAVE_01.md` | waves | Dynamic Wave Plan instance (Shell & Landing Experience) |
| WAVE-PLAN | `waves/plans/WAVE_02.md` | waves | Dynamic Wave Plan instance (Service Showcase & Verification) |

## 3. Excluded Conditional Documents

- `DATA_MODEL.md` / `API_CONTRACTS.md`: Frontend demo scope; backend and real database/API not approved. Clean service boundary maintained in `TECH_CONTEXT.md`.
- `DESIGN_SYSTEM.md` / `GLOBAL_SHELL.md` / `SYSTEM_STATES.md`: `design_planning: light` profiles select dedicated `DESIGN_RULES.md` as primary design authority.
- `DEPLOYMENT.md` / `OPERATIONS.md`: Production deployment & operations not approved in current intake.
