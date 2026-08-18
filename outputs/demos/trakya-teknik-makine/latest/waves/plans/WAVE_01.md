# Trakya Teknik Makine — WAVE_01: Global Shell & Navigation Architecture

- **Status**: Completed
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Header (logo, 7 sayfalık nav, mobile drawer), Footer ve Layout Shell bileşenlerini React Router DOM rotalama altyapısıyla entegre etmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_01
Name: Global Shell & Navigation Architecture
Goal: Implement Header (with 7-page nav), Footer, Layout Shell, and React Router DOM routing
Dependencies: WAVE_00
Upstream Consumed: WAVE_00 baseline, GLOBAL_SHELL.md
Downstream Handoff: WAVE_02, WAVE_03, WAVE_04
Exit Boundary: Navigation between all 7 routes functions smoothly with persistent header & footer
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Client-side routing setup for 7 approved pages | `CAP-003` (Routable navigation architecture for 7 approved pages) | `implementation-of` | PASS |
| Global Header & Navigation bar implementation | `CAP-004` (Global Header with 7-page navigation and mobile drawer) | `implementation-of` | PASS |
| Mobile Navigation Drawer implementation | `CAP-004` (Global Header with 7-page navigation and mobile drawer) | `implementation-of` | PASS |
| Global Footer implementation with direct links | `CAP-005` (Global Footer with kurumsal summary and direct links) | `implementation-of` | PASS |

- `NEW_PLAN_CAPABILITIES` = `[]` (empty)

## 3. Parent Page Coverage

| Plan Page ID | Parent Covered Page ID | Route/Surface Responsibility | Result |
|---|---|---|---|
| N/A | N/A | Shared Shell & Navigation Architecture (supports `PAGE-001` .. `PAGE-007`) | PASS |

- `NEW_PLAN_PAGES` = `[]` (empty)

## 4. Why This Wave / Dependency Rationale

- Sayfaların bağımsız olarak geliştirilebilmesi için 7 onaylı sayfaya erişim sağlayan ortak navigasyon kabuğunun hazıra getirilmesi gerekir.

## 5. Canonical Sources to Read

- `design/GLOBAL_SHELL.md`
- `design/DESIGN_SYSTEM.md`
- `ai/TECH_CONTEXT.md`
- `ref/waves/WAVE_07_HOME_REFERENCE.md`

## 6. Dependencies

- `WAVE_00` (Foundation & Engineering Baseline).

## 7. Scope

### In Scope

- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/Layout.tsx`
- `src/components/MobileDrawer.tsx`
- `src/App.tsx` rotalama konfigürasyonu.

### Out of Scope

- Sayfa gövdesi iç içerikleri.
- Harita veya WhatsApp widget'ları.

## 8. Expected Result / Target Structure

```text
src/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── MobileDrawer.tsx
└── App.tsx
```

## 9. Implementation Checklist

- [x] **Task 01.1 — Router Configuration**:
  - Location: `src/App.tsx`.
  - Action: 7 onaylı rota için React Router DOM `Routes` yapısını kurun.
  - Parent Relation: `CAP-003`.
  - Done Criteria: Rotalar değiştiğinde doğru sayfa stubu render edilir.
- [x] **Task 01.2 — Desktop & Mobile Header Component**:
  - Location: `src/components/Header.tsx`, `src/components/MobileDrawer.tsx`.
  - Action: Trakya Teknik Makine logosu, Disan yetkili servis rozeti, 7 sayfalık navigasyon linkleri ve mobil hamburger menüsünü yazın.
  - Parent Relation: `CAP-004`.
  - Done Criteria: Masaüstünde menü barı, mobilde açılır drawer kusursuz çalışır.
- [x] **Task 01.3 — Global Footer Component**:
  - Location: `src/components/Footer.tsx`.
  - Action: Firma özeti, Disan yetkili servis bilgisi, 7 onaylı sayfa bağlantısı ve direct phone/email iletişim linklerini ekleyin.
  - Parent Relation: `CAP-005`.
  - Done Criteria: Footer tüm sayfalarda dikey akışın altında sabit görünür.
- [x] **Task 01.4 — Layout Wrapper**:
  - Location: `src/components/Layout.tsx`.
  - Action: Header ve Footer'ı saran, `<Outlet />` içeren ana layout şablonunu oluşturun.
  - Parent Relation: `CAP-003`.
  - Done Criteria: Tüm sayfalar ortak layout altında render edilir.

## 10. State / Role / Responsive Coverage

- Mobile drawer açıldığında arka plan kaydırması kilitlenir (`overflow: hidden`).

## 11. Automated Verification

```bash
npm run dev
```

## 12. Manual QA / Debug Verification

- Header menüsündeki tüm linklere tıklayıp adrese bakarak 7 onaylı sayfa arasında rotalamayı doğrulayın.

## 13. Acceptance / Exit Criteria

- [x] 7 sayfanın tamamı navigasyondan erişilebilir.
- [x] Anchor collapse yapılmamıştır.

## 14. Handoff / Stop Rule

- `WAVE_01` tamamlandığında `WAVE_02`, `WAVE_03`, `WAVE_04` sayfa dalgalarına geçilebilir.

---
## Wave Result

- **Result**: PASSED
