# VALIDATION_REPORT_TEMPLATE

## Template Metadata

```yaml
template_id: validation-report-template
template_name: Validation Report Operational Template
document_id: not_applicable
version: 1.1.0
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

`engine/VALIDATION_RULES.md` standartları uyarınca working-output ve run evidence üzerinde yapılan denetimi eksiksiz, gate-by-gate ve chronology-safe biçimde kaydetmek.

## Kullanım Koşulları

Yalnız run `Validation` stage'e girdikten ve required artifact checkpoint'leri kapandıktan sonra üretilir/güncellenir.

## Girdi Kaynakları

- `engine/VALIDATION_RULES.md`
- `runs/active/<run-id>/working-output/`
- approved input / INPUT_SNAPSHOT
- `PROGRESS.md`
- `RUN_LOG.md`
- mevcut observable execution/tool trace (varsa)

## Zorunlu Bölümler

- Overall Validation Result
- Validation Timing / Chronology
- Blocking Validation Checks Table
- Violations & Evidence
- Required Action & Resolution

## Blocking Checks Table Contract

`engine/VALIDATION_RULES.md` içindeki **tüm numaralı blocking checks** raporda ayrı satır olarak bulunmalıdır.

Validator kendi daha kısa checklist'ini icat edemez, maddeleri birleştirip atlayamaz veya yeni kuralları rapordan düşüremez.

Her satır minimum:

```text
Check No / Name
Severity
Result: PASS | FAIL | WARNING
Evidence inspected
Finding / rationale
```

Özellikle şu gate'ler atlanamaz:

```text
Approved Scope Integrity
Wave Decomposition + Execution Depth
Decision Provenance + Coverage
Source Claim Integrity
Point-of-Use Trace Integrity
Validation Timeline Integrity
Engine Boundary Integrity
```

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

- `PROGRESS says Yes` tek başına Point-of-Use Trace PASS kanıtı değildir.
- Observable trace varsa trace inspect edilmeden Trace Integrity PASS yazılamaz.
- Source Claim PASS için sadece approved top-level service names değil, generated factual modifiers/subclaims de source ile karşılaştırılır.
- Scope Integrity PASS için Future/Open/Out-of-Scope → WAVE_MAP/WAVE_PLAN/PROJECT_PLAN/NEXT_TASKS karşılaştırması yapılır.
- Decision Provenance PASS için exact Engine-selected stack/palette/tooling kararlarının DECISIONS coverage'ı kontrol edilir.

## İçerik Üretim Kuralları

- Per-check: PASS | FAIL | WARNING.
- Overall yalnız `PASS`, `CONDITIONAL PASS`, `FAIL`.
- Critical FAIL varken overall PASS olamaz.
- Evidence olmayan PASS yazılamaz.
- Rapor generator self-report'unu tekrar etmez; artifact/source/trace karşılaştırmasının sonucunu yazar.
- Timestamp'ler mümkün chronology oluşturmalıdır.

## Placeholder Tanımları

- `{{RUN_ID}}`
- `{{OVERALL_VALIDATION_RESULT}}`
- `{{VALIDATION_DATE}}`
- `{{VALIDATION_TIMING_BLOCK}}`
- `{{VALIDATION_CHECKS_TABLE}}`
- `{{VIOLATIONS_AND_EVIDENCE_BLOCK}}`

## Validation Beklentileri

- `engine/VALIDATION_RULES.md` numaralı blocking seti birebir kapsanmalı.
- Missing check row → validation report incomplete → FAIL.
- Chronology contradiction → FAIL.
- Observable evidence contradiction → FAIL.

---

# OUTPUT DOCUMENT START

# Validation Report — {{RUN_ID}}

- **Validation Result**: {{OVERALL_VALIDATION_RESULT}}
- **Validation Target**: `runs/active/{{RUN_ID}}/working-output/`
- **Validation Date**: {{VALIDATION_DATE}}

## 1. Validation Timing / Chronology

{{VALIDATION_TIMING_BLOCK}}

## 2. Blocking Validation Checks

{{VALIDATION_CHECKS_TABLE}}

## 3. Tespit Edilen İhlaller ve Kanıtlar

{{VIOLATIONS_AND_EVIDENCE_BLOCK}}

## 4. Düzeltme Aksiyonları ve Çözüm

- FAIL/WARNING kontroller için alınan veya alınması gereken repair aksiyonları.

[CONDITIONAL: include only if warnings exist]
## 5. Uyarılar (Non-critical Warnings)

- Kritik olmayan iyileştirme notları.

# OUTPUT DOCUMENT END
