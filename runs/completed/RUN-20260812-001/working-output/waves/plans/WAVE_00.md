# Trakya Teknik Makine — WAVE_00: Foundation & Data Boundary Setup

- **Status**: Ready for Execution
- **Goal**: Proje klasör ve dosya iskeletini oluşturmak, `DESIGN_RULES.md` uyarınca CSS tasarım token'larını kurmak, semantik HTML layout tabanını ve `CompanyDataService` mock veri servis katmanını kurmak.

## 1. Why This Wave / Dependency Rationale

Sonraki UI wave'lerinin (Hero, Hizmetler breakdown, Yetkili Servis kartı) tutarlı görsel stilde geliştirilebilmesi ve UI bileşenlerinin veriye doğrudan bağımlı olmadan modüler veri katmanından beslenebilmesi için altyapı ve veri servis sınırının en başta kurulması gerekmektedir.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)

## 3. Dependencies

- **Preceding Waves**: Yok (İlk wave).
- **Required Baseline**: Approved Input & Planning Profiles.

## 4. Scope

### In Scope

- `index.html` temel HTML5 semantik iskeletinin oluşturulması (`<header>`, `<main>`, `<section>`, `<footer>`).
- `styles/main.css` içinde CSS Variables (renk paleti, tipografi ölçeği, spacing adımları, surface katmanları) tanımlanması.
- `styles/layout.css` içinde 12 kolonlu grid ve container sınıflarının yazılması.
- `data/companyData.js` içinde doğrulanmış firma, 3 ana hizmet ve Disan Hidrolik yetkili servis bilgilerinin veri nesnesi olarak tanımlanması.
- `scripts/companyDataService.js` içinde veriyi soyutlayan `CompanyDataService` sınıfı/modülünün yazılması.
- Yerel dev/preview ortamında doğrudan tarayıcı ile açılabilirliğin doğrulanması.

### Out of Scope

- Karmaşık UI kart tasarımlarının tamamlanması (WAVE_01 ve WAVE_02'de yapılacaktır).
- Gerçek REST/GraphQL API bağlantısı veya veritabanı kurulumu.

## 5. Expected Result / Target Structure

```text
index.html
styles/
├── main.css            (CSS variables, typography, reset)
└── layout.css          (Grid, container, responsive helpers)
data/
└── companyData.js      (Verified static data object)
scripts/
├── companyDataService.js (Data service adapter layer)
└── app.js              (App entry point & initialization)
```

## 6. Implementation Checklist

### Foundation & Styling Tokens
- [ ] `index.html` semantik HTML5 iskeletini oluştur (`lang="tr"`, viewport meta, font bağlantıları).
- [ ] `styles/main.css` oluştur; `--bg-primary: #111315`, `--surface-1: #1A1D21`, `--accent-amber: #FF6B00`, `--accent-blue: #0A84FF` token'larını ekle.
- [ ] Inter ve Outfit/Space Grotesk Google Fonts bağlantılarını `index.html` başlığına ekle.
- [ ] CSS reset ve temel tipografi kurallarını `main.css`'e ekle.
- [ ] `styles/layout.css` yaz; `.container` (max-width: 1200px), `.grid-12`, `.flex-between` yardımcı sınıflarını kur.

### Data Layer & Service Boundary
- [ ] `data/companyData.js` oluştur; mevcut sitedeki doğrulanmış firma bilgilerini (Trakya Teknik Makine, adres, tel, email), Disan Hidrolik yetkili servis statüsünü ve 3 temel hizmeti (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) nesne olarak tanımla.
- [ ] `scripts/companyDataService.js` oluştur; `getCompanyInfo()`, `getServices()`, `getServiceById(id)`, `getAuthorizedPartnerInfo()` metotlarını sağlayan `CompanyDataService` modülünü yaz.
- [ ] `scripts/app.js` oluştur; sayfa yüklendiğinde `CompanyDataService` servisinin çalıştığını `console.log` ve temel DOM hook'u ile doğrula.

## 7. State / Role / Responsive Coverage

- **Mobile View Readiness**: Meta viewport doğru ayarlanmış ve temel font ölçüleri mobil uyumlu ölçeklenmiştir.
- **Accessibility Foundation**: `:focus-visible` için amber renkli outline tanımlanmıştır.

## 8. Automated Verification

- Tarayıcı geliştirici konsolunda script yükleme hatası veya eksik bağımlılık uyarısı olmaması.

## 9. Manual QA / Debug Verification

- `index.html` dosyası tarayıcıda açıldığında siyah/antrasit zemin rengi, beyaz tipografi ve konsolda `CompanyDataService initialized successfully` mesajı görülmelidir.

## 10. Acceptance / Exit Criteria

- [x] HTML, CSS ve JS klasör iskeleti oluşturuldu.
- [x] CSS değişkenleri `DESIGN_RULES.md` paletiyle birebir uyumlu.
- [x] `companyData.js` ve `CompanyDataService` veriyi hatasız sunuyor.
- [x] Sıfır konsol hatası ile tarayıcıda doğrudan çalışıyor.

## 11. Handoff / Stop Rule

`WAVE_00` tamamlandıktan sonra `WAVE_01` (Hero & Hizmetler Breakdown UI) aşamasına geçilir.

---

## Wave Result

> PENDING EXECUTION — Bu bölüm wave çalıştırıldıktan sonra doldurulacaktır.
