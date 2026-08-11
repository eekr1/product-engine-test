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

- profile semantiği → `PLANNING_PROFILES.md`
- project truth → `PROJECT_INTAKE.md` + `inputs/approved/`
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
```

Bu aşamada profile tahmini yapılmaz.

Eksik/invalid canonical alan → intake correction gerekir; generation başlamaz.

---

## 2. Base Package Selection

Project/domain bağlamına en uygun base package seçilir:

```text
demo-frontend
corporate-website
saas
api-service
```

`existing-project` gerektiğinde extension context olarak uygulanır.

Base package yalnız domain-specific gereksinimlerin sahibidir; planning depth sahibi değildir.

---

## 3. Shared Planning Overlay — Zorunlu Adım

Base package seçildikten sonra **her run'da**:

```text
packages/PLANNING_PROFILE_OVERLAY.md
```

uygulanır.

Bu adım optional değildir.

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

---

## 4. Contextual Conditions

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

## 5. Catalog Filtering

Candidate documents `DOCUMENT_CATALOG.md` üzerinden filtrelenir:

1. project type applicable mı?
2. delivery profile applicable mı?
3. implementation planning applicable mı?
4. design planning applicable mı?
5. conditional scope mevcut mu?
6. dependencies applicable mı?

Catalog sınırını hiçbir package aşamaz.

---

## 6. Dynamic Instance Resolution

### WAVE-PLAN

Her resolved implementation wave için bir instance:

```text
waves/plans/WAVE_<NN>.md
```

### PAGE-DESIGN

`design standard | full` için her distinct page/screen implementation surface başına bir instance.

### FEATURE-DESIGN

Yalnız `design full` + gerçek complex/cross-screen feature varsa instance.

Yeni instance yeni Document ID değildir.

---

## 7. Reduction Rules

MUST NOT:

```text
Prototype → planning belgelerini çıkar
Demo → TECH_CONTEXT çıkar
Light design → generic/basic DESIGN yeterli de
Base package default'u → approved planning profile'ı düşür
```

Reduction yalnız:

- non-applicable conditional belge,
- gerçek scope dışında kalan optional/conditional belge

üzerinde yapılabilir.

Planning profile minimumları reduction floor'dur.

---

## 8. Demo / Frontend Readiness

Frontend-only current scope:

```text
UI
→ service/data boundary
→ mock/local adapter today
→ real API adapter later if approved
```

beklentisini korur.

Sahte backend/API/database üretmek yasaktır.

---

## 9. Multiple Package / Extension Merge

1. Document ID duplicate üretilmez.
2. Approved planning profiles korunur.
3. Domain requirement'lar union olarak değerlendirilir.
4. Catalog applicability son filtredir.
5. Existing-project extension current/target/transition ayrımını korur.

---

## 10. Run Record

`PACKAGE_SELECTION.md` en az:

```text
selected base package
extensions
implementation_planning
design_planning
PLANNING_PROFILE_OVERLAY application
canonical document IDs
conditional include/exclude decisions
dynamic instance registry summary
```

içermelidir.

Bu seçim validation ve run manifest ile izlenebilir olmalıdır.

---

# Core Invariants

```text
PROFILE DEPTH ≠ QUALITY LEVEL
Prototype ≠ planning reduction
Demo ≠ throwaway architecture
Light design ≠ generic design
Integration-ready ≠ invented backend
Full ≠ generate everything
```
