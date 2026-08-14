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
created_at: "2026-08-15T01:48:33+03:00"
updated_at: "2026-08-15T01:50:33+03:00"
approved_at: "2026-08-15T01:50:33+03:00"
approved_by: "user"
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
Trakya Teknik Makine'nin mevcut kurumsal web sitesini (SITE123 altyapısında yayında olan https://www.trakyateknikmakine.com/), firmanın hizmetlerini daha profesyonel, modern ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak. Demo, potansiyel satış görüşmesinde gösterilmek üzere hazırlanacaktır. Mevcut sitedeki doğrulanmış firma bilgileri (Disan Hidrolik Trakya Bölge Yetkili Servisi, Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım hizmetleri) korunacak, ancak görsel sunum ve içerik hiyerarşisi sıfırdan modern kurumsal kimlik anlayışıyla tasarlanacaktır.
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

- **Implementation:** `standard` seçilmiştir. Proje bir kurumsal frontend satış demosu olduğundan, agent-ready minimum execution planning, dalga yapısı ve mimari sınırlar gereklidir. Aşırı karmaşık production/migration belgeleri olmadan temiz uygulanabilirlik sağlar.
- **Design:** `light` seçilmiştir. UI/UX kapsamı geçerli bir kurumsal sunum sitesidir. `light` profili, gereksiz sayfa bazlı tasarım artifact'leri üretmeden projenin görsel kimliğini, tipografisini, renk palette/yüzey sistemini ve anti-template kurallarını tanımlayan güçlü bir `DESIGN_RULES` dokümanı sağlar.

> `design_planning` için `none` profile yoktur. UI/UX applicable bir proje olduğundan `light` seçilmiştir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut SITE123 web sitesindeki doğrulanmış firma ve hizmet verilerini temel alarak; potansiyel müşteri satış görüşmesinde firmanın yetkinliğini, gücünü ve modern vizyonunu en üst düzeyde yansıtacak yüksek kaliteli bir frontend kurumsal web demosu üretmek.

### Problem

Mevcut web sitesi (SITE123 altyapısı) temel firma bilgilerini sunmaktadır; ancak görsel sunum, kurumsal algı, modern tipografi, içerik hiyerarşisi ve satış görüşmesinde güven yaratacak ilk izlenim açısından günümüz standartlarının gerisindedir.

### Purpose

Trakya Teknik Makine'nin gerçek firma kimliğini ve teknik yetkinliklerini koruyarak; satış görüşmesinde "Mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını açıkça veren, modern, responsive ve görsel olarak etkileyici bir kurumsal demo sunmak.

### Success Criteria

1. İlk bakışta mevcut SITE123 sitesinden belirgin biçimde daha modern, profesyonel ve güven verici görünmesi.
2. Tasarımın generic hazır şablon klişelerinden sıyrılıp, projeye özgü endüstriyel/teknik bir karakter taşıması.
3. Firma tanıtımı ve 3 temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve Disan Hidrolik Bölge Yetkili Servisi statüsünün açıkça sunulması.
4. Telefon (`tel:`) ve e-posta (`mailto:`) iletişim noktalarının mobilde ve masaüstünde kolayca kullanılabilmesi.
5. Frontend kodunun sahte backend entegrasyonu içermeden, temiz mock/local data boundary ile geleceğe hazır (integration-ready) inşa edilmesi.
6. `implementation_planning: standard` uyarınca sonraki chat'te ajanın doğrudan uygulamaya başlayabileceği net wave planına sahip olması.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde ağır makine, hidrolik aksam, bakım/onarım, yerinde teknik destek ve yedek parça arayan işletmeler ve tesis sorumluları.
- **İkincil Kullanıcılar:** Firma güvenilirliğini ve yetkili servis durumunu araştıran satın alma yetkilileri ve iletişim arayan mevcut müşteriler.

### Core Flows

1. **Ana Sayfa Keşfi:** Ziyaretçi siteye girdiğinde firmanın ne yaptığını, Trakya bölgesindeki konumunu ve Disan Hidrolik Yetkili Servisi olduğunu anında kavrar.
2. **Hizmet İnceleme:** Ziyaretçi 3 temel hizmeti (Yedek Parça, Yerinde Destek, Bakım-Onarım) görsel hiyerarşiyle detaylıca inceler.
3. **Güven & Kurumsal Bilgi:** Ziyaretçi firmanın uzmanlığını, Trakya bölgesindeki servis gücünü ve kurumsal detaylarını inceler.
4. **Hızlı İletişim:** Ziyaretçi doğrudan telefon veya e-posta CTA'ları üzerinden firma yetkililerine ulaşır.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive frontend kurumsal demo uygulaması.
- Ana sayfa, kurumsal tanıtım, 3 temel hizmet sunumu, yetkili servis vurgusu ve iletişim erişim bölümleri.
- Mevcut sitedeki doğrulanmış firma bilgilerinin yeniden organize edilmiş modern sunumu.
- Telefon ve e-posta doğrudan erişim CTA'ları.
- Temiz mock/local data adapter ve component mimarisi (integration-ready).

### Out of Scope

- Gerçek backend, veritabanı veya API sunucu geliştirmesi.
- Admin yönetim paneli veya CMS entegrasyonu.
- Kullanıcı girişi / authentication.
- Online ödeme veya e-ticaret altyapısı.
- Canlı domain (SITE123) geçişi veya DNS/hosting operasyonları.
- Doğrulanmamış yeni firma iddiaları, sahte referanslar veya uydurma sertifikalar.

### Future Possibilities

- Satış sonrası canlıya alma ve özel domain/hosting dağıtımı.
- Yönetim paneli (CMS) eklenmesi.
- Gerçek iletişim formu backend entegrasyonu veya teklif talep modülü.
- İsteğe bağlı harita veya WhatsApp entegrasyonu.

> Future scope bugünkü committed scope gibi yazılamaz.

---

## 6. Existing Project Context

### Current Reality

- Trakya Teknik Makine'nin yayında olan `https://www.trakyateknikmakine.com/` adresli bir SITE123 sitesi vardır.
- Sitede Ana Sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler ve İletişim içerikleri mevcuttur.
- Firma, Disan Hidrolik Makine'nin Trakya bölgesindeki yetkili servisidir.
- Öne çıkan 3 hizmet: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım.

### Target State

SITE123 sınırlarından tamamen bağımsız, modern web standartlarında, görsel hiyerarşisi güçlü, responsive ve satış sunumunda fark yaratacak frontend kurumsal web demosu.

### Transition Scope

Mevcut web sitesindeki metin verileri, iletişim bilgileri ve yetkili servis statüsü kaynak gerçeklik olarak aktarılacak; eski sitenin görsel tasarımı, sayfa düzeni ve SITE123 altyapısı tamamen terk edilecektir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Frontend odaklı temiz uygulama architecture'ı.
- Yüksek performans, erişilebilirlik ve responsive esneklik.
- Tam teknik stack seçimi Engine package resolution sürecinde netleşecektir; pending aşamada stack-neutral kalınmıştır.

### Current Data Source Reality

- Doğrulanmış firma verilerini barındıran yerel mock/static data modülü.

### Service / Data-Access Boundary Expectation

- UI bileşenleri veriyi doğrudan sabit kodlamayacak; `companyService` / `contentAdapter` arabirimi üzerinden okuyacaktır. İleride gerçek backend geldiğinde UI katmanına dokunmadan API adapter'ına geçilebilecektir.

### Future Backend / Integration Context

- Gelecekte eklenebilecek REST/GraphQL API veya Headless CMS entegrasyonu.

### Unresolved Technical Decisions

- Spesifik paket yöneticisi / bundler seçimi (Engine package resolution aşamasında belirlenecektir).

> Backend/API henüz approved scope değildir; sahte endpoint veya database schema uydurulmamıştır.

---

## 8. Design Context

### Known Brand / Design Inputs

- Marka adı: Trakya Teknik Makine
- Yetkili Servis: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
- Mevcut metin içerikleri ve iletişim verileri

### Desired Character / Perception

- Endüstriyel uzmanlık, teknik güven, hassasiyet, kurumsal ciddiyet ve hızlı servis algısı.

### Explicit Preferences / Constraints

- Generic "klasik lacivert hero + 3 kart" şablonlarından sakınılmalı.
- Tipografi, kompozisyon, yüzey sistemi ve kontrollü hareket ile özgün bir görsel dil kurulmalı.

### Differentiation Notes

- Teknik/endüstriyel hissi ağırbaşlı ve modern bir visual concept ile sunmak. Usability ilkesini bozmadan karakter sahibi arayüz oluşturmak.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start brief | High | Proje başlangıç hedefleri ve ham bağlam |
| SRC-002 | `https://www.trakyateknikmakine.com/` | live external site | High | Doğrulanmış firma verileri, hizmet metinleri ve iletişim bilgileri |

- `source_count`: 2

---

## 10. Known Decisions

- **DEC-001:** Proje bir satış frontend demosu (`delivery_profile: Prototype`) olarak yürütülecektir.
- **DEC-002:** Proje durumu `existing` olarak sınıflandırılmıştır (mevcut SITE123 sitesi kaynak alındığı için).
- **DEC-003:** Proposed planning profile: `implementation_planning: standard`, `design_planning: light`.
- **DEC-004:** Mevcut sitedeki tüm doğrulanmış firma bilgileri korunacak, kanıtlanmamış yeni iddia eklenmeyecektir.
- **DEC-005:** Eski sitenin görsel tasarımı yeni demo için bağlayıcı değildir; yeni visual concept uygulanacaktır.

---

## 11. Assumptions

| Assumption ID | Alan | Yapılan Karar/Varsayım | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| ASM-001 | primary_language | Türkçe (`tr`) | safe | Mevcut site ve proje brief'i Türkçe hazırlanmıştır. | proje bağlamı | pending_review |
| ASM-002 | target_users | Trakya bölgesindeki sanayi ve makine işletmeleri | safe | Firma adı ve hizmet bölgesinden açıkça türetilmiştir. | proje bağlamı | pending_review |
| ASM-003 | data_boundary | Yerel JS/JSON mock data adapter | safe | Backend'siz frontend demo için integration-ready en temiz yapıdır. | endüstri standardı | pending_review |

---

## 12. Conflicts

- Kritik çelişki tespit edilmemiştir. Proje başlangıç hedefleri ile mevcut firma verileri uyumludur.

---

## 13. Open Questions / Unresolved Items

- **Q-001:** Trakya Teknik Makine veya Disan Hidrolik markalarına ait yüksek çözünürlüklü logo/görsel varlıklar mevcut mu?
- **Q-002:** Teklif talep formu, harita veya WhatsApp butonu gibi opsiyonel etkileşimler gelecek aşamaya mı bırakılmalı, yoksa demoya dahil edilmeli mi?
- **Q-003:** Satış sonrası canlıya geçiş için hedeflenen hosting/domain altyapısı nedir?

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** "2026-08-15T01:50:33+03:00"
- **Approved By:** "user"

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable olarak `design_planning` `light` olarak önerildi/belirlendi.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları `pending_review`.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (2).
- [x] Canonical explicit user approval alındı (Status: `approved`).
- [x] `approved_by: user` yazıldı.
