---
input_id: "INPUT-FIZYOTERAPIST-EDA-PALA-V1"
project_name: "Fizyoterapist Eda Pala Web Sitesi Demo"
project_slug: "fizyoterapist-eda-pala"
input_version: "1"
status: "approved"
project_type: "landing-page"
project_state: "new"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "light"
primary_language: "tr"
created_at: "2026-08-17T00:50:23+03:00"
updated_at: "2026-08-17T00:50:52+03:00"
approved_at: "2026-08-17T00:50:52+03:00"
approved_by: "user"
supersedes: ""
source_type: "project-start-scenario"
source_count: 1
---

# Project Input: Fizyoterapist Eda Pala Web Sitesi Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `approved` durumu kullanıcının explicit onayı ile kesinleşmiştir ve immutable'dır.

---

## 1. Original Brief

```text
Fizyoterapist Eda Pala için proaktif satış görüşmelerinde kullanılmak üzere modern, güven veren ve profesyonel bir frontend web sitesi demosu (landing page) hazırlanması. Proje kaynağı `project-start/projects/fizyoterapist-eda-pala/FIZYOTERAPIST_EDA_PALA_PROJECT.md` self-contained project truth olarak esas alınmıştır. Doğrulanmış factual bilgiler: İsim (Eda Pala), Mesleki unvan (Fizyoterapist), Konum bağlamı (Tekirdağ), Instagram URL'si (outbound link).
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Fizyoterapist Eda Pala Web Sitesi Demo
- **Project Slug:** `fizyoterapist-eda-pala`
- **Project Type:** `landing-page`
- **Project State:** `new`
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (standard):** Ajanların ek mimari planlama yapmadan projeyi anlayabilmesi, frontend demo yapısını, static/local content boundary'sini ve wave adımlarını doğrudan uygulayabilmesi için gereken agent-ready minimum seviyedir.
- **Design (light):** Profesyonel kişisel dijital profil için modern tipografi, dengeli kompozisyon, sakin renk paleti ve responsive layout kurallarını tanımlar. Sektör klişelerinden uzak, özgün visual direction sunar.

> `design_planning` için `none` profile yoktur. UI/UX taşıyan landing page projelerinde `light` minimum geçerli kanonik tasarım profildir.

---

## 3. Problem, Purpose & Success

### Project Summary

Tekirdağ'daki Fizyoterapist Eda Pala için, mevcut doğrulanmış bilgilerle çalışan; modern, güven veren ve profesyonel bir frontend web sitesi demosu hazırlamak.

### Problem

Fizyoterapist Eda Pala için proaktif satış görüşmesinde gösterilebilecek, kişisel dijital markasını ve unvanını temsil eden modern bir web varlığının bulunmaması.

### Purpose

Eda Pala adını, `Fizyoterapist` unvanını ve `Tekirdağ` konum bağlamını profesyonel ve güven veren bir dijital sunuma dönüştürmek ve güçlü bir satış demosu oluşturmak.

### Success Criteria

- Demo ilk bakışta modern, profesyonel ve kişisel marka odaklı görünmeli.
- Generic sağlık/klinik template veya klişe hissi vermemeli.
- Eda Pala adı, `Fizyoterapist` unvanı ve `Tekirdağ` konum bağlamı hızlı ve net anlaşılmalı.
- Ziyaretçi kullanıcı tarafından sağlanan Instagram profiline (`https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`) outbound CTA ile kolayca ulaşabilmeli.
- Masaüstü ve mobil deneyim satış görüşmesinde sunulabilir kalitede olmalı.
- Source-backed olmayan uzmanlık, tedavi alanı, hastalık, eğitim, klinik veya sağlık sonucu iddiası içermemeli.
- Eksik bilgiler open question olarak korunmalı; tasarımın dolu görünmesi uğruna uydurma placeholder içerik kullanılmamalı.
- Frontend yapısı gelecekte doğrulanmış veriler eklendiğinde yeniden yazım gerektirmeyen temiz içerik konfigürasyonu sınırına sahip olmalı.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Ziyaretçiler:** Tekirdağ bağlamında bir fizyoterapist hakkında temel profesyonel bilgi arayan potansiyel ziyaretçiler ve Fizyoterapist Eda Pala'nın dijital profilini incelemek isteyen kişiler.
- **İkincil Ziyaretçiler:** Fizyoterapist Eda Pala ile iletişim kurmak veya Instagram profilini incelemek isteyen kişiler.

> Ziyaretçilerin klinik alt segmentlere (spesifik hastalık/tedavi ihtiyacı) ayrılması source truth kapsamında doğrulanmadığından hedef kullanıcılar klinik alt kategorilere bölünmez.

### Core Flows

1. Ziyaretçi sayfanın Fizyoterapist Eda Pala'ya ait profesyonel tanıtım yüzeyi olduğunu hızla anlar.
2. Ziyaretçi `Fizyoterapist` unvanını ve `Tekirdağ` konum bağlamını görür.
3. Ziyaretçi outbound CTA butonu/bağlantısı üzerinden Instagram profiline yönlenir.
4. Gelecekte doğrulanmış veriler eklendiğinde genişleyebilir responsive navigasyon ve sayfa akışını deneyimler.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive profesyonel frontend demo (landing page).
- Eda Pala adı, `Fizyoterapist` unvanı ve `Tekirdağ` konum bağlamının güçlü sunumu.
- Kullanıcı tarafından sağlanan Instagram profiline outbound CTA/link.
- Temiz frontend mimarisi ve local content configuration boundary.

### Out of Scope

- Kaynakta bulunmayan tedavi/hizmet alanları, hastalık/rahatsızlıklar, tanı/tedavi yöntemleri, sağlık sonucu iddiaları.
- Eğitim, üniversite, sertifika, uzmanlık, deneyim yılı veya mesleki başarı iddiaları.
- Klinik adı, klinik adresi, telefon, e-posta, çalışma saatleri veya fiyat bilgisi.
- Hasta yorumları, referanslar, başarı oranları, önce/sonra görselleri.
- Online randevu backend'i, iletişim formu backend'i, WhatsApp entegrasyonu, canlı harita.
- Authentication, veritabanı, CMS, admin paneli, production deployment / domain / hosting.
- Tıbbi tavsiye, teşhis veya kişiye özel sağlık yönlendirmesi.

### Future Possibilities

- Müşteri tarafından doğrulandıktan sonra eklenecek gerçek hizmet listeleri, mesleki biyografi, klinik adresi, iletişim kanalları, randevu sistemi ve backend entegrasyonu.

> Future scope bugünkü committed scope gibi koda/tasarıma dahil edilemez.

---

## 6. Existing Project Context

### Current Reality

N/A (`project_state: new`). Sıfırdan yeni frontend demo geliştirilecektir.

### Target State

N/A (`project_state: new`).

### Transition Scope

N/A (`project_state: new`).

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Frontend demo (landing page). Kesin teknoloji stack'i Engine resolution adımlarında belirlenecektir.
- Static/local content configuration yapısı kullanılacaktır.
- Sahte backend, API endpoint, veritabanı şeması veya production integration kontratı üretilmeyecektir.

### Current Data Source Reality

- Local static content configuration katmanı (presentation data config).

### Service / Data-Access Boundary Expectation

- Presentation component'lerinden izole edilmiş, konfigürasyon bazlı veri adaptörü / içerik katmanı boundary'si.

### Future Backend / Integration Context

- Gelecekte gerçek backend veya randevu servisi eklendiğinde UI bileşenlerini yeniden yazmadan servis adaptörünün güncellenebileceği temiz mimari sınır.

### Unresolved Technical Decisions

- Exact frontend framework ve build tooling (Engine planning aşamasında stack-neutral safe resolution yapılacaktır).

---

## 8. Design Context

### Known Brand / Design Inputs

- Factual Allowlist: Eda Pala (İsim), Fizyoterapist (Unvan), Tekirdağ (Konum), Instagram Profile URL. Spesifik marka rengi, logo veya görseller source material'de bulunmamaktadır.

### Desired Character / Perception

- Modern, temiz, sakin, insani, güven veren ve profesyonel dijital profil hissi.

### Explicit Preferences / Constraints

- Generic sağlık klişesi "turkuaz/mavi gradient + doktor stok fotoğrafı + 3 tedavi kartı" KULLANILMAYACAKTIR.
- Tıbbi/klinik equipment veya hasta müdahale görselleri source-backed olmayan claim üretecek şekilde gösterilmeyecektir.

### Differentiation Notes

- Tipografi, kompozisyon ritmi, whitespace ve mikro etkileşimlerle desteklenen özgün visual direction.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/fizyoterapist-eda-pala/FIZYOTERAPIST_EDA_PALA_PROJECT.md` | project-start-scenario | High (Canonical Source Truth) | Primary Project Source Material |

- `source_count`: 1

---

## 10. Known Decisions

- Satış demosu amacıyla proaktif frontend web sitesi (landing page) üretilecek.
- Delivery Profile: `Prototype`, Implementation Planning: `standard`, Design Planning: `light`.
- Source allowlist dışındaki factual kişi/meslek/sağlık gerçekleri uydurulmayacak.
- Instagram URL'si yalnız outbound profile CTA'i olarak kullanılacak, dış araştırma yapılmayacak.

---

## 11. Assumptions

- **ASM-01:** Projenin Türkçe (`tr`) dilinde profesyonel bir landing page olarak sunulması. (Status: Validated / Safe)
- **ASM-02:** Tekirdağ konum bağlamının genel il düzeyinde sunulması, spesifik ilçe veya klinik adresi iddiasına dönüştürülmemesi. (Status: Validated / Safe)
- **ASM-03:** Gelecekte eklenecek doğrulanmış biyografi ve hizmet bilgileri için modüler bir içerik konfigürasyonu yapısının hazırlanması. (Status: Validated / Safe)

---

## 12. Conflicts

- Herhangi bir çelişki bulunmamaktadır.

---

## 13. Open Questions / Unresolved Items

- **OQ-01:** Eda Pala'nın doğrulanmış uzmanlık/tedavi alanları, deneyim yılı ve mesleki biyografisi nelerdir? (Müşteri onayından sonra eklenecek)
- **OQ-02:** Müşterinin logosu, profesyonel portre fotoğrafları ve kurumsal renk tercihleri var mıdır?
- **OQ-03:** İletişim için kullanılacak exact telefon numarası, e-posta ve fiziksel klinik adresi var mıdır?
- **OQ-04:** Instagram dışında onaylı randevu veya iletişim kanalı kullanılacak mıdır?

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-17T00:50:52+03:00
- **Approved By:** user

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
- [x] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [x] `approved_by: user` yalnızca 10. koşul için doğrudan kanıt varsa yazılmıştır.
