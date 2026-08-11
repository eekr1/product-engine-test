# Trakya Teknik Makine — Decisions

## 1. Decision Record Standard

- **Format**: ID | Tarih | Konu | Karar | Gerekçe | Durum | Source Provenance
- **Durum Vocabulary**: User Approved | Engine Resolved | Pending Review | Superseded

## 2. Architectural / Technical Decisions

- **ID**: DEC-001
  - **Tarih**: 2026-08-12
  - **Konu**: Base Package ve Extension Seçimi
  - **Karar**: Base package olarak `demo-frontend` ve extension olarak `existing-project` seçilmiştir.
  - **Kısa Gerekçe**: Projenin ilk hedefi mevcut SITE123 sitesini yenileyen satış demosu üretmektir.
  - **Durum**: User Approved
  - **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`

- **ID**: DEC-002
  - **Tarih**: 2026-08-12
  - **Konu**: Data Boundary & Service Adapter Yaklaşımı
  - **Karar**: UI bileşenleri mock verileri doğrudan JSX/HTML içine gömmeyecek; decoupled `service.js` adapter'ı üzerinden okuyacaktır.
  - **Kısa Gerekçe**: Gerçek backend eklendiğinde UI refactor edilmeden entegrasyon sağlanması (integration readiness).
  - **Durum**: Engine Resolved
  - **Source**: `engine/PLANNING_PROFILES.md` & `TECH_CONTEXT.md`

## 3. Product / Scope Decisions

- **ID**: DEC-003
  - **Tarih**: 2026-08-12
  - **Konu**: Planning Profile Bileşimi
  - **Karar**: `delivery_profile: Prototype`, `implementation_planning: standard`, `design_planning: light` profilleri dondurulmuştur.
  - **Kısa Gerekçe**: Satış demosu için esnek teslim olgunluğu sağlarken agent-ready mimari ve net tasarım kurallarını korur.
  - **Durum**: User Approved
  - **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`

- **ID**: DEC-004
  - **Tarih**: 2026-08-12
  - **Konu**: Doğrulanmış Firma İçeriği ve İddia Sınırı
  - **Karar**: Sitede yalnızca trakyateknikmakine.com sitesinde açıkça bulunan bilgiler (Disan Hidrolik Yetkili Servisliği, 3 Hizmet alanı) kullanılacak; doğrulanmamış firma iddiaları uydurulmayacaktır.
  - **Kısa Gerekçe**: Doğruluk ve kurumsal dürüstlük ilkesi.
  - **Durum**: User Approved
  - **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`

## 4. Design / UX Decisions

- **ID**: DEC-005
  - **Tarih**: 2026-08-12
  - **Konu**: Visual Concept & Anti-Template Kararı
  - **Karar**: Sektör klişesi düz lacivert hero yerine HSL slate/navy/amber tonlarında endüstriyel mühendislik konsepti uygulanacak; Disan Hidrolik yetkili servisliği için özel onay mühür rozeti tasarlanacaktır.
  - **Kısa Gerekçe**: Satış görüşmesinde akılda kalıcı, modern ve projeye özgü görsel kimlik oluşturma.
  - **Durum**: Engine Resolved
  - **Source**: `design/DESIGN_RULES.md`

## 5. Deprecated / Superseded Decisions

*(Henüz yürürlükten kaldırılan bir karar bulunmamaktadır.)*
