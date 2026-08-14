# Operational Run Decisions — RUN-20260815-001

## 1. Decision Registry

| Decision ID | Domain | Decision | Provenance | Rationale |
|---|---|---|---|---|
| DEC-001 | Delivery | `delivery_profile: Prototype` | User Approved | Target is a sales frontend demo for Trakya Teknik Makine. |
| DEC-002 | Implementation | `implementation_planning: standard` | User Approved | Provides agent-ready execution depth with 5 distinct waves without excessive boilerplate. |
| DEC-003 | Design | `design_planning: light` | User Approved | Establishes a distinct industrial visual identity in `DESIGN_RULES.md` without requiring a multi-document design system package. |
| DEC-004 | Package | Select `demo-frontend` base package | Engine Resolved | Optimal match for landing-page/corporate presentation frontend demo. |
| DEC-005 | Architecture | Decouple mock data into `CompanyService` / data adapter | Engine Resolved | Ensures backend integration readiness without inventing unapproved API endpoints. |
