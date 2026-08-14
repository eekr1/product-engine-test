# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Bu belgede dondurulan kararlar `User Approved`, `Engine Resolved`, `Pending Review` ve `Superseded` durum vocabulary'sine tabidir.

- **User Approved**: Karar onaylı girdide (`PROJECT_INPUT.md`) doğrudan ve açıkça yer almaktadır.
- **Engine Resolved**: Karar approved scope değiştirmeden generation aşamasında Engine tarafından çözülmüştür.

## 2. Architectural / Technical Decisions

### DEC-001: Delivery Purpose & Profile
- **Tarih**: 2026-08-15
- **Konu**: Teslimat olgunluğu ve proje niteliği
- **Karar**: Proje bir kurumsal frontend satış demosu (`delivery_profile: Prototype`) olarak yürütülecektir.
- **Kısa Gerekçe**: Potansiyel müşteri görüşmesinde sergilenmek üzere modern frontend arayüzü hedeflenmiştir.
- **Etkiler**: Ağır production/migration belgeleri hariç tutulmuş, agent-ready frontend mimarisi ve dalga planları üretilmiştir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` (Section 2 & 10)

### DEC-002: Technology Stack & Framework Selection
- **Tarih**: 2026-08-15
- **Konu**: Frontend kütüphane ve stil seçimi
- **Karar**: Vanilla HTML5, CSS3 (Design Tokens, Custom Properties) ve ES6+ JavaScript kullanılacaktır.
- **Kısa Gerekçe**: TailwindCSS veya ağır framework'ler kullanıcı tarafından talep edilmediğinden en yüksek esneklik ve hafiflik hedeflenmiştir.
- **Etkiler**: Harici şişkin bağımlılıklar elenmiş, temiz native web standartları dondurulmuştur.
- **Durum**: Engine Resolved
- **Source**: `engine/PACKAGE_RULES.md` & `ai/TECH_CONTEXT.md`

### DEC-003: Integration Boundary & Service Architecture
- **Tarih**: 2026-08-15
- **Konu**: Veri katmanı ve backend entegrasyon sınırı
- **Karar**: Veriler `companyService` / `contentAdapter` katmanı üzerinden yerel mock modül (`companyData.js`) ile beslenecek; sahte backend API uydurulmayacaktır.
- **Kısa Gerekçe**: Integration-ready baseline sağlanırken sahte API/database contract uydurmak yasaktır.
- **Etkiler**: İleride gerçek backend veya CMS geldiğinde UI bileşenleri değişmeden adapter değiştirilebilecektir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` (Section 7) & `engine/PLANNING_PROFILES.md`

## 3. Product / Scope Decisions

### DEC-004: Preservation of Verified Facts
- **Tarih**: 2026-08-15
- **Konu**: Firma verileri ve içerik doğruluğu
- **Karar**: Mevcut SITE123 sitesindeki tüm doğrulanmış veriler (Disan Hidrolik Trakya Bölge Yetkili Servisi, 3 temel hizmet, iletişim verileri) aynen korunacak, uydurma iddia eklenmeyecektir.
- **Kısa Gerekçe**: Müşteri görüşmesinde firmanın gerçek yetkinliğini koruma gereksinimi.
- **Etkiler**: İçerik metinleri FCL (Factual Claim Allowlist) ile sınırlandırılmıştır.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` (Section 1 & 10)

### DEC-005: Strict Feature Scope Boundary
- **Tarih**: 2026-08-15
- **Konu**: Form, harita, WhatsApp ve ek etkileşimlerin kapsam durumu
- **Karar**: Form submit, harita widget'ı, WhatsApp veya modal etkileşimleri bugünkü demo scope'una eklenmeyecek; açık soru / gelecek faz olarak tutulacaktır.
- **Kısa Gerekçe**: Demo etiketinin approved scope dışı yeni interaction authorize etmemesi ilkesi.
- **Etkiler**: İletişim bölümü doğrudan `tel:` ve `mailto:` CTA noktaları ile sınırlandırılmıştır.
- **Durum**: Engine Resolved
- **Source**: `packages/DEMO_FRONTEND_PACKAGE.md` & `engine/GENERATION_PIPELINE.md`

## 4. Design / UX Decisions

### DEC-006: Visual Concept Selection ("Precision Engineering & Heavy-Duty Reliability")
- **Tarih**: 2026-08-15
- **Konu**: Görsel konsept ve renk paleti seçimi
- **Karar**: Koyu grafit/siyah zemin (`#0E1012`), endüstriyel turuncu vurgu (`#E55B13`) ve mühendislik ızgara çizgilerinden oluşan özgün visual concept uygulanacaktır.
- **Kısa Gerekçe**: Jenerik mavi SaaS / kurumsal şablon klişelerinden sıyrılıp projeye özgü ağırbaşlı mühendislik algısı yaratmak.
- **Etkiler**: `design/DESIGN_RULES.md` visual concept ve anti-template kuralları dondurulmuştur.
- **Durum**: Engine Resolved
- **Source**: `engine/PLANNING_PROFILES.md` & `design/DESIGN_RULES.md`

## 5. Deprecated / Superseded Decisions

- Henüz yürürlükten kaldırılan bir karar bulunmamaktadır.
