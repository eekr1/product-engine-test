# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Decisions

## 1. Decision Record Standard

Bu belgede projeye ait kalıcı mimari, ürün, kapsam ve tasarım kararları tutulur. Durum değeri olarak `User Approved`, `Engine Resolved`, `Pending Review` veya `Superseded` kullanılır.

## 2. Architectural / Technical Decisions

### DEC-001: Frontend Stack & Build System Resolution
- **Tarih**: 2026-08-15
- **Konu**: Frontend Teknoloji Yığını Seçimi
- **Karar**: Pure Vanilla HTML5, Vanilla CSS (CSS Custom Properties) ve ES Modules tabanlı hafif bir mimari seçildi. Ağır JS/CSS kütüphaneleri (Tailwind, React vb.) kullanılmayacaktır.
- **Kısa Gerekçe**: Demo satış görüşmelerinde 0 bağımlılıkla çevrimdışı (offline-capable) çalışmalı, hafif ve yüksek performanslı olmalıdır.
- **Etkiler**: Bağımlılık yükü sıfırlanır, yükleme süresi hızlanır.
- **Durum**: Engine Resolved
- **Source**: `engine/PACKAGE_RULES.md` + `ai/TECH_CONTEXT.md`

### DEC-002: Clean Data Access Boundary Abstraction
- **Tarih**: 2026-08-15
- **Konu**: UI Veri Okuma Yöntemi
- **Karar**: UI bileşenleri veriyi doğrudan static objelere erişerek değil, `companyService.js` data access katmanı üzerinden asenkron `Promise` ile okuyacaktır.
- **Kısa Gerekçe**: Presentation katmanına mock veri hardcode edilmesini engellemek ve gelecekte gerçek backend/API eklendiğinde UI'ı değiştirmeden adapter değişimini desteklemek.
- **Etkiler**: Temiz mimari yalıtımı sağlanır.
- **Durum**: Engine Resolved
- **Source**: Approved `PROJECT_INPUT` Section 10 & 14 + `ai/TECH_CONTEXT.md`

## 3. Product / Scope Decisions

### DEC-003: Prototype Delivery Profile & Scope Boundary
- **Tarih**: 2026-08-15
- **Konu**: Teslimat Amacı ve Kapsam Sınırı
- **Karar**: Proje proaktif kurumsal satış demosu (`delivery_profile: Prototype`) olarak yürütülecek; backend, veritabanı, auth, online ödeme, canlı harita, WhatsApp widget'ı ve form submit backend'i kapsam dışı tutulacaktır.
- **Kısa Gerekçe**: Approved input snapshot kapsam sınırlarına tam uyum sağlamak.
- **Etkiler**: Gereksiz backend ve operasyonel karmaşıklık engellenir.
- **Durum**: User Approved
- **Source**: Approved `PROJECT_INPUT` Section 1, 3 & 6

### DEC-004: Strict Factual Allowlist Enforcement
- **Tarih**: 2026-08-15
- **Konu**: Firma Bilgileri ve Hizmet İsimleri Doğruluğu
- **Karar**: Firma unvanı "Trakya Teknik Makine", yetkili servis rozeti "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi", hizmetler ise strictly 3 approved hizmetten (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) oluşacaktır. Hizmet isimlerine `stok`, `orijinal parça`, `mobil filo`, `SLA` vb. qualifier'lar eklenemez.
- **Kısa Gerekçe**: Doğrulanmamış kaynak dışı iddiaların metinlere sızmasını engellemek.
- **Etkiler**: Factual claim dürüstlüğü ve source truth korunur.
- **Durum**: User Approved
- **Source**: Approved `PROJECT_INPUT` Section 9 & 10 + `SOURCE_REGISTER.md`

## 4. Design / UX Decisions

### DEC-005: "Precision Heavy Machinery Service" Visual Concept & Palette
- **Tarih**: 2026-08-15
- **Konu**: Görsel Kimlik ve Renk Paleti
- **Karar**: "Hassas Endüstriyel Teknik Mimarisi" konsepti seçildi. Renkler Steel Blue (`#1E2D42`), Industrial Amber (`#F59E0B`), Light Surface (`#F8FAFC`) ve Dark Slate (`#0F172A`) olarak belirlendi.
- **Kısa Gerekçe**: Sektördeki sıradan lacivert hero klişesinden ayrışarak teknik mühendislik ve ağır sanayi uzmanlık güveni sunmak.
- **Etkiler**: Özgün ve premium kurumsal görsel dil elde edilir.
- **Durum**: Engine Resolved
- **Source**: Approved `PROJECT_INPUT` Section 12 + `design/DESIGN_RULES.md`

### DEC-006: Mobile Sticky Action Bar
- **Tarih**: 2026-08-15
- **Konu**: Mobil Dönüşüm Arayüzü
- **Karar**: Mobil cihazlarda ekranın altında sabitlenen ve başparmakla kolay erişilen `Ara` (`tel:`) ve `E-posta` (`mailto:`) butonları eklenecektir.
- **Kısa Gerekçe**: Satış demosu sunumunda mobil cihazlarda anında iletişim başlatabilme kolaylığı sağlamak.
- **Etkiler**: Mobil dönüşüm ve kullanılabilirlik artar.
- **Durum**: Engine Resolved
- **Source**: `design/DESIGN_RULES.md` + `waves/plans/WAVE_03.md`

## 5. Deprecated / Superseded Decisions

- Yürürlükten kaldırılmış karar bulunmamaktadır.
