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
created_at: "2026-08-11T22:19:17+03:00"
updated_at: "2026-08-11T22:48:30+03:00"
approved_at: "2026-08-11T22:48:30+03:00"
approved_by: "user"
supersedes: ""
source_type: "project-start"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical approved project truth girdisidir (`v1`). Canonical explicit user approval ile dondurulmuştur.

---

## 1. Original Brief

```text
Trakya Teknik Makine kurumsal web sitesini, firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak. Demo, potansiyel müşterilerle yapılacak satış görüşmesinde gösterilebilir kalitede olmalıdır. Mevcut sitede yer alan içerikler ve firma beyanları (mevcut sitede firmanın kendisini Disan Hidrolik Makine Trakya Yetkili Servisi olarak tanımlaması, Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım hizmetleri) korunmalı; eski tasarım otorite kabul edilmeyerek modern ve özgün bir kurumsal görsel konsept kurulmalıdır.
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

- **Implementation:** Satış demosu ve frontend odaklı çalışma için `standard` implementation planning seçilmiştir. Bu profil, yeni bir ajanın ek mimari planlama yapmadan ilk wave'i uygulamaya başlayabileceği agent-ready minimum seviyeyi (`README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `STATUS`, `TASKS`, `DECISIONS`, `AGENT-INST`, `PROJ-PLAN`, `WAVE-MAP`, `WAVE-PLAN` instances) garanti eder.
- **Design:** Sınırlı sayfa hiyerarşisi ve satış demosu odaklı çalışma için `light` design planning seçilmiştir. Light seviye belge sayısını hafif tutar (`DESIGN` / `DESIGN_RULES`), ancak projenin visual concept'ini, tipografi/kompozisyon/spacing ilkelerini ve anti-template tasarım kalitesini garanti eder. Sektör klişesi (ör. "sanayi = varsayılan lacivert") otomatik tasarım gerekçesi olarak kullanılmaz.

> `design_planning` için `none` profile yoktur. UI/UX applicable olduğundan `light` profile seçilmiştir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki firma ve hizmet bilgilerini koruyarak, firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak.

### Problem

Mevcut web sitesi (SITE123 altyapısı) firmanın temel bilgilerini sunmakta ancak görsel sunum, kurumsal algı, içerik hiyerarşisi ve potansiyel müşterilerle yapılacak satış görüşmesinde yaratacağı ilk izlenim açısından modernleştirilmeye son derece uygundur.

### Purpose

Firmanın mevcut web sitesindeki Disan Hidrolik Makine Trakya Yetkili Servisi tanımı ile 3 temel hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) öne çıkaran, satış görüşmesinde gösterilebilir, görsel olarak güçlü ve güven veren bir kurumsal frontend demo hazırlamak.

### Success Criteria

1. Demo ilk bakışta mevcut siteden belirgin biçimde daha modern ve profesyonel görünmelidir.
2. Tasarım generic kurumsal demo template'i hissi vermemeli; projeye özgü ayırt edilebilir bir visual concept taşımalıdır.
3. Firma uzmanlığı ve üç ana hizmet ziyaretçi tarafından hızlıca anlaşılmalıdır.
4. Kullanıcı İletişim ve CTA noktalarına (telefon, e-posta) kolayca ulaşabilmelidir.
5. Mobil ve masaüstü görünüm satış görüşmesinde sorunsuz gösterilecek kalitede ve responsive olmalıdır.
6. Demo mevcut firma beyanlarını korurken doğrulannamış yeni bilgi veya kanıtlanmamış iddia uydurmamalıdır.
7. Frontend yapısı, gelecekte gerçek backend/data entegrasyonuna imkan tanıyacak temiz presentation ve service/data boundary ilkelerini korumalıdır.
8. `implementation_planning: standard` çıktısı, yeni bir ajanın koda başlayabileceği netlikte execution plan sunmalıdır.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım, onarım veya yerinde teknik destek arayan işletmeler; yedek parça temini arayan makine ve ekipman kullanıcıları.
- **İkincil Kullanıcılar:** Firma hakkında güvenilirlik ve hizmet kapsamı araştıran satın alma/operasyon sorumluları; iletişim kurmak isteyen mevcut müşteriler.

### Core Flows

1. **Ana Sayfa Keşfi:** Ziyaretçi ana sayfaya girdiğinde firmanın uzmanlığını, mevcut sitesindeki Disan Hidrolik Makine Trakya Yetkili Servisi tanımını ve temel hizmetlerini hızlıca anlar.
2. **Hizmet İnceleme:** Ziyaretçi 3 temel hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel hiyerarşiyle detaylı inceler.
3. **İletişim & CTA Akışı:** Ziyaretçi telefon, e-posta veya hızlı erişim kanalları üzerinden firmaya kolayca ulaşır.

---

## 5. Scope Boundaries

### In Scope

- Modern ve responsive kurumsal frontend demo.
- Ana sayfa ve gerekli görülen kurumsal/hizmet/iletişim bölümleri.
- Mevcut firma ve hizmet içeriklerinin yeniden organize edilmesi.
- Telefon ve e-posta hızlı iletişim CTA'ları.
- Gelecekte gerçek data/backend bağlanmasını kolaylaştıracak temiz frontend service/data boundaries.

### Out of Scope

- İlk demo aşamasında gerçek admin / CMS paneli.
- Backend servisleri ve veritabanı uygulaması.
- Gerçek kullanıcı hesabı, login veya authentication.
- E-ticaret / online ödeme.
- Müşteri tarafından doğrulannamış yeni firma iddiaları, müşteri referansları veya teknik yetkinlik beyanları.
- Production deployment, domain ve hosting taşıma işlemleri.

### Future Possibilities

- Gelecekte gerçek içerik doğrulamasından sonra CMS/admin paneli entegrasyonu.
- İletişim formu / teklif talep akışı ve WhatsApp entegrasyonu.
- Production deployment ve mevcut domain yönlendirmesi.

---

## 6. Existing Project Context

### Current Reality

- Trakya Teknik Makine'nin yayında olan mevcut bir web sitesi vardır (SITE123 altyapısı, https://www.trakyateknikmakine.com/).
- Mevcut sitede Ana sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler ve İletişim içerikleri sunulmaktadır.
- Firma mevcut web sitesinde kendisini Disan Hidrolik Makine'nin Trakya bölgesindeki yetkili servisi olarak tanımlamaktadır.
- Öne çıkan 3 temel hizmet: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım.
- Demo için henüz yeni bir kod tabanı veya tasarım varlığı oluşturulmamıştır.

### Target State

- Mevcut firmanın web sitesinde beyan ettiği bilgileri koruyan, çok daha modern, profesyonel, responsive ve satış görüşmesinde gösterilebilir bir kurumsal frontend demo projesi.
- Presentation katmanı ile data boundary'si ayrılmış, gelecekte gerçek backend/data kaynağı eklenebilecek temiz mimari.

### Transition Scope

- Mevcut sitedeki firma, hizmet ve iletişim metinlerinin yeni demo yapısına taşınması.
- Mevcut SITE123 altyapısının veya eski tasarım kararlarının yeni demoya taşınmaması (eski tasarım otorite değildir).

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- İlk aşama frontend demo olacaktır.
- Uygulama stack'i Product Engine package/document selection ve teknik karar süreci tarafından belirlenecektir (ham kaynak dosyada zorunlu yeni stack dayatılmamıştır).
- Hızlı geliştirilebilir, kolay çalıştırılabilir ve demo görüşmesinde sorunsuz sunulabilir olmalıdır.
- Demo kodu throwaway mimari kabul edilmemeli; data/service boundary ayrılmalıdır.

### Current Data Source Reality

- Gerçek backend veya veritabanı yoktur.
- Veriler lokal/mock data katmanında tutulacaktır.

### Service / Data-Access Boundary Expectation

- UI presentation bileşenleri veriye doğrudan erişmek yerine bir service/data-access adapter boundary üzerinden erişecektir.
- Gelecekte gerçek bir API/backend eklendiğinde presentation bileşenlerinin yeniden yazılması gerekmeyecektir.

### Future Backend / Integration Context

- Gelecekte backend veya CMS eklendiğinde mock adapter yerine gerçek HTTP/API adapter bağlanabilir.

### Unresolved Technical Decisions

- Demo için kullanılacak tam frontend teknoloji yığını (exact frontend stack: ör. Vanilla HTML/JS, Vite/React, Tailwind/Vanilla CSS vb.) henüz kararlaştırılmamıştır; package/document resolution ve onay sürecinde kesinleştirilecektir.
- Harita entegrasyonu (Google Maps embed) ve iletişim formu işleyişi.

---

## 8. Design Context

### Known Brand / Design Inputs

- Mevcut site adresi: https://www.trakyateknikmakine.com/
- Mevcut firma adı: Trakya Teknik Makine
- Yetkili servis bilgisi: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi (mevcut site beyanı)

### Desired Character / Perception

- Modern, temiz, güven veren ve profesyonel endüstriyel/teknik kurumsal dil.
- Hızlı çözüm, teknik yetkinlik ve servis kalitesi hissi.

### Explicit Preferences / Constraints

- Mevcut sitenin tasarımı kopyalanmamalıdır.
- Sektör klişeleri (`sanayi = varsayılan lacivert`, `hero + üç kart + CTA şablonu`) otomatik tasarım kararı olarak kullanılmamalıdır.
- Light design planning belge sayısını azaltır; tasarım kalitesini veya özgünlüğünü düşürmez.

### Differentiation Notes

- Tipografi, kompozisyon, kontrollü boşluk kullanımı (spacing), yüzey hiyerarşisi ve mikro-etkileşimler ile projeye özgü ayırt edilebilir bir visual concept kurulmalıdır.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start brief | Yüksek (Source Context) | Proje kimliği, amacı, kapsamı ve hint'ler |
| SRC-002 | `https://www.trakyateknikmakine.com/` | Mevcut Web Sitesi | Yüksek (Mevcut Site İçeriği & Beyanları) | Mevcut sitedeki firma tanımı, hizmet metinleri ve iletişim bilgileri |

- `source_count`: 2

---

## 10. Known Decisions

- İlk teslimat satış görüşmesi amaçlı kurumsal frontend demo olacaktır.
- Delivery Profile için `Prototype`, Implementation Planning için `standard`, Design Planning için `light` seçilmiş ve onaylanmıştır.
- Mevcut sitedeki firma bilgileri ve beyanları kaynak olarak korunacak, eski görsel tasarım otorite kabul edilmeyecektir.
- Bilinmeyen/doğrulanmamış firma bilgileri veya müşteri iddiaları uydurulmayacaktır.
- Backend/API uydurulmayacak; temiz service/data boundary ilkesi uygulanacaktır.

---

## 11. Assumptions

| Assumption ID | Alan | Yapılan | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| ASM-001 | primary_language | Türkçe (`tr`) | safe | Proje Türk firması ve Trakya bölgesindeki müşteriler için hazırlandığından birincil dil Türkçedir. | proje bağlamı | approved |
| ASM-002 | contact_cta_behavior | tel: ve mailto: bağlantıları | safe | Mobil ve masaüstü cihazlarda doğrudan arama/e-posta başlatma standardı. | endüstri standardı | approved |

---

## 12. Conflicts

| Conflict ID | Tür | Çelişen A | Çelişen B | Karar | Gerekçe | Kullanıcıya | Durum |
|---|---|---|---|---|---|---|---|
| CON-001 | current_vs_desired | Mevcut SITE123 tasarımı | Yenilenmiş modern visual concept | Target vizyon esas alındı | Eski tasarım otorite değildir; firma metinleri ve mevcut sitede yer alan beyanlar korunur. | evet | resolved |

---

## 13. Open Questions / Unresolved Items

- OPQ-001 | Resmi yüksek çözünürlüklü marka/logo asset'leri mevcut mu, yoksa demo için vektörel/modern tipografik logo mu üretilmeli?
- OPQ-002 | İletişim bölümünde harita (Google Maps embed) ve WhatsApp hızlı erişim butonu bulunsun mu?
- OPQ-003 | Demo için kullanılacak kesin frontend teknoloji yığını nedir? (Package resolution sırasında kararlaştırılacak).

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** `2026-08-11T22:48:30+03:00`
- **Approved By:** `user`

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
- [x] `approved_by: user` için doğrudan approval kanıtı var.
