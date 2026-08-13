# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Tasarım Konsepti**: **"Hassas Endüstriyel Zanaat & Mühendislik Güveni" (Precision Industrial Craft & Engineering Trust)**.
- **Karakter ve Algı**: Trakya Teknik Makine, ağır sanayi ve hidrolik sistemlerde güvenilir, teknik bilgisi yüksek, dinamik ve çözüm odaklı bir bölge lideri olarak hissedilmelidir.
- **Görsel Temel**: Koyu kömür (Slate Charcoal), çelik gri (Steel Grey) ve güven vurgusu sağlayan yüksek görünürlüklü sanayi kehribarı (Industrial Amber) tonlarıyla inşa edilen, teknik çizim ve mühendislik titizliğini yansıtan yüksek kontrastlı kurumsal mimari.

## 2. Differentiation / Anti-Template Rationale

- **Klişelerden Kaçış**: Klasik "otomatik lacivert kurumsal tema", "düz 3 beyaz kartlı hero" veya "jenerik SaaS gradient" şablonları reddedilmiştir.
- **Farklılaşma Yaklaşımı**:
  1. **Disan Yetkili Servis Rozeti**: Ana sayfada sıradan bir metin yerine teknik rozet (Precision Badge) formunda vurgulanan yetkili servis güvencesi.
  2. **Endüstriyel Grid ve Yüzey Katmanları**: Düz beyaz arka planlar yerine, koyu çelik başlıklar, mikro fırçalanmış dokulu yüzey kartları ve ince teknik sınırlar (1px Slate Borders).
  3. **Tipografik Hiyerarşi**: Başlıklarda güçlü ve modern sanayi karakteri taşıyan `Outfit` (sans-serif), gövde metinlerinde ise yüksek okunurluğa sahip `Inter` kombinasyonu.

## 3. Composition & Layout Principles

- **Grid Sistemi**: 12 sütunlu esnek grid. Sayfa alanları belirgin teknik bölücülerle (Section Dividers) ve asimetrik vurgu alanlarıyla ayrılır.
- **Yüzey ve Derinlik**: Yüzeyler düz beyaz değil; `#F8FAFC` (Canvas background), `#FFFFFF` (Surface cards), `#0F172A` (Header/Footer & Hero dark background) kontrastıyla katmanlandırılır.
- **Spacing Ritim**: 8px bazlı tutarlı spacing ölçeği (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`).

## 4. Color Direction & Semantic Roles

```css
:root {
  /* Primary Brand & Industrial Tones */
  --color-brand-dark: #0F172A;      /* Slate Charcoal - Koyu Kurumsal Zemin */
  --color-brand-surface: #1E293B;   /* Slate Steel - İkincil Koyu Yüzey */
  --color-brand-accent: #D97706;    /* Industrial Amber - Güven ve Aksiyon Rengi */
  --color-brand-accent-hover: #B45309;

  /* Neutral & Canvas Tones */
  --color-canvas-bg: #F8FAFC;       /* Açık Tuval Arka Planı */
  --color-card-bg: #FFFFFF;         /* Kart Yüzey Rengi */
  --color-border: #E2E8F0;          /* Teknik İnce Sınır */
  --color-border-dark: #334155;

  /* Typography Colors */
  --color-text-main: #0F172A;       /* Ana Metin */
  --color-text-muted: #64748B;      /* İkincil/Açıklama Metni */
  --color-text-on-dark: #F8FAFC;    /* Koyu Zemin Üzeri Metin */
  --color-text-on-dark-muted: #94A3B8;

  /* Semantic Feedback */
  --color-success: #166534;
  --color-info-bg: #EFF6FF;
  --color-info-border: #BFDBFE;
}
```

## 5. Typography Direction

- **Primary Heading Font**: `Outfit`, sans-serif (700 Bold / 600 SemiBold).
- **Body & Interface Font**: `Inter`, sans-serif (400 Regular / 500 Medium / 600 SemiBold).
- **Monospace Specs Font**: `JetBrains Mono` veya `ui-monospace` (Teknik detay, telefon ve kod rozetleri için).

```text
H1 (Hero Heading)   : 44px / 1.15 (Mobile: 32px)
H2 (Section Header) : 32px / 1.25 (Mobile: 24px)
H3 (Card Title)     : 20px / 1.4
Body Text           : 16px / 1.6
Small Caption/Meta  : 14px / 1.5
```

## 6. Interaction & Motion Principles

- **Mikro Etkileşimler**: Kartlarda hafif yukarı kalkma (`transform: translateY(-4px)`) ve subtle border amber vurgusu (`border-color: var(--color-brand-accent)`).
- **Geçiş Süreleri**: Yumuşak ve seri animasyonlar (`transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1)`).
- **CTA Etkileşimi**: İletişim butonları ve telefon bağlantılarında belirgin amber parlama (Glow/Active state).

## 7. Responsive Principles

- **Breakpoint Ölçeği**:
  - `Mobile`: < 640px (Tek sütun, tam genişlikte butonlar, kolay dokunmatik CTA'lar).
  - `Tablet`: 640px - 1024px (2 sütunlu grid, daraltılmış navigasyon).
  - `Desktop`: > 1024px (Tam 12-sütun layout, sticky header, yan görünüm detayları).

## 8. Accessibility Baseline

- **Kontrast Standartları**: Tüm metin-zemin kontrastları minimum WCAG AA (4.5:1) oranını karşılamalıdır.
- **Focus Indicator**: Klavye ile gezinmede görünür aksan odak çizgisi (`outline: 2px solid var(--color-brand-accent)`).
- **Click Targets**: Dokunmatik cihazlarda tıklama alanları en az `44x44px` olmalıdır.

## 9. Imagery / Iconography Direction

- **İkon Dili**: Temiz, 2px stroke genişliğine sahip endüstriyel SVG ikonlar (Lucide / Feather tarzı: Dişli, Wrench, Shield, Phone, Mail, MapPin).
- **Görsel Tarzı**: Şeffaf arka planlı teknik makine, hidrolik aksam ve yedek parça görselleri; yüksek kaliteli kurumsal renk tonlarıyla uyumlu görseller.

## 10. Explicit Design Anti-Patterns

- ❌ Otomatik mor/mavi gradient şablonları kullanmak.
- ❌ Düşük kontrastlı gri metinlerle okunabilirliği düşürmek.
- ❌ Sırf süs olsun diye karmaşık, yavaşlatıcı 3D canvas veya kontrolsüz ağır animasyonlar eklemek.
- ❌ Disan Yetkili Servis vurgusunu sayfa altına veya küçük dipnotlara saklamak.
