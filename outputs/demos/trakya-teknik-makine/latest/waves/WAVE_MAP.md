# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

- **Prerequisite / Foundation Ordering**: `WAVE_00` (Setup & Data Adapter) ve `WAVE_01` (Global Shell & Navigation), sayfa arayüzlerinin üretilmesinden önce tamamlanır.
- **Surface & Capability Coherence**: Çok sayfalı kurumsal yapı (`corporate-website`) 7 ayrı onaylı sayfa (`PAGE-001` .. `PAGE-007`) üzerinden temsil edilir. Sayfa birleştirmesi veya anchor section collapse kesinlikle yasaktır.
- **Dedicated QA Boundary**: `WAVE_04` tüm sayfalar ve shell kurulduktan sonra cross-page responsive, erişilebilirlik, temiz veri katmanı ve same-codebase continuation doğrulaması için standalone kapanış wave'idir.

## 2. Approved Page Coverage Registry

| Page ID | Page Name | Route Identity | Parent / Detail Relation | Primary Assigned Wave | Cross-Page QA Wave |
|---|---|---|---|---|---|
| PAGE-001 | Ana Sayfa | `/` | Root | WAVE_02 (Core Corporate Pages) | WAVE_04 |
| PAGE-002 | Kurumsal | `/kurumsal` | Child of Root | WAVE_02 (Core Corporate Pages) | WAVE_04 |
| PAGE-003 | Hizmetler | `/hizmetler` | Child of Root | WAVE_03 (Services Overview & Details) | WAVE_04 |
| PAGE-004 | Yedek Parça Temini — Hizmet Detayı | `/hizmetler/yedek-parca-temini` | Detail of PAGE-003 | WAVE_03 (Services Overview & Details) | WAVE_04 |
| PAGE-005 | Yerinde Teknik Destek — Hizmet Detayı | `/hizmetler/yerinde-teknik-destek` | Detail of PAGE-003 | WAVE_03 (Services Overview & Details) | WAVE_04 |
| PAGE-006 | Makine Bakım ve Onarım — Hizmet Detayı | `/hizmetler/makine-bakim-onarim` | Detail of PAGE-003 | WAVE_03 (Services Overview & Details) | WAVE_04 |
| PAGE-007 | İletişim | `/iletisim` | Child of Root | WAVE_02 (Core Corporate Pages) | WAVE_04 |

`APPROVED_PAGE_SET == PLANNED_PAGE_SET`. `MISSING_MAP_PAGES = []`, `UNAPPROVED_MAP_PAGES = []`.

## 3. Wave Map Summary

| Wave ID | Wave Name | Primary Deliverables / Focus | Covered Page IDs | Target Delivery State |
|---|---|---|---|---|
| WAVE_00 | Foundation & Setup | Vite + React + TS environment, package.json, CSS tokens, mock data adapter boundary. | N/A (Foundation Wave) | Demo-Ready Foundation |
| WAVE_01 | Global Shell & Navigation System | Header, Footer, Mobile Navigation Drawer, Client Router for 7 routes. | PAGE-001 .. PAGE-007 (Shell & Navigation) | Shell & Router Ready |
| WAVE_02 | Core Corporate Pages | PAGE-001 (Home), PAGE-002 (Corporate), PAGE-007 (Contact) implementation. | PAGE-001, PAGE-002, PAGE-007 | Core Pages Executed |
| WAVE_03 | Services Overview & Detail Pages | PAGE-003 (Overview), PAGE-004, PAGE-005, PAGE-006 (Detail Pages) implementation. | PAGE-003, PAGE-004, PAGE-005, PAGE-006 | Service Pages Executed |
| WAVE_04 | Quality Polish & Continuation Verification | Responsive refinement, WCAG accessibility, data boundary audit, continuation verification. | PAGE-001 .. PAGE-007 (Full Package QA) | Sales-Demo Ready |

## 4. Dependency Chain

```text
WAVE_00 (Foundation & Data Adapter)
   │
   ▼
WAVE_01 (Global Shell & Client Router)
   │
   ├───────────────────────────────┐
   ▼                               ▼
WAVE_02 (Core Corporate Pages)   WAVE_03 (Service Overview & Details)
   │                               │
   └───────────────────────────────┘
   │
   ▼
WAVE_04 (Quality Polish & Continuation Verification)
```

## 5. Wave Entries

### WAVE_00 — Foundation & Setup

- **Goal**: Modüler, component-oriented Vite + React + TypeScript baseline'ını, CSS Custom Properties (`tokens.css`) ve clean service/data-access adapter yapısını kurmak.
- **Why Separate / Sequencing Rationale**: Shell ve sayfa arayüzleri geliştirilmeden önce tipografi, renkler ve veri erişim arabiriminin hazır olması tutarlılığı garanti eder.
- **Committed Capabilities**:
  - `CAP-001`: Vite + React + TS baseline initialization (`SCP-001`, `SCP-014`, Executable: YES).
  - `CAP-002`: CSS Custom Properties (`tokens.css`) ve global stil tanımı (`SCP-014`, Executable: YES).
  - `CAP-003`: Local Mock Data & Data Adapter Interface Layer (`SCP-013`, Executable: YES).
- **Covered Page IDs**: `N/A` (Altyapı wave'i)
- **In Scope**: `package.json`, Vite config, TS config, `styles/tokens.css`, `styles/global.css`, `services/mockData.ts`, `services/dataAdapter.ts`.
- **Out of Scope**: Real API endpoints, database schemas, UI page components.
- **Primary Deliverables**: Derlenebilir frontend projesi, CSS token sistemi, veri adapter arabirimi.
- **Dependencies**: None.
- **Upstream Boundary Consumed**: Approved PROJECT_INPUT v1 & TECH_CONTEXT.
- **Downstream Handoff**: `WAVE_01` layout shell ve router geliştirilmesi için hazır altyapı.
- **Exit Boundary**: `npm run dev` ve `npm run build` komutlarının sorunsuz çalışması.

---

### WAVE_01 — Global Shell & Navigation System

- **Goal**: Header, Footer, Mobile Navigation Drawer ve 7 onaylı rotayı içeren Client Router altyapısını kurmak.
- **Why Separate / Sequencing Rationale**: Tüm sayfalar ortak bir kabuk ve navigasyon yapısını kullandığı için sayfa içeriklerinden önce tam işlevsel shell teslim edilir.
- **Committed Capabilities**:
  - `CAP-010`: Responsive Header with Disan Yetkili Servis Badge (`SCP-001`, `SCP-009`, Executable: YES).
  - `CAP-011`: Footer with Corporate & Service Navigation Links (`SCP-001`, `SCP-012`, Executable: YES).
  - `CAP-012`: Mobile Navigation Drawer supporting all 7 pages (`SCP-001`, `SCP-012`, Executable: YES).
  - `CAP-013`: Client Router configured for 7 distinct routable surfaces (`SCP-002` .. `SCP-008`, `SCP-012`, Executable: YES).
- **Covered Page IDs**: `PAGE-001`, `PAGE-002`, `PAGE-003`, `PAGE-004`, `PAGE-005`, `PAGE-006`, `PAGE-007` (Navigation & Shell Coverage).
- **In Scope**: `Header.tsx`, `Footer.tsx`, `MobileDrawer.tsx`, `PageShell.tsx`, `router/index.tsx`.
- **Out of Scope**: Sayfa detay içeriklerinin tamamlanması.
- **Primary Deliverables**: Çalışan global navigation, 7 routable sayfa iskeleti, responsive mobile drawer.
- **Dependencies**: `WAVE_00`.
- **Upstream Boundary Consumed**: `WAVE_00` tokens and baseline.
- **Downstream Handoff**: Sayfa geliştirme wave'leri (`WAVE_02`, `WAVE_03`) için hazır layout shell.
- **Exit Boundary**: 7 rotaya tarayıcı üzerinden doğrudan erişim sağlanabilmesi, nav linklerinin doğru rotaya geçmesi.

---

### WAVE_02 — Core Corporate Pages

- **Goal**: Ana Sayfa (`PAGE-001`), Kurumsal Sayfa (`PAGE-002`) ve İletişim Sayfası (`PAGE-007`) arayüzlerini geliştirmek.
- **Why Separate / Sequencing Rationale**: Ana sayfa, kurumsal profil ve iletişim yüzeyleri firmanın kimliğini ve servis statüsünü doğrulayan temel kurumsal omurgadır.
- **Committed Capabilities**:
  - `CAP-020`: Ana Sayfa (`PAGE-001`) Hero, Hizmet Overview Grid ve CTA (`SCP-002`, `SCP-009`, `SCP-010`, Executable: YES).
  - `CAP-021`: Kurumsal Sayfa (`PAGE-002`) Profil ve Yetkili Servis Sunumu (`SCP-003`, `SCP-009`, Executable: YES).
  - `CAP-022`: İletişim Sayfası (`PAGE-007`) Kanallar ve Demo Form (`SCP-008`, `SCP-011`, Executable: YES).
- **Covered Page IDs**: `PAGE-001`, `PAGE-002`, `PAGE-007`.
- **In Scope**: `pages/HomePage.tsx`, `pages/CorporatePage.tsx`, `pages/ContactPage.tsx`, ilgili UI bileşenleri.
- **Out of Scope**: Hizmet detay sayfaları içerikleri.
- **Primary Deliverables**: 3 tamamlanmış kurumsal sayfa arayüzü.
- **Dependencies**: `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_01` Layout Shell & Router.
- **Downstream Handoff**: `WAVE_04` final QA ve `WAVE_03` ile paralel geliştirme.
- **Exit Boundary**: Ana Sayfa, Kurumsal ve İletişim sayfalarının görsel/işlevsel olarak hazır olması.

---

### WAVE_03 — Services Overview & Detail Pages

- **Goal**: Hizmetler Overview (`PAGE-003`) ve 3 Hizmet Detay sayfasını (`PAGE-004`, `PAGE-005`, `PAGE-006`) ayrık routable arayüzler olarak geliştirmek.
- **Why Separate / Sequencing Rationale**: Hizmetler overview ve 3 odaklı hizmet detay sayfası hizmet keşif akışının tamamını oluşturur. Hizmet detay sayfaları kart büyütmesi gibi kalmayıp kendi sayfa kurgusu içinde tamamlanır.
- **Committed Capabilities**:
  - `CAP-030`: Hizmetler Overview Sayfası (`PAGE-003`) Keşif Kartları (`SCP-004`, `SCP-010`, Executable: YES).
  - `CAP-031`: Yedek Parça Temini Detay Sayfası (`PAGE-004`) (`SCP-005`, Executable: YES).
  - `CAP-032`: Yerinde Teknik Destek Detay Sayfası (`PAGE-005`) (`SCP-006`, Executable: YES).
  - `CAP-033`: Makine Bakım ve Onarım Detay Sayfası (`PAGE-006`) (`SCP-007`, Executable: YES).
- **Covered Page IDs**: `PAGE-003`, `PAGE-004`, `PAGE-005`, `PAGE-006`.
- **In Scope**: `pages/ServicesPage.tsx`, `pages/ServiceDetailSparePartsPage.tsx`, `pages/ServiceDetailOnsiteSupportPage.tsx`, `pages/ServiceDetailMaintenancePage.tsx`.
- **Out of Scope**: Backend API entegrasyonu.
- **Primary Deliverables**: 4 tamamlanmış hizmet arayüzü (1 overview + 3 detail pages).
- **Dependencies**: `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_01` Layout Shell & Router.
- **Downstream Handoff**: `WAVE_04` final QA.
- **Exit Boundary**: Overview -> Detail sayfa geçişlerinin ve 3 detay sayfasının ayrık rotalarda sorunsuz çalışması.

---

### WAVE_04 — Quality Polish & Continuation Verification

- **Goal**: Tüm 7 sayfa boyunca responsive uyumu, WCAG AA erişilebilirliği, FCL allowlist veri denetimini ve same-codebase continuation hazır olmasını doğrulamak.
- **Why Separate / Sequencing Rationale**: Whole-project cross-page kalite doğrulaması tek bir sayfa wave'ine gizlenemez; tüm sayfalar tamamlandıktan sonra standalone kapanış wave'i olarak yürütülür.
- **Committed Capabilities**:
  - `CAP-040`: Cross-page Mobile/Tablet Responsive Refinement (`SCP-001`, `SCP-014`, Executable: YES).
  - `CAP-041`: FCL & Source Claim Integrity Verification (`SCP-015` .. `SCP-021`, Executable: YES).
  - `CAP-042`: Same-Codebase Continuation & Production Build Audit (`SCP-013`, `SCP-014`, Executable: YES).
- **Covered Page IDs**: `PAGE-001`, `PAGE-002`, `PAGE-003`, `PAGE-004`, `PAGE-005`, `PAGE-006`, `PAGE-007`.
- **In Scope**: Tüm proje yüzeyleri, responsive testler, derleme denetimi.
- **Out of Scope**: Yeni sayfa veya feature eklemek.
- **Primary Deliverables**: Satış demosuna hazır, doğrulanmış ve hatasız kurumsal frontend paketi.
- **Dependencies**: `WAVE_02`, `WAVE_03`.
- **Upstream Boundary Consumed**: Tamamlanmış tüm sayfa arayüzleri.
- **Downstream Handoff**: Final publication ve tamamlanma.
- **Exit Boundary**: `npm run build` hatasız derlenmesi, 0 unbacked claim, 7 routable sayfanın kusursuz çalışması.

## 6. Cross-Wave Invariants

- Hiçbir wave onaylı 7 sayfayı anchor section'lara collapse edemez.
- Hiçbir wave FCL dışında uydurma marka, stok, garanti veya SLA verisi üretemez.
- Bağımlılık zinciri döngüsüzdür (`WAVE_00` -> `WAVE_01` -> `WAVE_02`/`WAVE_03` -> `WAVE_04`).

## 7. Global Exit / Handoff Rules

- Her wave tamamlandığında `WAVE_PLAN` kabul kriterleri doğrulanır, `ai/CURRENT_STATUS.md` güncellenir ve bir sonraki wave başlatılır.
