# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Katmanı**: HTML5, Vanilla CSS3 (Custom Properties / CSS Design Tokens), Modüler Vanilla JavaScript (ES6+ Modülleri).
- **Styling ve Design Tokens**: Harici ağır CSS framework'ü (TailwindCSS/Bootstrap) olmadan, tam kontrol sağlayan Vanilla CSS mimarisi.
- **Veri / Service Katmanı**: Local Mock Data Service (`src/services/companyService.js` veya eşdeğeri JS modülü).
- **Build / Dev Ortamı**: Ek bağımlılık veya karmaşık derleme gerektirmeyen, doğrudan varsayılan web sunucusu veya basit static preview ortamı ile çalıştırılabilir yapı.
- **Backend / Database / API**: Unresolved / Out of Current Scope (Sahte endpoint veya veritabanı şeması üretilmemiştir).

## 2. Mimari Kararlar ve Yaklaşım

- **TC-ARC-01 (Modüler Frontend Mimarisi)**: Kod yapısı sunum bileşenleri (UI Components), layout kabuğu (Shell), tasarım token'ları (Design Tokens) ve veri servisleri (Services) olmak üzere modüler olarak ayrıştırılacaktır.
- **TC-ARC-02 (Framework-Free Lightweight Mimari)**: Satış demosu için gereksiz bağımlılıklar eklenmeyecek; hızlı açılan, performanslı, her tarayıcıda sorunsuz çalışan saf web standartları kullanılacaktır.
- **TC-ARC-03 (Clean Service Boundary)**: Kullanıcı arayüzü doğrudan hardcoded veriye veya ham JSON string'lere erişmeyecek; tanımlı bir Data Access Service arayüzü üzerinden veri çekecektir.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
┌─────────────────────────────────────────────────────────────┐
│                    UI Presentation Layer                     │
│    (Header, Hero, Services Grid, Corporate Info, Footer)    │
└──────────────────────────────┬──────────────────────────────┘
                               │ (calls Service Interface)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 Data / Service Access Boundary              │
│                 (e.g., CompanyDataService)                  │
└──────────────────────────────┬──────────────────────────────┘
                               │ (reads today)
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                   Local Mock Data Adapter                   │
│                (src/data/companyData.json/js)               │
└──────────────────────────────┬──────────────────────────────┘
                               ┊ (replaceable in future)
                               ▼
                    [ Real API / Backend ]
```

- **UI Layer**: Yalnızca görüntüleme, DOM güncellemeleri ve kullanıcı etkileşimlerinden sorumludur.
- **Service Layer**: İlgili içerik ve verileri sağlayan soyut katmandır.
- **Mock Data Source**: Firma metinlerini, hizmet listelerini ve iletişim detaylarını tutan nesne yapısıdır.

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Yerel JS/JSON mock veri nesnelerinden (`companyData`).
2. **Mock Data Katmanı**: Veri presentation bileşenlerine gömülmeyip `services/` katmanında kapsüllenmiştir.
3. **UI Tüketimi**: UI bileşenleri `CompanyService.getServices()`, `CompanyService.getCompanyInfo()` gibi fonksiyonlar üzerinden veri almaktadır.
4. **Gelecekte Backend Eklendiğinde**: UI katmanına dokunulmadan sadece `CompanyService` altındaki adapter `fetch('/api/v1/services')` ile değiştirilebilecektir.
5. **Config & Environment**: İletişim adresleri, e-posta, telefon ve gelecekteki API URL gibi sabitler tek bir `config.js` dosyasından okunacaktır.
6. **Unresolved Backend Kararları**: Gerçek backend dili (Node.js, Go, C# vb.), CMS tercihleri ve veritabanı türü onaylı scope'ta olmadığından unresolved bırakılmıştır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **TC-CON-01**: Node.js/npm derleme adımı zorunlu tutulmamalı; demo düz static dosyalar olarak da açılabilmelidir.
- **TC-CON-02**: Üçüncü taraf ağır JS kütüphaneleri (jQuery, ağır animasyon kütüphaneleri) zorunlu tutulmayacaktır.
- **TC-CON-03**: Sahte endpoint, OpenAPI sözleşmesi veya veritabanı migration dosyası oluşturulamaz.
