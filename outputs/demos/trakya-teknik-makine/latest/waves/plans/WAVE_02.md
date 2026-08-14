# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_02: Services Presentation

- **Status**: Pending Execution
- **Goal**: 3 Temel Hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel olarak güçlü ve dinamik servis entegrasyonlu kartlar halinde sunmak.

## 1. Why This Wave / Dependency Rationale
Firmanın ticari faaliyetlerinin çekirdeği sunduğu teknik hizmetlerdir. Ziyaretçi firmanın ne iş yaptığını detaylı olarak inceleyebilmeli ve teknik servis kalitesini hissedebilmelidir.

## 2. Canonical Sources to Read
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [SOURCE_REGISTER.md](../../SOURCE_REGISTER.md)

## 3. Dependencies
- `WAVE_01` (Primary Entry & Header Navbar)

## 4. Scope

### Scope References
- `SCP-001`: Responsive Frontend Demo
- `SCP-004`: 3 Temel Hizmet (Yedek Parça, Yerinde Destek, Bakım-Onarım) Sunumu
- `SCP-006`: Integration-ready Service/Data Boundary Yapısı

### In Scope
- Services Section düzeni ve başlığı.
- 3 Hizmet Kartı:
  1. Yedek Parça Temini (`FCL-003`)
  2. Yerinde Teknik Destek (`FCL-004`)
  3. Makine Bakım ve Onarım (`FCL-005`)
- Kartların `companyService.getServices()` metodundan dinamik çekilmesi ve render edilmesi.
- Kart mikro-etkileşimleri (hover elevation, accent border glow).

### Out of Scope
- Sahte 7/24 garanti veya doğrulanmamış hizmet iddiaları (`PRD-02`, `VAL-13`).
- E-Ticaret yedek parça sipariş sepeti (`CON-02`).

## 5. Expected Result / Target Structure
- `Services` Section (3 sütunlu grid, mobilde 1 dikey sütun).
- `ServiceCard` bileşenleri (SVG teknik ikon, hizmet adı, açıklama ve teknik kapsam).

## 6. Implementation Checklist

- [ ] **Task 1 (Services Grid Layout)**: Services bölümü HTML ve CSS ızgara yapısının kurulması. (Scope Ref: `SCP-004`)
- [ ] **Task 2 (Service Cards Rendering)**: `companyService.getServices()` verileriyle 3 temel hizmet kartının dinamik render edilmesi. (Scope Ref: `SCP-004`, FCL: `FCL-003`, `FCL-004`, `FCL-005`)
- [ ] **Task 3 (Card Interactions)**: CSS mikro-etkileşimlerin (`transform: translateY(-4px)`, border glow) eklenmesi. (Scope Ref: `SCP-001`)

## 7. State / Role / Responsive Coverage
- **State**: Servis verisi yükleme ve render durumu.
- **Responsive**: Masaüstünde 3 sütun, tablet 2 sütun, mobil 1 sütun.

## 8. Automated Verification
- JS Data Check: Render edilen kart sayısı tam olarak 3 olmalıdır.

## 9. Manual QA / Debug Verification
- Hizmet başlıkları ve açıklamaları `FCL-003`, `FCL-004`, `FCL-005` ile birebir eşleşmelidir.

## 10. Acceptance / Exit Criteria
- [ ] 3 temel hizmet açık ve yüksek görsel hiyerarşiyle sunulmaktadır.
- [ ] Veri doğrudan HTML'e gömülmemiş, `companyService` üzerinden aktarılmıştır.

## 11. Handoff / Stop Rule
`WAVE_02` tamamlandıktan sonra `WAVE_03` (Contact & Conversion) başlatılabilir.

---
## Wave Result
*Status*: Pending Execution
