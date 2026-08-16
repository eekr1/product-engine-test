# Fizyoterapist Eda Pala Web Sitesi Demo — WAVE_00: Foundation & Setup

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Proje dosya mimarisi, CSS custom property jetonları (`styles/tokens.css`) ve dondurulmuş statik veri adapter altyapısının (`js/config/content.config.js`, `js/adapters/contentAdapter.js`) kurulması.

## 1. Parent Wave Map Entry

- **Wave ID**: `WAVE_00`
- **Name**: Foundation & Setup
- **Why Separate**: Kullanıcı arayüzü inşa edilmeden önce dondurulmuş verilerin ve renk/tipografi jetonlarının tanımlanması şarttır.
- **In Scope**: Dosya ağacı, `styles/tokens.css`, `styles/main.css`, `js/config/content.config.js`, `js/adapters/contentAdapter.js`.
- **Out of Scope**: Kullanıcı arayüzü görselleri ve HTML kart markup'ı.
- **Primary Deliverables**: `styles/tokens.css`, `js/config/content.config.js`, `js/adapters/contentAdapter.js`.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Static Modular Frontend Setup | Static Modular Frontend Setup | `implementation-of` | `PASS` |
| Serene Design System Tokens | Serene Design System Tokens | `implementation-of` | `PASS` |
| Local Content Adapter Provider | Local Content Adapter Provider | `implementation-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

- Kullanıcı arayüzü bileşenleri (`WAVE_01` .. `WAVE_03`) CSS variables/tokens olmaksızın styling tutarlılığı sağlayamaz.
- Content ve presentation katmanının temiz ayrılması için `content.config.js` ve `contentAdapter.js` modülünün UI kodlarından önce hazır olması şarttır.

## 4. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 5. Dependencies

- Approved Project Input & Frozen Scope Registry (`SCP-001` .. `SCP-015`).

## 6. Scope

### In Scope
- `index.html` temel semantik HTML5 iskelet yapısının oluşturulması.
- `styles/tokens.css` dosyasında serene warm palette jetonlarının (`--color-primary`, `--color-secondary`, `--color-bg-main`, `--color-text-main`) tanımlanması.
- `styles/main.css` dosyasında global reset, tipografi ve layout kurallarının yazılması.
- `js/config/content.config.js` dosyasında `FCL-01` .. `FCL-04` verilerinin strictly dondurulması (`Eda Pala`, `Fizyoterapist`, `Tekirdağ`, Instagram URL).
- `js/adapters/contentAdapter.js` modülünün yazılması.

### Out of Scope
- Sağlık alanı dışı yeni kişisel bilgiler, uydurma adresler veya tedavi kartları.
- Dynamic backend, REST mock server veya veritabanı simülasyonları.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html
├── styles/
│   ├── tokens.css
│   └── main.css
└── js/
    ├── config/
    │   └── content.config.js
    └── adapters/
        └── contentAdapter.js
```

## 8. Implementation Checklist

- [ ] **`TSK-00-01`: Base Project Shell Setup**
  - **Location**: `index.html`, `styles/main.css`
  - **Responsibility**: HTML5 semantik meta etiketleri, viewport ayarları, font yüklemeleri (`Plus Jakarta Sans`, `Inter`).
  - **Parent Capability**: `Static Modular Frontend Setup`
  - **Done Criteria**: `index.html` dosyasının geçerli HTML5 markup'ı içermesi.
- [ ] **`TSK-00-02`: Design System Custom Properties (`tokens.css`)**
  - **Location**: `styles/tokens.css`
  - **Responsibility**: Renk jetonları (`--color-primary: #2C4A3E`, `--color-bg-main: #FBF9F5`, vb.), tipografi skalası, spacing ve elevation değişkenleri.
  - **Parent Capability**: `Serene Design System Tokens`
  - **Done Criteria**: CSS custom properties modülünün tüm browser varsayılanlarını override edecek şekilde hazır olması.
- [ ] **`TSK-00-03`: Static Content Config Binding (`content.config.js`)**
  - **Location**: `js/config/content.config.js`
  - **Responsibility**: `FCL-01` .. `FCL-04` dondurulmuş verilerini dondurmak.
  - **FCL Boundaries**: `name: "Eda Pala"`, `title: "Fizyoterapist"`, `location: "Tekirdağ"`, `instagramUrl: "https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv"`.
  - **Parent Capability**: `Local Content Adapter Provider`
  - **Done Criteria**: Nesnenin immutable (frozen) biçimde dışa aktarılması.
- [ ] **`TSK-00-04`: Content Adapter Module (`contentAdapter.js`)**
  - **Location**: `js/adapters/contentAdapter.js`
  - **Responsibility**: UI bileşenleri için `getProfileData()`, `getContactData()`, `getLocationData()` fonksiyonlarını sağlamak.
  - **Parent Capability**: `Local Content Adapter Provider`
  - **Done Criteria**: Modülün presentation bileşenlerine temiz veri sağlaması.

## 9. State / Role / Responsive Coverage

- **Normal State**: Statik veriler başarıyla nesneden okunur ve sunulur.
- **Error State**: Veri eksikliği durumunda sessiz uydurma yapılmaz; fallback safe null/default döner.
- **Responsive Baseline**: CSS jetonları fluid clamp font büyüklüklerini destekler.

## 10. Automated Verification

- [ ] HTML markup validation (W3C HTML validator standard).
- [ ] CSS Custom Properties syntax verification.
- [ ] JavaScript ES6 export/import syntax verification.

## 11. Manual QA / Debug Verification

- [ ] `index.html` dosyasının tarayıcıda konsol hatası vermeden açılması.
- [ ] `contentAdapter.js` modülünden dönen verilerin `FCL-01` .. `FCL-04` sınırlarında olduğunun teyidi.

## 12. Acceptance / Exit Criteria

- [ ] `tokens.css` ve `main.css` dosyaları eksiksiz oluşturulmuştur.
- [ ] `content.config.js` dondurulmuş verileri içerir.
- [ ] `contentAdapter.js` modülü `WAVE_01` bileşenleri için hazırdır.

## 13. Handoff / Stop Rule

- `WAVE_00` tamamlandığında `WAVE_01` (Hero & Visual Presentation) uygulamasına geçilebilir.
- Doğrulanmamış factual claim eklenmesi durumunda çalışma durdurulur.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state).
