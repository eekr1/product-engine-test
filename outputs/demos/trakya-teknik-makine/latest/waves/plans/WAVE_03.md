# Trakya Teknik Makine — WAVE_03: Contact Surface & Responsive QA

- **Status**: Pending Execution
- **Goal**: İletişim bölümünü, telefon/e-posta CTA'larını, mobilde sabit duran hızlı erişim aksiyon çubuğunu (Sticky Contact Bar), footer alanını ve cihazlar arası uçtan uca responsive QA doğrulamasını tamamlamak.

## 1. Why This Wave / Dependency Rationale

Satış demosunda potansiyel müşterinin veya ziyaretçinin firmaya kolayca ulaşabilmesi, telefon ve e-posta kanallarını kullanabilmesi demoyu tamamlayan ve dönüşümü sağlayan son kritik aşamadır.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_02.md](./WAVE_02.md)

## 3. Dependencies

- `WAVE_02` (Core Services Presentation Surface)

## 4. Scope

### In Scope

- İletişim Bölümü (`#iletisim`): Adres, Telefon, E-posta, Çalışma Saatleri ve Bölge Bilgisi kartları.
- Tıklanabilir İletişim Aksiyonları: Doğrudan telefon araması (`tel:`) ve e-posta iletisi (`mailto:`).
- Sticky Mobile Contact Bar: Mobil ekranlarda sayfa altında sabit duran "Hemen Arayın" ve "E-posta Gönderin" hızlı erişim çubuğu.
- Footer: Telif hakkı, hızlı navigasyon bağlantıları ve Disan Hidrolik Yetkili Servis dipnotu.
- Cross-Browser & Cross-Device Responsive QA: Masaüstü, tablet ve mobil cihaz ekranlarında görsel ve işlevsel doğrulama.

### Out of Scope

- Gerçek veritabanı kayıtlı form post işlemi (demo için istemci tarafı doğrudan arama/e-posta protokolleri kullanılacaktır).

## 5. Expected Result / Target Structure

```text
working-output/
├── index.html  (İletişim, Footer & Sticky Bar tamamlandı)
└── css/
    └── components/
        ├── contact.css
        ├── sticky-bar.css
        └── footer.css
```

## 6. Implementation Checklist

- [ ] İletişim bölümü HTML ve CSS (`contact.css`) yazılacak.
- [ ] `service.js` üzerinden `getContactInfo()` fonksiyonu çağrılarak telefon, e-posta ve adres bilgileri doldurulacak.
- [ ] Telefon bağlantısı (`tel:`) ve E-posta bağlantısı (`mailto:`) standart HTML protokolleriyle test edilecek.
- [ ] Sticky Mobile Contact Bar (`sticky-bar.css`) inşa edilecek: Mobil ekranlarda ekranın altında sabit kalacak, dokunmatik hedef boyutu min 44px olacak.
- [ ] Footer bileşeni (`footer.css`) tamamlanacak.
- [ ] Uçtan uca responsive QA ve tarayıcı uyumluluğu kontrol edilecek.

## 7. State / Role / Responsive Coverage

- Masaüstü: İletişim kartları ve detaylı bilgi paneli.
- Mobil: Sabit hızlı iletişim barı (Sticky Action Bar) ve dokunmatik optimize CTA'lar.

## 8. Automated Verification

- W3C Validator & Accessibility Check (Contrast, Focus, Touch target).

## 9. Manual QA / Debug Verification

- Mobil cihaz simülasyonunda "Hemen Arayın" butonunun telefon aramasını tetiklediği, e-posta butonunun e-posta uygulamasını açtığı ve tüm görsellerin düzgün yüklendiği doğrulanacak.

## 10. Acceptance / Exit Criteria

- [ ] İletişim bilgileri ve CTA'ları eksiksiz çalışıyor.
- [ ] Mobilde Sticky Contact Bar sorunsuz görünüyor ve tıklanabiliyor.
- [ ] Sitede hiçbir kırık bağlantı, taşma veya görünüm bozukluğu yok.
- [ ] Kurumsal frontend satış demosu `output` yayını için eksiksiz ve hazır durumda.

## 11. Handoff / Stop Rule

`WAVE_03` tamamlandığında Product Engine meşru çıktısı teslime hazır hale gelir.

---

## Wave Result

Status: PENDING EXECUTION
