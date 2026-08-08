# PRODUCT_RULES_TEMPLATE

## Template Metadata

```yaml
template_id: product-rules-template
template_name: Product Rules Template
document_id: PRODUCT-RULES
version: 1.0.0
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
conditional_inputs: []
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
- `PROJECT_BRAIN.md`

## Zorunlu Bölümler

- İş Mantığı ve Ürün Kuralları (Product Business Rules)
- Davranış ve Akış Kısıtlamaları (Behavioral Constraints)
- Kapsam Sınırları ve Kuralları (Scope Boundaries & Rules)
- Kullanıcı Deneyimi ve İşlevsel Kurallar (UX Functional Rules)

## Koşullu Bölümler

- `[CONDITIONAL: include only if authentication is present]` Kimlik Doğrulama ve Yetki Kuralları
- `[CONDITIONAL: include only if multi-tenancy is present]` Tenant ve İzolasyon Kuralları

## İçerik Üretim Kuralları

- Yalnızca ürün davranışı ve kısıtlamalarına odaklanmalıdır.
- Kodlama, veritabanı şeması veya hosting gibi teknik detayları sahiplenmemelidir (bkz: `TECH_CONTEXT.md`).
- Her kural test edilebilir ve net ifadelerle tanımlanmalıdır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{BUSINESS_RULES_LIST}}`: Temel iş mantığı kuralları listesi.
- `{{BEHAVIORAL_CONSTRAINTS_LIST}}`: Davranışsal kısıtlamalar.
- `{{SCOPE_RULES_LIST}}`: Kapsam kuralları ve sınırları.
- `{{UX_FUNCTIONAL_RULES_LIST}}`: UX ve etkileşim kuralları.

## Kapsam Dışı

- Görsel tasarım sistemi kuralları (bkz: `DESIGN_RULES.md`)
- Veritabanı ilişki tanımları (bkz: `DATA_MODEL.md`)
- API Endpoint detayları (bkz: `API_CONTRACTS.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `product_rules`, `behavior_constraints`, `scope_rules`, `ux_rules`.
- Referenced By: `PROJECT_BRAIN.md`, `AGENT_INSTRUCTIONS.md`, `DESIGN_RULES.md`.

## Delivery Profile Davranışı

- **Foundation**: Temel kapsayıcı ürün kuralları ve kısıtlamalar.
- **Prototype**: Kullanıcı etkileşim ve akış kuralları eklenir.
- **Implementation Ready**: Tüm sınır durumları (edge-cases) ve veri doğrulama kuralları detaylandırılır.
- **Production Ready**: Hata toleransı ve güvenlik/yetkilendirme kısıtlamaları eklenir.

## Validation Beklentileri

- `PROJECT_BRAIN.md` ile kapsam çelişkisi olmamalıdır.
- Teknik kodlama detayları içermemelidir.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

{{BUSINESS_RULES_LIST}}

## 2. Davranış ve Akış Kısıtlamaları

{{BEHAVIORAL_CONSTRAINTS_LIST}}

## 3. Kapsam Sınırları ve Kuralları

{{SCOPE_RULES_LIST}}

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

{{UX_FUNCTIONAL_RULES_LIST}}

[CONDITIONAL: include only if authentication is present]
## 5. Kimlik Doğrulama ve Yetki Kuralları

- Kullanıcı rolleri ve erişim yetki sınırları tanımlanır.

[CONDITIONAL: include only if multi-tenancy is present]
## 6. Tenant ve İzolasyon Kuralları

- Veri ve kullanıcı izolasyon kuralları tanımlanır.

# OUTPUT DOCUMENT END
