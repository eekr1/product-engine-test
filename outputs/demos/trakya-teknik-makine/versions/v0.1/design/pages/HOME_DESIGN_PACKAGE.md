# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Ana Sayfa Design Package

- **Page ID**: `PAGE-001`
- **Page/Screen**: Ana Sayfa
- **Slug**: `home`
- **Approved Relation**: Root Page
- **Route / Entry Context**: `/` (Direct URL / Primary Entry Point)
- **Amaç**: Firma kimliğini (Trakya Teknik Makine), yetkili servis statüsünü (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi), approved 3 hizmet overview'ını ve site içi keşif yollarını güçlü giriş deneyiminde sunmak.

## 1. User Goal & Primary Actions

- **Kullanıcı Hedefleri**:
  - Trakya Teknik Makine'nin kim olduğunu ve faaliyet alanını hızlıca anlamak.
  - Yetkili servis statüsünü ve Trakya bölgesindeki hizmet bağlamını doğrulamak.
  - Approved 3 temel hizmeti görmek ve ilgilendiği hizmet detayına hızlıca geçebilmek.
  - Doğrudan iletişim kanalına ulaşmak.
- **Birincil Aksiyonlar**:
  - "Hizmetlerimizi İnceleyin" CTA → `/hizmetler` (`PAGE-003`)
  - "İletişime Geçin" CTA → `/iletisim` (`PAGE-007`)
  - Hizmet Kartları tıklandığında ilgili detay sayfasına yönlendirme (`PAGE-004`, `PAGE-005`, `PAGE-006`).

## 2. Information Hierarchy

1. **Hero Banner**: Firma Adı, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi vurgusu, teknik spot metin ve CTA butonları.
2. **Authorized Service Highlight Bar**: Yetkili servis statüsünün ve Trakya bölgesindeki hizmet bağlamının dikey badge bandı.
3. **Approved Services Grid**: 3 approved hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) özet tanıtım kartları ve detay linkleri.
4. **Corporate Trust & Capability Summary**: Kurumsal güven ve teknik uzmanlık yaklaşımı özeti (fCL kısıtlarına tam uyumlu).
5. **Contact Banner & Action**: İletişim sayfasına yönlendiren koyu antrasit çağrı bloğu.

## 3. Layout & Section Breakdown

- **Hero Section**: Koyu antrasit zemin (`#0F141C`), sol tarafta `PAGE-001` ve `AUTHORIZES SERVICE` badge'leri, büyük H1 başlığı (`Trakya Teknik Makine`), alt başlık ("Disan Hidrolik Makine Trakya Bölge Yetkili Servisi"), çift CTA buton grubu.
- **Services Grid Section**: 3 sütunlu grid yapısı (mobile: 1 sütun). Her kartta hizmet adı, ikon, kısa açıklama ve "Detaylı İncele →" linki.
- **Corporate Summary Section**: Asimetrik 2 sütunlu düzen. Sol tarafta teknik visual motif, sağ tarafta firma uzmanlık yaklaşımı açıklaması.
- **Contact Action Section**: Full-width amber vurgulu son çağrı bandı.

## 4. Component Composition

- `Header` & `Footer` (`GLOBAL_SHELL`)
- `HeroBanner` component
- `AuthorizedBadge` component
- `ServiceOverviewCard` component (3 adet)
- `CorporateSummaryBlock` component
- `ContactCTASection` component

## 5. States & Edge Cases

- **Loading**: Hero ve Hizmet kartlarında skeleton loader.
- **Hover**: Hizmet kartlarında amber border glow ve `translateY(-4px)` kalkış hareketi.

## 6. Responsive Behavior

- **Desktop (`> 1024px`)**: 3 sütunlu hizmet kartları grid'i, geniş hero görsel/teknik alanı.
- **Tablet (`640px - 1024px`)**: 2 sütunlu hizmet grid'i.
- **Mobile (`< 640px`)**: Tek sütunlu dikey hizmet kartları akışı, full-width butonlar.

## 7. Accessibility / Keyboard / Focus

- Kartlar ve CTA butonlarında klavye odaklanması için `--focus-ring` aktif.
- H1 -> H2 başlık hiyerarşisi tam uygulanmıştır.

## 8. Data & Integration Touchpoints

- Data Source: `src/services/dataAdapter.ts` -> `getCompanyInfo()`, `getServices()`.
- Mock content: `src/services/mockData.ts`.

## 9. Acceptance Notes

- Disan Hidrolik Makine Yetkili Servis statüsü belirgindir.
- 3 approved hizmet kartının her biri ilgili detay rotasına yönlendirir.
- Kaynak dışı garanti, stok veya SLA iddiası yer almaz.
