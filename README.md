# Product Engine

## Product Engine Nedir?

Product Engine; yapılandırılmış ve approved project truth'u modele bağımlı olmaksızın tutarlı, agent-ready proje dokümantasyonu, design/execution planning ve validation package'ına dönüştüren sistemdir.

Kullanılan ajanın Codex, Claude, Gemini veya başka bir sistem olması fark etmeksizin; ajan ürünün amacını, approved scope'unu, site/page architecture'ını, kurallarını, mimarisini, design context'ini ve execution wave'lerini canonical belgelerden okuyarak doğrudan çalışabilmelidir.

---

## Current Version

```text
Product Engine Version: 0.3.0
Active Version Authority: Root README.md
Version History Authority: logs/ENGINE_CHANGELOG.md
```

`v0.3.0`, corporate website planning modelini first-class multi-page architecture seviyesine yükseltir.

Major distinction:

```text
project_type       → ne üretiyoruz?
delivery_profile   → hangi maturity'de teslim ediyoruz?
site_architecture  → hangi approved pages/surfaces var?
planning profiles  → planning depth nedir?
technical stack    → nasıl sürdürülebilir implement ediyoruz?
```

Canonical corporate invariants:

```text
corporate website ≠ landing page
sales demo ≠ project type
Prototype ≠ page breadth reduction
approved distinct pages ≠ anchor sections
```

Active runtime project type vocabulary artık `landing-page` içermez; corporate firm/site işleri `project_type: corporate-website` olarak modellenir.

---

## Repository Map

| Klasör / Dosya | Rol |
|---|---|
| `README.md` | Repository entry point + active version authority. |
| `PRODUCT_ENGINE_BRAIN.md` | Engine amacı/vizyonu/operating philosophy. |
| `engine/` | Intake, site architecture, planning, package, generation, validation, lifecycle contracts. |
| `packages/` | Domain/base packages + planning overlay. |
| `templates/` | Canonical project/design/wave/run skeletons. |
| `project-start/` | Pre-run source + launcher layer. |
| `inputs/` | Pending/approved project truth. |
| `runs/` | Operational run lifecycle/evidence. |
| `outputs/` | Published validated agent-ready documentation packages. |
| `products/` | Runtime Engine contract'ı değil; gerçek application implementation workspace convention olarak kullanılabilir. |
| `logs/` | Persistent engine history/issues/changelog/hardening. |
| `examples/`, `archive/`, `planning/`, `ref/` | Non-runtime historical/reference/calibration layers. |

---

## Authority Hierarchy

```text
Root README
→ active version + repository navigation

PRODUCT_ENGINE_BRAIN
→ purpose / vision / operating philosophy

engine/
→ runtime behavioral contracts

packages/
→ domain package requirements

templates/
→ canonical artifact skeletons

inputs/
→ project-specific pending/approved truth

runs/
→ execution evidence

outputs/
→ published clean documentation deliverables

logs/
→ persistent engine memory/history
```

`project-start/` source context'tir; Engine authority'yi geçersiz kılamaz.

---

## Canonical Agent Boot / Read Order

> Agent Boot Read Order ≠ Runtime Execution Flow. Runtime generation order `engine/GENERATION_PIPELINE.md` sahibidir.

```text
1. Root README.md
2. PRODUCT_ENGINE_BRAIN.md
3. engine/README.md
4. engine/PROJECT_INTAKE.md
5. engine/SITE_ARCHITECTURE_RULES.md (corporate/page architecture applicable ise)
6. engine/PLANNING_PROFILES.md
7. engine/DOCUMENT_CATALOG.md
8. engine/PACKAGE_RULES.md
9. task için gerekli diğer engine contracts
10. selected package(s)
11. relevant point-of-use templates
12. lifecycle'a göre project source / pending or approved input
13. active run records when run exists
```

---

## Runtime Mental Model

```text
PROJECT SOURCE / RAW BRIEF
        ↓
PROJECT INTAKE
        ↓
PROJECT TYPE + PLANNING PROFILE RESOLUTION
        ↓
PROPOSED SITE ARCHITECTURE (corporate if needed)
        ↓
PENDING INPUT
        ↓
EXPLICIT USER APPROVAL
        ↓
APPROVED INPUT + APPROVED PAGE SET
        ↓
BASE PACKAGE + PLANNING OVERLAY
        ↓
DOCUMENT / DYNAMIC INSTANCE RESOLUTION
        ↓
GENERATION
        ↓
VALIDATION
        ↓
AGENT-READY OUTPUT
        ↓
RUN COMPLETION / HISTORY
```

---

## Core Quality / Modeling Rules

```text
Profile depth ≠ quality level
Profile depth ≠ approved scope/page breadth
Prototype/demo ≠ throwaway architecture
Corporate website ≠ landing page
Sales demo ≠ project type
Proposed page architecture ≠ approved architecture
Approved distinct pages ≠ anchor sections
Integration-ready ≠ invented backend
Continuation expected + no approved zero-build constraint
→ package-managed/component-oriented baseline REQUIRED
Future framework migration ≠ same-codebase continuation
```

Corporate website + multiple approved pages için default intake recommendation:

```text
implementation_planning: standard
design_planning: standard
```

Bu recommendation explicit approval yerine geçmez.

---

## v0.3.0 Corporate Website Model

Corporate approved input `site_architecture` registry taşır:

```text
PAGE-XXX
Page Name
Purpose
Route / Navigation Identity
Scope Status
Primary Content / Capability Boundaries
Parent / Detail Relation
```

Generation minimum chain:

```text
APPROVED_PAGE_SET
→ Global Shell navigation
→ PAGE-DESIGN instances (standard/full)
→ WAVE_MAP Covered Page IDs
→ WAVE_PLAN page implementation tasks
```

Validation blockers:

```text
APPROVED_PAGE_SET == PLANNED_PAGE_SET
APPROVED_PAGE_SET == NAVIGATION_PAGE_SET
```

`design_planning: standard | full` ise:

```text
APPROVED_PAGE_SET == PAGE_DESIGN_INSTANCE_SET
```

Distinct page'i aynı document anchor section'a collapse etmek `VAL-04 FAIL` üretir.

---

## Current Build State

```text
Core Engine Foundation                     : Completed
Planning / Wave / Design Systems            : Completed
Deterministic Continuation Gate v0.2.2      : Validated — ISSUE-001 Resolved
Corporate Website / Site Architecture v0.3.0: Implemented — Awaiting Fresh Real-Run Validation
Overall v0.3.0 State                        : Operational; fresh Trakya corporate run is validation target
```

`ISSUE-002` fresh v0.3.0 corporate generation gerçek multi-page approved architecture + page-aware validation üretene kadar `Implemented — Awaiting Validation` kalır.

---

## Version History Boundary

- `v0.1.0`: First real Engine runtime.
- `v0.2.0`: Planning profiles + implementation/design/wave architecture.
- `v0.2.1`: Continuation intent/rationale guard; fresh run loophole gösterdi.
- `v0.2.2`: Deterministic continuation gate + blocking VAL-09; fresh run ile validated.
- `v0.3.0`: First-class corporate-website type + approved multi-page Site Architecture + page-aware generation/validation.

Historical run/output/changelog evidence geriye dönük yeni vocabulary'ye migrate edilmez; active contracts yeni kuralları uygular.
