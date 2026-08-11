# Trakya Teknik Makine — WAVE_01: Hero Section & Corporate Trust Surface

- **Status**: Pending Execution
- **Goal**: Header navigasyonunu, Hero görsel kompozisyonunu, "Disan Hidrolik Trakya Bölgesi Yetkili Servisi" doğrulanmış rozetini ve kurumsal güven unsurlarını inşa etmek.

## 1. Why This Wave / Dependency Rationale

Potansiyel müşteri satış görüşmesinde web sitesine girildiğinde ilk 3 saniyede yaratılacak kurumsal algı ve güvenilirlik belirleyicidir. Bu nedenle header, hero ve yetkili servislik vurgusu öncelikli olarak inşa edilir.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_00.md](./WAVE_00.md)

## 3. Dependencies

- `WAVE_00` (Foundation & Design System Setup)

## 4. Scope

### In Scope

- Header Navigasyonu: Logo alanı, Ana Sayfa, Kurumsal, Hizmetlerimiz, İletişim bağlantıları, İletişim Telefon CTA butonu.
- Hero Section: Sol tarafta vurgulu kurumsal slogan, Disan Hidrolik yetkili servis rozeti, kısa firma özeti, "Hizmetlerimizi İnceleyin" ve "Hemen Arayın" CTA'ları.
- Hero Visual Card: Sağ tarafta teknik servis görsel hiyerarşisi, dinamik "7/24 Teknik Destek & Servis" durum göstergesi.
- Trust Elements: Bölgesel yetkinlik ve hızlı müdahale güven vurguları.

### Out of Scope

- 3 Hizmet alanının detay kartları (WAVE_02).
- İletişim formu ve footer (WAVE_03).

## 5. Expected Result / Target Structure

```text
working-output/
├── index.html  (Header & Hero Section eklendi)
└── css/
    ├── components/
    │   ├── header.css
    │   ├── hero.css
    │   └── badge.css
```

## 6. Implementation Checklist

- [ ] Header bileşeni yazılacak: Esnek flexbox düzeni, firma logosu/başlığı, navigasyon menüsü ve telefon CTA.
- [ ] Header responsive mobil menü (hamburger / compact toggle) mantığı kurgulanacak.
- [ ] Hero bölümü HTML yapısı ve CSS stilleri (`hero.css`) oluşturulacak.
- [ ] Disan Hidrolik Yetkili Servis rozeti (`badge.css`) tasarlanacak: İkonik kalkan/dişli sembolü, vurgulu zümrüt/amber yeşil durum noktası.
- [ ] Hero CTA butonları tasarlanacak: Birincil "Hemen Arayın" (`tel:`) ve ikincil "Hizmetlerimiz" yönlendirmesi.
- [ ] Data service'ten firma adı ve servis metni okunarak DOM'a aktarılacak.

## 7. State / Role / Responsive Coverage

- Masaüstü: Header ve Hero 2 sütunlu teknik kompozisyon.
- Mobil: Mobil uyumlu başlık ölçeği ve dokunmatik uyumlu CTA butonları.

## 8. Automated Verification

- W3C HTML/CSS Validation veya Linter kontrolü.

## 9. Manual QA / Debug Verification

- Masaüstü ve mobil ekran boyutlarında Hero başlığının ve Disan Hidrolik yetkili servis rozetinin net okunduğu doğrulanacak.

## 10. Acceptance / Exit Criteria

- [ ] Header ve Hero bölümü `DESIGN_RULES.md` visual concept'ine uygun olarak görsellerle tamamlanmış.
- [ ] "Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi" bilgisi ilk bakışta açıkça görülüyor.
- [ ] Hero bölümündeki telefon CTA'sı doğrudan arama bağlantısına (`tel:`) sahip.
- [ ] Mobil ve masaüstü responsive düzen sorunsuz çalışıyor.

## 11. Handoff / Stop Rule

`WAVE_01` tamamlandığında `WAVE_02` (Core Services Presentation Surface) uygulanmasına geçilebilir.

---

## Wave Result

Status: PENDING EXECUTION
