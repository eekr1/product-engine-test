# VALIDATION_REPORT_TEMPLATE

## Template Metadata

```yaml
template_id: validation-report-template
template_name: Validation Report Operational Template
document_id: not_applicable
version: 1.6.0
status: active
template_type: operational
category: operational
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - validation_rules
conditional_inputs: []
dependencies: []
output_filename: VALIDATION_REPORT.md
```

## Amaç
`engine/VALIDATION_RULES.md` uyarınca working-output ve observable evidence üzerinde canonical validation kaydı üretmek.

## Canonical Target
`runs/active/{{RUN_ID}}/working-output/`

## Zorunlu Bölümler
- Canonical Gate Coverage
- Evidence Priority / Trace Status
- Dynamic Instance Coverage
- WAVE_MAP → Approved Scope Checks
- WAVE_PLAN → Parent Map Checks
- Source → FCL → Generated Claim Checks
- External Source Consumption Checks
- Point-of-Use Read/Write Pairing
- Validation Timing
- VAL-01..VAL-19 Table
- Violations & Repairs

## Evidence Contract
Rapor şunları açıkça taşır:
```text
Observable Trace Status: AVAILABLE | UNAVAILABLE
Trace Evidence Origin: <tool/IDE trace reference | None>
Highest Evidence Level Used
Evidence Contradictions
```

`AVAILABLE` yalnız validator raporu dışındaki gerçek tool/IDE trace inspect edilmişse kullanılabilir. VALIDATION_REPORT, PROGRESS, RUN_LOG veya agent beyanı tek başına E1 proof değildir.

## Dynamic Instance Coverage
```text
Expected Instance IDs
Actual Instance IDs
Missing Instance IDs
Unexpected Instance IDs
```
`EXPECTED == ACTUAL` zorunludur.

## WAVE_MAP → Approved Scope Checks
Her wave entry için:
```text
Wave ID
Wave Goal / Committed Scope
Approved Executable Scope Support
Reference-Only Context Used
Future/Open/Out-of-Scope Leakage
Map ⊆ Approved Result
Reason
```

Canonical rule:
```text
WAVE_MAP committed scope ⊆ approved executable project scope
```

## WAVE_PLAN → Parent Map Checks
Her planın task/deliverable scope'u exact parent map entry ile karşılaştırılır:
```text
Wave Plan
Task / Deliverable
Parent WAVE_MAP Entry
Task Semantic Scope
Task ⊆ Parent Result
Reason
```

Canonical rule:
```text
WAVE_PLAN task/deliverable scope ⊆ exact parent WAVE_MAP entry
```

WAVE_PLAN task'larında SCP ref aranmaz.

## Source → FCL → Generated Claim Checks
Her FCL için:
```text
FCL ID
FCL Claim
Exact Supporting Source Identity
Source Usage State
Exact Source Evidence
FCL ⊆ Source Result
```

Her generated claim için:
```text
Generated Claim
Referenced FCL ID
Referenced FCL Claim
Generated ⊆ FCL Result
```

Canonical chain:
```text
FCL semantic content ⊆ exact source evidence
AND
generated factual claim ⊆ referenced FCL semantic content
```

Registered-but-unconsumed external source evidence olarak kullanılamaz.

## External Source Consumption Checks
Her external source için:
```text
Source ID
Usage State
Independent Read/Open/Fetch Evidence
Evidence Origin
Consumption Claim Valid
```

## Point-of-Use Pairing
Trace AVAILABLE ise:
```text
Trace Evidence Origin
Dynamic Template
Template Read Count
Dynamic Instance Write Count
Read/Write Pairs
Unpaired Writes
```

Her read single-use'dur. Özellikle bir `WAVE_PLAN_TEMPLATE` read token yalnız bir WAVE_PLAN write ile eşleşebilir. Trace UNAVAILABLE ise VAL-15 UNVERIFIED.

## Validation Timing
```text
last required artifact/checkpoint
< validation_started_at
<= validation_report_created_at
< publication_at
< completion_at
```

## Canonical Gate Coverage
Expected set `VAL-01..VAL-19`; missing gate → overall FAIL.

---

# OUTPUT DOCUMENT START

# Validation Report — {{RUN_ID}}

- **Validation Result**: {{OVERALL_VALIDATION_RESULT}}
- **Validation Target**: `runs/active/{{RUN_ID}}/working-output/`
- **Validation Date**: {{VALIDATION_DATE}}

## 1. Canonical Gate Coverage
{{CANONICAL_GATE_COVERAGE}}

## 2. Evidence Priority / Observable Trace Status
{{EVIDENCE_PRIORITY_BLOCK}}

## 3. Dynamic Instance Coverage
{{DYNAMIC_INSTANCE_COVERAGE}}

## 4. WAVE_MAP → Approved Scope Checks
{{WAVE_MAP_SCOPE_CHECKS}}

## 5. WAVE_PLAN → Parent Map Checks
{{WAVE_PLAN_PARENT_CHECKS}}

## 6. Source → FCL → Generated Claim Checks
{{FCL_SEMANTIC_CHECKS}}

## 7. External Source Consumption Checks
{{EXTERNAL_SOURCE_CHECKS}}

## 8. Point-of-Use Read/Write Pairing
{{TRACE_PAIRING_BLOCK}}

## 9. Validation Timing / Chronology
{{VALIDATION_TIMING_BLOCK}}

## 10. Blocking Validation Checks
{{VALIDATION_CHECKS_TABLE}}

## 11. Violations & Evidence
{{VIOLATIONS_AND_EVIDENCE_BLOCK}}

## 12. Repair Actions
- FAIL/WARNING bulguları için repair aksiyonları.

# OUTPUT DOCUMENT END
