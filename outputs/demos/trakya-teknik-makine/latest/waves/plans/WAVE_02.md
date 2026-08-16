# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_02: Hero & Brand Positioning Section

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Firma adını, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statü badge'ini ve birincil aksiyon CTA'larını sunan hero alanını (`src/components/hero/HeroSection.js`) üretmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_02
Name: Hero & Brand Positioning Section
Goal: Firma adını, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statü badge'ini ve birincil aksiyon CTA'larını sunan hero alanını üretmek.
Why Separate: Ziyaretçinin ilk gördüğü hero alanı, firmanın kimliğini ve yetkili servis statüsünü belirlediği için bağımsız bir görsel/işlevsel delivery birimidir.
Committed Capabilities:
- SCP-002 (Authorized Service Status Banner)
- SCP-004 (Hero Direct Contact CTA)
In Scope: HeroSection.js
Out of Scope: Uydurma sertifika rozetleri, 7/24 hizmet iddiası veya stok garantisi beyanları
Primary Deliverables: src/components/hero/HeroSection.js
Dependencies: WAVE_01
Upstream Boundary Consumed: WAVE_01 Header shell
Downstream Handoff: WAVE_03 Hizmetler bölümüne geçiş sağlayan görsel hero alanı
Exit Boundary: Hero bölümü marka kimliğini ve yetkili servis statüsünü net biçimde sunuyor
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Disan Hidrolik Makine Trakya Bölge Yetkili Servisi Status Badge & Banner | `SCP-002 (Authorized Service Status Banner)` | implementation-of | PASS |
| Primary Action CTA Buttons (Services Scroll & Direct Phone CTA) | `SCP-004 (Hero Direct Contact CTA)` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_02`, satış görüşmesinde potansiyel müşterinin ilk 5 saniyede firmanın ne yaptığını ve resmi statüsünü (`Disan Hidrolik Makine Trakya Bölge Yetkili Servisi`) görmesini sağlayan hero bölümüdür. `WAVE_01` navigasyon kabuğunun altında bağımsız bir sunum katmanı olarak konumlanır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `SOURCE_REGISTER.md` (`FCL-001`, `FCL-002`, `FCL-004`, `FCL-006`)

## 5. Dependencies

- `WAVE_01` (Global Header & Navigation Shell).

## 6. Scope

### In Scope
- `src/components/hero/HeroSection.js`: Asimetrik 2-column mizanpaj, ana kurumsal slogan (`Trakya Bölgesi Endüstriyel Makine & Teknik Servis Çözümleri`), `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` statü rozeti.
- Birincil CTA butonları: `Hizmetlerimizi İnceleyin` (scroll to `#services`) ve `Hızlı İletişim` (phone direct-contact `tel:` link trigger).
- Mock/local data integration: Metinler `getSiteData()` adapter'ından çekilir.

### Out of Scope
- Uydurma sertifika rozetleri, 7/24 kesintisiz hizmet veya stok garantisi gibi FCL dışı iddialar.
- Ağır parallax animasyonlar veya otomatik oynatılan video arka planları.

## 7. Expected Result / Target Structure

```text
runs/active/RUN-20260817-002/working-output/
└── src/
    └── components/
        └── hero/
            └── HeroSection.js
```

## 8. Implementation Checklist

- [ ] **Task 2.1 (Hero Presentation & Status Badge Component)**:
  - **Location**: `src/components/hero/HeroSection.js`
  - **Responsibility**: Hero alanının render edilmesi, marka adı (`Trakya Teknik Makine`) ve `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` statü badge'inin gösterimi.
  - **Parent Capability Relation**: `implementation-of` (`SCP-002`)
  - **Inputs / Contracts**: `getSiteData()` FCL data (`FCL-001`, `FCL-002`).
  - **Behavior**: Koyu kömür gri zemin üstüne amber teknik vurgular ile dikkat çekici yetkili servis rozeti sunulur.
  - **Preserve**: Strict FCL wording.
  - **Verification**: Visual check in browser.
  - **Done**: Hero text & status badge complete.

- [ ] **Task 2.2 (Hero Action CTAs)**:
  - **Location**: `src/components/hero/HeroSection.js`
  - **Responsibility**: `Hizmetlerimizi İnceleyin` (#services anchor) ve `Hızlı İletişim` (`tel:` direct contact trigger) butonlarının davranışı.
  - **Parent Capability Relation**: `implementation-of` (`SCP-004`)
  - **Inputs / Contracts**: Config fallback phone number.
  - **Behavior**: Masaüstü ve mobilde yüksek kontrastlı amber/cyan touch target'lar.
  - **Preserve**: WCAG AA contrast, minimum 44px height.
  - **Verification**: Click & scroll test.
  - **Done**: Hero CTA actions complete.

## 9. State / Role / Responsive Coverage

- **Desktop Layout (>1200px)**: Sol kolonda metin ve CTA'lar, sağ kolonda teknik mühendislik görsel motifleri (CSS grid pattern & SVG badge).
- **Mobile Layout (<768px)**: Dikey tek kolonlu mizanpaj, CTA butonları tam genişlikte (`width: 100%`) kolay dokunulabilir.
- **Glassmorphic Badge**: Statü rozeti yarı saydam koyu yüzey üzerinde amber alt kontur taşır.

## 10. Automated Verification

```bash
# Check file creation
ls -la src/components/hero/HeroSection.js
```

## 11. Manual QA / Debug Verification

- Hero alanındaki `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` yazısının eksiksiz ve dürüstçe göründüğünü kontrol et.
- `Hızlı İletişim` butonuna tıklandığında `tel:` protokolünün tetiklendiğini denetle.

## 12. Acceptance / Exit Criteria

- [ ] `HeroSection.js` bileşeni hatasız yazılmıştır.
- [ ] `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` statüsü net biçimde vurgulanmaktadır.
- [ ] Direct-contact telefon CTA butonu ve Hizmetler scroll CTA'sı sorunsuz çalışmaktadır.
- [ ] `WAVE_03` Hizmetler bölümü için üst sunum alanı tamamlanmıştır.

## 13. Handoff / Stop Rule

`WAVE_02` tamamlandığında `WAVE_03` Core Services Showcase checkpoint'ine geçilir.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
