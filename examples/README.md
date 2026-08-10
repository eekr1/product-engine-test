# Product Engine — Examples Katmanı Kullanım ve Rehber Belgeleri (`examples/`)

## 1. Amaç ve Kapsam

`examples/` klasörü, Product Engine'in kontrollü eğitim, gösterim (demonstration) ve test-fixture katmanıdır.

Bu katmanın temel amacı:
- **Geçerli Girdi Gösterimi:** Onaylanmış (Approved) bir proje girdisinin ve taslak (Pending) bir proje girdisinin nasıl göründüğünü somutlaştırmak.
- **Çalıştırma Yaşam Döngüsü Gösterimi:** Bir Product Engine çalışmasının (`run`) yaşam döngüsündeki başarı (`Completed`) ve engel (`Blocked`) durumlarında hangi kayıtları ürettiğini göstermek.
- **Temiz Çıktı Gösterimi:** Tüm doğrulama ve temizlik adımlarından geçmiş nihai çıktı paketinin (`outputs`) kalitesini ve düzenini sergilemek.
- **Test Fixture Desteği:** Manuel doğrulama, regresyon karşılaştırması ve ajan oryantasyonu için kontrollü sentetik veriler sağlamak.

---

## 2. Otorite Sınırı ve Bağlayıcı Olmama İlkesi (Non-Authoritative Contract)

`examples/` katmanındaki hiçbir dosya bağlayıcı bir kural veya yetkili sözleşme **değildir**.

```text
engine/
→ Ne yapılacağını ve kuralları tanımlar (Authoritative Rules)

templates/
→ Belgelerin nasıl üretileceğini tanımlar (Authoritative Structure)

inputs/
→ Gerçek projelere ait onaylanmış proje gerçeği (Real Project Truth)

runs/
→ Gerçek çalıştırmalara ait operasyonel izler ve yürütme kanıtları (Real Execution Evidence)

outputs/
→ Gerçek çalıştırmalardan doğrulanan nihai teslimat paketleri (Real Final Deliverables)

examples/
→ Kontrollü sentetik gösterim ve test senaryoları (Demonstration & Test Fixtures ONLY)
```

### Otorite Çatışması Kuralı
Bir `examples/` belgesi ile `engine/`, `templates/` veya `packages/` sözleşmeleri arasında çelişki olması durumunda:
1. `engine/` ve `templates/` belgeleri **tam yetkilidir (authoritative)**.
2. `examples/` altındaki ilgili dosya **stale (güncelliğini yitirmiş)** veya **invalid** kabul edilir ve güncellenmesi gerekir.
3. Hiçbir ajan veya operatör *"Example dosyasında böyle yazıyordu"* diyerek motor kurallarını veya şablon standartlarını ihlal edemez.

---

## 3. Kanonik Klasör Yapısı (Canonical V0 Structure)

Product Engine V0 mimarisinde `examples/` klasörü strictly yalnızca 1 rehber dosya ve 3 kanonik alt klasörden oluşur:

```text
examples/
├── README.md               (Bu dosya — Usage and Governance Guide)
├── inputs/                 (Örnek proje girdileri)
├── runs/                   (Örnek çalıştırma yaşam döngüsü kayıtları)
└── outputs/                (Örnek temiz nihai çıktı teslimatları)
```

### Yasaklı Yapılar
V0 aşamasında `examples/` altında top-level seviyede yeni klasörler (`scenarios/`, `fixtures/`, `invalid/`, `archive/`, `history/` vb.) **oluşturulamaz**.
Tüm sentetik fixture seti bu 3 kanonik dizin altında `scenario_id` ile dikey olarak hizalanır.

---

## 4. Scenario ID ve Çapraz İlişkilendirme Standardı (Scenario Cross-Linking)

İlişkili input, run ve output materyalleri ortak bir `scenario_id` üzerinden birbirine bağlanır.

### Kanonik Naming Formatı
```text
<project-type>-<descriptor>-<sequence>
```

### V0 Standart Fixture Seti
1. **`web-app-minimal-001`**: Minimal Web Uygulaması Positive Flow (Approved Input ➔ Completed Run ➔ Clean Output)
2. **`web-app-pending-001`**: Eksik Bilgili Web Uygulaması Pending Gate (Pending Input — Run başlatılamaz)
3. **`web-app-blocked-001`**: Çelişkili Gereksinimli Web Uygulaması Blocked Flow (Approved Input Snapshot ➔ Blocked Run — Output yayınlanamaz)

---

## 5. Metadata Standardı ve Sözlük (Vocabulary Rules)

Her senaryo klasöründe yer alan `SCENARIO.md` belgesi ve ilgili fixture dosyaları aşağıdaki kanonik metadata alanlarını ve değerlerini taşır.

### Metadata Bloğu Standardı
```yaml
scenario_id: web-app-minimal-001
title: Minimal Web Application Prototype
example_type: positive # positive | negative | edge-case | minimal | comprehensive
project_type: web-app # web-app | api-service | mobile-app | internal-tool | landing-page | content-platform | integration | infrastructure | prototype | other
package_id: demo-frontend # demo-frontend | corporate-website | saas | existing-project | api-service
delivery_profile: Prototype # Foundation | Prototype | Implementation Ready | Production Ready
engine_version: 0.1.0 # Root README.md tarafından belirlenen aktif motor sürümü
status: active # active | deprecated | invalid
created_at: 2026-01-01T00:00:00Z
updated_at: 2026-01-01T00:00:00Z
source: synthetic
anonymized: true
```

### Terimler ve Kurallar
1. **`example_type`**: Senaryonun amacını belirler (`positive`, `negative`, `edge-case`, `minimal`, `comprehensive`). Bu değer run veya input status'ü değildir.
2. **`project_type`**: Yalnızca `engine/PROJECT_INTAKE.md` içinde tanımlı 10 kanonik değerden biri olabilir. (`saas` veya `corporate-website` bir project_type değildir!).
3. **`package_id`**: Yalnızca 5 kanonik paket ID'sinden biri olabilir (`demo-frontend`, `corporate-website`, `saas`, `existing-project`, `api-service`).
4. **`delivery_profile`**: Yalnızca 4 kanonik değerden biri olabilir (casing kesinlikle korunur: `Foundation`, `Prototype`, `Implementation Ready`, `Production Ready`).
5. **`engine_version`**: Root `README.md` belgesindeki güncel aktif sürüm otoritesinden okunur (örn: `0.1.0`). Sahte motor sürümü uydurulamaz.
6. **`input_version`**: `inputs/` katmanı standartlarına uygun olarak tam sayı dizesi olarak yazılır (`"1"`, `"2"`). `v1.0` gibi semver formatı kullanılmaz.
7. **`output_version`**: `outputs/` katmanı standartlarına uygun olarak semver etiketi ile yazılır (`v0.1`, `v1.0`).

---

## 6. Controlled Example Türleri (Example Types)

Examples katmanı 5 temel kontrollü örnek türünü destekler:

- **Positive Example:** Tüm kurallara uygun, beklenen kaliteyi ve doğru çıktıyı gösteren örnektir.
- **Negative Example:** Bilinçli olarak hatalı veya eksik hazırlanmış örnektir. İhlal edilen kural ve beklenen engelleme davranışı `SCENARIO.md` içinde açıklanır.
- **Edge Case Example:** Sıradan olmayan fakat motor kurallarınca geçerli sayılan veya engellenen durumlardır (ör. kritik çelişki nedeniyle `Blocked` olan run).
- **Minimal Example:** Küçük ölçekli projelerde gereksiz bürokrasi üretmeden minimum gerekli doküman setini gösteren örnektir.
- **Comprehensive Example:** Karmaşık projelerde geniş doküman kapsamının nasıl yönetildiğini gösteren örnektir.

---

## 7. Sentetik Veri ve Güvenlik İlkeleri (Synthetic-First & Privacy Policy)

1. **Sentetik Öncelikli Yaklaşım:** Tüm örnek senaryolar tamamen kurgusal/sentetik projeler üzerinden hazırlanır.
2. **Gerçek Proje / Kişi Verisi Sızıntı Yasağı:** Örneklerde gerçek şirket isimleri, gerçek şahıs adları, e-postalar, telefonlar, ticari teklif tutarları veya özel repository yolları kullanılamaz.
3. **Secret ve Credential Yasağı:** API anahtarları, şifreler, auth token'ları veya private key'ler yazılamaz. Yalnızca güvenli yer tutucular (`EXAMPLE_API_KEY`) kullanılabilir.
4. **Yerel Yol Yasağı (Machine-Local Path Ban):** `file:///`, `C:\Users\...`, `/home/...` gibi makineye özel yerel dosya yolları kullanılamaz. Tüm referanslar repo-relative olmalıdır.
5. **Private Chain-of-Thought Yasağı:** Örnek loglarda veya senaryo açıklamalarında LLM'lerin gizli düşünce süreçleri saklanamaz. Yalnızca denetlenebilir durumlar, kararlar ve gerekçeler sunulur.
6. **Ajan Tarafsızlığı (Model Independence):** `Gemini`, `Claude`, `GPT` gibi belirli LLM model adları hardcode edilemez. Generic roller (`execution agent`, `review agent`) kullanılır.

---

## 8. Deprecated ve Inactive Example Yönetimi

Motor sözleşmeleri veya şablon yapıları değiştiğinde uyumsuz hale gelen örnekler:
- Doğrudan silinmez.
- `SCENARIO.md` belgesindeki status `status: deprecated` veya `status: invalid` olarak güncellenir.
- Neden deprecated olduğu ve güncel referans senaryo `SCENARIO.md` içinde belirtilir.
- Deprecated örnekler aktif eğitim ve doğrulama süreçlerinde referans olarak kullanılamaz.

---

## 9. Yeni Example Ekleme Kriterleri

Yeni bir example seti yalnızca şu koşullarda eklenebilir:
1. Mevcut senaryoların kapsamadığı yeni bir package veya delivery profile davranışını gösteriyorsa,
2. Belirgin bir edge-case veya regression test ihtiyacını karşılıyorsa,
3. Yeni ajanların eğitimi ve oryantasyonu için somut bir eksikliği gideriyorsa.

Yalnızca "örnek sayısı artsın" amacıyla mükerrer senaryo eklenmesi yasaktır.
