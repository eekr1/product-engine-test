# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Scaffolding

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Proje temel dosya/klasör yapısını, CSS/Design Token mimarisini, local preview ortamını ve `companyService` / `contentAdapter` local mock data boundary'sini kurmak.

## 1. Parent Wave Map Entry

- **Goal**: Proje temel altyapısını, CSS token'larını ve local mock data adapter katmanını kurmak.
- **Committed Capabilities**:
  - Project Scaffolding & Component Container Setup (Support: SCP-001)
  - Design System Token Baseline (Support: SCP-001)
  - Local Data Adapter Boundary (`companyService` / `contentAdapter`) (Support: SCP-006)

## 2. Parent Capability Coverage

| Plan Capability Atom | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Project Scaffolding & Directory Setup | Project Scaffolding & Component Container Setup | implementation-of | PASS |
| CSS Custom Properties & Design Tokens (`styles/main.css`) | Design System Token Baseline | implementation-of | PASS |
| Local Mock Data Store (`data/companyData.js`) | Local Data Adapter Boundary | detail-of | PASS |
| Data Adapter Service (`services/companyService.js`) | Local Data Adapter Boundary | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Bu dalga tüm UI sunum bileşenlerinin ve içerik kartlarının ihtiyaç duyacağı CSS tasarım token'larını, tipografi/renk değişkenlerini ve veri erişim servis arabirimini oluşturur. İlk adımdır.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`
- `ai/PROJECT_BRAIN.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- None

## 6. Scope

### In Scope
- Temel HTML container (`index.html`) iskeletinin hazırlanması.
- `styles/main.css` içinde CSS değişkenlerinin (renkler, tipografi, font boyutları, aralıklar) tanımlanması.
- `data/companyData.js` içinde doğrulanmış firma bilgilerinin yerel nesne yapısında tutulması.
- `services/companyService.js` içinde sync/async getter fonksiyonlarının sunulması.

### Out of Scope
- Backend API sunucusu veya veritabanı bağlantısı.
- Harici CSS framework kurulumu (Vanilla CSS kullanılacaktır).
- Form/harita/WhatsApp modülleri.

## 7. Expected Result / Target Structure

```text
/
├── index.html
├── styles/
│   └── main.css
├── data/
│   └── companyData.js
└── services/
    └── companyService.js
```

## 8. Implementation Checklist

- [ ] `index.html` temel semantik kapsayıcı metadatalar ile oluşturulacak. (Parent Atom: Project Scaffolding)
- [ ] `styles/main.css` içinde CSS custom properties (`:root`) tanımlanacak. (Parent Atom: Design System Token Baseline)
- [ ] `data/companyData.js` içinde doğrulanmış firma ve hizmet metinleri tanımlanacak. (Parent Atom: Local Data Adapter Boundary)
- [ ] `services/companyService.js` içerisinde `getCompanyProfile()`, `getServices()`, `getContactInfo()` metodları yazılacak. (Parent Atom: Local Data Adapter Boundary)

## 9. State / Role / Responsive Coverage

- Responsive baseline breakpoints CSS custom property olarak tanımlanacak (768px, 1024px).
- Modüler data adapter soyutlaması korunacak.

## 10. Automated Verification

- Lint / syntax check: Native JS ve CSS geçerliliği.

## 11. Manual QA / Debug Verification

- Tarayıcı konsolunda `companyService.getCompanyProfile()` çağrısı yapılarak yerel verinin doğru nesne olarak döndüğü doğrulanacak.

## 12. Acceptance / Exit Criteria

- [ ] `index.html` hatasız yükleniyor.
- [ ] CSS token'ları dondurulmuş.
- [ ] `companyService` veri katmanı yerel nesneleri döndürüyor.

## 13. Handoff / Stop Rule

WAVE_00 tamamlandığında WAVE_01 (Primary Entry & Hero Surface) başlayabilir.

---

## Wave Result

- **Status**: Pending Execution
- **Result**: Not executed yet (planning phase complete).
