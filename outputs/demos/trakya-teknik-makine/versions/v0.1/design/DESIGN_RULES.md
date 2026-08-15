# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Design Rules

## 1. Visual Concept & Design Character

- **Concept Name**: *"Endüstriyel Hassasiyet & Yetkili Servis Güveni"* (Precision Engineering & Service Authority).
- **Narrative**: Tasarım, ağır sanayi ve hidrolik makine teknik servis dünyasının ciddiyetini, yüksek mühendislik disiplinini ve yerel servis güvenini temsil eder. Görsel dil hantal ve eski görünümden uzak; keskin, oranlı ve modern endüstriyel çizgiler taşır.
- **Karakter Özellikleri**: Güvenilir, Disiplinli, Teknik Yetkin, Temiz, Odaklı.

## 2. Differentiation / Anti-Template Rationale

- **Anti-Template Stance**: Sektördeki generic "lacivert düz hero + 3 lacivert kart + standart footer" kalıbı reddedilmiştir.
- **Visual Distinction**:
  - Standart lacivert yerine endüstriyel hidrolik gri/çelik tonları (`hsl(215, 25%, 15%)`) ve teknik servis sarı/amber vurgusu (`hsl(38, 92%, 50%)`) içeren kontraslı endüstriyel renk paleti.
  - Kartlarda tekdüze kutular yerine asimetrik teknik veri/özellik hiyerarşisi ve mikro endüstriyel çizgi vurguları.
  - Tipografide teknik okunabilirliği yüksek sans-serif (Inter / Outfit) ikilisi.

## 3. Composition & Layout Principles

- **Grid System**: 12 sütunlu akıcı layout grid, tutarlı 8px baseline spacing ölçeği (8px, 16px, 24px, 32px, 48px, 64px).
- **Visual Rhythm**: Ciddi ve ferah dikey alan kullanımı. Kurumsal kimlik (Hero) -> Yetkili Servis Statüsü -> 3 Hizmet Kartı -> İletişim Eylemi sırası mantıksal derinlik katar.
- **Container Surfaces**: Yuvarlatılmış köşelerde aşırılıktan kaçınan hafif endüstriyel yarıçaplar (`border-radius: 6px` - `8px`). Subtle glassmorphism ve koyu/aydınlık katman zıtlığı.

## 4. Color Direction & Semantic Roles

- **Primary Surface (Dark Industrial)**: `hsl(215, 28%, 12%)` — Ana arayüz arka planı ve kurumsal ağırlık.
- **Secondary Surface (Steel Neutral)**: `hsl(215, 20%, 20%)` — Kartlar ve katmanlı panel yüzeyleri.
- **Accent Color (Hydraulic Gold / Amber)**: `hsl(38, 92%, 50%)` — CTA'lar, yetkili servis rozetleri ve kritik aksan vurguları.
- **Text Primary**: `hsl(210, 20%, 98%)` — Yüksek kontraslı başlık ve ana metinler.
- **Text Muted**: `hsl(215, 15%, 70%)` — İkincil teknik detaylar ve etiketler.

## 5. Typography Direction

- **Primary Font**: `Inter`, sans-serif — Gövde metinleri, teknik açıklamalar ve UI etiketleri.
- **Display Font**: `Outfit`, sans-serif — Başlıklar, yetkili servis vurguları ve rakamsal sayaçlar.
- **Hierarchy Scale**:
  - `Hero Heading`: 44px / 52px (Mobile: 32px / 40px), Bold (700)
  - `Section Heading`: 28px / 36px, SemiBold (600)
  - `Card Title`: 20px / 28px, Medium (500)
  - `Body Text`: 16px / 24px, Regular (400)
  - `Caption / Badge`: 13px / 18px, Medium (500), Uppercase letter-spacing (+0.05em)

## 6. Interaction & Motion Principles

- **Micro-Interactions**: Button hover durumlarında amber parlama (`box-shadow: 0 4px 14px rgba(245, 158, 11, 0.3)`) ve hafif 2px dikey yükselme (`transform: translateY(-2px)`).
- **Transitions**: CSS transition `250ms cubic-bezier(0.4, 0, 0.2, 1)` ile yumuşak durum geçişleri.
- **No Heavy Animations**: Dikkat dağıtan aşırı kayma veya dönme efektlerinden kaçınılır.

## 7. Responsive Principles

- **Mobile First Adaptation**: Mobil ekranlarda single-column dikey akış; direct-contact CTA'ların (Telefon/E-posta) başparmak erişim alanında kolayca dokunulabilir olması (`min-height: 48px`).
- **Breakpoints**: Mobile (<640px), Tablet (640px - 1024px), Desktop (>1024px).

## 8. Accessibility Baseline

- **Contrast Standard**: W3C WCAG 2.1 AA uyumu (Metin ve arka plan arasında minimum 4.5:1 kontras oranı).
- **Focus Indicators**: Klavyeyle gezintide belirgin amber odak çizgisi (`outline: 2px solid hsl(38, 92%, 50%)`).
- **Semantic Structure**: Doğru HTML5 elementleri (`<header>`, `<main>`, `<section>`, `<footer>`, `<address>`).

## 9. Imagery / Iconography Direction

- **Iconography**: 2px stroke kalınlığına sahip endüstriyel minimalist SVG ikon seti (Somun/Anahtar, Kamyon/Saha, Parça/Dişli, Telefon, E-posta).
- **Imagery**: Gerçekçi endüstriyel gri tonlamalı dokular veya Disan Hidrolik markasıyla uyumlu yüksek kaliteli teknik temalı görseller.

## 10. Explicit Design Anti-Patterns

- **DO NOT**: Sektör klişesi lacivert gradyanlar kullanma.
- **DO NOT**: WhatsApp yeşili veya alakasız 3. parti sohbet renkleri ekleme.
- **DO NOT**: 3 approved hizmet dışında sahte "7/24 Acil Filo" rozetleri koyma.
- **DO NOT**: Mobil ekranda CTA butonlarını 44px'ten küçük yapma.
