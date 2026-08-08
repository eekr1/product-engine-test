# CORPORATE_WEBSITE_PACKAGE

## 1. Package Kimliği

```yaml
package_id: corporate-website
package_name: Corporate Website Package
package_type: base
version: 1.0.0
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

## 3. Uygun Olduğu ve Olmadığı Proje Bağlamları

### Uygun Olduğu Bağlamlar
- Kurumsal tanıtım siteleri, holding veya grup şirket siteleri.
- Ürün ve hizmet kataloğu sunan, teklif/iletişim formu içeren siteler.
- Blog, haber, duyuru ve insan kaynakları sayfaları barındıran kurumsal platformlar.
- İsteğe bağlı olarak yönetim paneli (CMS) ile içerik yönetimi yapılan siteler.

### Uygun Olmadığı Bağlamlar
- Yoğun kullanıcı aboneliği, faturalandırma ve karmaşık yetkilendirme içeren SaaS ürünleri (Bkz: `SAAS_PACKAGE.md`).
- Sadece arayüz görsel demosu amaçlanan geçici prototipler (Bkz: `DEMO_FRONTEND_PACKAGE.md`).
- Yalnızca API sunan arka uç servisleri (Bkz: `API_SERVICE_PACKAGE.md`).

---

## 4. Desteklenen Delivery Profile'ları

1. **Implementation Ready (Varsayılan):** Ajanın tasarıma, sayfa şablonlarına ve içerik bileşenlerine doğrudan başlayabileceği tam dokümantasyon seviyesi.
2. **Foundation:** Şirket amacı, temel sayfa listesi ve renk/stil yönelimlerinin belirlendiği başlangıç seviyesi.
3. **Prototype:** Hızlı lansman veya yönetim onayına sunulacak ilk çalışan site sürümü için gerekli kapsam.
4. **Production Ready:** Canlıya alma (hosting, DNS, SSL, CDN), form güvenlik kontrolleri, SEO ve analitik takibinin belgelendiği olgun seviye.

---

## 5. Intake Gereksinimleri

### Zorunlu Intake Bilgileri (MUST)
- `project_name`: Şirket veya proje adı.
- `project_purpose`: Web sitesinin temel amacı (ör. marka prestiji, lead toplama, ürün tanıtımı).
- `project_type`: `landing-page`, `web-app` veya `content-platform`.
- `delivery_profile`: `Implementation Ready` (varsayılan) veya seçilen seviye.
- `primary_language`: Site ve çıktı dili.

### Önerilen Intake Bilgileri (SHOULD)
- `target_users`: Hedef ziyaretçi kitlesi, müşteriler veya iş ortakları.
- `core_flows`: İletişim formu doldurma, ürün/hizmet inceleme, teklif isteme gibi temel akışlar.
- `technical_stack`: Tercih edilen teknolojiler (ör. Next.js, HTML/CSS, CMS altyapısı).
- `design_preferences`: Kurumsal renkler, logo, font ve tasarım stili.

### Koşullu / İsteğe Bağlı Bilgiler (MAY)
- `existing_resources`: Varsa mevcut web sitesi adresi, kurumsal kimlik kılavuzu veya içerik taslakları.

---

## 6. Doküman Seçimi

Yalnızca `engine/DOCUMENT_CATALOG.md` içinde tanımlı doküman ID'leri kullanılır.

### Zorunlu Dokümanlar (Required)

| Document ID | Dosya Adı | Template Konumu | Seçim Gerekçesi |
|---|---|---|---|
| `README-DOC` | `README.md` | `templates/project/README_TEMPLATE.md` | Projenin genel yapısı, sayfa mimarisi ve çalıştırma rehberi. |
| `PROJECT-BRAIN` | `PROJECT_BRAIN.md` | `templates/ai/PROJECT_BRAIN_TEMPLATE.md` | Kurumsal kimlik, site amacı ve genel bağlam belgesi. |
| `PRODUCT-RULES` | `PRODUCT_RULES.md` | `templates/ai/PRODUCT_RULES_TEMPLATE.md` | Sayfa erişim kuralları, form doğrulama kuralları ve içerik kısıtlamaları. |
| `TECH-CTX` | `TECH_CONTEXT.md` | `templates/ai/TECH_CONTEXT_TEMPLATE.md` | Hosting, SSG/SSR tercihleri, form gönderme yöntemi ve teknik stack. |
| `DESIGN` | `DESIGN_RULES.md` | `templates/design/DESIGN_RULES_TEMPLATE.md` | Kurumsal görsel dil, renk paleti, tipografi ve UI bileşen kuralları. |

### Koşullu Dokümanlar (Conditional)

| Document ID | Dosya Adı | Koşul | Gerekçe |
|---|---|---|---|
| `STATUS` | `CURRENT_STATUS.md` | `project_state == existing` ise | Mevcut sitenin yenilenmesi (redesign/migration) durumunda mevcudu belgelemek için. |
| `DATA` | `DATA_MODEL.md` | Sitede dinamik blog, ürün kataloğu veya CMS varsa | Şema ve içerik modellerini tanımlamak için. |
| `API` | `API_CONTRACTS.md` | İletişim formu API'si veya dış servis entegrasyonu varsa | Form uç noktalarını (endpoints) belgelemek için. |
| `DEPLOY` | `DEPLOYMENT.md` | `delivery_profile == Production Ready` ise | Domain, SSL, CDN ve barındırma ortamı adımlarını tanımlamak için. |
| `PROJ-PLAN` | `PROJECT_PLAN.md` | Fazlı teslim istendiyse | Tasarım, içerik ve yayınlama aşamalarını planlamak için. |
| `AGENT-INST` | `AGENT_INSTRUCTIONS.md` | Ajan için özel kurallar belirtildiyse | Ajan çalışma kurallarını tanımlamak için. |

### Hariç Tutulan Dokümanlar (Excluded by Default)
SaaS veya karmaşık yazılım süreçlerine ait olan aşağıdaki belgeler normal bir kurumsal sitede gerekmedikçe üretilmez:
- `OPS` (`OPERATIONS.md`)
- `PROD-STRAT` (`PRODUCT_STRATEGY.md`)
- `WAVE-MAP` (`WAVE_MAP.md`)
- `WAVE-PLAN` (`WAVE_PLAN.md`)

---

## 7. Extension ve Reduction Kuralları

### Extension (Genişletme) Kuralları
- **CMS / Yönetim Paneli Eklentisi:** İçeriğin panellerle yönetilmesi istendiğinde `DATA` (`DATA_MODEL.md`) ve `API` (`API_CONTRACTS.md`) belgeleri zorunlu hale getirilir.
- **Mevcut Siteden Redesign:** Mevcut bir web sitesi yenileniyorsa `EXISTING_PROJECT_PACKAGE` devreye girer ve `STATUS` (`CURRENT_STATUS.md`) zorunlu olur.

### Reduction (Daraltma) Kuralları
- Statik, az sayfalı (brochureware) sitelerde `DATA` ve `API` belgeleri tamamen çıkarılır.
- Çıkarılan belgeler run kaydında gerekçesiyle saklanır.
- Zorunlu çekirdek belgeler (`README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `DESIGN`) asla daraltılamaz.

---

## 8. Delivery Profile Derinlik Beklentileri (Depth Expectations)

- **Foundation Level:** Site haritası (sitemap), sayfa amaçları ve temel marka renkleri özetlenir.
- **Prototype Level:** Sayfa şablonları, tipografi, menü yapısı ve örnek sayfa içerikleri tanımlanır.
- **Implementation Ready Level:** Tüm sayfaların (Anasayfa, Hakkımızda, Hizmetler, İletişim vb.) detaylı bileşen hiyerarşisi, form alanları ve validation kuralları eksiksiz tanımlanır.
- **Production Ready Level:** SEO meta etiket yapıları, duyarlılık (mobile/desktop responsive) kuralları, performans ve deployment adımları eklenir.

---

## 9. Validation Beklentileri

`engine/VALIDATION_RULES.md` kurallarına ek olarak bu pakete özel kontroller:

1. **Sayfa ve Gezinti (Navigation) Uyumu:** Sayfa listesi ile menü/navigasyon yapısı birebir uyumlu olmalıdır.
2. **İletişim ve Dönüşüm Akışı:** İletişim formlarının nereye gönderileceği (email, API, CRM) ve başarı/hata durumları net tanımlanmış olmalıdır.
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
