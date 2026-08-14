# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Presentation Layer**: HTML5 / CSS3 / JavaScript (Clean Vanilla Baseline / Modern Web Standards).
- **Styling Architecture**: Pure Vanilla CSS, Design Token CSS Variables, Responsive Grid & Flexbox layout. Framework bağımlılığı veya TailwindCSS kullanılmaz (Engine standartları uyarınca).
- **Data Access Layer**: Local Static Data Adapter (`MachineService` / `ContentRepository` pattern).
- **Build / Dev Runtime**: Light local dev web server (stack-neutral safe preview environment).
- **Unresolved Stack Decisions**: Framework veya bundler tercihi henüz kesinleşmemiş olup stack-neutral safe boundaries korunmaktadır.

## 2. Mimari Kararlar ve Yaklaşım

- **TC-001 (Separation of Concerns)**: UI/Presentation katmanı içerik verisine doğrudan erişmez; soyutlanmış data/service boundary üzerinden okur.
- **TC-002 (Non-Throwaway Architecture)**: Satış demosu olması spagetti kod gerekçesi değildir. Kod yapısı ve veri akışı temiz, modüler ve genişletilebilir tutulur.
- **TC-003 (Zero-Backend Coupling)**: Backend henüz kapsamda olmadığı için sahte REST/GraphQL endpoint'leri veya DB şemaları uydurulmaz. Data access katmanı `Interface` seviyesinde dondurulur.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
+-----------------------------------------------------------+
|                   Presentation Layer                      |
| (HeroSection, ServicesSection, AboutSection, ContactCTA)  |
+-----------------------------------------------------------+
                              |
                              v (Data Request)
+-----------------------------------------------------------+
|               MachineService Boundary                     |
|           getCompanyInfo(), getServices()                 |
+-----------------------------------------------------------+
                              |
                              v (Adapter)
+-----------------------------------------------------------+
|              Static Data Adapter (Today)                  |
|               (trakya-teknik-data.json)                   |
+-----------------------------------------------------------+
                              | (Future Replaceable)
                              v
+-----------------------------------------------------------+
|                Real API Adapter (Future)                  |
+-----------------------------------------------------------+
```

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Yerel statik veri kümesinden (`trakya-teknik-data.json`).
2. **Mock/Local Data Hangi Katmanda Tutuluyor?**: `src/data/` veya `src/services/adapters/` altında izole edilmiş statik veri kaynağında.
3. **UI Data/Service Boundary Üzerinden Nasıl Tüketiyor?**: UI component'leri veriyi `MachineService.getServices()` veya `MachineService.getCompanyInfo()` async/promise-ready arayüzleri üzerinden alır.
4. **Gerçek Backend Eklendiğinde Hangi Katman Değişecek?**: Yalnızca `StaticDataAdapter` yerini `ApiDataAdapter` sınıfına bırakacak; UI component'leri veya sayfa düzeni hiç değişmeyecektir.
5. **Environment/Config Ayrımı**: Ortam değişkenleri (`API_BASE_URL`, `CONTACT_PHONE`, `CONTACT_EMAIL`) `config.js` / `.env` benzeri bir yapı üzerinden koddan ayrıştırılır.
6. **Unresolved Items**: Gerçek backend dili (Node, Go, C# vb.), DB şeması ve REST API endpoint tasarımları henüz unresolved durumdadır ve uydurulmamıştır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **TK-001**: Ağır harici CSS/JS kütüphaneleri (Bootstrap, jQuery vb.) kullanılmayacak; hafif ve yüksek performanslı modern web standartları tercih edilecektir.
- **TK-002**: Şifreler, API anahtarları veya hassas kimlik bilgileri istemci tarafında tutulmayacaktır.
- **TK-003**: Cihaz uyumluluğu mobil (320px+), tablet (768px+) ve masaüstü (1024px+) breakpoint'lerini kapsayacaktır.
