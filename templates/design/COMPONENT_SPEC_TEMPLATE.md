# COMPONENT_SPEC_TEMPLATE

## Template Metadata

```yaml
template_id: component-spec-template
template_name: Component Spec Structural Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: structural
category: design
supported_packages:
  - corporate-website
  - demo-frontend
  - saas
  - existing-project
supported_delivery_profiles:
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - design_rules
conditional_inputs: []
dependencies:
  - DESIGN
output_filename: not_applicable
```

## Amaç

Tek bir UI bileşeninin (component) amacını, girdilerini/prop'larını, varyantlarını (variants), durumlarını (states: default, hover, active, disabled, loading, error), etkileşimlerini ve erişilebilirlik gereksinimlerini tanımlayan yapısal şablon sunmak.

## Kullanım Koşulları

Tekrarlanabilir UI bileşenlerinin dokümantasyonu için yapısal şablon olarak kullanılır.

## Girdi Kaynakları

- `DESIGN_RULES.md`, `DESIGN_SYSTEM_TEMPLATE.md`

## Zorunlu Bölümler

- Bileşen Amacı ve Kullanım Senaryosu (Component Purpose)
- Girdiler ve Prop Tanımları (Inputs / Props)
- Varyantlar ve Durumlar (Variants & States)
- Etkileşim ve Erişilebilirlik (Interactions & Accessibility)

## Koşullu Bölümler

- `[CONDITIONAL: include only if component handles async state]` Async ve Yüklenme Durumları

## İçerik Üretim Kuralları

- Bağımsız catalog ID'si verilmemelidir (`document_id: not_applicable`).
- Prop isimleri ve tipleri net biçimde belirtilmelidir.

## Placeholder Tanımları

- `{{COMPONENT_NAME}}`: Bileşen adı (örn: `Button`, `Modal`, `DataTable`).
- `{{COMPONENT_PURPOSE}}`: Bileşenin işlevi.
- `{{PROPS_TABLE}}`: Prop adı, tipi, varsayılan değeri ve açıklaması tablosu.
- `{{VARIANTS_AND_STATES_LIST}}`: Primary, secondary, danger varyantları ve hover/disabled durumları.

## Kapsam Dışı

- Sayfa yerleşimleri (bkz: `PAGE_SPEC_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Bileşen teknik spesifikasyon yapısı.
- Referenced By: `DESIGN_SYSTEM_TEMPLATE.md`, `PAGE_SPEC_TEMPLATE.md`.

## Delivery Profile Davranışı

- Kodlama aşamasında yeniden kullanılabilir bileşen kütüphanesi oluşturulmasını sağlar.

## Validation Beklentileri

- Prop isimleri ve tipleri tutarlı olmalıdır.

---

# OUTPUT DOCUMENT START

# Component Specification: {{COMPONENT_NAME}}

- **Bileşen Adı**: {{COMPONENT_NAME}}
- **Amaç**: {{COMPONENT_PURPOSE}}

## 1. Girdiler ve Prop Tanımları (Props)

{{PROPS_TABLE}}

## 2. Varyantlar ve Durumlar (Variants & States)

{{VARIANTS_AND_STATES_LIST}}

## 3. Etkileşim ve Erişilebilirlik

- Klavye odağı (focus-visible), ARIA rolü ve etiketi.

[CONDITIONAL: include only if component handles async state]
## 4. Async ve Yüklenme Durumları

- Skeleton, spinner veya devre dışı bırakma (disabled during fetch) kuralları.

# OUTPUT DOCUMENT END
