# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Visual Concept Name**: *"Industrial Precision & Technical Authority"* (Endüstriyel Hassasiyet ve Teknik Güven)
- **Tasarım Karakteri**: Güvenilir, yüksek mühendislik hissi veren, keskin ve modern hatlara sahip, teknik derinliği yüksek kurumsal estetik.
- **Kullanım Bağlamı**: Trakya bölgesindeki sanayi tesisleri, fabrika yöneticileri ve makine kullanıcıları ile yapılacak satış görüşmelerinde firmanın uzmanlığını "mevcut sitenizi bu kaliteye taşıyabiliriz" mesajıyla canlı olarak kanıtlamak.

## 2. Differentiation / Anti-Template Rationale

- **Lacivert Klişesinin Reddi**: Sanayi/kurumsal denilince akla gelen varsayılan lacivert kurumsal hero şablonları reddedilmiştir.
- **Özgün Palette & Kompozisyon**: Arka planda derin antresit/çelik tonları (`#0F172A`), vurgu rengi olarak sıcak endüstriyel kehribar (`#D97706` / `#F59E0B`), yüzey katmanlarında mikro dokulu mat gri gradyanlar ve teknik ızgara (grid) çizgileri tercih edilmiştir.
- **Yetkili Servis Belirginliği**: Disan Hidrolik yetkili servisliği, sıradan bir metin gibi değil; teknik rozet (technical badge) ve onaylı servis sertifikası kart yapısı ile görselleştirilmiştir.

## 3. Composition & Layout Principles

- **Grid & Spacing**: 12-sütunlu esnek grid. Dikey boşluklar `4px` tabanlı (8, 16, 24, 32, 48, 64, 96px) ritmik ölçek ile yönetilir.
- **Surface Elevation (Katmanlı Yüzeyler)**: 
  - Level 0 (Zemin): `#0F172A` (Slate Dark)
  - Level 1 (Kart Yüzeyleri): `#1E293B` (Slate Card) + `#334155` border
  - Level 2 (Hover/Active Yüzeyler): `#334155` + Amber Glow Accent

## 4. Color Direction & Semantic Roles

- **Primary Brand / Dark Background**: `#0F172A` (Slate 900) — Teknik zemin.
- **Secondary Surface**: `#1E293B` (Slate 800) — Yüzey kartları.
- **Accent Industrial Amber**: `#D97706` (Amber 600) / `#F59E0B` (Amber 500) — Aksiyon düğmeleri, hizmet vurguları, CTA.
- **Text Main**: `#F8FAFC` (Slate 50) — Ana başlık ve metinler.
- **Text Muted**: `#94A3B8` (Slate 400) — İkincil metinler ve teknik detaylar.
- **Status Success**: `#10B981` (Emerald 500) — İletişim formu başarı ve canlı durum işaretçisi.

## 5. Typography Direction

- **Font Family**: Primary System Sans (`Inter`, `system-ui`, `-apple-system`, `sans-serif`).
- **Monospace Accent**: `JetBrains Mono` / `ui-monospace` — Parça numaraları, servis kodları ve teknik etiketler için.
- **Scale**:
  - H1 Hero: `2.75rem` / `44px` (Mobile) — `4rem` / `64px` (Desktop), Bold (700)
  - H2 Section: `2rem` / `32px` — `2.5rem` / `40px`, SemiBold (600)
  - H3 Card Title: `1.25rem` / `20px` — `1.5rem` / `24px`, SemiBold (600)
  - Body Text: `1rem` / `16px`, Regular (400), `line-height: 1.6`

## 6. Interaction & Motion Principles

- **Hover States**: Düğmeler ve hizmet kartları üzerinde `200ms ease-in-out` ile yumuşak Amber kenarlık parlaması (amber border glow) ve dikey `translateY(-4px)` yükselme.
- **Micro-Animations**: Sayfa bölümleri kaydırıldıkça kontrollü fade-in ve subtle slide-up animasyonları.
- **No Novelty Distraction**: Animasyonlar navigasyonu ve okunabilirliği yavaşlatmayacak hızda tutulmalıdır.

## 7. Responsive Principles

- **Mobile First Approach**: 320px — 767px arasında tek sütunlu kart düzeni, dokunmatik kolay (minimum 44x44px touch target) butonlar ve kaydırılabilir mobil çekmece menü (drawer).
- **Tablet / Desktop**: 768px — 1024px+ ekranlarda 2 ve 3 sütunlu kart yerleşimi, sabit üst navigasyon çubuğu ve hızlı erişim telefon CTA'sı.

## 8. Accessibility Baseline

- **Contrast**: Tüm metin-arka plan kombinasyonlarında minimum WCAG AA (4.5:1) kontrast oranı.
- **Keyboard Navigation**: Tüm etkileşimli elemanlar (butonlar, form girdileri, linkler) `Tab` tuşu ile odaklanabilir olmalı ve açık görünür focus ring taşımalıdır.

## 9. Imagery / Iconography Direction

- **Iconography**: Clean, 2px stroke-width SVG vektör ikonlar (Lucide / Feather Icons).
- **Imagery**: Yüksek çözünürlüklü endüstriyel makine, hidrolik sistem, yedek parça ve teknik bakım görselleri. Görseller `#0F172A` kaplama ile ton uyumuna getirilir.

## 10. Explicit Design Anti-Patterns

- ❌ Lacivert-mavi varsayılan kurumsal site teması.
- ❌ Düşük kontrastlı gri metinler.
- ❌ Mobil cihazlarda taşan kartlar veya tıklandığı anlaşılmayan küçük butonlar.
- ❌ Aşırı ve yavaşlatan 3D/paralaks efektleri.
