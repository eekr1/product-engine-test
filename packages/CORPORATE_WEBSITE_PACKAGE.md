# CORPORATE_WEBSITE_PACKAGE

## 1. Package Kimliği

```yaml
package_id: corporate-website
package_name: Corporate Website Package
package_type: base
version: 1.2.0
status: active
default_delivery_profile: Implementation Ready
compatible_project_types:
  - landing-page
  - web-app
  - content-platform
compatible_extensions:
  - existing-project
  - api-service
incompatible_packages: []
```

---

## 2. Amaç

`CORPORATE_WEBSITE_PACKAGE`, şirketlerin veya kuruluşların kurumsal kimliklerini yansıtan, ürün ve hizmetlerini tanıtan, iletişim ve potansiyel müşteri (lead) formlarını yöneten kurumsal web siteleri ve tanıtım platformları için dokümantasyon kapsamını tanımlar.

Ana hedefleri:
- Şirket/site amacını, sayfa hiyerarşisini, içerik yapısını ve kullanıcı dönüşüm akışlarını netleştirmek.
- Tasarım dili, marka renkleri, tipografi ve duyarlı (responsive) UI kurallarını tanımlamak.
- Gerektiğinde haber/blog, ürün kataloğu, yönetim paneli (CMS) veya iletişim formu entegrasyonlarını kapsamak.
- Her kurumsal siteyi karmaşık bir SaaS veya devasa bir web uygulaması gibi ele almamak; basit kurumsal siteleri gereksiz API, karmaşık veri modeli ve operasyon bürokrasisine zorlamamak.

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

### 4.1 `web-app` Bağlamı

- **Foundation Profile:**
  - *Zorunlu:* `README-DOC` (`README.md`), `PROJECT-BRAIN` (`PROJECT_BRAIN.md`), `PRODUCT-RULES` (`PRODUCT_RULES.md`), `TECH-CTX` (`TECH_CONTEXT.md`).
- **Prototype Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `DESIGN` (`DESIGN_RULES.md`).
- **Implementation Ready Profile (Varsayılan):**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `DESIGN`.
  - *Koşullu:* `STATUS` (`CURRENT_STATUS.md`), `DATA` (`DATA_MODEL.md` - dinamik katalog/CMS varsa), `API` (`API_CONTRACTS.md` - form API varsa), `PROJ-PLAN`, `TEST`, `AGENT-INST`.
- **Production Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `DESIGN`, `DEPLOY` (`DEPLOYMENT.md`).

### 4.2 `content-platform` Bağlamı

- **Implementation Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `DESIGN`.
  - *Elenenler:* `TECH-CTX` (Catalog uyarınca `content-platform` proje türü `TECH-CTX` belgesinin `Applicable Types` listesinde yer almaz).
  - *Koşullu:* `DATA` (`DATA_MODEL.md`), `WAVE-MAP` (`WAVE_MAP.md`), `WAVE-PLAN` (`WAVE_PLAN.md`), `PROJ-PLAN`, `AGENT-INST`.

### 4.3 `landing-page` Bağlamı

- **Prototype veya Implementation Ready Profile:**
  - *Zorunlu:* `README-DOC`, `PROJECT-BRAIN`, `DESIGN`.
  - *Elenenler:* `PRODUCT-RULES`, `TECH-CTX`, `DATA`, `API`, `DEPLOY`, `OPS` (Catalog uyarınca `landing-page` proje türü bu belgelerin `Applicable Types` listesinde yer almaz).

---

## 5. Intake Gereksinimleri

### Zorunlu Intake Bilgileri (MUST)
- `project_name`: Şirket veya proje adı.
- `project_purpose`: Web sitesinin temel amacı (ör. marka prestiji, lead toplama, ürün tanıtımı).
- `project_type`: `landing-page`, `web-app` veya `content-platform`.
- `delivery_profile`: `Implementation Ready` (varsayılan) veya seçilen seviye.
- `primary_language`: Site ve çıktı dili.

---

## 6. Sahiplik (Information Ownership) Kuralları

`engine/INFORMATION_MAP.md` uyarınca:
- **`DESIGN_RULES.md`**: Görsel dil, marka renkleri, tipografi ve UI bileşen standartlarının tek birincil sahibidir.
- **`PRODUCT_RULES.md`**: Sayfa erişim kuralları, form doğrulama mantığı ve içerik kısıtlamalarının birincil sahibidir.

### Hariç Tutulan Dokümanlar (Default Excluded)
SaaS veya karmaşık yazılım süreçlerine ait olan aşağıdaki belgeler normal bir kurumsal sitede gerekmedikçe üretilmez:
- `OPS` (`OPERATIONS.md`)
- `PROD-STRAT` (`PRODUCT_STRATEGY.md`)

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- **CMS / Yönetim Paneli Eklentisi:** İçeriğin panellerle yönetilmesi istendiğinde (ve `project_type == web-app` ise) `DATA` (`DATA_MODEL.md`) ve `API` (`API_CONTRACTS.md`) belgeleri zorunlu hale getirilir.
- **Mevcut Siteden Redesign:** Mevcut bir web sitesi yenileniyorsa `EXISTING_PROJECT_PACKAGE` devreye girer ve `STATUS` (`CURRENT_STATUS.md`) zorunlu olur.

### Reduction (Daraltma) Kuralları
- `landing-page` projelerinde catalog uyarınca `PRODUCT-RULES` ve `TECH-CTX` kendiliğinden filtrelenir, gereksiz belge dayatılmaz.
- Seçilen `project_type + delivery_profile` kombinasyonu kapsamındaki zorunlu belgeler daraltılamaz.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Site haritası (sitemap), sayfa amaçları ve temel marka renkleri özetlenir.
- **Prototype Level:** Sayfa şablonları, tipografi, menü yapısı ve örnek sayfa içerikleri tanımlanır.
- **Implementation Ready Level:** Tüm sayfaların (Anasayfa, Hakkımızda, Hizmetler, İletişim vb.) detaylı bileşen hiyerarşisi, form alanları ve validation kuralları eksiksiz tanımlanır.
- **Production Ready Level:** SEO meta etiket yapıları, duyarlılık (mobile/desktop responsive) kuralları, performans ve deployment adımları eklenir.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **Double-Filtering Doğrulaması:** `landing-page` için catalog dışı `PRODUCT-RULES` veya `TECH-CTX` zorlamasının yapılmadığı doğrulanmalıdır.
2. **Sayfa ve Gezinti (Navigation) Uyumu:** Sayfa listesi ile menü/navigasyon yapısı birebir uyumlu olmalıdır.
3. **Bürokrasi Kontrolü:** Basit kurumsal sitelere gereksiz veritabanı veya karmaşık sunucu mimarisi belgeleri eklenmemiş olmalıdır.

---

## 10. Output Beklentileri

- Çıktı klasörü: `outputs/products/<project-slug>/latest/` (Eğer Prototype ise `outputs/demos/<project-slug>/latest/`).
- Temiz, placeholder barındırmayan nihai belge seti teslim edilir.

---

## 11. Büyüme ve Geçiş Yolu (Upgrade Path)

Kurumsal web sitesi zamanla şu şekilde büyütülebilir:
1. **Statik Kurumsal Site → Dinamik CMS'li Site:** `DATA` ve `API` belgeleri eklenerek yönetim paneli entegre edilir.
2. **Kurumsal Site → Müşteri Portalı / E-ticaret:** `SAAS_PACKAGE` extension olarak dahil edilerek kullanıcı girişi, sipariş veya hizmet portalı eklenir.

---

## 12. Tamamlanma Kriterleri

Bu paket çalışması tamamlandığında aşağıdaki kriterlerin karşılandığı doğrulanmalıdır:

1. **Type + Profile Applicability Uyumluğu:** Seçilen `project_type` (`web-app`, `content-platform`, `landing-page`) ve `delivery_profile` için `engine/DOCUMENT_CATALOG.md` kurallarının tam uygulanmış olması.
2. **Catalog Sınırlarının Korunması:** `landing-page` bağlamında `PRODUCT-RULES`/`TECH-CTX` zorlaması olmaması; `content-platform` bağlamında `TECH-CTX` zorlaması olmaması.
3. **Information Ownership Uyumluğu:** Tasarım kurallarının `DESIGN_RULES.md` belgesinde kalması.
4. **Temiz Output:** Üretilen belgelerin `outputs/products/<project-slug>/latest/` klasöründe eksiksiz ve placeholder barındırmadan teslim edilebilir durumda olması.
