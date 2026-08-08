# Product Engine — Packages Klasörü

## 1. Amaç ve Tanım

`packages/` klasörü, Product Engine'in farklı proje türleri ve teslim hedefleri için kullanılacak dokümantasyon üretim paketlerini (Package) içerir.

Bir **Package** (Dokümantasyon Paketi):
- Belirli bir proje bağlamı için hangi dokümanların üretileceğini,
- Hangi dokümanların zorunlu (Required), hangilerinin koşullu (Conditional) veya isteğe bağlı (Optional) olduğunu,
- Farklı teslim olgunluk düzeylerinde (Delivery Profile) ne kadar dokümantasyon derinliği gerektiğini,
- Dokümanların hangi template'lerle üretileceğini ve hangi çıktı (Output) kategorilerine yerleştirileceğini,
- Hangi paket özel doğrulama (Validation) beklentilerinin uygulanacağını

tanımlayan bağlayıcı bir kapsam sözleşmesidir.

---

## 2. Package Ne Değildir?

Sistem sınırlarını ve sorumluluk ayrımını korumak için:

- **Package bir karar alma motoru değildir:** Hangi projenin hangi package ile eşleşeceğini `engine/PACKAGE_RULES.md` belirler. Package dosyaları seçim mantığını sahiplenmez.
- **Package yeni doküman kimliği kaynağı değildir:** Tanınan tüm doküman ID'lerinin tek authoritative kaynağı `engine/DOCUMENT_CATALOG.md` belgesidir. Package yeni document ID icat edemez.
- **Package catalog kurallarını ezemez:** Bir dokümanın bir paket içinde Required veya Conditional olması, `engine/DOCUMENT_CATALOG.md` içindeki `Applicable Types` ve `Applicable Profiles` sınırlarını aşamaz.
- **Package template içeriği deposu değildir:** Dokümanların iç yapısı, başlık detayları ve şablon metinleri `templates/` klasörünün sorumluluğundadır. Package şablon metni barındırmaz.
- **Package çıktı klasörü değildir:** Gerçek proje belgelerinin üretildiği ve saklandığı yer `outputs/` klasörüdür.

---

## 3. Doküman Seçimi Filtreleme İlkesi ve Deterministik Fallback Algoritması

Her desteklenen `project_type + delivery_profile` kombinasyonunda hangi dokümanların geçerli olduğunu belirlemek için aşağıdaki **Deterministik Doküman Çözümleme Algoritması** uygulanır:

```text
1. Seçilen delivery_profile için paketin tanımındaki aday doküman setini (Candidate Document Set) al.
2. engine/DOCUMENT_CATALOG.md içindeki "Applicable Profiles" filtresini uygula:
   └─ Dokümanın Applicable Profiles listesi seçilen delivery_profile'ı içeriyor mu? (İçermiyorsa elenir).
3. engine/DOCUMENT_CATALOG.md içindeki "Applicable Types" filtresini uygula:
   └─ Dokümanın Applicable Types listesi seçilen project_type'ı içeriyor mu? (İçermiyorsa elenir).
4. İki filtreyi de geçen doküman kümesi, ilgili kombinasyonun geçerli doküman kapsamını (Required/Conditional) oluşturur.
5. Paket dosyasında örnek matriste metin olarak açıkça yazılmamış her kombinasyon bu deterministik kuralla çözülür.
```

Bu kural sayesinde hiçbir ajan bir kombinasyon karşısında kendi kişisel yorumunu yapmak zorunda kalmaz.

---

## 4. Temel Sorumluluk Haritası

```text
engine/PACKAGE_RULES.md
  ↳ Hangi package'ın ve hangi delivery profile'ın seçileceğini belirler.

packages/
  ↳ Seçilen package'ın içereceği doküman grubunu ve kapsam derinliğini tanımlar.

engine/DOCUMENT_CATALOG.md
  ↳ Doküman ID'lerinin ve Applicable Types / Profiles sınırlarının tek yetkili kataloğudur.

templates/
  ↳ Dokümanların fiziksel şablon yapısını ve üretim rehberini barındırır.

engine/INFORMATION_MAP.md
  ↳ Bilginin hangi dokümana yazılacağını ve sahiplik sınırlarını belirler.

outputs/
  ↳ Doğrulanmış ve teslim edilebilir nihai proje belgelerini tutar.
```

---

## 5. `packages/` Klasöründeki Paketler

Klasör içerisinde 5 ana paket tanımı bulunmaktadır:

| Paket Dosyası | Sorumluluk ve Kapsam |
|---|---|
| [`DEMO_FRONTEND_PACKAGE.md`](./DEMO_FRONTEND_PACKAGE.md) | Frontend ağırlıklı, görsel olarak çalışan ve sunulabilir demolar/prototipler için dokümantasyon kapsamı. Atıl (throwaway) değildir; gelecekte gerçek ürüne dönüşebilir. |
| [`CORPORATE_WEBSITE_PACKAGE.md`](./CORPORATE_WEBSITE_PACKAGE.md) | Kurumsal web siteleri, tanıtım, hizmet/ürün kataloğu, içerik ve entegre iletişim formları/panelleri için dokümantasyon kapsamı. Gereksiz SaaS bürokrasisi dayatmaz. |
| [`SAAS_PACKAGE.md`](./SAAS_PACKAGE.md) | Kullanıcı hesapları, veri modeli, backend, API, yetkilendirme ve operasyon içeren SaaS yazılımları için dokümantasyon kapsamı. (Not: `saas` bir paket adıdır, `project_type` değildir). |
| [`EXISTING_PROJECT_PACKAGE.md`](./EXISTING_PROJECT_PACKAGE.md) | Mevcut kod veya dokümantasyonu olan projelerde mevcut durumu (`CURRENT_STATUS.md`) anlayıp güvenle belgelemek için kullanılır. Sıfırdan tasarım yapmaz. |
| [`API_SERVICE_PACKAGE.md`](./API_SERVICE_PACKAGE.md) | Arka uç servisleri, API'ler, mikroservisler ve entegrasyon projeleri için dokümantasyon kapsamı. Gereksiz frontend/tasarım belgeleri dayatmaz. |

---

## 6. Base Package + Extension Mantığı

- **Base Package (Temel Paket):** Projenin birincil amacını temsil eder (ör. `SAAS_PACKAGE` veya `CORPORATE_WEBSITE_PACKAGE`).
- **Extension Package (Eklenti Paketi / Kapsamı):** Temel pakete ek işlevsel alanlar dahil olduğunda devreye girer (ör. Kurumsal siteye API entegrasyonu veya SaaS projesine mevcut projeden başlanması).

### Birleşim (Merge) ve Çakışma Önleme Kuralları:
1. **Tekil Üretim (No Duplication):** Aynı doküman (Document ID) asla iki kez üretilmez.
2. **Katalog Otoritesi:** Eklenti paketleri veya birleşimler `engine/DOCUMENT_CATALOG.md` kimlikleri dışında yeni doküman tanımlayamaz ve catalog'da uygun olmayan dokümanları zorunlu kılamaz.
3. **En Yüksek Olgunluk:** İki paket farklı derinlik gerektiriyorsa, hedef projenin seçilen `delivery_profile` seviyesindeki en kapsayıcı derinlik esas alınır.

---

## 7. Önerilen Okuma ve Uygulama Sırası

1. `PRODUCT_ENGINE_BRAIN.md`
2. `engine/PROJECT_INTAKE.md`
3. `engine/DOCUMENT_CATALOG.md`
4. `engine/PACKAGE_RULES.md`
5. `packages/README.md` (Bu dosya)
6. İlgili `packages/<PACKAGE_NAME>.md` dosyası
7. İlgili `templates/` dosyaları

---

## 8. Paket Özet Tablosu (Varsayılan Profile & Ana Project Type Bağlamında)

| Package ID | Varsayılan Delivery Profile | Uyumlu Project Type Örnekleri | Varsayılan Profile Özel Çekirdek Zorunlu Dokümanlar |
|---|---|---|---|
| `demo-frontend` | Prototype | `web-app`, `landing-page`, `prototype`, `mobile-app` | `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES` (web-app/mobile-app), `DESIGN` (web-app/mobile-app/landing-page) |
| `corporate-website` | Implementation Ready | `landing-page`, `web-app`, `content-platform` | `README-DOC`, `PROJECT-BRAIN`, `DESIGN`, `PRODUCT-RULES` (web-app/content-platform), `TECH-CTX` (web-app) |
| `saas` | Implementation Ready | `web-app`, `api-service`, `mobile-app`, `content-platform` | `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `DATA`, `WAVE-MAP`, `WAVE-PLAN`, `TECH-CTX` (web-app/api-service/mobile-app), `API` (web-app/api-service/mobile-app) |
| `existing-project` | Implementation Ready | Tüm türler | `README-DOC`, `PROJECT-BRAIN`, `STATUS`, `TECH-CTX` (web-app/api-service/mobile-app/integration/infrastructure) |
| `api-service` | Implementation Ready | `api-service`, `integration`, `infrastructure` | `README-DOC`, `PROJECT-BRAIN`, `TECH-CTX`, `API` (api-service/integration), `PRODUCT-RULES` (api-service), `DATA` (api-service) |
