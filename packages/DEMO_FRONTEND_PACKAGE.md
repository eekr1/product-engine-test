# DEMO_FRONTEND_PACKAGE

## 1. Package Kimliği

```yaml
package_id: demo-frontend
package_name: Frontend Demo Package
package_type: base
version: 1.0.0
status: active
default_delivery_profile: Prototype
compatible_project_types:
  - web-app
  - landing-page
  - prototype
  - mobile-app
compatible_extensions:
  - existing-project
  - api-service
incompatible_packages: []
```

---

## 2. Amaç

`DEMO_FRONTEND_PACKAGE`, kullanıcı arayüzü (UI) ve kullanıcı deneyimi (UX) odaklı satış demoları, sunum prototipleri, konsept kanıtlama (PoC) ve hızlı frontend projeleri için dokümantasyon kapsamını tanımlar.

Ana hedefleri:
- Görsel ve işlevsel olarak çalışan, sunulabilir bir frontend deneyimi planlamak.
- Ajanın hızlıca ekranları, kullanıcı akışlarını ve arayüz bileşenlerini kurmasını sağlamak.
- Projeyi otomatik olarak "atıl / kullan-at (throwaway)" kabul etmemek; gelecekte gerçek bir ürüne dönüşmesini engelleyecek kalitesiz veya çıkmaz mimari kararlar vermemek.
- Gerçekte kapsamda olmayan arka uç (backend), veritabanı, yetkilendirme (auth) veya production operasyonları için gereksiz dokümantasyon bürokrasisi üretmemek.

---

## 3. Uygun Olduğu ve Olmadığı Proje Bağlamları

### Uygun Olduğu Bağlamlar
- Görsel olarak çalışan web/mobil arayüz demoları.
- Müşteri veya yatırımcı sunumu için hazırlanan etkileşimli prototipler.
- Tasarım sisteminin veya arayüz akışlarının doğrulanacağı frontend projeleri.
- Mock veriler veya yerel durum (local state) ile çalışan tek sayfa uygulamaları (SPA).

### Uygun Olmadığı Bağlamlar
- Ağırlıklı olarak veri tabanı mimarisi ve API geliştirmesi içeren projeler (Bkz: `API_SERVICE_PACKAGE.md`).
- Kompleks yetkilendirme, ödeme entegrasyonu ve iş mantığı içeren tam ölçekli SaaS ürünleri (Bkz: `SAAS_PACKAGE.md`).
- Altyapı, CI/CD veya DevOps odaklı projeler.

---

## 4. Desteklenen Delivery Profile'ları

1. **Prototype (Varsayılan):** Hızlı sunum ve arayüz doğrulaması için optimum olgunluk seviyesi. Minimum doküman yüküyle maksimum görsel netlik sağlar.
2. **Foundation:** Yalnızca fikir ve temel ekran konseptlerinin tanımlandığı erken aşama seviyesi.
3. **Implementation Ready:** Frontend kodlamasına doğrudan başlayacak ajan için tüm ekranların, bileşenlerin ve mock veri yapılarına ait kuralların tamımlandığı seviye.

---

## 5. Intake Gereksinimleri

### Zorunlu Intake Bilgileri (MUST)
- `project_name`: Proje adı.
- `project_purpose`: Demox veya prototipin temel amacı.
- `project_type`: `web-app`, `landing-page` veya `prototype`.
- `delivery_profile`: `Prototype` (varsayılan) veya `Implementation Ready`.
- `primary_language`: Çıktı dili.

### Önerilen Intake Bilgileri (SHOULD)
- `target_users`: Demoyu inceleyecek hedef kitle veya müşteriler.
- `core_flows`: Gösterilecek 3-5 kritik arayüz akışı.
- `design_preferences`: Görsel tema, renkler, tipografi veya UI kütüphanesi tercihleri.

### Koşullu / İsteğe Bağlı Bilgiler (MAY)
- `existing_resources`: Varsa mevcut Figma tasarımı, taslaklar veya frontend kodu.

---

## 6. Doküman Seçimi

Yalnızca `engine/DOCUMENT_CATALOG.md` içinde tanımlı doküman ID'leri kullanılır.

### Zorunlu Dokümanlar (Required)

| Document ID | Dosya Adı | Template Konumu | Seçim Gerekçesi |
|---|---|---|---|
| `README-DOC` | `README.md` | `templates/project/README_TEMPLATE.md` | Projenin genel tanıtımı ve çalıştırma yönlendirmesi. |
| `PROJECT-BRAIN` | `PROJECT_BRAIN.md` | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | Projenin amacını ve arayüz kapsamını özetleyen birincil bağlam belgesi. |
| `PRODUCT-RULES` | `PRODUCT_RULES.md` | `templates/ai/PRODUCT_RULES_TEMPLATE.md` | Ekran davranışları, sayfa kuralları ve durum (state) kısıtlamaları. |
| `DESIGN` | `DESIGN_RULES.md` | `templates/design/DESIGN_RULES_TEMPLATE.md` | Görsel dil, tema, renk paleti, tipografi ve bileşen kuralları. |

### Koşullu Dokümanlar (Conditional)

| Document ID | Dosya Adı | Koşul | Gerekçe |
|---|---|---|---|
| `STATUS` | `CURRENT_STATUS.md` | `project_state == existing` ise | Mevcut prototipin veya kodun durumunu kaydetmek için. |
| `AGENT-INST` | `AGENT_INSTRUCTIONS.md` | Ajan için özel UI/kodlama kuralları gerekiyorsa | Kodlama standartlarını tanımlamak için. |
| `PROJ-PLAN` | `PROJECT_PLAN.md` | Projenin teslim tarihleri/aşamaları açıkça istendiyse | Proje teslim aşamalarını göstermek için. |
| `TASKS` | `NEXT_TASKS.md` | `delivery_profile == Implementation Ready` ise | Ajanın sırayla yapacağı frontend görevlerini listelemek için. |
| `DECISIONS` | `DECISIONS.md` | Kritik mimari/UI kararları alındıysa | Karar geçmişini korumak için. |

### Hariç Tutulan Dokümanlar (Excluded by Default)
Aksi yönde bir extension eklenmedikçe aşağıdaki belgeler üretilmez:
- `DATA` (`DATA_MODEL.md`)
- `API` (`API_CONTRACTS.md`)
- `DEPLOY` (`DEPLOYMENT.md`)
- `OPS` (`OPERATIONS.md`)
- `TEST` (`TEST_STRATEGY.md`)
- `PROD-STRAT` (`PRODUCT_STRATEGY.md`)

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- **Gerçek Backend Entegrasyonu:** Projeye mock veriler yerine gerçek API ekleneceği zaman `API_SERVICE_PACKAGE` kuralları uygulanır ve `API` (`API_CONTRACTS.md`) belgesi eklenir.
- **Mevcut Projeden Devam:** Projede önceden yazılmış kodlar varsa `EXISTING_PROJECT_PACKAGE` ilkeleri uygulanır ve `STATUS` (`CURRENT_STATUS.md`) zorunlu olur.

### Reduction (Daraltma) Kuralları
- Tek sayfadan oluşan basit bir demo/landing page için `DESIGN` içeriği `PRODUCT_RULES` altında özetlenebilir ve ayrı `DESIGN_RULES.md` üretimi pas geçilebilir (assumption olarak kaydedilmek kaydıyla).
- Zorunlu belgeler (`README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`) asla çıkarılamaz.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Ekran listesi, amaç ve temel görsel tercihler özet düzeydedir.
- **Prototype Level:** Ekran akışları, mock veri yapıları, bileşen hiyerarşisi ve stil kuralları tanımlıdır.
- **Implementation Ready Level:** Her ekranın yerleşimi, state yönetimi (loading, empty, error, success), event kontrolleri ve UI bileşen prop'ları ajanın doğrudan kod yazabileceği seviyede ayrıntılıdır.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **Sahte Backend İddiası Yokluğu:** Belgeler, kapsam dışı backend/database işlevlerini sanki gerçekten varmış gibi sunmamalı; verilerin mock/local state olduğunu netleştirmelidir.
2. **Arayüz Tutarlılığı:** `DESIGN_RULES.md` içindeki stil kararları ile `PRODUCT_RULES.md` içindeki ekran kuralları birbiriyle çelişmemelidir.
3. **Geliştirilebilirlik:** Tasarım kararları (CSS/Tailwind/UI kütüphanesi yapısı) gelecekte gerçek backend bağlanmasını engellemeyecek modülerlikte tanımlanmalıdır.

---

## 10. Output Beklentileri

- Çıktı klasörü: `outputs/demos/<project-slug>/latest/`
- Teslim edilen klasörde yalnız seçilmiş ve doğrulanmış belgeler yer alır.
- Placeholder (`[TBD]`, `[BURAYA YAZ]`) kesinlikle bulunmaz.

---

## 11. Büyüme ve Geçiş Yolu (Upgrade Path)

Bu paket ile başlayan bir proje şu adımlarla tam ürüne dönüştürülebilir:
1. `Prototype` → `Implementation Ready` seviyesine yükseltilir.
2. `API_SERVICE_PACKAGE` veya `SAAS_PACKAGE` extension olarak eklenir.
3. Eksik `DATA`, `API` ve `DEPLOY` belgeleri üretilerek `outputs/products/` klasörüne aktarılır.
4. Mevcut `PROJECT_BRAIN` ve `PRODUCT_RULES` belgeleri güncellenerek geçmiş korunan bir geçiş sağlanır.
