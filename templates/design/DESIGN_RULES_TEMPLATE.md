# DESIGN_RULES_TEMPLATE

## Template Metadata

```yaml
template_id: design-rules-template
template_name: Design Rules Template
document_id: DESIGN
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
  - light
  - standard
  - full
required_inputs:
  - approved_intake
conditional_inputs:
  - user_design_preferences
dependencies:
  - PROJECT-BRAIN
  - PRODUCT-RULES
output_filename: DESIGN_RULES.md
```

## Amaç

Projenin **kendine özgü** visual direction'ını, tasarım karakterini, layout/composition ilkelerini, interaction yaklaşımını ve accessibility tabanını tanımlamak.

`DESIGN_RULES.md`, UI içeren her projede design planning'in minimum canonical belgesidir.

## Kullanım Koşulları

UI/UX applicable projelerde `design_planning: light | standard | full` değerlerinin tamamında zorunludur.

## Girdi Kaynakları

- Approved Project Intake
- `engine/PLANNING_PROFILES.md`
- `PROJECT_BRAIN.md`
- `PRODUCT_RULES.md`
- Doğrulanmış brand/design assets ve kullanıcı tercihleri (varsa)

## Zorunlu Bölümler

- Visual Concept & Design Character
- Differentiation / Anti-Template Rationale
- Composition & Layout Principles
- Color Direction & Semantic Roles
- Typography Direction
- Interaction & Motion Principles
- Responsive Principles
- Accessibility Baseline
- Imagery / Iconography Direction
- Explicit Design Anti-Patterns

## İçerik Üretim Kuralları

### 1. Profile Depth ≠ Design Quality

`design_planning: light`, yalnız artifact sayısını sınırlar. Tasarım düşüncesi, visual concept kalitesi veya farklılaşma standardı düşürülemez.

### 2. Sektör Klişesi Default Olamaz

Aşağıdaki gibi otomatik eşlemeler yasaktır:

```text
sanayi/makine → lacivert + klasik kurumsal hero
SaaS → mor/mavi gradient + üç feature card
AI → neon mor/cyan dark theme
kurumsal → hero + 3 card + logo strip + CTA
```

Bu motifler ancak proje bağlamı ve farklılaşma gerekçesiyle bilinçli olarak seçilebilir.

### 3. Project-Specific Visual Concept

Visual concept şu kaynakların birleşiminden türetilmelidir:

- ürün/marka karakteri
- hedef kullanıcı ve kullanım bağlamı
- içerik yoğunluğu
- ürünün ana eylemleri
- mevcut marka varlıkları
- rakiplerden/benzer Engine output'larından ayrışma ihtiyacı

Renk paleti tek başına visual concept değildir.

### 4. Modern ≠ Trend Kopyası

Glassmorphism, gradients, bento grids, giant typography veya başka güncel pattern'ler otomatik olarak kullanılmaz. Pattern yalnız içerik, hierarchy ve interaction ihtiyacını güçlendiriyorsa seçilir.

### 5. Novelty ≠ Usability Loss

Farklılaşma navigasyon, okunabilirlik, accessibility veya task clarity'yi bozmaz.

### 6. Design Decision Provenance

Kullanıcı/brand tarafından açıkça verilmemiş tasarım kararları Engine tarafından yaratıcı design synthesis olarak üretilebilir; ancak **firma gerçeği** gibi gösterilemez. Visual karar ile approved business fact ayrımı korunur.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{VISUAL_CONCEPT_NARRATIVE}}`
- `{{DIFFERENTIATION_RATIONALE}}`
- `{{COMPOSITION_LAYOUT_PRINCIPLES}}`
- `{{COLOR_DIRECTION}}`
- `{{TYPOGRAPHY_DIRECTION}}`
- `{{INTERACTION_MOTION_PRINCIPLES}}`
- `{{RESPONSIVE_PRINCIPLES}}`
- `{{ACCESSIBILITY_BASELINE}}`
- `{{IMAGERY_ICONOGRAPHY_DIRECTION}}`
- `{{DESIGN_ANTI_PATTERNS}}`

## Kapsam Dışı

- Ürün iş kuralları
- Framework-specific implementation code
- Standard/full profile'a ait token/page/feature ayrıntılarının tamamı

## Planning Profile Davranışı

### light

Bu belge kendi başına uygulanabilir design direction vermelidir. Ayrı DESIGN_SYSTEM/PAGE-DESIGN belgesi beklenmediği için temel token yönü, composition mantığı ve interaction karakteri yeterince net olmalıdır.

### standard

Bu belge visual direction authority'sidir; detay token/component sistemi `DESIGN_SYSTEM`, shell/page/state belgelerine dağıtılır.

### full

Standard davranışı korunur; feature/admin gibi daha derin belgeler aynı visual authority'yi kullanır.

## Validation Beklentileri

- Generic/template drift olmamalı.
- Sektör klişesi tek gerekçe olamaz.
- `PRODUCT_RULES.md` ile çelişmemeli.
- Renk/typography/composition kararları aynı visual concept'e hizmet etmeli.
- Accessibility tabanı görünür olmalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Design Rules

## 1. Visual Concept & Design Character

{{VISUAL_CONCEPT_NARRATIVE}}

## 2. Differentiation / Anti-Template Rationale

{{DIFFERENTIATION_RATIONALE}}

## 3. Composition & Layout Principles

{{COMPOSITION_LAYOUT_PRINCIPLES}}

## 4. Color Direction & Semantic Roles

{{COLOR_DIRECTION}}

## 5. Typography Direction

{{TYPOGRAPHY_DIRECTION}}

## 6. Interaction & Motion Principles

{{INTERACTION_MOTION_PRINCIPLES}}

## 7. Responsive Principles

{{RESPONSIVE_PRINCIPLES}}

## 8. Accessibility Baseline

{{ACCESSIBILITY_BASELINE}}

## 9. Imagery / Iconography Direction

{{IMAGERY_ICONOGRAPHY_DIRECTION}}

## 10. Explicit Design Anti-Patterns

{{DESIGN_ANTI_PATTERNS}}

# OUTPUT DOCUMENT END
