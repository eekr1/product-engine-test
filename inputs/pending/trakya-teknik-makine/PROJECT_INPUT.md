---
input_id: "INPUT-TRAKYA-TEKNIK-MAKINE-V1"
project_name: "Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo"
project_slug: "trakya-teknik-makine"
input_version: "1"
status: "pending"
project_type: "landing-page"
project_state: "existing"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "light"
primary_language: "tr"
created_at: "2026-08-13T04:41:36+03:00"
updated_at: "2026-08-13T04:41:36+03:00"
approved_at: ""
approved_by: ""
supersedes: ""
source_type: "project-start"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `pending` durumunda generation başlatılamaz. `approved` yalnız canonical explicit user approval ile oluşabilir; IDE/tool/plan auto-approval geçerli değildir.

---

## 1. Original Brief

```text
Product Engine üzerinden Trakya Teknik Makine kurumsal web sitesi yenileme demo projesini başlatıyorsun.

Kaynak: project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md

Proje Amacı: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak. Demo Enis tarafından potansiyel satış görüşmesi amacıyla hazırlanacaktır.
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

- **Implementation (standard):** Satış görüşmesinde gösterilecek frontend demo projesinde, yeni bir ajanın mimariyi anlayıp koda başlayabilmesi için teknik bağlam, dalga/wave yapısı, veri sınırları ve görev planının eksiksiz (agent-ready minimum) tanımlanması gerekmektedir.
- **Design (light):** Proje bir kurumsal frontend demo olduğundan geniş bir design system veya multi-screen feature paketi yerine projeye özgü ayırt edilebilir görsel dili, tipografi, renk ve kompozisyon kurallarını belirleyen güçlü ancak hafif bir `DESIGN_RULES` kapsamı yeterlidir.

> `design_planning` için `none` profile yoktur. UI/UX applicable olduğundan `light` profile seçilmiştir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin SITE123 altyapısındaki mevcut web sitesinin içerik ve doğrulanmış firma bilgilerini dondurarak, potansiyel müşteri satış görüşmesinde firmanın teknik gücünü ve yetkili servis kimliğini öne çıkaracak modern, responsive ve yüksek etkili bir frontend demo web sitesi hazırlamak.

### Problem

Mevcut web sitesi firmanın temel bilgilerini ve hizmetlerini sunuyor olsa da görsel sunum, kurumsal algı, içerik hiyerarşisi ve satış görüşmesinde yaratacağı ilk izlenim açısından modernleştirilmeye muhtaçtır. Sitede firmanın Trakya bölgesindeki Disan Hidrolik Yetkili Servis kimliği ve 3 temel hizmeti yeterince güçlü temsil edilmemektedir.

### Purpose

Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini koruyarak daha güçlü, modern, profesyonel ve satış görüşmesinde "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını açıkça veren, gösterilebilir bir kurumsal web sitesi demosu hazırlamak.

### Success Criteria

- Demo ilk bakışta mevcut siteden belirgin biçimde daha modern, özgün ve profesyonel görünmeli.
- Tasarım generic kurumsal demo şablonu hissi vermemeli; projeye özgü karakter taşımalı.
- Firma kimliği ve 3 ana hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) hızlıca anlaşılmalı.
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliği güven verici şekilde vurgulanmalı.
- Telefon ve e-posta gibi temel iletişim CTA'ları kolay erişilebilir olmalı.
- Masaüstü ve mobil görünüm satış görüşmesinde sorunsuz sunulacak kalitede olmalı.
- Doğrulanmamış yeni firma iddiaları, referanslar veya teknik yetkinlikler uydurulmamalı.
- Clean presentation/service boundary kurulmalı; gelecekte backend entegrasyonu gerektiğinde UI yeniden yazımı gerektirmemeli.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım, onarım veya teknik servis ihtiyacı olan işletmeler; yedek parça temini arayan ekipman kullanıcıları; yerinde destek arayan müşteriler.
- **İkincil Kullanıcılar:** Satın alma ve operasyon sorumluları (güvenilirlik ve hizmet kapsamı araştırması yapanlar); firma ile iletişime geçmek isteyen mevcut müşteriler; satış görüşmesindeki potansiyel karar vericiler.

### Core Flows

1. **Keşif Akışı:** Ziyaretçi ana sayfaya girer, firmanın ne yaptığını ve Disan Hidrolik Yetkili Servis kimliğini 3 saniye içinde anlar.
2. **Hizmet İnceleme Akışı:** Ziyaretçi 3 ana hizmeti (Yedek Parça, Yerinde Destek, Bakım/Onarım) görsel ve teknik hiyerarşi içinde inceler.
3. **Güven & Kurumsal Bilgi Akışı:** Ziyaretçi firmanın yetkinliğini, tecrübesini ve kurumsal duruşunu inceler.
4. **İletişim & CTA Akışı:** Ziyaretçi telefon veya e-posta bağlantıları üzerinden firmaya doğrudan ulaşır.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive kurumsal frontend demo.
- Ana sayfa ve gerekli görülen kurumsal/hizmet/iletişim bölümleri.
- Mevcut gerçek firma içeriğinin ve 3 ana hizmetin yeniden organize edilmesi.
- Disan Hidrolik Yetkili Servisi vurgusu.
- Telefon ve e-posta direct contact CTA'ları.
- Mock/local data kaynağı ile temiz presentation/service sınırları.

### Out of Scope

- Gerçek admin paneli veya içerik yönetim sistemi (CMS).
- Backend, veritabanı veya API sunucusu uygulaması.
- Kullanıcı hesabı, authentication veya yetkilendirme.
- Online ödeme veya e-ticaret altyapısı.
- Müşteri tarafından doğrulanmamış firma iddiaları veya referanslar uydurmak.
- Production deployment veya mevcut domain/DNS geçişi.

### Future Possibilities

- Satış görüşmesi sonrası gerçek CMS / Admin paneli geliştirilmesi.
- İletişim formu / teklif alma formu API entegrasyonu.
- WhatsApp hızlı destek entegrasyonu.
- Production hosting, domain yönlendirme ve SEO optimizasyonu.

---

## 6. Existing Project Context

### Current Reality

- Aktif web sitesi: `https://www.trakyateknikmakine.com/` (SITE123 altyapısı).
- Sunulan içerik: Ana sayfa, Hakkında, Hizmetlerimiz (Yedek Parça, Yerinde Teknik Destek, Bakım & Onarım), İletişim.
- Firma tanımı: Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi.
- Mevcut sitenin görsel tasarımı eskimiş ve satış gücü düşüktür.

### Target State

- Modern, yüksek kaliteli, responsive kurumsal frontend demo.
- Özgün tipografi, kompozisyon, renk paleti ve endüstriyel görsel dil.
- Gelecekte backend entegrasyonuna hazır temiz mimari boundary.

### Transition Scope

- Mevcut siteden doğrulanmış firma bilgileri ve hizmet tanımları dondurularak yeni demoya aktarılacaktır.
- Mevcut SITE123 altyapısı veya tasarımı yeni demo için bağlayıcı veya kısıtlayıcı değildir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Çalışma bir frontend demo olarak tasarlanacaktır.
- Uygulama stack'i ve araçları Product Engine package/document selection sürecinde dondurulacaktır.
- Kod throwaway kabul edilmeyecek; presentation ve data-access katmanları birbirinden ayrılacaktır.

### Current Data Source Reality

- Veriler statik mock/local data module olarak dondurulacaktır.
- UI bileşenleri veriyi doğrudan hardcoded almak yerine local service interface üzerinden tüketecektir.

### Service / Data-Access Boundary Expectation

- `UI Component -> Service Interface -> Local Mock Adapter` katmanlaması kurulacaktır.

### Future Backend / Integration Context

- Gerçek backend veya CMS geldiğinde yalnızca Local Mock Adapter yerine Real API Adapter eklenecek, UI katmanı değişmeyecektir.

### Unresolved Technical Decisions

- exact framework/library seçimi (package selection / document catalog aşamasında dondurulacaktır).

> Backend/API henüz approved scope olmadığından sahte endpoint, veritabanı şeması veya backend stack'i uydurulmamıştır.

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma adı: Trakya Teknik Makine
- Yetkili Servis: Disan Hidrolik Makine Trakya Bölge Servisi
- Sektör: Makine teknik servis, bakım, onarım ve hidrolik sistemler.

### Desired Character / Perception

- Güvenilir, teknik olarak yetkin, güçlü, modern, profesyonel, endüstriyel uzmanlık hissi veren.

### Explicit Preferences / Constraints

- Sektör klişelerinden (ör. ucuz lacivert/mavi kurumsal şablonlar, standart 3 kutu hero düzenleri) kaçınılacaktır.
- Mevcut sitenin tasarımı kopyalanmayacak; firmanın verileri dondurularak projeye özel özgün görsel konsept kurulacaktır.

### Differentiation Notes

- Tasarım farklılaşması özgün tipografi hiyerarşisi, kompozisyon, yüzey sistemi ve kontrollü hareket/mikro-etkileşimler üzerinden kurulacaktır.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Proje Başlangıç Dokümanı | Yüksek | Proje fikri, kapsam, kısıtlar ve planning hint'leri |
| SRC-02 | `https://www.trakyateknikmakine.com/` | Mevcut Web Sitesi | Yüksek | Mevcut doğrulanmış firma bilgileri ve hizmet tanımları |

---

## 10. Known Decisions

- DEC-01: Projenin ilk çıktısı satış görüşmesinde sunulacak kurumsal frontend demo olacaktır.
- DEC-02: Mevcut sitedeki doğrulanmış firma ve hizmet bilgileri korunacak, doğrulanmamış yeni iddialar uydurulmayacaktır.
- DEC-03: Mevcut sitenin SITE123 altyapısı ve görsel tasarımı yeni demo için bağlayıcı değildir.
- DEC-04: Demo kod kalitesi throwaway olmayacak; presentation ile data/service katmanı ayrılacaktır.
- DEC-05: Planning profile değerleri `delivery_profile: Prototype`, `implementation_planning: standard`, `design_planning: light` olarak önerilmektedir.

---

## 11. Assumptions

- ASM-01: (Tamamlanabilir) Projenin birincil hedef dili Türkçe (`tr`) olacaktır. Status: `active`.
- ASM-02: (Tamamlanabilir) İletişim eylemleri için ilk aşamada direct `tel:` ve `mailto:` bağlantıları yeterlidir. Status: `active`.
- ASM-03: (Tamamlanabilir) Tasarımda yüksek çözünürlüklü marka vektör asset'leri bulunmadığı durumda temiz endüstriyel tipografik logo mark çözümü benimsenecektir. Status: `active`.

---

## 12. Conflicts

- Çözülmesi gereken kritik çelişki bulunmamaktadır.

---

## 13. Open Questions / Unresolved Items

- UNRES-01: Müşteri tarafında onaylanmış yüksek çözünürlüklü orijinal logo veya görsel materyal var mı? (Demo için geçici endüstriyel asset kullanılabilir).
- UNRES-02: İleride iletişim formu, teklif talep formu veya WhatsApp entegrasyonu istenip istenmeyeceği.

---

## 14. Approval & Verification

- **Status:** `pending`
- **Approved At:** 
- **Approved By:** 

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light` olarak belirlendi.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (2).
- [ ] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [ ] `approved_by: user` için doğrudan approval kanıtı var.
