# GLOBAL_SHELL_TEMPLATE

## Template Metadata

```yaml
template_id: global-shell-template
template_name: Global Shell Structural Template
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
  - product_rules
conditional_inputs: []
dependencies:
  - DESIGN
output_filename: not_applicable
```

## Amaç

Uygulamanın genel ekran düzeni kabuğunu (Header/Navbar, Footer, Sidebar, Main Content Area, Modal Overlay) tanımlayan yapısal şablon sunmak.

## Kullanım Koşulları

UI düzen mimarisine sahip web ve mobil uygulamalarında yapısal şablon olarak kullanılır.

## Girdi Kaynakları

- `DESIGN_RULES.md`, `PRODUCT_RULES.md`

## Zorunlu Bölümler

- Ekran Kabuk Yapısı ve Layout (Global Shell Layout)
- Navigasyon Elemanları (Header & Navigation Bar)
- İçerik Alanı Kısıtlamaları (Main Content Constraints)

## Koşullu Bölümler

- `[CONDITIONAL: include only if sidebar navigation exists]` Sidebar Düzen Kuralları
- `[CONDITIONAL: include only if footer exists]` Footer Yapısı

## İçerik Üretim Kuralları

- Bağımsız catalog document ID'si içermemelidir (`document_id: not_applicable`).
- Mobil ve masaüstü breakpoint'lerde kabuğun nasıl davranacağını açıklamalıdır.

## Placeholder Tanımları

- `{{SHELL_LAYOUT_DIAGRAM_OR_SPEC}}`: Shell yerleşim alanları ve z-index hiyerarşisi.
- `{{NAVBAR_SPECIFICATION}}`: Header/Navbar yapısı, logo yerleşimi ve navigasyon linkleri.

## Kapsam Dışı

- Tekil sayfa içerikleri (bkz: `PAGE_SPEC_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Uygulama kabuk düzeni.
- Referenced By: `DESIGN_RULES.md`, `PAGE_SPEC_TEMPLATE.md`.

## Delivery Profile Davranışı

- Tüm sayfalarda tutarlı kabuk yapısı ve navigasyon deneyimi sağlar.

## Validation Beklentileri

- Responsive kırılma noktaları belirtilmelidir.

---

# OUTPUT DOCUMENT START

# Global Layout Shell Specification

## 1. Ekran Kabuk Yapısı (Global Shell Layout)

{{SHELL_LAYOUT_DIAGRAM_OR_SPEC}}

## 2. Navigasyon Elemanları (Header & Navbar)

{{NAVBAR_SPECIFICATION}}

## 3. İçerik Alanı Kısıtlamaları (Main Content Area)

- Maksimum genişlik (max-width), padding ve merkezleme kuralları.

[CONDITIONAL: include only if sidebar navigation exists]
## 4. Sidebar Düzen Kuralları

- Daraltılabilir (collapsible) sidebar yapısı ve durumları.

[CONDITIONAL: include only if footer exists]
## 5. Footer Yapısı

- Alt bilgi alanı, telif hakkı ve ikincil linkler.

# OUTPUT DOCUMENT END
