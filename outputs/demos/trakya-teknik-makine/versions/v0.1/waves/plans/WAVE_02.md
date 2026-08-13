# Trakya Teknik Makine — WAVE_02: Services Showcase & Demo Verification

- **Status**: Pending Execution
- **Goal**: Firmanın 3 temel hizmetinin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel kartlar halinde sunulması, iletişim CTA'larının bağlanması ve uçtan uca satış görüşmesi QA doğrulaması.

## 1. Why This Wave / Dependency Rationale

WAVE_00 ve WAVE_01 çıktılarını tamamlar. Müşteriye sunulacak ana değer önermesi olan 3 hizmet kartını ve doğrudan iletişim aksiyonlarını inşa ederek demoyu satış görüşmesine hazır tamamlanmış ürün haline getirir.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)

## 3. Dependencies

- **Önkoşullar**: `WAVE_01` (Corporate Shell & Trust Showcase).

## 4. Scope

### In Scope

- Hizmetler Grid & Kart Bileşeni (Yedek Parça Temini, Yerinde Destek, Bakım-Onarım).
- `CompanyService.getServices()` bağlantısı ve kart bazlı detay modal/akordiyon görünümleri.
- İletişim Aksiyon Alanı (Footer CTA, Telefon `tel:`, E-posta `mailto:`, Adres Bilgisi).
- Demo Görsel Temizlik & Tam Satış Görüşmesi QA Doğrulaması.

### Out of Scope

- Gerçek veritabanı veya sunucu taraflı iletişim formu entegrasyonu.
- Sahte müşteri yorumları veya kanıtlanmamış sertifikalar.

## 5. Expected Result / Target Structure

```text
outputs/demos/trakya-teknik-makine/latest/
├── index.html                     # Fully Completed Demo Landing Page
├── src/
│   ├── components/
│   │   ├── ServicesGrid.js         # Service Cards Grid (3 Main Services)
│   │   ├── ServiceCard.js         # Individual Service Card Component
│   │   └── ContactSection.js      # Contact Info & Quick Action CTA
│   └── styles/
│       ├── services.css
│       └── contact.css
```

## 6. Implementation Checklist

- [ ] `src/styles/services.css` oluştur ve 3-sütunlu kart grid stilini kurgula.
- [ ] `src/components/ServicesGrid.js` oluştur; `CompanyService.getServices()` verisini çekerek 3 ana hizmeti listelet.
- [ ] Hizmet 1 Kartı: "Yedek Parça Temini" — Görsel simge, açıklama metni ve teknik kapsamı ekle.
- [ ] Hizmet 2 Kartı: "Yerinde Teknik Destek" — Görsel simge, servis süreci ve yetkili müdahale vurgusunu ekle.
- [ ] Hizmet 3 Kartı: "Makine Bakım ve Onarım" — Görsel simge, hidrolik/mekanik bakım detaylarını ekle.
- [ ] Hizmet kartlarında hover animasyonu (`transform: translateY(-4px)` ve amber vurgu çizgisi) uygula.
- [ ] `src/components/ContactSection.js` oluştur; firmanın gerçek adres, telefon (`+90...`), e-posta ve Disan Yetkili Servis alanını konumlandır.
- [ ] Footer alanını kurumsal künye ve telif hakları bildirimi ile tamamla.
- [ ] Tarayıcı penceresini 320px, 768px, 1024px, 1440px ve 1920px boyutlarında manuel test et.
- [ ] Satış görüşmesinde sunulabilir görsel kalite kontrolünü (Anti-template check) yap.

## 7. State / Role / Responsive Coverage

- **Mobile Viewport**: 3 Hizmet kartı tek sütunda sıralanmalı; kart arası boşluklar 16px olmalı.
- **Desktop Viewport**: 3 Hizmet kartı yan yana eşit genişlikte sıralanmalı; hover ve odak durumları akıcı olmalı.

## 8. Automated Verification

```bash
# Final Demo Package HTML/CSS & JS Modular Integrity Verification
```

## 9. Manual QA / Debug Verification

- 3 Ana hizmet başlığının `SRC-02` (Mevcut site) bilgileriyle tam uyumlu olduğunu doğrula.
- Tüm telefon bağlantılarının mobilde doğrudan arama ekranını açtığını kontrol et.
- Sayfada hiçbir kırık görsel veya placeholder text (`[TBD]`, `Lorem Ipsum`) kalmadığını doğrula.

## 10. Acceptance / Exit Criteria

- [ ] 3 Ana Hizmet kartı sorunsuz sergileniyor.
- [ ] `CompanyService` mock verileri UI'a doğru aktarılmış.
- [ ] İletişim bilgileri ve CTA bağlantıları eksiksiz çalışıyor.
- [ ] Mobil ve masaüstü responsive performans tam.
- [ ] Satış görüşmesinde sunulmaya hazır nihai demo tamamlandı.

## 11. Handoff / Stop Rule

WAVE_02 başarıyla tamamlandığında frontend demo projesi teslim edilebilir (Demo Complete).

---

## Wave Result

*Status: Pending execution. Executed evidence will be updated upon wave execution completion.*
