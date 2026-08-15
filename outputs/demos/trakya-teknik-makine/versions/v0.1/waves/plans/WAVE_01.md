# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_01: Corporate Identity & Disan Authorized Service Surface

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Trakya Teknik Makine kurumsal adını, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü sunan modern Hero ve Kurumsal Tanıtım bölümünü inşa etmek.

## 1. Parent Wave Map Entry

- **Name**: `WAVE_01: Corporate Identity & Disan Authorized Service Surface`
- **Goal**: Hero alanı, kurumsal kimlik ve Disan Trakya Bölge Yetkili Servisi statü sunumu.
- **Why Separate**: Ziyaretçinin ilk 3 saniyede firma kimliğini ve yetkili servis güvencesini görmesi satış demosu başarısının temel şartıdır; ana giriş yüzeyi bağımsız doğrulanır.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Hero container & layout structure | corporate identity presentation | implementation-of | PASS |
| Company name & value proposition copy presentation | corporate identity presentation | implementation-of | PASS |
| Disan Regional Authorized Service status badge & text | Disan Authorized Service status presentation | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_01`, `WAVE_00`'da kurulan altyapı ve design token'ları üzerinde ziyaretçiyi karşılayan birincil visual & brand surface'dir (`PR-BUS-01`, `FCL-01`, `FCL-02`). Hizmetler ve İletişim alanlarından önce kurumsal güven tesis eder.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_00` (Project Foundation & Service/Data Architecture).

## 6. Scope

### In Scope
- Hero bölümü HTML5/CSS3 yapısı ve `DESIGN_RULES.md` uyarınca Endüstriyel Hassasiyet temalı görsel düzen.
- Trakya Teknik Makine başlığı (`h1`), Disan Hidrolik Makine Trakya Bölge Yetkili Servisi rozeti/statü vurgusu.
- `CompanyDataService.getCompanyInfo()` üzerinden dinamik veri tüketimi.
- Masaüstü ve mobil ekranlarda duyarlı (responsive) typography ve layout stacking.

### Out of Scope
- 3 Approved Hizmet kartları (`WAVE_02`).
- İletişim butonları ve detay alanları (`WAVE_03`).
- Canlı harita, WhatsApp widget'ı, slider/carousel, uydurma sertifika/referans rozetleri.

## 7. Expected Result / Target Structure

```text
src/
├── components/
│   └── HeroSection.js
└── styles/
    └── hero.css
```

## 8. Implementation Checklist

- [ ] **Task 01.1 (Hero Component Structure & Data Binding)**:
  - **Location/Responsibility**: `src/components/HeroSection.js`.
  - **Parent Capability Relation**: `implementation-of` -> `corporate identity presentation`.
  - **Implementation Behavior**: `CompanyDataService.getCompanyInfo()` metodundan alınan verileri kullanarak `<section class="hero-section">` yapısını doldurmak.
  - **FCL Boundary**: Metinler `FCL-01` (Trakya Teknik Makine) ve `FCL-02` (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi) ile birebir aynı kalmalıdır; uydurma slogan veya firma geçmişi eklenemez.
  - **Verification**: Hero alanı firma adı ve yetkili servis bilgisini DOM'da doğru render etmelidir.
- [ ] **Task 01.2 (Authorized Service Status Badge & Industrial Styling)**:
  - **Location/Responsibility**: `src/styles/hero.css`.
  - **Parent Capability Relation**: `implementation-of` -> `Disan Authorized Service status presentation`.
  - **Implementation Behavior**: `DESIGN_RULES.md` uyarınca `hsl(38, 92%, 50%)` Hydraulic Gold vurugusuyla yetkili servis rozet tasarımı (`.status-badge`) ve endüstriyel koyu arka plan overlay stili.
  - **Preserve/Must Not**: Generic lacivert şablon stilleri veya aşırı neon efektler kullanılmayacaktır.
  - **Verification**: Statü rozeti yüksek kontrasla WCAG AA standartlarında görünmelidir.
- [ ] **Task 01.3 (Responsive Stacking & Layout Verification)**:
  - **Location/Responsibility**: `src/styles/hero.css`.
  - **Parent Capability Relation**: `detail-of` -> `corporate identity presentation`.
  - **Implementation Behavior**: Mobile (<640px) ve Desktop (>1024px) ekranlar için media query'lerin eklenmesi; mobilde dikey hiyerarşi ve okunabilir font boyutları (32px/40px).
  - **Verification**: Mobil görünümde yatay kaydırma (overflow) oluşmamalıdır.

## 9. State / Role / Responsive Coverage

- **Normal State**: Firma adı ve yetkili servis statüsü berrak biçimde görüntülenir.
- **Responsive Behavior**: Mobile ekranlarda padding ve font boyutları küçülür, metin merkezlenir.

## 10. Automated Verification

- DOM Element Check: Hero section contains `h1` with exact company name and status badge with exact service text.

## 11. Manual QA / Debug Verification

- Ziyaretçi sayfayı açtığında ilk 3 saniyede "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" vurgusunu görüyor mu?
- Mobil cihazlarda başlık taşma yapıyor mu?

## 12. Acceptance / Exit Criteria

- [ ] Hero bölümü hatasız render ediliyor.
- [ ] Disan Trakya Bölge Yetkili Servisi statüsü açıkça görünüyor.
- [ ] Mobil ve masaüstü uyumluluğu sağlandı.

## 13. Handoff / Stop Rule

- `WAVE_01` tamamlandığında, `WAVE_02` (Approved Services Presentation Module) geliştirmesine geçilmeye hazır kurumsal karşılama yüzeyi teslim edilir.

---

## Wave Result

- **Execution Status**: Pending Execution
- **Output Artifacts**: `src/components/HeroSection.js`, `src/styles/hero.css`.
