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
created_at: "2026-08-15T02:45:00+03:00"
updated_at: "2026-08-15T02:45:00+03:00"
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
Trakya Teknik Makine'nin mevcut kurumsal web sitesini (SITE123 altyapılı www.trakyateknikmakine.com), firmanın Hizmetlerini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve yetkili servis kimliğini (Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi) daha profesyonel, modern ve güven veren bir sunumla yeniden ele alan frontend kurumsal satış demosu projesi.
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page` (Çok bölümlü kurumsal tanıtım / landing-page yapısı)
- **Project State:** `existing` (Mevcut `www.trakyateknikmakine.com` canlı sitesinden firma gerçekleri türetilmiş, sıfırdan yeni frontend yazılmaktadır)
- **Delivery Profile:** `Prototype` (Satış görüşmesi amaçlı frontend gösterim demosu)
- **Implementation Planning:** `standard` (Engine agent-ready execution minimum seviyesi)
- **Design Planning:** `light` (Satış demosu için odaklı, özgün visual concept ve non-generic kalite tabanı)
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (standard):** Proje frontend satış demosu olup karmaşık backend, authentication veya mikroservis mimarisi içermemektedir. `standard` seviyesi, ajanın ek mimari planlama yapmadan execution wave'lerine başlayabilmesi için gerekli mimari sınırları, service boundary beklentilerini ve wave bağımlılıklarını eksiksiz sağlar.
- **Design (light):** Proje 1-3 ana kurumsal görünüm/bölüm içeren bir frontend demo çalışmasıdır. `light` profili, gereksiz sayfa bazlı design artifact yükü yaratmadan, projeye özgü ayırt edilebilir görsel kimlik, tipografi, renk paleti ve layout kurallarını (`DESIGN_RULES`) tanımlamak için optimum derinliği sunar. Quality floor (`non-generic`, `coherent`, `current`) `light` profilde tam olarak uygulanır.

---

## 3. Problem, Purpose & Success

### Project Summary

Mevcut SITE123 tabanlı `www.trakyateknikmakine.com` sitesindeki doğrulanmış firma bilgilerini (Disan Hidrolik yetkili servisi, 3 ana hizmet alanı, iletişim kanalları) koruyarak; potansiyel müşteri satış görüşmesinde güven verecek, modern, yüksek kaliteli ve responsive bir frontend demo geliştirmek.

### Problem

Mevcut web sitesi temel firma bilgilerini sunsa da görsel hiyerarşi, kurumsal algı, modern tipografi ve mobil görünüm açısından zayıftır. Satış görüşmesinde firmanın teknik yetkinliğini ve kurumsallığını yeterince güçlü yansıtamamaktadır.

### Purpose

Trakya Teknik Makine'nin gerçek firma kimliğini ve hizmet kapsamını koruyarak, satış görüşmesinde "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını açıkça ileten, görsel ve teknik açılardan ikna edici bir kurumsal frontend demo sunmak.

### Success Criteria

- Demo ilk bakışta mevcut SITE123 sitesinden belirgin biçimde daha modern, profesyonel ve kurumsal görünmeli.
- Tasarım generic template / klişe endüstri şablonu hissi vermemeli; projeye özgü visual concept taşımalı.
- Firma yetkili servisliği (Disan Hidrolik) ve 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım-Onarım) net anlaşılmalı.
- İletişim CTA'ları (telefon, e-posta) cihaz türüne uygun ve erişilebilir olmalı.
- Gerçek firma bilgileri (adres, telefon, yetkili servis durumu) aynen korunmalı; doğrulanmamış iddia uydurulmamalı.
- Frontend mimarisi, gelecekte gerçek data/backend entegrasyonunu presentation katmanını bozmadan destekleyecek temiz data/service boundary yapısında olmalı.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesindeki sanayi tesisleri, makine kullanıcıları, bakım/onarım ve yedek parça temini arayan işletme yetkilileri.
- **İkincil Kullanıcılar:** Güvenilirlik ve teknik yetkinlik araştırması yapan satın alma / operasyon sorumluları ve firma ile iletişime geçmek isteyen mevcut müşteriler.
- **Gösterim Kullanıcısı (Internal):** Satış görüşmesinde demoyu sunan Enis.

### Core Flows

1. **Ana Sayfa / İlk İzlenim Akışı:** Ziyaretçi siteye girdiğinde firmanın endüstriyel teknik servis identity'sini, Disan Hidrolik yetkili servis güvencesini ve 3 ana hizmeti hızlıca algılar.
2. **Hizmet İnceleme Akışı:** Ziyaretçi 3 temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) detaylarını görsel hiyerarşi ve net içerik ile inceler.
3. **Güven & Kurumsal Bilgi Akışı:** Ziyaretçi firmanın yetkili servis durumunu, kurumsal duruşunu ve teknik tecrübesini doğrular.
4. **Doğrudan İletişim Akışı:** Ziyaretçi telefon veya e-posta CTA'ları üzerinden firmaya kolayca ulaşır.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive kurumsal frontend demo (Single Page / Multi-section Landing Page mimarisi).
- Doğrulanmış firma verileri ile içerik yapısı (Hakkımızda, Hizmetlerimiz, Yetkili Servislik, İletişim).
- Odaklı ve projeye özgü `DESIGN_RULES` ile görsel sistem.
- Statik / mock data adapter üzerinden çalışan, presentation'dan ayrılmış clean data boundary.
- Cihaz uyumlu telefon (tel:) ve e-posta (mailto:) CTA'ları.

### Out of Scope

- Gerçek backend, veritabanı veya API sunucusu.
- Admin paneli / CMS entegrasyonu.
- Kullanıcı girişi / authentication / üyelik.
- Online e-ticaret / ödeme alma / sepet.
- Müşteri tarafından doğrulanmamış yeni referanslar, belgeler, hizmet iddiaları.
- Production hosting, domain DNS geçişi veya SITE123 canlı sistem müdahalesi.
- Kapsam dışı mock yetenekler: Çalışır gibi görünen ama backend'i olmayan sahte form gönderme modalları, canlı harita widget'ları, WhatsApp botları, sahte arama motorları.

### Future Possibilities

- Satış sonrası müşteri onayı alındığında gerçek içerik ve yüksek çözünürlüklü medya doğrulaması.
- İleride eklenebilecek dinamik iletişim formu API adapter'ı veya CMS entegrasyonu.
- Production deployment ve kurumsal alan adı yönlendirmesi.

---

## 6. Existing Project Context

### Current Reality

- Aktif web sitesi: `www.trakyateknikmakine.com` (SITE123 altyapısı).
- Sitede yer alan doğrulanmış bilgiler:
  - Firma unvanı: Trakya Teknik Makine
  - Yetkili Servis: Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi
  - Ana Hizmetler: 1) Yedek Parça Temini, 2) Yerinde Teknik Destek, 3) Makine Bakım ve Onarım
  - Mevcut Sayfalar/Bölümler: Ana Sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler, İletişim.

### Target State

- SITE123 bağımlılığı olmadan, modern web standartlarında inşa edilmiş, yüksek performanslı, estetik ve mobil uyumlu kurumsal frontend demo.

### Transition Scope

- Mevcut sitedeki metinler ve doğrulanmış firma bilgileri yeni frontend mimarisine aktarılacak; eski SITE123 görsel tasarımı ve kod yapısı tamamen terk edilecektir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- **Demo Delivery Purpose:** Satış görüşmesinde sorunsuz çalışacak, hızlı yüklenecek frontend gösterimi.
- **Stack Resolution:** Teknik stack engine package selection kurallarına tabidir. Unresolved stack durumunda stack-neutral safe/bounded assumption prensipi uygulanır.
- **Code Quality Baseline:** Demo amaçlı olması throwaway veya spagetti kod gerekçesi değildir; presentation katmanı temiz ve modüler tutulacaktır.

### Current Data Source Reality

- İçerik tamamen lokal yerleşik mock/json data adapter'ı üzerinden presentation katmanına beslenecektir.

### Service / Data-Access Boundary Expectation

- UI bileşenleri veriyi doğrudan sabit objelerden çekmeyecek; `MachineService` / `ContentRepository` benzeri bir abstraction katmanı üzerinden okuyacaktır. Gelecekte gerçek backend geldiğinde sadece bu adapter güncellenecektir.

### Future Backend / Integration Context

- Backend henüz kapsamda olmadığı için sahte REST/GraphQL endpoint'leri veya DB şemaları uydurulmayacaktır. Boundary sadece interface seviyesinde temiz tutulacaktır.

### Unresolved Technical Decisions

- exact build tool / framework stack (Engine resolution aşamasında belirlenecektir).

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma adı: Trakya Teknik Makine
- Sektör: Ağır sanayi, hidrolik makine bakımı, teknik servis, yedek parça.
- Resmi Yetkili Marka: Disan Hidrolik Makine.

### Desired Character / Perception

- Güven veren, teknik olarak yetkin, endüstriyel disipline sahip, modern ve dinamik kurumsal kimlik.

### Explicit Preferences / Constraints

- Mevcut SITE123 şablon tasarımı kopyalanmayacaktır.
- Sektör klişeleri (`sanayi = düz lacivert`, `klasik hero + 3 kutu + CTA`) otomatik varsayılan olarak kabul edilmeyecektir.

### Differentiation Notes

- Tipografi, kontrast, endüstriyel doku/renk balansı ve mikro-etkileşimlerle özgün bir görsel dil oluşturulacaktır.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Proje Başlangıç Belgesi | Yüksek | Proje hedefi, kapsamı, kullanıcı ve kısıt kaynağı |
| SRC-02 | `https://www.trakyateknikmakine.com/` | Mevcut Canlı Web Sitesi | Doğrulanmış Firma Bilgisi | Firma adı, hizmetler, yetkili servislik ve iletişim verisi |

- `source_count`: 2
- Absolute path veya secret bilgisi içermez.

---

## 10. Known Decisions

- Projenin teslim amacı potansiyel müşteri satış görüşmesi için frontend demo geliştirmektir.
- Proje `project_state: existing` olarak sınıflandırılmıştır (mevcut site verileri korunacaktır).
- Mevcut sitenin görsel şablonu yeni projede bağlayıcı değildir.
- Backend, DB ve admin paneli ilk demo kapsamının dışındadır.
- Engine contract'ları (`PROJECT_INTAKE.md`, `PLANNING_PROFILES.md`) harfiyen uygulanacaktır.

---

## 11. Assumptions

| Assumption ID | Alan | Yapılan Varsayım | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| ASM-001 | primary_language | Türkçe (`tr`) | safe | Firma Türkiye / Trakya bölgesinde faaliyet göstermektedir ve mevcut site Türkçedir. | Proje Bağlamı | pending_review |
| ASM-002 | target_structure | Single Page / Multi-Section Landing Page | bounded | Satış demosu için akıcı, hızlı ve bütünlüklü bir sunum sağlar. | Endüstri Standardı | pending_review |
| ASM-003 | interactive_forms | Statik CTA (tel/mailto) kullanımı | safe | Gerçek backend olmadığı için sahte form/modal yerine doğrudan iletişim CTA'ları güvenlidir. | Scope Kısıtı | pending_review |

---

## 12. Conflicts

- *Henüz tespit edilen bir critical conflict bulunmamaktadır.*

---

## 13. Open Questions / Unresolved Items

- **OQ-01:** Firmanın yüksek çözünürlüklü vektörel logosu veya orijinal kurumsal renk rehberi mevcut mu? (Demo aşamasında mevcut sitedeki görsel kimlik modernize edilerek kullanılacaktır).
- **OQ-02:** İletişim sayfasında harita widget'ı veya doğrudan WhatsApp butonu eklensin mi, yoksa sade tel/e-posta CTA yeterli mi? (Demo kapsamı için sade tel/e-posta önerilmektedir).

---

## 14. Approval & Verification

- **Status:** `pending`
- **Approved At:** 
- **Approved By:** 

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları (`pending_review`) doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (2).
- [ ] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [ ] `approved_by: user` için doğrudan approval kanıtı var.
