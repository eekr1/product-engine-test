# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Katmanı:** Vanilla HTML5, CSS3 (Modern Flexbox/Grid, Custom Properties/CSS Variables), ES6+ JavaScript (Modüler bileşen yapısı).
- **Geliştirme / Önizleme Ortamı:** Local preview environment / static dev server (sıfır dış kütüphane bağımlılığı ile hızlı ve güvenilir çalıştırma).
- **Backend / Veritabanı:** Kapsam dışı (Satış demosu aşamasında sahte backend veya API endpoint'i uydurulmamıştır).
- **Yapılandırma:** Environment/Config ayrımı (local mock data configuration).

## 2. Mimari Kararlar ve Yaklaşım

- **Component-Based Arch (Bileşen Mimarisi):** UI bileşenleri (Hero, ServiceCard, TrustBadge, ContactSection vb.) bağımsız, tekrar kullanılabilir yapılara bölünecektir.
- **Throwaway Architecture Yasağı:** Kod yapısı geçici hack'lerden uzak tutulacak; sunum bileşenleri ile veri erişim soyutlaması birbirinden ayrılacaktır.
- **Performans & Sıfır Bağımlılık:** Demo sunumu sırasında ağ gecikmesi veya bağımlılık çökmesi risklerini önlemek için hafif, performanslı ve yerel stil/kod mimarisi tercih edilmiştir.

## 3. Sistem Bileşenleri ve Boundary'ler

- **Presentation Layer (UI):** Ziyaretçi/Müşteri adayının gördüğü responsive HTML/CSS/JS bileşenleri.
- **Service / Data-Access Layer (Boundary):** Presentation katmanı ile veriyi birleştiren typed interface/service fonksiyonları.
- **Mock Data Layer (Adapter):** Günümüz demosunda firmanın doğrulanmış bilgilerini nesne/JSON formatında sağlayan veri adapter'ı.

## 4. Data / Service / Integration Readiness

```text
[UI Presentation Components] 
         ↓ (Service / Data-Access Layer)
[Local Mock Adapter (Bugün)] ──(Replaceable)──> [Real Backend API Adapter (Gelecekte)]
```

### Integration Readiness Soruları ve Yanıtları:

1. **Veri bugün nereden geliyor?**  
   Mevcut siteden doğrulanan firma bilgileri (Disan Hidrolik yetkili servisi, 3 ana hizmet, iletişim kanalları) `data/companyData.js` (veya modüler mock data objesi) üzerinden sağlanmaktadır.
2. **Mock/local data hangi katmanda tutuluyor?**  
   UI component'lerinin dışında, `data/` katmanında isolated mock adapter olarak tutulmaktadır.
3. **UI veriyi nasıl tüketiyor?**  
   UI component'leri veriyi doğrudan hardcode yazmaz; service layer (`getCompanyServices()`, `getCompanyDetails()`) fonksiyonları üzerinden çağırır.
4. **Gerçek backend eklendiğinde ne değişecek?**  
   Sadece `data/` katmanındaki mock adapter yerine `fetch()` / API adapter katmanı eklenecek; UI presentation bileşenleri yeniden yazılmayacaktır.
5. **Environment/config nasıl ayrılıyor?**  
   API URL'leri, iletişim telefonları ve ortam ayarları `config.js` / env değişkeni yapısıyla kod dışına çıkarılmıştır.
6. **Hangi backend kararları unresolved?**  
   Gerçek veritabanı türü (PostgreSQL/MongoDB vb.), backend framework'ü (Node/Go/Python vb.) ve CMS seçimi şu an unresolved / future scope durumundadır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **Statik Demo Kısıtı:** İlk aşama frontend demo olduğu için kullanıcı formu gönderimleri istemci tarafında simüle edilir; veritabanına kaydedilmez.
- **Mobil Uyum Kısıtı:** Tüm bileşenler 320px mobil genişlikten 1920px+ masaüstü genişliğe kadar sorunsuz ölçeklenmelidir.
- **Ağ Bağımlılığı Kısıtı:** Demo yerel ortamda internet bağlantısı olmasa dahi görsel ve işlevsel bütünlüğünü koruyacak şekilde çalışmalıdır (harici CDN bağımlılığı minimize edilmiştir).
