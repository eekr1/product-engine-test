# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_03: Services Showcase Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Firmanın 3 approved hizmetini (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) veri odaklı dinamik spesifikasyon kartları ile sunan Hizmetler bölümünü inşa etmektir.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_03
- **Name**: Services Showcase Presentation
- **Goal**: 3 approved hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) veri odaklı dinamik sunumu
- **Primary Deliverables**: `src/components/Services.js`, `src/components/ServiceCard.js`, `src/styles/services.css`
- **Upstream Boundary Consumed**: `WAVE_02` kurumsal alan teslimatı ve `companyService.js` verisi
- **Downstream Handoff**: `WAVE_04` için 3 approved hizmet kartıyla tamamlanmış Hizmetler bölümü

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Yedek Parça Temini hizmet sunumu | `Yedek Parça Temini hizmet sunumu` | implementation-of | PASS |
| Yerinde Teknik Destek hizmet sunumu | `Yerinde Teknik Destek hizmet sunumu` | implementation-of | PASS |
| Makine Bakım ve Onarım hizmet sunumu | `Makine Bakım ve Onarım hizmet sunumu` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

3 approved hizmet projenin en temel ürün değeridir. DEMO_FRONTEND_PACKAGE granularity guard'ı uyarınca Hizmetler bölümü İletişim alanından ayrı, bağımsız bir sunum dalgası olarak kurgulanmalıdır.

## 4. Canonical Sources to Read

- `working-output/ai/PROJECT_BRAIN.md`
- `working-output/ai/PRODUCT_RULES.md` (PR-002, BC-001)
- `working-output/ai/TECH_CONTEXT.md` (Section 3)
- `working-output/design/DESIGN_RULES.md` (Section 2, 4, 9)
- `working-output/waves/WAVE_MAP.md` (WAVE_03 Entry)
- `SOURCE_REGISTER.md` (FCL-003, FCL-004, FCL-005)

## 5. Dependencies

- **Upstream Dependencies**: `WAVE_02` (`About.js`, `companyService.js`).
- **Downstream Consumers**: `WAVE_04`, `WAVE_05`.

## 6. Scope

### In Scope
- Hizmet Kartı bileşeni (`src/components/ServiceCard.js`).
- Hizmetler Grid container bileşeni (`src/components/Services.js`).
- Visual styling (`src/styles/services.css`).
- FCL-003: `Yedek Parça Temini` hizmet sunumu.
- FCL-004: `Yerinde Teknik Destek` hizmet sunumu.
- FCL-005: `Makine Bakım ve Onarım` hizmet sunumu.

### Out of Scope
- 4. bir hizmet eklemek, stok adedi, orijinal parça garantisi, mobil araç sayısı, acil servis SLA süresi taahhütleri.
- Form veya harita entegrasyonu (`WAVE_04` veya out of scope).

## 7. Expected Result / Target Structure

```text
/
└── src/
    ├── components/
    │   ├── Header.js
    │   ├── Hero.js
    │   ├── About.js
    │   ├── Services.js
    │   └── ServiceCard.js
    └── styles/
        ├── index.css
        ├── hero.css
        ├── about.css
        └── services.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Service Specification Card Component (`ServiceCard.js`)**
  - **Location/Responsibility**: `src/components/ServiceCard.js`
  - **Parent Capability Relation**: `Yedek Parça Temini hizmet sunumu`, `Yerinde Teknik Destek hizmet sunumu`, `Makine Bakım ve Onarım hizmet sunumu` (implementation-of)
  - **Inputs/Dependencies**: Single service item object from `companyService`.
  - **Behavior**:
    - Teknik SVG İkon (Yedek Parça: dişli/kutu ikon, Teknik Destek: anahtar/servis ikon, Bakım-Onarım: çark/kalkan ikon)
    - Hizmet Başlığı (`h3`): FCL-003, FCL-004 veya FCL-005
    - Hizmet Açıklaması: strictly FCL bounded hizmet tanımı.
  - **Preserve/Must-Not**: Orijinal parça, stoktan teslim, 7/24 mobil araç veya SLA süresi eklenemez.
  - **FCL Boundary**: FCL-003, FCL-004, FCL-005.
  - **Verification**: Kartlar bağımsız taranır ve metinleri FCL ile doğrulanır.
  - **Done Result**: Tekil Hizmet Kartı bileşeni hazır.

- [ ] **Task 2: Services Showcase Container Component (`Services.js`)**
  - **Location/Responsibility**: `src/components/Services.js`
  - **Parent Capability Relation**: `Yedek Parça Temini hizmet sunumu`, `Yerinde Teknik Destek hizmet sunumu`, `Makine Bakım ve Onarım hizmet sunumu` (implementation-of)
  - **Inputs/Dependencies**: `companyService.getServices()` verisi.
  - **Behavior**: `<section id="services">` konteyneri, başlık: "Hizmetlerimiz", `companyService` üzerinden dönen 3 approved hizmetin `ServiceCard` bileşenleriyle dinamik `.map()` edilmesi.
  - **Preserve/Must-Not**: 4. bir kart veya sahte hizmet eklenemez.
  - **Verification**: Render edilen kart sayısı kesin olarak 3 olmalıdır.
  - **Done Result**: 3 approved hizmet grid container bileşeni hazır.

- [ ] **Task 3: Services Grid CSS Styling (`services.css`)**
  - **Location/Responsibility**: `src/styles/services.css`
  - **Parent Capability Relation**: `Yedek Parça Temini hizmet sunumu` (detail-of)
  - **Inputs/Dependencies**: `DESIGN_RULES.md` grid ve card kuralları.
  - **Behavior**: Masaüstünde 3-column Grid layout (`grid-template-columns: repeat(3, 1fr)`), hover durumunda turuncu border ve elevation geçişi (`transform: translateY(-4px)`), mobilde 1-column dikey akış.
  - **Preserve/Must-Not**: Jenerik mavi/lacivert 3 kart şablonu kopyalanamaz.
  - **Verification**: Responsive kırılımlarda 3-column ve 1-column geçişleri test edilir.
  - **Done Result**: Endüstriyel hizmetler grid stilleri hazır.

## 9. State / Role / Responsive Coverage

- **Loading State**: Hizmet verileri yüklenirken 3 adet skeleton kart gösterilir.
- **Responsive View**: Desktop'ta 3-column grid; tablet/mobilde 1-column dikey akış.
- **Keyboard Access**: Kartlar veya kart içi aksiyonlar klavye ile odaklanabilir.

## 10. Automated Verification

- Card Count Check: DOM'da render edilen `.service-card` eleman sayısının tam olarak 3 olduğu doğrulanır.

## 11. Manual QA / Debug Verification

- Kart başlıklarının kesinlikle "Yedek Parça Temini", "Yerinde Teknik Destek", "Makine Bakım ve Onarım" olduğu ve ekstra uydurma iddia taşımadığı teyit edilir.

## 12. Acceptance / Exit Criteria

- [ ] `Services.js`, `ServiceCard.js` ve `services.css` hatasız yükleniyor ve render ediliyor.
- [ ] Hizmetler alanında tam olarak 3 approved hizmet kartı sergileniyor.
- [ ] Hiçbir uydurma stok, mobil araç veya SLA süresi barındırmıyor.

## 13. Handoff / Stop Rule

`WAVE_03` tamamlandığında Hizmetler bölümü `WAVE_04` (Direct Contact Surface & CTA Presentation) dalgasına teslim edilir.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
