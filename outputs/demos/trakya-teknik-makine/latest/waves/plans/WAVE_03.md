# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_03: Contact, Map & Presentation QA

- **Status**: Ready for Execution
- **Goal**: İletişim bölümünü, hızlı telefon/e-posta CTA'larını, lokasyon kartını inşa etmek ve tüm projenin responsive bütünlüğü ile satış demosu kalitesini doğrulamak.

## 1. Why This Wave / Dependency Rationale

- Müşterinin firmayla etkileşime geçeceği son dönüşüm (conversion) bölümüdür. Ayrıca satış görüşmesinde sorunsuz gösterim için final cross-cutting QA bu wave ile tamamlanır.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)
- [WAVE_02.md](./WAVE_02.md)

## 3. Dependencies

- `WAVE_02` (Hizmetler bölümü tamamlanmış olmalıdır).

## 4. Scope

### In Scope
- İletişim Bölümü (`<section class="contact">`).
- Hızlı İletişim Kartları (Telefon `tel:`, E-posta `mailto:`, Adres, Çalışma Saatleri).
- Simüle edilmiş Teklif İsteme / İletişim Formu (Frontend simülasyonu).
- Footer Bileşeni (Telif hakkı, hızlı navigasyon linkleri, yetkili servis logosu).
- Tüm sayfanın responsive, cross-browser ve satış demosu sunum kalitesi doğrulaması (Final QA).

### Out of Scope
- Gerçek backend e-posta gönderim API'si veya SMS entegrasyonu.

## 5. Expected Result / Target Structure

```text
components/
├── ContactSection.js
├── ContactFormSim.js
└── Footer.js
styles/
└── components/
    ├── contact.css
    └── footer.css
```

## 6. Implementation Checklist

### 6.1 İletişim Bölümü & Hızlı CTA Kartları
- [ ] 1.1 İletişim kapsayıcısını (`<section class="contact">`) kurgula.
- [ ] 1.2 `companyData.js` üzerinden doğrulanmış telefon, e-posta ve adres bilgilerini çekerek kartlar halinde yerleştir.
- [ ] 1.3 Mobil cihazlarda doğrudan arama başlatan `tel:` ve e-posta başlatan `mailto:` bağlantılarını bağla.

### 6.2 İletişim / Teklif Formu Simülasyonu
- [ ] 2.1 Temiz teklif alma formu alanlarını (Ad Soyad, Firma Adı, Telefon, Hizmet Seçimi, Mesaj) oluştur.
- [ ] 2.2 Form gönderildiğinde sayfa yenilenmeden istemci tarafında başarılı gönderim mesajı simülasyonunu göster.

### 6.3 Footer Bileşeni
- [ ] 3.1 Semantik `<footer>` yapısını oluştur.
- [ ] 3.2 Trakya Teknik Makine kurumsal metnini, Disan Hidrolik yetkili servis vurgusunu ve hızlı navigasyon bağlantılarını ekle.

### 6.4 Cross-Cutting Presentation & Responsive QA
- [ ] 4.1 Tüm sayfayı 320px mobil, 768px tablet, 1024px dizüstü ve 1440px+ geniş ekranlarda test et.
- [ ] 4.2 Klavyeyle gezinme (Focus states) ve erişilebilirlik kontrast testlerini yap.
- [ ] 4.3 Satış görüşmesinde demoyu sunacak olan kullanıcı (Enis) için akıcı, hatasız ve yüksek kaliteli ilk izlenim deneyimini doğrula.

## 7. State / Role / Responsive Coverage

- Mobil & Masaüstü: İletişim kartlarının responsive hizalanması.
- Form State: Default, Focus, Submitting (Loading), Success Message.

## 8. Automated Verification

- İstemci tarafı form doğrulama (boş alan bırakıldığında HTML5 validation uyarısı).

## 9. Manual QA / Debug Verification

- Form doldurulup "Teklif İste" butonuna basıldığında başarı mesajının görüntülendiği doğrulanır.
- `tel:` ve `mailto:` bağlantılarının doğru değerleri taşıdığı taranır.

## 10. Acceptance / Exit Criteria

- [ ] İletişim bilgileri ve CTA'lar eksiksiz geliştirildi.
- [ ] Form simülasyonu hatasız çalışıyor.
- [ ] Tüm sayfa mobil ve masaüstünde satış sunumu kalitesinde.
- [ ] Ürün ve kod mimarisi `agent-ready` seviyede tamamlandı.

## 11. Handoff / Stop Rule

- Wave 03 tamamlandığında tüm geliştirim dalgaları bitmiş olur. Final output yayınına geçilebilir.

---

## Wave Result

Status: Pending Execution (Not executed yet).
