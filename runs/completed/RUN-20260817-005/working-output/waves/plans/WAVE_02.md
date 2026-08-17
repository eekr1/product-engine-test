# Trakya Teknik Makine — WAVE_02: Home & Corporate Pages

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Ana Sayfa (`PAGE-001`) ve Kurumsal (`PAGE-002`) sayfalarını onaylı tasarım paketleri ve içerik sınırları uyarınca inşa etmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_02
Name: Home & Corporate Pages
Goal: Implement Home (PAGE-001) and Corporate (PAGE-002) routable pages
Dependencies: WAVE_01
Upstream Consumed: WAVE_01 shell, HOME_DESIGN_PACKAGE.md, KURUMSAL_DESIGN_PACKAGE.md
Downstream Handoff: WAVE_05 QA
Exit Boundary: / and /kurumsal function properly with dark anthracite/amber layout
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Home page Hero & overview presentation | `CAP-006` (Home page presentation & navigation) | `implementation-of` | PASS |
| Authority Badge component & Disan status | `CAP-008` (Disan Yetkili Servis status presentation) | `implementation-of` | PASS |
| Corporate page presentation & details | `CAP-007` (Corporate page presentation & navigation) | `implementation-of` | PASS |

- `NEW_PLAN_CAPABILITIES` = `[]` (empty)

## 3. Parent Page Coverage

| Plan Page ID | Parent Covered Page ID | Route/Surface Responsibility | Result |
|---|---|---|---|
| `PAGE-001` | `PAGE-001` | Ana Sayfa (`/`) — Primary Entrance Surface | PASS |
| `PAGE-002` | `PAGE-002` | Kurumsal (`/kurumsal`) — Corporate Identity Surface | PASS |

- `NEW_PLAN_PAGES` = `[]` (empty)

## 4. Why This Wave / Dependency Rationale

- Ana Sayfa ve Kurumsal sayfaları firmanın ilk izlenimini ve yetkili servis güvenini oluşturan ana yüzeylerdir.

## 5. Canonical Sources to Read

- `design/pages/HOME_DESIGN_PACKAGE.md`
- `design/pages/KURUMSAL_DESIGN_PACKAGE.md`
- `ai/PRODUCT_RULES.md`
- `ref/waves/WAVE_07_HOME_REFERENCE.md`

## 6. Dependencies

- `WAVE_01` (Global Shell & Navigation Architecture).

## 7. Scope

### In Scope

- `src/pages/HomePage.tsx`
- `src/pages/CorporatePage.tsx`
- `src/components/HeroSection.tsx`
- `src/components/AuthorityBadge.tsx`
- `src/components/CorporateIntroSection.tsx`

### Out of Scope

- Hizmet detay sayfaları, iletişim formu.

## 8. Expected Result / Target Structure

```text
src/
├── pages/
│   ├── HomePage.tsx
│   └── CorporatePage.tsx
└── components/
    ├── HeroSection.tsx
    ├── AuthorityBadge.tsx
    └── CorporateIntroSection.tsx
```

## 9. Implementation Checklist

- [ ] **Task 02.1 — HomePage Implementation**:
  - Location: `src/pages/HomePage.tsx`, `src/components/HeroSection.tsx`.
  - Action: Ana Sayfa hero alanı, Disan yetkili servis rozeti, 3 hizmet özet kartı ve yönlendirmeleri kodlayın.
  - Parent Capability: `CAP-006`. Parent Page: `PAGE-001`.
  - Done Criteria: Ana Sayfa antrasit/amber tema ile sorunsuz görünür.
- [ ] **Task 02.2 — Authority Badge Component**:
  - Location: `src/components/AuthorityBadge.tsx`.
  - Action: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi rozet bileşenini oluşturun.
  - Parent Capability: `CAP-008`. Parent Page: `PAGE-001`, `PAGE-002`.
  - Done Criteria: Rozet onaylı metni taşır ve görsel güven sağlar.
- [ ] **Task 02.3 — CorporatePage Implementation**:
  - Location: `src/pages/CorporatePage.tsx`, `src/components/CorporateIntroSection.tsx`.
  - Action: Kurumsal sayfa sunumunu, faaliyet alanı vurgusunu ve yetkili servis bilgi panelini kodlayın.
  - Parent Capability: `CAP-007`. Parent Page: `PAGE-002`.
  - Done Criteria: `/kurumsal` rotasında firma tanıtımı sorunsuz açılır; uydurma tarihçe içermez.

## 10. State / Role / Responsive Coverage

- Masaüstünde 2-3 kolonlu düzen, mobilde dikey akış.

## 11. Automated Verification

```bash
npm run dev
```

## 12. Manual QA / Debug Verification

- `/` ve `/kurumsal` sayfalarında gezinip metinlerin FCL allowlist ile tam uyumlu olduğunu doğrulayın.

## 13. Acceptance / Exit Criteria

- [ ] `PAGE-001` ve `PAGE-002` tamamlanmıştır.
- [ ] Source-backed olmayan iddia uydurulmamıştır.

## 14. Handoff / Stop Rule

- `WAVE_02` tamamlandığında `WAVE_03` veya `WAVE_05` aşamasına geçilebilir.

---
## Wave Result

- **Result**: Pending Execution
