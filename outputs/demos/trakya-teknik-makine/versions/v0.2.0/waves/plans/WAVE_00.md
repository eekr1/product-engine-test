# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Setup

- **Status**: Ready for Execution
- **Goal**: Modüler presentation klasör şemasını, CSS design tokens kütüphanesini (`styles/tokens.css`) ve doğrulanmış FCL verilerini sunan `companyMockData.js` adapter servisini kurmak.

## 1. Why This Wave / Dependency Rationale

Bu dalga tüm UI yüzeylerinin ihtiyaç duyduğu teknik altyapıyı, renk/tipografi token'larını ve data adapter katmanını hazırlar. Sonraki dalgaların visual identity veya veri erişimi sorunu yaşamadan ilerlemesini sağlar.

## 2. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 3. Dependencies

- Yok (Projenin ilk uygulama dalgasıdır).

## 4. Scope

### In Scope
- Presentation klasör yapısının (`src/components/`, `src/data/`, `src/styles/`) oluşturulması.
- `styles/tokens.css` içinde CSS Custom Properties (endüstriyel çelik, grafit, güvenlik sarısı, tipografi, spacing) dondurulması.
- `src/data/companyMockData.js` adapter servisinin doğrulanmış FCL verileriyle (FCL-001..FCL-006) yazılması.
- HTML5 giriş şablonunun semantik olarak hazırlanması.

### Out of Scope
- Hero, Hizmetler ve İletişim detay arayüzlerinin üretilmesi (WAVE_01..03).
- Gerçek REST API veya veritabanı bağlantısı.

## 5. Expected Result / Target Structure

- `src/styles/tokens.css` (Tüm CSS değişkenleri)
- `src/data/companyMockData.js` (Firma, servislik ve hizmet nesneleri adapter'ı)
- `index.html` (Temel HTML5 şablonu)

## 6. Implementation Checklist

- [ ] TASK-001: Klasör şemasını kur ve HTML5 semantik boilerplate oluştur.
- [ ] TASK-002: `DESIGN_RULES.md` renk ve tipografi kararlarına uygun CSS token'larını `tokens.css` içine yaz.
- [ ] TASK-003: `companyMockData.js` dosyasını oluştur; `getCompanyInfo()`, `getServices()` ve `getContactInfo()` adapter fonksiyonlarını ekle.
- [ ] TASK-004: FCL doğruluğunu kontrol et (Disan Hidrolik Trakya Bölge Yetkili Servisi unvanı, 3 ana hizmet ismi).

## 7. State / Role / Responsive Coverage

- Breakpoint değişkenleri: `--bp-mobile: 320px`, `--bp-tablet: 768px`, `--bp-desktop: 1024px`, `--bp-wide: 1440px`.

## 8. Automated Verification

- Static file syntax check (HTML/CSS/JS hatasız yüklenme).

## 9. Manual QA / Debug Verification

- `companyMockData.js` fonksiyonlarının tarayıcı konsolunda doğru nesneleri döndürdüğünü doğrulama.

## 10. Acceptance / Exit Criteria

- `tokens.css` ve `companyMockData.js` eksiksiz oluşturulmuş olmalı.
- Mock adapter FCL verilerini tam ve hatasız döndürmeli.

## 11. Handoff / Stop Rule

- WAVE_00 tamamlandığında `CURRENT_STATUS.md` güncellenmeli ve `WAVE_01` aktif ilan edilmelidir.

---

## Wave Result

- Status: Pending Execution (Henüz çalıştırılmadı).
