# Fizyoterapist Eda Pala Web Sitesi Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki tüm kararlar `DEC-XXX` kimliği ile, açık durumu (`User Approved`, `Engine Resolved`, `Pending Review`, `Superseded`) ve kesin kaynak provenance'ı ile kaydedilmiştir.

## 2. Architectural / Technical Decisions

### DEC-001: Frontend Stack & Static Server Architecture
- **Tarih**: 2026-08-17
- **Konu**: Frontend Teknoloji Yığını Seçimi
- **Karar**: Vanilla HTML5, Vanilla CSS3 (Custom Properties) ve Vanilla JavaScript (ES6+ Native Modules) kullanılacaktır.
- **Kısa Gerekçe**: Projenin frontend satış demosu olması, kolay sunulabilmesi ve herhangi bir karmaşık build adımına ihtiyaç duymadan doğrudan static HTTP sunucusunda çalışabilmesi.
- **Etkiler**: Ağır JS framework yükü (React/Vue) ve Tailwind CSS bağımlılığı olmadan temiz, performanslı ve bakımı kolay kod tabanı.
- **Durum**: Engine Resolved
- **Source**: `PROJECT_INPUT.md` Section 7 ("Unresolved Technical Decisions") + `TECH_CONTEXT.md` Section 1 & 2.

### DEC-002: Presentation Data & Local Content Adapter Boundary
- **Tarih**: 2026-08-17
- **Konu**: İçerik ve Bileşen Katmanı Ayrımı
- **Karar**: Presentation bileşenleri hardcode metin içermeyecek; tüm içerikler `src/config/content.config.js` nesnesinden `src/adapters/contentAdapter.js` aracılığıyla okunacaktır.
- **Kısa Gerekçe**: Müşteriden gelecekte doğrulanmış biyografi, hizmet ve adres bilgileri geldiğinde UI kodlarını değiştirmeden sadece konfigürasyonu güncelleyebilmek.
- **Etkiler**: Presentation component'leri tamamen modüler ve veri kaynağı değişebilir yapıdadır.
- **Durum**: User Approved
- **Source**: `PROJECT_INPUT.md` Section 7 ("Service / Data-Access Boundary Expectation") & ASM-03.

## 3. Product / Scope Decisions

### DEC-003: Source-Closed Factual Universe & Health-Domain Guard
- **Tarih**: 2026-08-17
- **Konu**: Factual Claim ve Sağlık Sektörü Sınırları
- **Karar**: Yalnızca `SRC-01` (`project-start/projects/fizyoterapist-eda-pala/FIZYOTERAPIST_EDA_PALA_PROJECT.md`) içindeki doğrulanmış bilgiler (`FCL-001: Eda Pala`, `FCL-002: Fizyoterapist`, `FCL-003: Tekirdağ`, `FCL-004: Instagram URL`) kullanılacaktır. Uzmanlık, tedavi yöntemi, hastalık listesi, adres veya telefon UYDURULMAYACAKTIR.
- **Kısa Gerekçe**: Sağlık alanındaki mevzuat, etik ve dürüstlük kısıtları nedeniyle source material dışından factual claim üretilemez.
- **Etkiler**: Eksik bilgiler açık soru olarak kalır; tasarım dolu görünmek uğruna sahte metin basmaz.
- **Durum**: User Approved
- **Source**: `PROJECT_INPUT.md` Section 5 ("Out of Scope") & Section 9 ("Sources").

### DEC-004: Outbound Instagram Link Strategy
- **Tarih**: 2026-08-17
- **Konu**: Sosyal Medya Profili Yönlendirme Şekli
- **Karar**: Kullanıcı tarafından sağlanan Instagram URL'si yalnız outbound link (CTA butonu) olarak `target="_blank" rel="noopener noreferrer"` ile kullanılacaktır. Profil içeriği factual source olarak çekilmeyecektir.
- **Kısa Gerekçe**: Instagram URL'sinin varlığı dış scraping veya veri çekme izni vermez.
- **Etkiler**: Güvenli harici sekme yönlendirmesi.
- **Durum**: User Approved
- **Source**: `PROJECT_INPUT.md` Section 5 ("In Scope") & Section 10 ("Known Decisions").

## 4. Design / UX Decisions

### DEC-005: "Human-Centric Digital Profile" Visual Direction & Palette
- **Tarih**: 2026-08-17
- **Konu**: Tasarım Konsepti ve Renk Paleti
- **Karar**: Sektör klişesi "turkuaz/mavi gradient + doktor stok resmi" yerine; fildişi (`#FDFBF7`), orman yeşili (`#3A5A40`) ve kömür siyahı (`#1F2421`) tonlarının harmanlandığı sakin, insani ve editoryal visual direction seçilmiştir. Font olarak Google Fonts Outfit kullanılacaktır.
- **Kısa Gerekçe**: Kişisel markayı güven veren, modern ve özgün bir dijital profile dönüştürmek.
- **Etkiler**: Klişelerden uzak, yüksek okunabilirliğe ve tipografik kaliteye sahip arayüz.
- **Durum**: Engine Resolved
- **Source**: `PROJECT_INPUT.md` Section 8 ("Desired Character / Perception") + `DESIGN_RULES.md` Section 1, 4 & 5.

## 5. Deprecated / Superseded Decisions

- Henüz yürürlükten kaldırılan bir karar bulunmamaktadır.
