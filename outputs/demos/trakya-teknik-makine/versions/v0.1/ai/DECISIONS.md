# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## 1. Decision Record Standard

Bu belgede dondurulan kararlar `User Approved` (kullanıcı tarafından açık onaylanan), `Engine Resolved` (Engine tarafından kısıtlara göre çözülen) veya `Pending Review` olarak izlenir.

## 2. Architectural / Technical Decisions

### DEC-001: Frontend Framework & Runtime Selection
- **Tarih**: 2026-08-14
- **Konu**: Exact Frontend Stack ve Build Araç Seçimi
- **Karar**: Vanilla HTML5 + CSS3 + Modular ES6+ JavaScript ve Vite local dev/preview ortamı.
- **Kısa Gerekçe**: Ekstra kütüphane bağımlılığı yaratmadan ultra hızlı, hafif, sıfır karmaşıklıkta ve sunumda güvenilir performans sunması.
- **Etkiler**: İstemci tarafı kod boyutu minimize edilir; derleme süresi 1 saniyenin altına düşer.
- **Durum**: Engine Resolved
- **Source**: `engine/PACKAGE_RULES.md` + `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Section 7)

### DEC-002: Presentation & Data/Service Separation Architecture
- **Tarih**: 2026-08-14
- **Konu**: Mock Veri ve UI Bileşen Sınırı
- **Karar**: Mock veriler UI bileşenlerine hardcode edilmeyecek; `contentService.js` soyutlama katmanı üzerinden asenkron tüketilecektir.
- **Kısa Gerekçe**: Demo mimarisinin throwaway olmasını engellemek; gelecekte gerçek backend/CMS geldiğinde UI katmanını değiştirmeden adapter güncelleyebilmek.
- **Etkiler**: UI bileşenleri veri kaynağına bağımsız hale gelir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Section 7 & 10)

## 3. Product / Scope Decisions

### DEC-003: Prototype Scope & Backend Exclusion
- **Tarih**: 2026-08-14
- **Konu**: Backend, Veritabanı ve Auth Kapsam Sınırı
- **Karar**: İlk demo kapsamı yalnızca frontend sunumu ile sınırlandırılmış; backend, DB, Auth ve ödeme kapsam dışı tutulmuştur.
- **Kısa Gerekçe**: İlk hedefin satış görüşmesi için proaktif sunum prototipi olması; gereksiz operasyonel karmaşıklıktan kaçınmak.
- **Etkiler**: Demo geliştirme süresi kısalır, sunum odaklılık güçlenir.
- **Durum**: User Approved
- **Source**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Section 5 & 6)

### DEC-004: project_state Status Assignment
- **Tarih**: 2026-08-14
- **Konu**: Proje Modu Sınıflandırması
- **Karar**: Proje `existing` olarak dondurulmuştur.
- **Kısa Gerekçe**: Yayında mevcut bir web sitesi (`trakyateknikmakine.com`) ve doğrulanmış firma bilgileri mevcuttur. Engine `PROJECT_INTAKE.md` kuralları uyarınca mevcut site varlığı `project_state: existing` zorunlu kılar.
- **Etkiler**: Mevcut sitedeki firma ve hizmet bilgileri truth kaynağı olarak korunur.
- **Durum**: Engine Resolved
- **Source**: `engine/PROJECT_INTAKE.md` (Line 231) + `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Section 6)

## 4. Design / UX Decisions

### DEC-005: Visual Concept — "Industrial Precision & Trust Engine"
- **Tarih**: 2026-08-14
- **Konu**: Tasarım Yönü ve Anti-Template Seçimi
- **Karar**: *"Industrial Precision & Trust Engine"* konsepti. Koyu çelik arka plan (`#0f172a`), endüstriyel turuncu vurgu (`#f97316`), Disan Hidrolik çelik mavisi (`#0284c7`), Inter/Outfit tipografisi ve teknik spec sheet kart estetiği.
- **Kısa Gerekçe**: "Sanayi sitesi = hazır lacivert şablon" klişesini kırarak potansiyel müşteri satış görüşmesinde firmanın teknik yetkinliğini ve yetkili servis güvenilirliğini modern biçimde vurgulamak.
- **Etkiler**: Sitede projeye özel ayırt edilebilir güçlü bir görsel karakter kurulur.
- **Durum**: Engine Resolved
- **Source**: `design/DESIGN_RULES.md` + `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Section 8)

## 5. Deprecated / Superseded Decisions

- Henüz yürürlükten kaldırılmış bir karar bulunmamaktadır.
