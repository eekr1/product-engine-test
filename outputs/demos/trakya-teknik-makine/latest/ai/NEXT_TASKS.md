# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Data Access Boundary Setup)
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. **Task 1: Base HTML & Viewport Setup** — `index.html` dosyasının modüler skeleton, responsive viewport ve Google Fonts importlarıyla oluşturulması (`WAVE_00.md` Task 1).
2. **Task 2: Global CSS Design Tokens & Reset** — `src/styles/index.css` dosyasının antrasit renk paleti, turuncu accent, tipografi ve CSS reset kurallarıyla oluşturulması (`WAVE_00.md` Task 2).
3. **Task 3: Mock Static Data Object Definition** — `src/services/mockCompanyData.js` dosyasının strictly FCL-001 - FCL-007 bounded frozen veri objesiyle oluşturulması (`WAVE_00.md` Task 3).
4. **Task 4: Async Data Access Service Definition** — `src/services/companyService.js` dosyasının `getCompanyInfo()` ve `getServices()` asenkron promise metodlarıyla oluşturulması (`WAVE_00.md` Task 4).

## 3. Dependencies / Preconditions

- Approved documentation package generation tamamlandı (`v0.1`).
- `WAVE_00.md` execution contract'ı hazır.

## 4. Per-Task Done Criteria

- `index.html`: Hatasız HTML5 skeleton ve viewport meta etiketleri.
- `index.css`: `:root` altında tanımlı antrasit/turuncu değişkenler ve sıfırlama kuralları.
- `mockCompanyData.js`: FCL ile 100% eşleşen frozen JS nesnesi.
- `companyService.js`: UI bileşenleri için `Promise` döndüren servis arayüzü.

## 5. Stop / Clarification Conditions

- `WAVE_00` tamamlandıktan sonra `CURRENT_STATUS.md` ve `NEXT_TASKS.md` dosyaları `WAVE_01` (Brand Identity & Primary Hero Presentation) dalgasına güncellenecektir.
