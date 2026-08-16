# Fizyoterapist Eda Pala Web Sitesi Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: Standard HTML5 (Semantik yapı ve SEO uyumlu HTML markup).
- **Styling**: Vanilla CSS3 (Custom Design System CSS Custom Properties/Tokens, modern Flexbox/CSS Grid düzeni, smooth transitions & animations).
- **Logic & Configuration Adapter**: Vanilla JavaScript (ES6+ Modules, statik veri konfigürasyonu ve rendering mantığı).
- **Backend / Database**: *Yok / Unresolved / Future Scope* (Sıfır dış API, sıfır veritabanı).
- **Build / Tooling**: Standard HTTP dev server / npm statik sunucu.

## 2. Mimari Kararlar ve Yaklaşım

- **Modüler Statik Mimari**: Uygulama sunucusu veya karmaşık derleme adımı gerektirmeyen, doğrudan sunulabilir hafif frontend yapısı.
- **Clean Component & Data Separation**: HTML şablonları presentation rolünü üstlenir; veriler `js/config/content.config.js` dosyası içindeki dondurulmuş statik veri nesnelerinden okunur.
- **Zero Throwaway Architecture**: Demo prototipi olmasına rağmen kod, bileşen ve CSS token yapısı production standartlarındadır. Gelecekte gerçek veritabanı veya API eklendiğinde presentation katmanı refactoring gerektirmeden korunur.

## 3. Sistem Bileşenleri ve Boundary'ler

- **`Shell / Presentation Surface`**: Modern tipografi, visual header/hero alanı, kişisel tanıtım kartı, konum bağlamı gösterimi ve sosyal medya yönlendirme alanları.
- **`Content Config Provider`**: Onaylı bilgileri (`Eda Pala`, `Fizyoterapist`, `Tekirdağ`, Instagram URL) dondurulmuş olarak saklayan ve bileşenlere sunan statik veri modülü (`content.config.js`).
- **`Design System Tokens`**: Renk rolleri, tipografi skalası, spacing ve elevation değerlerini tanımlayan global CSS custom properties dosyası (`styles/tokens.css`).
- **`Component Library`**: Hero presentation component, Personal identity & location card component, Outbound CTA component.

## 4. Data / Service / Integration Readiness

```text
UI / Presentation Components (Hero, Identity, Outbound CTA)
      ↓
Content Adapter Boundary (contentAdapter.js)
      ↓
Static Content Provider (content.config.js) — (Bugün)
      ↓ replaceable by
Real API Adapter Service (Gelecekte, müşteri onaylarsa)
```

- **Bugünkü Veri Gerçekliği**: Tüm veriler statik `content.config.js` üzerinden okunmaktadır.
- **Gelecek Entegrasyon Sınırı**: Müşteri tarafından doğrulanmış yeni biyografi, klinik adresi veya randevu sistemi onaylandığında `contentAdapter.js` bir `fetch()` API servisine dönüştürülebilir. Presentation bileşenleri etkilenmez.
- **Unresolved Technical Decisions**: Gerçek backend altyapısı, veritabanı türü, CMS entegrasyonu ve hosting sağlayıcısı aktif scope'ta olmadığı için bilinçli olarak *unresolved / future scope* olarak bırakılmıştır.

## 5. Teknik Kısıtlamalar ve Sınırlar

- **TC-01** (No Invented Backend): Sahte REST API, GraphQL, LocalStorage veritabanı simülasyonu veya sahte HTTP mock servisi üretilemez.
- **TC-02** (Zero Third-Party Library Bloat): Gereksiz ağır framework veya dış UI kütüphanesi yüklenmez; performans ve esneklik için Vanilla CSS/JS kullanılır.
- **TC-03** (Strict Static Security): Form submission handler veya script injection riski taşıyan dynamic eval/innerHTML işlemlerinden kaçınılır.
