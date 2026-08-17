# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Decisions

## 1. Decision Record Standard

- **Format**: ID | Subject | Decision | Rationale | Status | Source
- **Status Vocabulary**: `User Approved` | `Engine Resolved` | `Pending Review` | `Superseded`

## 2. Architectural / Technical Decisions

| ID | Subject | Decision | Kısa Gerekçe | Status | Source |
|---|---|---|---|---|---|
| `DEC-001` | Base Package | Select `corporate-website` base package | Approved `project_type` is `corporate-website`. Sales demo wording cannot override domain package. | `Engine Resolved` | `engine/PACKAGE_RULES.md` |
| `DEC-002` | Frontend Stack Baseline | Vite + React + TypeScript + React Router DOM | Continuation expected = YES, zero-build constraint = NONE. Standard continuation-ready baseline. | `Engine Resolved` | `engine/PLANNING_PROFILES.md` |
| `DEC-003` | Data Architecture | Service / Data Access Adapter layer with local mock fixtures | Enables presentation layer decoupling and future seamless REST/GraphQL API integration without frontend rewrite. | `Engine Resolved` | `engine/PLANNING_PROFILES.md` Section 6 |
| `DEC-004` | Routing Implementation | React Router DOM client-side routing with clean component definitions | Multi-page corporate website requires distinct routable URL surfaces for 7 approved pages without single-page anchor collapse. | `Engine Resolved` | `engine/SITE_ARCHITECTURE_RULES.md` |

## 3. Product / Scope Decisions

| ID | Subject | Decision | Kısa Gerekçe | Status | Source |
|---|---|---|---|---|---|
| `DEC-005` | Site Architecture Scope | 7 distinct routable pages (`PAGE-001` to `PAGE-007`) | User explicitly approved 7 distinct pages in project input. | `User Approved` | Approved Project Input Section 6, 7 |
| `DEC-006` | Contact Capability Boundary | Direct phone and email contact links only; no form/inputs/submit/map/WhatsApp | User approved strict contact boundary excluding forms, submit handlers, interactive maps, and WhatsApp widgets. | `User Approved` | Approved Project Input Section 6, 8 |
| `DEC-007` | Delivery Profile | `Prototype` delivery maturity | Project is a proactive sales demo. Prototype profile limits operational maturity without reducing page breadth or quality. | `User Approved` | Approved Project Input Section 2 |

## 4. Design / UX Decisions

| ID | Subject | Decision | Kısa Gerekçe | Status | Source |
|---|---|---|---|---|---|
| `DEC-008` | Visual Direction | Koyu antrasit teknik yüzey (#0B0F17) + amber/turuncu vurucu vurgular (#F59E0B) | Industrial precision and corporate trust character approved as preferred design direction. | `User Approved` | Approved Project Input Section 13 |
| `DEC-009` | Design System Architecture | CSS Variables + Foundational Primitives (Button, Badge, Card) | Ensures consistent token usage, dark mode stability, and high responsive adaptability across all 7 pages. | `Engine Resolved` | `templates/design/DESIGN_SYSTEM_TEMPLATE.md` |

## 5. Deprecated / Superseded Decisions

*Henüz yürürlükten kaldırılan karar bulunmamaktadır.*
