# Product Engine — Engine Changelog (`logs/ENGINE_CHANGELOG.md`)

## 1. Amaç ve Otorite

Bu belge Product Engine'in çekirdek contracts, package behavior, template schema, input/run/output lifecycle ve validation değişikliklerinin resmi version history authority'sidir.

- Root `README.md` → active version authority.
- `logs/ENGINE_CHANGELOG.md` → version history authority.

Güncel aktif sürüm: `v0.3.0`.

---

## 2. Sürüm Geçmişi

### v0.1.0 — First Real Engine Runtime
İlk gerçek Product Engine runtime.

### v0.2.0 — Planning / Design / Wave Architecture
Planning profiles, implementation-ready wave planning, design planning ve integration-readiness mimarisi.

---

## PE-CHANGE-007 — 2026-08-17

- **Version:** v0.2.1
- **Change Type:** Fixed
- **Affected Area:** engine/PLANNING_PROFILES.md | packages/DEMO_FRONTEND_PACKAGE.md | templates/ai/TECH_CONTEXT_TEMPLATE.md | logs/ISSUES.md
- **Breaking Change:** No
- **Related Issue:** ISSUE-001
- **Related Run:** RUN-20260815-001

### Summary
Continuation-ready frontend stack selection intent'i eklendi. Sales/client demo için package-managed/component-ready baseline tercih edildi; zero-build yaklaşım için continuation rationale beklendi.

### Validation Outcome
Fresh `RUN-20260817-002` fix'in deterministic olmadığını gösterdi. Agent rationale üretip yine dependency-free Vanilla seçebildi ve future framework migration'ını continuation saydı. `VAL-09` bunu yakalamadı.

---

## PE-CHANGE-008 — 2026-08-17

- **Version:** v0.2.2
- **Change Type:** Fixed
- **Affected Area:** engine/PLANNING_PROFILES.md | packages/DEMO_FRONTEND_PACKAGE.md | templates/ai/TECH_CONTEXT_TEMPLATE.md | engine/VALIDATION_RULES.md | README.md | logs/ISSUES.md
- **Breaking Change:** No
- **Related Issue:** ISSUE-001
- **Related Run:** RUN-20260817-002, RUN-20260817-003

### Summary
Continuation-ready frontend stack selection preference/rationale modelinden deterministic blocking gate modeline geçirildi.

Canonical invariant:

```text
continuation_expected = YES
+ approved_zero_build_constraint = NONE
→ package-managed/component-oriented frontend baseline REQUIRED
```

### Impact
- Zero-build yalnız exact approved user/project/environment constraint ile mümkün.
- Agent-generated rationale approved constraint değil.
- Future framework migration same-codebase continuation değil.
- TECH_CONTEXT package manifest + dev/build/preview evidence üretir.
- `VAL-09` blocking doğrulama yapar.

### Validation Outcome
`RUN-20260817-003` React 18+ + Vite + npm/package.json + repeatable dev/build/preview commands + `Continuation Expected: YES` + `Approved Zero-Build Constraint: NONE` + `Same-Codebase Continuation: PASS` üretti; `VAL-09: PASS` oldu. ISSUE-001 v0.2.2'de Resolved.

---

## PE-CHANGE-009 — 2026-08-17

- **Version:** v0.3.0
- **Change Type:** Changed / Fixed
- **Affected Area:** engine/PROJECT_INTAKE.md | engine/SITE_ARCHITECTURE_RULES.md | engine/PLANNING_PROFILES.md | engine/PACKAGE_RULES.md | engine/DOCUMENT_CATALOG.md | engine/GENERATION_PIPELINE.md | engine/VALIDATION_RULES.md | engine/INFORMATION_MAP.md | packages/CORPORATE_WEBSITE_PACKAGE.md | packages/DEMO_FRONTEND_PACKAGE.md | inputs/ | project-start/templates/ | templates/ai/ | templates/design/ | templates/waves/
- **Breaking Change:** Yes
- **Related Issue:** ISSUE-002
- **Related Run:** RUN-20260817-003 / implementation evidence `f09b4ee852fe085e8d810cbfaa9a9f234d75f69a`

### Summary
Product Engine'in corporate website modeli first-class multi-page information architecture seviyesine yükseltildi.

Active runtime vocabulary'den `landing-page` project type kaldırıldı ve şu first-class type eklendi:

```text
project_type: corporate-website
```

Yeni canonical distinction:

```text
project_type       → ne üretiyoruz?
delivery_profile   → hangi maturity'de teslim ediyoruz?
site_architecture  → hangi approved pages/surfaces var?
planning profiles  → planning depth nedir?
technical stack    → nasıl sürdürülebilir implement ediyoruz?
```

### Canonical Invariants

```text
corporate website ≠ landing page
sales demo ≠ project type
Prototype ≠ site/page breadth reduction
proposed page architecture ≠ approved architecture
approved distinct pages ≠ same-page anchor sections
wave grouping ≠ page omission
```

### New Site Architecture Contract

`engine/SITE_ARCHITECTURE_RULES.md` corporate page/surface architecture semantiğinin canonical owner'ı olarak eklendi.

`project_type: corporate-website` approved input artık PAGE-XXX registry taşımak zorunda:

```text
Page ID
Page Name
Purpose
Route / Navigation Identity
Scope Status
Primary Content / Capability Boundaries
Parent / Detail Relation
```

Exact page list source'ta yoksa Phase A agent pending **Proposed Site Architecture** sunabilir; explicit user approval olmadan executable truth olmaz.

### Package / Domain Changes

- `corporate-website` base package yalnız `project_type: corporate-website` ile eşleşir.
- Corporate sales demo `delivery_profile: Prototype` olsa bile base package `corporate-website` kalır.
- `demo-frontend` corporate domain'i override edemez.
- Corporate website package version 3.0.0 multi-page breadth, navigation ve page coverage guard'larını taşır.

### Planning / Design Changes

Multi-page corporate website için default intake recommendation:

```text
implementation_planning: standard
design_planning: standard
```

Bu automatic approval değildir; user approval gate korunur.

Profile depth approved page breadth'i değiştiremez:

```text
PROFILE DEPTH ≠ APPROVED SCOPE BREADTH
```

### Generation Changes

Corporate run başında:

```text
APPROVED_PAGE_SET = set(IN_SCOPE PAGE-XXX identities)
```

freeze edilir.

Downstream:

```text
approved PAGE registry
→ PROJECT_BRAIN / PRODUCT_RULES reference
→ GLOBAL_SHELL navigation registry
→ PAGE-DESIGN instances (standard/full)
→ WAVE_MAP Covered Page IDs
→ WAVE_PLAN page-specific tasks
```

WAVE_MAP freeze kapısı:

```text
APPROVED_PAGE_SET == PLANNED_PAGE_SET
```

Corporate standard/full design kapısı:

```text
APPROVED_PAGE_SET == PAGE_DESIGN_INSTANCE_SET
```

### Validation Changes

Current `VAL-01..VAL-19` retained; corporate page/domain checks expanded across gates.

Key blockers:

```text
VAL-02 → corporate package/domain selection
VAL-03 → dynamic page-design instance coverage
VAL-04 → approved/planned page equality + collapse detection
VAL-05 → page-aware implementation-ready depth
VAL-07 → approved/navigation/design/wave page identity consistency
VAL-09 → continuation-ready stack + routing/page expansion path
VAL-10 → design profile/page coverage
VAL-12 → site architecture ownership
VAL-14 → unresolved PAGE/route placeholders
VAL-15 → per-instance PAGE-DESIGN/WAVE_PLAN template read-token integrity
VAL-19 → lifecycle/manifest page architecture traceability
```

Explicit collapse detector:

```text
Approved: Home + Corporate + Services + Contact
Generated: / + #corporate + #services + #contact
→ FAIL
```

### Reason
Trakya real project exposed that a visually high-quality, technically continuation-ready React/Vite implementation could still be materially underscoped because corporate intent had been normalized to `landing-page`. Engine lacked a canonical approved page registry and therefore correctly executed the wrong breadth.

### Impact
- Corporate website sales demos now model real website information architecture rather than one-page marketing shortcuts.
- Page breadth becomes explicit user-approved truth.
- Navigation, design packages, wave planning and validation share exact PAGE identities.
- Engine remains scope-safe: page architecture does not authorize new factual company claims.
- v0.2.2 continuation-ready React/Vite-style foundation guard remains active.

---

## 3. Güncel Durum

```text
Active Engine Version Authority : Root README.md (v0.3.0)
Version History Authority       : logs/ENGINE_CHANGELOG.md
Recorded Change Entries         : 9
ISSUE-001                        : Resolved in v0.2.2
ISSUE-002                        : Implemented — Awaiting Fresh v0.3.0 Validation
Next Acceptance Gate            : Fresh Trakya corporate-website intake + multi-page generation
```
