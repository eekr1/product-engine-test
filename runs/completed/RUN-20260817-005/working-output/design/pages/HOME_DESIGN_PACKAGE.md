# Trakya Teknik Makine — Ana Sayfa Design Package

- **Page ID**: `PAGE-001`
- **Page/Screen**: Ana Sayfa
- **Slug**: `home`
- **Approved Relation**: Root Surface under Home Navigation
- **Route / Entry Context**: `/` (Direct URL / Main Entry Point)
- **Amaç**: Firma kimliğini, Disan yetkili servis statüsünü, 3 onaylı hizmet özetini ve site içi keşif yollarını ana giriş yüzeyinde sunmak.

## 1. Approved Capability Support

| Generated Capability | Exact Approved Support ID(s) | Exact Approved Support Meaning | Support Status | Executable Flag | Semantic Subset Result |
|---|---|---|---|---|---|
| Main entry surface presentation & navigation | `SCP-002` | Ana Sayfa (`PAGE-001`, `/`) presentation & navigation | `IN_SCOPE` | YES | PASS |
| Disan Yetkili Servis badge presentation | `SCP-009` | Disan Hidrolik Makine Trakya Bölge Yetkili Servisi status presentation | `IN_SCOPE` | YES | PASS |
| 3 Services overview presentation & detail navigation links | `SCP-004` | Hizmetler Overview (`PAGE-003`, `/hizmetler`) presentation & navigation | `IN_SCOPE` | YES | PASS |
| Direct phone/email contact link triggers | `SCP-010` | Direct phone & email direct-contact capability | `IN_SCOPE` | YES | PASS |

- `UNSUPPORTED_PAGE_DESIGN_CAPABILITIES` = `[]` (empty)

## 2. User Goal & Primary Actions

- **User Goal**: Ziyaretçinin Trakya Teknik Makine'nin kim olduğunu, ne iş yaptığını, yetkili servis statüsünü ve hizmet alanlarını 5 saniye içinde anlaması.
- **Primary Actions**:
  - Hizmetlerimizi İnceleyin (`/hizmetler` rotasına yönlendirir)
  - Hizmet Detayına Git (`/hizmetler/yedek-parca-temini`, `/hizmetler/yerinde-teknik-destek`, `/hizmetler/makine-bakim-onarim` rotalarına yönlendirir)
  - Doğrudan İletişim (`/iletisim` rotasına yönlendirir)

## 3. Information Hierarchy

1. **Hero Section**: Ana başlık, Disan Trakya Bölge Yetkili Servisi rozeti, özet sunum ve eylem butonları.
2. **Authority Badge Strip**: Disan Hidrolik Yetkili Servis statüsü ve Trakya bölgesi endüstriyel servis vurgusu.
3. **Services Overview Grid**: 3 onaylı hizmetin kartlar halinde özeti ve detay bağlantıları.
4. **Corporate Capability Highlight**: Trakya Teknik Makine kurumsal uzmanlık vurgusu ve Kurumsal sayfaya yönlendirme.
5. **Direct Contact Callout**: İletişim sayfasına veya doğrudan telefon/e-posta bağlantısına yönlendirme paneli.

## 4. Layout & Section Breakdown

- **Hero Banner**: Koyu antrasit zemin üzerine amber aksan çizgileri, teknik başlık ve ikili CTA butonu.
- **Service Cards Grid**: 3 eşit kolonlu layout; her kart hizmet adı, özeti ve "Detayı İncele →" linki taşır.
- **Trust Section**: Disan yetkili servis statüsünü vurgulayan antrasit bilgi paneli.

## 5. Component Composition

- `Header` (Global Shell)
- `HeroSection`
- `AuthorityBadge`
- `ServiceCard` (3 adet)
- `CorporatePreviewCard`
- `ContactCalloutPanel`
- `Footer` (Global Shell)

## 6. States & Edge Cases

- **Normal State**: Tüm görseller ve fixture verisi yüklü.
- **Loading State**: Service adapter veri getirirken skeleton loader görünür.
- **Mobile View**: Service kartları tek kolona dizilir.

## 7. Responsive Behavior

- **Desktop (>= 1024px)**: 3 kolonlu hizmet kartları grid düzeni.
- **Mobile (< 768px)**: Ekipler dikey sıralanır, hero başlık font boyutu 32px'e ayarlanır.

## 8. Accessibility / Keyboard / Focus

- Tab tuşu ile tüm CTA butonlarına ve kart linklerine sırayla odaklanılır (`outline: 2px solid #F59E0B`).

## 9. Data & Integration Touchpoints

- Consumes: `companyService.getCompanyInfo()`, `servicesService.getAllServices()` from `src/services/`.

## 10. Acceptance Notes

- Ekran üzerinde iletişim formu, submit butonu, harita veya WhatsApp ikonu yer almaz.
- Approved 3 hizmet dışında hizmet kartı gösterilmez.
