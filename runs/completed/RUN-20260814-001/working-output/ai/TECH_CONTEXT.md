# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: HTML5 (Semantik yapılar), JS ES6+ (Modüler katman yapısı), Vanilla CSS3 (Custom Properties & Responsive Layout Engine).
- **Tooling & Preview**: Vite local dev/preview server.
- **Iconography & Assets**: Inline SVG ve optimize edilmiş web görselleri.
- **Backend / Database / API**: Unresolved / Scope Dışı (Henüz approved backend scope'unda bulunmamaktadır; sahte API/endpoint kontratı uydurulmamıştır).

## 2. Mimari Kararlar ve Yaklaşım

- **Client-Side Presentation & Service Separation:** Uygulama kullanıcı arayüzü (UI Components), veri servislerinden (`Service/Data Adapter`) ayrılmıştır.
- **Statik Demo Katmanı:** İlk aşamada veri akışı modüler JS dosyaları üzerinden local mock verilerle sağlanmaktadır.
- **Non-Throwaway Design Pattern:** UI bileşenleri veriye doğrudan bağlı olmayıp, veri adaptörü üzerinden beslendiği için gelecekte gerçek REST API veya CMS geldiğinde yalnızca adapter katmanı değiştirilecek; UI katmanı sıfırdan yazılmayacaktır.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
[ UI Presentation Components ]
         │ (calls interface)
         ▼
[ Service / Data Adapter Boundary ]
         │
         ├── [ Local Mock Data Source ] ── (Bugün: Aktif Demo Verisi)
         │
         └── [ Future API Adapter ] ────── (Gelecekte: Onaylanırsa)
```

- **UI Layer (`src/ui/` veya bileşenler):** Hero, Kurumsal Güven Rozetleri, Hizmet Kartları, İletişim CTA ve Mobil Navigasyon.
- **Service Layer (`src/services/`):** `getCompanyInfo()`, `getServices()`, `getContactInfo()`.
- **Mock Data Layer (`src/data/`):** Mevcut web sitesinden alınan doğrulanmış veri nesneleri.

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Mevcut web sitesindeki (`trakyateknikmakine.com`) doğrulanmış firma metinlerinden türetilen local JS nesnelerinden.
2. **Mock/Local Data Hangi Katmanda Tutuluyor?**: `src/data/mockData.js` modülünde kalıcı veri yapıları olarak.
3. **UI Veriyi Nasıl Tüketiyor?**: `src/services/contentService.js` üzerinden asenkron arayüz (Promise-like) çağrılarıyla.
4. **Gerçek Backend Eklendiğinde Ne Değişecek?**: Yalnızca `contentService.js` içerisindeki adapter `fetch()` çağrılarına yönlendirilecek, UI bileşenlerinin prop/data kontratları korunacaktır.
5. **Environment/Config Nasıl Ayrılıyor?**: Ortam bağımlı değişkenler (ör. iletişim e-posta hedefi, mock mod kontrolü) `src/config.js` veya `.env` üzerinden yönetilecektir.
6. **Unresolved Backend Kararları**: Database ORM, backend dili (Node, Python, Go, PHP vb.), CMS altyapısı ve authentication mekanizması henüz onaylı kapsam dışındadır ve sahte olarak varsayılmamıştır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **Performans Tabanı:** İstemci tarafı bağımlılıksız (zero heavy framework dependency), ultra hızlı sayfa yükleme süresi (< 1.5s).
- **Responsive Sınırlar:** 320px mobil ekrandan 2560px 4K geniş ekranlara kadar tam uyum.
- **Erişilebilirlik & Uyumluluk:** Chrome, Safari, Edge ve Firefox güncel sürümlerinde tam işlevsellik.
