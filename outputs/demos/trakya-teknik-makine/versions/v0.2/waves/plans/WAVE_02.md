# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_02: Services Presentation Surface

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Firmanın 3 temel hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) detaylı, modern ve güven veren kartlarla sunmak.

## 1. Parent Wave Map Entry

- **Goal**: Firmanın 3 temel hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) detaylı, modern me güven veren kartlarla sunmak.
- **Why Separate**: Hizmet sunumu firmanın ana teklifidir; Contact ve Hero sorumluluklarından bağımsız olarak kart yapısı, teknik detaylar ve ikincil eylemler içerecektir.
- **Committed Capabilities**:
  - Ana Hizmet 1: Yedek Parça Temini | SCP-005 | Orijinal yedek parça temini ve stok bilgisi sunumu | PASS
  - Ana Hizmet 2: Yerinde Teknik Destek | SCP-005 | Trakya bölgesi mobil teknik servis ve arıza müdahale sunumu | PASS
  - Ana Hizmet 3: Makine Bakım ve Onarım | SCP-005 | Hidrolik makine ve ağır sanayi ekipmanı periyodik bakım sunumu | PASS
- **In Scope**: 3'lü hizmet grid yapısı, hover efektli teknik detay kartları, ikonografik hizalama.
- **Out of Scope**: Sepet/e-ticaret, online randevu takvimi, sahte teklif alma formu.
- **Primary Deliverables**: `ServicesSection` yapısı, `ServiceCard` bileşenleri.
- **Dependencies**: `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_01` sayfa akışı ve `MachineService.getServices()` verisi.
- **Downstream Handoff**: `WAVE_03` için hazır hizmet bölümü.
- **Exit Boundary**: 3 hizmet alanı grid/flex yapısında düzgün sıralanmalı, kart hover etkileşimleri çalışmalıdır.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Services Section grid layout & container | Ana Hizmet 1: Yedek Parça Temini | implementation-of | PASS |
| Service Card 1 (Yedek Parça Temini) | Ana Hizmet 1: Yedek Parça Temini | implementation-of | PASS |
| Service Card 2 (Yerinde Teknik Destek) | Ana Hizmet 2: Yerinde Teknik Destek | implementation-of | PASS |
| Service Card 3 (Makine Bakım ve Onarım) | Ana Hizmet 3: Makine Bakım ve Onarım | implementation-of | PASS |
| `MachineService.getServices()` integration | Ana Hizmet 1: Yedek Parça Temini | detail-of | PASS |
| Service Cards Verification & Rendering Tests | Ana Hizmet 1: Yedek Parça Temini | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

- Hizmetler bölümü firmanın uzmanlık alanlarını sergilediği ana bölümdür. `WAVE_01` sayfa düzenini tüketir ve `MachineService.getServices()` verisini ekrana basar.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_01` (Hero & Corporate Trust Surface)

## 6. Scope

### In Scope
- 3'lü Hizmet Kartları Grid/Flex Yapısı (`id="services"`).
- Hizmet 1: Yedek Parça Temini (Disan Hidrolik & genel ağır sanayi yedek parça tedariği).
- Hizmet 2: Yerinde Teknik Destek (Trakya genelinde yetkili servis mobil arıza müdahale).
- Hizmet 3: Makine Bakım ve Onarım (Hidrolik pres, güç ünitesi ve makine revizyonu).
- Kart hover dinamizmi (`translateY(-4px)` ve `#FF6B00` amber border parlaması).

### Out of Scope
- Sepet, online e-ticaret ödemesi veya stok sorgulama yazılımı.
- Sahte randevu/teklif formu modalları.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html (Hizmetlerimiz bölümü eklenmiş)
└── src/
    ├── components/
    │   ├── ServicesSection.js
    │   └── ServiceCard.js
    └── styles/
        └── services.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Services Grid & Data Integration**
  - **Location / Responsibility**: `src/components/ServicesSection.js`, `src/styles/services.css`.
  - **Parent Capability Relation**: implementation-of `Ana Hizmet 1: Yedek Parça Temini`.
  - **Inputs / Contracts**: `MachineService.getServices()` async kontratı.
  - **Implementation Behavior**: Bölüm başlığı ("Uzmanlık Alanlarımız & Hizmetlerimiz"), alt açıklama ve 3 kartlık duyarlı grid kapsayıcısı (`#services`).
  - **Verification**: `MachineService.getServices()` çağrısı ile verinin dinamik çekilmesi.
  - **Concrete Done Result**: `ServicesSection` kapsayıcısı ve başlıkları hazır.

- [ ] **Task 2: 3 Core Service Card Components Implementation**
  - **Location / Responsibility**: `src/components/ServiceCard.js`.
  - **Parent Capability Relation**: implementation-of `Ana Hizmet 1`, `Ana Hizmet 2`, `Ana Hizmet 3`.
  - **Inputs / Contracts**: FCL-03 (Yedek Parça), FCL-04 (Teknik Destek), FCL-05 (Bakım-Onarım).
  - **Implementation Behavior**: Her hizmet için ikon, teknik etiket, başlık, detay açıklaması ve "Bilgi Al" ikincil CTA bağlantısı içeren kart anatomisi (`#1E2530` grafit zemin).
  - **Preserve / Must Not**: 3 dışında doğrulanmamış 4. bir hizmet alanı eklememe.
  - **Verification**: 3 kartın da doğru veri ve ikonlarla render edildiğinin kontrolü.
  - **Concrete Done Result**: 3 temel hizmet kartı eksiksiz görüntülenebilir.

- [ ] **Task 3: Card Hover & Interactive States**
  - **Location / Responsibility**: `src/styles/services.css`.
  - **Parent Capability Relation**: detail-of `Ana Hizmet 1: Yedek Parça Temini`.
  - **Inputs / Contracts**: `DESIGN_RULES.md` Section 6 (Interaction Principles).
  - **Implementation Behavior**: Kart üzerine gelindiğinde soft transform ve amber accent kenarlık parlaması.
  - **Verification**: Tarayıcıda hover aksiyonunun denenmesi.
  - **Concrete Done Result**: Kart etkileşimleri akıcı ve performanslı.

## 9. State / Role / Responsive Coverage

- **Desktop (1024px+)**: 3 sütunlu yan yana grid dizilimi.
- **Tablet (768px - 1023px)**: 2 sütunlu grid dizilimi.
- **Mobile (320px - 767px)**: Tek sütunlu dikey kart dizilimi.

## 10. Automated Verification

- `ServiceCard` bileşenlerinin 3 adet olarak DOM'a eklendiğinin testi.

## 11. Manual QA / Debug Verification

- Hizmet başlıklarının FCL-03, FCL-04, FCL-05 ile birebir uyumu.
- Kartların dokunmatik ekranlarda sorunsuz görünümü.

## 12. Acceptance / Exit Criteria

- [ ] Tam olarak 3 hizmet alanı (Yedek Parça, Yerinde Destek, Bakım-Onarım) görüntülenmeli.
- [ ] Kartlar `MachineService` üzerinden veri almalı.
- [ ] Hover ve odak efektleri çalışmalı.

## 13. Handoff / Stop Rule

- Hizmetler yüzeyi tamamlandıktan sonra `WAVE_03` (Contact & Direct CTA Surface) başlatılabilir.

---

## Wave Result

- **Result**: Pending Execution
