# WAVE_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: wave-plan-template
template_name: Canonical Wave Plan Template
document_id: WAVE-PLAN
version: 3.0.0
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
WAVE_PLAN task/deliverable scope ⊆ exact parent WAVE_MAP entry
```

Plan şunları yapabilir:
- parent entry'deki deliverable'ları implementation task'larına ayırmak,
- component/file/structure seviyesinde detaylandırmak,
- verification ve acceptance kriterlerini somutlaştırmak.

Plan şunları yapamaz:
- parent entry'de olmayan yeni capability eklemek,
- başka wave'in scope'unu almak,
- Future/Open/Out-of-Scope içeriği current implementation'a taşımak,
- WAVE_MAP boundary'sini genişletmek.

SCP registry plan task'larında tekrar referanslanmak zorunda değildir. Approved scope enforcement WAVE_MAP oluşturulurken yapılır.

## Content Truth Boundary
Her factual claim için:

```text
FCL semantic content ⊆ exact supporting source evidence
generated factual claim ⊆ referenced FCL semantic content
```

Source'tan genişletilmiş FCL kullanılamaz. FCL ID factual enrichment izni değildir.

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
Her task şu sorulara cevap verir:

```text
Ne yapılacak?
Parent WAVE_MAP entry'nin hangi deliverable/boundary'sini detaylandırıyor?
Task parent wave boundary içinde mi?
Factual claim varsa hangi exact source-backed FCL authorize ediyor?
Beklenen sonuç nedir?
Done nasıl doğrulanacak?
```

## Parent Boundary Stop Rule

Bir task/deliverable parent WAVE_MAP entry'den açıkça türetilemiyorsa:

```text
DO NOT ADD TO PLAN
→ return to WAVE_MAP / approved scope
→ repair upstream map if genuinely approved
→ otherwise remove the task
```

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — {{WAVE_ID}}: {{WAVE_NAME}}

- **Status**: {{WAVE_STATUS}}
- **Parent Wave**: `{{WAVE_ID}}` in `waves/WAVE_MAP.md`
- **Goal**: {{WAVE_GOAL}}

## 1. Parent Wave Map Entry
{{PARENT_WAVE_MAP_ENTRY}}

## 2. Why This Wave / Dependency Rationale
{{WHY_THIS_WAVE}}

## 3. Canonical Sources to Read
{{CANONICAL_SOURCES}}

## 4. Dependencies
{{DEPENDENCIES}}

## 5. Scope
### In Scope
{{IN_SCOPE}}
### Out of Scope
{{OUT_OF_SCOPE}}

## 6. Expected Result / Target Structure
{{EXPECTED_RESULT}}

## 7. Implementation Checklist
> Every task must remain inside the exact parent WAVE_MAP entry. New capability introduced only here is invalid. Factual claims remain inside exact source-backed FCL boundaries.
{{IMPLEMENTATION_CHECKLIST}}

## 8. State / Role / Responsive Coverage
{{STATE_ROLE_COVERAGE}}

## 9. Automated Verification
{{AUTOMATED_VERIFICATION}}

## 10. Manual QA / Debug Verification
{{MANUAL_QA}}

## 11. Acceptance / Exit Criteria
{{ACCEPTANCE_CRITERIA}}

## 12. Handoff / Stop Rule
{{HANDOFF_STOP_RULE}}

---
## Wave Result
{{WAVE_RESULT_PLACEHOLDER}}

# OUTPUT DOCUMENT END
