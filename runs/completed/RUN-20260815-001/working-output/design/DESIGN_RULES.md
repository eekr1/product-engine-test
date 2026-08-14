# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Visual Concept**: **"Precision Engineering & Heavy-Duty Reliability" (Hassas Mühendislik ve Ağır Hizmet Güvenilirliği)**.
- **Tasarım Karakteri**: Teknik derinliği ve Trakya bölgesindeki sanayi/makine yetkinliğini yansıtan ağırbaşlı, güçlü, yüksek kontrastlı ve mühendislik disiplinine sahip görsel dil.
- **Algı Hedefleri**:
  - Ağır makine ve hidrolik sistemlerde uzmandır.
  - Trakya Bölgesi'nin Disan Hidrolik yetkili teknik gücüdür.
  - Hızlı, net, güven veren ve doğrudan çözüme odaklanan kurumsal duruşa sahiptir.

## 2. Differentiation / Anti-Template Rationale

- **Klişe Reddi**: Sıradan "lacivert kurumsal hero + 3 jenerik mavi kart + hazır stok fotoğraf" klişesi reddedilmiştir.
- **Farklılaşma Yaklaşımı**:
  - Teknik doku: Çelik gri (`#1A1D20`), koyu grafit (`#111315`), endüstriyel turuncu/kehribar accent (`#D97706` / `#E55B13`) ve teknik grid çizgileri.
  - Tipografik hiyerarşi: Mühendislik ciddiyeti taşıyan sans-serif başlıklar (`Outfit` / `Inter`) ve yüksek okunabilirlikli gövde tipografisi.
  - Yapılandırılmış kart kompozisyonu: Hizmetler ve teknik yetkinlikler teknik çizim şemalarını ve endüstriyel bilgi kartlarını andıran net kenarlıklı yüzeylerle sunulur.

## 3. Composition & Layout Principles

- **Asimetrik Izgara (Grid)**: Hero bölümünde sol tarafta güçlü mesaj ve Disan Hidrolik yetkili servis rozeti, sağ tarafta teknik hizmet parametreleri ve hızlı iletişim kartı.
- **Kademeli Yüzey Mimarisi**: Koyu zeminler (dark surfaces), yüksek kontrastlı kart grupları ve hassas sınır çizgileri (`border-color: rgba(255,255,255,0.08)`).
- **Bilgi Yoğunluğu ve Odak**: Kalabalık olmayan, teknik parametrelerin ön plana çıktığı net visual hierarchy.

## 4. Color Direction & Semantic Roles

- **Primary Dark Surface**: `#0E1012` (Derin Endüstriyel Siyah)
- **Secondary Dark Surface**: `#16191D` (Koyu Grafit Kart Zeminleri)
- **Accent High-Visibility Color**: `#E55B13` (Endüstriyel Güven Turuncusu / Servis Vurgusu)
- **Accent Secondary Neutral**: `#4B5563` / `#9CA3AF` (Teknik Detay ve Etiket Grileri)
- **Text Primary**: `#F9FAFB` (Yüksek Kontrast Beyaz)
- **Text Muted**: `#9CA3AF` (Yardımcı Açıklama Grisi)
- **Border / Divider**: `rgba(255, 255, 255, 0.1)` (Hassas Mühendislik Çizgileri)

## 5. Typography Direction

- **Heading Font Family**: `Outfit`, sans-serif (Endüstriyel, modern, teknik karakter).
- **Body Font Family**: `Inter`, sans-serif (Yüksek dijital okunabilirlik).
- **Hierarchy Rules**:
  - Hero Title: `2.75rem` / `3.5rem` (`bold`, `line-height: 1.15`).
  - Section Headings: `1.875rem` / `2.25rem` (`semibold`).
  - Card Titles: `1.25rem` (`medium`).
  - Body Text: `1rem` (`regular`, `line-height: 1.6`).
  - Technical Badges: `0.75rem` (`uppercase`, `tracking-wider`).

## 6. Interaction & Motion Principles

- **Dengeli Mikro Etkileşimler**: Kart hover durumlarında hafif yukarı kayma (`transform: translateY(-2px)`), sınır parlaklığı değişimi ve turuncu accent vurgusunun belirginleşmesi.
- **Geçiş Süreleri**: Smooth ve kararlı `200ms ease-out` CSS geçişleri. Yapay, yavaşlatan animasyonlardan kaçınılmıştır.
- **Touch-Friendly Target Sizes**: Mobilde tüm tıklanabilir buton ve CTA alanları minimum `48px` yükseklikte tasarlanacaktır.

## 7. Responsive Principles

- **Desktop (>= 1024px)**: Çok sütunlu ızgara, yan yana Hizmet kartları ve zengin kurumsal sunum.
- **Tablet (768px - 1023px)**: 2 sütunlu uyarlanabilir kart düzeni, esnek hero alanı.
- **Mobile (< 768px)**: Tek sütunlu dikey akış, sabit veya kolay erişilebilir mobil iletişim CTA barı (`tel:` / `mailto:`).

## 8. Accessibility Baseline

- **Contrast Ratio**: Metin ve arka plan renkleri arasında WCAG AA standardına uygun minimum `4.5:1` kontrast oranı (açık metinler koyu yüzeyler üzerinde).
- **Focus States**: Klavye gezintisinde görünür odak halkası (`outline: 2px solid #E55B13`).
- **Semantic HTML**: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, `<a>` etiketlerinin doğru hiyerarşik kullanımı.

## 9. Imagery / Iconography Direction

- **Varlık Yaklaşımı**: Vektörel endüstriyel ikon seti (dişli, hidrolik piston, yedek parça, anahtar/bakım simgeleri).
- **Görsel Tarzı**: Stok fotoğraf kopyası yerine, teknik çizim, yüksek kaliteli makine detayları ve endüstriyel tonlamaya sahip görseller.

## 10. Explicit Design Anti-Patterns

- **Yasak 1**: Jenerik mavi gradient SaaS veya kurumsal hazır template tasarımları.
- **Yasak 2**: Düşük kontrastlı, okunamayan açık gri metinler.
- **Yasak 3**: Fonksiyonel amacı olmayan yavaşlatıcı ve gereksiz JS animasyonları.
- **Yasak 4**: Mobil ekranda tıklanması zor küçük veya hizasız butonlar.
