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
created_at: "2026-08-15T02:21:42+03:00"
updated_at: "2026-08-15T02:21:42+03:00"
approved_at: ""
approved_by: ""
supersedes: ""
source_type: "user-provided"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `pending` durumunda generation başlatılamaz. `approved` yalnız canonical explicit user approval ile oluşabilir; IDE/tool/plan auto-approval geçerli değildir.

---

## 1. Original Brief

```text
Trakya Teknik Makine'nin mevcut SITE123 tabanlı kurumsal web sitesini (https://www.trakyateknikmakine.com/), firmanın gerçek bilgilerini ve Disan Hidrolik Trakya yetkili servisi konumlandırmasını koruyarak, satış görüşmesinde gösterilmek üzere modern, profesyonel ve güven veren bir kurumsal frontend demo olarak yeniden tasarlayıp sunmak.
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page` (Kurumsal tanıtım / pazarlama sitesi)
- **Project State:** `project_state: existing` (Mevcut yayında web sitesi ve doğrulanmış firma bilgileri mevcuttur)
- **Delivery Profile:** `Prototype` (Satış görüşmesi odaklı frontend demo)
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (`standard`):** Proje kurumsal bir frontend demo çalışmasıdır. `standard` seviye, execution wave'lerini, bileşen sınırlarını ve servis katmanını netleştirmek için yeterli derinlik sağlar; gereksiz aşırı dokümantasyon üretmeden ajanın koda geçmesini kolaylaştırır.
- **Design (`light`):** Kurumsal web sitesi modern endüstriyel görsel estetik ve hiyerarşi gerektirir. `light` tasarım seviyesi, generic template klişelerine düşmeden non-generic kalite tabanını korur; kapsamlı bir design system belgesi üretmeden hafif ve etkili tasarım planlaması sağlar.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki doğrulanmış firma, yetkili servis ve hizmet içeriklerini koruyarak, potansiyel satış görüşmesinde firmaya sunulabilecek modern, güvenilir ve yüksek kaliteli bir kurumsal frontend demo oluşturulması.

### Problem

Mevcut web sitesi (SITE123 tabanlı) firmanın temel bilgilerini ve hizmetlerini barındırmakla birlikte görsel sunum, kurumsal algı, içerik hiyerarşisi ve satış görüşmesinde yaratacağı güven/prestij açısından modern standartların gerisindedir.

### Purpose

Trakya Teknik Makine'nin gerçek marka kimliğini ve Disan Hidrolik yetkili servisi unvanını öne çıkaran, 3 temel hizmet alanını güçlü görsel hiyerarşiyle sunan, responsive ve prestijli bir kurumsal web sitesi demosu hazırlamak.

### Success Criteria

1. Mevcut SITE123 sitesine kıyasla ilk bakışta belirgin şekilde daha modern, profesyonel ve prestijli bir görünüm elde edilmesi.
2. Tasarımın jenerik kurumsal şablon hissi vermemesi; projeye özgü endüstriyel görsel kimlik taşıması.
3. Firmanın Disan Hidrolik Trakya yetkili servisi kimliğinin ve 3 temel hizmetinin (Yedek Parça Temini, Yerinde Teknik Destek, Bakım & Onarım) net ve hızlı biçimde anlaşılması.
4. İletişim CTA noktalarına (telefon, e-posta) masaüstü ve mobilde kolay erişilmesi.
5. Frontend mimarisinin sahte backend uydurmadan temiz data/service boundary ile kurulması ve gelecekteki backend entegrasyonuna hazır olması.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesindeki sanayi tesisleri, makine işletmecileri, bakım/onarım ve yedek parça arayan teknik sorumlular.
- **İkincil Kullanıcılar:** Satın alma ve operasyon yetkilileri, firma güvenilirliğini araştıran potansiyel müşteriler.

### Core Flows

1. **Ana Sayfa Karşılama:** Ziyaretçi siteye girdiğinde Trakya Teknik Makine'nin uzmanlık alanını ve Disan Hidrolik yetkili servis kimliğini anında kavrar.
2. **Hizmet İnceleme:** Ziyaretçi 3 temel hizmet alanını (Yedek Parça, Yerinde Destek, Bakım-Onarım) görsel detay ve teknik vurgularla inceler.
3. **Kurumsal Güven & Yetkinlik:** Firma hakkında genel bilgileri, bölge odaklı servis gücünü ve kalite yaklaşımını inceler.
4. **Doğrudan İletişim:** Ziyaretçi telefon veya e-posta bağlantıları üzerinden firmayla hızlıca temas kurar.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive kurumsal frontend demo uygulaması.
- Ana sayfa, kurumsal tanıtım, hizmetler detay/sunum bölümleri ve iletişim alanı.
- Mevcut siteden doğrulanmış gerçek metin ve hizmet verilerinin yeniden düzenlenmesi.
- Temel iletişim CTA'ları (telefon/e-posta).
- Entegrasyona hazır temiz frontend servis/veri sınırı (data-access boundary).

### Out of Scope

- Gerçek admin paneli / CMS backend.
- Veritabanı veya sunucu taraflı backend geliştirmesi.
- Kullanıcı girişi / kimlik doğrulama.
- E-ticaret / online ödeme.
- Müşteri tarafından doğrulanmamış yeni referanslar, sahte sertifikalar veya abartılı iddialar.
- Production deployment ve domain taşıma işlemleri.
- Doğrulanmamış form submit backend'leri, canlı harita veya WhatsApp entegrasyonları (açık onay verilmediği sürece scope dışıdır).

### Future Possibilities

- Gerçek CMS / Admin paneli entegrasyonu.
- İletişim formu API entegrasyonu.
- İnteraktif Google Maps entegrasyonu.
- Direct WhatsApp sohbet modülü.
- Canlı ortama taşıma ve SSL/domain yapılandırması.

---

## 6. Existing Project Context

### Current Reality

Mevcut web sitesi (`https://www.trakyateknikmakine.com/`) SITE123 altyapısında yayındadır. Site; Ana Sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler ve İletişim bölümlerinden oluşmaktadır. Disan Hidrolik Trakya Yetkili Servisi unvanı ve 3 ana hizmet alanı sitede yer almaktadır.

### Target State

Şık, modern, yüksek performanslı, mobil uyumlu ve temiz kod mimarisine sahip kurumsal frontend demo.

### Transition Scope

Mevcut sitedeki doğrulanmış firma bilgileri, yetkili servis statüsü, hizmet açıklamaları ve iletişim bilgileri yeni demoya aktarılacaktır. Mevcut sitenin SITE123 görsel tasarımı, sayfa düzeni ve kod yapısı tamamen yenilenecektir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Çalışma bir frontend demo projesidir.
- Kesin frontend framework/stack seçimi Product Engine package/document resolution aşamasında belirlenecektir (Intake aşamasında stack-neutral tutulmuştur).
- Sunucu bağımlılığı olmayan, hızlı yüklenen ve kolay çalıştırılabilir yapı.

### Current Data Source Reality

- İçerikler lokal mock veri modülleri (`CompanyData`, `ServicesData`) üzerinden sağlanacaktır.

### Service / Data-Access Boundary Expectation

- Kullanıcı arayüzü bileşenleri veriyi doğrudan sabit JSX/HTML içine gömmek yerine bir service katmanı (`CompanyService`) üzerinden okuyacaktır.

### Future Backend / Integration Context

- Gelecekte bir REST API veya CMS bağlandığında presentation katmanı değiştirilmeden adapter değiştirilerek entegrasyon sağlanabilecektir.

### Unresolved Technical Decisions

- Kesin frontend framework (Vanilla JS / React / Vite vb. Engine paket seçiminde kesinleşecektir).

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma Adı: Trakya Teknik Makine
- Yetkili Servis: Disan Hidrolik Trakya Bölge Yetkili Servisi
- Mevcut site renk/içerik referansları.

### Desired Character / Perception

- Endüstriyel uzmanlık, teknik güven, kurumsal prestij, hızlı çözüm, modern hassasiyet.

### Explicit Preferences / Constraints

- "Lacivert hero + 3 jenerik kart + standart footer" klişelerinden kaçınılacaktır.
- Tipografi, kontrast, alan kullanımı (spacing) ve micro-animation'lar ile projeye özgü görsel kimlik kurulacaktır.
- `design_planning: light` seviyesi kalite tabanını düşürmez; şablon tasarım kullanımına izin vermez.

### Differentiation Notes

- Güçlü teknik tipografi, özgün renk tonlama dengesi ve modern endüstriyel kart/yüzey tasarımları.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Proje Başlangıç Senaryosu | Yüksek | Proje hedefleri, kapsam ve kısıtlar |
| SRC-002 | `https://www.trakyateknikmakine.com/` | Mevcut Web Sitesi | Yüksek | Doğrulanmış firma bilgileri ve hizmet detayları |

- `source_count`: 2

---

## 10. Known Decisions

1. Çalışma satış görüşmesi amaçlı bir frontend demodur (`delivery_profile: Prototype`).
2. Proje mevcut bir firmanın web sitesini yenileme projesidir (`project_state: existing`).
3. İçerik strictly doğrulanmış mevcut bilgilere dayanacaktır.
4. Sahte backend endpoint'i veya veritabanı şeması uydurulmayacaktır.
5. Kesin uygulama stack'i Engine paket seçimine bırakılmıştır.

---

## 11. Assumptions

| Assumption ID | Alan | Yapılan Varsayım | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| ASM-001 | `primary_language` | Türkçe (`tr`) | Safe | Firma Trakya bölgesinde faaliyet göstermektedir ve mevcut site Türkçedir. | Proje Bağlamı | `pending_review` |
| ASM-002 | Frontend Stack | Modüler client-side web mimarisi kullanılacaktır. | Bounded | Kesin paket Engine package resolution'da netleşecektir. | Engine Standardı | `pending_review` |
| ASM-003 | Ek Etkileşimler | Canlı harita, form backend ve WhatsApp widget'ı ilk demo scope'unda statik/CTA seviyesinde tutulacaktır. | Safe | Satış demosunda gereksiz kapsama ve sahte entegrasyonlara yer vermemek. | Proje Kısıtı | `pending_review` |

---

## 12. Conflicts

- Kritik çelişki tespit edilmemiştir. `TRAKYA_TEKNIK_MAKINE_PROJECT.md` ile Engine kuralları uyumludur.

---

## 13. Open Questions / Unresolved Items

1. **OQ-001 (Brand Assets):** Firmanın yüksek çözünürlüklü logosu / vektörel materyalleri mevcut mu, yoksa demo için mevcut sitedeki kaynaklar yenilenerek mi kullanılacak?
2. **OQ-002 (İletişim Etkileşimleri):** Demo içinde iletişim formu gönderim simülasyonu veya WhatsApp hızlı yönlendirme butonu gibi ek micro-interaction'lar isteniyor mu?

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
- [x] Assumption'lar kayıtlı ve status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (2).
- [ ] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [ ] `approved_by: user` için doğrudan approval kanıtı var.
