# VALIDATION_REPORT_TEMPLATE

## Template Metadata

```yaml
template_id: validation-report-template
template_name: Validation Report Operational Template
document_id: not_applicable
version: 1.0.0
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

`engine/VALIDATION_RULES.md` standartları uyarınca `working-output` belgelerine yapılan denetim sonuçlarını, severity seviyelerini, kanıtları ve çözüm aksiyonlarını kaydetmek.

## Kullanım Koşulları

Run validation aşamasında (`Validation` stage) üretilir ve güncellenir.

## Girdi Kaynakları

- `engine/VALIDATION_RULES.md`
- Working Output belgeleri (`runs/active/<run-id>/working-output/`)

## Zorunlu Bölümler

- Doğrulama Genel Sonucu (Overall Validation Result: PASS / CONDITIONAL PASS / FAIL)
- Denetim Kontrol Tablosu (Validation Checks Table)
- Tespit Edilen İhlaller ve Kanıtlar (Violations & Evidence)
- Düzeltme Aksiyonları (Required Action & Resolution)

## Koşullu Bölümler

- `[CONDITIONAL: include only if warnings exist]` Uyarılar (Non-critical Warnings)

## İçerik Üretim Kuralları

- Per-check seviyesinde: PASS, FAIL, WARNING sonuçları kullanılabilir.
- Genel validation sonucu YALNIZCA: `PASS`, `CONDITIONAL PASS` veya `FAIL` olabilir (`PASSED` veya `FAILED` kullanılmaz).
- Kritik bir hata (`Critical`) varken validation sonucu `PASS` ilan edilemez.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{OVERALL_VALIDATION_RESULT}}`: PASS | CONDITIONAL PASS | FAIL.
- `{{VALIDATION_CHECKS_TABLE}}`: Tüm kontrol maddelerinin sonuç tablosu.
- `{{VIOLATIONS_AND_EVIDENCE_BLOCK}}`: Hata detayları ve kanıtları.

## Kapsam Dışı

- Run manifest durum yönetimi (bkz: `RUN_MANIFEST_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Run doğrulama denetim raporu.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`, `COMPLETION_REPORT_TEMPLATE.md`.

## Delivery Profile Davranışı

- Üretilen working-output'un kalite ve uyumluluk garantisini sağlar.

## Validation Beklentileri

- `engine/VALIDATION_RULES.md` kurallarına birebir dayanmalıdır.

---

# OUTPUT DOCUMENT START

# Validation Report — {{RUN_ID}}

- **Validation Result**: {{OVERALL_VALIDATION_RESULT}} # PASS | CONDITIONAL PASS | FAIL
- **Validation Target**: `runs/active/{{RUN_ID}}/working-output/`
- **Validation Date**: {{VALIDATION_DATE}}

## 1. Denetim Kontrol Tablosu

{{VALIDATION_CHECKS_TABLE}}

## 2. Tespit Edilen İhlaller ve Kanıtlar

{{VIOLATIONS_AND_EVIDENCE_BLOCK}}

## 3. Düzeltme Aksiyonları ve Çözüm

- Başarısız kontroller için alınan veya alınması gereken düzeltme/repair aksiyonları.

[CONDITIONAL: include only if warnings exist]
## 4. Uyarılar (Non-critical Warnings)

- Kritik olmayan, iyileştirilebilir uyarı notları.

# OUTPUT DOCUMENT END
