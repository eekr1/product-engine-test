# Trakya Teknik Makine — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Data Boundary Setup)
- **Plan**: [WAVE_00.md](../waves/plans/WAVE_00.md)

## 2. Immediate Tasks

1. **TASK-001 (HTML Skeleton & CSS Tokens)**: `index.html` temel yapısını ve `styles/main.css` içindeki CSS değişkenlerini (`--bg-primary`, `--accent-amber` vb.) `DESIGN_RULES.md` doğrultusunda oluşturmak.
2. **TASK-002 (Layout Grid & Container)**: `styles/layout.css` yazarak 12 kolonlu responsive grid ve `.container` sınıflarını eklemek.
3. **TASK-003 (Data Source Object)**: `data/companyData.js` dosyasında doğrulanmış firma, 3 hizmet ve Disan Hidrolik yetkili servis statüsünü nesne olarak saklamak.
4. **TASK-004 (CompanyDataService Adapter)**: `scripts/companyDataService.js` modülünü yazarak `getCompanyInfo()`, `getServices()` arayüzlerini sunmak.

## 3. Dependencies / Preconditions

- `TASK-001` için baseline CSS değişkenlerinin `DESIGN_RULES.md` belgesinden okunması.
- `TASK-004` için `TASK-003` veri yapısının tamamlanmış olması.

## 4. Per-Task Done Criteria

- **TASK-001 Done**: `index.html` tarayıcıda açıldığında doğru antresit zemin rengi ve tipografi görünüyor.
- **TASK-002 Done**: Layout ızgarası farklı ekran boyutlarında doğru hizalanıyor.
- **TASK-003 Done**: `companyData.js` eksiksiz doğrulanmış verileri içeriyor.
- **TASK-004 Done**: `CompanyDataService.getServices()` çağrıldığında 3 ana hizmet objesini dönüyor.

## 5. Stop / Clarification Conditions

- Firma verilerinde çelişki tespit edilirse veya `WAVE_00` haricinde onaylanmamış backend kararı verilirse işlem durdurulur.
