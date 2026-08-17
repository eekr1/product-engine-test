# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

Trakya Teknik Makine tasarımı **"Endüstriyel Precision & Kurumsal Güven"** konsepti etrafında şekillenmiştir. Proje visual language olarak koyu teknik antrasit yüzeyler (`#0B0F17`, `#151C28`), hassas mühendislik detaylarını vurgulayan canlı amber/turuncu vurgular (`#F59E0B`, `#D97706`), teknik çizim/şema esintili ince ızgara çizgileri ve keskin kurumsal hiyerarşi kullanır.

## 2. Differentiation / Anti-Template Rationale

- **Sektör Klişelerinden Kaçınma**: "Sanayi/makine firması = düz lacivert background + jenerik stok fotoğraf + 3 kartlı hero" şablonu reddedilmiştir.
- **Teknik Şema & Grid Dil**: Yüzey ayrım hatlarında ince teknik sınırlar, teknik rozetler (Disan yetkili servis rozeti), hassas tipografi ve mikron düzeyinde hover etkileşimleri ile özgün bir kurumsal kimlik oluşturulmuştur.
- **Koyu Antrasit Yüzey Derinliği**: Koyu arka plan jenerik "dark mode" değil; ağır sanayi, teknik hassasiyet ve dayanıklılık hissi veren kademeli antrasit katmanlardan oluşur.

## 3. Composition & Layout Principles

- **12 Kolonlu Esnek Grid**: Tüm sayfalarda 12 kolonlu izlenebilir layout grid kullanılır.
- **Asimetrik / Odaklı Section Yapısı**: Ana sayfada teknik uzmanlığı öne çıkaran geniş hero alanı, yanında yetkili servis kartı; hizmet detaylarında ise Sol Odak Panel + Sağ Bilgi Kartı yapısı tercih edilir.
- **Cömert Boşluk (Generous Spacing)**: Bölümler arasında 80px - 120px arası dikey boşluk bırakılarak endüstriyel ferahlık sağlanır.

## 4. Color Direction & Semantic Roles

- **Primary Background**: `#0B0F17` (Deep Industrial Anthracite)
- **Surface / Card Background**: `#151C28` (Technical Dark Slate)
- **Surface Hover**: `#1E2738` (Elevated Technical Surface)
- **Primary Accent**: `#F59E0B` (Precision Amber / Industrial Orange)
- **Primary Accent Hover**: `#D97706` (Deep Amber Accent)
- **Text Main**: `#F3F4F6` (Cool Light Grey)
- **Text Muted**: `#9CA3AF` (Technical Neutral Grey)
- **Border / Divider**: `#2D3748` (Technical Line / Structural Border)

## 5. Typography Direction

- **Primary Font Stack**: `Inter`, system-ui, sans-serif (yüksek okunabilirlik ve teknik netlik).
- **Monospace / Accent Font Stack**: `JetBrains Mono`, monospace (kod/teknik referans ve rozet vurguları için).
- **Hiyerarşi**:
  - Display 1 (Hero Title): 48px - 64px, Extra Bold (1.1 line-height)
  - Heading 1 (Page Title): 36px - 44px, Bold
  - Heading 2 (Section Title): 24px - 32px, SemiBold
  - Heading 3 (Card Title): 18px - 22px, SemiBold
  - Body Text: 16px, Regular (1.6 line-height)
  - Small / Technical Badge: 13px - 14px, Medium / Monospace

## 6. Interaction & Motion Principles

- **Hover Transitions**: 200ms - 300ms `ease-out` renk ve border parlaklığı geçişleri.
- **Micro-Animations**: Kart hover durumunda amber renkte ince sol vurgu çizgisi görünmesi (`border-left: 3px solid #F59E0B`).
- **Controlled Motion**: Karmaşık parıldamalar veya ekranı kaplayan animasyonlar yerine kurumsal ciddiyeti koruyan teknik geçişler.

## 7. Responsive Principles

- **Desktop (>= 1024px)**: Çok kolonlu zengin grid, tam navigasyon barı.
- **Tablet (768px - 1023px)**: 2 kolonlu kart düzeni, daraltılmış padding.
- **Mobile (< 768px)**: Tek kolonlu akış, tam ekran mobil hamburger drawer menü, dokunma dostu butonlar (min 44px height).

## 8. Accessibility Baseline

- **Kontrast Oranı**: Metin ve arka plan arasında minimum 4.5:1 WCAG AA kontrast oranı.
- **Focus Indicators**: Klavyeyle gezintide belirgin amber renkte focus ring (`outline: 2px solid #F59E0B`).
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` etiketlerinin eksiksiz kullanımı.

## 9. Imagery / Iconography Direction

- İkon dili: Feather / Lucide tarzı 1.5px strok kalınlığına sahip net teknik vektör ikonlar.
- İllüstrasyon/Görsel: Sanayi/ekipman parçaları, teknik çizim esintili vektör şemalar veya koyu antrasit yüzey uyumlu görseller.

## 10. Explicit Design Anti-Patterns

- Yasak 1: Jenerik lacivert gradient + stok fotoğraf hero düzeni.
- Yasak 2: Tasarım serbestliği gerekçesiyle iletişim formu, input alanları veya submit butonları eklemek.
- Yasak 3: Distinct sayfaları aynı sayfada kaydırılan tek-page section'lara indirmek.
- Yasak 4: Yanıp sönen neon renkler veya sanayi ciddiyetini bozan uyumsuz oyunumsu bileşenler.
