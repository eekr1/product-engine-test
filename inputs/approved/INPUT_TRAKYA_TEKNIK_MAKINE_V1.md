---
input_id: "INPUT-TRAKYA_TEKNIK_MAKINE-V1"
project_name: "Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo"
project_slug: "trakya-teknik-makine"
input_version: "1"
status: "approved"
project_type: "landing-page"
project_state: "existing"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "light"
primary_language: "tr"
created_at: "2026-08-12T02:10:22+03:00"
updated_at: "2026-08-12T02:12:54+03:00"
approved_at: "2026-08-12T02:12:54+03:00"
approved_by: "user"
supersedes: ""
source_type: "project-start"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical approved project truth girdisidir. `approved` durumu kullanıcının açık mesaj onayı ile kesinleşmiştir.

---

## 1. Original Brief

```text
Trakya Teknik Makine'nin mevcut kurumsal web sitesini (https://www.trakyateknikmakine.com/), firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak. Demo, potansiyel müşterilere (Trakya bölgesinde makine bakım, onarım, yerinde teknik destek ve yedek parça arayan işletmeler) gösterilmek üzere proaktif bir satış görüşmesi için hazırlanacaktır. Mevcut site SITE123 altyapısında olup firma bilgilerini içermektedir. Yeni çalışma mevcut firma bilgilerini koruyacak, ancak tasarımı ve görsel hiyerarşiyi tamamen yenileyecektir.
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page`
- **Project State:** `existing`
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (`standard`):** Çalışma kapsamı satış demosu odaklı kurumsal frontend projesidir. `standard` seviyesi; execution takibi için `PROJ-PLAN`, `WAVE-MAP` ve `WAVE-PLAN` belgelerini üreterek net bir adım adım uygulama planı sağlar, gereksiz mimari aşırı yük oluşturmaz.
- **Design (`light`):** Teslim hedefi frontend satış demosu (Prototype) olduğu için `light` tasarım planlaması seçilmiştir. `light` profil, projeye özel `DESIGN` (visual concept, renk paleti, tipografi ve yüzey kuralları) belgesini üretirken; her sayfa için ayrı `PAGE-DESIGN` belgeleri üretme karmaşıklığını engeller. Ancak `light` profil, generic/template tasarım kullanımına izin vermez, kalite tabanı korunur.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut web sitesindeki doğrulanmış firma ve hizmet bilgilerini koruyarak, modern, endüstriyel güven hissi veren ve satış görüşmesinde gösterilebilir seviyede yüksek kaliteli bir kurumsal web sitesi frontend demosu hazırlamak.

### Problem

Mevcut web sitesi firmanın temel bilgilerini ve hizmetlerini sunmakla birlikte, SITE123 şablon kısıtları nedeniyle görsel sunum, kurumsal algı, modern tipografi, görsel hiyerarşi ve satış görüşmesinde yaratılacak güven/etki açısından yenilenmeye muhtaçtır.

### Purpose

Trakya Teknik Makine'nin mevcut müşteri ve potansiyel iş ortakları nezdinde kurumsal algısını güçlendirmek, firmanın teknik yetkinliğini ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olma durumunu öne çıkarmak, satış görüşmesinde "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını güçlü bir frontend demo ile sunmak.

### Success Criteria

- Demosunun ilk bakışta mevcut siteden belirgin biçimde daha modern ve profesyonel görünmesi.
- Generic kurumsal şablon hissi vermeyip projeye özgü endüstriyel/teknik bir visual concept taşıması.
- Firmanın 3 temel hizmetinin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve yetkili servis durumunun açıkça anlaşılması.
- Telefon ve e-posta iletişim kanallarına hızlı ve kolay erişim sağlanması.
- Mobil ve masaüstü görünümlerin kusursuz ve responsive çalışması.
- Doğrulanmamış yeni firma iddiası veya uydurma bilgi içermemesi.
- Temiz data/service sınırları ile gelecekte gerçek backend entegrasyonuna hazır olması.
- `implementation_planning: standard` çıktısı olarak sonraki ajanın koda başlayabileceği net wave planlarının üretilmesi.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım, onarım veya yerinde teknik destek arayan sanayi ve imalat işletmeleri; yedek parça temini arayan makine kullanıcıları.
- **İkincil Kullanıcılar:** Firma hakkında güvenilirlik ve hizmet kapsamı araştırması yapan satın alma ve operasyon yöneticileri; doğrudan iletişim kurmak isteyen mevcut müşteriler.

### Core Flows

1. **Giriş ve Değer Sunumu:** Ziyaretçi ana sayfaya geldiğinde firmanın ne iş yaptığını, uzmanlığını ve yetkili servis durumunu anında kavrar.
2. **Hizmet İnceleme:** Ziyaretçi firmanın sunduğu 3 ana hizmet alanını (Yedek Parça, Yerinde Destek, Bakım-Onarım) görsel hiyerarşi ile detaylıca inceler.
3. **Güven ve Kurumsal Bilgi:** Ziyaretçi firmanın Trakya bölgesindeki konumunu, yetkili servis partnerliğini ve kurumsal duruşunu doğrular.
4. **İletişime Geçme:** Ziyaretçi telefon (doğrudan arama) veya e-posta CTA'ları üzerinden firma ile hızlıca temas kurar.

---

## 5. Scope Boundaries

### In Scope

- Responsive kurumsal frontend web demo.
- Ana sayfa hero, kurumsal bilgi, hizmetler breakdown, yetkili servis vurgusu ve iletişim bölümleri.
- Mevcut sitedeki gerçek firma ve hizmet içeriklerinin modern hiyerarşi ile yeniden sunulması.
- Mobil ve masaüstü için optimize edilmiş responsive deneyim.
- Temiz mock/local data boundaries (integration-ready mimari).
- Doğrudan iletişim CTA'ları (telefon arama bağlantısı, e-posta bağlantısı).

### Out of Scope

- Gerçek admin paneli veya CMS altyapısı.
- Backend, veritabanı veya API entegrasyonlarının gerçeklenmesi.
- Kullanıcı girişi / authentication / müşteri paneli.
- E-ticaret / online ödeme veya teklif sepeti.
- Müşteri tarafından doğrulanmamış yeni firma iddiaları veya sahte referanslar.
- Production deployment, domain geçişi veya DNS yönlendirmeleri.

### Future Possibilities

- Satış görüşmesi sonrasında onaylanacak gerçek backend/CMS entegrasyonu.
- Dinamik iletişim formu / teklif alma formu altyapısı.
- Canlı harita entegrasyonu ve interactive hizmet alanı haritası.
- Production yayını ve mevcut SITE123 sitesinin taşınması.

---

## 6. Existing Project Context

### Current Reality

Mevcut canlı web sitesi (`https://www.trakyateknikmakine.com/`) SITE123 altyapısı üzerinde yayın yapmaktadır. Sitede firma adı, iletişim bilgileri, Disan Hidrolik Makine Trakya bölge yetkili servisi olunduğu bilgisi ve 3 ana hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) yer almaktadır. Görsel tasarım ve şablon yapısı eskimiştir.

### Target State

Mevcut doğrulanmış firma bilgilerini aynen koruyan, ancak modern tipografi, endüstriyel görsel dil, akıcı spacing ve güçlü hiyerarşi sunan; responsive, yüksek kaliteli ve satış görüşmesinde etkileyici bir frontend web sitesi demosu.

### Transition Scope

Mevcut sitedeki metinler ve firma bilgileri veri kaynağı olarak aktarılacak; eski SITE123 tasarımı, CSS/HTML kodları veya şablon yapısı tamamen terk edilerek sıfırdan modern bir frontend yapısı kurulacaktır.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Frontend satış demosu odaklı geliştirme.
- Teknoloji stack'i: Vanilla HTML5, JavaScript (ES6+), Vanilla CSS (Custom industrial design design system).
- Kod yapısı geçici (throwaway) sayılmayacak, presentation katmanı ile mock data/service katmanı ayrıştırılacaktır.

### Current Data Source Reality

İlk demo aşamasında doğrulanmış firma bilgilerinden oluşan yerel/mock statik veri katmanı kullanılacaktır.

### Service / Data-Access Boundary Expectation

UI bileşenleri veriye doğrudan hardcode edilmeyecek, bir data/service boundary üzerinden erişecektir. Bu sayede gelecekte gerçek backend API bağlandığında UI bileşenleri refactor edilmeden adapter değişimi yapılabilecektir.

### Future Backend / Integration Context

Gelecekte backend eklenmesi durumunda REST/GraphQL API bağlantısına hazır mimari sınır korunacaktır. Demo aşamasında sahte API endpoint'i veya veritabanı şeması uydurulmayacaktır.

### Unresolved Technical Decisions

- Hiçbir unresolved blocking karar yoktur. Stack: HTML5, CSS3, JavaScript (ES6+).

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma adı: Trakya Teknik Makine
- Yetkili servis ilişkisi: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
- Mevcut içerik yapısı ve hizmet kategorileri

### Desired Character / Perception

- Profesyonel endüstriyel ve teknik güvenilirlik.
- Hızlı servis ve çözüm odaklı yetkinlik hissi.
- Modern, temiz ve kurumsal duruş.

### Explicit Preferences / Constraints

- Mevcut SITE123 tasarımı kopyalanmayacaktır.
- Sektör klişeleri (`varsayılan düz lacivert`, `jenerik 3 kartlı şablon`) otomatik tasarım gerekçesi yapılmayacaktır.
- `design_planning: light` seçimi tasarım kalitesini veya detayını düşürmez; yalnız üretilecek tasarım belgesi sayısını (`DESIGN` belgesiyle) sınırlar.

### Differentiation Notes

Farklılaşma; endüstriye uygun özel tipografi, kontrollü yüzey ve renk hiyerarşisi, dinamik spacing ve ince micro-interaction'lar ile sağlanacaktır.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Proje Kaynak Dosyası | Yüksek | Ham proje tanımı ve brief bağlamı |
| SRC-002 | `https://www.trakyateknikmakine.com/` | Mevcut Web Sitesi | Doğrulanmış Gerçeklik | Mevcut firma bilgileri ve hizmet detayları |

---

## 10. Known Decisions

- İlk ürün çıktısı satış görüşmesi odaklı frontend demo olacaktır.
- `delivery_profile: Prototype`, `implementation_planning: standard`, `design_planning: light` olarak belirlenmiştir.
- Mevcut sitedeki doğrulanmış firma metinleri ve bilgileri korunacaktır.
- Mevcut sitenin görsel ve kod tasarımı bağlayıcı değildir, sıfırdan yenilenecektir.
- Bilinmeyen veya doğrulanmamış firma iddiaları uydurulmayacaktır.
- Product Engine canonical lifecycle ve approval gate süreci eksiksiz uygulanacaktır.

---

## 11. Assumptions

| Assumption ID | Kategori | Sınıf | Çıkarım / Varsayım | Gerekçe | Durum |
|---|---|---|---|---|---|
| ASSUMP-001 | Design | Safe | Demo tasarımı mevcut SITE123 görsellerine bağımlı kalmadan özgün modern endüstriyel konsept ile yapılacaktır. | Mevcut site tasarımı yenileme amacının ana sebebidir. | active |
| ASSUMP-002 | Technical | Safe | Frontend demo yerel dev/preview ortamında sorunsuz çalışacak şekilde paketlenecektir. | Satış gösterimi için hızlı ve güvenilir erişim gereklidir. | active |

---

## 12. Conflicts

İncelenen kaynak dosyası ile Product Engine otorite kuralları arasında herhangi bir çelişki tespit edilmemiştir.

---

## 13. Open Questions / Unresolved Items

1. **Logo / Kurumsal Varlıklar:** Firmanın yüksek çözünürlüklü vektörel logosu mevcut mu? (Demo için geçici SVG/vektör kurumsal logo oluşturulması yeterlidir, onay sürecini engellemez).
2. **Ek İletişim Kanalları:** Demoda WhatsApp hızlı iletişim butonu veya harita bileşeni gösterilsin mi? (İntake onayını engellemez, tasarım aşamasında netleşebilir).

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-12T02:12:54+03:00
- **Approved By:** user

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable için `design_planning` `light` olarak belirlendi.
- [x] Planning profile rationale kullanıcıya sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict bulunmadığı doğrulandı.
- [x] Safe assumption'lar kaydedildi.
- [x] Secret/credential veya machine path içermediği doğrulandı.
- [x] `source_count` (2) doğrulandı.
- [x] Canonical explicit user approval ALINDI. (Kullanıcının doğrudan mesajı: "Pending intake'i onaylıyorum, devam et.").
- [x] `approved_by: user` kaydedildi.
