# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Konsept Adı**: *Industrial Precision & Technical Trust* (Endüstriyel Hassasiyet ve Teknik Güven)
- **Görsel Karakter**: Trakya Teknik Makine'nin makine bakımı, hidrolik yetkili servisliği ve yedek parça alanındaki mühendislik ve sahadaki teknik yetkinliğini yansıtan; keskin, temiz, yüksek kontrastlı ve dayanıklı endüstriyel algı.
- **Tasarım Hissi**: Sıradan şablon kurumsal sitelerin aksine; ağır sanayiye ve makine parklarına hizmet veren güvenilir bir teknik partner hissi üretir.

## 2. Differentiation / Anti-Template Rationale

- **Anti-Klişe İlkesi**: Sektördeki varsayılan jenerik *"düz lacivert kurumsal site + 3 ikonlu kart"* kalıbına otomatik teslim olunmamıştır.
- **Özgün Yönelim**:
  - Derin endüstriyel koyu arduvaz (`#0F172A`) zemin üzerinde yüksek kontrastlı teknik turuncu/kehribar (`#F59E0B` / `#D97706`) vurgu tonları.
  - Tipografide teknik okunabilirliği yüksek modern grotesk fontlar (`Space Grotesk` başlıklar + `Inter` gövde metinleri).
  - Izgara yapısında asimetrik teknik bilgi panelleri, mikro ızgara çizgileri ve sahadaki makine hassasiyetini hissettiren geometrik yüzey ayrışımları.

## 3. Composition & Layout Principles

- **Grid Yapısı**: 12 sütunlu teknik ızgara. Bileşenler net sınır çizgileri (`border: 1px solid rgba(255,255,255,0.1)`) ve dengeli padding adımları ile birbirinden ayrılır.
- **Görsel Hiyerarşi**:
  1. Primary Focus: Disan Hidrolik Yetkili Servislik rozeti ve ana değer cümlesi.
  2. Secondary Focus: 3 temel hizmet (Yedek Parça, Yerinde Destek, Bakım-Onarım) ve teknik özellikleri.
  3. Tertiary Focus: Firma detayları ve doğrudan telefon/e-posta CTA kartları.

## 4. Color Direction & Semantic Roles

- **Surface Primary**: `#0F172A` (Slate 900 - Derin endüstriyel zemin)
- **Surface Secondary**: `#1E293B` (Slate 800 - Kart ve panel yüzeyleri)
- **Surface Accent / Border**: `#334155` (Slate 700 - Ayırıcı çizgiler)
- **Accent Primary**: `#F59E0B` (Amber 500 - Teknik aksan ve ana CTA)
- **Accent Hover**: `#D97706` (Amber 600 - Etkileşim durumları)
- **Text Primary**: `#F8FAFC` (Slate 50 - Yüksek kontrastlı okunabilir metin)
- **Text Muted**: `#94A3B8` (Slate 400 - İkincil teknik açıklamalar)
- **Badge / Highlight**: `#0284C7` (Sky 600 - Disan Hidrolik Yetkili Servislik rozet vurgusu)

## 5. Typography Direction

- **Header Font**: `Space Grotesk` (Google Fonts - Monospaced/Grotesk teknik karakterli güçlü endüstriyel başlıklar).
- **Body Font**: `Inter` (Google Fonts - Ekran okunabilirliği yüksek nötr gövde fontu).
- **Hiyerarşi Adımları**:
  - Hero Display (H1): `3.25rem` (`52px`), `font-weight: 700`, `letter-spacing: -0.02em`.
  - Section Title (H2): `2.25rem` (`36px`), `font-weight: 600`.
  - Component Title (H3): `1.25rem` (`20px`), `font-weight: 600`.
  - Body Text: `1.0rem` (`16px`), `line-height: 1.6`.
  - Technical Data / Tag: `0.875rem` (`14px`), `font-weight: 500`, `letter-spacing: 0.05em`.

## 6. Interaction & Motion Principles

- **Mikro Etkileşimler**: Kartlarda hafif yavaş yükselme (`transform: translateY(-4px)`), kenarlık parlama efekti (`border-color: var(--accent)`), geçiş süresi `200ms ease-out`.
- **CTA Hover**: Butonlarda parlama ve renk koyulaşması; abartılı 3D veya yavaş animasyonlardan kaçınılmıştır.
- **Performans**: Tüm motion CSS `transform` ve `opacity` üzerinden GPU hızlandırmalı olarak uygulanır.

## 7. Responsive Principles

- **Desktop (1024px+)**: 3 sütunlu hizmet kartları, yan yana Hero ve teknik servis paneli.
- **Tablet (768px - 1023px)**: 2 sütunlu düzen, genişletilmiş CTA alanları.
- **Mobile (375px - 767px)**: Tek sütunlu dikey akış, sabit (sticky) arama/e-posta hızlı erişim CTA çubuğu.

## 8. Accessibility Baseline

- **Kontrast Oranı**: Metin ve zemin arasında minimum WCAG AA seviyesi (`> 4.5:1` kontrast).
- **Klavye Navigasyonu**: Tüm etkileşimli elemanlarda net `:focus-visible` vurgulama halkası.
- **Dokunma Hedefleri**: Mobil cihazlarda tüm butonlar minimum `44px x 44px` tıklama alanına sahiptir.

## 9. Imagery / Iconography Direction

- **İkonlar**: Temiz, teknik çizgi tarzında SVG ikonlar (Makine, Dişli, Hidrolik Piston, Anahtar, Telefon, E-posta).
- **Görseller**: Sahadaki teknik çalışmayı, hassas parça detaylarını ve endüstriyel makine bakımını temsil eden yüksek kaliteli, net ve profesyonel görseller.

## 10. Explicit Design Anti-Patterns

- ❌ Jenerik bootstrap / hazır tema görünümü.
- ❌ Açık gri zemin üzerine soluk gövde metinleri (okunabilirliği düşüren düşük kontrast).
- ❌ Sahası ve uzmanlığı olmayan uydurma stok stüdyo görselleri.
- ❌ Yavaş, gereksiz sayfa yüklenme animasyonları.
- ❌ Mobil cihazlarda küçük ve tıklanamayan CTA butonları.
