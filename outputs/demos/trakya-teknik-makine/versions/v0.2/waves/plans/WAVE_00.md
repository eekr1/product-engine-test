# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Project Setup

- **Status**: Ready for Execution
- **Goal**: Frontend demo mimari altyapısını, stil token'larını, responsive layout shell'ini ve yerel mock data katmanını kurmak.

## 1. Why This Wave / Dependency Rationale

Görsel arayüz bileşenlerini inşa etmeye başlamadan önce, projenin dizin düzeni, visual design token'ları (renk, tipografi, spacing) ve UI bileşenlerini mock verilerden ayıran `CompanyService` katmanının dondurulup kurulması şarttır. Bu wave olmadan UI geliştirmesi yapılırsa presentation ile data layer karışabilir.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/design/DESIGN_RULES.md)

## 3. Dependencies

- `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` donduruldu.
- `RUN-20260811-002` operasyonel kayıtları tamamlandı.

## 4. Scope

### In Scope

- Proje klasör yapısı ve yerel geliştirme/önizleme ortamı hazırlığı.
- CSS değişkenleri (renkler, fontlar, spacing, z-index, elevation).
- Base reset ve responsive container kuralları.
- `companyData` mock veri sağlayıcısı (SITE123 doğrulanmış verileri).
- `CompanyService` (veya data adapter) arayüzü.

### Out of Scope

- Karmaşık sayfa kompozisyonları ve animasyonlu UI bileşen montajı (`WAVE_01`).
- Gerçek backend veya API bağlantısı.

## 5. Expected Result / Target Structure

```text
src/
├── styles/
│   ├── main.css          (CSS Variables, Reset & Base Utilities)
│   └── responsive.css    (Container & Grid Breakpoints)
├── data/
│   └── companyData.ts    (Static Mock Data Provider - SITE123 Verified)
├── services/
│   └── companyService.ts (Service Boundary / Adapter)
└── index.html            (Layout Shell Mount Point)
```

## 6. Implementation Checklist

- [ ] **Task 00-01 (Setup & Base Styles)**: [DESIGN_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/design/DESIGN_RULES.md) standartlarına uygun CSS renk değişkenleri (`--primary-slate`, `--accent-amber`, `--surface-gray`) ve tipografi kurallarını `styles/main.css` dosyasına tanımla.
- [ ] **Task 00-02 (Data Provider Layer)**: Mevcut dondurulmuş bilgileri (Firma unvanı, Disan Hidrolik Trakya yetkili servisi, 3 ana hizmet: Bakım/Onarım, Yedek Parça, Yerinde Destek, İletişim detayları) `data/companyData.ts` (veya JS) dosyasına dökümante et.
- [ ] **Task 00-03 (Service Boundary Layer)**: UI bileşenlerinin veriyi talep edeceği `companyService.ts` modülünü oluştur. Metodlar: `getCompanyProfile()`, `getServices()`, `getContactInfo()`.
- [ ] **Task 00-04 (Mount Point Shell)**: Ana responsive HTML shell (`index.html`) şablonunu oluştur; meta etiketlerini, mobil viewport ayarlarını ve başlığı yapılandır.

## 7. State / Role / Responsive Coverage

- Layout shell varsayılan olarak 320px–1920px arası responsive kırılmaları desteklemelidir.
- Statik mock data sağlayıcı veri bulunamama durumuna karşı güvenli varsayılan nesne dönmelidir.

## 8. Automated Verification

- Yerel preview/dev sunucusunda `CompanyService` metodlarının doğru mock veriyi döndürdüğü konsol veya birim test ile doğrulanır.

## 9. Manual QA / Debug Verification

- `index.html` önizlemesinde stil değişkenlerinin ve meta etiketlerin sorunsuz yüklendiğini kontrol et.

## 10. Acceptance / Exit Criteria

- CSS değişkenleri ve layout reset dosyaları eksiksiz oluşturuldu.
- `CompanyService` soyutlama katmanı kuruldu; UI bileşenleri veriyi doğrudan dosyadan okumuyor.
- Proje `WAVE_01` UI bileşenlerinin inşasına hazır hale getirildi.

## 11. Handoff / Stop Rule

- `WAVE_00` tamamlandığında [CURRENT_STATUS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/ai/CURRENT_STATUS.md) belgesini güncelle ve `WAVE_01` planına geç.

---

## Wave Result

*Henüz çalıştırılmadı. Wave başlama bekliyor.*
