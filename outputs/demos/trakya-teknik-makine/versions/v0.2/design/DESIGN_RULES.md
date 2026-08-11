# Trakya Teknik Makine — Design Rules

## 1. Visual Concept & Design Character

- **Tasarım Karakteri**: Modern, endüstriyel titizlik, teknik güven, hassas işçilik ve profesyonel kurumsal duruş.
- **Visual Narrative**: Trakya Teknik Makine, ağır makine ve hidrolik teknik servis sektöründe hizmet vermektedir. Tasarım dili; koyu kömür/antrasit tonları, güven veren endüstriyel mavi/lacivert vurguları ve enerjik teknik amber/turuncu vurgu detaylarıyla mühendislik hassasiyetini ve kesintisiz servis güvenini yansıtır.

## 2. Differentiation / Anti-Template Rationale

- **Anti-Template İlkesi**: Sektör klişesi olan "düz lacivert arkaplan + 3 standart kart + jenerik stok fotoğraf" şablonu kopyalanmayacaktır.
- **Özgün Yönler**:
  - Asimetrik teknik grid kompozisyonu ve keskin mühendislik hizalamaları.
  - Derinlikli yüzey katmanları (dark slate card surfaces, subtle industrial borders).
  - Tipografik vurgularda teknik servis kodları ve dinamik durum rozetleri.
  - Disan Hidrolik Yetkili Servisliği için özel tasarlanmış "Verified Service Badge" katmanı.

## 3. Composition & Layout Principles

- **Grid System**: 12 sütunlu esnek responsive grid; cömert ama kontrolde tutulan dikey aralıklar (`spacing-unit: 8px`).
- **Hero Composition**: Sol tarafta güçlü odaklı başlık, Disan Hidrolik yetkili servis vurgusu ve doğrudan hızlı iletişim CTA'ları; sağ tarafta teknik servis görsel hiyerarşisi ve canlı durum kartı.
- **Services Layout**: 3 ana hizmet alanı (Yedek Parça, Yerinde Destek, Bakım-Onarım) için derinlikli kart tasarımı, hizmet detay vurguları ve teknik ikon rozetleri.

## 4. Color Direction & Semantic Roles

- **Primary Brand / Industrial Base**: Deep Slate / Charcoal (`hsl(220, 24%, 12%)`)
- **Surface Layer / Card Background**: Dark Navy Slate (`hsl(220, 20%, 18%)`)
- **Accent Trust Color**: Technical Blue (`hsl(210, 85%, 48%)`)
- **Highlight Accent / Action Color**: Industrial Amber (`hsl(38, 92%, 50%)`)
- **Text Primary**: Crisp Snow White (`hsl(0, 0%, 98%)`)
- **Text Secondary**: Cool Technical Gray (`hsl(215, 15%, 72%)`)
- **Border / Divider Role**: Subtle Metallic Border (`hsl(215, 18%, 28%)`)

## 5. Typography Direction

- **Primary Font Family**: Inter / Roboto / Outfit (Clean modern sans-serif).
- **Heading Scale**:
  - H1 Hero Title: 44px / 56px (Desktop), 32px / 40px (Mobile) - SemiBold (600)
  - H2 Section Title: 32px / 40px (Desktop), 24px / 32px (Mobile) - SemiBold (600)
  - H3 Card Title: 20px / 28px - Medium (500)
  - Body Text: 16px / 26px - Regular (400)
  - Caption / Badge: 13px / 18px - Medium / Monospace accent (500)

## 6. Interaction & Motion Principles

- **Hover Micro-Animations**: Kartlarda hafif yukarı doğru yükselme (`transform: translateY(-4px)`), sınır parlaması ve subtle box-shadow yumuşaması (transition duration: 250ms ease).
- **CTA Dynamics**: İletişim butonlarında yüksek kontrastlı hover efekti ve doğrudan arama aksiyonu hissi.
- **Controlled Motion**: Sayfa yüklenmesinde kontrollü fade-in / slide-up animasyonları (maksimum 400ms duration); erişilebilirlik için `prefers-reduced-motion` desteği.

## 7. Responsive Principles

- **Desktop (1024px+)**: Tam grid düzeni, yan yana hero ve hizmet kartları.
- **Tablet (768px - 1023px)**: 2 sütunlu esnek kart düzeni, responsive navigasyon.
- **Mobile (< 768px)**: Tek sütunlu temiz dikey akış, dokunmatik uyumlu buton boyutları (minimum 44px yükseklik), mobilde sabit duran hızlı arama/iletişim aksiyon çubuğu (Sticky Contact Bar).

## 8. Accessibility Baseline

- **Kontrast Oranı**: Metin ve arka plan arasında minimum 4.5:1 kontrast oranı.
- **Dokunmatik Hedefler**: Tüm tıklanabilir buton ve bağlantılar için min 44x44px alan.
- **Klavye Odaklanması**: Tüm etkileşimli elemanlar için belirgin `:focus-visible` çerçevesi.
- **Semantik HTML**: Doğru `header`, `main`, `section`, `footer`, `h1-h3` ve `aria-label` kullanımı.

## 9. Imagery / Iconography Direction

- **İkonografi**: SVG tabanlı keskin, teknik ve endüstriyel ikon seti (dişli, anahtar, hidrolik sembolü, shield/rozet, telefon, e-posta).
- **Görsel Odak**: Ağır makine, hidrolik sistemler, yedek parça ve teknik bakım bağlamını destekleyen profesyonel endüstriyel fotoğraflar ve vektörel illüstrasyon vurguları.

## 10. Explicit Design Anti-Patterns

- ❌ Sıradan, renksiz ve karakterizasyon taşımayan varsayılan SITE123 görünümü.
- ❌ Aşırı süslü, okunabilirliği bozan dekoratif yazı tipleri.
- ❌ Yavaş yüklenen veya düzensiz yerleşmiş devasa medya içerikleri.
- ❌ Mobil cihazlarda tıklanamayan küçük metin bağlantıları.
