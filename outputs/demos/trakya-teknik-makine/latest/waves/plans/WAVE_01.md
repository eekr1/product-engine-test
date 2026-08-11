# Trakya Teknik Makine — WAVE_01: Core Hero & Services Breakdown UI

- **Status**: Pending Execution (Blocked by WAVE_00)
- **Goal**: Ana navigasyon çubuğu, etkileyici split hero bölümü, kurumsal tanıtım kartı ve 3 ana hizmet alanını (Yedek Parça, Yerinde Destek, Bakım-Onarım) görsel hiyerarşi ile kullanıcıya sunmak.

## 1. Why This Wave / Dependency Rationale

`WAVE_00` ile kurulan temel CSS değişkenleri ve `CompanyDataService` veri katmanı üzerinde, sitenin ana değer önermesini ve kurumsal hizmet alanlarını sunan birincil kullanıcı yüzeyinin inşa edilmesi gerekmektedir.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)

## 3. Dependencies

- **Preceding Waves**: `WAVE_00` (Foundation & Data Boundary Setup).
- **Required Baseline**: Functional `CompanyDataService` and CSS Variables.

## 4. Scope

### In Scope

- Header / Navigation Bar (Logo, Menü Bağlantıları, Hızlı İletişim Butonu).
- Hero Section (Asimetrik Split-Layout, Başlık, Alt Başlık, Vurgulu Metin, Teknik Izgara Detayı, İnceleme CTA'sı).
- Kurumsal Tanıtım / Hakkımızda Bölümü (Trakya Bölgesi yetkinliği ve firma değerleri).
- 3 Ana Hizmet Breakdown Kartları Grid Yapısı (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım).
- Service Render Logic (Hizmet kartlarının `CompanyDataService.getServices()` verisinden dinamik türetilmesi).

### Out of Scope

- Disan Hidrolik Yetkili Servis detay kartı ve alt iletişim formu (`WAVE_02` kapsamındadır).

## 5. Expected Result / Target Structure

```text
index.html              (Header, Hero, Corporate Overview, Services Grid bölümleri eklendi)
styles/
├── components/
│   ├── header.css      (Nav & brand bar stılleri)
│   ├── hero.css        (Split hero & badge stılleri)
│   └── services.css    (Hizmet kartları & hover efektleri)
scripts/
├── renderServices.js   (Hizmet kartlarını DOM'a render eden modül)
```

## 6. Implementation Checklist

### Header & Hero UI
- [ ] Header bileşenini oluştur (`index.html`); marka adı, navigasyon (Ana Sayfa, Kurumsal, Hizmetlerimiz, İletişim) ve hızlı arama butonunu yerleştir.
- [ ] `styles/components/header.css` yaz; cam efekti (`backdrop-filter: blur(12px)`), sabit header (sticky) ve yüksek kontrastlı menü stillerini tanımla.
- [ ] Hero bölümünü oluştur (`index.html`); "Trakya Bölgesi Makine Bakım & Teknik Servis Çözümleri" başlığı, teknik alt açıklama metni ve birincil CTA ("Hizmetlerimizi İnceleyin") butonunu yerleştir.
- [ ] `styles/components/hero.css` yaz; asimetrik layout, kehribar vurgu rozeti ve ince ızgara arka plan çizgisini uygula.

### Services Breakdown UI
- [ ] Hizmetler bölüm konteynırını ve `#services-grid` DOM elemanını `index.html` içinde tanımla.
- [ ] `scripts/renderServices.js` yaz; `CompanyDataService.getServices()` üzerinden dönen 3 hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Bakım ve Onarım) okuyup semantik kart HTML'leri üret.
- [ ] `styles/components/services.css` yaz; 3 kolonlu responsive grid, 1px sınır vurgusu, hover durumunda dikey yükselme ve kehribar kenarlık efektlerini uygula.

## 7. State / Role / Responsive Coverage

- **Hover States**: Hizmet kartları hover yapıldığında hafifçe yükselir (`translateY(-4px)`), kenarlık rengi `#FF6B00` olur.
- **Responsive Adaption**: Masaüstünde 3 kolonlu hizmet kartları, mobilde tek kolonlu akıcı kartlara dönüşür.

## 8. Automated Verification

- `CompanyDataService` verisi ile DOM'a basılan hizmet kartı sayısının (3) eşleştiğinin JS testi/log kontrolü ile doğrulanması.

## 9. Manual QA / Debug Verification

- Tarayıcıda sayfa açıldığında Hero bölümünün ve 3 hizmet kartının eksiksiz ve görsel hiyerarşiye uygun göründüğü doğrulanmalıdır.

## 10. Acceptance / Exit Criteria

- [ ] Header, Hero ve Hizmetler bölümü tasarıma tam uygun.
- [ ] 3 hizmet kartı `CompanyDataService` üzerinden sorunsuz render ediliyor.
- [ ] Mobil görünümde taşma veya kırılma yok.

## 11. Handoff / Stop Rule

`WAVE_01` tamamlandıktan sonra `WAVE_02` (Yetkili Servis, İletişim CTAs & Demo Verification) aşamasına geçilir.

---

## Wave Result

> PENDING EXECUTION — Bu bölüm wave çalıştırıldıktan sonra doldurulacaktır.
