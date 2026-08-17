# Operational Decisions Register — RUN-20260817-005

## 1. Operational Decisions

| Decision ID | Subject | Decision | Rationale | Status | Source |
|---|---|---|---|---|---|
| `OP-DEC-001` | Base Package Selection | Select `corporate-website` base package | `project_type` is `corporate-website`. Sales demo wording cannot override domain package. | `Engine Resolved` | `engine/PACKAGE_RULES.md` |
| `OP-DEC-002` | Frontend Baseline | Package-managed Vite + React + TypeScript + React Router baseline | Continuation expected = YES, zero-build constraint = NONE. Standard continuation-ready baseline. | `Engine Resolved` | `engine/PLANNING_PROFILES.md` |
| `OP-DEC-003` | Site Architecture Scope | 7 distinct routable pages (`PAGE-001` to `PAGE-007`) | Approved site architecture registry defines 7 distinct surfaces. Distinct page collapse forbidden. | `User Approved` | `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` |
| `OP-DEC-004` | Capability Scope Guard | Direct phone & email contact only; no contact form/inputs/submit/map/WhatsApp | Contact form & submit behavior out of scope. Direct phone/email contact capability preserved. | `User Approved` | `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` |
