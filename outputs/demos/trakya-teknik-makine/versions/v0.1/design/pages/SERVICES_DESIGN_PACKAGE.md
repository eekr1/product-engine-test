# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Hizmetler Overview Design Package

- **Page ID**: `PAGE-003`
- **Page/Screen**: Hizmetler (Overview)
- **Slug**: `services`
- **Approved Relation**: Child of Root
- **Route / Entry Context**: `/hizmetler` (Direct URL / Primary Navigation)
- **Amaç**: Üç approved hizmeti overview/discovery architecture içinde sunmak ve her birinin ayrı detail sayfasına yönlendirmek.

## 1. User Goal & Primary Actions

- **Kullanıcı Hedefleri**:
  - Trakya Teknik Makine'nin sunduğu 3 approved hizmeti topluca incelemek.
  - İhtiyaç duyduğu hizmetin detayına geçiş yapmak.
- **Birincil Aksiyonlar**:
  - "Yedek Parça Temini Detay" → `/hizmetler/yedek-parca-temini` (`PAGE-004`)
  - "Yerinde Teknik Destek Detay" → `/hizmetler/yerinde-teknik-destek` (`PAGE-005`)
  - "Makine Bakım ve Onarım Detay" → `/hizmetler/makine-bakim-onarim` (`PAGE-006`)

## 2. Information Hierarchy

1. **Page Header**: Hizmetler Genel Bakış başlığı ve açıklama.
2. **Approved Services List Grid**: 3 approved hizmet için genişletilmiş keşif kartları:
   - Hizmet 1: Yedek Parça Temini
   - Hizmet 2: Yerinde Teknik Destek
   - Hizmet 3: Makine Bakım ve Onarım
3. **Service Discovery Flow Guidance**: Keşif rehberliği ve detay yönlendirme aksiyonları.

## 3. Layout & Section Breakdown

- **Page Hero**: Hizmetler başlığı ve Disan Hidrolik Yetkili Servis bağlamı.
- **Services Feature Cards Section**: Her bir onaylı hizmet için büyük sunum kartı, görsel teknik vurgu, kapsam özeti ve "Detaylı Sayfaya Git" butonu.

## 4. Component Composition

- `Header` & `Footer` (`GLOBAL_SHELL`)
- `PageHeader`
- `ServiceDiscoveryCard` (3 adet)
- `ContactCTASection`

## 5. States & Edge Cases

- Hizmet kartları tıklanabilir ve ilgili `/hizmetler/<slug>` detay rotasına yönlendirir.

## 6. Responsive Behavior

- **Desktop (`> 1024px`)**: 3 sütunlu veya genişletilmiş kart düzeni.
- **Mobile (`< 640px`)**: Tek sütunlu dikey liste.

## 7. Accessibility / Keyboard / Focus

- Kart butonlarında açık ARIA etiketleri ve klavye odağı.

## 8. Data & Integration Touchpoints

- Data Source: `src/services/dataAdapter.ts` -> `getServices()`.

## 9. Acceptance Notes

- Sayfa `/hizmetler` URL'inde erişilebilirdir.
- 3 onaylı hizmetin tümü görünür ve kendi detay sayfalarına yönlendirir.
