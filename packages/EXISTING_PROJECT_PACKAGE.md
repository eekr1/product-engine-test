# EXISTING_PROJECT_PACKAGE

## 1. Package Kimliği

```yaml
package_id: existing-project
package_name: Existing Project Package
package_type: base
version: 1.1.0
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
- Kullanıcı açıkça yeniden tasarım (redesign) veya mimari taşıma (migration) istemedikçe **mevcut durum (current state)** ile **hedeflenen durum (desired state)** konularını birbirine karıştırmamak ve sessizce yeniden tasarım yapmamak.
- Eski, geçerliliğini yitirmiş belgeler ile güncel proje gerçeklerini birbirinden ayırmak.
- Mevcut projenin üzerine güvenle yeni özellikler eklenmesini veya geliştirici ajanların projeyi hızla devralmasını sağlamak.

---

## 3. Uygun Olduğu ve Olmadığı Proje Bağlamları

### Uygun Olduğu Bağlamlar
- Devam eden ve koda başlanmış aktif projeler.
- Dokümantasyonu eksik, eskimiş veya hiç olmayan mevcut kod tabanları (legacy codebases).
- Başka bir ekipten veya geliştiriciden devralınan projeler.
- Mevcut sisteme yeni modül veya extension eklenecek çalışmalar.

### Uygun Olmadığı Bağlamlar
- Ortada hiçbir kod, doküman veya mevcut materyal bulunmayan sıfırdan (clean-slate / new) projeler.

---

## 4. Desteklenen Delivery Profile'ları ve Profile Özel Doküman Kapsamı

`engine/DOCUMENT_CATALOG.md` kurallarına göre desteklenen her delivery profile için doküman kapsamı aşağıda tanımlanmıştır:

### 4.1 Foundation Profile
*Amaç: Mevcut sistemin ana bileşenlerini, mimarisini ve bilinen engelleyicilerini yüksek seviyede özetlemek.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `STATUS` (`CURRENT_STATUS.md`), `TECH-CTX` (`TECH_CONTEXT.md`).
- **Koşullu Dokümanlar:** `PRODUCT-RULES` (`PRODUCT_RULES.md`), `DECISIONS` (`DECISIONS.md`).

### 4.2 Prototype Profile
*Amaç: Mevcut sisteme eklenecek ilk deneme özelliğinin dokümante edilmesi.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `STATUS` (`CURRENT_STATUS.md`), `TECH-CTX` (`TECH_CONTEXT.md`).
- **Koşullu Dokümanlar:** `PRODUCT-RULES`, `DESIGN` (`DESIGN_RULES.md` - UI varsa), `DECISIONS`.

### 4.3 Implementation Ready Profile (Varsayılan)
*Amaç: Mevcut kod yapısının, veritabanının, API'lerin ve sıradaki geliştirme görevlerinin tam analiz edildiği seviye.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `STATUS` (`CURRENT_STATUS.md`), `TECH-CTX` (`TECH_CONTEXT.md`).
- **Koşullu Dokümanlar:** `PRODUCT-RULES`, `TASKS` (`NEXT_TASKS.md`), `DECISIONS`, `DATA` (`DATA_MODEL.md`), `API` (`API_CONTRACTS.md`), `AGENT-INST` (`AGENT_INSTRUCTIONS.md`).

### 4.4 Production Ready Profile
*Amaç: Mevcut canlı ortamın, deployment hatlarının ve operasyonel prosedürlerin belgelendiği seviye.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `STATUS` (`CURRENT_STATUS.md`), `TECH-CTX` (`TECH_CONTEXT.md`), `DEPLOY` (`DEPLOYMENT.md`).
- **Koşullu Dokümanlar:** `PRODUCT-RULES`, `TASKS`, `DECISIONS`, `DATA`, `API`, `AGENT-INST`, `OPS` (`OPERATIONS.md`).

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

### Önerilen Intake Bilgileri (SHOULD)
- `technical_stack`: Mevcut kullanılan teknolojiler, diller ve kütüphaneler.
- `known_blockers`: Bilinen mevcut teknik borçlar, hatalar veya engelleyiciler.
- `goals`: Bu dokümantasyon çalışmasıyla hedeflenen yeni aşama.

---

## 6. Doküman Seçimi ve Sahiplik Kuralları

Yalnızca `engine/DOCUMENT_CATALOG.md` içinde tanımlı doküman ID'leri kullanılır.

### Zorunlu Dokümanlar (Implementation Ready Varsayılan Profilinde)

| Document ID | Dosya Adı | Template Konumu | Seçim Gerekçesi |
|---|---|---|---|
| `README-DOC` | `README.md` | `templates/project/README_TEMPLATE.md` | Mevcut projenin başlangıç noktası ve çalıştırma talimatları. |
| `PROJECT-BRAIN` | `PROJECT_BRAIN.md` | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | Mevcut projenin amacını ve mevcut bağlamını özetleyen birincil belge. |
| `STATUS` | `CURRENT_STATUS.md` | `templates/ai/CURRENT_STATUS_TEMPLATE.md` | **Kritik:** Mevcut durum, tamamlanan işler, açık sorunlar ve kısa vadeli öncelikler. |
| `TECH-CTX` | `TECH_CONTEXT.md` | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | Mevcut teknik stack, verili mimari kararlar ve teknik sınırlar. |

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- `EXISTING_PROJECT_PACKAGE` hem temel bir paket hem de diğer paketlere uygulanabilen bir **Extension** olarak çalışabilir.
- Örneğin `EXISTING_PROJECT_PACKAGE` + `SAAS_PACKAGE` birleşimi: Mevcut bir kod tabanı üzerine yeni SaaS modülleri eklenirken hem `CURRENT_STATUS.md` hem de SaaS paketinin zorunlu belgeleri (`DATA_MODEL.md`, `API_CONTRACTS.md`, `WAVE_MAP.md`) tek bir tutarlı dokümantasyon setinde birleştirilir. Aynı doküman asla iki kez üretilmez.

### Reduction (Daraltma) Kuralları
- Mevcut projenin analizinde henüz kodlama aşamasına geçilmeyecekse `TASKS` ve `WAVE_PLAN` ertelenebilir.
- Zorunlu çekirdek belgeler (`README-DOC`, `PROJECT-BRAIN`, `STATUS`, `TECH-CTX`) kesinlikle çıkarılamaz.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Mevcut sistemin ana bileşenleri, mevcut durumu ve bilinen sorunları özet seviyededir.
- **Prototype Level:** Mevcut sisteme eklenecek ilk deneme özelliğinin dokümantasyonu.
- **Implementation Ready Level:** Mevcut kod yapısı, dosya/klasör düzeni, mevcut API'ler, veri şeması ve ajanın yapacağı düzeltme/ekleme görevleri ayrıntılı olarak belgelenmiştir.
- **Production Ready Level:** Mevcut canlı ortam, performans darboğazları, güvenlik açıkları ve operasyonel prosedürler eksiksiz tanımlanmıştır.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **Mevcut Gerçeklik Koruması:** Üretilen belgeler mevcut kod depolarındaki gerçeklerle çelişmemelidir.
2. **Current vs Desired State Ayrımı:** Mevcut durum (`CURRENT_STATUS.md`) ile hedeflenen yeni durum net biçimde birbirinden ayrılmış olmalıdır.
3. **Engelleyici (Blocker) Takibi:** Bilinen açık sorunlar ve teknik borçlar `CURRENT_STATUS.md` içerisinde açıkça listelenmelidir.

---

## 10. Output Beklentileri

- Çıktı klasörü: `outputs/products/<project-slug>/latest/` (Proje türüne göre `demos` veya `products`).
- Mevcut durum ve yeni hedefler çelişkisiz biçimde teslim edilir.

---

## 11. Büyüme ve Geçiş Yolu (Upgrade Path)

1. **Mevcut Durum Analizi (`STATUS`)** → Mevcut kod ve dokümanlar incelenir, `CURRENT_STATUS.md` oluşturulur.
2. **Kapsam Genişletme** -> Yeni özellikler için ilgili hedef paket (ör. `SAAS_PACKAGE` veya `API_SERVICE_PACKAGE`) extension olarak eklenir.
3. **Geliştirme (`NEXT_TASKS`)** -> Ajanlar mevcut projeyi bozmadan yeni görevleri sırayla uygula.

---

## 12. Tamamlanma Kriterleri

Bu paket çalışması tamamlandığında aşağıdaki kriterlerin karşılandığı doğrulanmalıdır:

1. **Eksiksiz Mevcut Durum Analizi:** `STATUS` (`CURRENT_STATUS.md`) belgesinin üretilmiş ve mevcut tamamlanan işler ile bilinen engelleyicileri eksiksiz yansıtması.
2. **Current vs Desired State Ayrımı:** Mevcut sistem gerçekliği ile ileride yapılması planlanan iyileştirmelerin birbirine karıştırılmamış olması.
3. **Profile ve Catalog Uyumu:** Seçilen delivery profile kapsamındaki required/conditional dokümanların `engine/DOCUMENT_CATALOG.md` standartlarıyla uyumlu olması.
4. **Tekil Üretim Güvencesi:** Başka bir paketle birleştiğinde (extension) aynı doküman ID'sinin iki kez üretilmeyeceğinin garanti edilmesi.
5. **Temiz Output:** Üretilen belgelerin `outputs/products/<project-slug>/latest/` klasöründe eksiksiz ve doğrulanmış şekilde teslim edilebilir durumda olması.
