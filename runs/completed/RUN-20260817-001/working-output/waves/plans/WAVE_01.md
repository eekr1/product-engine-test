# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_01: Design System, Typography & Layout Shell

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: `DESIGN_RULES.md` uyarınca tasarım token'larını, tipografi ölçeklerini, renk paletini ve responsive layout shell'i oluşturmak.

## 1. Parent Wave Map Entry

```yaml
wave_id: WAVE_01
wave_name: Design System, Typography & Layout Shell
primary_goal: DESIGN_RULES.md uyarınca tasarım token'larını, tipografi ölçeklerini, renk paletini ve responsive layout shell'i oluşturmak
delivery_maturity_target: Validated Prototype Shell
dependencies: [WAVE_00]
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| CSS Custom Properties & Design Tokens (`tokens.css`) | CSS Custom Properties & Design Tokens System | implementation-of | PASS |
| Global Shell Reset & Responsive Container (`main.css`) | Responsive Layout Container & Main Grid Shell | implementation-of | PASS |
| Google Fonts Outfit Web Font Integration | Proaktif Visual Direction Shell | implementation-of | PASS |
| Header & Footer Navigation Shell Layout | Responsive Layout Container & Main Grid Shell | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_00` ile teslim edilen HTML skeleton ve local content adapter katmanından sonra, bileşenlerin görsel olarak doğru renk, tipografi, spacing ve grid üzerinde durabilmesi için global CSS token'ları ve layout shell'in inşa edilmesi şarttır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md` (Visual direction, color palette, typography scale)
- `waves/WAVE_MAP.md` (`WAVE_01` parent entry)

## 5. Dependencies

- `WAVE_00` (HTML5 skeleton ve modüler dosya mimarisi tamamlanmış olmalıdır).

## 6. Scope

### In Scope
- `styles/tokens.css`: Color variables (`--bg-primary: #FDFBF7`, `--bg-secondary: #F4EFEA`, `--text-primary: #1F2421`, `--text-muted: #5A625D`, `--accent-primary: #3A5A40`, `--border-color: #E2DCD5`), typography scales, spacing tokens, shadow/elevation.
- `styles/main.css`: CSS Reset, global font import (Google Fonts Outfit), container max-width (`1200px`), 12-column grid, responsive breakpoints (`1024px`, `768px`), header ve footer layout shell.
- `<head>` entegrasyonu: `index.html` içine `tokens.css` ve `main.css` linklerinin eklenmesi.

### Out of Scope
- Hero bölümü özel bileşen stilleri (`WAVE_02` kapsamındadır).
- Outbound Instagram CTA butonu ve Konum kartı özel bileşen stilleri (`WAVE_03` kapsamındadır).
- Tailwind CSS veya harici UI kütüphanesi bağımlılıkları.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html (updated head link tags for CSS tokens & main)
├── styles/
│   ├── tokens.css (CSS Custom Properties & Design Tokens)
│   └── main.css (Global Reset, Responsive Container & Shell Grid)
└── src/
    └── app.js (updated to verify CSS tokens load)
```

## 8. Implementation Checklist

- [ ] **Task 1: Design Tokens & CSS Custom Properties Definition**
  - **Location / Responsibility**: `styles/tokens.css`.
  - **Parent Capability Relation**: `implementation-of` (CSS Custom Properties & Design Tokens System).
  - **Inputs / Contracts**: `DESIGN_RULES.md` Section 4 & 5.
  - **Implementation Behavior**: `:root` altında CSS değişkenlerini tanımlamak:
    ```css
    :root {
      --bg-primary: #FDFBF7;
      --bg-secondary: #F4EFEA;
      --text-primary: #1F2421;
      --text-muted: #5A625D;
      --accent-primary: #3A5A40;
      --accent-hover: #344E41;
      --border-color: #E2DCD5;
      
      --font-family-primary: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-size-h1: clamp(2.25rem, 5vw, 3.25rem);
      --font-size-h2: clamp(1.75rem, 3vw, 2.25rem);
      --font-size-body: 1rem;
      --font-size-sm: 0.875rem;
      
      --spacing-xs: 0.5rem;
      --spacing-sm: 1rem;
      --spacing-md: 1.5rem;
      --spacing-lg: 3rem;
      --spacing-xl: 6rem;
      
      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-lg: 16px;
      --transition-smooth: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    ```
  - **Preserve / Must Not**: Jenerik mavi/turkuaz doktor gradient'i ekleme; tam olarak `DESIGN_RULES.md` renk kodlarını kullan.
  - **Verification**: Tarayıcı inceleme modunda `:root` değişkenleri doğrulanır.
  - **Done Result**: `tokens.css` tamamlandı.

- [ ] **Task 2: Google Fonts Integration & Global Reset**
  - **Location / Responsibility**: `styles/main.css` & `index.html` `<head>`.
  - **Parent Capability Relation**: `implementation-of` (Proaktif Visual Direction Shell).
  - **Inputs / Contracts**: Google Fonts URL `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap`.
  - **Implementation Behavior**: Google Fonts bağlantısını `index.html` `<head>` kısmına eklemek. `main.css` içinde modern box-sizing reset (`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`) ve `body { background-color: var(--bg-primary); color: var(--text-primary); font-family: var(--font-family-primary); }` tanımlamak.
  - **Verification**: Sayfada Outfit fontu yüklenir ve varsayılan margin'ler sıfırlanır.
  - **Done Result**: Global typography ve CSS reset aktif.

- [ ] **Task 3: Responsive Layout Grid & Shell Container**
  - **Location / Responsibility**: `styles/main.css`.
  - **Parent Capability Relation**: `implementation-of` (Responsive Layout Container & Main Grid Shell).
  - **Inputs / Contracts**: Max container width `1200px`, padding `24px`, breakpoints `1024px` and `768px`.
  - **Implementation Behavior**: `.container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }` ve 12 sütunlu CSS grid utility `.grid-12 { display: grid; grid-template-columns: repeat(12, 1fr); gap: 1.5rem; }` yazmak. `@media (max-width: 768px)` altında grid düzenini 1 sütuna dikey istiflemek.
  - **Verification**: Pencere boyutu değiştirildiğinde container ve grid yatay overflow yapmadan uyum sağlar.
  - **Done Result**: Responsive layout grid hazır.

- [ ] **Task 4: Header & Footer Shell Structure**
  - **Location / Responsibility**: `index.html` & `styles/main.css`.
  - **Parent Capability Relation**: `detail-of` (Responsive Layout Container & Main Grid Shell).
  - **Inputs / Contracts**: `<header class="site-header">` ve `<footer class="site-footer">`.
  - **Implementation Behavior**: Header için dikey padding `1.5rem`, border-bottom `1px solid var(--border-color)`, logo/brand text "Fizyoterapist Eda Pala". Footer için dikey padding `3rem`, background `var(--bg-secondary)`, telif hakkı metni "© 2026 Fizyoterapist Eda Pala. Tüm hakları saklıdır."
  - **FCL / Source Boundary**: Header ve footer metinleri `FCL-001` (Eda Pala) ve `FCL-002` (Fizyoterapist) ile sınırlıdır; sahte adres/telefon eklenmez.
  - **Verification**: Sayfa üstünde ve altında temiz, dengeli header/footer kabuğu görünür.
  - **Done Result**: Header ve Footer shell tamamlandı.

## 9. State / Role / Responsive Coverage

- **Mobile Viewport (<768px)**: Padding 1rem'e düşer, header flex-direction dikey düzenlenir, font boyutları `clamp()` ile küçülür.
- **Tablet Viewport (768px-1023px)**: Grid 6 sütuna uyarlanır.
- **Desktop Viewport (1024px+)**: Max-width 1200px container ortalanır.

## 10. Automated Verification

- Static CSS syntax check & W3C CSS validator uyum kontrolü.

## 11. Manual QA / Debug Verification

- Tarayıcıda mobil, tablet ve masaüstü çözünürlükleri simüle edilir.
- WCAG kontrastı Chrome DevTools Inspect Accessibility paneli ile test edilir (`#1F2421` over `#FDFBF7` -> 14.5:1 ratio).

## 12. Acceptance / Exit Criteria

- [ ] `tokens.css` `DESIGN_RULES.md` ile tanımlanan tüm renk ve font değişkenlerini içeriyor.
- [ ] Google Fonts Outfit projesiz doğrudan yükleniyor ve uygulanıyor.
- [ ] Responsive container mobil ve masaüstü ekranlarda yatay kaydırma çubuğu (overflow-x) üretmiyor.
- [ ] Header ve Footer kabuğu sahte factual veri içermeden semantic olarak yerleşiyor.

## 13. Handoff / Stop Rule

- `WAVE_01` tamamlandığında `WAVE_02` (Hero & Professional Profile Section) geliştirmesine geçilebilir.
- Sunulacak teslim olgunluğu: Validated Prototype Shell.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state).
