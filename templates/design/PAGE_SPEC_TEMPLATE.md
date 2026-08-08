# PAGE_SPEC_TEMPLATE

## Template Metadata

```yaml
template_id: page-spec-template
template_name: Page Spec Structural Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: structural
category: design
supported_packages:
  - web-app
  - mobile-app
  - landing-page
  - corporate-website
  - saas
  - demo-frontend
supported_delivery_profiles:
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - product_rules
  - design_rules
conditional_inputs: []
dependencies:
  - DESIGN
output_filename: not_applicable
```

## Amaç

Tek bir web veya mobil sayfasının amacını, yerleşimini (layout), bölümlerini (sections), durumlarını (states), kullanıcı eylemlerini (actions) ve responsive davranışını tanımlayan yapısal şablon sunmak.

## Kullanım Koşulları

Sayfa bazlı tasarım ve frontend geliştirme aşamalarında yapısal şablon olarak kullanılır.

## Girdi Kaynakları

- `PRODUCT_RULES.md`, `DESIGN_RULES.md`

## Zorunlu Bölümler

- Sayfa Amacı ve URL/Route (Page Purpose & Route)
- Sayfa Düzeni ve Bölümler (Page Layout & Sections)
- Kullanıcı Eylemleri ve Tetikleyiciler (User Actions & Triggers)
- Responsive ve Mobil Davranış (Responsive Behavior)

## Koşullu Bölümler

- `[CONDITIONAL: include only if page has specific data fetching]` Veri Yükleme ve Durum Kuralları

## İçerik Üretim Kuralları

- Bağımsız Document Catalog ID'si icat edilmemelidir (`document_id: not_applicable`).
- Sayfanın tüm bölümleri ve kullanılan bileşenler açıkça listelenmelidir.

## Placeholder Tanımları

- `{{PAGE_NAME}}`: Sayfa adı.
- `{{PAGE_ROUTE}}`: Sayfanın URL rotası (örn: `/dashboard`).
- `{{PAGE_PURPOSE}}`: Sayfanın temel işlevi.
- `{{SECTIONS_BREAKDOWN_LIST}}`: Sayfadaki bölümler ve içerikleri.
- `{{USER_ACTIONS_LIST}}`: Kullanıcının yapabileceği eylemler.

## Kapsam Dışı

- Bileşen iç prop ve state detayları (bkz: `COMPONENT_SPEC_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Sayfa spesifikasyon yapısı.
- Referenced By: `DESIGN_RULES.md`, `GLOBAL_SHELL_TEMPLATE.md`.

## Delivery Profile Davranışı

- Geliştirici ajanın sayfayı eksiksiz inşa edebilmesi için gerekli tüm UI/UX rehberliğini sağlar.

## Validation Beklentileri

- Route ve sayfa amacı `PRODUCT_RULES.md` ile uyumlu olmalıdır.

---

# OUTPUT DOCUMENT START

# Page Specification: {{PAGE_NAME}}

- **Sayfa Adı**: {{PAGE_NAME}}
- **Route**: `{{PAGE_ROUTE}}`
- **Amaç**: {{PAGE_PURPOSE}}

## 1. Sayfa Düzeni ve Bölümler (Sections)

{{SECTIONS_BREAKDOWN_LIST}}

## 2. Kullanıcı Eylemleri (Actions)

{{USER_ACTIONS_LIST}}

## 3. Responsive Davranış

- Mobil, tablet ve masaüstü ekranlarında bölüm yerleşimleri.

[CONDITIONAL: include only if page has specific data fetching]
## 4. Veri Yükleme ve Durum Kuralları

- Sayfanın ilk yüklenme (SSR/CSR), caching ve revalidation davranışları.

# OUTPUT DOCUMENT END
