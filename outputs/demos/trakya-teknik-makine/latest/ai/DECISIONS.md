# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Bu belgedeki tüm kararlar `engine/GENERATION_PIPELINE.md` ve `templates/ai/DECISIONS_TEMPLATE.md` uyarınca kaydolarak denetlenebilir izlenebilirlik (provenance) taşır.

- **User Approved**: Kullanıcının approved input'ta doğrudan onayladığı kararlar.
- **Engine Resolved**: Approved scope içinde, generation sırasında Engine tarafından netleştirilen kararlar.
- **Pending Review**: Kullanıcı incelemesine sunulmuş açık kararlar.
- **Superseded**: Geçerliliğini yitirmiş kararlar.

## 2. Architectural / Technical Decisions

### DEC-01: Proje Çıktısının Satış Demosu Olması
- **Tarih**: 2026-08-13
- **Karar**: Proje ilk aşamada potansiyel müşteriye gösterilmek üzere kurumsal frontend demo olarak hazırlanacaktır.
- **Kısa Gerekçe**: Potansiyel satış görüşmesinde firmanın hizmet sunumunu modernize eden güçlü bir ilk izlenim yaratmak.
- **Etkiler**: Gerçek backend, CMS ve veritabanı ilk aşamada kapsam dışı tutulmuştur.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Original Brief)

### DEC-02: Framework-Free Vanilla HTML5 / CSS3 / JS Mimarisi
- **Tarih**: 2026-08-13
- **Karar**: Uygulama modüler Vanilla CSS3 (Custom Properties) ve modüler Vanilla JavaScript (ES6 Modules) ile inşa edilecektir.
- **Kısa Gerekçe**: Demo için gereksiz bağımlılıklar eklemeden hızlı açılan, yüksek performanslı ve doğrudan açılabilen lightweight frontend yapısı sağlamak.
- **Etkiler**: Paket yöneticisi (npm/yarn) zorunluluğu kaldırılmış; statik sunucuda çalışma desteği verilmiştir.
- **Durum**: Engine Resolved
- **Source**: `engine/PACKAGE_RULES.md` + `TECH_CONTEXT.md`

### DEC-03: Data Access Service & Local Mock Adapter Ayrımı
- **Tarih**: 2026-08-13
- **Karar**: İçerik verisi UI bileşenlerine sert kodlanmayacak; `CompanyDataService` katmanı üzerinden soyutlanacaktır.
- **Kısa Gerekçe**: Demo mimarisinin spagetti koda dönüşmesini engellemek ve sonradan gerçek API bağlandığında presentation katmanının yeniden yazılmasını önlemek (Backend Integration Readiness).
- **Etkiler**: UI doğrudan `companyData.js` okumaz; `companyService.js` modülünü kullanır.
- **Durum**: Engine Resolved
- **Source**: `engine/PLANNING_PROFILES.md` (Integration Readiness Baseline)

## 3. Product / Scope Decisions

### DEC-04: Proje State'inin `existing` Sınıflandırılması
- **Tarih**: 2026-08-13
- **Karar**: Proje mode'u `existing` olarak dondurulmuştur.
- **Kısa Gerekçe**: brief'te `yeni` yazsa dahi yayında olan SITE123 tabanlı bir web sitesi (https://www.trakyateknikmakine.com/) ve doğrulanmış firma bilgileri mevcuttur.
- **Etkiler**: Mevcut sitedeki firma adı, yetkili servis bilgisi ve 3 hizmet tanımı factual truth kabul edilmiştir.
- **Durum**: Engine Resolved
- **Source**: `engine/PROJECT_INTAKE.md` (`existing product/site + rewrite from scratch → existing`)

### DEC-05: 3 Ana Hizmet ve Disan Hidrolik Yetkili Servis Vurgusu
- **Tarih**: 2026-08-13
- **Karar**: İçerik hiyerarşisi firmanın Disan Hidrolik Yetkili Servisi statüsü ile 3 ana hizmeti (Yedek Parça Temini, Yerinde Destek, Bakım-Onarım) etrafında kurulacaktır.
- **Kısa Gerekçe**: Firmanın mevcut sitede doğrulanmış en güçlü kurumsal güven unsurları bu alanlardır.
- **Etkiler**: Ana sayfaya Disan Yetkili Servis Precision Badge eklenmiştir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Section 3 & 4)

## 4. Design / UX Decisions

### DEC-06: Visual Concept — "Precision Industrial Craft & Engineering Trust"
- **Tarih**: 2026-08-13
- **Karar**: Tasarım görsel konseptiSlate Charcoal (`#0F172A`), Steel Platinum (`#1E293B`) ve Industrial Amber (`#D97706`) tonlarında teknik grid ve kart katmanları ile kurulacaktır.
- **Kısa Gerekçe**: Jenerik mavi kurumsal şablonlardan ve Bootstrap görünümünden tamamen ayrışan, projeye özgü yüksek kaliteli kurumsal sanayi karakteri üretmek.
- **Etkiler**: `DESIGN_RULES.md` içinde renk ve tipografi (`Outfit` + `Inter`) token'ları tanımlanmıştır.
- **Durum**: Engine Resolved
- **Source**: `engine/PLANNING_PROFILES.md` (Anti-Template Rationale & Design Synthesis)

## 5. Deprecated / Superseded Decisions

- Yok.
