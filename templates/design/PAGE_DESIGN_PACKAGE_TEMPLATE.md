# PAGE_DESIGN_PACKAGE_TEMPLATE

## Template Metadata

```yaml
template_id: page-design-package-template
template_name: Page / Screen Design Package Template
document_id: PAGE-DESIGN
version: 1.2.0
status: active
template_type: dynamic-document
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
  - product_rules
  - design_rules
  - design_system
conditional_inputs:
  - global_shell
  - approved_site_architecture
dependencies:
  - DESIGN
  - DESIGN-SYSTEM
  - PRODUCT-RULES
output_filename_pattern: <PAGE_OR_SCREEN_SLUG>_DESIGN_PACKAGE.md
```

## Amaç

Tek bir distinct page/screen implementation surface'inin amaç, information hierarchy, layout, section, action, state, responsive ve integration touchpoint sözleşmesini tanımlamak.

## Instance Kuralı

Bu template tek canonical iskelettir. Her page/screen için yeni Document ID oluşturulmaz.

Corporate website için her instance exact approved `PAGE-XXX` identity'ye bağlanmalıdır:

```text
approved PAGE-XXX
→ exactly one PAGE-DESIGN instance (design standard/full)
```

PAGE-DESIGN yeni page icat edemez, approved distinct page'i başka page içine collapse edemez veya route identity'yi değiştiremez.

Örnek instance'lar:

```text
HOME_DESIGN_PACKAGE.md
CORPORATE_DESIGN_PACKAGE.md
SERVICES_DESIGN_PACKAGE.md
SERVICE_DETAIL_DESIGN_PACKAGE.md
CONTACT_DESIGN_PACKAGE.md
```

Sadece gerçek implementation surface için instance üretilir. Aynı layout içinde küçük section değişikliği yeni page package gerekçesi değildir.

---

## Executable Capability Guard

Canonical owner: `engine/CAPABILITY_SCOPE_RULES.md`.

PAGE-DESIGN yalnız visual/layout composition üretmez; `Primary Actions`, interaction states, component behavior ve integration touchpoint gibi alanlar executable product capability üretebilir. Bu nedenle her instance write edilmeden önce bütün independently meaningful executable behavior'lar atomize edilmelidir.

Canonical invariant:

```text
PAGE-DESIGN_CAPABILITY semantic meaning
⊆ exact approved executable support semantic meaning
```

Page identity veya page purpose child interaction authorization değildir.

Explicit example:

```text
Approved:
PAGE-007 Contact
+ phone direct contact
+ email direct contact

Does NOT authorize:
contact form
input fields
submit behavior
success state
map
WhatsApp
booking/request flow
```

Bir interaction “bu sayfada mantıklı olur” diye eklenemez.

### Required Capability Support Diff

Her PAGE-DESIGN instance minimum şu setleri üretip kontrol etmelidir:

```text
PAGE_DESIGN_CAPABILITY_ATOMS
PAGE_DESIGN_SUPPORT_RELATIONS
UNSUPPORTED_PAGE_DESIGN_CAPABILITIES
```

Her independently meaningful executable atom için relation:

```text
Generated Capability
Exact Approved Support ID(s)
Exact Approved Support Meaning
Semantic Subset Result: PASS | FAIL
```

`UNSUPPORTED_PAGE_DESIGN_CAPABILITIES != empty` ise instance repair edilmeden checkpoint CLOSE edilemez.

Generated DESIGN/PRODUCT document kendi başına approved support değildir; exact support approved input/SCP registry'den gelmelidir.

---

## Zorunlu Bölümler

- Page/Screen Identity & Purpose
- Approved Page Identity / Relation
- Route / Entry Context
- Approved Capability Support
- User Goal & Primary Actions
- Information Hierarchy
- Layout & Section Breakdown
- Component Composition
- States & Edge Cases
- Responsive Behavior
- Accessibility / Keyboard / Focus
- Data & Integration Touchpoints
- Acceptance Notes

## İçerik Üretim Kuralları

- Corporate website ise `PAGE_ID`, page name, purpose ve route/navigation identity approved Site Architecture registry ile bire bir eşleşmelidir.
- `GLOBAL_SHELL` varsa shell tekrar tarif edilmez; yalnız page-specific ilişki yazılır.
- Design token veya global component style yeniden icat edilmez; `DESIGN_SYSTEM` referans alınır.
- Page design, PRODUCT_RULES'taki ürün davranışını değiştiremez.
- Page/surface existence yeni form, modal, accordion, submit flow, search/filter, map, external action veya başka interaction authorize etmez.
- New user action, data collection/submission veya externally observable product state ayrı capability atomudur ve exact approved support ister.
- Mock/local data kullanılıyorsa page'in hangi service/data boundary'yi tükettiği belirtilir; endpoint uydurulmaz.
- Responsive davranış yalnız "mobil uyumlu" demekle bırakılmaz; layout transformation açıkça tanımlanır.
- Tasarım generic template pattern'ine zorlanmaz; page composition proje visual concept'ini sürdürür.
- Approved detail page accordion/card state'e indirgenemez.
- Page architecture factual enrichment izni değildir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{PAGE_ID}}`
- `{{PAGE_NAME}}`
- `{{PAGE_SLUG}}`
- `{{APPROVED_PAGE_RELATION}}`
- `{{ROUTE_OR_ENTRY_CONTEXT}}`
- `{{PAGE_PURPOSE}}`
- `{{APPROVED_CAPABILITY_SUPPORT}}`
- `{{PRIMARY_USER_GOALS}}`
- `{{INFORMATION_HIERARCHY}}`
- `{{LAYOUT_AND_SECTIONS}}`
- `{{COMPONENT_COMPOSITION}}`
- `{{PAGE_STATES}}`
- `{{RESPONSIVE_BEHAVIOR}}`
- `{{ACCESSIBILITY_NOTES}}`
- `{{DATA_INTEGRATION_TOUCHPOINTS}}`
- `{{ACCEPTANCE_NOTES}}`

## Validation Beklentileri

- Corporate website'te Page ID approved registry'de bulunmalı.
- Page route/purpose approved site architecture ile eşleşmeli.
- `UNSUPPORTED_PAGE_DESIGN_CAPABILITIES == empty` olmalı.
- Her independently meaningful interaction/action/state exact approved executable support'a semantic subset olmalı.
- Page existence veya broad page purpose child interaction support olarak kullanılamaz.
- Shell, design system ve product rules ile çelişmemeli.
- Page-specific states global SYSTEM_STATES ile uyumlu olmalı ancak SYSTEM_STATES yeni behavior authorize edemez.
- Aynı sorumluluk başka page package'ta gereksiz tekrar edilmemeli.
- `design_planning: standard | full` corporate website'te generated PAGE-DESIGN identity seti approved page setine eşit olmalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — {{PAGE_NAME}} Design Package

- **Page ID**: `{{PAGE_ID}}`
- **Page/Screen**: {{PAGE_NAME}}
- **Slug**: `{{PAGE_SLUG}}`
- **Approved Relation**: {{APPROVED_PAGE_RELATION}}
- **Route / Entry Context**: {{ROUTE_OR_ENTRY_CONTEXT}}
- **Amaç**: {{PAGE_PURPOSE}}

## 1. Approved Capability Support

{{APPROVED_CAPABILITY_SUPPORT}}

## 2. User Goal & Primary Actions

{{PRIMARY_USER_GOALS}}

## 3. Information Hierarchy

{{INFORMATION_HIERARCHY}}

## 4. Layout & Section Breakdown

{{LAYOUT_AND_SECTIONS}}

## 5. Component Composition

{{COMPONENT_COMPOSITION}}

## 6. States & Edge Cases

{{PAGE_STATES}}

## 7. Responsive Behavior

{{RESPONSIVE_BEHAVIOR}}

## 8. Accessibility / Keyboard / Focus

{{ACCESSIBILITY_NOTES}}

## 9. Data & Integration Touchpoints

{{DATA_INTEGRATION_TOUCHPOINTS}}

## 10. Acceptance Notes

{{ACCEPTANCE_NOTES}}

# OUTPUT DOCUMENT END
