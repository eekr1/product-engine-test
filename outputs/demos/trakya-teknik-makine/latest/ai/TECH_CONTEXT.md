# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend**: Kurumsal frontend demo. Temiz, performanslı HTML/CSS/JS veya lightweight modern frontend yapısı (Vite / Vanilla veya modern UI mimarisi). UI component'leri, styling ve etkileşimler dinamik mikro-animasyonları destekleyecek temiz standartlarda organize edilir.
- **Data Source (Bugün)**: Yerel statik/mock data katmanı (`JSON` veya TypeScript/JavaScript data provider nesneleri).
- **Backend / DB (Bugün)**: Kapsam dışı (`Unresolved / Future Integration`). Sahte endpoint, DB şeması veya backend stack'i uydurulmamıştır.
- **Önizleme / Dev Sunucusu**: Yerel geliştirme/önizleme ortamı.

## 2. Mimari Kararlar ve Yaklaşım

- **Component-Based Separation**: Görsel UI bileşenleri (Hero, ServiceCards, ContactCTA, AuthorityBadges) presentation katmanında yer alır ve doğrudan iş/veri detaylarına bağımlı tutulmaz.
- **Service/Data Access Boundary**: UI bileşenleri verileri doğrudan statik dosyalardan import etmek yerine, `companyService` veya `servicesData` gibi soyut bir veri erişim arayüzü üzerinden talep eder.
- **Integration Readiness**: Gelecekte gerçek bir CMS veya REST API bağlandığında presentation katmanında değişiklik yapmadan yalnızca data adapter değiştirilebilir.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
[ Presentation Layer ]
  - HeroSection Component
  - ServicesGrid Component (Yedek Parça, Yerinde Destek, Bakım & Onarım)
  - AuthorityBadge Component (Disan Hidrolik Yetkili Servis)
  - ContactSection Component (Telefon, E-posta, Adres CTA)
          ↓ (Interface Call)
[ Service / Data Boundary ]
  - Service/Data Access Layer
          ↓ (Adapter)
[ Data Source Layer ]
  - Mock/Local Data Provider (Trakya Teknik Makine Doğrulanmış Firma Bilgileri)
  - [Future API Adapter - Unresolved/Future]
```

## 4. Data / Service / Integration Readiness

1. **Veri bugün nereden geliyor?**: Mevcut SITE123 sitesinden dondurularak alınan doğrulanmış firma, yetkili servis ve 3 ana hizmet bilgilerinden oluşan yerel mock veri nesnelerinden.
2. **Mock verinin konumu**: Data provider katmanında (`src/data/` veya eşdeğer mock data modülü).
3. **UI tüketimi**: UI bileşenleri soyut servis metodları (`getCompanyInfo()`, `getServicesList()`) ile veriyi çeker.
4. **Gerçek backend geldiğinde**: Yalnızca `servicesData` adapter'ı gerçek API `fetch`/HTTP servisine yönlendirilir; UI kodunda sıfır değişiklik gerekir.
5. **Config & Environment**: Ortam yapılandırma ve iletişim adresleri (telefon, e-posta, WhatsApp numaraları) uygulama kodundan ayrı konfigürasyon nesnelerinde tutulur.
6. **Unresolved / Future Kararlar**: Gerçek backend dili, veritabanı türü, CMS seçimi ve canlı production hosting sağlayıcısı onaylı kapsam dışındadır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **NATIVE-CSS & Dynamic UI**: Görsel sunum kurumsal kalite standartlarını ve özgün tipografi/kompozisyon dengesini tam performansla karşılamalıdır.
- **No Invented Backend**: Onaylanmamış API endpoint'leri veya DB şemaları gerçekmiş gibi kodlanamaz/dokümante edilemez.
- **No Secret / Hardcoded Credentials**: API anahtarı, gizli sırlar veya makineye özel mutlak yollar barındırılamaz.
