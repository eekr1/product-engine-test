# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Data-Access Boundary Setup

- **Status**: Ready for Execution
- **Goal**: Vite+React projesini kurmak, CSS Design Tokens altyapısını tanımlamak ve presentation ile veri erişimini ayıran mock service adapter katmanını kodlamak.

## 1. Why This Wave / Dependency Rationale

- Bu dalga projenin teknik temelidir. Arayüz bileşenlerini kodlamadan önce projenin derlenebilir ortamı, renk/tipografi token'ları ve dondurulmuş firma verilerini sunan service boundary hazır olmalıdır.

## 2. Canonical Sources to Read

1. `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md`
2. `ai/TECH_CONTEXT.md`
3. `design/DESIGN_RULES.md`
4. `ai/PRODUCT_RULES.md`

## 3. Dependencies

- Node.js ve npm paket yöneticisi.
- Vite + React proje kurulum bağımlılıkları.

## 4. Scope

### Scope References
- `SCP-001`: Core Frontend Build & Scaffold
- `SCP-002`: CSS Tokens & Theme Infrastructure
- `SCP-003`: Local Mock Data & Service Adapter

### In Scope
- Vite + React + Vanilla CSS projesinin initialize edilmesi.
- `src/styles/tokens.css` dosyasında koyu antresit ve endüstriyel kehribar design token'larının tanımlanması.
- `src/data/mockData.js` dondurulmuş gerçek firma verilerinin yapılandırılması.
- `src/services/companyService.js` ve `src/services/contactService.js` adapter katmanının kodlanması.

### Out of Scope
- Karmaşık arayüz bileşenleri veya sayfa tasarımları.
- Gerçek backend veya veritabanı entegrasyonu.

## 5. Expected Result / Target Structure

```text
src/
├── styles/
│   └── tokens.css
├── data/
│   └── mockData.js
├── services/
│   ├── companyService.js
│   └── contactService.js
└── hooks/
    ├── useCompanyData.js
    └── useServicesData.js
```

## 6. Implementation Checklist

- [ ] `TASK-001` (Scope Ref: SCP-001): Vite+React projesini kur ve bağımlılıkları initialize et.
- [ ] `TASK-002` (Scope Ref: SCP-002): `src/styles/tokens.css` içinde renk, font, spacing ve elevation CSS değişkenlerini tanımla.
- [ ] `TASK-003` (Scope Ref: SCP-003): `src/data/mockData.js` içinde dondurulmuş firma profili, Disan Hidrolik yetkili servisliği ve 3 ana hizmet nesnesini yaz.
- [ ] `TASK-004` (Scope Ref: SCP-003): `src/services/companyService.js` adapter servisini ve React custom hook'larını yaz.

## 7. State / Role / Responsive Coverage

- Mock service katmanı senkron/asenkron veri okuma durumlarını (loading/ready state) desteklemelidir.

## 8. Automated Verification

- `npm run build` komutunun uyarısız ve hatasız static bundle üretmesi.

## 9. Manual QA / Debug Verification

- Node ortamında `companyService.getCompanyInfo()` ve `companyService.getServices()` fonksiyonlarının dondurulmuş veriyi eksiksiz döndürdüğünün konsoldan doğrulanması.

## 10. Acceptance / Exit Criteria

- [ ] Vite+React scaffold hatasız çalışmalı.
- [ ] CSS Tokens lacivert klişesinden uzak özgün endüstriyel paleti taşımalı.
- [ ] Mock service adapter UI bileşenlerinin doğrudan hardcoding yapmasını engelleyecek yapıda olmalı.

## 11. Handoff / Stop Rule

- `WAVE_00` tamamlandığında `CURRENT_STATUS.md` güncellenir ve `WAVE_01` başlatılır.

---
## Wave Result
- **Status**: Pending Execution
