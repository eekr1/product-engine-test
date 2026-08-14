# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Primary Entry & Hero Surface

- **Status**: Pending Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçiyi karşılayan ana sayfa üst alanı (Header & Navigation Shell), etkileyici Hero sunum banner'ı, Disan Hidrolik Bölge Yetkili Servisi rozeti ve doğrudan iletişim CTA erişim noktalarını inşa etmek.

## 1. Parent Wave Map Entry

- **Goal**: Ana sayfa üst alanı, Hero banner ve yetkili servis vurgulu CTA noktalarını inşa etmek.
- **Committed Capabilities**:
  - Primary Navigation Shell (Header with Logo & Service Links) (Support: SCP-001, SCP-002)
  - Hero Surface Presentation with Value Proposition & Industrial Visuals (Support: SCP-001, SCP-002)
  - Disan Hidrolik Trakya Bölge Yetkili Servisi Status Callout Badge (Support: SCP-003)
  - Direct Access Phone CTA (`tel:`) Point in Hero / Header (Support: SCP-005)
  - Direct Access Email CTA (`mailto:`) Point in Hero / Header (Support: SCP-005)

## 2. Parent Capability Coverage

| Plan Capability Atom | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Header Component with Brand Title & Navigation Links | Primary Navigation Shell (Header with Logo & Service Links) | implementation-of | PASS |
| Hero Section Markup & Layout Container | Hero Surface Presentation with Value Proposition & Industrial Visuals | implementation-of | PASS |
| Disan Hidrolik Bölge Yetkili Servisi Callout Badge Markup | Disan Hidrolik Trakya Bölge Yetkili Servisi Status Callout Badge | implementation-of | PASS |
| Direct Phone Link (`tel:`) Button in Header/Hero | Direct Access Phone CTA (`tel:`) Point in Hero / Header | detail-of | PASS |
| Direct Email Link (`mailto:`) Button in Header/Hero | Direct Access Email CTA (`mailto:`) Point in Hero / Header | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

Bu dalga web sitesini ziyaret eden potansiyel müşterilerin ve satın alma yetkililerinin ilk 3 saniyede firma gücünü, Trakya bölgesindeki yetkili servis durumunu kavradığı ve hızlı iletişim kurabildiği birinci basamaktır.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md`
- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`

## 5. Dependencies

- WAVE_00 (Foundation & Scaffolding)

## 6. Scope

### In Scope
- Kurumsal başlık, navigasyon linkleri ve hızlı iletişim alanını içeren Header bileşeni.
- Güçlü başlık metni, endüstriyel görsel tonlama ve Disan Hidrolik yetkili servis vurgusunu içeren Hero banner.
- Doğrudan arama (`tel:`) ve doğrudan e-posta (`mailto:`) tıklanabilir butonları.

### Out of Scope
- İletişim formu / modal açılır pencereler.
- Harita widget'ı veya WhatsApp butonları (açık soru / gelecek aşama).

## 7. Expected Result / Target Structure

```text
/
├── index.html (Header & Hero section markup added)
├── styles/main.css (Header & Hero styling rules added)
└── components/
    ├── Header.js
    └── Hero.js
```

## 8. Implementation Checklist

- [ ] Header bileşeni firma adı (Trakya Teknik Makine) ve bölüm navigasyon linkleri ile oluşturulacak. (Parent Atom: Primary Navigation Shell)
- [ ] Hero banner bölümü endüstriyel görsel konsept uyarınca yüksek kontrastlı arka plan ve başlık metni ile yazılacak. (Parent Atom: Hero Surface Presentation)
- [ ] Disan Hidrolik Trakya Bölge Yetkili Servisi rozeti Hero alanına belirgin biçimde eklenecek. (FCL-002; Parent Atom: Disan Hidrolik Status Callout Badge)
- [ ] Tıklanabilir `tel:` ve `mailto:` CTA butonları header ve hero alanlarına yerleştirilecek. (Parent Atom: Direct Access Phone/Email CTA Points)

## 9. State / Role / Responsive Coverage

- Mobilde header navigasyonu ve CTA butonları dikey düzende kolay tıklanabilir boyutlara (`min-height: 48px`) uyarlanacak.
- WCAG AA renk kontrast oranı (açık metin / koyu arka plan) korunacak.

## 10. Automated Verification

- HTML doğrulama ve link kontrolü (`tel:` ve `mailto:` bağlantılarının doğru URI formatı).

## 11. Manual QA / Debug Verification

- Mobil görünümde hero banner okunabilirliği ve CTA buton tıklanabilirliği test edilecek.

## 12. Acceptance / Exit Criteria

- [ ] Header ve Hero bölümleri responsive biçimde görüntüleniyor.
- [ ] Disan Hidrolik Yetkili Servisi rozeti anında fark ediliyor.
- [ ] Telefon ve e-posta butonları sorunsuz tetikleniyor.

## 13. Handoff / Stop Rule

WAVE_01 tamamlandığında WAVE_02 (Corporate Identity & Technical Trust) ve WAVE_03 (Core Services Presentation) paralel/sıralı yürütülebilir.

---

## Wave Result

- **Status**: Pending Execution
- **Result**: Not executed yet (planning phase complete).
