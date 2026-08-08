# RUN_MANIFEST_TEMPLATE

## Template Metadata

```yaml
template_id: run-manifest-template
template_name: Run Manifest Template
document_id: RUN-MANIFEST
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
  - approved_intake
conditional_inputs: []
dependencies: []
output_filename: RUN_MANIFEST.md
```

## Amaç

Tek bir Product Engine çalışmasının kimliğini, yaşam döngüsü durumunu, seçilen paket ve profil bilgilerini, girdi snapshot sürümünü ve çıktı hedeflerini kayıt altına almak.

## Kullanım Koşulları

Her run için `runs/active/<run-id>/` altında oluşturulması zorunludur.

## Girdi Kaynakları

- Approved Intake metadata
- Package rules & Delivery profile selection

## Zorunlu Bölümler

- Run Kimlik Bilgileri (Run Identity)
- Run Durumu ve Yaşam Döngüsü (Run Status & Lifecycle)
- Seçilen Paket ve Profil (Selected Package & Delivery Profile)
- Üretilen Belgeler ve Çıktı Konumu (Produced Documents & Output Target)

## Koşullu Bölümler

- `[CONDITIONAL: include only if run is blocked or failed]` Engelleme veya Başarısızlık Nedeni

## İçerik Üretim Kuralları

- Durumlar: `Created`, `Initialized`, `Running`, `Blocked`, `Paused`, `Resumed`, `Validation`, `Completed`, `Failed`, `Cancelled`, `Invalidated`.
- `Cancelled` ve `Failed` durumları birbirinden kesinlikle ayrılmalıdır.
- Validation sonucu `PASS`, `CONDITIONAL PASS` veya `FAIL` değerlerini almalıdır.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run benzersiz kimliği (örn: `RUN-20260808-001`).
- `{{PROJECT_NAME}}`: Proje adı.
- `{{PROJECT_SLUG}}`: Proje slug.
- `{{RUN_STATUS}}`: Anlık run durumu.
- `{{CREATED_AT}}`: Başlatma zaman damgası.
- `{{ENGINE_VERSION}}`: Runtime tarafından çözülen Product Engine sürümü.
- `{{PACKAGE_ID}}`: Seçilen paket kimliği.
- `{{DELIVERY_PROFILE}}`: Seçilen teslimat profili.
- `{{VALIDATION_RESULT}}`: Validation sonucu (PASS | CONDITIONAL PASS | FAIL).
- `{{OUTPUT_REF}}`: Nihai output dizin referansı (`outputs/<category>/<project-slug>/versions/<output-version>/`).

## Kapsam Dışı

- Ayrıntılı log akışı (bkz: `RUN_LOG_TEMPLATE.md`)
- Varsayımlar listesi (bkz: `ASSUMPTIONS_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `run_id`, `status`, `created_at`, `completed_at`, `agent_id`, `project_slug`, `selected_package`, `delivery_profile`, `documents_produced`, `validation_result`, `output_version`, `output_ref`.
- Referenced By: Run operasyonel kayıtları.

## Delivery Profile Davranışı

- Run denetlenebilirliğini ve izlenebilirliğini tekil kimlikle güvenceye alır.

## Validation Beklentileri

- Run durumu tanımlı yaşam döngüsü statülerinden birine denk gelmelidir.

---

# OUTPUT DOCUMENT START

# Run Manifest — {{RUN_ID}}

```yaml
run_id: {{RUN_ID}}
project_name: {{PROJECT_NAME}}
project_slug: {{PROJECT_SLUG}}
engine_version: {{ENGINE_VERSION}}
run_type: generation
status: {{RUN_STATUS}} # Created | Initialized | Running | Blocked | Paused | Resumed | Validation | Completed | Failed | Cancelled | Invalidated
created_at: {{CREATED_AT}}
updated_at: {{UPDATED_AT}}
completed_at: {{COMPLETED_AT}}
agent_id: {{AGENT_ID}}
input_id: {{INPUT_ID}}
input_version: {{INPUT_VERSION}}
selected_package: {{PACKAGE_ID}}
delivery_profile: {{DELIVERY_PROFILE}}
documents_produced: {{DOCUMENTS_PRODUCED}}
validation_result: {{VALIDATION_RESULT}} # PASS | CONDITIONAL PASS | FAIL
output_version: {{OUTPUT_VERSION}}
output_ref: {{OUTPUT_REF}}
```

## 1. Run Kimliği ve Bağlam

- **Run ID**: {{RUN_ID}}
- **Proje**: {{PROJECT_NAME}} ({{PROJECT_SLUG}})
- **Seçilen Paket**: {{PACKAGE_ID}}
- **Delivery Profile**: {{DELIVERY_PROFILE}}
- **Engine Version**: {{ENGINE_VERSION}}

## 2. Yaşam Döngüsü ve Durum

- **Mevcut Durum**: {{RUN_STATUS}}
- **Mevcut Aşama**: {{CURRENT_STAGE}}
- **Validation Sonucu**: {{VALIDATION_RESULT}}

## 3. Hedef Çıktı Konumu

- **Output Version**: {{OUTPUT_VERSION}}
- **Output Ref**: `{{OUTPUT_REF}}`

[CONDITIONAL: include only if run is blocked or failed]
## 4. Engelleme veya Başarısızlık Nedeni

- **Hata/Engelleme Türü**: Blocked / Failed / Cancelled
- **Açıklama ve Gerekçe**: Durum nedeni ve detayları.

# OUTPUT DOCUMENT END
