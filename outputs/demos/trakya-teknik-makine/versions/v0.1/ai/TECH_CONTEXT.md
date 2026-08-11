# Trakya Teknik Makine — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Katmanı**: Modern Frontend Web Standartları (Vite + React veya modüler JavaScript/CSS bileşen yapısı).
- **Stil & Tasarım Sistemi**: Vanilla CSS / CSS Modules (özgün visual concept ve anti-template renk/tipografi sistemi).
- **Backend / Veritabanı**: Bugün için kapsam dışı (`unresolved / future`). Gerçek sunucu veya veritabanı kararı uydurulmamıştır.
- **Veri Sağlayıcı**: Yerel Mock Data Adapter (`MockDataService`).

---

## 2. Mimari Kararlar ve Yaklaşım

1. **Clean Service Boundary Mimarisi**:
   - Sunum (UI presentation) katmanı veriye doğrudan erişmek yerine soyutlanmış bir `DataService` arayüzü üzerinden erişir.
   - Kod yapısı throwaway mimari olarak kabul edilmez.
2. **Geçiş Esnekliği (Transition Readiness)**:
   - Gelecekte gerçek içerik yönetim sistemi (CMS) veya backend servisleri eklendiğinde presentation bileşenlerinin yeniden yazılması gerekmez; yalnızca service katmanına gerçek `ApiDataService` adaptörü eklenecektir.
3. **Konfigürasyon Ayrımı (Environment/Config Separation)**:
   - Firma bilgileri, hizmet listeleri ve iletişim CTA detayları uygulama koduna sert kodlanmaz (hardcode edilmez); modüler config/mock veri dosyalarında tanımlanır.

---

## 3. Sistem Bileşenleri ve Boundary'ler

```text
UI Presentation Layer (Header, Hero, Services, Identity, Contact CTA)
            ↓
Service Access Interface (IDataService)
            ↓
Mock Data Adapter (MockDataService)  ---> (Gelecekte ApiDataService)
            ↓
Local Data Store (companyData.json / mockContent)
```

- **UI Layer**: Yalnızca görsel görünüm, kompozisyon ve etkileşimden sorumludur.
- **Service Layer**: Veriyi çekme, biçimlendirme ve UI katmanına sağlama sorumluluğuna sahiptir.
- **Data Layer**: Bugün için yapılandırılmış yerel mock içeriktir.

---

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**:
   - Mevcut web sitesinden alınan doğrulanmış firma bilgileri ve hizmet detayları yerel JSON/JS mock veri katmanından temin edilmektedir.
2. **UI Data Boundary'si Nasıl Tüketiyor?**:
   - UI bileşenleri `useCompanyData()` veya `getCompanyServices()` gibi service hook/metotlarını çağırır.
3. **Gelecekte Gerçek Backend Eklendiğinde Ne Olacak?**:
   - Service katmanı altında `ApiDataService` sınıfları yazılacak ve konfigürasyondan adaptör değiştirilecektir. UI presentation koduna dokunulmayacaktır.
4. **Unresolved Technical Decisions**:
   - Tam frontend paket araç seti seçimi (Vite React / Vanilla JS) paket çözümleme aşamasında kesinleşecektir.
   - Harita embed yöntemi (Google Maps iframe) ve WhatsApp CTA opsiyonu.

---

## 5. Teknik Kısıtlamalar ve Sınırlar

- **Sahte Backend Yasağı**: Approved scope'ta olmadığı sürece sahte REST/GraphQL endpoint'leri veya veritabanı şemaları uydurulmayacaktır.
- **Performans & İstemci Boyutu**: Demo hızlı yüklenebilmeli, gereksiz ağır kütüphaneler eklenmemelidir.
- **Cross-Browser & Responsive**: Chrome, Safari, Firefox ve Edge mobil/masaüstü sürümlerinde sorunsuz çalışmalıdır.
