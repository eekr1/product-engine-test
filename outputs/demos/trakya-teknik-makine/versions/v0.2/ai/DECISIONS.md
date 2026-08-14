# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Bu belgede yer alan tüm kararlar `Status: User Approved | Engine Resolved | Pending Review | Superseded` vocabulary'si ile kaynaklandırılmıştır. Kullanıcı tarafından açıkça verilen kararlar `User Approved`, onaylı kapsam dahilinde Engine tarafından teknik/görsel detay olarak çözülen kararlar `Engine Resolved` olarak işaretlenmiştir.

## 2. Architectural / Technical Decisions

### DEC-001: Frontend Sales Demo & Local Mock Adapter Architecture
- **Tarih**: 2026-08-15
- **Konu**: Teslimat Modeli ve Veri Erişim Mimarısı
- **Karar**: İlk aşama çıktısı doğrudan satış görüşmesinde sunulabilir frontend demo olacaktır. Veri erişimi UI bileşenlerine gömülmeyecek, `Service -> Mock Adapter` katmanıyla ayrılacaktır.
- **Kısa Gerekçe**: Potansiyel müşteriye hızlı ve etkileyici demo sunumu sağlamak; gelecekte backend entegrasyonu gerektiğinde UI katmanını yeniden yazmadan adapter değiştirebilmek.
- **Etkiler**: Sunucu taraflı veritabanı veya sahte backend API gereksinimi ortadan kalkmıştır.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` Section 1, 7 & User Explicit Approval

### DEC-002: Vanilla CSS & HTML5 Stack Choice
- **Tarih**: 2026-08-15
- **Konu**: Frontend Teknoloji ve Stil Kütüphanesi Seçimi
- **Karar**: Stil altyapısı olarak üçüncü taraf ağır CSS framework'leri (Tailwind/Bootstrap vb.) yerine projeye özel modüler Vanilla CSS ve CSS Custom Properties kullanılacaktır.
- **Kısa Gerekçe**: Demo için yüksek performans, maksimum tasarım özgürlüğü ve sıfır dış bağımlılık yükü elde etmek.
- **Etkiler**: Özel renk token'ları ve ızgara sistemi `variables.css` üzerinde yönetilir.
- **Durum**: Engine Resolved
- **Source**: Product Engine v0.2.0 Web Application Guidance & `engine/PACKAGE_RULES.md`

## 3. Product / Scope Decisions

### DEC-003: Delivery and Planning Profile Parameters
- **Tarih**: 2026-08-15
- **Konu**: Delivery Profile & Planning Depth Seçimi
- **Karar**: `delivery_profile: Prototype`, `implementation_planning: standard`, `design_planning: light` olarak kesinleştirilmiştir.
- **Kısa Gerekçe**: Prototype olgunluğu teslimatı sınırlar; ancak standard implementation mimari kaliteyi, light design ise özgün görsel kimliği korur.
- **Etkiler**: Gerekli canonical doküman seti çözümlenmiş ve üretilmiştir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` Section 2 & User Explicit Approval

### DEC-004: Disan Hidrolik Yetkili Servis & 3 Ana Hizmet Vurgusu
- **Tarih**: 2026-08-15
- **Konu**: İçerik ve Kurumsal Kimlik Odak Noktaları
- **Karar**: Mevcut sitedeki 3 ana hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve Disan Hidrolik Trakya Bölge Yetkili Servisi kimliği sitenin birincil odak noktaları yapılmıştır.
- **Kısa Gerekçe**: Mevcut doğrulanmış firma gerçekliğini korumak ve potansiyel müşteride yetkinlik algısını en üst seviyeye çıkarmak.
- **Etkiler**: Ana sayfa ve hizmet bölümleri bu hiyerarşiye göre düzenlenmiştir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` Section 3, 4 & 6

## 4. Design / UX Decisions

### DEC-005: Industrial Precision & Engineering Trust Visual Direction
- **Tarih**: 2026-08-15
- **Konu**: Görsel Konsept ve Renk Paleti
- **Karar**: Sektör klişesi lacivert şablon yerine derin titanyum/antrasit yüzeyler (`#12151B`, `#1E222A`) ve canlı endüstriyel kehribar/turuncu vurgu (`#E67E22`) tercih edilmiştir.
- **Kısa Gerekçe**: Görsel sunumda hazır tema hissini tamamen ortadan kaldırmak ve projeye özgü premium teknik hissiyat yaratmak.
- **Etkiler**: `DESIGN_RULES.md` renk ve tipografi kuralları bu konsepte göre oluşturulmuştur.
- **Durum**: Engine Resolved
- **Source**: `engine/PLANNING_PROFILES.md` Design Diversity Rule & `working-output/design/DESIGN_RULES.md`

## 5. Deprecated / Superseded Decisions

- Şu ana kadar yürürlükten kaldırılmış bir karar bulunmamaktadır.
