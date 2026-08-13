# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Technical Setup)
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. **TASK-001 (Project Structure Initializing)**: Presentation katmanı klasör yapısını (`src/`, `src/components/`, `src/data/`, `src/styles/`) kurmak ve HTML5 boiler plate'ini hazrlamak.
2. **TASK-002 (Design Token Setup)**: `DESIGN_RULES.md` doğrultusunda CSS Custom Properties (endüstriyel çelik, grafit, güvenlik sarısı aksanı, tipografi ve spacing) tanımlarını `styles/tokens.css` içinde dondurmak.
3. **TASK-003 (Mock Data Adapter Base)**: Doğrulanmış FCL verilerini (FCL-001..FCL-006) barındıran `src/data/companyMockData.js` adapter servisini yazmak.

## 3. Dependencies / Preconditions

- Approved Project Input snapshot (`inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`) donduruldu.
- Document Package Output (`v0.2.0`) hazır ve agent-ready durumda.

## 4. Per-Task Done Criteria

- **TASK-001**: Semantik HTML5 giriş yapısı ve temiz modüler klasör şeması hazır olmalı.
- **TASK-002**: `tokens.css` içinde renk rolleri, font aileleri, spacing ölçeği ve responsive breakpoint değişkenleri tanımlı olmalı.
- **TASK-003**: `companyMockData.js` adapter'ı firma künyesini, Disan Hidrolik yetkili servis unvanını ve 3 ana hizmet nesnesini döndüren interface fonksiyonlarını sunmalı.

## 5. Stop / Clarification Conditions

- Doğrulanmamış yeni bir firma iddiası veya hizmet tanımı eklenmesi gerekirse durulmalı ve FCL güncellemesi istenmelidir.
- Sahte REST backend endpoint'i veya veritabanı bağlantısı istenirse uydurma engeline uyularak durulmalıdır.
