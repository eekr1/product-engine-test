# Trakya Teknik Makine — WAVE_03: Services Overview & Detail Pages

- **Status**: Completed
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Hizmetler Overview (`PAGE-003`) ve 3 ayrı Hizmet Detay sayfasını (`PAGE-004`, `PAGE-005`, `PAGE-006`) onaylı odaklı içeriklerle inşa etmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_03
Name: Services Overview & Detail Pages
Goal: Implement Services Overview (PAGE-003) and 3 Service Detail pages (PAGE-004, PAGE-005, PAGE-006)
Dependencies: WAVE_01
Upstream Consumed: WAVE_01 shell, HIZMETLER_DESIGN_PACKAGE.md, 3 Detail Design Packages
Downstream Handoff: WAVE_05 QA
Exit Boundary: /hizmetler and 3 detail pages route smoothly with clear discovery hierarchy
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Services overview presentation & cards | `CAP-009` (Services Overview page presentation & navigation) | `implementation-of` | PASS |
| Yedek Parça Temini Detail page presentation | `CAP-010` (Yedek Parça Temini Detail page presentation & navigation) | `implementation-of` | PASS |
| Yerinde Teknik Destek Detail page presentation | `CAP-011` (Yerinde Teknik Destek Detail page presentation & navigation) | `implementation-of` | PASS |
| Makine Bakım ve Onarım Detail page presentation | `CAP-012` (Makine Bakım ve Onarım Detail page presentation & navigation) | `implementation-of` | PASS |

- `NEW_PLAN_CAPABILITIES` = `[]` (empty)

## 3. Parent Page Coverage

| Plan Page ID | Parent Covered Page ID | Route/Surface Responsibility | Result |
|---|---|---|---|
| `PAGE-003` | `PAGE-003` | Hizmetler Overview (`/hizmetler`) | PASS |
| `PAGE-004` | `PAGE-004` | Yedek Parça Temini Detail (`/hizmetler/yedek-parca-temini`) | PASS |
| `PAGE-005` | `PAGE-005` | Yerinde Teknik Destek Detail (`/hizmetler/yerinde-teknik-destek`) | PASS |
| `PAGE-006` | `PAGE-006` | Makine Bakım ve Onarım Detail (`/hizmetler/makine-bakim-onarim`) | PASS |

- `NEW_PLAN_PAGES` = `[]` (empty)

## 4. Why This Wave / Dependency Rationale

- 3 onaylı hizmetin hem overview hem de ayrı detay sayfalarında sunulması kurumsal web sitesinin ana bilgi ve satış değerini oluşturur.

## 5. Canonical Sources to Read

- `design/pages/HIZMETLER_DESIGN_PACKAGE.md`
- `design/pages/YEDEK_PARCA_TEMINI_DESIGN_PACKAGE.md`
- `design/pages/YERINDE_TEKNIK_DESTEK_DESIGN_PACKAGE.md`
- `design/pages/MAKINE_BAKIM_ONARIM_DESIGN_PACKAGE.md`
- `ref/waves/WAVE_07_HOME_REFERENCE.md`

## 6. Dependencies

- `WAVE_01` (Global Shell & Navigation Architecture).

## 7. Scope

### In Scope

- `src/pages/ServicesPage.tsx`
- `src/pages/YedekParcaDetailPage.tsx`
- `src/pages/YerindeDestekDetailPage.tsx`
- `src/pages/MakineBakimDetailPage.tsx`
- `src/components/ServiceOverviewCard.tsx`
- `src/components/ServiceDetailHero.tsx`

### Out of Scope

- Arama/filtreleme arayüzü, stok merkezi, mobil filo SLA süresi, periyodik bakım takvimi.

## 8. Expected Result / Target Structure

```text
src/
├── pages/
│   ├── ServicesPage.tsx
│   ├── YedekParcaDetailPage.tsx
│   ├── YerindeDestekDetailPage.tsx
│   └── MakineBakimDetailPage.tsx
└── components/
    ├── ServiceOverviewCard.tsx
    └── ServiceDetailHero.tsx
```

## 9. Implementation Checklist

- [x] **Task 03.1 — Services Overview Page**:
  - Location: `src/pages/ServicesPage.tsx`, `src/components/ServiceOverviewCard.tsx`.
  - Action: Hizmetler overview sayfasını ve 3 hizmet kartını kodlayın. Her kart ilgili detay sayfasına buton taşır.
  - Parent Capability: `CAP-009`. Parent Page: `PAGE-003`.
  - Done Criteria: `/hizmetler` rotasında 3 hizmet listelenir.
- [x] **Task 03.2 — Yedek Parça Temini Detail Page**:
  - Location: `src/pages/YedekParcaDetailPage.tsx`.
  - Action: Yedek Parça Temini hizmet detay sayfasını kodlayın (FCL allowlist `FCL-003` sınırında).
  - Parent Capability: `CAP-010`. Parent Page: `PAGE-004`.
  - Done Criteria: `/hizmetler/yedek-parca-temini` rotasında detay sayfası açılır.
- [x] **Task 03.3 — Yerinde Teknik Destek Detail Page**:
  - Location: `src/pages/YerindeDestekDetailPage.tsx`.
  - Action: Yerinde Teknik Destek hizmet detay sayfasını kodlayın (FCL allowlist `FCL-004` sınırında).
  - Parent Capability: `CAP-011`. Parent Page: `PAGE-005`.
  - Done Criteria: `/hizmetler/yerinde-teknik-destek` rotasında detay sayfası açılır.
- [x] **Task 03.4 — Makine Bakım ve Onarım Detail Page**:
  - Location: `src/pages/MakineBakimDetailPage.tsx`.
  - Action: Makine Bakım ve Onarım hizmet detay sayfasını kodlayın (FCL allowlist `FCL-005` sınırında).
  - Parent Capability: `CAP-012`. Parent Page: `PAGE-006`.
  - Done Criteria: `/hizmetler/makine-bakim-onarim` rotasında detay sayfası açılır.

## 10. State / Role / Responsive Coverage

- Detay sayfalarında sağ tarafta hızlı iletişim yan paneli yer alır.

## 11. Automated Verification

```bash
npm run dev
```

## 12. Manual QA / Debug Verification

- Hizmetler sayfasından 3 detay sayfasına sırayla geçip URL ve içerik doğrulaması yapın.

## 13. Acceptance / Exit Criteria

- [x] 4 hizmet sayfası tamamlanmıştır.
- [x] Arama/filtreleme veya sahte iddia yoktur.

## 14. Handoff / Stop Rule

- `WAVE_03` tamamlandığında `WAVE_04` veya `WAVE_05` dalgasına geçilebilir.

---
## Wave Result

- **Result**: PASSED
