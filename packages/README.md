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
- **Package template içeriği deposu değildir:** Dokümanların iç yapısı, başlık detayları ve şablon metinleri `templates/` klasörünün sorumluluğundadır. Package şablon metni barındırmaz; ilgili template grubuna referans verir.
- **Package çıktı klasörü değildir:** Gerçek proje belgelerinin üretildiği ve saklandığı yer `outputs/` klasörüdür.
- **Package tek bir AI modeline özel talimatlar içermez:** Tüm package sözleşmeleri model bağımsızdır.

---

## 3. Temel Sorumluluk Haritası

```text
engine/PACKAGE_RULES.md
  ↳ Hangi package'ın ve hangi delivery profile'ın seçileceğini belirler.

packages/
  ↳ Seçilen package'ın içereceği doküman grubunu ve kapsam derinliğini tanımlar.

engine/DOCUMENT_CATALOG.md
  ↳ Doküman ID'lerinin (ör. PROJECT-BRAIN, TECH-CTX, API) tek yetkili kataloğudur.

templates/
  ↳ Dokümanların fiziksel şablon yapısını ve üretim rehberini barındırır.

engine/INFORMATION_MAP.md
  ↳ Bilginin hangi dokümana yazılacağını ve sahiplik sınırlarını belirler.

outputs/
  ↳ Doğrulanmış ve teslim edilebilir nihai proje belgelerini tutar.
```

---

## 4. `packages/` Klasöründeki Paketler

Klasör içerisinde 5 ana paket tanımı bulunmaktadır:

| Paket Dosyası | Sorumluluk ve Kapsam |
|---|---|
| [`DEMO_FRONTEND_PACKAGE.md`](./DEMO_FRONTEND_PACKAGE.md) | Frontend ağırlıklı, görsel olarak çalışan ve sunulabilir demolar/prototipler için dokümantasyon kapsamı. Atıl (throwaway) değildir; gelecekte gerçek ürüne dönüşebilir. |
| [`CORPORATE_WEBSITE_PACKAGE.md`](./CORPORATE_WEBSITE_PACKAGE.md) | Kurumsal web siteleri, tanıtım, hizmet/ürün kataloğu, içerik ve entegre iletişim formları/panelleri için dokümantasyon kapsamı. Gereksiz SaaS bürokrasisi dayatmaz. |
| [`SAAS_PACKAGE.md`](./SAAS_PACKAGE.md) | Kullanıcı hesapları, veri modeli, backend, API, yetkilendirme ve operasyon içeren SaaS yazılımları için dokümantasyon kapsamı. (Not: `saas` bir paket adıdır, `project_type` değildir). |
| [`EXISTING_PROJECT_PACKAGE.md`](./EXISTING_PROJECT_PACKAGE.md) | Mevcut kod veya dokümantasyonu olan projelerde mevcut durumu (`CURRENT_STATUS.md`) anlayıp güvenle belgelemek için kullanılır. Sıfırdan tasarım yapmaz. |
| [`API_SERVICE_PACKAGE.md`](./API_SERVICE_PACKAGE.md) | Arka uç servisleri, API'ler, mikroservisler ve entegrasyon projeleri için dokümantasyon kapsamı. Gereksiz frontend/tasarım belgeleri dayatmaz. |

---

## 5. Base Package + Extension Mantığı

Bir projede dokümantasyon kapsamı tek bir statik paketle sınırlı kalmak zorunda değildir.

- **Base Package (Temel Paket):** Projenin birincil amacını temsil eder (ör. `SAAS_PACKAGE` veya `CORPORATE_WEBSITE_PACKAGE`).
- **Extension Package (Eklenti Paketi / Kapsamı):** Temel pakete ek işlevsel alanlar dahil olduğunda devreye girer (ör. Kurumsal siteye API entegrasyonu veya SaaS projesine mevcut projeden başlanması).

### Birleşim (Merge) ve Çakışma Önleme Kuralları:

1. **Tekil Üretim (No Duplication):** Aynı doküman (Document ID) asla iki kez üretilmez. Örneğin `EXISTING_PROJECT_PACKAGE` ile `SAAS_PACKAGE` birleştirildiğinde `TECH_CONTEXT.md` veya `PROJECT_BRAIN.md` tek bir tutarlı dosya olarak oluşturulur.
2. **Katalog Otoritesi:** Eklenti paketleri veya birleşimler `engine/DOCUMENT_CATALOG.md` kimlikleri dışında yeni doküman tanımlayamaz.
3. **En Yüksek Olgunluk:** İki paket farklı derinlik gerektiriyorsa, hedef projenin seçilen `delivery_profile` seviyesindeki en kapsayıcı derinlik esas alınır.
4. **Sahiplik Sınırları:** Eklenti uygulaması `engine/INFORMATION_MAP.md` bilgi sahipliği kurallarını ihlal edemez.

---

## 6. Delivery Profile ile İletişim

Delivery Profile, projenin hangi olgunluk seviyesinde belgeleneceğini gösterir ve paket türünden bağımsızdır:

- **Foundation:** Temel bağlam, ürün amacı ve kritik kararlar. (Catalog gereği `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX` gibi çekirdek belgeleri kapsar; `DATA`, `API`, `WAVE-MAP` vb. belgeler bu seviyede henüz zorunlu kılınmaz).
- **Prototype:** Görsel/işlevsel ilk deneyim için gerekli minimum derinlik. (`DESIGN` yetkili; `DATA`, `API`, `WAVE-MAP` zorunlu kılınmaz).
- **Implementation Ready:** Bir geliştirme ajanının doğrudan kod yazmaya başlayabileceği ayrıntılı paket (`DATA`, `API`, `WAVE-MAP`, `WAVE-PLAN`, `TASKS` yetkili).
- **Production Ready:** Dağıtım (`DEPLOY`), operasyon (`OPS`), güvenlik ve sürdürülebilirlik kapsamı tamamlanmış paket.

---

## 7. Önerilen Okuma ve Uygulama Sırası

Product Engine çalıştırılırken paket sisteminin doğru anlaşılması için şu sıra izlenmelidir:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `engine/PROJECT_INTAKE.md`
3. `engine/DOCUMENT_CATALOG.md`
4. `engine/PACKAGE_RULES.md`
5. `packages/README.md` (Bu dosya)
6. İlgili `packages/<PACKAGE_NAME>.md` dosyası
7. İlgili `templates/` dosyaları

---

## 8. Paket Paket Özet Tablosu (Varsayılan Olgunluk Seviyesinde)

| Package ID | Varsayılan Delivery Profile | Varsayılan Profile Özel Zorunlu Dokümanlar | Koşullu / Profile Özgü Dokümanlar |
|---|---|---|---|
| `demo-frontend` | Prototype | `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `DESIGN` | `STATUS`, `AGENT-INST`, `PROJ-PLAN`, `TASKS`, `DECISIONS` |
| `corporate-website` | Implementation Ready | `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `DESIGN` | `STATUS`, `AGENT-INST`, `PROJ-PLAN`, `DATA`, `API`, `DEPLOY`, `TEST` |
| `saas` | Implementation Ready | `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `DATA`, `API`, `WAVE-MAP`, `WAVE-PLAN` | `STATUS`, `PROD-STRAT`, `DESIGN`, `PROJ-PLAN`, `DEPLOY`, `OPS`, `TEST`, `AGENT-INST` |
| `existing-project` | Implementation Ready | `README-DOC`, `PROJECT-BRAIN`, `STATUS`, `TECH-CTX` | `PRODUCT-RULES`, `TASKS`, `DECISIONS`, `DATA`, `API`, `AGENT-INST`, `DEPLOY`, `OPS` |
| `api-service` | Implementation Ready | `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `API`, `DATA` | `STATUS`, `PROJ-PLAN`, `WAVE-MAP`, `WAVE-PLAN`, `DEPLOY`, `OPS`, `TEST`, `AGENT-INST` |
