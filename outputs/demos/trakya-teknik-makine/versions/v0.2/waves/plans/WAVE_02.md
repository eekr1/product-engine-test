# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_02: Core Services Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Approved 3 temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel ve detay sunumunun yapılması.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_02
Name: Core Services Presentation
Goal: Approved 3 temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel ve detay sunumunun yapılması.
Why Separate: Hizmet sunumu firmanın ticari değer ürettiği ana alandır ve Contact dalgasından ayrı bağımsız bir kart/detay mimarisine sahiptir.
Committed Capabilities:
  - Hizmet 1: Yedek Parça Temini kart ve teknik detay alanı | SCP-003 | IN_SCOPE | YES | Yedek parça hizmet sunumu | PASS | PASS | PASS
  - Hizmet 2: Yerinde Teknik Destek kart ve teknik detay alanı | SCP-004 | IN_SCOPE | YES | Yerinde destek hizmet sunumu | PASS | PASS | PASS
  - Hizmet 3: Makine Bakım ve Onarım kart ve teknik detay alanı | SCP-005 | IN_SCOPE | YES | Bakım-onarım hizmet sunumu | PASS | PASS | PASS
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Service Card 1: Yedek Parça Temini (`services.js`) | Hizmet 1: Yedek Parça Temini kart ve detay alanı | implementation-of | PASS |
| Service Card 2: Yerinde Teknik Destek (`services.js`) | Hizmet 2: Yerinde Teknik Destek kart ve detay alanı | implementation-of | PASS |
| Service Card 3: Makine Bakım ve Onarım (`services.js`) | Hizmet 3: Makine Bakım ve Onarım kart ve detay alanı | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Hizmet kartları firmanın yetkinliklerini müşteriye gösteren ana vitrindir. `demo-frontend` kuralı uyarınca Services dalgası Contact dalgasından ayrı bir teslimat sınırına sahiptir.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (FCL-03, FCL-04, FCL-05)
- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md` (PR-BUS-02)
- `tech/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`

## 5. Dependencies

- `WAVE_00`, `WAVE_01` tamamlanmış olmalıdır.

## 6. Scope

### In Scope
- Hizmetler bölümü başlığı ve alt açıklama metni.
- 3 approved hizmet kartının responsive grid kompozisyonu (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`).
- Kart hover efektleri, teknik ikonografi ve mikro-etkileşimler.
- `dataService.getServices()` üzerinden dinamik veri çekimi.

### Out of Scope
- Kaynakta yer almayan 4. bir hizmet veya alt qualifier (stok, mobil filo, 7/24 acil vb.).
- Fiyatlandırma, e-ticaret sepeti veya canlı randevu takvimi.

## 7. Expected Result / Target Structure

```text
src/
├── ui/
│   └── services.js
└── styles/
    └── services.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Services Section Container & Header**
  - **Location / Responsibility**: `src/ui/services.js`, `src/styles/services.css`
  - **Parent Capability Relation**: implementation-of (Approved hizmetlerin genel sunumu)
  - **Dependencies**: `WAVE_00`, `WAVE_01`
  - **Behavior**: `h2` seviyesinde Hizmetlerimiz başlığı ve kurumsal açıklama alanı.
  - **Done Result**: Services bölümü kapsayıcısının hatasız oluşturulması.

- [ ] **Task 2: 3 Core Approved Service Cards Rendering**
  - **Location / Responsibility**: `src/ui/services.js`
  - **Parent Capability Relation**: implementation-of (Hizmet 1, Hizmet 2, Hizmet 3 sunumu)
  - **Dependencies**: Task 1
  - **Behavior**: `dataService.getServices()` fonksiyonundan dönen 3 nesnenin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) kart yapısında döngüyle render edilmesi.
  - **FCL Boundary**: FCL-03, FCL-04 ve FCL-05 unvanları birebir korunacaktır. Uydurma iddialar yazılmayacaktır.
  - **Done Result**: 3 hizmet kartının ekranda eksiksiz görünmesi.

- [ ] **Task 3: Card Interactivity & Responsive Grid Styling**
  - **Location / Responsibility**: `src/styles/services.css`
  - **Parent Capability Relation**: implementation-of (Kart teknik detay ve etkileşimleri)
  - **Dependencies**: Task 2
  - **Behavior**: Masaüstünde 3 sütunlu grid, tablette 2 sütun, mobilde 1 sütun stacked düzen; kart hover durumunda 200ms `transform: translateY(-4px)` ve accent border parlaması.
  - **Done Result**: Çapraz cihazlarda responsive ve etkileşimli hizmet vitrini.

## 9. State / Role / Responsive Coverage

- **Desktop (1024px+)**: 3 column grid.
- **Tablet (640px - 1024px)**: 2 column grid.
- **Mobile (< 640px)**: 1 column stacked grid.
- **Data Boundary**: Static JS object rendering.

## 10. Automated Verification

- [ ] DOM element count validation (exactly 3 service cards rendered).
- [ ] Responsive CSS grid rule check.

## 11. Manual QA / Debug Verification

- [ ] 3 approved hizmetin isimlerinin doğru olduğunun kontrol edilmesi.
- [ ] Hover ve odaklanma durumlarında görsel parlamanın doğrulanması.

## 12. Acceptance / Exit Criteria

- [x] 3 approved hizmet (Yedek Parça, Yerinde Destek, Bakım-Onarım) eksiksiz sunuluyor.
- [x] Uydurma hizmet veya alt qualifier bulunmuyor.
- [x] Kartlar responsive ve modern endüstriyel tasarıma sahip.

## 13. Handoff / Stop Rule

- `WAVE_02` tamamlandıktan sonra `WAVE_03` (Direct Contact Surface) eklenecektir.

---

## Wave Result

- **Status**: Pending Execution
