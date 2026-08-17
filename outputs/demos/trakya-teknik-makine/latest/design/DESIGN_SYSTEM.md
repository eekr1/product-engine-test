# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Design System

## 1. Design Token Sistemi

Tüm renk, alan, tipografi ve kenarlık değerleri CSS Custom Properties (`styles/tokens.css`) olarak tanımlanır.

```css
:root {
  /* Primitive Colors */
  --color-dark-900: #0F141C;
  --color-dark-800: #161D2A;
  --color-dark-700: #1F293D;
  --color-dark-600: #2D3C57;
  
  --color-amber-500: #FF9500;
  --color-amber-400: #FFAB2E;
  --color-amber-600: #E07A00;
  
  --color-slate-100: #F8FAFC;
  --color-slate-300: #CBD5E1;
  --color-slate-400: #94A3B8;
  --color-slate-500: #64748B;
  
  /* Fonts */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## 2. Semantic Color Roles

- `--bg-app`: `--color-dark-900` (`#0F141C`) — Ana uygulama arka planı.
- `--bg-surface`: `--color-dark-800` (`#161D2A`) — Kart, modal ve panel yüzeyi.
- `--bg-surface-elevated`: `--color-dark-700` (`#1F293D`) — Yükseltilmiş kart veya aktif nav ögesi.
- `--text-primary`: `--color-slate-100` (`#F8FAFC`) — Başlıklar ve birincil okunabilir metin.
- `--text-secondary`: `--color-slate-400` (`#94A3B8`) — Alt başlıklar, meta veriler ve açıklama metinleri.
- `--text-muted`: `--color-slate-500` (`#64748B`) — İkincil etiketler ve pasif metinler.
- `--accent-primary`: `--color-amber-500` (`#FF9500`) — Birincil CTA butonları, aktif nav indikatörleri ve vurgular.
- `--accent-hover`: `--color-amber-400` (`#FFAB2E`) — Hover durumundaki buton ve etkileşim öğeleri.
- `--border-subtle`: `rgba(255, 255, 255, 0.08)` — Kart kenarlıkları ve ince ayırıcı hatlar.
- `--border-accent`: `rgba(255, 149, 0, 0.3)` — Odaklanılmış veya öne çıkarılmış kenarlıklar.

## 3. Typography System

- `--text-xs`: `0.75rem` / `1.0rem` line-height
- `--text-sm`: `0.875rem` / `1.25rem` line-height
- `--text-base`: `1.0rem` / `1.6rem` line-height
- `--text-lg`: `1.125rem` / `1.75rem` line-height
- `--text-xl`: `1.25rem` / `1.75rem` line-height
- `--text-2xl`: `1.5rem` / `2.0rem` line-height
- `--text-3xl`: `2.0rem` / `2.25rem` line-height
- `--text-4xl`: `2.75rem` / `3.25rem` line-height
- `--text-5xl`: `3.5rem` / `4.0rem` line-height

## 4. Spacing, Radius ve Shadow System

### Spacing Scale
- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-3`: `12px`
- `--space-4`: `16px`
- `--space-6`: `24px`
- `--space-8`: `32px`
- `--space-12`: `48px`
- `--space-16`: `64px`
- `--space-24`: `96px`

### Radius Scale
- `--radius-sm`: `4px` (Badge, küçük buton)
- `--radius-md`: `8px` (Kartlar, standart butonlar)
- `--radius-lg`: `12px` (Modal, konteynerlar)
- `--radius-full`: `9999px` (Pill badge, avatar)

### Elevation & Shadow Tokens
- `--shadow-card`: `0 4px 20px -2px rgba(0, 0, 0, 0.4)`
- `--shadow-glow-amber`: `0 0 20px 0 rgba(255, 149, 0, 0.15)`

## 5. Foundational Components / Primitives

- **Primary Button**: Background `--accent-primary`, Text `#0F141C` (`font-weight: 600`), Padding `12px 24px`, Radius `--radius-md`. Hover state `--accent-hover`.
- **Secondary / Outline Button**: Background `transparent`, Border `1px solid --border-subtle`, Text `--text-primary`. Hover state Border `1px solid --accent-primary`.
- **Badge / Tag**: Monospace font `--font-mono`, Font-size `--text-xs`, Upper-case letter-spacing. Accent badge: Background `rgba(255, 149, 0, 0.1)`, Text `--accent-primary`, Border `1px solid rgba(255, 149, 0, 0.2)`.
- **Card Primitive**: Background `--bg-surface`, Border `1px solid --border-subtle`, Padding `24px - 32px`, Radius `--radius-md`, Shadow `--shadow-card`.

## 6. Interaction State Tokens

- `--transition-fast`: `0.15s ease`
- `--transition-normal`: `0.25s ease`
- `--focus-ring`: `0 0 0 2px var(--bg-app), 0 0 0 4px var(--accent-primary)`
