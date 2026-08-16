# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_04: Corporate Overview & Direct Contact Surface

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_04` in `waves/WAVE_MAP.md`
- **Goal**: Kurumsal tanıtım metnini, Trakya bölgesi teknik servis bağlamını ve direct-contact (telefon/e-posta) aksiyon yüzeyini (`src/components/about/AboutSection.js`, `src/components/contact/ContactBar.js`) tamamlamak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_04
Name: Corporate Overview & Direct Contact Surface
Goal: Kurumsal tanıtım metnini, Trakya bölgesi bağlamını ve direct-contact (telefon/e-posta) aksiyon yüzeyini tamamlamak.
Why Separate: Ziyaretçinin firmayı tanımasını ve doğrudan iletişime geçmesini sağlayan aksiyon alanı, hizmet vitrininden sonra gelen bağımsız bir dönüşüm katmanıdır.
Committed Capabilities:
- SCP-002 (Corporate Identity Presentation)
- SCP-004 (Direct Contact Telephone/Email Surface)
In Scope: AboutSection.js, ContactBar.js
Out of Scope: Uydurma fiziksel adres, harita entegrasyonu, WhatsApp yönlendirmesi veya iletişim formu submit backend'i
Primary Deliverables: src/components/about/AboutSection.js, ContactBar.js
Dependencies: WAVE_03
Upstream Boundary Consumed: WAVE_03 Hizmetler bölümü
Downstream Handoff: WAVE_05 bütünsel entegrasyon ve kalite doğrulaması için tamamlanmış UI yüzeyleri
Exit Boundary: Kurumsal bilgi ve direct-contact telefon/e-posta butonları sorunsuz çalışıyor
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Company Overview & Trakya Technical Context | `SCP-002 (Corporate Identity Presentation)` | implementation-of | PASS |
| Direct Contact Phone (`tel:`) & Email (`mailto:`) Action Bar | `SCP-004 (Direct Contact Telephone/Email Surface)` | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_04`, ziyaretçilerin Trakya Teknik Makine firması hakkında genel kurumsal güven oluşturan bilgiyi ve Trakya bölgesi teknik servis bağlamını edindiği, hemen ardından telefon veya e-posta ile iletişime geçebildiği kapanış dönüşüm katmanıdır. `WAVE_03` hizmet vitrininden sonra bağımsız olarak yer alır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `SOURCE_REGISTER.md` (`FCL-001`, `FCL-002`, `FCL-004`, `FCL-006`)

## 5. Dependencies

- `WAVE_03` (Core Services Showcase Section).

## 6. Scope

### In Scope
- `src/components/about/AboutSection.js`: Trakya Teknik Makine kurumsal tanıtımı, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi vurgusu, Trakya bölgesi endüstriyel teknik servis bağlamı (`FCL-006`).
- `src/components/contact/ContactBar.js`: Telefon (`tel:`) ve E-posta (`mailto:`) direct-contact butonları. İletişim değerleri koda/config'e fallback olarak tanımlanır.
- UI data boundary: Metinler `getSiteData()` adapter'ından beslenir.

### Out of Scope
- Uydurma fiziksel adres, harita widget'ı veya canlı konum.
- Form submit backend'i, WhatsApp entegrasyonu veya online canlı destek (chat).

## 7. Expected Result / Target Structure

```text
runs/active/RUN-20260817-002/working-output/
└── src/
    └── components/
        ├── about/
        │   └── AboutSection.js
        └── contact/
            └── ContactBar.js
```

## 8. Implementation Checklist

- [ ] **Task 4.1 (Corporate Overview & Region Context Component)**:
  - **Location**: `src/components/about/AboutSection.js`
  - **Responsibility**: `#about` bölümünün render edilmesi, kurumsal kimlik metni ve Trakya bölgesi endüstriyel makine servis bağlamı.
  - **Parent Capability Relation**: `implementation-of` (`SCP-002`)
  - **Inputs / Contracts**: `getSiteData()` FCL data (`FCL-001`, `FCL-002`, `FCL-006`).
  - **Behavior**: Güven veren teknik kurumsal anlatım, asimetrik görsel-metin kompozisyonu.
  - **Preserve**: No fake physical address or branch claims.
  - **Verification**: Content & boundary inspection.
  - **Done**: Corporate section complete.

- [ ] **Task 4.2 (Direct Contact Action Bar Component)**:
  - **Location**: `src/components/contact/ContactBar.js`
  - **Responsibility**: `#contact` bölümü ve direct-contact telefon/e-posta butonları.
  - **Parent Capability Relation**: `implementation-of` (`SCP-004`)
  - **Inputs / Contracts**: `getSiteData()` contact config fallback values.
  - **Behavior**: Telefon tıklamasında cihazın arama başlatıcısı (`tel:`), e-posta tıklamasında e-posta istemcisi (`mailto:`) açılır.
  - **Preserve**: No fake form submit backend or WhatsApp links.
  - **Verification**: Protocol trigger check.
  - **Done**: Contact action bar complete.

## 9. State / Role / Responsive Coverage

- **Desktop Layout**: 2-column split (Kurumsal Bilgi | Direct Contact CTA Card).
- **Mobile Layout**: Dikey akış, sabit veya sayfa altı direct-contact aksiyon çubuğu.
- **Protocol Action**: `tel:` ve `mailto:` linklerinde belirgin hover ve active durumları.

## 10. Automated Verification

```bash
# Check file creation
ls -la src/components/about/AboutSection.js src/components/contact/ContactBar.js
```

## 11. Manual QA / Debug Verification

- About bölümünde Trakya bölgesi teknik servis bağlamının FCL sınırlarına dürüstçe uyduğunu doğrula.
- Contact bar üzerindeki telefon ve e-posta butonlarının doğru link protokollerine (`tel:`, `mailto:`) sahip olduğunu kontrol et.

## 12. Acceptance / Exit Criteria

- [ ] `AboutSection.js` ve `ContactBar.js` modülleri hatasız yazılmıştır.
- [ ] Kurumsal bilgi ve Trakya bölgesi bağlamı dürüstçe sunulmaktadır.
- [ ] Direct-contact telefon ve e-posta butonları sorunsuz çalışmaktadır.
- [ ] `WAVE_05` bütünsel entegrasyon ve QA adımı için tüm UI yüzeyleri tamamlanmıştır.

## 13. Handoff / Stop Rule

`WAVE_04` tamamlandığında `WAVE_05` Quality QA checkpoint'ine geçilir.

---
## Wave Result

- **Status**: Pending Execution (Pre-execution state)
