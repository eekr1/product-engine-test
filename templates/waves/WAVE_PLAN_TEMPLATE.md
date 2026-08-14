# WAVE_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: wave-plan-template
template_name: Canonical Wave Plan Template
document_id: WAVE-PLAN
version: 3.1.0
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

## Parent Wave Boundary

WAVE_PLAN scope keşfetmez; WAVE_MAP'te freeze edilmiş exact parent wave entry'yi detaylandırır.

Canonical invariant:

```text
WAVE_PLAN capability atoms ⊆ exact parent WAVE_MAP Committed Capabilities
```

Plan component/file/task/verification seviyesinde detaylandırabilir fakat yeni capability ekleyemez.

## Parent Capability Coverage

Her plan parent WAVE_MAP entry'deki `Committed Capabilities` listesini aynen yeniden resolve eder ve kendi executable capability'lerini atomik biçimde karşılaştırır.

Zorunlu tablo:

```text
Plan Capability | Parent Capability | Relation | Result
```

Allowed relation yalnız:

```text
detail-of
implementation-of
verification-of
```

`new-capability`, `adjacent-capability`, `inferred-capability` sonucu FAIL'dir.

Örnek:

```text
ContactSection markup | phone/email contact presentation | implementation-of | PASS
Footer quick links | <no parent capability> | new-capability | FAIL
Static map card | <no parent capability> | inferred-capability | FAIL
```

Bir capability parent Goal'ın genel anlamından türetilemez; exact parent `Committed Capabilities`, `In Scope` veya `Primary Deliverables` içinde açık semantik support gerekir.

## Content Truth Boundary

Her factual claim için:

```text
FCL semantic content ⊆ exact supporting source evidence
generated factual claim ⊆ referenced FCL semantic content
```

## Pre-Execution State

```text
Status = Ready for Execution | Pending Execution | Blocked
Implementation Checklist = [ ]
Acceptance / Exit Criteria = [ ]
Wave Result = pending / not executed
```

## Zorunlu Bölümler

- Wave Identity & Status
- Parent Wave Map Entry
- Parent Capability Coverage
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

## Task Derinlik Standardı

Her task için:

```text
Ne yapılacak?
Hangi exact parent capability atomunun implementation/detail/verification parçası?
Yeni capability yaratıyor mu?
Factual claim varsa hangi source-backed FCL içinde?
Beklenen sonuç nedir?
Done nasıl doğrulanacak?
```

## Parent Boundary Stop Rule

Bir task/deliverable parent capability atomundan açıkça türetilemiyorsa:

```text
DO NOT ADD TO PLAN
→ mark candidate as unsupported
→ return to WAVE_MAP / approved scope
→ repair upstream map only if genuinely approved
→ otherwise remove candidate
```

Plan kendi parent map'ini sessizce genişletemez.

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

## 3. Why This Wave / Dependency Rationale
{{WHY_THIS_WAVE}}

## 4. Canonical Sources to Read
{{CANONICAL_SOURCES}}

## 5. Dependencies
{{DEPENDENCIES}}

## 6. Scope
### In Scope
{{IN_SCOPE}}
### Out of Scope
{{OUT_OF_SCOPE}}

## 7. Expected Result / Target Structure
{{EXPECTED_RESULT}}

## 8. Implementation Checklist
> Every task must resolve to an exact parent capability atom. New/adjacent/inferred capability introduced only here is invalid.
{{IMPLEMENTATION_CHECKLIST}}

## 9. State / Role / Responsive Coverage
{{STATE_ROLE_COVERAGE}}

## 10. Automated Verification
{{AUTOMATED_VERIFICATION}}

## 11. Manual QA / Debug Verification
{{MANUAL_QA}}

## 12. Acceptance / Exit Criteria
{{ACCEPTANCE_CRITERIA}}

## 13. Handoff / Stop Rule
{{HANDOFF_STOP_RULE}}

---
## Wave Result
{{WAVE_RESULT_PLACEHOLDER}}

# OUTPUT DOCUMENT END
