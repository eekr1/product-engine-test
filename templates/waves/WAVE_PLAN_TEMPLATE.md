# WAVE_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: wave-plan-template
template_name: Canonical Wave Plan Template
document_id: WAVE-PLAN
version: 2.7.0
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
  - input_snapshot_scope_registry
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
Tek bir implementation wave'ini başka bir planlama turu gerektirmeden uygulanabilir execution contract haline getirir.

## Approved Scope Boundary
Her committed task bir veya daha fazla executable `Scope Ref: SCP-XXX` taşır.

Canonical semantic invariant:
```text
task semantic scope ⊆ referenced executable SCP semantic scope
```

SCP ID'nin mevcut olması tek başına yeterli değildir. Telefon/e-posta CTA scope'u ayrıca approved değilse adres kartı, harita, WhatsApp veya form task'ını authorize etmez.

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
- Goal
- Why This Wave / Dependency Rationale
- Canonical Sources to Read
- Dependencies
- Scope + Scope References
- In Scope / Out of Scope
- Expected Result / Target Structure
- Implementation Checklist with Scope Ref(s)
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
Hangi SCP authorize ediyor?
Task scope SCP semantic boundary içinde mi?
Factual claim varsa hangi exact source-backed FCL authorize ediyor?
Generated wording FCL boundary içinde mi?
Beklenen sonuç nedir?
Done nasıl doğrulanacak?
```

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — {{WAVE_ID}}: {{WAVE_NAME}}

- **Status**: {{WAVE_STATUS}}
- **Goal**: {{WAVE_GOAL}}

## 1. Why This Wave / Dependency Rationale
{{WHY_THIS_WAVE}}

## 2. Canonical Sources to Read
{{CANONICAL_SOURCES}}

## 3. Dependencies
{{DEPENDENCIES}}

## 4. Scope
### Scope References
{{SCOPE_REFERENCES}}
### In Scope
{{IN_SCOPE}}
### Out of Scope
{{OUT_OF_SCOPE}}

## 5. Expected Result / Target Structure
{{EXPECTED_RESULT}}

## 6. Implementation Checklist
> Her task `Scope Ref: SCP-XXX` taşır; task capability referenced SCP semantic boundary'yi aşamaz. Factual claim varsa exact source-backed FCL boundary içinde kalır.
{{IMPLEMENTATION_CHECKLIST}}

## 7. State / Role / Responsive Coverage
{{STATE_ROLE_COVERAGE}}

## 8. Automated Verification
{{AUTOMATED_VERIFICATION}}

## 9. Manual QA / Debug Verification
{{MANUAL_QA}}

## 10. Acceptance / Exit Criteria
{{ACCEPTANCE_CRITERIA}}

## 11. Handoff / Stop Rule
{{HANDOFF_STOP_RULE}}

---
## Wave Result
{{WAVE_RESULT_PLACEHOLDER}}

# OUTPUT DOCUMENT END
