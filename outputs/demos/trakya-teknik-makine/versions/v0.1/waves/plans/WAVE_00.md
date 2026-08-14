# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Core Service Boundary

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Proje altyapısını, renk/tipografi token'larını, responsive HTML/CSS iskeletini ve soyut data/mock service katmanını kurmak.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_00
- **Name**: Foundation & Core Service Boundary
- **Goal**: Proje altyapısı, renk/tipografi tokens, layout shell ve mock data provider.
- **Primary Deliverables**: Modüler CSS/JS temeli, Shell Layout, Mock Data Provider (`mockDataService.js`).
- **Dependencies**: None.

## 2. Why This Wave / Dependency Rationale

Herhangi bir kullanıcı yüzeyine veya sayfa bileşenine geçmeden önce tasarım tokens'larının (`--color-navy`, `--color-orange` vb.), tipografi kurallarının, responsive grid yapısının ve mock veri sağlayıcısının dondurulması gerekir. Bu wave sonraki tüm wave'lerin bağımlı olduğu mimari temeli oluşturur.

## 3. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 4. Dependencies

None.

## 5. Scope

### In Scope

- HTML5 temel iskeleti ve meta etiketleri (`index.html`).
- Design Tokens CSS dosyası (`src/styles/design-tokens.css`).
- Reset & Base CSS stili (`src/styles/base.css`).
- Layout Shell yapısı (`src/styles/layout.css` veya header/footer iskeleti).
- Soyut Mock Data Provider (`src/services/mockDataService.js`).

### Out of Scope

- Sayfa içerik bileşenleri (Hero, Services detail, Contact form vb.).
- Gerçek sunucu API bağlantıları veya veritabanı.
- Üçüncü taraf ağır framework bağımlılıkları.

## 6. Expected Result / Target Structure

```text
/
├── index.html
└── src/
    ├── config/
    │   └── envConfig.js
    ├── data/
    │   └── mockCompanyData.js
    ├── services/
    │   └── mockDataService.js
    └── styles/
        ├── design-tokens.css
        ├── base.css
        └── layout.css
```

## 7. Implementation Checklist

- [ ] `index.html` dosyası oluşturulacak (HTML5, Viewport Meta, UTF-8, Google Fonts `Inter`/`Outfit` bağlantıları).
- [ ] `src/styles/design-tokens.css` içinde CSS değişkenleri tanımlanacak (`--color-navy: #0F172A`, `--color-orange: #EA580C`, `--color-bg: #F8FAFC`, `--font-primary: 'Inter', sans-serif`).
- [ ] `src/styles/base.css` içinde CSS reset ve temel HTML eleman stilleri yazılacak.
- [ ] `src/styles/layout.css` içinde 12-column grid ve container alanları yapılandırılacak.
- [ ] `src/data/mockCompanyData.js` dosyasına doğrulanmış şirket bilgileri, Disan yetkili servisliği ve 3 temel hizmet verileri eklenecek.
- [ ] `src/services/mockDataService.js` içinde `getCompanyInfo()`, `getServices()`, `getContactInfo()` async servis metodları yazılacak.

## 8. State / Role / Responsive Coverage

- **Responsive Breakdown**: Mobile (< 768px), Tablet (768px - 1023px), Desktop (1024px+).
- **Theme Baseline**: Clean Light Slate zemin üzerine Deep Navy ve Precision Amber vurgular.

## 9. Automated Verification

- Tarayıcı veya static server üzerinden `index.html` yüklenmesi ve konsolda CSS token / JS syntax hatası olmaması.

## 10. Manual QA / Debug Verification

- Konsoldan `mockDataService.getServices()` çağrısı yapılarak 3 temel hizmet nesnesinin eksiksiz döndüğünün doğrulanması.

## 11. Acceptance / Exit Criteria

- [ ] Tüm CSS değişkenleri `design-tokens.css` dosyasında tanımlı olmalı.
- [ ] Mock data service 3 temel hizmeti ve firma detaylarını eksiksiz dökebilmeli.
- [ ] Temel layout kabuğu mobilde ve masaüstünde taşma yapmamalı.

## 12. Handoff / Stop Rule

WAVE_00 tamamlandığında WAVE_01 (Primary Entry & Brand Hero) uygulamasına geçilebilir.

---

## Wave Result

Status: Pending Execution
