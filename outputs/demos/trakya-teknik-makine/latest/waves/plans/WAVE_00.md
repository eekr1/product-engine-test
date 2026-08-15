# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_00: Foundation, Technical Setup & Local Data Boundary Architecture

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Proje klasör yapısının, modüler CSS mimarisinin, tasarım token'larının ve local mock data adapter katmanının kurulması.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_00
Name: Foundation, Technical Setup & Local Data Boundary Architecture
Goal: Proje klasör yapısının, modüler CSS mimarisinin, tasarım token'larının ve local mock data adapter katmanının kurulması.
Why Separate: Kullanıcı yüzeyleri geliştirilmeden önce temiz bir presentation-data ayrımı ve styling tabanı kurulmalıdır.
Committed Capabilities:
  - HTML5 / Vanilla CSS / Vanilla JS proje bootstrapped yapısı | SCP-001 | IN_SCOPE | YES | Kurumsal frontend altyapısı | PASS | PASS | PASS
  - Local static mock data adapter (CompanyService, ServicesDataService) | SCP-006 | IN_SCOPE | YES | Mock local data adapter | PASS | PASS | PASS
  - Industrial design token'ları (tokens.css) | SCP-008 | IN_SCOPE | YES | Design system altyapısı | PASS | PASS | PASS
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Proje klasör ve dosya altyapısı (`index.html`, `src/`) | HTML5 / Vanilla CSS / Vanilla JS altyapısı | implementation-of | PASS |
| CSS Custom Properties & Design Tokens (`tokens.css`, `main.css`) | Industrial design token'ları (`tokens.css`) | implementation-of | PASS |
| Local Mock Data Adapter (`mockData.js`, `dataService.js`) | Local static mock data adapter (`CompanyService`) | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Presentation bileşenleri (Hero, Services, Contact) doğrudan hardcoded mock veri veya dağınık CSS stilleri taşımamalıdır. Gelecekte gerçek bir API eklendiğinde presentation katmanı değişmeden adaptör değiştirilebilmelidir. Bu nedenle altyapı ve veri katmanı ilk dalga olarak kurulmalıdır.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md`
- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `tech/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`

## 5. Dependencies

- None (`project_state: new`).

## 6. Scope

### In Scope
- Proje klasör hiyerarşisinin oluşturulması (`index.html`, `src/styles/`, `src/data/`, `src/services/`, `src/ui/`).
- Design token'larının ve CSS reset yapısının tanımlanması (`tokens.css`, `reset.css`, `main.css`).
- Local static mock verinin dondurulması (`mockData.js`).
- Data Service adapter arayüzünün kurulması (`dataService.js`).

### Out of Scope
- Kullanıcı yüzeyi ekranlarının detaylı bileşenleri (WAVE_01..WAVE_03'e aittir).
- Gerçek backend API, veritabanı veya sunucu istekleri.
- Harici CSS/JS kütüphaneleri.

## 7. Expected Result / Target Structure

```text
├── index.html
├── src/
│   ├── data/
│   │   └── mockData.js
│   ├── services/
│   │   └── dataService.js
│   ├── styles/
│   │   ├── reset.css
│   │   ├── tokens.css
│   │   └── main.css
│   └── main.js
```

## 8. Implementation Checklist

- [ ] **Task 1: HTML5 & Modular Folder Scaffold**
  - **Location / Responsibility**: `index.html`, `src/main.js`
  - **Parent Capability Relation**: implementation-of (HTML5 / Vanilla CSS / Vanilla JS altyapısı)
  - **Dependencies**: None
  - **Behavior**: Clean semantik HTML5 doküman yapısı ve ES6 native module giriş noktası (`main.js`).
  - **Preserve / Must Not**: Third-party kütüphane eklenmeyecek.
  - **Done Result**: Browser `index.html` açıldığında konsolda hatasız `main.js` yüklenmesi.

- [ ] **Task 2: Industrial Design Tokens & CSS Architecture**
  - **Location / Responsibility**: `src/styles/tokens.css`, `src/styles/reset.css`, `src/styles/main.css`
  - **Parent Capability Relation**: implementation-of (Industrial design token'ları)
  - **Dependencies**: Task 1
  - **Behavior**: DESIGN_RULES ile uyumlu renkler (`#1E293B`, `#0F172A`, `#D97706`), tipografi ölçekleri ve layout değişkenlerinin `:root` seviyesinde tanımlanması.
  - **Done Result**: CSS token'larının ve modern reset kurallarının hatasız yüklenmesi.

- [ ] **Task 3: Local Data Store & Service Adapter Boundary**
  - **Location / Responsibility**: `src/data/mockData.js`, `src/services/dataService.js`
  - **Parent Capability Relation**: implementation-of (Local static mock data adapter)
  - **Dependencies**: Task 1
  - **Behavior**: Approved firma bilgisi (Trakya Teknik Makine & Disan Yetkili Servisi) ve 3 approved hizmetin in-memory js nesneleri olarak saklanması; `CompanyService` ve `ServicesDataService` fonksiyonlarının verilere soyutlanmış erişim sunması.
  - **Preserve / Must Not**: FCL dışı uydurma veri eklenmeyecek.
  - **Done Result**: `dataService.getCompanyInfo()` ve `dataService.getServices()` çağrılarının dondurulmuş approved nesneleri dondurması.

## 9. State / Role / Responsive Coverage

- **Data Loading State**: In-memory senkron nesne dönüşü.
- **Error State**: Veri bulunamadığı durumda konsol hatası üretmeden boş güvenli varsayılan nesne dönmesi.
- **Responsive Baseline**: CSS reset ve `:root` değişkenlerinin tüm ekran genişliklerinde uygulanabilir olması.

## 10. Automated Verification

- [ ] Static HTML/CSS/JS syntax check (Console error `0`).
- [ ] Modular ES6 imports verification.

## 11. Manual QA / Debug Verification

- [ ] Browser'da `index.html` doğrudan açıldığında veya lightweight dev server ile çalıştırıldığında sorunsuz yüklenme.
- [ ] JS Console üzerinden `window.dataService` fonksiyon çağrılarının doğrulanması.

## 12. Acceptance / Exit Criteria

- [x] Proje klasör yapısı ve modüler stiller hazır.
- [x] Approved marka ve 3 approved hizmet verisi `mockData.js` içinde donduruldu.
- [x] Data Service katmanı presentation katmanından bağımsızlaştırıldı.

## 13. Handoff / Stop Rule

- `WAVE_00` tamamlandıktan sonra `WAVE_01` (Hero Section) bu altyapıyı ve dataService katmanını doğrudan tüketebilir.

---

## Wave Result

- **Status**: Pending Execution
