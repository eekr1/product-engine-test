# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: HTML5, Vanilla JavaScript (ES6+), Modern Vanilla CSS3.
- **Styling & Design System**: Custom HSL-tailored CSS variables (Design Tokens), Flexbox/CSS Grid layout, modern typography (Google Fonts Inter/Outfit), subtle CSS micro-animations.
- **Iconography & Visual Assets**: Lightweight SVG vector icons embedded or structured as assets.
- **Build / Preview Environment**: Bağımsız, zero-dependency veya hafif local dev preview (Vite veya statik HTTP server).
- **Backend / Database / API**: Scope Dışı (Unresolved / Future Integration).

## 2. Mimari Kararlar ve Yaklaşım

- **Modern Pure Frontend Prototype**: Framework karmaşıklığı oluşturmadan hızlı çalışan, bağımsız ve satış demosu olarak doğrudan gösterilebilir temiz istemci mimarisi.
- **Separation of Concerns**: Presentation (DOM/UI), Styling (CSS Design System), Data Access (Local Service/Adapter) katmanları kesin çizgilerle birbirinden ayrılmıştır.
- **Clean Service Boundary**: Görsel bileşenler veriyi veya kurumsal içerik metinlerini kendi içlerinde hardcode etmez; `Service / Data Access Boundary` üzerinden okur.

## 3. Sistem Bileşenleri ve Boundary'ler

- **Presentation Layer (UI Components)**:
  - `HeroSection`: Firma kimliği ve yetkili servis statüsü sunumu.
  - `ServicesModule`: 3 approved hizmetin kart/detay sunum yüzeyi.
  - `ContactSurface`: Direct-contact telefon ve e-posta eylem alanı.
  - `GlobalHeader / Footer`: Kurumsal navigasyon ve telif/kimlik alt bilgisi.
- **Service & Data Layer**:
  - `CompanyDataService`: Firma bilgileri, yetkili servis unvanı ve iletişim detaylarını sağlayan soyut servis arayüzü.
  - `MockCompanyAdapter`: Statik veriyi JSON/JS data modülünden okuyup servise sunan mock adaptör.

## 4. Data / Service / Integration Readiness

```text
UI / Presentation Components (Hero, Services, Contact)
      ↓
CompanyDataService (Data Access Boundary Interface)
      ↓
MockCompanyAdapter (Local JS/JSON Content Module - TODAY)
      ↓ (Replaceable in Future)
Real Backend API Adapter (Gelecekte onaylanırsa)
```

### Integration Readiness Soruları & Yanıtları:
1. **Veri bugün nereden geliyor?** `src/data/companyData.ts` (veya JS) yerel mock içerik modülünden.
2. **Mock/local data hangi katmanda tutuluyor?** Sunum katmanından izole edilmiş data adapter katmanında.
3. **UI veriyi nasıl tüketiyor?** `CompanyDataService` async/sync arayüz metotları üzerinden.
4. **Gerçek backend eklendiğinde ne değişecek?** Yalnızca `MockCompanyAdapter` yerine `ApiCompanyAdapter` yazılacak; UI presentation bileşenleri dokunulmadan korunacak.
5. **Environment/config değerleri nasıl ayrılıyor?** `config.js` veya `.env` abstraction katmanı ile.
6. **Hangi backend kararları unresolved?** Backend dil/framework, veritabanı, CMS, API protokolü ve hosting altyapısı (Approved scope dışında olduğu için uydurulmamıştır).

## 5. Teknik Kısıtlamalar ve Sınırlar

- **TC-01**: Backend, veritabanı, CMS, auth veya form handler sunucusu uydurulamaz.
- **TC-02**: Canlı Google Maps API, WhatsApp widget script'leri veya 3. parti harici CDN bağımlılıkları eklenemez.
- **TC-03**: İstemci tarafında ağır runtime JS kütüphaneleri kullanılmadan performanslı ve responsive rendering sağlanmalıdır.
