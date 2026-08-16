# Fizyoterapist Eda Pala Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: HTML5, Vanilla CSS3 (Custom Properties / Design Tokens, Flexbox, CSS Grid)
- **Frontend Logic & Data Layer**: Vanilla JavaScript (ES6+ Native Modules, `content.config.js` Local Content Adapter)
- **Styling Architecture**: Vanilla CSS (No Tailwind CSS or external utility frameworks unless explicitly requested; full control over bespoke visual direction)
- **Typography**: Google Fonts via standard web font embedding (e.g. Outfit / Inter for modern, clean personal branding typography)
- **Runtime Environment**: Any standard static HTTP web server (Node `serve`, Python `http.server`, VS Code Live Server, Vite static root)
- **Unresolved / Future Stack**: Backend framework, Database, API runtime, CMS or Admin dashboard (Approved scope is pure frontend demo; these components remain `unresolved / future`).

## 2. Mimari Kararlar ve Yaklaşım

- **Static Native Modular Frontend Architecture**: Herhangi bir heavy build aracı veya JS framework yükü (React/Vue/Angular) olmaksızın tarayıcıda doğrudan çalışabilen modüler yapı.
- **Strict Data/Presentation Boundary**: Görsel bileşenler hardcode factual text içermez. Tüm factual içerik (`Eda Pala`, `Fizyoterapist`, `Tekirdağ`, Instagram URL'si) local content configuration katmanında yönetilir.
- **Bespoke Visual Direction**: Standart hazır UI kütüphaneleri (Bootstrap, Tailwind default) yerine özel CSS variables, modern tipografik ölçeklendirme, sakin whitespace ritmi ve zarif mikro etkileşimler uygulanır.

## 3. Sistem Bileşenleri ve Boundary'ler

- **`index.html`**: Semantic HTML5 yapısal giriş noktası ve accessibility/SEO landmark'ları.
- **`styles/`**:
  - `tokens.css`: Renk paleti, tipografi ölçekleri, font aileleri, spacing, elevation ve transition değişkenleri.
  - `main.css`: CSS Reset, global shell, grid/flex layout ve responsive kurallar.
  - `components.css`: Hero, profile, location, outbound CTA ve footer bileşen stilleri.
- **`src/`**:
  - `config/content.config.js`: Factual content allowlist (`FCL-001`..`FCL-004`) ve presentation copy konfigürasyonu.
  - `adapters/contentAdapter.js`: Local content config verisini okuyan ve UI bileşenlerine sağlayan veri adaptörü.
  - `app.js`: Uygulama başlatıcı ve DOM bağlama döngüsü.

## 4. Data / Service / Integration Readiness

### Current vs. Future Integration Boundary

```text
+------------------------------------------+
|            UI / Presentation             |
+------------------------------------------+
                    |
                    v
+------------------------------------------+
|     Service / Data Access Boundary       |
|          (src/adapters/contentAdapter.js) |
+------------------------------------------+
                    |
     +--------------+--------------+
     |                             |
     v                             v
+------------------------+   +------------------------+
| Mock / Local Adapter   |   | Real API Adapter       |
| (content.config.js)    |   | (Future, if approved)  |
| [Active Today]         |   | [Unresolved / Future]  |
+------------------------+   +------------------------+
```

1. **Veri bugün nereden geliyor?**: Local static configuration dosyası (`src/config/content.config.js`).
2. **Mock/local data hangi katmanda tutuluyor?**: `src/config/content.config.js` presentation data config nesnesi içinde.
3. **UI data/service boundary üzerinden nasıl tüketiyor?**: `contentAdapter.getContent()` metodu aracılığıyla. Presentation DOM elemanları doğrudan hardcode string yazmaz.
4. **Gerçek backend eklendiğinde hangi katman değişecek?**: Yalnız `contentAdapter.js` güncellenerek gerçek API/CMS endpoint'ine bağlanacak; HTML ve UI component CSS/JS kodları değişmeyecektir.
5. **Environment/config değerleri uygulama kodundan nasıl ayrılıyor?**: `content.config.js` export nesnesi ile ayrılmaktadır.
6. **Hangi backend/API kararları henüz unresolved durumda?**: REST vs. GraphQL, DB şeması, auth protokolü, hosting altyapısı `unresolved / future scope` olarak dondurulmuştur. Sahte endpoint uydurulmamıştır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **TC-01 (No Unapproved Backend)**: Sahte API endpoint'i, veritabanı şeması veya production integration kontratı üretilemez.
- **TC-02 (Pure Frontend Boundary)**: Tüm iş mantığı client-side static presentation seviyesinde kalır.
- **TC-03 (Performance & Accessibility)**: Sayfa yükleme süresi minimal tutulmalı; semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) ve ARIA erişilebilirlik nitelikleri kullanılmalıdır.
