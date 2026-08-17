# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: React 18+ (Component-oriented frontend framework)
- **Build Tool / Bundler**: Vite (Fast HMR dev server and optimized Rollup production build)
- **Language**: TypeScript (Type safety, clean interface declarations, reliable refactoring)
- **Styling**: Vanilla CSS with CSS Custom Properties (Design Tokens, HSL colors, modern CSS Grid/Flexbox, dynamic responsive layouts)
- **Routing**: Component-based Client Router supporting direct browser navigation and 7 distinct routable surfaces without full page reload or anchor collapse.
- **Package Manager**: npm (`package.json` managed baseline)

## 2. Stack Selection & Continuation Gate

```text
Continuation Expected: YES
Continuation Evidence: inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md (Section 8)
Approved Zero-Build Constraint: NONE
Selected Frontend Baseline: Vite + React + TypeScript
Package Manifest: package.json
Dev Command: npm run dev
Build Command: npm run build
Preview Command: npm run preview
Same-Codebase Continuation: PASS
Routing / Page Expansion Path: Client Router matching 7 approved distinct routes
```

### Rationale

Müşteri kabulü sonrasında aynı codebase üzerinde backend, CMS ve ek entegrasyonlar yapılabileceği için (`Continuation Expected: YES`), proje standart modüler frontend mimarisi ve `package.json` bağımlılık yönetimi gerektirir. Approved zero-build constraint bulunmadığı için Vite + React + TS baseline seçilmiştir. Bu yapı gelecekte framework değiştirme veya sıfırdan yazım ihtiyacını ortadan kaldırır.

## 3. Routing / Page Expansion Path

Approved Site Architecture 7 ayrı distinct sayfa içermektedir (`PAGE-001` .. `PAGE-007`).

1. **Route Declarations**:
   - `PAGE-001`: `/` (Ana Sayfa)
   - `PAGE-002`: `/kurumsal` (Kurumsal)
   - `PAGE-003`: `/hizmetler` (Hizmetler Overview)
   - `PAGE-004`: `/hizmetler/yedek-parca-temini` (Yedek Parça Temini Detay)
   - `PAGE-005`: `/hizmetler/yerinde-teknik-destek` (Yerinde Teknik Destek Detay)
   - `PAGE-006`: `/hizmetler/makine-bakim-onarim` (Makine Bakım ve Onarım Detay)
   - `PAGE-007`: `/iletisim` (İletişim)

2. **Distinct Surface Guarantee**: Routing mekanizması her onaylı sayfayı bağımsız bir arayüz bileşeni (view component) olarak yükler. Hizmet detay sayfaları overview sayfasının akordeon/kart sekmesi olarak değil, kendi URL identity'sine sahip ayrık sayfalar olarak çalışır. Same-document section anchor collapse yapılmaz.

3. **Page Expansion**: Gelecekte yeni bir onaylı sayfa eklendiğinde mimari değiştirilmeden router konfigürasyonuna yeni route kaydı ve ilgili view component eklenerek genişletilir.

4. **Shared Shell**: Header, Footer ve Navigation Drawer `GlobalShell` bileşeni altında izole edilir ve tüm sayfalar tarafından ortak kullanılır.

## 4. Mimari Kararlar ve Yaklaşım

- **Presentation & Logic Isolation**: UI presentation bileşenleri doğrudan ham veriye bağımlı değildir; veriyi `services/dataAdapter` katmanı üzerinden alır.
- **Design Token Integration**: Tasarım sistemindeki renk, tipografi, spacing ve radius değerleri `:root` CSS değişkenleri olarak tanımlanır ve bileşen stillerinde kullanılır.
- **Industrial Precision Visual Strategy**: Koyu antrasit arka planlar (`#0F141C`, `#161D2A`), amber/turuncu accent vurguları (`#FF9500`, `#E07A00`) ve kontrollü teknik grid hatları CSS değişkenleri ile modüler yönetilir.

## 5. Sistem Bileşenleri ve Boundary'ler

```text
src/
├── assets/             (Statik grafikler ve ikonlar)
├── components/
│   ├── common/         (Button, Card, Badge, SectionHeader vb.)
│   ├── layout/         (Header, Footer, Navigation, PageShell)
│   └── services/       (ServiceCard, ServiceDetailLayout)
├── pages/
│   ├── HomePage.tsx                     (PAGE-001)
│   ├── CorporatePage.tsx                (PAGE-002)
│   ├── ServicesPage.tsx                 (PAGE-003)
│   ├── ServiceDetailSparePartsPage.tsx  (PAGE-004)
│   ├── ServiceDetailOnsiteSupportPage.tsx (PAGE-005)
│   ├── ServiceDetailMaintenancePage.tsx (PAGE-006)
│   └── ContactPage.tsx                  (PAGE-007)
├── services/
│   ├── dataAdapter.ts  (Interface boundary between UI and mock data)
│   └── mockData.ts     (Source-backed local content store)
├── styles/
│   ├── tokens.css      (CSS variables for colors, typography, spacing)
│   └── global.css      (Global reset and layout utilities)
└── router/
    └── index.tsx       (Route mappings and navigation logic)
```

## 6. Data / Service / Integration Readiness

```text
[ UI Components ]
       │
       ▼ (Interface calls: getCompanyInfo(), getServices(), getServiceById())
[ services/dataAdapter.ts ]
       │
       ▼ (Current Adapter)              ▼ (Future Adapter)
[ services/mockData.ts ]       [ REST API / CMS Client ]
```

- **Bugünkü Durum**: Veriler local TypeScript mock veri deposundan (`mockData.ts`) adapter kanalıyla UI bileşenlerine beslenir.
- **Gelecekteki Durum**: Gerçek backend/CMS eklendiğinde `dataAdapter.ts` içerisindeki implementation API client ile değiştirilir. UI bileşenlerinde kod değişikliği yapılmaz.

## 7. Teknik Kısıtlamalar ve Sınırlar

- Onaylanmamış backend stack, API endpoint, veritabanı şeması veya auth mekanizması uydurulamaz.
- Direct-contact telefon/e-posta için uydurma veri üretilmez; `mockData.ts` içerisindeki değerler unknown/placeholder olarak yönetilir.
- Prototype delivery context site architecture sayfa sayısını veya kod yapısını basitleştirme sebebi olamaz.
