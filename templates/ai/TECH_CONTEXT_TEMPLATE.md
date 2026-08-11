# TECH_CONTEXT_TEMPLATE

## Template Metadata

```yaml
template_id: tech-context-template
template_name: Tech Context Template
document_id: TECH-CTX
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
conditional_inputs: []
dependencies:
  - PROJECT-BRAIN
output_filename: TECH_CONTEXT.md
```

## Amaç

Sistemin teknoloji yığınını, mimari kararlarını, bileşen yapısını, entegrasyon noktalarını ve teknik kısıtlamalarını tanımlamak; gerçek backend henüz kapsamda değilse dahi gelecekteki entegrasyonu gereksiz yeniden yazım olmadan destekleyecek boundary'leri görünür kılmak.

## Kullanım Koşulları

Implementation planning uygulanan tüm teknik projelerde zorunludur. `Prototype` veya demo olması bu belgeyi otomatik olarak kapsam dışı bırakmaz.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- `engine/PLANNING_PROFILES.md`
- `PROJECT_BRAIN.md`

## Zorunlu Bölümler

- Teknoloji Yığını (Technology Stack)
- Mimari Kararlar ve Yaklaşım (Architectural Decisions)
- Sistem Bileşenleri ve Boundary'ler (System Components & Boundaries)
- Data / Service / Integration Readiness
- Teknik Kısıtlamalar ve Sınırlar (Technical Constraints)

## Koşullu Bölümler

- `[CONDITIONAL: include only if third-party integrations exist]` Dış Entegrasyon Noktaları
- `[CONDITIONAL: include only if real-time functionality exists]` Real-time / WebSocket Mimarisi
- `[CONDITIONAL: include only if actual backend/API is approved scope]` Backend/API Mimarisi

## İçerik Üretim Kuralları

- Teknoloji ve mimari kararlar net gerekçeleriyle sunulmalıdır.
- İş mantığı veya UX kurallarını sahiplenmemelidir (bkz: `PRODUCT_RULES.md`).
- Kullanıcı tarafından onaylanmamış kütüphane, backend stack'i, API endpoint'i, database veya hosting sağlayıcıları uydurulmamalıdır.
- Demo/prototype projeler throwaway architecture olarak yorumlanmamalıdır.
- Frontend verisi presentation component'lerine kontrolsüz biçimde gömülmemelidir; mock/local data ile gerçek data source arasında değiştirilebilir boundary tanımlanmalıdır.
- Gerçek backend kapsamda değilse `unresolved / future integration` olarak açıkça belirtilmeli; sahte implementation contract'ı üretilmemelidir.

## Integration Readiness Minimumu

Frontend veya demo projelerde aşağıdaki sorular yanıtlanmalıdır:

1. Veri bugün nereden geliyor?
2. Mock/local data hangi katmanda tutuluyor?
3. UI data/service boundary üzerinden nasıl tüketiyor?
4. Gerçek backend eklendiğinde hangi adapter/service katmanı değişecek?
5. Environment/config değerleri uygulama kodundan nasıl ayrılıyor?
6. Hangi backend/API kararları henüz unresolved durumda?

Önerilen soyut ilişki:

```text
UI / Presentation
      ↓
Service / Data Access Boundary
      ↓
Mock / Local Adapter (bugün)
      ↓ replaceable by
Real API Adapter (gelecekte, onaylanırsa)
```

Bu bir framework veya klasör adı zorunluluğu değildir; architectural separation beklentisidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{TECH_STACK_BLOCK}}`: Frontend, backend, veritabanı ve altyapı bileşenleri listesi; bilinmeyenler açıkça unresolved olmalı.
- `{{ARCHITECTURE_OVERVIEW}}`: Sistem mimari yaklaşımının açıklaması.
- `{{SYSTEM_COMPONENTS_LIST}}`: Ana yazılım bileşenleri, modüller ve boundary'ler.
- `{{INTEGRATION_READINESS_BLOCK}}`: Bugünkü data source ile gelecekteki integration boundary arasındaki ilişki.
- `{{TECHNICAL_CONSTRAINTS_LIST}}`: Performans, güvenlik ve altyapı kısıtlamaları.

## Kapsam Dışı

- Ürün iş mantığı kuralları (bkz: `PRODUCT_RULES.md`)
- Detaylı veritabanı sütun tipleri (bkz: `DATA_MODEL.md`)
- Onaylanmamış API contract'ları
- Dağıtım (deployment) adımları (bkz: `DEPLOYMENT.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `technical_stack`, `architecture_decisions`, `system_components`, `integration_points`, `technical_constraints`, `integration_readiness`.
- Referenced By: `PROJECT_BRAIN.md`, `PROJECT_PLAN.md`, `WAVE_MAP.md`, `WAVE_PLAN.md`, `DEPLOYMENT.md`, `TEST_STRATEGY.md`, `DATA_MODEL.md`, `README.md`.

## Planning Profile Davranışı

- **standard**: Teknik stack, module/boundary yapısı, data source gerçekliği ve integration readiness uygulanabilir seviyede netleşir.
- **full**: Standard kapsamına ek olarak karmaşık data/API/test/deployment/operational bağımlılıklar, onaylı gerçek scope kadar derinleştirilir.

Delivery profile yalnızca teslim olgunluğunu etkiler; bu belgenin temel mimari kalite beklentisini düşürmez.

## Validation Beklentileri

- `PROJECT_BRAIN.md` ile stack ve kapsam uyumlu olmalıdır.
- Tanımlanan bileşenler proje kapsamını tam olarak karşılamalıdır.
- Demo/prototype ise mock/local data boundary ve future integration boundary görünür olmalıdır.
- Onaylanmamış backend/API/database kararı gerçekmiş gibi yazılmamalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

{{TECH_STACK_BLOCK}}

## 2. Mimari Kararlar ve Yaklaşım

{{ARCHITECTURE_OVERVIEW}}

## 3. Sistem Bileşenleri ve Boundary'ler

{{SYSTEM_COMPONENTS_LIST}}

## 4. Data / Service / Integration Readiness

{{INTEGRATION_READINESS_BLOCK}}

## 5. Teknik Kısıtlamalar ve Sınırlar

{{TECHNICAL_CONSTRAINTS_LIST}}

[CONDITIONAL: include only if third-party integrations exist]
## 6. Dış Entegrasyon Noktaları

- Dış servisler, API'ler ve entegrasyon protokolleri.

[CONDITIONAL: include only if real-time functionality exists]
## 7. Real-time / WebSocket Mimarisi

- Real-time veri akışı ve bağlantı yönetimi mimarisi.

[CONDITIONAL: include only if actual backend/API is approved scope]
## 8. Backend / API Mimarisi

- Yalnızca approved scope içinde gerçekten kararlaştırılmış backend/API bileşenleri.

# OUTPUT DOCUMENT END
