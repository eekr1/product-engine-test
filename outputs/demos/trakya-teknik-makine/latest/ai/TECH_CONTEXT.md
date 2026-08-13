# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Presentation Katmanı**: Modern HTML5, Vanilla CSS3 (Custom Properties / Design Tokens, Flexbox, CSS Grid), ES6+ Vanilla JavaScript.
- **Styling Architecture**: Vanilla CSS mimarisi (BEM / Token-based utility & component classes). Harici ağır CSS framework (Tailwind/Bootstrap) bağımlılığı olmadan temiz, performanslı ve sürdürülebilir kod yapısı.
- **Fonts & Typography**: Modern Google Fonts (ör. Inter / Outfit / Roboto Flex) tipografi ailesi.
- **Icons & Visuals**: SVG bazlı temiz endüstriyel vektör ikonlar.
- **Data Source (Bugün)**: Statik Local Mock Data Module (`src/data/companyData.js` / JSON Data Provider).

## 2. Mimari Kararlar ve Yaklaşım

- **Architectural Separation**: Presentation (UI) katmanı ile Veri Erişimi (Data Access) katmanı kesin olarak ayrılmıştır.
- **Throwaway Kod Karşıtlığı**: Demo geçici scope olsa da kod mimarisi throwaway değildir. UI bileşenleri veriyi doğrudan hardcoded almak yerine local service interface üzerinden tüketir.
- **Clean Component Structure**: Sayfa bölümleri ve UI bileşenleri modüler ve sürdürülebilir biçimde yapılandırılır.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
+-------------------------------------------------------+
|               UI / Presentation Layer                 |
|  (HeroSection, ServicesGrid, CompanyInfo, ContactCTA) |
+-------------------------------------------------------+
                           |
                           v
+-------------------------------------------------------+
|               Data Service Interface                  |
|             (getCompanyInfo, getServices)             |
+-------------------------------------------------------+
                           |
            +--------------+--------------+
            |                             |
            v                             v
+-----------------------+     +-----------------------+
|  Local Mock Adapter   |     |   Real API Adapter    |
|   (Mevcut Demo Veri)  |     | (Gelecekte Onaylanırsa)|
+-----------------------+     +-----------------------+
```

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Dondurulmuş local mock veri modülünden (`companyData`).
2. **Mock Data Nerede Tutuluyor?**: Ayrıştırılmış data provider dosyasında.
3. **UI Veriyi Nasıl Tüketiyor?**: Service interface metotları üzerinden (`getServices()`, `getCompanyDetails()`).
4. **Gerçek Backend Geldiğinde Ne Değişecek?**: Yalnızca Local Mock Adapter yerine HTTP/REST API Adapter eklenecek; UI presentation bileşenleri değiştirmeden kalacaktır.
5. **Config & Environment**: Yapılandırma değerleri (`API_URL`, `CONTACT_PHONE`, `CONTACT_EMAIL`) ayrı config modülünde tutulmaktadır.
6. **Unresolved Technical Decisions**: Gerçek backend framework'ü, veritabanı türü ve CMS altyapısı onaylanmış scope dışında olduğundan unresolved dondurulmuştur. Sahte backend contract'ı uydurulmamıştır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **No Invented Backend**: Gerçek backend, API endpoint'i veya veritabanı şeması uydurulmayacaktır [SCP-010].
- **Clean Dependency**: Üçüncü parti bağımlılıklar minimum düzeyde tutularak lokalde ve demo ortamında sıfır kurulum sorunuyla çalıştırılabilir yapı hedeflenmiştir.
- **Cross-Browser & Mobile**: Modern tarayıcılarda (Chrome, Edge, Safari, Firefox) ve mobil ekranlarda kesintisiz performans sağlanmalıdır.
