# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Visual Concept Narrative**: "Hassas Endüstriyel Güven ve Ağır Sanayi Yetkinliği". Tasarım dili; ağır sanayi, hidrolik güç ve makine bakımının gerektirdiği mühendislik hassasiyetini, sağlamlık hissini ve modern teknik kurumsallığı bir araya getirir.
- **Tasarım Karakteri**: Teknik, güvenilir, odaklanmış, sağlam, yüksek kontrastlı ve mühendislik disiplini taşıyan yüzeyler.

## 2. Differentiation / Anti-Template Rationale

- **Anti-Template Rationale**: "Jenerik lacivert hero + 3 sütun beyaz kart + standart footer" kalıbından kaçınılmıştır. Sektördeki sıradan şablon sitelerin aksine; endüstriyel koyu füme/antrasit tonları, teknik vurgulu altın/amber aksan rengi, mikro-ızgara arka plan hatları ve kart içi keskin teknik detay alanları kullanılarak projeye özel özgün bir görsel kimlik kurulmuştur.

## 3. Composition & Layout Principles

- **Endüstriyel Izgara (Industrial Grid)**: Sayfa düzeninde 12 sütunlu asimetrik ve dengeli endüstriyel grid yapısı kullanılır.
- **Yüzey Derecelendirmesi (Surface Elevation)**: Katmanlı yüzeyler; koyu antrasit tonlar (dark slate / graphite) üzerine oturan teknik servis blokları ile derinlik kazanır.

## 4. Color Direction & Semantic Roles

- **Primary Background (Derin Antrasit)**: `#0F141C` (Endüstriyel zemin)
- **Card / Surface (Grafite Yüzey)**: `#1A212D` (Teknik içerik yüzeyleri)
- **Primary Accent (Mühendislik Amber/Gold)**: `#E6A100` / `#FFB800` (Disan Hidrolik yetkili servis ve kritik buton vurguları)
- **Neutral Text (Yüksek Okunabilirlik Beyaz/Gümüş)**: `#F1F5F9` (Ana başlıklar), `#94A3B8` (Gövde metinleri)
- **Success / Status Accent**: `#10B981` (Servis aktiflik vurgusu)

## 5. Typography Direction

- **Primary Font**: `Inter` veya `Roboto` (Temiz, okunabilir ve kurumsal sans-serif).
- **Technical Accent Font**: `Outfit` veya `Space Grotesk` (Teknik başlıklar, servis istatistikleri ve unvan vurguları için güçlü endüstriyel karakter).
- **Hiyerarşi**: Hero Başlık (36px-48px Bold), Bölüm Başlığı (24px-32px SemiBold), Servis Kartı (18px-20px Medium), Gövde Metni (14px-16px Regular).

## 6. Interaction & Motion Principles

- **Micro-Animations**: Hover durumlarında kartların 2-3px hafif yukarı yükselmesi (subtle Y-translation) ve kenar çizgilerinin amber ışıması (`border-color` transition).
- **Durum Geçişleri**: Buton ve CTA alanlarında 200ms `ease-in-out` yumuşak geçişler.

## 7. Responsive Principles

- **Masaüstü (1200px+)**: Geniş 12 sütunlu düzen, servis detay kartları yan yana 3 sütun.
- **Tablet (768px - 1024px)**: 2 sütunlu esnek kart düzeni.
- **Mobil (< 768px)**: Tek sütunlu dikey akış, sabit alt iletişim barı veya kolay erişilebilir telefon/e-posta CTA'ları.

## 8. Accessibility Baseline

- **Kontrast Oranı**: Metin ve arka plan arasında minimum 4.5:1 WCAG AA kontrast uyumu.
- **Odak Durumu**: Klavye navigasyonunda buton ve bağlantılarda amber renkli görünür `focus-visible` çerçevesi.

## 9. Imagery / Iconography Direction

- **Görsel Dili**: Gerçekçi endüstriyel makine, hidrolik sistem, yedek parça ve teknik bakım fotoğrafları/çizimleri.
- **İkonografi**: İnce çizgi (outline) stilinde endüstriyel ve teknik ikonlar (dişli, anahtar, hidrolik piston, teknik destek kulaklığı).

## 10. Explicit Design Anti-Patterns

- Yasak: Parlak neon gradient'lar veya yapay jenerik stok görseller.
- Yasak: Zayıf kontrastlı silik metinler.
- Yasak: Hizmetlerin jenerik 3 boş metin kutusu halinde geçiştirilmesi.
