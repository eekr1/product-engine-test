# Trakya Teknik Makine — WAVE_00: Foundation & Design System Setup

- **Status**: Ready for Execution
- **Goal**: Projenin HTML/CSS/JS klasör hiyerarşisini, `DESIGN_RULES.md` uyumlu HSL renk ve tipografi token'larını, responsive layout kabuğunu ve mock service data adapter yapısını kurmak.

## 1. Why This Wave / Dependency Rationale

Proje geliştirmesinin throwaway kod oluşturmadan, sürdürülebilir bir mimari ile başlayabilmesi için önce tasarım sistemi token'larının, layout kabuğunun ve presentation ↔ data layer boundary'sinin kurulması gerekmektedir.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)

## 3. Dependencies

- Approved Project Intake (`inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`)

## 4. Scope

### In Scope

- CSS Custom Properties (`:root` tokens: colors, typography, spacing, shadows, radii).
- Global reset, box-sizing ve base typography stilleri.
- Decoupled mock service adapter (`dataService.js` / static data store).
- Ana HTML layout iskeleti (`<header>`, `<main>`, `<footer>` semantik alanları).
- Fluid container ve responsive grid utility sınıfları.

### Out of Scope

- Hero, Hizmetler ve İletişim içerik bölümlerinin tam görsel uygulaması (WAVE_01, WAVE_02, WAVE_03).

## 5. Expected Result / Target Structure

```text
working-output/ (veya hedef proje klasörü)
├── index.html
├── css/
│   ├── variables.css   (design tokens)
│   ├── reset.css       (css reset & base)
│   └── layout.css      (grid & containers)
└── js/
    ├── data.js         (mock data source)
    └── service.js      (data access boundary)
```

## 6. Implementation Checklist

- [ ] CSS değişkenleri (`variables.css`) oluşturulacak: HSL renk paleti, spacing birimleri, tipografi ölçekleri ve border-radius değerleri.
- [ ] CSS reset ve temel stil tanımları (`reset.css`) yazılacak.
- [ ] Responsive grid ve container layout sınıfları (`layout.css`) hazırlanacak.
- [ ] `data.js` dosyası oluşturulacak; firma bilgileri, Disan Hidrolik yetkili servis metni ve 3 hizmet tanımı mock obje olarak yazılacak.
- [ ] `service.js` dosyası oluşturulacak; `getCompanyInfo()`, `getServicesList()`, `getContactInfo()` API arayüz fonksiyonları tanımlanacak.
- [ ] `index.html` temel semantik HTML5 iskeleti kurulacak ve CSS/JS dosyaları bağlanacak.

## 7. State / Role / Responsive Coverage

- Dark mode / industrial slate teması varsayılan olarak CSS variable seviyesinde tanımlanır.
- Responsive breakpoints (`576px`, `768px`, `1024px`, `1200px`) CSS medya sorgularında tanımlanır.

## 8. Automated Verification

- Linting / Syntax Validation: Standard HTML/CSS/JS syntax kontrolü.

## 9. Manual QA / Debug Verification

- Tarayıcıda `index.html` açıldığında CSS değişkenlerinin doğru yüklendiği ve konsolda `service.getCompanyInfo()` fonksiyonunun mock veriyi döndürdüğü doğrulanacak.

## 10. Acceptance / Exit Criteria

- [ ] `variables.css` içinde `DESIGN_RULES.md` renk ve tipografi token'ları tanımlanmış.
- [ ] `service.js` presentation katmanından bağımsız biçimde mock veriyi sunuyor.
- [ ] `index.html` semantik yapısı ve responsive container yapısı hazır.
- [ ] Hiçbir presentation component'i mock veriyi doğrudan HTML içine sabit olarak gömmüyor.

## 11. Handoff / Stop Rule

`WAVE_00` tamamlandığında `WAVE_01` (Hero Section & Corporate Trust Surface) uygulanmasına geçilebilir.

---

## Wave Result

Status: PENDING EXECUTION
