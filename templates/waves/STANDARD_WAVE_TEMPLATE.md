# STANDARD_WAVE_TEMPLATE

## Template Metadata

```yaml
template_id: standard-wave-template
template_name: Standard Wave Structural Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: structural
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
  - wave_map
conditional_inputs: []
dependencies: []
output_filename: not_applicable
```

## Amaç

`WAVE_MAP.md` veya `WAVE_PLAN.md` belgeleri içinde tekrar eden tekil wave bölümlerini standartlaştıran yapısal şablon sunmak.

## Kullanım Koşulları

Wave dokümantasyonlarında alt wave yapılarını tutarlı formatta oluşturmak için kullanılır.

## Girdi Kaynakları

- `WAVE_MAP.md`

## Zorunlu Bölümler

- Wave Başlığı ve Metadata (Wave Header)
- Wave Hedefi ve Kapsamı (Goal & Scope)
- Temel Deliverable'lar ve Exit Criteria (Deliverables & Exit Criteria)

## Koşullu Bölümler

- `[CONDITIONAL: include only if wave has pre-requisite dependencies]` Önkoşul Bağımlılıkları

## İçerik Üretim Kuralları

- Bağımsız Document Catalog ID'si oluşturulmamalıdır (`document_id: not_applicable`).
- Her wave kaydının aynı standart alanlara sahip olmasını güvenceye almalıdır.

## Placeholder Tanımları

- `{{WAVE_ID}}`: Dalga kimliği (örn: `WAVE-02`).
- `{{WAVE_TITLE}}`: Dalga başlığı.
- `{{WAVE_GOAL}}`: Dalga hedefi.
- `{{WAVE_DELIVERABLES_LIST}}`: Üretilecek çıktılar.
- `{{WAVE_EXIT_CRITERIA}}`: Tamamlanma çıkış kriterleri.

## Kapsam Dışı

- Tüm dalgaların haritası (bkz: `WAVE_MAP_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Standart wave bloğu sözleşmesi.
- Referenced By: `WAVE_MAP_TEMPLATE.md`, `WAVE_PLAN_TEMPLATE.md`.

## Delivery Profile Davranışı

- Dalga tanımlarında standart format ve denetlenebilirlik sağlar.

## Validation Beklentileri

- Tüm zorunlu wave alanları mevcut olmalıdır.

---

# OUTPUT DOCUMENT START

### {{WAVE_ID}} — {{WAVE_TITLE}}

- **Goal**: {{WAVE_GOAL}}
- **Status**: {{WAVE_STATUS}}
- **Deliverables**: {{WAVE_DELIVERABLES_LIST}}
- **Exit Criteria**: {{WAVE_EXIT_CRITERIA}}

[CONDITIONAL: include only if wave has pre-requisite dependencies]
- **Dependencies**: {{WAVE_DEPENDENCIES_LIST}}

# OUTPUT DOCUMENT END
