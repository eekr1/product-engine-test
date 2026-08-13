# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_02: Services Section & Direct Contact CTAs

- **Status**: Ready for Execution
- **Goal**: 3 ana hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) teknik ızgara yapısında kodlamak ve doğrudan iletişim CTA'larını (`tel:`, `mailto:`) bağlamak.

## 1. Why This Wave / Dependency Rationale

`WAVE_01` (Navbar & Hero) tamamlandıktan sonra, firmanın ticari ve teknik değerini oluşturan hizmet detayları ve müşteriyi doğrudan iletişime yönlendiren aksiyon noktaları kurulur.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)
- [WAVE_01.md](./WAVE_01.md)

## 3. Dependencies

- `WAVE_01` (Core Shell, Hero & Trust Surface)

## 4. Scope

### Scope References

- `SCP-003` — 3 Ana Hizmet sunumu (Yedek Parça, Yerinde Destek, Bakım & Onarım) (IN_SCOPE)
- `SCP-004` — İletişim noktaları ve CTA'lar (Telefon `tel:`, E-posta `mailto:`) (IN_SCOPE)
- `SCP-008` — Mevcut SITE123 sitesindeki doğrulanmış firma bilgilerinin dondurularak kullanılması (VERIFIED_CURRENT_TRUTH)

### In Scope

- Hizmetlerimiz ızgara kart yapısı (Services Grid Component).
- 3 Ana Hizmet Kartı:
  1. **Yedek Parça Temini:** Hidrolik ve mekanik ekipman yedek parça tedarik vurgusu [FCL-002].
  2. **Yerinde Teknik Destek:** Arıza tespiti ve sahada müdahale imkanları [FCL-002].
  3. **Makine Bakım ve Onarım:** Periyodik bakım, revizyon ve genel onarım desteği [FCL-002].
- Hizmet detay etiketleri ve mikro-etkileşimler (Hover aksanları, detay görünümü).
- Direct Contact Bar & Footer: Telefon (`tel:`) ve E-posta (`mailto:`) butonları.
- Dynamic rendering via `DataService.getServices()`.

### Out of Scope

- Gerçek backend iletişim formu gönderme API'si [SCP-010, SCP-015].
- Admin paneli üzerinden hizmet ekleme/çıkarma [SCP-009].

## 5. Expected Result / Target Structure

```text
src/
├── components/
│   ├── ServicesGrid.js
│   ├── ServiceCard.js
│   └── ContactSection.js
└── styles/
    ├── services.css
    └── contact.css
```

## 6. Implementation Checklist

- [ ] **TASK-020 (Services Grid Component)**: `ServicesGrid` ve `ServiceCard` HTML/CSS bileşenlerini kodla. 3 kolonlu endüstriyel grid yapısı kurgula. `Scope Ref: SCP-003`
- [ ] **TASK-021 (Data Service Integration for Services)**: `DataService.getServices()` metodundan verileri çekerek 3 hizmet kartını dinamik render et. `Scope Ref: SCP-003, SCP-008`
- [ ] **TASK-022 (Service Card Hover & Micro-Interactions)**: Kartlara `DESIGN_RULES.md` uyarınca amber aksan border ve smooth hover efekti uygula. `Scope Ref: SCP-003`
- [ ] **TASK-023 (Direct Contact Section & Footer)**: Sayfa altına ve sabit bar alanına telefon (`tel:`) ve e-posta (`mailto:`) direct CTA butonlarını yerleştir. `Scope Ref: SCP-004`
- [ ] **TASK-024 (Mobile Touch Optimization)**: Mobilde telefon butonlarının tek tıkla arama yapabilirliğini ve kartların dikey responsive akışını doğrula. `Scope Ref: SCP-004`

## 7. State / Role / Responsive Coverage

- Responsive: Desktop (3 columns), Tablet (2 columns), Mobile (1 column stacked).
- Interactive States: Card Hover, Button Focus, Active Link State.

## 8. Automated Verification

- Data mapping verification (`getServices()` returns exactly 3 valid service items).

## 9. Manual QA / Debug Verification

- Telefon butonuna tıklandığında cihazın arama başlatıcısı (`tel:`) açılmalı.
- E-posta butonuna tıklandığında varsayılan e-posta istemcisi (`mailto:`) açılmalı.

## 10. Acceptance / Exit Criteria

- 3 ana hizmet açık, görsel olarak güçlü ve teknik güven verici şekilde sunuluyor.
- Direct Contact CTA'ları kusursuz çalışıyor.
- Responsive layout mobil ve masaüstünde sorunsuz.

## 11. Handoff / Stop Rule

- WAVE_02 tamamlandıktan sonra `WAVE_03` (Sales Demo Presentation QA & Final Integration) uygulamasına geç.

---

## Wave Result

> Status: Pending Execution. WAVE_02 is ready for execution by an agent.
