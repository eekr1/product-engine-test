# COMPLETION_REPORT_TEMPLATE

## Template Metadata

```yaml
template_id: completion-report-template
template_name: Completion Report Operational Template
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
  - run_manifest
  - validation_report
conditional_inputs: []
dependencies: []
output_filename: COMPLETION_REPORT.md
```

## Amaç

Run tamamlandığında ne üretildiğini, validation sonuçlarını, nihai doküman paketinin konumunu, açık kalan maddeleri ve nihai başarı durumunu kaydetmek.

## Kullanım Koşulları

Run kapanışında (`Completed` aşamasında) yazılır.

## Girdi Kaynakları

- `RUN_MANIFEST.md`, `VALIDATION_REPORT.md`, `PROGRESS.md`

## Zorunlu Bölümler

- Kapanış Özeti ve Nihai Durum (Completion Summary & Final Status)
- Üretilen Dokümanlar Kataloğu (Produced Deliverables Catalogue)
- Validation ve Uyum Özeti (Validation Summary)
- Çıktı Konumları ve İletişim (Output Target Location)

## Koşullu Bölümler

- `[CONDITIONAL: include only if unresolved items remain]` Geleceğe Bırakılan Açık Maddeler (Unresolved Items)

## İçerik Üretim Kuralları

- `Completed` olmayan veya validation geçemeyen bir run tamamlanmış gibi gösterilmemelidir.
- Validation sonucu `PASS` veya `CONDITIONAL PASS` olmalıdır.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{FINAL_STATUS}}`: Completed (veya Failed/Cancelled).
- `{{DELIVERABLES_CATALOG_TABLE}}`: Üretilen tüm dokümanların isim, boyut ve konum tablosu.
- `{{OUTPUT_REF}}`: Nihai temiz çıktı konumu (`outputs/<category>/<project-slug>/versions/<output-version>/`).
- `{{VALIDATION_RESULT}}`: PASS | CONDITIONAL PASS.

## Kapsam Dışı

- Gelecek çalışmaların yürütülmesi

## Diğer Dokümanlarla İlişki

- Primary Owner: Run son kapanış raporu.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`.

## Delivery Profile Davranışı

- Üretimin başarıyla sonlandığını ve teslimata hazır olduğunu belgeler.

## Validation Beklentileri

- Yalnızca validation'dan başarıyla geçen projeler `Completed` durumunda kapatılabilir.

---

# OUTPUT DOCUMENT START

# Completion Report — {{RUN_ID}}

- **Final Status**: {{FINAL_STATUS}} # Completed
- **Completion Date**: {{COMPLETED_AT}}
- **Output Ref**: `{{OUTPUT_REF}}`

## 1. Kapanış Özeti

Product Engine çalışması başarıyla tamamlanmış ve kalite denetimlerinden geçmiştir.

## 2. Üretilen Dokümanlar Kataloğu

{{DELIVERABLES_CATALOG_TABLE}}

## 3. Validation ve Uyum Özeti

- **Validation Sonucu**: {{VALIDATION_RESULT}} # PASS | CONDITIONAL PASS
- **Rapor Referansı**: `VALIDATION_REPORT.md`

## 4. Çıktı Konumu

Nihai dokümantasyon paketi aşağıdaki adreste teslime hazırdır:
`{{OUTPUT_REF}}`

[CONDITIONAL: include only if unresolved items remain]
## 5. Geleceğe Bırakılan Açık Maddeler (Unresolved Items)

- Bir sonraki sürüm veya güncelleme run'ına devredilen açık maddeler ve varsayımlar.

# OUTPUT DOCUMENT END
