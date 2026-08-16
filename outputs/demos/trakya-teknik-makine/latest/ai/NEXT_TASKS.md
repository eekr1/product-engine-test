# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Core Configuration Layer)
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. **Task 0.1 (HTML5 Shell Baseline)**: `index.html` dosyasında semantic HTML5 root, Google Fonts (`Outfit` & `Inter`) ve ES6 module script loader yapılandırmasını kurmak.
2. **Task 0.2 (CSS Design Tokens & Theme Foundation)**: `src/styles/main.css` dosyasında `DESIGN_RULES.md` renk ve tipografi token'larını (`:root`), Flexbox/Grid CSS utility sınıflarını tanımlamak.
3. **Task 0.3 (Local Data Access Boundary & FCL Adapter)**: `src/config/siteData.js` dosyasında FCL allowlist verilerini (`FCL-001..FCL-006`) sunan `getSiteData()` ve `getServices()` adapter metotlarını yazmak.

## 3. Dependencies / Preconditions

- `WAVE_00` initial foundation dalgası olduğu için öncül kod bağımlılığı yoktur.
- `DESIGN_RULES.md` renk paleti ve `SOURCE_REGISTER.md` FCL allowlist hazır olmalıdır (tamamlanmıştır).

## 4. Per-Task Done Criteria

- **Task 0.1 Done**: `index.html` tarayıcıda hatasız açılmaktadır.
- **Task 0.2 Done**: `main.css` içerisindeki renk ve font değişkenleri sorunsuz çalışmaktadır.
- **Task 0.3 Done**: `siteData.js` modülü strictly `FCL-001..006` verilerini dönmektedir.

## 5. Stop / Clarification Conditions

- Kapsam dışı form, harita, WhatsApp veya backend talebi geldiğinde execution durdurulur ve onay beklenir.
- FCL dışı firma iddiası veya uydurma veri talebi oluşursa durdurulur.
