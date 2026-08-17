# Product Engine

## Product Engine Nedir?

Product Engine; yapılandırılmış ve approved project truth'u modele bağımlı olmaksızın tutarlı, agent-ready proje dokümantasyonu, design/execution planning ve validation package'ına dönüştüren sistemdir.

Kullanılan ajanın Codex, Claude, Gemini veya başka bir sistem olması fark etmeksizin; ajan ürünün amacını, approved scope'unu, site/page architecture'ını, kurallarını, mimarisini, design context'ini ve execution wave'lerini canonical belgelerden okuyarak doğrudan çalışabilmelidir.

---

## Current Version

```text
Product Engine Version: 0.3.1
Active Version Authority: Root README.md
Version History Authority: logs/ENGINE_CHANGELOG.md
```

`v0.3.1`, v0.3.0 corporate multi-page modelini korur ve generated child-capability scope authorization'ını deterministic/fail-closed hale getirir.

Major distinction:

```text
project_type       → ne üretiyoruz?
delivery_profile   → hangi maturity'de teslim ediyoruz?
site_architecture  → hangi approved pages/surfaces var?
approved capability scope → kullanıcı ne yapabilir / sistem ne davranış gösterebilir?
planning profiles  → planning depth nedir?
technical stack    → nasıl sürdürülebilir implement ediyoruz?
```

Canonical invariants:

```text
corporate website ≠ landing page
sales demo ≠ project type
Prototype ≠ page breadth reduction
approved distinct pages ≠ anchor sections
relatedness ≠ capability authorization
approved page existence ≠ all plausible interactions on that page
```

Active runtime project type vocabulary `landing-page` içermez; corporate firm/site işleri `project_type: corporate-website` olarak modellenir.

---

## Repository Map

| Klasör / Dosya | Rol |
|---|---|
| `README.md` | Repository entry point + active version authority. |
| `PRODUCT_ENGINE_BRAIN.md` | Engine amacı/vizyonu/operating philosophy. |
| `engine/` | Intake, capability scope, site architecture, planning, package, generation, validation, lifecycle contracts. |
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
5. engine/CAPABILITY_SCOPE_RULES.md
6. engine/SITE_ARCHITECTURE_RULES.md (corporate/page architecture applicable ise)
7. engine/PLANNING_PROFILES.md
8. engine/DOCUMENT_CATALOG.md
9. engine/PACKAGE_RULES.md
10. task için gerekli diğer engine contracts
11. selected package(s)
12. relevant point-of-use templates
13. lifecycle'a göre project source / pending or approved input
14. active run records when run exists
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
APPROVED INPUT + APPROVED PAGE SET + APPROVED EXECUTABLE SCOPE
        ↓
BASE PACKAGE + PLANNING OVERLAY
        ↓
DOCUMENT / DYNAMIC INSTANCE RESOLUTION
        ↓
GENERATION + PER-ARTIFACT CAPABILITY DIFF
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
Relatedness ≠ authorization
Page/surface existence ≠ child interaction approval
Generated upstream artifact ≠ approved scope authority
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

## v0.3 Corporate Website Model

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

## v0.3.1 Capability Semantic Gate

Canonical owner:

```text
engine/CAPABILITY_SCOPE_RULES.md
```

Every independently meaningful generated behavior:

```text
GENERATED_CAPABILITY
→ exact approved executable support
→ semantic subset PASS
```

Örnek:

```text
Approved:
Contact page + phone/email direct contact

Generated candidate:
contact form + fields + submit + success state

Result:
UNSUPPORTED
→ generation repair
→ unresolved ise VAL-04 FAIL
```

PAGE-DESIGN dahil implementation-bearing generated artifact'ler capability diff'e tabidir. Unsupported behavior downstream WAVE_MAP/WAVE_PLAN'a kopyalanarak authorize hale gelemez.

---

## Current Build State

```text
Core Engine Foundation                     : Completed
Planning / Wave / Design Systems            : Completed
Deterministic Continuation Gate v0.2.2      : Validated — ISSUE-001 Resolved
Corporate Website / Site Architecture v0.3.0: Validated by RUN-20260817-004 — ISSUE-002 Resolved
Capability Semantic Scope Gate v0.3.1       : Implemented — Awaiting Fresh Real-Run Validation
Overall v0.3.1 State                        : Operational; fresh Trakya run is ISSUE-003 validation target
```

`RUN-20260817-004` v0.3 corporate page architecture modelini başarıyla kanıtladı; aynı run ayrıca contact direct-contact scope'undan unsupported interactive form türetildiğini ve eski validator'ın bunu kaçırdığını gösterdi. Bu ayrı defect `ISSUE-003` olarak v0.3.1'de fixlenmiştir ve fresh run ile doğrulanacaktır.

---

## Version History Boundary

- `v0.1.0`: First real Engine runtime.
- `v0.2.0`: Planning profiles + implementation/design/wave architecture.
- `v0.2.1`: Continuation intent/rationale guard; fresh run loophole gösterdi.
- `v0.2.2`: Deterministic continuation gate + blocking VAL-09; fresh run ile validated.
- `v0.3.0`: First-class corporate-website type + approved multi-page Site Architecture + page-aware generation/validation.
- `v0.3.1`: All generated executable artifacts için exact semantic capability authorization + PAGE-DESIGN/VAL-04 scope gate.

Historical run/output/changelog evidence geriye dönük yeni vocabulary'ye migrate edilmez; active contracts yeni kuralları uygular.
