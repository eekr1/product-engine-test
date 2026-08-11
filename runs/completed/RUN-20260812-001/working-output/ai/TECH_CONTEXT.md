# Trakya Teknik Makine — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: Standard HTML5 (Semantik yapılar)
- **Styling**: Vanilla CSS3 (Custom Industrial Design System, CSS Variables, Flexbox/Grid Layouts)
- **Logic & Interactions**: JavaScript ES6+ (Modüler veri katmanı, event handling, responsive navigation, micro-interactions)
- **Build / Dev Runtime**: Node.js local dev / preview HTTP server (örneğin `npx serve .` veya lightweight local static web server). Dış bağımlılık ihtiyacı olmadan doğrudan çalıştırılabilir.
- **Backend / Database**: *Kapsam Dışı / Unresolved*. Demo aşamasında backend veya veritabanı kullanılmamaktadır.

## 2. Mimari Kararlar ve Yaklaşım

- **Zero-Dependency Core**: Satış demosu gösteriminde paket yöneticisi veya build hatası riskini ortadan kaldırmak için harici ağır bağımlılık kullanılmayacaktır.
- **Component-Based Modularity**: HTML & JS yapısı modüler presentation bileşenleri (Header/Nav, Hero, Services Grid, Service Detail, Authorized Partner Card, Contact Section, Footer) şeklinde ayrıştırılacaktır.
- **Clean Service Boundary**: UI verileri doğrudan HTML içinde harçlanmayacak, bir `CompanyDataService` katmanından okunacaktır.

## 3. Sistem Bileşenleri ve Boundary'ler

- **Presentation Layer (`UI Components`)**: Görsel render, responsive düzen, animation ve kullanıcı etkileşimlerini yönetir.
- **Service Boundary (`CompanyDataService`)**: Firma profili, 3 ana hizmet detayları ve iletişim bilgilerini döndüren soyut servis katmanı.
- **Data Source Layer (`Mock/Local Data`)**: `data/companyData.js` içinde saklanan doğrulanmış firma bilgileri.

## 4. Data / Service / Integration Readiness

```text
+-----------------------------------------------------+
|                  UI Presentation                    |
| (Hero, Services Breakdown, Authorized Servis Card)  |
+-----------------------------------------------------+
                           |
                           v
+-----------------------------------------------------+
|              CompanyDataService Adapter             |
+-----------------------------------------------------+
         |                                   |
         v (Bugün)                           v (Gelecekte - Onaylanırsa)
+------------------+                +------------------+
| Local Static Data|                |  Real REST API   |
| (companyData.js) |                |   Endpoint API   |
+------------------+                +------------------+
```

1. **Bugünkü Veri Kaynağı**: `data/companyData.js` dosyası.
2. **UI Erişimi**: UI doğrudan dosyayı import edip render yapmaz, `CompanyDataService.getServices()`, `CompanyDataService.getCompanyInfo()` gibi metotları çağırır.
3. **Gelecekteki Entegrasyon**: Gerçek bir CMS veya backend bağlandığında UI katmanına dokunulmadan yalnızca `CompanyDataService` içinde bir `fetch()` API adapter'ı etkinleştirilecektir.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **TC-001**: Ağır JS framework (React/Next/Vue) veya karmaşık bundler zorunluluğu getirilmemelidir; demo hızlıca herhangi bir tarayıcıda doğrudan çalıştırılabilmelidir.
- **TC-002**: Sahte veritabanı şeması veya sahte API kontratı uydurulmamalıdır.
- **TC-003**: Cihaz performansını etkileyebilecek kontrolsüz heavy animation kütüphaneleri kullanılmamalıdır.
