# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_02: Approved Services Presentation Module

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Üç approved hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel ve metinsel sunum modülünü inşa etmek.

## 1. Parent Wave Map Entry

- **Name**: `WAVE_02: Approved Services Presentation Module`
- **Goal**: 3 approved hizmetin (Yedek Parça, Yerinde Destek, Bakım/Onarım) kart/modül sunumu.
- **Why Separate**: `DEMO_FRONTEND_PACKAGE.md` Granularity Guard gereği Hizmet sunumu İletişim alanından bağımsız bir dalga olarak geliştirilip doğrulanmalıdır.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Service 1 Card (Yedek Parça Temini) | approved service 1 presentation (Yedek Parça Temini) | implementation-of | PASS |
| Service 2 Card (Yerinde Teknik Destek) | approved service 2 presentation (Yerinde Teknik Destek) | implementation-of | PASS |
| Service 3 Card (Makine Bakım ve Onarım) | approved service 3 presentation (Makine Bakım ve Onarım) | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_02`, `WAVE_01` ile kurulan Hero ve marka kimliği üzerine firmanın 3 temel yetkinliğini yerleştirir (`PR-BUS-02`, `FCL-03`, `FCL-04`, `FCL-05`). Package granularity kuralı gereğince Hizmetler modülü İletişim alanıyla birleştirilmeden bağımsız teslim edilir.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_01` (Corporate Identity & Disan Authorized Service Surface).

## 6. Scope

### In Scope
- Hizmetler bölümü HTML5/CSS3 yapısı ve `ServicesModule` bileşeni.
- 3 approved hizmet kartının `CompanyDataService.getServices()` üzerinden çekilerek endüstriyel ikonlar ve grid düzeniyle listelenmesi.
- Kart bazında hover efektleri ve typography hiyerarşisi (`DESIGN_RULES.md` uyarınca).

### Out of Scope
- İletişim butonları ve eylem alanı (`WAVE_03`).
- Stok durumu, orijinal parça garantisi, mobil filo adedi, SLA yanıt süreleri, periyodik bakım paketleri veya revizyon iddiaları (FCL kısıtlaması).
- Filtreleme, arama, kategorizasyon veya detay popup modal'ları.

## 7. Expected Result / Target Structure

```text
src/
├── components/
│   └── ServicesModule.js
└── styles/
    └── services.css
```

## 8. Implementation Checklist

- [ ] **Task 02.1 (Services Container & Grid Layout)**:
  - **Location/Responsibility**: `src/components/ServicesModule.js`, `src/styles/services.css`.
  - **Parent Capability Relation**: `detail-of` -> `approved service presentation`.
  - **Implementation Behavior**: 3 sütunlu Flexbox/Grid responsive konteyner yapısının oluşturulması.
  - **Verification**: Ekran genişliğine göre 3 kart dengeli dağılmalıdır.
- [ ] **Task 02.2 (3 Approved Service Cards Data Rendering)**:
  - **Location/Responsibility**: `src/components/ServicesModule.js`.
  - **Parent Capability Relation**: `implementation-of` -> `approved service 1, 2, 3 presentation`.
  - **Implementation Behavior**: `CompanyDataService.getServices()` metodu ile yalnız 3 approved hizmet başlığının (`FCL-03`, `FCL-04`, `FCL-05`) kart yapısında gösterilmesi.
  - **FCL Boundary**: Kart metinleri strictly FCL-bounded kalmalıdır; stok, SLA veya periyodik bakım uydurulamaz.
  - **Verification**: Kartlar yalnız 3 approved hizmeti sıralamalıdır.
- [ ] **Task 02.3 (Industrial Card Styling & Hover Interactions)**:
  - **Location/Responsibility**: `src/styles/services.css`.
  - **Parent Capability Relation**: `detail-of` -> `approved service presentation`.
  - **Implementation Behavior**: `DESIGN_RULES.md` uyarınca `hsl(215, 20%, 20%)` çelik nötr kart yüzeyi, endüstriyel SVG ikonlar ve subtle hover yükselme efekti (`translateY(-2px)`).
  - **Verification**: Hover efekti akıcı çalışmalı ve okunabilirlik korunmalıdır.

## 9. State / Role / Responsive Coverage

- **Normal State**: 3 hizmet kartı yan yana veya dikey olarak hizalı biçimde görüntülenir.
- **Responsive Behavior**: Mobilde (<640px) tek sütunlu dikey akışa dönüşür.

## 10. Automated Verification

- DOM Element Check: Services section contains exactly 3 service cards with exact approved titles: "Yedek Parça Temini", "Yerinde Teknik Destek", "Makine Bakım ve Onarım".

## 11. Manual QA / Debug Verification

- Kartlarda kaynakta doğrulanmamış ek iddialar (örn: "7/24 mobil servis", "stoktan aynı gün teslimat") var mı? (Olmamalıdır).
- Mobilde kartlar yatay taşma yapıyor mu?

## 12. Acceptance / Exit Criteria

- [ ] 3 approved hizmet kartı hatasız listelendi.
- [ ] Tasarım Endüstriyel Hassasiyet diliyle uyumlu.
- [ ] Factual claim sınırı korundu.

## 13. Handoff / Stop Rule

- `WAVE_02` tamamlandığında, `WAVE_03` (Direct Contact & Action Surface) geliştirmesine geçilmeye hazır hizmet modülü teslim edilir.

---

## Wave Result

- **Execution Status**: Pending Execution
- **Output Artifacts**: `src/components/ServicesModule.js`, `src/styles/services.css`.
