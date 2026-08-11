# GLOBAL_SHELL_TEMPLATE

## Template Metadata

```yaml
template_id: global-shell-template
template_name: Global Shell Template
document_id: GLOBAL-SHELL
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
  - design_system
  - product_rules
dependencies:
  - DESIGN
  - DESIGN-SYSTEM
output_filename: GLOBAL_SHELL.md
```

## Amaç

Uygulamanın ortak layout shell'ini, navigation modelini, header/sidebar/footer/overlay sınırlarını ve responsive shell davranışını tanımlamak.

## Kullanım Koşulları

`design_planning: standard | full` olan ve ortak shell/navigation yapısı bulunan UI projelerinde zorunludur.

## Zorunlu Bölümler

- Global Layout Shell
- Navigation Architecture
- Main Content Constraints
- Responsive Shell Behavior
- Global Overlay / Modal Layering

## Koşullu Bölümler

- Sidebar kuralları
- Footer kuralları
- Mobile bottom navigation
- Authenticated vs public shell varyasyonları

## İçerik Üretim Kuralları

- Shell yalnız global layout/navigation sahibi olmalıdır; page içeriğini sahiplenmemelidir.
- Desktop ve mobile davranışları ayrı ayrı açıklanmalıdır.
- Navigation isimleri `PRODUCT_RULES` ve gerçek page seti ile uyumlu olmalıdır.
- Generic navbar/footer template'i otomatik seçilmemeli; shell projenin kullanım bağlamına göre tasarlanmalıdır.
- Z-index/overlay ilişkileri implementation sırasında belirsiz kalmayacak düzeyde tanımlanmalıdır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{SHELL_LAYOUT_SPEC}}`
- `{{NAVIGATION_ARCHITECTURE}}`
- `{{CONTENT_CONSTRAINTS}}`
- `{{RESPONSIVE_SHELL_BEHAVIOR}}`
- `{{GLOBAL_OVERLAY_RULES}}`

## Kapsam Dışı

- Page-specific section/layout detayları
- Feature-specific state/flow

## Validation Beklentileri

- Page design package'ları shell ile çelişmemeli.
- Navigasyon gerçek route/surface setiyle tutarlı olmalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Global Shell

## 1. Global Layout Shell

{{SHELL_LAYOUT_SPEC}}

## 2. Navigation Architecture

{{NAVIGATION_ARCHITECTURE}}

## 3. Main Content Constraints

{{CONTENT_CONSTRAINTS}}

## 4. Responsive Shell Behavior

{{RESPONSIVE_SHELL_BEHAVIOR}}

## 5. Global Overlay / Layering Rules

{{GLOBAL_OVERLAY_RULES}}

# OUTPUT DOCUMENT END
