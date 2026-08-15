# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` — Foundation & Application Shell Setup
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

- [ ] **TSK-001**: `src/styles/tokens.css` ve `main.css` dosyalarını kurarak CSS Custom Properties (`#0F172A`, `#1E293B`, `#F97316`) ve responsive container düzenini oluştur.
- [ ] **TSK-002**: `index.html` dosyasında standalone HTML5 responsive kabuğunu (`header`, `main#app`, `footer`) inşa et.
- [ ] **TSK-003**: `src/data/mockData.js` dosyasını yalnızca onaylı FCL gerçekleriyle ve `src/services/dataService.js` adapter metotları (`getCompanyInfo`, `getServices`, `getContactMethods`) ile bağla.

## 3. Dependencies / Preconditions

- `WAVE_00` template and project rules alignment complete.

## 4. Per-Task Done Criteria

- **TSK-001 Done**: Tarayıcıda renk ve tipografi token'ları hatasız yükleniyor, yatay scrollbar oluşmuyor.
- **TSK-002 Done**: `index.html` responsive container kabuğu 1200px, 768px ve 320px çözünürlüklerinde pürüzsüz esniyor.
- **TSK-003 Done**: `dataService.getCompanyInfo()` ve `dataService.getServices()` metotları onaylı 3 hizmeti ve firma statüsünü eksiksiz döndürüyor.

## 5. Stop / Clarification Conditions

- FCL dışı firma/hizmet iddiası gerektiren durum tespiti (Üretim durdurulur ve durdurma şartı uygulanır).
- Backend, API veya veritabanı uydurma zorunluluğu (Yasak, mock adapter kullanılır).
