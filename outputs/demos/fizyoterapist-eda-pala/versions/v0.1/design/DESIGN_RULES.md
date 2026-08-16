# Fizyoterapist Eda Pala Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

- **Design Persona**: Duru, insani, sakin, güven veren ve modern bir kişisel marka estetiği.
- **Visual Concept**: *Serene Human Professionalism*. Sağlık ve fizyoterapi alanının gerektirdiği huzurlu ve güven verici karakteri, abartılı klinik klişeleri yerine cömert whitespace, dengeli asimetri, yüksek kontrastlı okuma deneyimi ve doğal tonlar ile yansıtır.
- **Design Planning**: `light` — Bu belge visual direction authority'si olarak tüm renk, tipografi, kompozisyon ve etkileşim esaslarını belirler.

## 2. Differentiation / Anti-Template Rationale

- **Kaçınılan Sektör Klişeleri**:
  - Geleneksel klinik turkuazı/mavi gradient arka planlar.
  - Stok doktor/hemşire/klinik odası fotoğrafları.
  - 3 jenerik hizmet kartı dizilimi.
  - Sahte hasta değerlendirmeleri veya sahte istatistik sayaçları.
- **Farklılaşma Yaklaşımı**:
  - İsim, unvan ve şehir odaklı kişisel vitrin düzeni.
  - Doğal warm neutral arka planlar, derin sage/forest green vurgular.
  - Tipografik hiyerarşi ve alan genişliği ile sağlanan sakinlik hissi.

## 3. Composition & Layout Principles

- **Layout Hierarchy**:
  - **Single Page Canvas**: Akıcı, bölüm sınırları yumuşatılmış dikey okuma düzeni.
  - **Generous Whitespace**: İçerik elemanları arasında ferah nefes alanları (`clamp(2rem, 5vw, 6rem)` dikey spacing).
  - **Asymmetric Balance**: Başlık ve biyografi kısımlarında sol ağırlıklı, geniş tipografi odağı.
- **Container Bounds**:
  - Maximum content width: `1120px`
  - Text column width: `680px` (optimum okuma rahatlığı)
  - Horizontal padding: `clamp(1.25rem, 4vw, 3rem)`

## 4. Color Direction & Semantic Roles

| Token Role | Value (HSL / Hex) | Usage / Meaning |
|---|---|---|
| `color-bg-primary` | `hsl(40, 20%, 98%)` / `#FAF9F5` | Sıcak krem/off-white zemin (insani ve huzurlu) |
| `color-bg-surface` | `hsl(0, 0%, 100%)` / `#FFFFFF` | Kart ve öne çıkan yüzey beyazı |
| `color-text-primary` | `hsl(160, 20%, 12%)` / `#16231E` | Derin koyu şamdan (yüksek okunabilirlik) |
| `color-text-secondary` | `hsl(160, 10%, 40%)` / `#5B6B64` | İkincil açıklama ve bağlam metni |
| `color-brand-primary` | `hsl(158, 32%, 26%)` / `#2D5545` | Sakin yeşil (güven ve doğallık vurgusu) |
| `color-brand-accent` | `hsl(158, 25%, 38%)` / `#477662` | Hover ve etkileşim vurgusu |
| `color-border-subtle` | `hsl(40, 15%, 88%)` / `#E8E5DC` | İnce ayrım çizgileri |
| `color-instagram-accent`| `hsl(340, 75%, 54%)` / `#E1306C` | Onaylı Instagram outbound CTA rozeti/vurgusu |

## 5. Typography Direction

- **Primary Font Family**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `sans-serif`.
- **Heading Character**: Duru, kendinden emin, harf aralıkları hafif daraltılmış (`letter-spacing: -0.02em`).
- **Scale Matrix**:
  - `Display / Hero Title`: `clamp(2.25rem, 5vw, 3.75rem)` / Weight: `600` / Line height: `1.15`
  - `Section Heading (H2)`: `clamp(1.75rem, 3.5vw, 2.5rem)` / Weight: `600` / Line height: `1.2`
  - `Subheading / Lead`: `clamp(1.125rem, 2vw, 1.375rem)` / Weight: `400` / Line height: `1.5`
  - `Body Text`: `1rem` (16px) / Weight: `400` / Line height: `1.65`
  - `Badge / Label`: `0.875rem` (14px) / Weight: `500` / Letter spacing: `0.05em` (uppercase)

## 6. Interaction & Motion Principles

- **Micro-Interactions**:
  - Fast, subtle feedback loops (150ms - 200ms ease-out transitions).
  - Outbound Instagram CTA button hover state: hafif yukarı yükselme (`transform: translateY(-2px)`) ve gölge derinliği artışı.
- **No Heavy Animations**: Dikkat dağıtıcı açılış animasyonları, dönen ikonlar veya kontrolsüz kayma efektleri kullanılmaz.

## 7. Responsive Principles

- **Fluid Breakpoints**:
  - `Mobile`: `< 640px` — Tek sütun düzen, tam genişlikte CTA.
  - `Tablet`: `640px - 1024px` — Dengeli marjinler, 2 sütun grid esnekliği.
  - `Desktop`: `> 1024px` — Geniş whitespace, asimetrik tipografik yerleşim.
- **Touch Ergonomics**: Mobil cihazlarda dokunma hedefleri minimum `48px x 48px` boyutundadır.

## 8. Accessibility Baseline

- **Color Contrast**: Tüm metin-zemin ikilileri minimum 4.5:1 (WCAG AA) seviyesini sağlar.
- **Keyboard Navigation**: Tüm etkileşimli öğeler (Instagram CTA, nav links) açıkça görülebilir `:focus-visible` konturuna sahiptir.
- **Screen Reader Support**: Semantik HTML5 etiketleri (`header`, `main`, `footer`, `nav`) ve `aria-label` nitelikleri zorunludur.

## 9. Imagery / Iconography Direction

- **Görsel Kullanımı**: Doğrulanmış fotoğraf bulunmadığı için uydurma stok doktor/hastalık resmi kullanılmaz. Tasarım tipografi, renk tonları ve temiz geometrik kartlar ile güçlendirilir.
- **Iconography**: Yalnızca onaylı dış bağlantı için minimalist SVG Instagram ikonu ve yön işareti kullanılır.

## 10. Explicit Design Anti-Patterns

- 🚫 Turkuaz/mavi stok tıbbi temalar.
- 🚫 Yanıp sönen, pop-up olarak açılan veya sahte aciliyet yaratan randevu modalları.
- 🚫 Doğrulannamış adres/klinik harita placeholders.
- 🚫 Aşırı renkli gradient arka planlar ve okunabilirliği düşüren düşük kontrastlı metinler.
