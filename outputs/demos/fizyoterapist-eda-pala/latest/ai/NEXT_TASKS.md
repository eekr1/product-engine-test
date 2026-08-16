# Fizyoterapist Eda Pala Web Sitesi Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` — Project Setup & Local Preview Foundation
- **Plan**: [WAVE_00.md](../waves/plans/WAVE_00.md)

## 2. Immediate Tasks

1. **Task 00-1**: `js/siteConfig.js` statik lokal konfigürasyon modülünü oluştur ve 4 onaylı factual veriyi (`Eda Pala`, `Fizyoterapist`, `Tekirdağ`, `Instagram URL`) tanımla.
2. **Task 00-2**: `css/styles.css` CSS Custom Properties token altyapısını (`--color-bg-primary`, `--color-brand-primary`, tipografi ölçekleri, container max-width) kur.
3. **Task 00-3**: `index.html` semantik HTML5 kabuğunu (`<header>`, `<main class="container">`, `<footer>`) oluştur ve `js/main.js` montaj script'ini bağla.
4. **Task 00-4**: Lokal preview ortamında `index.html` dosyasının hatasız yüklendiğini doğrula.

## 3. Dependencies / Preconditions

- `WAVE_00.md` planı dondurulmuştur.
- `siteConfig.js` yalnız onaylı allowlist factual verilerini taşımalıdır.

## 4. Per-Task Done Criteria

- **Task 00-1 Done**: `siteConfig.js` modülü JS parser tarafından okunabiliyor ve 4 factual bilgiyi hatasız sunuyor.
- **Task 00-2 Done**: `styles.css` `DESIGN_RULES.md` renk ve tipografi token'larını eksiksiz tanımlıyor.
- **Task 00-3 Done**: Tarayıcıda `index.html` semantik yapısı ve CSS Custom Properties temiz şekilde yükleniyor.
- **Task 00-4 Done**: Konsolda hiçbir JS/CSS hatası verilmiyor ve `WAVE_01` geçişi hazır duruma geliyor.

## 5. Stop / Clarification Conditions

- Onaylanmamış yeni bir sağlık, adres veya iletişim claim'i eklenmesi istendiğinde execution durdurulur.
- Aktif wave `WAVE_00` dışındaki bir feature işi ortaya çıktığında wave sırasına göre durdurulur.
