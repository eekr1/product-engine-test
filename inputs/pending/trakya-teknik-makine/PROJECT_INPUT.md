---
input_id: "INPUT-TRAKYA-TEKNIK-MAKINE-V1"
project_name: "Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo"
project_slug: "trakya-teknik-makine"
input_version: "1"
status: "approved"
project_type: "web-app"
project_state: "existing"
delivery_profile: "Prototype"
implementation_planning: "standard"
design_planning: "light"
primary_language: "tr"
created_at: "2026-08-14T04:15:00+03:00"
updated_at: "2026-08-14T04:15:30+03:00"
approved_at: "2026-08-14T04:15:30+03:00"
approved_by: "user"
supersedes: ""
source_type: "user-provided"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `pending` durumunda generation başlatılamaz. `approved` yalnız kullanıcının açık mesajıyla (canonical explicit user approval) oluşabilir; IDE/tool/plan auto-approval geçerli değildir.

---

## 1. Original Brief

```text
Trakya Teknik Makine'nin mevcut kurumsal web sitesini (https://www.trakyateknikmakine.com/), firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak. Demo, potansiyel müşteri görüşmesinde gösterilmek üzere hazırlanacaktır. Mevcut firma bilgileri (Disan Hidrolik yetkili servisi, 3 ana hizmet: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) korunacaktır.
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `web-app`
- **Project State:** `existing` *(Mevcut yayında web sitesi ve korunan firma gerçekleri bulunduğu için `engine/PROJECT_INTAKE.md` gereği `existing`)*
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (`standard`):** Çalışmanın satış demosu olması execution ve mimari planlama kalitesini düşürmez. Standard profil; ajanın doğrudan uygulamaya başlayabilmesi için `PROJECT_PLAN`, `WAVE_MAP` ve her wave için ayrı `WAVE_PLAN` dokümanlarının üretilmesini sağlar.
- **Design (`light`):** Birincil odak hızlı ve güçlü bir kurumsal visual concept kurmaktır. `light` profili `DESIGN_RULES.md` üretir; ayrı sayfa/sistem tasarım paketleri üretmeden de yüksek görsel kalite ve anti-template tasarım tabanı garanti edilir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın gerçek hizmet ve iletişim bilgilerini koruyarak, potansiyel satış görüşmesinde gösterilebilir modern, güven veren ve profesyonel bir frontend demo olarak yeniden tasarlamak.

### Problem

Mevcut SITE123 tabanlı web sitesi firmanın hizmetlerini sunmakla birlikte, modern visual hiyerarşi, kurumsal algı ve ilk izlenim açısından satış görüşmesinde firmanın gerçek potansiyelini ve güvenilirliğini tam yansıtmamaktadır.

### Purpose

Trakya Teknik Makine için firmanın yetkili servis kimliğini ve 3 temel hizmetini öne çıkaran, modern, responsive ve satış görüşmesinde gösterilebilir güçlü bir kurumsal web sitesi demosu hazırlamak.

### Success Criteria

1. Demo ilk bakışta mevcut siteden belirgin biçimde daha modern, özgün ve profesyonel görünmeli.
2. Sektör klişelerinden uzak, projeye özgü bir visual concept kurulmalı.
3. Firma kimliği, 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ile Disan Hidrolik yetkili servisliği net biçimde anlaşılmalı.
4. Telefon ve e-posta iletişim CTA'ları masaüstü ve mobilde kolay erişilebilir olmalı.
5. Gerçek firma bilgileri korunmalı; müşteri tarafından doğrulanmamış bilgi/iddia uydurulmamalı.
6. Clean frontend service/data boundary korunarak sonradan gerçek backend entegrasyonu kolaylaştırılmalı.
7. `implementation_planning: standard` gereği ajanın ilk wave'i kodlamaya başlayabileceği netlikte execution plan üretilmeli.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım, onarım, yerinde teknik servis veya yedek parça arayan endüstriyel işletmeler ve ekipman kullanıcıları.
- **İkincil Kullanıcılar:** Satın alma/operasyon sorumluları ve Trakya Teknik Makine ile iletişim kurmak isteyen mevcut müşteriler.

### Core Flows

1. **Ana Sayfa Karşılama:** Ziyaretçinin firmanın uzmanlığını ve Disan Hidrolik Yetkili Servis kimliğini anında anlaması.
2. **Hizmet İnceleme:** 3 ana hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Bakım-Onarım) görsel hiyerarşiyle incelenmesi.
3. **Hızlı İletişim:** Telefon, e-posta veya iletişim CTA'ları üzerinden kolayca firmaya ulaşılması.
4. **Kurumsal Güven:** Firma hakkındaki temel bilgilerin ve yetkinliklerin incelenmesi.

---

## 5. Scope Boundaries

### In Scope

- Responsive, modern ve profesyonel kurumsal frontend demo.
- Ana sayfa, kurumsal/hakkımızda, hizmetler ve iletişim bölümleri/yüzeyleri.
- Mevcut sitedeki doğrulanmış firma içeriğinin yeniden organize edilmesi.
- Telefon ve e-posta hızlı iletişim bağlantıları.
- Data/service boundary ayrımı yapılmış, mock/local data ile çalışan integration-ready frontend mimarisi.
- Standard implementation planning kapsamında `WAVE_MAP` ve `WAVE_PLAN` dokümanları.

### Out of Scope

- Gerçek admin paneli / CMS.
- Backend, veritabanı veya API sunucusu uygulaması.
- Authentication / kullanıcı hesapları.
- Online ödeme veya e-ticaret altyapısı.
- Müşteri tarafından doğrulanmamış yeni firma iddiaları, sertifikalar veya referanslar.
- Production deployment, domain ve DNS taşıma işlemleri.

### Future Possibilities

- Gerçek backend ve headless CMS entegrasyonu.
- İletişim ve teklif formu API bağlantıları.
- Yönetim paneli ve içerik yönetim modülü.
- Canlı domain yayını ve SEO/operasyonel bakım.

---

## 6. Existing Project Context

### Current Reality

Firma şu an SITE123 altyapısında `https://www.trakyateknikmakine.com/` adresinde yayındadır. Sitede Ana Sayfa, Hakkında, Hizmetlerimiz (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım), Hakkımızda Söylenenler ve İletişim bölümleri yer almaktadır. Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi olarak hizmet vermektedir.

### Target State

Modern tipografi, özgün renk paleti ve kompozisyon ile yenilenmiş; Disan Hidrolik yetkili servisliğini ve 3 temel hizmeti görsel hiyerarşiyle sunan; temiz kod mimarisine sahip frontend demo.

### Transition Scope

Sitedeki metinsel firma bilgileri, yetkili servislik beyanı ve iletişim detayları yeni demo için içerik kaynağı olarak aktarılacaktır; mevcut SITE123 tasarımı ve kod altyapısı bırakılarak yeni frontend inşa edilecektir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- İlk aşama çalışır frontend demo olacaktır.
- Demo kod tabanı throwaway değildir; temiz presentation/data-service ayrımı yapılacaktır.
- Uygulama stack'i (örn. Vanilla JS, React, Vite vb.) yetkili package rules ve technical context adımlarında kesinleştirilecektir; bu aşamada stack-neutral kalınmıştır (`engine/PROJECT_INTAKE.md` Stack-Neutral Pending kuralı).

### Current Data Source Reality

Mock/local data provider (JS/JSON).

### Service / Data-Access Boundary Expectation

UI bileşenleri mock veriye doğrudan bağımlı olmayacak, soyut bir service/adapter arayüzü üzerinden erişecektir.

### Future Backend / Integration Context

İleride bir REST/GraphQL API veya CMS geldiğinde presentation katmanı değiştirilmeden adapter seviyesinde backend entegrasyonu yapılabilecektir.

### Unresolved Technical Decisions

Tam frontend framework/build tool seçimi (Vite + Vanilla JS vs. Vite + React vb.) pending intake onayından sonra package/tech context aşamasında netleşecektir.

---

## 8. Design Context

### Known Brand / Design Inputs

- **Firma Adı:** Trakya Teknik Makine
- **Yetkili Servislik:** Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi
- **Mevcut Web Sitesi:** `https://www.trakyateknikmakine.com/`

### Desired Character / Perception

Güven veren, teknik açıdan yetkin, profesyonel, endüstriyel ama modern ve dinamik.

### Explicit Preferences / Constraints

- Mevcut sitenin görsel tasarımı kopyalanmayacaktır.
- Sektör klişelerine (varsayılan lacivert-turuncu, jenerik stok görseller, standart hero-3 kart şablonu) sığınılmayacaktır.
- Tasarım mobilde ve masaüstünde kusursuz çalışmalıdır.

### Differentiation Notes

Yeni visual concept; tipografi seçimi, yüzey katmanları, kontrollü mikro etkileşimler ve net içerik hiyerarşisi ile öne çıkacaktır.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Source Brief | Yüksek | Proje fikri, amacı ve kapsam sınırları |
| SRC-02 | `https://www.trakyateknikmakine.com/` | Live Website | Yüksek | Mevcut firma bilgileri, yetkili servislik ve hizmet tanımları |

- `source_count`: 2

---

## 10. Known Decisions

- Çıktı satış görüşmesinde sunulacak frontend demo olacaktır.
- Mevcut sitenin görsel tasarımı değil, doğrulanmış içerik ve firma gerçekleri korunacaktır.
- Scope demo/prototype olarak tutulacak, backend ve admin paneli ilk aşamadan muaf tutulacaktır.
- Kod mimarisi temiz tutulacak, throwaway kod yazılmayacaktır.

---

## 11. Assumptions

- **ASM-01**: Language | `tr` | safe | Proje adı ve kaynak metinler Türkçe olduğu için birincil dil Türkçe kabul edilmiştir. | pending_review
- **ASM-02**: Output Path Category | `outputs/demos/trakya-teknik-makine/` | safe | Proje bir satış demosu/prototipi olduğu için `demo-frontend` paketi ve `demos` klasörü varsayılmıştır. | pending_review
- **ASM-03**: Existing Project Scope Boundary | `project_state: existing` | bounded | Kaynak brief'te `project_state: new` önerilmişse de, Engine kurallarına göre (`engine/PROJECT_INTAKE.md` L243) mevcut site ve korunan firma gerçekleri olduğu için `existing` sınıflandırılmıştır. | pending_review

---

## 12. Conflicts

- **CF-01**: `project_state` uyumsuzluğu.
  - *Source Brief:* `project_state: new`
  - *Engine Authority (`engine/PROJECT_INTAKE.md`):* "existing product/site + rewrite from scratch → existing". Mevcut yayında site ve korunacak firma verisi olduğu için Engine kuralı gereği `existing` olarak ele alınmıştır.

---

## 13. Open Questions / Unresolved Items

1. **Brand Assets:** Firmanın vektörel/yüksek çözünürlüklü logosu ve orijinal görsel asset'leri mevcut mu, yoksa demo için yeniden mi kurulmalı?
2. **İletişim Bileşenleri:** İletişim bölümünde WhatsApp hızlı erişim butonu ve/veya interaktif teklif talep formu demosuna yer verilsin mi?
3. **Frontend Stack:** Frontend demo için tercih ettiğiniz bir teknoloji stack'i (örn. Vite + Vanilla HTML/JS, Vite + React vb.) var mı, yoksa Product Engine `demo-frontend` kurallarına göre en uygun hafif yapıyı seçsin mi?

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
- [x] Critical conflict çözümlendi (CF-01 Engine kuralı ile açıklanıp netleştirildi).
- [x] Assumption'lar kayıtlı ve status'ları doğru (`pending_review`).
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (2).
- [ ] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [ ] `approved_by: user` için doğrudan approval kanıtı var.
