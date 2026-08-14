# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Tüm kararlar denetlenebilir provenance ve standart status vocabulary (`User Approved` | `Engine Resolved` | `Pending Review` | `Superseded`) ile tutulmaktadır.

## 2. Architectural / Technical Decisions

### DEC-001: Local Data Adapter Architecture
- **ID**: `DEC-001`
- **Tarih**: 2026-08-15
- **Konu**: Data/Service Boundary Tasarımı
- **Karar**: UI presentation bileşenlerinin veriyi `MachineService` (`src/services/machineService.js`) interface'i üzerinden okuması, verinin `companyData.json` statik dosyasından sağlanması.
- **Kısa Gerekçe**: Gerçek backend henüz kapsamda değildir. Bu boundary presentation katmanını temiz tutar ve gelecekte backend eklendiğinde UI refactor gereksinimini önler.
- **Etkiler**: UI kodları backend/API detaylarından bağımsız kalır.
- **Durum**: `Engine Resolved`
- **Source**: `engine/PLANNING_PROFILES.md` Integration Readiness Baseline & `working-output/ai/TECH_CONTEXT.md`

### DEC-002: Baseline Technology Stack
- **ID**: `DEC-002`
- **Tarih**: 2026-08-15
- **Konu**: Frontend Teknoloji Tercihi
- **Karar**: Vanilla HTML5, CSS3 (Design Token CSS Değişkenleri) ve ES6 JavaScript. Harici framework (React/Vue/Bootstrap/Tailwind) kullanılmaması.
- **Kısa Gerekçe**: Hızlı yükleme, sıfır ağır harici bağımlılık ve yüksek performans.
- **Etkiler**: Tarayıcıda doğrudan çalışabilir, hafif ve sürdürülebilir kod tabanı.
- **Durum**: `Engine Resolved`
- **Source**: `engine/PACKAGE_RULES.md` & `working-output/ai/TECH_CONTEXT.md`

## 3. Product / Scope Decisions

### DEC-003: Prototype Delivery Profile
- **ID**: `DEC-003`
- **Tarih**: 2026-08-15
- **Konu**: Teslim Amacı ve Olgunluk Düzeyi
- **Karar**: Proje satış görüşmesinde müşteri iknası amacıyla `delivery_profile: Prototype` olarak ele alınacaktır.
- **Kısa Gerekçe**: İlk hedef müşteri satış görüşmesinde güven kazanmak ve mevcut sitenin seviyesini yükseltebileceğimizi göstermektir.
- **Etkiler**: Üretim odağı frontend gösterimi üzerindedir.
- **Durum**: `User Approved`
- **Source**: Approved `PROJECT_INPUT.md` Section 2

### DEC-004: Exclusion of invented interactive forms & widgets
- **ID**: `DEC-004`
- **Tarih**: 2026-08-15
- **Konu**: Kapsam Dışı Etkileşimler
- **Karar**: Sahte form modalları, canlı harita widget'ları ve WhatsApp botları kapsam dışında tutulacaktır. Doğrudan `tel:` ve `mailto:` CTA'ları kullanılacaktır.
- **Kısa Gerekçe**: Backend olmadan sahte form veya modal sunmak müşteri güvenini zedeler ve sahte capability uydurma yasağını ihlal eder.
- **Etkiler**: İletişim eylemleri güvenli ve doğrudan yerel uygulamalara yönlendirir.
- **Durum**: `User Approved`
- **Source**: Approved `PROJECT_INPUT.md` Section 5

## 4. Design / UX Decisions

### DEC-005: Asymmetric Industrial Visual Concept & Palette
- **ID**: `DEC-005`
- **Tarih**: 2026-08-15
- **Konu**: Görsel Kimlik ve Renk Paleti
- **Karar**: Koyu antrasit zemin (`#0F141C`), grafit kartlar (`#1E2530`), amber/turuncu accent (`#FF6B00`) ve Inter tipografisi.
- **Kısa Gerekçe**: Klişe düz lacivert sanayi şablonu yerine ağır sanayi mühendisliği ve Disan Hidrolik yetkili servis güvencesini yansıtan özgün visual direction.
- **Etkiler**: Kurumsal, teknik yetkin ve modern görsel algı.
- **Durum**: `Engine Resolved`
- **Source**: `working-output/design/DESIGN_RULES.md`

## 5. Deprecated / Superseded Decisions

- *Henüz yürürlükten kaldırılmış karar bulunmamaktadır.*
