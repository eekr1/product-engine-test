# Trakya Teknik Makine — WAVE_02: Core Services Presentation Surface

- **Status**: Pending Execution
- **Goal**: Firmanın öne çıkan 3 temel hizmet alanını (*Yedek Parça Temini*, *Yerinde Teknik Destek*, *Makine Bakım ve Onarım*) görsel hiyerarşi, özel ikonografi ve detay kartları ile sunmak.

## 1. Why This Wave / Dependency Rationale

Trakya Teknik Makine'nin potansiyel müşteriye sunduğu ana değer teklifi 3 temel hizmetidir. Hero bölümü sonrasında müşterinin inceleyeceği birincil işlevsel bölüm hizmetler arayüzüdür.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_01.md](./WAVE_01.md)

## 3. Dependencies

- `WAVE_01` (Hero Section & Corporate Trust Surface)

## 4. Scope

### In Scope

- Hizmetler Bölümü Başlığı ve Açıklama Metni.
- 3 Ana Hizmet Kartı:
  1. **Yedek Parça Temini**: Orijinal yedek parça, hızlı teslimat, hidrolik aksam garantisi.
  2. **Yerinde Teknik Destek**: Trakya bölgesinde 7/24 hızlı mobil servis ekibi, yerinde arıza tespiti ve müdahale.
  3. **Makine Bakım ve Onarım**: Periyodik bakım, revizyon, performans testi ve arıza onarımı.
- Hizmet Kartı Bileşenleri: Özel SVG teknik ikon, başlık, detay özellikleri listesi, hover yüksekliği ve mikro etkileşimler.
- "Teklif / Servis Talebi" CTA yönlendirmesi.

### Out of Scope

- Gerçek online teklif alma formu (WAVE_03 iletişim CTA'ları ile bağlanacaktır).

## 5. Expected Result / Target Structure

```text
working-output/
├── index.html  (Hizmetler Bölümü eklendi)
└── css/
    └── components/
        └── services.css  (hizmet kartları ve grid düzeni)
```

## 6. Implementation Checklist

- [ ] Hizmetler bölümü HTML yapısı (`#hizmetlerimiz`) kurulacak.
- [ ] `services.css` yazılacak: 3 sütunlu responsive grid, dark slate kart yüzeyleri, metallic border vurguları.
- [ ] `service.js` üzerinden `getServicesList()` fonksiyonu çağrılarak hizmet verileri okunacak.
- [ ] 3 hizmet için SVG teknik ikonlar yerleştirilecek (Yedek parça dişli ikonu, mobil servis araç/çanta ikonu, bakım/onarım anahtar ikonu).
- [ ] Kart içi özellik listeleri (`check-list`) ve mühür kart rozetleri oluşturulacak.
- [ ] Hover mikro etkileşimleri (`transform: translateY(-4px)`, border glowing) uygulanacak.

## 7. State / Role / Responsive Coverage

- Desktop: 3 yan yana eşit kart düzeni.
- Tablet: 2 Sütun + 1 alt geniş kart düzeni.
- Mobile: Tek dikey sütun halinde temiz kart akışı.

## 8. Automated Verification

- HTML/CSS Syntax ve Responsive Layout Kontrolü.

## 9. Manual QA / Debug Verification

- 3 Hizmet kartının metinlerinin tam okunduğu, ikonların keskin görüntülendiği ve hover efektlerinin akıcı çalıştığı doğrulanacak.

## 10. Acceptance / Exit Criteria

- [ ] 3 Ana Hizmet (*Yedek Parça*, *Yerinde Destek*, *Bakım-Onarım*) eksiksiz ve belirgin biçimde sunulmuş.
- [ ] Kartlar `DESIGN_RULES.md` visual concept'ine tam uygun.
- [ ] Veriler mock service layer üzerinden çekiliyor.
- [ ] Mobil ve masaüstü responsive düzen kusursuz.

## 11. Handoff / Stop Rule

`WAVE_02` tamamlandığında `WAVE_03` (Contact Surface & Responsive QA) uygulanmasına geçilebilir.

---

## Wave Result

Status: PENDING EXECUTION
