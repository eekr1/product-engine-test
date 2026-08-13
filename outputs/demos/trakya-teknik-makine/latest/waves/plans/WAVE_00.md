# Trakya Teknik Makine — WAVE_00: Foundation, Design Tokens & Data Boundary

- **Status**: Ready for Execution
- **Goal**: Modüler frontend proje yapısının kurulması, CSS Custom Properties (Design Tokens) altyapısının tanımlanması, responsive layout kabuğunun oluşturulması ve `CompanyDataService` yerel mock adapter katmanının hazırlanması.

## 1. Why This Wave / Dependency Rationale

Bu dalga, projenin sonraki UI ve hizmet sunum dalgalarının (WAVE_01, WAVE_02) üzerine inşa edileceği teknik ve mimari temeli oluşturur. Görsel bileşenler geliştirilmeden önce renk, tipografi, spacing ve data access boundary sınırlarının netleşmesini sağlar.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 3. Dependencies

- **Önkoşullar**: Yok (Başlangıç dalgası).

## 4. Scope

### In Scope

- Modüler dosya/klasör mimarisinin kurulması (`src/styles/`, `src/services/`, `src/data/`, `src/components/`).
- `main.css` içinde CSS Custom Properties (Design Tokens) tanımları (Slate Charcoal, Industrial Amber vb.).
- Reset CSS, tipografi kuralları (`Outfit`, `Inter`) ve responsive grid sınıfları.
- `CompanyDataService` soyut veri katmanı ve `companyData.js` yerel mock veri nesnesi.
- Temel HTML5 layout shell (`index.html`, `<header>`, `<main>`, `<footer>` iskeletleri).

### Out of Scope

- Gerçek API/Backend entegrasyonu.
- Detaylı Hero ve Hizmet Kartları görsel geliştirmeleri (WAVE_01 ve WAVE_02 konusudur).

## 5. Expected Result / Target Structure

```text
outputs/demos/trakya-teknik-makine/latest/
├── index.html                     # HTML5 Shell
├── src/
│   ├── styles/
│   │   └── main.css               # Design Tokens, Utility & Layout Classes
│   ├── data/
│   │   └── companyData.js         # Verified Factual Mock Data
│   └── services/
│       └── companyService.js      # Clean Data Access Service Boundary
```

## 6. Implementation Checklist

- [ ] `index.html` temel HTML5 şablonunu oluştur (Lang: `tr`, charset: `UTF-8`, viewport meta).
- [ ] Google Fonts (`Outfit` ve `Inter`) bağlantılarını `index.html` header alanına ekle.
- [ ] `src/styles/main.css` oluştur ve [DESIGN_RULES.md](../../design/DESIGN_RULES.md) renk paleti token'larını tanımlar.
- [ ] CSS reset ve kutu modeli kurallarını (`box-sizing: border-box`, margin Reset) ekle.
- [ ] `Outfit` (Headings) ve `Inter` (Body) tipografi ölçeklerini CSS sınıflarına tanımla.
- [ ] Responsive container ve 12-column grid utility sınıflarını hazırla.
- [ ] `src/data/companyData.js` dosyasını oluştur ve doğrulanmış firma bilgilerini (Disan Hidrolik Yetkili Servisi, 3 Ana Hizmet, Adres/Telefon/E-posta) ekle.
- [ ] `src/services/companyService.js` dosyasını oluştur; `getCompanyInfo()`, `getServices()`, `getContactInfo()` metodlarını sağla.
- [ ] `index.html` içine semantik `<header id="main-header">`, `<main id="app-content">`, `<footer id="main-footer">` iskeletini yerleştir.
- [ ] `companyService.js` modülünün tarayıcıda veya static ortamda hatasız veri döndürdüğünü doğrula.

## 7. State / Role / Responsive Coverage

- **Mobile Viewport**: 320px - 640px arasında container taşması yaşanmamalıdır.
- **Desktop Viewport**: 1024px+ ekranlarda maksimum 1200px genişlik sınırlaması ve ortalama sağlanmalıdır.

## 8. Automated Verification

```bash
# Static HTML/CSS validator & syntax check (Execution-stack neutral)
# Preview local server check
```

## 9. Manual QA / Debug Verification

- Tarayıcı geliştirici konsolunu açıp `CompanyService` çağrılarının hatasız çalıştığını kontrol et.
- Responsive görünüm modunda 320px'te yatay kaydırma çubuğu (horizontal scrollbar) oluşmadığını doğrula.

## 10. Acceptance / Exit Criteria

- [ ] Design Tokens `main.css` içinde eksiksiz tanımlanmış.
- [ ] Tipografi `Outfit` ve `Inter` ile bağlanmış.
- [ ] `CompanyService` UI'a mock veriyi hatasız sağlıyor.
- [ ] Temel HTML5 shell konsol hatası vermeden yükleniyor.

## 11. Handoff / Stop Rule

WAVE_00 tamamlandıktan sonra WAVE_01'e geçilebilir.

---

## Wave Result

*Status: Pending execution. Executed evidence will be updated upon wave execution completion.*
