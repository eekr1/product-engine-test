# Trakya Teknik Makine — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Design System Setup)
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. `css/variables.css` oluşturup `DESIGN_RULES.md` renk (HSL slate/navy/amber), tipografi ve spacing token'larını tanımlamak.
2. `css/reset.css` ve `css/layout.css` dosyalarını hazırlayarak temel responsive grid ve container sınıflarını yazmak.
3. `js/data.js` dosyasını oluşturarak mevcut siteden doğrulanan firma bilgilerini, Disan Hidrolik yetkili servis metnini ve 3 hizmet tanımını mock data objesi olarak eklemek.
4. `js/service.js` dosyasını yazarak presentation katmanından bağımsız `getCompanyInfo()`, `getServicesList()`, `getContactInfo()` arayüz fonksiyonlarını tanımlamak.
5. `index.html` temel semantik HTML5 iskeletini oluşturmak ve stil/script bağlantılarını kurmak.

## 3. Dependencies / Preconditions

- `WAVE_00` planı `waves/plans/WAVE_00.md` konumunda hazırdır.
- Herhangi bir engellemeye sebep olacak bağımlılık yoktur.

## 4. Per-Task Done Criteria

- CSS değişkenleri `:root` seviyesinde erişilebilir durumda.
- `service.js` konsolda çağrıldığında mock verileri doğru nesne yapısıyla döndürüyor.
- `index.html` tarayıcıda temiz yükleniyor.

## 5. Stop / Clarification Conditions

- Presentation bileşenleri içine mock verinin sabit olarak yazılmak istenmesi durumunda durulmalı ve service boundary korunmalıdır.
