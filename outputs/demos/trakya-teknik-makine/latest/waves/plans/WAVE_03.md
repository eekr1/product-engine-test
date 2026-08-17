# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_03: Services Overview & Detail Pages

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Hizmetler Overview (`PAGE-003`) ve 3 onaylı Hizmet Detay sayfasını (`PAGE-004`, `PAGE-005`, `PAGE-006`) ayrık routable arayüzler olarak geliştirmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_03
Wave Name: Services Overview & Detail Pages
Committed Capabilities: CAP-030, CAP-031, CAP-032, CAP-033
Covered Page IDs: PAGE-003, PAGE-004, PAGE-005, PAGE-006
Target Delivery State: Service Pages Executed
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Hizmetler Overview Implementation | `CAP-030` (Hizmetler Overview Sayfası Keşif Kartları) | implementation-of | PASS |
| Yedek Parça Detay Implementation | `CAP-031` (Yedek Parça Temini Detay Sayfası) | implementation-of | PASS |
| Yerinde Destek Detay Implementation | `CAP-032` (Yerinde Teknik Destek Detay Sayfası) | implementation-of | PASS |
| Bakım Onarım Detay Implementation | `CAP-033` (Makine Bakım ve Onarım Detay Sayfası) | implementation-of | PASS |

## 3. Parent Page Coverage

| Plan Page ID | Parent Covered Page ID | Route/Surface Responsibility | Result |
|---|---|---|---|
| PAGE-003 | PAGE-003 | `/hizmetler` (Hizmetler Overview Görünümü) | PASS |
| PAGE-004 | PAGE-004 | `/hizmetler/yedek-parca-temini` (Detay 1 Görünümü) | PASS |
| PAGE-005 | PAGE-005 | `/hizmetler/yerinde-teknik-destek` (Detay 2 Görünümü) | PASS |
| PAGE-006 | PAGE-006 | `/hizmetler/makine-bakim-onarim` (Detay 3 Görünümü) | PASS |

`PLAN_PAGE_SET == PARENT_COVERED_PAGE_SET`. Detail sayfaları kart büyütmesi veya akordeon sekmesi olarak collapse edilemez.

## 4. Why This Wave / Dependency Rationale

Hizmetler overview ve 3 odaklı hizmet detay sayfası müşterilerin hizmet keşif akışının tamamını oluşturur. Hizmet detay sayfaları kart büyütmesi gibi kalmayıp kendi sayfa kurgusu içinde tamamlanır.

## 5. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `design/DESIGN_SYSTEM.md`
- `design/pages/SERVICES_DESIGN_PACKAGE.md` (`PAGE-003`)
- `design/pages/SERVICE_DETAIL_SPARE_PARTS_DESIGN_PACKAGE.md` (`PAGE-004`)
- `design/pages/SERVICE_DETAIL_ONSITE_SUPPORT_DESIGN_PACKAGE.md` (`PAGE-005`)
- `design/pages/SERVICE_DETAIL_MAINTENANCE_REPAIR_DESIGN_PACKAGE.md` (`PAGE-006`)

## 6. Dependencies

- `WAVE_01` (Global Shell & Navigation System).

## 7. Scope

### In Scope
- `src/pages/ServicesPage.tsx` (`PAGE-003` Hizmetler Overview Keşif Kartları).
- `src/pages/ServiceDetailSparePartsPage.tsx` (`PAGE-004` Yedek Parça Temini Detay Sayfası).
- `src/pages/ServiceDetailOnsiteSupportPage.tsx` (`PAGE-005` Yerinde Teknik Destek Detay Sayfası).
- `src/pages/ServiceDetailMaintenancePage.tsx` (`PAGE-006` Makine Bakım ve Onarım Detay Sayfası).
- `src/components/services/` (ServiceDetailHeader, OtherServicesSubnav, ServiceContentBlock).

### Out of Scope
- Kaynak dışı iddialar (stok, orijinal parça garantisi, mobil filo, 7/24 acil servis, SLA, periyodik bakım paketleri, revizyon garantisi).

## 8. Expected Result / Target Structure

```text
src/
├── pages/
│   ├── ServicesPage.tsx                       (PAGE-003)
│   ├── ServiceDetailSparePartsPage.tsx        (PAGE-004)
│   ├── ServiceDetailOnsiteSupportPage.tsx     (PAGE-005)
│   └── ServiceDetailMaintenancePage.tsx       (PAGE-006)
└── components/
    └── services/
        ├── ServiceDetailHeader.tsx
        ├── ServiceContentBlock.tsx
        └── OtherServicesSubnav.tsx
```

## 9. Implementation Checklist

- [ ] **Task 3.1: Hizmetler Overview (`PAGE-003`) Implementation**
  - Location: `src/pages/ServicesPage.tsx`, `SERVICES_DESIGN_PACKAGE.md`
  - Parent Capability: `CAP-030`
  - Parent Page Identity: `PAGE-003`
  - Implementation: `SERVICES_DESIGN_PACKAGE.md` dondurulan tasarım sözleşmesine uygun şekilde 3 approved hizmet için (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) genişletilmiş keşif kartlarının kodlanması.
  - Verification: `/hizmetler` rotasında 3 hizmet kartı görünmeli ve ilgili detay rotalarına geçiş yapabilmeli.

- [ ] **Task 3.2: Yedek Parça Temini Detay Sayfası (`PAGE-004`) Implementation**
  - Location: `src/pages/ServiceDetailSparePartsPage.tsx`, `SERVICE_DETAIL_SPARE_PARTS_DESIGN_PACKAGE.md`
  - Parent Capability: `CAP-031`
  - Parent Page Identity: `PAGE-004`
  - Implementation: `SERVICE_DETAIL_SPARE_PARTS_DESIGN_PACKAGE.md` uyarınca Yedek Parça Temini hizmetinin ayrı sayfa kurgusu içinde kodlanması. FCL kısıtlarına tam uyum sağlanması (stok, orijinal parça garantisi, marka listesi uydurulmaması).
  - Verification: `/hizmetler/yedek-parca-temini` rotasında ayrık sayfa olarak açılmalı.

- [ ] **Task 3.3: Yerinde Teknik Destek Detay Sayfası (`PAGE-005`) Implementation**
  - Location: `src/pages/ServiceDetailOnsiteSupportPage.tsx`, `SERVICE_DETAIL_ONSITE_SUPPORT_DESIGN_PACKAGE.md`
  - Parent Capability: `CAP-032`
  - Parent Page Identity: `PAGE-005`
  - Implementation: `SERVICE_DETAIL_ONSITE_SUPPORT_DESIGN_PACKAGE.md` uyarınca Yerinde Teknik Destek hizmetinin ayrı sayfa kurgusu içinde kodlanması. FCL kısıtlarına uyum sağlanması (mobil filo sayısı, acil servis süresi, SLA eklenmemesi).
  - Verification: `/hizmetler/yerinde-teknik-destek` rotasında ayrık sayfa olarak açılmalı.

- [ ] **Task 3.4: Makine Bakım ve Onarım Detay Sayfası (`PAGE-006`) Implementation**
  - Location: `src/pages/ServiceDetailMaintenancePage.tsx`, `SERVICE_DETAIL_MAINTENANCE_REPAIR_DESIGN_PACKAGE.md`
  - Parent Capability: `CAP-033`
  - Parent Page Identity: `PAGE-006`
  - Implementation: `SERVICE_DETAIL_MAINTENANCE_REPAIR_DESIGN_PACKAGE.md` uyarınca Makine Bakım ve Onarım hizmetinin ayrı sayfa kurgusu içinde kodlanması. FCL kısıtlarına uyum sağlanması (periyodik bakım paketi, revizyon garantisi, hidrolik pres uzmanlık iddiaları eklenmemesi).
  - Verification: `/hizmetler/makine-bakim-onarim` rotasında ayrık sayfa olarak açılmalı.

## 10. State / Role / Responsive Coverage

- **Sub-Navigation**: Hizmet detay sayfalarında diğer 2 hizmet detayına hızlı geçiş sağlayan alt gezinti bandı.
- **Responsive Layout**: Desktop'ta 2 sütunlu odaklanmış detay düzeni, mobile'da tek sütunlu okunabilir liste.

## 11. Automated Verification

- `npm run build`: 4 hizmet sayfa bileşeninin hatasız derlenmesi.

## 12. Manual QA / Debug Verification

- `/hizmetler` üzerinden 3 detay sayfasına geçişler test edilir.
- Doğrudan URL erişimleri (`/hizmetler/yedek-parca-temini`, `/hizmetler/yerinde-teknik-destek`, `/hizmetler/makine-bakim-onarim`) doğrulanır.

## 13. Acceptance / Exit Criteria

- [ ] 4 hizmet sayfası hatasız derlenmekte ve çalışmaktadır.
- [ ] Hizmet detay sayfaları kart büyütmesi olarak kalmamış, ayrık rotalarda tamamlanmıştır.
- [ ] FCL dışı hiçbir uydurma iddia içermemektedir.

## 14. Handoff / Stop Rule

- `WAVE_03` tamamlandıktan sonra `ai/CURRENT_STATUS.md` güncellenir ve `WAVE_04` (Quality Polish & Verification) başlatılır.

---
## Wave Result

`Status: Pending Execution` (Pre-execution planning phase completed).
