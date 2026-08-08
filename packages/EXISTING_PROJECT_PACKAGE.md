# EXISTING_PROJECT_PACKAGE

## 1. Package Kimliği

```yaml
package_id: existing-project
package_name: Existing Project Package
package_type: base
version: 1.2.0
status: active
default_delivery_profile: Implementation Ready
compatible_project_types:
  - web-app
  - api-service
  - mobile-app
  - internal-tool
  - landing-page
  - content-platform
  - integration
  - infrastructure
  - prototype
  - other
compatible_extensions:
  - saas
  - api-service
  - corporate-website
  - demo-frontend
incompatible_packages: []
```

---

## 2. Amaç

`EXISTING_PROJECT_PACKAGE`, halihazırda mevcut bir kod tabanına (codebase), yürürlükte olan bir projeye veya geçmiş dokümantasyona sahip sistemler için dokümantasyon kapsamını tanımlar.

Ana hedefleri:
- Mevcut proje gerçekliğini (Current State) anlamak, analiz etmek ve güvenli biçimde dokümante etmek.
- Mevcut kodları, mimariyi, tamamlanmış özellikleri, yarım kalan işleri ve açık engelleyicileri (blockers) tespit etmek.
- Kullanıcı açıkça yeniden tasarım (redesign) veya mimari taşıma (migration) istemedikçe **mevcut durum (current state)** ile **hedeflenin durum (desired state)** konularını birbirine karıştırmamak ve sessizce yeniden tasarım yapmamak.
- Eski, geçerliliğini yitirmiş belgeler ile güncel proje gerçeklerini birbirinden ayırmak.
- Mevcut projenin üzerine güvenle yeni özellikler eklenmesini veya geliştirici ajanların projeyi hızla devralmasını sağlamak.

---

## 3. Doküman Seçimi Filtreleme İlkesi (Double-Filtering Rule)

`EXISTING_PROJECT_PACKAGE` çok sayıda proje türünü destekler. Bu nedenle tüm proje türlerine aynı teknik veya ürün belgeleri zorla uygulanamaz.

Bir doküman (Document ID) ancak ve ancak aşağıdaki iki koşulu **birlikte** sağlıyorsa Required veya Conditional yapılabilir:

```text
seçilen project_type  ∈ document.Applicable Types
         VE
seçilen delivery_profile ∈ document.Applicable Profiles
```

Bu iki koşuldan biri sağlanmıyorsa doküman ilgili proje türü ve profil kombinasyonunda otomatik olarak elenir (filtered out).

---

## 4. Desteklenen Project Type + Delivery Profile Doküman Matrisi

### 4.1 Tüm Proje Türleri İçin Her Zaman Geçerli Çekirdek Set
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `STATUS` (`CURRENT_STATUS.md` - **Kritik:** Mevcut durum, tamamlanan işler, açık sorunlar).

### 4.2 Proje Türü Bazında Şartlı Çekirdek Dokümanlar (`Implementation Ready` Seviyesinde)

- **`web-app`, `mobile-app`, `api-service` Türlerinde:**
  - *İlave Zorunlu:* `TECH-CTX` (`TECH_CONTEXT.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`).
  - *Koşullu:* `DATA` (`DATA_MODEL.md`), `API` (`API_CONTRACTS.md`), `TASKS` (`NEXT_TASKS.md`), `DECISIONS` (`DECISIONS.md`), `AGENT-INST` (`AGENT_INSTRUCTIONS.md`).
- **`integration` veya `infrastructure` Türlerinde:**
  - *İlave Zorunlu:* `TECH-CTX` (`TECH_CONTEXT.md`).
  - *Koşullu:* `API` (`API_CONTRACTS.md` - `integration` için), `TASKS`, `DECISIONS`, `AGENT-INST`.
  - *Elenenler:* `PRODUCT-RULES`, `DATA`, `DESIGN` (Catalog uyarınca bu türlerde geçerli değildir).
- **`content-platform` Türünde:**
  - *İlave Zorunlu:* `PRODUCT-RULES` (`PRODUCT_RULES.md`).
  - *Elenenler:* `TECH-CTX` (Catalog uyarınca `content-platform` için geçerli değildir).
  - *Koşullu:* `DATA` (`DATA_MODEL.md`), `DESIGN` (`DESIGN_RULES.md`), `TASKS`, `DECISIONS`.
- **`landing-page`, `prototype`, `internal-tool`, `other` Türlerinde:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `STATUS`.
  - *Elenenler:* `TECH-CTX`, `PRODUCT-RULES` (`landing-page`, `prototype`, `internal-tool`, `other` türlerinde catalog uyarınca zorunlu tutulamaz).
  - *Koşullu:* `DESIGN` (`landing-page` için), `TASKS`, `DECISIONS`.

---

## 5. Intake Gereksinimleri

### Zorunlu Intake Bilgileri (MUST)
- `project_name`: Mevcut proje adı.
- `project_purpose`: Projenin varlık amacı.
- `project_type`: `PROJECT_INTAKE.md` içindeki proje türlerinden biri.
- `project_state`: `existing` (zorunlu olarak `existing` olmalıdır).
- `existing_resources`: Mevcut kod deposu bağlantıları, mevcut dokümanlar, sistem mimarisi bilgisi.
- `delivery_profile`: Seçilen olgunluk seviyesi.
- `primary_language`: Çıktı dili.

---

## 6. Sahiplik (Information Ownership) Kuralları

`engine/INFORMATION_MAP.md` uyarınca:
- **`CURRENT_STATUS.md` (`STATUS`)**: Mevcut proje durumu, son tamamlanan işler, açık sorunlar ve bilinen engelleyicilerin tek birincil sahibidir (primary owner).
- **`TECH_CONTEXT.md` (`TECH-CTX`)**: Mevcut kullanılan teknik stack, verili mimari kararlar ve teknik sınırların birincil sahibidir (geçerli türlerde).

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- `EXISTING_PROJECT_PACKAGE` hem temel bir paket hem de diğer paketlere uygulanabilen bir **Extension** olarak çalışır.
- Örneğin `EXISTING_PROJECT_PACKAGE` + `SAAS_PACKAGE` birleşimi: Mevcut bir kod tabanı üzerine yeni SaaS modülleri eklenirken hem `CURRENT_STATUS.md` hem de SaaS paketinin geçerli zorunlu belgeleri tek bir tutarlı dokümantasyon setinde birleştirilir. Aynı doküman asla iki kez üretilmez.

### Reduction (Daraltma) Kuralları
- Çekirdek belgeler (`README-DOC`, `PROJECT-BRAIN`, `STATUS`) hiçbir koşulda çıkarılamaz.
- Proje türüne uygun olmayan belgeler (`landing-page` için `TECH-CTX` gibi) katalog standartları gereği kendiliğinden filtrelenir.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Mevcut sistemin ana bileşenleri, mevcut durumu ve bilinen sorunları özet seviyededir.
- **Prototype Level:** Mevcut sisteme eklenecek ilk deneme özelliğinin dokümantasyonu.
- **Implementation Ready Level:** Mevcut kod yapısı, dosya/klasör düzeni, mevcut API'ler, veri şeması ve ajanın yapacağı düzeltme/ekleme görevleri ayrıntılı olarak belgelenmiştir.
- **Production Ready Level:** Mevcut canlı ortam, performans darboğazları, güvenlik açıkları ve operasyonel prosedürler eksiksiz tanımlanmıştır.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **Double-Filtering Doğrulaması:** `landing-page`, `content-platform` veya `infrastructure` gibi mevcut projelerde catalog dışı `TECH-CTX` veya `PRODUCT-RULES` zorlamasının yapılmadığı doğrulanmalıdır.
2. **Mevcut Gerçeklik Koruması:** Üretilen belgeler mevcut kod depolarındaki gerçeklerle çelişmemelidir.
3. **Current vs Desired State Ayrımı:** Mevcut durum (`CURRENT_STATUS.md`) ile hedeflenen yeni durum net biçimde birbirinden ayrılmış olmalıdır.

---

## 10. Output Beklentileri

- Çıktı klasörü: `outputs/products/<project-slug>/latest/` (Proje türüne göre `demos` veya `products`).
- Mevcut durum ve yeni hedefler çelişkisiz biçimde teslim edilir.

---

## 11. Büyüme ve Geçiş Yolu (Upgrade Path)

1. **Mevcut Durum Analizi (`STATUS`)** → Mevcut kod ve dokümanlar incelenir, `CURRENT_STATUS.md` oluşturulur.
2. **Kapsam Genişletme** -> Yeni özellikler için ilgili hedef paket (ör. `SAAS_PACKAGE` veya `API_SERVICE_PACKAGE`) extension olarak eklenir.
3. **Geliştirme (`NEXT_TASKS`)** -> Ajanlar mevcut projeyi bozmadan yeni görevleri sırayla uygular.

---

## 12. Tamamlanma Kriterleri

Bu paket çalışması tamamlandığında aşağıdaki kriterlerin karşılandığı doğrulanmalıdır:

1. **Type + Profile Applicability Uyumluğu:** Seçilen `project_type` ve `delivery_profile` için doküman filtresinin `engine/DOCUMENT_CATALOG.md` kurallarıyla tam uyumlu çalışması.
2. **`STATUS` Varlığı:** `CURRENT_STATUS.md` belgesinin üretilmiş ve mevcut tamamlanan işler ile engelleyicileri eksiksiz yansıtması.
3. **Current vs Desired State Ayrımı:** Mevcut durum ile hedeflenen durumun birbirine karıştırılmamış olması.
4. **Temiz Output:** Üretilen belgelerin `outputs/products/<project-slug>/latest/` klasöründe eksiksiz ve doğrulanmış şekilde teslim edilebilir durumda olması.
