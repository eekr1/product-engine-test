# Package Selection — RUN-20260813-001

## 1. Context & Inputs

- **Project Slug**: `trakya-teknik-makine`
- **Project Type**: `landing-page`
- **Project State**: `existing`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`

## 2. Base Package Resolution

- **Selected Base Package**: `corporate-website` (Tanıtım ve kurumsal hizmet sunumu odaklı)
- **Shared Overlay**: `packages/PLANNING_PROFILE_OVERLAY.md` (Applied MANDATORY)

## 3. Resolved Canonical Documents

| Document ID | Canonical File Path | Status / Reason |
|---|---|---|
| README-DOC | `README.md` | Required (Root Entry Point) |
| PROJECT-BRAIN | `ai/PROJECT_BRAIN.md` | Required (Core AI Context) |
| PRODUCT-RULES | `ai/PRODUCT_RULES.md` | Required (Product & Behavior Constraints) |
| TECH-CTX | `ai/TECH_CONTEXT.md` | Required (Tech Stack & Integration Boundary) |
| STATUS | `ai/CURRENT_STATUS.md` | Required (Current Status) |
| TASKS | `ai/NEXT_TASKS.md` | Required (Next Tasks) |
| DECISIONS | `ai/DECISIONS.md` | Required (Decisions Register) |
| AGENT-INST | `ai/AGENT_INSTRUCTIONS.md` | Required (Agent Execution Rules) |
| PROJ-PLAN | `project/PROJECT_PLAN.md` | Required (Project Plan) |
| DESIGN | `design/DESIGN_RULES.md` | Required (Light Design Rules) |
| WAVE-MAP | `waves/WAVE_MAP.md` | Required (Wave Map) |
| WAVE-PLAN | `waves/plans/WAVE_00.md` | Dynamic Instance (Wave 00: Foundation & Design Rules) |
| WAVE-PLAN | `waves/plans/WAVE_01.md` | Dynamic Instance (Wave 01: Core Shell & Presentation Boundary) |
| WAVE-PLAN | `waves/plans/WAVE_02.md` | Dynamic Instance (Wave 02: Services & Contact CTAs) |

## 4. Excluded / Conditional Documents

- `DATA`: Excluded (No real backend/database scope in prototype).
- `API`: Excluded (No real API surface scope in prototype).
- `TEST`: Excluded (No dedicated test strategy required for prototype landing page).
- `DEPLOY`: Excluded (No production deployment scope in prototype).
- `OPS`: Excluded (No production operations scope in prototype).
- `PROD-STRAT`: Excluded (Not applicable for prototype landing page).
- `DESIGN-SYSTEM`: Excluded (`design_planning: light` overlay scope).
- `GLOBAL-SHELL`: Excluded (`design_planning: light` overlay scope).
- `PAGE-DESIGN`: Excluded (`design_planning: light` overlay scope).
- `SYSTEM-STATES`: Excluded (`design_planning: light` overlay scope).

## 5. Output Location Mapping

All produced documents will be published to:
`outputs/demos/trakya-teknik-makine/versions/v0.1/` and mirrored to `outputs/demos/trakya-teknik-makine/latest/`.
