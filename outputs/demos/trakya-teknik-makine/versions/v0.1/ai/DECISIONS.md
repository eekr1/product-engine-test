# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki kararlar Product Engine `DECISIONS_TEMPLATE` standardına göre kayıt altına alınmıştır. Karar durumları `User Approved` (onaylı girdi metninde açıkça yer alan) veya `Engine Resolved` (onaylı kapsam içinde kalarak Engine tarafından teknik/görsel sentez olarak çözülen) vocabulary'sini kullanır.

## 2. Architectural / Technical Decisions

### DEC-001: Frontend Stack & Continuation Readiness Selection
- **Tarih**: 2026-08-17
- **Konu**: Frontend framework ve paket bağımlılık yığını seçimi.
- **Karar**: Vite + React 18 + Vanilla CSS (CSS Modules & Custom Properties) kullanılması.
- **Kısa Gerekçe**: Approved input Section 7'deki continuation-ready stack kuralı (`continuation_expected = YES`) uyarınca demo kabul edildiğinde aynı codebase üzerinde yeniden yazım olmadan büyümeyi sağlamak.
- **Etkiler**: Paket bağımlılıkları `package.json` ile yönetilir; standart `npm run dev` ve `npm run build` workflow'u sağlanır.
- **Durum**: Engine Resolved
- **Source**: `engine/PLANNING_PROFILES.md` Section 6A (Continuation-Ready Stack Guard) & `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` Section 7

### DEC-002: Service / Presentation Data Boundary Architecture
- **Tarih**: 2026-08-17
- **Konu**: İçerik ve veri erişim katmanının izolasyonu.
- **Karar**: Presentation bileşenlerinin veriyi doğrudan JSX'e hardcode etmeyip `src/services/presentationService.js` adaptörü üzerinden çekmesi.
- **Kısa Gerekçe**: İleride gerçek backend veya CMS entegrasyonu sağlandığında UI bileşenlerini yeniden yazmadan veri adaptörünü değiştirebilme garantisi.
- **Etkiler**: Data access presentation component'lerinden izole edilir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` Section 5 & 7

## 3. Product / Scope Decisions

### DEC-003: Delivery Profile & Planning Profiles
- **Tarih**: 2026-08-17
- **Konu**: Proje teslim olgunluğu ve planlama profilleri.
- **Karar**: `delivery_profile: Prototype`, `implementation_planning: standard`, `design_planning: light`.
- **Kısa Gerekçe**: Satış görüşmelerinde gösterilecek tamamlanmış visual demo hedefi ve agent-ready planlama ihtiyacı.
- **Etkiler**: 11 canonical belge + 4 dynamic wave plan instance'ı üretilmiştir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` Section 2

### DEC-004: Factual Allowlist Strict Scope Freeze
- **Tarih**: 2026-08-17
- **Konu**: Firma iddiaları ve factual metin sınırları.
- **Karar**: Sadece `TRAKYA_TEKNIK_MAKINE_PROJECT.md` dosyasındaki 6 doğrulanmış fact kullanılacak (Firma adı, Yetkili servis statüsü, 3 hizmet adı, Trakya bölgesi bağlamı).
- **Kısa Gerekçe**: Source support olmadan stok, orijinal parça, SLA, mobil filo, acil müdahale, periyodik bakım veya revizyon iddiaları uydurulamaz.
- **Etkiler**: Metinlerde ve kartlarda uydurma qualifier yer almaz; eksik firma verileri Open Question olarak tutulur.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` Section 8

## 4. Design / UX Decisions

### DEC-005: Industrial Precision Palette & Visual Direction
- **Tarih**: 2026-08-17
- **Konu**: Görsel dil, renk paleti ve tipografi seçimi.
- **Karar**: Koyu Antrasit (`#1E2530`), Çelik Slate (`#3A475A`), Hassas Amber (`#D97706`) aksan rengi ve modern geometrik tipografi (Outfit / Inter) kullanımı. "Lacivert hero + 3 kart" klişesinden uzak durulması.
- **Kısa Gerekçe**: Endüstriyel ve teknik servis kimliğini yansıtan, güven veren ve generic hazır tema hissi vermeyen özgün visual direction.
- **Etkiler**: Renk token'ları `src/styles/tokens.css` içinde tanımlanır.
- **Durum**: Engine Resolved
- **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` Section 8 & `working-output/design/DESIGN_RULES.md`

## 5. Deprecated / Superseded Decisions

- Herhangi bir yürürlükten kalkan karar bulunmamaktadır.
