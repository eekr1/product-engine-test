# Package Rules

## Amaç

Bu belge approved project truth'tan base package, shared planning overlay ve contextual document conditions'ın hangi sırayla çözüleceğini tanımlar.

---

# Resolution Model

```text
approved project truth
        ↓
base package
        +
packages/PLANNING_PROFILE_OVERLAY.md
        +
contextual conditions/extensions
        ↓
DOCUMENT_CATALOG applicability
        ↓
canonical document set + dynamic instances
```

Authority:

- project type + required intake fields → `PROJECT_INTAKE.md`
- corporate page architecture semantics → `SITE_ARCHITECTURE_RULES.md`
- profile semantiği → `PLANNING_PROFILES.md`
- project truth → `inputs/approved/`
- shared planning minimumları → `packages/PLANNING_PROFILE_OVERLAY.md`
- Document ID/applicability → `DOCUMENT_CATALOG.md`
- runtime sırası → `GENERATION_PIPELINE.md`

---

## 1. Approved Axes

Package resolution yalnız approved input'tan şu eksenleri okur:

```text
project_type
delivery_profile
implementation_planning: standard | full
design_planning: light | standard | full  (UI applicable ise)
site_architecture                        (corporate-website ise required)
```

Bu aşamada profile veya site architecture tahmini yapılmaz.

Eksik/invalid canonical alan → intake correction gerekir; generation başlamaz.

---

## 2. Base Package Selection

Base package **delivery wording'e değil project/domain type'a** göre seçilir.

Deterministic mapping:

```text
project_type: corporate-website
→ corporate-website

project_type: api-service
→ api-service

project_type: web-app
→ saas OR demo-frontend yalnız approved domain/product context'e göre

project_type: prototype
→ demo-frontend (frontend/UI prototype ise)
```

Base package registry:

```text
demo-frontend
corporate-website
saas
api-service
```

`existing-project` gerektiğinde extension context olarak uygulanır.

### Demo / Delivery Override Yasağı

```text
sales demo
prototype delivery
client demo
local preview
```

ifadeleri base domain package'ı override edemez.

Örnek:

```text
project_type: corporate-website
delivery_profile: Prototype
purpose: proactive sales demo

→ base package MUST be corporate-website
→ demo-frontend MUST NOT replace it
```

Base package yalnız domain-specific gereksinimlerin sahibidir; planning depth sahibi değildir.

---

## 3. Corporate Website Precondition

`project_type: corporate-website` için package resolution başlamadan önce:

```text
approved site_architecture exists
APPROVED_PAGE_SET non-empty
all executable pages have PAGE-XXX identity
```

zorunludur.

Eksikse package resolution devam etmez; intake correction gerekir.

Exact page semantics `SITE_ARCHITECTURE_RULES.md` sahibidir.

---

## 4. Shared Planning Overlay — Zorunlu Adım

Base package seçildikten sonra **her run'da**:

```text
packages/PLANNING_PROFILE_OVERLAY.md
```

uygulanır.

### Implementation `standard`

Applicable agent-ready minimum:

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

### Implementation `full`

Standard set korunur; real scope/complexity koşuluna göre:

```text
DATA
API
TEST
PROD-STRAT
DEPLOY
OPS
```

değerlendirilir.

### Design `light`

```text
DESIGN
```

### Design `standard`

Applicable ise:

```text
DESIGN
DESIGN-SYSTEM
GLOBAL-SHELL
PAGE-DESIGN instances
SYSTEM-STATES
```

### Design `full`

Standard set + real scope koşuluyla:

```text
FEATURE-DESIGN instances
ADMIN-DESIGN
```

Multi-page corporate website için intake default recommendation `design_planning: standard`dır; package layer approved profile'ı sessizce yükseltemez veya düşüremez.

---

## 5. Contextual Conditions

Overlay sonrasında gerçek proje context'i değerlendirilir.

```text
real persistent/important data model
→ DATA

real approved API surface
→ API

risk/complexity dedicated test strategy gerektiriyor
→ TEST

approved production deployment target
→ DEPLOY

approved production operations scope
→ OPS

real user-provided/approved product strategy context
→ PROD-STRAT

existing project
→ existing-project transition rules
```

Integration readiness tek başına DATA/API üretim koşulu değildir.

---

## 6. Catalog Filtering

Candidate documents `DOCUMENT_CATALOG.md` üzerinden filtrelenir:

1. project type applicable mı?
2. delivery profile applicable mı?
3. implementation planning applicable mı?
4. design planning applicable mı?
5. conditional scope mevcut mu?
6. dependencies applicable mı?

Catalog sınırını hiçbir package aşamaz.

---

## 7. Dynamic Instance Resolution

### WAVE-PLAN

Her resolved implementation wave için bir instance:

```text
waves/plans/WAVE_<NN>.md
```

### PAGE-DESIGN

`design standard | full` için her approved distinct page/screen implementation surface başına bir instance.

Corporate website için instance identity approved `PAGE-XXX` registry ile bire bir izlenebilir olmalıdır.

### FEATURE-DESIGN

Yalnız `design full` + gerçek complex/cross-screen feature varsa instance.

Yeni instance yeni Document ID değildir.

---

## 8. Reduction Rules

MUST NOT:

```text
Prototype → planning belgelerini çıkar
Demo → TECH_CONTEXT çıkar
Corporate website → single-page structure'a indir
Corporate sales demo → demo-frontend package'a çevir
Light design → generic/basic DESIGN yeterli de
Base package default'u → approved planning profile'ı düşür
```

Reduction yalnız non-applicable conditional belge veya gerçek scope dışında kalan optional/conditional belge üzerinde yapılabilir.

Approved site architecture reduction target değildir.

---

## 9. Demo / Frontend Readiness

Frontend-only current scope:

```text
UI
→ service/data boundary
→ mock/local adapter today
→ real API adapter later if approved
```

beklentisini korur.

Continuation beklenen client/sales frontend aynı codebase üzerinde büyüyebilecek tooling/foundation kullanmalıdır.
Sahte backend/API/database üretmek yasaktır.

---

## 10. Multiple Package / Extension Merge

1. Document ID duplicate üretilmez.
2. Approved planning profiles korunur.
3. Domain requirement'lar union olarak değerlendirilir.
4. Catalog applicability son filtredir.
5. Existing-project extension current/target/transition ayrımını korur.
6. Domain base package başka bir delivery-purpose package tarafından override edilemez.

---

## 11. Run Record

`PACKAGE_SELECTION.md` en az:

```text
selected base package
selection rationale
extensions
implementation_planning
design_planning
site architecture summary (corporate-website ise)
PLANNING_PROFILE_OVERLAY application
canonical document IDs
conditional include/exclude decisions
dynamic instance registry summary
```

içermelidir.

---

# Core Invariants

```text
project type owns domain package selection
delivery purpose ≠ project type
corporate website ≠ landing page
Prototype ≠ site breadth reduction
PROFILE DEPTH ≠ QUALITY LEVEL
Demo ≠ throwaway architecture
Light design ≠ generic design
Integration-ready ≠ invented backend
Full ≠ generate everything
```
