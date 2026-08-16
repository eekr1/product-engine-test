# Package Selection — RUN-20260817-001

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend` (Frontend Demo Package v2.2.0)
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Proje Türü**: `landing-page`

## 2. Seçim Gerekçesi

Approved project input `INPUT-FIZYOTERAPIST-EDA-PALA-V1` uyarınca:
- Tekirdağ'daki Fizyoterapist Eda Pala için müşteri görüşmesinde sunulacak proaktif bir frontend satış demosu niteliğindedir.
- Gerçek backend/veritabanı onaylı kapsamda değildir; statik lokal konfigürasyon veri soyutlaması (clean content boundary) kullanılacaktır.
- `demo-frontend` base package bu domain gereksinimini tam karşılar.
- `packages/PLANNING_PROFILE_OVERLAY.md` uygulanarak `implementation_planning: standard` için gerekli agent-ready dokümantasyon seti (`README`, `PROJECT_BRAIN`, `PRODUCT_RULES`, `TECH_CONTEXT`, `CURRENT_STATUS`, `NEXT_TASKS`, `DECISIONS`, `AGENT_INSTRUCTIONS`, `PROJECT_PLAN`, `WAVE_MAP` ve `WAVE_PLAN` instance'ları) dahil edilmiştir.
- UI/UX barındırdığı için `design_planning: light` seviyesinde `DESIGN_RULES.md` üretilecektir.

## 3. Üretilecek Doküman Listesi

| Canonical Document ID | Owner Category | Canonical Output Path | Durum / Sebep |
|---|---|---|---|
| `README-DOC` | project | `README.md` | Required — Read order & entry point |
| `PROJECT-BRAIN` | ai | `ai/PROJECT_BRAIN.md` | Required — Project brain |
| `PRODUCT-RULES` | ai | `ai/PRODUCT_RULES.md` | Required — Product behavior & scope guardrails |
| `TECH-CTX` | ai | `ai/TECH_CONTEXT.md` | Required — Local static preview architecture |
| `STATUS` | ai | `ai/CURRENT_STATUS.md` | Required — Current wave state |
| `TASKS` | ai | `ai/NEXT_TASKS.md` | Required — Immediate executable tasks |
| `DECISIONS` | ai | `ai/DECISIONS.md` | Required — Architecture & design decisions |
| `AGENT-INST` | ai | `ai/AGENT_INSTRUCTIONS.md` | Required — Agent operating instructions |
| `PROJ-PLAN` | project | `project/PROJECT_PLAN.md` | Required — Delivery plan & sequence |
| `DESIGN` | design | `design/DESIGN_RULES.md` | Required — Design_planning: light visual foundation |
| `WAVE-MAP` | waves | `waves/WAVE_MAP.md` | Required — Wave map decomposition |
| `WAVE-PLAN` | waves | `waves/plans/WAVE_00.md` | Required — Setup & Preview Foundation Plan |
| `WAVE-PLAN` | waves | `waves/plans/WAVE_01.md` | Required — Profile Hero & Brand Plan |
| `WAVE-PLAN` | waves | `waves/plans/WAVE_02.md` | Required — Instagram Integration Plan |
| `WAVE-PLAN` | waves | `waves/plans/WAVE_03.md` | Required — Cross-Cutting QA Plan |

## 4. Hariç Bırakılan Dokümanlar

- `DATA_MODEL.md` (`DATA`): Gerçek veritabanı onaylı kapsam dışındadır (Non-applicable).
- `API_CONTRACTS.md` (`API`): Gerçek backend/API onaylı kapsam dışındadır (Non-applicable).
- `TEST_STRATEGY.md` (`TEST`), `DEPLOYMENT.md` (`DEPLOY`), `OPERATIONS.md` (`OPS`), `PRODUCT_STRATEGY.md` (`PROD-STRAT`): `implementation_planning: standard` ve prototype delivery profile kapsamında non-applicable conditional dokümanlardır.
- `DESIGN_SYSTEM.md`, `GLOBAL_SHELL.md`, `SYSTEM_STATES.md`, `PAGE_DESIGN_PACKAGE`: `design_planning: light` profilinde non-applicable conditional dokümanlardır (`light` profile yalnız `DESIGN_RULES.md` gerektirir).
