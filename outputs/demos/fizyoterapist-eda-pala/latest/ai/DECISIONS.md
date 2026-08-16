# Fizyoterapist Eda Pala Web Sitesi Demo — Decisions

## 1. Decision Record Standard

Bu belgede projenin tüm dondurulmuş kararları `User Approved`, `Engine Resolved`, `Pending Review` veya `Superseded` statüleriyle kaydedilir. Karar gerekçeleri ve exact kaynak (provenance) şeffaf olarak tutulur.

## 2. Architectural / Technical Decisions

- **DEC-001** | **Tarih**: 2026-08-17
  - **Konu**: Frontend Preview Framework Seçimi
  - **Karar**: Native HTML5, CSS3, ES6+ Vanilla JavaScript static architecture.
  - **Gerekçe**: Satış demosu için en hızlı yüklenen, harici bağımlılıksız ve kolay taşınabilir ortamı sağlar.
  - **Etkiler**: Ağır JS framework (React/Vue) bağımlılığı ve build karmaşıklığı kaldırılır.
  - **Durum**: Engine Resolved
  - **Source**: `packages/DEMO_FRONTEND_PACKAGE.md` & `TECH_CONTEXT.md`

- **DEC-002** | **Tarih**: 2026-08-17
  - **Konu**: Data Boundary & Integration Readiness
  - **Karar**: Local Static Configuration Data Adapter (`siteConfig.js`).
  - **Gerekçe**: UI bileşenlerinin veriyi hardcode etmeden statik konfigürasyondan çekmesi ve ileride gerçek API geldiğinde kolay takılması.
  - **Etkiler**: UI bileşenleri veri katmanından soyutlanır.
  - **Durum**: Engine Resolved
  - **Source**: `inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md` Section 7

## 3. Product / Scope Decisions

- **DEC-003** | **Tarih**: 2026-08-17
  - **Konu**: Strict Source-Closed Factual Boundary
  - **Karar**: Web sitesinde yalnız onaylı 4 factual bilgi (Eda Pala, Fizyoterapist, Tekirdağ, Instagram URL) yer alacaktır.
  - **Gerekçe**: Sağlık alanında doğrulanmamış tedavi, klinik, adres veya telefon iddialarının uydurulmasını önlemek.
  - **Etkiler**: Kapsam dışı tüm sağlık ve iletişim iddiaları engellenir.
  - **Durum**: User Approved
  - **Source**: `inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md` Section 1, 10

- **DEC-004** | **Tarih**: 2026-08-17
  - **Konu**: Outbound Social Media Channel
  - **Karar**: Sosyal medya etkileşimi yalnız onaylı Instagram URL'sine outbound CTA ile sağlanacaktır.
  - **Gerekçe**: Kullanıcı tarafından sağlanan tek onaylı iletişim kanalı olması.
  - **Etkiler**: Form, harita veya WhatsApp entegrasyonu yerine güvenli dış bağlantı kurulur.
  - **Durum**: User Approved
  - **Source**: `inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md` Section 4

## 4. Design / UX Decisions

- **DEC-005** | **Tarih**: 2026-08-17
  - **Konu**: Visual Concept & Palette Synthesis
  - **Karar**: *Serene Human Professionalism* — Warm off-white (`#FAF9F5`), deep sage green (`#2D5545`), dark charcoal text (`#16231E`).
  - **Gerekçe**: Geleneksel klinik turkuazı yerine modern, huzurlu ve insani bir kişisel marka dili oluşturmak.
  - **Etkiler**: Sektör klişeleri engellenir, özgün tipografik hiyerarşi sağlanır.
  - **Durum**: Engine Resolved
  - **Source**: `design/DESIGN_RULES.md`

## 5. Deprecated / Superseded Decisions

- Yoktur.
