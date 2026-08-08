# SAAS_PACKAGE

## 1. Package Kimliği

```yaml
package_id: saas
package_name: SaaS Package
package_type: base
version: 1.2.0
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
- Seçilen Delivery Profile ve Project Type kombinasyonuna göre `DOCUMENT_CATALOG.md` sınırlarını aşmamak.

---

## 3. Doküman Seçimi Filtreleme İlkesi (Double-Filtering Rule)

Bu paket içinde bir dokümanın zorunlu (Required) veya koşullu (Conditional) olabilmesi için `engine/DOCUMENT_CATALOG.md` içindeki **hem** `Applicable Types` **hem de** `Applicable Profiles` koşullarını aynı anda sağlaması gerekir:

```text
seçilen project_type  ∈ document.Applicable Types
         VE
seçilen delivery_profile ∈ document.Applicable Profiles
```

Bu iki koşuldan biri sağlanmıyorsa doküman ilgili kombinasyonda otomatik olarak elenir ve Required yapılamaz. Package kuralları `DOCUMENT_CATALOG.md` sınırlarını aşamaz.

---

## 4. Desteklenen Project Type + Delivery Profile Doküman Matrisi

### 4.1 `web-app` veya `mobile-app` Bağlamı

- **Foundation Profile:**
  - *Zorunlu:* `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `TECH-CTX` (`TECH_CONTEXT.md`).
- **Prototype Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`.
  - *Koşullu:* `DESIGN` (`DESIGN_RULES.md`).
- **Implementation Ready Profile (Varsayılan):**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `DATA` (`DATA_MODEL.md`), `API` (`API_CONTRACTS.md`), `WAVE-MAP` (`WAVE_MAP.md`), `WAVE-PLAN` (`WAVE_PLAN.md`).
  - *Koşullu:* `DESIGN`, `PROD-STRAT` (`PRODUCT_STRATEGY.md`), `TEST` (`TEST_STRATEGY.md`), `STATUS` (`CURRENT_STATUS.md`), `PROJ-PLAN` (`PROJECT_PLAN.md`), `AGENT-INST` (`AGENT_INSTRUCTIONS.md`).
- **Production Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `DATA`, `API`, `WAVE-MAP`, `WAVE-PLAN`, `DEPLOY` (`DEPLOYMENT.md`), `OPS` (`OPERATIONS.md` - `web-app` için).

### 4.2 `api-service` Bağlamı

- **Implementation Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `DATA`, `API`, `WAVE-MAP`, `WAVE-PLAN`.
  - *Elenenler:* `DESIGN` ve `PROD-STRAT` (Catalog uyarınca `api-service` proje türü `DESIGN` ve `PROD-STRAT` belgelerinin `Applicable Types` listesinde yer almaz).
  - *Koşullu:* `TEST`, `STATUS`, `PROJ-PLAN`, `AGENT-INST`.

### 4.3 `content-platform` Bağlamı

- **Implementation Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `DATA`, `WAVE-MAP`, `WAVE-PLAN`.
  - *Elenenler:* `TECH-CTX` ve `API` (Catalog uyarınca `content-platform` proje türü `TECH-CTX` ve `API` belgelerinin `Applicable Types` listesinde yer almaz).
  - *Koşullu:* `DESIGN`, `PROD-STRAT`, `STATUS`, `PROJ-PLAN`, `AGENT-INST`.

---

## 5. Intake Gereksinimleri

### Zorunlu Intake Bilgileri (MUST)
- `project_name`: SaaS ürün adı.
- `project_purpose`: Ürünün çözdüğü temel problem ve değer önerisi.
- `project_type`: `web-app`, `api-service`, `mobile-app` veya `content-platform`.
- `delivery_profile`: `Implementation Ready` (varsayılan) veya seçilen olgunluk seviyesi.
- `primary_language`: Çıktı dili.

---

## 6. Sahiplik (Information Ownership) Kuralları

`engine/INFORMATION_MAP.md` uyarınca:
- **`PRODUCT_RULES.md`**: SaaS uygulamasının kullanıcı rollerinin, yetki matrisinin ve iş kurallarının birincil sahibidir.
- **`TECH_CONTEXT.md`**: Sistem mimarisi, teknik stack ve altyapı kararlarının birincil sahibidir.
- **`DATA_MODEL.md`**: Veritabanı varlıkları, ilişkiler ve veri şemalarının birincil sahibidir.
- **`API_CONTRACTS.md`**: API uç noktaları, istek/yanıt şemaları ve auth yöntemlerinin birincil sahibidir.

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- **Yapay Zekâ Entegrasyonu Eklentisi:** LLM veya AI servisleri içeren SaaS ürünlerinde `TECH_CONTEXT` ve `API_CONTRACTS` eklenti parametreleriyle genişletilir.
- **Mevcut SaaS Projesi:** Mevcut bir SaaS projesi devralınıyorsa `EXISTING_PROJECT_PACKAGE` extension olarak eklenir ve `STATUS` (`CURRENT_STATUS.md`) zorunlu yapılır.

### Reduction (Daraltma) Kuralları
- `content-platform` veya `api-service` gibi belirli proje türlerinde catalog uyarınca applicable olmayan belgeler kendiliğinden filtrelenir.
- Seçilen `project_type + delivery_profile` kombinasyonu kapsamındaki zorunlu çekirdek belgeler daraltılamaz ve çıkarılamaz.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Ürün konsepti, temel roller, yüksek seviye mimari ve varlık listesi seviyesindedir.
- **Prototype Level:** MVP akışı, temel veri modeli şeması ve kritik API endpoint'leri tanımlanır.
- **Implementation Ready Level:** Tüm varlıklar (entities), alanlar (fields), ilişkiler (foreign keys), API istek/yanıt şemaları, dalga bazlı görevler ve kabul kriterleri ajanın kod yazacağı derinliktedir.
- **Production Ready Level:** Üretim ortamı, güvenlik, yük dengeleme, log izleme, felaket kurtarma (disaster recovery) ve operasyon kılavuzları tamamlanmıştır.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **Double-Filtering Doğrulaması:** `api-service` bağlamında `DESIGN`/`PROD-STRAT` zorlaması olmaması; `content-platform` bağlamında `TECH-CTX`/`API` zorlaması olmaması.
2. **Rol ve Yetki Tutarlılığı:** `PRODUCT_RULES.md` içindeki kullanıcı rolleri ile `API_CONTRACTS.md` içindeki endpoint yetki gereksinimleri örtüşmelidir.
3. **Veri Modeli ve Akış Uyuşması:** `DATA_MODEL.md` içindeki varlıklar, `core_flows` içerisindeki tüm veri ihtiyaçlarını karşılamalıdır.

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

1. **Type + Profile Applicability Uyumluğu:** Seçilen `project_type` (`web-app`, `api-service`, `mobile-app`, `content-platform`) ve `delivery_profile` kombinasyonu için `engine/DOCUMENT_CATALOG.md` kurallarının tam uygulanmış olması.
2. **Catalog Sınırlarının Korunması:** `api-service` için `DESIGN`/`PROD-STRAT` zorlaması olmaması; `content-platform` için `TECH-CTX`/`API` zorlaması olmaması.
3. **Rol ve Veri Modeli Bütünlüğü:** `PRODUCT_RULES.md` yetki matrisinin `API_CONTRACTS.md` ve `DATA_MODEL.md` ile doğrulanmış olması.
4. **Temiz Output:** Tüm belgelerin `outputs/products/<project-slug>/latest/` klasöründe eksiksiz ve temiz şekilde teslim edilebilir durumda olması.
