# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Katmanı**: Vanilla HTML5, CSS3, Modern ES6+ JavaScript.
- **Tasarım / UI Katmanı**: Custom Vanilla CSS (Design Tokens, CSS Custom Properties, Responsive Layout, Flexbox / CSS Grid). TailwindCSS veya harici heavy UI framework kullanıcı tarafından açıkça talep edilmediği için kullanılmamıştır.
- **Veri Katmanı (Bugün)**: Yerel JS/JSON mock data modülü (`companyData.js`).
- **Veri Katmanı (Gelecekte)**: Reusable `companyService` / `contentAdapter` arabirimi üzerinden REST API veya Headless CMS entegrasyonuna uygun mimari yapı (Unresolved / Future Integration).
- **Build / Tooling / Environment**: Bağımsız yerel geliştirme ve önizleme ortamı (Build / Preview Environment).

## 2. Mimari Kararlar ve Yaklaşım

- **Frontend-Centric Clean Architecture**: Uygulama, UI sunum bileşenleri ile veri sağlama katmanını kesin çizgilerle birbirinden ayırır.
- **Component & Service Isolation**: UI bileşenleri veriyi doğrudan sabit kodlamaz (hardcode etmez); `companyService` / `contentAdapter` arabirimi üzerinden talep eder.
- **Integration-Ready Baseline**: Demo prototipi geçici/throwaway kod yaklaşımıyla üretilmez. İleride gerçek backend veya CMS entegrasyonu geldiğinde UI sunum katmanına dokunmadan yalnızca data adapter katmanı güncellenecektir.
- **No-Invented-Backend Rule**: Onaylanmamış sahte API sunucusu, backend veritabanı şeması veya sahte REST endpoint contract'ı uydurulmamıştır.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
UI / Presentation Components (Header, Hero, Corporate, Services, Contact, Footer)
       ↓
Service / Data Access Boundary (companyService / contentAdapter)
       ↓
Mock / Local Adapter (companyData.js - Bugün)
       ↓ (future swap when approved)
Real API Adapter (REST / Headless CMS - Gelecekte)
```

- **Presentation Layer**: HTML düzeni, CSS stilleri ve UI etkileşim kodları.
- **Data Access Boundary**: `getCompanyProfile()`, `getServices()`, `getContactInfo()` gibi temiz async/sync getter metodları sunan servis arabirimi.
- **Mock Data Store**: Siteden doğrulanmış firma bilgilerini tutan modül.

## 4. Data / Service / Integration Readiness

1. **Veri bugün nereden geliyor?**: `companyData.js` yerel verisinden.
2. **Mock/local data hangi katmanda tutuluyor?**: Service katmanının altındaki adapter modülünde.
3. **UI veri katmanını nasıl tüketiyor?**: Presentation component'leri `companyService` servis fonksiyonlarını çağırarak veriyi çeker.
4. **Gerçek backend geldiğinde ne değişecek?**: `companyService` içindeki data adapter REST `fetch` çağrılarına yönlendirilecek; UI bileşenlerinin hiçbirinde kod değişikliği gerekmeyecektir.
5. **Environment/Config ayırımı nasıl sağlanacak?**: API endpoint URL'leri ve ortam değişkenleri centralized `config.js` veya `.env` üzerinden yönetilecektir.
6. **Unresolved Backend Kararları**: Database ORM, sunucu dili, auth mekanizması ve hosting ortamı onaylı kapsam dışı olup `Unresolved / Future` olarak kalmıştır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **Sahte Backend Yasaktır**: Gerçek API/database onaylanmadığı için sahte sunucu veya endpoint uydurulamaz.
- **Tasarım Framework Kısıtı**: Vanilla CSS tercih edilmiş, gereksiz şişkin harici CSS/JS kütüphanelerinden sakınılmıştır.
- **Görsel Varlık Kısıtı**: Markaya ait yüksek çözünürlüklü vektörel varlıklar (logo vb.) açık soru durumundadır; SVG ve temiz endüstriyel tipografik fallback yapıları hazırlanacaktır.
