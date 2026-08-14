# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` — Foundation & Architecture Setup
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. **TSK-00-01 (Project & Build Setup):** Root dizinde `index.html` dosyasını ve Vite dev/preview ortam yapılandırmasını oluştur. `Scope Ref: SCP-007`
2. **TSK-00-02 (Design Tokens Setup):** `src/styles/variables.css` dosyasında `DESIGN_RULES.md` renk palette (`#0f172a`, `#f97316`, `#0284c7`), font (`Inter`, `Outfit`) ve tipografi değişkenlerini tanımla. `Scope Ref: SCP-007`
3. **TSK-00-03 (Local Mock Data Source):** `src/data/mockData.js` dosyasında mevcut siteden alınan doğrulanmış firma, yetkili servis ve 3 ana hizmet (Yedek Parça, Yerinde Destek, Bakım/Onarım) verilerini dondur (`FCL-001` - `FCL-005`). `Scope Ref: SCP-008`
4. **TSK-00-04 (Content Service Adapter):** `src/services/contentService.js` dosyasında presentation bileşenlerinin tüketeceği asenkron `getCompanyInfo()`, `getServices()`, `getContactInfo()` metodlarını yaz. `Scope Ref: SCP-008`

## 3. Dependencies / Preconditions

- Approved Input v1 ve `outputs/demos/trakya-teknik-makine/latest/` yayındadır.
- Bağımsız (İlk uygulama adımıdır).

## 4. Per-Task Done Criteria

- **TSK-00-01 Done:** Vite dev server hatasız açılıyor ve `index.html` yükleniyor.
- **TSK-00-02 Done:** CSS variables doğru renk ve tipografi değerlerini taşıyor.
- **TSK-00-03 Done:** `mockData.js` doğrulanmış verileri eksiksiz ihraç (export) ediyor.
- **TSK-00-04 Done:** `contentService.js` metodları Promise dönerek mock verileri UI'a aktarıyor.

## 5. Stop / Clarification Conditions

- Onaylanmamış yeni bir backend servisi veya harici API ihtiyacı doğarsa durulur ve kullanıcıya sorulur.
