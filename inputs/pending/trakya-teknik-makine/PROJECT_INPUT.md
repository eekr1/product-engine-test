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
created_at: "2026-08-13T03:51:49+03:00"
updated_at: "2026-08-13T03:51:49+03:00"
approved_at: ""
approved_by: ""
supersedes: ""
source_type: "project-start-file"
source_count: 2
---

# Project Input: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo

> [!IMPORTANT]
> Bu belge Product Engine'in canonical project truth girdisidir. `pending` durumunda generation başlatılamaz. `approved` yalnız canonical explicit user approval ile oluşabilir; IDE/tool/plan auto-approval geçerli değildir.

---

## 1. Original Brief

```text
Trakya Teknik Makine'nin mevcut SITE123 tabanlı kurumsal web sitesini (trakyateknikmakine.com), firmanın gerçek bilgilerini ve Disan Hidrolik Trakya yetkili servis kimliğini koruyarak, satış görüşmesinde gösterilmek üzere modern, profesyonel ve yüksek kaliteli bir frontend demo ile yeniden ele almak. Demo; yedek parça temini, yerinde teknik destek, makine bakım ve onarım hizmetlerini güçlü bir görsel hiyerarşiyle sunmalı, temiz data/service boundary ile gelecekteki backend entegrasyonuna hazır (integration-ready) olmalıdır.
```

---

## 2. Project Identity & Planning Profiles

- **Project Name:** Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Project Slug:** `trakya-teknik-makine`
- **Project Type:** `landing-page` (Kurumsal sunum / çok bölümlü tanıtım sitesi)
- **Project State:** `existing` (Mevcut web sitesi, marka kimliği ve hizmet gerçekliği bulunmaktadır)
- **Delivery Profile:** `Prototype` (Satış görüşmesi amaçlı frontend demo; olgunluk sınırlıdır ancak mimari ve görsel kalite tabanı yüksektir)
- **Implementation Planning:** `standard` (Agent-ready execution planning minimumu; wave yapısı, teknik bağlam ve veri sınırları tanımlanır)
- **Design Planning:** `light` (Görsel ve UX yönünü tanımlayan güçlü `DESIGN_RULES`; gereksiz belge üretilmez ancak projeye özgü non-generic visual concept kurulur)
- **Primary Language:** `tr`

### Planning Profile Rationale

- **Implementation:** Projenin ilk hedefi satış görüşmesi için frontend demo geliştirmektir. `standard` profil, ajanın ek mimari planlama yapmadan ilk wave'i uygulamaya başlaması için agent-ready teknik sınırları, wave planlarını ve mock data adapter yapısını sağlayacak minimum yeterli planlama seviyesidir.
- **Design:** Demo tekil bir kurumsal presentation / landing deneyimi odaklıdır. `light` tasarım profili, projeyi generic şablonlardan ayıracak özgün visual concept, tipografi, spacing, yüzey sistemi ve layout kurallarını (`DESIGN_RULES`) tanımlamak için yeterlidir ve belge kalabalığı yaratmaz.

> `design_planning` için `none` profile yoktur. UI/UX applicable değilse metadata değeri yalnız operasyonel temsil amacıyla `N/A` olabilir; bu yeni bir profile değildir.

---

## 3. Problem, Purpose & Success

### Project Summary

Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın doğrulanmış hizmetlerini ve yetkili servis kimliğini koruyarak satış görüşmesinde güven yaratacak modern bir frontend demo ile yenilemek.

### Problem

Mevcut web sitesi (SITE123 altyapısında) temel bilgileri sunmaktadır ancak görsel sunum, içerik hiyerarşisi, tipografi, responsive bütünlük ve potansiyel müşteriye verilecek kurumsal güven algısı açısından modern standartların gerisindedir. Satış görüşmesinde dijital yetkinliği güçlü şekilde yansıtamamaktadır.

### Purpose

Firmanın Trakya bölgesindeki makine bakım, onarım ve yedek parça alanındaki gücünü ve Disan Hidrolik yetkili servis kimliğini yansıtan, modern, hızlı, mobil uyumlu ve müşteri görüşmelerinde "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını açıkça veren proaktif bir satış demosu üretmek.

### Success Criteria

- Demo ilk bakışta mevcut siteden belirgin biçimde daha modern, profesyonel ve güven verici görünmeli.
- Tasarım generic sanayi/kurumsal tema klişelerinden uzak, projeye özgü özgün bir visual concept taşımalı.
- Firma bilgileri ve üç temel hizmet (Yedek Parça, Yerinde Destek, Bakım/Onarım) ve Disan Hidrolik yetkili servisi kimliği açıkça anlaşılmalı.
- Mobil ve masaüstü görünümler satış görüşmesinde gösterilecek kalitede olmalı.
- Mevcut doğrulanmış firma bilgileri korunmalı, kanıtlanmamış iddia veya uydurma veri üretilmemeli.
- Frontend mimarisi, mock data layer ile UI sorumluluklarını ayırarak gelecekte gerçek backend/API geçişine hazır (integration-ready) olmalı.
- `implementation_planning: standard` sonucu ilk execution wave'ini doğrudan başlatacak netlikte plan üretilmeli.

---

## 4. Target Users & Core Flows

### Users / Roles

- **Birincil Kullanıcılar:** Trakya bölgesinde endüstriyel makine bakım, onarım, yedek parça veya yerinde servis hizmeti arayan işletme sahipleri ve fabrika/tesis yöneticileri.
- **İkincil Kullanıcılar:** Tedarikçi ve hizmet sağlayıcı araştırması yapan satın alma ve operasyon sorumluları.
- **Satış Bağlamı Kullanıcısı (Enis):** Potansiyel müşteriye demoyu sunacak ve yenileme teklifini destekleyecek satış temsilcisi/geliştirici.

### Core Flows

1. **Farkındalık ve İlk İzlenim:** Ziyaretçi sitede ilk 3 saniyede firmanın ne yaptığını, uzmanlık alanını ve Disan Hidrolik yetkili servisi olduğunu kavrar.
2. **Hizmet İnceleme:** Ziyaretçi 3 temel hizmeti (Yedek Parça, Yerinde Destek, Bakım/Onarım) görsel detaylar ve açıklayıcı hiyerarşi ile inceler.
3. **Güven Doğrulama:** Ziyaretçi yetkili servis kimliğini, tecrübe vurgusunu ve iletişim/lokasyon şeffaflığını görür.
4. **Hızlı İletişim / CTA:** Ziyaretçi/Müşteri adayının tek tıkla arama yapabilmesi veya e-posta/iletişim CTA'larına erişebilmesi.

---

## 5. Scope Boundaries

### In Scope

- Modern, responsive kurumsal frontend demo.
- Ana sayfa / tekil kurumsal presentation landing yapısı ve hizmet/iletişim bölümleri.
- Mevcut gerçek firma içeriğinin yeniden organize edilerek sunulması.
- Disan Hidrolik yetkili servis vurgusu.
- Üç temel hizmetin güçlü görsel kartlar/bölümler ile sunumu.
- Telefon ve e-posta hızlı iletişim CTA'ları.
- Presentation ile data access katmanını ayıran temiz mock/local data adapter yapısı (integration-ready).

### Out of Scope

- İlk aşamada gerçek admin paneli / CMS.
- Backend, veritabanı veya API sunucusunun kurulması.
- Gerçek kullanıcı girişi / authentication.
- Online ödeme veya e-ticaret altyapısı.
- Müşteri tarafından doğrulanmamış yeni firma iddiaları, referanslar veya teknik belgeler.
- Production deployment ve mevcut SITE123 domaininin canlıya taşınması.

### Future Possibilities

- Satış sonrası müşteri onayı alındığında gerçek CMS/Admin paneli entegrasyonu.
- Gerçek iletişim formu backend API'si ve SMS/E-posta bildirim altyapısı.
- Dinamik katalog / yedek parça stok sorgulama modülü.
- Canlı harita, WhatsApp hızlı destek hattı ve teklif alma formu.

> Future scope bugünkü committed scope gibi yazılamaz.

---

## 6. Existing Project Context

### Current Reality (Doğrulanmış Firma Gerçekleri)

- **Mevcut Web Sitesi:** `https://www.trakyateknikmakine.com/` (SITE123 altyapısı üzerinde yayınlanmaktadır).
- **Firma Kimliği:** Trakya Teknik Makine.
- **Yetkili Servis:** Disan Hidrolik Makine'nin Trakya Bölge Yetkili Servisi.
- **Üç Temel Hizmet:**
  1. Yedek Parça Temini
  2. Yerinde Teknik Destek
  3. Makine Bakım ve Onarım
- **Mevcut Sayfa/Bölüm Yapısı:** Ana Sayfa, Hakkında, Hizmetlerimiz, Hakkımızda Söylenenler, İletişim.

### Target State (Yeni Demo Hedefi)

- SITE123 bağımlılığından tamamen bağımsız, modern web standartlarında inşa edilmiş responsive frontend demo.
- Güven, teknik yetkinlik ve endüstriyel profesyonellik yansıtan özgün visual direction.
- Katmanlı frontend mimarisi (UI Presentation $\rightarrow$ Service/Data Boundary $\rightarrow$ Local Mock Adapter).

### Transition Scope (Geçiş ve Dönüşüm Kapsamı)

- Mevcut sitedeki doğrulanmış metin ve hizmet bilgileri korunarak yeniden yapılandırılacak.
- Mevcut sitenin SITE123 şablon tasarımı kopyalanmayacak; sıfırdan modern bir tasarım dili kurulacak.
- Mevcut site sadece firma bilgisi kaynağı ve karşılaştırma referansıdır.

---

## 7. Technical Context & Integration Readiness

### Technical Preferences / Constraints

- İlk aşama frontend demo olacaktır.
- Stack seçimi pending aşamasında stack-neutral tutulur (local preview environment).
- Kod kalitesi throwaway olarak ele alınmayacak; bileşen mimarisi temiz ve sürdürülebilir olacaktır.
- Harici ağır kütüphaneler yerine performanslı ve hafif bir frontend yapısı tercih edilecektir.

### Current Data Source Reality

- Veriler local mock/json veya TypeScript data objeleri üzerinden sağlanacaktır.
- Presentation component'leri veriyi doğrudan hardcode yazmayacak, mock data service/adapter üzerinden okuyacaktır.

### Service / Data-Access Boundary Expectation

```text
[UI Presentation Components] 
         ↓ (Typed Interface / Service Layer)
[Mock Data Adapter (Bugün)] → [Real API Adapter (Gelecekte)]
```

### Future Backend / Integration Context

- Gelecekte bir REST veya GraphQL API eklendiğinde, sadece Data Adapter katmanı değiştirilecek; UI component'leri yeniden yazılmayacaktır.
- Ortam değişkenleri (`.env`) altyapısı hazır tutulacaktır.

### Unresolved Technical Decisions

- Exact frontend stack / runtime (Vanilla JS, React, Vite vb.) henüz approved aşamasında kesinleştirilmek üzere açık bırakılmıştır.

> Backend/API henüz approved scope değilse gerçekmiş gibi endpoint, database veya stack üretilmez. Integration readiness yalnız temiz boundary beklentisidir.

---

## 8. Design Context

### Known Brand / Design Inputs

- Firma Adı: Trakya Teknik Makine
- Sektör: Endüstriyel Makine Bakım, Onarım ve Hidrolik Servis
- Yetkili Marka: Disan Hidrolik Makine

### Desired Character / Perception

- Güvenilir, teknik olarak uzman, hızlı müdahale eden, kurumsal, modern ve net.

### Explicit Preferences / Constraints

- **Sektör Klişelerinden Kaçınma:** Sanayi projesi diye otomatik olarak "klasik koyu lacivert + turuncu + 3 kutulu hero" şablonuna düşülmemelidir.
- **Tipografi ve Spacing:** Modern endüstriyel hissi veren temiz, okunabilir tipografi ve geniş nefes alan layout.
- **İçerik Vurgusu:** Yetkili servis logosu/vurgusu ve 3 ana hizmet ön planda olmalıdır.

### Differentiation Notes

- Tasarım generic bootstrap/template hissi vermemeli; Trakya Teknik Makine'ye özel hazırlandığı hissini vermelidir.
- Light design planning kapsamında üretilecek `DESIGN_RULES` belgesi, bu özgün görsel dili net biçimde kodlayacaktır.

> Sektör klişesi design decision değildir. `design_planning: light` dahi non-generic design quality floor'a tabidir.

---

## 9. Sources & Provenance

| Source ID | Kaynak | Tür | Güven Seviyesi | Kullanım Amacı |
|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Proje Başlangıç Brief'i | Yüksek | Proje hedefleri, kapsamı ve kısıtlarının ana kaynağı |
| SRC-002 | `https://www.trakyateknikmakine.com/` | Mevcut Yayındaki Firma Web Sitesi | Tam (Firma Gerçeği) | Firma adı, hizmetler, yetkili servis statüsü ve iletişim bilgilerinin doğrulanması |

- `source_count`: 2
- Secret/token/password içermez.
- Machine-dependent absolute path içermez.

---

## 10. Known Decisions

- Karar 1: Proje satış amaçlı bir frontend demo olarak geliştirilecektir.
- Karar 2: Mevcut sitedeki doğrulanmış firma bilgileri (Disan Hidrolik yetkili servisi, 3 ana hizmet) temel alınacaktır.
- Karar 3: Mevcut sitenin SITE123 görsel tasarımı bağlayıcı değildir; yeni özgün tasarım yapılacaktır.
- Karar 4: Demo kapsamı kod ve mimari kalite tabanını düşürmeyecektir (Service/Data boundary korunacaktır).
- Karar 5: Product Engine canonical lifecycle ve explicit user approval kuralları eksiksiz uygulanacaktır.

---

## 11. Assumptions

```text
Assumption ID : ASM-001
Alan          : primary_language
Yapılan       : Türkçe (tr)
Sınıf         : safe
Gerekçe       : Firma Trakya bölgesinde faaliyet göstermekte ve mevcut sitesi Türkçe içerik sunmaktadır.
Kaynak        : Proje bağlamı ve mevcut site
Durum         : pending_review

Assumption ID : ASM-002
Alan          : project_type
Yapılan       : landing-page
Sınıf         : safe
Gerekçe       : Kurumsal sunum ve hizmet tanıtımı tekil/çok bölümlü landing yapısına uygundur.
Kaynak        : Proje bağlamı
Durum         : pending_review

Assumption ID : ASM-003
Alan          : exact_frontend_stack
Yapılan       : Pending aşamasında stack-neutral tutuldu
Sınıf         : bounded
Gerekçe       : Kullanıcı henüz exact framework/tooling seçimi yapmamıştır; approval aşamasında netleştirilebilir.
Kaynak        : Product Engine Stack-Neutral Pending Rule
Durum         : pending_review
```

Her assumption `engine/ASSUMPTION_RULES.md` sınıf/status kurallarına uymaktadır.

---

## 12. Conflicts

```text
Conflict ID   : CON-001
Tür           : user_input vs engine_contract
Çelişen A     : TRAKYA_TEKNIK_MAKINE_PROJECT.md içinde "proje modu: yeni" yazmaktadır.
Çelişen B     : engine/PROJECT_INTAKE.md kuralı: "Mevcut website/firma gerçekliği varsa ve bu kaynak geçiş bağlamı ise project_state MUST BE existing". Ayrıca brief'in kendisi mevcut siteden bahsetmektedir.
Karar         : Engine authority (PROJECT_INTAKE.md) esas alınarak project_state: existing olarak belirlendi.
Gerekçe       : Kaynak Otorite Sırası (CONFLICT_RESOLUTION.md) gereğince Engine sözleşmesi pre-run source material'in üzerindedir.
Kullanıcıya   : Bildirildi (Pending Input raporuna eklendi).
Durum         : resolved
```

Critical conflict kalmamıştır.

---

## 13. Open Questions / Unresolved Items

1. **Yüksek Çözünürlüklü Marka Varlıkları:** Firmanın Disan Hidrolik ve Trakya Teknik Makine logosu için yüksek kaliteli görsel/vektör asset'leri mevcut mu? (Demo için vektörel/temiz ikonlar varsayılacaktır).
2. **İletişim Kanal Tercihleri:** Demoda telefon/e-posta haricinde doğrudan WhatsApp butonu veya interaktif teklif formu gösterilmesi isteniyor mu?
3. **Exact Frontend Stack Kararı:** Demo geliştiriminde tercih edilecek spesifik frontend teknolojisi (ör. Vanilla HTML/JS/CSS, Vite + React, Tailwind kullanımı vb.) ne olmalıdır? (Seçim onay kapısında netleştirilecektir).

---

## 14. Approval & Verification

- **Status:** `pending`
- **Approved At:** ""
- **Approved By:** ""

### Canonical Approval Checklist

- [x] `project_name`, `project_purpose`, `project_type`, `project_state`, `delivery_profile`, `implementation_planning`, `primary_language` tamamlandı.
- [x] UI/UX applicable ise `design_planning` `light` olarak kesinleşti.
- [x] Planning profile rationale kullanıcıya görünür biçimde sunuldu.
- [x] Existing projede Current Reality / Target State / Transition Scope ayrıldı.
- [x] Critical conflict kalmadı.
- [x] Assumption'lar kayıtlı ve status'ları doğru (`pending_review`).
- [x] Secret/credential yok.
- [x] Absolute machine path yok.
- [x] `source_count` doğru (2).
- [ ] Canonical explicit user approval alındı; IDE/tool/plan auto-approval kullanılmadı.
- [ ] `approved_by: user` için doğrudan approval kanıtı var.
