# VALIDATION_REPORT_TEMPLATE

## Template Metadata

```yaml
template_id: validation-report-template
template_name: Validation Report Operational Template
document_id: not_applicable
version: 1.3.0
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

`engine/VALIDATION_RULES.md` standartları uyarınca working-output ve run evidence üzerinde yapılan denetimi eksiksiz, canonical gate ID'leriyle, chronology-safe ve evidence-bounded biçimde kaydetmek.

## Kullanım Koşulları

Yalnız run `Validation` stage'e girdikten ve required artifact checkpoint'leri kapandıktan sonra üretilir/güncellenir.

Canonical validation target sabittir:

```text
runs/active/{{RUN_ID}}/working-output/
```

Published `outputs/.../versions/...` veya `latest/` validation target OLAMAZ. Publication validation'dan sonra gerçekleşir.

## Girdi Kaynakları

- `engine/VALIDATION_RULES.md`
- `runs/active/<run-id>/working-output/`
- approved input / `INPUT_SNAPSHOT.md` + Approved Scope Registry
- `SOURCE_REGISTER.md` + Factual Claim Allowlist
- `PROGRESS.md`
- `RUN_LOG.md`
- mevcut observable execution/tool trace (varsa)

## Zorunlu Bölümler

- Overall Validation Result
- Canonical Gate Coverage
- Evidence Priority / Observable Trace Status
- Validation Timing / Chronology
- Blocking Validation Checks Table
- Violations & Evidence
- Required Action & Resolution

## Canonical Gate Coverage Contract

Expected canonical set:

```text
VAL-01
VAL-02
VAL-03
VAL-04
VAL-05
VAL-06
VAL-07
VAL-08
VAL-09
VAL-10
VAL-11
VAL-12
VAL-13
VAL-14
VAL-15
VAL-16
VAL-17
VAL-18
VAL-19
```

Rapor zorunlu olarak şunu içerir:

```text
Expected Gate IDs: VAL-01..VAL-19
Executed Gate IDs: <actual list>
Missing Gate IDs: <list or None>
Unexpected/Custom Gate IDs: <list or None>
```

```text
Missing Gate IDs != None
→ validation report incomplete
→ Overall Result MUST BE FAIL
```

Validator canonical seti `CHK-*` veya başka alternatif kimliklerle değiştiremez.

## Evidence Priority Contract

Evidence kaynakları sabit öncelik sırasına sahiptir:

```text
E1 — Observable IDE/tool execution trace
E2 — Filesystem / artifact state
E3 — Approved input, INPUT_SNAPSHOT/SCP, SOURCE_REGISTER/FCL, canonical contracts
E4 — PROGRESS / RUN_LOG / manifest / agent self-report metadata
```

Canonical rule:

> Higher-priority evidence always wins when evidence conflicts.

Örnek:

```text
E1 trace: WAVE_PLAN_TEMPLATE only once before five writes
E4 PROGRESS: every wave says "Template Read Before Write: Yes"
→ E1 wins
→ E4 claim invalidated
→ VAL-15 FAIL
```

Validator alt seviye evidence'ı seçerek üst seviye contradiction'ı görmezden gelemez.

Rapor zorunlu olarak:

```text
Observable Trace Status: AVAILABLE | UNAVAILABLE
Highest Evidence Level Used: E1 | E2 | E3 | E4
Evidence Contradictions: <None or explicit list>
```

alanlarını taşır.

## Blocking Checks Table Contract

`engine/VALIDATION_RULES.md` içindeki **VAL-01..VAL-19** gate'lerin her biri raporda ayrı satır olmalıdır.

Her satır minimum:

```text
Gate ID
Canonical Gate Name
Severity
Result: PASS | FAIL | WARNING | UNVERIFIED (only where canonical rule allows)
Evidence inspected + evidence level
Finding / rationale
```

Bir gate başka gate ile merge edilip düşürülemez.

## Approved Scope Membership Contract

VAL-04 yalnız prose comparison yapmaz. `INPUT_SNAPSHOT.md` Approved Scope Registry mekanik membership authority'sidir.

Committed WAVE_MAP/WAVE_PLAN/PROJECT_PLAN/NEXT_TASKS item için:

```text
SCP ref exists?
→ NO  = FAIL
→ YES = inspect status

SCP status executable?
→ IN_SCOPE / KNOWN_DECISION = may pass
→ OPEN_QUESTION / FUTURE / OUT_OF_SCOPE = FAIL
```

`VERIFIED_CURRENT_TRUTH` factual/reference use içindir; yeni executable feature scope'u tek başına authorize etmez.

## Point-of-Use Evidence Strength Contract

```text
Observable Trace Status = AVAILABLE
→ actual sequence E1 trace'ten inspect edilir
→ valid sequence = VAL-15 PASS
→ invalid/missing read = VAL-15 FAIL

Observable Trace Status = UNAVAILABLE
→ VAL-15 UNVERIFIED
```

`PROGRESS.md`, `RUN_LOG.md` veya agent self-report tek başına VAL-15 PASS üretemez.

Trace AVAILABLE yazılıp E1 trace evidence gösterilmeden VAL-15 PASS verilemez.

## Validation Timing Contract

Rapor şu chronology kanıtını göstermelidir:

```text
last required artifact/checkpoint completed_at
validation_started_at
validation_report_created_at / updated_at
publication_at (if later)
completion_at (if later)
```

Validation target `runs/active/<run-id>/working-output/` olmalıdır.
Published output path target olarak kullanılmışsa chronology contract ihlalidir → FAIL.

## Evidence Rules

- Higher-priority contradiction lower-priority self-report'u invalidate eder.
- `PROGRESS says Yes` tek başına Point-of-Use PASS kanıtı değildir.
- Trace AVAILABLE ise trace inspect edilmeden VAL-15 PASS yazılamaz.
- Trace UNAVAILABLE ise VAL-15 `UNVERIFIED` yazılır.
- VAL-04 executable item'lar Approved Scope Registry SCP membership ile karşılaştırılır.
- `OPEN_QUESTION`, `FUTURE`, `OUT_OF_SCOPE` SCP ref taşıyan executable item → FAIL.
- Source Claim PASS için factual claim/subclaim'ler SOURCE_REGISTER FCL allowlist ile karşılaştırılır.
- FCL ID bulunmayan factual modifier/subclaim PASS alamaz.
- Decision Provenance PASS için exact Engine-selected stack/palette/tooling kararlarının DECISIONS coverage'ı kontrol edilir.
- Package-specific deterministic validation guard'ları applicable ise ilgili canonical gate altında uygulanır.

## İçerik Üretim Kuralları

- Overall yalnız `PASS`, `CONDITIONAL PASS`, `FAIL`.
- Critical FAIL varken overall PASS olamaz.
- Missing canonical gate varken overall FAIL zorunludur.
- Evidence contradiction saklanamaz.
- Higher-priority evidence'a aykırı PASS yazılamaz.
- Validation target published output olamaz.
- Timestamp'ler mümkün chronology oluşturmalıdır.

## Placeholder Tanımları

- `{{RUN_ID}}`
- `{{OVERALL_VALIDATION_RESULT}}`
- `{{VALIDATION_DATE}}`
- `{{CANONICAL_GATE_COVERAGE}}`
- `{{EVIDENCE_PRIORITY_BLOCK}}`
- `{{VALIDATION_TIMING_BLOCK}}`
- `{{VALIDATION_CHECKS_TABLE}}`
- `{{VIOLATIONS_AND_EVIDENCE_BLOCK}}`

## Validation Beklentileri

- `VAL-01..VAL-19` birebir kapsanmalı.
- Missing canonical gate → FAIL.
- Higher-priority evidence contradiction → lower evidence invalidated.
- Trace unavailable iken VAL-15 PASS → invalid report → FAIL.
- Trace available + invalid sequence → VAL-15 FAIL.
- Non-executable SCP item executable task'a dönüşmüşse VAL-04 FAIL.
- Published output validation target → FAIL.

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

## 3. Validation Timing / Chronology

{{VALIDATION_TIMING_BLOCK}}

## 4. Blocking Validation Checks

{{VALIDATION_CHECKS_TABLE}}

## 5. Tespit Edilen İhlaller ve Kanıtlar

{{VIOLATIONS_AND_EVIDENCE_BLOCK}}

## 6. Düzeltme Aksiyonları ve Çözüm

- FAIL/WARNING kontroller için alınan veya alınması gereken repair aksiyonları.

[CONDITIONAL: include only if warnings exist]
## 7. Uyarılar (Non-critical Warnings)

- Kritik olmayan iyileştirme notları.

# OUTPUT DOCUMENT END
