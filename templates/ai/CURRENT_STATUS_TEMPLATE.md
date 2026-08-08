# CURRENT_STATUS_TEMPLATE

## Template Metadata

```yaml
template_id: current-status-template
template_name: Current Status Template
document_id: STATUS
version: 1.0.0
status: active
template_type: document
category: ai
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - run_state
conditional_inputs: []
dependencies:
  - PROJECT-BRAIN
output_filename: CURRENT_STATUS.md
```

## Amaç

Projenin anlık gerçeğini (current truth), tamamlanan işleri, devam eden çalışmaları, engelleri ve kısa vadeli öncelikleri açıkça kaydetmek.

## Kullanım Koşulları

Mevcut projelerde (`existing-project`) zorunludur. Sıfırdan başlayan projelerde opsiyonel/koşulludur.

## Girdi Kaynakları

- Run Durumu ve Çalışma Geçmişi
- `PROJECT_BRAIN.md`

## Zorunlu Bölümler

- Mevcut Aşamaya Genel Bakış (Current Phase Overview)
- Tamamlanan İşler Listesi (Completed Items)
- Devam Eden İşler Listesi (In-Progress Items)
- Bilinen Engeller ve Blokajlar (Known Blockers)
- Anlık Öncelikler (Immediate Priorities)

## Koşullu Bölümler

- `[CONDITIONAL: include only if project has technical debt]` Teknik Borç ve Riskler

## İçerik Üretim Kuralları

- Mevcut durum (current state) ile hedeflenen durum (desired state) kesinlikle birbirine karıştırılmamalıdır.
- Tamamlanmamış işler tamamlanmış gibi gösterilmemelidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{CURRENT_PHASE_TITLE}}`: Aktif çalışma aşaması adı.
- `{{COMPLETED_ITEMS_LIST}}`: Tamamlanan görev ve teslimatlar listesi.
- `{{IN_PROGRESS_ITEMS_LIST}}`: Halen üzerinde çalışılan maddeler.
- `{{KNOWN_BLOCKERS_LIST}}`: Çözüm bekleyen engeller ve bağımlılıklar.
- `{{IMMEDIATE_PRIORITIES_LIST}}`: Sıradaki acil adımlar.

## Kapsam Dışı

- Gelecek dalgaların detaylı planları (bkz: `WAVE_MAP.md`, `WAVE_PLAN.md`)
- Mimari kararların detayları (bkz: `DECISIONS.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `current_phase`, `completed_items`, `next_priorities`, `known_blockers`.
- Referenced By: `NEXT_TASKS.md`, `README.md`, `PROJECT_BRAIN.md`.

## Delivery Profile Davranışı

- Tüm Delivery Profile seviyelerinde anlık proje durumunu yalın ve doğrudan yansıtır.

## Validation Beklentileri

- `NEXT_TASKS.md` ile çelişen durum bilgisi barındırmamalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Current Status

## 1. Mevcut Aşamaya Genel Bakış

- **Aktif Aşama**: {{CURRENT_PHASE_TITLE}}
- **Güncelleme Tarihi**: {{LAST_UPDATED_DATE}}

## 2. Tamamlanan İşler (Completed)

{{COMPLETED_ITEMS_LIST}}

## 3. Devam Eden İşler (In-Progress)

{{IN_PROGRESS_ITEMS_LIST}}

## 4. Bilinen Engeller ve Blokajlar (Known Blockers)

{{KNOWN_BLOCKERS_LIST}}

## 5. Anlık Öncelikler (Immediate Priorities)

{{IMMEDIATE_PRIORITIES_LIST}}

[CONDITIONAL: include only if project has technical debt]
## 6. Teknik Borç ve Riskler

- Çözülmesi gereken teknik borçlar ve altyapı riskleri.

# OUTPUT DOCUMENT END
