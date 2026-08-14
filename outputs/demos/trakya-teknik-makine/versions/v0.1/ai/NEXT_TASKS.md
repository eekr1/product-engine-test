# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Environment Setup)
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. **TASK-001**: Modüler HTML5 `index.html` dosyasını responsive meta tag'leri ve ana layout container'ı ile oluştur (`waves/plans/WAVE_00.md` Task 1).
2. **TASK-002**: `css/main.css` dosyasında `DESIGN_RULES.md` renk ve tipografi token'larını (`--bg-primary: #0F141C`, `--accent-amber: #FFB800`) tanımla (`waves/plans/WAVE_00.md` Task 2).
3. **TASK-003**: `js/data/CompanyData.js` ve `js/data/ServicesData.js` dosyalarında doğrulanmış firma ve 3 hizmet verisini dondur (`waves/plans/WAVE_00.md` Task 3 & 4).
4. **TASK-004**: `js/adapters/LocalCompanyAdapter.js` ve `js/services/CompanyService.js` katmanlarını yazarak veri servis arayüzünü bağla (`waves/plans/WAVE_00.md` Task 5 & 6).

## 3. Dependencies / Preconditions

- Proje dizin yapısı ve Product Engine canonical dokümantasyon paketinin hazır bulunması.

## 4. Per-Task Done Criteria

- **TASK-001 Done**: `index.html` tarayıcıda hatasız yükleniyor.
- **TASK-002 Done**: CSS değişkenleri sayfaya uygulanıyor, renk kontrastı WCAG AA seviyesinde.
- **TASK-003 Done**: `CompanyData.js` ve `ServicesData.js` modülleri eksiksiz export ediliyor.
- **TASK-004 Done**: Konsol üzerinden `CompanyService.getCompanyInfo()` çağrısı geçerli veri objesi döndürüyor.

## 5. Stop / Clarification Conditions

- Kapsam dışı form backend, harita veya WhatsApp bileşeni talebi gelirse durulacak ve `PROJECT_INPUT.md` scope sınırları hatırlatılacaktır.
