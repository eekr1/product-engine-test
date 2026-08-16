# Fizyoterapist Eda Pala Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

- **Design Concept**: **"Human-Centric Digital Profile" (Insani, Sakin ve Özgün Dijital Profil)**.
- **Visual Character**: Klinik soğukluktan veya agresif ticari pazarlama bağırganlığından uzak; sıcak, dengeli, geniş nefes alan (whitespace), zarif tipografi ve yumuşak editoryal kompozisyon ritmine sahip dijital varlık.
- **Design Intent**: Ziyaretçiye Fizyoterapist Eda Pala'nın Tekirdağ'daki kişisel markasını ve mesleki duruşunu ilk bakışta yüksek güven ve profesyonellik duygusuyla aktarmak.

## 2. Differentiation / Anti-Template Rationale

- **Sektör Klişesi Reddi**: Sağlık/fizyoterapi sitelerinde sıklıkla kullanılan "turkuaz/mavi gradient + doktor stok fotoğrafı + 3 kutulu tedavi listesi + sahte müşteri yorumları" şablonu KESİNLİKLE KULLANILMAYACAKTIR.
- **Farklılaşma Yaklaşımı**: Sınırlı factual içerik kısıtı bir zayıflık değil, tasarımsal bir güç olarak ele alınır. Sayfa içeriği yapay kartlarla doldurulmaz; editoryal tipografi, asimetrik whitespace ritmi, rafine renk tonları ve mikro etkileşimler ile özgün bir kişisel marka deneyimine dönüştürülür.

## 3. Composition & Layout Principles

- **Grid System**: 12 sütunlu esnek CSS Grid / Flexbox düzeni (Desktop container max-width: `1200px`, padding: `24px`).
- **Whitespace & Rhythm**: Cömert dikey boşluklar (section spacing: `96px` desktop, `64px` mobile) ile içeriğin nefes alması sağlanır.
- **Asymmetric Balance**: Hero ve Profil bölümlerinde sol tarafta güçlü tipografik başlık ve unvan; sağ tarafta ise sakin visual card / subtle backdrop layer ile dengelenmiş kompozisyon.

## 4. Color Direction & Semantic Roles

- **Palette Concept**: Sıcak toprak tonları ve doğal taş renklerinin harmanlandığı sakin, güven veren palet.
  - **Background Primary**: `#FDFBF7` (Sıcak kırık beyaz / fildişi)
  - **Background Secondary**: `#F4EFEA` (Yumuşak keten / bej zemin)
  - **Text Primary (Heading & Main)**: `#1F2421` (Derin koyu füme / kömür)
  - **Text Muted / Subtitle**: `#5A625D` (Sakin adaçayı grisi)
  - **Accent / Primary Action**: `#3A5A40` (Derin orman yeşili / güven ve sağlık sembolü)
  - **Accent Hover**: `#344E41` (Derin tonlu gölge yeşil)
  - **Border / Subtle Divider**: `#E2DCD5` (Zarif taş çizgisi)

## 5. Typography Direction

- **Primary Font Family**: `'Outfit', sans-serif` (Modern, net, yüksek okunabilirlik ve editoryal karakterli sans-serif font).
- **Scale**:
  - `Display H1` (Hero Title): `3.25rem` / `52px` (Mobile: `2.25rem` / `36px`), font-weight: `700`, line-height: `1.15`
  - `H2` (Section Title): `2.25rem` / `36px` (Mobile: `1.75rem` / `28px`), font-weight: `600`, line-height: `1.25`
  - `Subtitle / Lead`: `1.25rem` / `20px`, font-weight: `400`, line-height: `1.6`
  - `Body`: `1.0rem` / `16px`, font-weight: `400`, line-height: `1.65`
  - `Button / CTA`: `0.95rem` / `15px`, font-weight: `600`, letter-spacing: `0.02em`

## 6. Interaction & Motion Principles

- **Micro-Interactions**: Outbound CTA butonunda yumuşak renk değişimi (`transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)`) ve hafif yukarı yükselme (`transform: translateY(-2px)`).
- **Subtle Focus Ring**: Klavyeyle gezinen kullanıcılar için belirgin accent outline (`outline: 2px solid #3A5A40`, `outline-offset: 4px`).
- **Smooth Scroll**: Sayfa içi gezinmelerde pürüzsüz kaydırma (`scroll-behavior: smooth`).

## 7. Responsive Principles

- **Breakpoints**:
  - Desktop: `1024px+`
  - Tablet: `768px` - `1023px`
  - Mobile: `< 768px`
- **Mobile Adaptations**: Tek sütunlu dikey akışa geçiş, touch target alanlarının genişletilmesi (min `44px x 44px`), hero ve profil alanlarında yazı boyutlarının fluid typography (`clamp()`) ile uyarlanması.

## 8. Accessibility Baseline

- **WCAG 2.1 AA Compliance**:
  - Text Primary / Background kontrast oranı minimum `7.5:1`.
  - Accent Button / White Text kontrast oranı minimum `4.8:1`.
- **Semantic Tags**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`..`<h3>`.
- **Outbound Link Accessibility**: Instagram linkinde `aria-label="Fizyoterapist Eda Pala Instagram Profilini Yeni Sekmede Aç"` ve `target="_blank" rel="noopener noreferrer"`.

## 9. Imagery / Iconography Direction

- **Imagery Rules**: Source material'de doğrulanmamış tıbbi müdahale, hasta bakımı veya klinik cihaz stok fotoğrafları KULLANILMAYACAKTIR.
- **Iconography**: Minimalist, ince çizgili SVG ikonları (Konum için zarif pin ikonu, Instagram için orijinal marka logosu SVG ikonu).

## 10. Explicit Design Anti-Patterns

- **DO NOT**: Sahte doktor/hasta stok fotoğrafı ekleme.
- **DO NOT**: Sahte tedavi/hizmet kartı grid'i oluşturma.
- **DO NOT**: Kaynakta olmayan telefon/adres placeholder kartları basma.
- **DO NOT**: Agresif pazarlama sayaçları, "Popüler Hizmetler" rozetleri veya dürüst olmayan "Hemen Randevu Al" modal pop-up'ları ekleme.
