# DECISIONS_TEMPLATE

## Template Metadata

```yaml
template_id: decisions-template
template_name: Decisions Template
document_id: DECISIONS
version: 1.1.0
status: active
template_type: document
category: ai
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
supported_implementation_planning:
  - standard
  - full
required_inputs:
  - approved_intake
dependencies:
  - PROJECT-BRAIN
output_filename: DECISIONS.md
```

## Amaç

Proje süresince alınan kalıcı mimari, ürün, kapsam ve tasarım kararlarını kısa gerekçeleri ve durumlarıyla denetlenebilir biçimde tutmak.

## Kullanım Koşulları

`implementation_planning: standard | full` projelerde zorunludur.

## Zorunlu Bölümler

- Decision Record Standard
- Architectural / Technical Decisions
- Product / Scope Decisions
- Design / UX Decisions
- Deprecated / Superseded Decisions

## İçerik Üretim Kuralları

- Private chain-of-thought saklanmaz; yalnız karar sonucu, kısa gerekçe, alternatif özeti ve etkiler kaydedilir.
- `Proposed` karar ile `Approved` karar ayrılır.
- Assumption, decision gibi gösterilmez; assumption'ın kaynağı ve approval durumu korunur.
- Kullanıcı tarafından onaylanması gereken ürün/teknik kararları agent kendi kendine `Approved` yapamaz.
- Karar değişirse eski kayıt silinmez; `Deprecated`/`Superseded` olarak izlenebilir kalır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{ARCHITECTURAL_DECISIONS}}`
- `{{PRODUCT_SCOPE_DECISIONS}}`
- `{{DESIGN_UX_DECISIONS}}`
- `{{DEPRECATED_DECISIONS}}`

## Karar Formatı

- **ID**: DEC-XXX
- **Tarih**: YYYY-MM-DD
- **Konu**
- **Bağlam**
- **Karar**
- **Kısa Gerekçe**
- **Alternatif Özeti**
- **Etkiler**
- **Durum**: Proposed | Approved | Deprecated | Superseded
- **Approval Source**: applicable ise canonical kullanıcı onayı / approved intake referansı

## Validation Beklentileri

- TECH_CONTEXT / PRODUCT_RULES / DESIGN belgeleriyle çelişmemeli.
- Approved etiketi için gerçek authority/approval kaynağı bulunmalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Decisions

## 1. Decision Record Standard

Yukarıdaki canonical karar formatı kullanılır.

## 2. Architectural / Technical Decisions

{{ARCHITECTURAL_DECISIONS}}

## 3. Product / Scope Decisions

{{PRODUCT_SCOPE_DECISIONS}}

## 4. Design / UX Decisions

{{DESIGN_UX_DECISIONS}}

## 5. Deprecated / Superseded Decisions

{{DEPRECATED_DECISIONS}}

# OUTPUT DOCUMENT END
