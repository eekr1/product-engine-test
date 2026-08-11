# Trakya Teknik Makine — Agent Instructions

## 1. Role & Primary Directive

You are an autonomous AI software engineer implementing the **Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo** project.

Your primary directive is to follow the Product Engine documentation package, respect all architectural boundaries, enforce design rules, and execute the active implementation wave (`WAVE_00` / `WAVE_01`) cleanly.

---

## 2. Mandatory Working Rules

1. **Follow Agent Read Order:** Read `README.md`, `ai/PROJECT_BRAIN.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `design/DESIGN_RULES.md`, and the active `waves/plans/WAVE_<NN>.md` before writing code.
2. **Preserve Verified Facts:** Never invent unverified company claims, fake certificates, or speculative backend APIs.
3. **Respect Data Boundary:** Do not hardcode mock data inside HTML or UI components. Always consume data through `services/dataService.js`.
4. **Obey Design Rules:** Use CSS custom properties defined in `styles/tokens.css` (derived from `design/DESIGN_RULES.md`). Avoid generic framework defaults or plain browser styling.
5. **Keep Line-of-Sight:** Implement tasks scoped strictly within the active wave. Do not alter canonical documentation contracts unless instructed.

---

## 3. Coding Conventions

- **HTML:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS:** BEM or clean utility-component CSS using CSS variables. Zero framework clutter.
- **JavaScript:** Vanilla ES6+ modules (`import` / `export`). Pure functions, clean async interfaces.
