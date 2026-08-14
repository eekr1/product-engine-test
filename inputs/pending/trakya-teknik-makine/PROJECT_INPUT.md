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
created_at: "2026-08-14T03:20:00+03:00"
updated_at: "2026-08-14T03:20:00+03:00"
approved_at: ""
approved_by: ""
supersedes: ""
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

Proje kaynak dosyası: project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md

Mevcut Trakya Teknik Makine web sitesinin (https://www.trakyateknikmakine.com/) bilgilerini koruyarak, firmanın hizmetlerini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisliğini daha profesyonel ve güven veren biçimde sunan modern bir frontend satış demosu hazırlamak.
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page` (Kurumsal web sitesi / tanıtım demosu)
- **Project State:** `existing` (Mevcut site ve firma gerçekleri korunarak yeni frontend geliştirme)
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation:** `standard` — Projenin teslim olgunluğu `Prototype` (satış demosu) olmasına rağmen Product Engine kalite ilkeleri gereği mimari planlama zayıflatılmaz. Ajanların koda doğrudan başlayabileceği agent-ready minimum planlama seti (teknik bağlam, wave map, status, tasks, decisions vb.) sağlanacaktır.
- **Design:** `light` — Satış demosu odaklı kurumsal web sitesi için projeye özgü görsel konsept, tipografi, renk paleti, düzen ve responsive kurallarını tanımlayan `DESIGN_RULES` artifact'i hedeflenmiştir. Light seviye belge sayısının az olmasıdır; tasarım kalitesinin veya özgünlüğünün düşük olması anlamına gelmez.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki (SITE123 altyapılı) doğrulanmış firma ve hizmet bilgilerini koruyarak, potansiyel müşteri satış görüşmesinde güçlü bir ilk izlenim bırakacak modern, profesyonel ve responsive bir frontend web demosu hazırlamak.

### Problem

Mevcut web sitesi temel firma bilgilerini sunmaktadır ancak görsel sunum, kurumsal algı, içerik hiyerarşisi ve modern tasarım standartları açısından potansiyel müşteri görüşmelerinde yetersiz kalmaktadır.

### Purpose

Firma hizmetlerini, Disan Hidrolik yetkili servisliğini ve iletişim kanallarını vurgulayan yüksek kaliteli bir frontend demo ile satış görüşmesini desteklemek ve "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını net şekilde iletmektir.

### Success Criteria

1. Demo, mevcut siteden belirgin şekilde daha modern, endüstriyel ve güven veren bir görsel kimliğe sahip olmalıdır.
2. Firmanın Disan Hidrolik Makine yetkili servisi olduğu ve 3 temel hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ilk bakışta anlaşılmalıdır.
3. Masaüstü ve mobil cihazlarda sorunsuz çalışan, hızlı erişilebilir bir iletişim deneyimi sunmalıdır.
4. Demo sahte/doğrulanmamış firma iddiaları içermemeli, yalnızca doğrulanmış gerçek bilgileri kullanmalıdır.
5. Frontend mimarisi, ileride gerçek backend entegrasyonuna imkan tanıyacak temiz data/service boundary yapısında olmalıdır.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım, onarım, yedek parça temini veya yerinde teknik destek arayan sanayi ve ekipman işletmeleri.
- **İkincil Kullanıcılar:** Firma hakkında güvenilirlik ve hizmet kapsamı araştırması yapan satın alma / operasyon sorumluları.

### Core Flows

1. Ziyaretçi ana sayfaya girer, firmanın uzmanlığını ve Disan Hidrolik yetkili servisliğini görür.
2. Ziyaretçi 3 ana hizmeti (Yedek Parça, Yerinde Destek, Bakım-Onarım) detaylı ve görsel olarak inceler.
3. Ziyaretçi firmanın güven unsurlarını ve hakkındaki bilgileri okur.
4. Ziyaretçi tek tıkla telefon veya e-posta iletişim CTA'ları üzerinden firma ile temas kurar.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive kurumsal frontend demo.
- Ana sayfa ve kurumsal/hizmet/iletişim bölümleri.
- Doğrulanmış firma ve hizmet içeriklerinin modern düzen ile sunumu.
- Telefon ve e-posta iletişim CTA bağlantıları.
- Temiz frontend mimarisi (integration-ready mock service boundary).

### Out of Scope

- Gerçek admin/yönetim paneli.
- Backend API, veritabanı uygulaması veya sunucu tarafı mantığı.
- Gerçek kullanıcı hesabı / authentication.
- Online satış veya e-ticaret ödeme altyapısı.
- Doğrulanmamış yeni firma iddiaları, sahte referanslar veya teknik yetkinlik beyanları.
- Production hosting, domain taşıma ve SITE123 geçiş işlemleri.

### Future Possibilities

- Satış sonrası gerçek backend/CMS entegrasyonu.
- Dinamik teklif alma / servis talep formu altyapısı.
- Canlı harita ve WhatsApp doğrudan destek entegrasyonu.

---

## 6. Existing Project Context

### Current Reality

- Aktif web sitesi: `https://www.trakyateknikmakine.com/` (SITE123 altyapısı).
- Mevcut içerikler: Ana Sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler, İletişim.
- Doğrulanmış firma bilgileri: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi; 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım).

### Target State

- SITE123 kısıtlarından bağımsız, özel tasarlanmış, son derece modern, hızlı ve yüksek dönüşümlü kurumsal frontend demo.

### Transition Scope

- Mevcut sitedeki doğrulanmış metin ve firma gerçekleri korunacak; görsel ve teknik yapı sıfırdan modern standartlarla inşa edilecektir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Satış görüşmesinde doğrudan gösterilebilir, hızlı çalışan ve sorunsuz frontend demo.
- Teknik stack kararı Product Engine package/document selection aşamasında belirlenecek olup, pending intake katmanında stack-neutral tutulmuştur.

### Current Data Source Reality

- Statik / local mock data (firma bilgileri ve hizmet detayları JSON/local data objelerinde tutulacak).

### Service / Data-Access Boundary Expectation

- UI bileşenleri veriyi doğrudan component içine gömmek yerine soyutlanmış data/service katmanından (ör. `services/companyService`) tüketecektir.

### Future Backend / Integration Context

- İleride gerçek bir backend veya CMS eklendiğinde presentation katmanı değişmeden sadece data adapter değiştirilecektir.

### Unresolved Technical Decisions

- Exact build tool / frontend library (Vite + Vanilla JS veya React) Engine package selection aşamasında kesinleşecektir. Sahte backend API contract'ı uydurulmayacaktır.

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma Adı: Trakya Teknik Makine.
- Sektör: Makine Bakım, Onarım, Hidrolik Sistemler ve Yedek Parça.
- Mevcut Sitedeki Yetkili Servislik: Disan Hidrolik Makine.

### Desired Character / Perception

- Güven veren, teknik olarak yetkin, endüstriyel uzmanlığa sahip, modern ve dinamik kurumsal algı.

### Explicit Preferences / Constraints

- Mevcut SITE123 şablon tasarımı kopyalanmayacaktır.
- Sektör klişelerine (`sanayi = düz lacivert site`) otomatik teslim olunmayacaktır.

### Differentiation Notes

- Özgün tipografi, dengeli ızgara (grid) yapısı, güçlü endüstriyel görsel hiyerarşi ve mikro-etkileşimler ile jenerik şablon hissi engellenecektir.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start-scenario | Yüksek | Proje kaynak ve kapsam bağlamı |
| SRC-02 | `https://www.trakyateknikmakine.com/` | existing-website | Yüksek (Açık Bilgiler) | Doğrulanmış firma, hizmet ve iletişim bilgileri |

---

## 10. Known Decisions

- **DEC-01:** İlk aşamada çıktı bir satış demosu (frontend prototype) olacaktır.
- **DEC-02:** Delivery Profile `Prototype`, Implementation Planning `standard`, Design Planning `light` olarak seçilmiştir.
- **DEC-03:** Mevcut sitedeki doğrulanmış firma bilgileri korunacak, yeni uydurma iddia veya sertifika eklenmeyecektir.
- **DEC-04:** Mevcut SITE123 görsel tasarımı bağlayıcı değildir; yeni projeye özgü tasarım konsepti kurulacaktır.

---

## 11. Assumptions

- **ASM-01 (Safe / pending_review):** Primary language Türkçe (`tr`) olarak belirlenmiştir. (Gerekçe: Firma adı, faaliyet bölgesi ve hedef kitle Trakya bölgesindedir.)
- **ASM-02 (Safe / pending_review):** Frontend kodlama formatı kebab-case dosya yapısı ve modüler mimari olacaktır. (Gerekçe: Standart kodlama pratiği.)
- **ASM-03 (Bounded / pending_review):** Frontend demo altyapısı Engine package selection adımında netleşecektir. (Gerekçe: Proje brief'inde bağımsız frontend geliştirme hedeflenmiştir.)

---

## 12. Conflicts

- **CON-01:** Source belgesinde (`TRAKYA_TEKNIK_MAKINE_PROJECT.md`) "Proje modu: yeni" ifadesi yer alırken, mevcut web sitesi (`trakyateknikmakine.com`) ve firma gerçekleri kaynak olarak kullanıldığı için Engine `PROJECT_INTAKE.md` yetkili kuralı gereğince `project_state: existing` olarak sınıflandırılmıştır. (Çözüm: Engine intake otoritesi uygulanmıştır.)

---

## 13. Open Questions / Unresolved Items

- Firmanın yüksek çözünürlüklü vektörel logosu/brand asset'leri mevcut mu? (Demoda tipografik/görsel uygun marka logosu kullanılacaktır.)
- Demo için WhatsApp, canlı harita veya teklif formu bileşeni eklensin mi?
- Hizmetler için ek teknik görsel materyal temin edilecek mi?

---

## 14. Approval & Verification

- **Status:** `pending`
- **Approved At:** 
- **Approved By:** 

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light | standard | full` olarak kesinleşti (`light`).
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı (CON-01 Engine yetkisiyle çözüldü ve belgelendi).
- [x] Assumption'lar kayıtlı ve status'ları `pending_review`.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (2).
- [ ] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [ ] `approved_by: user` için doğrudan approval kanıtı var.
