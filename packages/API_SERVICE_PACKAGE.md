# API_SERVICE_PACKAGE

## 1. Package Kimliği

```yaml
package_id: api-service
package_name: API Service Package
package_type: base
version: 1.1.0
status: active
default_delivery_profile: Implementation Ready
compatible_project_types:
  - api-service
  - integration
  - infrastructure
compatible_extensions:
  - existing-project
  - saas
incompatible_packages: []
```

---

## 2. Amaç

`API_SERVICE_PACKAGE`, bağımsız arka uç (backend) servisleri, REST/GraphQL API'leri, mikroservisler, veri entegrasyon servisleri, yapay zekâ model servisleri ve altyapı projeleri için dokümantasyon kapsamını tanımlar.

Ana hedefleri:
- Servisin iş kurallarını, davranış kısıtlamalarını ve kapsam sınırlarını (`PRODUCT_RULES.md`) belgelemek.
- API uç noktalarını (endpoints), istek ve yanıt (request/response) sözleşmelerini, hata modellerini ve yetkilendirme standartlarını (`API_CONTRACTS.md`) tanımlamak.
- Veri tabanı varlıklarını, veri sözlüklerini ve veri akışlarını (`DATA_MODEL.md`) belgelemek.
- Teknik stack, sunucu mimarisi ve entegrasyon noktalarını (`TECH_CONTEXT.md`) netleştirmek.
- Ön yüzü (frontend) veya kullanıcı arayüzü olmayan API projelerine gereksiz tasarım (`DESIGN_RULES.md`) veya UI belgeleri zorlamamak.

---

## 3. Uygun Olduğu ve Olmadığı Proje Bağlamları

### Uygun Olduğu Bağlamlar
- Web veya mobil uygulamalara hizmet veren bağımsız backend servisleri.
- Sistemler arası veri entegrasyonu sağlayan köprü ve middleware projeleri.
- Yapay zekâ, makine öğrenimi veya veri işleme API servisleri.
- İç kullanım amaçlı mikroservisler veya webhook dinleyici servisler.

### Uygun Olmadığı Bağlamlar
- Kullanıcı arayüzü (UI) odaklı web ve mobil uygulamalar (Bkz: `DEMO_FRONTEND_PACKAGE.md` veya `CORPORATE_WEBSITE_PACKAGE.md`).
- Sadece statik içerik sunan kurumsal siteler.

---

## 4. Desteklenen Delivery Profile'ları ve Profile Özel Doküman Kapsamı

`engine/DOCUMENT_CATALOG.md` kurallarına göre desteklenen her delivery profile için izin verilen ve zorunlu kılınan doküman kapsamı aşağıda tanımlanmıştır:

### 4.1 Foundation Profile
*Amaç: API servisinin amacının, iş kurallarının ve yüksek seviye mimarisinin özetlendiği seviye.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `TECH-CTX` (`TECH_CONTEXT.md`).
- **Not:** `DOCUMENT_CATALOG.md` kuralları uyarınca `API` ve `DATA` belgelerinin geçerli olduğu profiller `Implementation Ready` ve `Production Ready`'dir. Bu nedenle `Foundation` seviyesinde zorunlu kılınmazlar.

### 4.2 Prototype Profile
*Amaç: Çekirdek API uç noktalarının (MVP) hızlıca üretilmesine odaklanan seviye.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`).

### 4.3 Implementation Ready Profile (Varsayılan)
*Amaç: Backend geliştirici ajanın doğrudan API uç noktalarını, veri modellerini ve iş mantığını kodlamaya başlayabileceği tam paket.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `TECH-CTX` (`TECH_CONTEXT.md`), `API` (`API_CONTRACTS.md`), `DATA` (`DATA_MODEL.md`).
- **Koşullu Dokümanlar:** `STATUS` (`CURRENT_STATUS.md`), `PROJ-PLAN` (`PROJECT_PLAN.md`), `WAVE-MAP` (`WAVE_MAP.md`), `WAVE-PLAN` (`WAVE_PLAN.md`), `TEST` (`TEST_STRATEGY.md`), `AGENT-INST` (`AGENT_INSTRUCTIONS.md`).

### 4.4 Production Ready Profile
*Amaç: Yük dengeleme, rate limit (kullanım sınırı), API gateway, izleme (monitoring), loglama ve canlıya alma süreçlerinin belgelendiği olgun seviye.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `TECH-CTX` (`TECH_CONTEXT.md`), `API` (`API_CONTRACTS.md`), `DATA` (`DATA_MODEL.md`), `DEPLOY` (`DEPLOYMENT.md`), `OPS` (`OPERATIONS.md`).
- **Koşullu Dokümanlar:** `STATUS`, `PROJ-PLAN`, `WAVE-MAP`, `WAVE-PLAN`, `TEST`, `AGENT-INST`.

---

## 5. Intake Gereksinimleri

### Zorunlu Intake Bilgileri (MUST)
- `project_name`: API veya servis adı.
- `project_purpose`: Servisin sunduğu işlev veya veri hizmeti.
- `project_type`: `api-service`, `integration` veya `infrastructure`.
- `delivery_profile`: `Implementation Ready` (varsayılan) veya seçilen seviye.
- `primary_language`: Çıktı dili.

### Önerilen Intake Bilgileri (SHOULD)
- `core_flows`: Ana API kullanım senaryoları ve veri akışları.
- `technical_stack`: Dil (Node.js, Go, Python, C# vb.), framework, veritabanı, yetkilendirme (JWT, OAuth2, API Key).
- `known_constraints`: Performans (latency, TPS), rate limit veya güvenlik kısıtlamaları.

---

## 6. Doküman Seçimi ve Sahiplik Kuralları

Yalnızca `engine/DOCUMENT_CATALOG.md` içinde tanımlı doküman ID'leri kullanılır.

### Zorunlu Dokümanlar (Implementation Ready Varsayılan Profilinde)

| Document ID | Dosya Adı | Template Konumu | Seçim Gerekçesi |
|---|---|---|---|
| `README-DOC` | `README.md` | `templates/project/README_TEMPLATE.md` | Servis genel tanımı, kurulum ve çalıştırma talimatları. |
| `PROJECT-BRAIN` | `PROJECT_BRAIN.md` | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | Servisin amacı, kapsadığı sistemler ve temel bağlam. |
| `PRODUCT-RULES` | `PRODUCT_RULES.md` | `templates/ai/PRODUCT_RULES_TEMPLATE.md` | **Kritik:** Servisin ürün kuralları, iş mantığı kısıtlamaları ve davranış kuralları. |
| `TECH-CTX` | `TECH_CONTEXT.md` | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | Backend stack'i, mimari kararlar, yetkilendirme ve güvenlik. |
| `API` | `API_CONTRACTS.md` | `templates/project/API_CONTRACTS_TEMPLATE.md` | Uç noktalar, payload şemaları, status kodları, auth yöntemi. |
| `DATA` | `DATA_MODEL.md` | `templates/project/DATA_MODEL_TEMPLATE.md` | Veritabanı tabloları/koleksiyonları, ilişkiler ve indeksler. |

### Bilgi Sahipliği (Information Ownership) İlkesi
`engine/INFORMATION_MAP.md` uyarınca:
- **`PRODUCT_RULES.md`**: Servisin iş kuralları ve davranış kısıtlamalarının birincil sahibidir (primary owner). İş kuralları asla `TECH_CONTEXT.md` veya `API_CONTRACTS.md` tarafından sahiplenilemez.
- **`TECH_CONTEXT.md`**: Teknik stack, mimari kararlar ve sistem bileşenlerinin birincil sahibidir.
- **`API_CONTRACTS.md`**: API uç noktaları, request/response şemaları, status kodları ve auth başlıklarının birincil sahibidir.

### Hariç Tutulan Dokümanlar (Default Excluded)
Ön yüzü olmayan API servislerinde aşağıdaki belgeler normal koşullarda üretilmez:
- `DESIGN` (`DESIGN_RULES.md`)
- `PROD-STRAT` (`PRODUCT_STRATEGY.md`)

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- **Yönetim Paneli (Admin UI) Eklentisi:** API servisine bir yönetim arayüzü eklenirse `DEMO_FRONTEND_PACKAGE` veya `CORPORATE_WEBSITE_PACKAGE` kuralları eklenti olarak dahil edilir ve `DESIGN` (`DESIGN_RULES.md`) belgesi eklenir.
- **Mevcut Servis Geliştirme:** Mevcut bir API devralınıyorsa `EXISTING_PROJECT_PACKAGE` extension olarak eklenir ve `STATUS` (`CURRENT_STATUS.md`) zorunlu yapılır.

### Reduction (Daraltma) Kuralları
- Tek bir işlevi olan basit web hook veya entegrasyon servisinde `WAVE-MAP` ve `PROJ-PLAN` çıkarılır.
- Seçilen delivery profile kapsamındaki zorunlu çekirdek belgeler (`README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `API`, `DATA`) daraltılamaz ve çıkarılamaz.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Servis amacı, temel veri varlıkları ve yüksek seviye API uç nokta listesi özetlenir.
- **Prototype Level:** Temel CRUD uç noktaları, örnek JSON payload'ları ve veritabanı taslağı tanımlanır.
- **Implementation Ready Level:** Tüm HTTP metotları, parametreler, request/response JSON şemaları, validation kuralları, status kodları, yetkilendirme başlıkları (headers) ve ORM/SQL şemaları eksiksiz tanımlanır.
- **Production Ready Level:** Rate limit politikaları, caching (Redis), API versiyonlama (v1/v2), CI/CD pipeline ve izleme metrikleri belgelenir.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **Information Ownership Doğrulaması:** İş kurallarının `PRODUCT_RULES.md` bünyesinde tutulduğu; `TECH_CONTEXT.md` veya `API_CONTRACTS.md` dosyalarının alan ihlali yapmadığı kontrol edilir.
2. **API Yetkilendirme Uyumluğu:** `TECH_CONTEXT.md` içindeki yetkilendirme yöntemi (ör. JWT) ile `API_CONTRACTS.md` içindeki header ve endpoint kuralları birebir tutarlı olmalıdır.
3. **Şema ve Veri Modeli Tutarlılığı:** API istek/yanıt gövdelerindeki alanlar, `DATA_MODEL.md` içindeki veritabanı sütunları/alanları ile uyumlu olmalıdır.

---

## 10. Output Beklentileri

- Çıktı klasörü: `outputs/products/<project-slug>/latest/`
- Tüm API sözleşmeleri ve teknik dokümanlar temiz biçimde teslim edilir.

---

## 11. Büyüme ve Geçiş Yolu (Upgrade Path)

1. **Dahili API Servisi → Dışa Açık Public API:** API Gateway, kullanım kotası (rate limiting), API Key yönetimi ve `OPERATIONS.md` eklenerek genişletilir.
2. **API Servisi → Tam SaaS Platformu:** Frontend uygulamaları ve `SAAS_PACKAGE` extension olarak eklenerek tam ölçekli SaaS ürününe dönüştürülür.

---

## 12. Tamamlanma Kriterleri

Bu paket çalışması tamamlandığında aşağıdaki kriterlerin karşılandığı doğrulanmalıdır:

1. **`PRODUCT-RULES` Varlığı ve Sahipliği:** `PRODUCT_RULES.md` belgesinin pakete dahil edilmiş olması ve iş kurallarının yetkili sahibi (primary owner) olarak tanımlanması.
2. **Profile ve Catalog Uyumu:** `Implementation Ready` seviyesinde (`README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `API`, `DATA`) belgelerinin `engine/DOCUMENT_CATALOG.md` kurallarıyla tam örtüşmesi.
3. **Arayüz Bürokrasisi Yokluğu:** Ön yüzü olmayan API projelerinde gereksiz `DESIGN` (`DESIGN_RULES.md`) belgelerinin zorunlu tutulmamış olması.
4. **API ve Şema Tutarlılığı:** `API_CONTRACTS.md` ve `DATA_MODEL.md` şemalarının birbiriyle ve yetkilendirme kararlarıyla uyumlu olması.
5. **Temiz Output:** Tüm belgelerin `outputs/products/<project-slug>/latest/` altında eksiksiz, doğrulanmış ve teslim edilebilir durumda bulunması.
