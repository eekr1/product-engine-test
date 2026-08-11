# Trakya Teknik Makine — Design Rules

## 1. Visual Concept & Design Character

**Concept Name**: *Precision Industrial & Regional Technical Excellence (Hassas Endüstriyel & Bölgesel Teknik Mükemmeliyet)*

Trakya Teknik Makine'nin görsel kimliği; endüstriyel güvenilirlik, teknik yetkinlik, hızlı çözüm ve yüksek hassasiyet hissi üzerine kuruludur. Tasarım, klasik ağır endüstriyel sitelerin kasvetinden uzak, modern mühendislik stüdyolarının estetiğini yansıtan yüksek kontrastlı, temiz, teknik kartografik çizgiler ve mikro-doku yüzeyleri kullanır.

## 2. Differentiation / Anti-Template Rationale

- **Sektör Klişelerinden Arınma**: Varsayılan düz lacivert background + jenerik 3 stok görsel kartı şablonu kesinlikle kullanılmayacaktır.
- **Karakteristik Renk Paleti**: Koyu antresit/kömür (`#1A1D20`) zemin üzerinde teknik titanyum gri (`#F4F5F7`), canlı hidrolik kehribar/turuncu (`#FF6B00`) vurgular ve teknik servis mavisi (`#0066FF`) ikincil vurgular kullanılır.
- **Kompozisyon Özgünlüğü**: Hero bölümünde standart resim arkası karartılmış yazı yerine, teknik servis yetkinliğini ve Disan Hidrolik yetkili servis partnerliğini gösteren asimetrik split-layout ve teknik ızgara (grid line) motifleri yer alır.

## 3. Composition & Layout Principles

- **Grid System**: 12 kolonlu akıcı grid, 24px/32px dikey ızgara adımı.
- **Surface Elevation**: Kartlarda gölge yerine 1px incelikte yarı saydam sınırlar (`border: 1px solid rgba(255, 255, 255, 0.1)`) ve yüzey tonlama katmanları (`#22262B`, `#2A2F35`).
- **Spacing**: Geniş nefes alanı (section padding: 80px 0, mobile: 48px 0), içerik kartları arasında 24px gap.

## 4. Color Direction & Semantic Roles

- **Primary Background**: `#111315` (Derin Antrasit Siyah)
- **Surface Level 1**: `#1A1D21` (Kart ve Bölüm Yüzeyi)
- **Surface Level 2**: `#24282E` (Hover ve Vurgulu Kart Yüzeyi)
- **Primary Text**: `#F8F9FA` (Yüksek Kontrastlı Beyaz)
- **Secondary Text**: `#A0A5AD` (Teknik Açıklama Grisi)
- **Accent Brand / Action**: `#FF6B00` (Hidrolik Kehribar - CTA ve Vurgular)
- **Partner / Trust Accent**: `#0A84FF` (Disan Hidrolik Servis Mavisi)
- **Success / Status**: `#30D158` (Aktif Servis / Hızlı Destek)

## 5. Typography Direction

- **Primary Font**: `Inter`, sans-serif (Temiz, okunabilir kurumsal gövde metinleri).
- **Technical / Heading Font**: `Outfit` veya `Space Grotesk`, sans-serif (Endüstriyel, keskin başlıklar ve teknik istatistikler).
- **Scale**:
  - H1 Hero: `44px / 1.15` (Mobile: `32px`)
  - H2 Section Title: `32px / 1.2` (Mobile: `24px`)
  - H3 Card Title: `20px / 1.3`
  - Body Regular: `16px / 1.6`
  - Small / Badge: `13px / 1.4` (Uppercase, `letter-spacing: 0.08em`)

## 6. Interaction & Motion Principles

- **Hover Transitions**: Kartlar ve butonlarda `transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`. Hover durumunda kenarlık rengi amber (`#FF6B00`) veya mavi (`#0A84FF`) tonuna yumuşakça kayar.
- **Subtle Motion**: Sayfa yüklendiğinde ve scroll aşamasında dikey hafif yükselme (`transform: translateY(12px) -> translateY(0)`), `opacity: 0 -> 1`.
- **CTA Pulse**: Telefon ve hızlı destek CTA butonlarında yumuşak durum indikatörü.

## 7. Responsive Principles

- **Desktop (1200px+)**: Split hero, 3 kolonlu hizmet kartları, iki kolonlu iletişim alanı.
- **Tablet (768px - 1199px)**: 2 kolonlu hizmet kartları, duyarlı navigasyon.
- **Mobile (<768px)**: Tek kolonlu kartlar, sabit alt iletişim çubuğu (Bottom Phone CTA), mobil menü çekmecesi.

## 8. Accessibility Baseline

- **Contrast**: Tüm metin-zemin kontrast oranları minimum WCAG AA (4.5:1) seviyesindedir.
- **Focus Rings**: Klavye navigasyonunda `outline: 2px solid #FF6B00; outline-offset: 2px`.
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` semantik etiketleri.

## 9. Imagery / Iconography Direction

- **Iconography**: Ince çizgisel teknik ikonlar (`Lucide` veya özel SVG ikon seti, 1.75px stroke-width).
- **Imagery**: Stok jenerik gülen yüzlü insan görselleri yerine; gerçek makine aksamları, yedek parça bileşenleri, hidrolik üniteler ve teknik servis ekipmanı fotoğrafları/çizimleri.

## 10. Explicit Design Anti-Patterns

- ❌ Düz şablon lacivert renk varsayımı yapma.
- ❌ Resim üzerine okunması imkansız metin yerleştirme.
- ❌ Farklılaşma uğruna gezinti menüsünü gizleme veya karmaşıklaştırma.
- ❌ Mobil cihazlarda doğrudan arama butonunu ekran dışına itme.
