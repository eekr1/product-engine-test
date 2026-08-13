# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **Deliverable-Driven Granularity**: Wave'ler klasör bazlı veya soyut teknik fazlara göre değil; bağımsız teslim edilebilir ve doğrulanabilir kullanıcı yüzeyleri/bileşenlerine göre bölünmüştür.
- **Architectural Isolation**: Veri ve servis katmanı mock adapter üzerinden kurulacak, UI bileşenleri veriyi servis interface'i üzerinden tüketecektir.
- **Agent-Ready Completeness**: Her wave tek başına uygulanabilir, test edilebilir ve teslim edilebilir net bir exit boundary taşır.

## 2. Wave Map Summary

| Wave ID | Wave Name | Primary Deliverable | Scope Ref | Dependencies | Exit Boundary |
|---|---|---|---|---|---|
| WAVE_00 | Foundation & Design Rules Setup | Proje iskeleti, CSS design tokens, HTML kabuğu, local mock data adapter | SCP-001, SCP-005, SCP-006, SCP-007 | None | Clean HTML/CSS/JS shell & mock data interface ready |
| WAVE_01 | Core Shell, Hero & Trust Surface | Ana navigasyon, Hero bölümü, Disan Hidrolik Yetkili Servis vurgusu | SCP-001, SCP-002, SCP-008 | WAVE_00 | Hero & Trust surface fully functional & responsive |
| WAVE_02 | Services Section & Direct Contact CTAs | 3 Ana Hizmet kartları (Yedek Parça, Yerinde Destek, Bakım & Onarım) ve Direct Contact CTA'lar | SCP-003, SCP-004 | WAVE_01 | Services grid & Direct Contact CTAs fully functional |
| WAVE_03 | Sales Demo Presentation QA & Final Integration | Cross-browser, mobil duyarlılık, mikro-etkileşim ve satış sunum kalitesi doğrulaması | SCP-001..SCP-008 | WAVE_02 | High-impact sales-ready frontend demo complete |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Tokens)
       ↓
WAVE_01 (Core Shell, Hero & Trust)
       ↓
WAVE_02 (Services & Contact CTAs)
       ↓
WAVE_03 (Presentation QA & Final Integration)
```

## 4. Wave Entries

### WAVE_00 — Foundation & Design Rules Setup
- **Goal**: Projenin HTML/CSS/JS temel kabuğunu, `DESIGN_RULES.md` uyarınca tasarım token'larını ve Local Mock Data Adapter katmanını kurmak.
- **Deliverables**: Responsive layout reset, CSS custom properties (`--color-surface`, `--color-accent`, `--font-primary`), `companyData.js` mock provider ve `DataService` arayüzü.

### WAVE_01 — Core Shell, Hero & Trust Surface
- **Goal**: Ana navigasyon başlığını, etkileyici Hero kompozisyonunu ve Disan Hidrolik Yetkili Servis kimliği güven bloğunu inşa etmek.
- **Deliverables**: Responsive Navbar, Hero bölümü, Disan Yetkili Servis rozeti/vurgusu, kurumsal uzmanlık detayları.

### WAVE_02 — Services Section & Direct Contact CTAs
- **Goal**: 3 ana hizmeti (Yedek Parça, Yerinde Destek, Bakım/Onarım) teknik hiyerarşi ile sunmak ve telefon (`tel:`) / e-posta (`mailto:`) CTA'larını bağlamak.
- **Deliverables**: Hizmet kartları ızgarası, hizmet detay popover/modal/akordeon yapısı, doğrudan erişilebilir telefon ve e-posta butonları.

### WAVE_03 — Sales Demo Presentation QA & Final Integration
- **Goal**: Bütün demoyu masaüstü ve mobil ekranlarda, farklı tarayıcılarda test ederek satış görüşmesinde "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını verecek kaliteye ulaştırmak.
- **Deliverables**: Cross-browser doğrulaması, mobil dokunmatik uyum testi, mikro-etkileşim ve tipografi cilalaması.

## 5. Cross-Wave Invariants

- **Non-Generic Quality**: Hiçbir wave jenerik/ucuz kurumsal tema kodlayamaz.
- **Data Boundary**: Hiçbir wave UI bileşeni içine veriyi hardcode edemez; veriler `DataService` üzerinden çekilir.
- **No Unapproved Claims**: Hiçbir wave doğrulanmamış yeni firma iddiası veya sahte referans ekleyemez.

## 6. Global Exit / Handoff Rules

- Her wave sonundaki kod temiz, yorum satırlarıyla açıklanmış ve doğrudan ajanın sonraki wave'e geçebileceği netlikte teslim edilmelidir.
