# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki tüm kararlar `ID`, `Tarih`, `Konu`, `Karar`, `Gerekçe`, `Etkiler`, `Durum` ve `Source` alanlarıyla kaydedilir.

Provenance Vocabulary:
- **User Approved**: Kullanıcının approved input belgesi üzerinden doğrudan ve açıkça onayladığı kararlar.
- **Engine Resolved**: Kullanıcının açık onayı doğrultusunda, detayları Engine üretimi sırasında dondurulan kararlar.
- **Pending Review**: Kullanıcı incelemesine açık kalan kararlar.
- **Superseded**: Yürürlükten kaldırılmış kararlar.

## 2. Architectural / Technical Decisions

### DEC-001: Frontend Stack Seçimi
- **Tarih**: 2026-08-15
- **Konu**: Frontend Teknoloji Yığını
- **Karar**: Vanilla HTML5, CSS3 ve ES Module tabanlı JavaScript tercih edilmiştir.
- **Gerekçe**: Satış demosu için karmaşık derleme adımları veya ağır paket bağımlılıkları olmaksızın hızlı, güvenilir ve yüksek performanslı sunum sağlamak.
- **Etkiler**: Framework bağımlılığı sıfırlanmış, satış görüşmesinde anında çalıştırma imkanı sağlanmıştır.
- **Durum**: Engine Resolved
- **Source**: Canonical `DEMO_FRONTEND_PACKAGE` & `TECH_CONTEXT.md`

### DEC-002: Service / Data Access Boundary Mimarisi
- **Tarih**: 2026-08-15
- **Konu**: Veri İzolasyonu ve Adapter Deseni
- **Karar**: Veriler UI bileşenlerinde saklanmayacak; `companyService.js` local static adapter interface'i üzerinden çekilecektir.
- **Gerekçe**: İleride gerçek backend veya CMS entegrasyonu talep edilirse presentation component'lerini değiştirmeden adaptasyonu desteklemek.
- **Etkiler**: Clean architecture ve integration-readiness sağlanmıştır.
- **Durum**: Engine Resolved
- **Source**: Approved Intake Section 7 & `TECH_CONTEXT.md`

### DEC-003: Backend / API Scope Dışı Bırakılması
- **Tarih**: 2026-08-15
- **Konu**: Backend ve Veritabanı Uygulaması
- **Karar**: Gerçek backend, veritabanı veya API route'ları uygulanmayacak, sahte endpoint uydurulmayacaktır.
- **Gerekçe**: Backend approved scope dışındadır; sahte backend üretmek Engine kurallarına aykırıdır.
- **Etkiler**: `DATA_MODEL.md` ve `API_CONTRACTS.md` belgeleri üretilmeyecektir.
- **Durum**: User Approved
- **Source**: Approved Intake Section 5 (Out of Scope) & `PROJECT_INPUT.md`

## 3. Product / Scope Decisions

### DEC-004: Delivery Profile ve Planning Profiles
- **Tarih**: 2026-08-15
- **Konu**: Teslim Olgunluğu ve Planlama Derinlikleri
- **Karar**: Delivery Profile `Prototype`, `implementation_planning: standard`, `design_planning: light` dondurulmuştur.
- **Gerekçe**: Proaktif satış demosu amacına uygun agent-ready uygulama planı ve hafif fakat yüksek kaliteli görsel sunum oluşturmak.
- **Etkiler**: Paket seçimi `demo-frontend` + `PLANNING_PROFILE_OVERLAY` olarak belirlenmiştir.
- **Durum**: User Approved
- **Source**: Approved Intake Section 2 & `PROJECT_INPUT.md`

### DEC-005: Source-Closed Fact Boundaries (FCL)
- **Tarih**: 2026-08-15
- **Konu**: Firma ve Hizmet Gerçekleri
- **Karar**: `SRC-001` belgesinde açıkça yer almayan hiçbir stok, mobil filo, acil 7/24 destek, SLA süresi, makine modelleri veya adres bilgisi uydurulamaz.
- **Gerekçe**: Yanıltıcı pazarlama iddiası üretmeme ve source-closed kuralına tam uyum sağlama.
- **Etkiler**: Tüm sunum metinleri FCL-001 - FCL-007 kayıtlarıyla sınırlandırılmıştır.
- **Durum**: User Approved
- **Source**: Approved Intake Section 1 (Source-Closed Truth) & `SOURCE_REGISTER.md`

## 4. Design / UX Decisions

### DEC-006: Visual Concept & Anti-Generic Palette
- **Tarih**: 2026-08-15
- **Konu**: Görsel Tema ve Renk Paleti
- **Karar**: Klasik lacivert hero kopyalama yerine Antrasit/Kömür gri (`#111518` / `#1A2026`) taban üzerine Teknik Güvenlik Turuncusu (`#F26522`) accent tonları seçilmiştir.
- **Gerekçe**: Trakya Teknik Makine için özgün, güçlü ve endüstriyel bir görsel kimlik sentezlemek.
- **Etkiler**: `DESIGN_RULES.md` visual concept bu kararla dondurulmuştur.
- **Durum**: Engine Resolved
- **Source**: Canonical `DESIGN_RULES.md` & `PLANNING_PROFILE_OVERLAY.md`

### DEC-007: Direct Contact Action Protocol
- **Tarih**: 2026-08-15
- **Konu**: İletişim Eylem Yüzeyleri
- **Karar**: İletişim aksiyonları direct-contact `tel:` (telefon) ve `mailto:` (e-posta) protokol bağlantılarıyla sunulacaktır. Form backend veya harita eklenmeyecektir.
- **Gerekçe**: Form backend ve harita kapsam dışındadır; doğrudan telefon ve e-posta en güvenilir direct CTA yöntemidir.
- **Etkiler**: Hero, Contact ve Footer bölümlerinde `tel:` ve `mailto:` linkleri kullanılmıştır.
- **Durum**: User Approved
- **Source**: Approved Intake Section 5 & `PROJECT_INPUT.md`

## 5. Deprecated / Superseded Decisions

- Henüz yürürlükten kaldırılan karar bulunmamaktadır.
