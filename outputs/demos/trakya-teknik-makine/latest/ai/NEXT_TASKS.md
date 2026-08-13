# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` — Foundation & Design System Setup
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. **TASK-001 (Proje Yapısı):** Dizin hiyerarşisini (`styles/`, `data/`, `components/`) oluştur.
2. **TASK-002 (Design Tokens):** `styles/tokens.css` içinde `DESIGN_RULES.md` renk ve tipografi değişkenlerini tanımla.
3. **TASK-003 (Mock Data Adapter):** `data/companyData.js` dosyasında firma verisini ve getter fonksiyonlarını kodla.
4. **TASK-004 (Layout & Reset):** `styles/main.css` (reset) ve `styles/layout.css` (12-sütunlu grid) stillerini yaz.
5. **TASK-005 (Index Skeleton):** `index.html` dosyasını oluştur ve stiller/JS dosyaları ile bağla.

## 3. Dependencies / Preconditions

- `WAVE_00.md` ve `DESIGN_RULES.md` dondurulmuş durumdadır. Ek dış kütüphane bağımlılığı yoktur.

## 4. Per-Task Done Criteria

- **TASK-001 Done:** Klasörler disk üzerinde oluşturuldu.
- **TASK-002 Done:** CSS variables renk ve tipografi kodları eksiksiz yazıldı.
- **TASK-003 Done:** `getCompanyDetails()` ve `getServices()` konsoldan hatasız veri döndürüyor.
- **TASK-004 Done:** Grid container 12-sütunlu yapıyı destekliyor.
- **TASK-005 Done:** `index.html` tarayıcıda konsol hatası vermeden açılıyor.

## 5. Stop / Clarification Conditions

- CSS veya JavaScript yükleme hatası yaşanırsa dur ve kontrol et.
- `WAVE_00` tamamlandığında dur ve `WAVE_01` geçişini yap.
