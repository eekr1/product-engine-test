# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **Single Execution Authority**: WAVE_MAP dondurulduktan sonra execution scope authority'sidir. Her wave net bir amaca ve bağımsız doğrulanabilir teslim çıktısına sahiptir.
- **Strict Granularity & Separation**: `demo-frontend` paket kuralı gereğince Foundation, Hero/Karşılama, Hizmetler/Yetkili Servis, İletişim ve Genel QA/Responsive doğrulamaları ayrıştırılmıştır.
- **Approved Scope Invariant**: Tüm wave'ler `INPUT_SNAPSHOT.md` approved scope registry (`SCP-001` - `SCP-008`) sınırları içinde kalır. Gerçek backend, veritabanı veya doğrulanmamış iddialar current wave'lere dâhil edilmez.

## 2. Wave Map Summary

| Wave ID | Wave Name | Goal | Primary Deliverables | Dependencies |
|---|---|---|---|---|
| WAVE_00 | Foundation & Core Service Boundary | Proje altyapısı, renk/tipografi tokens, layout shell ve mock data provider | Modüler CSS/JS temeli, Shell Layout, Mock Data Provider | None |
| WAVE_01 | Primary Entry & Brand Hero | Ana sayfa karşılama, güçlü Hero alanı, Yetkili Servis vurgusu ve CTA'lar | Hero Section, Header/Nav, Servis Rozeti | WAVE_00 |
| WAVE_02 | Corporate Trust & 3 Primary Services | Kurumsal hakkımızda özeti, Disan Yetkili Servisliği ve 3 temel hizmet kartı | 3 Hizmet Kartı, Hakkımızda Bölümü, Güven Blokları | WAVE_01 |
| WAVE_03 | Contact & Conversion Touchpoints | İletişim detayları, hızlı telefon/e-posta CTA'ları ve lokasyon bilgisi | İletişim Bölümü, Telefon/E-posta CTA'ları, İletişim Kartı | WAVE_02 |
| WAVE_04 | Cross-Cutting QA & Presentation Optimization | Mobil/masaüstü responsive doğrulama, tarayıcı uyumluluğu, satış sunumu QA | Temiz Demo Paketi, Responsive QA Raporu, Presentation Baseline | WAVE_03 |

## 3. Dependency Chain

```text
[WAVE_00: Foundation & Core Service Boundary]
       │
       ▼
[WAVE_01: Primary Entry & Brand Hero]
       │
       ▼
[WAVE_02: Corporate Trust & 3 Primary Services]
       │
       ▼
[WAVE_03: Contact & Conversion Touchpoints]
       │
       ▼
[WAVE_04: Cross-Cutting QA & Presentation Optimization]
```

## 4. Wave Entries

### WAVE_00: Foundation & Core Service Boundary

- **Goal**: Frontend temel yapısını, tasarım sistemi token'larını, responsive HTML/CSS iskeletini ve soyut data/mock service katmanını kurmak.
- **In Scope**: Reset CSS, CSS Custom Properties (`--color-navy`, `--color-orange` vb.), 12-column grid, responsive header/footer kabuğu, `mockDataService.js`.
- **Out of Scope**: Gerçek UI sayfa içerikleri, tıklanabilir işlevsel butonlar, dış API servisleri.
- **Primary Deliverables**: `index.html` iskeleti, `src/styles/design-tokens.css`, `src/services/mockDataService.js`.
- **Dependencies**: None.
- **Exit Boundary**: Geliştirme ortamında CSS token'larının ve mock data service fonksiyonlarının çalıştığının doğrulanması.

### WAVE_01: Primary Entry & Brand Hero

- **Goal**: Ziyaretçinin ilk 5 saniyede firmanın kimliğini, yetkili servisliğini ve uzmanlığını kavramasını sağlayan Hero alanını inşa etmek.
- **In Scope**: Hero section layout, ana başlık ve alt metin, Disan Hidrolik Yetkili Servis rozeti, hızlı iletişim CTA butonları (`tel:`, `mailto:`).
- **Out of Scope**: Hizmet detay kartları, detaylı iletişim formu, backend sorguları.
- **Primary Deliverables**: Hero bileşeni (`src/components/Hero.js` / HTML), Mobil uyumlu ana navigasyon barı.
- **Dependencies**: WAVE_00.
- **Exit Boundary**: Hero alanının mobilde ve masaüstünde tasarlandığı biçimde render edilmesi ve CTA bağlantılarının çalışması.

### WAVE_02: Corporate Trust & 3 Primary Services

- **Goal**: Trakya Teknik Makine'nin 3 temel hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve kurumsal güven unsurlarını görsel hiyerarşiyle sunmak.
- **In Scope**: 3 Hizmet kartı bileşeni, hizmet detay özetleri, kurumsal hakkımızda tanıtım bloğu, Disan Hidrolik yetkili servis detay vurgusu.
- **Out of Scope**: Gerçek stok takip sistemi, online yedek parça siparişi, doğrulanmamış sertifika iddiaları.
- **Primary Deliverables**: Hizmetler bölümü (`src/components/Services.js`), Kurumsal özeti (`src/components/About.js`).
- **Dependencies**: WAVE_01.
- **Exit Boundary**: 3 hizmetin mock service verilerinden çekilerek dökülmesi ve kartların hover/interaction davranışlarının sorunsuz çalışması.

### WAVE_03: Contact & Conversion Touchpoints

- **Goal**: Müşterinin firmaya hızla ulaşabilmesini sağlayacak iletişim bilgilerini ve aksiyon noktalarını kurmak.
- **In Scope**: İletişim kartı (telefon, e-posta, adres metni), hızlı iletişim butonları, harita/lokasyon bilgi alanı, doğrudan arama linkleri.
- **Out of Scope**: Canlı mesajlaşma sunucusu, backend veritabanına kayıt yapan iletişim formu.
- **Primary Deliverables**: İletişim bölümü (`src/components/Contact.js`), hızlı erişim CTA çubuğu.
- **Dependencies**: WAVE_02.
- **Exit Boundary**: Mobilde ve masaüstünde telefon ve e-posta linklerinin tıklanabilirliğinin ve iletişim bilgilerinin doğruluğunun onaylanması.

### WAVE_04: Cross-Cutting QA & Presentation Optimization

- **Goal**: Tüm sitenin masaüstü, tablet ve mobil ekranlarda satış görüşmesinde sorunsuz gösterilecek kaliteye ulaştığını doğrulamak.
- **In Scope**: Cross-device responsive testleri, kontrast/erişilebilirlik kontrolleri, performans ve akıcı animasyon QA'i, müşteri görüşmesi sunum hazırlığı.
- **Out of Scope**: Yeni özellik geliştirme, altyapı değişikliği.
- **Primary Deliverables**: Bütünleşmiş çalışan frontend demo, QA doğrulama kontrol listesi.
- **Dependencies**: WAVE_03.
- **Exit Boundary**: Sitenin satış görüşmesinde sıfır görsel/işlevsel hata ile sergilenebilir durumda tamamlanması.

## 5. Cross-Wave Invariants

- **CWI-01**: Her wave sonunda üretilen kod bağımsız olarak tarayıcıda çalıştırılabilir durumda olmalıdır.
- **CWI-02**: Hiçbir wave'de doğrulanmamış firma iddiası veya sahte backend endpoint'i eklenemez.
- **CWI-03**: Design kuralı uyarınca `--color-navy` ve `--color-orange` tasarım token'ları tüm wave'lerde tutarlı kullanılacaktır.

## 6. Global Exit / Handoff Rules

- Wave 04 tamamlandığında demo `outputs/demos/trakya-teknik-makine/latest/` konumuna yayınlanabilir ve ajana uygulamaya başlama talimatı verilebilir.
