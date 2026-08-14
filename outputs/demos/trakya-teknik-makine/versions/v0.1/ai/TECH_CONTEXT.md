# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Katmanı**: Modüler Client-side Web mimarisi (HTML5, Vanilla CSS / modern CSS custom properties, JS logic/service katmanı).
- **Stil & Tasarım Sistemi**: Modern responsive layout (CSS Grid / Flexbox, custom design tokens, micro-animations).
- **Backend / Database Katmanı**: Scope dışındadır (`unresolved / future backend`).
- **Veri Kaynağı**: Lokal mock veri modülleri (`CompanyData`, `ServicesData`).

## 2. Mimari Kararlar ve Yaklaşım

- **Client-Side Modular Architecture**: Presentation bileşenleri, veri mantığından ve stil katmanından belirgin şekilde ayrılmıştır.
- **No Invented Backend Rule**: Approved scope backend içermediğinden sahte API endpoint'leri veya veritabanı tabloları uydurulmamıştır.
- **Non-Throwaway Architecture**: Kod yapısı demo ömrünün ötesine geçecek şekilde clean service interfaces ile tasarlanmıştır.

## 3. Sistem Bileşenleri ve Boundary'ler

- **Presentation Surface (UI)**: Header Navigation, Hero Section, Services Grid/Cards, Corporate Profile, Contact Info Bar & Footer.
- **Service Layer (`CompanyService`)**: Arayüz bileşenlerinin veri taleplerini karşılayan soyut veri servis arayüzü.
- **Data Adapter Layer (`LocalCompanyAdapter`)**: Bugünkü static/mock veriyi sağlayan lokal veri adaptörü.

## 4. Data / Service / Integration Readiness

```text
UI / Presentation Components
          ↓
   CompanyService Boundary
          ↓
  LocalCompanyAdapter (Bugün - Mock Data)
          ↓ (Gelecekte Değiştirilebilir)
   Real API Adapter (Gelecekte - Onaylandığında)
```

- **Veri Bugün Nereden Geliyor?**: Lokal JS/JSON mock veri modüllerinden (`CompanyData`, `ServicesData`).
- **Gerçek Backend Eklendiğinde Ne Değişecek?**: Yalnızca `LocalCompanyAdapter` yerine REST/GraphQL API tüketen `ApiCompanyAdapter` yazılacak; UI presentation bileşenleri değiştirilmeyecektir.
- **Environment & Config Separation**: API baz adresi veya iletişim parametreleri `config.js` / environment değişkenleri üzerinden yönetilecek; koda gömülmeyecektir.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **Sunucu Bağımsızlığı**: Demo herhangi bir özel sunucu veya veritabanı kurulumu gerektirmeden statik/preview ortamlarında hızlıca çalıştırılabilir olmalıdır.
- **Hızlı Yüklenme & Performans**: Harici ağır framework bağımlılığı olmaksızın yüksek performans ve mobil uyumluluk hedeflenmektedir.
- **Uydurma API Yasağı**: Gerçek endpoint veya veritabanı kontratı uydurulamaz.
