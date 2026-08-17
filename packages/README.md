# Product Engine — Packages

## Amaç

`packages/` proje bağlamına göre **base domain package** kapsamını ve bütün base package'lara ortak uygulanan **planning profile overlay** katmanını tanımlar.

---

## Runtime Navigation — If You Are Here

```text
IF selecting a package:
→ re-open engine/PACKAGE_RULES.md
→ read approved project_type + project_state + planning profiles
→ if corporate-website, verify approved site_architecture exists
→ open selected base package candidate
→ open PLANNING_PROFILE_OVERLAY.md
→ re-open engine/DOCUMENT_CATALOG.md
→ resolve canonical document/dynamic instance set
→ record selection evidence
```

### STOP CHECK

```text
STOP if:
- project/profile truth approved input'tan gelmiyor
- base package seçimi sadece delivery/demo wording'e bakılarak yapılıyor
- corporate-website demo-frontend'e indirgeniyor
- corporate-website approved page registry taşımıyor
- overlay minimumları düşürülüyor
- package catalog dışı Document ID üretiyor
- dynamic instance count/context resolve edilmeden varsayılıyor
```

---

## Package Model

```text
Base Package
→ project/domain requirements

PLANNING_PROFILE_OVERLAY
→ approved planning depth minimums

Approved Site Architecture (corporate-website)
→ project-specific page identity truth
```

Resolved scope:

```text
approved project_type/domain
+
selected base package
+
planning overlay
+
contextual conditions
+
approved page registry when applicable
→ canonical document + dynamic instance set
```

---

## Authority Ayrımı

```text
engine/PROJECT_INTAKE.md
→ project type vocabulary + required intake fields + approval

engine/SITE_ARCHITECTURE_RULES.md
→ corporate page/surface architecture semantics

engine/PLANNING_PROFILES.md
→ implementation/design planning meanings + quality floor

engine/PACKAGE_RULES.md
→ deterministic base package + overlay resolution

engine/DOCUMENT_CATALOG.md
→ canonical Document ID / applicability registry

packages/<BASE_PACKAGE>.md
→ domain-specific package requirements

packages/PLANNING_PROFILE_OVERLAY.md
→ shared planning minimums

templates/
→ canonical document skeletons
```

---

## Base Packages

| Package | Ana Kullanım |
|---|---|
| `CORPORATE_WEBSITE_PACKAGE.md` | `project_type: corporate-website`; multi-page corporate information architecture |
| `DEMO_FRONTEND_PACKAGE.md` | Corporate domain olmayan UI proof / frontend prototype / concept demo |
| `SAAS_PACKAGE.md` | Account/data/backend/API ağırlıklı ürün |
| `API_SERVICE_PACKAGE.md` | API/backend/integration ağırlıklı servis |
| `EXISTING_PROJECT_PACKAGE.md` | Existing/brownfield extension bağlamı |

### Corporate Sales Demo Rule

```text
project_type: corporate-website
delivery_profile: Prototype
purpose: sales demo
→ CORPORATE_WEBSITE_PACKAGE
```

`demo`, `sales demo`, `Prototype` delivery context'tir; corporate domain'i `DEMO_FRONTEND_PACKAGE` ile override etmez.

---

## Deterministic Resolution

```text
1. approved project_type
2. delivery_profile
3. implementation_planning
4. design_planning (applicable)
5. site_architecture (corporate-website)
6. deterministic base package selection
7. package domain candidate set
8. PLANNING_PROFILE_OVERLAY
9. DOCUMENT_CATALOG filters
10. contextual DATA/API/TEST/DEPLOY/OPS conditions
11. PAGE/WAVE/FEATURE dynamic instance registry
```

Profile/page approval bu aşamada tahmin edilmez.

---

## Planning Overlay Minimumları

### Implementation standard

```text
README-DOC
PROJECT-BRAIN
PRODUCT-RULES
TECH-CTX
STATUS
TASKS
DECISIONS
AGENT-INST
PROJ-PLAN
WAVE-MAP
WAVE-PLAN instances
```

### Implementation full

Standard set + real scope/complexity gerektiğinde:

```text
DATA
API
TEST
PROD-STRAT
DEPLOY
OPS
```

### Design light

```text
DESIGN
```

Light quality reduction değildir.

### Design standard

```text
DESIGN
DESIGN-SYSTEM
GLOBAL-SHELL
PAGE-DESIGN instances
SYSTEM-STATES (applicable)
```

Corporate multi-page website için default intake recommendation `standard`dır.

### Design full

Standard + real complexity varsa:

```text
FEATURE-DESIGN instances
ADMIN-DESIGN
```

---

## Core Invariants

```text
delivery purpose ≠ project type
corporate website ≠ landing page
corporate sales demo → corporate package
Prototype ≠ page/planning reduction
demo ≠ throwaway architecture
design light ≠ generic design
integration-ready ≠ invented backend
```

---

## Extension / Merge Kuralları

1. Aynı Document ID iki kez üretilmez.
2. Base + extension birleşiminde catalog applicability korunur.
3. Planning overlay minimumu düşürülemez.
4. Existing-project extension yeni truth/page identity uyduramaz.
5. Dynamic instances aynı canonical ID/template'i kullanır.
6. Approved site architecture package merge sırasında genişletilemez veya küçültülemez.

---

## Agent Reference Read Order

```text
1. Root README.md
2. PRODUCT_ENGINE_BRAIN.md
3. engine/README.md
4. engine/PROJECT_INTAKE.md
5. engine/SITE_ARCHITECTURE_RULES.md (corporate/page-based applicable ise)
6. engine/PLANNING_PROFILES.md
7. engine/DOCUMENT_CATALOG.md
8. engine/PACKAGE_RULES.md
9. packages/README.md
10. selected base package
11. packages/PLANNING_PROFILE_OVERLAY.md
12. relevant templates
```

Runtime execution sırası `engine/GENERATION_PIPELINE.md` tarafından yönetilir.
