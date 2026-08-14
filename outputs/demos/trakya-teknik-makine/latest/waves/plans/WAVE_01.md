# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Primary Entry & Brand Hero

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçinin ilk 5 saniyede firmanın kimliğini, yetkili servisliğini ve uzmanlığını kavramasını sağlayan Hero alanını inşa etmek.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_01
- **Name**: Primary Entry & Brand Hero
- **Goal**: Ana sayfa karşılama, güçlü Hero alanı, Yetkili Servis vurgusu ve CTA'lar.
- **Primary Deliverables**: Hero Section, Header/Nav, Servis Rozeti.
- **Dependencies**: WAVE_00.

## 2. Why This Wave / Dependency Rationale

Foundation tamamlandıktan sonra sitenin ilk görünür yüzeyi olan Header/Nav ve Hero alanının inşa edilmesi gerekir. Bu alan potansiyel müşteriye ilk kurumsal güveni ve Disan Hidrolik yetkili servis kimliğini verir.

## 3. Canonical Sources to Read

- `ai/PRODUCT_RULES.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`
- `waves/plans/WAVE_00.md`

## 4. Dependencies

WAVE_00 (Foundation & Core Service Boundary) tamamlanmış olmalıdır.

## 5. Scope

### In Scope

- Üst navigasyon barı (Header, Logo alanı, İletişim hızlı linkleri).
- Ana Karşılama (Hero Section) layout ve görünümü.
- Disan Hidrolik Makine Trakya Bölgesi Yetkili Servis Rozeti / Vurgusu.
- Hızlı iletişim CTA butonları (Hemen Ara `tel:`, E-Posta Gönder `mailto:`).
- Hero alanı için responsive CSS kuralları.

### Out of Scope

- Hizmet kartlarının detay içeriği.
- İletişim formu işleme.
- Admin girişi veya sahte backend aramaları.

## 6. Expected Result / Target Structure

```text
src/
├── components/
│   ├── Header.js (veya HTML bölümü)
│   └── Hero.js (veya HTML bölümü)
└── styles/
    ├── header.css
    └── hero.css
```

## 7. Implementation Checklist

- [ ] Header bileşeni ve marka logosu alanı oluşturulacak.
- [ ] Hero section HTML yapısı kurulacak (H1 başlık, spot açıklama metni, CTA butonları).
- [ ] Disan Hidrolik Yetkili Servis rozeti görsel olarak Hero alanına entegre edilecek.
- [ ] `tel:` ve `mailto:` bağlantıları doğru biçimde bağlanacak.
- [ ] Mobilde ve masaüstünde Hero alanının responsive görünümü `hero.css` ile tamamlanacak.

## 8. State / Role / Responsive Coverage

- **Desktop (1024px+)**: Sağa hizalı CTA butonları ve geniş visual Hero layout.
- **Mobile (< 768px)**: Dikey hizalanmış CTA butonları, tam genişlikte Hero başlığı.

## 9. Automated Verification

- DOM doğrulama: `H1` etiketinin mevcudiyeti, CTA butonlarının `href="tel:..."` ve `href="mailto:..."` özniteliklerinin kontrolü.

## 10. Manual QA / Debug Verification

- Mobil cihaz simülatöründe Hero alanının ekran sınırlarından taşmadığının ve CTA butonlarının tıklanabilirliğinin testi.

## 11. Acceptance / Exit Criteria

- [ ] Hero alanında firma adı ve Disan Hidrolik yetkili servisliği açıkça görülmeli.
- [ ] Telefon ve e-posta butonları mobilde sorunsuz aksiyon tetiklemeli.
- [ ] Zemin ve metin kontrastı WCAG AA standartlarını karşılamalı.

## 12. Handoff / Stop Rule

WAVE_01 tamamlandığında WAVE_02 (Corporate Trust & 3 Primary Services) uygulamasına geçilebilir.

---

## Wave Result

Status: Pending Execution
