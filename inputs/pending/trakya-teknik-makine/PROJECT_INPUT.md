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
created_at: "2026-08-12T02:31:00+03:00"
updated_at: "2026-08-12T02:32:21+03:00"
approved_at: "2026-08-12T02:32:21+03:00"
approved_by: "user"
supersedes: null
source_type: "project_start_scenario"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `pending` durumunda generation başlatılamaz. `approved` yalnız canonical explicit user approval ile oluşabilir; IDE/tool/plan auto-approval geçerli değildir.

---

## 1. Original Brief

```text
Trakya Teknik Makine kurumsal web sitesi yenileme demo projesi.
Kaynak: project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md

Amaç: Mevcut web sitesindeki gerçek firma ve hizmet bilgilerini koruyarak, satış görüşmesinde potansiyel müşteriye sunulacak modern, güven veren ve profesyonel bir kurumsal frontend demosu hazırlamak.
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page` (Kurumsal web sitesi / satış demosu)
- **Project State:** `existing` (Mevcut SITE123 altyapısındaki trakyateknikmakine.com sitesi ve firma gerçekliği kaynak alınmaktadır)
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (standard):** Projenin ilk hedefi satış demosu olsa da, yetkin bir ajanın mimari karmaşa yaşamadan execution wave'lerini doğrudan uygulayabilmesi için agent-ready minimum olan `standard` seviye seçilmiştir.
- **Design (light):** Sınırlı sayfa ve bölüm içeren kurumsal frontend satış demosu için gereksiz belge üretmeden güçlü visual concept ve tasarım kuralları sağlayacak `light` profil seçilmiştir.

> `design_planning` için `none` profile yoktur. UI/UX applicable olduğu için canonical `light` profil belirlenmiştir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın gerçek hizmetlerini ve Disan Hidrolik yetkili servisliğini daha profesyonel, modern ve güven veren biçimde sunan bir kurumsal frontend demosu ile yeniden ele almak.

### Problem

Mevcut web sitesi SITE123 altyapısında bulunmakta olup firma ve hizmet bilgilerini sunsa da görsel hiyerarşi, kurumsal algı ve satış görüşmesinde yaratacağı ilk izlenim açısından modernleştirilmeye ihtiyaç duymaktadır.

### Purpose

Firmanın gerçek kimliğini ve 3 temel hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) öne çıkaran, potansiyel müşteri görüşmesinde gösterilebilir kalitede bir kurumsal frontend demo üretmek.

### Success Criteria

- İlk bakışta mevcut siteden belirgin biçimde daha modern ve profesyonel görünüm.
- Projeye özgü, generic template hissi vermeyen visual concept.
- Firma yetkinliğinin ve 3 temel hizmet alanının hızlıca anlaşılması.
- Masaüstü ve mobil responsive görünüm mükemmelliği.
- Kanıtlanmamış firma bilgisi uydurulmaması.
- Frontend yapısının clean presentation/service boundary ile ileride backend bağlanmasını kolaylaştırması.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım, onarım veya teknik servis arayan işletmeler; yedek parça temini arayan ekipman kullanıcıları; yerinde destek arayan müşteriler.
- **İkincil Kullanıcılar:** Satın alma ve operasyon sorumluları; iletişim bilgisi arayan mevcut müşteriler.

### Core Flows

1. Ziyaretçi ana sayfadan firma kimliğini ve Disan Hidrolik Trakya yetkili servisi olduğunu anlar.
2. Ziyaretçi 3 temel hizmet alanını (Yedek Parça, Yerinde Destek, Bakım-Onarım) görsel hiyerarşiyle inceler.
3. Ziyaretçi kurumsal güven unsurlarını ve firma hakkındaki bilgileri değerlendirir.
4. Ziyaretçi telefon/e-posta gibi doğrudan iletişim CTA'ları üzerinden firmaya ulaşır.

---

## 5. Scope Boundaries

### In Scope

- Responsive kurumsal frontend demo arayüzü.
- Ana sayfa ve kurumsal/hizmet/iletişim bölümleri.
- Mevcut gerçek firma metinlerinin modern hiyerarşiyle düzenlenmesi.
- Doğrudan telefon ve e-posta CTA'ları.
- Dynamic responsive layout ve projeye özgü visual theme.
- Clean presentation ve mock service layer boundary (integration readiness).

### Out of Scope

- İlk aşamada gerçek admin paneli.
- Arka uç (backend) ve veritabanı uygulaması.
- Kullanıcı hesabı / authentication.
- Online ödeme veya e-ticaret altyapısı.
- Müşteri tarafından doğrulanmamış firma iddiaları veya sertifikalar.
- Production deployment ve mevcut domain/hosting taşınması.

### Future Possibilities

- Gerçek backend ve içerik yönetim paneli (CMS) entegrasyonu.
- Etkileşimli teklif alma veya servis talep formu.
- Production hosting, SSL ve domain geçiş operasyonu.

---

## 6. Existing Project Context

### Current Reality

- **Mevcut URL:** https://www.trakyateknikmakine.com/
- **Altyapı:** SITE123
- **Mevcut Sayfalar/Bölümler:** Ana sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler, İletişim.
- **Doğrulanmış İçerik:** Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi; 3 Hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım).

### Target State

- SITE123 bağımlılığından bağımsız, modern web standartlarında inşa edilmiş, projeye özgü tasarım diline sahip kurumsal frontend demo.

### Transition Scope

- Mevcut sitedeki doğrulanmış firma ve hizmet metinleri yeni yapıya taşınır.
- Mevcut sitenin şablon ve görsel tasarım kararları geçersiz sayılır; sıfırdan modern visual concept kurulur.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- Hızlı çalıştırılabilir ve kolay sunulabilir frontend demo.
- Presentation katmanı ile mock data/service katmanı ayrılmalıdır.
- Exact frontend framework/tooling seçimi package/document resolution aşamasında dondurulacaktır (stack-neutral pending state).

### Current Data Source Reality

- Statik/mock veriler local data/service katmanında tanımlanacaktır.

### Service / Data-Access Boundary Expectation

- UI component'leri mock veriyi doğrudan JSX/HTML içine gömmeyecek; bir service/data boundary üzerinden erişecektir.

### Future Backend / Integration Context

- İleride gerçek API eklendiğinde yalnızca service adapter değiştirilerek UI refactor edilmeden entegrasyon sağlanabilecektir.

### Unresolved Technical Decisions

- Exact build tool / frontend library (Vanilla JS/CSS vs Vite/React vs Next.js) henüz kesinleşmemiştir. Stack-neutral tanım korunmaktadır.

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma Adı: Trakya Teknik Makine
- Yetkili Servislik: Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi
- Mevcut Renk/İçerik Kullanımı: Endüstriyel servis bağlamı.

### Desired Character / Perception

- Modern, güven veren, teknik olarak yetkin, dinamik, temiz ve profesyonel endüstriyel duruş.

### Explicit Preferences / Constraints

- Mevcut SITE123 tasarımı kopyalanmayacaktır.
- Sektör klişesi (ör. otomatik düz lacivert hero + 3 kart) varsayılan tasarım kuralı olarak kullanılmayacaktır.

### Differentiation Notes

- Modern tipografi, özenli spacing, derinlikli yüzey sistemi ve mikro etkileşimler ile özgün bir kurumsal kimlik sunulacaktır.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Proje Başlangıç Senaryosu | Yüksek | Temel proje amacı, kapsamı ve kısıtları |
| SRC-02 | `https://www.trakyateknikmakine.com/` | Mevcut Web Sitesi | Doğrulanmış Firma Bilgisi | Firma metinleri, hizmetler ve iletişim bilgileri |

---

## 10. Known Decisions

- Proje ilk aşamada potansiyel müşteri görüşmesi için hazırlanan bir frontend demo olacaktır.
- `delivery_profile: Prototype`, `implementation_planning: standard`, `design_planning: light` profilleri dondurulmak üzere önerilmiştir.
- Mevcut sitedeki doğrulanmış firma bilgileri temel alınacak; tasarım kararları sıfırdan oluşturulacaktır.
- Doğrulanmamış yeni firma iddiası uydurulmayacaktır.
- Frontend architecture throwaway kabul edilmeyecek; decoupled data layer kurulacaktır.

---

## 11. Assumptions

- **ASM-01:** (Safe/Confirmed) Demo aşaması için lokal/static mock veri kullanımı müşteri sunumu açısından yeterlidir.
- **ASM-02:** (Safe/Confirmed) Telefon ve e-posta bağlantıları ilk demo için yeterli iletişim CTA'larıdır.
- **ASM-03:** (Safe/Confirmed) Exact frontend tech stack, pending intake aşamasında stack-neutral kalacak ve package resolution adımında kesinleştirilecektir.

---

## 12. Conflicts

- Herhangi bir kritik çelişki tespit edilmemiştir. (None)

---

## 13. Open Questions / Unresolved Items

- **OQ-01:** Firmanın yüksek çözünürlüklü resmi logosu ve vektörel materyalleri mevcut mu? (Demo için SVG/CSS marka kimliği mi türetilecek?)
- **OQ-02:** İletişim formu, WhatsApp hızlı erişim veya harita entegrasyonu demoya dahil edilsin mi?
- **OQ-03:** Frontend mimarisinde Vanilla JS/CSS mi yoksa Vite + React / modern SPA stack'i mi tercih edilsin?

---

## 14. Approval & Verification

- **Status:** `pending`
- **Approved At:** null
- **Approved By:** null

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable olduğu için `design_planning` `light` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (2).
- [ ] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [ ] `approved_by: user` için doğrudan approval kanıtı var.
