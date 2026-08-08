# TECH_CONTEXT_TEMPLATE

## Template Metadata

```yaml
template_id: tech-context-template
template_name: Tech Context Template
document_id: TECH-CTX
version: 1.0.0
status: active
template_type: document
category: ai
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs: []
dependencies:
  - PROJECT-BRAIN
output_filename: TECH_CONTEXT.md
```

## Amaç

Sistemin teknoloji yığınını, mimari kararlarını, bileşen yapısını, entegrasyon noktalarını ve teknik kısıtlamalarını tanımlamak.

## Kullanım Koşulları

Tüm teknik projelerde zorunludur.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- `PROJECT_BRAIN.md`

## Zorunlu Bölümler

- Teknoloji Yığını (Technology Stack)
- Mimari Kararlar ve Yaklaşım (Architectural Decisions)
- Sistem Bileşenleri (System Components)
- Teknik Kısıtlamalar ve Sınırlar (Technical Constraints)

## Koşullu Bölümler

- `[CONDITIONAL: include only if third-party integrations exist]` Dış Entegrasyon Noktaları
- `[CONDITIONAL: include only if real-time functionality exists]` Real-time / WebSocket Mimarisi

## İçerik Üretim Kuralları

- Teknoloji ve mimari kararlar net gerekçeleriyle sunulmalıdır.
- İş mantığı veya UX kurallarını sahiplenmemelidir (bkz: `PRODUCT_RULES.md`).
- Kullanıcı tarafından onaylanmamış kütüphane veya hosting sağlayıcıları uydurulmamalı, onaylı intake'e dayanmalıdır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{TECH_STACK_BLOCK}}`: Frontend, backend, veritabanı ve altyapı bileşenleri listesi.
- `{{ARCHITECTURE_OVERVIEW}}`: Sistem mimari yaklaşımının açıklaması.
- `{{SYSTEM_COMPONENTS_LIST}}`: Ana yazılım bileşenleri ve modüller.
- `{{TECHNICAL_CONSTRAINTS_LIST}}`: Performans, güvenlik ve altyapı kısıtlamaları.

## Kapsam Dışı

- Ürün iş mantığı kuralları (bkz: `PRODUCT_RULES.md`)
- Detaylı veritabanı sütun tipleri (bkz: `DATA_MODEL.md`)
- Dağıtım (deployment) adımları (bkz: `DEPLOYMENT.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `technical_stack`, `architecture_decisions`, `system_components`, `integration_points`, `technical_constraints`.
- Referenced By: `PROJECT_BRAIN.md`, `DEPLOYMENT.md`, `TEST_STRATEGY.md`, `DATA_MODEL.md`, `README.md`.

## Delivery Profile Davranışı

- **Foundation**: Temel stack seçimi ve üst seviye mimari.
- **Implementation Ready**: Modül sınırları, veri akışları ve teknik bağımlılıklar eklenir.
- **Production Ready**: Performans, güvenlik, caching, loglama ve ölçeklenme mimarisi eklenir.

## Validation Beklentileri

- `PROJECT_BRAIN.md` ile stack uyumlu olmalıdır.
- Tanımlanan bileşenler proje kapsamını tam olarak karşılamalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

{{TECH_STACK_BLOCK}}

## 2. Mimari Kararlar ve Yaklaşım

{{ARCHITECTURE_OVERVIEW}}

## 3. Sistem Bileşenleri

{{SYSTEM_COMPONENTS_LIST}}

## 4. Teknik Kısıtlamalar ve Sınırlar

{{TECHNICAL_CONSTRAINTS_LIST}}

[CONDITIONAL: include only if third-party integrations exist]
## 5. Dış Entegrasyon Noktaları

- Dış servisler, API'ler ve entegrasyon protokolleri.

[CONDITIONAL: include only if real-time functionality exists]
## 6. Real-time / WebSocket Mimarisi

- Real-time veri akışı ve bağlantı yönetimi mimarisi.

# OUTPUT DOCUMENT END
