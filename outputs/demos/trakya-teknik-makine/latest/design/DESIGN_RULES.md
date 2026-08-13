# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Concept Name**: *Precision Industrial Trust (Hassas Endüstriyel Güven)*
- **Tasarım Karakteri**: Teknik uzmanlık, mühendislik hassasiyeti, hızlı servis bilinci ve modern kurumsal şeffaflık.
- **Visual Feel**: Ağır ve hantal eski sanayi siteleri yerine; yüksek kontrastlı, çelik ve grafit dokulu, kontrollü güvenlik sarısı aksanlarına sahip, havalı ve nefes alan endüstriyel arayüz.

## 2. Differentiation / Anti-Template Rationale

- **Anti-Klişe Kuralı**: "Sanayi/makine firması = otomatik koyu lacivert zemin + 3 düz kart + klişe hero" otomatik eşlemesi reddedilmiştir.
- **Farklılaşma Yönü**: 
  1. Monokrom çelik ve derin grafit yüzeyler üzerinde keskin teknik grid yapısı.
  2. Yetkili servislik (Disan Hidrolik) gururunu gösteren özel güven rozetleri ve mikro-etkileşimler.
  3. Tipografik hiyerarşide teknik monospace detaylar (parça kodları, servis süreleri) ile yüksek okunabilirlikli sans-serif kurumsal başlıkların harmanlanması.

## 3. Composition & Layout Principles

- **Grid & Spacing**: 8-point spacing ölçeği (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`). Keskin köşe yarıçapları (`border-radius: 4px` - `8px`, yumuşak yumuşatılmış endüstriyel formlar).
- **Asimetric Precision Layout**: Hero bölümünde sol tarafta güçlü kurumsal slogan ve arama/ulaşım CTA'ları; sağ tarafta teknik servislik rozeti ve 3D görsellik hissi veren canlı kart bileşeni.
- **Section Rhythm**: Alternatif açık (kömür/çelik) ve koyu (derin grafit) bölüm arka planları ile güçlü okuma ritmi.

## 4. Color Direction & Semantic Roles

- **Primary Surfaces**: `Steel Dark / Slate Charcoal` (`#0F172A`, `#1E293B`)
- **Secondary Surfaces**: `Industrial Cool Gray` (`#F8FAFC`, `#F1F5F9`)
- **Primary Text**: `Deep Slate / Near Black` (`#0F172A` açık yüzeyde) / `Pure White / Cool Gray` (`#F8FAFC` koyu yüzeyde)
- **Brand Accent**: `Precision Safety Gold / Amber` (`#F59E0B`, `#D97706`) — Yetkili servis ve ikincil aksiyonlar için.
- **Trust Badge Accent**: `Industrial Steel Blue` (`#0284C7`) — Disan Hidrolik Yetkili Servisliği ve teknik destek vurgusu için.
- **Success / Status**: `Precision Emerald` (`#10B981`) — Aktif servis ve stok bulunabilirliği için.

## 5. Typography Direction

- **Primary Font**: `Inter` / `Outfit` / `system-ui` — Kurumsal metinler ve okunabilir gövde yazıları.
- **Technical Accent Font**: `JetBrains Mono` / `ui-monospace` — Parça numaraları, teknik servis kodları, telefon numaraları ve rozet etiketleri.
- **Scale**:
  - Hero Title: `2.75rem` (44px) / Bold / Line-height 1.15
  - Section Heading: `2.0rem` (32px) / SemiBold / Line-height 1.2
  - Subheading: `1.25rem` (20px) / Medium
  - Body Text: `1.0rem` (16px) / Regular / Line-height 1.6
  - Technical Caption: `0.875rem` (14px) / Monospace / Letter-spacing +0.05em

## 6. Interaction & Motion Principles

- **Hover States**: Kartlarda hafif yukarı doğru yükselme (`translateY(-4px)`), sınır çizgisinde güvenlik sarısı/mavi parlama (`border-color: #F59E0B`).
- **Button Micro-Interactions**: Tıklamada hafif ölçek küçülmesi (`scale(0.98)`), geçiş süresi `200ms ease-out`.
- **Motion Reduction**: Mobilde ve `prefers-reduced-motion` durumunda animasyonlar sıfırlanır, performans korunur.

## 7. Responsive Principles

- **Mobile First Focus**: Mobil ekranlarda (320px - 768px) tüm kartlar tek sütun dikey akışa dönüşür. Telefon CTA'ları ekranın alt kısmında sabit ("sticky bottom call bar") gösterilebilir.
- **Desktop Grid**: Masaüstü ekranlarda (1024px+) 3 sütunlu hizmet kartı kompozisyonu.

## 8. Accessibility Baseline

- **Contrast Ratio**: Metin/arka plan renk kontrastı en az WCAG AA standartı olan 4.5:1 seviyesindedir.
- **Focus Indicators**: Klavyeyle gezinen kullanıcılar için 2px açık renkte odak halkası (`outline: 2px solid #F59E0B`).
- **Semantic Structure**: `h1` - `h3` başlık sırasına tam uyum.

## 9. Imagery / Iconography Direction

- **Iconography**: Minimalist, keskin vektörel endüstriyel ikonlar (çark, İngiliz anahtarı, kargo paketi, telefon, harita).
- **Imagery Style**: Gerçekçi makine, parça ve servis görselleri (jenerik stüdyo görselleri yerine somut endüstriyel detaylar).

## 10. Explicit Design Anti-Patterns

- ❌ Otomatik lacivert/mavi jenerik Bootstrap şablon görünümü.
- ❌ Yüksekliği belirsiz, kayan uyumsuz yazı tipleri.
- ❌ Mobilde yanlara taşan geniş tablolar veya kesilen kartlar.
- ❌ Zayıf kontrastlı gri üzeri açık gri yazılar.
