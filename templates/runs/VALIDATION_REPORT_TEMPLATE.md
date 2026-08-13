# VALIDATION_REPORT_TEMPLATE

## Template Metadata

```yaml
template_id: validation-report-template
template_name: Validation Report Operational Template
document_id: not_applicable
version: 1.2.0
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

## Girdi Kaynakları

- `engine/VALIDATION_RULES.md`
- `runs/active/<run-id>/working-output/`
- approved input / INPUT_SNAPSHOT
- `SOURCE_REGISTER.md` + Factual Claim Allowlist
- `PROGRESS.md`
- `RUN_LOG.md`
- mevcut observable execution/tool trace (varsa)

## Zorunlu Bölümler

- Overall Validation Result
- Canonical Gate Coverage
- Validation Timing / Chronology
- Blocking Validation Checks Table
- Violations & Evidence
- Required Action & Resolution

## Canonical Gate Coverage Contract

Validator yalnız `engine/VALIDATION_RULES.md` içinde tanımlı canonical gate ID'lerini kullanır.

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

Canonical kural:

```text
Missing Gate IDs != None
→ validation report incomplete
→ Overall Result MUST BE FAIL
```

Validator `CHK-01`, kendi özel checklist'i veya birleştirilmiş/yeniden adlandırılmış alternatif gate kimlikleri üretemez.

Unexpected/custom gate ek bilgi olarak raporlanabilir; canonical gate'in yerine geçemez.

## Blocking Checks Table Contract

`engine/VALIDATION_RULES.md` içindeki **VAL-01..VAL-19** gate'lerin her biri raporda ayrı satır olmalıdır.

Her satır minimum:

```text
Gate ID
Canonical Gate Name
Severity
Result: PASS | FAIL | WARNING | UNVERIFIED (only where canonical rule allows)
Evidence inspected
Finding / rationale
```

Bir gate başka gate ile merge edilip düşürülemez.

## Point-of-Use Evidence Strength Contract

Actual IDE/tool read event'i yalnız observable execution trace ile doğrulanabilir.

```text
trace available + valid sequence   → VAL-15 PASS
trace available + invalid sequence → VAL-15 FAIL
trace unavailable                  → VAL-15 UNVERIFIED
```

`PROGRESS.md`, `RUN_LOG.md` veya agent self-report tek başına VAL-15 PASS üretemez.

`UNVERIFIED`, execution-trace limitation'ını dürüstçe gösterir; factual/structural validation failure anlamına gelmez. Overall result politikası `engine/VALIDATION_RULES.md` VAL-15 contract'ına göre uygulanır.

## Validation Timing Contract

Rapor şu chronology kanıtını göstermelidir:

```text
last required artifact/checkpoint completed_at
validation_started_at
validation_report_created_at / updated_at
publication_at (if later)
completion_at (if later)
```

Validation report artifact generation'dan önce oluşturulmuş görünüyorsa PASS verilemez.

## Evidence Rules

- `PROGRESS says Yes` tek başına Point-of-Use PASS kanıtı değildir.
- Observable trace varsa trace inspect edilmeden VAL-15 PASS yazılamaz.
- Trace yoksa VAL-15 `UNVERIFIED` yazılır; gerçekleşmemiş proof icat edilmez.
- Source Claim PASS için generated factual claim/subclaim'ler SOURCE_REGISTER FCL allowlist ile karşılaştırılır.
- FCL ID bulunmayan factual modifier/subclaim PASS alamaz.
- Scope Integrity PASS için Future/Open/Out-of-Scope → WAVE_MAP/WAVE_PLAN/PROJECT_PLAN/NEXT_TASKS karşılaştırması yapılır.
- Decision Provenance PASS için exact Engine-selected stack/palette/tooling kararlarının DECISIONS coverage'ı kontrol edilir.
- Package-specific deterministic validation guard'ları applicable ise ilgili canonical gate altında evidence olarak uygulanır.

## İçerik Üretim Kuralları

- Per-gate sonuç canonical rule'un izin verdiği vocabulary ile yazılır.
- Overall yalnız `PASS`, `CONDITIONAL PASS`, `FAIL`.
- Critical FAIL varken overall PASS olamaz.
- Missing canonical gate varken overall FAIL zorunludur.
- Evidence olmayan PASS yazılamaz.
- Rapor generator self-report'unu tekrar etmez; artifact/source/trace karşılaştırmasının sonucunu yazar.
- Timestamp'ler mümkün chronology oluşturmalıdır.

## Placeholder Tanımları

- `{{RUN_ID}}`
- `{{OVERALL_VALIDATION_RESULT}}`
- `{{VALIDATION_DATE}}`
- `{{CANONICAL_GATE_COVERAGE}}`
- `{{VALIDATION_TIMING_BLOCK}}`
- `{{VALIDATION_CHECKS_TABLE}}`
- `{{VIOLATIONS_AND_EVIDENCE_BLOCK}}`

## Validation Beklentileri

- `VAL-01..VAL-19` birebir kapsanmalı.
- Missing canonical gate → FAIL.
- Alternate/custom checklist canonical setin yerine geçemez.
- Chronology contradiction → FAIL.
- Observable evidence contradiction → FAIL.
- Trace unavailable iken VAL-15 PASS → invalid report → FAIL.

---

# OUTPUT DOCUMENT START

# Validation Report — {{RUN_ID}}

- **Validation Result**: {{OVERALL_VALIDATION_RESULT}}
- **Validation Target**: `runs/active/{{RUN_ID}}/working-output/`
- **Validation Date**: {{VALIDATION_DATE}}

## 1. Canonical Gate Coverage

{{CANONICAL_GATE_COVERAGE}}

## 2. Validation Timing / Chronology

{{VALIDATION_TIMING_BLOCK}}

## 3. Blocking Validation Checks

{{VALIDATION_CHECKS_TABLE}}

## 4. Tespit Edilen İhlaller ve Kanıtlar

{{VIOLATIONS_AND_EVIDENCE_BLOCK}}

## 5. Düzeltme Aksiyonları ve Çözüm

- FAIL/WARNING kontroller için alınan veya alınması gereken repair aksiyonları.

[CONDITIONAL: include only if warnings exist]
## 6. Uyarılar (Non-critical Warnings)

- Kritik olmayan iyileştirme notları.

# OUTPUT DOCUMENT END
