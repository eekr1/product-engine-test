# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_02: Core Services Presentation Surface

- **Status**: Completed
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: 3 approved hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel kartlar ve grid düzeninde sunulması.

## 1. Parent Wave Map Entry

- **Wave ID**: `WAVE_02`
- **Name**: Core Services Presentation Surface
- **Committed Capabilities**:
  - `3 approved services visual presentation grid & card surfaces (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım)` (`SCP-004`)
  - `Service data consumption via dataService.getServices() adapter` (`SCP-006`)
- **Upstream Boundary Consumed**: `WAVE_00` data adapter & `WAVE_01` hero section.
- **Downstream Handoff**: 3 approved services visual presentation grid module ready for contact section.

## 2. Parent Capability Coverage

| Plan Task / Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| `Task 02.1: Core Services Grid & Container` | `3 approved services visual presentation grid & card surfaces (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım)` | `implementation-of` | `PASS` |
| `Task 02.2: Service Card Presentation Component` | `3 approved services visual presentation grid & card surfaces (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım)` | `implementation-of` | `PASS` |
| `Task 02.3: Data Service Integration` | `Service data consumption via dataService.getServices() adapter` | `implementation-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

Hizmetlerin sergilenmesi firmanın ana faaliyet alanını potansiyel müşterilere aktaran birincil işlevsel içeriktir. `WAVE_00` adapter'ı ve `WAVE_01` hero başlığı hazır olduktan sonra bağımsız modül olarak inşası gereklidir.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_00` (Foundation Shell & Data Adapter).
- `WAVE_01` (Hero & Brand Identity Surface).

## 6. Scope

### In Scope
- Ana Hizmetler Bölüm Kapsayıcısı (`src/components/ServicesSection.js`).
- Hizmet Kart Bileşeni (`src/components/ServiceCard.js`).
- Stil dosyası (`src/styles/services.css`).
- 3 onaylı hizmetin sunumu (FCL-003: `Yedek Parça Temini`, FCL-004: `Yerinde Teknik Destek`, FCL-005: `Makine Bakım ve Onarım`).
- `dataService.getServices()` entegrasyonu.

### Out of Scope
- Stok garantisi, orijinal parça garantisi, mobil filo, acil müdahale SLA, periyodik bakım detayları, revizyon yetkinliği veya spesifik makine türleri uydurmak.
- Direct contact CTA butonları (`WAVE_03` kapsamındadır).

## 7. Expected Result / Target Structure

```text
src/
├── components/
│   ├── ServicesSection.js
│   └── ServiceCard.js
└── styles/
    └── services.css
```

## 8. Implementation Checklist

- [x] **Task 02.1 — Build Core Services Section & Grid Container**:
  - **Location / Responsibility**: `src/components/ServicesSection.js` ve `src/styles/services.css`. Hizmetler bölüm başlığı (`Hizmetlerimiz`) ve 3 kolonlu responsive grid kapsayıcısının oluşturulması.
  - **Parent Capability Relation**: `implementation-of` (`3 approved services visual presentation grid & card surfaces`).
  - **Inputs / Contracts**: `DESIGN_RULES.md#Section 3, 4`. CSS Grid layout (desktop 3 kolon, mobile 1 kolon).
  - **Implementation Behavior**: Section başlığını ve grid container'ını render eder. Grid boşlukları `1.5rem` gap ile ayarlanır.
  - **States / Responsive**: Desktop (1200px+) 3-column grid; Mobile (320px-767px) 1-column dikey akış.
  - **Preserve / Must Not**: 3 approved hizmet dışında sahte 4. veya 5. hizmet eklenmeyecektir.
  - **FCL / Source Boundary**: FCL-003, FCL-004, FCL-005.
  - **Verification**: Tarayıcıda 3 kolonlu grid yapısının kırılmadan render edilmesi.
  - **Done Result**: Hizmetler kapsayıcı bileşeni.

- [x] **Task 02.2 — Build Individual Service Card Presentation Components**:
  - **Location / Responsibility**: `src/components/ServiceCard.js` ve `src/styles/services.css`. Her bir onaylı hizmet için görsel kart anatomisinin (ikon, hizmet adı, teknik açıklama kartı) geliştirilmesi.
  - **Parent Capability Relation**: `implementation-of` (`3 approved services visual presentation grid & card surfaces`).
  - **Inputs / Contracts**: FCL-003 (`Yedek Parça Temini`), FCL-004 (`Yerinde Teknik Destek`), FCL-005 (`Makine Bakım ve Onarım`). `DESIGN_RULES.md#Section 4` (yüzey rengi `#1E293B`, kenarlık `#334155`).
  - **Implementation Behavior**: Hizmet objesini prop olarak alır. Kart üzerinde endüstriyel ikon, hizmet başlığı ve onaylı kapsam tanımını gösterir. Pürüzsüz 200ms hover yukarıkayma efekti uygular.
  - **States / Responsive**: Normal state, hover state (`translateY(-4px)`), mobile touch state.
  - **Preserve / Must Not**: Hizmet detaylarına stok, mobil filo, acil müdahale SLA, periyodik bakım detayları gibi FCL dışı iddialar eklenmeyecektir.
  - **FCL / Source Boundary**: FCL-003, FCL-004, FCL-005 exact names and approved presentation bounds.
  - **Verification**: Kartlarda 3 approved hizmet adının eksiksiz görünmesi.
  - **Done Result**: Hizmet kart bileşeni.

- [x] **Task 02.3 — Integrate Data Access Service Adapter**:
  - **Location / Responsibility**: `src/components/ServicesSection.js`. `dataService.getServices()` metodu ile kartların dinamik beslenmesi.
  - **Parent Capability Relation**: `implementation-of` (`Service data consumption via dataService.getServices() adapter`).
  - **Inputs / Contracts**: `src/services/dataService.js`.
  - **Implementation Behavior**: Asenkron olarak `dataService.getServices()` çağırır ve dönen 3 hizmet objesini `ServiceCard` bileşenlerine map eder.
  - **States / Responsive**: Initial loading state'te skeleton kartlar gösterir.
  - **Preserve / Must Not**: UI bileşenleri mock verileri kendi içine hardcode etmeyecektir.
  - **Verification**: `dataService` mock verileri güncellendiğinde UI kartlarının otomatik güncellendiğinin testi.
  - **Done Result**: Adapter-integrated hizmetler modülü.

## 9. State / Role / Responsive Coverage

- **Normal State**: 3 hizmet kartı `dataService.js` üzerinden okunup rendering tamamlanır.
- **Loading State**: Hizmet verisi yüklenirken skeleton kart geometrisi korunur.
- **Responsive Coverage**: Desktop 3-column layout -> Mobile 1-column layout transition.

## 10. Automated Verification

- `ServicesSection` renders exactly 3 `ServiceCard` elements.
- Rendered titles match: `Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`.
- No unapproved service titles present.

## 11. Manual QA / Debug Verification

- Masaüstü görünümde 3 kartın aynı yükseklikte ve hizada durduğunu kontrol et.
- Mobil görünümde (320px) kartların ekrana sığdığını ve dokunma alanlarının rahat olduğunu doğrula.
- Kart içeriklerinde FCL dışı uydurma iddia (stok, mobil filo, acil servis) bulunmadığını denetle.

## 12. Acceptance / Exit Criteria

- [x] Onaylı 3 hizmet (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) eksiksiz render edilmektedir.
- [x] Kartlar verilerini `dataService.getServices()` üzerinden okumaktadır.
- [x] Tasarım `DESIGN_RULES.md` renk ve yüzey kontratlarına uygundur.
- [x] Prototype satış demosu olgunluğunda responsive kart kalitesi sağlanmıştır.

## 13. Handoff / Stop Rule

`WAVE_02` tamamlandığında hizmetler modülü `WAVE_03` (Direct Contact CTA Yüzeyi) geliştirmesine devredilir.

---
## Wave Result

*Execution Complete — Core services presentation surface fully implemented and verified in `products/trakya-teknik-makine/`.*
