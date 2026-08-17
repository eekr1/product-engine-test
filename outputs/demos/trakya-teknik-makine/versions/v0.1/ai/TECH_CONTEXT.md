# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Framework**: React 18+ (Component-oriented SPA)
- **Build Tool / Bundler**: Vite
- **Styling**: Vanilla CSS (Modular CSS files & CSS Custom Properties / Design Tokens)
- **Package Manager**: npm
- **Presentation Data Layer**: Static local presentation config adapter (`src/services/presentationService.js`)
- **Backend / Database / API**: Unresolved / Future Scope (Not in current approved prototype scope)

## 2. Stack Selection & Continuation Gate

- **Continuation Expected**: YES
- **Continuation Evidence**: `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` Section 7 ("Satış demosu continuation beklentisi taşıdığından v0.2.2 Continuation-Ready Stack Guard uygulanacaktır") and Section 10.
- **Approved Zero-Build Constraint**: NONE (Kullanıcı tarafından zero-build / static HTML dayatması yapılmamıştır).
- **Selected Frontend Baseline**: Package-managed component-oriented SPA (Vite + React + Vanilla CSS).
- **Package Manifest**: `package.json`
- **Dev Command**: `npm run dev`
- **Build Command**: `npm run build`
- **Preview Command**: `npm run preview`
- **Same-Codebase Continuation**: PASS (Demo onaylandığında aynı codebase üzerinden yeni sayfalar, bileşenler ve gerçek API adaptörü eklenebilir; structural rewrite gerektirmez).

## 3. Mimari Kararlar ve Yaklaşım

- **AR-001 (Modüler Bileşen Mimarisi)**: Presentation yüzeyleri bağımsız, yeniden kullanılabilir ve tek bir sorumluluğa sahip React bileşenleri (`Header`, `Hero`, `ServiceCard`, `ContactCTA`, `Footer`) olarak modüler yapıda geliştirilecektir.
- **AR-002 (Clean Data Access Isolation)**: Veri ve içerik doğrudan bileşen markup'ına hardcode edilmeyip presentation service katmanından (`presentationService.js`) tüketilecektir.
- **AR-003 (Design Token Management)**: Renk paleti, tipografi ölçekleri ve spacing değerleri `src/styles/tokens.css` dosyasında CSS Custom Properties olarak tutulacaktır.
- **AR-004 (No Throwaway Architecture)**: Demo kapsamı geçici olsa da mimari yapı sonradan backend ve veritabanı bağlandığında yeniden yazım gerektirmeyecek temizlikte tutulacaktır.

## 4. Sistem Bileşenleri ve Boundary'ler

```text
+-------------------------------------------------------------+
|                 React UI / Presentation                      |
| (Header, HeroPresentation, ServicesGrid, ContactCTA, Footer)|
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|          Service / Data Access Boundary                     |
|           (src/services/presentationService.js)             |
+-------------------------------------------------------------+
                              |
                +-------------+-------------+
                |                           |
                v                           v
     [Local Static Config]           [Real Backend API]
          (Bugün)                     (Gelecekte)
```

- **`src/components/`**: UI sunum bileşenleri.
- **`src/services/presentationService.js`**: İçerik ve factual verileri sunan servis boundary'si.
- **`src/data/presentationData.js`**: Factual allowlist ile sınırlı static presentation konfigürasyonu.
- **`src/styles/`**: Global stiller ve tasarım token'ları.

## 5. Data / Service / Integration Readiness

1. **Veri bugün nereden geliyor?**: `src/data/presentationData.js` içindeki local static presentation config objesinden.
2. **Mock/local data hangi katmanda tutuluyor?**: `presentationData.js` ve bunu sarmalayan `presentationService.js` adaptör katmanında.
3. **UI veriyi nasıl tüketiyor?**: Bileşenler `presentationService.getCompanyInfo()`, `presentationService.getServices()` ve `presentationService.getContactActions()` metotları üzerinden veri çeker.
4. **Gerçek backend eklendiğinde hangi katman değişecek?**: Sadece `presentationService.js` servis metodlarının içi `fetch()` veya `axios` çağrısına dönüştürülecek; UI bileşenlerinin prop veya render yapısı DEĞİŞMEYECEKTİR.
5. **Environment/config değerleri nasıl ayrılıyor?**: `.env` dosyası üzerinden VITE_API_URL gibi değişkenler izole edilmeye hazır tutulmaktadır.
6. **Hangi backend/API kararları unresolved?**: Backend stack'i (Node/Python/Go), veritabanı türü (PostgreSQL/MongoDB), auth protokolü ve REST/GraphQL seçimi unresolved durumdadır. Sahte endpoint veya contract üretilmemiştir.

## 6. Teknik Kısıtlamalar ve Sınırlar

- **TC-001**: Sahte backend API endpoint'i, veritabanı şeması veya mock HTTP interceptor uydurulamaz.
- **TC-002**: Third-party ağır kütüphaneler (ör. jQuery, TailwindCSS, Bootstrap vb.) projeye zorla eklenmemeli; saf Vanilla CSS ve standart React ile performanslı yapı kurulmalıdır.
- **TC-003**: Build çıktısı standart Vite bundle (`dist/`) olarak satış görüşmesinde lokal veya demo sunucusunda çalıştırılabilir olmalıdır.
