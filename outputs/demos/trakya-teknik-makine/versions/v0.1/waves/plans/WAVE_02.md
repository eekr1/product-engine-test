# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_02: Verified Services & Direct-Contact Capabilities

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Doğrulanmış 3 temel hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) kart hiyerarşisiyle sunmak ve telefon/e-posta CTA butonlarını entegre etmek.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_02
- **Name**: Verified Services & Direct-Contact Capabilities
- **Goal**: Doğrulanmış 3 temel hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) kart hiyerarşisiyle sunmak ve telefon/e-posta CTA butonlarını entegre etmek.
- **Why Separate**: Hizmet sunumu ve iletişim butonları web sitesinin ana işlevsel çıktısıdır; kurumsal üst kabuk tamamlandıktan sonra ayrı bir delivery birimi olarak geliştirilmelidir.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Services Grid Component (`ServicesGrid.jsx`, `ServiceCard.jsx`) | Yedek Parça Temini service card | implementation-of | PASS |
| Services Grid Component (`ServicesGrid.jsx`, `ServiceCard.jsx`) | Yerinde Teknik Destek service card | implementation-of | PASS |
| Services Grid Component (`ServicesGrid.jsx`, `ServiceCard.jsx`) | Makine Bakım ve Onarım service card | implementation-of | PASS |
| Direct-Contact CTA Component (`ContactCTA.jsx`) | Direct-contact phone & email CTA buttons | implementation-of | PASS |
| Footer Presentation Component (`Footer.jsx`) | Direct-contact phone & email CTA buttons | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_02`, Trakya Teknik Makine'nin iş modelini ve hizmet kapsama alanını temsil eden ana içerik bloklarını inşa eder. `WAVE_01` ile kurulan üst kabuğun altına yerleşerek, doğrulanmış 3 temel hizmeti görsel kart hiyerarşisiyle sunar. Aynı zamanda müşterilerin doğrudan arama (`tel:`) yapabileceği ve e-posta (`mailto:`) atabileceği iletişim yüzeylerini entegre eder.

## 4. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md) — Doğrulanmış hizmet listesi
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md) — Factual Allowlist ve direct-contact CTA kuralları
- [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md) — Presentation service boundary ve data flow
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md) — İnce 1px kenarlıklı teknik kart mimarisi ve renk rolleri
- [waves/WAVE_MAP.md](../WAVE_MAP.md) — Wave 02 scope ve bağımlılıkları

## 5. Dependencies

- **WAVE_01**: `Header` ve `HeroPresentation` bileşenlerinin tamamlanmış olması gerekir.

## 6. Scope

### In Scope
- `src/components/ServicesGrid.jsx` ve `ServiceCard.jsx`: FCL-003, FCL-004 ve FCL-005 allowed wording sınırlarında 3 hizmetin sunumu.
- `src/components/ContactCTA.jsx`: Telefon ve e-posta direct-contact CTA butonları (`tel:` ve `mailto:` protokolleri).
- `src/components/Footer.jsx`: Alt kurumsal bilgi ve telif/haklar alanı.
- `App.jsx` içinde tüm bileşenlerin birleştirilmesi.

### Out of Scope
- Source-backed olmayan uydurma qualifier'lar (stok, orijinal parça, SLA, mobil filo, acil müdahale, periyodik bakım, revizyon).
- Canlı sohbet / WhatsApp butonu.
- Gerçek form submit backend'i.
- Canlı harita entegrasyonu.

## 7. Expected Result / Target Structure

```text
src/
├── components/
│   ├── ServicesGrid.jsx
│   ├── ServicesGrid.css
│   ├── ServiceCard.jsx
│   ├── ServiceCard.css
│   ├── ContactCTA.jsx
│   ├── ContactCTA.css
│   ├── Footer.jsx
│   └── Footer.css
└── App.jsx (Tüm bileşenleri sırayla render eder)
```

## 8. Implementation Checklist

- [ ] **Task 1 / Services Grid Component Implementation**:
  - Location: `src/components/ServicesGrid.jsx`, `src/components/ServiceCard.jsx`, CSS dosyaları
  - Consumes: `presentationService.getServices()` (FCL-003, FCL-004, FCL-005) ve `tokens.css`
  - Owns: 3 doğrulanmış hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) teknik kart hiyerarşisiyle sunulması
  - Must Not: Hizmet başlıklarına stok, orijinal parça, SLA, mobil filo veya revizyon eklenmeyecektir
  - Verification: 3 kartın ızgara düzeninde hatasız render olması
  - Done: Doğrulanmış 3 hizmet sunum grid'inin tamamlanması.

- [ ] **Task 2 / Direct-Contact CTA Component Implementation**:
  - Location: `src/components/ContactCTA.jsx`, `src/components/ContactCTA.css`
  - Consumes: `presentationService.getContactActions()` (PR-003)
  - Owns: İletişim butonları, `tel:` ve `mailto:` bağlantı protokolleri
  - Must Not: Gerçek form backend'i veya WhatsApp yönlendirmesi eklenmeyecektir
  - Verification: Butonlara tıklandığında/dokunulduğunda uygun protokollerin tetiklenmesi
  - Done: Direct-contact telefon/e-posta CTA alanının tamamlanması.

- [ ] **Task 3 / Corporate Footer Component Implementation**:
  - Location: `src/components/Footer.jsx`, `src/components/Footer.css`
  - Consumes: `presentationService.getCompanyInfo()` ve `tokens.css`
  - Owns: Kurumsal alt telif alanı ve hızlı sayfa navigasyon linkleri
  - Must Not: Uydurma sosyal medya linkleri veya sahte adres bilgisi eklenmeyecektir
  - Verification: Sayfa en altında kurumsal footer'ın hatasız durması
  - Done: Kurumsal alt bilgilerin tamamlanması.

## 9. State / Role / Responsive Coverage

- **Desktop (`>= 1024px`)**: Hizmetler 3 sütunlu teknik kart grid'inde; Contact CTA alanı geniş aksan zemin üzerinde yan yana butonlar olarak render edilir.
- **Tablet (`768px - 1023px`)**: Hizmetler 2 sütunlu grid yapısına esner.
- **Mobile (`< 768px`)**: Hizmetler ve CTA butonları dikey tek sütun (stacking) olarak dizilir; CTA dokunma alanları minimum `44px` yüksekliğe ulaşır.

## 10. Automated Verification

```bash
# Vite dev server testi
npm run dev

# Derleme ve bundle kontrolü
npm run build
```

## 11. Manual QA / Debug Verification

- Hizmet kartlarında "Yedek Parça Temini", "Yerinde Teknik Destek" ve "Makine Bakım ve Onarım" başlıklarının tam ve uydurmasız yer aldığını doğrula.
- Telefon ve e-posta butonlarının `href="tel:..."` ve `href="mailto:..."` niteliklerini taşıdığını incele.

## 12. Acceptance / Exit Criteria

- [ ] 3 doğrulanmış hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) `ServicesGrid` üzerinde render oluyor.
- [ ] Direct-contact CTA butonları telefon ve e-posta protokolleriyle çalışıyor.
- [ ] FCL allowlist dışında uydurma qualifier veya iddia bulunmuyor.
- [ ] `npm run build` komutu derleme hatası vermiyor.

## 13. Handoff / Stop Rule

`WAVE_02` bittiğinde, tüm içerik ve bileşenler tamamlanmış olur. Kod tabanı Wave 03 (Responsive Polish & Sales Demo Readiness) son cilalama ve önizleme aşamasına geçer. Dokümantasyon `CURRENT_STATUS.md` ve `NEXT_TASKS.md` güncellenir.

---
## Wave Result

- **Result Status**: pending / not executed
