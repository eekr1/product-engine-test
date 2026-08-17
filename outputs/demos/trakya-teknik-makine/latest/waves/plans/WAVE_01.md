# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_01: Global Shell & Corporate Header Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Ana layout kabuğunu, header navigasyonunu ve "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" unvanını vurgulayan hero sunum alanını geliştirmek.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_01
- **Name**: Global Shell & Corporate Header Presentation
- **Goal**: Ana layout kabuğunu, header navigasyonunu ve "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" unvanını vurgulayan hero sunum alanını geliştirmek.
- **Why Separate**: Kurumsal kimlik ve yetkili servis unvanı sitenin ana omurgasıdır; hizmet kartları ve iletişim butonları eklenmeden önce üst kabuk ve hero sunumu netleştirilmelidir.

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Header Component (`Header.jsx`) | Corporate layout shell & navigation header | implementation-of | PASS |
| Hero Component (`HeroPresentation.jsx`) | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi hero presentation | implementation-of | PASS |
| Shell Composition Integration (`App.jsx`) | Corporate layout shell & navigation header | detail-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_01`, projenin görsel kurumsal kimliğini ve "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" statüsünü ziyaretçiye ilk 3 saniyede aktaran üst kabuğu ve hero alanını inşa eder. WAVE_00'da kurulan `tokens.css` ve `presentationService.js` altyapısını tüketerek, generic template hissi vermeyen özgün bir endüstriyel visual direction sunar.

## 4. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md) — Proje kimliği ve değer önermesi
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md) — Kurumsal kimlik ve Factual Allowlist kısıtları
- [ai/TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md) — Component boundaries ve presentation service kullanımı
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md) — Görsel konsept, H1/H2 tipografi ölçekleri ve renk paleti
- [waves/WAVE_MAP.md](../WAVE_MAP.md) — Wave 01 hedefleri ve bağımlılıkları

## 5. Dependencies

- **WAVE_00**: `tokens.css`, `global.css` ve `presentationService.js` altyapısının tamamlanmış olması gerekir.

## 6. Scope

### In Scope
- `src/components/Header.jsx`: Firma adı logo vurgusu, navigasyon bağlantıları ve hızlı iletişim rozet alanı.
- `src/components/HeroPresentation.jsx`: H1 başlığı ("Trakya Teknik Makine"), yetkili servis rozeti ("Disan Hidrolik Makine Trakya Bölge Yetkili Servisi"), endüstriyel görsel zemin kompozisyonu.
- `src/App.jsx` içinde `Header` ve `HeroPresentation` bileşenlerinin entegre edilmesi.

### Out of Scope
- Hizmet detay kartları grid'i (Wave 02).
- Tıklanabilir direct-contact telefon/e-posta CTA alanları (Wave 02).
- WhatsApp, canlı harita veya arama/filtreleme çubuğu.

## 7. Expected Result / Target Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Header.css
│   ├── HeroPresentation.jsx
│   └── HeroPresentation.css
└── App.jsx (Header & Hero render eder)
```

## 8. Implementation Checklist

- [x] **Task 1 / Header Component Implementation**:
  - Location: `src/components/Header.jsx`, `src/components/Header.css`
  - Consumes: `presentationService.getCompanyInfo()` verisi ve `tokens.css`
  - Owns: Kurumsal üst navigasyon çubuğu, firma adı markalama alanı ve mobil menü yapısı
  - Must Not: Arama çubuğu, kullanıcı girişi veya WhatsApp butonu eklenmeyecektir
  - Verification: Header'ın sayfa üstünde sabit durması, responsive daralmada menünün düzgün davranması
  - Done: Kurumsal header bileşeninin tamamlanması.

- [x] **Task 2 / Hero Presentation Component Implementation**:
  - Location: `src/components/HeroPresentation.jsx`, `src/components/HeroPresentation.css`
  - Consumes: `presentationService.getCompanyInfo()` (FCL-001 & FCL-002) ve `tokens.css`
  - Owns: Ana H1 başlığı, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi vurgu rozeti, endüstriyel teknik visual zemin
  - Must Not: Stok, orijinal parça, SLA veya mobil filo gibi uydurma qualifier metinleri eklenmeyecektir
  - Verification: H1 başlığı ve yetkili servis statüsünün ilk görünümde okunabilir olması
  - Done: Yetkili servis rozetli Hero sunum bileşeninin yazılması.

- [x] **Task 3 / Shell Composition Integration**:
  - Location: `src/App.jsx`
  - Consumes: `Header.jsx` ve `HeroPresentation.jsx`
  - Owns: Sayfa üst kabuk düzeni ve zemin hiyerarşisi
  - Must Not: Alt dalga bileşenleri yüklenmeden yapay boşluklar bırakılmayacaktır
  - Verification: `npm run dev` ile tarayıcıda header ve hero alanlarının dikey hiyerarşiyle render olması
  - Done: Sayfa üst kabuğunun birleştirilmesi.

## 9. State / Role / Responsive Coverage

- **Desktop (`>= 1024px`)**: Header navigasyon bağlantıları açık dikey sırada; Hero alanı yan yana teknik görsel ve yetkili servis rozeti ile render olur.
- **Tablet (`768px - 1023px`)**: Hero alanı dikey istiflenir, tipografi boyutları dengelenir.
- **Mobile (`< 768px`)**: Header logosu ve menüsü dar alana uyarlanır; Hero başlığı ve yetkili servis rozeti mobil ekranda kesilmeden okunur.

## 10. Automated Verification

```bash
# Vite dev server testi
npm run dev

# Derleme ve bundle kontrolü
npm run build
```

## 11. Manual QA / Debug Verification

- Tarayıcıda `HeroPresentation` alanını açarak "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" metninin tam ve doğru FCL ifadesiyle yer aldığını kontrol et.
- Responsive görünümde metin taşması veya dikey kayma olmadığını doğrula.

## 12. Acceptance / Exit Criteria

- [x] `Header.jsx` kurumsal firma adı ve navigasyon alanını render ediyor.
- [x] `HeroPresentation.jsx` H1 başlığında Trakya Teknik Makine adını ve yetkili servis rozetinde "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" statüsünü hatasız gösteriyor.
- [x] Tasarımda lacivert klişesi yerine Antrasit `#1E2530` ve Amber `#D97706` renk dengesi uygulanmış.
- [x] `npm run build` komutu derleme hatası vermiyor.

## 13. Handoff / Stop Rule

`WAVE_01` bittiğinde, kurumsal üst kabuk ve Hero alanı tamamlanmış olur. Kod tabanı Wave 02 (Verified Services & Direct-Contact Capabilities) aşamasına geçmeye hazırdır. Dokümantasyon `CURRENT_STATUS.md` ve `NEXT_TASKS.md` güncellenir.

---
## Wave Result

- **Result Status**: completed

