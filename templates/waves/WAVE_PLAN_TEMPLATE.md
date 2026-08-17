# WAVE_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: wave-plan-template
template_name: Canonical Wave Plan Template
document_id: WAVE-PLAN
version: 3.6.0
status: active
template_type: dynamic-document
category: waves
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
supported_implementation_planning:
  - standard
  - full
required_inputs:
  - wave_map
  - tech_context
  - source_register_fcl
conditional_inputs:
  - approved_site_architecture
  - product_rules
  - design_documents
  - test_strategy
dependencies:
  - WAVE-MAP
  - TECH-CTX
output_filename_pattern: waves/plans/WAVE_<NN>.md
```

## Amaç

Tek bir WAVE_MAP entry'sini başka bir planlama turu gerektirmeden uygulanabilir execution contract haline getirir.

WAVE_PLAN yeni scope keşfetmez. Capability ve page/surface identities exact parent WAVE_MAP entry'den gelir.

---

## Required Point-of-Use Quality Calibration

Her gerçek WAVE_PLAN ayrı generation checkpoint'tir:

```text
fresh templates/waves/WAVE_PLAN_TEMPLATE.md
→ exact WAVE_NN parent entry
→ at least one isolated depth reference re-opened for THIS wave
→ current project authorities / source-FCL / page identities as applicable
→ generate ONLY WAVE_NN
→ atomize + page-diff + validate + repair
→ CLOSE
```

`QUALITY_REF_READ_COUNT(WAVE_NN) >= 1`.

Relevant isolated references:

```text
UI / page / feature / content / responsive / cross-page QA
→ ref/waves/WAVE_07_HOME_REFERENCE.md

runtime / lifecycle / state-heavy / data-service foundation
→ ref/waves/WAVE_12_RUNTIME_REFERENCE.md
```

Reference current scope, page set, routes, filenames veya completion state authorize etmez.

---

## Parent Boundary

Canonical invariants:

```text
WAVE_PLAN capability atoms ⊆ exact parent WAVE_MAP capability atoms
WAVE_PLAN page identities ⊆ exact parent Covered Page IDs
```

Plan component/file/task/verification seviyesinde detaylandırabilir fakat yeni capability veya page ekleyemez.

### Parent Capability Coverage

Zorunlu tablo:

```text
Plan Capability | Parent Capability | Relation | Result
```

Allowed relation:

```text
detail-of | implementation-of | verification-of
```

`new-capability`, `adjacent-capability`, `inferred-capability` → FAIL.

### Parent Page Coverage

Parent `Covered Page IDs` applicable ise plan şu tabloyu taşımalıdır:

```text
Plan Page ID | Parent Covered Page ID | Route/Surface Responsibility | Result
```

Rules:

- Plan yeni PAGE ID üretemez.
- Approved distinct page başka parent page'in section/anchor task'ına collapse edilemez.
- Page-specific task exact page responsibility/route identity'yi görünür kılmalıdır.
- Technical-only parent wave'de Page Coverage `N/A` olabilir.

---

## Content Truth Boundary

```text
FCL semantic content ⊆ exact supporting source evidence
generated factual claim ⊆ referenced FCL semantic content
```

Page detail planning factual enrichment izni değildir. Hizmet adı için stok/orijinallik/SLA/acil servis/periyodik bakım vb. qualifier exact source/FCL olmadan eklenemez.

Teknik implementation kararları (component boundary, CSS, routing wiring, adapter, responsive behavior) current authorities içinde resolve edilebilir ancak yeni product capability veya real-world fact üretemez.

---

## Delivery Profile Wording Guard

```text
Prototype -> demo-ready / sales-demo ready allowed
Prototype -> implementation-ready / production-ready / launch-ready forbidden
```

Prototype approved page breadth'i düşürmez.

---

## Pre-Execution State

```text
Status = Ready for Execution | Pending Execution | Blocked
Implementation Checklist = [ ]
Acceptance / Exit Criteria = [ ]
Wave Result = pending / not executed
```

Reference artifact completion state current plan'a taşınamaz.

---

## Zorunlu Bölümler

- Wave Identity & Status
- Parent Wave Map Entry
- Parent Capability Coverage
- Parent Page Coverage (applicable ise)
- Goal
- Why This Wave / Dependency Rationale
- Canonical Sources to Read
- Dependencies
- In Scope / Out of Scope
- Expected Result / Target Structure
- Implementation Checklist
- State / Role / Responsive Coverage
- Automated Verification
- Manual QA / Debug Verification
- Acceptance / Exit Criteria
- Handoff / Stop Rule
- Wave Result

---

## Implementation-Ready Depth Standardı

Fresh capable agent ikinci implementation-planning pass yapmadan execution'a başlayabilmelidir.

Applicable task mini-contract:

```text
Task / Result
Location / Responsibility
Parent Capability Relation
Parent Page Identity (page-specific ise)
Inputs / Dependencies / Contracts
Implementation Behavior
Applicable States / Responsive / Edge Cases
Preserve / Must Not
FCL / Source Boundary if factual
Verification
Concrete Done Result
```

Page-specific task için ayrıca:

- exact `PAGE-XXX`,
- route/navigation identity,
- page responsibility,
- shared shell ile boundary,
- page-specific data/content source,
- responsive transformation

açık olmalıdır.

“Corporate page yap”, “services ekle”, “responsive yap” tek başına implementation-ready değildir.

---

## Required Diffs Before Write

```text
CAPABILITY DIFF:
plan parent capability setini genişletiyor mu?

PAGE DIFF:
plan parent Covered Page IDs dışına çıkıyor mu veya distinct page'i collapse ediyor mu?

FACT DIFF:
plan/prose exact FCL'den daha geniş gerçek-dünya anlamı taşıyor mu?
```

Her expansion write öncesi repair/remove edilir.

---

## Per-Instance Stop Rule

```text
WRITE WAVE_NN
→ capability diff
→ page diff
→ factual diff
→ profile wording diff
→ repair
→ checkpoint CLOSE
→ next wave NEW fresh WAVE_PLAN_TEMPLATE read
```

Bir fresh template/reference read ile birden fazla WAVE write geçersizdir.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — {{WAVE_ID}}: {{WAVE_NAME}}

- **Status**: {{WAVE_STATUS}}
- **Parent Wave**: `{{WAVE_ID}}` in `waves/WAVE_MAP.md`
- **Goal**: {{WAVE_GOAL}}

## 1. Parent Wave Map Entry
{{PARENT_WAVE_MAP_ENTRY}}

## 2. Parent Capability Coverage
{{PARENT_CAPABILITY_COVERAGE}}

## 3. Parent Page Coverage
{{PARENT_PAGE_COVERAGE}}

## 4. Why This Wave / Dependency Rationale
{{WHY_THIS_WAVE}}

## 5. Canonical Sources to Read
{{CANONICAL_SOURCES}}

## 6. Dependencies
{{DEPENDENCIES}}

## 7. Scope
### In Scope
{{IN_SCOPE}}
### Out of Scope
{{OUT_OF_SCOPE}}

## 8. Expected Result / Target Structure
{{EXPECTED_RESULT}}

## 9. Implementation Checklist
> Every task must resolve to an exact parent capability atom. Page-specific tasks must resolve to an exact parent PAGE identity.
>
> Tasks must be implementation-ready and factual prose must remain exact-FCL bounded.
{{IMPLEMENTATION_CHECKLIST}}

## 10. State / Role / Responsive Coverage
{{STATE_ROLE_COVERAGE}}

## 11. Automated Verification
{{AUTOMATED_VERIFICATION}}

## 12. Manual QA / Debug Verification
{{MANUAL_QA}}

## 13. Acceptance / Exit Criteria
{{ACCEPTANCE_CRITERIA}}

## 14. Handoff / Stop Rule
{{HANDOFF_STOP_RULE}}

---
## Wave Result
{{WAVE_RESULT_PLACEHOLDER}}

# OUTPUT DOCUMENT END
