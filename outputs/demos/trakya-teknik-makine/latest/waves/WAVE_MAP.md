# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **Coherent Deliverable Boundary**: Her wave, bağımsız olarak doğrulanabilir, tamamlanmış tekil bir teslim birimini (deliverable) temsil eder.
- **Package Granularity Guard Alignment**: Foundation altyapısı kullanıcı yüzeylerinden ayrı tutulmuştur. Hizmet sunumu (Services) ile İletişim (Contact) sorumlulukları farklı wave'lere bölünmüştür. Tüm projeyi doğrulayan final QA ayrı bir kapanış dalgası olarak dondurulmuştur.
- **Service/Data Boundary Isolation**: Her UI dalgası verisini presentation katmanında hardcode etmez; `WAVE_00`'da kurulan `contentService` arayüzü üzerinden tüketir.
- **Executable Approved Scope Rule**: Tüm dalga görevleri yalnızca approved input scope (`SCP-001` - `SCP-009`) kapsamındadır. Out of scope (`SCP-011` - `SCP-014`) ve Future (`SCP-015`) maddeler dalgalara dahil edilmemiştir.

## 2. Wave Map Summary

| Wave ID | Wave Adı | Birincil Hedef & Deliverable | Bağımlılık | Target Profile |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Architecture Setup | HTML/CSS/JS proje yapısı, `DESIGN_RULES` renk/tipografi token'ları, modüler `contentService` ve mock data adapter altyapısı | Bağımsız | Prototype |
| `WAVE_01` | Primary Entry & Authorized Service Trust | Hero bölümü, 3 saniyede anlaşılır firma tanımı ve Disan Hidrolik yetkili servis güven rozeti yüzeyi | `WAVE_00` | Prototype |
| `WAVE_02` | Services Showcase | 3 temel hizmetin (Yedek Parça, Yerinde Destek, Bakım/Onarım) kartlı visual spec sheet sunumu | `WAVE_01` | Prototype |
| `WAVE_03` | Contact Channels & Quick CTAs | Telefon, e-posta hızlı iletişim aksiyonları, çalışma saatleri ve adres/ulaşım bilgi kartı | `WAVE_02` | Prototype |
| `WAVE_04` | Final Integration & Presentation QA | Tüm cihazlarda (320px-2560px) responsive doğrulama, WCAG AA erişilebilirlik ve satış sunumu QA | `WAVE_03` | Prototype |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Service Boundary)
    │
    ▼
WAVE_01 (Hero & Authorized Service Trust)
    │
    ▼
WAVE_02 (Services Showcase)
    │
    ▼
WAVE_03 (Contact & Quick CTAs)
    │
    ▼
WAVE_04 (Final Integration & Presentation QA)
```

## 4. Wave Entries

### WAVE_00 — Foundation & Architecture Setup
- **Amaç**: Modern HTML5/CSS3/JS modüler klasör mimarisinin kurulması, `DESIGN_RULES` renk/tipografi değişkenlerinin tanımlanması ve `contentService` veri katmanının oluşturulması.
- **Kapsanan Scope**: `SCP-007` (Design Rules), `SCP-008` (Data/Service Boundary).
- **Tamamlanma Kriteri**: Vite preview ortamının sorunsuz çalışması, `contentService.getCompanyInfo()` ve `contentService.getServices()` metodlarının mock veriyi doğru döndürmesi.

### WAVE_01 — Primary Entry & Authorized Service Trust
- **Amaç**: Hero alanı, ana slogan, kısa kurumsal tanıtım ve Disan Hidrolik Trakya Bölge Yetkili Servisliği güven vurgusunun inşa edilmesi.
- **Kapsanan Scope**: `SCP-001` (Responsive Frontend), `SCP-002` (Disan Hidrolik Trust Presentation).
- **Tamamlanma Kriteri**: Ziyaretçinin ilk ekran görünümünde firmanın uzmanlığını ve yetkili servisliğini 3 saniye içinde kavraması.

### WAVE_02 — Services Showcase
- **Amaç**: Üç ana hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) detaylı kartlar, teknik simge ve visual spec sheet estetiği ile sunulması.
- **Kapsanan Scope**: `SCP-003` (Spare Parts), `SCP-004` (On-Site Support), `SCP-005` (Maintenance & Repair).
- **Tamamlanma Kriteri**: 3 hizmetin kartlar halinde yüksek okunabilirlik ve mikro-etkileşimlerle sergilenmesi.

### WAVE_03 — Contact Channels & Quick Action CTAs
- **Amaç**: Doğrudan telefon arama (`tel:`), e-posta gönderme (`mailto:`), çalışma saatleri ve adres/lokasyon kartlarının inşa edilmesi.
- **Kapsanan Scope**: `SCP-006` (Phone & Email CTAs), `SCP-010` (Existing Contact Info).
- **Tamamlanma Kriteri**: Telefon ve mail butonlarının ilgili cihaz protokollerini doğru tetiklemesi, adres ve çalışma saatlerinin net sunulması.

### WAVE_04 — Final Cross-Device Responsive Verification & Presentation QA
- **Amaç**: Projenin mobil (320px), tablet (768px), laptop (1280px) ve 4K (2560px) ekranlarda bütünsel testi, WCAG AA erişilebilirlik taraması ve satış sunumu QA doğrulaması.
- **Kapsanan Scope**: `SCP-001` (Cross-device responsive QA), `SCP-009` (Sales Demo Quality Verification).
- **Tamamlanma Kriteri**: Sıfır taşma/kırılma, tam responsive uyum ve satış sunumuna %100 hazır duruma gelinmesi.

## 5. Cross-Wave Invariants

- **Quality Ceiling Invariant**: Demo olması kod veya tasarım kalitesinin düşürülmesine izin vermez.
- **Stack-Neutral Separation**: Bileşenler doğrudan mock JS nesnelerine erişir; gelecekte backend eklendiğinde UI dokunulmaz kalır.
- **Factual Integrity**: Hiçbir dalga doğrulanmamış firmaiddiası veya sahte sertifika ekleyemez.

## 6. Global Exit / Handoff Rules

Tüm dalgalar (`WAVE_00` - `WAVE_04`) tamamlandığında, frontend kod tabanı satış sunumunda gösterilebilir, responsive ve clean architecture standartlarına tam uygun hâle gelmiş olur.
