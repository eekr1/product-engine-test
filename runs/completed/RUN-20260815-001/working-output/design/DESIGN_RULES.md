# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Visual Concept Narrative**: *"Industrial Precision & Engineering Trust"* (Endüstriyel Hassasiyet ve Mühendislik Güveni).
- Trakya Teknik Makine'nin tasarımı, jenerik kurumsal sitelerin aksine doğrudan makine bakımı, hidrolik uzmanlığı ve hızlı servisi yansıtan yüksek hassasiyetli bir endüstriyel karakter taşır.
- Görsel dil; koyu titanyum/antrasit yüzeyler, teknik ızgara (grid) çizgileri, yüksek kontrastlı tipografi ve odaklanmış canlı kehribar/turuncu (`#E67E22`) servis vurguları üzerine kuruludur.

## 2. Differentiation / Anti-Template Rationale

- **Neden Klasik Şablon Değil?**: "Sanayi şirketi = klasik lacivert hero + 3 mavi kart + standart iletişim formu" klişesi reddedilmiştir.
- **Farklılaşma Yaklaşımı**:
  - Yüzeylerde sıradan açık mavi yerine derin teknik antrasit/titanyum tonları (`#12151B`, `#1E222A`) ve kontrast kart yüzeyleri kullanılmıştır.
  - Vurgularda teknik servis dinamizmini simgeleyen canlı endüstriyel kehribar/turuncu aksettirme tercih edilmiştir.
  - Kompozisyonda geniş asimetrik ızgaralar, belirgin mikro rozetler (Disan Yetkili Servis vurgusu) ve mühendislik detay hissi veren tipografik hiyerarşi kurulmuştur.

## 3. Composition & Layout Principles

- **Grid System**: 12 kolonlu esnek duyarlı grid (Responsive Grid Systems).
- **Spacing Scale**: 8px temel adım boyutu (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
- **Surface Elevation**:
  - Base Background: `#12151B` (Derin Endüstriyel Siyah-Gri)
  - Card / Panel Surface: `#1E222A` (Titanyum Gri Yüzey)
  - Surface Border: `1px solid rgba(255, 255, 255, 0.08)` (İnce Teknik Kenarlık)
  - Active / Hover Glow: `0 8px 32px rgba(230, 126, 34, 0.15)`

## 4. Color Direction & Semantic Roles

- **Primary Background**: `#12151B` (Derin Titanyum)
- **Secondary Surface**: `#1E222A` (Koyu Panel Yüzeyi)
- **Primary Accent / Brand Action**: `#E67E22` (Endüstriyel Kehribar / Turuncu)
- **Accent Hover State**: `#D35400` (Koyu Turuncu)
- **Text Primary**: `#F8F9FA` (Sofistike Beyaz)
- **Text Secondary**: `#9EA7B6` (Teknik Gri)
- **Status & Trust Badge**: `#27AE60` (Servis Onay Yeşili) / `#E67E22` (Disan Rozet Rengi)

## 5. Typography Direction

- **Primary Font**: `Inter`, sans-serif (Yüksek okunabilirlik ve gövde metinleri).
- **Display / Heading Font**: `Outfit` veya `Space Grotesk`, sans-serif (Endüstriyel, modern, teknik başlık karakteri).
- **Scale**:
  - Hero Display: `44px` - `56px` / Line Height: `1.15` / Weight: `700`
  - Section H2: `32px` - `40px` / Line Height: `1.2` / Weight: `600`
  - Card H3: `20px` - `24px` / Line Height: `1.3` / Weight: `600`
  - Body Text: `16px` / Line Height: `1.6` / Weight: `400`
  - Technical Badge / Micro Copy: `12px` - `14px` / Letter Spacing: `0.05em` / Text Transform: `uppercase`

## 6. Interaction & Motion Principles

- **Micro-Animations**: Kart hover hareketlerinde yumuşak dikey yükselme (`transform: translateY(-4px)`) ve kenarlık renk değişimi (`transition: all 0.25s ease`).
- **CTA State**: İletişim butonları üzerine gelindiğinde kontrast kehribar parlaması ve ikonda hafif yönlü hareket.
- **Scroll Reveal**: Bölüm geçişlerinde yumuşak görünürlük efekti (`opacity: 0 -> 1`, `translateY: 20px -> 0`).

## 7. Responsive Principles

- **Desktop (1200px+)**: Tam boy 12 kolonlu asimetrik yerleşim, yan yana hizmet kartları ve belirgin hero yan paneli.
- **Tablet (768px - 1199px)**: 2 kolonlu kart ızgaraları, daraltılmış padding adımları.
- **Mobile (< 768px)**: Tek kolonlu akış, tam genişlikli CTA butonları, kolay dokunulabilir (`min-height: 48px`) dokunma hedefleri.

## 8. Accessibility Baseline

- **Contrast**: Metin ve arka plan arasında minimum 4.5:1 (WCAG AA) kontrast oranı.
- **Focus States**: Klavyeyle gezinmede görünür belirgin odak çizgisi (`outline: 2px solid #E67E22`).
- **Semantik HTML**: HTML5 semantik etiketleri (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`).

## 9. Imagery / Iconography Direction

- **Iconography**: Minimal, teknik, 2px stroke genişliğine sahip SVG vektör ikonlar (yedek parça, yerinde teknik destek, bakım-onarım ikonları).
- **Imagery**: Yüksek kaliteli endüstriyel makine, hidrolik sistem veya teknik servis fotoğrafları; fotoğrafların üzerinde koyu antrasit gradyan kaplamaları (`linear-gradient(rgba(18, 21, 27, 0.85), #12151B)`).

## 10. Explicit Design Anti-Patterns

- **YASAK 1**: Jenerik mavi/lacivert hazır kurumsal HTML şablonu kopyalamak.
- **YASAK 2**: Okunabilirliği bozan düşük kontrastlı gri metinler kullanmak.
- **YASAK 3**: Mobil ekranlarda yan yana sıkışan veya taşan kart düzenleri oluşturmak.
- **YASAK 4**: Hizmet kartlarını ve iletişim bilgilerini tek bir karmaşık kutuya istiflemek.
