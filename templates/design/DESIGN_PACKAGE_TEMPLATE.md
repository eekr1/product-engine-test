# DESIGN_PACKAGE_TEMPLATE

## Template Metadata

```yaml
template_id: design-package-template
template_name: Design Package Structural Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: structural
category: design
supported_packages:
  - web-app
  - mobile-app
  - landing-page
  - saas
supported_delivery_profiles:
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - design_rules
conditional_inputs: []
dependencies: []
output_filename: not_applicable
```

## Amaç

Görsel varlıkların (assets), ikon paketlerinin, medya dosyalarının ve stil kütüphanelerinin paketleme ve organizasyon yapısını tanımlamak.

## Kullanım Koşulları

UI tasarımlarının medya ve stil paketlerini organize etmek için yapısal şablon olarak kullanılır.

## Girdi Kaynakları

- `DESIGN_RULES.md`

## Zorunlu Bölümler

- Varlık Klasör Yapısı (Asset Directory Structure)
- Görsel ve Medya Format Standartları (Image & Media Format Standards)

## Koşullu Bölümler

- `[CONDITIONAL: include only if custom fonts are bundled]` Font Paketleme Kuralları

## İçerik Üretim Kuralları

- Bağımsız catalog document gibi gösterilmemelidir (`document_id: not_applicable`).
- Medya optimizasyonu ve asset isimlendirme standartlarını belirlemelidir.

## Placeholder Tanımları

- `{{ASSETS_STRUCTURE_BLOCK}}`: Varlıkların klasör organizasyonu.
- `{{MEDIA_FORMATS_RULES}}`: WebP/SVG/PNG kullanım standartları.

## Kapsam Dışı

- Gerçek imaj/medya dosyalarının saklanması

## Diğer Dokümanlarla İlişki

- Primary Owner: Tasarım varlık organizasyonu.
- Referenced By: `DESIGN_RULES.md`.

## Delivery Profile Davranışı

- Proje varlıklarının düzenli tutulmasını sağlar.

## Validation Beklentileri

- Standart dosya formatları ve optimizasyon rehberliği içermelidir.

---

# OUTPUT DOCUMENT START

# Design Package Guidelines

## 1. Varlık Klasör Yapısı (Asset Structure)

{{ASSETS_STRUCTURE_BLOCK}}

## 2. Görsel ve Medya Format Standartları

{{MEDIA_FORMATS_RULES}}

[CONDITIONAL: include only if custom fonts are bundled]
## 3. Font Paketleme Kuralları

- WOFF2/WOFF font dosyalarının organizasyonu ve font-face tanımları.

# OUTPUT DOCUMENT END
