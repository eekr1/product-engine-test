# INPUT_SNAPSHOT_TEMPLATE

## Template Metadata

```yaml
template_id: input-snapshot-template
template_name: Input Snapshot Operational Template
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
  - approved_intake
conditional_inputs: []
dependencies: []
output_filename: INPUT_SNAPSHOT.md
```

## Amaç

Run başladığı anda kullanılan onaylı proje verisinin (approved intake snapshot) değişmez kopyasını ve sürüm kayıtlarını tutmak.

## Kullanım Koşulları

Run başlangıcında (`Initialized` aşaması) oluşturulur.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md` ve `inputs/` dosyası)

## Zorunlu Bölümler

- Girdi Kimliği ve Sürümü (Input Identity & Version)
- Onaylı Proje Özeti (Approved Project Context)
- Başlangıç Kapsamı ve Hedefler (Initial Scope & Goals)

## Koşullu Bölümler

- `[CONDITIONAL: include only if input has user attachments]` Ek Veri ve Dosya Referansları

## İçerik Üretim Kuralları

- Run başladıktan sonra snapshot değiştirilmemelidir. Yeni bilgi gelirse yeni bir snapshot/run açılmalıdır.
- `inputs/` klasöründeki ana verinin yerine geçmez; sadece anlık dondurulmuş halidir.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{INPUT_ID}}`: Girdi kimliği.
- `{{INPUT_VERSION}}`: Girdi sürümü.
- `{{APPROVAL_DATE}}`: Girdinin onaylanma tarihi.
- `{{INTAKE_SNAPSHOT_CONTENT}}`: Onaylı intake verisinin dondurulmuş özeti.

## Kapsam Dışı

- Run sırasında yapılan yeni varsayımlar (bkz: `ASSUMPTIONS_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Run başlangıç girdi kaydı.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`.

## Delivery Profile Davranışı

- Tekrar üretilebilirlik (reproducibility) için dondurulmuş girdi kanıtı sağlar.

## Validation Beklentileri

- Snapshot verisi onaylı intake ile birebir eşleşmelidir.

---

# OUTPUT DOCUMENT START

# Input Snapshot — {{RUN_ID}}

- **Input ID**: {{INPUT_ID}}
- **Input Version**: {{INPUT_VERSION}}
- **Approval Date**: {{APPROVAL_DATE}}

## 1. Onaylı Proje Özeti (Snapshot)

{{INTAKE_SNAPSHOT_CONTENT}}

## 2. Başlangıç Kapsamı ve Teslimat Hedefi

- **Proje Türü**: {{PROJECT_TYPE}}
- **Hedef Delivery Profile**: {{TARGET_PROFILE}}

[CONDITIONAL: include only if input has user attachments]
## 3. Ek Veri ve Dosya Referansları

- Kullanıcı tarafından sağlanan ek belge ve ham veri kaynaklarının referansları.

# OUTPUT DOCUMENT END
