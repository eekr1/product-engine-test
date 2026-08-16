# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_00: Foundation & Application Shell Setup

- **Status**: Completed
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: CSS custom properties / design tokens mimarisi, responsive container shell ve `dataService.js` adapter altyapısının kurulması.

## 1. Parent Wave Map Entry

- **Wave ID**: `WAVE_00`
- **Name**: Foundation & Application Shell Setup
- **Committed Capabilities**:
  - `Responsive container shell & baseline layout setup` (`SCP-001`, `SCP-002`)
  - `Mock data adapter interface baseline (src/services/dataService.js)` (`SCP-006`)
- **Upstream Boundary Consumed**: Engine initialization & project input setup.
- **Downstream Handoff**: Tested application shell, CSS design tokens, and functional `dataService.js` adapter.

## 2. Parent Capability Coverage

| Plan Task / Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| `Task 00.1: CSS Custom Properties & Tokens` | `Responsive container shell & baseline layout setup` | `implementation-of` | `PASS` |
| `Task 00.2: Responsive Application Shell` | `Responsive container shell & baseline layout setup` | `implementation-of` | `PASS` |
| `Task 00.3: Data Access Service Adapter` | `Mock data adapter interface baseline (src/services/dataService.js)` | `implementation-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

Uygulama kabuğu, renk/tipografi token'ları ve veri erişim adapter'ı hazır olmadan kullanıcı arayüzü yüzeylerinin (Hero, Hizmetler, İletişim) inşasına geçilmesi durumunda kod tekrarı, hardcoded veri karmaşası ve dağınık responsive kırılmalar yaşanacaktır. Bu nedenle `WAVE_00` tüm kullanıcı yüzeylerinden önce tekil foundation olarak ayrılmıştır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- None (Engine initialization baseline).

## 6. Scope

### In Scope
- Standalone HTML5 / CSS3 / Vanilla JS baseline dosya ve klasör yapısı.
- CSS Design Tokens (`src/styles/tokens.css` — `#0F172A`, `#1E293B`, `#F97316`, `#F8FAFC`, tipografi ve spacing değişkenleri).
- Responsive Container Shell (`index.html`, `src/styles/main.css`).
- Mock Project Data (`src/data/mockData.js` — FCL-bounded firma, hizmetler ve iletişim şeması).
- Data Access Service Adapter (`src/services/dataService.js` — `getCompanyInfo()`, `getServices()`, `getContactMethods()` asenkron metotları).

### Out of Scope
- Gerçek veritabanı veya API sunucusu entegrasyonu.
- Hero, Hizmetler veya İletişim özel UI bileşenlerinin tasarımı (`WAVE_01`..`WAVE_03` kapsamındadır).
- WhatsApp, harita veya form submit backend'i.

## 7. Expected Result / Target Structure

```text
/ (Project Root)
├── index.html
└── src/
    ├── config/
    │   └── appConfig.js
    ├── data/
    │   └── mockData.js
    ├── services/
    │   └── dataService.js
    └── styles/
        ├── tokens.css
        └── main.css
```

## 8. Implementation Checklist

- [x] **Task 00.1 — CSS Custom Properties & Design Tokens Setup**:
  - **Location / Responsibility**: `src/styles/tokens.css` ve `src/styles/main.css`. `DESIGN_RULES.md` içindeki renk, tipografi, spacing ve border token'larının CSS Custom Properties olarak tanımlanması.
  - **Parent Capability Relation**: `implementation-of` (`Responsive container shell & baseline layout setup`).
  - **Inputs / Contracts**: `DESIGN_RULES.md#Section 4, 5`. Palette: Slate Navy (`#0F172A`), Gunmetal (`#1E293B`), Ember Orange (`#F97316`), Muted Steel (`#94A3B8`). Font: Outfit / Inter.
  - **Implementation Behavior**: `:root` altında `--bg-primary`, `--bg-surface`, `--accent-primary`, `--text-main`, `--text-muted`, `--font-heading`, `--font-body`, `--spacing-unit` değişkenlerini export eder.
  - **States / Responsive**: Media query ile mobil (320px) ve desktop (1200px) spacing değişkenlerini uyarlar.
  - **Preserve / Must Not**: Jenerik mavi Bootstrap/Tailwind renk paletleri kullanılmayacaktır.
  - **FCL / Source Boundary**: FCL-001..007 visual theme context.
  - **Verification**: Tarayıcıda token değişkenlerinin doğru render edildiğinin denetimi.
  - **Done Result**: Tüm stil katmanı için geçerli CSS variables dosyası.

- [x] **Task 00.2 — Responsive Application Shell Construction**:
  - **Location / Responsibility**: `index.html` ve `src/styles/main.css`. Standalone HTML5 layout kabuğunun (`header`, `main#app`, `footer`) ve responsive reset kurallarının kurulması.
  - **Parent Capability Relation**: `implementation-of` (`Responsive container shell & baseline layout setup`).
  - **Inputs / Contracts**: `TECH_CONTEXT.md#Section 3`, `DESIGN_RULES.md#Section 3`. Max container width `1280px`.
  - **Implementation Behavior**: Semantic HTML yapısını kurar, responsive grid/flexbox container'larını hazırlar, font ve reset kurallarını yükler.
  - **States / Responsive**: 1200px, 768px, 320px breakpoint'lerinde padding ve layout uyumunu sağlar.
  - **Preserve / Must Not**: Yatay overflow veya taşma oluşmayacaktır.
  - **Verification**: Sayfa boyutlandırmalarında container'ın pürüzsüz esnemesi.
  - **Done Result**: Temiz HTML5/CSS3 uygulama kabuğu.

- [x] **Task 00.3 — Data Access Service Adapter & Mock Store Setup**:
  - **Location / Responsibility**: `src/data/mockData.js` ve `src/services/dataService.js`. UI bileşenlerinin veri tüketimi için read-only mock veri deposu ve service adapter katmanının kurulması.
  - **Parent Capability Relation**: `implementation-of` (`Mock data adapter interface baseline (src/services/dataService.js)`).
  - **Inputs / Contracts**: `TECH_CONTEXT.md#Section 4`, FCL-001..007.
  - **Implementation Behavior**: `mockData.js` onaylı firma bilgilerini (Trakya Teknik Makine, Disan Hidrolik Trakya Bölge Yetkili Servisi), 3 approved hizmeti (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) ve CTA schema formatındaki direct contact bilgilerini tutar. `dataService.js` bu verileri `getCompanyInfo()`, `getServices()`, `getContactMethods()` asenkron metotları ile döndürür.
  - **States / Responsive**: Promise tabanlı asenkron simülasyon (0ms resolution).
  - **Preserve / Must Not**: Source dosyada bulunmayan ek firma iddiaları (stok, mobil filo, SLA, periyodik bakım detayları vb.) uydurulmayacaktır. UI presentation veriyi doğrudan import edemez, `dataService` üzerinden okur.
  - **Verification**: `dataService.getCompanyInfo()` ve `getServices()` metotlarının doğru verileri eksiksiz döndürdüğünün konsol / unit testi.
  - **Done Result**: Çalışır durumda read-only `dataService.js` adapter'ı.

## 9. State / Role / Responsive Coverage

- **Normal State**: `tokens.css` yüklenir, `main.css` layout container'ı oluşturur, `dataService.js` mock veriyi döndürür.
- **Loading State**: `dataService.js` asenkron resolution destekler.
- **Responsive Coverage**: Desktop (1200px+), Tablet (768px), Mobile (320px) breakpoint'lerinde `--container-padding` ve `--font-size` token'ları otomatik adapte olur.

## 10. Automated Verification

- `dataService.getCompanyInfo()` resolves `{ name: "Trakya Teknik Makine", status: "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" }`.
- `dataService.getServices()` resolves 3 items (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`).
- HTML/CSS syntax ve linting doğrulması.

## 11. Manual QA / Debug Verification

- Tarayıcı geliştirici araçlarında CSS Custom Properties değişkenlerinin (`--bg-primary`, `--accent-primary`) doğru yüklendiğini kontrol et.
- Mobil ekran simülatöründe (320px) yatay kaydırma çubuğu (horizontal scrollbar) oluşmadığını doğrula.
- Konsolda `dataService.getServices()` çağrısı yapıp 3 hizmet objesinin eksiksiz döndüğünü kontrol et.

## 12. Acceptance / Exit Criteria

- [x] CSS design tokens dosyası (`src/styles/tokens.css`) ve responsive layout css (`src/styles/main.css`) hatasız kurulmuştur.
- [x] `index.html` semantic HTML5 yapısı ve responsive container kabuğu ile hazır duruma getirilmiştir.
- [x] `src/data/mockData.js` yalnızca onaylı FCL gerçeklerini içeren veri objelerini barındırmaktadır.
- [x] `src/services/dataService.js` asenkron metotlar sunmakta ve UI katmanı için veri izolasyonu sağlamaktadır.
- [x] Satış demosu olgunluk kriterlerine (`Prototype`) uygun biçimde foundation aşaması tamamlanmıştır.

## 13. Handoff / Stop Rule

`WAVE_00` tamamlandığında `WAVE_01` (Hero & Brand Surface) geliştirilmesine hazır CSS token'ları, layout kabuğu ve `dataService.js` arabirimi sonraki adıma devredilir.

---
## Wave Result

*Execution Complete — Baseline foundation setup fully implemented and verified in `products/trakya-teknik-makine/`.*
