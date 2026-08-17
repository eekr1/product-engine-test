# Information Map

## Amaç

Bu belge, Product Engine içindeki her önemli bilgi türünün **tek primary owner** dokümanını tanımlar.

Temel soru:

> Bir bilgi ilk ve authoritative olarak hangi canonical dokümana yazılır?

Amaç; tekrar, drift ve aynı kararın farklı dosyalarda bağımsız gerçeklere dönüşmesini engellemektir.

---

## Sahiplik Modeli

```text
Primary Owner : Bilginin authoritative sahibi
Referenced By : Bilgiye başvuran ancak yeniden sahiplenmeyen belgeler
Derived Into  : Owner bilgisinden türetilen uygulama/plan bilgileri
Must Not Own  : Bu bilgiyi bağımsız truth olarak tutmaması gereken belgeler
```

Planning profile ve approved site architecture değerlerinin project truth sahibi `inputs/approved/.../PROJECT_INPUT.md`'dir. Engine contract'ları semantiği tanımlar; project-specific value'yu sahiplenmez.

---

# Project / Product Ownership

## Proje Amacı ve Genel Bağlam

```text
Primary Owner : PROJECT_BRAIN.md
Referenced By : README.md, PROJECT_PLAN.md, TECH_CONTEXT.md, WAVE_MAP.md
Derived Into  : Milestone/wave hedefleri, teknik ve tasarım bağlam özetleri
Must Not Own  : TECH_CONTEXT.md, WAVE_MAP.md
```

## Ürün Davranışları / Scope Rules

```text
Primary Owner : PRODUCT_RULES.md
Referenced By : DESIGN_RULES.md, PAGE-DESIGN, FEATURE-DESIGN, AGENT_INSTRUCTIONS.md, WAVE_PLAN instances
Derived Into  : UX constraints, page actions, feature behaviors, acceptance criteria
Must Not Own  : DESIGN_RULES.md, TECH_CONTEXT.md
```

## Implementation / Design Planning Profile Değerleri

```text
Primary Owner : Approved PROJECT_INPUT.md
Referenced By : RUN_MANIFEST.md, PACKAGE_SELECTION.md, README.md (özet)
Derived Into  : Planning overlay document scope
Must Not Own  : Base package dosyaları, PROJECT_BRAIN.md, DESIGN_RULES.md
```

## Corporate Site Architecture / Page Registry

```text
Project-Specific Truth Owner : Approved PROJECT_INPUT.md / Site Architecture section
Semantic Contract Owner      : engine/SITE_ARCHITECTURE_RULES.md
Referenced By                : PROJECT_BRAIN.md, PRODUCT_RULES.md, GLOBAL_SHELL.md, PAGE-DESIGN instances, WAVE_MAP.md, WAVE_PLAN instances, PROJECT_PLAN.md
Derived Into                 : navigation registry, page-design instance set, wave page coverage, route/page implementation tasks
Must Not Own                 : GLOBAL_SHELL.md, PAGE-DESIGN, WAVE_MAP.md, WAVE_PLAN (bunlar yeni PAGE identity icat edemez)
```

Canonical rule:

```text
approved PAGE-XXX truth
→ downstream reference/implementation
≠ downstream re-definition
```

---

# Technical Ownership

## Teknik Stack ve Mimari Boundary'ler

```text
Primary Owner : TECH_CONTEXT.md
Referenced By : PROJECT_BRAIN.md (özet), PROJECT_PLAN.md, WAVE_MAP.md, WAVE_PLAN instances, README.md
Derived Into  : Data/API/test/deployment planları, routing/tooling implementation
Must Not Own  : PRODUCT_RULES.md, DESIGN_RULES.md
```

## Data / Service / Integration Readiness

```text
Primary Owner : TECH_CONTEXT.md
Referenced By : PAGE-DESIGN, FEATURE-DESIGN, WAVE_PLAN instances, DATA_MODEL.md, API_CONTRACTS.md
Derived Into  : Mock/local adapter sınırı, future real integration görevleri
Must Not Own  : Page component specs, PRODUCT_RULES.md
```

Gerçek backend/API yoksa TECH_CONTEXT yalnız boundary ve unresolved future context sahibi olur; sahte endpoint/database üretmez.

## Veri Modeli

```text
Primary Owner : DATA_MODEL.md
Referenced By : API_CONTRACTS.md, TECH_CONTEXT.md (özet), TEST_STRATEGY.md, WAVE_PLAN instances
Derived Into  : API schema ve data validation görevleri
Must Not Own  : TECH_CONTEXT.md, PAGE-DESIGN
```

## API Yüzeyi

```text
Primary Owner : API_CONTRACTS.md
Referenced By : TECH_CONTEXT.md (özet), TEST_STRATEGY.md, WAVE_PLAN instances, PAGE/FEATURE design touchpoint references
Derived Into  : Integration ve test görevleri
Must Not Own  : TECH_CONTEXT.md, PAGE-DESIGN, FEATURE-DESIGN
```

## Test Stratejisi

```text
Primary Owner : TEST_STRATEGY.md
Referenced By : WAVE_PLAN instances, AGENT_INSTRUCTIONS.md, NEXT_TASKS.md
Derived Into  : Wave verification görevleri
Must Not Own  : TECH_CONTEXT.md, PROJECT_BRAIN.md
```

## Deployment / Operations

```text
Deployment Primary Owner : DEPLOYMENT.md
Operations Primary Owner : OPERATIONS.md
Referenced By            : TECH_CONTEXT.md, PROJECT_PLAN.md, WAVE_PLAN instances
Must Not Own              : Birbirlerinin ayrıntılı owner alanları
```

---

# Design Ownership

## Visual Concept / Design Character / Global UX Principles

```text
Primary Owner : DESIGN_RULES.md
Referenced By : DESIGN_SYSTEM.md, GLOBAL_SHELL.md, PAGE-DESIGN, FEATURE-DESIGN, SYSTEM_STATES.md, ADMIN_OPERATIONAL_DESIGN.md
Derived Into  : Token, shell, page, feature ve state design kararları
Must Not Own  : PRODUCT_RULES.md, PROJECT_BRAIN.md
```

## Design Tokens / Typography / Semantic Colors / Primitive System

```text
Primary Owner : DESIGN_SYSTEM.md
Referenced By : GLOBAL_SHELL.md, PAGE-DESIGN, FEATURE-DESIGN, SYSTEM_STATES.md, ADMIN_OPERATIONAL_DESIGN.md
Derived Into  : Page/component implementation styles
Must Not Own  : PAGE-DESIGN, FEATURE-DESIGN, DESIGN_RULES.md (yalnız yön/karakter sahibi)
```

## Global Shell / Navigation / Global Layout

```text
Primary Owner : GLOBAL_SHELL.md (implementation/design representation)
Truth Input   : Approved Site Architecture PAGE registry
Referenced By : PAGE-DESIGN, FEATURE-DESIGN, README.md
Derived Into  : Navigation composition, route presentation, responsive shell behavior
Must Not Own  : Yeni page identity, page-specific content
```

## Page / Screen-Specific Design

```text
Primary Owner : İlgili PAGE-DESIGN instance (yalnız design contract)
Identity Truth: Approved PAGE-XXX registry
Referenced By : FEATURE-DESIGN, WAVE_PLAN instances
Derived Into  : Page implementation tasks
Must Not Own  : Global shell, design tokens, yeni page identity
```

PAGE-DESIGN yalnız approved surface'inin layout, sections, actions, responsive behavior ve local state ilişkisini sahiplenir.

## Cross-Screen / Complex Feature Design

```text
Primary Owner : İlgili FEATURE-DESIGN instance
Referenced By : WAVE_PLAN instances, PAGE-DESIGN (kısa referans)
Derived Into  : Feature implementation / state transition görevleri
Must Not Own  : PAGE-DESIGN layout ownership, SYSTEM_STATES global rules, new page identities
```

## Shared UI States

```text
Primary Owner : SYSTEM_STATES.md
Referenced By : PAGE-DESIGN, FEATURE-DESIGN, ADMIN_OPERATIONAL_DESIGN.md
Derived Into  : Loading/empty/error/success/recovery implementation
Must Not Own  : Tekil page layout veya business rule
```

## Admin / Operational UI

```text
Primary Owner : ADMIN_OPERATIONAL_DESIGN.md
Referenced By : Relevant PAGE-DESIGN / FEATURE-DESIGN / WAVE_PLAN instances
Derived Into  : Admin/ops implementation tasks
Must Not Own  : Auth/business permission truth
```

---

# Execution Planning Ownership

## Project Roadmap / Milestones

```text
Primary Owner : PROJECT_PLAN.md
Referenced By : README.md, WAVE_MAP.md
Derived Into  : Wave architecture
Must Not Own  : WAVE_MAP ayrıntılı wave structure veya page truth
```

## Wave Architecture / Scope / Page Coverage / Dependency Chain

```text
Primary Owner : WAVE_MAP.md (execution decomposition)
Truth Inputs  : Approved capability scope + approved PAGE registry
Referenced By : PROJECT_PLAN.md, CURRENT_STATUS.md, AGENT_INSTRUCTIONS.md, WAVE_PLAN instances
Derived Into  : Dynamic WAVE-PLAN instances
Must Not Own  : Yeni capability veya page identity
```

## Tekil Wave Tasks / Acceptance / Verification

```text
Primary Owner : İlgili WAVE-PLAN instance
Truth Inputs  : Parent WAVE_MAP capability + Covered Page IDs
Referenced By : CURRENT_STATUS.md, NEXT_TASKS.md, AGENT_INSTRUCTIONS.md
Derived Into  : Immediate execution queue
Must Not Own  : WAVE_MAP scope veya yeni page identity
```

## Current Project State / Active Wave

```text
Primary Owner : CURRENT_STATUS.md
Referenced By : NEXT_TASKS.md, README.md, AGENT_INSTRUCTIONS.md
Derived Into  : Immediate tasks
Must Not Own  : WAVE_MAP.md, PROJECT_PLAN.md
```

## Immediate Active-Wave Tasks

```text
Primary Owner : NEXT_TASKS.md
Referenced By : AGENT_INSTRUCTIONS.md
Derived Into  : Agent'ın sıradaki execution queue'su
Must Not Own  : Future-wave backlog veya roadmap
```

## Agent Working Rules / Handoff Discipline

```text
Primary Owner : AGENT_INSTRUCTIONS.md
Referenced By : README.md
Derived Into  : Agent execution behavior
Must Not Own  : Product business rules veya Engine runtime rules
```

## Kalıcı Proje Kararları

```text
Primary Owner : DECISIONS.md
Referenced By : PROJECT_BRAIN.md, TECH_CONTEXT.md, DESIGN_RULES.md, WAVE_PLAN instances
Derived Into  : Uygulama ve future run context
Must Not Own  : ASSUMPTIONS kayıtlarının kendisi
```

---

# Entry / Navigation Ownership

## Project README

```text
Primary Owner : README.md
Purpose       : Project output read-order / navigation / quick start
Must Not Own  : Diğer belgelerin detay truth alanları veya site architecture
```

README özetler ve yönlendirir; owner belgelerin içeriğini kopyalamaz.

---

# Aynı Bilginin Farklı Seviyelerde Temsili

```text
Site architecture:
  Approved PROJECT_INPUT → authoritative PAGE registry
  PROJECT_BRAIN          → summary
  GLOBAL_SHELL           → navigation/design representation
  PAGE-DESIGN            → exact page design contract
  WAVE_MAP               → execution coverage
  WAVE_PLAN              → implementation tasks

Visual direction:
  DESIGN_RULES      → authoritative concept
  DESIGN_SYSTEM     → token'a dönüştürür
  PAGE-DESIGN       → page composition'da uygular

Wave:
  WAVE_MAP          → goal/scope/dependency/page coverage
  WAVE_PLAN         → concrete tasks/acceptance
  CURRENT_STATUS    → aktif wave gerçeği
  NEXT_TASKS        → aktif wave'in sıradaki görevleri
```

---

# Güncelleme Zincirleri

Primary owner değişirse dependent belgeler kontrol edilmelidir:

```text
Approved Site Architecture
→ PROJECT_BRAIN / PRODUCT_RULES / GLOBAL_SHELL / PAGE-DESIGN instances / WAVE_MAP / PROJECT_PLAN

PROJECT_BRAIN
→ PRODUCT_RULES / TECH_CONTEXT / PROJECT_PLAN / WAVE_MAP / DESIGN

TECH_CONTEXT
→ WAVE plans / DATA / API / TEST / DEPLOY / integration touchpoints

DESIGN_RULES
→ DESIGN_SYSTEM / GLOBAL_SHELL / PAGE / FEATURE / SYSTEM_STATES / ADMIN

DESIGN_SYSTEM
→ GLOBAL_SHELL / PAGE / FEATURE / SYSTEM_STATES / ADMIN

WAVE_MAP
→ WAVE_PLAN instances / PROJECT_PLAN / CURRENT_STATUS

WAVE_PLAN(active)
→ CURRENT_STATUS / NEXT_TASKS
```

Validation bu dependency zincirlerinde drift olup olmadığını kontrol eder.

---

# Tekrar ve Drift Önleme

MUST NOT:

- Same technical decision PROJECT_BRAIN ve TECH_CONTEXT'te bağımsız truth olmak,
- GLOBAL_SHELL yeni PAGE ID icat etmek,
- PAGE-DESIGN approved registry dışında page üretmek,
- WAVE_MAP approved page setini azaltmak veya genişletmek,
- WAVE_PLAN parent Covered Page IDs dışına çıkmak,
- page package kendi token system'ini icat etmek,
- NEXT_TASKS future roadmap'e dönüşmek,
- design document business fact uydurmak,
- TECH_CONTEXT integration readiness gerekçesiyle sahte API/database contract üretmek.
