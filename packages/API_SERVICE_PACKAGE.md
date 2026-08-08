# API_SERVICE_PACKAGE

## 1. Package Kimliği

```yaml
package_id: api-service
package_name: API Service Package
package_type: base
version: 1.3.0
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
- Servisin iş kurallarını, davranış kısıtlamalarını ve kapsam sınırlarını (`PRODUCT_RULES.md`) belgelemek (ilgili `project_type` türlerinde).
- API uç noktalarını (endpoints), istek ve yanıt (request/response) sözleşmelerini, hata modellerini ve yetkilendirme standartlarını (`API_CONTRACTS.md`) tanımlamak.
- Veri tabanı varlıklarını, veri sözlüklerini ve veri akışlarını (`DATA_MODEL.md`) belgelemek.
- Teknik stack, sunucu mimarisi ve entegrasyon noktalarını (`TECH_CONTEXT.md`) netleştirmek.
- Ön yüzü (frontend) veya kullanıcı arayüzü olmayan API projelerine gereksiz tasarım (`DESIGN_RULES.md`) veya UI belgeleri zorlamamak.

---

## 3. Doküman Seçimi Filtreleme İlkesi ve Deterministik Fallback Algoritması

Desteklenen her `project_type + delivery_profile` kombinasyonunda hangi dokümanların geçerli olduğunu belirlemek için aşağıdaki **Deterministik Doküman Çözümleme Algoritması** uygulanır:

```text
1. Seçilen delivery_profile için paketin aday doküman setini al (Candidate Document Set).
2. engine/DOCUMENT_CATALOG.md "Applicable Profiles" filtresini uygula:
   └─ Dokümanın Applicable Profiles listesi seçilen delivery_profile'ı içeriyor mu? (İçermiyorsa elenir).
3. engine/DOCUMENT_CATALOG.md "Applicable Types" filtresini uygula:
   └─ Dokümanın Applicable Types listesi seçilen project_type'ı içeriyor mu? (İçermiyorsa elenir).
4. İki filtreyi de geçen doküman kümesi, ilgili kombinasyonun geçerli doküman kapsamını oluşturur.
5. Aşağıda açıkça örneklenmemiş kombinasyonlar bu deterministik kural ile yorumsuz çözülür.
```

---

## 4. Desteklenen Project Type + Delivery Profile Doküman Matrisi

### 4.1 `api-service` Bağlamı

- **Foundation Profile:**
  - *Zorunlu:* `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `TECH-CTX` (`TECH_CONTEXT.md`).
- **Prototype Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`.
- **Implementation Ready Profile (Varsayılan):**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `API` (`API_CONTRACTS.md`), `DATA` (`DATA_MODEL.md`).
  - *Koşullu:* `STATUS` (`CURRENT_STATUS.md`), `PROJ-PLAN` (`PROJECT_PLAN.md`), `WAVE-MAP` (`WAVE_MAP.md`), `WAVE-PLAN` (`WAVE_PLAN.md`), `TEST` (`TEST_STRATEGY.md`), `AGENT-INST` (`AGENT_INSTRUCTIONS.md`).
- **Production Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `API`, `DATA`, `DEPLOY` (`DEPLOYMENT.md`), `OPS` (`OPERATIONS.md`).

### 4.2 `integration` Bağlamı

- **Foundation Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `TECH-CTX`.
- **Prototype Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`.
- **Implementation Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `TECH-CTX`, `API`.
  - *Elenenler:* `PRODUCT-RULES`, `DATA`, `WAVE-MAP`, `WAVE-PLAN`, `TEST`, `OPS` (`integration` türü için catalog'da geçerli değildir).
  - *Koşullu:* `STATUS`, `PROJ-PLAN`, `AGENT-INST`.
- **Production Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `TECH-CTX`, `API`.

### 4.3 `infrastructure` Bağlamı

- **Foundation Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `TECH-CTX`.
- **Prototype Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`.
- **Implementation Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `TECH-CTX`.
  - *Elenenler:* `PRODUCT-RULES`, `DATA`, `API`, `WAVE-MAP`, `WAVE-PLAN`, `TEST`, `OPS` (`infrastructure` türü için catalog'da geçerli değildir).
- **Production Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `TECH-CTX`, `DEPLOY` (`DEPLOYMENT.md`).

---

## 5. Intake Gereksinimleri

### Zorunlu Intake Bilgileri (MUST)
- `project_name`: API veya servis adı.
- `project_purpose`: Servisin sunduğu işlev veya veri hizmeti.
- `project_type`: `api-service`, `integration` veya `infrastructure`.
- `delivery_profile`: `Implementation Ready` (varsayılan) veya seçilen seviye.
- `primary_language`: Çıktı dili.

---

## 6. Sahiplik (Information Ownership) Kuralları

`engine/INFORMATION_MAP.md` uyarınca:
- **`PRODUCT_RULES.md` (`PRODUCT-RULES`)**: Servisin iş kuralları ve davranış kısıtlamalarının birincil sahibidir (primary owner - `api-service` türünde). İş kuralları asla `TECH_CONTEXT.md` veya `API_CONTRACTS.md` tarafından sahiplenilemez.
- **`TECH_CONTEXT.md` (`TECH-CTX`)**: Backend stack'i, mimari kararlar, entegrasyon noktaları ve altyapı tercihlerinin birincil sahibidir.
- **`API_CONTRACTS.md` (`API`)**: API uç noktaları, request/response şemaları, status kodları ve auth başlıklarının birincil sahibidir.

### Hariç Tutulan Dokümanlar (Default Excluded)
Ön yüzü olmayan projelerde aşağıdaki belgeler normal koşullarda üretilmez:
- `DESIGN` (`DESIGN_RULES.md`), `PROD-STRAT` (`PRODUCT_STRATEGY.md`).

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- **Yönetim Paneli (Admin UI) Eklentisi:** API servisine bir yönetim arayüzü eklenirse `DEMO_FRONTEND_PACKAGE` veya `CORPORATE_WEBSITE_PACKAGE` kuralları eklenti olarak dahil edilir ve `DESIGN` (`DESIGN_RULES.md`) belgesi eklenir.
- **Mevcut Servis Geliştirme:** Mevcut bir API devralınıyorsa `EXISTING_PROJECT_PACKAGE` extension olarak eklenir ve `STATUS` (`CURRENT_STATUS.md`) zorunlu yapılır.

### Reduction (Daraltma) Kuralları
- `integration` veya `infrastructure` proje türlerinde catalog gereği geçerli olmayan belgeler kendiliğinden filtrelenir.
- Deterministik fallback algoritması sonucunda kalan zorunlu belgeler daraltılamaz.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Servis amacı, temel veri varlıkları ve yüksek seviye API uç nokta listesi özetlenir.
- **Prototype Level:** Temel CRUD uç noktaları, örnek JSON payload'ları ve veritabanı taslağı tanımlanır.
- **Implementation Ready Level:** Tüm HTTP metotları, parametreler, request/response JSON şemaları, validation kuralları, status kodları, yetkilendirme başlıkları (headers) ve ORM/SQL şemaları eksiksiz tanımlanır.
- **Production Ready Level:** Rate limit politikaları, caching (Redis), API versiyonlama (v1/v2), CI/CD pipeline ve izleme metrikleri belgelenir.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **Deterministik Fallback Doğrulaması:** `integration` bağlamında `PRODUCT-RULES`/`DATA`, `infrastructure` bağlamında `PRODUCT-RULES`/`DATA`/`API` zorlamasının yapılmadığı doğrulanmalıdır.
2. **Information Ownership Doğrulaması:** İş kurallarının (`api-service` için) `PRODUCT_RULES.md` bünyesinde tutulduğu; `TECH_CONTEXT.md` veya `API_CONTRACTS.md` dosyalarının alan ihlali yapmadığı kontrol edilir.
3. **API Yetkilendirme Uyumluğu:** `TECH_CONTEXT.md` yetkilendirme yöntemi ile `API_CONTRACTS.md` endpoint kuralları birebir tutarlı olmalıdır.

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

1. **Deterministik Çözümleme Uyumluğu:** `api-service`, `integration` veya `infrastructure` proje türleri ve seçilen `delivery_profile` kombinasyonlarının deterministik fallback algoritmasıyla yorum gerektirmeden çözülebilmesi.
2. **Catalog Sınırlarının Korunması:** `integration` için `PRODUCT-RULES`/`DATA`, `infrastructure` için `API`/`DATA`/`PRODUCT-RULES` zorlaması olmaması.
3. **`PRODUCT-RULES` Sahipliği:** `api-service` türünde `PRODUCT_RULES.md` belgesinin iş kurallarının yetkili sahibi (primary owner) olması.
4. **Temiz Output:** Tüm belgelerin `outputs/products/<project-slug>/latest/` altında eksiksiz, doğrulanmış ve teslim edilebilir durumda bulunması.
