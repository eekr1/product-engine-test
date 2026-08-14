# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Scaffolding)
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

- [ ] **TSK-001**: `index.html` dosyasının semantik HTML5 iskeleti, meta etiketleri ve CSS bağlantısı ile oluşturulması. (Parent Atom: Project Scaffolding & Component Container Setup)
- [ ] **TSK-002**: `styles/main.css` dosyasında renk, tipografi ve aralık CSS custom properties (`:root`) tanımlarının yazılması. (Parent Atom: Design System Token Baseline)
- [ ] **TSK-003**: `data/companyData.js` modülünde doğrulanmış firma kimliği, 3 hizmet ve iletişim verilerinin nesne olarak tanımlanması. (Parent Atom: Local Data Adapter Boundary)
- [ ] **TSK-004**: `services/companyService.js` dosyasında `getCompanyProfile()`, `getServices()` ve `getContactInfo()` getter fonksiyonlarının yazılması. (Parent Atom: Local Data Adapter Boundary)

## 3. Dependencies / Preconditions

- Approved `PROJECT_INPUT.md` dondurulmuştur.
- `DESIGN_RULES.md` içindeki renk ve tipografi kararları geçerlidir.

## 4. Per-Task Done Criteria

- **TSK-001 Done**: Tarayıcıda `index.html` hatasız yükleniyor ve `<title>` Trakya Teknik Makine olarak görünüyor.
- **TSK-002 Done**: CSS değişkenleri (`--color-primary`, `--font-heading` vb.) düzgün tanımlanmış ve okunuyor.
- **TSK-003 Done**: `companyData.js` doğrulanmış verileri (FCL-001 - FCL-006) içeriyor.
- **TSK-004 Done**: `companyService.js` nesneleri temiz biçimde döndürüyor.

## 5. Stop / Clarification Conditions

- Onaylanmamış sahte backend, API adresi veya veritabanı kararı verilmeyecektir.
- Approved scope dışına yeni interaction (form submit/map/WhatsApp) eklenmeyecektir.
