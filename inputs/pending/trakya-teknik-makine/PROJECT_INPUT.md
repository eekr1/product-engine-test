---
input_id: "INPUT-TRAKYA-TEKNIK-MAKINE-V1"
project_name: "Trakya Teknik Makine Kurumsal Web Sitesi Demo"
project_slug: "trakya-teknik-makine"
input_version: "1"
status: "approved"
project_type: "landing-page"
project_state: "new"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "light"
primary_language: "tr"
created_at: "2026-08-17T02:39:21+03:00"
updated_at: "2026-08-17T02:40:00+03:00"
approved_at: "2026-08-17T02:40:00+03:00"
approved_by: "user"
supersedes: ""
source_type: "project-start-scenario"
source_count: 1
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `approved` durumundadır ve kullanıcının canonical explicit user approval'ı ile kesinleşmiştir.

---

## 1. Original Brief

```text
Trakya Teknik Makine için firmanın ne yaptığını hızlı anlatan, hizmetlerini güçlü biçimde sunan ve proaktif satış görüşmesinde gösterilebilecek modern, profesyonel bir kurumsal frontend web sitesi demosu (landing page) hazırlanması. Proje kaynağı `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` self-contained project source truth olarak esas alınmıştır. Doğrulanmış factual bilgiler: Firma adı (Trakya Teknik Makine), Statü (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi), Hizmet 1 (Yedek Parça Temini), Hizmet 2 (Yerinde Teknik Destek), Hizmet 3 (Makine Bakım ve Onarım), Bölge bağlamı (Trakya bölgesi, endüstriyel/makine teknik servis bağlamı).
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page`
- **Project State:** `new`
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (standard):** Ajanların ek mimari planlama yapmadan projeyi anlayabilmesi, frontend demo yapısını, static/local content boundary'sini ve wave adımlarını doğrudan uygulayabilmesi için gereken agent-ready minimum seviyedir.
- **Design (light):** Endüstriyel/teknik kurumsal kimliği yansıtan modern tipografi, kompozisyon, renk paleti, yüzey dili ve responsive layout kurallarını tanımlar. Lacivert hero + 3 kart klişesinden uzak, özgün visual direction sunar.

> `design_planning` için `none` profile yoktur. UI/UX taşıyan kurumsal tanıtım / demo projelerinde `light` minimum geçerli kanonik tasarım profildir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya bölgesinde makine bakım/onarım, yedek parça temini ve yerinde teknik destek arayan endüstriyel işletmelere Trakya Teknik Makine'nin uzmanlığını ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü sunan modern, güven veren bir kurumsal frontend web sitesi demosu hazırlamak.

### Problem

Trakya Teknik Makine için proaktif satış görüşmelerinde gösterilebilecek, firmanın hizmetlerini ve yetkili servis statüsünü güçlü biçimde yansıtan modern ve profesyonel bir web varlığının bulunmaması.

### Purpose

Trakya Teknik Makine adını, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi unvanını ve doğrulanmış üç temel hizmeti profesyonel, güven veren ve etkileyici bir dijital sunuma dönüştürmek ve güçlü bir satış demosu oluşturmak.

### Success Criteria

- Demo ilk bakışta modern, profesyonel ve endüstriyel/teknik uzmanlık odaklı görünmeli.
- Generic kurumsal template veya "lacivert hero + 3 kart" klişesi hissi vermemeli.
- Firma adı, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü ve Trakya bölgesi bağlamı hızlı ve net anlaşılmalı.
- Doğrulanmış üç temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel hiyerarşiyle açıkça sunulmalı.
- İletişim CTA yüzeyleri (telefon/e-posta) direct-contact capability olarak erişilebilir olmalı.
- Masaüstü ve mobil deneyim satış görüşmesinde sunulabilir yüksek kalitede olmalı.
- Source-backed olmayan firma iddiası, marka/stok/parça garantisi, mobil filo/SLA/acil müdahale süresi, periyodik bakım/revizyon/pres türü detay, adres/çalışma saati/sertifika/referans uydurulmamalı.
- Eksik bilgiler open question olarak korunmalı; tasarımı doldurmak uğruna uydurma placeholder veri veya qualifier kullanılmamalı.
- Frontend mimarisi gelecekte gerçek backend veya veri kaynaklarına geçişi gereksiz yeniden yazım olmadan destekleyecek temiz service/data-access boundary'sine sahip olmalı.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler, yedek parça temini arayan makine ve ekipman kullanıcıları, yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Kullanıcılar:** Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları, Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

### Core Flows

1. Ziyaretçi sayfanın Trakya Teknik Makine'ye ait kurumsal tanıtım yüzeyi olduğunu hızla anlar.
2. Ziyaretçi firmanın Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olduğunu görür.
3. Ziyaretçi üç approved hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) inceleyebilir.
4. Ziyaretçi approved direct-contact CTA'ları (telefon/e-posta) üzerinden iletişim kanallarına kolayca ulaşabilir.

---

## 5. Scope Boundaries

### In Scope

- Modern ve responsive kurumsal frontend demo (landing page).
- Ana kurumsal tanıtım yüzeyi.
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu.
- Üç temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) güçlü görsel sunumu.
- Telefon/e-posta direct-contact CTA yüzeyleri (exact değerler approved source truth mevcutsa veya kullanıcı tarafından sağlandığında kullanılır; uydurulmaz).
- Mock/local içerik için temiz frontend service/data-access boundary.
- Satış görüşmesinde gösterilebilecek tamamlanmış görsel deneyim.

### Out of Scope

- Gerçek admin paneli / CMS.
- Backend, veritabanı veya gerçek API uygulaması.
- Authentication / kullanıcı girişi.
- E-ticaret / online ödeme.
- Canlı harita entegrasyonu.
- WhatsApp entegrasyonu / canlı sohbet.
- Gerçek form submit backend'i.
- Production deployment / domain / hosting geçişi.
- Source dosyada bulunmayan yeni firma iddiaları, hizmet alt kapsamları (stok, orijinal parça, belirli marka, mobil filo, acil müdahale, SLA, periyodik bakım, revizyon vb.), sertifikalar, referanslar veya teknik yetkinlikler.

### Future Possibilities

- Müşteri onayından ve satış görüşmesinden sonra eklenebilecek gerçek backend, CMS/admin paneli, canlı harita, WhatsApp entegrasyonu, form submit backend'i, production deployment ve doğrulanmış firma detayları (adres, telefon, e-posta, çalışma saatleri, sertifikalar, referanslar).

> Future scope bugünkü committed scope gibi koda/tasarıma dahil edilemez.

---

## 6. Existing Project Context

### Current Reality

N/A (`project_state: new`). Trakya Teknik Makine için sıfırdan yeni frontend demo geliştirilecektir.

### Target State

N/A (`project_state: new`).

### Transition Scope

N/A (`project_state: new`).

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- İlk aşama kurumsal frontend demo olacaktır.
- Kesin frontend stack Product Engine package/technical resolution aşamasında belirlenecektir. (Satış demosu continuation beklentisi taşıdığından v0.2.2 Continuation-Ready Stack Guard uygulanacaktır).
- Clean frontend service/data-access boundary korunacaktır.
- Sahte backend endpoint, veritabanı şeması veya production integration kontratı üretilmeyecektir.

### Current Data Source Reality

- Presentation data config / local static source structure.

### Service / Data-Access Boundary Expectation

- Presentation component'lerinden izole edilmiş, konfigürasyon/mock adaptör katmanı boundary'si.

### Future Backend / Integration Context

- Gelecekte gerçek backend veya CMS bağlandığında UI bileşenlerini yeniden yazmadan veri adaptörünün güncellenebileceği temiz mimari sınır.

### Unresolved Technical Decisions

- Exact frontend framework ve build tooling (Engine resolution aşamasında deterministic continuation gate ile netleşecektir).

---

## 8. Design Context

### Known Brand / Design Inputs

- Factual Allowlist:
  - Firma Adı: Trakya Teknik Makine
  - Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
  - Hizmet 1: Yedek Parça Temini
  - Hizmet 2: Yerinde Teknik Destek
  - Hizmet 3: Makine Bakım ve Onarım
  - Bölge: Trakya bölgesi, endüstriyel/makine teknik servis bağlamı
- Logo ve spesifik kurumsal renk varlıkları source material'de bulunmamaktadır; modern endüstriyel tasarım yönü uygulanacaktır.

### Desired Character / Perception

- Modern, temiz, profesyonel endüstriyel/teknik kurumsal dil. Güven, teknik uzmanlık, hızlı çözüm algısı ve profesyonellik öne çıkacaktır. ("Hızlı çözüm" algısal tasarım hedefidir; SLA veya operasyonel süre iddiası değildir).

### Explicit Preferences / Constraints

- Sektör klişesi "lacivert hero + 3 kart + standart footer" KULLANILMAYACAKTIR.
- Source dosyada bulunmayan qualifier'lar (`stok`, `orijinal parça`, `mobil filo`, `acil müdahale`, `SLA`, `periyodik bakım`, `revizyon` vb.) tasarıma veya metinlere eklenmeyecektir.

### Differentiation Notes

- Özgün tipografi, dengeli kompozisyon, güçlü görsel hiyerarşi, kontrollü motion ve endüstriyel karakter taşıyan modern yüzey tasarımı.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start-scenario | High (Canonical Source Truth) | Primary Project Source Material |

- `source_count`: 1

---

## 10. Known Decisions

- Satış demosu amacıyla proaktif kurumsal frontend demo (landing page) üretilecek.
- Delivery Profile: `Prototype`, Implementation Planning: `standard`, Design Planning: `light`.
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü öne çıkarılacak.
- Doğrulanmış üç hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) sunulacak; uydurma qualifier eklenmeyecek.
- Direct-contact CTA (telefon/e-posta) capability planlanacak; exact değerler source truth olmadan uydurulmayacak.
- Clean frontend service/data-access boundary korunacak.

---

## 11. Assumptions

- **ASM-01:** Projenin Türkçe (`tr`) dilinde profesyonel kurumsal landing page olarak sunulması. (Status: Validated / Safe)
- **ASM-02:** Trakya bölgesi bağlamının genel bölge düzeyinde sunulması, spesifik şehir/ilçe/adres iddiasına dönüştürülmemesi. (Status: Validated / Safe)
- **ASM-03:** Gelecekte eklenecek gerçek içerik ve backend için modüler bir içerik konfigürasyonu/adaptör yapısının hazırlanması. (Status: Validated / Safe)

---

## 12. Conflicts

- Herhangi bir çelişki bulunmamaktadır.

---

## 13. Open Questions / Unresolved Items

- **OQ-01:** Trakya Teknik Makine için exact telefon numarası, e-posta adresi ve fiziksel adres bilgileri nelerdir? (Müşteri onayından sonra eklenecek)
- **OQ-02:** Resmi logo, kurumsal renk kodları ve marka görselleri mevcut mudur?
- **OQ-03:** Hizmetler için doğrulanmış ek teknik detay, katalog veya fotoğraflar sağlanacak mıdır?
- **OQ-04:** Referanslar, müşteri yorumları veya sertifika bilgileri ileride eklenecek midir?
- **OQ-05:** Future scope'ta form, harita, WhatsApp veya CMS/admin paneli istenecek midir?

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-17T02:40:00+03:00
- **Approved By:** user

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light | standard | full` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı me status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru.
- [x] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [x] `approved_by: user` yalnızca 10. koşul için doğrudan kanıt varsa yazılmıştır.
