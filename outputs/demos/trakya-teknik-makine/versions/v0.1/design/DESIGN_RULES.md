# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

- **Concept**: "Endüstriyel Teknik Servis Hassasiyeti ve Güveni" (Precision Industrial Technical Service).
- **Character**: Modern, teknik, yüksek kaliteli endüstriyel his; koyu kömür/antrasit tonlar, yüksek kontrastlı teknik turuncu/sarı vurgular, geometrik tipografi ve net grid düzeni.
- **Perception Goal**: Hızlı ve profesyonel teknik çözüm sunan, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi güvencesini ilk anda hissettiren güçlü bir kurumsal duruş.

## 2. Differentiation / Anti-Template Rationale

- **Anti-Generic Rationale**: Tipik "lacivert hero + standart 3 kart + klişe stok fotoğraf + jenerik footer" sektör kalıbı reddedilmiştir.
- **Differentiation**:
  - Klasik lacivert yerine antrasit/kömür gri (`#12161A` / `#1A2026`) taban üzerine teknik güvenlik turuncusu (`#F26522` / `#FF7A00`) accent tonları kullanılmıştır.
  - Hizmetler yüzeysel kartlar olarak değil, teknik servis spesifikasyon kartları ve görsel hiyerarşi adımları biçiminde sunulmuştur.
  - Hero alanında yetkili servis badge'i ve doğrudan teknik iletişim aksiyonları belirginleşmektedir.

## 3. Composition & Layout Principles

- **Grid System**: 12 kolonlu esnek CSS Grid ve Flexbox düzeni (Max-width: 1200px, Gutter: 24px/32px).
- **Asymmetric Balance**: Hero ve kurumsal bölümlerde asimetrik visual balance; metin içerikleri ile teknik vurgu kartları arasında güçlü hiyerarşi.
- **Rhythm & Spacing**: 8px baseline spacing skalası (8px, 16px, 24px, 32px, 48px, 64px, 80px).

## 4. Color Direction & Semantic Roles

- **Primary Background**: `Industrial Dark / Charcoal` (`#111518`) — Arka plan ve kurumsal güç hissi.
- **Surface Elevation**: `Charcoal Surface` (`#1A2026`) — Kartlar, paneller ve yüzey yükseltileri.
- **Surface Border**: `Technical Border` (`#2E3842`) — Ince teknik keski çizgileri ve ayraçlar.
- **Primary Text**: `Crisp White / Off-White` (`#F4F6F8`) — Ana okuma alanları ve başlıklar.
- **Secondary Text**: `Muted Slate` (`#9AA5B1`) — İkincil açıklamalar ve etiketler.
- **Primary Accent / Brand CTA**: `Technical Safety Orange` (`#F26522`) — Butonlar, yetkili servis rozeti, doğrudan iletişim CTA'ları.
- **Hover / Active State**: `Vibrant Orange` (`#FF7A29`) — İnteraktif vurgular.

## 5. Typography Direction

- **Primary Font Family**: `Inter` veya `Outfit`, sans-serif (Google Fonts).
- **Headings**: `Outfit` / `Inter`, Bold/SemiBold (700/600), harf aralığı sıkı (letter-spacing: -0.02em), güçlü endüstriyel başlık karakteri.
- **Body Text**: `Inter`, Regular (400), line-height 1.6, yüksek okunabilirlik.
- **Technical Badges / Monospace Labels**: Monospace font / uppercase etiketler (letter-spacing: 0.05em, font-size: 0.75rem).

## 6. Interaction & Motion Principles

- **Micro-Interactions**: Subtle scale & elevation (transform: translateY(-2px), box-shadow) buton ve kart hover efektleri.
- **Transition Duration**: `200ms ease-out` standart yumuşak geçişler.
- **No Heavy Motion**: Satış demosu sırasında dikkati dağıtacak veya yavaşlatacak gereksiz karmaşık animasyonlardan kaçınılır.

## 7. Responsive Principles

- **Desktop (1024px+)**: Full 12-column layout, yan yana teknik sunum ve öne çıkan CTA yüzeyleri.
- **Tablet (768px - 1023px)**: 2-column grid düzeni, optimize edilmiş padding ve font boyutları.
- **Mobile (<768px)**: 1-column akıcı akış, kolay dokunulabilir (min 44px height) telefon/e-posta CTA butonları.

## 8. Accessibility Baseline

- **Color Contrast**: Metinler ve renk kontrastları WCAG AA seviyesi (minimum 4.5:1 kontrast oranı).
- **Focus Indicators**: Klavye navigasyonu için görünür net focus ring (`outline: 2px solid #F26522`).
- **Touch Targets**: Mobilde dokunmatik hedefler minimum 44x44px boyutunda.

## 9. Imagery / Iconography Direction

- **Iconography**: Minimalist, keskin hatlı endüstriyel SVG ikonlar (Yedek Parça: dişli/kutu, Teknik Destek: anahtar/servis, Bakım: çark/kalkan, İletişim: telefon/posta).
- **Imagery Style**: Yüksek kaliteli, temiz endüstriyel/teknik makine ve servis sunumu (jenerik renkli stok insan fotoğrafları yerine teknik ekipman ve profesyonel arayüz dili).

## 10. Explicit Design Anti-Patterns

- **AP-001**: Lacivert / Mavi gradient jenerik kurumsal şablon kopyalamak.
- **AP-002**: Source-unbacked adres/harita/WhatsApp jenerik widget'ları eklemek.
- **AP-003**: Mobilde okunamayan veya birbirine binen teknik metin kutuları.
