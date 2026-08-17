# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Yerinde Teknik Destek Detay Design Package

- **Page ID**: `PAGE-005`
- **Page/Screen**: Yerinde Teknik Destek — Hizmet Detayı
- **Slug**: `service-detail-onsite-support`
- **Approved Relation**: Detail of `PAGE-003` (Hizmetler)
- **Route / Entry Context**: `/hizmetler/yerinde-teknik-destek` (Direct URL / Service Link)
- **Amaç**: Approved `Yerinde Teknik Destek` hizmetini ayrı odaklı detail presentation yüzeyinde sunmak.

## 1. User Goal & Primary Actions

- **Kullanıcı Hedefleri**:
  - Trakya bölgesindeki işletmeler için sunulan yerinde teknik destek hizmet disiplinini incelemek.
  - Sahada teknik müdahale yaklaşımını ve yetkili servis güvencesini değerlendirmek.
  - Destek talebi için iletişim kanalına ulaşmak.
- **Birincil Aksiyonlar**:
  - "Teknik Destek Talebi" CTA → `/iletisim` (`PAGE-007`)
  - "Diğer Hizmetlerimiz" Subnav → `PAGE-004`, `PAGE-006`

## 2. Information Hierarchy

1. **Breadcrumb**: Ana Sayfa > Hizmetler > Yerinde Teknik Destek
2. **Service Detail Hero**: Hizmet başlığı ("Yerinde Teknik Destek"), teknik etiket (`SRV-002`), özet.
3. **Onsite Service Philosophy**: Sahada teknik arıza teşhisi ve destek yaklaşımı sunumu.
4. **FCL Allowlist Boundaries**: Mobil araç filosu sayısı, 7/24 acil müdahale garantisi veya SLA/müdahale süresi eklenemez; kaynak destekli genel yerinde destek sunumu yapılır.
5. **Cross-Service Navigation**: Diğer hizmet detaylarına hızlı geçiş.

## 3. Layout & Section Breakdown

- **Detail Hero**: Antrasit zemin, amber aksan vurguları.
- **Service Process & Approach**: Yerinde müdahale disiplini ve Disan Hidrolik yetkili servis vurgusu.

## 4. Component Composition

- `Header` & `Footer` (`GLOBAL_SHELL`)
- `ServiceDetailHeader`
- `ServiceContentBlock`
- `OtherServicesSubnav`
- `ContactCTASection`

## 5. States & Edge Cases

- **FCL Safety**: Mobil araç sayısı, garanti edilen varış süresi (SLA) ifadeleri kesinlikle yer almaz.

## 6. Responsive Behavior

- **Desktop & Mobile**: Responsive odaklı tek/çift sütunlu okuma düzeni.

## 7. Accessibility / Keyboard / Focus

- Klavye odağı ve semantik HTML.

## 8. Data & Integration Touchpoints

- Data Source: `src/services/dataAdapter.ts` -> `getServiceById('onsite-support')`.

## 9. Acceptance Notes

- Sayfa `/hizmetler/yerinde-teknik-destek` rotasında ayrık bir sayfa olarak çalışır.
