# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki kararlar `DEC-XXX` kimlikleri, kısa gerekçeleri, etkileri, kaynakları ve canonical durum etiketleri (`User Approved`, `Engine Resolved`, `Pending Review`, `Superseded`) ile tutulur.

## 2. Architectural / Technical Decisions

- **DEC-001**
  - **Tarih**: 2026-08-15
  - **Konu**: Frontend Baseline Stack & Tooling Choice
  - **Karar**: Vanilla HTML5, CSS3 Custom Properties ve ES6+ Vanilla JavaScript baseline kullanılması.
  - **Kısa Gerekçe**: Ekstra paket yöneticisi veya ağır derleme bağımlılığı olmadan standalone kolay çalıştırılabilir ve hızlı sunulabilir satış demosu deneyimi sağlar.
  - **Etkiler**: Bağımsız, hafif ve doğrudan taranabilir kod yapısı.
  - **Durum**: Engine Resolved
  - **Source**: `engine/PACKAGE_RULES.md` + `packages/DEMO_FRONTEND_PACKAGE.md` resolution.

- **DEC-002**
  - **Tarih**: 2026-08-15
  - **Konu**: Data Access Service Boundary Architecture
  - **Karar**: UI presentation bileşenlerinin veritabanı veya API olmaksızın `src/services/dataService.js` adapter arabirimi üzerinden mock veriye asenkron erişmesi.
  - **Kısa Gerekçe**: İleride gerçek backend entegrasyonu onaylandığında UI katmanını değiştirmeden veri kaynağının değiştirilmesini sağlar.
  - **Etkiler**: Temiz veri/servis katmanı ayrımı, sıfır inline mock hardcoding.
  - **Durum**: Engine Resolved
  - **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md#Section 7` + `engine/PLANNING_PROFILES.md#Section 6`.

## 3. Product / Scope Decisions

- **DEC-003**
  - **Tarih**: 2026-08-15
  - **Konu**: Delivery Profile & Project Scope Frozen Gate
  - **Karar**: Proje teslim olgunluğunun `Prototype` (satış demosu), implementation planning'in `standard`, design planning'in `light` olarak kesinleşmesi.
  - **Kısa Gerekçe**: Kullanıcı onayıyla proaktif satış demosu kapsamı dondurulmuştur.
  - **Etkiler**: Foundation / Prototype kalite standartları ve FCL allowlist dondurulmuştur.
  - **Durum**: User Approved
  - **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md#Section 2, 14`.

- **DEC-004**
  - **Tarih**: 2026-08-15
  - **Konu**: Unapproved Capabilities Exclusion Gate
  - **Karar**: Canlı harita, WhatsApp, form backend submit, e-ticaret ve backend auth kapsam dışı bırakılmıştır.
  - **Kısa Gerekçe**: Proje satış demosu frontend kapsamındadır; uydurma backend/entegrasyon eklenmeyecektir.
  - **Etkiler**: Yan etki ve kapsamsız bileşen üretimi engellenmiştir.
  - **Durum**: User Approved
  - **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md#Section 5`.

## 4. Design / UX Decisions

- **DEC-005**
  - **Tarih**: 2026-08-15
  - **Konu**: Visual Concept & Palette Synthesis
  - **Karar**: "Endüstriyel Hassasiyet ve Ağır Makine Güveni" konsepti; Slate Navy (`#0F172A`), Gunmetal (`#1E293B`) zeminler ve Ember Orange (`#F97316`) vurgu rengi kullanımı.
  - **Kısa Gerekçe**: Sektörün jenerik lacivert klişesinden kaçınarak modern, yüksek kontrastlı ve teknik güven veren bir görünüm sunar.
  - **Etkiler**: Özgün visual direction ve `DESIGN_RULES.md` token'ları dondurulmuştur.
  - **Durum**: Engine Resolved
  - **Source**: `engine/PLANNING_PROFILES.md#Section 4` + `design/DESIGN_RULES.md`.

## 5. Deprecated / Superseded Decisions

*Henüz yürürlükten kaldırılmış veya değiştirilmiş bir karar bulunmamaktadır.*
