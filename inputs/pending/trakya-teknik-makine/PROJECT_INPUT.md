---
input_id: "INPUT-TRAKYA_TEKNIK_MAKINE-V1"
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
created_at: "2026-08-14T03:50:35+03:00"
updated_at: "2026-08-14T03:50:35+03:00"
approved_at: ""
approved_by: ""
supersedes: ""
source_type: "project-start-brief"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `pending` durumunda generation başlatılamaz. `approved` yalnız canonical explicit user approval ile oluşabilir; IDE/tool/plan auto-approval geçerli değildir.

---

## 1. Original Brief

```text
Proje kaynak dosyası: project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md

Trakya Teknik Makine'nin mevcut kurumsal web sitesini (https://www.trakyateknikmakine.com/), firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak. Demo Enis tarafından potansiyel satış görüşmesi amacıyla proaktif bir sunum prototipi olarak hazırlanacaktır. İlk hedef tam üretim sistemi değil, görsel ve işlevsel olarak güçlü bir frontend demodur. Mevcut sitede yer alan doğrulanmış firma ve hizmet bilgileri (Disan Hidrolik Makine Trakya bölgesi yetkili servisi, Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) korunacak; ancak eski SITE123 tasarım yapısı yeni demo için bağlayıcı olmayacaktır.
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page` (Kurumsal tanıtım / demo web yüzeyi)
- **Project State:** `existing` (Yayında olan mevcut web sitesi ve firma içerik gerçekliği bulunmaktadır)
- **Delivery Profile:** `Prototype` (Satış demosu / proaktif sunum prototipi)
- **Implementation Planning:** `standard` (Ajan tarafından uygulanabilir minimum execution/wave planlaması)
- **Design Planning:** `light` (Gelişmiş visual direction ve non-generic DESIGN_RULES)
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (standard):** Proje bir frontend demosu olsa da throwaway mimari kabul edilmez. Yeni bir ajanın projeyi eksiksiz anlaması, wave planlarını yürütmesi ve veri sınırlarını koruyabilmesi için `standard` agent-ready minimum uygulanmıştır.
- **Design (light):** Proje kurumsal tanıtım ve demo odaklıdır. `light` seçimi belge sayısını sınırlı tutar; ancak tasarımı generic kurumsal template klişelerinden ayıran güçlü ve projeye özgü bir visual concept / DESIGN_RULES zorunlu kılar.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin yayındaki mevcut web sitesini, firmanın teknik yetkinliğini ve Disan Hidrolik yetkili servisliğini daha modern, profesyonel ve güven verici biçimde sunan proaktif bir frontend satış demosu ile yenilemek.

### Problem

Mevcut web sitesi SITE123 altyapısında bulunmakta olup içerik ve hizmet bilgilerini sunsa da görsel sunum, içerik hiyerarşisi, mobil uyum ve satış görüşmesinde yaratacağı ilk izlenim açısından firmanın gerçek yetkinliğini yansıtmamakta ve modernleştirilmeye ihtiyaç duymaktadır.

### Purpose

Mevcut sitedeki doğrulanmış firma bilgilerini koruyarak, potansiyel satış görüşmesinde "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını açıkça veren, modern, responsive ve müşteri güvenini kazanan bir kurumsal frontend demo sunmak.

### Success Criteria

1. Demo ilk bakışta mevcut siteden belirgin biçimde daha modern ve profesyonel görünmelidir.
2. Tasarım generic hazır template hissi vermemeli, projeye özgü ayırt edilebilir bir visual concept taşımalıdır.
3. Firma bilgileri ve üç ana hizmet (Yedek Parça, Yerinde Destek, Bakım/Onarım) ve Disan Hidrolik yetkili servisliği hızlıca anlaşılmalıdır.
4. Mobil ve masaüstü deneyim satış görüşmesinde doğrudan gösterilebilir kalitede olmalıdır.
5. Kullanıcı iletişim kanallarına (telefon, e-posta, CTA) kolayca ulaşabilmelidir.
6. Frontend mimarisi, gelecekte gerçek backend/data kaynağı eklendiğinde UI katmanının yeniden yazılmasını gerektirmeyecek temiz service/data boundary'ye sahip olmalıdır.
7. `implementation_planning: standard` çıktısı, yeni bir ajanın doğrudan ilk wave'i kodlamaya başlayabileceği açıklıkta olmalıdır.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Bölge İşletmeleri:** Trakya bölgesinde makine bakım, onarım veya teknik servis ihtiyacı olan sanayi/imalat tesisleri.
- **Ekipman/Makine Kullanıcıları:** Hidrolik sistem ve makine yedek parçası arayan müşteriler.
- **Satın Alma & Operasyon Sorumluları:** Firma güvenilirliğini ve yetkili servis durumunu araştıran karar vericiler.
- **Potansiyel Müşteri (Satış Görüşmesi Muhatabı):** Trakya Teknik Makine yönetimi / yetkilileri.

### Core Flows

1. **Ana Sayfa Keşfi & İlk İzlenim:** Ziyaretçi sayfaya girdiğinde firmanın uzmanlığını, Disan Hidrolik yetkili servisi olduğunu ve profesyonel yaklaşımını 3 saniye içinde anlar.
2. **Hizmet İnceleme Akışı:** Ziyaretçi 3 ana hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) detayları ve görsel hiyerarşisiyle inceler.
3. **Güven & Kurumsal Bilgi Akışı:** Ziyaretçi firma hakkındaki kurumsal bilgileri, tecrübeyi ve servis kapsamını doğrular.
4. **Hızlı İletişim & CTA Akışı:** Ziyaretçi telefon veya e-posta bağlantılarına tıklayarak doğrudan firma ile iletişime geçer.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive kurumsal frontend demo (Single Page / Multi-section landing mimarisi).
- Mevcut sitedeki doğrulanmış firma, hizmet ve iletişim bilgilerinin yeniden organize edilmesi.
- Disan Hidrolik Trakya Bölge Yetkili Servisliği vurgusu.
- Üç temel hizmetin (Yedek Parça, Yerinde Destek, Bakım & Onarım) sunumu.
- Telefon ve e-posta hızlı iletişim CTA'ları.
- Projeye özgü visual concept, tipografi, renk sistemi ve responsive düzen.
- Service / data-access boundary'si ayrılmış mock/local veri mimarisi.

### Out of Scope

- İlk demo aşamasında gerçek admin paneli veya CMS entegrasyonu.
- Backend, veritabanı veya sunucu taraflı kod uygulanması.
- Gerçek kullanıcı hesabı, login veya authentication.
- Online ödeme, teklif motoru veya e-ticaret altyapısı.
- Müşteri tarafından doğrulanmamış yeni firma iddiaları, referanslar veya teknik belgeler.
- Production deployment, alan adı (domain) veya DNS geçiş operasyonları.

### Future Possibilities

- Satış görüşmesi sonrasında gerçek CMS/Admin paneli eklenmesi.
- Online teklif talep formu ve WhatsApp hızlı destek entegrasyonu.
- Ürün/Yedek parça kataloğu araması ve filtreleme altyapısı.
- Gerçek backend ve veritabanı entegrasyonu.

---

## 6. Existing Project Context

### Current Reality

Mevcut site (`https://www.trakyateknikmakine.com/`) SITE123 hazır site altyapısında yayındadır. Temel iletişim bilgilerini, firma tanıtımını ve 3 ana hizmeti sunmaktadır. Ancak görsel tasarım, tipografi ve düzen açısından jenerik kalmaktadır.

### Target State

SITE123 bağımlılığından bağımsız, modern web standartlarında hazırlanmış, projeye özel visual direction taşıyan, responsive, yüksek performanslı ve satış sunumuna hazır kurumsal frontend demo.

### Transition Scope

Mevcut sitedeki metinler, hizmet başlıkları, yetkili servis bilgisi ve iletişim detayları truth kaynağı olarak alınacak; ancak tasarım, layout ve frontend kod mimarisi sıfırdan modern standartlarda inşa edilecektir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- **Demo Scope:** İstemci tarafında çalışan, hızlı yüklenebilir, responsive frontend demo.
- **Clean Architecture:** Demo olması spagetti kod izni vermez. Presentation katmanı veri erişiminden ayrılacaktır.
- **Stack-Neutral Pending:** Exact frontend kütüphanesi/framework'ü veya build tool kararı pending aşamasında nötr tutulur; safe local preview/development ortamı esas alınır.

### Current Data Source Reality

Mevcut site metinlerinden türetilen static mock/local veri nesneleri kullanılacaktır.

### Service / Data-Access Boundary Expectation

`UI / Component` → `Service / Data Adapter` → `Local Mock Data` katmanlaşması kurulacaktır.

### Future Backend / Integration Context

Gelecekte gerçek bir API/CMS geldiğinde yalnızca data adapter katmanı değiştirilecek, UI component'leri yeniden yazılmayacaktır.

### Unresolved Technical Decisions

- Exact frontend framework / vanilla JS kararı (intake sonrası build setup aşamasında bounded assumption olarak netleşebilir).
- İletişim formu için harici bir mail-to/API servisi bağlanıp bağlanmayacağı.

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma Adı: Trakya Teknik Makine
- Yetkili Servislik: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
- Sektör: Makine Bakım, Onarım, Yedek Parça ve Teknik Servis

### Desired Character / Perception

- Mühendislik ve teknik yetkinlik hissi.
- Güvenilirlik, kurumsallık ve hızlı müdahale algısı.
- Modern endüstriyel estetik (temiz, güçlü hiyerarşi, yüksek okunabilirlik).

### Explicit Preferences / Constraints

- Mevcut SITE123 şablonu kopyalanmayacaktır.
- "Sanayi = otomatik klasik lacivert kurumsal şablon" gibi sektor klişelerinden kaçınılacaktır.
- Görsel hiyerarşi ve tipografi satış görüşmesinde yüksek kalite hissi vermelidir.

### Differentiation Notes

Tasarım proaktif satış sunumu için hazırlanacağından, sıradan bir firma broşüründen farklı olarak interaktif vurgular, mikro-etkileşimler, net servis kartları ve güçlü tipografik kompozisyon içermelidir.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start brief | Yüksek | Proje başlangıç hedefleri ve müşteri/satış bağlamı |
| SRC-02 | `https://www.trakyateknikmakine.com/` | Canlı Web Sitesi | Yüksek | Mevcut doğrulanmış firma, hizmet ve iletişim bilgileri |

---

## 10. Known Decisions

1. Proje birincil olarak potansiyel müşteriye gösterilecek bir frontend satış demosu olarak geliştirilecektir.
2. Mevcut sitedeki doğrulanmış firma bilgileri korunacak, uydurma marka/hizmet iddiaları eklenmeyecektir.
3. Mimari throwaway olmayacak; presentation ve data/service sınırları ayrılacaktır.
4. Canonical Product Engine intake ve approval gate kuralları birebir uygulanacaktır.

---

## 11. Assumptions

```text
Assumption ID : ASM-001
Alan          : primary_language
Yapılan       : Türkçe ("tr")
Sınıf         : safe
Gerekçe       : Firma Trakya bölgesinde yerel hizmet vermekte ve mevcut web sitesi Türkçe içerik sunmaktadır.
Kaynak        : Proje bağlamı ve mevcut web sitesi
Durum         : pending_review

Assumption ID : ASM-002
Alan          : project_type
Yapılan       : landing-page
Sınıf         : safe
Gerekçe       : Proje temel olarak kurumsal tanıtım, hizmet sunumu ve iletişim odaklı tekil/birleşik web yüzeyidir.
Kaynak        : Proje kapsamı
Durum         : pending_review

Assumption ID : ASM-003
Alan          : project_state
Yapılan       : existing
Sınıf         : safe
Gerekçe       : Proje sıfırdan marka yaratma değil, yayında olan mevcut sitenin ve firma bilgilerinin yenilenmesidir.
Kaynak        : engine/PROJECT_INTAKE.md kuralları
Durum         : pending_review
```

---

## 12. Conflicts

```text
Conflict ID : CNF-001
Konu        : project_state belirlemesi (source hint "yeni" vs Engine authority "existing")
Kaynak 1    : TRAKYA_TEKNIK_MAKINE_PROJECT.md ("Proje modu: yeni")
Kaynak 2    : engine/PROJECT_INTAKE.md ("Mevcut website veya ürün varsa project_state existing'dir")
Çözüm       : Engine authority üstündür. Mevcut yayında site ve firma gerçekliği bulunduğundan project_state canonical olarak 'existing' olarak belirlenmiştir.

Conflict ID : CNF-002
Konu        : Frontend demo vs Production complexity beklentisi
Kaynak 1    : Satış demosu hedefi
Kaynak 2    : Tam üretim sistemi beklentisi ihtimali
Çözüm       : Proje kapsamı net olarak Frontend Demo / Prototype olarak sınırlandırılmış; backend, DB ve Auth kapsam dışı tutulmuştur.
```

---

## 13. Open Questions / Unresolved Items

1. Firmanın vektörel/yüksek çözünürlüklü logosu mevcut mu, yoksa demo için temiz SVG/tipografik marka sunumu mu hazırlanmalı?
2. İletişim formu için doğrudan `mailto:` mu yoksa arayüzde mock başarı bildirimi mi gösterilmeli?
3. Gelecekte eklenecek WhatsApp destek hattı butonu ilk demod aktif kılınmalı mı?

---

## 14. Approval & Verification

- **Status:** `pending`
- **Approved At:** 
- **Approved By:** 

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable olduğundan `design_planning` `light` olarak belirlendi.
- [x] Planning profile rationale açıklandı.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict'ler çözüldü.
- [x] Assumption'lar kaydedildi ve status'ları `pending_review`.
- [x] Secret/credential barındırmıyor.
- [x] Absolute machine path barındırmıyor.
- [x] `source_count` doğru (2).
- [ ] Canonical explicit user approval alındı.
- [ ] `approved_by: user` yazılması için kullanıcı onayı bekleniyor.
