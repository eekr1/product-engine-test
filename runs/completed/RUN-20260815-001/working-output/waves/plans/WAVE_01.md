# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_01: Hero Section & Disan Authorized Service Identity Interface

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Ziyaretçinin ilk bakışta firmayı ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi unvanını anlamasını sağlayan Hero alanının yapılması.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_01
Name: Hero Section & Disan Authorized Service Identity Interface
Goal: Ziyaretçinin ilk bakışta firmayı ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi unvanını anlamasını sağlayan Hero alanının yapılması.
Why Separate: Kurumsal kimlik ve yetkili servis statüsü sitenin en kritik güven katmanıdır; diğer hizmet detaylarından önce bağımsız doğrulanmalıdır.
Committed Capabilities:
  - Trakya Teknik Makine kurumsal marka karşılama alanı | SCP-001 | IN_SCOPE | YES | Kurumsal hero sunumu | PASS | PASS | PASS
  - Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statü rozet paneli | SCP-002 | IN_SCOPE | YES | Yetkili servis rozet paneli | PASS | PASS | PASS
  - Hero alanı hızlı bilgilendirme ve direct-contact yönlendirme CTA'ları | SCP-006 | IN_SCOPE | YES | Hero CTA yönlendirmeleri | PASS | PASS | PASS
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Header & Corporate Identity Bar (`header.js`) | Trakya Teknik Makine kurumsal marka karşılama | implementation-of | PASS |
| Disan Yetkili Servis Badge & Trust Surface (`hero.js`) | Disan Hidrolik Yetkili Servisi statü rozet paneli | implementation-of | PASS |
| Hero Headline, Value Prop & Direct Action CTAs | Hero alanı direct-contact yönlendirme CTA'ları | implementation-of | PASS |

## 3. Why This Wave / Dependency Rationale

Ziyaretçiler siteye girdiğinde ilk 5 saniyede firmanın kim olduğunu ve Disan yetkili servisi olduğunu kavramalıdır. Bu güven yüzeyi kurulmadan hizmet detaylarına geçilmesi kurumsal algıyı zayıflatır. `WAVE_00`'da hazırlanan modüler CSS ve dataService bu dalgada ilk kez arayüze dönüştürülecektir.

## 4. Canonical Sources to Read

- `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (FCL-01, FCL-02)
- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md` (PR-BUS-01)
- `tech/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`

## 5. Dependencies

- `WAVE_00` tamamlanmış olmalıdır.

## 6. Scope

### In Scope
- Header / Top Navigation Bar (Logo metni / Marka adı, Disan yetkili servis vurucu ikincil rozet).
- Hero Section Kompozisyonu (`h1` başlık, alt açıklama metni, yetkili servis rozet kartı).
- Direct Contact CTA Butonları ("Hızlı İletişim / Arayın" ve "Hizmetlerimiz" kaydırma butonları).
- Mobile & Desktop responsive layout düzeni.

### Out of Scope
- Hizmet detay kartları (WAVE_02).
- İletişim formu backend'i, WhatsApp, Harita.
- Sahte adres, çalışma saatleri veya sertifika iddiaları.

## 7. Expected Result / Target Structure

```text
src/
├── ui/
│   ├── header.js
│   └── hero.js
└── styles/
    ├── header.css
    └── hero.css
```

## 8. Implementation Checklist

- [ ] **Task 1: Corporate Header & Brand Bar Component**
  - **Location / Responsibility**: `src/ui/header.js`, `src/styles/header.css`
  - **Parent Capability Relation**: implementation-of (Trakya Teknik Makine kurumsal marka karşılama)
  - **Dependencies**: `WAVE_00`
  - **Behavior**: `dataService.getCompanyInfo()` verisini kullanarak site tepesinde marka adını ve yetkili servis unvanını gösteren temiz, sabit/sticky kurumsal bar üretilmesi.
  - **Preserve / Must Not**: FCL dışı sahte navigasyon linkleri eklenmeyecek.
  - **Done Result**: Header bileşeninin `index.html` üzerinde hatasız render edilmesi.

- [ ] **Task 2: Disan Authorized Service Badge & Hero Layout**
  - **Location / Responsibility**: `src/ui/hero.js`, `src/styles/hero.css`
  - **Parent Capability Relation**: implementation-of (Disan Hidrolik Yetkili Servis rozet paneli)
  - **Dependencies**: Task 1
  - **Behavior**: `h1` seviyesinde Trakya Teknik Makine başlığı, belirgin Disan Hidrolik Makine Trakya Bölge Yetkili Servisi rozet paneli ve onaylı endüstriyel görsel yönün kurulması.
  - **FCL Boundary**: Metin kesinlikle FCL-01 ve FCL-02 ifadelerine sadık kalacak.
  - **Done Result**: Hero alanında Disan yetkili servis unvanının görsel olarak yüksek hiyerarşi ile sunulması.

- [ ] **Task 3: Hero Action CTAs & Smooth Scroll Connections**
  - **Location / Responsibility**: `src/ui/hero.js`
  - **Parent Capability Relation**: implementation-of (Hero CTA yönlendirmeleri)
  - **Dependencies**: Task 2
  - **Behavior**: Telefonla arama `tel:` bağlantısını ve Hizmetler bölümüne yumuşak kaydırma sağlanan CTA butonlarının aktif edilmesi.
  - **Preserve / Must Not**: Dokunma hedefleri mobilde en az 44x44px olacak.
  - **Done Result**: CTA butonlarına tıklandığında ilgili eylemin veya kaydırma hareketinin tetiklenmesi.

## 9. State / Role / Responsive Coverage

- **Desktop Layout**: 12-column grid üzerinde sol metin/rozet paneli, sağ endüstriyel teknik görsel kompozisyonu.
- **Mobile Layout**: Tek sütun stacked görünüm, hero başlığı ve butonlar üstte, rozet altında.
- **Focus & Keyboard**: CTA butonlarında turuncu focus ring (`#D97706`).

## 10. Automated Verification

- [ ] Static syntax & DOM render verification.
- [ ] Responsive breakpoint styles validation (`< 640px` and `> 1024px`).

## 11. Manual QA / Debug Verification

- [ ] İlk 5 saniye testinde Disan yetkili servis statüsünün açıkça anlaşıldığının teyit edilmesi.
- [ ] Mobil cihaz görünümünde CTA butonlarının kolayca dokunulabilirliğinin kontrolü.

## 12. Acceptance / Exit Criteria

- [x] Hero alanı Trakya Teknik Makine unvanını ve Disan yetkili servis statüsünü net sunuyor.
- [x] FCL-01 ve FCL-02 kısıtlarına tam uyuluyor, uydurma metin yok.
- [x] Desktop ve mobilde responsive görünüm satış kalitesinde.

## 13. Handoff / Stop Rule

- `WAVE_01` tamamlandıktan sonra `WAVE_02` (Core Services Presentation) sayfa akışında Hero'nun altına bağlanacaktır.

---

## Wave Result

- **Status**: Pending Execution
