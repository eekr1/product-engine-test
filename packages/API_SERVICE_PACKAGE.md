# API_SERVICE_PACKAGE

## 1. Package Kimliği

```yaml
package_id: api-service
package_name: API Service Package
package_type: base
version: 1.0.0
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
- API uç noktalarını (endpoints), istek ve yanıt (request/response) sözleşmelerini, hata modellerini ve yetkilendirme standartlarını (`API_CONTRACTS.md`) tanımlamak.
- Veri tabanı varlıklarını, veri sözlüklerini ve veri akışlarını (`DATA_MODEL.md`) belgelemek.
- Teknik stack, sunucu mimarisi ve entegrasyon noktalarını (`TECH_CONTEXT.md`) netleştirmek.
- Ön yüzü (frontend) veya kullanıcı arayüzü olmayan API projelerine gereksiz tasarım (`DESIGN_RULES.md`) veya UI ürün belgeleri zorlamamak.

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

## 4. Desteklenen Delivery Profile'ları

1. **Implementation Ready (Varsayılan):** Backend geliştirici ajanın doğrudan API uç noktalarını, veri modellerini ve iş mantığını kodlamaya başlayabileceği seviye.
2. **Foundation:** API servisinin amacının, veri varlıklarının ve yüksek seviye mimarisinin özetlendiği seviye.
3. **Prototype:** Çekirdek API uç noktalarının (MVP) hızlıca üretilmesine odaklanan seviye.
4. **Production Ready:** Yük dengeleme, rate limit (kullanım sınırı), API gateway, izleme (monitoring), loglama ve canlıya alma süreçlerinin belgelendiği olgun seviye.

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

### Koşullu / İsteğe Bağlı Bilgiler (MAY)
- `existing_resources`: Varsa Swagger/OpenAPI şemaları, mevcut veritabanı bağlantıları.

---

## 6. Doküman Seçimi

Yalnızca `engine/DOCUMENT_CATALOG.md` içinde tanımlı doküman ID'leri kullanılır.

### Zorunlu Dokümanlar (Required)

| Document ID | Dosya Adı | Template Konumu | Seçim Gerekçesi |
|---|---|---|---|
| `README-DOC` | `README.md` | `templates/project/README_TEMPLATE.md` | Servis genel tanımı, kurulum ve çalıştırma talimatları. |
| `PROJECT-BRAIN` | `PROJECT_BRAIN.md` | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | Servisin amacı, kapsadığı sistemler ve temel bağlam. |
| `TECH-CTX` | `TECH_CONTEXT.md` | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | Backend stack'i, mimari kararlar, yetkilendirme ve güvenlik. |
| `API` | `API_CONTRACTS.md` | `templates/project/API_CONTRACTS_TEMPLATE.md` | **Kritik:** Uç noktalar, payload şemaları, status kodları, auth. |
| `DATA` | `DATA_MODEL.md` | `templates/project/DATA_MODEL_TEMPLATE.md` | Veritabanı tabloları/koleksiyonları, ilişkiler ve indeksler. |

### Koşullu Dokümanlar (Conditional)

| Document ID | Dosya Adı | Koşul | Gerekçe |
|---|---|---|---|
| `STATUS` | `CURRENT_STATUS.md` | `project_state == existing` ise | Mevcut API kodunun durumunu ve teknik borçlarını belgelemek için. |
| `PROJ-PLAN` | `PROJECT_PLAN.md` | Aşama aşama teslim istenirse | Yayın ve geliştirme takvimini göstermek için. |
| `WAVE-MAP` | `WAVE_MAP.md` | Çok dalgalı servis geliştirme varsa | Dalga bazlı API teslim hatlarını tanımlamak için. |
| `WAVE-PLAN` | `WAVE_PLAN.md` | `WAVE-MAP` kullanılıyorsa | Aktif dalga API görevlerini ayrıntılandırmak için. |
| `DEPLOY` | `DEPLOYMENT.md` | `delivery_profile == Production Ready` ise | Docker, Kubernetes, CI/CD ve sunucu ortamları için. |
| `OPS` | `OPERATIONS.md` | `delivery_profile == Production Ready` ise | API izleme (Prometheus/Grafana), log takibi (ELK) ve incident response için. |
| `TEST` | `TEST_STRATEGY.md` | `delivery_profile >= Implementation Ready` ise | Birim (unit) testleri, entegrasyon testleri ve yük/stres testleri için. |
| `AGENT-INST` | `AGENT_INSTRUCTIONS.md` | Özel backend kodlama kuralları istenirse | Ajan kodlama standartlarını tanımlamak için. |

### Hariç Tutulan Dokümanlar (Excluded by Default)
Ön yüzü olmayan API servislerinde aşağıdaki belgeler normal koşullarda üretilmez:
- `DESIGN` (`DESIGN_RULES.md`)
- `PRODUCT-RULES` (`PRODUCT_RULES.md` - İş kuralları `TECH_CONTEXT` ve `API_CONTRACTS` içinde kapsanır)
- `PROD-STRAT` (`PRODUCT_STRATEGY.md`)

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- **Yönetim Paneli (Admin UI) Eklentisi:** API servisine bir yönetim arayüzü eklenirse `DEMO_FRONTEND_PACKAGE` veya `CORPORATE_WEBSITE_PACKAGE` kuralları eklenti olarak dahil edilir ve `DESIGN` (`DESIGN_RULES.md`) belgesi eklenir.
- **Mevcut Servis Geliştirme:** Mevcut bir API devralınıyorsa `EXISTING_PROJECT_PACKAGE` extension olarak eklenir ve `STATUS` (`CURRENT_STATUS.md`) zorunlu yapılır.

### Reduction (Daraltma) Kuralları
- Tek bir işlevi olan basit web hook veya entegrasyon servisinde `WAVE-MAP` ve `PROJ-PLAN` çıkarılır.
- Zorunlu belgeler (`README-DOC`, `PROJECT-BRAIN`, `TECH-CTX`, `API`, `DATA`) asla daraltılamaz ve çıkarılamaz.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Servis amacı, temel veri varlıkları ve yüksek seviye API uç nokta listesi özetlenir.
- **Prototype Level:** Temel CRUD uç noktaları, örnek JSON payload'ları ve veritabanı taslağı tanımlanır.
- **Implementation Ready Level:** Tüm HTTP metotları, parametreler, request/response JSON şemaları, validation kuralları, status kodları, yetkilendirme başlıkları (headers) ve ORM/SQL şemaları eksiksiz tanımlanır.
- **Production Ready Level:** Rate limit politikaları, caching (Redis), API versiyonlama (v1/v2), CI/CD pipeline ve izleme metrikleri belgelenir.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **API Yetkilendirme Uyumluğu:** `TECH_CONTEXT.md` içindeki yetkilendirme yöntemi (ör. JWT) ile `API_CONTRACTS.md` içindeki header ve endpoint kuralları birebir tutarlı olmalıdır.
2. **Şema ve Veri Modeli Tutarlılığı:** API istek/yanıt gövdelerindeki alanlar, `DATA_MODEL.md` içindeki veritabanı sütunları/alanları ile uyumlu olmalıdır.
3. **Gereksiz Arayüz Bürokrasisi Kontrolü:** API servisi için gereksiz UI veya tasarım belgelerinin üretilmediği doğrulanmalıdır.

---

## 10. Output Beklentileri

- Çıktı klasörü: `outputs/products/<project-slug>/latest/`
- Tüm API sözleşmeleri ve teknik dokümanlar temiz biçimde teslim edilir.

---

## 11. Büyüme ve Geçiş Yolu (Upgrade Path)

1. **Dahili API Servisi → Dışa Açık Public API:** API Gateway, kullanım kotası (rate limiting), API Key yönetimi ve `OPERATIONS.md` eklenerek genişletilir.
2. **API Servisi → Tam SaaS Platformu:** Frontend uygulamaları ve `SAAS_PACKAGE` extension olarak eklenerek tam ölçekli SaaS ürününe dönüştürülür.
