# Trakya Teknik Makine — WAVE_01: Corporate Shell & Trust Showcase

- **Status**: Pending Execution
- **Goal**: Ana sayfanın üst navigasyon alanının (Header), güçlü endüstriyel görsel hero alanının, kurumsal tanıtım bölümünün ve Disan Hidrolik Yetkili Servis güven rozetinin inşa edilmesi.

## 1. Why This Wave / Dependency Rationale

WAVE_00 ile kurulan temel layout shell ve design tokens üzerinde yükselir. Satış görüşmesinde müşterinin göreceği ilk ekranı (Above the fold) ve kurumsal güven unsurlarını kullanıma sunar.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)

## 3. Dependencies

- **Önkoşullar**: `WAVE_00` (Foundation, Design Tokens & Data Boundary).

## 4. Scope

### In Scope

- Sticky Header Bileşeni (Logo/Firma Adı, Hızlı İletişim Telefon Linki, Navigasyon Linkleri).
- Hero Banner (Güçlü sanayi görsel başlığı, Disan Hidrolik Yetkili Servis Vurgusu, "Hizmetlerimizi İnceleyin" CTA).
- Precision Trust Badge (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi teknik rozeti).
- Kurumsal Tanıtım / Hakkımızda Bölümü (Firma özeti ve teknik yetkinlik vurgusu).

### Out of Scope

- Hizmet detay kartlarının tamamlanması (WAVE_02 konusudur).
- Gerçek online teklif formu simülasyonu.

## 5. Expected Result / Target Structure

```text
outputs/demos/trakya-teknik-makine/latest/
├── index.html                     # Expanded Header, Hero & Corporate Trust Sections
├── src/
│   ├── components/
│   │   ├── Header.js              # Header & Sticky Nav Component
│   │   ├── Hero.js                # Industrial Hero & Precision Badge
│   │   └── CorporateTrust.js      # Company Intro & Authorized Service Banner
│   └── styles/
│       ├── header.css
│       ├── hero.css
│       └── corporate.css
```

## 6. Implementation Checklist

- [ ] `src/styles/header.css` oluştur ve koyu slate zemin üzerine sticky header stilini uygula.
- [ ] Header sol alanında firma adı ve Disan Yetkili Servis etiketini konumlandır.
- [ ] Header sağ alanına hızlı telefon arama (click-to-call) CTA butonunu yerleştir.
- [ ] `src/styles/hero.css` oluştur; koyu kömür zemin ve sanayi kehribarı aksan vurgusunu kurgula.
- [ ] Hero başlık metnini ekle: "Trakya Bölgesinde Güvenilir Makine Bakım, Onarım ve Yedek Parça Çözümleri".
- [ ] Hero alanına Disan Hidrolik Yetkili Servisi rozetini (Precision Badge) ekle.
- [ ] `src/components/CorporateTrust.js` bileşenini oluştur; `CompanyService.getCompanyInfo()` üzerinden firma tanıtım metinlerini bağla.
- [ ] Mobil görünümde header menüsünün daralıp telefon CTA'sının erişilebilir kaldığını doğrula.
- [ ] Dark slate background ve light typography kontrast oranlarını WCAG AA standartlarında kontrol et.

## 7. State / Role / Responsive Coverage

- **Mobile Viewport**: Hero başlığı ve yetkili servis rozeti dikey akışta okunabilir olmalı.
- **Desktop Viewport**: Header sticky kalmalı; Hero yanında görsel veya teknik parametre kartı ile zenginleştirilmeli.

## 8. Automated Verification

```bash
# Markup verification & responsive test check
```

## 9. Manual QA / Debug Verification

- Sayfa aşağı kaydırıldığında header'ın sticky konumunu koruduğunu ve z-index çakışması yaşanmadığını doğrula.
- Telefon numarasına tıklandığında `tel:` protokolünün tetiklendiğini kontrol et.

## 10. Acceptance / Exit Criteria

- [ ] Sticky Header sorunsuz çalışıyor.
- [ ] Disan Hidrolik Yetkili Servisi rozeti görünür ve belirgin.
- [ ] Hero alanı responsive ve tasarım diline uygun.
- [ ] Kurumsal tanıtım metinleri doğrulanmış kaynakla birebir eşleşiyor.

## 11. Handoff / Stop Rule

WAVE_01 tamamlandıktan sonra WAVE_02'ye geçilebilir.

---

## Wave Result

*Status: Pending execution. Executed evidence will be updated upon wave execution completion.*
