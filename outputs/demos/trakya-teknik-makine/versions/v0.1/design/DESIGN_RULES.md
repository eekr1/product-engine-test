# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

- **Design Concept**: "Precision Mechanical Craftsmanship & Industrial Trust" (Hassas Mühendislik ve Teknik Güven).
- **Tasarım Karakteri**: Trakya Teknik Makine için sıradan "generic lacivert kurumsal şablon" hissi vermek yerine, endüstriyel makine mühendisliğini ve teknik servis hassasiyetini yansıtan özgün bir tasarım dili benimsenmiştir.
- **Visual Feel**: Derin endüstriyel kömür gri (Industrial Charcoal) ve çelik mavi zemin üstüne dikkat çekici amber/turuncu teknik vurgu (Amber Precision Accent), mikro-grid çizgileri, teknik tipografi ritmi ve akıcı kart düzeni.

## 2. Differentiation / Anti-Template Rationale

- **Sektör Klişesi Reddi**: Klasik "Lacivert hero + 3 beyaz kart + standart footer" kalıbı kesinlikle kullanılmayacaktır.
- **Özgün Kompozisyon**: Asimetrik hero mizanpajı, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü vurgulayan teknik rozet alanı ve hizmetlerin mühendislik hassasiyetiyle sunulduğu interaktif hizmet vitrini.
- **Factual Honesty**: Doğrulanmamış firma iddiaları veya uydurma sertifika rozetleri tasarıma eklenmeyerek görsel ve kurumsal dürüstlük korunacaktır.

## 3. Composition & Layout Principles

- **Grid System**: 12-column dynamic CSS Grid & Flexbox, 8px/16px/24px/32px/48px/64px tutarlı boşluk (spacing) ritmi.
- **Visual Rhythm**: Hero bölümünden hizmet alanına ve direct-contact CTA kartına kadar kesintisiz, rahat nefes alan whitespace ve vurgulu hiyerarşi.

## 4. Color Direction & Semantic Roles

- **Primary Canvas Background**: `#0F141C` (Deep Charcoal Blue)
- **Surface Layer 1 (Cards & Modules)**: `#18202C` (Industrial Navy Slate)
- **Surface Layer 2 (Hover & Active Surfaces)**: `#222C3D`
- **Primary Accent (Precision Action / Highlights)**: `#F97316` (Amber Industrial Tech Accent)
- **Secondary Accent (Technical Status / Trust)**: `#0EA5E9` (Cyan Steel Precision)
- **Text Primary**: `#F8FAFC` (High contrast crisp white)
- **Text Muted / Subtitle**: `#94A3B8` (Slate Muted Grey)
- **Borders & Dividers**: `rgba(255, 255, 255, 0.08)` (Subtle Technical Grid Lines)

## 5. Typography Direction

- **Primary Font Family**: `'Outfit'`, `'Inter'`, system-ui, sans-serif.
- **Heading Character**: Geometric, teknik ve kendinden emin tipografi. `font-weight: 700 / 600`.
- **Body & Metadata**: `'Inter'`, yüksek okunabilirlik, `line-height: 1.6`.
- **Technical Badges**: Monospace accent touch (`font-family: 'JetBrains Mono', monospace`) yetkili servis ve teknik kod vurguları için.

## 6. Interaction & Motion Principles

- **Subtle Micro-Animations**: `cubic-bezier(0.16, 1, 0.3, 1)` ile yumuşak hover elevation (transform: translateY(-4px)).
- **Glassmorphism Overlay**: Header ve CTA katmanlarında `backdrop-filter: blur(12px)` ve yarı saydam koyu yüzeyler.
- **No Distracting Animations**: Satış görüşmesinde performansı düşürecek veya odağı dağıtacak ağır parallax/looping animasyonlar yasaktır.

## 7. Responsive Principles

- **Desktop First to Mobile Seamless**: 1200px+ masaüstü, 768px-1024px tablet, <768px mobil cihazlar için optimize edilmiştir.
- **Mobile Navigation**: Mobil ekranlarda rahat dokunulabilir slide-over drawer ve sabit hızlı direct-contact bar.

## 8. Accessibility Baseline

- **Contrast Compliance**: WCAG AA standartlarına uygun metin ve zemin kontrast oranı (en az 4.5:1).
- **Focus States**: Klavye gezintisi için belirgin `:focus-visible` amber/cyan kontur halkası.

## 9. Imagery / Iconography Direction

- **Iconography**: Minimalist, keskin hatlı endüstriyel SVG ikonlar (Yedek Parça, Teknik Destek, Makine Onarım, Telefon, E-posta).
- **Imagery**: Yüksek kaliteli, koyu tema ile uyumlu endüstriyel teknik görseller.

## 10. Explicit Design Anti-Patterns

- Yasak: Generic lacivert template veya 3 eşit beyaz kutulu standart kurumsal düzen.
- Yasak: Aşırı parlak neon renkler veya okunabilirliği bozan düşük kontrastlı gri metinler.
- Yasak: Doğrulanmamış 7/24 veya orijinal parça garantisi rozetleri koymak.
