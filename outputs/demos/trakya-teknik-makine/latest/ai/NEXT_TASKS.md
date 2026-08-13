# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation, Design Tokens & Data Boundary)
- **Plan**: [WAVE_00.md](../waves/plans/WAVE_00.md)

## 2. Immediate Tasks

1. **TSK-00-01**: `index.html` temel yapısını kur; Google Fonts (`Outfit` ve `Inter`) bağlantılarını ekle.
2. **TSK-00-02**: `src/styles/main.css` dosyasını oluştur; [DESIGN_RULES.md](../design/DESIGN_RULES.md) içindeki renk paletini (`--color-brand-dark: #0F172A`, `--color-brand-accent: #D97706` vb.), CSS reset ve 12-sütun grid sınıflarını tanımla.
3. **TSK-00-03**: `src/data/companyData.js` dosyasını oluştur; yayında olan sitedeki doğrulanmış firma bilgilerini (Disan Hidrolik Yetkili Servisi, 3 Ana Hizmet, Adres/Telefon/E-posta) ekle.
4. **TSK-00-04**: `src/services/companyService.js` modülünü yaz; presentation bileşenlerine mock veriyi sağlayacak `getCompanyInfo()`, `getServices()`, `getContactInfo()` servis arayüzlerini sağla.
5. **TSK-00-05**: `index.html` içine `<header id="main-header">`, `<main id="app-content">` ve `<footer id="main-footer">` semantik iskeletlerini ekleyip tarayıcıda hatasız yüklendiğini doğrula.

## 3. Dependencies / Preconditions

- Proje bağımlılığı yoktur. `WAVE_00` başlangıç dalgasıdır.

## 4. Per-Task Done Criteria

- **TSK-00-01 Done**: `index.html` konsol hatası vermeden açılıyor, fontlar yükleniyor.
- **TSK-00-02 Done**: `main.css` değişkenleri ve grid sınıfları stil kontrolünden geçiyor.
- **TSK-00-03 Done**: `companyData.js` doğrulanmış verileri içeriyor.
- **TSK-00-04 Done**: `CompanyService` fonksiyonları mock verileri JS modülü olarak döndürüyor.
- **TSK-00-05 Done**: Temel HTML5 layout shell responsive kırılma olmadan yükleniyor.

## 5. Stop / Clarification Conditions

- Firma bilgilerinde veya hizmet başlıklarında mevcut siteyle çelişen bir durum tespit edilirse işlem durdurulur.
