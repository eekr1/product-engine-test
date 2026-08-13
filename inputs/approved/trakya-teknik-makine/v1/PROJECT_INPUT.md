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
created_at: "2026-08-13T04:08:13+03:00"
updated_at: "2026-08-13T04:09:27+03:00"
approved_at: "2026-08-13T04:09:27+03:00"
approved_by: "user"
supersedes: ""
source_type: "project-start"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `approved` durumundadır ve kanonik explicit user approval ile dondurulmuştur.

---

## 1. Original Brief

```text
Trakya Teknik Makine'nin mevcut kurumsal web sitesini (https://www.trakyateknikmakine.com/), firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak. Demo, potansiyel müşteri satış görüşmesinde gösterilmek üzere hazırlanacak proaktif bir çalışmadır. Mevcut sitede yer alan doğrulanmış firma bilgileri ve hizmet kapsamı korunacak; ancak görsel tasarım, içerik hiyerarşisi ve sunum sıfırdan modern kurumsal standartlarda kurgulanacaktır.
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page` (Kurumsal Web Sitesi / Satış Demosu)
- **Project State:** `existing` (Mevcut site: https://www.trakyateknikmakine.com/ — `PROJECT_INTAKE.md` gereğince mevcut site varlığı projeyi `existing` kılar)
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (`standard`):** Projenin ilk çıktısı bir frontend demo olsa da, `standard` seviye agent-ready execution yapısı (wave planları, durum takibi, net talimatlar ve temiz service/data boundary) için gereklidir. `standard`, prototype olmasının mimari kaliteyi düşürmesini engeller.
- **Design (`light`):** Sınırlı sayfa/bölüm yapısına sahip kurumsal demo için `light` tasarım planlaması uygundur. `light`, projeye özgü visual concept, tipografi, spacing, yüzey sistemi ve non-generic görsel ilkeleri tanımlayan güçlü bir `DESIGN_RULES` kapsamı sağlar.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın uzmanlığını, yetkili servis statüsünü ve hizmetlerini daha profesyonel, modern ve güven veren bir görsel sunumla ortaya koyan frontend demo web sitesine dönüştürmek.

### Problem

Mevcut web sitesi (SITE123 altyapısı) temel bilgileri sunmaktadır ancak görsel sunum, kurumsal algı, içerik hiyerarşisi ve potansiyel satış görüşmelerinde bırakacağı ilk izlenim açısından modern kurumsal standartların gerisindedir.

### Purpose

Firmanın gerçek ve doğrulanmış firma/hizmet bilgilerini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım; Disan Hidrolik Makine Trakya Bölge Yetkili Servisi) koruyarak, satış görüşmesinde potansiyel müşteriye gösterilebilecek modern, profesyonel, mobil uyumlu ve yüksek kaliteli bir kurumsal web sitesi demosu sunmak.

### Success Criteria

- Demo ilk bakışta mevcut siteden belirgin biçimde daha modern, profesyonel ve kurumsal görünmeli.
- Sektör klişelerinden ve generic hazır şablon görünümünden uzak, projeye özgü ayırt edilebilir bir visual concept sunmalı.
- Firma yetkinlikleri ve 3 ana hizmet hızlıca anlaşılmalı, Disan Hidrolik yetkili servis vurgusu korunmalı.
- Kullanıcı telefon ve e-posta iletişim bağlantılarına mobil ve masaüstünde kolayca ulaşabilmeli.
- Presentation katmanı veriden ayrılmalı (clean service/data boundary); gelecekte gerçek backend/API bağlanmasına uygun mimari kurulmalı.
- Gerçek kaynakla çelişen veya doğrulanmamış yeni firma/hizmet iddiaları üretilmemeli.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım, onarım, yerinde teknik servis veya yedek parça arayan işletmeler ve makine operatörleri/yöneticileri.
- **İkincil Kullanıcılar:** Firma hakkında güvenilirlik ve hizmet kapsamı araştıran satın alma/operasyon sorumluları.

### Core Flows

1. **Ana Sayfa İnceleme:** Ziyaretçinin ana sayfaya girip firmanın ne yaptığını, yetkili servis statüsünü ve temel uzmanlık alanlarını hızla anlaması.
2. **Hizmet İnceleme:** Ziyaretçinin 3 ana hizmeti (Yedek Parça, Yerinde Destek, Bakım-Onarım) ve detaylarını görsel hiyerarşi içinde incelemesi.
3. **Kurumsal Güven Doğrulama:** Ziyaretçinin firma hakkındaki kurumsal bilgileri ve Disan Hidrolik yetkili servis güvencesini incelemesi.
4. **İletişim Başlatma:** Ziyaretçinin telefon veya e-posta CTA'ları üzerinden firma ile doğrudan iletişime geçmesi.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive masaüstü ve mobil kurumsal frontend demo.
- Ana sayfa ve gerekli kurumsal / hizmet / iletişim bölüm yapısı.
- Mevcut siteden alınan doğrulanmış firma ve hizmet içeriklerinin modern sunumu.
- Telefon (click-to-call) ve e-posta hızlı iletişim CTA'ları.
- Integration-ready mock/local data mimarisi (clean service/data-access boundary).
- Satış görüşmesinde gösterilebilir tamamlanmış görsel deneyim.

### Out of Scope

- Gerçek backend, veritabanı veya API uygulaması.
- Admin / içerik yönetim paneli (CMS).
- Kullanıcı hesabı / authentication.
- Online ödeme veya e-ticaret işlevleri.
- Production deployment, domain/hosting taşıma.
- Müşteri tarafından doğrulanmamış yeni firma iddiaları, referanslar veya teknik yetkinlikler.

### Future Possibilities

- WhatsApp doğrudan iletişim butonu / canlı harita / online teklif talep formu.
- Gerçek backend / CMS entegrasyonu ve yönetim paneli.

---

## 6. Existing Project Context

### Current Reality

- Yayında olan web sitesi: https://www.trakyateknikmakine.com/
- Altyapı: SITE123
- Sunulan Bölümler: Ana sayfa, Hakkında, Hizmetlerimiz (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım), Hakkımızda Söylenenler, İletişim.
- Yetkili Servis Bilgisi: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi.

### Target State

- Modern web teknolojileri ile hazırlanmış, yüksek kurumsal algıya sahip, mobil uyumlu, performanslı ve özgün tasarıma sahip kurumsal frontend demo.

### Transition Scope

- Mevcut sitedeki tüm doğrulanmış metinler, iletişim bilgileri ve hizmet tanımları yeni yapıya aktarılacaktır.
- SITE123 görsel tasarımı, sayfa düzeni, renk kalıpları ve altyapısı tamamen yenilenecektir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- İlk aşama frontend demo olacaktır.
- Stack seçimi: Frontend demo HTML/CSS/JavaScript (Vanilla CSS & JS) veya modern lightweight static build tercih edilecek; presentation katmanı ile veri erişim katmanı ayrılacaktır.

### Current Data Source Reality

- Yerel mock/local data (JSON/JS adapter).

### Service / Data-Access Boundary Expectation

- UI bileşenleri veriyi doğrudan dosyalardan veya hardcoded değişkenlerden değil, tanımlı bir service/adapter arayüzü üzerinden okuyacaktır.

### Future Backend / Integration Context

- İleride eklenebilecek REST API veya CMS entegrasyonu için sadece adapter katmanının değiştirilmesi yeterli olacaktır. sahte endpoint veya veritabanı şeması uydurulmayacaktır.

### Unresolved Technical Decisions

- Yok.

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma Adı: Trakya Teknik Makine
- Yetkili Servis: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi

### Desired Character / Perception

- Güvenilir, teknik uzmanlığa sahip, modern, hızlı çözüm sunan, profesyonel endüstriyel servis.

### Explicit Preferences / Constraints

- Mevcut SITE123 görsel tasarımı kopyalanmayacaktır.
- Sektör klişeleri ("otomatik lacivert", "3 kartlı standart hero") default tasarım gerekçesi olarak kullanılmayacaktır.

### Differentiation Notes

- Tasarım projeye özgü bir visual concept üzerine inşa edilecek; tipografi, kompozisyon, spacing ve kart/yüzey hiyerarşisi ile fark yaratacaktır.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start brief | Yüksek | Proje başlangıç senaryosu ve kısıtları |
| SRC-02 | https://www.trakyateknikmakine.com/ | existing website | Kesin | Doğrulanmış firma metinleri ve hizmet bilgileri |

---

## 10. Known Decisions

- Proje ilk etapta satış görüşmesi amaçlı frontend demo olarak inşa edilecektir.
- Mevcut sitedeki doğrulanmış firma bilgileri korunacaktır; görsel tasarım tamamen yenilenecektir.
- Sahte backend, API contract'ı veya doğrulanmamış firma iddiaları üretilmeyecektir.
- Prototype/demo kapsamı kod ve mimari kalite tabanını düşürmeyecektir.

---

## 11. Assumptions

- **ASM-01 (Veri/İçerik):** Sitedeki mevcut iletişim bilgileri ve 3 ana hizmet tanımı günceldir ve firma tarafından kabul edilmektedir. (Durum: Verified against SRC-02)
- **ASM-02 (Altyapı):** Demo lokal geliştirme ortamında ve/veya static demo hosting üzerinde sorunsuz çalıştırılabilecektir. (Durum: Safe default)

---

## 12. Conflicts

- **CNF-01:** `project-start` dosyasında `project_mode: yeni` yazmaktadır; ancak firma yayında olan bir web sitesine ve doğrulanmış firma bilgilerine sahiptir.
  - **Resolution:** Product Engine `PROJECT_INTAKE.md` otoritesi uyarınca `existing product/site + rewrite from scratch → existing` kuralı geçerlidir. Engine otoritesi üstündür; `project_state: existing` olarak kaydedilmiştir.

---

## 13. Open Questions / Unresolved Items

- **Q-01:** Firmanın yüksek çözünürlüklü vektörel logosu veya resmi kurumsal renk kodları mevcut mudur? (Henüz yoksa Engine visual concept üretecektir).
- **Q-02:** Demo kapsamına WhatsApp hızlı hat butonu veya harita eklenecek midir? (İsteğe bağlı future scope olarak değerlendirilebilir).

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-13T04:09:27+03:00
- **Approved By:** user

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light | standard | full` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı (CNF-01 Engine kuralı ile çözüldü).
- [x] Assumption'lar kayıtlı ve status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (2).
- [x] Canonical explicit user approval alındı.
- [x] `approved_by: user` için doğrudan approval kanıtı var.
