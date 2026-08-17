# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Global Shell

## 1. Global Layout Shell

Uygulamanın ekran yapısı `Header`, `Main Content` ve `Footer` olmak üzere 3 ana bileşenden oluşur.

```text
+-----------------------------------------------------------------------+
| [HEADER] Brand Logo | Statü Badge | Global Navigation | Quick Contact |
+-----------------------------------------------------------------------+
|                                                                       |
| [MAIN CONTENT] Routable Active View (PAGE-001 .. PAGE-007)            |
|                                                                       |
+-----------------------------------------------------------------------+
| [FOOTER] Corporate Info | Service Links | Contact Info | Copyright    |
+-----------------------------------------------------------------------+
```

- **Header Height**: `80px` fixed/sticky desktop, `64px` mobile (`backdrop-filter: blur(12px)` + `--bg-app` %90 opaklık).
- **Max Page Width**: `1280px` centered (`margin: 0 auto`, horizontal padding `24px` desktop, `16px` mobile).

## 2. Approved Navigation Registry

| Navigation Item | Page ID | Target Route | Purpose | Render Location |
|---|---|---|---|---|
| Ana Sayfa | PAGE-001 | `/` | Ana Sayfa | Primary Nav Header, Mobile Drawer, Footer |
| Kurumsal | PAGE-002 | `/kurumsal` | Kurumsal Bilgiler | Primary Nav Header, Mobile Drawer, Footer |
| Hizmetler | PAGE-003 | `/hizmetler` | Hizmetler Overview | Primary Nav Header, Mobile Drawer, Footer |
| Yedek Parça Temini | PAGE-004 | `/hizmetler/yedek-parca-temini` | Hizmet Detay 1 | Hizmetler Dropdown/Subnav, Service Cards, Footer |
| Yerinde Teknik Destek | PAGE-005 | `/hizmetler/yerinde-teknik-destek` | Hizmet Detay 2 | Hizmetler Dropdown/Subnav, Service Cards, Footer |
| Makine Bakım ve Onarım | PAGE-006 | `/hizmetler/makine-bakim-onarim` | Hizmet Detay 3 | Hizmetler Dropdown/Subnav, Service Cards, Footer |
| İletişim | PAGE-007 | `/iletisim` | İletişim Kanalı | Primary Nav Header, Mobile Drawer, Footer, Header Action |

`NAVIGATION_PAGE_SET == APPROVED_PAGE_SET` (`{"PAGE-001", "PAGE-002", "PAGE-003", "PAGE-004", "PAGE-005", "PAGE-006", "PAGE-007"}`). Distinct pages anchor section linklerine collapse edilemez.

## 3. Navigation Architecture

- **Primary Desktop Header Nav**: Ana Sayfa (`PAGE-001`), Kurumsal (`PAGE-002`), Hizmetler (`PAGE-003` - Hover dropdown veya tıklama ile 3 detay sayfasına erişim), İletişim (`PAGE-007`).
- **Service Detail Sub-Navigation**: Hizmet detay sayfalarında (`PAGE-004`, `PAGE-005`, `PAGE-006`) diğer hizmet detaylarına hızlı geçiş sağlayan sol/sağ teknik subnav sekmesi.
- **Footer Navigation**: Kurumsal linkler, 3 approved hizmetin doğrudan sayfalarına linkler ve İletişim yönlendirmesi.

## 4. Main Content Constraints

- `Main Content` alanı route durumuna göre aktif `PAGE-XXX` görünümünü render eder.
- Minimum ekran yüksekliği: `min-height: calc(100vh - 80px - 280px)` (Footer ve Header haricinde dikey boşluk kalmaması için).

## 5. Responsive Shell Behavior

- **Desktop (`> 1024px`)**: Header yatay link düzeninde görünür. "Disan Hidrolik Trakya Bölge Yetkili Servisi" badge'i görünür durumdadır.
- **Tablet & Mobile (`< 1024px`)**: Header içinde sağ tarafta hamburger menü ikonu belirir. Hamburger tıklamasıyla sağdan açılan `Mobile Navigation Drawer` aktif olur.
- **Mobile Navigation Drawer**: 7 sayfanın tamamı hiyerarşik biçimde (Hizmetler başlığı altında 3 detay sayfası girintili olarak) sunulur.

## 6. Global Overlay / Layering Rules

- `Z-INDEX-HEADER`: `100`
- `Z-INDEX-MOBILE-DRAWER`: `200`
- `Z-INDEX-MODAL-OVERLAY`: `300`
- `Z-INDEX-TOAST-NOTIFICATION`: `400`
