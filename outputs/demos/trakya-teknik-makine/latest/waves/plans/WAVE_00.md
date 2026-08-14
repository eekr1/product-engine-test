# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Design System Setup

- **Status**: Ready for Execution
- **Goal**: Proje altyapısını, `DESIGN_RULES.md` token'larını (CSS Custom Properties), klasör yapısını ve `companyService` mock adapter katmanını kurmak.

## 1. Why This Wave / Dependency Rationale
Projenin sonraki tüm yüzeyleri (Hero, Hizmetler, İletişim) ortak tasarım jetonlarına (CSS jetonları) ve soyutlanmış veri katmanına (`companyService`) ihtiyaç duyar. Bu temeller kurulmadan UI geliştirmeye başlamak kod tekrarına ve bozuk veri mimarisine yol açar.

## 2. Canonical Sources to Read
- [README.md](../../README.md)
- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 3. Dependencies
- Yok (İlk dalga).

## 4. Scope

### Scope References
- `SCP-001`: Responsive Frontend Demo
- `SCP-006`: Integration-ready Service/Data Boundary Yapısı
- `SCP-007`: Gerçek Firma Bilgilerinin Korunması (`trakyateknikmakine.com`)

### In Scope
- Klasör ve dosya düzeninin oluşturulması (`index.html`, `styles/`, `src/services/`, `src/data/`).
- CSS Custom Properties (`styles/main.css`) jetonlarının kurulması (`#0F172A` zemin, `#F59E0B` aksan, `Space Grotesk` & `Inter` tipografi).
- Statik firma ve hizmet verilerinin `src/data/companyData.js` dosyasına tanımlanması (`FCL-001` - `FCL-006` sınırında).
- `src/services/companyService.js` soyutlama katmanının yazılması.

### Out of Scope
- Son kullanıcı yüzey bileşenlerinin tamamlanması (Header, Hero, Services, Contact - `WAVE_01` ila `WAVE_03` işidir).
- Gerçek backend veya veritabanı bağlantısı (`SCP-009`).

## 5. Expected Result / Target Structure
```text
/
├── index.html                     (Ana kabuk ve font bağlantıları)
├── styles/
│   └── main.css                   (CSS Custom Properties & Reset)
└── src/
    ├── data/
    │   └── companyData.js         (FCL sınırında yerel veri nesnesi)
    ├── services/
    │   └── companyService.js      (UI için soyut veri servis adapter'ı)
    └── config.js                  (Çevre / config parametreleri)
```

## 6. Implementation Checklist

- [ ] **Task 1 (Project Scaffolding)**: `index.html` ana kabuğunun ve semantik HTML5 yapısının oluşturulması. (Scope Ref: `SCP-001`)
- [ ] **Task 2 (Design Tokens & CSS Reset)**: `styles/main.css` içinde `DESIGN_RULES.md` renk ve tipografi jetonlarının tanımlanması. (Scope Ref: `SCP-001`)
- [ ] **Task 3 (Data Object Definition)**: `src/data/companyData.js` dosyasında `FCL-001` - `FCL-006` doğrulanmış verilerinin tanımlanması. (Scope Ref: `SCP-007`)
- [ ] **Task 4 (Service Adapter Layer)**: `src/services/companyService.js` servis metodlarının (`getCompanyInfo`, `getServices`, `getContactInfo`) yazılması. (Scope Ref: `SCP-006`)

## 7. State / Role / Responsive Coverage
- **State**: Mock data yükleme durumu, hata durumu yönetimi.
- **Responsive**: Mobil, tablet ve masaüstü CSS sıfırlama ve jeton tanımları.

## 8. Automated Verification
- Terminal / lint kontrolü: `styles/main.css` geçerli CSS syntax'ına sahip olmalı.
- Module Import: `companyService.js` ES Module olarak hatasız yüklenebilmeli.

## 9. Manual QA / Debug Verification
- Tarayıcı konsolunda `companyService.getCompanyInfo()` çağrıldığında firma verilerini eksiksiz dönmelidir.
- Fontlar (`Space Grotesk` ve `Inter`) tarayıcıda yüklenebilmelidir.

## 10. Acceptance / Exit Criteria
- [ ] `index.html` ve CSS jetonları hazırdır.
- [ ] `companyService` mock adapter'ı yerel verileri doğru ve hatasız döndürmektedir.
- [ ] Hiçbir doğrulanmamış bilgi veri katmanına sızmamıştır.

## 11. Handoff / Stop Rule
`WAVE_00` tamamlandıktan sonra `WAVE_01` (Primary Entry & Corporate Trust) başlatılabilir.

---
## Wave Result
*Status*: Pending Execution (Awaiting Wave Run Execution)
