# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Runtime & Build**: Node.js environment, Vite build tool, React 18+ framework.
- **Dil**: JavaScript (Modern ES6+ / JSX) / HTML5 / CSS3 (CSS Custom Properties & Design Tokens).
- **Stil & Tasarım Sistemi**: CSS Modules / Vanilla CSS Design Tokens (Renkler, Tipografi, Spacing, Surface Elevation, Responsive Media Queries).
- **İkonografi & Assetler**: Feather Icons / Lucide React / SVG ikonlar + yerel optimize edilmiş webp/svg görseller.
- **State & Data Management**: React Context / Hooks (`useServices`, `useContactForm`, `useCompanyInfo`) + Local Service Adapters.
- **Backend / Database / API**: Unresolved / Future Scope (İlk aşama frontend demo; yerel mock data adapter kullanılmaktadır).

## 2. Mimari Kararlar ve Yaklaşım

- **Modern Single Page Application (SPA) / Modular Frontend**: Satış sunumlarında hızlı yüklenen, pürüzsüz geçişler sunan, responsive frontend mimarisi.
- **Clean Presentation Layer Separation**: Kullanıcı arayüzü (UI) bileşenleri, veri alma mantığından ayrıştırılmıştır. Bileşenlere sabit veri gömülmez (`hardcoded UI forbidden`).
- **Throwaway Code Yasaktır**: Demo scope'u teslim olgunluğunu sınırlar ancak mimari kaliteyi düşürmez. Gelecekte gerçek backend/API bağlandığında UI bileşenleri değiştirilmeden yalnızca service adapter katmanı güncellenecektir.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
+-------------------------------------------------------------------+
|                        PRESENTATION LAYER                         |
|  [Header/Nav] [Hero] [ServicesGrid] [AboutSection] [ContactForm]  |
+-------------------------------------------------------------------+
                                  │
                                  ▼ (Hooks / Interfaces)
+-------------------------------------------------------------------+
|                       SERVICE ADAPTER LAYER                       |
|   [CompanyService]  [ServicesDataService]  [ContactFormHandler]   |
+-------------------------------------------------------------------+
                                  │
                 ┌────────────────┴────────────────┐
                 ▼ (Bugün)                         ▼ (Gelecekte - Onaylanırsa)
    +-------------------------+       +-------------------------+
    |   Local Mock Data Provider|       |     Real HTTP API Adapter|
    |  (src/data/mockData.js) |       |   (src/services/api.js) |
    +-------------------------+       +-------------------------+
```

### Bileşen Sorumlulukları:

1. **`src/components/layout/`**: Header, Navigation, Footer, Mobile Drawer bileşenleri.
2. **`src/components/sections/`**: Hero, Services, About, AuthorizedDealer, Contact, FAQ bölümleri.
3. **`src/components/ui/`**: Card, Button, Modal, Badge, Toast, FormInput gibi yeniden kullanılabilir UI primitives.
4. **`src/services/`**: Firma bilgisi, 3 ana hizmet detayları ve form aksiyonlarını sağlayan veri erişim servisleri.
5. **`src/data/mockData.js`**: Dondurulmuş gerçek firma bilgilerini içeren yerel veri sağlayıcı nesneler.

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Sitede gösterilen firma açıklamaları, Disan Hidrolik yetkili servis bilgisi ve 3 ana hizmet detayı `src/data/mockData.js` dondurulmuş yerel mock nesnesinden beslenir.
2. **Mock/Local Data Hangi Katmanda Tutuluyor?**: Presentation bileşenleri içerisinde değil, izole `src/data/` dizininde tutulur.
3. **UI Data/Service Boundary Üzerinden Nasıl Tüketiyor?**: UI bileşenleri `src/services/companyService.js` veya `useCompanyData()` custom hook'ları üzerinden veriyi asenkron/senkron servis arayüzü ile alır.
4. **Gerçek Backend Eklendiğinde Ne Değişecek?**: Yalnızca `src/services/` altındaki adapter implementation HTTP API çağrısı yapacak şekilde değiştirilecek; UI bileşenlerinin JSX ve stil kodlarına dokunulmayacaktır.
5. **Environment / Config Ayrımı**: Konfigürasyonlar (ör. firma iletişim telefon/e-posta adresleri, sosyal medya bağlantıları) `.env` veya `src/config/siteConfig.js` üzerinden yönetilir.
6. **Unresolved Technical Decisions**: Gerçek backend dili (Node/Python/Go) ve veritabanı türü (PostgreSQL/MongoDB) henüz approved scope değildir ve sahte endpoint uydurulmamıştır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **N-01 (Browser Compatibility):** Chrome, Safari, Firefox ve Edge tarayıcılarının son 2 ana sürümünde uyumlu çalışmalıdır.
- **N-02 (Mobile Responsiveness):** 320px mobil ekranlardan 2K/4K geniş masaüstü ekranlara kadar tam duyarlı olmalıdır.
- **N-03 (Performance Floor):** Sayfa yüklenme süresi yerel ortamda 1 saniyenin altında olmalı; statik asset'ler webp ve svg formatında optimize edilmelidir.
