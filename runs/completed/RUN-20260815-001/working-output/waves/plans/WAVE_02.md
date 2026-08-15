# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_02: Corporate Background & Regional Context Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Trakya bölgesi endüstriyel ve makine teknik servis bağlamını ve kurumsal güven unsurlarını sunan Kurumsal Tanıtım bölümünü inşa etmektir.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_02
- **Name**: Corporate Background & Regional Context Presentation
- **Goal**: Trakya bölgesi endüstriyel makine servis bağlamı ve kurumsal güven sunumu
- **Primary Deliverables**: `src/components/About.js`, `src/styles/about.css`
- **Upstream Boundary Consumed**: `WAVE_01` Header/Hero yerleşimi ve `companyService.js` verisi
- **Downstream Handoff**: `WAVE_03` için hazır Kurumsal Tanıtım bölümü

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Trakya bölgesi endüstriyel makine servis bağlamı sunumu | `Trakya bölgesi endüstriyel makine servis bağlamı sunumu` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Hero katmanından hemen sonra ziyaretçiye firmanın faaliyet bölgesini ve teknik servis bağlamını açıklayan kurumsal alan bağımsız bir sunum modülüdür. Hizmet spesifikasyon kartlarından (`WAVE_03`) önce firmanın kurumsal bağlamını yerleştirmek bilgi hiyerarşisini güçlendirir.

## 4. Canonical Sources to Read

- `working-output/ai/PROJECT_BRAIN.md`
- `working-output/ai/PRODUCT_RULES.md` (BC-001)
- `working-output/design/DESIGN_RULES.md` (Section 1, 3, 4)
- `working-output/waves/WAVE_MAP.md` (WAVE_02 Entry)
- `SOURCE_REGISTER.md` (FCL-006)

## 5. Dependencies

- **Upstream Dependencies**: `WAVE_01` (`Header.js`, `Hero.js`, `companyService.js`).
- **Downstream Consumers**: `WAVE_03`, `WAVE_04`, `WAVE_05`.

## 6. Scope

### In Scope
- Kurumsal Tanıtım bileşeni (`src/components/About.js`).
- Visual styling (`src/styles/about.css`).
- FCL-006: "Trakya bölgesi endüstriyel/makine teknik servis bağlamı" sunumu.

### Out of Scope
- Uydurma şube adresleri, fiziksel tesis bilgisi, çalışma saatleri, sertifika numaraları.
- 3 approved hizmet kartının gösterimi (`WAVE_03` kapsamındadır).

## 7. Expected Result / Target Structure

```text
/
└── src/
    ├── components/
    │   ├── Header.js
    │   ├── Hero.js
    │   └── About.js
    └── styles/
        ├── index.css
        ├── hero.css
        └── about.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Corporate & Regional Context Component (`About.js`)**
  - **Location/Responsibility**: `src/components/About.js`
  - **Parent Capability Relation**: `Trakya bölgesi endüstriyel makine servis bağlamı sunumu` (implementation-of)
  - **Inputs/Dependencies**: `companyService.getCompanyInfo()` verileri.
  - **Behavior**:
    - Section başlığı: "Kurumsal Yapımız ve Bölgesel Bağlam"
    - Tanıtım Kartı: Trakya bölgesindeki endüstriyel tesisler ve makine kullanıcıları için sağlanan teknik servis bağlamının sunumu (FCL-006)
    - Yetkili Servis Vurgu Kutusu: Disan Hidrolik Yetkili Servis kimliği ile bölgesel teknik destek güvencesi.
  - **Preserve/Must-Not**: Şube adresi, sertifika numarası, çalışan sayısı veya SLA garantisi uydurulamaz.
  - **FCL Boundary**: FCL-002 & FCL-006.
  - **Verification**: `About.js` render edilerek metin içerikleri FCL ile karşılaştırılır.
  - **Done Result**: Kurumsal Tanıtım bileşeni hazır.

- [ ] **Task 2: Corporate Section CSS Styling (`about.css`)**
  - **Location/Responsibility**: `src/styles/about.css`
  - **Parent Capability Relation**: `Trakya bölgesi endüstriyel makine servis bağlamı sunumu` (detail-of)
  - **Inputs/Dependencies**: `DESIGN_RULES.md` yüzey ve renk kuralları.
  - **Behavior**: `Surface Elevation` (`#1A2026`) antrasit kart zeminleri, `Technical Border` (`#2E3842`) keski sınır çizgileri, 2-column asymmetric grid layout.
  - **Preserve/Must-Not**: Taşma (overflow) yapan veya okunamayan renk kombinasyonu kullanılamaz.
  - **Verification**: Farklı ekran genişliklerinde padding, border ve tipografi hizalaması test edilir.
  - **Done Result**: Responsive Kurumsal Tanıtım stilleri hazır.

## 9. State / Role / Responsive Coverage

- **Responsive View**: Desktop'ta 2-column layout; mobilde 1-column akış.
- **Accessibility**: Yüksek metin kontrastı (WCAG AA) ve semantik `<section>` yapısı.

## 10. Automated Verification

- Component Structure Check: `About.js` bileşeninin `<section id="about">` yapısını hatasız ürettiği denetlenir.

## 11. Manual QA / Debug Verification

- Kurumsal metnin FCL-006 ("Trakya bölgesi endüstriyel/makine teknik servis bağlamı") dışına taşmadığı kelime kelime doğrulanır.

## 12. Acceptance / Exit Criteria

- [ ] `About.js` ve `about.css` hatasız yükleniyor ve render ediliyor.
- [ ] Trakya bölgesi teknik servis bağlamı FCL sınırları içinde sunuluyor.
- [ ] Hiçbir uydurma firma iddiası veya adresi barındırmıyor.

## 13. Handoff / Stop Rule

`WAVE_02` tamamlandığında Kurumsal Tanıtım bölümü `WAVE_03` (Services Showcase Presentation) dalgasına teslim edilir.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
