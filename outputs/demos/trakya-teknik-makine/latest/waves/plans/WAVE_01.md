# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_01: Corporate Entry & Hero Identity Surface

- **Status**: Completed
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Trakya Teknik Makine kurumsal marka kimliğini ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü vurgulayan hero sunum yüzeyinin inşası.

## 1. Parent Wave Map Entry

- **Wave ID**: `WAVE_01`
- **Name**: Corporate Entry & Hero Identity Surface
- **Committed Capabilities**:
  - `Hero presentation surface with Trakya Teknik Makine brand title` (`SCP-001`, `SCP-002`)
  - `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi authorized badge & banner surface` (`SCP-003`)
- **Upstream Boundary Consumed**: `WAVE_00` CSS design tokens & layout container shell.
- **Downstream Handoff**: Hero identity surface with authorized service status badge ready for services grid.

## 2. Parent Capability Coverage

| Plan Task / Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| `Task 01.1: Primary Corporate Hero Component` | `Hero presentation surface with Trakya Teknik Makine brand title` | `implementation-of` | `PASS` |
| `Task 01.2: Disan Authorized Service Badge Surface` | `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi authorized badge & banner surface` | `implementation-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

Firmanın adı ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü, potansiyel müşterilerin ve satış görüşmesinin ilk 5 saniyelik etkileşiminde güven tesis eden ana değer önermesidir. Bu nedenle hizmet kartlarından ve iletişim alanlarından önce bağımsız bir marka sunum yüzeyi olarak geliştirilmelidir.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_00` (Foundation Shell & Data Adapter).

## 6. Scope

### In Scope
- Ana Kurumsal Hero Yüzeyi (`src/components/HeroSection.js`).
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi Rozet/Banner Yüzeyi (`src/components/AuthorizedServiceBadge.js`).
- `dataService.getCompanyInfo()` üzerinden veri tüketimi.
- Tipografik hiyerarşi (`h1`, alt destek metni, yetkili servis rozet tasarımı).
- Koyu endüstriyel yüzey kontrastı (`#0F172A`, `#1E293B`, `#F97316`).

### Out of Scope
- Hizmet kartları ve detayları (`WAVE_02` kapsamındadır).
- Direct contact CTA butonları ve iletişim kartları (`WAVE_03` kapsamındadır).
- Source dosya dışı firma iddiaları, sertifikalar, adres, çalışma saatleri veya telefon/adres uydurma.

## 7. Expected Result / Target Structure

```text
src/
├── components/
│   ├── HeroSection.js
│   └── AuthorizedServiceBadge.js
└── styles/
    └── hero.css
```

## 8. Implementation Checklist

- [x] **Task 01.1 — Build Primary Corporate Hero Component**:
  - **Location / Responsibility**: `src/components/HeroSection.js` ve `src/styles/hero.css`. Ana kurumsal hero alanının, marka başlığının (`Trakya Teknik Makine`) ve endüstriyel alan açıklamasının render edilmesi.
  - **Parent Capability Relation**: `implementation-of` (`Hero presentation surface with Trakya Teknik Makine brand title`).
  - **Inputs / Contracts**: `dataService.getCompanyInfo()`, `DESIGN_RULES.md#Section 1, 4, 5`. FCL-001, FCL-006.
  - **Implementation Behavior**: `HeroSection.js` asenkron olarak `dataService.getCompanyInfo()` verisini alır. Tek bir `h1` etiketi ile `Trakya Teknik Makine` başlığını ve Trakya bölgesi endüstriyel/makine teknik servis bağlamını sunan destek kopyasını basar.
  - **States / Responsive**: Desktop (1200px+) ekranlarda split 2-kolonlu layout; Mobile (320px-768px) ekranlarda dikey dökülen okunabilir tipografik döküm.
  - **Preserve / Must Not**: Jenerik stok fabrika fotoğrafı veya FCL dışı iddialar (stok, mobil filo vb.) eklenmeyecektir.
  - **FCL / Source Boundary**: FCL-001 (Trakya Teknik Makine), FCL-006 (Trakya bölgesi endüstriyel/makine teknik servis bağlamı).
  - **Verification**: Tarayıcıda tek `h1` semantiği ve doğru firma adının görünmesi.
  - **Done Result**: Tamamlanmış kurumsal hero bileşeni.

- [x] **Task 01.2 — Build Disan Authorized Service Badge & Trust Surface**:
  - **Location / Responsibility**: `src/components/AuthorizedServiceBadge.js` ve `src/styles/hero.css`. `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` statüsünün görsel rozet ve vurgu kartı olarak render edilmesi.
  - **Parent Capability Relation**: `implementation-of` (`Disan Hidrolik Makine Trakya Bölge Yetkili Servisi authorized badge & banner surface`).
  - **Inputs / Contracts**: `dataService.getCompanyInfo()`, FCL-002.
  - **Implementation Behavior**: Hero alanı içinde belirgin, Amber (`#F97316`) aksanlı ve yüksek kontrastlı bir teknik rozet bileşeni oluşturur. Statü metnini (`Disan Hidrolik Makine Trakya Bölge Yetkili Servisi`) kart üzerinde net okunabilir kılacak biçimde sunar.
  - **States / Responsive**: Mobil ve masaüstü uyumlu esnek rozet boyutu.
  - **Preserve / Must Not**: Disan yetkili servis statüsü dışına çıkılarak uydurma distribütörlük veya sertifika eklenmeyecektir.
  - **FCL / Source Boundary**: FCL-002 (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi).
  - **Verification**: Statü metninin rozet kartı üzerinde eksiksiz ve hatasız yer alması.
  - **Done Result**: Yetkili servis rozet bileşeni.

## 9. State / Role / Responsive Coverage

- **Normal State**: `HeroSection` ve `AuthorizedServiceBadge` asenkron veri alınıp render edilir.
- **Loading State**: Data beklenirken skeleton placeholder yüzeyi görünür.
- **Responsive Coverage**: Desktop'ta sol hizalı hero + sağ rozet alanı; mobil cihazlarda üstten alta sıralı dikey hiyerarşi.

## 10. Automated Verification

- `HeroSection` renders single `<h1>Trakya Teknik Makine</h1>`.
- `AuthorizedServiceBadge` renders text containing `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi`.
- HTML semantic outline check (single `<h1>`).

## 11. Manual QA / Debug Verification

- Mobil görünümde (320px) hero başlığının ve yetkili servis rozetinin ekran sınırlarından taşmadığını kontrol et.
- Metin kontrastının (Slate `#0F172A` zemin üzerinde beyaz `#F8FAFC` ve amber `#F97316` rozet) yüksek okunabilirlik sunduğunu doğrula.
- Hero alanının satış demosu sunumunda ilk bakışta güven veren bir izlenim bıraktığını denetle.

## 12. Acceptance / Exit Criteria

- [x] `Trakya Teknik Makine` firma adı hero alanında tek `h1` semantiği ile sunulmaktadır.
- [x] `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` rozet yüzeyi eksiksiz render edilmektedir.
- [x] Bileşenler verilerini doğrudan `dataService.js` üzerinden okumaktadır.
- [x] Satış demosu (`Prototype`) standartlarında responsive ve tipografik kalite sağlanmıştır.

## 13. Handoff / Stop Rule

`WAVE_01` tamamlandığında hero ve marka yetkili servis yüzeyi `WAVE_02` (Hizmetler Grid Yüzeyi) geliştirmesine devredilir.

---
## Wave Result

*Execution Complete — Hero identity & authorized service badge surface fully implemented and verified in `products/trakya-teknik-makine/`.*
