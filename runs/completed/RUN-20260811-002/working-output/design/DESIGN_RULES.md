# Trakya Teknik Makine — Design Rules

## 1. Visual Concept & Design Character

- **Karakter**: Hassas Mühendislik (Precision Industrial), Güvenilirlik ve Çağdaş Kurumsallık.
- **Konsept**: Trakya Teknik Makine'nin makine bakım, onarım ve yetkili servis uzmanlığını yansıtan; ağır sanayi kasvetinden uzak, modern endüstriyel netlik sunan mimari kompozisyon.
- **Tasarım Hissi**: Temiz, teknik açıdan yetkin, dayanıklı, hızlı yanıt veren ve kurumsal güven telkin eden görsel dil.

---

## 2. Differentiation / Anti-Template Rationale

- **Anti-Template İlkesi**: Sektör klişesi olan "varsayılan ağır lacivert + 3 klasik kart + harita" şablonu otomatik tasarım sonucu olarak kabul edilmez.
- **Ayrışma Noktaları**:
  - Şablonlaşmış kart dizilimi yerine, hizmetlerin teknik niteliğini öne çıkaran asimetrik hiyerarşik grid kompozisyonu.
  - Ağır karanlık renkler yerine, endüstriyel metalik soğuk gri zeminler, koyu antrasit tipografi ve güvenlik/servis vurgusu yapan canlı kehribar/turuncu accent dokunuşları.
  - Sektör şablonu hissi veren stok görseller yerine teknik yüzey dokuları, kontrollü negatif alan (spacing) ve mikro-etkileşimli kart yapıları.

---

## 3. Composition & Layout Principles

- **Grid & Spacing**: 12 sütunlu esnek grid. Modüller arası boşluklar (32px / 48px / 64px) ile net bir içerik nefes alanı.
- **Bölüm Hiyerarşisi**:
  1. Header / Global Shell (Logo, Hızlı İletişim CTA)
  2. Hero Section (Uzmanlık ve Güven Vurgusu + Hızlı Eylem)
  3. Yetkili Servis & Kimlik Vurgusu (Disan Hidrolik Yetkili Servis Beyanı)
  4. 3 Temel Hizmet Kartı (Yedek Parça, Yerinde Destek, Bakım-Onarım)
  5. İletişim ve Destek Kanalları
- **Yüzey Katmanları**: Derinlik hissi için hafif kart gölgeleri ve 1px teknik sınır çizgileri (`border: 1px solid var(--color-border)`).

---

## 4. Color Direction & Semantic Roles

- **Zemin (Background)**: `#F8FAFC` (Temiz cold slate zemin) ve `#FFFFFF` (Yüzey kartları)
- **Metin (Typography / Neutral Dark)**: `#0F172A` (Slate 900 — Güçlü tipografik okunabilirlik)
- **Endüstriyel Vurgu (Primary Brand Accent)**: `#EA580C` / `#D97706` (Endüstriyel Güven Kehribarı / Turuncu — İletişim ve CTA aksiyonları)
- **Teknik Nötrler (Secondary Neutral)**: `#475569` (Slate 600 — İkincil metinler ve teknik detaylar)
- **Sınır ve Yüzey Çizgileri**: `#E2E8F0` (Slate 200)

---

## 5. Typography Direction

- **Tipografi Ailesi**: `Inter` veya `Outfit` (Google Fonts — Modern, geometrik ve teknik okunabilirliği yüksek sans-serif).
- **Hiyerarşi**:
  - `Hero Heading (H1)`: 40px - 52px, Bold, `letter-spacing: -0.02em`
  - `Section Heading (H2)`: 28px - 36px, Semi-Bold
  - `Card Title (H3)`: 20px - 24px, Medium
  - `Body Text`: 16px, Line-height: 1.6
  - `Technical Label / Badge`: 12px - 14px, Uppercase, Medium, `letter-spacing: 0.05em`

---

## 6. Interaction & Motion Principles

- **Mikro-Etkileşimler**:
  - Hizmet kartları hover durumunda hafif yukarı kalkar (`transform: translateY(-4px)`) ve kenarlık vurgusu değişir.
  - İletişim CTA butonları yumuşak hover renk geçişine sahiptir (`transition: all 0.2s ease-in-out`).
- **Motion Sınırı**: Satış demosu sunumunda dikkat dağıtmayacak, kullanılabilirliği artıracak 200ms - 300ms yumuşak geçişler.

---

## 7. Responsive Principles

- **Masaüstü (>1024px)**: Geniş grid, 3 sütunlu hizmet yapısı, sabit header iletişim aksiyonu.
- **Tablet (768px - 1023px)**: 2 sütunlu hizmet kartı düzeni.
- **Mobil (<767px)**: Tek sütunlu dikey akış, kolay dokunulabilir iletişim butonları (`min-height: 48px`).

---

## 8. Accessibility Baseline

- **Kontrast Oranı**: Metin ve zemin arası W3C AA standardına uygun minimum 4.5:1 kontrast oranı.
- **Odaklanma Kontrolü (Focus Indicator)**: Klavye ile gezinmede görünür odak çizgileri (`outline: 2px solid var(--color-accent)`).
- **Semantik HTML**: `header`, `nav`, `main`, `section`, `article`, `footer` kullanımı.

---

## 9. Imagery / Iconography Direction

- **İkonografi**: Lucide / Feather tarzı temiz 2px stroke teknik vektörel ikonlar (Makine, Anahtar, Yedek Parça, Telefon).
- **Görsel Yönelim**: Endüstriyel ekipman, hidrolik sistemler ve teknik servis ortamını temsil eden yüksek kaliteli, net ve profesyonel görseller.

---

## 10. Explicit Design Anti-Patterns

- ❌ Sektör klişesi hazır lacivert şablon tema kullanmak.
- ❌ Düşük kontrastlı gri metinler yazmak.
- ❌ Aşırı yavaş ve dikkat dağıtan 1 saniyelik animasyonlar kullanmak.
- ❌ Mobil cihazlarda dokunması zor küçük butonlar üretmek.
