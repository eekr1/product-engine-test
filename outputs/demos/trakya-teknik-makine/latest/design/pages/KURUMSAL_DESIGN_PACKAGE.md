# Trakya Teknik Makine — Kurumsal Sayfası Design Package

- **Page ID**: `PAGE-002`
- **Page/Screen**: Kurumsal
- **Slug**: `kurumsal`
- **Approved Relation**: Standalone Surface under Home Navigation
- **Route / Entry Context**: `/kurumsal` (Direct URL / Navigation Entry)
- **Amaç**: Trakya Teknik Makine kurumsal kimliğini ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ayrı sayfada sunmak.

## 1. Approved Capability Support

| Generated Capability | Exact Approved Support ID(s) | Exact Approved Support Meaning | Support Status | Executable Flag | Semantic Subset Result |
|---|---|---|---|---|---|
| Corporate page presentation & navigation | `SCP-003` | Kurumsal (`PAGE-002`, `/kurumsal`) presentation & navigation | `IN_SCOPE` | YES | PASS |
| Disan Yetkili Servis presentation | `SCP-009` | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi status presentation | `IN_SCOPE` | YES | PASS |

- `UNSUPPORTED_PAGE_DESIGN_CAPABILITIES` = `[]` (empty)

## 2. User Goal & Primary Actions

- **User Goal**: Ziyaretçinin firmanın kurumsal duruşunu, Disan yetkili servis güvencesini ve Trakya bölgesindeki teknik servis odaklılığını değerlendirmesi.
- **Primary Actions**:
  - Hizmetlerimizi İnceleyin (`/hizmetler` rotasına yönlendirir)
  - İletişime Geçin (`/iletisim` rotasına yönlendirir)

## 3. Information Hierarchy

1. **Page Header**: "Kurumsal" sayfa başlığı, breadcrumb (`Ana Sayfa > Kurumsal`).
2. **Company Overview**: Trakya Teknik Makine genel kurumsal tanıtımı ve faaliyet bağlamı.
3. **Authorized Service Highlight Panel**: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü açıklaması ve yetkili servis güvencesi.
4. **Service Scope Summary**: Üç temel hizmet alanına yönlendirme ve teknik disiplin vurgusu.
5. **Direct Navigation Panel**: Hizmetler ve İletişim sayfalarına geçiş bağlantıları.

## 4. Layout & Section Breakdown

- Sol tarafta geniş kurumsal tanıtım metin alanı; sağ tarafta teknik yetkili servis bilgi rozet paneli.
- Alt kısımda 3 onaylı hizmet alanını temsil eden dikey 3 vurgu bloğu.

## 5. Component Composition

- `Header` (Global Shell)
- `Breadcrumb`
- `CorporateIntroSection`
- `AuthorizedServiceBadgePanel`
- `ServicePillarsOverview`
- `Footer` (Global Shell)

## 6. States & Edge Cases

- Factual Constraint: Tarihçe, çalışan sayısı, sertifika listesi, müşteri logosu veya uydurma iddialar eklenebilir durumda KESİNLİKLE gösterilmez.

## 7. Responsive Behavior

- **Desktop (>= 1024px)**: 2 kolonlu (Sol içerik + Sağ yetkili servis kartı) layout.
- **Mobile (< 768px)**: Tek kolonlu dikey akış.

## 8. Accessibility / Keyboard / Focus

- Başlıklar `<h1 className="page-title">`, `<h2 className="section-title">` hiyerarşisinde düzenlenmiştir.

## 9. Data & Integration Touchpoints

- Consumes: `companyService.getCompanyDetails()` from `src/services/`.

## 10. Acceptance Notes

- Source-backed olmayan tarihçe, sertifika veya referans bilgisi bulunmaz.
- Form, harita veya mesaj alanı barındırmaz.
