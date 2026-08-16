# Fizyoterapist Eda Pala Web Sitesi Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki tüm kararlar `engine/DOCUMENT_CATALOG.md` ve `templates/ai/DECISIONS_TEMPLATE.md` standartlarına uygun olarak tutulur. Durum etiketi olarak yalnızca `User Approved`, `Engine Resolved`, `Pending Review` ve `Superseded` kullanılır.

## 2. Architectural / Technical Decisions

### `DEC-001` — Vanilla HTML5/CSS3/JS Lightweight Stack Choice
- **Tarih**: 2026-08-17
- **Konu**: Frontend Teknoloji Yığını Seçimi
- **Karar**: Uygulama hafif, bağımsız ve modüler Vanilla HTML5/CSS3/JS mimarisi ile inşa edilecektir.
- **Kısa Gerekçe**: Proje tek sayfa / landing-page satış demosu niteliğindedir. Ağır framework bağımlılığı olmaksızın en yüksek çalışma hızı, taşınabilirlik ve bakım kolaylığı sağlar.
- **Etkiler**: Sıfır dış kütüphane bağımlılığı, doğrudan tarayıcı ile çalışabilme.
- **Durum**: `Engine Resolved`
- **Source**: `packages/DEMO_FRONTEND_PACKAGE.md` + `inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md` Sec. 7

### `DEC-002` — Local Static Content Adapter Architecture
- **Tarih**: 2026-08-17
- **Konu**: Veri Erişim Katmanı Sınırı
- **Karar**: Presentation bileşenleri veriyi doğrudan HTML içinde hardcode etmez; `contentAdapter.js` ve statik `content.config.js` yapısı üzerinden okur.
- **Kısa Gerekçe**: Gelecekte gerçek veritabanı veya API onaylandığında arayüz katmanını değiştirmeden veri sağlayıcıyı yenileyebilmek.
- **Etkiler**: Clean architecture, geleceğe hazır modülerlik.
- **Durum**: `User Approved`
- **Source**: `PROJECT_INPUT.md` Sec. 7 (`Service / Data-Access Boundary Expectation`)

## 3. Product / Scope Decisions

### `DEC-003` — Strict Health-Domain & Allowlist Boundary
- **Tarih**: 2026-08-17
- **Konu**: Ürün Factual İçerik ve Sağlık İddiası Sınırı
- **Karar**: Yalnızca `Eda Pala` (İsim), `Fizyoterapist` (Unvan), `Tekirdağ` (Konum Bağlamı) ve onaylı Instagram profili bağlantısı factual içerik olarak kullanılır. Doğrulanmamış hiçbir tedavi yöntemi, hastalık listesi, adres veya hasta yorumu uydurulmaz.
- **Kısa Gerekçe**: Yanıltıcı tıbbi/kişisel iddialardan kaçınmak ve yasal/mesleki etiğe uygun satış demosu üretmek.
- **Etkiler**: Eksik factual veriler layout/kompozisyon kalitesiyle dengelenir; sahte metin doldurulmaz.
- **Durum**: `User Approved`
- **Source**: `PROJECT_INPUT.md` Sec. 1 & Sec. 5

### `DEC-004` — Outbound Instagram Profile Link Only
- **Tarih**: 2026-08-17
- **Konu**: Dış Sosyal Medya ve İletişim Kanalları
- **Karar**: Instagram profili yalnız outbound link yönlendirmesi olarak eklenir; profil içeriği factual source olarak sınıflandırılmaz.
- **Kısa Gerekçe**: Onaylı tek dış bağlantının Instagram URL'si olması.
- **Etkiler**: `target="_blank" rel="noopener noreferrer"` öznitelikleriyle güvenli dış bağlantı.
- **Durum**: `User Approved`
- **Source**: `PROJECT_INPUT.md` Sec. 1 (`Approved Facts Allowlist`)

## 4. Design / UX Decisions

### `DEC-005` — Anti-Clinic-Cliché Visual Concept
- **Tarih**: 2026-08-17
- **Konu**: Görsel Tasarım Yönü ve Renk Paleti
- **Karar**: Sağlık klişelerinden (parlak turkuaz gradient, doktor stetoskop stok fotoğrafları, 3 sahte tedavi kartı) kaçınılarak modern tipografi, dingin warm earthy/stone renk paleti, geniş whitespace ve zarif mikro etkileşimler sunulacaktır.
- **Kısa Gerekçe**: Sektör klişelerinden sıyrılarak özgün, dingin ve insan odaklı bir kişisel marka algısı oluşturmak.
- **Etkiler**: Tipografi odaklı hiyerarşi, yüksek görsel kalite floor'u.
- **Durum**: `Engine Resolved`
- **Source**: `packages/DEMO_FRONTEND_PACKAGE.md` Design Rule + `PROJECT_INPUT.md` Sec. 8

## 5. Deprecated / Superseded Decisions

Henüz yürürlükten kaldırılan veya değiştirilen bir karar bulunmamaktadır.
