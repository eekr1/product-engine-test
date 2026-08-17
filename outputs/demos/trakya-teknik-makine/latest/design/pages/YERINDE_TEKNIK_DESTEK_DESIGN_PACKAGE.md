# Trakya Teknik Makine — Yerinde Teknik Destek Detay Design Package

- **Page ID**: `PAGE-005`
- **Page/Screen**: Yerinde Teknik Destek — Hizmet Detayı
- **Slug**: `yerinde-teknik-destek`
- **Approved Relation**: Detail Surface of PAGE-003 (Hizmetler Overview)
- **Route / Entry Context**: `/hizmetler/yerinde-teknik-destek` (Direct URL / Hizmetler Navigation Entry)
- **Amaç**: Approved `Yerinde Teknik Destek` hizmetini ayrı detay yüzeyinde odaklı biçimde sunmak.

## 1. Approved Capability Support

| Generated Capability | Exact Approved Support ID(s) | Exact Approved Support Meaning | Support Status | Executable Flag | Semantic Subset Result |
|---|---|---|---|---|---|
| Yerinde Teknik Destek detail page presentation & navigation | `SCP-006` | Yerinde Teknik Destek Detail (`PAGE-005`) presentation & navigation | `IN_SCOPE` | YES | PASS |
| Direct phone/email contact link triggers | `SCP-010` | Direct phone & email direct-contact capability | `IN_SCOPE` | YES | PASS |

- `UNSUPPORTED_PAGE_DESIGN_CAPABILITIES` = `[]` (empty)

## 2. User Goal & Primary Actions

- **User Goal**: Ziyaretçinin Trakya bölgesindeki işletmeler için sunulan yerinde teknik destek hizmetinin kapsamını incelemesi.
- **Primary Actions**:
  - Diğer Hizmetleri İnceleyin (`/hizmetler` rotasına yönlendirir)
  - Doğrudan İletişime Geçin (`/iletisim` rotasına yönlendirir)

## 3. Information Hierarchy

1. **Page Header & Breadcrumb**: `Ana Sayfa > Hizmetler > Yerinde Teknik Destek`.
2. **Service Title & Badge**: "Yerinde Teknik Destek" başlığı ve Disan Yetkili Servis vurgusu.
3. **Focused Service Description**: İşletmelerin sahadaki makine arıza, bakım ve destek ihtiyaçlarına yönelik yerinde servis yaklaşımının sunumu.
4. **Service Scope Focus Cards**:
   - Trakya Bölgesi Yerinde Destek Bağlamı
   - Makine Arıza & Teknik İnceleme Desteği
   - Yetkili Servis Disiplini ve Güvencesi
5. **Direct Contact Action Block**: İletişim bilgisi kartı.

## 4. Layout & Section Breakdown

- Sol dikey detay akışı; sağ tarafta hızlı erişim iletişim bağlantıları ve servis rozet paneli.

## 5. Component Composition

- `Header` (Global Shell)
- `Breadcrumb`
- `ServiceDetailHero`
- `ServiceScopeGrid`
- `ContactInfoSidebar`
- `Footer` (Global Shell)

## 6. States & Edge Cases

- **Constraint**: Mobil gezici filo, 7/24 acil müdahale süresi, garanti SLA süresi veya servis çağırma/randevu formu KESİNLİKLE eklenemez. Content FCL (`FCL-004`) ile sınırlıdır.

## 7. Responsive Behavior

- **Desktop (>= 1024px)**: 2 kolonlu layout.
- **Mobile (< 768px)**: Tek kolonlu dikey düzen.

## 8. Accessibility / Keyboard / Focus

- Erişilebilir başlık yapısı ve klavyeyle navigasyon desteği.

## 9. Data & Integration Touchpoints

- Consumes: `servicesService.getServiceBySlug('yerinde-teknik-destek')` from `src/services/`.

## 10. Acceptance Notes

- Mobil filo, acil müdahale süresi veya SLA uydurması içermez.
- Form/randevu etkileşimi barındırmaz.
