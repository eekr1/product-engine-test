# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Presentation Layer**: HTML5 / Vanilla CSS / Modern JavaScript (ES6+) veya React+Vite kurumsal frontend mimarisi (Engine resolution katmanı ile dondurulur; bağımsız, hafif ve hızlı çalıştırılabilir yapı).
- **Styling & Design Tokens**: Projeye özgü CSS Custom Properties (Variables) / Modüler Vanilla CSS yapısı. Generic framework bağımlılığı olmadan tam kontrol.
- **Iconography & Asset Management**: Inline SVG ve yüksek performanslı lokal görsel varlıkları.
- **Development & Preview Environment**: Standart lokal preview ortamı / static dev server.

## 2. Mimari Kararlar ve Yaklaşım

- **TC-DEC-01 (Component-Based Presentation)**: Arayüz, modüler ve yeniden kullanılabilir UI bileşenlerine (Header/Navigation, Hero Section, Service Cards, Authorized Badge, Contact CTA, Footer) ayrıştırılacaktır.
- **TC-DEC-02 (Separation of Concerns)**: UI komponentleri doğrudan static veriye gömülü olmayacaktır. Veri, sunum katmanından ayrı bir mock data adapter üzerinden okunacaktır.
- **TC-DEC-03 (No Throwaway Architecture)**: Demo scope'u geçici olsa dahi kod mimarisi ve dosya organizasyonu kalıcı, temiz ve genişletilebilir standartta dondurulacaktır.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
+-------------------------------------------------------+
|                UI / Presentation Layer                |
|  (Header, Hero, Services, Trust Section, Contact CTA) |
+-------------------------------------------------------+
                           |
                           v (Data Interface Contract)
+-------------------------------------------------------+
|             Data / Service Boundary                   |
|              (CompanyDataService)                     |
+-------------------------------------------------------+
                           |
           +---------------+---------------+
           | (Today)                       | (Future)
           v                               v
+-----------------------+       +-----------------------+
| Local Mock Adapter    |       | Real API Adapter      |
| (companyMockData.js)  |       | (HTTP/REST Client)    |
+-----------------------+       +-----------------------+
```

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Doğrulanmış firma bilgileri (FCL-001..FCL-006) ve hizmet tanımları lokal mock verisetinden (`companyMockData.js`) çekilmektedir.
2. **Mock Data Katmanı**: `src/data/` veya `src/services/` altında modüler JSON/JS verisetlerinde tutulmaktadır.
3. **Data Boundary**: UI bileşenleri veriyi `getCompanyInfo()`, `getServices()`, `getContactInfo()` gibi interface fonksiyonları üzerinden tüketir.
4. **Gelecekte Gerçek Backend Geldiğinde**: Yalnızca `Data / Service Adapter` katmanı değiştirilecek; UI presentation bileşenlerinde yeniden yazım gerekmeyecektir.
5. **Config & Environment Separation**: Telefon numarası, e-posta, yetkili servis bilgisi ve iletişim metinleri central config objesinde yönetilir.
6. **Unresolved / Future Technical Decisions**: Backend framework (Node/Python/Go), veritabanı (PostgreSQL vb.), CMS seçimi şu an unresolved olarak dondurulmuştur (sahte DB/API uydurulmamıştır).

## 5. Teknik Kısıtlamalar ve Sınırlar

- **NATIVE-FIRST**: Harici ağır JavaScript veya ağır UI kütüphanesi bağımlılığı yaratılmayacaktır.
- **PERFORMANCE**: Sayfa ilk yüklenmesi (First Contentful Paint) < 1.0s ve Lighthouse performans puanı > 90 hedeflenmektedir.
- **RESPONSIVE**: 320px (Mobil), 768px (Tablet), 1024px (Masaüstü), 1440px (Geniş Ekran) breakpoint'lerinde sorunsuz görüntüleme.
- **ACCESSIBILITY**: Semantic HTML5 tag'leri (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) ve uygun ARIA etiketleri kullanılacaktır.
