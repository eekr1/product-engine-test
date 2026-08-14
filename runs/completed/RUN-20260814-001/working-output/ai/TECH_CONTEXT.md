# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: Modern Semantic HTML5, Vanilla CSS3 (Custom Properties / Design Tokens), ES6+ JavaScript.
- **Build & Preview Environment**: Modüler frontend build ve geliştirme ortamı (Hafif Vite / Static Preview).
- **Iconography & Typography**: Google Fonts (Inter / Outfit / Roboto), SVG tabanlı teknik/endüstriyel ikonlar.
- **Styling Strategy**: Pure Modular CSS; harici Tailwind veya ağır UI kütüphanelerine bağımlılık olmadan tam kontrol ve özgün stil.
- **Data Source (Bugün)**: Mock Data Adapter / Local JS/JSON verileri.
- **Backend / Database (Gelecek / Unresolved)**: Gerçek backend ve veritabanı approved scope dışındadır; ileride kararlaştırılacaktır.

## 2. Mimari Kararlar ve Yaklaşım

- **Presentation / Service Separation**: UI bileşenleri verileri doğrudan component scope'unda tanımlamaz. Bir `Service/Adapter` katmanı üzerinden erişir.
- **Data Boundary**: Demo için gerekli olan 3 ana hizmet, yetkili servis bilgileri ve iletişim verileri `mockDataService.js` (veya eşdeğer mock provider) içinde izole edilir.
- **No-Throwaway Code Policy**: Frontend mimarisi, yarın gerçek bir REST API veya Headless CMS entegrasyonu geldiğinde yalnızca adapter katmanının değiştirilmesini gerektirecek temizlikte yazılır.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
+-------------------------------------------------------+
|                UI / Presentation Layer                |
|  (Hero Section, Service Cards, Contact & CTA Views)   |
+-------------------------------------------------------+
                           |
                           v (Data Access Boundary)
+-------------------------------------------------------+
|               Company Data Service Provider           |
| (getCompanyInfo(), getServicesInfo(), getContactInfo())|
+-------------------------------------------------------+
                           |
                           v
+-------------------------------------------------------+
|                  Mock Data Adapter                    |
|             (Local JSON/JS Data Files)                |
+-------------------------------------------------------+
                           | (Replaceable in Future)
                           v
+-------------------------------------------------------+
|             [Future Real Backend / REST API]           |
+-------------------------------------------------------+
```

- **UI Layer**: Yalnızca görünüm, etkileşim, responsive layout ve kullanıcı yönlendirmesinden sorumludur.
- **Service Layer**: UI'a veri sağlayan soyut arayüz.
- **Adapter Layer**: Veriyi local mock JS dosyasından okuyan ve UI'a standart nesneler dönen yapı.

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Yerel mock JS/JSON verilerinden (`src/data/mockCompanyData.js`).
2. **Mock Data Katmanı**: Şirket detayları, yetkili servis bilgisi, 3 temel hizmet açıklamaları ve iletişim bilgileri lokal nesneler olarak tutulur.
3. **UI Tüketimi**: UI bileşenleri async service fonksiyonları (`getCompanyData()`, `getServices()`) üzerinden veriyi çeker.
4. **Gelecek Backend Entegrasyonu**: Backend onaylandığında UI koduna dokunulmadan `MockDataAdapter` yerine `ApiDataAdapter` bağlanır.
5. **Config / Env Ayrımı**: İletişim e-posta, telefon ve API base URL gibi değerler `src/config/envConfig.js` içinde saklanır.
6. **Unresolved Kararlar**: Backend framework (Node/Python/Go vb.), veritabanı türü ve API protokolü (REST/GraphQL) şu an unresolved durumda tutulmaktadır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **TC-01**: İnternet bağlantısı olmadan da lokal preview ortamında tüm demo çalıştırılabilir olmalıdır.
- **TC-02**: Üçüncü taraf kütüphane bağımlılığı minimum seviyede tutulmalı, harici ağır framework veya ağır CSS bundle yükü yaratılmamalıdır.
- **TC-03**: Sahte backend endpoint'i veya mock sunucu süreci uydurulmamalı; local JS adapter yeterlidir.
