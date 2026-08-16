# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Client Core**: HTML5 Semantic Architecture, Vanilla JavaScript (ES6+ Modules), Vanilla CSS3 (Custom Properties / Utility-Class Design Tokens).
- **Styling Architecture**: Native CSS Custom Properties, Flexbox & Grid layouts, Glassmorphism & Motion Keyframe Animations (Tailwind veya CSS framework kullanılmamaktadır).
- **Data & Service Boundary Layer**: Modular JavaScript Static Content Configuration (`src/config/siteData.js` / `siteData.json`).
- **Asset & Media Handlers**: SVG Vector Icons, Local Optimized Image Assets.
- **Local Dev / Execution Environment**: Browser Native Standard HTTP Static Server (e.g. `npx serve`, Vite, or static HTML preview).
- **Backend / Database / API**: Unresolved / Future scope (`project_type: landing-page`, `delivery_profile: Prototype`).

## 2. Stack Selection & Continuation Rationale

1. **Bugünkü Demo Scope'u**: Satış görüşmelerinde anında çalıştırılabilen, hiçbir build adımı veya karmaşık bağımlılık çökme riski olmayan, yüksek performanslı ve akıcı bir frontend deneyimi sunmak.
2. **Gelecek Continuation Path'i**: Modüler ES6 JS component & config yapısı sayesinde, gelecekte React/Vite/Next.js veya CMS entegrasyonu gerektiğinde bileşen mantığı ve veri erişim adapter'ı aynen korunabilir.
3. **Local Dev & Preview Workflow**: Standart static web sunucusu veya doğrudan tarayıcı üzerinden sıfır konfigürasyon ile çalıştırılabilir.
4. **Low Migration Cost**: Data/Service boundary katmanı `getSiteData()`, `getServices()`, `getBrandIdentity()` metotları ile soyutlanmıştır. Gerçek API bağlandığında presentation katmanı değiştirilmeden adapter değiştirilir.

## 3. Mimari Kararlar ve Yaklaşım

- **Client-Only Presentation Architecture**: Tüm içerik ve görünüm istemci tarafında işlenir.
- **Strict Data Access Boundary**: UI bileşenleri metin verilerini doğrudan HTML içine hardcode etmek yerine data access adapter katmanından okur.
- **No Invoked Backend / Database**: Sahte API endpoint'i veya kurgusal SQL/NoSQL şemaları üretilmez.

## 4. Sistem Bileşenleri ve Boundary'ler

- **Global Shell Boundary (`src/components/shell/`)**: Header, responsive navigation drawer, footer quick links ve direct contact CTA bar.
- **Hero & Brand Component (`src/components/hero/`)**: Marka logosu/adı, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statü badge'i ve birincil aksiyon alanları.
- **Services Showcase Component (`src/components/services/`)**: Üç onaylı hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel kartları ve detay overlay'leri.
- **Corporate & Region Component (`src/components/about/`)**: Firma vizyonu ve Trakya bölgesi teknik servis bağlamı sunumu.
- **Local Content Configuration (`src/config/siteData.js`)**: FCL allowlist ile sınırlı firma ve hizmet metinlerinin tutulduğu katman.

## 5. Data / Service / Integration Readiness

```text
+------------------------------------------+
|          UI / Presentation Layer         |
|  (Header, Hero, Services, Contact Card)  |
+------------------------------------------+
                    |
                    v
+------------------------------------------+
|      Data Access / Service Boundary      |
|           (getSiteData Adapter)          |
+------------------------------------------+
                    |
                    v
+------------------------------------------+
|  Local Static Config (siteData.js)       |
|  (Bugünkü Prototype Data Source)         |
+------------------------------------------+
                    | (replaceable in future by)
                    v
+------------------------------------------+
|  Real Backend / CMS API (Future Scope)   |
+------------------------------------------+
```

- **Integration Readiness Note**: Future backend, CMS veya harici API eklendiğinde `siteData.js` adapter'ı `fetch('/api/v1/content')` çağrısına dönüştürülür; UI component'lerinde kod değişikliği yapılmaz.

## 6. Teknik Kısıtlamalar ve Sınırlar

- **TC-CON-001**: Gerçek backend, API endpoint, veritabanı veya authentication koda dahil edilemez.
- **TC-CON-002**: Source-backed FCL allowlist dışında uydurma veri, adres veya telefon numarası koda gömülemez.
- **TC-CON-003**: Harici CSS kütüphaneleri (Tailwind, Bootstrap) veya ağır JS framwork bağımlılıkları eklenmeden Vanilla CSS custom properties kullanılacaktır.
