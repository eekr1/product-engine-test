# DESIGN_SYSTEM_TEMPLATE

## Template Metadata

```yaml
template_id: design-system-template
template_name: Design System Structural Template
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

Tasarım sistemi token'larını (renk, tipografi, gölge, border-radius, spacing) ve temel UI yapı taşlarını tanımlayan tekrar kullanılabilir bir yapısal şablon sunmak.

## Kullanım Koşulları

Tasarım dokümantasyonlarında veya `DESIGN_RULES.md` içindeki sistemik token tanımlamalarında kullanılır.

## Girdi Kaynakları

- `DESIGN_RULES.md`

## Zorunlu Bölümler

- Tasarım Token'ları (Design Tokens: Colors, Typography, Spacing, Shadows, Radii)
- Temel UI Yapı Taşları (Foundational UI Elements)

## Koşullu Bölümler

- `[CONDITIONAL: include only if icon system is defined]` İkon Sistemi Standartları

## İçerik Üretim Kuralları

- Yeni bir Document Catalog ID'si icat edilmemelidir (`document_id: not_applicable`).
- CSS değişkenleri veya token isimleri İngilizce ve standart formatta sunulmalıdır.

## Placeholder Tanımları

- `{{DESIGN_TOKENS_BLOCK}}`: Renk, spacing, gölge ve tipografi token değişkenleri.
- `{{FOUNDATION_ELEMENTS_SUMMARY}}`: Butonlar, inputlar ve card yapı taşlarının standartları.

## Kapsam Dışı

- Sayfa özel düzenleri (bkz: `PAGE_SPEC_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Tasarım token ve yapı taşı sözleşmesi.
- Referenced By: `DESIGN_RULES.md`, `COMPONENT_SPEC_TEMPLATE.md`.

## Delivery Profile Davranışı

- Tasarım bütünlüğü için tutarlı token rehberliği sağlar.

## Validation Beklentileri

- Token değerleri ve isimleri tutarlı olmalıdır.

---

# OUTPUT DOCUMENT START

# Design System Specification

## 1. Tasarım Token'ları (Design Tokens)

{{DESIGN_TOKENS_BLOCK}}

## 2. Temel UI Yapı Taşları

{{FOUNDATION_ELEMENTS_SUMMARY}}

[CONDITIONAL: include only if icon system is defined]
## 3. İkon Sistemi Standartları

- Kullanılacak ikon kütüphanesi, boyutlandırma ve renk eşleşme kuralları.

# OUTPUT DOCUMENT END
