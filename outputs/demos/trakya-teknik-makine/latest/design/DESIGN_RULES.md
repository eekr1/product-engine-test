# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Tasarım Karakteri:** *Hassas Mühendislik & Güvenilir Servis Gücü (Precision Engineering & Relentless Service).*
- **Görsel Konsept:** Trakya Teknik Makine'nin sanayi sektöründeki tecrübesini ve Disan Hidrolik yetkili servis gücünü, kaba/ağır bir sanayi görünümü yerine temiz, yüksek kontrastlı mühendislik estetiği, teknik detay grid'leri ve kararlı tipografi ile sunmak.
- **Odak Hissi:** Ağır sanayi hissi değil; hassas, sistemli, teknik olarak donanımlı, müşteri odaklı ve modern endüstriyel çözüm ortağı algısı.

## 2. Differentiation / Anti-Template Rationale

- **Sektör Klişelerinden Kaçınma:** Sanayi projesi diye otomatik olarak "klasik koyu lacivert + turuncu + 3 kutulu hero" şablonuna teslim olunmayacaktır.
- **Ayrışma Noktaları:** 
  - Koyu lacivert yerine derin çelik grisi (`#1E293B`) ve mühendislik mavisi (`#0EA5E9` / `#0284C7`) tonları ile teknik hassasiyet vurgulanacaktır.
  - Hizmetler jenerik 3 kutu yerine, teknik detayları ve servis kapsamını öne çıkaran asimetrik kartlar ve katmanlı cam/metal yüzeyler (subtle glassmorphism/dark metallic accents) ile sunulacaktır.
  - Disan Hidrolik Yetkili Servis kimliği rastgele bir logo şeridi değil, kurumsal güven rozeti (Engineering Trust Badge) olarak Hero ve Hizmetler bölümlerinde entegre bir vurgu öğesi biçiminde işlenecektir.

## 3. Composition & Layout Principles

- **Endüstriyel Grid Düzeni:** 12-sütunlu ızgara yapısı. Bölümler geniş nefes alma alanları (`padding: 4rem - 6rem`), belirgin sol çizgi detayları (technical accent borders) ve katmanlı derinlik ile kurgulanacaktır.
- **İçerik Hiyerarşisi:**
  1. Header / Navigation + Yetkili Servis Vurgusu
  2. Hero Section (Net Başlık + İkincil Vurgu + İletişim CTA)
  3. Güven Rozetleri (Disan Hidrolik Servis Statüsü & Trakya Bölge Hizmeti)
  4. 3 Ana Hizmet Kartları (Yedek Parça, Yerinde Destek, Bakım/Onarım)
  5. Hizmet Süreç & Neden Biz (Servis Kalitesi & Hızlı Müdahale)
  6. İletişim & Lokasyon Kartı (Hızlı Arama & E-posta CTA)

## 4. Color Direction & Semantic Roles

- **Primary / Dominant:** Deep Slate Gray (`#0F172A`) — Kurumsal ciddiyet ve zemin derinliği.
- **Brand / Technical Accent:** Engineering Cyan Blue (`#0EA5E9`) / Metallic Blue (`#0284C7`) — Teknik uzmanlık ve yenilikçi servis hissi.
- **Secondary / Support:** Industrial Charcoal (`#334155`) / Steel Surface (`#F8FAFC`).
- **Status / Highlight:** High-Visibility Amber (`#F59E0B`) — Acil servis ve yedek parça vurguları için aksiyon rengi.
- **Text / Contrast:** High Contrast White (`#FFFFFF`) ve Dark Slate (`#0F172A`) — AA/AAA standartlarında okunabilirlik.

## 5. Typography Direction

- **Font Family:** `Inter` veya `Outfit` (Google Fonts) — Temiz, teknik, geometrik ve son derece okunabilir sans-serif tipografi.
- **Hiyerarşi:**
  - `Hero Title (H1)`: 2.75rem – 3.5rem, Font Weight 800 (Extra Bold), Tight Letter Spacing (-0.02em).
  - `Section Title (H2)`: 2rem – 2.25rem, Font Weight 700 (Bold), Left Accent Border ile vurgulu.
  - `Card Title (H3)`: 1.25rem – 1.5rem, Font Weight 600 (Semi-Bold).
  - `Body Text`: 1rem (16px), Line Height 1.6, Font Weight 400 (Regular).

## 6. Interaction & Motion Principles

- **Subtle Micro-Animations:** Kartlar üzerine gelindiğinde (hover) hafif yukarı yükselme (`transform: translateY(-4px)`), ince çerçeve parlaması (`border-color transition 0.2s ease`).
- **Performans Odaklılık:** Ağır JS animasyon kütüphaneleri yerine saf CSS `transition` ve `transform` kullanılacaktır.
- **Geri Bildirim:** Tıklanabilir tüm iletişim ve CTA butonları belirgin hover ve active durumlarına sahip olacaktır.

## 7. Responsive Principles

- **Mobile First Approach:** 320px mobil ekranlardan 1920px+ masaüstü ekranlara kadar kusursuz uyum.
- **Mobil Menü:** Mobil cihazlarda kolay erişilebilir, başparmak dostu (thumb-friendly) temiz hamburger menü veya doğrudan arama barı.
- **Grid Dönüşümü:** Masaüstünde 3 sütun olan Hizmet Kartları, mobilde tek sütun dikey akışa dönüşür.

## 8. Accessibility Baseline

- **Kontrast:** Metin ve zemin kontrastı WCAG 2.1 AA standardını (en az 4.5:1) karşılar.
- **Odak Durumu (Focus States):** Klavye ile gezinmede tüm etkileşimli öğeler görünür odak çerçevesine (`outline: 2px solid #0EA5E9`) sahip olur.
- **Semantik HTML:** `header`, `nav`, `main`, `section`, `article`, `footer` etiketleri eksiksiz kullanılır.

## 9. Imagery / Iconography Direction

- **İkonlar:** Vektörel, teknik, 2px stroke genişliğine sahip modern endüstriyel ikonlar (Lucide / Tabler ikon stili: dişli, hidrolik piston, yedek parça, yerinde teknik servis araç simgesi).
- **Görseller:** Temiz endüstriyel ortamlar, hidrolik makine bileşenleri ve teknik servis temalı yüksek çözünürlüklü vektörel/grafik yüzeyler.

## 10. Explicit Design Anti-Patterns

- **YASAK:** Rastgele generic Bootstrap/template görünümü.
- **YASAK:** Okunabilirliği düşüren düşük kontrastlı gri metinler.
- **YASAK:** Sayfa hızını düşüren devasa boyutta ve optimizasyonsuz görseller.
- **YASAK:** Karmaşık, kullanıcının ne yapacağını şaşırdığı aşırı süslü animasyonlar.
