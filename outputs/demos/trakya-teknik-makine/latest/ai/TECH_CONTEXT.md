# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Build Tool / Bundler**: Vite (modern, hızlı HMR ve tekrarlanabilir dev/build iş akışı)
- **UI Framework**: React 18+ (bileşen odaklı, modüler, genişletilebilir)
- **Language**: TypeScript (tip güvenliği, refactoring desteği, temiz arayüzler)
- **Routing**: React Router DOM (7 onaylı sayfa için client-side routable navigation)
- **Styling**: Vanilla CSS / Modern CSS Variables (tasarım sistemi token'ları ile tam kontrol)
- **Package Manager**: npm

## 2. Stack Selection & Continuation Gate

```text
Continuation Expected: YES
Continuation Evidence: inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md Section 11 ("Continuation expected: YES")
Approved Zero-Build Constraint: NONE
Selected Frontend Baseline: Vite + React + TypeScript + React Router DOM
Package Manifest: package.json
Dev Command: npm run dev
Build Command: npm run build
Preview Command: npm run preview
Same-Codebase Continuation: PASS
Routing / Page Expansion Path: React Router DOM client-side routing with clean component route definitions for 7 pages
```

## 3. Routing / Page Expansion Path

- **Rotalama Mekanizması**: React Router DOM `BrowserRouter` ve `Routes` / `Route` yapısı.
- **Onaylı Rotalar Registry**:
  - `/` -> `HomePage` (`PAGE-001`)
  - `/kurumsal` -> `CorporatePage` (`PAGE-002`)
  - `/hizmetler` -> `ServicesPage` (`PAGE-003`)
  - `/hizmetler/yedek-parca-temini` -> `YedekParcaDetailPage` (`PAGE-004`)
  - `/hizmetler/yerinde-teknik-destek` -> `YerindeDestekDetailPage` (`PAGE-005`)
  - `/hizmetler/makine-bakim-onarim` -> `MakineBakimDetailPage` (`PAGE-006`)
  - `/iletisim` -> `ContactPage` (`PAGE-007`)
- **Sayfa Eklenebilirlik / Genişleme**: Yeni onaylı bir sayfa eklendiğinde `src/pages/` altına yeni sayfa bileşeni yazılır ve router konfigürasyonuna yeni `Route` olarak eklenir; mimari yeniden yazım gerektirmez.
- **Same-Page Anchor Collapse Yasağı**: Rotalar anchor (`#section`) gezintisine indirgenemez. Tarayıcı adresi (URL) her sayfada güncellenir ve direct URL erişimini destekler.

## 4. Mimari Kararlar ve Yaklaşım

- **Modüler Klasör Yapısı**:
  ```text
  src/
  ├── assets/          # Görseller ve ikonlar
  ├── components/      # Ortak UI bileşenleri (Header, Footer, Button, Card, Badge)
  ├── data/            # Local mock veriler ve fixture'lar
  ├── pages/           # Sayfa bileşenleri (7 onaylı sayfa)
  ├── services/        # Service / Data-Access Adapter katmanı
  ├── styles/          # Design tokens ve global CSS
  ├── App.tsx          # Ana uygulama ve route tanımları
  └── main.tsx         # Uygulama giriş noktası
  ```
- **Separation of Concerns**: Sunum katmanı (components/pages), veri katmanı (services/data) ve tasarım katmanı (styles) birbirinden net biçimde ayrılmıştır.

## 5. Sistem Bileşenleri ve Boundary'ler

- **Global Shell**: `Header` (logo, navigasyon menüsü, mobil drawer) ve `Footer` (kurumsal özet, hızlı linkler, tel/email direct contact) tüm sayfalarda ortak kabuk olarak çalışır.
- **Service / Data Boundary**: UI bileşenleri mock verileri doğrudan import etmek yerine `services/companyService.ts` ve `services/servicesService.ts` soyutlama katmanı üzerinden çağırır.

## 6. Data / Service / Integration Readiness

```text
UI / Presentation Components (HomePage, ServicesPage, ContactPage vb.)
      ↓
Service / Data Access Boundary (src/services/*)
      ↓
Mock / Local Adapter (src/data/mockData.ts today)
      ↓ replaceable by
Real REST/GraphQL API Adapter (future, when approved)
```

- **Bugünkü Durum**: Veriler local TypeScript mock fixture'larından beslenir.
- **Geleceğe Hazırlık**: İleride backend API veya CMS entegrasyonu sağlandığında UI bileşenleri değiştirilmeden yalnız `services/` altındaki adapter implementation'ı güncellenecektir.

## 7. Teknik Kısıtlamalar ve Sınırlar

- Backend veya veritabanı kurulumu yapılmayacaktır.
- Sahte REST/GraphQL API endpoint'leri veya fake form submission backend'i yazılmayacaktır.
- Third-party harita kütüphanesi veya WhatsApp widget kütüphanesi eklenmeyecektir.
- Zero-build veya script-tag CDN yaklaşımı kullanılmayacak; package-managed Vite projesi olarak yürütülecektir.
