# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Design System Setup

- **Status**: Ready for Execution
- **Goal**: Proje dizin yapısını, CSS variables (design tokens) mimarisini, responsive layout container'ı ve `data/companyData.js` typed mock data adapter katmanını eksiksiz kurmak.

## 1. Why This Wave / Dependency Rationale

- UI ve içerik geliştirmelerine başlamadan önce mimari temeli, renk/tipografi token'larını ve veri erişim soyutlamasını dondurmak sonraki wave'lerin bağımsız ve temiz ilerlemesini sağlar.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)

## 3. Dependencies

- Yok (İlk başlangıç wave'idir).

## 4. Scope

### In Scope
- Proje klasör hiyerarşisinin kurulması (`src/`, `assets/`, `styles/`, `data/`, `components/`).
- Global CSS reset, typography, responsive breakpoint ve CSS variable tanımları (`styles/main.css`, `styles/tokens.css`).
- Typed mock data adapter ve config katmanının oluşturulması (`data/companyData.js`, `config.js`).
- Temel HTML index skeleton'ının ve CSS/JS bağlantılarının hazırlanması.

### Out of Scope
- Son kullanıcıya yönelik karmaşık UI bileşenlerinin (Hero, Hizmet Kartları, İletişim Formu) görsel içeriklerinin kodlanması.
- Gerçek backend veya veritabanı bağlantısı.

## 5. Expected Result / Target Structure

```text
/
├── index.html
├── config.js
├── styles/
│   ├── main.css
│   ├── tokens.css
│   └── layout.css
├── data/
│   └── companyData.js
└── components/
```

## 6. Implementation Checklist

### 6.1 Proje Yapısı ve Konfigürasyon
- [ ] 1.1 Proje dizin ağacını oluştur (styles, data, components, assets).
- [ ] 1.2 `config.js` dosyasında site metadatalarını ve ortam değişkeni yer tutucularını tanımla.

### 6.2 Design System & Token Mimarisi
- [ ] 2.1 `styles/tokens.css` içinde `DESIGN_RULES.md` renk paletini (`--color-primary-slate`, `--color-accent-cyan`, `--color-accent-amber` vb.) tanımla.
- [ ] 2.2 `styles/tokens.css` içinde tipografi (`Inter`/`Outfit` font ailesi, font boyutları ve ağırlıkları) CSS değişkenlerini tanımla.
- [ ] 2.3 `styles/main.css` içinde CSS reset, standart box-sizing ve varsayılan zemin/metin stillerini yaz.
- [ ] 2.4 `styles/layout.css` içinde 12-sütunlu responsive grid ve container sınırlarını kur.

### 6.3 Mock Data Service / Adapter Katmanı
- [ ] 3.1 `data/companyData.js` içinde Trakya Teknik Makine doğrulanmış firma bilgilerini (isim, yetkili servis statüsü, 3 temel hizmet, iletişim detayları) JS objesi olarak tanımla.
- [ ] 3.2 UI bileşenlerinin veriye erişimi için getter fonksiyonlarını (`getCompanyDetails()`, `getServices()`, `getContactInfo()`) yaz ve dışa aktar.

### 6.4 Skeleton Shell Verification
- [ ] 4.1 `index.html` içinde HTML5 semantik skeleton yapısını kur.
- [ ] 4.2 `tokens.css`, `main.css`, `layout.css` ve `companyData.js` dosyalarını `index.html`'e bağla.
- [ ] 4.3 Yerel tarayıcıda konsol hatası olmadığını ve stil değişkenlerinin aktif olduğunu doğrula.

## 7. State / Role / Responsive Coverage

- Mobile (320px+), Tablet (768px+), Desktop (1024px+), Wide (1440px+) layout container sınırları test edilir.
- Koyu ve açık tema renk değişkenlerinin kontrast oranları doğrulanır.

## 8. Automated Verification

- Yerel statik sunucu / tarayıcı konsol incelemesi (Hatası olmayan temiz yüklenme).

## 9. Manual QA / Debug Verification

- `companyData.js` içindeki getter fonksiyonlarının doğru veriyi döndürdüğü tarayıcı konsolundan (`getCompanyDetails()`) kontrol edilir.
- CSS değişkenlerinin sayfa zeminine uygulandığı taranır.

## 10. Acceptance / Exit Criteria

- [ ] Tüm temel klasörler ve stil/veri dosyaları eksiksiz oluşturuldu.
- [ ] `DESIGN_RULES.md` token'ları CSS değişkenlerine aktarıldı.
- [ ] `data/companyData.js` mock service üzerinden firma verileri sorunsuz okunabiliyor.
- [ ] Tarayıcıda JavaScript veya CSS yükleme hatası yok.

## 11. Handoff / Stop Rule

- Wave 00 tamamlandıktan sonra `WAVE_01` (Hero & Corporate Trust Surface) başlatılabilir.

---

## Wave Result

Status: Pending Execution (Not executed yet).
