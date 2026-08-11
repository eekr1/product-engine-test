# Trakya Teknik Makine — Wave Map

## 1. Wave Architecture Principles

- **Coherent Scope Decomposition**: Uygulama adımları jenerik geniş teknoloji başlıklarına göre değil; her biri bağımsız doğrulanabilir teslim çıktısı sunan anlamlı wave'lere bölünmüştür.
- **Incremental & Verifiable**: Her wave sonunda çalışan ve test edilebilir bir aşama ortaya çıkar.
- **Clean Architecture Boundaries**: Presantasyon katmanı ile veri katmanı arasındaki sınır ilk wave'den itibaren korunur.

## 2. Wave Map Summary

| Wave ID | Adı | Ana Hedef | Bağımlılıklar | Çıktı Dosyası |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Data Boundary Setup | Proje klasör iskeleti, CSS değişkenleri/tasarım tokens, semantik layout ve CompanyDataService mock veri katmanı. | Yok | `waves/plans/WAVE_00.md` |
| `WAVE_01` | Core Hero & Services Breakdown UI | Hero bölümü, Kurumsal Özet ve 3 Ana Hizmet alanının kartlı/görsel sunumu. | `WAVE_00` | `waves/plans/WAVE_01.md` |
| `WAVE_02` | Authorized Partner, Contact CTAs & Demo Verification | Disan Hidrolik Yetkili Servis vurgusu, İletişim bölümü, doğrudan arama/e-posta CTA'ları, mobil uyumluluk ve demo kabul kontrolü. | `WAVE_01` | `waves/plans/WAVE_02.md` |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Service Boundary)
   │
   ▼
WAVE_01 (Hero & 3 Hizmet Breakdown UI)
   │
   ▼
WAVE_02 (Disan Hidrolik Servis Card & İletişim CTAs & Verification)
```

## 4. Wave Entries

### WAVE_00: Foundation & Data Boundary Setup
- **Amaç**: Projenin HTML/CSS/JS iskeletini ve `CompanyDataService` mock veri katmanını kurmak.
- **Scope**: HTML5 temel yapısı, CSS variables (`DESIGN_RULES.md` uyarınca), `CompanyDataService` sınıfı, `companyData.js` doğrulanmış verileri.
- **Exit Condition**: Veri servisinin konsoldan veya test script'inden doğrulanabilir veri döndürmesi, temel CSS ızgarasının hazır olması.

### WAVE_01: Core Hero & Services Breakdown UI
- **Amaç**: Ana sayfa hero bölümü, kurumsal bilgi ve 3 temel hizmet alanını görsel hiyerarşi ile uygulamak.
- **Scope**: Hero split layout, kurumsal özet alanı, 3 ana hizmet kartı (Yedek Parça, Yerinde Destek, Bakım-Onarım), responsive CSS ızgarası.
- **Exit Condition**: Hizmet kartlarının `CompanyDataService` üzerinden dinamik render edilmesi, masaüstü/mobil görünümlerin tasarıma uygunluğu.

### WAVE_02: Authorized Partner, Contact CTAs & Demo Verification
- **Amaç**: Disan Hidrolik yetkili servis alanını, iletişim kanallarını ve doğrudan arama/e-posta CTA'larını tamamlayıp demo kabulünü gerçekleştirmek.
- **Scope**: Disan Hidrolik yetkili servis partner rozeti/kartı, telefon/e-posta CTA butonları, alt bilgi (footer), mobil arama çubuğu ve ekran kırılma kontrolleri.
- **Exit Condition**: Demo sayfasının tüm cihazlarda kusursuz çalışması, doğrudan arama bağlantılarının tetiklenmesi, doğrulanmamış bilgi içermediğinin onaylanması.

## 5. Cross-Wave Invariants

- **No Hardcoded Content**: UI verileri doğrudan HTML'e gömülmeyecek, `CompanyDataService` üzerinden beslenecektir.
- **No Unapproved Content**: Doğrulanmamış hiçbir firma iddiası veya sahte referans eklenmeyenektır.
- **No Heavy External Dependencies**: Harici ağır kütüphane veya bundler bağımlılığı olmayacaktır.

## 6. Global Exit / Handoff Rules

Tüm wave'ler tamamlandığında proje `outputs/demos/trakya-teknik-makine/latest/` dizininde yeni bir ajanın koda başlayabileceği veya satıcının müşteriye gösterebileceği agent-ready durumda teslim edilir.
