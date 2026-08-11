# DESIGN_SYSTEM_TEMPLATE

## Template Metadata

```yaml
template_id: design-system-template
template_name: Design System Template
document_id: DESIGN-SYSTEM
version: 1.1.0
status: active
template_type: document
category: design
supported_packages:
  - all-ui
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
supported_design_planning:
  - standard
  - full
required_inputs:
  - design_rules
dependencies:
  - DESIGN
output_filename: DESIGN_SYSTEM.md
```

## Amaç

Tasarım sistemi token'larını, semantic color rollerini, tipografi/spacing/radius/shadow sistemini ve temel UI primitive'lerini tek canonical sözleşmede tanımlamak.

## Kullanım Koşulları

`design_planning: standard | full` olan UI/UX projelerinde zorunludur.

## Girdi Kaynakları

- `DESIGN_RULES.md`
- Approved intake/design context

## Zorunlu Bölümler

- Design Token Sistemi
- Semantic Color Roles
- Typography System
- Spacing / Radius / Shadow System
- Foundational Components / Primitives
- Interaction State Tokens

## İçerik Üretim Kuralları

- Token'lar `DESIGN_RULES.md` visual concept'inden türemeli; generic library default'u kopyalanmamalıdır.
- Renkler yalnız sektör klişesinden türetilmemelidir.
- Semantic roller (`surface`, `text`, `accent`, `danger` vb.) raw renk değerlerinden ayrılmalıdır.
- Page/feature belgeleri yeni token sistemi icat edemez; bu belgeyi kullanır.
- Framework-specific code zorunlu değildir; implementation-ready isimlendirme ve değer ilişkileri zorunludur.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{DESIGN_TOKENS_BLOCK}}`
- `{{SEMANTIC_COLOR_ROLES}}`
- `{{TYPOGRAPHY_SYSTEM}}`
- `{{SPACING_RADIUS_SHADOW_SYSTEM}}`
- `{{FOUNDATIONAL_COMPONENTS}}`
- `{{INTERACTION_STATE_TOKENS}}`

## Kapsam Dışı

- Page-specific layout
- Feature-specific flow
- Ürün iş kuralları

## Validation Beklentileri

- Token sistemi kendi içinde tutarlı olmalı.
- `DESIGN_RULES.md` ile visual direction çelişkisi olmamalı.
- Duplicate/raw hard-coded style kararları azaltılmalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Design System

## 1. Design Token Sistemi

{{DESIGN_TOKENS_BLOCK}}

## 2. Semantic Color Roles

{{SEMANTIC_COLOR_ROLES}}

## 3. Typography System

{{TYPOGRAPHY_SYSTEM}}

## 4. Spacing, Radius ve Shadow System

{{SPACING_RADIUS_SHADOW_SYSTEM}}

## 5. Foundational Components / Primitives

{{FOUNDATIONAL_COMPONENTS}}

## 6. Interaction State Tokens

{{INTERACTION_STATE_TOKENS}}

# OUTPUT DOCUMENT END
