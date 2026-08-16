# Fizyoterapist Eda Pala Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

Fizyoterapist Eda Pala kişisel markası için görsel konsept **"Serene Humanist Presence" (Dingin İnsani Varlık)** ilkeleri üzerine inşa edilmiştir.

Sağlık alanındaki klinik soğukluk, tıbbi medikal görsel baskısı veya yapay turkuaz gradient klişelerinden bilinçli olarak uzak durulur. Tasarım karakteri:
- **Dingin & Güven Verici**: Yumuşak, sıcak ve doğal tonlar, cömert beyaz alan kullanımı (whitespace).
- **Zarif & İnsan Odaklı**: Tipografik hiyerarşi odaklı, şeffaf, samimi ve modern kişisel dijital profil.
- **Odaklanmış & Net**: Uydurma metin yoğunluğundan kaçınarak, yalnızca onaylı verileri (`Eda Pala`, `Fizyoterapist`, `Tekirdağ`, Instagram) en yüksek görsel kaliteyle sunan düzen.

## 2. Differentiation / Anti-Template Rationale

Sağlık ve fizyoterapi sektöründeki generic template drift'ine karşı şu tasarım ayrışmaları uygulanır:

- **Klişe Reddi 1 (Parıl Parlak Turkuaz/Mavi Gradientler)**: Reddedilmiştir. Yerine sıcak taş, sıcak kum ve dingin orman/yaprak yeşili aksan tonları tercih edilir.
- **Klişe Reddi 2 (Stetoskoplu Doktor Stok Görselleri)**: Reddedilmiştir. Doğrulanmamış klinik veya tedavi iddiası üreten sahte stok fotoğrafları kullanılmaz.
- **Klişe Reddi 3 (3 Sahte Hizmet Kutusu / Tedavi Kartları)**: Reddedilmiştir. Doğrulanmamış tedavi kartları yerine doğrudan kişi adı, unvanı, Tekirdağ konum bağlamı ve Instagram outbound CTA'sı öne çıkarılır.

## 3. Composition & Layout Principles

- **Asimetrik & Dengeli Hiyerarşi**: Tipografiyi merkez alan, sol hiyerarşi çizgisi ve geniş sağ whitespace dengesi.
- **Section Rhythm**: Sayfa akışında nefes alan yüksek dikey boşluklar (`80px` - `120px` section spacing).
- **Container Strategy**: `max-width: 1140px` odaklı, içeriği dağıtmayan derli toplu grid düzeni.

## 4. Color Direction & Semantic Roles

- **Primary Accent (`--color-primary`)**: `#2C4A3E` (Deep Forest Serenity — Güven ve doğallık veren koyu meşe/orman yeşili).
- **Secondary Accent (`--color-secondary`)**: `#8C6D53` (Warm Clay / Sand — İnsani sıcaklık veren toprak tonu).
- **Background Main (`--color-bg-main`)**: `#FBF9F5` (Warm Alabaster — Gözü yormayan sıcak, krem-fildişi zemin).
- **Background Card (`--color-bg-card`)**: `#FFFFFF` (Purified Ivory White — Zemin üstünde yükselen temiz kartlar).
- **Text Main (`--color-text-main`)**: `#1C2421` (Charcoal Slate — Yüksek okunabilirlik sağlayan yumuşatılmış siyah).
- **Text Muted (`--color-text-muted`)**: `#5C6662` (Muted Sage Grey — İkincil detaylar ve konum bilgisi için dingin gri).
- **Border / Divider (`--color-border`)**: `#E5E0D8` (Warm Neutral Divider).

## 5. Typography Direction

- **Primary Heading Font**: `"Plus Jakarta Sans"`, sans-serif (Zarif, modern ve yüksek okuma konforu).
- **Body Font**: `"Inter"`, system-ui, sans-serif (Ekran okuması için optimize edilmiş nötr sans-serif).
- **Typography Scale**:
  - Hero Title (`h1`): ` clamp(2.5rem, 5vw, 4rem) `, `font-weight: 700`, `letter-spacing: -0.02em`.
  - Professional Subtitle: `1.25rem` - `1.5rem`, `font-weight: 500`, `color: var(--color-primary)`.
  - Location Badge: `0.95rem`, `font-weight: 600`, `text-transform: uppercase`, `letter-spacing: 0.05em`.
  - Body Text: `1.05rem`, `line-height: 1.65`.

## 6. Interaction & Motion Principles

- **Micro-Interactions Only**: Abartılı parallax veya karmaşık 3D animasyonlar yerine süresi `200ms` - `300ms` olan yumuşak `ease-in-out` geçişleri.
- **Button Hover Effect**: Subtle vertical lift (`translateY(-2px)`) ve soft shadow expansion (`box-shadow: 0 8px 24px rgba(44, 74, 62, 0.15)`).
- **Instagram Outbound CTA**: Sosyal ikon hover hareketinde renk yumuşaması ve net odak çerçevesi (`focus-visible`).

## 7. Responsive Principles

- **Fluid Breakpoints**:
  - Desktop: `1200px+` (İki kolonlu zarif düzen, hero ve kart dengesi).
  - Tablet: `768px - 1199px` (Esnek dikey hizalama, cömert dokunma alanları).
  - Mobile: `< 768px` (Tek kolonlu akış, `padding: 24px 16px`, tam genişlikte butonlar).

## 8. Accessibility Baseline

- **WCAG 2.1 AA Contrast**: Metin ile arka plan arasında minimum `4.5:1` kontrast oranı (Charcoal `#1C2421` over Alabaster `#FBF9F5` contrast > `11:1`).
- **Focus Rings**: Klavye navigasyonunda `2px solid var(--color-primary)` net odak göstergesi.
- **Touch Targets**: Mobilde tüm etkileşimli alanlar ve Instagram CTA için minimum `48px x 48px` dokunma alanı.

## 9. Imagery / Iconography Direction

- **Görsel Kullanımı**: Doğrulanmamış sahte klinik/tedavi fotoğrafları kesinlikle kullanılmaz. Soyut organik formlar, tipografik rozetler ve ince geometrik dokular tercih edilir.
- **İkonografi**: Minimalist SVG ikonlar (Instagram ikonu, konum pini, mesleki unvan rozeti) `20px` - `24px` boyutlarında ve `--color-primary` renginde tutulur.

## 10. Explicit Design Anti-Patterns

- ❌ Sağlık turkuazı/mavi hastane gradientleri kullanmak.
- ❌ Stok fotoğraflarla sahte tedavi veya hasta kabul sahneleri oluşturmak.
- ❌ Yanıp sönen, haraketli veya agresif pop-up / modal tasarımları.
- ❌ Okunabilirliği düşüren düşük kontrastlı gri metinler.
- ❌ Dokunma alanı yetersiz küçük sosyal medya yönlendirme ikonları.
