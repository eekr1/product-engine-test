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
created_at: "2026-08-15T01:17:25+03:00"
updated_at: "2026-08-15T01:18:11+03:00"
approved_at: "2026-08-15T01:18:11+03:00"
approved_by: "user"
supersedes: ""
source_type: "project-start"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical approved project truth girdisidir. Explicit user approval ile onaylanmıştır.

---

## 1. Original Brief

```text
Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın hizmetlerini daha profesyonel ve güven veren biçimde sunan modern bir frontend demo ile yeniden ele almak. Demo Enis tarafından potansiyel satış görüşmesi amacıyla hazırlanacaktır. Mevcut site (SITE123 tabanlı, trakyateknikmakine.com) Ana sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler ve İletişim içeriklerini sunmakta ve firmayı Disan Hidrolik Makine Trakya Yetkili Servisi olarak tanımlamaktadır. Temel hizmetler: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım.
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page` (Kurumsal web sitesi / satış demosu)
- **Project State:** `existing`
- **Delivery Profile:** `Prototype`
- **Implementation Planning:** `standard`
- **Design Planning:** `light`
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation (`standard`):** Projenin mimari sınırlarını, dalga (wave) planını, mevcut durumunu ve ajan talimatlarını eksiksiz tanımlamak için Product Engine agent-ready minimum seviyesidir. Satış demosu frontend odağında olsa bile kod ve mimari kalite tabanını korumak için gereklidir.
- **Design (`light`):** Sınırlı belge sayısı (temel olarak `DESIGN_RULES`) ile projeye özgü ayırt edilebilir görsel konsept, tipografi, renk, spacing, yüzey sistemi ve responsive ilkeleri kurmak için yeterlidir. Satış görüşmesinde gösterilecek frontend demo için idealdir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki gerçek firma ve hizmet bilgilerini koruyarak, satış görüşmesinde potansiyel müşteriye gösterilmek üzere modern, profesyonel, yüksek kaliteli bir kurumsal frontend web sitesi demosu hazırlanması.

### Problem

Mevcut SITE123 tabanlı web sitesi temel bilgileri sunmakla birlikte görsel sunum, kurumsal algı, içerik hiyerarşisi ve satış görüşmesinde yaratacağı ilk izlenim açısından modernleştirilmeye uygundur.

### Purpose

Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini koruyarak daha güçlü, modern, profesyonel ve satış görüşmesinde gösterilebilir bir kurumsal web sitesi demosu hazırlamak.

### Success Criteria

1. Demo ilk bakışta mevcut siteden belirgin biçimde daha modern ve profesyonel görünmeli.
2. Tasarım generic kurumsal demo şablonu hissi vermemeli, projeye özgü bir görsel kimlik taşımalı.
3. Firma ve 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) hızlıca anlaşılmalı.
4. Disan Hidrolik Trakya yetkili servisi vurgusu açıkça görünmeli.
5. İletişim CTA'larına kolay erişilebilmeli.
6. Masaüstü ve mobil deneyim sorunsuz çalışmalı.
7. Mevcut gerçek firma bilgileri korunmalı, kanıtlanmamış iddialar türetilmemeli.
8. Frontend service/data boundary temiz kurulmalı, gelecekte backend entegrasyonunu kolaylaştırmalı.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde makine bakım, onarım veya teknik servis ihtiyacı olan işletmeler; yedek parça temini arayan makine/ekipman kullanıcıları; yerinde teknik destek arayan müşteriler.
- **İkincil Kullanıcılar:** Güvenilirlik ve hizmet kapsamı araştıran satın alma/operasyon sorumluları; iletişim kurmak isteyen mevcut müşteriler.

### Core Flows

1. Ziyaretçinin ana sayfada firmanın uzmanlığını ve Disan Hidrolik yetkili servisi kimliğini hızlıca kavraması.
2. Hizmet detaylarının (Yedek Parça, Yerinde Destek, Bakım-Onarım) görsel ve metinsel hiyerarşi ile incelenmesi.
3. Güven unsurlarının (hakkımızda, yetkili servis bilgisi) incelenmesi.
4. İletişim kanalları (telefon, e-posta, iletişim CTA) üzerinden firmaya kolayca ulaşılması.

---

## 5. Scope Boundaries

### In Scope

- Modern ve responsive kurumsal frontend demo.
- Ana sayfa ve gerekli görülen kurumsal/hizmet/iletişim bölüm ve akışları.
- Mevcut gerçek firma içeriğinin yeniden organize edilmesi ve güçlü sunumu.
- Telefon ve e-posta temel iletişim CTA'ları.
- Clean service/data-access boundary ve local mock data yapısı.

### Out of Scope

- Demo aşamasında gerçek admin paneli.
- Backend ve veritabanının gerçekten uygulanması.
- Kullanıcı hesabı / authentication.
- Online ödeme veya e-ticaret.
- Müşteri tarafından doğrulanmamış yeni firma iddiaları, referanslar veya teknik yetkinlikler.
- Production deployment ve mevcut domain taşıması.

### Future Possibilities

- Satış görüşmesi sonrası gerçek içerik doğrulaması.
- Production geliştirme, backend API ve veritabanı entegrasyonu.
- Yönetim paneli (CMS/admin).
- Hosting/domain geçişi ve canlıya alma.

---

## 6. Existing Project Context

### Current Reality

Trakya Teknik Makine'nin yayında olan SITE123 tabanlı bir web sitesi (`https://www.trakyateknikmakine.com/`) mevcuttur. Site Ana sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler ve İletişim bölümlerini içerir. Firma Disan Hidrolik Makine Trakya Yetkili Servisidir ve 3 ana hizmet sunmaktadır: Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım.

### Target State

Mevcut gerçek firma ve hizmet bilgilerini koruyan, modern endüstriyel görsel dile ve tipografiye sahip, responsive, modüler ve temiz frontend mimarisine sahip satış demosu.

### Transition Scope

Mevcut sitedeki doğrulanmış firma bilgileri ve iletişim detayları aktarılacak, ancak eski SITE123 görsel tasarımı ve altyapısı tamamen yenilenecektir.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- İlk aşama frontend demo olacaktır.
- Stack seçimi Product Engine package/document selection aşamasında kesinleşecektir (unresolved stack durumunda stack-neutral kalınacaktır).
- presentation component'leri mock dataya gömülmeyecek; service/adapter sınırıyla ayrılacaktır.

### Current Data Source Reality

- Demo verileri yerel mock/config nesnelerinden mock adapter aracılığıyla sağlanacaktır.

### Service / Data-Access Boundary Expectation

- `UI Component -> Service Interface -> Mock Adapter (Bugün) / Real API Adapter (Gelecekte)`.

### Future Backend / Integration Context

- Gerçek backend eklendiğinde presentation katmanı etkilenmeden yalnızca adapter değiştirilecektir.

### Unresolved Technical Decisions

- Kesin frontend framework/build tool seçimi (Engine package selection kararına tabidir).

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma Adı: Trakya Teknik Makine.
- Servis Yetkisi: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi.

### Desired Character / Perception

- Modern, teknik, güven veren, profesyonel, endüstriyel uzmanlık ve hızlı çözüm hissi.

### Explicit Preferences / Constraints

- Sektör klişelerinden (otomatik lacivert hero + 3 kart şablonu) kaçınılmalı; projeye özgü bir visual concept kurulmalıdır.

### Differentiation Notes

- Tipografi, kompozisyon, renk dengesi, mikro etkileşimler ve güçlü hizmet sunumu ile özgün endüstriyel kurumsal kimlik.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start brief | Yüksek | Proje başlangıç kaynağı ve müşteri bağlamı |
| SRC-02 | `https://www.trakyateknikmakine.com/` | mevcut website | Yüksek | Mevcut firma bilgileri, hizmet tanımları ve iletişim detayları |

---

## 10. Known Decisions

- İlk aşama çıktısı satış amaçlı frontend demo olacaktır.
- Delivery profile `Prototype`, implementation planning `standard`, design planning `light` seçilmiştir.
- Mevcut sitenin görsel tasarımı yenilenecektir.
- Doğrulanmamış firma bilgisi türetilmeyecektir.
- Canonical Engine lifecycle ve explicit approval gate korunacaktır.

---

## 11. Assumptions

- **ASM-01 (Tamamlanabilir Eksiklik - `status: recorded`):** Demo lokal geliştirme/önizleme ortamında sunulacaktır; özel bir hosting kısıtı yoktur.
- **ASM-02 (Tamamlanabilir Eksiklik - `status: recorded`):** İletişim formu demo aşamasında frontend validation ve mock bildirim geri bildirimi sağlayacaktır.

---

## 12. Conflicts

- Herhangi bir kritik çelişki tespit edilmemiştir.

---

## 13. Open Questions / Unresolved Items

- **UNR-01:** Firmanın resmi vektörel logo asset'leri mevcut mu? (Demo için geçici SVG amblem kullanılabilir).
- **UNR-02:** İletişim alanında dinamik harita veya WhatsApp hızlı iletişim butonu dahil edilsin mi?
- **UNR-03:** Teklif talep formu / hizmet detay modalları demo kapsamına dahil edilsin mi?

---

## 14. Approval & Verification

- **Status:** `approved`
- **Approved At:** 2026-08-15T01:18:11+03:00
- **Approved By:** user

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable olduğu için `design_planning` `light` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya sunuldu ve onaylandı.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları doğru.
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (2 kaynak).
- [x] Canonical explicit user approval alındı (`"Pending intake'i onaylıyorum, run'ı başlat."`).
- [x] `approved_by: user` yazıldı.
