# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Design Concept**: **Precision Industrial Modernism** (Hassas Endüstriyel Modernizm).
- **Design Character**: Güvenilir, teknik olarak yetkin, ağır sanayi ve hidrolik teknik servis gücünü hissettiren; ancak hantal değil, keskin, temiz, yüksek kontrastlı ve çağdaş.
- **Visual Feel**: Koyu antrsit ve çelik grisi yüzeyler üzerine hassas teknik detay vurguları (endüstriyel kehribar/turuncu accent); net ve güçlü tipografi hiyerarşisi; teknik çizim ve makine dokularını anımsatan geometrik grid düzeni.

## 2. Differentiation / Anti-Template Rationale

- **Sektör Klişelerinden Kaçış**: Klasik sanayi sitelerindeki ucuz "lacivert/mavi kurumsal hazır şablon" veya "3 sıradan kutulu hero" klişesi kullanılmayacaktır.
- **Özgünlük Gerekçesi**: Trakya Teknik Makine'nin Disan Hidrolik Yetkili Servis kimliği, sıradan bir tamirhane değil, yüksek teknik hassasiyete sahip bir mühendislik ve teknik destek merkezi olduğunu vurgulayan özgün bir kompozisyon ile ayrıştırılacaktır.

## 3. Composition & Layout Principles

- **Grid & Alignment**: Strict 12-column grid yapısı, keskin kenar yarıçapları (subtle 4px - 6px border-radius), yüksek okunabilirlik sağlayan cömert padding/margin alanları.
- **Section Rhythm**: Güçlü tipografik başlıklar, teknik parametreleri vurgulayan kart yapıları, asimetrik fakat dengeli hero düzeni.
- **Visual Density**: Bilgi kalabalığından uzak, doğrudan eyleme yönlendiren odaklanmış içerik blokları.

## 4. Color Direction & Semantic Roles

- **Primary Surface**: `Deep Graphite / Slate` (`#12161A`, `#1A2026`) — Endüstriyel çelik ve makine gövdesi hissi.
- **Secondary Surface**: `Cool Steel Light / Warm Off-White` (`#F4F6F8`, `#FFFFFF`) — Temiz, yüksek kontrastlı okuma alanları.
- **Accent Color**: `Industrial Amber / Servis Turuncusu` (`#E65D00` / `#FF6B00`) — Yetkili servis canlılığı, teknik uyarı ve ana CTA vurguları.
- **Text Primary**: `Charcoal Dark` (`#1A1D20`) & `Pure White` (`#FFFFFF`) — Maksimum okunabilirlik.
- **Text Muted**: `Steel Gray` (`#5A6472`) — İkincil detaylar ve etiketler.

## 5. Typography Direction

- **Primary Font Family**: `Inter` veya `Outfit` (Google Fonts).
- **Heading Character**: Bold / Semi-Bold, hafif daraltılmış harf aralığı (`letter-spacing: -0.02em`), güçlü endüstriyel başlıklar.
- **Body Text**: Clean sans-serif, 1.6 line-height, optimum okunabilirlik.
- **Technical Labels**: Monospace / All-Caps etiketler (ör. `DISAN HYDRAULIC AUTHORIZED SERVICE`).

## 6. Interaction & Motion Principles

- **Hover Effects**: Kartlarda ve butonlarda pürüzsüz micro-transitions (`transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`). Hover anında ince amber aksan çizgileri ve subtle lift etkisi (`transform: translateY(-2px)`).
- **Controlled Motion**: Gösterişli/yavaşlatıcı animasyonlar yerine hızlı, net ve işlevsel mikro-etkileşimler.

## 7. Responsive Principles

- **Desktop First to Mobile Smoothness**: Masaüstünde geniş ekran düzeni; tablette 2 kolonlu yapı; mobilde dikey akış ve kolay dokunulabilir CTA butonları (`min-height: 48px`).
- **Touch-Friendly Navigation**: Mobilde sabit veya kolay erişilebilir arama/iletişim aksiyonları.

## 8. Accessibility Baseline

- **Contrast Compliance**: WCAG AA standartlarında yüksek kontrast (metin ve arka plan arasında minimum 4.5:1 kontrast oranı).
- **Focus States**: Klavye ve ekran okuyucu navigasyonu için belirgin `:focus-visible` stilleri (`outline: 2px solid #FF6B00`).

## 9. Imagery / Iconography Direction

- **Icons**: Temiz, teknik stroke vektör ikonlar (ör. İngiliz anahtarı, hidrolik silindir, yedek parça, telefon, e-posta).
- **Imagery**: Gerçek sanayi ortamlarını, teknik servis hassasiyetini ve makine parçalarını yansıtan yüksek kaliteli endüstriyel görseller.

## 10. Explicit Design Anti-Patterns

- ❌ Sıradan jenerik lacivert "corporate template" görünümü.
- ❌ Düşük kontrastlı gri metinler veya okunaksız yazı tipleri.
- ❌ Yavaş yüklenen ve kullanıcıyı bekleten gereksiz ağır animasyonlar.
- ❌ Sahte "Lorem Ipsum" metinleri veya stok fotoğraf klişeleri.
