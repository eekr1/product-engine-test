# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_02: Professional Identity & Location Context

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Fizyoterapist Eda Pala'nın profesyonel tanıtımını ve Tekirdağ konum bağlamını aktaran bilgi kartları bölümünün inşa edilmesi.

## 1. Parent Wave Map Entry

- **Wave ID**: `WAVE_02`
- **Name**: Professional Identity & Location Context
- **Why Separate**: Kişisel marka sunumunu detaylandıran içerik kartları Hero bölümünden bağımsız bir teslimat adımıdır.
- **In Scope**: `<section class="identity-location">` markup'ı, statik veri bağlama ve dingin kart stilleri.
- **Out of Scope**: Uydurma tedavi yöntemleri, adres/telefon veya hasta yorumları.
- **Primary Deliverables**: Professional Identity & Location Context Section.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Professional Identity Section | Professional Identity Section | `implementation-of` | `PASS` |
| Tekirdağ Location Context Presentation | Tekirdağ Location Context Presentation | `implementation-of` | `PASS` |
| Verified Facts Baseline Presentation | Verified Facts Baseline Presentation | `implementation-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

- Hero bölümünden sonra ziyaretçinin Fizyoterapist unvanını ve Tekirdağ konum bağlamını daha detaylı ancak doğrulanmamış uydurma iddialar içermeyen şeffaf bir sunum kartı yapısında incelemesini sağlar.
- `WAVE_01` Hero yüzeyini tüketir.

## 4. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 5. Dependencies

- `WAVE_01` (Hero & Visual Presentation).

## 6. Scope

### In Scope
- `<section class="identity-location">` semantik container markup'ı.
- Professional Identity Card (`Fizyoterapist` unvanı ve insani tanıtım metni).
- Location Context Card (`Tekirdağ` şehir bağlamı ve şeffaf bilgi rozeti).
- `contentAdapter.getProfileData()` ve `getLocationData()` entegrasyonu.
- Dingin kart stilleri (`styles/identity.css`), kart gölgeleri ve dikey alan ritmi (`margin-top: 60px`).

### Out of Scope
- Sağlık alanı dışı uydurma klinik adı, sokak adresi, harita iFrame'i, telefon numarası.
- Uzmanlık alanları, tedavi listeleri veya hasta değerlendirmeleri.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html (Updated with Identity & Location Section)
├── styles/
│   └── identity.css (Identity & Location specific styles)
└── js/
    └── components/
        └── identityComponent.js (Data binding component)
```

## 8. Implementation Checklist

- [ ] **`TSK-02-01`: Professional Identity Section Markup**
  - **Location**: `index.html` (`<section class="identity-section">`)
  - **Responsibility**: Semantik başlık (`h2 class="section-title"`), kart grid düzeni (`display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`).
  - **Parent Capability**: `Professional Identity Section`
  - **Done Criteria**: `index.html` içinde semantik `<section>` yapısının kurulması.
- [ ] **`TSK-02-02`: Identity Card Component (`FCL-01` & `FCL-02`)**
  - **Location**: `js/components/identityComponent.js`, `styles/identity.css`
  - **Responsibility**: `Eda Pala` adı ve `Fizyoterapist` unvanını vurgulayan, dingin visual card container.
  - **Parent Capability**: `Professional Identity Section`, `Verified Facts Baseline Presentation`
  - **Done Criteria**: Kartın `Fizyoterapist` unvanını tereddütsüz sergilemesi.
- [ ] **`TSK-02-03`: Tekirdağ Location Context Card (`FCL-03`)**
  - **Location**: `js/components/identityComponent.js`, `styles/identity.css`
  - **Responsibility**: `Tekirdağ` konum bağlamını aktaran, şeffaf lokasyon bilgilendirme kartı.
  - **Parent Capability**: `Tekirdağ Location Context Presentation`
  - **Done Criteria**: Tekirdağ şehir bağlamının şık bir lokasyon rozetiyle kart üzerinde sunulması.
- [ ] **`TSK-02-04`: Health Guard & Allowlist Verification**
  - **Location**: `js/components/identityComponent.js`
  - **Responsibility**: Kart içeriğinin strictly `FCL-01` .. `FCL-04` allowlist ile dondurulduğunun, uydurma hastalık/tedavi metni barındırmadığının kontrolü.
  - **Parent Capability**: `Verified Facts Baseline Presentation`
  - **Done Criteria**: Kart metinlerinde sıfır uydurma sağlık iddiası.

## 9. State / Role / Responsive Coverage

- **Normal State**: Bilgi kartları dondurulmuş verileri okunabilir `1.05rem` tipografi ve `--color-bg-card` üzerinde temiz gölgelerle sunar.
- **Responsive Behavior**: Mobilde kartlar tek sütun halinde üst üste sıralanır; kartlar arası dikey boşluk `24px` olarak korunur.
- **Accessibility**: Kart başlıkları (`h2`, `h3`) semantik hiyerarşiyi bozmaz.

## 10. Automated Verification

- [ ] HTML section structure validation.
- [ ] Allowlist compliance scan (zero unapproved health terms).

## 11. Manual QA / Debug Verification

- [ ] Kartlarda klinik adresi, telefon numarası veya hasta yorumu bulunmadığının teyidi.
- [ ] Kart renklerinin `--color-bg-card` ve `--color-border` jetonlarına sadık kaldığının kontrolü.

## 12. Acceptance / Exit Criteria

- [ ] Fizyoterapist Eda Pala tanıtım kartı ve Tekirdağ konum kartı görünürdür.
- [ ] Sahte tedavi, hastalık veya klinik adresi içermez.

## 13. Handoff / Stop Rule

- `WAVE_02` tamamlandığında `WAVE_03` (Outbound Instagram Contact & CTA) uygulamasına geçilebilir.
- Doğrulanmamış factual claim eklenirse çalışma durdurulur.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state).
