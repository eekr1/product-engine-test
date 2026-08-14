# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Core Layout Shell & Visual System

- **Status**: Pending Execution
- **Goal**: Mobil uyumlu layout kabuğunu (Header, Footer, Navigation, Mobile Drawer) ve projenin özgün visual concept primitives (Hero section, Buttons, Cards, Badges) katmanını kodlamak.

## 1. Why This Wave / Dependency Rationale

- `WAVE_00`'da oluşturulan token ve service altyapısı üzerine ana sayfa düzenini ve temel marka kimliğini inşa eder.

## 2. Canonical Sources to Read

1. `design/DESIGN_RULES.md`
2. `ai/TECH_CONTEXT.md`
3. `waves/plans/WAVE_00.md`

## 3. Dependencies

- `WAVE_00` (Vite+React scaffold, `tokens.css` ve `companyService`).

## 4. Scope

### Scope References
- `SCP-010`: Responsive App Shell (Header/Footer/Drawer)
- `SCP-011`: Industrial Visual System Primitives & Hero Section

### In Scope
- `src/components/layout/Header.jsx` ve `Footer.jsx` bileşenleri.
- `src/components/layout/MobileDrawer.jsx` mobil menü bileşeni.
- `src/components/ui/Button.jsx`, `Card.jsx`, `Badge.jsx` primitives.
- `src/components/sections/Hero.jsx` ana sayfa karşılama ve değer önermesi bölümü.

### Out of Scope
- Detaylı hizmet içeriği veya iletişim formu etkileşimleri (`WAVE_02`).

## 5. Expected Result / Target Structure

```text
src/components/
├── layout/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── MobileDrawer.jsx
├── ui/
│   ├── Button.jsx
│   ├── Card.jsx
│   └── Badge.jsx
└── sections/
    └── Hero.jsx
```

## 6. Implementation Checklist

- [ ] `TASK-010` (Scope Ref: SCP-010): Responsive Header, Logo ve Navigation bağlantılarını kodla.
- [ ] `TASK-011` (Scope Ref: SCP-010): Mobil cihazlar için dokunmatik hamburger menü ve MobileDrawer bileşenini geliştir.
- [ ] `TASK-012` (Scope Ref: SCP-011): Reusable Button, Card ve Badge UI bileşenlerini `tokens.css` stilleriyle kodla.
- [ ] `TASK-013` (Scope Ref: SCP-011): Hero section'ı (Ana başlık, alt açıklama, hızlı iletişim CTA ve teknik arka plan grid'i) entegre et.

## 7. State / Role / Responsive Coverage

- Header mobil ekranlarda hamburger menüye dönüşmeli, masaüstünde sabit (sticky) navigasyon sunmalıdır.

## 8. Automated Verification

- `npm run build` static bundle oluşturabilmeli.

## 9. Manual QA / Debug Verification

- Tarayıcıda 320px ve 1440px ekran genişliklerinde test edilmeli, taşma olmadığından emin olunmalıdır.

## 10. Acceptance / Exit Criteria

- [ ] Layout shell sorunsuz derlenmeli.
- [ ] Hero bölümü ilk bakışta modern ve profesyonel endüstriyel görsel algı yaratmalı.
- [ ] Mobil çekmece açılıp kapanmalı.

## 11. Handoff / Stop Rule

- `WAVE_01` tamamlandığında `CURRENT_STATUS.md` güncellenir ve `WAVE_02` başlatılır.

---
## Wave Result
- **Status**: Pending Execution
