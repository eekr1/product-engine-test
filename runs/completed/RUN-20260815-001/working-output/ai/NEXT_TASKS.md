# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Technical Environment Setup)
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. **TASK-001:** Frontend proje klasör yapısının (`src/`, `src/assets/`, `src/components/`, `src/data/`, `src/styles/`) oluşturulması.
2. **TASK-002:** `DESIGN_RULES.md` içindeki renk, tipografi, spacing ve elevation kurallarını içeren Vanilla CSS Design Tokens (`index.css` / `variables.css`) dosyasının tanımlanması.
3. **TASK-003:** Static/local mock data adapter modülünün (`src/data/companyData.js`) oluşturulması (Mevcut doğrulanmış firma ve 3 hizmet bilgisiyle).
4. **TASK-004:** Temel HTML5 uygulama kabuğunun (`index.html`) ve yerel geliştirme sunucusu yapılandırmasının hazırlanması.

## 3. Dependencies / Preconditions

- `DESIGN_RULES.md` ve `TECH_CONTEXT.md` belgelerinin hazır ve onaylı olması (Tamamlandı).

## 4. Per-Task Done Criteria

- **TASK-001 Done**: Temiz modüler klasör yapısı oluşturuldu.
- **TASK-002 Done**: CSS değişkenleri (`--color-bg-primary: #12151B`, `--color-accent: #E67E22` vb.) tanımlandı.
- **TASK-003 Done**: `companyData` servisi `getCompanyInfo()` ve `getServices()` metodları ile mock verileri sunabilir durumda.
- **TASK-004 Done**: `index.html` sorunsuz yüklendi ve konsol hatası vermedi.

## 5. Stop / Clarification Conditions

- Tasarım token'ları `DESIGN_RULES.md` ile çelişirse dur.
- Mock veriler `SOURCE_REGISTER` FCL kayıtlarının dışına çıkarsa uydurma yapma, dur.
