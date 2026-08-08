# EXISTING_PROJECT_PACKAGE

## 1. Package Kimliği

```yaml
package_id: existing-project
package_name: Existing Project Package
package_type: base
version: 1.0.0
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
- Başka bir ekikten veya geliştiriciden devralınan projeler.
- Mevcut sisteme yeni modül veya extension eklenecek çalışmalar.

### Uygun Olmadığı Bağlamlar
- Ortada hiçbir kod, doküman veya mevcut materyal bulunmayan sıfırdan (clean-slate / new) projeler.

---

## 4. Desteklenen Delivery Profile'ları

1. **Implementation Ready (Varsayılan):** Mevcut kod yapısının, teknik stack'in ve sıradaki geliştirme görevlerinin tam analiz edildiği seviye.
2. **Foundation:** Mevcut sistemin yüksek seviye mimarisini ve durumunu özetleyen başlangıç seviyesi.
3. **Prototype:** Mevcut projede hızlı bir PoC veya deneme geliştirmesi yapılması amaçlanan seviye.
4. **Production Ready:** Mevcut sistemin canlı ortam dağıtımı, mevcut CI/CD süreçleri ve operasyonel risklerinin dokümante edildiği seviye.

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

## 6. Doküman Seçimi

Yalnızca `engine/DOCUMENT_CATALOG.md` içinde tanımlı doküman ID'leri kullanılır.

### Zorunlu Dokümanlar (Required)

| Document ID | Dosya Adı | Template Konumu | Seçim Gerekçesi |
|---|---|---|---|
| `README-DOC` | `README.md` | `templates/project/README_TEMPLATE.md` | Mevcut projenin başlangıç noktası ve çalıştırma talimatları. |
| `PROJECT-BRAIN` | `PROJECT_BRAIN.md` | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | Mevcut projenin amacını ve mevcut bağlamını özetleyen birincil belge. |
| `STATUS` | `CURRENT_STATUS.md` | `templates/ai/CURRENT_STATUS_TEMPLATE.md` | **Kritik:** Mevcut durum, tamamlanan işler, açık sorunlar ve kısa vadeli öncelikler. |
| `TECH-CTX` | `TECH_CONTEXT.md` | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | Mevcut teknik stack, verili mimari kararlar ve teknik sınırlar. |

### Koşullu Dokümanlar (Conditional)

| Document ID | Dosya Adı | Koşul | Gerekçe |
|---|---|---|---|
| `PRODUCT-RULES` | `PRODUCT_RULES.md` | Ürün davranış kuralları belgelenecekse | Mevcut ve yeni ürün kurallarını tanımlamak için. |
| `TASKS` | `NEXT_TASKS.md` | `delivery_profile >= Implementation Ready` ise | Ajanın yapacağı ilk somut görevleri listelemek için. |
| `DECISIONS` | `DECISIONS.md` | Geçmiş ve yeni kararlar kayıt altına alınacaksa | Karar geçmişini korumak için. |
| `DATA` | `DATA_MODEL.md` | Mevcut veritabanı veya şema analizi gerekiyorsa | Veri yapısını belgelemek için. |
| `API` | `API_CONTRACTS.md` | Mevcut veya eklenecek API uç noktaları varsa | API sözleşmelerini tanımlamak için. |
| `AGENT-INST` | `AGENT_INSTRUCTIONS.md` | Mevcut koda uyum sağlayacak ajan kuralları istenirse | Kodlama standartlarını korumak için. |
| `DEPLOY` | `DEPLOYMENT.md` | Mevcut dağıtım/sunucu yapısı belgelenecekse | Dağıtım ortamını tanımlamak için. |
| `OPS` | `OPERATIONS.md` | Mevcut canlı sistem operasyonu varsa | Operasyonel takibi belgelemek için. |

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- `EXISTING_PROJECT_PACKAGE` hem temel bir paket hem de diğer paketlere uygulanabilen bir **Extension** olarak çalışabilir.
- Örneğin `EXISTING_PROJECT_PACKAGE` + `SAAS_PACKAGE` birleşimi: Mevcut bir kod tabanı üzerine yeni SaaS modülleri eklenirken hem `CURRENT_STATUS.md` hem de SaaS paketinin zorunlu belgeleri (`DATA_MODEL.md`, `API_CONTRACTS.md`, `WAVE_MAP.md`) tek bir tutarlı dokümantasyon setinde birleştirilir. Aynı doküman asla iki kez üretilmez.

### Reduction (Daraltma) Kuralları
- Mevcut projenin analizinde henüz kodlama aşamasına geçilmeyecekse `TASKS` ve `WAVE_PLAN` ertelenebilir.
- Zorunlu belgeler (`README-DOC`, `PROJECT-BRAIN`, `STATUS`, `TECH-CTX`) kesinlikle çıkarılamaz.

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
3. **Geliştirme (`NEXT_TASKS`)** -> Ajanlar mevcut projeyi bozmadan yeni görevleri sırayla uygular.
