# TECH_CONTEXT_TEMPLATE

## Template Metadata

```yaml
template_id: tech-context-template
template_name: Tech Context Template
document_id: TECH-CTX
version: 1.1.1
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
```

## Amaç

Sistemin teknoloji yığınını, mimari kararlarını, bileşen yapısını, entegrasyon noktalarını ve teknik kısıtlamalarını tanımlamak; gerçek backend henüz kapsamda değilse dahi gelecekteki entegrasyonu ve ürün continuation path'ini gereksiz yeniden yazım olmadan destekleyecek boundary'leri görünür kılmak.

## Kullanım Koşulları

Implementation planning uygulanan tüm teknik projelerde zorunludur. `Prototype` veya demo olması bu belgeyi otomatik olarak kapsam dışı bırakmaz.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- `engine/PLANNING_PROFILES.md`
- `PROJECT_BRAIN.md`

## Zorunlu Bölümler

- Teknoloji Yığını (Technology Stack)
- Stack Selection & Continuation Rationale
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
- Kullanıcı tarafından onaylanmamış backend stack'i, API endpoint'i, database veya hosting sağlayıcıları uydurulmamalıdır.
- Frontend framework/tooling kararı, approved constraints yoksa Engine tarafından teknik synthesis olarak resolve edilebilir; ancak karar `engine/PLANNING_PROFILES.md` continuation-ready stack gate'ine uymalıdır.
- Demo/prototype projeler throwaway architecture olarak yorumlanmamalıdır.
- Frontend verisi presentation component'lerine kontrolsüz biçimde gömülmemelidir; mock/local data ile gerçek data source arasında değiştirilebilir boundary tanımlanmalıdır.
- Gerçek backend kapsamda değilse `unresolved / future integration` olarak açıkça belirtilmeli; sahte implementation contract'ı üretilmemelidir.
- Sales demo / client demo bağlamında, sırf küçük veya hızlı olduğu için zero-build/dependency-free stack seçilemez.
- Package-managed/component-ready modern baseline yerine minimal stack seçiliyorsa exact project constraint veya düşük migration maliyetini kanıtlayan explicit continuation rationale zorunludur.

## Stack Selection & Continuation Readiness Minimumu

Frontend veya demo projelerde teknoloji yığını yalnız bugünkü scope'u çalıştırdığı için yeterli sayılmaz. TECH_CONTEXT minimum şu sorulara cevap vermelidir:

1. Bu proje kabul edilirse aynı frontend codebase üzerinde devam edilmesi bekleniyor mu?
2. Seçilen stack yeni page/component/state eklenmesini structural rewrite olmadan destekliyor mu?
3. Local development workflow nedir?
4. Build workflow nedir veya neden bilinçli olarak yoktur?
5. Preview workflow nedir?
6. Dependency/package lifecycle nasıl yönetilir veya neden dependency-free seçim continuation açısından güvenlidir?
7. Gerçek API/CMS/auth gibi future layers geldiğinde hangi frontend boundaries korunacaktır?
8. Seçilen stack neden düşük migration maliyetlidir?
9. Zero-build / Vanilla seçildiyse hangi exact constraint/rationale bu seçimi modern package-managed baseline'dan daha doğru kılar?

Canonical expectation:

```text
continuation expected
→ package-managed / component-ready / repeatable tooling baseline preferred

zero-build / dependency-free
→ explicit constraint OR explicit low-migration continuation rationale required
```

Bu kural belirli bir framework zorunluluğu değildir.

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
- `{{STACK_CONTINUATION_RATIONALE}}`: Seçilen frontend stack/tooling'in bugünkü demo scope'u ile gelecekteki continuation path'i neden birlikte desteklediğini açıklayan karar bloğu.
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

- Primary Owner: `technical_stack`, `stack_continuation_rationale`, `architecture_decisions`, `system_components`, `integration_points`, `technical_constraints`, `integration_readiness`.
- Referenced By: `PROJECT_BRAIN.md`, `PROJECT_PLAN.md`, `WAVE_MAP.md`, `WAVE_PLAN.md`, `DEPLOYMENT.md`, `TEST_STRATEGY.md`, `DATA_MODEL.md`, `README.md`.

## Planning Profile Davranışı

- **standard**: Teknik stack, stack continuation rationale, module/boundary yapısı, data source gerçekliği ve integration readiness uygulanabilir seviyede netleşir.
- **full**: Standard kapsamına ek olarak karmaşık data/API/test/deployment/operational bağımlılıklar, onaylı gerçek scope kadar derinleştirilir.

Delivery profile yalnızca teslim olgunluğunu etkiler; bu belgenin temel mimari kalite beklentisini düşürmez.

## Validation Beklentileri

- `PROJECT_BRAIN.md` ile stack ve kapsam uyumlu olmalıdır.
- Tanımlanan bileşenler proje kapsamını tam olarak karşılamalıdır.
- Demo/prototype ise mock/local data boundary ve future integration boundary görünür olmalıdır.
- Frontend/demo ise stack selection ve continuation rationale görünür olmalıdır.
- Continuation beklenen demo için package-managed/component-ready baseline'dan sapma açık constraint/rationale olmadan yapılamaz.
- Dev/build/preview workflow stack reality ile tutarlı ve tekrar üretilebilir olmalıdır.
- Onaylanmamış backend/API/database kararı gerçekmiş gibi yazılmamalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

{{TECH_STACK_BLOCK}}

## 2. Stack Selection & Continuation Rationale

{{STACK_CONTINUATION_RATIONALE}}

## 3. Mimari Kararlar ve Yaklaşım

{{ARCHITECTURE_OVERVIEW}}

## 4. Sistem Bileşenleri ve Boundary'ler

{{SYSTEM_COMPONENTS_LIST}}

## 5. Data / Service / Integration Readiness

{{INTEGRATION_READINESS_BLOCK}}

## 6. Teknik Kısıtlamalar ve Sınırlar

{{TECHNICAL_CONSTRAINTS_LIST}}

[CONDITIONAL: include only if third-party integrations exist]
## 7. Dış Entegrasyon Noktaları

- Dış servisler, API'ler ve entegrasyon protokolleri.

[CONDITIONAL: include only if real-time functionality exists]
## 8. Real-time / WebSocket Mimarisi

- Real-time veri akışı ve bağlantı yönetimi mimarisi.

[CONDITIONAL: include only if actual backend/API is approved scope]
## 9. Backend / API Mimarisi

- Yalnızca approved scope içinde gerçekten kararlaştırılmış backend/API bileşenleri.

# OUTPUT DOCUMENT END
