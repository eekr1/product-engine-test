# DESIGN_RULES_TEMPLATE

## Template Metadata

```yaml
template_id: design-rules-template
template_name: Design Rules Template
document_id: DESIGN
version: 1.0.0
status: active
template_type: document
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
  - approved_intake
conditional_inputs:
  - user_design_preferences
dependencies:
  - PROJECT-BRAIN
  - PRODUCT-RULES
output_filename: DESIGN_RULES.md
```

## Amaç

Projenin görsel dilini, bileşen kurallarını, UI/UX etkileşim kalıplarını ve erişilebilirlik (accessibility) standartlarını tanımlamak.

## Kullanım Koşulları

Arayüz (UI) içeren tüm projelerde zorunludur/koşulludur.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- `PROJECT_BRAIN.md`, `PRODUCT_RULES.md`

## Zorunlu Bölümler

- Görsel Dil ve Estetik İkeler (Visual Language & Aesthetics)
- Tipografi ve Renk Paleti (Typography & Color Palette)
- Düzen, Spacing ve Responsive Kurallar (Layout & Spacing)
- Etkileşim ve Animation Kuralları (Interactions & Micro-animations)
- Erişilebilirlik Standartları (Accessibility Standards)

## Koşullu Bölümler

- `[CONDITIONAL: include only if dark mode is supported]` Dark Mode Kuralları

## İçerik Üretim Kuralları

- Tasarım kararları kullanıcı tercihlerine dayanmalı; sessizce renk/stil uydurulmamalıdır.
- Modern web estetiği (zengin tipografi, dinamik renk tayfı, glassmorphism, responsive düzen) ilkelerini gözetmelidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{VISUAL_LANGUAGE_NARRATIVE}}`: Estetik yaklaşım ve görsel tema açıklaması.
- `{{COLOR_PALETTE_BLOCK}}`: Ana, ikincil, nötr ve durum renkleri (HSL/HEX).
- `{{TYPOGRAPHY_SCALES_BLOCK}}`: Font aileleri, boyutlar ve ağırlıklar.
- `{{SPACING_AND_LAYOUT_RULES}}`: Grid sistemi, padding/margin standartları.
- `{{ACCESSIBILITY_RULES_LIST}}`: WCAG uyumluluk ve kontras kuralları.

## Kapsam Dışı

- Ürün iş kuralları (bkz: `PRODUCT_RULES.md`)
- Frontend framework kodları

## Diğer Dokümanlarla İlişki

- Primary Owner: `visual_language`, `component_rules`, `interaction_patterns`, `accessibility_rules`.
- Referenced By: `PROJECT_BRAIN.md`, `README.md`.

## Delivery Profile Davranışı

- **Prototype**: Temel görsel dil, renkler, fontlar ve görünüm kuralları.
- **Implementation Ready**: Tam bileşen kuralları, responsive kırılma noktaları ve etkileşim durumları.
- **Production Ready**: Kapsamlı erişilebilirlik standartları, performanslı animasyon bütçesi.

## Validation Beklentileri

- Tasarım tercihleri `PRODUCT_RULES.md` ile çelişmemelidir.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Design Rules

## 1. Görsel Dil ve Estetik İlkeler

{{VISUAL_LANGUAGE_NARRATIVE}}

## 2. Tipografi ve Renk Paleti

{{COLOR_PALETTE_BLOCK}}

{{TYPOGRAPHY_SCALES_BLOCK}}

## 3. Düzen, Spacing ve Responsive Kurallar

{{SPACING_AND_LAYOUT_RULES}}

## 4. Etkileşim ve Animasyon Kuralları

- Hover durumları, geçiş efektleri ve mikro-animasyon standartları.

## 5. Erişilebilirlik Standartları (Accessibility)

{{ACCESSIBILITY_RULES_LIST}}

[CONDITIONAL: include only if dark mode is supported]
## 6. Dark Mode Kuralları

- Karanlık tema renk eşlemeleri ve geçiş dinamikleri.

# OUTPUT DOCUMENT END
