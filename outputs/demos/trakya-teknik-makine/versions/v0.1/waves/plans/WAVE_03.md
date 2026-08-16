# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_03: Core Services Showcase Section

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Üç onaylı hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel vitrin kartlarını ve detay overlay katmanını (`src/components/services/ServicesSection.js`, `ServiceCard.js`, `ServiceDetailModal.js`) inşa etmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_03
Name: Core Services Showcase Section
Goal: Üç onaylı hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel vitrin kartlarını inşa etmek.
Why Separate: Firmanın üç temel hizmet sunumu ana değer önermesini oluşturduğu için bağımsız ve detaylı bir wave olarak ele alınmalıdır.
Committed Capabilities:
- SCP-003 (Core Services Showcase)
In Scope: ServicesSection.js, ServiceCard.js, ServiceDetailModal.js
Out of Scope: Hizmet 1 için orijinal parça/stok garantisi, Hizmet 2 için mobil filo/SLA, Hizmet 3 için pres revizyonu/periyodik bakım paketi gibi uydurma iddialar
Primary Deliverables: ServicesSection.js, ServiceCard.js, ServiceDetailModal.js
Dependencies: WAVE_02
Upstream Boundary Consumed: WAVE_02 Hero alanı
Downstream Handoff: WAVE_04 kurumsal tanıtım ve direct-contact alanına hizmet verisi akışı
Exit Boundary: Üç onaylı hizmet kartı ve detay overlay'leri tarayıcıda akıcı biçimde incelenebiliyor
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Approved 3 Services Showcase Grid & Cards | `SCP-003 (Core Services Showcase)` | implementation-of | PASS |
| Service Detail Overlay & Direct Contact Trigger | `SCP-003 (Core Services Showcase)` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_03`, potansiyel müşterilerin firmanın sunduğu üç temel teknik hizmeti (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) detaylarıyla incelediği ana ürün vitrinidir. `WAVE_02` hero bölümünün hemen altında bağımsız ve vurgulu bir bölüm olarak yer alır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `SOURCE_REGISTER.md` (`FCL-003`, `FCL-004`, `FCL-005`)

## 5. Dependencies

- `WAVE_02` (Hero & Brand Positioning Section).

## 6. Scope

### In Scope
- `src/components/services/ServicesSection.js`: Hizmetler alanının 3-column grid mizanpajı ve başlık hiyerarşisi.
- `src/components/services/ServiceCard.js`: Üç onaylı hizmet için özelleştirilmiş teknik ikon, başlık ve kısa tanım kartları:
  1. `Yedek Parça Temini` (`FCL-003`)
  2. `Yerinde Teknik Destek` (`FCL-004`)
  3. `Makine Bakım ve Onarım` (`FCL-005`)
- `src/components/services/ServiceDetailModal.js`: Hizmet kartına tıklandığında açılan detay overlay penceresi ve direct contact `tel:` / `mailto:` butonu.

### Out of Scope
- `Yedek Parça Temini` için stok garantisi veya orijinal parça iddiaları.
- `Yerinde Teknik Destek` için mobil filo, acil 7/24 müdahale veya SLA iddiaları.
- `Makine Bakım ve Onarım` için periyodik bakım paketleri veya pres revizyonu gibi alt kapsam uydurmaları.

## 7. Expected Result / Target Structure

```text
runs/active/RUN-20260817-002/working-output/
└── src/
    └── components/
        └── services/
            ├── ServicesSection.js
            ├── ServiceCard.js
            └── ServiceDetailModal.js
```

## 8. Implementation Checklist

- [ ] **Task 3.1 (Services Grid Container Component)**:
  - **Location**: `src/components/services/ServicesSection.js`
  - **Responsibility**: `#services` bölümünün oluşturulması, 3-column responsive grid yapısı ve bölüm başlığı (`Hizmetlerimiz`).
  - **Parent Capability Relation**: `implementation-of` (`SCP-003`)
  - **Inputs / Contracts**: `getServices()` adapter metodu.
  - **Behavior**: Masaüstünde 3 kolon, mobilde dikey dökülen kartlar.
  - **Preserve**: Spacing rhythm 32px gap.
  - **Verification**: Grid layout render check.
  - **Done**: Services container complete.

- [ ] **Task 3.2 (Service Card Component)**:
  - **Location**: `src/components/services/ServiceCard.js`
  - **Responsibility**: Üç onaylı hizmet verisini alıp ikon, başlık ve FCL allowlist ile sınırlı açıklama sunan interaktif kart bileşeni.
  - **Parent Capability Relation**: `implementation-of` (`SCP-003`)
  - **Inputs / Contracts**: `FCL-003`, `FCL-004`, `FCL-005` data objects.
  - **Behavior**: Yumuşak hover elevation (`translateY(-4px)`), belirgin amber accent kenarlık.
  - **Preserve**: Strict FCL wording.
  - **Verification**: Hover & text accuracy check.
  - **Done**: Service cards complete.

- [ ] **Task 3.3 (Service Detail Overlay Modal)**:
  - **Location**: `src/components/services/ServiceDetailModal.js`
  - **Responsibility**: Hizmet kartına tıklandığında açılan modal overlay, detay tanımı ve doğrudan telefon/e-posta CTA tetikleyici alanı.
  - **Parent Capability Relation**: `implementation-of` (`SCP-003`)
  - **Inputs / Contracts**: Selected service state.
  - **Behavior**: Arka plan karartması, ESC veya kapatma butonu ile kapanma, keyboard focus trap.
  - **Preserve**: No speculative factual additions in detail modal.
  - **Verification**: Modal open/close & keyboard accessibility test.
  - **Done**: Detail modal complete.

## 9. State / Role / Responsive Coverage

- **Normal State**: 3 hizmet kartı yan yana veya dikey olarak akıcı biçimde listelenir.
- **Active / Modal Open State**: Seçilen hizmetin detay overlay penceresi açılır, `aria-modal="true"` ve focus trap aktif olur.
- **Responsive Layout**: Desktop 3-column (3x1), Tablet 2-column + 1 full width, Mobile 1-column (1x3).

## 10. Automated Verification

```bash
# Check file creation
ls -la src/components/services/ServicesSection.js src/components/services/ServiceCard.js src/components/services/ServiceDetailModal.js
```

## 11. Manual QA / Debug Verification

- Üç kartın da başlıklarını denetle (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`). Metinlerde FCL allowlist dışı uydurma iddia olmadığını doğrula.
- Bir karta tıklandığında modal penceresinin açıldığını ve kapatma butonuna basıldığında kapandığını test et.

## 12. Acceptance / Exit Criteria

- [ ] `ServicesSection.js`, `ServiceCard.js` ve `ServiceDetailModal.js` dosyaları hatasız yazılmıştır.
- [ ] Üç onaylı hizmet eksiksiz ve FCL sınırlarına dürüstçe uyarak sunulmaktadır.
- [ ] Hizmet detay modal penceresi ve direct contact CTA butonları sorunsuz çalışmaktadır.
- [ ] `WAVE_04` kurumsal tanıtım bölümü için üst hizmetler alanı hazırdır.

## 13. Handoff / Stop Rule

`WAVE_03` tamamlandığında `WAVE_04` Corporate Overview & Direct Contact Surface checkpoint'ine geçilir.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
