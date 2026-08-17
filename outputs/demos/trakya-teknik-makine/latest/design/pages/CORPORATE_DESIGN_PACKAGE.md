# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Kurumsal Sayfa Design Package

- **Page ID**: `PAGE-002`
- **Page/Screen**: Kurumsal
- **Slug**: `corporate`
- **Approved Relation**: Child of Root
- **Route / Entry Context**: `/kurumsal` (Direct URL / Primary Navigation)
- **Amaç**: Trakya Teknik Makine kimliğini ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü kurumsal presentation olarak ayrı sayfada sunmak.

## 1. User Goal & Primary Actions

- **Kullanıcı Hedefleri**:
  - Firmanın kurumsal profilini, yetkili servis statüsünü ve kalite yaklaşımını incelemek.
  - Firmanın hangi bölgede (Trakya) ve ne tür bir disiplinle hizmet verdiğini öğrenmek.
- **Birincil Aksiyonlar**:
  - "Hizmetlerimizi Keşfedin" CTA → `/hizmetler` (`PAGE-003`)
  - "İletişime Geçin" CTA → `/iletisim` (`PAGE-007`)

## 2. Information Hierarchy

1. **Header Breadcrumb & Page Title**: `PAGE-002` Kurumsal sayfa başlığı ve alt başlığı.
2. **Corporate Identity Overview**: Trakya Teknik Makine tanımsal sunumu ve yetkili servis vurgusu.
3. **Authorized Service Profile**: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünün detaylı kurumsal açıklaması.
4. **Service Scope Summary**: 3 onaylı hizmet başlığının kurumsal bağlamdaki yeri.
5. **Factual Constraints Notice**: Tarihçe, ekip büyüklüğü, müşteri logosu veya sertifika uydurması yapılmaz; kaynak destekli gerçekler sunulur.

## 3. Layout & Section Breakdown

- **Page Hero Header**: Koyu antrasit zemin (`#0F141C`), sayfa başlığı ("Kurumsal Profil"), yetkili servis etiketi.
- **Main Corporate Content Section**: 2 sütunlu asimetrik yerleşim. Sol sütunda yetkili servis kimlik kartı, sağ sütunda firma prensipleri ve disiplini.
- **Authorized Capability Highlight**: Antrasit arka planlı teknik detay kutusu (`#161D2A` + `--border-subtle`).

## 4. Component Composition

- `Header` & `Footer` (`GLOBAL_SHELL`)
- `PageHeader` (Breadcrumb + Title)
- `CorporateDetailBlock`
- `AuthorizedStatusCard`
- `ContactCTASection`

## 5. States & Edge Cases

- **Loading**: Metin blokları için skeleton loader.
- **FCL Safety**: Factual allowlist dışına çıkan tarihçe veya kapasite iddiası yer almaz.

## 6. Responsive Behavior

- **Desktop (`> 1024px`)**: 2 sütunlu kurumsal profil sunumu.
- **Mobile (`< 640px`)**: Tek sütunlu dikey içerik akışı.

## 7. Accessibility / Keyboard / Focus

- Başlık hiyerarşisi (H1 Kurumsal -> H2 Yetkili Servis Statüsü).
- Tüm linkler klavye ile odaklanabilirdir.

## 8. Data & Integration Touchpoints

- Data Source: `src/services/dataAdapter.ts` -> `getCompanyInfo()`.

## 9. Acceptance Notes

- Sayfa `/kurumsal` URL'inde erişilebilirdir.
- Tarihçe, ekip, sertifika veya uydurma kapasite bilgisi bulunmaz.
