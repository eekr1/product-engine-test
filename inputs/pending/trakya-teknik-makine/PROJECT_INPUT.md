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
created_at: "2026-08-11T23:09:42+03:00"
updated_at: "2026-08-11T23:14:21+03:00"
approved_at: null
approved_by: null
supersedes: null
source_type: "project-start-scenario"
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
Proje Fikri ve Amacı: Trakya Teknik Makine'nin mevcut kurumsal web sitesini (SITE123 altyapılı), firmanın doğrulanmış hizmetlerini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve Disan Hidrolik Trakya yetkili servisi konumunu koruyarak, satış görüşmesinde potansiyel müşteriye gösterilebilecek modern, güven veren ve görsel olarak güçlü bir frontend demo ile yeniden tasarlamak.
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

- **Implementation (`standard`):** Satış görüşmesinde gösterilebilir frontend demo teslimatı hedeflenmektedir. Ilk wave'i (Wave 00/01) bir ajanın doğrudan koda dönüştürebileceği netlikte execution planı üretmek için `standard` seviye yeterli ve gereklidir.
- **Design (`light`):** Kurumsal web sitesi demosu için özgün bir görsel konsept (hero, hizmetler, güven unsurları, iletişim) tanımlanacaktır. Gereksiz çok sayıda ayrı sayfa ve feature tasarım dokümanı üretmeden, fakat generic template klişelerine düşmeyecek kalite tabanında `light` design planning uygulanacaktır.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın gerçek bilgi ve yetkili servis konumunu koruyarak, modern görsel hiyerarşi ve temiz frontend mimarisine sahip satış odaklı bir demo ile yenilemek.

### Problem

Mevcut web sitesi (SITE123) firmanın temel bilgilerini sunmakla birlikte, modern visual identity, güçlü içerik hiyerarşisi ve potansiyel satış görüşmesinde yaratacağı kurumsal güven algısı açısından yenilenmeye muhtaçtır.

### Purpose

Firmanın Disan Hidrolik Makine yetkili servis unvanını ve makine bakım/onarım/yedek parça uzmanlığını öne çıkaran, potansiyel müşterilere gösterilebilecek yüksek kalitede responsive frontend kurumsal web sitesi demosu hazırlamak.

### Success Criteria

- Demo ilk bakışta mevcut siteden belirgin biçimde daha modern, profesyonel ve güven verici görünmeli.
- Tasarım generic kurumsal demo template'i hissi vermemeli; projeye özgü ayırt edilebilir visual concept taşımalı.
- Firma yetkinlikleri ve 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) hızlıca anlaşılmalı.
- Masaüstü ve mobil deneyim satış görüşmesinde sorunsuz gösterilecek kalitede olmalı.
- Gerçek firma bilgileri korunurken uydurma iddia veya kanıtlanmamış veri üretilmemeli.
- Frontend yapısı, ileride gerçek backend entegrasyonu yapıldığında presentation katmanının yeniden yazımını gerektirmeyecek temiz data/service boundary taşımalı.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım, onarım veya teknik servis ihtiyacı olan işletmeler; yedek parça veya yerinde destek arayan sanayi ve makine kullanıcıları.
- **İkincil Kullanıcılar:** Firma hakkında güvenilirlik ve hizmet kapsamı araştıran satın alma/operasyon sorumluları; iletişim kurmak isteyen mevcut müşteriler.

### Core Flows

- **Flow 1 (İlk İzlenim ve Değer Teklifi):** Ziyaretçi ana sayfaya gelir, firmanın uzmanlığını ve Disan Hidrolik Trakya yetkili servisi olduğunu ilk bakışta kavrar.
- **Flow 2 (Hizmet & Uzmanlık İncelemesi):** Ziyaretçi 3 ana hizmet alanını (Yedek Parça, Yerinde Destek, Bakım & Onarım) ve kurumsal güven unsurlarını inceler.
- **Flow 3 (İletişim & CTA):** Ziyaretçi telefon, e-posta veya doğrudan iletişim CTA'ları üzerinden firmaya kolayca ulaşır.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive kurumsal frontend demo.
- Ana sayfa ve kurumsal/hizmet/iletişim bölümleri.
- Mevcut gerçek firma bilgilerinin organize ve güçlü sunumu.
- Telefon ve e-posta hızlı iletişim CTA'ları.
- Service/data-access boundary (integration-ready frontend mimarisi).

### Out of Scope

- Demo aşamasında backend, veritabanı veya CMS/admin paneli.
- Auth / kullanıcı girişi.
- E-ticaret / online ödeme.
- Müşteri tarafından doğrulanmamış yeni firma iddiaları veya referanslar.
- Production deployment ve mevcut domain taşıması.

### Future Possibilities

- Satış görüşmesi sonrası gerçek içerik doğrulaması ve CMS/Admin paneli geliştirilmesi.
- Gerçek backend/API entegrasyonu ve teklif talep formu workflow'u.
- Production hosting, SSL ve domain geçişi.

---

## 6. Existing Project Context

### Current Reality

Mevcut site SITE123 altyapısında `https://www.trakyateknikmakine.com/` adresinde yayındadır. Temel firma bilgilerini ve 3 ana hizmeti sunmaktadır. Disan Hidrolik Trakya yetkili servisidir.

### Target State

Özgün tasarım diline, modern tipografi ve renk paletine sahip, responsive, performanslı ve satış görüşmesine hazır frontend kurumsal demo.

### Transition Scope

Mevcut sitedeki doğrulanmış firma bilgileri kaynak olarak alınır; eski sitenin görsel tasarımı ve SITE123 altyapısı dondurularak yeni frontend demo tamamen sıfırdan inşa edilir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Frontend demo odaklı teslimat.
- Kod kalitesi throwaway olmamalı; presentation bileşenleri ile data layer ayrılmalıdır.
- Mock/local data source kullanılmalıdır.
- Gerçek dışı backend endpoint'i veya DB schema contract'ı uydurulmamalıdır.

### Current Data Source Reality

- Yerel mock data (JSON veya TypeScript/JavaScript mock data objeleri).

### Service / Data-Access Boundary Expectation

- UI component'leri yerel mock veriyi doğrudan import edip gömmek yerine, bir service/adapter arayüzü üzerinden talep etmelidir. Böylece backend geldiğinde UI katmanı değişmez.

### Future Backend / Integration Context

- Gelecekte bir REST API veya CMS bağlandığında presentation katmanında değişiklik yapmadan yalnızca data adapter güncellenecektir.

### Unresolved Technical Decisions

- Stack seçimi (Product Engine package selection aşamasında `web-app-base` / canonical stack kurallarıyla kesinleşecektir).

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma Adı: Trakya Teknik Makine
- Unvan: Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi
- Hizmetler: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım

### Desired Character / Perception

- Endüstriyel güvenilirlik, teknik yetkinlik, güçlü kurumsal duruş, hızlı ve profesyonel teknik servis hissi.

### Explicit Preferences / Constraints

- Klasik jenerik kurumsal şablon klişelerine (standard lacivert, düz 3 kart) düşülmeyecek.
- Görsel hiyerarşi, dinamik mikro etkileşimler ve kaliteli tipografi ile özgün bir karakter oluşturulacak.

### Differentiation Notes

- Mevcut SITE123 şablon görünümünden tamamen ayrışan, modern endüstriyel estetik ve akıcı kullanıcı deneyimi.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start scenario | High | Proje başlama brief'i, hedefler, kısıtlar ve planning hint'leri |
| SRC-02 | `https://www.trakyateknikmakine.com/` | existing website | High | Doğrulanmış mevcut firma ve hizmet bilgileri |

---

## 10. Known Decisions

- İlk çıktı satış görüşmesi odaklı frontend demo olacaktır.
- Planning profile hint'leri: Delivery profile `Prototype`, implementation planning `standard`, design planning `light`.
- Mevcut doğrulanmış firma metinleri ve yetkili servis unvanı korunacaktır.
- Backend, DB ve Admin paneli ilk demo kapsamında olmayacaktır.

---

## 11. Assumptions

- **ASSUMPTION-001 (Class: Technical, Status: Pending Approval):** Demo gösterimi ve incelemesi için yerel bir geliştirme/önizleme ortamı yeterlidir; production hosting veya özel canlı altyapı bu aşamada gerekmez.
- **ASSUMPTION-002 (Class: Design, Status: Pending Approval):** Firmanın yüksek çözünürlüklü vektörel logosu temin edilene kadar, modern tipografik logo sunumu ve temiz ikonografi kullanılacaktır.

---

## 12. Conflicts

- Hiçbir kritik çelişki tespit edilmemiştir. (Mevcut sitenin görsel tasarımı ile yeni tasarım hedefi arasındaki fark bir çelişki değil, proje yenileme amacıdır).

---

## 13. Open Questions / Unresolved Items

- **[Clarification 1]:** Planning Profile Seçimi: Delivery Profile (`Prototype`), Implementation Planning (`standard`), Design Planning (`light`) konfigürasyonunu onaylıyor musunuz?
- **[Clarification 2]:** Frontend Teknoloji Stack'i: Demo projesi için varsayılan modern frontend stack'i (örneğin Vite + HTML/CSS/JS veya React) kullanılması onaylanıyor mu?
- **[Clarification 3]:** Ek İletişim Akışları: İletişim bölümünde telefon/e-posta dışındaki ek CTA'lar (örneğin WhatsApp hızlı destek veya teklif alma formu önizlemesi) demoya dahil edilsin mi?

---

## 14. Approval & Verification

- **Status:** `pending`
- **Approved At:** null
- **Approved By:** null

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light | standard | full` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru.
- [ ] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [ ] `approved_by: user` için doğrudan approval kanıtı var.
