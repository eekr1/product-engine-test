# Trakya Teknik Makine — Makine Bakım ve Onarım Detay Design Package

- **Page ID**: `PAGE-006`
- **Page/Screen**: Makine Bakım ve Onarım — Hizmet Detayı
- **Slug**: `makine-bakim-onarim`
- **Approved Relation**: Detail Surface of PAGE-003 (Hizmetler Overview)
- **Route / Entry Context**: `/hizmetler/makine-bakim-onarim` (Direct URL / Hizmetler Navigation Entry)
- **Amaç**: Approved `Makine Bakım ve Onarım` hizmetini ayrı detay yüzeyinde odaklı biçimde sunmak.

## 1. Approved Capability Support

| Generated Capability | Exact Approved Support ID(s) | Exact Approved Support Meaning | Support Status | Executable Flag | Semantic Subset Result |
|---|---|---|---|---|---|
| Makine Bakım ve Onarım detail page presentation & navigation | `SCP-007` | Makine Bakım ve Onarım Detail (`PAGE-006`) presentation & navigation | `IN_SCOPE` | YES | PASS |
| Direct phone/email contact link triggers | `SCP-010` | Direct phone & email direct-contact capability | `IN_SCOPE` | YES | PASS |

- `UNSUPPORTED_PAGE_DESIGN_CAPABILITIES` = `[]` (empty)

## 2. User Goal & Primary Actions

- **User Goal**: Ziyaretçinin endüstriyel makine bakım ve onarım hizmetinin detaylarını ve yetkili servis güvencesini incelemesi.
- **Primary Actions**:
  - Diğer Hizmetleri İnceleyin (`/hizmetler` rotasına yönlendirir)
  - Doğrudan İletişime Geçin (`/iletisim` rotasına yönlendirir)

## 3. Information Hierarchy

1. **Page Header & Breadcrumb**: `Ana Sayfa > Hizmetler > Makine Bakım ve Onarım`.
2. **Service Title & Badge**: "Makine Bakım ve Onarım" başlığı ve Disan Yetkili Servis vurgusu.
3. **Focused Service Description**: Makine ekipmanlarının teknik bakım ve onarımına yönelik hizmet sunumu.
4. **Service Scope Focus Cards**:
   - Endüstriyel Makine Bakımı
   - Arıza Tespiti ve Teknik Onarım
   - Yetkili Servis Standartları ile Müdahale
5. **Direct Contact Action Block**: İletişim bilgisi kartı.

## 4. Layout & Section Breakdown

- Sol dikey detay paneli; sağ tarafta kurumsal yetkili servis vurgusu ve iletişim bağlantıları.

## 5. Component Composition

- `Header` (Global Shell)
- `Breadcrumb`
- `ServiceDetailHero`
- `ServiceScopeGrid`
- `ContactInfoSidebar`
- `Footer` (Global Shell)

## 6. States & Edge Cases

- **Constraint**: Periyodik bakım takvimi, revizyon garantisi, hidrolik pres uzmanlığı iddiaları veya bakım randevusu alma formu KESİNLİKLE eklenemez. Content FCL (`FCL-005`) sınırında tutulur.

## 7. Responsive Behavior

- **Desktop (>= 1024px)**: 2 kolonlu layout.
- **Mobile (< 768px)**: Tek kolonlu dikey düzen.

## 8. Accessibility / Keyboard / Focus

- Klavyeyle tam odaklanılabilir linkler ve semantic HTML yapısı.

## 9. Data & Integration Touchpoints

- Consumes: `servicesService.getServiceBySlug('makine-bakim-onarim')` from `src/services/`.

## 10. Acceptance Notes

- Periyodik bakım takvimi, revizyon veya hidrolik pres iddiası uydurulmamıştır.
- Form/randevu etkileşimi barındırmaz.
