# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_02: Core Corporate Pages

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_02` in `waves/WAVE_MAP.md`
- **Goal**: Ana Sayfa (`PAGE-001`), Kurumsal Sayfa (`PAGE-002`) ve İletişim Sayfası (`PAGE-007`) arayüzlerini dondurulan tasarım sözleşmelerine tam uyumla geliştirmek.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_02
Wave Name: Core Corporate Pages
Committed Capabilities: CAP-020, CAP-021, CAP-022
Covered Page IDs: PAGE-001, PAGE-002, PAGE-007
Target Delivery State: Core Pages Executed
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Ana Sayfa Implementation | `CAP-020` (Ana Sayfa Hero, Hizmet Overview Grid ve CTA) | implementation-of | PASS |
| Kurumsal Sayfa Implementation | `CAP-021` (Kurumsal Sayfa Profil ve Yetkili Servis Sunumu) | implementation-of | PASS |
| İletişim Sayfası Implementation | `CAP-022` (İletişim Sayfası Kanallar ve Demo Form) | implementation-of | PASS |

## 3. Parent Page Coverage

| Plan Page ID | Parent Covered Page ID | Route/Surface Responsibility | Result |
|---|---|---|---|
| PAGE-001 | PAGE-001 | `/` (Ana Sayfa Görünümü) | PASS |
| PAGE-002 | PAGE-002 | `/kurumsal` (Kurumsal Görünüm) | PASS |
| PAGE-007 | PAGE-007 | `/iletisim` (İletişim Görünümü) | PASS |

`PLAN_PAGE_SET == PARENT_COVERED_PAGE_SET`.

## 4. Why This Wave / Dependency Rationale

`WAVE_01` ile kurulan layout shell ve router yapısı üzerine firmanın temel kurumsal omurgasını oluşturan Ana Sayfa, Kurumsal ve İletişim sayfalarını yerleştirir. Bu sayfalar firmanın kimliğini ve servis statüsünü doğrulayan birincil giriş yüzeyleridir.

## 5. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `design/DESIGN_SYSTEM.md`
- `design/pages/HOME_DESIGN_PACKAGE.md` (`PAGE-001`)
- `design/pages/CORPORATE_DESIGN_PACKAGE.md` (`PAGE-002`)
- `design/pages/CONTACT_DESIGN_PACKAGE.md` (`PAGE-007`)

## 6. Dependencies

- `WAVE_01` (Global Shell & Navigation System).

## 7. Scope

### In Scope
- `src/pages/HomePage.tsx` (`PAGE-001` Hero, Authorized Badge, Hizmet Özet Kartları, Kurumsal Özet, İletişim CTA).
- `src/pages/CorporatePage.tsx` (`PAGE-002` Kurumsal Profil, Yetkili Servis Tanımı, Kalite Disiplini).
- `src/pages/ContactPage.tsx` (`PAGE-007` Doğrulanmış İletişim Kanalları, Demo Mesaj Formu, Submit Onayı).
- `src/components/common/` (HeroBanner, AuthorizedBadge, ServiceCard, ContactForm UI primitives).

### Out of Scope
- Hizmet detay sayfalarının geliştirilmesi (`WAVE_03`).
- FCL dışı uydurma marka, stok, garanti veya adres bilgisi eklenmesi.

## 8. Expected Result / Target Structure

```text
src/
├── pages/
│   ├── HomePage.tsx                     (PAGE-001)
│   ├── CorporatePage.tsx                (PAGE-002)
│   └── ContactPage.tsx                  (PAGE-007)
└── components/
    ├── home/
    │   ├── HeroBanner.tsx
    │   └── ServiceOverviewGrid.tsx
    ├── corporate/
    │   └── CorporateDetailBlock.tsx
    └── contact/
        └── DemoContactForm.tsx
```

## 9. Implementation Checklist

- [ ] **Task 2.1: Ana Sayfa (`PAGE-001`) Implementation**
  - Location: `src/pages/HomePage.tsx`, `HOME_DESIGN_PACKAGE.md`
  - Parent Capability: `CAP-020`
  - Parent Page Identity: `PAGE-001`
  - Implementation: `HOME_DESIGN_PACKAGE.md` dondurulan tasarım sözleşmesine tam uygun şekilde Hero Banner, Disan Hidrolik Yetkili Servis Badge'i, 3 approved hizmet için özet tanıtım kartları (`PAGE-004`, `PAGE-005`, `PAGE-006` detay linkli) ve İletişim yönlendirme alanının kodlanması.
  - Verification: `/` rotasında 3 hizmet kartı ilgili detay linklerine geçmeli. FCL dışı garanti/stok iddiası yer almamalı.

- [ ] **Task 2.2: Kurumsal Sayfa (`PAGE-002`) Implementation**
  - Location: `src/pages/CorporatePage.tsx`, `CORPORATE_DESIGN_PACKAGE.md`
  - Parent Capability: `CAP-021`
  - Parent Page Identity: `PAGE-002`
  - Implementation: `CORPORATE_DESIGN_PACKAGE.md` uyarınca Trakya Teknik Makine tanımsal sunumu ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü vurgulayan kurumsal profil sayfasının kodlanması.
  - Verification: `/kurumsal` rotasında tarihçe, ekip büyüklüğü, sertifika veya uydurma kapasite bilgisi bulunmamalı.

- [ ] **Task 2.3: İletişim Sayfası (`PAGE-007`) Implementation**
  - Location: `src/pages/ContactPage.tsx`, `CONTACT_DESIGN_PACKAGE.md`
  - Parent Capability: `CAP-022`
  - Parent Page Identity: `PAGE-007`
  - Implementation: `CONTACT_DESIGN_PACKAGE.md` uyarınca kurumsal iletişim kartının (tel/eposta placeholder), Trakya bölgesi servis bağlamının ve frontend-only demo iletişim formunun kodlanması. Form gönderildiğinde demo onay state'inin gösterilmesi.
  - Verification: `/iletisim` rotasında form submit basıldığında demo onay mesajı çıkmalı, backend gönderimi veya uydurma adres yapılmamalı.

## 10. State / Role / Responsive Coverage

- **Form States**: İletişim formunda `Normal`, `Submitting` (spinner), `Success` (demo onay paneli) durumları.
- **Responsive Layout**: Desktop'ta 3 sütunlu grid, mobile'da tek sütunlu dikey okuma sırası.

## 11. Automated Verification

- `npm run build`: `HomePage`, `CorporatePage`, `ContactPage` bileşenlerinin hatasız derlenmesi.

## 12. Manual QA / Debug Verification

- `/`, `/kurumsal`, `/iletisim` rotaları ziyaret edilerek görsel hiyerarşi ve FCL allowlist uyumu kontrol edilir.
- İletişim formunda mesaj gönderim simülasyonu test edilir.

## 13. Acceptance / Exit Criteria

- [ ] `PAGE-001`, `PAGE-002` ve `PAGE-007` sayfaları hatasız derlenmekte ve çalışmaktadır.
- [ ] Kaynak dışı hiçbir uydurma iddia (stok, garanti, SLA, adres) bulunmamaktadır.
- [ ] Sayfalar responsive ve WCAG AA kontrast standartlarına uygundur.

## 14. Handoff / Stop Rule

- `WAVE_02` tamamlandıktan sonra `ai/CURRENT_STATUS.md` güncellenir ve `WAVE_03` (Services Overview & Details) başlatılır.

---
## Wave Result

`Status: Pending Execution` (Pre-execution planning phase completed).
