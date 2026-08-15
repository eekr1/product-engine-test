# VALIDATION_REPORT_TEMPLATE

## Template Metadata

```yaml
template_id: validation-report-template
template_name: Validation Report Operational Template
document_id: not_applicable
version: 1.8.0
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
- Source Registry Consistency + Source Classification
- Source → FCL → Generated Claim Checks
- External Source Consumption Checks
- Point-of-Use Template + Quality-Reference Evidence
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
Support Status
Support Executable Flag
Exact Approved Support Meaning
Eligibility Result
Semantic Subset Result
Result
```

Ardından zorunlu set özeti:

```text
MAP_CAPABILITY_ATOMS = [...]
COMMITTED_CAPABILITY_ATOMS = [...]
HIDDEN_MAP_CAPABILITIES = [...]
SUPPORTED_MAP_CAPABILITIES = [...]
UNSUPPORTED_MAP_CAPABILITIES = [...]
```

`HIDDEN_MAP_CAPABILITIES` veya `UNSUPPORTED_MAP_CAPABILITIES` boş değilse VAL-04 PASS yazılamaz.
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

## Source Registry Consistency + Classification

SOURCE_REGISTER içindeki `SRC-*` seti yalnız factual source identities içerebilir.

Canonical classification:

```text
PROJECT_SOURCE -> factual source / allowed SRC
explicit factual enrichment source -> allowed SRC only when explicitly requested and actually consumed
APPROVED_PROJECT_INPUT -> derived approved authority / NOT SRC
INPUT_SNAPSHOT -> derived frozen registry / NOT SRC
engine/* -> runtime authority / NOT SRC
packages/* -> package authority / NOT SRC
templates/* -> schema/template / NOT SRC
ref/* -> quality reference / NOT SRC
generated output -> derived artifact / NOT SRC
```

Validation başlamadan source table exact mirror edilir:

```text
SOURCE_REGISTER_SOURCE_SET
VALIDATION_SOURCE_SET
SOURCE_SET_EQUAL: YES | NO
SOURCE_CLASSIFICATION_ERRORS = [...]
```

Her `SRC-*` için:

```text
Source ID
Identity
Declared Source Role
Actual Artifact Role
Usage State
Classification Valid
```

`SOURCE_CLASSIFICATION_ERRORS != empty` ise VAL-12 ve VAL-13 PASS yazılamaz.

Özellikle aşağıdaki pattern invalid'dir:

```text
SRC-01 project source
SRC-02 approved PROJECT_INPUT
SRC-03 package
SRC-04 planning overlay
SRC-05 engine/*
```

Approved input/package/engine read edilmiş olabilir fakat factual source değildir.

Mismatch varsa VAL-07 ve VAL-13 PASS yazılamaz.
Validator yeni source veya yeni usage state icat edemez.

## Source → FCL → Generated Claim Checks

Her FCL:
```text
FCL ID
FCL Claim
Exact Supporting Factual Source ID
Exact PROJECT_SOURCE Identity copied from SOURCE_REGISTER
Source Usage State copied from SOURCE_REGISTER
Exact PROJECT_SOURCE Evidence
FCL ⊆ Source Result
```

FCL yalnız `PROJECT_INPUT`, `INPUT_SNAPSHOT`, engine/package/template/ref identity'ye dayanıyorsa FAIL'dir.

Her generated claim:
```text
Generated Claim
Referenced FCL ID
Referenced FCL Claim
Generated ⊆ FCL Result
```

## External Source Consumption Checks

Her external factual source için:
```text
Source ID
SOURCE_REGISTER Usage State
Independent Read/Open/Fetch Event
Evidence Origin
Consumption Claim Valid
```

Başka source summary'si external consumption evidence değildir.

## Point-of-Use Template + Quality-Reference Evidence

Trace AVAILABLE ise actual ordered events ayrı listelenir.

### WAVE_MAP checkpoint

Required observable sequence:

```text
ref/waves/README.md
→ ref/waves/WAVE_MAP_REFERENCE.md
→ WAVE_MAP_TEMPLATE.md
→ current authorities
→ WAVE_MAP write
```

`WAVE_MAP_REFERENCE.md` current map write öncesinde observable olarak açılmamışsa point-of-use calibration FAIL'dir.

### WAVE_PLAN checkpoints

Her exact WAVE_NN için:

```text
fresh WAVE_PLAN_TEMPLATE read
→ exact parent read
→ at least one isolated quality-reference read for THIS WAVE
→ authorities as applicable
→ exactly one WAVE_NN write
```

Zorunlu per-wave evidence:

```text
Wave ID | Template Read Event | Quality Ref Read Event(s) | Write Event | Result
```

Canonical rule:

```text
QUALITY_REF_READ_COUNT(WAVE_NN) >= 1
```

Önceki wave'deki ref read current wave için reuse edilemez. UI/runtime taxonomy'ye net oturmayan wave en yakın quality reference'i seçmek zorundadır; `0 ref` geçerli seçim değildir.

Dynamic template token pairing ayrıca uygulanır:

```text
Observed Dynamic Template Read Events:
R1 ...
R2 ...

Observed Dynamic Write Events:
W1 ...
W2 ...

Write Event | Matching Read Token | Token Previously Used? | Pair Result
```

Zorunlu özet:
```text
READ_TOKEN_COUNT
WRITE_EVENT_COUNT
CONSUMED_READ_TOKENS
UNPAIRED_WRITES
REUSED_READ_TOKENS
MISSING_MAP_REFERENCE_READS
WAVES_WITH_ZERO_QUALITY_REF_READS
```

Aşağıdakilerden biri non-empty ise VAL-15 FAIL:

```text
UNPAIRED_WRITES
REUSED_READ_TOKENS
MISSING_MAP_REFERENCE_READS
WAVES_WITH_ZERO_QUALITY_REF_READS
```

Self-reported pairing/ref listesi actual observable event yerine geçmez.
Trace UNAVAILABLE ise VAL-15 UNVERIFIED kalır.

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

## 6. Source Registry Consistency + Classification
{{SOURCE_REGISTRY_CONSISTENCY}}

## 7. Source → FCL → Generated Claim Checks
{{FCL_SEMANTIC_CHECKS}}

## 8. External Source Consumption Checks
{{EXTERNAL_SOURCE_CHECKS}}

## 9. Point-of-Use Template + Quality-Reference Evidence
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
