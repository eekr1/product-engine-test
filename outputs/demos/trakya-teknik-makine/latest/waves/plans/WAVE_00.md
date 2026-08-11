# Wave Plan — WAVE_00: Foundation & Setup

## 1. Wave Identity

- **Wave ID:** `WAVE_00`
- **Wave Name:** Foundation & Setup
- **Target Phase:** Altyapı ve Veri Sınırı Kurulumu
- **Status:** Ready for Execution
- **Dependencies:** None (First Wave)

---

## 2. Objective

Projenin temel klasör yapısını, `DESIGN_RULES.md` içindeki renk/tipografi/spacing token'larını barındıran CSS altyapısını ve `TECH_CONTEXT.md` içindeki `DataService` mock adapter katmanını kurmak.

---

## 3. Scope Boundaries

### In Scope

- Proje dosya ağacının oluşturulması (`index.html`, `styles/`, `scripts/`, `services/`, `data/`).
- `styles/tokens.css` içinde CSS Custom Properties (tasarım token'ları) tanımı.
- `data/companyData.js` içinde doğrulanmış Trakya Teknik Makine firma, yetkili servis ve 3 temel hizmet verilerinin yapılandırılması.
- `services/dataService.js` içinde async DataService adapter arabiriminin kurulması.

### Out of Scope

- Komple UI layout ve responsive styling (`WAVE_01` kapsamındadır).
- Gerçek backend veya harici kütüphane kurulumu.

---

## 4. Detailed Tasks & Step-by-Step Instructions

1. **Task 0.1: Create Directory Structure**
   - Create root files: `index.html` (skeleton).
   - Create directories: `styles/`, `scripts/`, `services/`, `data/`, `assets/`.
2. **Task 0.2: Implement CSS Design Tokens**
   - Create `styles/tokens.css` carrying colors, typography, spacing, shadows, and surface variables as defined in `DESIGN_RULES.md`.
3. **Task 0.3: Setup Isolated Company Data**
   - Create `data/companyData.js` containing:
     - Company Name: "Trakya Teknik Makine"
     - Authorized Service Tag: "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi"
     - Services: "Yedek Parça Temini", "Yerinde Teknik Destek", "Makine Bakım ve Onarım".
     - Contact: Tel, E-mail, Address.
4. **Task 0.4: Build DataService Mock Adapter**
   - Create `services/dataService.js` exporting `getCompanyInfo()` and `getServices()`.

---

## 5. Acceptance Criteria

- [ ] `styles/tokens.css` tüm `DESIGN_RULES` renk ve tipografi değişkenlerini içeriyor.
- [ ] `data/companyData.js` mevcut sitedeki tüm doğrulanmış firma bilgilerini barındırıyor.
- [ ] `services/dataService.js` presentation katmanına temiz bir API sunuyor.
- [ ] Herhangi bir konsol hatası veya eksik bağımlılık bulunmuyor.
