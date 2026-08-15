# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: Standard HTML5, Vanilla CSS3 (Custom Properties & Design Tokens), ES6+ Vanilla JavaScript (Dependency-free client-side architecture).
- **Asset & Iconography**: SVG Icons / Vector Industrial Graphics.
- **Styling Architecture**: Modern CSS (CSS Grid, Flexbox, Container Queries, HSL color tokens, dark/light surface contrast).
- **Environment & Preview**: Standalone Local Web Development Preview Server (HTTP/Static preview compatible).

## 2. Mimari Kararlar ve Yaklaşım

- **Component-Driven Modular Frontend**: Sayfa bileşenleri (Hero, Service Cards, Authorized Service Banner, Contact CTA bar) modüler yapıya ayrılır.
- **Service/Data Access Layer (Adapter Pattern)**: Kullanıcı arayüzü veriyi doğrudan kod içinde harcamaz; `src/services/dataService.js` arabirimi üzerinden okur.
- **Uninvented Backend Principle**: Gerçek veritabanı veya API sunucusu approved scope dışındadır. Backend uydurulmayacak, local mock adapter üzerinden veriler okunacaktır.

## 3. Sistem Bileşenleri ve Boundary'ler

- **UI Presentation Boundary**: Layout Shell, Hero Section, Authorized Service Banner, Services Grid Surface, Direct Contact CTA Surface.
- **Service & Data Access Boundary**: `dataService.js` -> local mock store (`src/data/mockData.js`).
- **Configuration Boundary**: Environment / Config variables (`src/config/appConfig.js`).

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Local mock store'dan (`src/data/mockData.js`).
2. **Mock/Local Data Hangi Katmanda Tutuluyor?**: Independent data file katmanında (`src/data/mockData.js`).
3. **UI Data/Service Boundary Üzerinden Nasıl Tüketiyor?**: UI component'leri `dataService.getCompanyInfo()`, `dataService.getServices()`, `dataService.getContactMethods()` asenkron service metotlarını çağırır.
4. **Gerçek Backend Eklendiğinde Hangi Katman Değişecek?**: UI katmanı ve bileşenler dokunulmadan kalır; sadece `dataService.js` adapter'ı `fetch()` / API client ile değiştirilir.
5. **Environment/Config Ayrımı**: App metadata ve contact CTA schema `appConfig.js` üzerinden ayrıştırılır.
6. **Unresolved / Future Integration Status**: Gerçek REST/GraphQL API, CMS entegrasyonu, veritabanı şeması `unresolved / future scope` olarak dondurulmuştur.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **TC-001**: Üçüncü taraf ağır framework bağımlılığı olmaksızın hafif, hızlı yüklenen, saf CSS/JS baseline kullanılacaktır.
- **TC-002**: Gerçek backend, canlı harita (Google Maps API), WhatsApp API veya form submit sunucusu uydurulmayacaktır.
- **TC-003**: Tarayıcı uyumluluğu modern masaüstü ve mobil tarayıcıları (Chrome, Safari, Firefox, Edge) kapsayacaktır.
