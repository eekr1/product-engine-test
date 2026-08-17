# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

- **Single Delivery Boundaries**: Her dalga bağımsız olarak doğrulanabilir, somut bir teslimat sonucunu temsil eder.
- **Foundation First**: Mühendislik tabanı, tasarım sistemi token'ları ve service adapter soyutlaması (`WAVE_00`) ile global shell ve rotalama (`WAVE_01`) tüketici sayfalardan önce inşa edilir.
- **Approved Page Set Preservation**: `APPROVED_PAGE_SET` içindeki 7 sayfanın tamamı (`PAGE-001` - `PAGE-007`) dalgalara eksiksiz dağıtılmıştır (`APPROVED_PAGE_SET == PLANNED_PAGE_SET`). Hiçbir onaylı sayfa tek-page section anchor'a collapse edilemez.
- **Direct Approved Scope Tracing**: Dalgalardaki tüm taahhüt edilen yetenekler (`Committed Capabilities`) doğrudan onaylı executable scope öğelerine (`SCP-001` - `SCP-013`) izlenebilir durumdadır. Tasarım dokümanları veya upstream taslaklar kapsam yetki kaynağı olarak kullanılamaz.

## 2. Approved Page Coverage Registry

| Page ID | Page Name | Approved Route | Implementation Wave | Wave Status | Collapse Check |
|---|---|---|---|---|---|
| `PAGE-001` | Ana Sayfa | `/` | `WAVE_02` | Planned | PASS (Routable Page) |
| `PAGE-002` | Kurumsal | `/kurumsal` | `WAVE_02` | Planned | PASS (Routable Page) |
| `PAGE-003` | Hizmetler | `/hizmetler` | `WAVE_03` | Planned | PASS (Routable Page) |
| `PAGE-004` | Yedek Parça Temini — Hizmet Detayı | `/hizmetler/yedek-parca-temini` | `WAVE_03` | Planned | PASS (Routable Page) |
| `PAGE-005` | Yerinde Teknik Destek — Hizmet Detayı | `/hizmetler/yerinde-teknik-destek` | `WAVE_03` | Planned | PASS (Routable Page) |
| `PAGE-006` | Makine Bakım ve Onarım — Hizmet Detayı | `/hizmetler/makine-bakim-onarim` | `WAVE_03` | Planned | PASS (Routable Page) |
| `PAGE-007` | İletişim | `/iletisim` | `WAVE_04` | Planned | PASS (Routable Page) |

- `APPROVED_PAGE_SET` = { `PAGE-001`, `PAGE-002`, `PAGE-003`, `PAGE-004`, `PAGE-005`, `PAGE-006`, `PAGE-007` }
- `PLANNED_PAGE_SET` = { `PAGE-001`, `PAGE-002`, `PAGE-003`, `PAGE-004`, `PAGE-005`, `PAGE-006`, `PAGE-007` }
- `MISSING_MAP_PAGES` = `[]`
- `UNAPPROVED_MAP_PAGES` = `[]`
- `COLLAPSED_APPROVED_PAGES` = `[]`

## 3. Wave Map Summary

| Wave ID | Wave Name | Primary Goal | Covered Page IDs | Dependencies |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Engineering Baseline | Establish package-managed Vite React TS project, design tokens CSS, and data access adapter boundary | N/A (Technical) | None |
| `WAVE_01` | Global Shell & Navigation Architecture | Implement Header (with 7-page nav), Footer, Layout Shell, and React Router DOM routing | N/A (Shared Shell) | `WAVE_00` |
| `WAVE_02` | Home & Corporate Pages | Implement Home (`PAGE-001`) and Corporate (`PAGE-002`) routable pages | `PAGE-001`, `PAGE-002` | `WAVE_01` |
| `WAVE_03` | Services Overview & Detail Pages | Implement Services Overview (`PAGE-003`) and 3 Service Detail pages (`PAGE-004`, `PAGE-005`, `PAGE-006`) | `PAGE-003`, `PAGE-004`, `PAGE-005`, `PAGE-006` | `WAVE_01` |
| `WAVE_04` | Contact Page & Direct Contact Capabilities | Implement Contact page (`PAGE-007`) with direct phone & email contact capabilities | `PAGE-007` | `WAVE_01` |
| `WAVE_05` | Cross-Page Responsive Integration & Quality QA | Comprehensive cross-page integration, responsive consistency, accessibility, and production build QA | `PAGE-001` .. `PAGE-007` | `WAVE_02`, `WAVE_03`, `WAVE_04` |

## 4. Dependency Chain

```text
WAVE_00 (Foundation)
  └── WAVE_01 (Global Shell & Navigation)
        ├── WAVE_02 (Home & Corporate) ──────────────┐
        ├── WAVE_03 (Services Overview & Details) ──┼──> WAVE_05 (QA & Build Verification)
        └── WAVE_04 (Contact & Direct Contact) ─────┘
```

## 5. Wave Entries

### WAVE_00: Foundation & Engineering Baseline

- **Goal**: Package-managed Vite + React + TypeScript projesini kurmak, CSS variables tasarım token'larını yerleştirmek ve soyutlanmış data-access adapter katmanını oluşturmak.
- **Why Separate**: UI geliştirme başlamadan önce tekrarlanabilir dev/build iş akışının, tip tanımlarının ve mock veri adapter boundary'sinin temiz biçimde kurulması gerekir.
- **Committed Capabilities**:
  - `CAP-001`: Multi-page corporate website frontend foundation baseline (`SCP-001`, `SCP-012`, Status: `IN_SCOPE`, Executable: YES)
  - `CAP-002`: Clean data-access adapter layer for local mock fixtures (`SCP-011`, Status: `IN_SCOPE`, Executable: YES)
- **Covered Page IDs**: `N/A` (Engineering baseline)
- **In Scope**: Vite React TS projesi, `tokens.css`, `global.css`, `src/data/mockData.ts`, `src/services/companyService.ts`, `src/services/servicesService.ts`.
- **Out of Scope**: UI sayfa tasarımları, router wiring, production deployment.
- **Primary Deliverables**: Proje klasör yapısı, paket bağımlılıkları, CSS değişkenleri, mock data adapter'ları.
- **Dependencies**: Yok.
- **Upstream Consumed**: Approved input, TECH_CONTEXT, DESIGN_SYSTEM.
- **Downstream Handoff**: `WAVE_01` için hazır mühendislik ve stil tabanı.
- **Exit Boundary**: `npm run dev` hatasız çalışır, service adapter'ları mock veriyi nesne olarak döndürür.

### WAVE_01: Global Shell & Navigation Architecture

- **Goal**: Header (logo, 7 sayfalık nav, mobile drawer), Footer ve Layout Shell bileşenlerini React Router DOM rotalama altyapısıyla entegre etmek.
- **Why Separate**: Sayfa içerikleri inşa edilmeden önce 7 onaylı sayfanın tamamına kesintisiz erişim sağlayan ortak kabuk ve rotalama mimarisinin kurulması gerekir.
- **Committed Capabilities**:
  - `CAP-003`: Routable navigation architecture for 7 approved pages (`SCP-001`, `SCP-012`, Status: `IN_SCOPE`, Executable: YES)
  - `CAP-004`: Global Header with 7-page navigation and mobile drawer (`SCP-001`, `SCP-013`, Status: `IN_SCOPE`, Executable: YES)
  - `CAP-005`: Global Footer with kurumsal summary and direct links (`SCP-001`, `SCP-013`, Status: `IN_SCOPE`, Executable: YES)
- **Covered Page IDs**: `N/A` (Shared Shell)
- **In Scope**: `Header.tsx`, `Footer.tsx`, `Layout.tsx`, `MobileDrawer.tsx`, `App.tsx` rotalama konfigürasyonu.
- **Out of Scope**: Sayfa spesifik iç içerikler.
- **Primary Deliverables**: Ortak kabuk bileşenleri, çalışan 7 route stubu.
- **Dependencies**: `WAVE_00`.
- **Upstream Consumed**: `WAVE_00` baseline, GLOBAL_SHELL.md.
- **Downstream Handoff**: `WAVE_02`, `WAVE_03`, `WAVE_04` sayfa geliştirme dalgaları.
- **Exit Boundary**: Tarayıcıda 7 rotaya geçildiğinde başlık/footer sabit kalır, URL değişir.

### WAVE_02: Home & Corporate Pages

- **Goal**: Ana Sayfa (`PAGE-001`) ve Kurumsal (`PAGE-002`) sayfalarını onaylı tasarım paketleri ve içerik sınırları uyarınca inşa etmek.
- **Why Separate**: Ana Sayfa ve Kurumsal sayfaları firmanın kurumsal kimliğini ve yetkili servis statüsünü tanıtan çekirdek kurumsal yüzeylerdir.
- **Committed Capabilities**:
  - `CAP-006`: Home page presentation & navigation (`SCP-002`, Status: `IN_SCOPE`, Executable: YES)
  - `CAP-007`: Corporate page presentation & navigation (`SCP-003`, Status: `IN_SCOPE`, Executable: YES)
  - `CAP-008`: Disan Yetkili Servis status presentation (`SCP-009`, Status: `IN_SCOPE`, Executable: YES)
- **Covered Page IDs**: `PAGE-001`, `PAGE-002`
- **In Scope**: `HomePage.tsx`, `CorporatePage.tsx`, `HeroSection.tsx`, `AuthorityBadge.tsx`, `CorporateIntroSection.tsx`.
- **Out of Scope**: Hizmet detay sayfaları, iletişim sayfası.
- **Primary Deliverables**: `PAGE-001` ve `PAGE-002` çalışır UI bileşenleri.
- **Dependencies**: `WAVE_01`.
- **Upstream Consumed**: `WAVE_01` shell, `HOME_DESIGN_PACKAGE.md`, `KURUMSAL_DESIGN_PACKAGE.md`.
- **Downstream Handoff**: `WAVE_05` QA.
- **Exit Boundary**: `/` ve `/kurumsal` sayfaları antrasit/amber tema ile sorunsuz işler, uydurma tarihçe/sertifika içermez.

### WAVE_03: Services Overview & Detail Pages

- **Goal**: Hizmetler Overview (`PAGE-003`) ve 3 ayrı Hizmet Detay sayfasını (`PAGE-004`, `PAGE-005`, `PAGE-006`) onaylı odaklı içeriklerle inşa etmek.
- **Why Separate**: Hizmetlerin overview ve 3 ayrı detay sayfasında sunulması sitenin ana değer önermesini oluşturur ve tek sayfaya collapse edilemez.
- **Committed Capabilities**:
  - `CAP-009`: Services Overview page presentation & navigation (`SCP-004`, Status: `IN_SCOPE`, Executable: YES)
  - `CAP-010`: Yedek Parça Temini Detail page presentation & navigation (`SCP-005`, Status: `IN_SCOPE`, Executable: YES)
  - `CAP-011`: Yerinde Teknik Destek Detail page presentation & navigation (`SCP-006`, Status: `IN_SCOPE`, Executable: YES)
  - `CAP-012`: Makine Bakım ve Onarım Detail page presentation & navigation (`SCP-007`, Status: `IN_SCOPE`, Executable: YES)
- **Covered Page IDs**: `PAGE-003`, `PAGE-004`, `PAGE-005`, `PAGE-006`
- **In Scope**: `ServicesPage.tsx`, `YedekParcaDetailPage.tsx`, `YerindeDestekDetailPage.tsx`, `MakineBakimDetailPage.tsx`, `ServiceOverviewCard.tsx`, `ServiceDetailHero.tsx`.
- **Out of Scope**: Arama/filtreleme arayüzü, stok merkezi iddiası, acil servis SLA süresi, periyodik bakım takvimi.
- **Primary Deliverables**: 4 ayrı çalışır hizmet sayfası.
- **Dependencies**: `WAVE_01`.
- **Upstream Consumed**: `WAVE_01` shell, `HIZMETLER_DESIGN_PACKAGE.md`, 3 Service Detail Design Packages.
- **Downstream Handoff**: `WAVE_05` QA.
- **Exit Boundary**: `/hizmetler` üzerinden 3 detay sayfasına geçilebilir; kartlar factual allowlist sınırında kalır.

### WAVE_04: Contact Page & Direct Contact Capabilities

- **Goal**: İletişim sayfasını (`PAGE-007`) yalnızca doğrudan telefon ve e-posta iletişim bağlantıları (`tel:`, `mailto:`) sunacak şekilde inşa etmek.
- **Why Separate**: İletişim sayfası strict negative test kurallarına gebedir; form/submit/harita/WhatsApp ögelerinden arındırılmış doğrudan iletişim kabiliyeti olarak yalıtılmalıdır.
- **Committed Capabilities**:
  - `CAP-013`: Contact page presentation & navigation (`SCP-008`, Status: `IN_SCOPE`, Executable: YES)
  - `CAP-014`: Direct phone & email direct-contact capability (`SCP-010`, Status: `IN_SCOPE`, Executable: YES)
- **Covered Page IDs**: `PAGE-007`
- **In Scope**: `ContactPage.tsx`, `DirectPhoneContactCard.tsx`, `DirectEmailContactCard.tsx`.
- **Out of Scope**: İletişim formu, input alanları, submit düğmesi, form başarı durumu, harita, WhatsApp.
- **Primary Deliverables**: `PAGE-007` İletişim sayfası.
- **Dependencies**: `WAVE_01`.
- **Upstream Consumed**: `WAVE_01` shell, `ILETIM_DESIGN_PACKAGE.md`.
- **Downstream Handoff**: `WAVE_05` QA.
- **Exit Boundary**: `/iletisim` sayfasında form/submit/harita KESİNLİKLE yoktur; tel/mailto bağlantıları çalışır.

### WAVE_05: Cross-Page Responsive Integration & Quality QA

- **Goal**: Tüm 7 sayfa genelinde responsive uyum, klavye/focus erişilebilirliği, cross-page navigasyon tutarlılığı ve production build doğrulamasını gerçekleştirmek.
- **Why Separate**: Tekil sayfa geliştirilmeleri tamamlandıktan sonra sitenin tamamını kapsayan yatay kalite ve responsive kontrolünün bağımsız dalgada yapılması gerekir.
- **Committed Capabilities**:
  - `CAP-015`: Sales-demo presentation quality & cross-page responsive consistency (`SCP-013`, Status: `IN_SCOPE`, Executable: YES)
- **Covered Page IDs**: `PAGE-001`, `PAGE-002`, `PAGE-003`, `PAGE-004`, `PAGE-005`, `PAGE-006`, `PAGE-007`
- **In Scope**: Cross-page responsive testing, accessibility focus styling, `npm run build` verification, bundle inspection.
- **Out of Scope**: Yeni sayfa veya yetenek ekleme.
- **Primary Deliverables**: Doğrulanmış ve derlenmiş production web demosu (`dist/`).
- **Dependencies**: `WAVE_02`, `WAVE_03`, `WAVE_04`.
- **Upstream Consumed**: All previous waves output.
- **Downstream Handoff**: Final publication and completion.
- **Exit Boundary**: `npm run build` hatasız tamamlanır, 7 sayfa mobil ve masaüstünde kusursuz görüntülenir.

## 6. Cross-Wave Invariants

- Form/input/submit/harita/WhatsApp hiçbir dalgada kapsama giremez.
- Source material dışından uydurma şirket bilgisi eklenemez.
- 7 onaylı sayfa aynı sayfadaki anchor section'lara indirgenemez.

## 7. Global Exit / Handoff Rules

- Her dalga tamamlandığında dev sunucu doğrulaması yapılır.
- `WAVE_05` tamamlandığında `npm run build` çalıştırılır ve production bundle hazırlanır.
