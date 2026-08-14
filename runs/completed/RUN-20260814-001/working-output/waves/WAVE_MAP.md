# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **WAP-01 (Incremental Verifiable Deliverables)**: Proje uygulaması teknik klasörlere veya geniş torba fazlara göre değil, bağımsız olarak geliştirilip doğrulanabilen kullanıcı yüzeylerine ve teslim birimlerine bölünmüştür.
- **WAP-02 (Package Granularity Guard Compliance)**: `demo-frontend` paketi kuralları uyarınca Foundation, Primary Entry / Trust, Services, Contact ve Final Cross-Cutting QA alanları ayrı wave'ler halinde yapılandırılmıştır.
- **WAP-03 (No Throwaway & Clean Isolation)**: Her wave geliştirdiği bileşeni `companyService` soyutlama katmanı üzerinden veriye bağlar; hardcode içerik yayılımı engellenir.
- **WAP-04 (Scope Boundary Safety)**: Yalnızca onaylı `IN_SCOPE` (`SCP-001` - `SCP-006`) öğeleri wave'lere map edilmiştir. `FUTURE`, `OPEN_QUESTION` veya `OUT_OF_SCOPE` maddeleri current execution dalgalarına dahil edilmemiştir.

## 2. Wave Map Summary

| Wave ID | Wave Adı | Odak & Ana Deliverable | Bağımlılık | Target Output |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Design System Setup | Proje iskeleti, CSS Custom Properties, tasarım jetonları, `companyService` mock adapter altyapısı. | Yok | Bootstrapped repo & Service Layer |
| `WAVE_01` | Primary Entry & Corporate Trust | Header, navigasyon, Hero bölümü, Disan Hidrolik Yetkili Servislik vurgusu ve Kurumsal Hakkında güven paneli. | `WAVE_00` | Completed Hero & Corporate Surface |
| `WAVE_02` | Services Presentation | 3 Temel Hizmet (Yedek Parça, Yerinde Destek, Bakım-Onarım) kartları, detay sunumları ve teknik servis vurgusu. | `WAVE_01` | Completed Services Surface |
| `WAVE_03` | Contact & Conversion | İletişim bilgileri, harita/konum kartı görünümü, dikey CTA alanları, telefon/e-posta tetikleyicileri ve footer. | `WAVE_02` | Completed Contact & Footer Surface |
| `WAVE_04` | Final Integration, Responsive & Presentation QA | Bütünleşik sayfa akış doğrulaması, cross-browser/responsive (desktop, tablet, mobile) kontrolleri ve tam satış demosu QA. | `WAVE_03` | Validated Sales Demo Ready Package |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Service Boundary)
    ↓
WAVE_01 (Primary Entry & Corporate Trust Surface)
    ↓
WAVE_02 (Services Presentation Surface)
    ↓
WAVE_03 (Contact & Conversion Surface)
    ↓
WAVE_04 (Final Integration, Responsive & Sales Demo QA)
```

## 4. Wave Entries

### WAVE_00: Foundation & Design System Setup
- **Goal**: Proje dosya yapısını, `DESIGN_RULES.md` token'larını (renk, tipografi, grid) ve `companyService` veri soyutlama katmanını kurmak.
- **Deliverables**: Proje dizin yapısı, `index.html` kabuğu, `styles/main.css` jetonları ve `src/services/companyService.js` mock veri adapter'ı.
- **Exit Criteria**: Proje bağımsız çalışabilir durumda, CSS jetonları aktif ve `companyService` yerel veriyi hatasız dönüyor.

### WAVE_01: Primary Entry & Corporate Trust
- **Goal**: Ziyaretçinin ilk gördüğü ana giriş (Header, Hero) ile firmanın Disan Hidrolik yetkili servisliği ve kurumsal güven bölümünü tamamlamak.
- **Deliverables**: Responsive Header/Nav, Hero Alanı (Disan Hidrolik vurgulu), Kurumsal Hakkında ve Güven Alanı bileşenleri.
- **Exit Criteria**: Ziyaretçi ilk bakışta firma uzmanlığını ve yetkili servisliği anlıyor; mobil/masaüstü navigasyon çalışıyor.

### WAVE_02: Services Presentation
- **Goal**: Trakya Teknik Makine'nin 3 temel hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) yüksek visual hiyerarşi ile sunmak.
- **Deliverables**: Hizmet kartları, hizmet detay panelleri, teknik vurgu rozetleri ve `companyService.getServices()` entegrasyonu.
- **Exit Criteria**: 3 hizmet açık ve görsel olarak güçlü biçimde sunuluyor; hizmet verileri dinamik servis katmanından çekiliyor.

### WAVE_03: Contact & Conversion
- **Goal**: Ziyaretçiyi müşteriye dönüştürecek erişilebilir iletişim bilgilerini, dikey CTA alanlarını ve Footer yapısını inşa etmek.
- **Deliverables**: İletişim kartı, dikey telefon (`tel:`) ve e-posta (`mailto:`) CTA butonları, adres/konum bilgi paneli ve Footer.
- **Exit Criteria**: Mobil cihazlarda telefon ve e-posta tetikleyicileri doğrudan cihaz eylemlerini başlatabiliyor; dikey iletişim akışı tamamlanmış.

### WAVE_04: Final Integration, Responsive & Presentation QA
- **Goal**: Tüm bölümlerin birleşik akışını, çapraz cihaz uyumluluğunu (desktop, tablet, mobile) ve satış demosu kalitesini doğrulamak.
- **Deliverables**: Bütünleşik frontend demo uygulaması, responsive sweep raporu, cross-browser doğrulama ve sunum senaryosu QA checklist'i.
- **Exit Criteria**: Demo satış görüşmesinde sorunsuz gösterilecek görsel ve teknik bütünlüğe ulaştı; hiçbir kırık bağlantı veya düzen kayması yok.

## 5. Cross-Wave Invariants

- **INV-01**: Hiçbir wave sahte firma iddiası veya doğrulanmamış sertifika ekleyemez (`VAL-13`).
- **INV-02**: Hiçbir wave presentation katmanında veriyi doğrudan HTML içine hardcode edemez; `companyService` kullanılmalıdır.
- **INV-03**: Her wave tamamlandığında kendi yüzeyinin birim responsive kontrollerini tamamlar; `WAVE_04` ise tüm projenin çapraz doğrulamasını üstlenir.

## 6. Global Exit / Handoff Rules

- Tüm wave planları (`WAVE_00.md` - `WAVE_04.md`) sırasıyla uygulandıktan ve `WAVE_04` kabul kriterleri geçildikten sonra proje `outputs/demos/trakya-teknik-makine/latest/` konumunda yayınlanmaya hazır hale gelir.
