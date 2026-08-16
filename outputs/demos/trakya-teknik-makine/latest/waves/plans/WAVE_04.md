# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_04: Final Integration, Responsive Verification & Sales-Demo Quality Assurance

- **Status**: Completed
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Uçtan uca tüm yüzeylerin birleştirilmesi, masaüstü/tablet/mobil responsive uyumluluk doğrulaması, klavye erişilebilirliği denetimi ve satış demosu olgunluk kontrolü.

## 1. Parent Wave Map Entry

- **Wave ID**: `WAVE_04`
- **Name**: Final Integration, Responsive Verification & Sales-Demo QA
- **Committed Capabilities**:
  - `Whole-project multi-device responsive layout verification across breakpoints` (`SCP-001`)
  - `Sales-demo presentation readiness & data adapter boundary audit` (`SCP-001`, `SCP-006`)
- **Upstream Boundary Consumed**: Completed application surfaces (`WAVE_00`..`WAVE_03`).
- **Downstream Handoff**: Validated sales-demo package ready for publication (`outputs/demos/trakya-teknik-makine/latest/`).

## 2. Parent Capability Coverage

| Plan Task / Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| `Task 04.1: Responsive Layout & Breakpoint Audit` | `Whole-project multi-device responsive layout verification across breakpoints` | `verification-of` | `PASS` |
| `Task 04.2: Data Adapter & Sales-Demo Audit` | `Sales-demo presentation readiness & data adapter boundary audit` | `verification-of` | `PASS` |

## 3. Why This Wave / Dependency Rationale

Tüm tekil modüller (`WAVE_00`..`WAVE_03`) inşa edildikten sonra uçtan uca yatay responsive doğrulama, klavye gezintisi denetimi ve veri adapter sınırının satış demosu sunumu öncesinde kesinleştirilmesi gereklidir. Tekil bir feature wave'i tüm projenin yatay kapanışını üstlenemeyeceğinden `WAVE_04` bağımsız kalite kapanış adımıdır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_00` (Foundation Shell & Data Adapter).
- `WAVE_01` (Corporate Hero & Authorized Service Badge Surface).
- `WAVE_02` (Core Services Presentation Surface).
- `WAVE_03` (Direct Contact & Corporate Communication Surface).

## 6. Scope

### In Scope
- Tüm uygulama yüzeylerinin (`HeroSection`, `AuthorizedServiceBadge`, `ServicesSection`, `ServiceCard`, `ContactSection`, `ContactCtaCards`) bütünleşik doğrulaması.
- Çözünürlük breakpoint kontrolleri (Desktop 1200px+, Tablet 768px-1024px, Mobile 320px-480px).
- `dataService.js` adapter okuma ve veri izolasyonu denetimi.
- Factual Claim Allowlist (FCL-001..007) uyumluluk denetimi.
- Satış demosu (`Prototype`) olgunluk kontrolü.

### Out of Scope
- Production deployment / domain / hosting geçişi.
- Backend API, veritabanı veya canlı harita entegrasyonu.
- WhatsApp veya mesaj submit sunucusu.

## 7. Expected Result / Target Structure

```text
outputs/demos/trakya-teknik-makine/latest/
├── README.md
├── ai/
│   ├── PROJECT_BRAIN.md
│   ├── PRODUCT_RULES.md
│   ├── TECH_CONTEXT.md
│   ├── CURRENT_STATUS.md
│   ├── NEXT_TASKS.md
│   ├── AGENT_INSTRUCTIONS.md
│   └── DECISIONS.md
├── design/
│   └── DESIGN_RULES.md
├── project/
│   └── PROJECT_PLAN.md
└── waves/
    ├── WAVE_MAP.md
    └── plans/
        ├── WAVE_00.md
        ├── WAVE_01.md
        ├── WAVE_02.md
        ├── WAVE_03.md
        └── WAVE_04.md
```

## 8. Implementation Checklist

- [x] **Task 04.1 — Perform Whole-Project Responsive Layout & Breakpoint Audit**:
  - **Location / Responsibility**: Tüm `src/styles/*.css` ve `index.html` layout kapsayıcıları. Masaüstü, tablet ve mobil çözünürlüklerde taşma (overflow), hizalama ve dokunma alanlarının denetimi.
  - **Parent Capability Relation**: `verification-of` (`Whole-project multi-device responsive layout verification across breakpoints`).
  - **Inputs / Contracts**: `DESIGN_RULES.md#Section 7, 8`. Breakpoint'ler: 1200px, 768px, 320px.
  - **Implementation Behavior**: Tüm ekranlarda dikey döküm, görünür 2px odak dış çizgisi ve minimum 44px dokunma alanlarını doğrular. Yatay kaydırma çubuğu oluşmadığını onaylar.
  - **States / Responsive**: 1200px+, 768px, 320px responsive state denetimleri.
  - **Preserve / Must Not**: Hiçbir çözünürlükte içerik kesilmesi veya kilitlenme olmayacaktır.
  - **FCL / Source Boundary**: N/A (Technical Layout Verification).
  - **Verification**: Tarayıcı boyutlandırma testleri ve yatay scrollbar olmama kanıtı.
  - **Done Result**: Doğrulanmış responsive düzen raporu.

- [x] **Task 04.2 — Audit Data Access Boundary & Sales-Demo Presentation Readiness**:
  - **Location / Responsibility**: `src/services/dataService.js`, `src/data/mockData.js` ve tüm UI bileşenleri. FCL-001..007 uyumluluğu ve veri izolasyonu denetimi.
  - **Parent Capability Relation**: `verification-of` (`Sales-demo presentation readiness & data adapter boundary audit`).
  - **Inputs / Contracts**: `SOURCE_REGISTER.md#Section 6`, `PRODUCT_RULES.md#Section 1`.
  - **Implementation Behavior**: Hiçbir UI bileşeninin mock veriyi hardcode etmediğini, tüm okumaların `dataService.js` üzerinden yapıldığını ve hiçbir uydurma iddia (stok, mobil filo, acil müdahale SLA, periyodik bakım detayları vb.) içermediğini doğrular.
  - **States / Responsive**: Satış demosu (`Prototype`) olgunluk kontrolü.
  - **Preserve / Must Not**: Delivery profile yükseltici ifadeler (`production-ready`, `launch-ready`) kullanılmayacaktır.
  - **FCL / Source Boundary**: FCL-001..007 eksiksiz denetimi.
  - **Verification**: FCL taraması ve `dataService.js` arayüz kontrolü.
  - **Done Result**: Onaylanmış satış demosu kalitesi denetim raporu.

## 9. State / Role / Responsive Coverage

- **Normal State**: Tüm yüzeyler (`Hero`, `Disan Badge`, `Services Grid`, `Contact CTA`) birleşmiş olarak sorunsuz çalışır.
- **Responsive Coverage**: Desktop, Tablet, Mobile çözünürlüklerinin tamamında hatasız görsel sunum.

## 10. Automated Verification

- Check no element causes `overflow-x: scroll` or body layout shifts.
- Verify FCL-001..007 exact match in all rendered copy.
- Verify no `[TBD]` or `[BURAYA YAZ]` placeholders exist in project deliverables.

## 11. Manual QA / Debug Verification

- Satış görüşmesi senaryosunu masaüstü ve mobil ekranlarda baştan sona simüle et.
- `Trakya Teknik Makine`, `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` ve 3 approved hizmetin net okunduğunu kontrol et.
- Telefon ve e-posta CTA'larının doğru çalıştığını doğrula.

## 12. Acceptance / Exit Criteria

- [x] Tüm yüzeyler responsive ve görsel açıdan eksiksiz birleşmiştir.
- [x] FCL-001..007 sınırları dışından hiçbir uydurma iddia üretilmemiştir.
- [x] `dataService.js` adapter katmanı veri izolasyonunu tam sağlamaktadır.
- [x] Satış demosu (`Prototype`) olgunluğuna ulaşılmış ve doğrulanmıştır.

## 13. Handoff / Stop Rule

`WAVE_04` tamamlandığında ve `VALIDATION_REPORT` onaylandığında proje dokümantasyon paketi `outputs/demos/trakya-teknik-makine/latest/` hedefine publish edilir.

---
## Wave Result

*Execution Complete — Final integration, responsive verification & sales-demo QA fully completed and verified in `products/trakya-teknik-makine/`.*
