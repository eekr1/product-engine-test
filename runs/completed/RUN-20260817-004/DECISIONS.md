# Decisions — RUN-20260817-004

## Operational Decisions Log

| Decision ID | Category | Summary | Status | Rationale | Provenance |
|---|---|---|---|---|---|
| DEC-OP-001 | Package Selection | Base package set strictly to `corporate-website` | User Approved | Approved project type is `corporate-website`. Delivery profile `Prototype` MUST NOT override base package. | `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` |
| DEC-OP-002 | Site Architecture Freeze | 7 distinct routable pages frozen (`PAGE-001` .. `PAGE-007`) | User Approved | Corporate site architecture invariant prohibits page collapse to anchor sections. | `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` |
| DEC-OP-003 | Technical Baseline | Vite + React + TypeScript with component-oriented architecture | Engine Resolved | Continuation Expected = YES and Zero-Build Constraint = NONE requires package-managed repeatable baseline. | `engine/PLANNING_PROFILES.md` |
| DEC-OP-004 | Dynamic Instances Resolution | 7 PAGE-DESIGN instances + 5 WAVE-PLAN instances | Engine Resolved | Matches `APPROVED_PAGE_SET` and wave decomposition required for standard planning profile. | `engine/PACKAGE_RULES.md` |
