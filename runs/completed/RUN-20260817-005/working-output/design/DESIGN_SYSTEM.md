# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Design System

## 1. Design Token Sistemi

```css
:root {
  /* Color Tokens */
  --color-bg-primary: #0B0F17;
  --color-bg-secondary: #151C28;
  --color-bg-elevated: #1E2738;
  --color-accent-primary: #F59E0B;
  --color-accent-hover: #D97706;
  --color-accent-subtle: rgba(245, 158, 11, 0.1);
  --color-text-main: #F3F4F6;
  --color-text-muted: #9CA3AF;
  --color-border: #2D3748;
  --color-border-accent: rgba(245, 158, 11, 0.4);

  /* Typography Tokens */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing Tokens */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 80px;

  /* Radius Tokens */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Shadow Tokens */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  --shadow-accent: 0 0 20px rgba(245, 158, 11, 0.15);
}
```

## 2. Semantic Color Roles

- `surface-base`: Ana sayfa arka planı (`--color-bg-primary`)
- `surface-card`: Kart ve modüler yüzey arka planı (`--color-bg-secondary`)
- `surface-card-hover`: Kart hover arka planı (`--color-bg-elevated`)
- `action-primary`: Vurgulayıcı buton ve yönlendirme bağlantıları (`--color-accent-primary`)
- `action-primary-hover`: Buton hover durumu (`--color-accent-hover`)
- `badge-status`: Disan yetkili servis rozeti arka planı (`--color-accent-subtle`)
- `text-primary`: Ana metinler, başlıklar (`--color-text-main`)
- `text-secondary`: Alt başlıklar, açıklama metinleri (`--color-text-muted`)
- `border-card`: Kart ve bölüm ayırıcı çizgileri (`--color-border`)

## 3. Typography System

- **Display**: Font-size 48px/56px, weight 800, line-height 1.15
- **H1**: Font-size 36px/42px, weight 700, line-height 1.2
- **H2**: Font-size 24px/30px, weight 600, line-height 1.3
- **H3**: Font-size 18px/24px, weight 600, line-height 1.4
- **Body Large**: Font-size 18px, weight 400, line-height 1.6
- **Body Normal**: Font-size 16px, weight 400, line-height 1.6
- **Caption / Badge**: Font-size 13px, weight 500, font-family monospace

## 4. Spacing, Radius ve Shadow System

- **Spacing Scale**: 4px, 8px, 16px, 24px, 32px, 48px, 80px
- **Radius Scale**: 4px (küçük rozet), 8px (kart/buton), 12px (büyük container), 9999px (pill badge)
- **Shadow Scale**: Derin kurumsal koyuluk hissi veren yumuşak siyah gölgeler ve amber parlama vurgusu (`--shadow-accent`).

## 5. Foundational Components / Primitives

- **Button Primary**: Amber arka plan (`#F59E0B`), koyu metin (`#0B0F17`), 8px radius, hover'da hafif yükselme ve gölge.
- **Button Secondary / Outline**: Şeffaf arka plan, border (`#2D3748`), açık metin (`#F3F4F6`), hover'da amber border ve zemin vurgusu.
- **Badge / Tag**: Monospace font, `--color-accent-subtle` zemin, amber sınır çizgisi.
- **Card**: `--color-bg-secondary` zemin, 1px `--color-border` sınır, 8px radius, dikey 24px padding.
- **Direct Contact Link**: `tel:` ve `mailto:` bağlantıları için özel amber vurgulu ikonlu CTA link bileşeni.

## 6. Interaction State Tokens

- **Focus**: `outline: 2px solid var(--color-accent-primary); outline-offset: 2px;`
- **Disabled**: `opacity: 0.5; cursor: not-allowed;`
- **Active / Pressed**: `transform: scale(0.98);`
- **Transition Standard**: `transition: all 0.2s ease-out;`
