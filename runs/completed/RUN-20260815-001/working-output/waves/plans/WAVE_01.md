# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Hero & Corporate Trust Surface

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçiyi karşılayan ilk izlenim Hero alanını, Disan Hidrolik Trakya Bölgesi Yetkili Servis rozetini ve Hakkımızda kurumsal özetini sunmak.

## 1. Parent Wave Map Entry

- **Goal**: Ziyaretçiyi karşılayan ilk izlenim Hero alanını, Disan Hidrolik Trakya Bölgesi Yetkili Servis rozetini ve Hakkımızda kurumsal özetini sunmak.
- **Why Separate**: Satış demosu için ilk 3 saniyede güven vermek kritiktir. Yetkili servis kimliği diğer hizmetlerden önce algılanmalıdır.
- **Committed Capabilities**:
  - Hero Karşılama Bölümü | SCP-001 | Kurumsal başlık, alt başlık ve hızlı CTA butonları | PASS
  - Disan Hidrolik Yetkili Servis Kimliği | SCP-002 | Disan Hidrolik Trakya Bölgesi Yetkili Servisi rozeti ve metinsel güvence | PASS
  - Kurumsal Hakkımızda Özeti | SCP-001 | Trakya Teknik Makine ağır sanayi tecrübesi özeti | PASS
- **In Scope**: Hero section layout'u, yetkili servis badge bileşeni, kurumsal tanıtım kartı.
- **Out of Scope**: 3 ana hizmetin detaylı listelenmesi, iletişim formu.
- **Primary Deliverables**: `HeroSection.js` / HTML yapısı, `TrustBadge` bileşeni, `AboutSection` yapısı.
- **Dependencies**: `WAVE_00`.
- **Upstream Boundary Consumed**: `WAVE_00` CSS token'ları ve `MachineService`.
- **Downstream Handoff**: `WAVE_02` için hazır üst sayfa düzeni.
- **Exit Boundary**: Hero ve kurumsal alan masaüstü ve mobil ekranlarda yüksek kontrast ve estetik duruşla işler durumda olmalı.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Hero banner markup & styling | Hero Karşılama Bölümü | implementation-of | PASS |
| Disan Hidrolik Authorized Service Badge | Disan Hidrolik Yetkili Servis Kimliği | implementation-of | PASS |
| Corporate About section markup | Kurumsal Hakkımızda Özeti | implementation-of | PASS |
| Direct Contact Hero CTA link (`#contact`) | Hero Karşılama Bölümü | detail-of | PASS |
| Hero & Trust Verification Tests | Hero Karşılama Bölümü | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

- Müşteri satış görüşmesinde ilk izlenim ve yetkili servis güveni kritik değer taşır. Bu yüzey `WAVE_00` foundation token'larını tüketir ve `WAVE_02` hizmetler bölümünün üzerine yerleşir.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_00` (Foundation & Service Boundary Setup)

## 6. Scope

### In Scope
- Hero Karşılama Alanı (Kurumsal ana başlık: "Trakya Bölgesi Ağır Sanayi & Hidrolik Teknik Servis Güvencesi").
- Disan Hidrolik Trakya Bölgesi Yetkili Servisi rozeti ve onaylı servis metinleri.
- Trakya Teknik Makine kurumsal tecrübe ve vizyon özeti bölümü.
- İki birincil CTA ("Hizmetlerimizi İnceleyin" -> `#services`, "Hemen İletişime Geçin" -> `#contact`).

### Out of Scope
- Detaylı 3 hizmet kartı (WAVE_02'de sunulacak).
- İletişim detayları ve tel/mailto linklerinin son biçimi (WAVE_03'te tamamlanacak).

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html (Hero & About bölümleri eklenmiş)
└── src/
    ├── components/
    │   ├── HeroSection.js
    │   ├── TrustBadge.js
    │   └── AboutSection.js
    └── styles/
        └── hero.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Disan Hidrolik Trust Badge Bileşeni**
  - **Location / Responsibility**: `src/components/TrustBadge.js`, `src/styles/hero.css`.
  - **Parent Capability Relation**: implementation-of `Disan Hidrolik Yetkili Servis Kimliği`.
  - **Inputs / Contracts**: FCL-02 ("Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi").
  - **Implementation Behavior**: Amber accent çerçeveli, endüstriyel rozet bileşeni. Resmî yetkili servisliği açıkça gösterir.
  - **Verification**: Badge metninin doğru render edilmesi.
  - **Concrete Done Result**: `TrustBadge` görsel olarak belirgin ve duyarlı.

- [ ] **Task 2: Hero Section Layout & Primary Copy**
  - **Location / Responsibility**: `src/components/HeroSection.js`.
  - **Parent Capability Relation**: implementation-of `Hero Karşılama Bölümü`.
  - **Inputs / Contracts**: FCL-01, FCL-02, `DESIGN_RULES.md` (Asymmetric Industrial Grid).
  - **Implementation Behavior**: Sol tarafta güçlü H1 başlığı, yetkili servis rozeti, ikincil açıklama metni ve ikili CTA butonları. Sağ tarafta teknik ızgara deseni ve endüstriyel görsel atmosfer.
  - **Preserve / Must Not**: Sektör klişesi düz mavi background kullanmama; `#0F141C` derin antrasit zemini koruma.
  - **Verification**: Tarayıcıda 1024px+ masaüstü ve 320px+ mobil görünümlerin testi.
  - **Concrete Done Result**: Hero bölümü yüksek estetikle işler durumda.

- [ ] **Task 3: Corporate About Section Implementation**
  - **Location / Responsibility**: `src/components/AboutSection.js`.
  - **Parent Capability Relation**: implementation-of `Kurumsal Hakkımızda Özeti`.
  - **Inputs / Contracts**: FCL-01, FCL-06, `PROJECT_BRAIN.md`.
  - **Implementation Behavior**: Trakya Teknik Makine'nin bölgedeki ağır sanayi, hidrolik bakım ve teknik servis disiplinini anlatan kurumsal kart yapısı.
  - **Verification**: Okunabilirlik ve kontrast oranlarının (min 7:1) testi.
  - **Concrete Done Result**: Hakkımızda bölümü estetik ve kurumsal olarak hazır.

## 9. State / Role / Responsive Coverage

- **Desktop (1024px+)**: Asimetrik 2 sütunlu düzen, Hero ve Trust Badge ilk viewport'ta yer alır.
- **Mobile (320px - 767px)**: Tek sütunlu dikey dizilim, dokunmatik CTA butonları (min 44px height).

## 10. Automated Verification

- `HeroSection` ve `TrustBadge` bileşenlerinin DOM üzerinde doğru id ve class'larla oluştuğunun doğrulanması.

## 11. Manual QA / Debug Verification

- İlk 5 saniye izleniminde Disan Hidrolik yetkili servis rozetinin hemen algılanabilmesi.
- Mobil cihaz ekran boyutunda yatay kaydırma (horizontal overflow) olmaması.

## 12. Acceptance / Exit Criteria

- [ ] Hero bölümü H1, yetkili servis rozeti ve iki CTA ile görünür olmalı.
- [ ] Disan Hidrolik Yetkili Servis kimliği açıkça okunmalı.
- [ ] Mobil ve masaüstü breakpoint'lerinde tam duyarlı olmalı.

## 13. Handoff / Stop Rule

- Hero ve Kurumsal güven yüzeyi tamamlandıktan sonra `WAVE_02` (Services Presentation Surface) başlatılabilir.

---

## Wave Result

- **Result**: Pending Execution
