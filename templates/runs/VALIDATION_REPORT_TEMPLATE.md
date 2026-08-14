# VALIDATION_REPORT_TEMPLATE

## Template Metadata

```yaml
template_id: validation-report-template
template_name: Validation Report Operational Template
document_id: not_applicable
version: 1.7.0
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
`engine/VALIDATION_RULES.md` uyarınca working-output ve observable evidence üzerinde fail-closed canonical validation kaydı üretmek.

## Canonical Target
`runs/active/{{RUN_ID}}/working-output/`

## Zorunlu Bölümler
- Canonical Gate Coverage
- Evidence Priority / Trace Status
- Dynamic Instance Coverage
- WAVE_MAP Capability Diff
- WAVE_PLAN Parent Capability Diff
- Source Registry Consistency
- Source → FCL → Generated Claim Checks
- External Source Consumption Checks
- Point-of-Use Read/Write Token Pairing
- Validation Timing
- VAL-01..VAL-19 Table
- Violations & Repairs

## Evidence Contract

```text
Observable Trace Status: AVAILABLE | UNAVAILABLE
Trace Evidence Origin
Highest Evidence Level Used
Evidence Contradictions
```

`AVAILABLE` yalnız validator dışındaki gerçek observable tool/IDE trace inspect edilmişse kullanılabilir.

## WAVE_MAP Capability Diff

Her wave için atomik tablo zorunludur:

```text
Wave ID
Map Capability Atom
Exact Approved Support ID
Exact Approved Support Meaning
Relation
Result
```

Ardından zorunlu set özeti:

```text
MAP_CAPABILITY_ATOMS = [...]
SUPPORTED_MAP_CAPABILITIES = [...]
UNSUPPORTED_MAP_CAPABILITIES = [...]
```

`UNSUPPORTED_MAP_CAPABILITIES` boş değilse VAL-04 PASS yazılamaz.
Generic support ID listesi tek başına evidence değildir.

## WAVE_PLAN Parent Capability Diff

Her plan capability atomu için:

```text
Wave Plan
Plan Capability Atom
Exact Parent Capability Atom
Relation: detail-of | implementation-of | verification-of | new-capability | adjacent-capability | inferred-capability
Result
```

Ardından:

```text
PLAN_CAPABILITY_ATOMS = [...]
PARENT_CAPABILITY_ATOMS = [...]
NEW_PLAN_CAPABILITIES = [...]
```

`NEW_PLAN_CAPABILITIES` boş değilse VAL-04 PASS yazılamaz.

## Source Registry Consistency

Validation başlamadan SOURCE_REGISTER source table exact mirror edilir:

```text
SOURCE_REGISTER_SOURCE_SET
VALIDATION_SOURCE_SET
SOURCE_SET_EQUAL: YES | NO
```

Her source için:

```text
Source ID
SOURCE_REGISTER Identity
Validation Identity
SOURCE_REGISTER Usage State
Validation Usage State
Exact Match
```

Mismatch varsa VAL-07 ve VAL-13 PASS yazılamaz.
Validator yeni source veya yeni usage state icat edemez.

## Source → FCL → Generated Claim Checks

Her FCL:
```text
FCL ID
FCL Claim
Exact Supporting Source ID
Exact Source Identity copied from SOURCE_REGISTER
Source Usage State copied from SOURCE_REGISTER
Exact Source Evidence
FCL ⊆ Source Result
```

Her generated claim:
```text
Generated Claim
Referenced FCL ID
Referenced FCL Claim
Generated ⊆ FCL Result
```

## External Source Consumption Checks

Her external source için:
```text
Source ID
SOURCE_REGISTER Usage State
Independent Read/Open/Fetch Event
Evidence Origin
Consumption Claim Valid
```

Başka source summary'si external consumption evidence değildir.

## Point-of-Use Read/Write Token Pairing

Trace AVAILABLE ise actual ordered events ayrı listelenir:

```text
Observed Dynamic Template Read Events:
R1 ...
R2 ...

Observed Dynamic Write Events:
W1 ...
W2 ...
```

Sonra token consumption tablosu:

```text
Write Event | Matching Read Token | Token Previously Used? | Pair Result
```

Her read token single-use'dur.

Zorunlu özet:
```text
READ_TOKEN_COUNT
WRITE_EVENT_COUNT
CONSUMED_READ_TOKENS
UNPAIRED_WRITES
REUSED_READ_TOKENS
```

`UNPAIRED_WRITES` veya `REUSED_READ_TOKENS` boş değilse VAL-15 FAIL.
Self-reported pairing listesi actual observable read event yerine geçmez.

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

## 4. WAVE_MAP Capability Diff
{{WAVE_MAP_CAPABILITY_DIFF}}

## 5. WAVE_PLAN Parent Capability Diff
{{WAVE_PLAN_PARENT_CAPABILITY_DIFF}}

## 6. Source Registry Consistency
{{SOURCE_REGISTRY_CONSISTENCY}}

## 7. Source → FCL → Generated Claim Checks
{{FCL_SEMANTIC_CHECKS}}

## 8. External Source Consumption Checks
{{EXTERNAL_SOURCE_CHECKS}}

## 9. Point-of-Use Read/Write Token Pairing
{{TRACE_TOKEN_PAIRING_BLOCK}}

## 10. Validation Timing / Chronology
{{VALIDATION_TIMING_BLOCK}}

## 11. Blocking Validation Checks
{{VALIDATION_CHECKS_TABLE}}

## 12. Violations & Evidence
{{VIOLATIONS_AND_EVIDENCE_BLOCK}}

## 13. Repair Actions
{{REPAIR_ACTIONS}}

# OUTPUT DOCUMENT END
