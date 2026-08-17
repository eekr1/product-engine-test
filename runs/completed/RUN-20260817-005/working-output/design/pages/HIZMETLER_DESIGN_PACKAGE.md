# Trakya Teknik Makine — Hizmetler Overview Design Package

- **Page ID**: `PAGE-003`
- **Page/Screen**: Hizmetler
- **Slug**: `hizmetler`
- **Approved Relation**: Standalone Overview Surface under Home Navigation
- **Route / Entry Context**: `/hizmetler` (Direct URL / Navigation Entry)
- **Amaç**: 3 onaylı hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) overview/discovery mimarisi içinde sunmak ve ilgili detay sayfalarına yönlendirmek.

## 1. Approved Capability Support

| Generated Capability | Exact Approved Support ID(s) | Exact Approved Support Meaning | Support Status | Executable Flag | Semantic Subset Result |
|---|---|---|---|---|---|
| Services overview page presentation & navigation | `SCP-004` | Hizmetler Overview (`PAGE-003`, `/hizmetler`) presentation & navigation | `IN_SCOPE` | YES | PASS |
| Navigation to Yedek Parça Detail | `SCP-005` | Yedek Parça Temini Detail (`PAGE-004`) presentation & navigation | `IN_SCOPE` | YES | PASS |
| Navigation to Yerinde Destek Detail | `SCP-006` | Yerinde Teknik Destek Detail (`PAGE-005`) presentation & navigation | `IN_SCOPE` | YES | PASS |
| Navigation to Makine Bakım Detail | `SCP-007` | Makine Bakım ve Onarım Detail (`PAGE-006`) presentation & navigation | `IN_SCOPE` | YES | PASS |

- `UNSUPPORTED_PAGE_DESIGN_CAPABILITIES` = `[]` (empty)

## 2. User Goal & Primary Actions

- **User Goal**: Ziyaretçinin sunulan 3 temel hizmet alanını topluca görmesi ve ilgilendiği hizmetin özel detay sayfasına geçiş yapması.
- **Primary Actions**:
  - Yedek Parça Temini Detayını İncele (`/hizmetler/yedek-parca-temini`)
  - Yerinde Teknik Destek Detayını İncele (`/hizmetler/yerinde-teknik-destek`)
  - Makine Bakım ve Onarım Detayını İncele (`/hizmetler/makine-bakim-onarim`)

## 3. Information Hierarchy

1. **Page Header**: "Hizmetlerimiz" başlığı, breadcrumb (`Ana Sayfa > Hizmetler`).
2. **Overview Intro**: Trakya Teknik Makine'nin endüstriyel makine servis yaklaşımının kısa tanıtımı.
3. **Services Discovery Cards Grid**: 3 onaylı hizmet için zengin kartlar:
   - Kart 1: Yedek Parça Temini + Özet + Detay Butonu (`PAGE-004` linki)
   - Kart 2: Yerinde Teknik Destek + Özet + Detay Butonu (`PAGE-005` linki)
   - Kart 3: Makine Bakım ve Onarım + Özet + Detay Butonu (`PAGE-006` linki)
4. **Direct Contact CTA Panel**: İletişim sayfasına yönlendirme.

## 4. Layout & Section Breakdown

- 3 dikey zengin geniş kart bloğu; her kart sol tarafta hizmet ikonu ve başlığı, sağ tarafta kapsam özeti ve amber renk "Detaylı İncele →" eylem butonunu barındırır.

## 5. Component Composition

- `Header` (Global Shell)
- `Breadcrumb`
- `ServicesHeader`
- `ServiceOverviewCard` (3 adet)
- `Footer` (Global Shell)

## 6. States & Edge Cases

- **Constraint**: Arama çubuğu, hizmet filtreleme, sıralama veya teklif alma formu KESİNLİKLE eklenemez. Yalnızca 3 onaylı hizmet keşif kartı olarak gösterilir.

## 7. Responsive Behavior

- **Desktop (>= 1024px)**: Dikey 3 geniş kart yapısı.
- **Mobile (< 768px)**: Mobil uyumlu dikey sıkıştırılmış kartlar.

## 8. Accessibility / Keyboard / Focus

- Her kart içindeki "Detaylı İncele" linki klavyeyle odaklanabilir ve ekran okuyucu için hizmet adını açıkça belirtir.

## 9. Data & Integration Touchpoints

- Consumes: `servicesService.getAllServices()` from `src/services/`.

## 10. Acceptance Notes

- Onaylı 3 hizmet dışında hizmet card'ı bulunmaz.
- Arama/filtreleme arayüzü barındırmaz.
