# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation, Technical Setup & Local Data Boundary Architecture)
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

- [ ] **Task 00.1**: HTML5 & Modular Folder Scaffold (`index.html`, `src/main.js`).
- [ ] **Task 00.2**: Industrial Design Tokens & CSS Architecture (`src/styles/tokens.css`, `src/styles/reset.css`, `src/styles/main.css`).
- [ ] **Task 00.3**: Local Data Store & Service Adapter Boundary (`src/data/mockData.js`, `src/services/dataService.js`).

## 3. Dependencies / Preconditions

- Proje kütüphane bağımlılığı gerektirmemektedir (Vanilla Web APIs).
- `WAVE_00` tam bağımsız başlangıç dalgasıdır.

## 4. Per-Task Done Criteria

- **Task 00.1**: Tarayıcıda `index.html` açıldığında 0 konsol hatası ile `main.js` yüklenmesi.
- **Task 00.2**: CSS custom properties (`:root`) ve grid değişkenlerinin hatasız uygulanması.
- **Task 00.3**: `dataService.getCompanyInfo()` ve `dataService.getServices()` metodlarının dondurulmuş approved veriyi döndürmesi.

## 5. Stop / Clarification Conditions

- Approved scope dışına çıkan backend, veritabanı veya sahte kütüphane talebi olursa durulacak ve clarification istenecektir.
