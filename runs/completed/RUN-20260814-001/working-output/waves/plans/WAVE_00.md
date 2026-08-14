# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_00: Foundation & Architecture Setup

- **Status**: Ready for Execution
- **Goal**: Frontend projesinin temel klasör/dosya yapısının kurulması, CSS token'larının ve `contentService` modülünün dondurulması.

## 1. Why This Wave / Dependency Rationale
Projenin sonraki tüm UI ve içerik dalgaları bu temele dayanır. Renk paleti, tipografi token'ları ve local mock data katmanı bu dalgada kurulmalıdır.

## 2. Canonical Sources to Read
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [INPUT_SNAPSHOT.md](../../../INPUT_SNAPSHOT.md)

## 3. Dependencies
- Bağımsız (İlk foundation dalgası).

## 4. Scope
### Scope References
- `SCP-007` (Project-specific visual concept & DESIGN_RULES)
- `SCP-008` (Service / data-access boundary separated local mock data setup)

### In Scope
- HTML5 skeleton ve Vite setup.
- Vanilla CSS Custom Properties (Theme tokens: Slate `#0f172a`, Orange `#f97316`, Blue `#0284c7`, Font: Inter/Outfit).
- Modüler JS mimarisi (`src/data/mockData.js`, `src/services/contentService.js`).

### Out of Scope
- UI section layout'ları (Wave 01-03'te yapılacaktır).
- Backend, DB veya API servisi.

## 5. Expected Result / Target Structure
```text
/
├── index.html
├── src/
│   ├── styles/
│   │   ├── variables.css
│   │   └── main.css
│   ├── data/
│   │   └── mockData.js
│   └── services/
│       └── contentService.js
```

## 6. Implementation Checklist
> Her task `Scope Ref: SCP-XXX` taşır.

- [ ] `index.html` temel yapısını ve Google Fonts (Inter, Outfit) bağlantılarını kur. `Scope Ref: SCP-007`
- [ ] `src/styles/variables.css` dosyasında `DESIGN_RULES.md` renk ve tipografi değişkenlerini tanımla. `Scope Ref: SCP-007`
- [ ] `src/data/mockData.js` modülünde doğrulanmış firma, yetkili servis ve 3 ana hizmet veri yapılarını oluştur (`FCL-001` - `FCL-005`). `Scope Ref: SCP-008`
- [ ] `src/services/contentService.js` modülünde `getCompanyInfo()`, `getServices()`, `getContactInfo()` asenkron interface fonksiyonlarını tanımla. `Scope Ref: SCP-008`

## 7. State / Role / Responsive Coverage
- Local mock data yüklenme durumu simülasyonu.

## 8. Automated Verification
- `npx vite build` veya `npx vite preview` ile hatasız derlenme ve çalıştırma doğrulaması.

## 9. Manual QA / Debug Verification
- Konsoldan `contentService.getServices()` çağrıldığında 3 hizmet nesnesinin doğru döndüğünün kontrolü.

## 10. Acceptance / Exit Criteria
- [ ] Visual token'lar `DESIGN_RULES.md` ile birebir eşleşiyor.
- [ ] Data adapter katmanı presentation'dan tamamen soyutlanmış.

## 11. Handoff / Stop Rule
`WAVE_00` başarıyla tamamlandığında `WAVE_01` (Primary Entry & Authorized Service Trust) geliştirilmeye başlanacaktır.

---
## Wave Result
- **Status**: Ready for Execution
- **Completion Evidence**: Pending execution
