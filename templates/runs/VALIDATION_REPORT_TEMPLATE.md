# VALIDATION_REPORT_TEMPLATE

## Template Metadata

```yaml
template_id: validation-report-template
template_name: Validation Report Operational Template
document_id: not_applicable
version: 1.4.0
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

`engine/VALIDATION_RULES.md` standartlarına göre working-output ve execution evidence üzerinde canonical, chronology-safe ve mechanically auditable validation kaydı üretmek.

## Kullanım Koşulları

Yalnız run `Validation` stage'e girdikten ve required artifact checkpoint'leri kapandıktan sonra üretilir.

Canonical target:

```text
runs/active/{{RUN_ID}}/working-output/
```

Published output validation target olamaz.

## Girdi Kaynakları

- `engine/VALIDATION_RULES.md`
- active run working-output
- `INPUT_SNAPSHOT.md` + SCP registry
- `SOURCE_REGISTER.md` + FCL registry
- `WAVE_MAP.md`
- actual `waves/plans/WAVE_*.md` file set
- observable IDE/tool trace (varsa)
- PROGRESS / RUN_LOG / manifest

## Zorunlu Bölümler

- Overall Validation Result
- Canonical Gate Coverage
- Evidence Priority / Trace Status
- Dynamic Instance Coverage
- FCL Semantic Boundary Checks
- Point-of-Use Read/Write Pairing
- Validation Timing / Chronology
- VAL-01..VAL-19 Table
- Violations & Repairs

## Canonical Gate Coverage Contract

```text
Expected Gate IDs: VAL-01..VAL-19
Executed Gate IDs: <actual list>
Missing Gate IDs: <list or None>
Unexpected/Custom Gate IDs: <list or None>
```

Missing canonical gate → Overall FAIL.

## Evidence Priority Contract

```text
E1 Observable IDE/tool trace
E2 Filesystem/artifact state
E3 Approved/canonical registries/contracts
E4 Self-report metadata
```

Higher evidence always wins.

Rapor zorunlu olarak:

```text
Observable Trace Status: AVAILABLE | UNAVAILABLE
Highest Evidence Level Used: E1 | E2 | E3 | E4
Evidence Contradictions: <None or explicit list>
```

alanlarını taşır.

## Dynamic Instance Coverage Contract

VAL-03 için report zorunlu olarak gerçek setleri yazar:

```text
Expected Instance IDs: <from WAVE_MAP>
Actual Instance IDs: <from working-output/waves/plans/>
Missing Instance IDs: <EXPECTED - ACTUAL>
Unexpected Instance IDs: <ACTUAL - EXPECTED>
```

Canonical rule:

```text
Expected Instance IDs == Actual Instance IDs
→ may PASS

otherwise
→ VAL-03 FAIL
```

Sadece `3 wave plan üretildi` gibi count beyanı yeterli değildir.

## FCL Semantic Boundary Contract

VAL-13 için factual claim denetimi yalnız FCL ID existence kontrolü değildir.

Her generated factual claim/subclaim için report evidence minimumu:

```text
Generated Claim
Referenced FCL ID
Referenced FCL Claim Text
Semantic Subset Result: PASS | FAIL
Reason
```

Canonical rule:

```text
Generated factual claim ⊆ Referenced FCL semantic content
```

FCL ID mevcut fakat generated claim daha genişse → VAL-13 FAIL.

## Point-of-Use Pairing Contract

Trace AVAILABLE ise dynamic template read/write events mekanik pair edilir.

Rapor zorunlu olarak:

```text
Dynamic Template: WAVE_PLAN_TEMPLATE
Template Read Count: <N>
Dynamic Instance Write Count: <M>
Read/Write Pairs:
- read #1 → WAVE_00
- read #2 → WAVE_01
...
Unpaired Writes: <None or list>
```

Her read event yalnız bir dynamic write için consume edilebilir.

```text
READ_COUNT < WRITE_COUNT → VAL-15 FAIL
Unpaired Writes != None → VAL-15 FAIL
all writes uniquely paired in order → VAL-15 may PASS
Trace UNAVAILABLE → VAL-15 UNVERIFIED
```

Count equality tek başına PASS değildir; ordering/pairing de geçerli olmalıdır.

## Validation Timing Contract

```text
last required artifact/checkpoint
< validation_started_at
<= validation_report_created_at
< publication_at
< completion_at
```

Validation target active working-output olmalıdır.

## Blocking Checks Table Contract

`VAL-01..VAL-19` her biri ayrı satır:

```text
Gate ID
Canonical Gate Name
Severity
Result
Evidence inspected + evidence level
Finding / rationale
```

## İçerik Üretim Kuralları

- Overall yalnız PASS | CONDITIONAL PASS | FAIL.
- Critical FAIL varken PASS olamaz.
- Missing canonical gate → FAIL.
- Expected/Actual instance set mismatch → VAL-03 FAIL.
- FCL semantic subset FAIL → VAL-13 FAIL.
- Trace available + unpaired dynamic write → VAL-15 FAIL.
- Trace unavailable → VAL-15 UNVERIFIED.
- Higher-priority contradiction saklanamaz.
- Published output validation target olamaz.

## Placeholder Tanımları

- `{{RUN_ID}}`
- `{{OVERALL_VALIDATION_RESULT}}`
- `{{VALIDATION_DATE}}`
- `{{CANONICAL_GATE_COVERAGE}}`
- `{{EVIDENCE_PRIORITY_BLOCK}}`
- `{{DYNAMIC_INSTANCE_COVERAGE}}`
- `{{FCL_SEMANTIC_CHECKS}}`
- `{{TRACE_PAIRING_BLOCK}}`
- `{{VALIDATION_TIMING_BLOCK}}`
- `{{VALIDATION_CHECKS_TABLE}}`
- `{{VIOLATIONS_AND_EVIDENCE_BLOCK}}`

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

## 4. FCL Semantic Boundary Checks

{{FCL_SEMANTIC_CHECKS}}

## 5. Point-of-Use Read/Write Pairing

{{TRACE_PAIRING_BLOCK}}

## 6. Validation Timing / Chronology

{{VALIDATION_TIMING_BLOCK}}

## 7. Blocking Validation Checks

{{VALIDATION_CHECKS_TABLE}}

## 8. Violations & Evidence

{{VIOLATIONS_AND_EVIDENCE_BLOCK}}

## 9. Repair Actions

- FAIL/WARNING bulguları için repair aksiyonları.

# OUTPUT DOCUMENT END
