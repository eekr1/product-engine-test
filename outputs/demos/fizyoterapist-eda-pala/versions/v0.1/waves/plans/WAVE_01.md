# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_01: Hero & Visual Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçiyi karşılayan Hero bölümünün inşa edilmesi; Eda Pala adı, Fizyoterapist unvanı ve Tekirdağ konum bağlamının ilk bakışta sunulması.

## 1. Parent Wave Map Entry

- **Wave ID**: `WAVE_01`
- **Name**: Hero & Visual Presentation
- **Why Separate**: Ziyaretçinin ilk etkileşim anı olan Hero bölümünün bağımsız bir deliverable olarak doğrulanması gerekir.
- **In Scope**: `index.html` içindeki `<header>` ve `<section class="hero">` markup'ı, hero stilleri ve tipografik hiyerarşi.
- **Out of Scope**: Outbound Instagram CTA kartı ve alt bilgi bölümü.
- **Primary Deliverables**: Hero presentation section.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Hero Presentation Surface | Hero Presentation Surface | `implementation-of` | `PASS` |
| Eda Pala Persona Display | Eda Pala Persona Display | `implementation-of` | `PASS` |
| Fizyoterapist Title Display | Fizyoterapist Title Display | `implementation-of` | `PASS` |
| Tekirdağ Location Context Summary | Tekirdağ Location Context Summary | `implementation-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

- Hero bölümü ziyaretçinin ilk 5 saniye deneyimini yönetir. Eda Pala adı, `Fizyoterapist` unvanı ve `Tekirdağ` konum bağlamı ilk etkileşimde tereddütsüz anlaşılmalıdır.
- `WAVE_00` jetonlarını (`tokens.css`) ve dondurulmuş veri adapter'ını (`contentAdapter.js`) tüketir.

## 4. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 5. Dependencies

- `WAVE_00` (Foundation & Setup).

## 6. Scope

### In Scope
- `<header class="site-header">` markup ve marka unvan logosu/rozeti.
- `<section class="hero-section">` layout kompozisyonu.
- `Eda Pala` ismi için `<h1>` tipografik başlık hiyerarşisi (`font-weight: 700`).
- `Fizyoterapist` mesleki unvanı için alt başlık ve rozet gösterimi (`FCL-02`).
- `Tekirdağ` konum bağlamı için konum bilgisi rozeti (`FCL-03`).
- Hero visual presentation card ve dingin zemin renkleri.

### Out of Scope
- Uzmanlık alanları, tedavi kartları, hastalık listeleri veya sahte stok fotoğrafları.
- Randevu formu veya harita entegrasyonu.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html (Updated with Header & Hero Section)
├── styles/
│   └── hero.css (Hero component specific styles)
└── js/
    └── components/
        └── heroComponent.js (Hero data binding)
```

## 8. Implementation Checklist

- [ ] **`TSK-01-01`: Header & Brand Badge Markup**
  - **Location**: `index.html` (`<header>`)
  - **Responsibility**: Marka başlığı "Fizyoterapist Eda Pala", Tekirdağ konum etiketi ve semantik navigasyon kabuğu.
  - **Parent Capability**: `Hero Presentation Surface`
  - **Done Criteria**: `index.html` içinde `<header>` öğesinin tam semantik markup taşıması.
- [ ] **`TSK-01-02`: Hero Presentation Section Layout**
  - **Location**: `index.html` (`<section class="hero">`), `styles/hero.css`
  - **Responsibility**: Asimetrik, dingin ve nefes alan dikey kompozisyon (`padding: 100px 0`), `max-width: 1140px` container.
  - **Parent Capability**: `Hero Presentation Surface`
  - **Done Criteria**: Hero alanının ekranın ilk viewport'unda kusursuz hizalanması.
- [ ] **`TSK-01-03`: Persona & Professional Title Binding (`FCL-01` & `FCL-02`)**
  - **Location**: `js/components/heroComponent.js`
  - **Responsibility**: `contentAdapter.getProfileData()` üzerinden Eda Pala ve Fizyoterapist verilerinin `h1` ve unvan rozetine güvenle bağlanması.
  - **Parent Capability**: `Eda Pala Persona Display`, `Fizyoterapist Title Display`
  - **Done Criteria**: Isim ve unvanın DOM'a eksiksiz yansıması.
- [ ] **`TSK-01-04`: Tekirdağ Location Context Badge Binding (`FCL-03`)**
  - **Location**: `js/components/heroComponent.js`, `styles/hero.css`
  - **Responsibility**: `Tekirdağ` konum verisinin SVG lokasyon ikonuyla birlikte konum rozeti olarak gösterimi.
  - **Parent Capability**: `Tekirdağ Location Context Summary`
  - **Done Criteria**: Tekirdağ konum rozetinin Hero alanında net görünür olması.

## 9. State / Role / Responsive Coverage

- **Normal State**: Eda Pala, Fizyoterapist ve Tekirdağ bilgileri dondurulmuş veriden okunarak ilk 5 saniyede tereddütsüz sunulur.
- **Responsive Stacking**: Mobilde (<768px) başlık, unvan ve konum rozeti dikey olarak merkezlenir ve okuma konforu korunur.
- **Contrast & Accessibility**: H1 başlığı `--color-text-main` ve `--color-bg-main` arasında 11:1 kontrast oranı sunar.

## 10. Automated Verification

- [ ] HTML semantics validation (`<header>`, `<main>`, `<h1>`, `<section>`).
- [ ] DOM text content equality verification against `FCL-01`, `FCL-02`, `FCL-03`.

## 11. Manual QA / Debug Verification

- [ ] Masaüstü, tablet ve mobil ekran boyutlarında Hero alanında yatay kayma (overflow) olmadığının doğrulanması.
- [ ] Sağlık klişesi görsellerinin veya sahte metinlerin bulunmadığının teyidi.

## 12. Acceptance / Exit Criteria

- [ ] `Eda Pala` adı `h1` başlığında görünür.
- [ ] `Fizyoterapist` unvanı ve `Tekirdağ` konum rozeti ilk viewport'ta yer alır.
- [ ] Sahte tedavi, hastalık veya adres iddiası içermez.

## 13. Handoff / Stop Rule

- `WAVE_01` tamamlandığında `WAVE_02` (Professional Identity & Location Context) uygulamasına geçilebilir.
- Factual allowlist dışına çıkan metin eklenirse çalışma durdurulur.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state).
