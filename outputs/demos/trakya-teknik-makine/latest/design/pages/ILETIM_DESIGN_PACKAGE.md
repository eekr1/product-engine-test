# Trakya Teknik Makine — İletişim Sayfası Design Package

- **Page ID**: `PAGE-007`
- **Page/Screen**: İletişim
- **Slug**: `iletisim`
- **Approved Relation**: Standalone Surface under Home Navigation
- **Route / Entry Context**: `/iletisim` (Direct URL / Navigation Entry)
- **Amaç**: Direct-contact iletişim kanallarını (telefon ve e-posta) ayrı sayfada sunmak.

## 1. Approved Capability Support

| Generated Capability | Exact Approved Support ID(s) | Exact Approved Support Meaning | Support Status | Executable Flag | Semantic Subset Result |
|---|---|---|---|---|---|
| Contact page presentation & navigation | `SCP-008` | İletişim (`PAGE-007`, `/iletisim`) presentation & navigation | `IN_SCOPE` | YES | PASS |
| Direct phone contact link (`tel:`) trigger | `SCP-010` | Direct phone & email direct-contact capability | `IN_SCOPE` | YES | PASS |
| Direct email contact link (`mailto:`) trigger | `SCP-010` | Direct phone & email direct-contact capability | `IN_SCOPE` | YES | PASS |

- `UNSUPPORTED_PAGE_DESIGN_CAPABILITIES` = `[]` (empty)

> [!IMPORTANT]
> **Explicit Capability Boundary Guard**:
> İletişim sayfasının varlığı veya telefon/e-posta direct-contact capability'si aşağıdakileri KESİNLİKLE AUTHORIZE ETMEDİĞİ için tasarım paketinde bu ögeler tamamen engellenmiştir:
> - Contact form / demo form
> - Input fields (isim, e-posta, mesaj alanı)
> - Submit / send behavior veya butonu
> - Form success / error state'leri veya mesaj iletildi bildirimi
> - Canlı / statik harita entegrasyonu
> - WhatsApp entegrasyonu / ikonu
> - Booking / teklif isteme akışı

## 2. User Goal & Primary Actions

- **User Goal**: Ziyaretçinin Trakya Teknik Makine yetkililerine doğrudan telefon veya e-posta yoluyla ulaşabileceği direct-contact kanallarını görmesi ve tek tıkla arama/e-posta uygulamasını başlatması.
- **Primary Actions**:
  - Doğrudan Telefon Et (`tel:` bağlantısı tetikler)
  - Doğrudan E-Posta Gönder (`mailto:` bağlantısı tetikler)
  - Hizmetlerimizi İnceleyin (`/hizmetler` rotasına yönlendirir)

## 3. Information Hierarchy

1. **Page Header & Breadcrumb**: `Ana Sayfa > İletişim`.
2. **Direct Contact Overview**: Doğrudan iletişim kanalları sunumu ve yetkili servis ulaşılabilirlik vurgusu.
3. **Direct Contact Channel Cards**:
   - Telefon İletişim Kartı (Doğrudan `tel:` CTA butonu ile)
   - E-posta İletişim Kartı (Doğrudan `mailto:` CTA butonu ile)
   - Bölge & Servis Bilgisi Kartı (Trakya bölgesi yetkili servis bağlamı)
4. **Services Navigation Callout**: Hizmetler sayfasına yönlendirme paneli.

## 4. Layout & Section Breakdown

- 2 kolonlu şık antrasit kart düzeni:
  - Sol kart: Telefon ile Doğrudan İletişim kartı (büyük ikon, telefon numarası ve "Hemen Ara" bağlantısı).
  - Sağ kart: E-posta ile Doğrudan İletişim kartı (büyük ikon, e-posta adresi ve "E-Posta Gönder" bağlantısı).
- Alt alan: Trakya bölgesi yetkili servis faaliyet özeti.

## 5. Component Composition

- `Header` (Global Shell)
- `Breadcrumb`
- `ContactHeader`
- `DirectPhoneContactCard`
- `DirectEmailContactCard`
- `RegionalServiceContextCard`
- `Footer` (Global Shell)

## 6. States & Edge Cases

- **Exact Values Behavior**: Exact telefon veya e-posta açık metni source truth olarak sağlandığında render edilir; uydurma fake numara gösterilmez.
- **Form / Submit Absense Guard**: Sayfada hiçbir form input alanı, mesaj kutusu veya submit düğmesi yer almaz.

## 7. Responsive Behavior

- **Desktop (>= 1024px)**: 2 kolonlu yan yana iletişim kartları.
- **Mobile (< 768px)**: Tek kolonlu dikey düzen; telefon ikonlu arama butonu dokunma dostu (min 48px height).

## 8. Accessibility / Keyboard / Focus

- Direct contact butonları klavyeyle odaklanabilir (`outline: 2px solid #F59E0B`) ve screen-reader dostudur.

## 9. Data & Integration Touchpoints

- Consumes: `companyService.getContactDetails()` from `src/services/`.

## 10. Acceptance Notes

- Negative test tamamen başarılıdır (form, submit, harita, WhatsApp, randevu bulunmaz).
- Direct contact `tel:` ve `mailto:` sınırları korunmuştur.
