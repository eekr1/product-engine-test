# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_00: Foundation & Data Access Boundary Setup

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Modüler HTML/CSS mimarisi ve local mock static data adapter altyapısının (`companyService.js` ve `mockCompanyData.js`) sıfır dış bağımlılıkla ve temiz service/data access boundary ilkesine uygun biçimde kurulmasıdır.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_00
- **Name**: Foundation & Data Access Boundary Setup
- **Goal**: Modüler HTML/CSS mimarisi ve local mock static adapter altyapısının kurulması
- **Primary Deliverables**: `index.html`, `src/styles/index.css`, `src/services/mockCompanyData.js`, `src/services/companyService.js`
- **Upstream Boundary Consumed**: `INPUT_SNAPSHOT.md` & `TECH_CONTEXT.md`
- **Downstream Handoff**: `WAVE_01` için hazır `companyService` veri erişim arayüzü ve temel CSS değişkenleri

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Clean presentation-data access boundary setup | `clean presentation-data access boundary` | implementation-of | PASS |
| Local mock static data adapter setup | `local mock static data adapter` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

UI sunum bileşenleri (Hero, Services, Contact) verileri HTML veya JS component'i içinde hardcode etmemeli; veriye soyut bir servis katmanı üzerinden asenkron erişmelidir. Bu nedenle, tüm UI dalgalarından önce veri erişim mimarisi ve CSS temel değişkenleri bağımsız bir foundation dalgası olarak kurulmalıdır.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` (Section 7 & 10)
- `working-output/ai/PROJECT_BRAIN.md`
- `working-output/ai/PRODUCT_RULES.md`
- `working-output/ai/TECH_CONTEXT.md` (Section 3 & 4)
- `working-output/design/DESIGN_RULES.md` (Section 4 & 5)
- `working-output/waves/WAVE_MAP.md` (WAVE_00 Entry)
- `SOURCE_REGISTER.md` (FCL-001 - FCL-007)

## 5. Dependencies

- **Upstream Dependencies**: None.
- **Downstream Consumers**: `WAVE_01`, `WAVE_02`, `WAVE_03`, `WAVE_04`, `WAVE_05`.

## 6. Scope

### In Scope
- `index.html` temel yapısı ve responsive viewport ayarları.
- `src/styles/index.css` (CSS Custom Properties: antrasit/kömür renk paleti, turuncu accent, tipografi, reset, grid/flexbox kuralları).
- `src/services/mockCompanyData.js` (FCL-001 - FCL-007 kaynaklı firma, servis ve CTA verileri).
- `src/services/companyService.js` (`getCompanyInfo()` ve `getServices()` asenkron promise metodları).

### Out of Scope
- Gerçek backend, API uygulaması, database şeması.
- Hero, Services veya Contact UI bileşenlerinin HTML/CSS geliştirmeleri (`WAVE_01` - `WAVE_04` kapsamındadır).
- NPM paketleri veya ağır derleme bağımlılıkları.

## 7. Expected Result / Target Structure

```text
/ (Project Root)
├── index.html
└── src/
    ├── services/
    │   ├── mockCompanyData.js
    │   └── companyService.js
    └── styles/
        └── index.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Base HTML & Viewport Setup**
  - **Location/Responsibility**: `index.html`
  - **Parent Capability Relation**: `clean presentation-data access boundary` (implementation-of)
  - **Inputs/Dependencies**: `DESIGN_RULES.md` tipografi bağlantıları (`Inter` / `Outfit`).
  - **Behavior**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` ve Google Fonts importlarının eklenmesi. Main `#app` container'ının tanımlanması.
  - **Preserve/Must-Not**: Jenerik dış script kütüphaneleri eklenemez.
  - **FCL Boundary**: Sayfa başlığı "Trakya Teknik Makine — Kurumsal Web Sitesi Demo" (FCL-001).
  - **Verification**: Browser ile `index.html` açıldığında başlık ve font yüklemesi kontrol edilir.
  - **Done Result**: Temiz ve modüler HTML skeleton hazır.

- [ ] **Task 2: Global CSS Design Tokens & Base Reset Setup**
  - **Location/Responsibility**: `src/styles/index.css`
  - **Parent Capability Relation**: `clean presentation-data access boundary` (implementation-of)
  - **Inputs/Dependencies**: `DESIGN_RULES.md` renk ve tipografi kararları.
  - **Behavior**: `:root` altında `--bg-dark: #111518`, `--surface-dark: #1A2026`, `--accent-orange: #F26522`, `--text-main: #F4F6F8`, `--text-muted: #9AA5B1` değişkenlerinin tanımlanması; CSS reset ve box-sizing kurallarının yazılması.
  - **Preserve/Must-Not**: Lacivert/mavi jenerik renk paleti kullanılamaz.
  - **Verification**: CSS değişkenleri taranır ve renk/font değerleri doğrulanır.
  - **Done Result**: Projeye özgü endüstriyel tasarım sistemi CSS altyapısı hazır.

- [ ] **Task 3: Mock Static Data Object Definition (`mockCompanyData.js`)**
  - **Location/Responsibility**: `src/services/mockCompanyData.js`
  - **Parent Capability Relation**: `local mock static data adapter` (implementation-of)
  - **Inputs/Dependencies**: `SOURCE_REGISTER.md` FCL-001 - FCL-007.
  - **Behavior**: Export edilen frozen JS objesi:
    - `name`: "Trakya Teknik Makine" (FCL-001)
    - `status`: "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" (FCL-002)
    - `services`: 3 adet obje (`Yedek Parça Temini` FCL-003, `Yerinde Teknik Destek` FCL-004, `Makine Bakım ve Onarım` FCL-005)
    - `context`: "Trakya bölgesi endüstriyel makine teknik servis bağlamı" (FCL-006)
    - `contacts`: `phone` (`tel:`) ve `email` (`mailto:`) CTA verileri (FCL-007)
  - **Preserve/Must-Not**: FCL dışı hiçbir stok adedi, SLA süresi, mobil filo sayısı veya adres uydurulamaz.
  - **Verification**: Obje taranır ve FCL alanlarıyla tam eşleştiği doğrulanır.
  - **Done Result**: Bounded mock static data nesnesi hazır.

- [ ] **Task 4: Async Data Access Service Definition (`companyService.js`)**
  - **Location/Responsibility**: `src/services/companyService.js`
  - **Parent Capability Relation**: `clean presentation-data access boundary` (implementation-of)
  - **Inputs/Dependencies**: `mockCompanyData.js`.
  - **Behavior**: `getCompanyInfo()` ve `getServices()` metodları Promise döndürecek şekilde yazılır (simulated async delay ~50ms).
  - **Preserve/Must-Not**: Component'lerin `mockCompanyData.js`'ye doğrudan erişmesine izin verilmez; erişim `companyService` üzerinden yapılır.
  - **Verification**: `companyService.getCompanyInfo().then(data => console.log(data))` testi yapılır.
  - **Done Result**: Clean presentation-data boundary sağlayan servis katmanı hazır.

## 9. State / Role / Responsive Coverage

- **Data Loading State**: `companyService` metotları asenkron Promise yapısındadır.
- **Empty / Error State**: Veri bulunamadığında güvenli fallback / empty array döndürür.
- **Responsive Layer**: `index.css` temel responsive box model ve container layout kurallarını içerir.

## 10. Automated Verification

- Syntactic JS check: JS modüllerinde import/export sözdizimi doğrulanır.
- CSS linting / property check: `:root` değişkenlerinin varlığı kontrol edilir.

## 11. Manual QA / Debug Verification

- Browser konsolunda `import { companyService } from './src/services/companyService.js'` çalıştırılarak `getCompanyInfo()` ve `getServices()` çıktıları kontrol edilir.
- Dönüş verilerinin strictly FCL-001 - FCL-007 sınırlarında olduğu doğrulanır.

## 12. Acceptance / Exit Criteria

- [ ] `index.html` ve `index.css` temiz ve hatasız yükleniyor.
- [ ] `companyService.js` Presentation bileşenlerine asenkron veri erişim arayüzü sunuyor.
- [ ] Mock verilerde FCL dışı hiçbir firma gerçeği uydurulmamış.
- [ ] `WAVE_01` için veri ve stil altyapısı hazır.

## 13. Handoff / Stop Rule

`WAVE_00` tamamlandığında `companyService.js` ve `index.css` `WAVE_01` (Brand Identity & Primary Hero Presentation) dalgasına teslim edilir.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
