# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_04: Final Integration & Presentation QA

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Tüm yüzeylerin bütünsel responsive uyumunu, cross-browser görünürlüğünü, veri erişim sınırlarını ve satış demosu kalitesini doğrulamak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_04
Name: Final Integration & Presentation QA
Goal: Tüm yüzeylerin bütünsel responsive uyumunu, cross-browser görünürlüğünü, veri erişim sınırlarını ve satış demosu kalitesini doğrulamak.
Why Separate: DEMO_FRONTEND_PACKAGE Granularity Guard uyarınca bütüncül QA ve satış demosu sunum olgunluğu ayrı bir kapanış dalgası gerektirir.
Committed Capabilities:
  - Satış görüşmesinde gösterilebilir nitelikte tamamlanmış görsel deneyim | SCP-008 | Sales demo presentation readiness & QA | PASS
  - Modern ve responsive kurumsal frontend demo nihai doğrulaması | SCP-001 | Final responsive & quality verification | PASS
In Scope: Tüm sayfanın uçtan uca responsive testi, service boundary leak-check, anti-template drift denetimi, satış demosu olgunluk kontrolü.
Out of Scope: Yeni bir UI bileşeni veya kapsam dışı özellik eklemek.
Primary Deliverables: Complete validated output package, Verification & QA presentation checklist output.
Dependencies: WAVE_03.
Upstream Boundary Consumed: WAVE_03 tamamlanmış tüm frontend yüzeyleri.
Downstream Handoff: Müşteri satış görüşmesinde sunulmaya hazır, doğrulanmış nihai prototip paketi.
Exit Boundary: Sıfır konsol hatası, sıfır kırık düzen, tam WCAG AA erişilebilirlik ve kusursuz satış demosu görünümü.
```

## 2. Parent Capability Coverage

| Plan Capability | Exact Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Comprehensive Responsive & Layout Shift Verification | Modern ve responsive kurumsal frontend demo nihai doğrulaması (`SCP-001`) | verification-of | PASS |
| Service Boundary & Data Hardcode Leak-Check | Modern ve responsive kurumsal frontend demo nihai doğrulaması (`SCP-001`) | verification-of | PASS |
| Sales Demo Presentation Quality & Anti-Template Audit | Satış görüşmesinde gösterilebilir nitelikte tamamlanmış görsel deneyim (`SCP-008`) | implementation-of | PASS |
| Final Static Deliverable Packaging & Release Audit | Satış görüşmesinde gösterilebilir nitelikte tamamlanmış görsel deneyim (`SCP-008`) | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

`DEMO_FRONTEND_PACKAGE` Granularity Guard kuralı uyarınca whole-project final QA ve satış demosu olgunluk kontrolü herhangi bir feature wave'inin checklist'ine gizlenemez. Bağımsız bir kapanış ve kalite dalgası olarak yürütülmelidir.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`
- `waves/plans/WAVE_03.md`

## 5. Dependencies

- **Upstream Dependencies**: `WAVE_03` (Direct Contact CTA & Regional Context), `WAVE_02`, `WAVE_01`, `WAVE_00`.

## 6. Scope

### In Scope
- Cross-Device Responsive Quality Audit (360px mobil, 768px tablet, 1024px, 1440px+ masaüstü).
- Service Boundary Leak-Check: Presentation kodları içerisinde hardcoded veri veya doğrudan data injection kaçaklarının sıfırlandığının teyidi.
- Factual Claim & Qualifier Scan: Sitede geçen tüm metinlerin `SOURCE_REGISTER` FCL allowlist sınırlarında kaldığının doğrulanması.
- Anti-Template Drift Check: Tasarımın generic lacivert kurumsal template klişesine düşmediğinin, mühendislik karakterini koruduğunun teyidi.
- Final Output Package Verification (`outputs/demos/trakya-teknik-makine/latest/`).

### Out of Scope
- Yeni UI bileşeni, yeni sayfa veya kapsam dışı özellik eklemek.
- Real production backend deployment veya alan adı yapılandırması (Kapsam dışı).

## 7. Expected Result / Target Structure

```text
outputs/demos/trakya-teknik-makine/
├── latest/
│   ├── index.html
│   ├── styles/main.css
│   └── src/...
└── versions/
    └── v0.1/
```

## 8. Implementation Checklist

- [ ] **Task 4.1 — Cross-Device Responsive & Layout Quality Audit**
  - **Location / Responsibility**: Tüm frontend katmanı (`styles/main.css` & `src/ui/`).
  - **Parent Capability Relation**: `verification-of` -> `SCP-001`.
  - **Inputs / Dependencies**: `design/DESIGN_RULES.md`.
  - **Implementation Behavior**: Sayfa 360px, 768px, 1024px, 1440px genişliklerinde taranır. Yatay kaydırma çubuğu (horizontal overflow), metin taşması veya kırık ikon düzeni tespiti halinde CSS media query rötuşları yapılır.
  - **Verification**: Chrome DevTools Responsive Mode üzerinde 0 kırılma doğrulanır.
  - **Done Result**: Responsive kalite denetimi tamamlandı.

- [ ] **Task 4.2 — Service Boundary & Hardcode Leak-Check**
  - **Location / Responsibility**: `src/ui/components/*.js`.
  - **Parent Capability Relation**: `verification-of` -> `SCP-001`.
  - **Inputs / Dependencies**: `ai/TECH_CONTEXT.md` & `src/services/companyService.js`.
  - **Implementation Behavior**: Tüm presentation bileşenlerinin metinlerini `companyService.js` üzerinden okuduğu, HTML veya JS içinde kontrolsüz firma verisi hardcode edilmediği denetlenir.
  - **Verification**: `grep` veya kod taraması ile presentation katmanında ham veri string'lerinin bulunmadığı teyit edilir.
  - **Done Result**: Service boundary denetimi tamamlandı.

- [ ] **Task 4.3 — Sales Demo Presentation Quality & FCL Compliance Audit**
  - **Location / Responsibility**: Uçtan uca sunum katmanı.
  - **Parent Capability Relation**: `implementation-of` -> `SCP-008`.
  - **Inputs / Dependencies**: `SOURCE_REGISTER.md` (FCL allowlist).
  - **Implementation Behavior**: Sitedeki tüm metinler taranır. Firma adı ("Trakya Teknik Makine"), yetkili servis unvanı ("Disan Hidrolik Makine Trakya Bölge Yetkili Servisi") ve 3 approved hizmet dışında unapproved factual claim veya qualifier bulunmadığı kesinleştirilir.
  - **Verification**: FCL dışı kelime taraması (sanitizer check) %100 temiz sonuç vermelidir.
  - **Done Result**: Satış demosu sunum olgunluğu ve FCL uyumu teyit edildi.

## 9. State / Role / Responsive Coverage

- **Zero Console Errors**: Tarayıcı geliştirici araçları konsolunda sıfır JavaScript uyarısı / hatası.
- **Offline Reliability**: Ağ bağlantısı kapalıyken lokal ortamda demo %100 sorunsuz çalışır.

## 10. Automated Verification

- W3C HTML5 validator & CSS syntax check.
- ES module import & clean console check.

## 11. Manual QA / Debug Verification

- Satış görüşmesi simülasyonu: Prototip açılır, sayfa aşağı kaydırılır, hizmetler incelenir, mobil görünümde CTA butonlarına basılır ve müşteri sunumu olgunluğunda olduğu teyit edilir.

## 12. Acceptance / Exit Criteria

- [ ] Sıfır konsol hatası.
- [ ] Mobilde ve masaüstünde sıfır yatay kaydırma (no horizontal overflow).
- [ ] Veri doğrudan `companyService.js` üzerinden okunuyor (sıfır hardcode sızıntısı).
- [ ] Sitede geçen tüm firma bilgileri FCL allowlist ile %100 uyumlu.
- [ ] Satış görüşmesinde sunulmaya hazır görsel kalite elde edildi.

## 13. Handoff / Stop Rule

`WAVE_04` tamamlandığında tüm wave planları yürütülebilir duruma gelmiş olur. Product Engine validation gate adımına geçilir.

---
## Wave Result

- **Status**: Pending Execution (Generation Phase Completed).
