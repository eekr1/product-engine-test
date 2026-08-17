# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_01: Global Shell & Navigation System

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Header, Footer, Mobile Navigation Drawer ve 7 onaylı rotayı içeren Client Router yapısını kurmak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_01
Wave Name: Global Shell & Navigation System
Committed Capabilities: CAP-010, CAP-011, CAP-012, CAP-013
Covered Page IDs: PAGE-001, PAGE-002, PAGE-003, PAGE-004, PAGE-005, PAGE-006, PAGE-007 (Shell & Navigation)
Target Delivery State: Shell & Router Ready
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Responsive Header & Yetkili Servis Badge | `CAP-010` (Responsive Header with Disan Yetkili Servis Badge) | implementation-of | PASS |
| Footer & Corporate Navigation Links | `CAP-011` (Footer with Corporate & Service Navigation Links) | implementation-of | PASS |
| Mobile Navigation Drawer | `CAP-012` (Mobile Navigation Drawer supporting all 7 pages) | implementation-of | PASS |
| Client Router for 7 Distinct Surfaces | `CAP-013` (Client Router configured for 7 distinct routable surfaces) | implementation-of | PASS |

## 3. Parent Page Coverage

| Plan Page ID | Parent Covered Page ID | Route/Surface Responsibility | Result |
|---|---|---|---|
| PAGE-001 | PAGE-001 | `/` (Ana Sayfa Rota Kaydı & Nav Linki) | PASS |
| PAGE-002 | PAGE-002 | `/kurumsal` (Kurumsal Rota Kaydı & Nav Linki) | PASS |
| PAGE-003 | PAGE-003 | `/hizmetler` (Hizmetler Overview Rota Kaydı & Nav Linki) | PASS |
| PAGE-004 | PAGE-004 | `/hizmetler/yedek-parca-temini` (Detay 1 Rota Kaydı & Nav Linki) | PASS |
| PAGE-005 | PAGE-005 | `/hizmetler/yerinde-teknik-destek` (Detay 2 Rota Kaydı & Nav Linki) | PASS |
| PAGE-006 | PAGE-006 | `/hizmetler/makine-bakim-onarim` (Detay 3 Rota Kaydı & Nav Linki) | PASS |
| PAGE-007 | PAGE-007 | `/iletisim` (İletişim Rota Kaydı & Nav Linki) | PASS |

`PLAN_PAGE_SET == PARENT_COVERED_PAGE_SET`. Distinct approved pages anchor section'lara collapse edilemez.

## 4. Why This Wave / Dependency Rationale

`WAVE_00` temelini kullanarak ortak düzeni (`Header`, `Footer`, `MobileDrawer`) ve 7 onaylı rotanın tarayıcı yönlendirme sistemini hazırlar. Sayfa geliştirme wave'leri (`WAVE_02`, `WAVE_03`) bu kabuk içinde render edilir.

## 5. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `design/DESIGN_SYSTEM.md`
- `design/GLOBAL_SHELL.md`

## 6. Dependencies

- `WAVE_00` (Foundation & Setup).

## 7. Scope

### In Scope
- `src/components/layout/Header.tsx` (Logo, Disan Yetkili Servis Badge, Desktop Navigation, İletişim Butonu).
- `src/components/layout/Footer.tsx` (Kurumsal bilgiler, 7 sayfanın navigasyon linkleri, tel/eposta placeholder).
- `src/components/layout/MobileDrawer.tsx` (Mobil cihazlar için sağdan açılan 7 sayfalı navigasyon çekmecesi).
- `src/components/layout/PageShell.tsx` (Header + Main Content + Footer düzeni).
- `src/router/index.tsx` (7 onaylı rotayı bağımsız view bileşenlerine haritalandıran Client Router).

### Out of Scope
- Sayfa içi detay bileşenlerin geliştirilmesi (`WAVE_02`, `WAVE_03`).
- 404 dışındaki ekstra rotalar.

## 8. Expected Result / Target Structure

```text
src/
├── components/
│   └── layout/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── MobileDrawer.tsx
│       └── PageShell.tsx
└── router/
    └── index.tsx
```

## 9. Implementation Checklist

- [ ] **Task 1.1: Header & Authorized Service Badge Component**
  - Location: `src/components/layout/Header.tsx`
  - Parent Capability: `CAP-010`
  - Parent Page Identity: `PAGE-001` .. `PAGE-007` (Global Shell)
  - Implementation: Koyu antrasit sticky header (`height: 80px`, `backdrop-filter: blur(12px)`). Sol tarafta Trakya Teknik Makine logosu ve Disan Hidrolik Trakya Bölge Yetkili Servisi rozeti. Sağ tarafta desktop navigasyon linkleri ve İletişim CTA butonu.
  - Verification: Header tüm sayfalarda üstte sabit ve responsive çalışmalı.

- [ ] **Task 1.2: Footer Component**
  - Location: `src/components/layout/Footer.tsx`
  - Parent Capability: `CAP-011`
  - Parent Page Identity: `PAGE-001` .. `PAGE-007` (Global Shell)
  - Implementation: Koyu antrasit footer (`#161D2A`). Kurumsal özet metin, 7 onaylı sayfanın doğrudan link kategorileri (Kurumsal linkler, Hizmet detay linkleri, İletişim kanalları), tel/eposta placeholder yönetimi.
  - Verification: 7 onaylı sayfa linki footer içinde doğru rotaya geçmeli.

- [ ] **Task 1.3: Mobile Navigation Drawer**
  - Location: `src/components/layout/MobileDrawer.tsx`
  - Parent Capability: `CAP-012`
  - Parent Page Identity: `PAGE-001` .. `PAGE-007` (Global Shell)
  - Implementation: `< 1024px` ekranlarda hamburger ikonuna tıklayınca açılan overlay çekmecesi. 7 sayfa rotasını hiyerarşik sırayla ve büyük dokunma alanlarıyla (`min 44px`) sunar.
  - Verification: Mobilde menü açılıp kapandığında rota değişimi sorunsuz çalışmalı.

- [ ] **Task 1.4: Client Router Setup for 7 Distinct Surfaces**
  - Location: `src/router/index.tsx`, `src/components/layout/PageShell.tsx`
  - Parent Capability: `CAP-013`
  - Parent Page Identity: `PAGE-001` .. `PAGE-007`
  - Implementation: 7 onaylı rotanın (`/`, `/kurumsal`, `/hizmetler`, `/hizmetler/yedek-parca-temini`, `/hizmetler/yerinde-teknik-destek`, `/hizmetler/makine-bakim-onarim`, `/iletisim`) Client Router konfigürasyonu. Sayfa geçişlerinde pencerenin üste kayması (`window.scrollTo(0,0)`).
  - Verification: Tarayıcı adres çubuğuna doğrudan URL yazıldığında ilgili sayfa iskeletine erişilebilmeli. Anchor collapse yapılmamalı.

## 10. State / Role / Responsive Coverage

- **Mobile Navigation**: `< 1024px` ekranlarda Header navigasyonu Mobile Drawer'a dönüşür.
- **Focus & Keyboard Navigation**: Mobile Drawer açıldığında odak menü içinde tutulur, `ESC` tuşuyla menü kapanır.

## 11. Automated Verification

- `npm run build`: Router ve Layout bileşenlerinin TypeScript derlemesinden hatasız geçmesi.

## 12. Manual QA / Debug Verification

- 7 onaylı rota linkine sırayla tıklanarak URL adres değişimi ve `PageShell` yerleşimi doğrulanır.
- Mobil görünümde menü açma/kapama davranışı test edilir.

## 13. Acceptance / Exit Criteria

- [ ] Header, Footer ve Mobile Drawer sorunsuz çalışmaktadır.
- [ ] 7 onaylı rota benzersiz URL'lerde erişilebilir kılınmıştır.
- [ ] Sayfalar anchor section'lara collapse edilmemiştir.

## 14. Handoff / Stop Rule

- `WAVE_01` tamamlandıktan sonra `ai/CURRENT_STATUS.md` güncellenir ve `WAVE_02` (Core Corporate Pages) başlatılır.

---
## Wave Result

`Status: Pending Execution` (Pre-execution planning phase completed).
