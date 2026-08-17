# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Makine Bakım ve Onarım Detay Design Package

- **Page ID**: `PAGE-006`
- **Page/Screen**: Makine Bakım ve Onarım — Hizmet Detayı
- **Slug**: `service-detail-maintenance-repair`
- **Approved Relation**: Detail of `PAGE-003` (Hizmetler)
- **Route / Entry Context**: `/hizmetler/makine-bakim-onarim` (Direct URL / Service Link)
- **Amaç**: Approved `Makine Bakım ve Onarım` hizmetini ayrı odaklı detail presentation yüzeyinde sunmak.

## 1. User Goal & Primary Actions

- **Kullanıcı Hedefleri**:
  - Makine bakım ve onarım hizmetinin kapsamını ve teknik yaklaşımını incelemek.
  - Trakya bölgesi endüstriyel makine servis disiplinini ve Disan Hidrolik yetkili servis güvencesini değerlendirmek.
  - İletişim kanalına geçerek bakım/onarım talebi bildirmek.
- **Birincil Aksiyonlar**:
  - "Bakım/Onarım Talebi" CTA → `/iletisim` (`PAGE-007`)
  - "Diğer Hizmetlerimiz" Subnav → `PAGE-004`, `PAGE-005`

## 2. Information Hierarchy

1. **Breadcrumb**: Ana Sayfa > Hizmetler > Makine Bakım ve Onarım
2. **Service Detail Hero**: Hizmet başlığı ("Makine Bakım ve Onarım"), teknik etiket (`SRV-003`), özet.
3. **Maintenance Disciplinary Scope**: Bakım ve onarım hizmet disiplininin genel sunumu.
4. **FCL Allowlist Boundaries**: Periyodik bakım paketi fiyatlandırması, revizyon garantisi veya spesifik hidrolik pres/subsystem uzmanlık iddiaları eklenemez.
5. **Cross-Service Navigation**: Diğer 2 approved hizmet detayına hızlı geçiş.

## 3. Layout & Section Breakdown

- **Detail Hero**: Antrasit zemin, amber aksan vurguları.
- **Maintenance Scope Section**: Bakım ve onarım hizmet yaklaşımı ve teknik disiplin sunumu.

## 4. Component Composition

- `Header` & `Footer` (`GLOBAL_SHELL`)
- `ServiceDetailHeader`
- `ServiceContentBlock`
- `OtherServicesSubnav`
- `ContactCTASection`

## 5. States & Edge Cases

- **FCL Safety**: Spesifik makine türü uzmanlığı veya revizyon garantisi ifadeleri kesinlikle yer almaz.

## 6. Responsive Behavior

- **Desktop & Mobile**: Responsive odaklı okunabilir düzen.

## 7. Accessibility / Keyboard / Focus

- Semantik hiyerarşi ve görünür focus ring.

## 8. Data & Integration Touchpoints

- Data Source: `src/services/dataAdapter.ts` -> `getServiceById('maintenance-repair')`.

## 9. Acceptance Notes

- Sayfa `/hizmetler/makine-bakim-onarim` rotasında ayrık bir sayfa olarak çalışır.
