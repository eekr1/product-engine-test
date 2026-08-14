# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Design System Setup)
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. **TASK-001 (Project Scaffolding)**: `index.html` temel HTML5 şablonunu ve Google Fonts (`Space Grotesk` & `Inter`) bağlantılarını eklemek. (Scope Ref: `SCP-001`)
2. **TASK-002 (Design System CSS Tokens)**: `styles/main.css` dosyasında `DESIGN_RULES.md` renk paletini, tipografi adımlarını ve varsayılan sıfırlama (reset) kurallarını tanımlamak. (Scope Ref: `SCP-001`)
3. **TASK-003 (Local Data Definition)**: `src/data/companyData.js` dosyasında `FCL-001` - `FCL-006` doğrulanmış verilerini (Firma unvanı, Disan yetkili servisliği, 3 ana hizmet, iletişim) tanımlamak. (Scope Ref: `SCP-007`)
4. **TASK-004 (Service Layer Adapter)**: `src/services/companyService.js` servis metodlarını (`getCompanyInfo`, `getServices`, `getContactInfo`) yazarak presentation katmanı için soyut veri erişimi sağlamak. (Scope Ref: `SCP-006`)

## 3. Dependencies / Preconditions

- Approved Input ve Active Run `RUN-20260814-001` hazır durumdadır.
- `DESIGN_RULES.md` renk ve tipografi jetonları onaylanmıştır.

## 4. Per-Task Done Criteria

- **TASK-001**: `index.html` tarayıcıda hatasız açılmalı ve semantik hiyerarşiyi barındırmalı.
- **TASK-002**: `styles/main.css` CSS jetonlarını içermeli ve tarayıcıda görsel sıfırlamayı sağlamalı.
- **TASK-003**: `companyData.js` doğrulanmış verileri eksiksiz içermeli, hiçbir uydurma veri yer almamalı.
- **TASK-004**: `companyService.js` konsol testinde verileri doğru formatta döndürmeli.

## 5. Stop / Clarification Conditions

- Firma bilgileri hakkında doğrulanmamış yeni bir veri talebi oluşursa çalışma durdurulur (`VAL-13`).
- `WAVE_00` tamamlanmadan `WAVE_01` (Hero & Navbar) kodlamasına geçilemez.
