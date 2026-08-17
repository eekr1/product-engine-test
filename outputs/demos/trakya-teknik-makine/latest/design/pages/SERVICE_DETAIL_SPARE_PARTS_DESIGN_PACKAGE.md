# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Yedek Parça Temini Detay Design Package

- **Page ID**: `PAGE-004`
- **Page/Screen**: Yedek Parça Temini — Hizmet Detayı
- **Slug**: `service-detail-spare-parts`
- **Approved Relation**: Detail of `PAGE-003` (Hizmetler)
- **Route / Entry Context**: `/hizmetler/yedek-parca-temini` (Direct URL / Service Link)
- **Amaç**: Approved `Yedek Parça Temini` hizmetini ayrı odaklı detail presentation yüzeyinde sunmak.

## 1. User Goal & Primary Actions

- **Kullanıcı Hedefleri**:
  - Yedek Parça Temini hizmetinin kapsamını ve kurumsal tedarik disiplinini incelemek.
  - Trakya bölgesi ve Disan Hidrolik yetkili servis bağlamındaki parça temini süreçlerini anlamak.
  - İletişim kanalına geçerek parça talebinde bulunmak.
- **Birincil Aksiyonlar**:
  - "Parça Talebi İletişimi" CTA → `/iletisim` (`PAGE-007`)
  - "Diğer Hizmetlerimiz" Subnav → `PAGE-005`, `PAGE-006`

## 2. Information Hierarchy

1. **Breadcrumb**: Ana Sayfa > Hizmetler > Yedek Parça Temini
2. **Service Detail Hero**: Hizmet başlığı ("Yedek Parça Temini"), teknik kod etiketi (`SRV-001`), kısa özet.
3. **Core Scope Presentation**: Yedek parça temini hizmet disiplininin detaylı sunumu.
4. **FCL Allowlist Boundaries**: Stok tutma garantisi, orijinal parça sertifikası veya marka listesi uydurulmaz; kaynak destekli genel tedarik sunumu yapılır.
5. **Cross-Service Navigation**: Diğer 2 approved hizmet detayına hızlı geçiş kartları.

## 3. Layout & Section Breakdown

- **Detail Hero**: Antrasit koyu zemin (`#0F141C`), amber accent rozet, hizmet adı.
- **Content & Features Section**: Sol sütunda hizmet detay açıklamaları, sağ sütunda yetkili servis parça temini avantajları (FCL sınırında).
- **Other Services Sub-Navigation**: Sayfa altında diğer 2 hizmetin link kartları.

## 4. Component Composition

- `Header` & `Footer` (`GLOBAL_SHELL`)
- `ServiceDetailHeader`
- `ServiceContentBlock`
- `OtherServicesSubnav`
- `ContactCTASection`

## 5. States & Edge Cases

- **FCL Safety**: Stokta teslim, belirli marka parça listesi veya orijinal parça garantisi ifadeleri kesinlikle yer almaz.

## 6. Responsive Behavior

- **Desktop (`> 1024px`)**: 2 sütunlu odaklanmış detay düzeni.
- **Mobile (`< 640px`)**: Dikey sıralı okuma düzeni.

## 7. Accessibility / Keyboard / Focus

- Temiz başlık hiyerarşisi ve klavye odağı.

## 8. Data & Integration Touchpoints

- Data Source: `src/services/dataAdapter.ts` -> `getServiceById('spare-parts')`.

## 9. Acceptance Notes

- Sayfa `/hizmetler/yedek-parca-temini` rotasında ayrık bir sayfa olarak çalışır.
- Kart büyütmesi veya akordeon sekmesi şeklinde tasarlanmamıştır.
