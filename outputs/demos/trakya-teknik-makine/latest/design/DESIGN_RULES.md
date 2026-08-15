# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

- **Tasarım Konsepti**: `Endüstriyel Güven ve Hassas Teknik Servis (Precision Industrial Reliability)`.
- **Görsel Karakter**: Güçlü, modern, teknik netlik ve yüksek mühendislik hissi veren yüzey mimarisi.
- **Tasarım Dili**: Ağır sanayi görsel dilini hantal olmaktan çıkarıp, modern tipografi, derinlikli karanlık/ışıklı kontrast katmanları ve keskin teknik izgara (grid) sistemiyle birleştiren kurumsal yüzey.

## 2. Differentiation / Anti-Template Rationale

- **Sektör Klişelerinden Ayrışma**: Klasik sanayi sitelerindeki "düz lacivert hero + 3 beyaz kart + standart footer" klişesinden kesinlikle kaçınılacaktır.
- **Farklılaşma Yaklaşımı**: Trakya Teknik Makine'nin Disan Hidrolik Makine Yetkili Servisliği unvanı, standart kartlar yerine teknik servis paftası/şematik görünüm hissi veren asimetrik grid ve hassas mikro-etkileşimler ile sunulacaktır.

## 3. Composition & Layout Principles

- **Grid Sistemi**: 12 sütunlu teknik layout grid, belirgin kenar boşlukları ve dengeli dikey ritim (vertical rhythm).
- **Yüzey Hiyerarşisi**:
  1. `Corporate Status Bar`: Yetkili servis rozet alanı (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi).
  2. `Hero Focus`: Firma unvanı ve odaklı kurumsal mesaj.
  3. `Service Showcase Grid`: 3 approved hizmet için teknik bilgi kartları.
  4. `Direct Contact Console`: Telefon ve e-posta hızlı iletişim konsolu.

## 4. Color Direction & Semantic Roles

- **Primary Brand Color**: `Industrial Steel Blue / Anthracite` (`#1E293B` / `#0F172A`) — Güven ve endüstriyel ciddiyet.
- **Accent Brand Color**: `Disan Hydraulic Amber / Gold` (`#D97706` / `#F59E0B`) — Disan yetkili servis uzmanlığı ve güç simgesi accent renk.
- **Surface Neutrals**: `Cool Slate Dark` (`#0F172A`), `Surface Off-White` (`#F8FAFC`), `Border Gray` (`#E2E8F0`).
- **Semantic Feedback**: `Success Green` (`#059669`), `Error Red` (`#DC2626`).

## 5. Typography Direction

- **Primary Font Family**: `Inter`, `system-ui`, `-apple-system`, `sans-serif` — Yüksek okunabilirlik, teknik ve temiz harf karakteri.
- **Heading Scale**:
  - `Display / Hero Title`: 48px - 64px (Bold, 800 weight, tight tracking `-0.02em`).
  - `H2 Section Header`: 32px - 40px (SemiBold, 700 weight).
  - `H3 Service Title`: 20px - 24px (SemiBold, 600 weight).
  - `Body Text`: 16px (Regular, 400 weight, line-height 1.6).

## 6. Interaction & Motion Principles

- **Micro-Animations**: Kart hover efektlerinde 200ms `cubic-bezier(0.4, 0, 0.2, 1)` yumuşak yükselme ve border accent parlaması.
- **CTA State Transitions**: Button ve bağlantılarda belirgin dokunma/hover odak durumları (focus ring `#D97706`).

## 7. Responsive Principles

- **Breakpoint Scale**:
  - `Mobile`: `< 640px` (Single column stacked layout, touch-first minimum 44px hit target).
  - `Tablet`: `640px - 1024px` (2 column grid layout).
  - `Desktop`: `> 1024px` (Full 12-column layout grid).

## 8. Accessibility Baseline

- **WCAG 2.1 AA Compliance**: Metin ve arka plan arasında minimum 4.5:1 kontrast oranı.
- **Keyboard Navigation**: Tüm etkileşimli CTA butonlarında belirgin klavye odak halkası (focus outline).

## 9. Imagery / Iconography Direction

- **Iconography**: Minimalist teknik çizgi ikonlar (Lucide / Feather SVG tarzı 2px stroke genişliğinde teknik ikon dili).
- **Visual Assets**: Endüstriyel makine, hidrolik aksam ve teknik servis odaklı yüksek kaliteli vektörel ve görsel bileşenler.

## 10. Explicit Design Anti-Patterns

- Sahte stok fotoğraflarda ilgisiz kişilerin yer aldığı generic banner görselleri KULLANILMAYACAKTIR.
- Ziyaretçinin gözünü yoran kontrolsüz neon renkler veya yavaş kaydırma (scroll-jack) efektleri KULLANILMAYACAKTIR.
