# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_00: Project Foundation & Service/Data Architecture

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Proje geliştirme ortamını, HTML5/CSS3/JS yapısını, HSL design token'larını ve frontend `CompanyDataService` / `MockCompanyAdapter` veri katmanını kurmak.

## 1. Parent Wave Map Entry

- **Name**: `WAVE_00: Project Foundation & Service/Data Architecture`
- **Goal**: Temiz frontend projesi, CSS design system token'ları ve mock data-access boundary kurulumu
- **Why Separate**: UI bileşenleri geliştirilmeden önce temiz bir service/data-access boundary ve CSS tasarım temeli kurularak presentation katmanının veriye hardcode bağımlı olması önlenir.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Folder structure & HTML/CSS/JS entry setup | clean presentation service/data-access boundary | implementation-of | PASS |
| HSL Design Token CSS variables (`design-tokens.css`) | clean presentation service/data-access boundary | detail-of | PASS |
| `CompanyDataService` interface | clean presentation service/data-access boundary | implementation-of | PASS |
| `MockCompanyAdapter` & static content module (`companyData.js`) | mock data adapter | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_00`, tüm downstream UI ve sunum dalgalarının (`WAVE_01` .. `WAVE_04`) üzerine inşa edileceği mimari ve tasarım temelidir. Presentation katmanının veriyi kendi içine gömmesini engeller (`PR-UX-03`, `DEC-02`).

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- None (Baseline Foundation).

## 6. Scope

### In Scope
- Proje klasör yapısının (`src/styles/`, `src/services/`, `src/data/`, `src/components/`, `public/`) kurulması.
- `src/styles/design-tokens.css` içinde `DESIGN_RULES.md` uyarınca HSL renk rolleri, tipografi ölçeği ve spacing variables tanımlanması.
- `src/data/companyData.js` içinde approved `FCL-01` .. `FCL-06` verilerini taşıyan mock içerik modülünün oluşturulması.
- `src/services/CompanyDataService.js` içinde UI katmanının tüketeceği veri arayüzünün oluşturulması.

### Out of Scope
- Hero, Services, Contact UI bileşenlerinin ve sayfaların tamamlanması.
- Gerçek backend API veya veritabanı bağlantısı.

## 7. Expected Result / Target Structure

```text
/
├── index.html
├── src/
│   ├── styles/
│   │   ├── design-tokens.css
│   │   └── main.css
│   ├── data/
│   │   └── companyData.js
│   ├── services/
│   │   └── CompanyDataService.js
│   └── main.js
```

## 8. Implementation Checklist

- [ ] **Task 00.1 (Project Skeleton & Entry)**:
  - **Location/Responsibility**: `index.html`, `src/main.js`.
  - **Parent Capability Relation**: `implementation-of` -> `clean presentation service/data-access boundary`.
  - **Implementation Behavior**: Standart HTML5 şablonu, utf-8 karakter seti (`tr`), viewport meta etiketleri ve Google Fonts (`Inter`, `Outfit`) yüklemesi.
  - **Preserve/Must Not**: 3. parti ağır kütüphaneler eklenmeyecektir.
  - **Verification**: `index.html` tarayıcıda temiz yüklenmelidir.
- [ ] **Task 00.2 (Design Tokens & Base CSS)**:
  - **Location/Responsibility**: `src/styles/design-tokens.css`, `src/styles/main.css`.
  - **Parent Capability Relation**: `detail-of` -> `clean presentation service/data-access boundary`.
  - **Implementation Behavior**: `DESIGN_RULES.md` içindeki `hsl(215, 28%, 12%)` Dark Industrial surface, `hsl(38, 92%, 50%)` Hydraulic Gold accent ve font variables tanımlanması.
  - **Verification**: CSS değişkenleri DOM tarafından erişilebilir olmalıdır.
- [ ] **Task 00.3 (Mock Data Module & Service Boundary)**:
  - **Location/Responsibility**: `src/data/companyData.js`, `src/services/CompanyDataService.js`.
  - **Parent Capability Relation**: `implementation-of` -> `mock data adapter`.
  - **Implementation Behavior**: Approved `FCL-01` .. `FCL-06` bilgilerinin `companyData.js` içinde dondurulması ve `CompanyDataService.getCompanyInfo()`, `getServices()`, `getContactInfo()` metotlarının export edilmesi.
  - **FCL Boundary**: Metinler yalnız approved FCL zinciriyle sınırlı kalmalıdır (stok, mobil filo, SLA vb. uydurulamaz).
  - **Verification**: `CompanyDataService` konsolda çağrıldığında doğru nesneleri dönmelidir.

## 9. State / Role / Responsive Coverage

- **Loading State**: `CompanyDataService` veriyi senkron/asenkron döndürme hazırlığına sahip olmalıdır.
- **Responsive Baseline**: `design-tokens.css` içinde responsive font ve spacing ölçekleri hazır olmalıdır.

## 10. Automated Verification

- Project file check: Required baseline files exist.
- Syntax check: Clean JS/CSS syntax without parsing errors.

## 11. Manual QA / Debug Verification

- `index.html` doğrudan tarayıcıda açıldığında fontlar ve CSS variables hatasız yükleniyor mu?
- `CompanyDataService` çağrıları `FCL-01` .. `FCL-06` metinlerini doğru dönüyor mu?

## 12. Acceptance / Exit Criteria

- [ ] `design-tokens.css` ve `main.css` eksiksiz oluşturuldu.
- [ ] `companyData.js` ve `CompanyDataService.js` yazıldı ve doğrulandı.
- [ ] Presentation katmanı için temiz service boundary hazırlandı.

## 13. Handoff / Stop Rule

- `WAVE_00` tamamlandığında, `WAVE_01` (Hero & Corporate Identity Surface) geliştirmesine geçilmeye hazır temiz bir altyapı teslim edilir.

---

## Wave Result

- **Execution Status**: Pending Execution
- **Output Artifacts**: `src/styles/design-tokens.css`, `src/services/CompanyDataService.js`, `src/data/companyData.js`, `index.html`.
