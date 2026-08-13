# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **Coherent Deliverables**: Wave'ler klasör yapısına göre değil; bağımsız olarak test edilebilir, kullanıcıya ve satış görüşmesine sunulabilir teslim ünitelerine bölünmüştür.
- **Foundation Separation**: Wave 00 altyapı, tasarım token'ları, layout kabuğu ve data service boundary tanımından sorumludur; UI içerik geliştirmesinden bağımsızdır.
- **Service & Data Boundary**: Mock veriler UI bileşenlerine gömülmez; Wave 00 ile kurulan Data Access Service katmanı üzerinden Wave 01 ve Wave 02'ye beslenir.
- **Sequential Dependencies**: Her dalga bir önceki dalganın tamamlanmış ve doğrulanmış çıktıları üzerine inşa edilir (Acyclic dependency).

## 2. Wave Map Summary

| Wave ID | Wave Tanımı | Ana Teslimat (Primary Deliverable) | Bağımlılıklar | Hedef Durum |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Data Boundary | Modüler projelendirme, CSS tokens, layout shell ve CompanyDataService mock adapter | Yok | Baseline Ready |
| `WAVE_01` | Corporate Shell & Trust Showcase | Header, Hero alanı, Kurumsal tanıtım & Disan Yetkili Servis güven alanı | WAVE_00 | Surface Active |
| `WAVE_02` | Services Showcase & Demo Verification | 3 Ana hizmet sunum kartları (Yedek Parça, Yerinde Destek, Bakım-Onarım), iletişim CTA'ları & satış demo QA doğrulaması | WAVE_01 | Demo Complete |

## 3. Dependency Chain

```text
[WAVE_00: Foundation & Data Boundary]
         ↓
[WAVE_01: Corporate Shell & Trust Showcase]
         ↓
[WAVE_02: Services Showcase & Demo Verification]
```

## 4. Wave Entries

### WAVE_00 — Foundation, Design Tokens & Data Boundary
- **Amaç**: Temel HTML5/CSS3 yapısının kurulması, CSS Custom Properties (Tokens), responsive shell iskeleti ve `CompanyDataService` yerel mock adapter katmanının hazırlanması.
- **Deliverables**: Modüler dizin yapısı, `main.css` design tokens, `CompanyService` interface, `companyData` mock nesnesi.
- **Exit Kriteri**: Mock veriden başarılı şekilde veri çeken service adapter'ın çalışması ve temel layout shell'in responsive kırılma yaşamadan yüklenmesi.

### WAVE_01 — Corporate Shell & Trust Showcase
- **Amaç**: Ana sayfanın üst navigasyonu (Header), güçlü visual hero alanı, kurumsal tanıtım bölümü ve Disan Hidrolik Yetkili Servis vurgusunun inşa edilmesi.
- **Deliverables**: Sticky Header, Hero Banner, Disan Yetkili Servis Precision Badge, Kurumsal Tanıtım Bileşeni.
- **Exit Kriteri**: Masaüstü ve mobil ekranlarda header, hero ve yetkili servis rozetinin tasarım kurallarına tam uyumla görüntülenmesi.

### WAVE_02 — Services Showcase & Demo Verification
- **Amaç**: Firmanın 3 temel hizmetinin (Yedek Parça Temini, Yerinde Destek, Bakım-Onarım) görsel kartlar halinde sunulması, iletişim CTA'larının bağlanması ve uçtan uca satış görüşmesi QA doğrulaması.
- **Deliverables**: Hizmet Sunum Kartları (Grid/Card Layout), Hızlı İletişim Butonları (Telefon click-to-call, E-posta mailto), Mobil-Masaüstü Satış Görüşmesi QA Raporu.
- **Exit Kriteri**: 320px-1920px tüm ekran boyutlarında kusursuz çalışan, iletişim aksiyonları hazır, satış görüşmesinde güvenle sunulabilecek tamamlanmış kurumsal frontend demo.

## 5. Cross-Wave Invariants

- **Kapsam Sınırı**: Hiçbir dalga sahte backend, API contract'ı veya veritabanı kodu ekleyemez.
- **Tasarım Standartları**: Tüm dalgalar [DESIGN_RULES.md](../design/DESIGN_RULES.md) içindeki renk, tipografi, spacing ve kontrast kurallarına uymak zorundadır.
- **Kalite Tabanı**: Demo/prototype olması throwaway kod yazma izni vermez.

## 6. Global Exit / Handoff Rules

- Her wave tamamlandığında ilgili wave plan belgesindeki (`WAVE_<NN>.md`) tüm acceptance criteria maddeleri yeşil olmalıdır.
- Satış görüşmesi öncesinde Wave 02 başarıyla kapatılmalıdır.
