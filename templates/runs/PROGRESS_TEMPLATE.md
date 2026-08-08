# PROGRESS_TEMPLATE

## Template Metadata

```yaml
template_id: progress-template
template_name: Progress Operational Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: operational
category: runs
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - run_manifest
  - package_selection
conditional_inputs: []
dependencies: []
output_filename: PROGRESS.md
```

## Amaç

Run'ın aşama (stage) ve doküman (document) bazlı tamamlama ilerlemesini görünür ve takip edilebilir kılmak.

## Kullanım Koşulları

Run ilerledikçe güncellenir.

## Girdi Kaynakları

- `PACKAGE_SELECTION.md`
- Üretilen doküman durumları

## Zorunlu Bölümler

- Genel İlerleme Yüzdesi ve Durum (Overall Progress)
- Doküman Üretim İlerleme Tablosu (Document Completion Status)
- Aşama Bazlı İlerleme Tablosu (Stage Completion Status)

## Koşullu Bölümler

- `[CONDITIONAL: include only if execution is blocked]` İlerlemeyi Engellemiş Olan Dokümanlar

## İçerik Üretim Kuralları

- Her doküman için: Document ID, Target File, Status (Pending / In-Progress / Produced / Validated), Updated At alanları güncellenmelidir.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{OVERALL_PERCENTAGE}}`: Genel tamamlama yüzdesi.
- `{{DOCUMENT_PROGRESS_TABLE}}`: Doküman üretim durumu tablosu.

## Kapsam Dışı

- Doküman içerikleri

## Diğer Dokümanlarla İlişki

- Primary Owner: Run ilerleme takip tescili.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`.

## Delivery Profile Davranışı

- Hangi belgelerin hazır olduğunu şeffaf şekilde gösterir.

## Validation Beklentileri

- Tablodaki durumlar fiziki dosya mevcudiyeti ile uyumlu olmalıdır.

---

# OUTPUT DOCUMENT START

# Progress Tracker — {{RUN_ID}}

- **Genel İlerleme**: {{OVERALL_PERCENTAGE}}%
- **Mevcut Aşama**: {{CURRENT_STAGE}}

## 1. Doküman Üretim Durumu Tablosu

{{DOCUMENT_PROGRESS_TABLE}}

## 2. Aşama Bazlı İlerleme

- [x] Initialized
- [ ] Running
- [ ] Validation
- [ ] Completed

[CONDITIONAL: include only if execution is blocked]
## 3. İlerlemeyi Engellemiş Olan Dokümanlar

- Tamamlanamayan ve sonraki aşamayı bloklayan belgelerin listesi.

# OUTPUT DOCUMENT END
