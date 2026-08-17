# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_04: Quality Polish & Continuation Verification

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Tüm 7 sayfa boyunca responsive uyumu, WCAG AA erişilebilirliği, FCL allowlist veri denetimini ve same-codebase continuation hazır olmasını doğrulamak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_04
Wave Name: Quality Polish & Continuation Verification
Committed Capabilities: CAP-040, CAP-041, CAP-042
Covered Page IDs: PAGE-001, PAGE-002, PAGE-003, PAGE-004, PAGE-005, PAGE-006, PAGE-007 (Full Package QA)
Target Delivery State: Sales-Demo Ready
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Cross-Page Responsive Refinement | `CAP-040` (Cross-page Mobile/Tablet Responsive Refinement) | implementation-of | PASS |
| FCL & Source Claim Verification | `CAP-041` (FCL & Source Claim Integrity Verification) | implementation-of | PASS |
| Same-Codebase Continuation Audit | `CAP-042` (Same-Codebase Continuation & Production Build Audit) | implementation-of | PASS |

## 3. Parent Page Coverage

| Plan Page ID | Parent Covered Page ID | Route/Surface Responsibility | Result |
|---|---|---|---|
| PAGE-001 | PAGE-001 | Cross-page Responsive & Accessibility Audit | PASS |
| PAGE-002 | PAGE-002 | Cross-page Responsive & Accessibility Audit | PASS |
| PAGE-003 | PAGE-003 | Cross-page Responsive & Accessibility Audit | PASS |
| PAGE-004 | PAGE-004 | Cross-page Responsive & Accessibility Audit | PASS |
| PAGE-005 | PAGE-005 | Cross-page Responsive & Accessibility Audit | PASS |
| PAGE-006 | PAGE-006 | Cross-page Responsive & Accessibility Audit | PASS |
| PAGE-007 | PAGE-007 | Cross-page Responsive & Accessibility Audit | PASS |

`PLAN_PAGE_SET == PARENT_COVERED_PAGE_SET`.

## 4. Why This Wave / Dependency Rationale

Whole-project cross-page kalite doğrulaması tek bir sayfa wave'ine gizlenemez; tüm sayfalar tamamlandıktan sonra standalone kapanış wave'i olarak yürütülür.

## 5. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `ai/DECISIONS.md`
- `design/DESIGN_RULES.md`
- `design/DESIGN_SYSTEM.md`
- `waves/WAVE_MAP.md`

## 6. Dependencies

- `WAVE_02` (Core Corporate Pages).
- `WAVE_03` (Services Overview & Detail Pages).

## 7. Scope

### In Scope
- Tüm 7 onaylı sayfa arayüzünde responsive breakpoint denetimi (Mobile `< 640px`, Tablet `640px - 1024px`, Desktop `> 1024px`).
- WCAG AA kontrast, aria etiketleri ve klavye odaklanma kontrolü.
- FCL allowlist veri denetimi (0 unbacked claim).
- Production build derleme denetimi (`npm run build`).

### Out of Scope
- Yeni sayfa veya işlevsel özellik eklenmesi.

## 8. Expected Result / Target Structure

- Tamamlanmış, responsive, erişilebilir ve satış demosu kalitesinde kurumsal frontend paketi.

## 9. Implementation Checklist

- [ ] **Task 4.1: Cross-Page Responsive Refinement**
  - Location: Tüm `src/pages/` ve `src/components/` stil dosyaları.
  - Parent Capability: `CAP-040`
  - Parent Page Identity: `PAGE-001` .. `PAGE-007`
  - Implementation: 7 onaylı sayfanın desktop, tablet ve mobil boyutlarında yatay kayma (horizontal overflow) oluşturmadan temiz görünmesinin denetlenmesi ve ince rötuşların yapılması.
  - Verification: Mobil görünümde yatay kayma 0px olmalı.

- [ ] **Task 4.2: FCL & Source Claim Audit**
  - Location: `src/services/mockData.ts`, tüm sayfa metin içerikleri.
  - Parent Capability: `CAP-041`
  - Parent Page Identity: `PAGE-001` .. `PAGE-007`
  - Implementation: Projedeki tüm metinlerin `SRC-001` ve FCL allowlist sınırlarında kaldığının doğrulanması. Stok, orijinal parça garantisi, mobil filo, 7/24 acil servis, SLA, periyodik bakım paketleri veya revizyon iddialarının kesinlikle yer almadığının onaylanması.
  - Verification: Unbacked claim sayısı = 0.

- [ ] **Task 4.3: Same-Codebase Continuation & Production Build Audit**
  - Location: Root build artifacts & TypeScript compiler.
  - Parent Capability: `CAP-042`
  - Parent Page Identity: `PAGE-001` .. `PAGE-007`
  - Implementation: Production derleme komutunun (`npm run build`) hatasız derlendiğinin ve TypeScript tür denetiminden geçtiğinin doğrulanması.
  - Verification: Derleme hatası = 0, warning = 0.

## 10. State / Role / Responsive Coverage

- **Cross-Page QA**: Tüm 7 sayfanın mobil, tablet ve desktop düzenlerinin testi.

## 11. Automated Verification

- `npm run build`: Production paketinin sıfır hata ile derlenmesi.

## 12. Manual QA / Debug Verification

- 7 sayfanın tamamı arasında navigasyon geçişleri ve URL kontrolleri yapılır.
- Mobil cihaz görünümünde menü ve içerik akışı test edilir.

## 13. Acceptance / Exit Criteria

- [ ] Production build hatasız tamamlanmaktadır.
- [ ] 7 onaylı sayfanın tamamı responsive ve erişilebilirdir.
- [ ] 0 unbacked factual claim bulunmaktadır.

## 14. Handoff / Stop Rule

- `WAVE_04` tamamlandığında run final validation gate'e hazır hale gelir.

---
## Wave Result

`Status: Pending Execution` (Pre-execution planning phase completed).
