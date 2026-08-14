# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_03: Contact & Direct CTA Surface

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_03` in `waves/WAVE_MAP.md`
- **Goal**: Doğrulanmış kurumsal iletişim bilgilerini ve cihaz uyumlu doğrudan telefon (`tel:`) ile e-posta (`mailto:`) CTA'larını sunmak.

## 1. Parent Wave Map Entry

- **Goal**: Doğrulanmış kurumsal iletişim bilgilerini ve cihaz uyumlu doğrudan telefon (`tel:`) ile e-posta (`mailto:`) CTA'larını sunmak.
- **Why Separate**: İletişim bölümü son dönüşüm noktasıdır. Backend'i olmayan güvenli doğrudan CTA'ları taşır.
- **Committed Capabilities**:
  - Doğrudan Telefon CTA (`tel:`) | SCP-006 | Tıklanabilir arama butonu | PASS
  - Doğrudan E-posta CTA (`mailto:`) | SCP-006 | Tıklanabilir e-posta gönderme butonu | PASS
  - Kurumsal Adres Bilgisi | SCP-006 | Doğrulanmış firma adres metni | PASS
- **In Scope**: İletişim kartı, tel/mailto linkleri, adres gösterimi.
- **Out of Scope**: Sahte form gönderme modalları, canlı harita widget'ı, WhatsApp botu.
- **Primary Deliverables**: `ContactSection` yapısı, `ContactCTA` bileşenleri.
- **Dependencies**: `WAVE_02`.
- **Upstream Boundary Consumed**: `WAVE_02` sayfa yapısı ve firma iletişim verileri.
- **Downstream Handoff**: `WAVE_04` için tam içerikli sayfa yapısı.
- **Exit Boundary**: Telefon ve e-posta linkleri cihaz türüne uygun çalışmalı, adres bilgisi net okunmalıdır.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Direct Telephone CTA (`tel:`) markup & link | Doğrudan Telefon CTA (`tel:`) | implementation-of | PASS |
| Direct Email CTA (`mailto:`) markup & link | Doğrudan E-posta CTA (`mailto:`) | implementation-of | PASS |
| Corporate Address Information Block | Kurumsal Adres Bilgisi | implementation-of | PASS |
| Contact Section Container (`#contact`) | Doğrudan Telefon CTA (`tel:`) | detail-of | PASS |
| Direct CTA & Contact Verification Tests | Doğrudan Telefon CTA (`tel:`) | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

- Müşterinin firmayla iletişim kurmasını sağlayan ana dönüşüm katmanıdır. `WAVE_02` sayfa düzeninin altına yerleşir ve `MachineService.getContactInfo()` verisini kullanır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- `WAVE_02` (Services Presentation Surface)

## 6. Scope

### In Scope
- İletişim Bölümü (`id="contact"`).
- Doğrudan telefon CTA butonu (`href="tel:..."`).
- Doğrudan e-posta CTA butonu (`href="mailto:..."`).
- Doğrulanmış kurumsal adres kartı.
- Dokunmatik uyumlu mobil görünüm.

### Out of Scope
- Sahte backend ile çalışan iletişim formu veya sahte submit modalı.
- Canlı Google/OpenStreetMap harita widget'ı.
- WhatsApp chat widget'ı veya sahte canlı destek botu.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html (İletişim bölümü eklenmiş)
└── src/
    ├── components/
    │   ├── ContactSection.js
    │   └── ContactCTA.js
    └── styles/
        └── contact.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Direct Contact Section & Address Card Implementation**
  - **Location / Responsibility**: `src/components/ContactSection.js`, `src/styles/contact.css`.
  - **Parent Capability Relation**: implementation-of `Kurumsal Adres Bilgisi`.
  - **Inputs / Contracts**: `MachineService.getContactInfo()`.
  - **Implementation Behavior**: Bölüm başlığı ("İletişim & Destek"), kurumsal adres metni ve çalışma saatleri kartı (`#1E2530` grafit zemin).
  - **Verification**: Adres metninin doğruluğu.
  - **Concrete Done Result**: İletişim bölümü iskeleti hazır.

- [ ] **Task 2: Direct Phone CTA (`tel:`) Component**
  - **Location / Responsibility**: `src/components/ContactCTA.js`.
  - **Parent Capability Relation**: implementation-of `Doğrudan Telefon CTA (tel:)`.
  - **Inputs / Contracts**: Doğrulanmış telefon verisi.
  - **Implementation Behavior**: Mobil ve masaüstünde tıklanabilir `href="tel:..."` arama butonu, amber accent vurgulu ve dokunmatik uyumlu (min 44px height).
  - **Verification**: Tıklandığında cihaz telefon/arama istemcisinin tetiklenmesi.
  - **Concrete Done Result**: Telefon CTA erişilebilir ve işler durumda.

- [ ] **Task 3: Direct Email CTA (`mailto:`) Component**
  - **Location / Responsibility**: `src/components/ContactCTA.js`.
  - **Parent Capability Relation**: implementation-of `Doğrudan E-posta CTA (mailto:)`.
  - **Inputs / Contracts**: Doğrulanmış e-posta verisi.
  - **Implementation Behavior**: Tıklanabilir `href="mailto:..."` e-posta butonu.
  - **Verification**: Tıklandığında varsayılan e-posta istemcisinin açılması.
  - **Concrete Done Result**: E-posta CTA erişilebilir ve işler durumda.

## 9. State / Role / Responsive Coverage

- **Desktop (1024px+)**: İletişim kartı ve CTA'lar yan yana dengeli yerleşim.
- **Mobile (320px - 767px)**: Sabit veya belirgin dikey telefon ve e-posta butonları, dokunmatik hedef alanı.

## 10. Automated Verification

- `tel:` ve `mailto:` link protokollerinin DOM üzerinde doğru href değerleriyle bulunduğunun kontrolü.

## 11. Manual QA / Debug Verification

- İletişim alanında sahte form veya harita gibi kapsam dışı bileşen bulunmadığının teyidi.
- Telefon numarası ve e-posta adresinin FCL ile %100 uyuşması.

## 12. Acceptance / Exit Criteria

- [ ] `tel:` ve `mailto:` CTA butonları aktif olmalı.
- [ ] Adres ve iletişim bilgileri eksiksiz görünmeli.
- [ ] Kapsam dışı sahte form/harita bulunmamalı.

## 13. Handoff / Stop Rule

- İletişim yüzeyi tamamlandıktan sonra `WAVE_04` (Final Cross-Surface QA & Presentation Verification) başlatılabilir.

---

## Wave Result

- **Result**: Pending Execution
