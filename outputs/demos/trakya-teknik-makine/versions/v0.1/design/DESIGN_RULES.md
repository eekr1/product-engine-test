# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

- **Design Concept**: **Endüstriyel Hassasiyet ve Ağır Makine Güveni (Technical Industrial Precision & Heavy Mechanical Trust)**.
- **Karakter**: Güvenilir, teknik uzmanlığa sahip, net, modern ve operasyonel disiplin hissettiren görsel dildir.
- **Odak**: Karmaşık hazır temalar yerine yüksek tipografik kontrast, derinlikli koyu/açık endüstriyel yüzeyler, teknik ızgara (grid) çizgileri, metalik tonlar ve amber/turuncu vurgu detayları ile Trakya bölgesindeki makine kullanıcılarına anında güven verir.

## 2. Differentiation / Anti-Template Rationale

- **Klişe Reddi**: Klasik sanayi sitelerinin generic "doygun lacivert hero + 3 mavi kart + varsayılan footer" şablon dili reddedilmiştir.
- **Özgün Yön**:
  - Hero alanında jenerik fabrika stoğu yerine tipografik hiyerarşisi güçlü, "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" rozeti ile taçlandırılmış koyu şık endüstriyel yüzey kullanılır.
  - Hizmet kartları sıradan kutular olarak değil; teknik parametre detay alanına, mikro-hover asimetrisine ve yüksek kontrastlı renk kodlamasına sahip özel yüzeyler olarak tasarlanır.
  - Görsel dil satış demosu sunumunda ekran kalitesini ve profesyonelliği ön plana çıkarır.

## 3. Composition & Layout Principles

- **Grid System**: 12 kolonlu esnek container düzeni (`max-width: 1280px`, `padding: 0 1.5rem`).
- **Surface Layering**: 3 ana yüzey katmanı (Layer 0: `#0F172A` deep background, Layer 1: `#1E293B` container card surface, Layer 2: `#334155` elevated detail surface).
- **Whitespace & Spacing**: Modüller arası ferah boşluklar (vertical section spacing `80px` desktop, `48px` mobile).

## 4. Color Direction & Semantic Roles

- **Primary Brand Dark**: `#0F172A` (Slate Navy/Deep Charcoal) — Ana arka plan ve hero gövdesi.
- **Surface Elevation**: `#1E293B` (Gunmetal Slate) — Kartlar, kapsayıcılar ve modül alanları.
- **Industrial Accent Warm**: `#F97316` / `#EA580C` (Industrial Safety Ember Orange) — Birincil CTA butonları, yetkili servis rozeti ve vurgu noktaları.
- **Neutral Steel Light**: `#F8FAFC` — Yüksek kontrastlı metinler ve temiz açık alanlar.
- **Muted Steel Text**: `#94A3B8` / `#64748B` — İkincil metinler ve teknik etiketler.
- **Semantic Border**: `#334155` — İnce teknik ayrım çizgileri.

## 5. Typography Direction

- **Primary Font Family**: `'Outfit', 'Inter', -apple-system, sans-serif`.
- **Hero Title**: `2.75rem` - `3.5rem`, `font-weight: 700`, `line-height: 1.15`, `letter-spacing: -0.02em`.
- **Section Heading**: `2.0rem` - `2.25rem`, `font-weight: 700`, `line-height: 1.2`.
- **Card Heading**: `1.25rem` - `1.5rem`, `font-weight: 600`.
- **Body Copy**: `1.0rem`, `font-weight: 400`, `line-height: 1.6`.

## 6. Interaction & Motion Principles

- **Micro-Interactions**: Buton ve kartlarda 200ms cubic-bezier pürüzsüz hover geçişleri (`transform: translateY(-4px)`, `box-shadow` ve kenar vurgu rengi değişimi).
- **CTA Focus**: Direct contact CTA yüzeyleri (telefon ve e-posta) kullanıcı imleci geldiğinde canlı amber parıltısı ve görünür tel/mailto reaksiyonu üretir.

## 7. Responsive Principles

- **Desktop (1200px+)**: Tam genişlikli 3 kolonlu hizmet düzeni, sabit navigasyon barı, bölünmüş hero layout.
- **Tablet (768px - 1024px)**: 2 kolonlu adaptif grid, daraltılmış padding'ler, dokunma dostu CTA yüzeyleri.
- **Mobile (320px - 767px)**: Tek kolonlu dikey akış, kolay dokunulabilir mobil menü ve alt kısma sabitlenebilir mobil hızlı arama CTA çubuğu.

## 8. Accessibility Baseline

- **Contrast Ratio**: Metin ve arka plan arasında minimum 4.5:1 (WCAG AA) kontrast oranı.
- **Focus States**: Klavye ve ekran okuyucu gezintisi için görünür 2px amber odaklama dış çizgisi (`outline: 2px solid #F97316`).
- **Semantic Tags**: Semantic HTML5 element kullanımı (`header`, `nav`, `main`, `section`, `article`, `footer`).

## 9. Imagery / Iconography Direction

- **Iconography**: Temiz, vektörel, 2px stroke genişliğinde endüstriyel ikon seti (dişli, ingiliz anahtarı, teknik paket, telefon, e-posta).
- **Imagery**: Ağır makine parçaları, hidrolik elemanlar ve teknik servis bağlamını temsil eden yüksek kontrastlı vektörel/grafik kompozisyonlar.

## 10. Explicit Design Anti-Patterns

- **Yasak**: Jenerik mavi-lacivert "SaaS/Bootstrap" temaları.
- **Yasak**: Düşük kontrastlı gri metinler veya okunaksız küçük fontlar.
- **Yasak**: Abartılı, işlevsiz ve performansı düşüren 3D/parçacık animasyonları.
- **Yasak**: Görsel tasarım adına factual allowlist dışındaki firma iddialarını "rozet/sertifika" gibi gösterip uydurmak.
