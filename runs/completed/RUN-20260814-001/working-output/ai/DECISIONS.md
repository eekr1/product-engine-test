# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki kararlar `engine/CONFLICT_RESOLUTION.md` ve `engine/RUN_PROTOCOL.md` provenance standartlarına uygun biçimde sınıflandırılmıştır.

## 2. Architectural / Technical Decisions

### DEC-01: Sales Demo Scope & Frontend Prototype Boundary
- **Tarih**: 2026-08-14
- **Konu**: Teslimat Kapsamı ve Proje Hedefi
- **Karar**: İlk teslimat satış görüşmesinde gösterilmek üzere hazırlanan frontend demo olacaktır. Gerçek backend, veritabanı ve admin paneli ilk aşamadan muaf tutulacaktır.
- **Kısa Gerekçe**: Potansiyel müşteriye hızlı ve güçlü bir görsel/işlevsel deneyim sunmak.
- **Etkiler**: Karmaşık backend bağımlılıkları elenmiş, geliştirme hızı ve demo kalitesi artırılmıştır.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Section 1 & 10)

### DEC-02: Presentation / Service Separation
- **Tarih**: 2026-08-14
- **Konu**: Kod Mimarisi ve Entegrasyon Hazırlığı
- **Karar**: UI bileşenleri mock verileri doğrudan taşımayacak, soyut bir service provider (`mockDataService.js`) üzerinden okuyacaktır.
- **Kısa Gerekçe**: İleride gerçek backend veya CMS entegrasyonu geldiğinde yeniden yazım gerektirmeyen temiz mimari kurmak.
- **Etkiler**: UI ve Data erişim katmanları ayrıştırılmıştır.
- **Durum**: Engine Resolved
- **Source**: `engine/PACKAGE_RULES.md` + `ai/TECH_CONTEXT.md`

### DEC-03: Stack Selection (Vanilla HTML5 / CSS3 / ES6+ JS)
- **Tarih**: 2026-08-14
- **Konu**: Frontend Teknoloji Seçimi
- **Karar**: Demo için Vanilla HTML5, Pure CSS Custom Properties ve ES6+ JavaScript kullanılacaktır.
- **Kısa Gerekçe**: Üçüncü taraf ağır framework yükü olmadan hızlı, hafif ve bağımsız çalışabilir demo elde etmek.
- **Etkiler**: Dış kütüphane bağımlılığı minimize edilmiştir.
- **Durum**: Engine Resolved
- **Source**: `engine/PACKAGE_RULES.md` (`demo-frontend` package resolution)

## 3. Product / Scope Decisions

### DEC-04: Preservation of Verified Company Facts
- **Tarih**: 2026-08-14
- **Konu**: Firma İçerik Doğruluğu
- **Karar**: Mevcut sitedeki marka adı (Trakya Teknik Makine), Disan Hidrolik yetkili servisliği ve 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Bakım-Onarım) aynen korunacaktır.
- **Kısa Gerekçe**: Doğrulanmış firma gerçeklerine sadık kalmak ve doğrulanmamış bilgi uydurmamak.
- **Etkiler**: İçerik doğruluğu ve güvenilirliği garanti edilmiştir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Section 1 & 6)

### DEC-05: Existing Project State Classification
- **Tarih**: 2026-08-14
- **Konu**: Project State Sınıflandırması
- **Karar**: Kaynak dosyada `project_state: new` önerilmişse de Engine kuralı gereğince (`engine/PROJECT_INTAKE.md` L243) `existing` olarak ele alınmıştır.
- **Kısa Gerekçe**: Mevcut yayında bir site (`trakyateknikmakine.com`) ve korunacak firma verileri bulunduğu için.
- **Etkiler**: Existing project extension kuralları ve transition scope uygulanmıştır.
- **Durum**: Engine Resolved
- **Source**: `engine/PROJECT_INTAKE.md`

## 4. Design / UX Decisions

### DEC-06: Industrial Precision Visual Concept & Palette
- **Tarih**: 2026-08-14
- **Konu**: Görsel Tasarım Yönü ve Renk Paleti
- **Karar**: Deep Industrial Navy (`#0F172A`) ve Precision Amber/Orange (`#EA580C`) vurgu tonları kullanılacaktır.
- **Kısa Gerekçe**: Sanayi klişelerinden uzak, mühendislik hassasiyetini ve teknik servis dinamizmini yansıtan modern kurumsal görünüm elde etmek.
- **Etkiler**: Tasarım dili ve renk rolleri dondurulmuştur.
- **Durum**: Engine Resolved
- **Source**: `design/DESIGN_RULES.md`

## 5. Deprecated / Superseded Decisions

- Henüz yürürlükten kaldırılmış karar bulunmamaktadır.
