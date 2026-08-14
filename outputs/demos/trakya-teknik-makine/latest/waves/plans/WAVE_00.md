# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Environment Setup

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Proje altyapısının, endüstriyel CSS tasarım sistemi token'larının ve presentation-service ayrımını sağlayan `CompanyService` mock adapter mimarisinin kurulması.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_00
- **Name**: Foundation & Environment Setup
- **Parent Goal**: Proje altyapısının, endüstriyel CSS tasarım sistemi token'larının ve presentation-service ayrımını sağlayan `CompanyService` mock adapter mimarisinin kurulması.
- **Committed Capabilities**:
  - Modüler frontend proje yapısı | SCP-001 | Modern responsive kurumsal demo altyapısı | PASS
  - Service layer & Local data adapter boundary (`CompanyService`, `LocalCompanyAdapter`) | SCP-006 | Sahte backend uydurmadan data-access boundary | PASS
  - Temel mock veri modelleri (`CompanyData`, `ServicesData`) | SCP-007 | Doğrulanmış firma verilerinin korunması | PASS

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Modüler HTML5/CSS/JS iskeleti kurulumu | Modüler frontend proje yapısı | implementation-of | PASS |
| `css/main.css` design tokens ve CSS Grid/Flexbox baseline | Modüler frontend proje yapısı | detail-of | PASS |
| `CompanyService` interface & `LocalCompanyAdapter` mimarisi | Service layer & Local data adapter boundary | implementation-of | PASS |
| `CompanyData.js` ve `ServicesData.js` doğrulanmış mock verileri | Temel mock veri modelleri | implementation-of | PASS |
| Foundation sanity testi (konsol/data binding doğrulaması) | Modüler frontend proje yapısı | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_00` proje foundation adımıdır. Sonraki UI wave'lerinin (`WAVE_01`, `WAVE_02`, `WAVE_03`) tutarlı CSS token'larını ve `CompanyService` veri katmanını tüketebilmesi için öncelikle bu temel mimarinin dondurulması zorunludur.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- None (Initial Foundation).

## 6. Scope

### In Scope
- Proje klasör ve dosya yapısının oluşturulması (`index.html`, `css/`, `js/`).
- `css/main.css` içinde `DESIGN_RULES.md` ile tanımlı endüstriyel renk paleti (`#0F141C`, `#1A212D`, `#FFB800`, `#F1F5F9`), tipografi ve spacing token'larının tanımlanması.
- Presentation katmanından bağımsız `js/services/CompanyService.js` ve `js/adapters/LocalCompanyAdapter.js` katmanının kurulması.
- Trakya Teknik Makine doğrulanmış bilgilerini ve 3 ana hizmet detayını barındıran `js/data/CompanyData.js` ve `js/data/ServicesData.js` modüllerinin oluşturulması.

### Out of Scope
- Spesifik UI bileşenlerinin (Hero, Services, Contact) görsel olarak tamamlanması.
- Gerçek REST API veya veritabanı bağlantısı.
- Form submit backend'leri, canlı harita veya WhatsApp entegrasyonları.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html
├── css/
│   └── main.css
└── js/
    ├── data/
    │   ├── CompanyData.js
    │   └── ServicesData.js
    ├── adapters/
    │   └── LocalCompanyAdapter.js
    └── services/
        └── CompanyService.js
```

## 8. Implementation Checklist

- [ ] `index.html` temel HTML5 iskeletini responsive meta tag'leri ve temiz layout container'ı ile oluştur (`SCP-001`).
- [ ] `css/main.css` içinde `DESIGN_RULES.md` renk ve tipografi değişkenlerini tanımla (`--bg-primary: #0F141C`, `--bg-surface: #1A212D`, `--accent-amber: #FFB800`, `--text-primary: #F1F5F9`) (`SCP-001`).
- [ ] `js/data/CompanyData.js` dosyasında Trakya Teknik Makine doğrulanmış firma bilgilerini, Disan Hidrolik yetkili servis unvanını ve iletişim bilgilerini dondur (`FCL-001`, `FCL-002`, `FCL-004`, `SCP-007`).
- [ ] `js/data/ServicesData.js` dosyasında 3 temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Bakım & Onarım) detaylı metinlerini ve teknik özelliklerini dondur (`FCL-003`, `SCP-007`).
- [ ] `js/adapters/LocalCompanyAdapter.js` sınıfını oluştur ve mock veriyi Asenkron Promise dönen metodlarla paketle (`SCP-006`).
- [ ] `js/services/CompanyService.js` arayüzünü oluşturarak presentation bileşenlerinin `getCompanyInfo()` ve `getServices()` metodlarını tüketmesini sağla (`SCP-006`).

## 9. State / Role / Responsive Coverage

- **Data Loading State**: `CompanyService` asenkron veri çağrılarında Promise simülasyonu sağlansın.
- **Data Error State**: Local adapter veri bulamadığında fallback mock obje dönsün; uygulama çökmesin.
- **Responsive Baseline**: `css/main.css` içinde mobile-first CSS grid/flexbox kuralları ve max-width container'lar hazırlansın.

## 10. Automated Verification

- Lint & Syntax Check: Projedeki HTML, CSS ve JS dosyalarında sözdizimi hatası olmadığını doğrula.
- Data Service Promise Test: Konsol üzerinden `CompanyService.getCompanyInfo()` ve `CompanyService.getServices()` çağrılarının doğru veriyi döndüğünü doğrula.

## 11. Manual QA / Debug Verification

- `index.html` tarayıcıda açıldığında konsolda herhangi bir yükleme veya JS hatası olmamalıdır.
- Design tokens (`--bg-primary`, `--accent-amber`) uygulandığı doğrulanmalıdır.

## 12. Acceptance / Exit Criteria

- [ ] Proje klasör yapısı kurulmuş ve HTML/CSS/JS dosyaları hatasız yükleniyor.
- [ ] `CompanyService` katmanı presentation kodundan bağımsız çalışıyor ve doğrulanmış firma verisini döndürüyor.
- [ ] Tasarım token'ları `DESIGN_RULES.md` renk ve tipografi kararlarıyla eşleşiyor.

## 13. Handoff / Stop Rule

`WAVE_00` tamamlandığında, `WAVE_01` (Brand & Primary Entry / Hero Presentation) geliştirmesine başlamak için hazır bir temel teslim edilir.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state)
