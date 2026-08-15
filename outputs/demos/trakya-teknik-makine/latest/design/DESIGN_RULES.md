# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

- **Design Concept**: **"Precision Heavy Machinery Service & Regional Mastery" (Hassas Endüstriyel Teknik Mimarisi)**.
- **Tasarım Karakteri**: Teknik uzmanlık, ağır sanayi güvenilirliği, milimetrik hassasiyet ve endüstriyel olgunluk hissi veren modern bir görsel dil.
- **Kişilik ve Ton**: Güçlü, net, teknik, düzenli, güven veren ve doğrudan hedefe ulaştıran profesyonel mühendislik estetiği.

## 2. Differentiation / Anti-Template Rationale

- **Sektör Klişesi Reddi**: Sektördeki sıradan "generic lacivert hero + 3 hizasız kart + standart mat footer" klişesi kullanılmayacaktır.
- **Özgün Tasarım Ayrışması**:
  - Standart stok sanayi fotoğrafı yerine özel teknik çizim motifleri, hassas ölçü çizgileri (technical grid metrics), endüstriyel tipografi oranları ve koyu/açık kontrast mimarisi kullanılacaktır.
  - Hizmet kartları sıradan kutular değil, teknik veri paftalarını andıran detaylı hiyerarşiye ve belirgin visual focus noktalarına sahip olacaktır.
  - Yetkili Servis statüsü (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi) üst düzey bir mühendislik rozeti gibi premium bir badge yapısıyla vurgulanacaktır.

## 3. Composition & Layout Principles

- **Asimetrik Mühendislik Izgarası (Technical Asymmetric Grid)**: Ekran alanı %60-%40 odak oranıyla hizalanır. Hero bölümünde sol tarafta yetkili servis vurgusu ve firma mesajı, sağ tarafta ise 3 ana hizmetin dinamik teknik önizlemesi yer alır.
- **Bölüm Hiyerarşisi (Section Hierarchy)**:
  1. *Global Navigation Header*: Marka, Yetkili Servis Statüsü ve Hızlı İletişim CTA'ları.
  2. *Hero Section (Brand & Authorized Service Status)*: Statü rozeti, ana manşet, hızlı eylem butonları (`tel:`, `mailto:`).
  3. *Authorized Service Focus Area*: Disan Hidrolik Trakya Yetkili Servis yetkinliğini öne çıkaran özel kurumsal tanıtım bloğu.
  4. *Core Services Grid (3 Approved Services)*: `Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım` kartları.
  5. *Regional Context & Corporate Trust Section*: Trakya bölgesi endüstriyel teknik servis bağlamı.
  6. *Direct Contact CTA & Footer*: Tel/E-posta erişim alanları ve kurumsal künye.

## 4. Color Direction & Semantic Roles

- **Primary Brand Color (Steel Blue)**: `hsl(215, 45%, 22%)` (#1E2D42) — Ağır sanayi, çelik ve kurumsal teknik güven hissi.
- **Accent Highlighting Color (Industrial Amber)**: `hsl(38, 92%, 50%)` (#F59E0B) — Hassasiyet, teknik dikkat ve CTA aksan rengi.
- **Surface & Background Colors**:
  - *Light Surface*: `hsl(210, 20%, 98%)` (#F8FAFC) — Temiz, okunabilir ana arka plan.
  - *Card Surface*: `hsl(0, 0%, 100%)` (#FFFFFF) — Keskin konturlu kart yüzeyleri.
  - *Contrast Technical Bar*: `hsl(215, 50%, 12%)` (#0F172A) — Koyu teknik vurgu bantları.
- **Text & Muted Colors**:
  - *Heading Text*: `hsl(215, 60%, 10%)` (#091E36) — Yüksek kontrastlı başlık metinleri.
  - *Body Text*: `hsl(215, 20%, 30%)` (#334155) — Okunabilir gövde metinleri.
  - *Muted Text & Lines*: `hsl(215, 15%, 65%)` (#94A3B8) — Teknik çizim kılavuz hatları.

## 5. Typography Direction

- **Primary Font Family**: **Outfit** veya **Inter** (Google Fonts — Modern, geometrik ve okunabilir endüstriyel sans-serif).
- **Secondary Monospace Accent**: **JetBrains Mono** veya **Space Mono** (Teknik kodlar, badge'ler ve ölçü etiketleri için).
- **Type Scale**:
  - *Hero Title (H1)*: 2.75rem / 3.5rem (Desktop), 1.85rem / 2.25rem (Mobile) — Bold 700.
  - *Section Title (H2)*: 2.0rem / 2.5rem — SemiBold 600.
  - *Service Card Title (H3)*: 1.25rem / 1.75rem — Medium 500.
  - *Body Text*: 1.0rem / 1.6rem — Regular 400.
  - *Technical Badge / Code Label*: 0.85rem — Monospace SemiBold.

## 6. Interaction & Motion Principles

- **Subtle Technical Transitions**: Buton hover, kart yükselmesi ve linye geçişlerinde 200ms `cubic-bezier(0.16, 1, 0.3, 1)` mikro etkileşimleri.
- **Focus Highlighting**: Servis kartları üzerinde gezinirken kart çerçevesinde Industrial Amber renkli teknik hizalama çizgilerinin belirmesi.
- **Motion Restraint**: Aşırı parlayan neon animasyonlar veya dikkat dağıtıcı büyük kaydırmalar yasaktır; hareket yalnızca teknik odağı yönlendirmek içindir.

## 7. Responsive Principles

- **Mobile First / Fluid Layout**:
  - *Mobile (360px - 767px)*: Tek kolonlu dikey düzen; telefon CTA'sı ekranın altında sabit erişilebilir eylem çubuğu (sticky CTA bar) olarak konumlanır.
  - *Tablet (768px - 1023px)*: 2 kolonlu grid düzeni.
  - *Desktop (1024px+)*: 3 kolonlu hizmet kartları düzeni ve geniş asimetrik hero yapısı.

## 8. Accessibility Baseline

- **Contrast Ratios**: Tüm metinler WCAG AA standardına uygun en az 4.5:1 kontrast oranını karşılayacaktır.
- **Keyboard Navigation**: Tüm CTA butonları ve linkler açık `outline-offset` ve `focus-visible` stillerine sahip olacaktır.
- **Semantic Structure**: Doğru HTML5 anlamsal etiketleri (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<h1>`-`<h3>`) kullanılacaktır.

## 9. Imagery / Iconography Direction

- **Icon Style**: İnce hatlı endüstriyel SVG ikonlar (1.75px stroke width, keskin teknik köşe hatları).
- **Visual Assets**: Dişli, hidrolik semboller ve teknik çizim şematik vektörleri; generic hazır stok fotoğrafların yerini alır.

## 10. Explicit Design Anti-Patterns

- **YASAK**: Generic varsayılan lacivert hero + 3 kart template hissi.
- **YASAK**: Görsel tasarımda belirsiz stok fotoğraf veya jenerik web template klişesi.
- **YASAK**: Source-backed olmayan firma sloganları, sertifikalar veya referans logoları eklemek.
- **YASAK**: Kontrastı düşük gri metinler veya okunabilirliği bozan zayıf font tercihleri.
