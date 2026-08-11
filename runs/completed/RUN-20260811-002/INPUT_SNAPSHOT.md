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
updated_at: "2026-08-11T22:25:44+03:00"
approved_at: "2026-08-11T22:25:44+03:00"
approved_by: "user"
supersedes: ""
source_type: "project-start"
source_count: 2
---

# Operational Input Snapshot: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!NOTE]
> Bu belge `RUN-20260811-002` çalışması için dondurulmuş immutable operasyonel girdi snapshot'ıdır.

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
- **Design:** Sınırlı sayfa hiyerarşisi ve satış demosu odaklı çalışma için `light` design planning önerilmiştir. Light seviye belge sayısını hafif tutar (`DESIGN` / `DESIGN_RULES`), ancak projenin visual concept'ini, tipografi/kompozisyon/spacing ilkelerini ve anti-template tasarım kalitesini garanti eder. Sektör klişesi (ör. "sanayi = varsayılan lacivert") otomatik tasarım gerekçesi olarak kullanılmaz.

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
6. Demo mevcut firma beyanlarını korurken doğrulanmamış yeni bilgi veya kanıtlanmamış iddia uydurmamalıdır.
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
- Müşteri tarafından doğrulanmamış yeni firma iddiaları, müşteri referansları veya teknik yetkinlik beyanları.
- Production deployment, domain ve hosting taşıma işlemleri.

---

## 6. Existing Project Context

### Current Reality

- Trakya Teknik Makine'nin yayında olan mevcut bir web sitesi vardır (SITE123 altyapısı, https://www.trakyateknikmakine.com/).
- Mevcut sitede Ana sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler ve İletişim içerikleri sunulmaktadır.
- Firma mevcut web sitesinde kendisini Disan Hidrolik Makine'nin Trakya bölgesindeki yetkili servisi olarak tanımlamaktadır.
- Öne çıkan 3 temel hizmet: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım.

### Target State

- Mevcut firmanın web sitesinde beyan ettiği bilgileri koruyan, çok daha modern, profesyonel, responsive ve satış görüşmesinde gösterilebilir bir kurumsal frontend demo projesi.
- Presentation katmanı ile data boundary'si ayrılmış, gelecekte gerçek backend/data kaynağı eklenebilecek temiz mimari.

---

## 7. Technical Context & Integration Readiness

- Demo frontend odaklı olacaktır.
- Gerçek backend veya veritabanı yoktur; mock/local data katmanı kullanılacaktır.
- Presentation bileşenleri ile veri katmanı service/adapter boundary üzerinden ayrılacaktır.
- Exact frontend stack package resolution aşamasında belirlenecektir.

---

## 8. Design Context

- Mevcut sitenin tasarımı kopyalanmayacak; özgün kurumsal görsel dil kurulacaktır.
- Sektör klişeleri (`sanayi = varsayılan lacivert`) otomatik tasarım kararı olarak kullanılmayacaktır.
- `light` design planning derinliği anti-template kalite tabanını düşürmez.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start brief | Yüksek (Source Context) | Proje kimliği, amacı, kapsamı ve hint'ler |
| SRC-002 | `https://www.trakyateknikmakine.com/` | Mevcut Web Sitesi | Yüksek (Mevcut Site İçeriği & Beyanları) | Mevcut sitedeki firma tanımı, hizmet metinleri ve iletişim bilgileri |

- `source_count`: 2

---

## 10. Known Decisions

- Sales pitch amaçlı kurumsal frontend demo üretilecektir.
- Delivery Profile `Prototype`, Implementation Planning `standard`, Design Planning `light` onaylanmıştır.
- Temiz service/data boundary korunacaktır.
