# Package Selection — RUN-20260817-001

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend`
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Proje Türü**: `landing-page`

## 2. Seçim Gerekçesi

Fizyoterapist Eda Pala projesi için proaktif satış görüşmelerinde kullanılmak üzere sıfırdan modern bir frontend landing page (demo) geliştirilmektedir. backend, database, auth ve canlı randevu backend'i scope dışındadır. Bu nedenle `demo-frontend` temel paketi seçilmiştir. `implementation_planning: standard` overlay'i Product Engine'in agent-ready minimumunu (`PROJECT_BRAIN`, `PRODUCT_RULES`, `TECH_CONTEXT`, `PROJECT_PLAN`, `WAVE_MAP` ve `WAVE_PLAN` dynamic instance'ları) garanti eder. `design_planning: light` overlay'i ise `DESIGN_RULES.md` ile özgün tasarım sistemi ve layout rehberi sunar.

## 3. Üretilecek Doküman Listesi

| Canonical Document ID | Output Path | Categorization / Owner | Required / Conditional | Rationale |
|---|---|---|---|---|
| README-DOC | `/README.md` | Root | Required | Root entry point and agent read order |
| PROJECT-BRAIN | `/ai/PROJECT_BRAIN.md` | ai | Required | Core project identity and vision |
| PRODUCT-RULES | `/ai/PRODUCT_RULES.md` | ai | Required | Product and scope constraints |
| TECH-CTX | `/ai/TECH_CONTEXT.md` | ai | Required | Technical context and frontend configuration boundary |
| DESIGN | `/design/DESIGN_RULES.md` | design | Required (`design: light`) | Visual direction, typography, colors, layout guidelines |
| WAVE-MAP | `/waves/WAVE_MAP.md` | waves | Required | Execution scope decomposition and wave roadmap |
| WAVE-PLAN (Instance 00) | `/waves/plans/WAVE_00.md` | waves/plans | Dynamic Instance | Foundation, Stack Setup & Local Content Config Schema |
| WAVE-PLAN (Instance 01) | `/waves/plans/WAVE_01.md` | waves/plans | Dynamic Instance | Design System, Typography & Layout Shell |
| WAVE-PLAN (Instance 02) | `/waves/plans/WAVE_02.md` | waves/plans | Dynamic Instance | Hero & Professional Profile Section |
| WAVE-PLAN (Instance 03) | `/waves/plans/WAVE_03.md` | waves/plans | Dynamic Instance | Trust, Location Context & Outbound Link Integration |
| PROJ-PLAN | `/project/PROJECT_PLAN.md` | project | Required | Project plan and milestone roadmap |
| STATUS | `/ai/CURRENT_STATUS.md` | ai | Required | Active state tracking |
| TASKS | `/ai/NEXT_TASKS.md` | ai | Required | Implementation checklist |
| AGENT-INST | `/ai/AGENT_INSTRUCTIONS.md` | ai | Required | Execution instructions for implementing agents |
| DECISIONS | `/ai/DECISIONS.md` | ai | Required | Canonical decisions record |

## 4. Hariç Bırakılan Dokümanlar

- **DATA_MODEL (`DATA`)**: Gerçek persistent veritabanı veya karmaşık data model scope dışında olduğundan hariç bırakılmıştır.
- **API_CONTRACTS (`API`)**: Gerçek backend/API scope dışında olduğundan hariç bırakılmıştır.
- **TEST_STRATEGY (`TEST`)**: `implementation_planning: standard` ve demo scope gereği ayrı test stratejisi gerekmemektedir.
- **PRODUCT_STRATEGY (`PROD-STRAT`)**: Ürün stratejisi ayrı onaylı girdi olarak bulunmadığından hariç tutulmuştur.
- **DEPLOYMENT (`DEPLOY`)**: Production hosting/domain deployment scope dışındadır.
- **OPERATIONS (`OPS`)**: Production ops scope dışındadır.
- **DESIGN_SYSTEM / GLOBAL_SHELL / PAGE-DESIGN**: `design_planning: light` seviyesinde yalnız `DESIGN_RULES.md` üretilir.

## 5. Uygulanan Paket Eklentileri (Extensions)

- **`packages/PLANNING_PROFILE_OVERLAY.md`**: Implementation `standard` + Design `light` kuralları eksiksiz olarak uygulanmıştır.
