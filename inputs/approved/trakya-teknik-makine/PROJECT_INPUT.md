---
input_id: "INPUT-TRAKYA-TEKNIK-MAKINE-V1"
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
created_at: "2026-08-13T04:24:14+03:00"
updated_at: "2026-08-13T04:25:48+03:00"
approved_at: "2026-08-13T04:25:48+03:00"
approved_by: "user"
supersedes: ""
source_type: "project-start-scenario"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical approved project truth girdisidir. `approved` durumundadır. Explicit user approval alınmıştır.

---

## 1. Original Brief

```text
Product Engine üzerinden Trakya Teknik Makine kurumsal web sitesi yenileme demo projesi başlatılıyor.
Kaynak: project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md

Mevcut web sitesini (https://www.trakyateknikmakine.com/) temel alarak, firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend satış demosu hazırlanması hedeflenmektedir.
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

- **Implementation:** Delivery profile `Prototype` olsa dahi implementation planning seviyesi otomatik olarak düşürülmez. Yetkin yeni bir ajanın koda doğrudan başlayabilmesi için agent-ready minimum seviye olan `standard` profili seçilmiştir.
- **Design:** Satış görüşmesinde güçlü bir ilk izlenim yaratmak ve generic template klişelerinden kaçınmak amacıyla projeye özgü bir görsel yön tanımlayan `light` design planning profili seçilmiştir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut SITE123 tabanlı web sitesini; doğrulanmış firma, hizmet ve yetkili servislik bilgilerini koruyarak modern, responsive ve yüksek kurumsal güven sunan bir frontend satış demosu olarak yeniden ele alma çalışması.

### Problem

Mevcut web sitesi firmanın temel bilgilerini sunmakla birlikte görsel sunum, kurumsal algı, içerik hiyerarşisi ve potansiyel müşteri satış görüşmesinde yaratacağı ilk izlenim açısından modernleştirilmeye muhtaçtır.

### Purpose

Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini koruyarak daha güçlü, modern, profesyonel ve satış görüşmesinde gösterilebilir bir kurumsal web sitesi demosu hazırlamak.

### Success Criteria

- Demo ilk bakışta mevcut siteden belirgin biçimde daha modern ve profesyonel görünmeli.
- Tasarım generic kurumsal demo template'i hissi vermemeli; projeye özgü ayırt edilebilir bir visual concept taşımalı.
- Firma ve üç ana hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ile Disan Hidrolik Yetkili Servisliği hızlıca anlaşılmalı.
- Kullanıcı iletişim noktalarına kolay ulaşabilmeli.
- Mobil ve masaüstü görünüm satış görüşmesinde gösterilecek kaliteye sahip olmalı.
- Demo gerçek firma bilgilerini korurken kanıtlanmamış bilgi üretmemeli.
- Frontend yapısı, sonradan gerçek data/backend entegrasyonuna geçişi gereksiz yeniden yazım olmadan desteklemeli.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım, onarım veya teknik servis ihtiyacı olan işletmeler; yedek parça temini arayan makine ve ekipman kullanıcıları; yerinde teknik destek arayan müşteriler.
- **İkincil Kullanıcılar:** Güvenilirlik ve hizmet kapsamı araştıran satın alma/operasyon sorumluları; iletişim kurmak isteyen mevcut müşteriler.

### Core Flows

1. **Ana Sayfa Keşfi:** Ziyaretçi firmanın ne yaptığını, yetkili servisliğini ve güven unsurlarını anlar.
2. **Hizmet İnceleme:** Ziyaretçi üç ana hizmet alanını (Yedek Parça, Yerinde Destek, Bakım & Onarım) detaylıca inceler.
3. **Yetkili Servis Doğrulama:** Ziyaretçi firmanın Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi olduğunu görür.
4. **İletişim Kurma:** Ziyaretçi telefon veya e-posta CTA'ları üzerinden firmaya hızla ulaşır.

---

## 5. Scope Boundaries

### In Scope

- Modern ve responsive kurumsal frontend demo.
- Ana sayfa ve gerekli görülen kurumsal/hizmet/iletişim bölümleri.
- Mevcut gerçek firma içeriğinin yeniden organize edilmesi.
- Firmanın hizmetlerinin ve Disan Hidrolik Yetkili Servisliğinin güçlü şekilde sunulması.
- Satış görüşmesinde gösterilebilecek tamamlanmış görsel deneyim.
- Telefon/e-posta gibi temel iletişim CTA'ları.
- Temiz service/data boundary (mock adapter hazırlığı).

### Out of Scope

- Gerçek admin paneli / CMS.
- Backend ve veritabanı uygulaması.
- Gerçek kullanıcı hesabı veya authentication.
- Online ödeme veya e-ticaret.
- Müşteri tarafından doğrulanmamış yeni firma iddiaları, referanslar veya teknik yetkinlikler.
- Production deployment ve mevcut domainin taşınması.

### Future Possibilities

- Gerçek backend/data kaynağı entegrasyonu.
- Yönetim paneli.
- Canlıya alma ve domain/hosting geçişi.

---

## 6. Existing Project Context

### Current Reality

Mevcut web sitesi (`https://www.trakyateknikmakine.com/`) SITE123 altyapısında yayındadır. Ana sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler ve İletişim içeriklerini barındırmaktadır. Firma, Disan Hidrolik Makine Trakya Bölge Yetkili Servisidir. Üç ana hizmet sunmaktadır: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım.

### Target State

Mevcut firmanın gerçek bilgilerini koruyan, SITE123 şablon kısıtlarından arınmış, modern tipografi ve komponent mimarisine sahip, satış görüşmesine hazır agent-ready frontend demo.

### Transition Scope

Mevcut siteden firma adı, yetkili servis unvanı, 3 ana hizmet başlığı ve iletişim bilgileri kaynak olarak aktarılır. Görsel tasarım, arayüz mimarisi ve kod yapısı tamamen yenilenir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Hızlı geliştirilebilir, kolay çalıştırılabilir frontend demo.
- Presentation katmanı iş mantığı veya veriye sert bağımlı olmayacak; temiz service/data boundary dondurulacaktır.
- Gelecekte gerçek backend geldiğinde UI katmanı yeniden yazılmayacaktır.
- Sahte endpoint, sahte DB şeması veya backend contract'ı uydurulmayacaktır.

### Current Data Source Reality

Mock / local static data (frontend mock adapter).

### Service / Data-Access Boundary Expectation

UI komponentleri veriyi doğrudan sabit array'lerden almak yerine bir data/service boundary (adapter interface) üzerinden tüketecektir.

### Future Backend / Integration Context

Gelecekte mock adapter yerine real API adapter bağlanması desteklenecektir.

### Unresolved Technical Decisions

Exact frontend framework/library (React + Vite, Vanilla JS vb.) Engine resolution aşamasında belirlenecektir.

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma Unvanı: Trakya Teknik Makine
- Yetkili Servislik: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi

### Desired Character / Perception

Endüstriyel güven, teknik uzmanlık, hızlı çözüm, profesyonellik ve modern kurumsallık.

### Explicit Preferences / Constraints

- Mevcut SITE123 tasarımı kopyalanmayacaktır.
- "Sanayi = otomatik koyu lacivert" gibi sektör klişelerine otomatik olarak düşülmeyecektir.
- Tipografi, kompozisyon ve spacing ile özgün bir visual concept oluşturulacaktır.

### Differentiation Notes

Tasarım generic bir Bootstrap/Tailwind corporate template hissi vermemeli; Trakya Teknik Makine'ye özel teknik yetkinlik vurgusu taşımalıdır.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| `SRC-001` | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Source Brief | Yüksek | Proje başlangıç senaryosu, kısıtlar ve hedefler |
| `SRC-002` | `https://www.trakyateknikmakine.com/` | Existing Website | Yüksek | Mevcut firma bilgileri, hizmet tanımları ve servis unvanı |

---

## 10. Known Decisions

- İlk sürüm doğrudan bir satış görüşmesinde sunulacak frontend demo olacaktır.
- Proje `existing` sınıfındadır; mevcut firmanın doğrulanmış gerçekliği korunacaktır.
- Doğrulanmamış firma iddiası veya uydurma referans eklenmeyecektir.
- Frontend mimarisi throwaway yapılmayacak, clean integration boundary korunacaktır.

---

## 11. Assumptions

- **ASM-001:** `primary_language` = `tr` (Gerekçe: Proje hedef kitlesi Trakya bölgesi ve kaynak metinler Türkçe. Safe assumption.) | Durum: `confirmed` (Explicit user approval ile donduruldu)
- **ASM-002:** `project_type` = `landing-page` (Gerekçe: Tanıtım ve hizmet sunumu odaklı kurumsal web sitesi demo yapısı. Bounded assumption.) | Durum: `confirmed` (Explicit user approval ile donduruldu)

---

## 12. Conflicts

- **Çelişki:** Mevcut sitenin SITE123 görsel tasarımı ile hedeflenen modern kurumsal demo görünümü.
- **Çözüm:** Mevcut sitenin görsel kararları yetkili kabul edilmez; yalnızca metinsel ve kurumsal gerçeklikleri (hizmetler, servislik) aktarılır. Visual direction yenilenir.

---

## 13. Open Questions / Unresolved Items

- **OQ-001:** Yüksek çözünürlüklü marka logo varlıkları mevcut mu? (Demo için SVG/CSS marka logosu ile çözülecektir.)
- **OQ-002:** Teklif al veya WhatsApp gibi ek iletişim kanalları demoya eklenecek mi? (Intake approval ve design aşamasında değerlendirilebilir.)

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** "2026-08-13T04:25:48+03:00"
- **Approved By:** "user"

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable olduğu için `design_planning` `light` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları `confirmed`.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` (2) doğru.
- [x] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [x] `approved_by: user` için doğrudan approval kanıtı var.
