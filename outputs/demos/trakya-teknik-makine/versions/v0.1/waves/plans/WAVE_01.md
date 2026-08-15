# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_01: Brand Identity & Primary Hero Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Trakya Teknik Makine kurumsal kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve birincil direct-contact CTA alanını taşıyan Header Shell ve Hero bölümünü inşa etmektir.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_01
- **Name**: Brand Identity & Primary Hero Presentation
- **Goal**: Firma kimliği ve yetkili servis statüsünün hero sunumu
- **Primary Deliverables**: `src/components/Header.js`, `src/components/Hero.js`, `src/styles/hero.css`
- **Upstream Boundary Consumed**: `WAVE_00` servis katmanı (`companyService.js`) ve temel CSS değişkenleri
- **Downstream Handoff**: `WAVE_02` için hazır Header ve Hero bölümü ile tamamlanmış üst alan düzeni

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Trakya Teknik Makine kurumsal adı sunumu | `Trakya Teknik Makine kurumsal adı sunumu` | implementation-of | PASS |
| Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü sunumu | `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü sunumu` | implementation-of | PASS |
| Hero seviyesi direct contact CTA sunumu | `Hero seviyesi direct contact CTA` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Hero bölümü proaktif satış görüşmelerinde müşterinin karşılaştığı ilk 5 saniyelik görsel güven ve kimlik katmanıdır. Diğer detay hizmet ve iletişim modüllerinden önce birincil marka adı ve yetkili servis güvencesi sunumu olarak tamamlanmalıdır.

## 4. Canonical Sources to Read

- `working-output/ai/PROJECT_BRAIN.md`
- `working-output/ai/PRODUCT_RULES.md` (PR-001, BC-001, UX-002, UX-003)
- `working-output/ai/TECH_CONTEXT.md` (Section 3)
- `working-output/design/DESIGN_RULES.md` (Section 1, 2, 4, 5)
- `working-output/waves/WAVE_MAP.md` (WAVE_01 Entry)
- `SOURCE_REGISTER.md` (FCL-001, FCL-002, FCL-004, FCL-007)

## 5. Dependencies

- **Upstream Dependencies**: `WAVE_00` (`index.html`, `index.css`, `companyService.js`).
- **Downstream Consumers**: `WAVE_02`, `WAVE_03`, `WAVE_04`, `WAVE_05`.

## 6. Scope

### In Scope
- Header Shell bileşeni (`src/components/Header.js`).
- Hero Section bileşeni (`src/components/Hero.js`).
- Hero visual styling (`src/styles/hero.css`).
- FCL-001: "Trakya Teknik Makine" marka ismi sunumu.
- FCL-002: "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" rozeti ve vurgusu.
- FCL-007: Telefon (`tel:`) ve E-posta (`mailto:`) direct contact CTA'ları.

### Out of Scope
- WhatsApp butonu, canlı chat, interaktif harita.
- Stok durumu, acil 7/24 servis, mobil araç sayısı, SLA süresi iddiaları.
- Hizmetler grid'i (`WAVE_03` kapsamındadır).

## 7. Expected Result / Target Structure

```text
/
├── index.html
└── src/
    ├── components/
    │   ├── Header.js
    │   └── Hero.js
    ├── services/
    │   └── companyService.js
    └── styles/
        ├── index.css
        └── hero.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Header Shell Component Implementation (`Header.js`)**
  - **Location/Responsibility**: `src/components/Header.js`
  - **Parent Capability Relation**: `Trakya Teknik Makine kurumsal adı sunumu` (implementation-of)
  - **Inputs/Dependencies**: `companyService.js` (FCL-001 marka adı).
  - **Behavior**: Sticky header container, marka adı logosu ("Trakya Teknik Makine"), navigasyon linkleri (#hero, #about, #services, #contact), hızlı arama CTA butonu (`tel:` linki).
  - **Preserve/Must-Not**: İkinci bir header ağacı veya yetkisiz arama modülü eklenemez.
  - **FCL Boundary**: Marka adı strictly FCL-001.
  - **Verification**: Header render edilir, navigasyon linkleri ve tel: CTA taranır.
  - **Done Result**: Kurumsal Header Shell bileşeni hazır.

- [ ] **Task 2: Authorized Service Hero Section Implementation (`Hero.js`)**
  - **Location/Responsibility**: `src/components/Hero.js`
  - **Parent Capability Relation**: `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü sunumu` & `Hero seviyesi direct contact CTA` (implementation-of)
  - **Inputs/Dependencies**: `companyService.getCompanyInfo()` verileri.
  - **Behavior**:
    - Tek `h1` başlığı: "Trakya Teknik Makine" (FCL-001)
    - Özel Yetkili Servis Badge'i: "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" (FCL-002)
    - Giriş Destek Metni: Trakya bölgesindeki endüstriyel ve makine teknik servis bağlamı (FCL-006)
    - İki Birincil CTA Butonu: "Hemen Ara" (`tel:`) ve "E-posta Gönder" (`mailto:`) (FCL-007)
  - **Preserve/Must-Not**: 7/24 acil servis, mobil araç sayısı, stok adedi veya SLA süresi eklenemez.
  - **FCL Boundary**: FCL-001, FCL-002, FCL-004, FCL-006, FCL-007.
  - **Verification**: DOM taranır; `h1`, rozet ve `tel:`/`mailto:` linkleri doğrulanır.
  - **Done Result**: Hero presentation bileşeni hazır.

- [ ] **Task 3: Hero & Header CSS Styling (`hero.css`)**
  - **Location/Responsibility**: `src/styles/hero.css`
  - **Parent Capability Relation**: `Trakya Teknik Makine kurumsal adı sunumu` (detail-of)
  - **Inputs/Dependencies**: `DESIGN_RULES.md` renk ve tipografi kuralları.
  - **Behavior**: Antrasit zemin üzerine teknik turuncu badge ve CTA stili, hover efektleri (`transform: translateY(-2px)`), mobil ekranlarda dikey responsive stacking.
  - **Preserve/Must-Not**: Lacivert hero klişesi kullanılamaz.
  - **Verification**: Ekran genişliklerinde (1024px, 768px, 480px) responsive görünüm test edilir.
  - **Done Result**: Endüstriyel karakterli responsive Hero stilleri hazır.

## 9. State / Role / Responsive Coverage

- **Loading State**: `companyService` verisi yüklenirken layout sıçramasını önleyen skeleton placeholder.
- **Responsive Stacking**: Masaüstünde 2-column hero layout; mobilde dikey akış ve 44px+ CTA touch hedefleri.
- **Keyboard Access**: Header ve Hero CTA'ları klavye Tab navigasyonu ile odaklanabilir.

## 10. Automated Verification

- Component DOM render check: `Header.js` ve `Hero.js` fonksiyonlarının DOM elemanlarını hatasız döndürdüğü kontrol edilir.
- Link Protocol Check: CTA href değerlerinin `tel:` ve `mailto:` ile başladığı doğrulanır.

## 11. Manual QA / Debug Verification

- Mobil view (375px) ve desktop view (1440px) ekranlarında Hero visual alignment denetlenir.
- "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" metninin eksiksiz göründüğü teyit edilir.

## 12. Acceptance / Exit Criteria

- [ ] `Header.js` ve `Hero.js` hatasız render oluyor.
- [ ] Yetkili Servis rozeti (FCL-002) belirgin şekilde sergileniyor.
- [ ] Hero CTA butonları tıklanabilir `tel:` ve `mailto:` bağlantıları taşımıdır.
- [ ] FCL dışı hiçbir uydurma veri yer almıyor.

## 13. Handoff / Stop Rule

`WAVE_01` tamamlandığında `Header` ve `Hero` bileşenleri `WAVE_02` (Corporate Background & Regional Context Presentation) dalgasına teslim edilir.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
