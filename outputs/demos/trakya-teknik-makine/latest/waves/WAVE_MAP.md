# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

- **Single Responsibility Boundaries**: Her dalga bağımsız olarak doğrulanabilir ve tekil teslim sorumluluğuna sahip bir aşamadır.
- **Foundation First**: Modüler CSS/JS yapısı, local mock adapter ve tasarım sistemi temelleri (WAVE_00) kullanıcı yüzeylerinden önce tamamlanır.
- **Granularity Guard Compliance**: `demo-frontend` kuralı uyarınca Services (`WAVE_02`), Contact (`WAVE_03`) ve Final QA (`WAVE_04`) sorumlulukları bağımsız ayrıştırılmıştır.
- **Zero Invention Boundary**: Hiçbir dalga dondurulmuş approved scope dışında yetenek, form backend, canlı harita veya WhatsApp entegrasyonu ekleyemez.

## 2. Wave Map Summary

| Wave ID | Wave Name | Primary Deliverable Boundary | Dependencies | Target Maturity |
|---|---|---|---|---|
| `WAVE_00` | Foundation, Technical Setup & Local Data Boundary Architecture | HTML/CSS/JS modüler altyapı, CSS Custom Properties, Local Data Mock Adapter | None | Demo Foundation Ready |
| `WAVE_01` | Hero Section & Disan Authorized Service Identity Interface | Kurumsal Hero alanı, Disan Hidrolik Yetkili Servis statü rozet paneli | `WAVE_00` | Demo Hero Ready |
| `WAVE_02` | Core Services Presentation | 3 approved hizmetin (Yedek Parça, Teknik Destek, Bakım-Onarım) kart ve detay sunum katmanı | `WAVE_00`, `WAVE_01` | Demo Services Ready |
| `WAVE_03` | Direct Contact & Corporate Communication Surface | Doğrudan e-posta/telefon direct-contact CTA arayüz konsolu | `WAVE_00`, `WAVE_01` | Demo Contact Ready |
| `WAVE_04` | Final Cross-Cutting Responsive, Presentation & Quality Assurance Verification | Bütünsel responsive doğrulama, tasarım uyumu, erişilebilirlik ve demo QA kapanışı | `WAVE_00`..`WAVE_03` | Demo Sales-Ready |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Local Data Adapter)
   │
   ├──────► WAVE_01 (Hero & Disan Authorized Service Identity)
   │           │
   │           ├──────► WAVE_02 (3 Core Services Presentation)
   │           │           │
   │           └──────► WAVE_03 (Direct Contact CTA Surfaces)
   │                       │
   └───────────────────────┴──────► WAVE_04 (Final Cross-Cutting QA & Verification)
```

## 4. Wave Entries

### WAVE_00: Foundation, Technical Setup & Local Data Boundary Architecture

- **Goal**: Proje klasör yapısının, modüler CSS mimarisinin, tasarım token'larının ve local mock data adapter katmanının kurulması.
- **Why Separate / Sequencing Rationale**: Kullanıcı yüzeyleri geliştirilmeden önce temiz bir presentation-data ayrımı ve styling tabanı kurulmalıdır.
- **Committed Capabilities**:
  - HTML5 / Vanilla CSS / Vanilla JS proje bootstrapped yapısı | SCP-001 | IN_SCOPE | YES | Kurumsal frontend altyapısı | PASS | PASS | PASS
  - Local static mock data adapter (`CompanyService`, `ServicesDataService`) | SCP-006 | IN_SCOPE | YES | Mock local data adapter | PASS | PASS | PASS
  - Industrial design token'ları (`tokens.css`) | SCP-008 | IN_SCOPE | YES | Design system altyapısı | PASS | PASS | PASS
- **In Scope**: Dosya ve klasör hiyerarşisi (`src/`, `assets/`, `index.html`), reset ve token stilleri, in-memory JS data provider (`src/data/mockData.js`).
- **Out of Scope**: Kullanıcı arayüz ekranlarının tamamlanması, dış kütüphaneler, backend API.
- **Primary Deliverables**: `index.html` skeleton, `src/styles/tokens.css`, `src/styles/main.css`, `src/services/dataService.js`, `src/data/mockData.js`.
- **Dependencies**: None.
- **Upstream Boundary Consumed**: None (`project_state: new`).
- **Downstream Handoff**: `WAVE_01` ve sonraki dalgaların doğrudan tüketebileceği styling ve mock data servis boundary'si.
- **Exit Boundary**: `npm run dev` veya doğrudan browser açılışında hatasız yüklenen boş şablon ve çalışan JS mock adapter servisi.

---

### WAVE_01: Hero Section & Disan Authorized Service Identity Interface

- **Goal**: Ziyaretçinin ilk bakışta firmayı ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi unvanını anlamasını sağlayan Hero alanının yapılması.
- **Why Separate / Sequencing Rationale**: Kurumsal kimlik ve yetkili servis statüsü sitenin en kritik güven katmanıdır; diğer hizmet detaylarından önce bağımsız doğrulanmalıdır.
- **Committed Capabilities**:
  - Trakya Teknik Makine kurumsal marka karşılama alanı | SCP-001 | IN_SCOPE | YES | Kurumsal hero sunumu | PASS | PASS | PASS
  - Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statü rozet paneli | SCP-002 | IN_SCOPE | YES | Yetkili servis rozet paneli | PASS | PASS | PASS
  - Hero alanı hızlı bilgilendirme ve direct-contact yönlendirme CTA'ları | SCP-006 | IN_SCOPE | YES | Hero CTA yönlendirmeleri | PASS | PASS | PASS
- **In Scope**: Hero section HTML/CSS/JS bileşenleri, Disan Yetkili Servis rozeti görsel düzeni, responsive hero tipografisi.
- **Out of Scope**: Hizmet detay kartları, iletişim formu backend'i, harita, WhatsApp widget'ı.
- **Primary Deliverables**: `src/ui/header.js`, `src/ui/hero.js`, `src/styles/hero.css`.
- **Dependencies**: `WAVE_00`.
- **Upstream Boundary Consumed**: `WAVE_00` CSS token'ları ve dataService mock verileri.
- **Downstream Handoff**: Ziyaretçiyi karşılayan, kurumsal güveni kurmuş ve hizmet detaylarına akış sağlayan tamamlanmış Hero yüzeyi.
- **Exit Boundary**: Masaüstü ve mobil ekranlarda kusursuz görünen, Disan yetkili servis unvanını net vurgulayan Hero bileşeni.

---

### WAVE_02: Core Services Presentation

- **Goal**: Approved 3 temel hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel ve detay sunumunun yapılması.
- **Why Separate / Sequencing Rationale**: Hizmet sunumu firmanın ticari değer ürettiği ana alandır ve Contact dalgasından ayrı bağımsız bir kart/detay mimarisine sahiptir.
- **Committed Capabilities**:
  - Hizmet 1: Yedek Parça Temini kart ve teknik detay alanı | SCP-003 | IN_SCOPE | YES | Yedek parça hizmet sunumu | PASS | PASS | PASS
  - Hizmet 2: Yerinde Teknik Destek kart ve teknik detay alanı | SCP-004 | IN_SCOPE | YES | Yerinde destek hizmet sunumu | PASS | PASS | PASS
  - Hizmet 3: Makine Bakım ve Onarım kart ve teknik detay alanı | SCP-005 | IN_SCOPE | YES | Bakım-onarım hizmet sunumu | PASS | PASS | PASS
- **In Scope**: 3 hizmet kartının responsive grid düzeni, teknik ikonografi, hizmet detay metinleri (approved FCL sınırında).
- **Out of Scope**: Kaynakta bulunmayan ek hizmetler, stok sorgulama, fiyatlandırma modülü, e-ticaret, form backend'i.
- **Primary Deliverables**: `src/ui/services.js`, `src/styles/services.css`.
- **Dependencies**: `WAVE_00`, `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_00` mock data ve `WAVE_01` hero layout akışı.
- **Downstream Handoff**: Hizmetleri eksiksiz sergileyen ve iletişim CTA'larına yönlendiren tamamlanmış Services bölümü.
- **Exit Boundary**: 3 approved hizmetin mobil ve masaüstü grid düzeninde eksiksiz ve görsel olarak etkileyici sunumu.

---

### WAVE_03: Direct Contact & Corporate Communication Surface

- **Goal**: Ziyaretçilerin firmayla doğrudan iletişim kurmasını sağlayan e-posta ve telefon direct-contact CTA yüzeyinin yapılması.
- **Why Separate / Sequencing Rationale**: `demo-frontend` granularity guard gereği Contact alanı Services alanından ve final QA dalgasından kesinlikle bağımsız ayrıştırılmalıdır.
- **Committed Capabilities**:
  - Direct-contact telefon CTA bağlantı yüzeyi | SCP-006 | IN_SCOPE | YES | Telefon CTA arayüzü | PASS | PASS | PASS
  - Direct-contact e-posta CTA bağlantı yüzeyi | SCP-006 | IN_SCOPE | YES | E-posta CTA arayüzü | PASS | PASS | PASS
  - Kurumsal footer ve telif alanı | SCP-001 | IN_SCOPE | YES | Kurumsal footer alanı | PASS | PASS | PASS
- **In Scope**: Phone (`tel:`) ve Email (`mailto:`) CTA butonları, kurumsal adres/iletişim konsolu layout'u (approved context ile).
- **Out of Scope**: Harita entegrasyonu, WhatsApp widget'ı, canlı sohbet, backend submit olan iletişim formu.
- **Primary Deliverables**: `src/ui/contact.js`, `src/ui/footer.js`, `src/styles/contact.css`.
- **Dependencies**: `WAVE_00`, `WAVE_01`.
- **Upstream Boundary Consumed**: `WAVE_00` styling token'ları ve `WAVE_01` sayfa akış yapısı.
- **Downstream Handoff**: İletişim yüzeyi tamamlanmış, tüm sayfa bölümleri birleşmiş demo uygulaması.
- **Exit Boundary**: Mobilde en az 44x44px dokunma alanına sahip, doğrudan aramayı/e-posta açmayı başlatan CTA bağlantıları.

---

### WAVE_04: Final Cross-Cutting Responsive, Presentation & Quality Assurance Verification

- **Goal**: Tüm demo uygulamasının çapraz cihaz responsive davranışı, animasyon pürüzsüzlüğü, erişilebilirlik ve demo satış sunumu kalitesinin doğrulanması.
- **Why Separate / Sequencing Rationale**: `demo-frontend` kuralı gereği projenin genel QA doğrulaması hiçbir feature wave'ine gömülemez; bağımsız kapanış dalgası olarak yürütülür.
- **Committed Capabilities**:
  - Çapraz cihaz responsive doğrulama (Mobil, Tablet, Masaüstü) | SCP-001 | IN_SCOPE | YES | Responsive QA doğrulaması | PASS | PASS | PASS
  - Tipografi, renk kontrastı ve WCAG erişilebilirlik denetimi | SCP-008 | IN_SCOPE | YES | Accessibility QA doğrulaması | PASS | PASS | PASS
  - Satış görüşmesi sunum hazırliği ve demo QA kapanışı | SCP-001 | IN_SCOPE | YES | Demo presentation QA | PASS | PASS | PASS
- **In Scope**: Mobil/tablet/desktop breakpoint kontrolleri, hover/focus state denetimleri, console error kontrolü, performans optimizasyonu.
- **Out of Scope**: Yeni özellik veya sayfa eklemek.
- **Primary Deliverables**: Satışa hazır, test edilmiş, hatasız frontend demo kod tabanı ve QA kapanış raporu.
- **Dependencies**: `WAVE_00`, `WAVE_01`, `WAVE_02`, `WAVE_03`.
- **Upstream Boundary Consumed**: Tüm önceki dalgalarda üretilmiş olan frontend arayüz bileşenleri.
- **Downstream Handoff**: Müşteriye ve ajana teslime hazır `outputs/demos/trakya-teknik-makine/versions/v0.2/` paketi.
- **Exit Boundary**: 0 konsol hatası, %100 responsive uyum, Lighthouse 95+ performans skoru.

## 5. Cross-Wave Invariants

- Hiçbir dalgada uydurma backend, veritabanı veya CMS kodu yazılmayacaktır.
- Hiçbir dalgada dondurulmuş FCL dışında firma iddiası veya hizmet eklenmeyecektir.
- Her dalga sonunda mevcut kod tabanı hatasız çalışır durumda kalacaktır.

## 6. Global Exit / Handoff Rules

- Proje `WAVE_04` tamamlanıp validation PASS almadan terminal state'e geçmeyecektir.
