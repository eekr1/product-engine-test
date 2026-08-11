# Trakya Teknik Makine — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Katmanı**: Modern HTML, Vanilla CSS / modern CSS variables & HSL color tokens, Vanilla JS (stack-neutral preview environment).
- **Presentation ↔ Data Layer**: Mock Data Service Adapter pattern.
- **Data Format**: Strongly structured JavaScript/JSON static data collections (`companyData`, `servicesData`, `contactData`).
- **Build / Dev Runtime**: Stack-neutral local development and preview environment.

## 2. Mimari Kararlar ve Yaklaşım

- **Decoupled Architecture (Integration Readiness Baseline)**: UI presentation bileşenleri veriyi doğrudan HTML/DOM elementleri içine sabit olarak gömmek yerine, tanımlı bir Data Service Boundary (örneğin `getCompanyInfo()`, `getServicesList()`, `getContactInfo()`) üzerinden okur.
- **No Throwaway Code**: Demo için yazılan HTML/CSS/JS bileşen hiyerarşisi ve veri erişim adapter'ı, sonradan gerçek REST API veya GraphQL backend eklendiğinde UI refactor edilmeden yalnızca service adapter değiştirilerek canlıya alınabilir.
- **Stack-Neutral Assumption Guard**: Exact frontend library veya bundler kararı kesinleşene kadar komut ve ortam tanımları stack-neutral tutulmuştur; uydurma framework bağımlılığı eklenmemiştir.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
+-------------------------------------------------------------+
|                      UI Presentation Layer                  |
|  (Header, Hero Section, Services Surface, Contact Surface)  |
+-------------------------------------------------------------+
                              |
                     Data Service Interface
               (getCompanyInfo, getServicesList)
                              |
+-------------------------------------------------------------+
|                     Mock Service Adapter                    |
|             (Current Demo Mock Data Source)                 |
+-------------------------------------------------------------+
                              | (Future Replaceable By)
+-------------------------------------------------------------+
|                     Real API Service Adapter                |
|               (Future Approved Backend Scope)               |
+-------------------------------------------------------------+
```

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Mevcut trakyateknikmakine.com sitesinden doğrulanan firma bilgileri, Disan Hidrolik yetkili servis metni, 3 hizmet tanımı ve iletişim detayları local static mock data kaynağında tutulur.
2. **Mock Data Katmanı**: Local mock adapter içinde JSON/JS objeleri olarak izole edilmiştir.
3. **UI Veri Tüketimi**: Presentational arayüz bileşenleri veriye doğrudan mock adapter fonksiyonları üzerinden erişir.
4. **Gelecekteki Backend Geçişi**: Gerçek backend onaylandığında UI bileşenleri değiştirilmeden mock adapter yerine `Fetch` / `Axios` tabanlı gerçek API adapter eklenecektir.
5. **Config & Environment**: İletişim e-postası, telefon numaraları ve API endpoint yer tutucuları uygulama kodundan ayrıştırılmış konfigürasyon objesinde saklanır.
6. **Unresolved Backend Kararları**: Gerçek backend, veritabanı türü ve CMS seçimi henüz onaylı kapsamda değildir ve `unresolved / future integration` olarak tutulmaktadır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- Gerçek backend veya veritabanı uydurulmamalıdır.
- Presentation component'leri data fetch/parse mantığını kendi içine gömmemelidir.
- Mobil cihazlarda görünüm bozulmaları ve dokunmatik erişilebilirlik sorunları olmamalıdır.
