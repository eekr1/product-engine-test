# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Visual Concept Narrative**: "Hassas Teknik Servis ve Güvenilir Sanayi Uzmanlığı" (Precision Technical Engineering & Reliable Service Architecture).
- **Tasarım Karakteri**: Güçlü, mühendislik hassasiyeti taşıyan, temiz, kurumsal ve modern. Eski SITE123 sitesinin karmaşık ve jenerik şablon hissi yerine, Trakya Teknik Makine'nin makine servisi ve Disan Hidrolik yetkili servisliği kimliğini net yüzeyler, güçlü endüstriyel tipografi ve yüksek kontrastlı renk hiyerarşisiyle sunar.

## 2. Differentiation / Anti-Template Rationale

- **Sektör Klişelerinden Kaçış**: Klasik sanayi sitesi şablonlarındaki "varsayılan koyu mavi hero + 3 düz beyaz kart + jenerik stok fabrika fotoğrafı" klişesi kullanılmayacaktır.
- **Özgün Yüzey Mimarisi**: Çelik mavisi ve sıcak kehribar/turuncu vurgu tonları (servis dinamizmini ve teknik müdahaleyi simgeleyen), asimetrik ızgara kompozisyonları ve teknik ızgara (grid) çizgileri ile projeye özgü ayırt edilebilir bir kimlik kurulmuştur.

## 3. Composition & Layout Principles

- **Izgara Mantığı**: 12 sütunlu esnek grid yapısı; teknik çizim ve mühendislik şemalarından ilham alan mikro bölücü çizgiler (border-grid system).
- **Whitespace & Density**: İçerik sıkışıklığını önleyen ferah boşluk kullanımı (8px basamaklı spacing: 16px, 24px, 32px, 48px, 64px).
- **Section Rhythm**: Hero -> Servis Özeti / Yetkili Servis Rozeti -> 3 Ana Hizmet Kartları -> İletişim Aksiyon Bandı ritmi.

## 4. Color Direction & Semantic Roles

- **Primary Brand Color**: `Deep Industrial Navy` (`#0F172A` / `hsl(222, 47%, 11%)`) — Kurumsallık ve güven duygusu.
- **Accent Brand Color**: `Precision Amber/Orange` (`#EA580C` / `hsl(20, 91%, 48%)`) — Servis dinamizmi, hızlı müdahale ve ikincil dikkat noktaları.
- **Surface Colors**:
  - Main Background: `#F8FAFC` (Slate 50 - Temiz teknik zemin)
  - Card Surface: `#FFFFFF` (Saf Beyaz, 1px `#E2E8F0` kenarlık ile)
  - Secondary Surface: `#F1F5F9` (Slate 100)
- **Text & Foreground**:
  - Primary Text: `#0F172A` (Slate 900)
  - Secondary Text: `#475569` (Slate 600)
  - Inverse Text: `#FFFFFF`

## 5. Typography Direction

- **Primary Typeface**: `Inter` veya `Roboto` (Sans-serif) — Yüksek okunabilirlik, nötr ve teknik karakter.
- **Display / Heading Typeface**: `Outfit` veya `Inter Bold` — Güçlü başlıklar, net teknik duruş.
- **Type Scale**:
  - Display / Hero H1: `2.5rem` / `40px` (Mobilde `2rem` / `32px`), Font-weight: `700`
  - Section Heading H2: `1.75rem` / `28px`, Font-weight: `600`
  - Subheading H3: `1.25rem` / `20px`, Font-weight: `600`
  - Body Text: `1rem` / `16px`, Line-height: `1.6`
  - Small / Monospace Detail: `0.875rem` / `14px` (Teknik detaylar için)

## 6. Interaction & Motion Principles

- **Hover States**: Kartlarda hafif yukarı kayma (`translateY(-4px)`), kenarlık vurgusunda renk değişimi (`#EA580C` accent border) ve yumuşak gölge geçişi (`transition: all 0.25s ease`).
- **Button Animations**: Aksiyon butonlarında aktif (active) basılma hissi ve renk doygunluğu değişimi.
- **Micro-Interactions**: İletişim butonlarında ve hizmet kartlarında kontrollü hover efektleri. Kargaşa yaratan aşırı ağır animasyonlardan kaçınılmıştır.

## 7. Responsive Principles

- **Desktop (1024px+)**: 3 sütunlu hizmet kartı düzeni, geniş hero alanı ve sağa hizalı hızlı iletişim paneli.
- **Tablet (768px - 1023px)**: 2 sütunlu hizmet yapısı, adaptif navigasyon.
- **Mobile (< 768px)**: Tek sütunlu dikey içerik akışı, mobilde ekranın alt kısmında veya üstünde sabit erişilebilir "Hemen Ara" ve "İletişim" CTA barı.

## 8. Accessibility Baseline

- **Color Contrast**: Metin ve zemin kontrast oranları WCAG AA standardına uygun tutulmalıdır (minimum 4.5:1 kontrast oranı).
- **Focus Indicators**: Klavyeyle gezinmede görünür focus halkası (`outline: 2px solid #EA580C; outline-offset: 2px`).
- **Semantic HTML**: Etkileşimli tüm elemanlarda `<button>`, `<a>`, `<nav>`, `<header>`, `<main>`, `<footer>` semantic etiketleri kullanılacaktır.

## 9. Imagery / Iconography Direction

- **Iconography**: SVG tabanlı endüstriyel ikonsatırı (somun/anahtar, hidrolik sembol, dişli, telefon, e-posta, konum).
- **Imagery**: Gerçekçi endüstriyel makine görselleri, teknik şema vurguları, yetkili servis rozetleri.

## 10. Explicit Design Anti-Patterns

- **AP-01**: Sektör klişesi zemin üzerine aşırı karmaşık stok fabrika fotoğrafları yerleştirmek.
- **AP-02**: Okunabilirliği düşüren düşük kontrastlı gri metinler kullanmak.
- **AP-03**: Mobil ekranda tıklanması zor küçük iletişim butonları yerleştirmek.
- **AP-04**: Generic Bootstrap/Tailwind şablonu hissi veren tipografi ve kart düzenleri.
