# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **Bütünsel ve Bağımsız Teslim:** Her wave, teknik katmanlara göre değil, kendi başına doğrulanabilir, çalıştırılabilir ve teslim edilebilir anlamlı ürün/görsel çıktı birimlerine bölünmüştür.
- **Foundation Ayrımı:** Wave 00 projenin teknik mimari tabanını, design token'larını, mock data adapter katmanını ve ortam yapılandırmasını kurar; kullanıcı arayüzü geliştirmesinden önce dondurur.
- **Surface & Feature Odaklılık:** Hero, Kurumsal Güven, Hizmetler ve İletişim alanları geniş teknik torba wave'ler yerine bağımsız, anlamlı kullanıcı yüzeylerine göre ayrıştırılmıştır.
- **Cross-Cutting QA Ayrımı:** Bütünsel responsive uyum ve satış demosu sunum hazırlığı (Final Integration & Presentation QA) son feature dalgasına gizlenmemiş, ayrı bir aşama olarak tanımlanmıştır.

## 2. Wave Map Summary

| Wave ID | Wave Adı | Ana Deliverable | Bağımlılıklar | Hedef Durum |
|---|---|---|---|---|
| WAVE_00 | Foundation & Design System Setup | Proje iskeleti, CSS variables/token'lar, mock data layer, layout shell | Yok | Ready for Implementation |
| WAVE_01 | Hero & Corporate Trust Surface | Header, Hero bölümü, Disan Hidrolik Yetkili Servis vurgusu & Güven kartları | WAVE_00 | Complete Deliverable |
| WAVE_02 | Service Presentation Surface | 3 Ana Hizmet Kartı (Yedek Parça, Yerinde Destek, Bakım/Onarım) & Detaylar | WAVE_01 | Complete Deliverable |
| WAVE_03 | Contact, Map & Presentation QA | İletişim kartı, hızlı CTA'lar, mobil/masaüstü responsive bütünlük, final demo QA | WAVE_02 | Complete Deliverable |

## 3. Dependency Chain

```text
[WAVE_00: Foundation & Design System Setup]
                  ↓
[WAVE_01: Hero & Corporate Trust Surface]
                  ↓
[WAVE_02: Service Presentation Surface]
                  ↓
[WAVE_03: Contact, Map & Presentation QA]
```

## 4. Wave Entries

### WAVE_00 — Foundation & Design System Setup
- **Amaç:** Projenin HTML5/CSS3/JS modüler yapısını, `DESIGN_RULES.md` renk/tipografi token'larını, `config.js` ve `data/companyData.js` mock adapter altyapısını kurmak.
- **Deliverables:** Proje klasör yapısı, global CSS stilleri, responsive grid container, typed mock data service.
- **Exit Criteria:** Tarayıcıda temiz, hatasız çalışan boş shell ve veri okuyan mock adapter.

### WAVE_01 — Hero & Corporate Trust Surface
- **Amaç:** Ziyaretçinin ilk 3 saniyede etkileşime gireceği Header, Hero alanı ve Disan Hidrolik yetkili servis güven rozetlerini inşa etmek.
- **Deliverables:** Header/Navigation, Hero Section, CTA Butonları, Engineering Trust Badges.
- **Exit Criteria:** Masaüstü ve mobilde kusursuz çalışan ilk izlenim yüzeyi.

### WAVE_02 — Service Presentation Surface
- **Amaç:** Trakya Teknik Makine'nin 3 ana hizmetini (Yedek Parça Temini, Yerinde Destek, Bakım/Onarım) teknik hassasiyet estetiği ile geliştirmek.
- **Deliverables:** 3 Hizmet Kartı, Özellik listeleri, Teknik Detay Modal/Panelleri, Görsel hiyerarşi.
- **Exit Criteria:** Hizmet detaylarının net anlaşıldığı, etkileşimli kart yapısı.

### WAVE_03 — Contact, Map & Presentation QA
- **Amaç:** İletişim bilgilerini, telefon/e-posta CTA'larını eklemek, tüm projenin responsive bütünlüğünü ve satış demosu sunum kalitesini doğrulamak.
- **Deliverables:** Contact Section, Telefon/E-posta CTA'ları, Lokasyon bilgisi, Cross-browser ve Responsive Final QA.
- **Exit Criteria:** Müşteri görüşmesinde eksiksiz gösterilecek hazır frontend satış demosu.

## 5. Cross-Wave Invariants

- Hiçbir wave hardcoded veri yazamaz; veriler `data/companyData.js` mock service üzerinden okunur.
- Hiçbir wave `DESIGN_RULES.md` renk ve tipografi standartlarının dışına çıkamaz.
- Her wave kendi geliştirdiği bileşenlerin birincil mobil/masaüstü uyumunu garanti eder.

## 6. Global Exit / Handoff Rules

- Tüm dalgalar tamamlandığında `outputs/demos/trakya-teknik-makine/latest/` altında yayına hazır dokümantasyon paketi ve uygulanabilir wave planları dondurulur.
