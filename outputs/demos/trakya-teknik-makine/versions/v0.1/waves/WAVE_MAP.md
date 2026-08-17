# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Wave Map

## 1. Wave Architecture Principles

- **P-01 (Clean Foundation First)**: Önceden temiz bir proje scaffolding'i, CSS token sistemi ve presentation service boundary'si oluşturulmadan UI bileşenleri geliştirilemez.
- **P-02 (Zero Unapproved Scope)**: Hiçbir wave approved scope registry'de (`SCP-001`..`SCP-007`) desteklenmeyen yeni bir yetenek, modal, WhatsApp, harita veya backend yetkinliği ekleyemez.
- **P-03 (Strict Factual Allowlist)**: Her wave factual copy metinlerinde sadece FCL-001..FCL-006 allowed wording sınırında kalır. Stok, orijinal parça, SLA veya acil servis gibi uydurma qualifier'lar eklenemez.
- **P-04 (Clear Boundary & Handoff)**: Her wave neyi tükettiğini (`Upstream Boundary Consumed`) ve kendinden sonraki wave'e hangi somut tamamlanmış çıktıyı bıraktığını (`Downstream Handoff`) açıkça tanımlar.

## 2. Wave Map Summary

| Wave ID | Wave Name | Goal | Primary Deliverable | Delivery Maturity |
|---|---|---|---|---|
| WAVE_00 | Foundation & Design System Infrastructure | Proje altyapısını, CSS token sistemini ve presentation service boundary'sini kurmak | Modüler Vite+React altyapısı, `tokens.css`, `presentationService.js` | Prototype Ready |
| WAVE_01 | Global Shell & Corporate Header Presentation | Kurumsal üst kabuğu, navigasyonu ve yetkili servis statülü hero alanını sunmak | `Header`, `HeroPresentation` bileşenleri | Prototype Ready |
| WAVE_02 | Verified Services & Direct-Contact Capabilities | Doğrulanmış 3 hizmeti ve direct-contact CTA butonlarını geliştirmek | `ServicesGrid`, `ContactCTA` bileşenleri | Prototype Ready |
| WAVE_03 | Responsive Polish & Sales Demo Readiness | Mobil/tablet responsive uyumunu, etkileşim cilasını ve build önizlemesini tamamlamak | Tamamlanmış responsive landing page & `dist/` demo build'i | Sales-Demo Ready |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Service Boundary)
   │
   ▼
WAVE_01 (Global Shell & Corporate Identity)
   │
   ▼
WAVE_02 (Services Grid & Direct-Contact CTA)
   │
   ▼
WAVE_03 (Responsive Polish & Sales Demo Readiness)
```

## 4. Wave Entries

---

### Wave 00: Foundation & Design System Infrastructure

- **Wave ID**: WAVE_00
- **Name**: Foundation & Design System Infrastructure
- **Goal**: Vite+React projesini scaffold etmek, `tokens.css` tasarım token'larını ve `presentationService.js` içerik servis boundary'sini kurmak.
- **Why Separate / Sequencing Rationale**: UI bileşenleri yazılmadan önce paket yönetimi, CSS değişkenleri ve veri katmanı soyutlaması hazır olmalıdır; aksi halde presentation bileşenlerine hardcode veri veya ad-hoc CSS sızması yaşanır.
- **Committed Capabilities**:
  - **Vite+React package infrastructure** | Support: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Frontend demo landing page | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
  - **Design tokens system (`tokens.css`)** | Support: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Modern corporate frontend design | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
  - **Presentation service boundary (`presentationService.js`)** | Support: `SCP-007` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Mock/local content boundary | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
- **In Scope**: `package.json`, Vite yapılandırması, `tokens.css` (renk, tipografi, spacing), `presentationData.js` (FCL allowlist), `presentationService.js` adaptörü.
- **Out of Scope**: UI bileşenlerinin render edilmesi, backend entegrasyonu, üçüncü parti UI kütüphaneleri.
- **Primary Deliverables**: Derlenebilir boş React altyapısı, `tokens.css`, `presentationService.js`.
- **Dependencies**: Hiçbiri (Başlangıç adımı).
- **Upstream Boundary Consumed**: Approved project input ve FCL allowlist.
- **Downstream Handoff**: WAVE_01 için hazır Vite dev server, CSS custom properties ve `presentationService` metotları.
- **Exit Boundary**: `npm run dev` hatasız başlatılır, `presentationService.getCompanyInfo()` dondurulmuş veriyi döndürür.

---

### Wave 01: Global Shell & Corporate Header Presentation

- **Wave ID**: WAVE_01
- **Name**: Global Shell & Corporate Header Presentation
- **Goal**: Ana layout kabuğunu, header navigasyonunu ve "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" unvanını vurgulayan hero sunum alanını geliştirmek.
- **Why Separate / Sequencing Rationale**: Kurumsal kimlik ve yetkili servis unvanı sitenin ana omurgasıdır; hizmet kartları ve iletişim butonları eklenmeden önce üst kabuk ve hero sunumu netleştirilmelidir.
- **Committed Capabilities**:
  - **Corporate layout shell & navigation header** | Support: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Corporate landing page structure | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
  - **Disan Hidrolik Makine Trakya Bölge Yetkili Servisi hero presentation** | Support: `SCP-002` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Authorized service status presentation | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
- **In Scope**: `Header.jsx`, `HeroPresentation.jsx`, kurumsal logo/başlık alanı, yetkili servis rozet alanı, `App.jsx` layout entegrasyonu.
- **Out of Scope**: Hizmet detay kartları, canlı harita, WhatsApp, arama/filtreleme.
- **Primary Deliverables**: `Header` ve `HeroPresentation` React bileşenleri.
- **Dependencies**: WAVE_00.
- **Upstream Boundary Consumed**: WAVE_00'ın `tokens.css` ve `presentationService` altyapısı.
- **Downstream Handoff**: WAVE_02 için kurulmuş kurumsal ana sayfa üst kabuğu.
- **Exit Boundary**: Hero alanında Trakya Teknik Makine adı ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü açıkça görünür.

---

### Wave 02: Verified Services & Direct-Contact Capabilities

- **Wave ID**: WAVE_02
- **Name**: Verified Services & Direct-Contact Capabilities
- **Goal**: Doğrulanmış 3 temel hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) kart hiyerarşisiyle sunmak ve telefon/e-posta CTA butonlarını entegre etmek.
- **Why Separate / Sequencing Rationale**: Hizmet sunumu ve iletişim butonları web sitesinin ana işlevsel çıktısıdır; kurumsal üst kabuk tamamlandıktan sonra ayrı bir delivery birimi olarak geliştirilmelidir.
- **Committed Capabilities**:
  - **Yedek Parça Temini service card** | Support: `SCP-003` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Spare parts service presentation | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
  - **Yerinde Teknik Destek service card** | Support: `SCP-004` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: On-site support service presentation | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
  - **Makine Bakım ve Onarım service card** | Support: `SCP-005` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Machine maintenance service presentation | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
  - **Direct-contact phone & email CTA buttons** | Support: `SCP-006` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Direct-contact phone/email CTA | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
- **In Scope**: `ServicesGrid.jsx`, `ServiceCard.jsx`, `ContactCTA.jsx`, `Footer.jsx`, `tel:` ve `mailto:` bağlantıları.
- **Out of Scope**: Uydurma qualifier'lar (stok, SLA, acil servis, periyodik bakım), form backend'i, WhatsApp, harita.
- **Primary Deliverables**: `ServicesGrid` ve `ContactCTA` React bileşenleri.
- **Dependencies**: WAVE_01.
- **Upstream Boundary Consumed**: WAVE_01 üst kabuğu ve WAVE_00 `presentationService` verisi.
- **Downstream Handoff**: WAVE_03 için tüm içerik ve bileşenleri tamamlanmış frontend demo.
- **Exit Boundary**: 3 hizmet kartı görsel hiyerarşiyle render olur; telefon ve e-posta butonları tıklanabilir CTA protokollerini taşır.

---

### Wave 03: Responsive Polish & Sales Demo Readiness

- **Wave ID**: WAVE_03
- **Name**: Responsive Polish & Sales Demo Readiness
- **Goal**: Mobil ve tablet breakpoint uyumunu mükemmelleştirmek, hover/focus/active durumlarını cilalamak ve satış demosu için derlenmiş static build üretmek.
- **Why Separate / Sequencing Rationale**: Tüm UI bileşenleri hazır olmadan responsive cilalama ve cross-device QA yapılamaz; satış görüşmesi öncesinde bağımsız kalite kapanış dalgası gereklidir.
- **Committed Capabilities**:
  - **Mobile/Tablet responsive layout adaptation** | Support: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Responsive landing page | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
  - **Interactive state & accessibility polish** | Support: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Modern corporate frontend quality | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
  - **Static build preview validation (`npm run build`)** | Support: `SCP-001` | Status: `IN_SCOPE` | Executable: `YES` | Support Meaning: Sales-demo ready deliverable | Eligibility: PASS | Semantic Subset: PASS | Map Subset: PASS
- **In Scope**: Media query düzenlemeleri, mobil touch target'lar (`>= 44px`), `npm run build` doğrulaması, `dist/` önizlemesi.
- **Out of Scope**: Production hosting/domain geçişi, canlı backend entegrasyonu.
- **Primary Deliverables**: Responsive ve cilalanmış satış demosu frontend paketi (`dist/`).
- **Dependencies**: WAVE_02.
- **Upstream Boundary Consumed**: WAVE_02'de tamamlanan tüm UI bileşenleri.
- **Downstream Handoff**: Müşteri satış görüşmesinde sunulmaya hazır frontend demo paketi.
- **Exit Boundary**: Mobil ve masaüstü görünümler hatasızdır; `npm run build` uyarısız ve hatasız `dist/` üretir.

## 5. Cross-Wave Invariants

- **INV-01**: Hiçbir wave FCL allowlist dışında yeni bir firma bilgisi veya modifier ekleyemez.
- **INV-02**: Hiçbir wave `presentationService` katmanını by-pass edip bileşen içine veri hardcode edemez.
- **INV-03**: Bağımlılık zinciri döngüsüzdür (acyclic): `WAVE_00 -> WAVE_01 -> WAVE_02 -> WAVE_03`.

## 6. Global Exit / Handoff Rules

- Proje bitiminde `npm run build` komutu çalıştırılmalı ve `dist/` çıktısının sorunsuz üretildiği doğrulanmalıdır.
- Satış demosu `sales-demo ready` olmalı; koda geçici hack veya kırık stil bırakılmamalıdır.
