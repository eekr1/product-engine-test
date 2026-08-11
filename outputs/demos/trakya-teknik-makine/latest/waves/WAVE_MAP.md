# Trakya Teknik Makine — Wave Map

## 1. Wave Architecture Principles

- **Coherent Deliverable Rule**: Her wave, bağımsız olarak geliştirilebilir, test edilebilir ve sunulabilir tek bir anlamlı deliverable'ı tamamlar.
- **No Broad Technical Mega-Waves**: `Frontend Work` veya `All UI` gibi tüm projeyi tek torbaya atan mega-wave'ler yasaktır.
- **Clean Separation**: Foundation, Hero & Trust yüzeyi, Hizmetler yüzeyi ve İletişim & Entegrasyon QA yüzeyi ayrı wave'ler olarak yapılandırılmıştır.

## 2. Wave Map Summary

| Wave ID | Wave Adı | Bağımlılık | Birincil Deliverable | Statü |
|---|---|---|---|---|
| WAVE_00 | Foundation & Design System Setup | Approved Input | Project Scaffolding, CSS Design Tokens, Data Boundary, Shell Layout | Ready for Execution |
| WAVE_01 | Hero Section & Corporate Trust Surface | WAVE_00 | Header Navigation, Hero Section, Disan Hidrolik Service Badge, Trust Elements | Pending Execution |
| WAVE_02 | Core Services Presentation Surface | WAVE_01 | 3 Hizmet Kartı (Yedek Parça, Yerinde Destek, Bakım-Onarım), Hizmet Detayları | Pending Execution |
| WAVE_03 | Contact Surface & Responsive QA | WAVE_02 | İletişim Bölümü, Sticky Mobile Contact Bar, Responsive Cross-Browser QA | Pending Execution |

## 3. Dependency Chain

```text
Approved Intake
     ↓
WAVE_00 (Foundation & Design System Setup)
     ↓
WAVE_01 (Hero Section & Corporate Trust Surface)
     ↓
WAVE_02 (Core Services Presentation Surface)
     ↓
WAVE_03 (Contact Surface & Responsive QA)
```

## 4. Wave Entries

### WAVE_00 — Foundation & Design System Setup
- **Goal**: Projenin dosya yapısını, CSS tasarım token'larını, responsive shell düzenini ve mock service/data-access boundary altyapısını kurmak.
- **Dependencies**: Approved Intake, TECH_CONTEXT, DESIGN_RULES.
- **Primary Deliverable**: Temel HTML/CSS/JS altyapısı, renk/tipografi token'ları ve mock data adapter.
- **Exit Boundary**: Temel arayüz kabuğu ve veri erişim katmanı çalışır durumda hazır olur.

### WAVE_01 — Hero Section & Corporate Trust Surface
- **Goal**: Ziyaretçinin ilk 3 saniyede firma kimliğini ve Disan Hidrolik Trakya Yetkili Servisi konumunu anlamasını sağlayan güçlü header, hero ve güven alanını inşa etmek.
- **Dependencies**: WAVE_00.
- **Primary Deliverable**: Header navigasyonu, Hero görsel kompozisyonu, Disan Hidrolik Yetkili Servis rozeti ve kurumsal özet.
- **Exit Boundary**: Ana sayfa üst bölümü ve kurumsal güven yüzeyi eksiksiz tamamlanır.

### WAVE_02 — Core Services Presentation Surface
- **Goal**: Firmanın 3 temel hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel hiyerarşi ve detaylı hizmet kartları ile sunmak.
- **Dependencies**: WAVE_01.
- **Primary Deliverable**: 3 Ana Hizmet Kartı, Hizmet detay özellikleri ve visual hiyerarşi.
- **Exit Boundary**: Hizmetler bölümü mobil ve masaüstünde tam etkileşimli olarak tamamlanır.

### WAVE_03 — Contact Surface & Responsive QA
- **Goal**: İletişim bilgilerini, telefon/e-posta CTA'larını, mobilde sabit duran hızlı erişim çubuğunu ve cihazlar arası responsive kalite doğrulamasını tamamlamak.
- **Dependencies**: WAVE_02.
- **Primary Deliverable**: Footer, İletişim kartları, Sticky Mobile Contact Bar ve responsive QA doğrulaması.
- **Exit Boundary**: Kurumsal frontend satış demosu tüm bölümleriyle teslime hazır duruma gelir.

## 5. Cross-Wave Invariants

- Hiçbir wave mock verileri doğrudan UI bileşenleri içine sabitlemez (data boundary korunur).
- Her wave sonunda üretilen kod `DESIGN_RULES.md` kalite tabanına tabidir.
- Mobil responsive ve dokunmatik erişilebilirlik her wave'in kendi kapsamı içinde doğrulanır.

## 6. Global Exit / Handoff Rules

- `WAVE_03` başarıyla tamamlandığında kurumsal frontend satış demosu potansiyel müşteri görüşmesinde sunulmaya hazır hale gelir.
