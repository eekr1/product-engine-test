# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Brand & Primary Entry / Hero Presentation

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_01` in `waves/WAVE_MAP.md`
- **Goal**: Header navigation, Trakya Teknik Makine marka alanı, Disan Hidrolik Trakya Bölge Yetkili Servisi unvanı duyurusu ve doğrudan iletişim CTA'larını içeren Hero alanının inşası.

## 1. Parent Wave Map Entry

- **Wave ID**: WAVE_01
- **Name**: Brand & Primary Entry / Hero Presentation
- **Parent Goal**: Header navigation, Trakya Teknik Makine marka alanı, Disan Hidrolik Trakya Bölge Yetkili Servisi unvanı duyurusu ve doğrudan iletişim CTA'larını içeren Hero alanının inşası.
- **Committed Capabilities**:
  - Navigation Header & Kurumsal Marka Kimliği | SCP-002 | Ana sayfa karşılama ve logo/marka alanı | PASS
  - Disan Hidrolik Trakya Bölge Yetkili Servisi Duyurusu | SCP-002 | Servis yetki unvanı vurgusu | PASS
  - Hero karşılama ve doğrudan telefon/e-posta CTA'ları | SCP-005 | Temel doğrudan iletişim CTA'ları | PASS

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability Atom | Relation | Result |
|---|---|---|---|
| Responsive Navigation Header bileşeni (`js/components/Header.js`) | Navigation Header & Kurumsal Marka Kimliği | implementation-of | PASS |
| Disan Hidrolik Yetkili Servisi Badge/Vurgu bileşeni | Disan Hidrolik Trakya Bölge Yetkili Servisi Duyurusu | implementation-of | PASS |
| Hero Karşılama Alanı (`js/components/Hero.js`) | Hero karşılama ve doğrudan telefon/e-posta CTA'ları | implementation-of | PASS |
| Doğrudan İletişim Telefon (`tel:`) & E-posta (`mailto:`) CTA Butonları | Hero karşılama ve doğrudan telefon/e-posta CTA'ları | detail-of | PASS |
| Header & Hero görsel/mobil uyum doğrulaması | Navigation Header & Kurumsal Marka Kimliği | verification-of | PASS |

## 3. Why This Wave / Dependency Rationale

`WAVE_01` kullanıcının siteye girdiğinde gördüğü ilk 5 saniye deneyimini yönetir. Firmanın unvanını ve Disan Hidrolik yetkili servis gücünü anında kavratmak için `WAVE_00` foundation üzerine kurulan ilk kullanıcı arayüzü dalgasıdır.

## 4. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `design/DESIGN_RULES.md`
- `waves/WAVE_MAP.md`
- `waves/plans/WAVE_00.md`

## 5. Dependencies

- `WAVE_00` (Foundation, CSS Design Tokens, `CompanyService`).

## 6. Scope

### In Scope
- Sticky Header Navigation (Logo, Marka İsmi, Hızlı Menü Bağlantıları).
- Disan Hidrolik Trakya Bölge Yetkili Servisi onaylı badge/duyuru alanı.
- Hero Karşılama Başlığı ("Trakya Bölgesinde Güvenilir Endüstriyel Makine & Hidrolik Servis Çözümleri").
- Doğrudan Telefon (`tel:`) ve E-posta (`mailto:`) CTA Butonları.
- Hero görsel kompozisyonu ve mikrografik amber vurgular.

### Out of Scope
- Hizmet detay kartları (WAVE_02).
- Kurumsal profil ve detaylı iletişim bölümü (WAVE_03).
- Form backend gönderim simülasyonu, Google Maps, WhatsApp widget'ı.

## 7. Expected Result / Target Structure

```text
working-output/
├── index.html
└── js/
    └── components/
        ├── Header.js
        └── Hero.js
```

## 8. Implementation Checklist

- [ ] `js/components/Header.js` modülünü yazarak Trakya Teknik Makine logosunu/marka ismini ve navigasyon bağlantılarını render et (`SCP-002`).
- [ ] Header bileşenine Disan Hidrolik Trakya Bölge Yetkili Servisi rozetini (badge) ekle (`FCL-002`, `SCP-002`).
- [ ] `js/components/Hero.js` modülünü oluşturarak ana sayfa karşılama başlığını, spot açıklamayı ve görsel yüzeyi kur (`SCP-002`).
- [ ] Hero bileşeni içine belirgin renk kontrastına (`#FFB800`) sahip doğrudan telefon (`tel:`) ve e-posta (`mailto:`) CTA butonlarını ekle (`SCP-005`).
- [ ] Header ve Hero bileşenlerini `CompanyService` katmanından firma unvanı ve iletişim verilerini okuyacak şekilde bağla (`SCP-006`).
- [ ] Mobil ekranlarda (375px+) Header ve Hero alanlarının taşma yapmadan dikey düzende kusursuz göründüğünü doğrula (`PR-UX-01`).

## 9. State / Role / Responsive Coverage

- **Normal State**: Hero alanı marka başlığını, yetkili servis rozetini ve CTA butonlarını tam kontrastla gösterir.
- **Hover State**: CTA butonlarında 200ms `ease-in-out` amber parlama ve mikro yükselme gerçekleşir.
- **Mobile Responsive**: Header kompakt hale gelir, Hero başlığı 28px-32px font boyutuna ölçeklenir, CTA butonları dikey dizilir.

## 10. Automated Verification

- Component Render Check: `Header.js` ve `Hero.js` bileşenlerinin DOM'a hatasız yerleştiğini kontrol et.
- Link Protocol Check: Telefon butonunun `href="tel:..."` ve e-posta butonunun `href="mailto:..."` özniteliklerini doğru taşıdığını doğrula.

## 11. Manual QA / Debug Verification

- Masaüstü ve mobil ekranlarda Hero alanının ilk yüklemede ilk viewport içine sığdığı doğrulanmalıdır.
- Disan Hidrolik yetkili servis unvanının açıkça görünür olduğu kontrol edilmelidir.

## 12. Acceptance / Exit Criteria

- [ ] Header ve Hero bileşenleri responsive olarak tamamlandı.
- [ ] Disan Hidrolik Trakya Bölge Yetkili Servisi statüsü ilk bakışta net biçimde anlaşılıyor.
- [ ] Telefon ve e-posta CTA'ları masaüstü ve mobilde doğru protokolle tetikleniyor.

## 13. Handoff / Stop Rule

`WAVE_01` tamamlandığında, `WAVE_02` (Services & Technical Capability Presentation) geliştirmesine geçmek için görünür başlangıç yüzeyi hazır teslim edilir.

---
## Wave Result

- **Result**: Pending Execution (Pre-execution state)
