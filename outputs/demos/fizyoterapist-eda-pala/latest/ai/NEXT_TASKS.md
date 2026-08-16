# Fizyoterapist Eda Pala Web Sitesi Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation, Stack Setup & Local Content Config Schema)
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

- [ ] **TASK-001**: Root `index.html` semantic HTML5 skeleton'ının oluşturulması (`<header>`, `<main>`, `<footer>` elemanları ve `<script type="module" src="./src/app.js">` entegrasyonu).
- [ ] **TASK-002**: `src/config/content.config.js` dosyası içinde `FCL-001`..`FCL-004` allowlist verilerini taşıyan static configuration nesnesinin yazılması.
- [ ] **TASK-003**: `src/adapters/contentAdapter.js` modülünde UI bileşenlerine güvenli veri sağlayan `getContent()` ve `getProfileData()` adaptör metodlarının tanımlanması.
- [ ] **TASK-004**: `src/app.js` modülünün oluşturularak DOMContentLoaded olayında içerik adaptörünün başarıyla başlatıldığının doğrulanması.

## 3. Dependencies / Preconditions

- `WAVE_00.md` planı hazırdır ve önkoşul bağımlılığı yoktur.
- Tüm veri tanımları `FCL-001`..`FCL-004` ile sınırlıdır.

## 4. Per-Task Done Criteria

- **TASK-001 Done**: `index.html` tarayıcıda DOM parse hatası olmadan açılıyor.
- **TASK-002 Done**: `content.config.js` `Eda Pala`, `Fizyoterapist`, `Tekirdağ` ve onaylı Instagram URL'sini export ediyor.
- **TASK-003 Done**: `contentAdapter.getContent('profile')` çağrısı profil nesnesini döndürüyor.
- **TASK-004 Done**: Konsolda `"App initialized with local content adapter"` mesajı ve profil objesi doğrulanıyor.

## 5. Stop / Clarification Conditions

- `FCL-001`..`FCL-004` dışından kaynaklandırılmamış yeni bir factual claim (adres, telefon, tedavi alanı vb.) yazılması gerekirse kodlama durdurulur.
