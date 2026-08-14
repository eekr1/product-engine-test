# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Service Boundary Setup)
- **Plan**: [WAVE_00.md](../waves/plans/WAVE_00.md)

## 2. Immediate Tasks

- [ ] **Task 00.1**: Baseline HTML5 shell structure setup (`index.html` ve `reset.css`).
- [ ] **Task 00.2**: Design tokens CSS variables implementation (`src/styles/tokens.css` — `#0F141C`, `#FF6B00`, Inter).
- [ ] **Task 00.3**: Static data source structure setup (`src/data/companyData.json` — FCL-01 .. FCL-06).
- [ ] **Task 00.4**: `MachineService` static data adapter implementation (`src/services/machineService.js`).

## 3. Dependencies / Preconditions

- `WAVE_00` projenin ilk dalgasıdır; `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` doğrulanmış verilerini tüketir.

## 4. Per-Task Done Criteria

- **Task 00.1 Done**: Tarayıcıda `index.html` temel yapısı sorunsuz yüklenmeli.
- **Task 00.2 Done**: `tokens.css` içindeki CSS değişkenleri `:root` üzerinde hazır olmalı.
- **Task 00.3 Done**: `companyData.json` 3 temel hizmeti ve Disan Hidrolik yetkili servis bilgisini içermeli.
- **Task 00.4 Done**: `MachineService.getServices()` async fonksiyonu 3 hizmet alanını başarıyla döndürmeli.

## 5. Stop / Clarification Conditions

- `WAVE_00` scope'u dışına çıkan herhangi bir UI bileşeni veya sahte API entegrasyonu tespit edilirse çalışma durdurulur.
