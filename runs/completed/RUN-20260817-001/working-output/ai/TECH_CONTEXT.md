# Fizyoterapist Eda Pala Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Runtime**: Native HTML5, CSS3, Vanilla Javascript (ES6+) veya modüler Vite/React preview setup.
- **Styling Architecture**: Vanilla CSS (CSS Custom Properties / Tokens, Flexbox, CSS Grid). TailwindCSS veya harici UI framework'ü kullanılmaz.
- **Typography Engine**: Web safe fontlar ve Google Fonts / Inter / Outfit tipografi eşleşmesi.
- **Local Preview Environment**: Taşınabilir, hızlı başlatılabilir lokal preview ortamı (HTTP dev server).
- **Backend / Database**: *Unresolved / Not in Approved Scope*. Sahte veritabanı veya API sunucusu uydurulmayacaktır.

## 2. Mimari Kararlar ve Yaklaşım

- `TC-01` | **Frontend-Only Modular Architecture**: Web sitesi tamamen istemci tarafında çalışan, hızlı yüklenen ve ek sunucu bağımlılığı gerektirmeyen modüler bir yapıya sahiptir.
- `TC-02` | **Clean Data/Service Separation**: UI bileşenleri verileri doğrudan kod içinde hardcode etmek yerine statik bir konfigürasyon veri soyutlamasından (`siteConfig` / local JSON data module) çeker.
- `TC-03` | **Zero Throwaway Quality Floor**: Satış demosu veya prototip teslim olgunluğu kod kalitesini düşürmez; temiz dosya organizasyonu, semantik HTML5 ve modüler CSS Custom Properties mimarisi esastır.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
+-------------------------------------------------------------+
|                     Presentation Layer                      |
| (Hero Header, Profile Info Surface, Instagram CTA Surface)  |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|            Content & Config Data Access Adapter             |
|                    (siteConfig.js / JSON)                   |
+-------------------------------------------------------------+
                              |
     +------------------------+------------------------+
     |                                                 |
     v (Today)                                         v (Future Option)
+-------------------------+               +--------------------------+
|  Local Static Config    |               |  Real API Adapter        |
|  (Approved Facts Only)  |               |  (Unresolved / Future)   |
+-------------------------+               +--------------------------+
```

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Veri, onaylı 4 factual bilgi (Eda Pala, Fizyoterapist, Tekirdağ, Instagram URL) ile sınırlandırılmış statik `siteConfig` nesnesinden çekilir.
2. **Mock / Local Data Hangi Katmanda?**: Lokal konfigürasyon modülünde (`src/config/siteConfig.js` veya `data/profileData.json`) tutulur.
3. **UI Veriyi Nasıl Tüketiyor?**: Bileşenler doğrudan statik metin yazmak yerine `siteConfig.profile.name`, `siteConfig.profile.title`, `siteConfig.social.instagramUrl` gibi erişim anahtarları üzerinden veriyi okur.
4. **Gerçek Backend Eklendiğinde Ne Değişecek?**: İleride müşteri onaylı gerçek API veya CMS geldiğinde yalnızca Data Access Adapter güncellenecek; UI bileşenleri ve düzen değiştirilmeyecektir.
5. **Environment / Config Ayrımı**: Uygulama sabitleri ve dış bağlantı URL'leri konfigürasyon katmanında izole edilmiştir.
6. **Unresolved Decisions**: Gerçek backend dili, CMS seçimi ve canlı sunucu hosting altyapısı onaylı kapsam dışı olduğu için unresolved durumda bırakılmıştır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- `TCON-01` | **No External Runtime Dependencies**: Runtime harici ağır JS kütüphanelerine (jQuery, Bootstrap vb.) bağımlı olmamalıdır.
- `TCON-02` | **Outbound Instagram Security**: Dış yönlendirme bağlantısı `rel="noopener noreferrer"` ve `target="_blank"` güvenlik özniteliklerini taşımalıdır.
- `TCON-03` | **Strict Asset Boundary**: Doğrulanmamış veya uydurma stok tıbbi fotoğraflar projeye eklenemez.
