# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: Modern Semantik HTML5 + Vanilla CSS3 (Custom Properties / Theme Tokens) + Vanilla JS (ES Modules).
- **Styling / Layout**: Vanilla CSS Flexbox/Grid tabanlı özel responsive düzen; dış bağımlılık veya Tailwind CSS karmaşıklığı olmadan temiz, hızlı ve yüksek performanslı kod yapısı.
- **Build / Preview**: Standart statik web preview / HTTP server (Vite veya hafif lokal sunucu ile doğrudan çalıştırılabilir).
- **Mock Data Layer**: JS / JSON tabanlı yerel veri yapıları (`src/data/companyData.js`).
- **Backend / Database / API**: *Scope Dışı / Unresolved* (İlk aşamada sahte backend, API contract veya veritabanı uydurulmamıştır).

## 2. Mimari Kararlar ve Yaklaşım

- **ARC-01 (Clean Component & Presentation Separation)**: HTML yapısı semantik hiyerarşiyi taşır, CSS görsel görünüm ve responsive düzeni yönetir, JS ise etkileşim ve dinamik veri akışını sağlar.
- **ARC-02 (Integration Readiness & Data Isolation)**: Veri doğrudan HTML bileşenlerinin içine hardcode edilmez; `companyService` modülü üzerinden çekilerek UI şablonlarına aktarılır.
- **ARC-03 (No Throwaway Architecture)**: Demo geçici bir kapsam olabilir; ancak mimari kalite geçici değildir. Gelecekte gerçek backend geldiğinde presentation bileşenleri yeniden yazılmayacak, sadece servis adapter'ı değiştirilecektir.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
+-------------------------------------------------------+
|                UI / Presentation Layer                |
|  (Header, Hero, Services, Corporate, Contact, Footer) |
+-------------------------------------------------------+
                           |
                           v (Data Access Interface)
+-------------------------------------------------------+
|               Data & Service Boundary                 |
|                   (companyService)                    |
+-------------------------------------------------------+
                           |
             +-------------+-------------+
             |                           |
             v (Today)                   v (Future, if approved)
+-------------------------+     +-------------------------+
|  Local Mock Data Source |     |   Real REST / CMS API   |
|   (src/data/company.js) |     |       (Adapter)         |
+-------------------------+     +-------------------------+
```

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Doğrulanmış firma bilgileri ve hizmet tanımları `src/data/companyData.js` dosyasındaki statik objelerden sağlanır.
2. **Mock Data Katmanı**: Veri modelleri (`CompanyInfo`, `ServiceItem`, `ContactInfo`) modüler JS nesneleri olarak saklanır.
3. **UI Tüketimi**: UI bileşenleri veriye doğrudan erişmek yerine `companyService.getCompanyInfo()`, `companyService.getServices()` ve `companyService.getContactInfo()` metodlarını çağırır.
4. **Gelecekteki Entegrasyon**: Gerçek bir CMS veya REST API eklendiğinde presentation katmanına dokunulmadan sadece `companyService` içindeki yerel okuma `fetch()` çağrılarına dönüştürülecektir.
5. **Config / Environment**: API URL veya firma iletişim config değerleri `src/config.js` dosyasında uygulama kodundan ayrıştırılmıştır.
6. **Unresolved Backend Kararları**: Database ORM, sunucu dili, auth protokolü ve production API mimarisi şu an kapsam dışı ve unresolved olarak işaretlenmiştir; sahte kontrat uydurulmamıştır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **CON-T01 (Local Execution Guarantee)**: Demo ekstra bağımlılık, veritabanı veya karmaşık build adımı olmadan herhangi bir modern tarayıcıda doğrudan çalıştırılabilir olmalıdır.
- **CON-T02 (Performance & Zero Heavy Dependency)**: Ağır JS kütüphaneleri, hantal UI framework'leri veya gereksiz devDependency şişkinliği olmayacaktır.
- **CON-T03 (Strict Security Boundary)**: Demo içinde API anahtarı, gizli sırlar, şifreler veya makineye bağımlı absolute dosya yolları kesinlikle saklanmayacaktır.
