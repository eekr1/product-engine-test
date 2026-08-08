# SAAS_PACKAGE

## 1. Package Kimliği

```yaml
package_id: saas
package_name: SaaS Package
package_type: base
version: 1.1.0
status: active
default_delivery_profile: Implementation Ready
compatible_project_types:
  - web-app
  - api-service
  - mobile-app
  - content-platform
compatible_extensions:
  - existing-project
  - api-service
incompatible_packages: []
```

> **Önemli Not:** `saas` bir paket tanımıdır (Package); bir proje türü (`project_type`) değildir. Authoritative proje türleri `engine/PROJECT_INTAKE.md` belgesindedir (ör. `web-app`, `api-service`). SaaS paketi, bu proje türlerinin birleşimiyle çalışan ürünler için dokümantasyon kapsamını belirler.

---

## 2. Amaç

`SAAS_PACKAGE`, Hizmet Olarak Yazılım (Software-as-a-Service) iş modeline sahip, kullanıcı hesabı yönetimi, yetkilendirme, veri mimarisi, API servisleri, iş akışları ve sürdürülebilir operasyon gerektiren karmaşık yazılım ürünleri için kapsamlı dokümantasyon profili tanımlar.

Ana hedefleri:
- Ürün kurallarını, kullanıcı rollerini (RBAC), yetki matrisini ve iş mantığını eksiksiz belgelemek.
- Mimari kararları, veritabanı şemasını (`DATA_MODEL.md`) ve API sözleşmelerini (`API_CONTRACTS.md`) tanımlamak.
- Ürünü aşamalı olarak geliştirmek için Dalga Haritası (`WAVE_MAP.md`) ve Dalga Planı (`WAVE_PLAN.md`) oluşturmak.
- Seçilen Delivery Profile olgunluğuna göre gereksiz yük oluşturmamak; örneğin `Foundation` veya `Prototype` seviyesinde `DOCUMENT_CATALOG.md` kurallarının izin vermediği Implementation/Production Ready dokümanlarını zorunlu kılmamak.

---

## 3. Uygun Olduğu ve Olmadığı Proje Bağlamları

### Uygun Olduğu Bağlamlar
- B2B veya B2C SaaS platformları.
- Çok kiracılı (multi-tenant) veya tek kiracılı bulut uygulamaları.
- Abonelik, kullanım sınırı (rate limit), ödeme entegrasyonu ve yönetim paneli içeren yazılımlar.
- Hem ön yüz (web/mobil) hem arka yüz (API) bileşenleri olan entegre ürünler.

### Uygun Olmadığı Bağlamlar
- Sadece tanıtım amaçlı kurumsal web siteleri (Bkz: `CORPORATE_WEBSITE_PACKAGE.md`).
- Sadece görsel prototip veya arayüz demosu olan projeler (Bkz: `DEMO_FRONTEND_PACKAGE.md`).
- Ön yüzü bulunmayan, sadece tekil mikroservis niteliğindeki projeler (Bkz: `API_SERVICE_PACKAGE.md`).

---

## 4. Desteklenen Delivery Profile'ları ve Profile Özel Doküman Kapsamı

`engine/DOCUMENT_CATALOG.md` kurallarına göre desteklenen her delivery profile için izin verilen ve zorunlu kılınan doküman kapsamı aşağıda tanımlanmıştır:

### 4.1 Foundation Profile
*Amaç: SaaS ürün fikrinin, mimari yaklaşımının ve temel iş kurallarının tanımlanması.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `TECH-CTX` (`TECH_CONTEXT.md`).
- **Not:** `DOCUMENT_CATALOG.md` kurallarına göre `DATA`, `API`, `WAVE-MAP`, `WAVE-PLAN`, `DEPLOY` ve `OPS` belgelerinin applicable olduğu profiller `Implementation Ready` ve/veya `Production Ready`'dir. Bu nedenle `Foundation` seviyesinde zorunlu tutulamazlar.

### 4.2 Prototype Profile
*Amaç: SaaS uygulamasının ilk çekirdek akışının (MVP) hızlıca üretilmesine odaklanan seviye.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`).
- **Koşullu Dokümanlar:** `DESIGN` (`DESIGN_RULES.md` - kullanıcı arayüzü varsa), `STATUS` (`CURRENT_STATUS.md` - mevcut projeler için).

### 4.3 Implementation Ready Profile (Varsayılan)
*Amaç: Ajanların doğrudan frontend ve backend geliştirmesine başlayabileceği, dalga planları, veri modelleri ve API sözleşmeleri eksiksiz tam paket.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `TECH-CTX` (`TECH_CONTEXT.md`), `DATA` (`DATA_MODEL.md`), `API` (`API_CONTRACTS.md`), `WAVE-MAP` (`WAVE_MAP.md`), `WAVE-PLAN` (`WAVE_PLAN.md`).
- **Koşullu Dokümanlar:** `STATUS` (`CURRENT_STATUS.md`), `DESIGN` (`DESIGN_RULES.md`), `PROD-STRAT` (`PRODUCT_STRATEGY.md`), `PROJ-PLAN` (`PROJECT_PLAN.md`), `TEST` (`TEST_STRATEGY.md`), `AGENT-INST` (`AGENT_INSTRUCTIONS.md`).

### 4.4 Production Ready Profile
*Amaç: Canlı ortam dağıtımı (Deployment), izleme (Monitoring), yedekleme, güvenlik ve operasyonel süreçlerin (`OPERATIONS.md`) eklendiği en üst olgunluk seviyesi.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `TECH-CTX` (`TECH_CONTEXT.md`), `DATA` (`DATA_MODEL.md`), `API` (`API_CONTRACTS.md`), `WAVE-MAP` (`WAVE_MAP.md`), `WAVE-PLAN` (`WAVE_PLAN.md`), `DEPLOY` (`DEPLOYMENT.md`), `OPS` (`OPERATIONS.md`).
- **Koşullu Dokümanlar:** `STATUS`, `DESIGN`, `PROD-STRAT`, `PROJ-PLAN`, `TEST`, `AGENT-INST`.

---

## 5. Intake Gereksinimleri

### Zorunlu Intake Bilgileri (MUST)
- `project_name`: SaaS ürün adı.
- `project_purpose`: Ürünün çözdüğü temel problem ve değer önerisi.
- `project_type`: `web-app`, `api-service` veya `mobile-app`.
- `delivery_profile`: `Implementation Ready` (varsayılan) veya seçilen olgunluk seviyesi.
- `primary_language`: Çıktı dili.

### Önerilen Intake Bilgileri (SHOULD)
- `target_users`: Kullanıcı rolleri (ör. Admin, Tenant Owner, End User) ve hedef kitle.
- `core_flows`: Kayıt/giriş, onboarding, ana işlev akışı, ödeme/abonelik.
- `technical_stack`: Frontend, backend, veritabanı, auth ve hosting tercihleri.
- `goals`: Başarı kriterleri ve hedeflenen ürün kapasitesi.

---

## 6. Doküman Seçimi ve Sahiplik Kuralları

Yalnızca `engine/DOCUMENT_CATALOG.md` içinde tanımlı doküman ID'leri kullanılır.

### Zorunlu Dokümanlar (Implementation Ready Varsayılan Profilinde)

| Document ID | Dosya Adı | Template Konumu | Seçim Gerekçesi |
|---|---|---|---|
| `README-DOC` | `README.md` | `templates/project/README_TEMPLATE.md` | Projenin genel yapısı ve çalıştırma rehberi. |
| `PROJECT-BRAIN` | `PROJECT_BRAIN.md` | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | SaaS ürün bağlamı, vizyonu ve ana bileşen özeti. |
| `PRODUCT-RULES` | `PRODUCT_RULES.md` | `templates/ai/PRODUCT_RULES_TEMPLATE.md` | Kullanıcı rolleri, yetkilendirme kuralları, iş mantığı kısıtlamaları. |
| `TECH-CTX` | `TECH_CONTEXT.md` | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | Sistem mimarisi, teknik stack, yetkilendirme ve güvenlik kararları. |
| `DATA` | `DATA_MODEL.md` | `templates/project/DATA_MODEL_TEMPLATE.md` | Veritabanı varlıkları, ilişkiler ve veri akışları. |
| `API` | `API_CONTRACTS.md` | `templates/project/API_CONTRACTS_TEMPLATE.md` | REST/GraphQL uç noktaları, istek/yanıt şemaları, auth yöntemi. |
| `WAVE-MAP` | `WAVE_MAP.md` | `templates/waves/WAVE_MAP_TEMPLATE.md` | Ürünün teslim dalgaları (Waves) ve aşamalı kapsam haritası. |
| `WAVE-PLAN` | `WAVE_PLAN.md` | `templates/waves/WAVE_PLAN_TEMPLATE.md` | Aktif dalganın detaylı görev kırılımı ve kabul kriterleri. |

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- **Yapay Zekâ Entegrasyonu Eklentisi:** LLM veya AI servisleri içeren SaaS ürünlerinde `TECH_CONTEXT` ve `API_CONTRACTS` eklenti parametreleriyle genişletilir.
- **Mevcut SaaS Projesi:** Mevcut bir SaaS projesi devralınıyorsa `EXISTING_PROJECT_PACKAGE` extension olarak eklenir ve `STATUS` (`CURRENT_STATUS.md`) zorunlu yapılır.

### Reduction (Daraltma) Kuralları
- `Foundation` veya `Prototype` seviyelerinde `DOCUMENT_CATALOG.md` standartlarına uygun olarak `DATA`, `API`, `WAVE-MAP`, `WAVE-PLAN`, `OPS` ve `DEPLOY` belgeleri zorunlu tutulmaz.
- Seçilen delivery profile kapsamındaki zorunlu çekirdek belgeler daraltılamaz ve çıkarılamaz.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Ürün konsepti, temel roller, yüksek seviye mimari ve varlık listesi seviyesindedir.
- **Prototype Level:** MVP akışı, temel veri modeli şeması ve kritik API endpoint'leri tanımlanır.
- **Implementation Ready Level:** Tüm varlıklar (entities), alanlar (fields), ilişkiler (foreign keys), API istek/yanıt şemaları, dalga bazlı görevler ve kabul kriterleri ajanın kod yazacağı derinliktedir.
- **Production Ready Level:** Üretim ortamı, güvenlik, yük dengeleme, log izleme, felaket kurtarma (disaster recovery) ve operasyon kılavuzları tamamlanmıştır.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **Rol ve Yetki Tutarlılığı:** `PRODUCT_RULES.md` içindeki kullanıcı rolleri ile `API_CONTRACTS.md` içindeki endpoint yetki gereksinimleri örtüşmelidir.
2. **Veri Modeli ve Akış Uyuşması:** `DATA_MODEL.md` içindeki varlıklar, `core_flows` içerisindeki tüm veri ihtiyaçlarını karşılamalıdır.
3. **Dalga Uyumu:** `WAVE_MAP.md` kapsamı ile `WAVE_PLAN.md` görevleri arasında tutarsızlık bulunmamalıdır.

---

## 10. Output Beklentileri

- Çıktı klasörü: `outputs/products/<project-slug>/latest/`
- Tüm required belgeler doğrulanmış ve eksiksiz biçimde teslim edilir.

---

## 11. Büyüme ve Geçiş Yolu (Upgrade Path)

1. **Foundation / Prototype → Implementation Ready:** Dalga planları, veri modeli ayrıntıları ve API sözleşmeleri tamamlanır.
2. **Implementation Ready → Production Ready:** Proje canlıya alınmadan önce `DEPLOYMENT.md` ve `OPERATIONS.md` belgeleri eklenerek operasyonel olgunluğa ulaştırılır.

---

## 12. Tamamlanma Kriterleri

Bu paket çalışması tamamlandığında aşağıdaki kriterlerin karşılandığı doğrulanmalıdır:

1. **Profile Uyumlu Doküman Seçimi:** Seçilen delivery profile ile `engine/DOCUMENT_CATALOG.md` kurallarının birebir uyumlu olması (ör. `Foundation` seviyesinde `DATA`/`API`/`WAVE-MAP` zorlaması olmaması).
2. **Document Catalog Uyumluğu:** Kullanılan tüm doküman ID'lerinin `engine/DOCUMENT_CATALOG.md` içinde tanımlı olması.
3. **Rol ve Veri Modeli Bütünlüğü:** `PRODUCT_RULES.md` yetki matrisinin `API_CONTRACTS.md` ve `DATA_MODEL.md` ile doğrulanmış olması.
4. **Çıktı Kalitesi:** Tüm belgelerin `outputs/products/<project-slug>/latest/` klasöründe eksiksiz ve temiz şekilde teslim edilebilir durumda olması.
