# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_00: Foundation & Design System Infrastructure

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Vite+React projesini scaffold etmek, `tokens.css` tasarım token'larını ve `presentationService.js` içerik servis boundary'sini kurmak.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_00
- **Name**: Foundation & Design System Infrastructure
- **Goal**: Vite+React projesini scaffold etmek, `tokens.css` tasarım token'larını ve `presentationService.js` içerik servis boundary'sini kurmak.
- **Why Separate**: UI bileşenleri yazılmadan önce paket yönetimi, CSS değişkenleri ve veri katmanı soyutlaması hazır olmalıdır; aksi halde presentation bileşenlerine hardcode veri veya ad-hoc CSS sızması yaşanır.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Project Infrastructure Scaffolding (`package.json`, Vite) | Vite+React package infrastructure | implementation-of | PASS |
| Design Tokens System Setup (`tokens.css`, `global.css`) | Design tokens system (`tokens.css`) | implementation-of | PASS |
| Presentation Service Boundary (`presentationService.js`, `presentationData.js`) | Presentation service boundary (`presentationService.js`) | implementation-of | PASS |
| Root Container Integration (`App.jsx`, `main.jsx`) | Vite+React package infrastructure | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

Bu dalga Product Engine'in `Continution-Ready Stack Guard` kuralını uygulayarak projenin kod tabanını sıfırdan kurar. Görsel bileşenlerin ve sayfa düzenlerinin (Wave 01 & Wave 02) temiz bir şekilde inşa edilebilmesi için renk token'larının, responsive container kurallarının ve Factual Allowlist verisini sarmalayan `presentationService.js` servis katmanının hazır olması zorunludur.

## 4. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md) — Factual universe ve proje kapsamı
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md) — Data access ve scope kısıtları
- [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md) — Vite+React stack, continuation gate ve service boundary
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md) — Renk kodları, tipografi ve spacing token'ları
- [waves/WAVE_MAP.md](../WAVE_MAP.md) — Ana wave planı ve bağımlılıklar

## 5. Dependencies

- Hiçbiri (Proje başlangıç altyapı adımıdır).

## 6. Scope

### In Scope
- `package.json` ve `vite.config.js` ile bağımlılıkların tanımlanması.
- `src/styles/tokens.css` dosyasında Antrasit (`#1E2530`), Çelik Slate (`#3A475A`), Amber (`#D97706`) renk token'larının tanımlanması.
- `src/data/presentationData.js` dosyasında Factual Allowlist dondurulmuş verisinin yapılandırılması.
- `src/services/presentationService.js` adaptör servisinin yazılması (`getCompanyInfo()`, `getServices()`, `getContactActions()`).
- `src/App.jsx` ve `src/main.jsx` giriş noktalarının temiz container yapısıyla hazırlanması.

### Out of Scope
- UI header, hero veya kart bileşenlerinin stil ve markup kodlaması (Wave 01 & 02).
- Sahte backend endpoint'leri, HTTP interceptor'lar veya veritabanı simülasyonları.
- Üçüncü parti UI kütüphaneleri (TailwindCSS, Bootstrap vb.).

## 7. Expected Result / Target Structure

```text
product-engine/
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   ├── tokens.css
    │   └── global.css
    ├── data/
    │   └── presentationData.js
    └── services/
        └── presentationService.js
```

## 8. Implementation Checklist

- [ ] **Task 1 / Project Infrastructure Scaffolding**:
  - Location: `./package.json`, `./vite.config.js`, `./index.html`
  - Consumes: `ai/TECH_CONTEXT.md` continuation gate requirements
  - Owns: React 18, Vite ve npm build workflow yapılandırması
  - Must Not: Unapproved npm paketleri eklenmeyecektir
  - Verification: `npm run dev` ve `npm run build` komutlarının hatasız çalışması
  - Done: Derlenebilir boş Vite+React proje altyapısının kurulması.

- [ ] **Task 2 / Design Tokens System Setup**:
  - Location: `src/styles/tokens.css`, `src/styles/global.css`
  - Consumes: `design/DESIGN_RULES.md` renk ve tipografi değerleri
  - Owns: CSS custom properties (`--color-primary-dark: #1E2530`, `--color-secondary-slate: #3A475A`, `--color-accent-amber: #D97706`, `--color-bg-light: #F8FAFC`, `--font-main: 'Outfit', sans-serif`)
  - Must Not: Inline stiller veya ad-hoc hex kodları bileşenlere sızdırılmayacaktır
  - Verification: `global.css` import edildiğinde CSS değişkenlerinin tarayıcıda çözümlenmesi
  - Done: Tüm tasarım token'larının tek noktadan erişilebilir kılınması.

- [ ] **Task 3 / Service & Presentation Data Boundary Setup**:
  - Location: `src/data/presentationData.js`, `src/services/presentationService.js`
  - Consumes: FCL-001..FCL-006 allowlist verisi
  - Owns: Firma adı, yetkili servis statüsü, 3 approved hizmet ve direct-contact CTA eylem tanımları
  - Must Not: Stok, orijinal parça, SLA, mobil filo veya acil servis gibi uydurma qualifier'lar eklenmeyecektir
  - Verification: `presentationService.getCompanyInfo()` ve `getServices()` metotlarının doğru verileri döndürmesi
  - Done: Presentation katmanının veriden tamamen izole edilmesi.

- [ ] **Task 4 / Root Container Integration**:
  - Location: `src/App.jsx`, `src/main.jsx`
  - Consumes: `tokens.css` ve `presentationService.js`
  - Owns: Ana uygulama kabuğu layout zemin yerleşimi
  - Must Not: Sayfa seviyesinde karmaşık markup eklenmeyecektir
  - Verification: React root elementinin DOM'a hatasız render olması
  - Done: Temel layout zemininin hazırlanması.

## 9. State / Role / Responsive Coverage

- **Loading State**: `presentationService.js` veriyi senkron olarak static config'den döner, ileride asenkron `Promise` dönüşüne uygun imzaya sahiptir.
- **Error State**: Servis çağrılarında eksik anahtar varsa güvenli fallback objesi döndürülür.
- **Responsive Baseline**: `tokens.css` içerisinde `--container-max-width: 1200px` ve `--container-padding: 1.25rem` responsive container kuralları tanımlanmıştır.

## 10. Automated Verification

```bash
# Bağımlılıkların kurulması
npm install

# Vite dev sunucusu testi
npm run dev

# Derleme ve bundle kontrolü
npm run build
```

## 11. Manual QA / Debug Verification

- `src/styles/tokens.css` dosyasının tarayıcı geliştirici araçlarında CSS Değişkenlerini sorunsuz listelediğini doğrula.
- Node/JS konsolunda `presentationService.getServices()` çağrıldığında 3 approved hizmetin döküldüğünü denetle.

## 12. Acceptance / Exit Criteria

- [ ] `package.json` manifest'i Vite+React bağımlılıklarını eksiksiz içeriyor.
- [ ] `src/styles/tokens.css` tasarım token'ları `#1E2530`, `#3A475A`, `#D97706` değerleriyle tanımlı.
- [ ] `src/services/presentationService.js` FCL allowlist verilerini izole servis olarak sunuyor.
- [ ] `npm run build` komutu uyarısız ve hatasız `dist/` klasörü üretiyor.

## 13. Handoff / Stop Rule

`WAVE_00` tamamlandığında, altyapı ve presentation service boundary'si Wave 01 (Global Shell & Hero Presentation) geliştirmesi için hazır hale gelir. Dokümantasyon `CURRENT_STATUS.md` ve `NEXT_TASKS.md` güncellenerek devredilir.

---
## Wave Result

- **Result Status**: pending / not executed
