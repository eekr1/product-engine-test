# PROGRESS_TEMPLATE

## Template Metadata

```yaml
template_id: progress-template
template_name: Progress Operational Template
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
  - run_manifest
  - package_selection
conditional_inputs: []
dependencies: []
output_filename: PROGRESS.md
```

## Amaç

Run'ın stage ve artifact bazlı ilerlemesini; özellikle Artifact Checkpoint Protocol'ün gerçek sırasını görünür ve denetlenebilir kılmak.

## Kullanım Koşulları

Run ilerledikçe **artifact checkpoint kapanışında** güncellenir. Generation sonunda geriye dönük toplu evidence doldurma amacıyla kullanılmaz.

## Girdi Kaynakları

- `PACKAGE_SELECTION.md`
- gerçek üretilen artifact/instance durumları
- Artifact Checkpoint Protocol execution evidence

## Zorunlu Bölümler

- Genel İlerleme Yüzdesi ve Durum
- Doküman / Dynamic Instance Checkpoint Tablosu
- Aşama Bazlı İlerleme

## Artifact Checkpoint Table Minimum

Her canonical artifact ve her dynamic instance için ayrı satır:

```text
Artifact / Instance
Target File
Status
Checkpoint Started At
Template Read Before Write
Primary Authority / Scope Truth Refreshed
Local Contract Check
Repair Performed yes/no
Checkpoint Closed At
```

Dynamic WAVE instances ayrı satırlardır. Tek `WAVE_PLAN_TEMPLATE refreshed` satırı birden fazla wave'i kapsamaz.

## İçerik Üretim Kuralları

- Status vocabulary: Pending | In-Progress | Produced | Validated.
- Bir artifact `Produced` olmadan checkpoint closed olamaz.
- Template Read Before Write yalnız gerçek read-before-write event varsa `Yes` olabilir.
- Observable trace mevcutken trace'de olmayan read event `Yes` yazılamaz.
- Checkpoint timestamps chronology oluşturmalıdır: start/read/generate/check/close sırası bozulamaz.
- Sonraki artifact checkpoint'i, önceki checkpoint kapanmadan başlamamalıdır.
- PROGRESS self-report ground truth değildir; trace ile çelişirse trace kazanır.

## Placeholder Tanımları

- `{{RUN_ID}}`
- `{{OVERALL_PERCENTAGE}}`
- `{{DOCUMENT_PROGRESS_TABLE}}`

## Kapsam Dışı

- Artifact içeriklerinin kendisi.

## Diğer Dokümanlarla İlişki

- Primary Owner: Run progress/checkpoint kayıtları.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`, `VALIDATION_REPORT_TEMPLATE.md`.

## Validation Beklentileri

- Durumlar fiziki artifact mevcudiyetiyle uyumlu olmalı.
- Dynamic instance evidence instance-specific olmalı.
- Timestamps mümkün chronology oluşturmalı.
- Observable trace ile evidence çelişmemeli.

---

# OUTPUT DOCUMENT START

# Progress Tracker — {{RUN_ID}}

- **Genel İlerleme**: {{OVERALL_PERCENTAGE}}%
- **Mevcut Aşama**: {{CURRENT_STAGE}}

## 1. Artifact Checkpoint / Üretim Durumu

{{DOCUMENT_PROGRESS_TABLE}}

## 2. Aşama Bazlı İlerleme

- [x] Initialized
- [ ] Running
- [ ] Validation
- [ ] Completed

[CONDITIONAL: include only if execution is blocked]
## 3. İlerlemeyi Engellemiş Olan Artifact'ler

- Tamamlanamayan ve sonraki aşamayı bloklayan artifact/instance listesi.

# OUTPUT DOCUMENT END
