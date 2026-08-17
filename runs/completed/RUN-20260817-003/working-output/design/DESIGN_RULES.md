# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

- **Kavram**: **"Industrial Precision & Heavy Engineering Craft"** (Endüstriyel Hassasiyet ve Ağır Makine Servis Uzmanlığı).
- **Karakter**: Güven veren, ciddi, teknik detay odaklı, net, modern ve profesyonel endüstriyel arayüz dili. Tasarım, Trakya bölgesindeki fabrikalara ve makine kullanıcılarına mühendislik güveni ve servis disiplini aşılamalıdır.

## 2. Differentiation / Anti-Template Rationale

- Sektör klişesi olan **"lacivert hero + 3 jenerik kart + lacivert footer"** şablonu Otomatik Tasarım Olarak KULLANILMAYACAKTIR.
- Bunun yerine:
  - Derin antrasit koyu yüzeyler ile yüksek kontrastlı açık grinin monokrom mühendislik dengesi.
  - Hassas amber (`#D97706`) teknik vurgu accent tonları.
  - Asimetrik teknik ızgara (grid) yerleşimi, mikro çizgi detayları ve veri rozeti (badge) vurguları.
  - Şablon hissi veren dev stok fotoğrafları yerine temiz çizgi sanatı, teknik ikonografi ve mikro dokulu kart yüzeyleri.

## 3. Composition & Layout Principles

- **Grid System**: 12 sütunlu akıcı grid (Fluid Grid) ile max-width: `1200px` merkezli container.
- **Surface Hierarchy**:
  - Primary Surface: Derin Antrasit/Çelik Slate (`#1E2530`) kurumsal kimlik vurgu alanları.
  - Secondary Surface: Temiz Açık Gri (`#F8FAFC`) okunabilir içerik alanları.
- **Card Composition**: İnce 1px kenarlıklı teknik kart mimarisi (`border: 1px solid rgba(226, 232, 240, 0.8)`), hafif gölge (`0 4px 6px -1px rgba(0, 0, 0, 0.05)`).

## 4. Color Direction & Semantic Roles

- **Primary Brand Color**: Koyu Antrasit (`#1E2530`) — Güç, kurumsal ciddiyet ve ağır sanayi vurgusu.
- **Secondary Neutral**: Çelik Slate (`#3A475A`) — İkincil yüzeyler, metin hiyerarşisi ve teknik çerçeveler.
- **Accent Color**: Hassas Amber (`#D97706`) — İletişim CTA butonları, teknik servis durumu ve rozet vurguları.
- **Background Main**: `#FFFFFF` / Light Neutral (`#F8FAFC`) — Net okunabilirlik sunan içerik zeminleri.
- **Text Main**: Koyu Gri (`#0F172A`) — Yüksek kontrastlı metinler.
- **Text Muted**: Orta Gri (`#64748B`) — İkincil etiketler ve teknik açıklamalar.

## 5. Typography Direction

- **Primary Font**: `Outfit` veya `Inter` (Google Fonts sans-serif modern geometrik tipografi).
- **Heading Scale**:
  - `H1 (Hero Title)`: `2.75rem` / `3.5rem` (700 Bold, line-height 1.15)
  - `H2 (Section Header)`: `2.0rem` / `2.5rem` (600 SemiBold)
  - `H3 (Card Title)`: `1.25rem` / `1.5rem` (600 SemiBold)
- **Body Scale**: `1.0rem` (16px, line-height 1.6, 400 Regular).

## 6. Interaction & Motion Principles

- **Hover Effects**: Kartlarda subtle `transform: translateY(-3px)` ve amber accent kenarlık parlaması (`transition: all 0.25s ease-in-out`).
- **Button Interaction**: Contact CTA butonlarında amber renkten koyu amber tona yumuşak geçiş ve aktif dokunma tepkisi.
- **Motion Restraint**: Ağır animasyonlar veya kafa karıştıran kayma efektleri kullanılmaz; sadece mikro etkileşimler ve kontrollü geçişler.

## 7. Responsive Principles

- **Desktop (`>= 1024px`)**: Çok sütunlu teknik kart grid'i, yan yana navigasyon ve doğrudan erişilebilir telefon/e-posta CTA barları.
- **Tablet (`768px - 1023px`)**: 2 sütunlu hizmet kartı düzeni ve genişletilmiş dokunmatik butonlar.
- **Mobile (`< 768px`)**: Dikey tek sütun (single column stacking), minimum `44px` yüksekliğinde mobil uyumlu büyük direct-contact CTA butonları (`tel:` ve `mailto:`).

## 8. Accessibility Baseline

- **Color Contrast**: Metin ile arka plan arasında en az 4.5:1 WCAG AA renk kontrast oranı.
- **Focus States**: Klavye gezintisinde görünür odak halkası (`outline: 2px solid #D97706; outline-offset: 2px`).
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` gibi anlamsal HTML5 etiketleri.

## 9. Imagery / Iconography Direction

- **Iconography**: `Lucide-React` veya vektörel inline SVG teknik ikon seti (Wrench/Settings ikonları bakım için, Package/Box ikonları yedek parça için, Truck/Wrench-Screwdriver yerinde destek için).
- **No Stock Clichés**: Stok fotoğraf kullanımı yerine temiz vektörel semboller ve tipografik hiyerarşi.

## 10. Explicit Design Anti-Patterns

- Lacivert jenerik hazır tema kullanımı YASAKTIR.
- Pazarlama balonu sloganlar ("Sektörün 1 numaralı lideri", "En ucuz parça garantisi" vb.) YASAKTIR.
- Yanıp sönen canlı destek widget'ları veya sahte harita iframe'leri YASAKTIR.
- Source material'de olmayan sahte adres, logo veya sertifika rozeti uydurmak YASAKTIR.
