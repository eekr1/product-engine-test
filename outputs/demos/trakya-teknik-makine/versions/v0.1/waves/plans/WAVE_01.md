# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Hero & Corporate Trust Surface

- **Status**: Ready for Execution
- **Goal**: Header, Navigation, Hero Section ve Disan Hidrolik Trakya Bölge Yetkili Servisi güven rozetini yüksek görsel kalite ve responsive uyum ile geliştirmek.

## 1. Why This Wave / Dependency Rationale

- Ziyaretçinin sitede karşılaştığı ilk 3 saniyelik etkileşim alanıdır. Firmanın yetkinliğini ve yetkili servis gücünü anında yansıtmak satış görüşmesi demosu için en kritik aşamadır.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)
- [WAVE_00.md](./WAVE_00.md)

## 3. Dependencies

- `WAVE_00` (Foundation, CSS variables ve mock data layer tamamlanmış olmalıdır).

## 4. Scope

### In Scope
- Header ve Kurumsal Navigasyon çubuğu (Logo, Linkler, Hızlı İletişim Butonu).
- Hero Section (Ana Başlık, Alt Açıklama, Görsel Vurgu, Hızlı Arama & Teklif İsteme CTA'ları).
- Engineering Trust Badge (Disan Hidrolik Trakya Bölge Yetkili Servisi kimlik kartı ve kalite göstergeleri).
- Header & Hero bileşenlerinin responsive mobil menü uyumu.

### Out of Scope
- Hizmet Kartları (Wave 02'ye aittir).
- İletişim Detay Sayfası & Harita (Wave 03'e aittir).

## 5. Expected Result / Target Structure

```text
components/
├── Header.js (veya HTML template yapısı)
├── Hero.js
└── TrustBadges.js
styles/
└── components/
    ├── header.css
    ├── hero.css
    └── trust-badges.css
```

## 6. Implementation Checklist

### 6.1 Header & Navigasyon
- [ ] 1.1 Header yapısını semantik `<header>` ve `<nav>` etiketleriyle kur.
- [ ] 1.2 Trakya Teknik Makine logosunu ve navigasyon linklerini (Ana Sayfa, Hakkımızda, Hizmetler, İletişim) ekle.
- [ ] 1.3 Mobil cihazlar için responsive hamburger menü etkileşimini CSS/JS ile sağla.
- [ ] 1.4 Header sağ alanına öne çıkan "Hemen Ulaşın" hızlı iletişim butonunu yerleştir.

### 6.2 Hero Section (İlk İzlenim Yüzeyi)
- [ ] 2.1 Hero alanını semantik `<section class="hero">` olarak kurgula.
- [ ] 2.2 `DESIGN_RULES.md` uyarınca hassas mühendislik estetiğini yansıtan başlık (H1) ve açıklama metinlerini `companyData.js` üzerinden bağla.
- [ ] 2.3 Hero alanına High-Visibility Amber / Cyan vurgulu CTA butonlarını ("Hizmetlerimizi İnceleyin", "Doğrudan İletişim") ekle.
- [ ] 2.4 Hero sağ paneline teknik görselliği destekleyen grafik/ikon kartı yerleştir.

### 6.3 Disan Hidrolik Yetkili Servis Güven Rozeti (Trust Surface)
- [ ] 3.1 Disan Hidrolik Trakya Bölge Yetkili Servisi vurgusunu özel bir Engineering Trust Badge bileşeni olarak tasarla.
- [ ] 3.2 Yetkili servis kimliğini doğrulayan badge detaylarını (bölgesel servis gücü, teknik destek vurgusu) ekle.
- [ ] 3.3 Kart üzerine gelindiğinde subtle hover effect ve çerçeve parlaklığı stilini uygula.

## 7. State / Role / Responsive Coverage

- Masaüstü: Geniş hero ekranı, 2-sütunlu kompozisyon, görünür navigasyon.
- Mobil: Hamburger menü, dikey hizalı hero başlık ve dikey buton yapısı.
- State: CTA butonları hover/active/focus durumları.

## 8. Automated Verification

- Tarayıcı konsol kontrolü (Bileşen oluşturma hatası olmaması).

## 9. Manual QA / Debug Verification

- Mobil ekran genişliğinde (375px) navigasyon menüsünün açılıp kapandığı doğrulanır.
- Disan Hidrolik yetkili servis rozetinin metin ve görsel kontrastı kontrol edilir.

## 10. Acceptance / Exit Criteria

- [ ] Header, Hero ve Trust Badge bileşenleri tasarıma uygun şekilde inşa edildi.
- [ ] Metinler hardcoded değil, `companyData.js` mock service üzerinden okunuyor.
- [ ] Mobil ve masaüstü görünümler akıcı ve responsive.
- [ ] Disan Hidrolik yetkili servis kimliği açıkça görünür durumda.

## 11. Handoff / Stop Rule

- Wave 01 tamamlandıktan sonra `WAVE_02` (Service Presentation Surface) başlatılabilir.

---

## Wave Result

Status: Pending Execution (Not executed yet).
