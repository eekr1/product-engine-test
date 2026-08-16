# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki tüm kararlar `ID`, `Tarih`, `Konu`, `Karar`, `Gerekçe`, `Etkiler`, `Durum` ve `Source` alanları ile kayıtlıdır.

Durum Vocabulary: `User Approved` | `Engine Resolved` | `Pending Review` | `Superseded`

## 2. Architectural / Technical Decisions

### DEC-001: Frontend Client Stack Resolution
- **Tarih**: 2026-08-17
- **Konu**: İstemci Taraflı Teknoloji Yığını Seçimi
- **Karar**: Vanilla HTML5, Vanilla JavaScript (ES6+ Modules) ve Vanilla CSS3 Custom Properties tercih edilmiştir.
- **Kısa Gerekçe**: Satış demosu (`delivery_profile: Prototype`) için sıfır-build adımı ile hızlı çalıştırma ve satış görüşmelerinde sorunsuz gösterim imkanı sağlar.
- **Etkiler**: Ağır framework veya bundler karmaşıklığı olmadan yüksek performanslı client demo üretilir.
- **Durum**: Engine Resolved
- **Source**: `engine/PACKAGE_RULES.md` & `TECH_CONTEXT.md`

### DEC-002: Local Content Data Boundary Architecture
- **Tarih**: 2026-08-17
- **Konu**: Veri Bağlantı Mimarisi
- **Karar**: `src/config/siteData.js` soyutlama katmanı kullanılarak UI bileşenleri veri erişim adapter'ına bağlanmıştır.
- **Kısa Gerekçe**: Gelecekte gerçek backend veya CMS bağlandığında UI bileşenleri değiştirilmeden adapter seviyesinde entegrasyon imkanı sağlar.
- **Etkiler**: Sunum katmanı ile veri katmanı izole edilir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Section 7)

## 3. Product / Scope Decisions

### DEC-003: Strict FCL Allowlist Scope Filter
- **Tarih**: 2026-08-17
- **Konu**: Firma ve Hizmet Verilerinin Sınırlandırılması
- **Karar**: `SRC-01` kaynak dosyasında yer alan 6 temel fact (`Trakya Teknik Makine`, `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi`, `Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`, `Trakya Bölgesi bağlamı`) kesin allowlist olarak kabul edilmiştir.
- **Kısa Gerekçe**: Müşteri tarafından doğrulanmamış stok garantisi, acil müdahale SLA süresi, periyodik bakım paketleri, adres veya telefon bilgisi uydurulmasını engellemek.
- **Etkiler**: Dürüst ve doğrulanabilir satış demosu üretilir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Section 8)

## 4. Design / UX Decisions

### DEC-004: Anti-Template Industrial Concept & Palette Resolution
- **Tarih**: 2026-08-17
- **Konu**: Görsel Tasarım Yönü ve Renk Paleti
- **Karar**: Generic lacivert kurumsal template reddedilmiş; `#0F141C` (Industrial Charcoal Blue) ana zemin, `#18202C` kart yüzeyleri ve `#F97316` (Amber Precision Accent) vurgu rengi olarak belirlenmiştir.
- **Kısa Gerekçe**: Makine mühendisliği ve teknik servis bağlamına özgün, modern ve güven veren endüstriyel görsel kimlik sağlamak.
- **Etkiler**: Kurumsal web demosu rakiplerinden ayrışır.
- **Durum**: Engine Resolved
- **Source**: `DESIGN_RULES.md` & `engine/PLANNING_PROFILES.md` (`design light`)

## 5. Deprecated / Superseded Decisions

- Yoktur.
