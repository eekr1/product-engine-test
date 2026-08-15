# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Data Access Boundary)
- **Plan**: [WAVE_00.md](../waves/plans/WAVE_00.md)

## 2. Immediate Tasks

- [ ] **Task 0.1**: HTML5 scaffolding (`index.html`) ve CSS design tokens (`styles/main.css`) dosya yapısını kurmak.
- [ ] **Task 0.2**: Onaylı 3 hizmet verisini ve firma bilgilerini içeren `src/data/companyData.js` static store nesnesini oluşturmak.
- [ ] **Task 0.3**: `src/services/companyService.js` data access adapter katmanını (`getCompanyInfo()`, `getServices()`) yazmak ve test etmek.

## 3. Dependencies / Preconditions

- Approved project intake, snapshot ve `WAVE_MAP.md` dondurulmuş durumdadır.
- CSS Custom Properties `DESIGN_RULES.md` renk ve tipografi kurallarını takip etmelidir.
- `companyData.js` yalnızca `SOURCE_REGISTER.md` FCL allowlist verisini içermelidir.

## 4. Per-Task Done Criteria

- **Task 0.1 Done**: `index.html` ve `styles/main.css` dosyalarının oluşturulması, `:root` değişkenlerinin (Steel Blue `#1E2D42`, Amber `#F59E0B`) tanımlanması ve sıfır konsol hatası.
- **Task 0.2 Done**: `companyData.js` nesnesinin strictly 3 approved hizmeti (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) barındırması.
- **Task 0.3 Done**: `companyService.getServices()` metodunun asenkron Promise ile 3 hizmet verisini dönmesi.

## 5. Stop / Clarification Conditions

- Kapsam dışı olan backend, veritabanı, canlı harita veya WhatsApp entegrasyonu talep edilirse durulmalı ve approved input snapshot kontrol edilmelidir.
- Kaynak dışı iddia veya unapproved qualifier eklenmesi istenirse durulmalı ve FCL ihlali engellenmelidir.
