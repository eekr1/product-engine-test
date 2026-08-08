# WAVE_MAP_TEMPLATE

## Template Metadata

```yaml
template_id: wave-map-template
template_name: Wave Map Template
document_id: WAVE-MAP
version: 1.0.0
status: active
template_type: document
category: waves
supported_packages:
  - web-app
  - api-service
  - mobile-app
  - content-platform
  - saas
supported_delivery_profiles:
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs: []
dependencies:
  - PROJECT-BRAIN
  - PRODUCT-RULES
output_filename: WAVE_MAP.md
```

## Amaç

Projenin teslimat dalgalarını (waves), her dalganın amacını, kapsama sınırlarını, ana teslimatlarını, bağımlılıklarını ve çıkış (exit) kriterlerini üst seviyede haritalandırmak.

## Kullanım Koşulları

Dalga bazlı teslimat mimarisi kullanan projelerde zorunludur/koşulludur.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- `PROJECT_BRAIN.md`, `PRODUCT_RULES.md`

## Zorunlu Bölümler

- Dalga Mimarisi Özeti (Wave Architecture Overview)
- Dalga Haritası ve Sıralama (Wave Map Summary Table)
- Dalga Bazlı Kapsam Sınırları (Wave Scope Boundaries)
- Genel Çıkış Kriterleri (Exit Criteria)

## Koşullu Bölümler

- `[CONDITIONAL: include only if parallel waves exist]` Paralel Dalga Kuralları

## İçerik Üretim Kuralları

- Her dalga için: Wave ID, Adı, Amacı, Kapsamı, Bağımlılıkları, Ana Teslimatları, Çıkış Kriterleri ve Durumu desteklenmelidir.
- Dalga sayısı gerçekçi olmalı ve onaylı kapsamı tam karşılamalıdır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{WAVE_MAP_OVERVIEW}}`: Dalga teslimat yaklaşımının açıklaması.
- `{{WAVES_SUMMARY_TABLE}}`: Wave ID, Name, Goal, Status tablosu.
- `{{WAVE_ENTRIES_LIST}}`: Her dalganın üst seviye detay bloğu listesi.

## Kapsam Dışı

- Tekil dalganın detaylı görev planı (bkz: `WAVE_PLAN.md`)
- Kodlama seviyesi görevler (bkz: `NEXT_TASKS.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `wave_structure`, `wave_goals`, `wave_scope_boundaries`.
- Referenced By: `WAVE_PLAN.md`, `README.md`, `PROJECT_PLAN.md`.

## Delivery Profile Davranışı

- **Implementation Ready**: Net sıralanmış dalga haritası ve bağımlılık yapısı.
- **Production Ready**: Her dalga için canlıya çıkış/staging kabul kriterleri.

## Validation Beklentileri

- Dalga hedefleri `PROJECT_BRAIN.md` hedefleriyle tam örtüşmelidir.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Wave Map

## 1. Dalga Mimarisi Özeti

{{WAVE_MAP_OVERVIEW}}

## 2. Dalga Haritası Özet Tablosu

{{WAVES_SUMMARY_TABLE}}

## 3. Dalga Detayları ve Kapsam Sınırları

{{WAVE_ENTRIES_LIST}}

## 4. Genel Çıkış ve Geçiş Kriterleri

- Bir dalgadan diğerine geçiş için zorunlu kalite ve test kriterleri.

[CONDITIONAL: include only if parallel waves exist]
## 5. Paralel Dalga Kuralları

- Eşzamanlı yürütülen dalgalar arası senkronizasyon ve bağımlılık yönetimi.

# OUTPUT DOCUMENT END
