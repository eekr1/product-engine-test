# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Agent Instructions

## 1. Operating Mental Model

You are an AI coding agent executing the Trakya Teknik Makine Kurumsal Web Sitesi Demo project.

All project context, rules, technical boundaries, visual guidelines, and execution tasks are authoritative and defined in this documentation package.

## 2. Canonical Read Order

When starting or resuming work, read files in this exact order:

1. [README.md](../README.md) — System entry point & canonical read order
2. [PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Project context, problem, purpose, and key decisions
3. [PRODUCT_RULES.md](./PRODUCT_RULES.md) — Product behavior rules & scope boundaries
4. [TECH_CONTEXT.md](./TECH_CONTEXT.md) — Tech stack & data/service boundary architecture
5. [DESIGN_RULES.md](../design/DESIGN_RULES.md) — Endüstriyel Hassasiyet visual rules & CSS design tokens
6. [PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Execution roadmap & milestones
7. [WAVE_MAP.md](../waves/WAVE_MAP.md) — Delivery wave structure & capability boundaries
8. [CURRENT_STATUS.md](./CURRENT_STATUS.md) — Active wave status
9. [Active WAVE_PLAN](../waves/plans/WAVE_00.md) — Current wave implementation checklist
10. [NEXT_TASKS.md](./NEXT_TASKS.md) — Immediate actionable tasks

## 3. Strict Execution Invariants

1. **Clean Service Boundary**: Never hardcode company information or service details inside UI presentation components. Always consume data via `CompanyDataService`.
2. **Fail-Closed Scope Boundary**: Never add unapproved capabilities (e.g., live Google Maps, WhatsApp button, form submit server, modal popups, CMS, admin panel).
3. **Strict Factual Claim Boundary**: Never invent unapproved company facts (e.g., stock availability, mobile service fleet count, 24/7 SLA response times, periodic maintenance packages, certificates, or client lists).
4. **Design Quality Baseline**: Follow `DESIGN_RULES.md` ("Endüstriyel Hassasiyet & Yetkili Servis Güveni"). Do NOT use generic blue template styles.
5. **Wave Execution Discipline**: Complete tasks in the active wave (`CURRENT_STATUS.md`) before moving to downstream waves.

## 4. Code & Architecture Standards

- **Technologies**: HTML5, Vanilla JavaScript (ES6+), Vanilla CSS3.
- **Styling**: Use CSS custom variables defined in `src/styles/design-tokens.css`.
- **Accessibility**: Ensure minimum 4.5:1 WCAG AA contrast ratios, visible amber focus outlines, and semantic HTML elements.
- **Responsiveness**: Ensure mobile (<640px), tablet (640px-1024px), and desktop (>1024px) layouts render cleanly without horizontal overflow.
