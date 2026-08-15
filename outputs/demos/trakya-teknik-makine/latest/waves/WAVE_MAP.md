# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

- **Single Delivery Purpose**: Her wave bağımsız olarak test edilebilir ve gösterilebilir bir teslimat sınırı (delivery boundary) üretir.
- **Foundation First**: Shell, CSS tokens ve data service adapter foundation (`WAVE_00`) tüm kullanıcı arayüzü yüzeylerinden önce tamamlanır.
- **Domain Surface Separation**: Hero & Brand identity (`WAVE_01`), Hizmetler grid'i (`WAVE_02`) ve İletişim CTA yüzeyi (`WAVE_03`) bağımsız modüller olarak geliştirilir.
- **Horizontal Closure**: Whole-project responsive doğrulama, erişilebilirlik denetimi ve satış demosu kabul doğrulaması (`WAVE_04`) bağımsız kapanış wave'i olarak konumlandırılır.
- **Uninvented Backend Invariant**: Hiçbir wave sahte API endpoint, backend sunucusu veya form submit backend'i icat etmez.

## 2. Wave Map Summary

| Wave ID | Wave Name | Primary Goal | Delivery Profile Maturity | Dependencies |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Application Shell Setup | CSS tokens, responsive container shell, dataService adapter foundation | Prototype (Baseline) | None |
| `WAVE_01` | Corporate Entry & Hero Identity Surface | Kurumsal hero sunumu ve Disan Yetkili Servis rozeti | Prototype | `WAVE_00` |
| `WAVE_02` | Core Services Presentation Surface | 3 approved hizmetin (`Yedek Parça`, `Teknik Destek`, `Bakım-Onarım`) sunumu | Prototype | `WAVE_00`, `WAVE_01` |
| `WAVE_03` | Direct Contact & Corporate Communication Surface | Telefon ve E-posta direct contact CTA yüzeyleri | Prototype | `WAVE_00`, `WAVE_02` |
| `WAVE_04` | Final Integration, Responsive Verification & Sales-Demo QA | Uçtan uca responsive doğrulama ve satış demosu kalitesi denetimi | Prototype (Sales-Demo Ready) | `WAVE_00`..`WAVE_03` |

## 3. Dependency Chain

```text
[WAVE_00: Foundation Shell & Data Adapter]
       ↓
[WAVE_01: Corporate Hero & Authorized Service Badge]
       ↓
[WAVE_02: 3 Approved Services Presentation Grid]
       ↓
[WAVE_03: Direct Contact Phone & Email CTA Surface]
       ↓
[WAVE_04: Final Multi-Device Responsive & Sales-Demo QA]
```

## 4. Wave Entries

### WAVE_00 — Foundation & Application Shell Setup

- **Goal**: Temiz ve modüler frontend kod tabanı, CSS custom properties / design tokens mimarisi, responsive container shell ve `dataService.js` adapter altyapısının kurulması.
- **Why Separate / Sequencing Rationale**: Uygulama kabuğu, renk/tipografi token'ları ve veri erişim adapter'ı hazır olmadan kullanıcı yüzeylerinin inşasına geçilmesi kod tekrarına ve hardcoded veri karmaşasına yol açacağı için ilk adım olarak ayrılmıştır.
- **Committed Capabilities**:
  - `Responsive container shell & baseline layout setup` | `SCP-001`, `SCP-002` | `IN_SCOPE` | `YES` | Responsive frontend demo shell | PASS | PASS | PASS
  - `Mock data adapter interface baseline (src/services/dataService.js)` | `SCP-006` | `IN_SCOPE` | `YES` | Clean data-access boundary | PASS | PASS | PASS
- **In Scope**: Baseline HTML/CSS/JS proje yapısı, CSS custom properties (`#0F172A`, `#1E293B`, `#F97316`), responsive layout container, `dataService.js` adapter arabirimi.
- **Out of Scope**: Gerçek veritabanı, backend API sunucusu, paket yöneticisine bağımlı ağır framework'ler.
- **Primary Deliverables**: Standalone preview sunucusuyla çalışan temel uygulama kabuğu ve mock data adapter altyapısı.
- **Dependencies**: None.
- **Upstream Boundary Consumed**: Engine initialization.
- **Downstream Handoff**: `dataService.js` verilerine erişebilen, CSS token'ları tanımlı responsive layout container.
- **Exit Boundary**: `dataService.getCompanyInfo()` metodu mock veriyi başarıyla döndürür ve baseline container kırılmadan yüklenir.

---

### WAVE_01 — Corporate Entry & Hero Identity Surface

- **Goal**: Trakya Teknik Makine kurumsal marka kimliğini ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü vurgulayan hero sunum yüzeyinin inşası.
- **Why Separate / Sequencing Rationale**: Firmanın kimliği ve yetkili servis statüsü potansiyel müşterilerin ve satış görüşmesinin ilk etkileşim noktası olduğu için hizmet detaylarından önce inşa edilmelidir.
- **Committed Capabilities**:
  - `Hero presentation surface with Trakya Teknik Makine brand title` | `SCP-001`, `SCP-002` | `IN_SCOPE` | `YES` | Primary corporate presentation | PASS | PASS | PASS
  - `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi authorized badge & banner surface` | `SCP-003` | `IN_SCOPE` | `YES` | Authorized service status display | PASS | PASS | PASS
- **In Scope**: Hero başlık ve alt başlık alanı, Disan Hidrolik Trakya Bölge Yetkili Servisi görsel rozet ve vurgu kartı, kurumsal kimlik sunumu.
- **Out of Scope**: Source dosyada yer almayan sertifika, adres, çalışma saatleri veya firma iddiaları.
- **Primary Deliverables**: Tamamlanmış hero ve yetkili servis rozet yüzeyi.
- **Dependencies**: `WAVE_00`.
- **Upstream Boundary Consumed**: `WAVE_00` CSS token'ları ve layout container.
- **Downstream Handoff**: Yetkili servis statüsünü açıkça sergileyen ve hizmet bölümüne yönlendiren hero alanı.
- **Exit Boundary**: Masaüstü ve mobil ekranlarda firma adı ve yetkili servis statüsü okunabilir biçimde görünür.

---

### WAVE_02 — Core Services Presentation Surface

- **Goal**: Onaylı 3 ana hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel kartlar ve grid düzeninde sunulması.
- **Why Separate / Sequencing Rationale**: Hizmet sunumu projenin temel işlevsel içeriğidir ve hero alanından bağımsız olarak `dataService.js` üzerinden beslenen ayrı bir modül oluşturur.
- **Committed Capabilities**:
  - `3 approved services visual presentation grid & card surfaces (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım)` | `SCP-004` | `IN_SCOPE` | `YES` | 3 approved services presentation | PASS | PASS | PASS
  - `Service data consumption via dataService.getServices() adapter` | `SCP-006` | `IN_SCOPE` | `YES` | Service data boundary | PASS | PASS | PASS
- **In Scope**: 3 adet hizmet kartı, hizmet ikon ve açıklama alanları, `dataService.getServices()` entegrasyonu.
- **Out of Scope**: Orijinal parça garantisi, stok bilgisi, mobil filo, acil müdahale SLA, periyodik bakım detayları veya hidrolik pres gibi unapproved iddialar.
- **Primary Deliverables**: Hizmetler grid'i ve kart bileşenleri.
- **Dependencies**: `WAVE_00`, `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_00` data adapter & `WAVE_01` hero altı sayfa akışı.
- **Downstream Handoff**: 3 approved hizmeti kartlar halinde sergileyen modül.
- **Exit Boundary**: 3 hizmet kartı `dataService.js` üzerinden okunarak eksiksiz render edilir.

---

### WAVE_03 — Direct Contact & Corporate Communication Surface

- **Goal**: Ziyaretçileri firmayla doğrudan iletişime geçirmeye yönlendiren Telefon ve E-posta direct contact CTA yüzeylerinin yapımı.
- **Why Separate / Sequencing Rationale**: İletişim yönlendirmesi kullanıcı dönüşüm noktasıdır ve hizmet incelemesinin hemen ardında yer alan ayrı bir etkileşim yüzeyidir.
- **Committed Capabilities**:
  - `Phone direct-contact CTA action button & bar` | `SCP-005` | `IN_SCOPE` | `YES` | Phone direct contact CTA | PASS | PASS | PASS
  - `Email direct-contact CTA action button & bar` | `SCP-005` | `IN_SCOPE` | `YES` | Email direct contact CTA | PASS | PASS | PASS
- **In Scope**: Direct contact telefon (`tel:`) ve e-posta (`mailto:`) CTA butonları, iletişim yönlendirme kartı.
- **Out of Scope**: WhatsApp entegrasyonu, canlı harita, form submit backend'i veya uydurma telefon/adres değerleri.
- **Primary Deliverables**: Direct contact CTA yüzeyi.
- **Dependencies**: `WAVE_00`, `WAVE_02`.
- **Upstream Boundary Consumed**: `WAVE_02` hizmetler modülü altı akış.
- **Downstream Handoff**: Telefon ve e-posta tetikleyicilerine sahip iletişim yüzeyi.
- **Exit Boundary**: Telefon ve e-posta CTA butonları ilgili `tel:` ve `mailto:` bağlantılarını tetikler.

---

### WAVE_04 — Final Integration, Responsive Verification & Sales-Demo QA

- **Goal**: Tüm yüzeylerin birleştirilmesi, masaüstü/tablet/mobil responsive uyumluluk doğrulaması, klavye erişilebilirliği denetimi ve satış demosu olgunluk kontrolü.
- **Why Separate / Sequencing Rationale**: Tüm modüller tamamlandıktan sonra uçtan uca yatay kalite denetimi ve ekran uyumluluğu tekil bir feature wave'ine gömülemez; bağımsız kapanış adımıdır.
- **Committed Capabilities**:
  - `Whole-project multi-device responsive layout verification across breakpoints` | `SCP-001` | `IN_SCOPE` | `YES` | Responsive frontend demo | PASS | PASS | PASS
  - `Sales-demo presentation readiness & data adapter boundary audit` | `SCP-001`, `SCP-006` | `IN_SCOPE` | `YES` | Sales demo readiness | PASS | PASS | PASS
- **In Scope**: Breakpoint doğrulamaları (1200px, 768px, 320px), cross-browser kontrolleri, data adapter read-only kontrolü, satış demosu sunum hazırlığı.
- **Out of Scope**: Production domain/hosting kurulumu, canlı API entegrasyonu.
- **Primary Deliverables**: Doğrulanmış ve satış demosuna hazır kurumsal frontend paketi.
- **Dependencies**: `WAVE_00`, `WAVE_01`, `WAVE_02`, `WAVE_03`.
- **Upstream Boundary Consumed**: Tamamlanmış tüm uygulama yüzeyleri (`WAVE_00`..`WAVE_03`).
- **Downstream Handoff**: Validated ve agent-ready çıktı paketi (`outputs/demos/trakya-teknik-makine/latest/`).
- **Exit Boundary**: Proje tüm çözünürlüklerde hatasız çalışır, hiçbir uydurma iddia içermez ve satış görüşmesinde sunulmaya hazır hale gelir.

## 5. Cross-Wave Invariants

1. **Clean Service Adapter**: Hiçbir wave mock veriyi UI component'leri içinde hardcode edemez; tüm veriler `dataService.js` üzerinden okunur.
2. **Strict Fact Allowlist**: Hiçbir wave `TRAKYA_TEKNIK_MAKINE_PROJECT.md` ve FCL dışından firma/hizmet iddiası üretemez.
3. **No Unapproved Capabilities**: Hiçbir wave harita, WhatsApp, backend form submit, e-ticaret veya kullanıcı girişi ekleyemez.

## 6. Global Exit / Handoff Rules

- Her wave tamamlandığında bir sonraki wave için gerekli CSS class'ları, HTML yapıları ve data adapter arabirimleri erişilebilir ve çalışır durumda teslim edilir.
- Proje son teslimatı `WAVE_04` doğrulaması ve canonical VALIDATION_REPORT onayından sonra publish edilir.
