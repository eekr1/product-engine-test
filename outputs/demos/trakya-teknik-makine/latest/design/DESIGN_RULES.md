# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Visual Concept Narrative**: "Hassas Mühendislik & Endüstriyel Disiplin". Trakya Teknik Makine, ağır sanayi ve hidrolik sistemlerde güvenilir teknik servis sağlayıcısıdır. Görsel konsept, sıradan bir sanayi sitesi hissi vermek yerine; teknik çizim inceliğini, yüksek kontrastlı endüstriyel tipografiyi ve Disan Hidrolik yetkili servisliğinin sunduğu kurumsal güvenceyi harmanlar.
- **Tasarım Karakteri**: Güven veren, teknik olarak yetkin, net, keskin, disiplinli ve modern.

## 2. Differentiation / Anti-Template Rationale

- **Klişe Reddi**: Sektör klişesi olan "düz lacivert arkaplan + 3 standart mavi kutu + generic stok fotoğraf" şablonu reddedilmiştir.
- **Farklılaşma Yaklaşımı**:
  - Standart stok görseller yerine teknik şematik grid motifleri ve endüstriyel odak vurguları.
  - Baskın düz lacivert yerine; derin kömür/antrasit zeminler (`#0F141C`), teknik grafit tonları ve Disan Hidrolik kurumsal kimliğini yansıtan yüksek enerjili kehribar/turuncu (`#FF6B00` / `#E65100`) accent vurgular.
  - Keskin endüstriyel kenar hatları ve mikro-grid detayları.

## 3. Composition & Layout Principles

- **Asimetrik Izgara (Asymmetric Industrial Grid)**: Tekdüze kutu dizilimi yerine; sol kanatta teknik servis yetkinliği ve Disan Hidrolik servis rozeti, sağ kanatta ise doğrudan aksiyona yönlendiren odaklı düzen.
- **Section Rhythm**:
  1. *Hero*: Çarpan yüksek kontrastlı kurumsal slogan, Disan Hidrolik yetkili servis rozeti, ikili doğrudan CTA (Hemen Ara / Hizmetler).
  2. *Kurumsal Güven*: Trakya bölgesindeki sanayi tecrübesi ve teknik altyapı özeti.
  3. *Hizmetler (3 Odak)*: Yedek Parça Temini, Yerinde Destek, Bakım-Onarım kartları.
  4. *İletişim*: Doğrudan telefon ve e-posta erişimi.

## 4. Color Direction & Semantic Roles

- **Surface Primary (Karanlık/Derin Kömür)**: `#0F141C` (Ana gövde ve kurumsal arka plan).
- **Surface Secondary (Grafit/Metalik Gri)**: `#1E2530` (Kartlar ve içerik blokları).
- **Accent Primary (Endüstriyel Amber / Disan Turuncusu)**: `#FF6B00` (Birincil CTA, yetkili servis rozeti, aktif vurgular).
- **Text Primary (Yüksek Kontrast Beyaz)**: `#F4F6F9` (Ana başlıklar ve okunabilir metin).
- **Text Muted (Teknik Gri)**: `#94A3B8` (Açıklamalar ve ikincil bilgiler).
- **Border / Divider (Teknik Çizgi)**: `#2A3444` (Bölüm ayrım çizgileri ve card border'lar).

## 5. Typography Direction

- **Primary Font Family**: `Inter`, `system-ui`, `-apple-system`, `sans-serif` (Okunabilirlik ve teknik hassasiyet).
- **Monospace Accent Font**: `JetBrains Mono` / `ui-monospace` (Hizmet kodları, telefon numaraları ve teknik etiketler için).
- **Type Scale**:
  - H1 Hero Title: `clamp(2.5rem, 5vw, 4rem)`, Bold (700).
  - H2 Section Title: `clamp(1.75rem, 3.5vw, 2.5rem)`, SemiBold (600).
  - Body Text: `1rem` (16px), Regular (400), Line-height 1.6.
  - Technical Tag / Badge: `0.875rem` (14px), Medium (500), Uppercase.

## 6. Interaction & Motion Principles

- **Dinamik Hover Etkileşimi**: Hizmet kartları üzerine gelindiğinde `transform: translateY(-4px)` ve accent border parlaması (`border-color: #FF6B00`).
- **Mikro Etkileşimler**: Telefon ve e-posta butonlarında yumuşak transition (`transition: all 0.25s ease`).
- **Gereksiz Animasyon Yasağı**: Ağır 3D veya kullanıcıyı yoran kaydırma animasyonları kullanılmayacak; performans öncelikli tutulacaktır.

## 7. Responsive Principles

- **Mobile First Focus**: Mobil cihazlarda (320px - 767px) tek sütunlu akış, büyük dokunmatik CTA alanları.
- **Tablet / Desktop Scaling**: 768px üzeri ekranlarda ikili ve üçlü grid düzenine yumuşak geçiş.
- **Sticky Contact Bar (Mobile)**: Mobilde alt kısımda sabit telefon ve mail erişim barı seçeneği.

## 8. Accessibility Baseline

- **WCAG AA Compliance**: `#F4F6F9` metin ile `#0F141C` zemin arasında minimum 7:1 yüksek kontrast oranı.
- **Focus Rings**: Klavye navigasyonu için belirgin `:focus-visible` kontur çizgisi (`outline: 2px solid #FF6B00`).
- **Semantic HTML**: `header`, `main`, `section`, `footer` ve `aria-label` kullanımı.

## 9. Imagery / Iconography Direction

- **İkonlar**: Temiz, teknik çizgi ikonları (Feather / Lucide tarzı 2px stroke genişliğinde hidrolik, dişli, servis ve telefon sembolleri).
- **Medya**: İtemleştirilmiş endüstriyel grafik motifleri ve yetkili servis rozet tasarımı.

## 10. Explicit Design Anti-Patterns

- Sahte stok müşteri yorumları veya sahte yıldızlı değerlendirmeler eklemek.
- Çalışmayan sahte form modalları veya harita resimleri koymak.
- Jenerik lacivert-beyaz hazır Bootstrap şablon görünümü.
