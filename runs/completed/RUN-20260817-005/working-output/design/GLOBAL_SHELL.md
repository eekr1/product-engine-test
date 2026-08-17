# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Global Shell

## 1. Global Layout Shell

- **Shell Yapısı**: Masaüstü ve mobil ekranlarda `<Header />` üst sabit/yarı-sabit alan, `<main />` dinamik içerik alanı ve `<Footer />` alt bilgi alanı olarak kurgulanmıştır.
- **Max Width Container**: Sayfa içerikleri maksimum `1280px` genişliğinde tutulur ve ortalanır (`margin: 0 auto; padding: 0 24px;`).
- **Z-Index Layering**:
  - Main Content: `z-index: 1`
  - Sticky Header: `z-index: 100`
  - Mobile Navigation Drawer Backdrop: `z-index: 200`
  - Mobile Navigation Drawer Content: `z-index: 201`

## 2. Approved Navigation Registry

`NAVIGATION_PAGE_SET == APPROVED_PAGE_SET` (7/7 pages present):

| Page ID | Navigation Label | Route Identity | Position in Navigation |
|---|---|---|---|
| `PAGE-001` | Ana Sayfa | `/` | Header Left Brand + Main Nav |
| `PAGE-002` | Kurumsal | `/kurumsal` | Main Nav Item 1 |
| `PAGE-003` | Hizmetler | `/hizmetler` | Main Nav Item 2 (Dropdown/Direct) |
| `PAGE-004` | Yedek Parça Temini | `/hizmetler/yedek-parca-temini` | Services Sub-nav / Direct |
| `PAGE-005` | Yerinde Teknik Destek | `/hizmetler/yerinde-teknik-destek` | Services Sub-nav / Direct |
| `PAGE-006` | Makine Bakım ve Onarım | `/hizmetler/makine-bakim-onarim` | Services Sub-nav / Direct |
| `PAGE-007` | İletişim | `/iletisim` | Main Nav Item 3 + Header Contact CTA |

## 3. Navigation Architecture

- **Desktop Header**: Sol tarafta marka logosu + Disan Yetkili Servis rozeti; merkezde Kurumsal, Hizmetler (hover menü ile 3 alt detay sayfası) ve İletişim rotaları; sağ tarafta direct-contact telefon hızlı erişim bağlantısı.
- **Mobile Header & Drawer**: Ekran genişliği < 768px olduğunda navigasyon hamburger menü ikonuna dönüşür. Tıklandığında sağdan açılan tam boy koyu drawer içinde 7 onaylı sayfa net hiyerarşiyle listelenir.
- **Footer Navigation**: Footer alt alanında Kurumsal, Hizmetler ve İletişim sütunları altında 7 sayfanın tamamı direct link olarak yer alır. Unapproved link eklenmez.

## 4. Main Content Constraints

- Main içerik alanı `<main className="site-main">` etiketinde yer alır ve min-height `calc(100vh - 350px)` tutularak kısa sayfalarda footer'ın havada kalması önlenir.

## 5. Responsive Shell Behavior

- **>= 1024px**: Tam masaüstü navigasyonu açık. Header yüksekliği `80px`.
- **768px - 1023px**: Menü öğeleri arasında spacing daraltılır.
- **< 768px**: Header yüksekliği `64px`. Hamburger menü aktif. Mobil menü açıldığında arka plan kaydırması kilitlenir (`overflow: hidden`).

## 6. Global Overlay / Layering Rules

- Sadece mobile navigation drawer overlay'i ve standart bildirim alanları global layering kullanır.
- Kapsam dışı olduğu için iletişim formu popup'ı veya randevu alma modal'ı KESİNLİKLE barındırmaz.
