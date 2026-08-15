# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Next Tasks

## 1. Primary Immediate Tasks (`WAVE_00`)

1. **Task 00.1 (Project Skeleton & HTML Entry Setup)**:
   - File: `index.html`, `src/main.js`.
   - Action: Setup HTML5 layout with UTF-8 encoding, viewport metadata, Inter/Outfit fonts import.
2. **Task 00.2 (CSS Design Tokens & Base Styles)**:
   - File: `src/styles/design-tokens.css`, `src/styles/main.css`.
   - Action: Define HSL color variables (`hsl(215, 28%, 12%)` Dark Industrial surface, `hsl(38, 92%, 50%)` Hydraulic Gold accent) and typography scale per `DESIGN_RULES.md`.
3. **Task 00.3 (Mock Data Module & Service Boundary)**:
   - File: `src/data/companyData.js`, `src/services/CompanyDataService.js`.
   - Action: Freeze approved `FCL-01` .. `FCL-06` data and export data access methods.

## 2. Secondary Tasks (`WAVE_01` Preview)

- Prepare `src/components/HeroSection.js` for rendering corporate identity and Disan Authorized Service status badge.

## 3. Task Rules for Fresh Executing Agent

- **DO NOT** skip `WAVE_00` to start UI components directly.
- **DO NOT** hardcode company copy inside UI components; always consume through `CompanyDataService`.
- **DO NOT** add unapproved claims (stock, SLA, mobile fleet, periodic maintenance packages) or unapproved features (map, form backend, WhatsApp).
