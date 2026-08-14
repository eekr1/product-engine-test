# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **WAP-001 (Executable Scope Alignment)**: WAVE_MAP üzerindeki tüm taahhüt edilen yetenekler (Committed Capabilities) yalnızca dondurulmuş `INPUT_SNAPSHOT` içindeki onaylı yürütülebilir `IN_SCOPE` ve `KNOWN_DECISION` kayıtları (`SCP-XXX`) ile desteklenir.
- **WAP-002 (Granularity Guard)**: `demo-frontend` base package kuralları gereğince Foundation, Primary Entry/Hero, Corporate/Trust, Services, Contact ve Final Cross-Cutting QA sorumlulukları bağımsız dalgalara ayrılmıştır. Services ve Contact birleştirilmemiş; bütüncül QA son dalga olarak izole edilmiştir.
- **WAP-003 (No Invented Scope)**: Form, harita, WhatsApp, sahte backend veya uydurma iddialar dalga kapsamlarına dahil edilmemiştir.
- **WAP-004 (Integration-Ready Foundation)**: Veri tüketimi ilk dalgadan itibaren `companyService` / `contentAdapter` sınırına oturtulmuştur.

## 2. Wave Map Summary

| Wave ID | Wave Name | Primary Goal | Dependencies | Exit Boundary |
|---|---|---|---|---|
| WAVE_00 | Foundation & Scaffolding | Proje temel dosya/klasör yapısını, CSS/Design Token mimarisini ve local data adapter boundary'sini kurmak. | None | Temel kod yapısı, CSS token'ları ve `companyService` mock adapter hazır. |
| WAVE_01 | Primary Entry & Hero Surface | Header, Hero banner, Disan Hidrolik yetkili servis rozeti ve hızlı `tel:` / `mailto:` CTA noktalarını inşa etmek. | WAVE_00 | Hero surface responsive biçimde hazır, CTA'lar aktif. |
| WAVE_02 | Corporate Identity & Technical Trust | Firma kurumsal tanıtımı, Trakya bölgesindeki uzmanlık ve Disan Hidrolik yetkili servis güven alanını geliştirmek. | WAVE_00, WAVE_01 | Kurumsal tanıtım ve yetkili servis güven bölümü hazır. |
| WAVE_03 | Core Services Presentation | 3 temel hizmeti (Yedek Parça, Yerinde Destek, Bakım-Onarım) görsel kart hiyerarşisiyle detaylandırmak. | WAVE_00, WAVE_01 | 3 temel hizmet alanı visual kartlar ile tamamlanmış. |
| WAVE_04 | Direct Contact & Communication Access | Doğrudan iletişim alanını telefon (`tel:`) ve e-posta (`mailto:`) CTA'ları ile sunmak. | WAVE_00, WAVE_01, WAVE_02, WAVE_03 | İletişim bölümü doğrudan CTA noktalarıyla tamamlanmış. |
| WAVE_05 | Final Cross-Cutting QA & Presentation Readiness | Uçtan uca responsive kontrol, tipografi/tasarım denetimi, mock data doğrulaması ve satış demosu hazır olma testi. | WAVE_00..WAVE_04 | Tüm demo responsive ve satış sunumuna hazır. |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Scaffolding)
  ↓
WAVE_01 (Primary Entry & Hero Surface)
  ├──> WAVE_02 (Corporate Identity & Technical Trust)
  └──> WAVE_03 (Core Services Presentation)
         ↓
WAVE_04 (Direct Contact & Communication Access)
  ↓
WAVE_05 (Final Cross-Cutting QA & Presentation Readiness)
```

## 4. Wave Entries

### WAVE_00: Foundation & Scaffolding

- **Goal**: Proje temel dosya/klasör yapısını, CSS/Design Token mimarisini, local preview ortamını ve `companyService` / `contentAdapter` local mock data boundary'sini kurmak.
- **Committed Capabilities**:
  - Project Scaffolding & Component Container Setup | SCP-001 | Modern Responsive Frontend App Foundation | PASS
  - Design System Token Baseline (CSS Variables for Colors, Typography, Spacing) | SCP-001 | Styling Foundation | PASS
  - Local Data Adapter Boundary (`companyService` / `contentAdapter` with `companyData.js`) | SCP-006 | Local/Mock Data Adapter Boundary | PASS
- **In Scope**: Dosya yapısının kurulması, CSS token'larının tanımlanması, local mock veri adapter dosyasının hazırlanması.
- **Out of Scope**: Real backend API, database connection, npm build pipeline uydurması.
- **Primary Deliverables**: `index.html`, `styles/main.css`, `services/companyService.js`, `data/companyData.js`.
- **Dependencies**: None
- **Exit Boundary**: Proje yapısı hazır, local mock data adapter erişilebilir, temel CSS token'ları dondurulmuş.

---

### WAVE_01: Primary Entry & Hero Surface

- **Goal**: Ziyaretçiyi karşılayan ana sayfa üst alanı (Header & Navigation Shell), etkileyici Hero sunum banner'ı, Disan Hidrolik Bölge Yetkili Servisi rozeti ve doğrudan iletişim CTA erişim noktalarını inşa etmek.
- **Committed Capabilities**:
  - Primary Navigation Shell (Header with Logo & Service Links) | SCP-001, SCP-002 | Primary Entry Presentation | PASS
  - Hero Surface Presentation with Value Proposition & Industrial Visuals | SCP-001, SCP-002 | Hero Surface Presentation | PASS
  - Disan Hidrolik Trakya Bölge Yetkili Servisi Status Callout Badge | SCP-003 | Yetkili Servis Status Callout | PASS
  - Direct Access Phone CTA (`tel:`) Point in Hero / Header | SCP-005 | Phone Direct Contact CTA | PASS
  - Direct Access Email CTA (`mailto:`) Point in Hero / Header | SCP-005 | Email Direct Contact CTA | PASS
- **In Scope**: Header gezinti çubuğu, Hero başlık ve alt açıklama, Disan Hidrolik yetkili servis rozeti, hızlı `tel:` ve `mailto:` bağlantıları.
- **Out of Scope**: Form submit modalı, canlı harita widget'ı, WhatsApp butonu.
- **Primary Deliverables**: Header component, Hero section visual component.
- **Dependencies**: WAVE_00
- **Exit Boundary**: Hero surface responsive biçimde yayında, yetkili servis rozeti ve hızlı iletişim CTA'ları görünür ve çalışır durumda.

---

### WAVE_02: Corporate Identity & Technical Trust

- **Goal**: Trakya Teknik Makine'nin kurumsal geçmişini, Trakya bölgesindeki sanayi/makine uzmanlığını ve Disan Hidrolik ile resmi teknik iş birliği gücünü detaylandıran kurumsal güven alanını geliştirmek.
- **Committed Capabilities**:
  - Corporate Profile & Regional Expertise Presentation | SCP-001, SCP-007 | Verified Company Profile | PASS
  - Technical Trust Indicators & Disan Hidrolik Authorization Details | SCP-003, SCP-007 | Technical Trust Presentation | PASS
- **In Scope**: Hakkımızda/Kurumsal bölümü, bölge uzmanlığı metinleri, yetkili servis teknik yetkinlik göstergeleri.
- **Out of Scope**: Doğrulanmamış referans logosu veya uydurma sertifika görselleri.
- **Primary Deliverables**: Corporate identity section component.
- **Dependencies**: WAVE_00, WAVE_01
- **Exit Boundary**: Kurumsal tanıtım ve yetkili servis teknik güven alanı responsive biçimde tamamlanmış.

---

### WAVE_03: Core Services Presentation

- **Goal**: Firmanın sunduğu 3 temel hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) teknik derinlik, net hiyerarşi ve endüstriyel görsel kart kompozisyonu ile sunmak.
- **Committed Capabilities**:
  - Core Service 1: Yedek Parça Temini Presentation Card | SCP-004 | Service 1 Presentation | PASS
  - Core Service 2: Yerinde Teknik Destek Presentation Card | SCP-004 | Service 2 Presentation | PASS
  - Core Service 3: Makine Bakım ve Onarım Presentation Card | SCP-004 | Service 3 Presentation | PASS
  - Service Data Consumption via `companyService` Adapter | SCP-006 | Local Data Adapter Consumption | PASS
- **In Scope**: 3 temel hizmetin kart yapısıyla sunumu, teknik açıklama metinleri, `companyService` üzerinden dinamik veri çekimi.
- **Out of Scope**: Online yedek parça sipariş formu, e-ticaret sepeti, fiyatlandırma modülü.
- **Primary Deliverables**: Services grid section component, Service card components.
- **Dependencies**: WAVE_00, WAVE_01
- **Exit Boundary**: 3 temel hizmet alanı kartları ve teknik açıklama detayları responsive olarak tamamlanmış.

---

### WAVE_04: Direct Contact & Communication Access

- **Goal**: Ziyaretçilerin doğrudan firma ile iletişime geçmesini sağlayan telefon (`tel:`) ve e-posta (`mailto:`) CTA alanlarını, çalışma saatlerini, bölge servis kapsamı bilgilerini barındıran iletişim yüzeyini geliştirmek.
- **Committed Capabilities**:
  - Dedicated Contact Surface Presentation | SCP-001, SCP-005 | Contact Surface Presentation | PASS
  - Primary Phone CTA (`tel:`) Direct Touchpoint Card | SCP-005 | Phone CTA Touchpoint | PASS
  - Primary Email CTA (`mailto:`) Direct Touchpoint Card | SCP-005 | Email CTA Touchpoint | PASS
  - Regional Service Coverage Info Presentation | SCP-001, SCP-007 | Regional Coverage Info | PASS
- **In Scope**: İletişim kartı, doğrudan arama tıklama bağlantısı, doğrudan e-posta gönderme bağlantısı, çalışma bilgileri.
- **Out of Scope**: İletişim formu (submit endpoint), harita veya WhatsApp entegrasyonu.
- **Primary Deliverables**: Contact section component, Footer component.
- **Dependencies**: WAVE_00, WAVE_01, WAVE_02, WAVE_03
- **Exit Boundary**: Doğrudan iletişim alanları telefon ve e-posta CTA'ları ile eksiksiz tamamlanmış; onaylanmamış form/harita/WhatsApp eklenmemiş.

---

### WAVE_05: Final Cross-Cutting QA & Presentation Readiness

- **Goal**: Tüm kurumsal demo uygulamasının masaüstü, tablet ve mobil cihazlarda responsive düzen kontrolünü, tipografi/kompozisyon denetimini, local mock data adapter doğrulamasını ve satış sunumu son hazır olma denetimini gerçekleştirmek.
- **Committed Capabilities**:
  - Cross-Viewport Responsive Layout Audit (Desktop, Tablet, Mobile) | SCP-001 | Cross-Cutting Responsive QA | PASS
  - Typography, Color Contrast (WCAG AA) & Design Rules Compliance Audit | SCP-001 | Design Audit | PASS
  - Local Data Adapter Boundary Verification (`companyService`) | SCP-006 | Data Boundary QA | PASS
  - Sales Presentation Demo Readiness Review | SCP-001 | Final Demo QA | PASS
- **In Scope**: Tüm cihaz tiplerinde düzen denetimi, renk kontrast denetimi, veri akış testi, sunum senaryosu doğrulaması.
- **Out of Scope**: Yeni özellik geliştirme veya kapsam genişletme.
- **Primary Deliverables**: QA audit checklist, Final validated demo build package.
- **Dependencies**: WAVE_00, WAVE_01, WAVE_02, WAVE_03, WAVE_04
- **Exit Boundary**: Satış demosu uçtan uca doğrulanmış, responsive eksiksiz, sunuma hazır.

## 5. Cross-Wave Invariants

- **CWI-001**: Hiçbir dalga onaylanmamış `SCP-008` (backend), `SCP-009` (CMS), `SCP-015` (form/map/WhatsApp) veya uydurma yetenek ekleyemez.
- **CWI-002**: Tüm dalgalar `companyService` veri katmanı sınırına saygı gösterir.
- **CWI-003**: `DESIGN_RULES.md` içinde belirlenen renk ve tipografi kuralları tüm dalgalarda bağlayıcıdır.

## 6. Global Exit / Handoff Rules

- Her dalga tamamlandığında ilgili `WAVE_PLAN` kabul kriterleri doğrulanacak ve `CURRENT_STATUS.md` güncellenecektir.
- WAVE_05 kapanışında nihai demo paketi `outputs/demos/trakya-teknik-makine/` altına yayınlanacaktır.
