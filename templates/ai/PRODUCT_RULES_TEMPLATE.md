# PRODUCT_RULES_TEMPLATE

## Template Metadata

```yaml
template_id: product-rules-template
template_name: Product Rules Template
document_id: PRODUCT-RULES
version: 1.1.0
status: active
template_type: document
category: ai
supported_packages:
  - demo-frontend
  - corporate-website
  - saas
  - existing-project
  - api-service
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs:
  - approved_site_architecture
dependencies:
  - PROJECT-BRAIN
output_filename: PRODUCT_RULES.md
```

## Amaç

Ürünün iş mantığı kurallarını, davranış kısıtlamalarını, kapsam sınırlarını ve UX işlevsel kurallarını tanımlamak.

## Kullanım Koşulları

UI ve iş mantığı içeren projelerde zorunludur. Altyapı/pure infrastructure projelerinde opsiyoneldir.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- Corporate website ise approved Site Architecture registry
- `PROJECT_BRAIN.md`

## Zorunlu Bölümler

- İş Mantığı ve Ürün Kuralları
- Davranış ve Akış Kısıtlamaları
- Kapsam Sınırları ve Kuralları
- Site / Surface Integrity Rules (applicable ise)
- Kullanıcı Deneyimi ve İşlevsel Kurallar

## İçerik Üretim Kuralları

- Yalnızca ürün davranışı ve kısıtlamalarına odaklanmalıdır.
- Kodlama, routing library, veritabanı şeması veya hosting gibi teknik detayları sahiplenmemelidir.
- Corporate website'te approved PAGE identities product scope boundary olarak referanslanabilir ancak site architecture truth yeniden tanımlanamaz.
- Distinct approved page'lerin silent merge/collapse yasağı product-level invariant olarak görünür olmalıdır.
- `Prototype` veya `sales demo` etiketi page breadth'i azaltma izni vermez.
- Her kural test edilebilir ve net ifadelerle tanımlanmalıdır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{BUSINESS_RULES_LIST}}`
- `{{BEHAVIORAL_CONSTRAINTS_LIST}}`
- `{{SCOPE_RULES_LIST}}`
- `{{SITE_SURFACE_INTEGRITY_RULES}}`
- `{{UX_FUNCTIONAL_RULES_LIST}}`

## Kapsam Dışı

- Site architecture truth owner olmak (bkz: approved input + `engine/SITE_ARCHITECTURE_RULES.md`)
- Görsel tasarım sistemi kuralları
- Routing/tooling implementation detayları
- Data model / API contract detayları

## Diğer Dokümanlarla İlişki

- Primary Owner: `product_rules`, `behavior_constraints`, `scope_rules`, `ux_rules`, `page_collapse_constraints`.
- Site Architecture Truth Owner: Approved PROJECT_INPUT.
- Referenced By: `PROJECT_BRAIN.md`, `AGENT_INSTRUCTIONS.md`, `DESIGN_RULES.md`, `WAVE_MAP.md`.

## Validation Beklentileri

- PROJECT_BRAIN ve approved site architecture ile kapsam çelişkisi olmamalıdır.
- Corporate website'te distinct approved pages section/anchor reduction'a izin veren kural bulunmamalıdır.
- Teknik coding/library detayları içermemelidir.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

{{BUSINESS_RULES_LIST}}

## 2. Davranış ve Akış Kısıtlamaları

{{BEHAVIORAL_CONSTRAINTS_LIST}}

## 3. Kapsam Sınırları ve Kuralları

{{SCOPE_RULES_LIST}}

## 4. Site / Surface Integrity Rules

{{SITE_SURFACE_INTEGRITY_RULES}}

## 5. Kullanıcı Deneyimi ve İşlevsel Kurallar

{{UX_FUNCTIONAL_RULES_LIST}}

[CONDITIONAL: include only if authentication is present]
## 6. Kimlik Doğrulama ve Yetki Kuralları

- Kullanıcı rolleri ve erişim yetki sınırları tanımlanır.

[CONDITIONAL: include only if multi-tenancy is present]
## 7. Tenant ve İzolasyon Kuralları

- Veri ve kullanıcı izolasyon kuralları tanımlanır.

# OUTPUT DOCUMENT END
