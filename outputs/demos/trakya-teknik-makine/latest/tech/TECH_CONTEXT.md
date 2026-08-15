# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: HTML5 (Semantik Yapı), Vanilla CSS3 (Custom Properties, Flexbox & Grid), Vanilla JavaScript (ES6+ Native Modules).
- **Styling Architecture**: Modüler CSS mimarisi (`reset.css`, `tokens.css`, `layout.css`, `components.css`, `pages.css`).
- **Build / Tooling**: Modern ES6 Module native browser loading veya lightweight Vite dev server (`npm run dev`).
- **Data Store / Local Adapter**: In-memory JS objects & JSON data schemas (Local Static Mock Repository).
- **Backend / Database / API**: Kapsam dışıdır (`N/A / None`). Sahte backend veya uydurma REST endpoint yazılmayacaktır.

## 2. Mimari Kararlar ve Yaklaşım

- **TC-ARC-01 (Clean Component-Service Decoupling)**: UI presentation bileşenleri doğrudan hardcoded mock nesneler taşımayacak; verilere soyutlanmış bir `DataService` / `CompanyService` adapter interface üzerinden erişecektir.
- **TC-ARC-02 (Zero Third-Party Library Bloat)**: Sadece saf Web Standartları (Vanilla Web APIs) kullanılacak, gereksiz heavy CSS/JS framework bağımlılıkları eklenmeyecektir.
- **TC-ARC-03 (Modular Architecture)**: Bileşenler ve veri adaptörleri tekil sorumluluk ilkesine (Single Responsibility Principle) uygun modüller halinde ayrıştırılacaktır.

## 3. Sistem Bileşenleri ve Boundary'ler

- **Presentation Layer (`src/ui/`)**:
  - `Header / Brand Bar`: Trakya Teknik Makine & Disan Yetkili Servis vurgusu.
  - `Hero Section`: Kurumsal ana karşılama ve değer önermesi.
  - `Services Section`: 3 approved hizmetin kart ve detay sunumu.
  - `Contact CTA Section`: Direct-contact telefon/e-posta CTA yüzeyi.
  - `Footer`: Kurumsal dipnot ve telif uyarısı.
- **Service / Adapter Layer (`src/services/`)**:
  - `CompanyService`: Firma kimliği ve servis statüsü verisini sağlayan interface.
  - `ServicesDataService`: 3 approved hizmetin açıklama ve detay verisini sağlayan interface.
  - `MockAdapter`: In-memory statik nesnelerden veri döndüren adapter implementation.

## 4. Data / Service / Integration Readiness

```text
UI Presentation Components
        │
        ▼
CompanyService / ServicesDataService (Interface Boundary)
        │
        ├──────────────────────────┐
        ▼                          ▼
Local Mock Adapter (Bugün)   Real API Adapter (Gelecekte, onaylanırsa)
```

- **Bugünün Veri Kaynağı**: `src/data/mockData.js` içinde tanımlı 3 approved hizmet ve dondurulmuş firma verisi.
- **Entegrasyon Hazırlığı (Integration Readiness)**: Gelecekte gerçek bir API eklendiğinde Presentation katmanında hiçbir HTML/CSS/JS değişikliği yapılmadan yalnızca `MockAdapter` yerine `ApiAdapter` enjekte edilebilecektir.
- **Environment Configuration**: `src/config/env.js` üzerinden mock vs API adapter switch imkanı sağlanacaktır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **TC-CON-01 (External Dependency Boundary)**: CDN üzerinden bile olsa doğrulanmamış harici JS/CSS kütüphaneleri (Tailwind CDN, jQuery vb.) kullanılmayacaktır.
- **TC-CON-02 (No Invented Endpoints)**: Sahte `fetch('/api/v1/...')` mock API route'ları uydurulmayacaktır.
- **TC-CON-03 (Performance Baseline)**: İlk yükleme süresi (Lighthouse Performance) 95+ puan hedeflenecek, sıfır ağır asset bağımlılığı kurulacaktır.
