# Trakya Teknik Makine — Yedek Parça Temini Detay Design Package

- **Page ID**: `PAGE-004`
- **Page/Screen**: Yedek Parça Temini — Hizmet Detayı
- **Slug**: `yedek-parca-temini`
- **Approved Relation**: Detail Surface of PAGE-003 (Hizmetler Overview)
- **Route / Entry Context**: `/hizmetler/yedek-parca-temini` (Direct URL / Hizmetler Navigation Entry)
- **Amaç**: Approved `Yedek Parça Temini` hizmetini ayrı detay yüzeyinde odaklı biçimde sunmak.

## 1. Approved Capability Support

| Generated Capability | Exact Approved Support ID(s) | Exact Approved Support Meaning | Support Status | Executable Flag | Semantic Subset Result |
|---|---|---|---|---|---|
| Yedek Parça Temini detail page presentation & navigation | `SCP-005` | Yedek Parça Temini Detail (`PAGE-004`) presentation & navigation | `IN_SCOPE` | YES | PASS |
| Direct phone/email contact link triggers | `SCP-010` | Direct phone & email direct-contact capability | `IN_SCOPE` | YES | PASS |

- `UNSUPPORTED_PAGE_DESIGN_CAPABILITIES` = `[]` (empty)

## 2. User Goal & Primary Actions

- **User Goal**: Ziyaretçinin Trakya Teknik Makine'nin Yedek Parça Temini hizmetinin kapsamını ve yetkili servis güvencesini detaylı biçimde incelemesi.
- **Primary Actions**:
  - Diğer Hizmetleri İnceleyin (`/hizmetler` rotasına yönlendirir)
  - Doğrudan İletişime Geçin (`/iletisim` rotasına yönlendirir)

## 3. Information Hierarchy

1. **Page Header & Breadcrumb**: `Ana Sayfa > Hizmetler > Yedek Parça Temini`.
2. **Service Title & Badge**: "Yedek Parça Temini" başlığı ve Disan Yetkili Servis vurgusu.
3. **Focused Service Description**: Hizmetin endüstriyel makine yedek parça temini bağlamındaki odaklı sunumu.
4. **Service Scope Focus Cards**:
   - Makine ve Ekipman Yedek Parça Tedariği
   - Teknik Destek Uyumlu Parça Seçimi
   - Trakya Bölgesi Servis Bağlamı
5. **Direct Contact Action Block**: Telefon ve e-posta direct-contact bağlantıları.

## 4. Layout & Section Breakdown

- Sol odak paneli: Detaylı hizmet sunumu ve teknik kapsam kartları.
- Sağ bilgi paneli: İletişim bilgisi kartı ve "Hizmetler'e Dön" yönlendirme bağlantısı.

## 5. Component Composition

- `Header` (Global Shell)
- `Breadcrumb`
- `ServiceDetailHero`
- `ServiceScopeGrid`
- `ContactInfoSidebar`
- `Footer` (Global Shell)

## 6. States & Edge Cases

- **Constraint**: Orijinal parça garantisi, stok miktarı/arama, marka taahhüdü, sipariş formu, sepete ekleme veya teklif isteme KESİNLİKLE eklenemez. Factual content FCL (`FCL-003`) sınırında tutulur.

## 7. Responsive Behavior

- **Desktop (>= 1024px)**: 2 kolonlu layout (Sol detay + Sağ bilgi yan paneli).
- **Mobile (< 768px)**: Tek kolonlu dikey düzen.

## 8. Accessibility / Keyboard / Focus

- Başlık hiyerarşisi `<h1 className="page-title">`, `<h2 className="section-title">` olarak düzenlenmiştir.

## 9. Data & Integration Touchpoints

- Consumes: `servicesService.getServiceBySlug('yedek-parca-temini')` from `src/services/`.

## 10. Acceptance Notes

- Kısıt ihlali yapılmamıştır (stok/sipariş/garanti uydurulmamıştır).
- Form/submit etkileşimi barındırmaz.
