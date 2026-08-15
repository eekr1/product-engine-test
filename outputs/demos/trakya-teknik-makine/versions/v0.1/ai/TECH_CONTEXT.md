# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: HTML5, Vanilla CSS, JS (ES Modules).
- **Styling Architecture**: Pure Vanilla CSS — CSS Custom Properties (Design Tokens), Flexbox/CSS Grid, CSS Transitions/Animations. Tailwind CSS veya ağır CSS framework'ü kullanılmayacaktır.
- **Iconography & Graphics**: Clean SVG icons / vector graphic inline utilities.
- **Build / Runtime Environment**: Standalone modern web browser engine support (Chrome, Edge, Safari, Firefox). Satış görüşmesinde doğrudan yerel dosya sisteminden veya basit bir lokal statik sunucudan (`npx serve`, Vite dev sunucusu vb.) sorunsuz çalıştırılabilir.
- **Backend / Database / API**: Unresolved / Future Scope (Onaylı mevcut kapsamda backend veya veritabanı bulunmamaktadır; sahte API veya database şeması üretilmeyecektir).

## 2. Mimari Kararlar ve Yaklaşım

- **Modern Single-Page Component Structure**: Sayfa modüler ve okunabilir bir bileşen mimarisi (`Navbar`, `Hero`, `CompanyOverview`, `ServicesGrid`, `ServiceDetailCard`, `ContactCTA`, `Footer`) üzerine inşa edilecektir.
- **No Build Complexity Lock-in**: Proje hem doğrudan tarayıcı ortamında hem de modüler modern bundler yapılarında çalıştırılabilir hafif bir JS/CSS modül yapısına sahiptir.
- **Zero Heavy External Dependencies**: Satış görüşmelerinde ağ bağımlılığı olmadan %100 çevrimdışı (offline-capable) güvenilirlikle sunulabilmesi için dış CDN veya ağır JS kütüphane bağımlılığı minimumda tutulur.

## 3. Sistem Bileşenleri ve Boundary'ler

- **Presentation Layer (`src/ui/` or `index.html` + `styles/`)**: Sayfa düzeni, renkler, tipografi, grid ve etkileşim bileşenlerini barındırır.
- **Data Access Boundary Layer (`src/services/companyService.js`)**: Firma ve 3 approved hizmet verisine erişimi sağlayan soyut servis katmanıdır. Presentation bileşenleri veriyi doğrudan bu servisten talep eder.
- **Mock Data Store (`src/data/companyData.js`)**: Sadece onaylı firma ve 3 hizmet bilgilerini barındıran yerel statik veri nesnesidir.

```text
Presentation Layer (UI Components)
       ↓
Service / Data Access Boundary (companyService.js)
       ↓
Mock / Local Store (companyData.js - bugün)
       ↓ (Replaceable in future)
Real REST/GraphQL API Adapter (gelecekte, onaylandığında)
```

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Veri `src/data/companyData.js` içinde static JS object/array olarak tutulur.
2. **UI Veriyi Nasıl Tüketiyor?**: `companyService.js` içerisindeki `getCompanyInfo()` ve `getServices()` metodları aracılığıyla asenkron promise dönecek şekilde tüketir.
3. **Gerçek Backend Eklendiğinde Ne Değişecek?**: Gelecekte gerçek bir backend/CMS bağlandığında UI bileşenlerinde veya HTML yapısında hiçbir değişiklik yapılmadan yalnızca `companyService.js` içerisindeki fetch/axios endpoint çağrıları devreye alınacaktır.
4. **Environment / Config Ayırımı**: API URL veya mod ayarları `src/config.js` veya `.env` abstraction katmanından yönetilmektedir.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **Offline / Standalone Sales Demo Constraint**: İnternet bağlantısı olmaksızın satış görüşmesinde sorunsuz sunulabilmelidir.
- **No Hardcoded Data in Views**: HTML veya UI component JS dosyaları içine ham içerik metinleri kontrolsüz biçimde gömülemez; `companyService` sınırı korunur.
- **No Unapproved Backend / DB Code**: Kapsam dışı olan backend, veritabanı tablosu veya API mock server kodları üretilmeyecektir.
