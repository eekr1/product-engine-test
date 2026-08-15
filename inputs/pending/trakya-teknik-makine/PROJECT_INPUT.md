---
input_id: "INPUT-TRAKYA-TEKNIK-MAKINE-V1"
project_name: "Trakya Teknik Makine Kurumsal Web Sitesi Demo"
project_slug: "trakya-teknik-makine"
input_version: "1"
status: "pending"
project_type: "landing-page"
project_state: "new"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "light"
primary_language: "tr"
created_at: "2026-08-15"
updated_at: "2026-08-15"
approved_at: null
approved_by: null
supersedes: null
source_type: "project-start"
source_count: 1
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `pending` durumunda generation başlatılamaz. `approved` yalnız canonical explicit user approval ile oluşabilir; IDE/tool/plan auto-approval geçerli değildir.

---

## 1. Original Brief

```text
Trakya Teknik Makine için firmanın ne yaptığını hızlı anlatan, hizmetlerini güçlü biçimde sunan ve satış görüşmesinde gösterilebilecek modern bir kurumsal frontend demo hazırlanacaktır.

Firma Bilgisi & Approved Facts:
- Firma Adı: Trakya Teknik Makine
- Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
- Ana Hizmet 1: Yedek Parça Temini
- Ana Hizmet 2: Yerinde Teknik Destek
- Ana Hizmet 3: Makine Bakım ve Onarım
- Faaliyet Bağlamı: Trakya bölgesi endüstriyel/makine teknik servis bağlamı

Proje Kapsamı & Kısıtlar:
- Proaktif satış demosu / kurumsal frontend demo
- Production backend, CMS, veritabanı, auth, ödeme, canlı harita, WhatsApp entegrasyonu, gerçek form submit backend kapsam dışıdır.
- Source dosyada bulunmayan ek hizmet qualifier'ları (stok, orijinal parça, mobil filo, acil müdahale, SLA, periyodik bakım, revizyon vb.), sertifika, referans, adres veya çalışma saati iddiaları uydurulmayacaktır.
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

- **Implementation:** `standard` — Proje bir kurumsal frontend demo niteliğindedir. Tesis edilecek temiz component ve service/data-access boundary mimarisi ile Wave planının doğrudan ve ikinci bir planlama turuna ihtiyaç duymadan uygulanabilir olması sağlanır.
- **Design:** `light` — Kurumsal tanıtım ve satış demosu odaklıdır. Generic hazır şablon görünümünden kaçınılarak endüstriyel/teknik güven hissi veren, tipografi ve kompozisyon kalitesi yüksek, responsive görsel düzen sunulur.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin kurumsal kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve 3 temel hizmetini proaktif satış görüşmelerinde etkileyici biçimde sergileyen modern kurumsal frontend demo sitesidir.

### Problem

Firmanın potansiyel müşterilere ve satış görüşmelerine sunabileceği, hizmet kapsamını ve yetkili servis güvencesini anında net ve profesyonel biçimde aktaran modern bir dijital vitrinin bulunmaması.

### Purpose

Trakya Teknik Makine'nin nitelikli servis/parça hizmetlerini ve yetkili servis statüsünü vurgulayan, hızlı anlaşılır, görsel açıdan güven veren ve doğrudan iletişim kanallarına yönlendiren responsive frontend demo üretmek.

### Success Criteria

- Demo ilk bakışta modern, endüstriyel ve profesyonel görünmeli.
- Generic kurumsal şablon/lacivert hero klişesi hissi vermemeli.
- Firma adı, yetkili servis statüsü ve 3 approved hizmet ilk etkileşimde açıkça anlaşılmalı.
- Mobil ve masaüstünde eksiksiz responsive deneyim sunulmalı.
- Approved iletişim kanallarına (telefon/e-posta CTA) kolayca erişilebilmeli.
- Source dosya harici uydurma firma/hizmet verisi veya iddia içermemeli.
- Frontend mimarisi gelecekte gerçek backend/data adapter'ına geçişi gereksiz yeniden yazım olmadan desteklemeli.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım/onarım, yedek parça temini ve yerinde teknik destek arayan işletmeler ve makine kullanıcıları.
- **İkincil Kullanıcılar:** Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları.

### Core Flows

1. **Kurumsal Tanıtım & Yetkili Servis Statüsü İnceleme:** Ziyaretçi siteye girdiğinde firmanın Trakya Teknik Makine olduğunu ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü anında kavrar.
2. **Hizmet Kapsamı İnceleme:** Ziyaretçi 3 temel hizmeti (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) detaylı görsel kartlar/yüzeyler üzerinden inceler.
3. **Doğrudan İletişim Yönlendirmesi:** Ziyaretçi doğrudan telefon veya e-posta CTA yüzeylerini kullanarak firmayla iletişime geçmeye yönlendirilir.

---

## 5. Scope Boundaries

### In Scope

- Responsive (masaüstü & mobil) kurumsal frontend demo.
- Ana kurumsal tanıtım arayüzü ve navigasyon.
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünün vurgulanması.
- 3 approved hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel ve metinsel sunumu.
- Telefon ve e-posta direct-contact CTA yüzeyleri.
- Mock/local veri için temiz frontend service/data-access boundary katmanı.

### Out of Scope

- Gerçek admin paneli / CMS.
- Backend, veritabanı veya gerçek API uygulaması.
- Kimlik doğrulama (Authentication).
- E-ticaret / online ödeme.
- Canlı harita entegrasyonu.
- WhatsApp entegrasyonu.
- Gerçek form submit backend'i.
- Production deployment / domain / hosting kurulumu.
- Source dosyada yer almayan firma iddiaları (stok garantisi, mobil filo, acil müdahale SLA, periyodik bakım/revizyon detayları, sertifikalar, referanslar, adres vb.).

### Future Possibilities

- Gerçek backend ve dinamik veri yönetimi (CMS / Admin).
- Canlı harita ve lokasyon servisleri entegrasyonu.
- İletişim formu mesajlarının backend'e iletilmesi / WhatsApp kanalı.
- Müşteri referansları, sertifika galerisi ve vakalardan örnekler (müşteri tarafından sağlandığında).

---

## 6. Existing Project Context

### Current Reality

N/A (Proje `project-state: new` modundadır. Mevcut bir codebase veya CMS bulunmamaktadır.)

### Target State

N/A

### Transition Scope

N/A

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Frontend demo projesidir.
- Çıktı kolay çalıştırılabilir, bağımsız ve satış demosu sunumuna uygun olmalıdır.
- Katı frontend kütüphane/runtime seçimi Engine package resolution adımında kesinleştirilecektir (stack-neutral).

### Current Data Source Reality

- Gerçek veritabanı veya API yoktur.
- İçerik mock/local data layer üzerinden yönetilecektir.

### Service / Data-Access Boundary Expectation

- UI bileşenleri mock veriye doğrudan erişmeyecek; bir frontend service/data-access boundary (adapter pattern) üzerinden veri okuyacaktır.

### Future Backend / Integration Context

- Gelecekte gerçek REST API veya CMS bağlandığında UI katmanında değişiklik yapılmasına gerek kalmadan yalnızca data adapter güncellenecektir.

### Unresolved Technical Decisions

- Kesin build/bundle aracı ve stil mimarisi (Engine package resolution aşamasında belirlenecektir).

---

## 8. Design Context

### Known Brand / Design Inputs

- **Firma Adı:** Trakya Teknik Makine
- **Yetkili Servis:** Disan Hidrolik Makine Trakya Bölge Yetkili Servisi

### Desired Character / Perception

- Modern, temiz, güven veren endüstriyel/teknik kurumsal görünüm.
- Hızlı çözüm ve teknik uzmanlık algısı (operasyonel SLA claim'i olmaksızın).

### Explicit Preferences / Constraints

- Generic "lacivert hero + 3 kart + varsayılan footer" sektör klişesinden kaçınılacaktır.
- Tipografi, kompozisyon, yüzey kontrastı ve responsive düzen projeye özgü tasarlanacaktır.

### Differentiation Notes

- Hazır şablon hissi vermeyen, endüstriyel güvenilirlik ve yetkili servis vurgusunu harmanlayan özgün görsel dil.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start-material | High | Authoritative intake project truth material |

---

## 10. Known Decisions

- Proje bir proaktif satış görüşmesi demosudur.
- Delivery profile `Prototype`, implementation planning `standard`, design planning `light` olarak kabul edilmiştir.
- Factual allowlist kesinlikle `TRAKYA_TEKNIK_MAKINE_PROJECT.md` ile sınırlıdır.
- Temiz frontend service/data boundary ilk demo mimarisine dahil edilecektir.

---

## 11. Assumptions

| Assumption ID | Alan | Yapılan Varsayım | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| ASM-001 | `primary_language` | Türkçe (`tr`) | safe | Firma Trakya bölgesinde faaliyet göstermektedir. | Proje Bağlamı | pending_review |
| ASM-002 | `project_type` | `landing-page` | safe | Kurumsal tanıtım ve sergileme odaklı web sitesi. | Proje Bağlamı | pending_review |
| ASM-003 | `contact_values` | Direct-contact CTA'ları placeholder / schema formatında tutulacak | bounded | Source dosyada spesifik tel/e-posta numarası/adresi verilmemiştir. | Proje Kısıtları | pending_review |

---

## 12. Conflicts

*Henüz tespit edilen veya çözülmemiş çelişki bulunmamaktadır.*

---

## 13. Open Questions / Unresolved Items

- **OQ-001:** Yüksek kaliteli logo veya kurumsal marka materyalleri mevcut mu, yoksa demo için vektörel/tipografik marka sunumu mu kullanılacak?
- **OQ-002:** Demo aşamasında gösterilmek üzere spesifik bir e-posta veya telefon numarası sağlanacak mı?
- **OQ-003:** İleriki aşamalarda 3 ana hizmete ilişkin ek görsel veya teknik açıklama materyali eklenecek mi?

---

## 14. Approval & Verification

- **Status:** `pending`
- **Approved At:** null
- **Approved By:** null

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light` olarak belirlendi.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Scope sınırları (In Scope / Out of Scope / Future) net biçimde ayrıldı.
- [x] Critical conflict bulunmuyor.
- [x] Assumption'lar kaydedildi ve status'ları `pending_review`.
- [x] Secret / machine-dependent path içermiyor.
- [x] `source_count` doğru (1).
- [ ] Explicit user approval bekleniyor (IDE/tool/plan auto-approval kabul edilmez).
- [ ] `approved_by: user` kaydı açık kullanıcı onayı sonrası yazılacak.
