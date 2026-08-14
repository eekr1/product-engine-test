# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Concept Adı**: *"Industrial Precision & Trust Engine"* (Hassas Endüstriyel Güven)
- **Visual Concept Narrative**: Trakya Teknik Makine tasarımı; ağrısız teknik servis, yüksek hassasiyetli makine bakımı ve Disan Hidrolik yetkili servisliğinin arkasındaki mühendislik ciddiyetini yansıtır. Görsel dil; ham metalik yüzey tonları, mikro işlenmiş teknik hatlar, yüksek kontrastlı okuma alanları ve yapılandırılmış servis kartları üzerine kuruludur.
- **Karakter Sıfatları**: Hassas, Güvenilir, Teknik, Modern, Net, Dinamik.

## 2. Differentiation / Anti-Template Rationale

- **Anti-Template Davranışı**: Klasik "sanayi sitesi = hazır lacivert şablon + stok baretli adam fotoğrafı + 3 kutulu hero" klişesi kesinlikle reddedilmiştir.
- **Nasıl Ayrışıyor?**:
  - Tipografik hiyerarşide modern teknik sans-serif (Inter / Outfit) ve sayısal değerler için monospaced detay vurguları kullanılmıştır.
  - Siyah-koyu kömür gri yüzeyler ile endüstriyel saf turuncu ve hidrolik çelik mavisi arasında yüksek enerjili kontras kurulmuştur.
  - Hizmet kartları sıradan kutular değil, teknik veri kartı (spec sheet) hissi veren kenarlara, mikro etkileşimlere ve canlı servis durum rozetlerine sahiptir.

## 3. Composition & Layout Principles

- **Asimetrik Izgara (Asymmetric Grid):** Sol kanatta kurumsal güven ve yetkili servis rozetleri sabit tutulurken, sağ kanatta hizmetler ve hızlı iletişim aksiyonları akar.
- **Bölüm Ayırıcıları:** Temiz mikro 1px teknik çizgi ayırıcılar (`border-slate-800`) ve kontrollü boşluk sistemi (padding: `4rem` / `6rem`).
- **Visual Anchor Points:** Her ana bölümde gözü yönlendiren turuncu vurgulu alanlar veya koyu çelik kart yüzeyleri.

## 4. Color Direction & Semantic Roles

- **Yüzey & Arka Planlar**:
  - Main Canvas: `#0f172a` (Koyu Çelik Slate)
  - Card Surface: `#1e293b` (Kömür Gri / Derin Metal)
  - Surface Border: `#334155` (Teknik Kenarlık)
- **Birincil Vurgu (Primary Brand Accent)**:
  - Industrial Amber / Service Orange: `#f97316` (Enerji, Hızlı Müdahale, Teknik Servis)
  - Hover Accent: `#ea580c`
- **İkincil Güven Rengi (Authorized Service / Trust)**:
  - Disan Hydraulic Blue: `#0284c7` (Teknik Yetkinlik, Güvenilirlik)
- **Metin & Okunabilirlik**:
  - Primary Text: `#f8fafc` (Yüksek Kontrastlı Beyaz)
  - Secondary Text: `#94a3b8` (Net Gri)

## 5. Typography Direction

- **Primary Font**: `Inter`, sans-serif (Yüksek ekran okunabilirliği, kurumsal ve modern).
- **Heading / Accent Font**: `Outfit`, sans-serif (Güçlü teknik başlık karakteri, geometri).
- **Numeric / Spec Font**: `JetBrains Mono` veya `ui-monospace` (Yedek parça kodları, çalışma saatleri ve telefon hatlarında teknik kesinlik hissi).
- **Scale**:
  - Hero H1: `2.75rem` / `3.5rem` (Font Weight: 800)
  - Section H2: `2rem` / `2.25rem` (Font Weight: 700)
  - Card H3: `1.25rem` (Font Weight: 600)
  - Body: `1rem` (Line Height: 1.6)

## 6. Interaction & Motion Principles

- **Hover Micro-Animations**: Hizmet kartları üzerine gelindiğinde `transform: translateY(-4px)` kalkışı, kenarlık renginin `#f97316` turuncusuna yumuşak geçişi (`transition: all 0.25s ease`).
- **Call-to-Action Feedback**: Telefon ve e-posta butonlarında dalga / pulse efekti ve anlık durum görselleştirmesi.
- **Motion Restraint**: Ağır ve gereksiz JS animasyonları yok; CSS GPU hızlandırmalı hızlı etkileşimler (`will-change: transform`).

## 7. Responsive Principles

- **Mobile First Focus**: Mobil cihazlarda (320px - 768px) tek sütunlu akar düzen, sabit (sticky) telefon hızlı erişim barı ve dokunmatik uyumlu hamburger menü.
- **Desktop Grid (1024px+)**: Çok sütunlu servis ızgarası, kurumsal güven yan paneli ve görsel hiyerarşi.

## 8. Accessibility Baseline

- **WCAG 2.1 AA Kontrast Standardı**: Tüm metinler koyu arka plan üzerinde en az 4.5:1 kontrast oranını karşılar.
- **Keyboard Navigation**: Tüm buton ve bağlantılarda belirgin focus ring (`outline: 2px solid #f97316`).
- **Touch Target Size**: Mobil butonlarda minimum 48px x 48px dokunma alanı.

## 9. Imagery / Iconography Direction

- **Icon Set**: Lucide / Heroicons stilinde temiz, mikro stroke (2px) endüstriyel SVG ikonlar (Somun/Anahtar, Dişli, Kamyon/Saha Servisi, Parça/Kutu, Telefon).
- **Imagery**: Stok jenerik fotoğraflar yerine endüstriyel hidrolik kesitleri, makine görselleri veya temiz SVG vektörel servis şemaları.

## 10. Explicit Design Anti-Patterns

- ❌ Jenerik bootstrap / klasik mavi kurumsal şablon görünümü.
- ❌ Düşük kontrastlı gri üzeri koyu gri okunamaz metinler.
- ❌ Aşırı ve yavaşlatan 3D / parallax animasyon çılgınlığı.
- ❌ Stok baretli insan fotoğraflarıyla sahte kurumsallık yaratma.
