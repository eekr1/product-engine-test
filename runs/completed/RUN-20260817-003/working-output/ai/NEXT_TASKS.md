# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` — Foundation & Design System Infrastructure
- **Plan**: [waves/plans/WAVE_00.md](../waves/plans/WAVE_00.md)

## 2. Immediate Tasks

1. **[WAVE_00 / Task 1] Project Infrastructure Setup**:
   - `package.json` manifest'ini Vite + React + Vanilla CSS bağımlılıklarıyla scaffold et.
   - `npm run dev`, `npm run build`, `npm run preview` komutlarını yapılandır.
2. **[WAVE_00 / Task 2] Design Tokens Infrastructure**:
   - `src/styles/tokens.css` dosyasında endüstriyel renk paleti (Anthracite `#1E2530`, Steel Slate `#3A475A`, Precision Amber `#D97706`, Light Gray `#F8FAFC`), tipografi ve grid spacing token'larını oluştur.
   - `src/styles/global.css` dosyasını CSS custom properties ile bağla.
3. **[WAVE_00 / Task 3] Service & Presentation Data Boundary**:
   - `src/data/presentationData.js` dondurulmuş Factual Allowlist verisiyle doldur.
   - `src/services/presentationService.js` adaptörünü `getCompanyInfo()`, `getServices()`, `getContactActions()` metotlarıyla oluştur.
4. **[WAVE_00 / Task 4] Root Container Component**:
   - `src/App.jsx` ana layout kabuğunu temiz CSS container boundaries ile yapılandır.

## 3. Dependencies / Preconditions

- `WAVE_00` başlangıç adımıdır; öncül kod bağımlılığı yoktur.
- `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` ve `design/DESIGN_RULES.md` kılavuz alınacaktır.

## 4. Per-Task Done Criteria

- **Task 1 Done**: `npm run dev` hatasız çalışır, Vite dev server ayağa kalkar, `npm run build` temiz `dist/` bundle üretir.
- **Task 2 Done**: CSS custom properties `src/styles/tokens.css` içinde tanımlıdır ve global import ile yüklenir.
- **Task 3 Done**: `presentationService.js` metotları dondurulmuş factual verileri hatasız ve izole obje olarak döndürür.
- **Task 4 Done**: `App.jsx` React root elementi altında temiz container yapısıyla render olur.

## 5. Stop / Clarification Conditions

- Sadece FCL allowlist'indeki 6 doğrulanmış fact kullanılabilir. Factual claim uydurma ihtiyacı oluşursa eylem durdurulur ve clarification istenir.
- Unapproved third-party UI kütüphanesi veya backend simülasyonu ekleme eylemi yasaktır.
