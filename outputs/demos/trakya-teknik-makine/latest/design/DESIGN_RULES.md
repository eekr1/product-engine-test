# Trakya Teknik Makine — Design Rules

## 1. Visual Concept & Brand Identity

- **Concept Name:** *Industrial Precision & Technical Trust* (Endüstriyel Hassasiyet ve Teknik Güven).
- **Core Mood:** Koyu antrasit ve teknik gri yüzeylerin canlı sanayi sarısı/turuncusu ve saf beyaz ile buluştuğu, güven, mühendislik yetkinliği ve kesintisiz servis hissi veren modern kurumsal arayüz.
- **Anti-Template Constraint:** Sektör klişelerinden (`sanayi = varsayılan lacivert`, `hero + 3 mavi kart + standart footer`) kaçınılmalıdır. Tasarım, Trakya Teknik Makine'ye özel bir kurumsal şıklık taşımalıdır.

---

## 2. Color Palette & Surface Tokens

```css
:root {
  /* Brand Core Colors */
  --color-brand-primary: #121820;     /* Deep Anthracite / Industrial Dark */
  --color-brand-secondary: #1e2632;   /* Steel Surface / Card Background */
  --color-brand-accent: #f59e0b;      /* Technical Safety Amber / Highlight */
  --color-brand-accent-hover: #d97706;/* Dark Amber CTA Hover */

  /* Neutral Tone Tokens */
  --color-text-main: #f8fafc;         /* High Contrast White */
  --color-text-muted: #94a3b8;        /* Technical Slate Gray */
  --color-text-subtle: #64748b;       /* Dim Boundary Gray */

  /* Surface & Border System */
  --color-bg-page: #0b0f17;           /* Main Deep Background */
  --color-bg-surface: #141c27;        /* Elevated Container Surface */
  --color-border-subtle: rgba(255, 255, 255, 0.08);
  --color-border-accent: rgba(245, 158, 11, 0.3);

  /* Elevation Shadows & Glows */
  --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  --shadow-accent-glow: 0 0 20px rgba(245, 158, 11, 0.25);
}
```

---

## 3. Typography Hierarchy

- **Primary Font Family:** `'Inter'`, system-ui, -apple-system, sans-serif (Clean, legible, modern UI typeface).
- **Heading Font Family:** `'Outfit'`, `'Inter'`, sans-serif (Technical, strong, geometric header character).
- **Hierarchy Tokens:**
  - `Hero Title`: 2.75rem - 3.5rem (700 Bold, Tight Line Height 1.1)
  - `Section Title`: 1.85rem - 2.25rem (600 SemiBold)
  - `Card Title`: 1.25rem - 1.5rem (600 SemiBold)
  - `Body Text`: 1rem (400 Regular, Relaxed Line Height 1.6)
  - `Caption / Technical Tag`: 0.85rem (500 Medium, Letter Spacing +0.05em)

---

## 4. Spacing, Layout & Micro-Interactions

- **Container Max Width:** `1280px` with fluid inline padding (`1.5rem` desktop, `1rem` mobile).
- **Grid Layouts:**
  - Services Grid: `repeat(auto-fit, minmax(320px, 1fr))` with `2rem` gap.
  - Value Props Grid: `repeat(auto-fit, minmax(260px, 1fr))` with `1.5rem` gap.
- **Micro-Animations:**
  - Card Hover: Slight translateY (`-4px`), border accent transition (`0.3s ease`), subtle accent shadow glow.
  - Button Interactions: Smooth color transition (`0.2s ease`), active press effect (`scale 0.98`).
  - Mobile Menu Slide-in: Glassmorphic dark overlay with smooth spring animation.
