# Fanas — Tasarım Kuralları

> Bu belgede tanımlanan CSS token sistemi ve görsel kurallar React + Vite projesi için geçerlidir. Stiller `src/styles/` altındaki vanilla CSS dosyalarında uygulanır; CSS-in-JS veya Tailwind kullanılmaz.

---

## Görsel Yön

Tasarım; koyu, endüstriyel ve premium hissettiren, güçlü görsel ağırlıklı bir yön izler. Fanas'ın teknik ve profesyonel kimliğini yansıtır. Eski katalog sitesi görünümünden ve açık renkli genel kurumsal site şablonlarından tamamen uzak durulur.

**Tasarımın karakteri:**
- Güçlü, endüstriyel, premium
- Koyu zeminler — siyah ve antrasit ağırlıklı
- Görsel ağırlıklı — büyük ürün ve referans görselleri baskın
- Temiz hiyerarşi — kullanıcı kaybolmaz
- Turkuaz accent — marka imzası olarak kontrollü kullanılır
- Metalik detaylar — endüstriyel hissiyatı pekiştirir

---

## Renk Sistemi

```css
:root {
  /* Zemin renkleri */
  --color-bg-primary:    #0A0C0F;  /* Ana sayfa zemini — siyah */
  --color-bg-secondary:  #111418;  /* İkinci katman — koyu antrasit */
  --color-bg-elevated:   #181C22;  /* Kart ve yükseltilmiş yüzeyler */
  --color-bg-subtle:     #1E2228;  /* Hafif ayrımlı yüzeyler */

  /* İçerik yüzeyleri (açık bölümler için) */
  --color-surface:       #F4F5F7;  /* Açık bölüm zemini */
  --color-surface-card:  #FFFFFF;  /* Açık kart yüzeyi */
  --color-border:        #2A2F38;  /* Koyu zemin kenarlıkları */
  --color-border-light:  #E2E6ED;  /* Açık zemin kenarlıkları */

  /* Marka renkleri */
  --color-accent:        #00BCD4;  /* Fanas turkuazı — ana accent */
  --color-accent-dark:   #0097A7;  /* Hover ve koyu varyant */
  --color-accent-subtle: rgba(0, 188, 212, 0.10); /* Hafif accent bg */

  /* Metin renkleri — koyu zemin */
  --color-text-primary:  #F0F2F5;  /* Ana başlık ve metin — koyu zeminde */
  --color-text-secondary:#A8B0BC;  /* İkincil metin — koyu zeminde */
  --color-text-muted:    #6B7585;  /* Üçüncül metin, placeholder */

  /* Metin renkleri — açık zemin */
  --color-text-dark:     #1A1F2E;  /* Ana metin — açık zeminde */
  --color-text-dark-muted: #6B7280; /* İkincil — açık zeminde */

  /* Metalik tonlar */
  --color-metal-light:   #8D9BAD;  /* Metalik vurgu */
  --color-metal-dark:    #3A424F;  /* Metalik sınır */

  /* Durum renkleri */
  --color-success:       #22C55E;
  --color-warning:       #F59E0B;
  --color-error:         #EF4444;
}
```

**Kritik kurallar:**
- Turkuaz (`--color-accent`) yalnızca butonlar, aktif durumlar, bağlantı hover'ları ve küçük vurgu öğelerinde kullanılır
- Turkuaz hiçbir zaman büyük yüzey rengi olarak kullanılmaz — arka plan, hero zemini, kart arka planı yasaktır
- Açık (`--color-surface`) ve koyu (`--color-bg-primary`) bölümler bilinçli ritimle dönüşümlü kullanılır
- Demo boyunca renk paleti dışına çıkılmaz

---

## Tipografi

```css
:root {
  --font-heading: 'Outfit', sans-serif;
  --font-body:    'Inter', sans-serif;
}
```

Google Fonts'tan yüklenir: `Outfit` (600, 700, 800) + `Inter` (400, 500, 600).

### Ölçek

| Token | Boyut | Kullanım |
|---|---|---|
| `--text-xs` | 12px | Badge, label, caption |
| `--text-sm` | 14px | İkincil metin, meta |
| `--text-base` | 16px | Gövde metni |
| `--text-lg` | 18px | Büyük gövde, kart açıklaması |
| `--text-xl` | 20px | Alt bölüm başlığı |
| `--text-2xl` | 24px | Bölüm başlığı (mobile) |
| `--text-3xl` | 30px | Sayfa başlığı (mobile) |
| `--text-4xl` | 36px | Bölüm başlığı (desktop) |
| `--text-5xl` | 48px | Hero başlık (desktop) |
| `--text-6xl` | 60px | Büyük hero başlık |

**Kural:** `Outfit` yalnızca h1–h4 başlıklarda kullanılır. Gövde ve UI metni `Inter`.

---

## Spacing Sistemi

4px tabanlı sistem:

```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
}
```

**Bölümler arası boşluk:** `--space-20` (80px) mobilde, `--space-24` (96px) masaüstünde.

---

## Container Genişlikleri

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-5);   /* 20px yanlarda */
}

@media (min-width: 768px) {
  .container { padding: 0 var(--space-8); }   /* 32px */
}

@media (min-width: 1280px) {
  .container { padding: 0 var(--space-10); }  /* 40px */
}
```

Tam genişlik bölümler (hero, CTA banner, karanlık bölüm arka planları) container içermez; iç metin container içinde kalır.

---

## Grid Kuralları

```css
/* Ürün, hizmet ve referans kartları — 3 sütun (masaüstü) */
.card-grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .card-grid { grid-template-columns: repeat(3, 1fr); }
}

/* 2 sütunlu detay düzeni */
.detail-layout {
  display: grid;
  gap: var(--space-10);
  grid-template-columns: 1fr;
}

@media (min-width: 1024px) {
  .detail-layout { grid-template-columns: 2fr 1fr; }
}
```

---

## Header Kuralları

- Pozisyon: `sticky`, sayfa yukarısında sabit kalır
- Arka plan: `--color-bg-primary` / `rgba(10,12,15,0.95)` — koyu, blur efektiyle desteklenebilir
- Logo: Sol taraf, maksimum yükseklik 44px
- Navigasyon: Ortada veya sağda, `Inter 500` ile, `--color-text-secondary` rengiyle
- Sağda: Telefon veya "Teklif Al" CTA butonu (turkuaz outline veya solid)
- Mobil: Hamburger ikonu, tam ekran veya drawer menü
- Aktif route: `NavLink` ile `nav-link--active` class, turkuaz renkte belirtilir
- Kaydırma sonrası: Hafif arka plan koyulaşması ve/veya `box-shadow` eklenir
- Alt kenarlık: `1px solid var(--color-border)`

---

## Footer Kuralları

- Arka plan: `--color-bg-secondary` — koyu antrasit
- Üst kenarlık: `1px solid var(--color-border)`
- Metin: `--color-text-secondary` (ana), `--color-text-muted` (ikincil)
- 4 sütun düzeni (masaüstü): Logo+açıklama | Hızlı bağlantılar | Ürün kategorileri | İletişim
- Mobilde tek sütun, yeterli boşluk
- Alt çizgi: Telif hakkı, yıl, minimal bölücü
- Logo: Footer için açık/beyaz versiyon
- Sosyal medya ikonları: Küçük, metalik tonda

---

## Hero Kuralları

- Tam genişlik, tam ekran yüksekliği (`100vh`) veya minimum 620px
- Arka plan: Büyük endüstriyel görsel, üzerine koyu gradyan overlay
- Gradyan: `linear-gradient(to right, rgba(10,12,15,0.90) 40%, rgba(10,12,15,0.40) 100%)`
- Metin sol tarafta, dikey ortalı
- Başlık: `Outfit 700–800`, `--text-5xl` / `--text-6xl`, `--color-text-primary`
- Alt başlık: `Inter 400`, `--text-lg`, `--color-text-secondary`
- 1–2 CTA butonu: Birincil (turkuaz solid) + İkincil (ghost/outline)
- Otomatik geçiş: 5 saniye aralık, `prefers-reduced-motion` kontrolüyle
- Manuel navigasyon: Ok ikonları ve/veya nokta indikatörleri
- Nokta indikatörleri: Aktif nokta turkuaz, pasifler gri-metalik
- Mobilde metin boyutu `--text-3xl`'e düşer

---

## Ürün Kartları

```
┌──────────────────────────┐
│   Görsel (4:3)           │
│   [Kategori]  →  badge   │
├──────────────────────────┤
│ Ürün Adı                 │  ← Outfit 600
│ Kısa açıklama...         │  ← Inter 400, muted
│                          │
│ [Detayları İncele  →]    │
└──────────────────────────┘
```

**Koyu zemin kartları (ana sayfa, karanlık bölümler):**
- Arka plan: `--color-bg-elevated`
- Kenarlık: `1px solid var(--color-border)`
- Hover: Kenarlık turkuaza döner + hafif `box-shadow` accent rengiyle

**Açık zemin kartları (ürünler listesi sayfası):**
- Arka plan: `--color-surface-card`
- Kenarlık: `1px solid var(--color-border-light)`
- Hover: `translateY(-4px)` + gölge artışı

- Görsel: `aspect-ratio: 4/3`, `object-fit: cover`
- Border radius: `12px`
- Geçiş: `0.25s ease`

---

## Hizmet Kartları

```
┌──────────────────────────┐
│   Görsel (16:9)          │
├──────────────────────────┤
│ Hizmet Adı               │  ← Outfit 600
│ Kısa açıklama...         │
│                          │
│ [İncele  →]              │
└──────────────────────────┘
```

- Görsel: `aspect-ratio: 16/9`, `object-fit: cover`
- Tasarım kuralları ürün kartlarıyla aynıdır
- Hover davranışı aynıdır

---

## Referans Kartları

```
┌──────────────────────────┐
│   Görsel (3:2)           │
│   [Sektör]   → badge     │
├──────────────────────────┤
│ Proje Adı                │
│ Müşteri / Firma          │
│ 📍 Konum                 │
│                          │
│ [Projeyi İncele  →]      │
└──────────────────────────┘
```

- Görsel: `aspect-ratio: 3/2`, `object-fit: cover`
- Sektör badge'i: Görsel üzerinde, metalik/koyu tonda
- Hover: Kart kartları ile aynı davranış

---

## Detay Sayfaları

**Ürün Detay:**
- Üstte breadcrumb navigasyonu
- Büyük kapak görseli (tam genişlik veya geniş)
- Sol ana alan: Galeri thumbnail grid → lightbox
- Sağ kenar çubuğu: Ürün adı, kategori, kısa açıklama, teknik özellikler listesi, CTA
- Alt: Kullanım alanları
- Dibe: "İlgili Ürünler" (2–3 kart) — opsiyonel

**Hizmet Detay:**
- Breadcrumb
- Büyük kapak görseli
- Hizmet adı ve açıklaması
- Hizmet kapsamı listesi (madde madde, ikon ile)
- Görseller / galeri
- İlgili ürünler bölümü — varsa
- CTA alanı

**Referans Detay:**
- Breadcrumb
- Büyük kapak görseli
- Proje adı, müşteri, sektör, konum
- Açıklama
- Galeri grid (2–3 sütun), lightbox ile
- Kullanılan ürün/hizmetler listesi
- CTA alanı

---

## Galeri Kullanımı

- Thumbnail grid: `aspect-ratio: 4/3`, `object-fit: cover`
- Tıklanınca lightbox açılır
- Lightbox: Koyu overlay (`rgba(0,0,0,0.92)`), büyük görsel, sağ-sol ok navigasyonu, ESC ile kapatma
- Lightbox geçiş: `0.2s ease` opacity
- Mobilde thumbnail grid 2 sütuna düşer

---

## Buton Çeşitleri

```css
/* Birincil buton — turkuaz solid */
.btn-primary {
  background: var(--color-accent);
  color: #0A0C0F;
  padding: 12px 28px;
  border-radius: 8px;
  font: 600 15px/1 var(--font-body);
  transition: background 0.2s ease;
  border: 2px solid transparent;
}
.btn-primary:hover { background: var(--color-accent-dark); }

/* İkincil buton — outline */
.btn-secondary {
  border: 2px solid var(--color-accent);
  color: var(--color-accent);
  background: transparent;
  padding: 10px 26px;
  border-radius: 8px;
  font: 600 15px/1 var(--font-body);
}
.btn-secondary:hover {
  background: var(--color-accent-subtle);
}

/* Ghost buton (hero üzerinde, açık) */
.btn-ghost {
  border: 2px solid rgba(240,242,245,0.4);
  color: var(--color-text-primary);
  background: transparent;
  padding: 10px 26px;
  border-radius: 8px;
}
.btn-ghost:hover {
  background: rgba(240,242,245,0.08);
  border-color: rgba(240,242,245,0.7);
}

/* Metin / link butonu */
.btn-text {
  background: none;
  border: none;
  color: var(--color-accent);
  font: 500 14px/1 var(--font-body);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}
.btn-text:hover { color: var(--color-accent-dark); }
```

**Kural:** Buton metinleri normal case (büyük harf zorunluluğu yok). İkon + metin kombinasyonunda ikon sağda veya solda, `var(--space-2)` boşlukla.

---

## Form Stilleri

**Koyu zemin formu (ana tema):**
- Input arka planı: `--color-bg-elevated`
- Kenarlık: `1px solid var(--color-border)`
- Metin: `--color-text-primary`
- Focus kenarlık: `--color-accent`, `box-shadow: 0 0 0 3px var(--color-accent-subtle)`
- Placeholder: `--color-text-muted`

**Genel:**
- Border radius: `8px`
- Padding: `12px 16px`
- Hata durumu: `--color-error` kenarlık + küçük hata metni
- Submit butonu: `btn-primary`, tam genişlik veya sağa hizalı
- Başarı mesajı: Turkuaz soluk arka plan + başarı ikonu

---

## Mobil Responsive Kuralları

| Breakpoint | Genişlik | Durum |
|---|---|---|
| `sm` | 640px | Kart grid 2 sütun |
| `md` | 768px | Header tam versiyona geçiş |
| `lg` | 1024px | Grid 3 sütun, detay iki sütun |
| `xl` | 1280px | Container padding genişledi |

- Hamburger menü: 1024px altında görünür
- Mobil menü: Koyu overlay ile tam ekran veya drawer
- Hero metin: Mobilde `--text-3xl`, tablette `--text-4xl`, masaüstünde `--text-5xl`+
- Kart grid: Mobilde tek sütun
- Footer: Mobilde tek sütun, bölümler yığılır
- Minimum dokunma hedefi: 44px × 44px
- Yatay overflow hiçbir zaman oluşmamalı

---

## Görsel Oranları

| Kullanım | Oran |
|---|---|
| Hero | Tam ekran veya minimum 620px yükseklik |
| Ürün kart görseli | 4:3 |
| Hizmet kart görseli | 16:9 |
| Referans kart görseli | 3:2 |
| Galeri thumbnail | 4:3 |
| Lightbox büyük görsel | Orijinal oran korunur |
| Detay kapak görseli | 16:9 veya panoramik |

---

## Hover ve Geçiş Kuralları

- Standart geçiş: `0.2s ease` — renk, arka plan, kenarlık değişimleri
- Kart hover (açık zemin): `0.25s ease` — `translateY(-4px)` + gölge artışı
- Kart hover (koyu zemin): `0.2s ease` — kenarlık turkuaza döner, hafif `box-shadow`
- Buton hover: `0.2s ease` — arka plan veya kenarlık rengi
- Link hover: `0.15s ease` — renk değişimi
- Menü açılması: `0.3s ease` — height veya translateX
- Lightbox: `0.2s ease` — opacity
- Hero geçişi: `0.6s ease-in-out` — opacity veya translateX

**Kural:** Tüm animasyonlar `@media (prefers-reduced-motion: reduce)` içinde transition süresi sıfırlanır veya `animation: none` uygulanır.

---

## Premium Endüstriyel Kurumsal Görünüm İlkeleri

1. **Koyu zemin:** Siyah/antrasit ana zemin — endüstriyel kimliği taşır ve premium hissi verir
2. **Görsel kalitesi:** Büyük, keskin, yüksek kaliteli endüstriyel ve ürün görselleri
3. **Ritim:** Koyu ve açık bölümler bilinçli dönüşümlü — monotonluk kırılır
4. **Tipografi hiyerarşisi:** H1 → H2 → H3 → body — her seviye belirgin aralıklı
5. **Accent kontrolü:** Turkuaz yalnızca nokta vurgularda — ekranı domine etmez
6. **Metalik detaylar:** Kenarlık, meta metin ve ikincil öğelerde metalik ton
7. **Gölge tutarlılığı:** Tek bir gölge seti (`--shadow-sm`, `--shadow-md`, `--shadow-lg`)
8. **İkon seti:** Yalnızca `lucide-react` — başka ikon kütüphanesi eklenmez
9. **Logo:** Header'da net görünür versiyonu, footer'da açık/beyaz versiyonu

---

## Kaçınılması Gereken Tasarım Hataları

- Turkuazı büyük yüzeylerde arka plan olarak kullanmak
- Açık arka planlı, katalog tarzı genel kurumsal şablon görünümü
- Çok fazla renk — palette dışına çıkmak
- Küçük veya düşük kaliteli görsel kullanan kartlar
- Sıkışık layout — spacing sistemi dışında düşük boşluk
- Farklı font aileleri karıştırmak
- Aşırı gölge veya gradient katmanı
- Mobilde yatay scroll oluşturmak
- Anlamsız, süslü animasyonlar — her şeyin kayması veya dönmesi
- Hero üzerinde okunamayan metin — kontrast kontrol edilmeli
- Uydurma teknik veri, sahte sertifika veya sahte kapasite bilgisi
- Footer'da çok küçük metin (min `--text-sm`)
- Buton metinlerinde gereksiz ALL CAPS
- Katalog tarzı tablo yoğun teknik özellik ekranları — etiket+değer listesi tercih edilir
