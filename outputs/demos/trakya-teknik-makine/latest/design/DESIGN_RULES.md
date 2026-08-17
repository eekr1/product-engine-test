# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

- **Kavram**: **"Industrial Precision & Engineering Trust" (Endüstriyel Hassasiyet ve Mühendislik Güveni)**.
- **Karakter**: Trakya Teknik Makine'nin makine bakım/onarım, yedek parça temini ve yerinde teknik destek disiplinini yansıtan; antrasit koyu teknik yüzeyler, amber/turuncu mühendislik accent vurguları ve kontrollü teknik grid hatlarıyla biçimlenmiş özgün kurumsal dil.
- **Tone of Voice**: Teknik uzman, hassas, disiplinli, kurumsal ve güven verici.

## 2. Differentiation / Anti-Template Rationale

- Generic `lacivert hero + 3 kart + beyaz background + standart footer` klişesi kesinlikle kullanılmaz.
- Antrasit koyu teknik zeminler (`#0F141C`, `#161D2A`) ve amber/turuncu vurgu tonları (`#FF9500`) ile standart kurumsal hazır şablonlardan ayrışılır.
- 7 onaylı sayfa boyunca görsel sistem tutarlıdır; ancak Hizmet Detay sayfaları kart büyütmesi gibi görünmez, kendi sayfa kurgusu içinde özgünleşir.

## 3. Composition & Layout Principles

- **Grid Architecture**: Asimetrik ve teknik grid yapısı. Sol veya üst hiyerarşi bloklarında teknik etiketler (Badge / Accent Line), sağ veya alt bloklarda odaklanmış kurumsal içerik.
- **Card & Surface Framing**: Kartlar antrasit yüzeyler (`#161D2A`), 1px ince teknik kenarlıklar (`rgba(255, 255, 255, 0.08)`) ve hafif hover accent glow etkisi taşır.
- **Section Spacing**: Derinlik hissi veren geniş dikey boşluklar (desktop: `80px - 120px`, mobile: `48px - 64px`).

## 4. Color Direction & Semantic Roles

- **Primary Background**: Deep Technical Anthracite (`#0F141C`).
- **Surface / Card Background**: Technical Dark Navy-Grey (`#161D2A`).
- **Accent Primary**: Industrial Precision Amber/Orange (`#FF9500`).
- **Accent Hover / Active**: Bright Precision Amber (`#FFAB2E` / `#E07A00`).
- **Text Primary**: Crisp High-Contrast White (`#F8FAFC`).
- **Text Secondary**: Technical Muted Grey (`#94A3B8`).
- **Border / Divider**: Subtraction Line (`rgba(255, 255, 255, 0.08)` / `#26334D`).

## 5. Typography Direction

- **Primary Sans-Serif**: `Inter` veya `Outfit` (Temiz, okunabilir, endüstriyel sans-serif).
- **Technical Accent / Monospace**: `JetBrains Mono` veya `Fira Code` (Sayfa ID'leri, yetkili servis badge'leri, teknik etiketler için).
- **Hierarchy Scale**:
  - H1 Display Title: `2.75rem - 3.5rem` (`bold`, `tracking-tight`)
  - H2 Section Title: `2.0rem - 2.25rem` (`semibold`)
  - H3 Subsection / Card Title: `1.25rem - 1.5rem` (`medium`)
  - Body Text: `1.0rem` / `1.6` line-height
  - Technical Badge / Tag: `0.75rem - 0.875rem` (`monospace`, `uppercase`)

## 6. Interaction & Motion Principles

- **Hover States**: Kartlar ve butonlar üzerinde 0.2s smooth CSS transition. Subtle border glow (`#FF9500` %20 opaklık) ve `translateY(-2px)` mikro hareket.
- **Page Transitions**: Sayfa geçişlerinde içerik bloklarının `opacity: 0 -> 1` ve `translateY(8px -> 0)` mikro animasyonu.
- **No Heavy Motion**: Performansı veya kurumsal ciddiyeti düşürecek aşırı/yavaş animasyonlar yasaktır.

## 7. Responsive Principles

- **Breakpoints**: Mobile (`< 640px`), Tablet (`640px - 1024px`), Desktop (`> 1024px`).
- **Mobile Navigation**: Mobilde Header içi hamburger tetiklemeli slide-over/overlay Navigation Drawer. 7 sayfa rotasının tamamı mobilde erişilebilirdir.
- **Touch Targets**: Mobilde tıklanabilir alanlar en az `44px x 44px`.

## 8. Accessibility Baseline

- **Color Contrast**: Metin ve arka plan renkleri arasında minimum WCAG AA 4.5:1 kontrast oranı.
- **Focus Indicators**: Klavyeyle gezinmede görünür amber focus ring (`2px solid #FF9500`).
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` kullanımı.

## 9. Imagery / Iconography Direction

- **Iconography**: Clean, sharp, technical vector line icons (Lucide React / SVG primitives).
- **Industrial Visual Motif**: Teknik grid çizgileri, köşe işaretçileri (`+`), endüstriyel hassasiyet göstergeleri.
- **Image Style**: Yüksek çözünürlüklü endüstriyel makine, hidrolik/teknik servis ve yetkili servis vurgulu kurumsal görseller.

## 10. Explicit Design Anti-Patterns

- Standard lacivert/mavi kurumsal hazır şablon kullanmak.
- Onaylı 7 sayfayı tek sayfaya collapse etmek.
- Okunabilirliği düşüren düşük kontrastlı gri metinler.
- Kaynakta bulunmayan uydurma sertifika veya referans logosu eklemek.
