# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Görsel Dil ve Estetik İlkeler

- **Estetik Yaklaşım**: Modern Endüstriyel Kurumsallık (Modern Industrial Corporate). Ağır sanayi ve teknik servis güvenilirliğini modern web mimarisi, zengin kart hiyerarşisi ve net tipografi ile harmanlayan premium görünüm.
- **Tasarım Hissi**: Güven veren, teknik açıdan yetkin, temiz, keskin ve profesyonel.

---

## 2. Tipografi ve Renk Paleti

### Renk Paleti

```css
:root {
  /* Primary & Brand */
  --color-primary: #0F2C59;        /* Koyu Endüstriyel Mavi (Kurumsal Güven) */
  --color-primary-hover: #1D4ED8;  /* Canlı Mavi Accent */
  
  /* Accent & Highlight */
  --color-accent: #E11D48;         /* Servis & Uyarı Kırmızı/Vurgu */
  --color-accent-amber: #D97706;   /* Hidrolik & Destek Amber Sarı */

  /* Neutral Backgrounds & Cards */
  --color-bg-main: #F8FAFC;        /* Açık Gri/Mavi Zemin */
  --color-bg-card: #FFFFFF;        /* Temiz Beyaz Kart Zeminleri */
  --color-bg-dark: #0F172A;        /* Koyu Footer & Dark Section Zemin */

  /* Typography Colors */
  --color-text-main: #1E293B;      /* Koyu Slate Gövde Metni */
  --color-text-muted: #64748B;     /* İkincil Açıklama Metni */
  --color-text-white: #FFFFFF;     /* Koyu Zemin Metni */

  /* Borders & Shadows */
  --color-border: #E2E8F0;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
```

### Tipografi Skalası

- **Primary Font**: `Inter`, `Roboto`, veya sistem sans-serif font ailesi (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI"`).
- **H1 (Hero Heading)**: 2.5rem - 3.5rem (40px - 56px), SemiBold / Bold (700), Line-height: 1.15
- **H2 (Section Heading)**: 1.875rem - 2.25rem (30px - 36px), SemiBold (600)
- **H3 (Card Title)**: 1.25rem - 1.5rem (20px - 24px), Medium / SemiBold (600)
- **Body Regular**: 1rem (16px), Line-height: 1.6
- **Small / Caption**: 0.875rem (14px), Regular (400)

---

## 3. Düzen, Spacing ve Responsive Kurallar

- **Grid & Container**: Max-width `1200px`, yan padding `1.5rem` (24px).
- **Breakpoint Kuralları**:
  - `Mobile`: < 768px (Tek kolonlu layout, mobil menü drawer/hamburger)
  - `Tablet`: 768px - 1024px (2 kolonlu hizmet kartları)
  - `Desktop`: > 1024px (3 kolonlu hizmet kartları, yan yana Hero yapısı)
- **Spacing Standartları**: 8px bazlı ölçek (8px, 16px, 24px, 32px, 48px, 64px).

---

## 4. Etkileşim ve Animasyon Kuralları

- **Hover Efektleri**: Hizmet kartları üzerine gelindiğinde `transform: translateY(-4px)` yükselme ve `box-shadow` derinleşmesi.
- **CTA Buton Geçişleri**: `transition: all 0.2s ease-in-out` ile renk ve gölge geçişleri.
- **Mikro-Animasyonlar**: Yetkili servis rozetinde ve butonlarda zarif parlama/pulsing efektleri.

---

## 5. Erişilebilirlik Standartları (Accessibility)

- **WCAG 2.1 AA Kontrast Uyumluğu**: Gövde metni ve başlıklar arka plan üzerinde minimum 4.5:1 kontrast oranını karşılamalıdır.
- **Focus States**: Tıklanabilir butonlar ve form alanları belirgin `outline: 2px solid var(--color-primary-hover)` klavye odaklanma halkasına sahip olmalıdır.
- **Semantic HTML5**: `header`, `nav`, `main`, `section`, `article`, `footer` etiketleri doğru hiyerarşiyle kullanılmalıdır.
