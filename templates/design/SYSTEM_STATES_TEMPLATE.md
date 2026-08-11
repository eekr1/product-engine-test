# SYSTEM_STATES_TEMPLATE

## Template Metadata

```yaml
template_id: system-states-template
template_name: System States Template
document_id: SYSTEM-STATES
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
  - PRODUCT-RULES
output_filename: SYSTEM_STATES.md
```

## Amaç

Sistemdeki ortak loading, empty, error, success, disabled, unavailable, permission ve feedback durumlarını tek canonical UX sözleşmesinde standardize etmek.

## Kullanım Koşulları

`design_planning: standard | full` olan interactive UI projelerinde zorunludur.

## Zorunlu Bölümler

- Loading State
- Empty State
- Error State
- Success / Confirmation State
- Disabled / Unavailable State
- Shared Feedback Patterns

## Koşullu Bölümler

- Offline State
- Permission / Access Denied State
- Rate Limit / Retry State
- Session Expired State

## İçerik Üretim Kuralları

- Her state için görünüm, mesaj tonu, kullanıcı aksiyonu ve recovery path tanımlanmalıdır.
- Page/feature belgeleri ortak state davranışını yeniden icat edemez; yalnız özel override varsa gerekçelendirir.
- State tasarımları salt ikon/metin listesi değil gerçek kullanım akışını tamamlayan davranış sözleşmesi olmalıdır.
- Accessibility ve keyboard/focus davranışı applicable state'lerde belirtilmelidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{LOADING_STATE_SPEC}}`
- `{{EMPTY_STATE_SPEC}}`
- `{{ERROR_STATE_SPEC}}`
- `{{SUCCESS_STATE_SPEC}}`
- `{{DISABLED_STATE_SPEC}}`
- `{{SHARED_FEEDBACK_PATTERNS}}`
- `{{CONDITIONAL_STATE_SPECS}}`

## Validation Beklentileri

- Product rules ile state davranışları çelişmemeli.
- Page/feature package'ları global state language'ını korumalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — System States

## 1. Loading State

{{LOADING_STATE_SPEC}}

## 2. Empty State

{{EMPTY_STATE_SPEC}}

## 3. Error State

{{ERROR_STATE_SPEC}}

## 4. Success / Confirmation State

{{SUCCESS_STATE_SPEC}}

## 5. Disabled / Unavailable State

{{DISABLED_STATE_SPEC}}

## 6. Shared Feedback Patterns

{{SHARED_FEEDBACK_PATTERNS}}

## 7. Conditional States

{{CONDITIONAL_STATE_SPECS}}

# OUTPUT DOCUMENT END
