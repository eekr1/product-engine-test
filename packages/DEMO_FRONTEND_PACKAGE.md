# DEMO_FRONTEND_PACKAGE

## 1. Package Kimliği

```yaml
package_id: demo-frontend
package_name: Frontend Demo Package
package_type: base
version: 1.1.0
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

## 4. Desteklenen Delivery Profile'ları ve Profile Özel Doküman Kapsamı

`engine/DOCUMENT_CATALOG.md` kurallarına göre her delivery profile için izin verilen ve zorunlu tutulan doküman kapsamı aşağıda tanımlanmıştır:

### 4.1 Foundation Profile
*Amaç: Yüksek seviye fikir ve ekran konseptlerinin tanımlanması.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`).
- **Not:** `DOCUMENT_CATALOG.md` gereği `DESIGN` (`DESIGN_RULES.md`) belgesinin geçerli olduğu profiller `Prototype`, `Implementation Ready` ve `Production Ready`'dir. `Foundation` seviyesinde `DESIGN` üretilmez; görsel tercihler `PROJECT_BRAIN.md` içinde özet bağlam olarak kaydedilir.

### 4.2 Prototype Profile (Varsayılan)
*Amaç: Görsel ve işlevsel ilk deneyimin hızlıca sunuma ve teste hazır hale getirilmesi.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `DESIGN` (`DESIGN_RULES.md`).
- **Koşullu Dokümanlar:** `STATUS` (`CURRENT_STATUS.md` - mevcut projeler için).

### 4.3 Implementation Ready Profile
*Amaç: Frontend geliştirici ajanın doğrudan kodlamaya ve bileşen geliştirmeye başlaması.*
- **Zorunlu Dokümanlar:** `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `DESIGN` (`DESIGN_RULES.md`).
- **Koşullu Dokümanlar:** `STATUS` (`CURRENT_STATUS.md`), `TASKS` (`NEXT_TASKS.md`), `AGENT-INST` (`AGENT_INSTRUCTIONS.md`), `PROJ-PLAN` (`PROJECT_PLAN.md`), `DECISIONS` (`DECISIONS.md`).

---

## 5. Intake Gereksinimleri

### Zorunlu Intake Bilgileri (MUST)
- `project_name`: Proje adı.
- `project_purpose`: Demo veya prototipin temel amacı.
- `project_type`: `web-app`, `landing-page`, `mobile-app` veya `prototype`.
- `delivery_profile`: `Prototype` (varsayılan) veya seçilen diğer desteklenen profil.
- `primary_language`: Çıktı dili.

### Önerilen Intake Bilgileri (SHOULD)
- `target_users`: Demoyu inceleyecek hedef kitle veya müşteriler.
- `core_flows`: Gösterilecek 3-5 kritik arayüz akışı.
- `design_preferences`: Görsel tema, renkler, tipografi veya UI kütüphanesi tercihleri.

---

## 6. Doküman Seçimi ve Sahiplik Kuralları

Yalnızca `engine/DOCUMENT_CATALOG.md` içinde tanımlı doküman ID'leri kullanılır.

### Zorunlu Dokümanlar (Prototype Varsayılan Profilinde)

| Document ID | Dosya Adı | Template Konumu | Seçim Gerekçesi |
|---|---|---|---|
| `README-DOC` | `README.md` | `templates/project/README_TEMPLATE.md` | Projenin genel tanıtımı ve çalıştırma yönlendirmesi. |
| `PROJECT-BRAIN` | `PROJECT_BRAIN.md` | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | Projenin amacını ve arayüz kapsamını özetleyen birincil bağlam belgesi. |
| `PRODUCT-RULES` | `PRODUCT_RULES.md` | `templates/ai/PRODUCT_RULES_TEMPLATE.md` | Ekran davranışları, sayfa kuralları ve durum (state) kısıtlamaları. |
| `DESIGN` | `DESIGN_RULES.md` | `templates/design/DESIGN_RULES_TEMPLATE.md` | Görsel dil, tema, renk paleti, tipografi ve UI bileşen kurallarının tek yetkili sahibi. |

### Sahiplik (Information Ownership) İlkesi
`engine/INFORMATION_MAP.md` uyarınca tasarım ve UX kurallarının birincil sahibi (primary owner) `DESIGN` (`DESIGN_RULES.md`) belgesidir. `PRODUCT_RULES.md` asla tasarım ve bileşen kuralı sahibi olarak tanımlanamaz.

### Hariç Tutulan Dokümanlar (Default Excluded)
Aksi yönde bir extension eklenmedikçe aşağıdaki belgeler bu pakette varsayılan olarak üretilmez:
- `DATA` (`DATA_MODEL.md`)
- `API` (`API_CONTRACTS.md`)
- `DEPLOY` (`DEPLOYMENT.md`)
- `OPS` (`OPERATIONS.md`)
- `TEST` (`TEST_STRATEGY.md`)
- `PROD-STRAT` (`PRODUCT_STRATEGY.md`)

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- **Gerçek Backend Entegrasyonu:** Projeye mock veriler yerine gerçek API ekleneceği zaman `API_SERVICE_PACKAGE` eklentisi uygulanır ve `API` (`API_CONTRACTS.md`) belgesi dahil edilir.
- **Mevcut Projeden Devam:** Projede önceden yazılmış kodlar varsa `EXISTING_PROJECT_PACKAGE` eklenti ilkeleri uygulanır ve `STATUS` (`CURRENT_STATUS.md`) zorunlu hale gelir.

### Reduction (Daraltma) Kuralları
- `Prototype` ve üstü teslim profillerinde `DESIGN` (`DESIGN_RULES.md`) zorunlu bir belgedir ve pas geçilemez/çıkarılamaz. Tasarım kuralları `PRODUCT_RULES.md` içine taşınamaz.
- Yalnızca `Foundation` seviyesinde `DESIGN` belgesi `DOCUMENT_CATALOG.md` kuralları uyarınca üretilmez; tasarım tercihleri `PROJECT_BRAIN.md` içine kısa girdi notu olarak düşülür.
- Zorunlu çekirdek belgeler (`README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`) hiçbir koşulda çıkarılamaz.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Ekran listesi, amaç ve temel görsel tercihler özet düzeydedir.
- **Prototype Level:** Ekran akışları, mock veri yapıları, bileşen hiyerarşisi ve stil kuralları tanımlıdır.
- **Implementation Ready Level:** Her ekranın yerleşimi, state yönetimi (loading, empty, error, success), event kontrolleri ve UI bileşen prop'ları ajanın doğrudan kod yazabileceği seviyede ayrıntılıdır.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **Sahte Backend İddiası Yokluğu:** Belgeler, kapsam dışı backend/database işlevlerini sanki gerçekten varmış gibi sunmamalı; verilerin mock/local state olduğunu netleştirmelidir.
2. **Arayüz ve Tasarım Tutarlılığı:** `DESIGN_RULES.md` içindeki stil kararları ile `PRODUCT_RULES.md` içindeki ekran kuralları birbiriyle tutarlı olmalıdır.
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

---

## 12. Tamamlanma Kriterleri

Bu paket çalışması tamamlandığında aşağıdaki kriterlerin karşılandığı doğrulanmalıdır:

1. **Eksiksiz Doküman Seçimi:** Seçilen delivery profile için (`Prototype` için `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `DESIGN`) tüm zorunlu belgelerin üretilmiş olması.
2. **Document Catalog Uyumluğu:** Kullanılan tüm doküman ID'lerinin `engine/DOCUMENT_CATALOG.md` içinde tanımlı ve ilgili profil/proje türü için geçerli (applicable) olması.
3. **Information Ownership Uyumluğu:** Tasarım kurallarının yalnızca `DESIGN_RULES.md` tarafından sahiplenilmesi, `PRODUCT_RULES.md` veya başka belgelere taşınmamış olması.
4. **Çelişkisiz Kapsam:** Reduction kurallarında `DESIGN` belgesi için çelişkili kaldırma ifadesinin bulunmaması.
5. **Temiz Output:** Çıktının `outputs/demos/<project-slug>/latest/` altında placeholder barındırmayan, doğrulanmış ve teslim edilebilir durumda olması.
