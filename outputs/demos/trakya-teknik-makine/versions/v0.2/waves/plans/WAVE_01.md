# Wave Plan — WAVE_01: Corporate Demo Implementation

## 1. Wave Identity

- **Wave ID:** `WAVE_01`
- **Wave Name:** Corporate Demo UI Implementation
- **Target Phase:** Frontend Arayüz ve Sunum Geliştirmesi
- **Status:** Pending
- **Dependencies:** `WAVE_00`

---

## 2. Objective

Trakya Teknik Makine kurumsal web sitesinin modern, responsive, hızlı ve satış görüşmesinde gösterilebilir kalitedeki frontend demo arayüzünü inşa etmek.

---

## 3. Scope Boundaries

### In Scope

- Header & Navigation Bar (Logo, Yetkili Servis rozeti, Mobil Hamburger menü).
- Industrial Hero Banner (Güçlü slogan, hızlı CTA'lar, teknik arka plan efekti).
- Hizmetlerimiz Grid Bölümü (3 temel hizmet için özel endüstriyel görsel kartlar ve detay içerikler).
- Kurumsal Güven & Hakkımızda Bölümü (Disan Hidrolik Yetkili Servis vurgusu, tecrübe ve hızlı müdahale değer önermesi).
- İletişim ve Doğrudan CTA Bölümü (`tel:` ve `mailto:` bağlantıları, hızlı iletişim kartı).
- Responsive mobil/masaüstü uyumu ve akıcı hover/mikro etkileşimler.

### Out of Scope

- Backend veritabanı bağlantısı.
- Admin yönetim paneli.

---

## 4. Detailed Tasks & Step-by-Step Instructions

1. **Task 1.1: Build Responsive Header & Navigation Shell**
   - Implement `Navbar` with brand logo and "Disan Hidrolik Yetkili Servisi" badge.
   - Add mobile responsive menu toggle (`scripts/app.js`).
2. **Task 1.2: Build Industrial Hero Section**
   - Construct hero title: "Trakya Bölgesinde Güvenilir Makine Bakım, Onarım ve Teknik Servis".
   - Include primary CTA ("Hizmetlerimizi İnceleyin") and secondary CTA ("Hemen İletişime Geçin").
3. **Task 1.3: Render Services Section via DataService**
   - Dynamic fetch of services using `DataService.getServices()`.
   - Render 3 service cards with custom icons, technical descriptions, and feature lists:
     1. Yedek Parça Temini
     2. Yerinde Teknik Destek
     3. Makine Bakım ve Onarım
4. **Task 1.4: Implement Corporate Value Props & Authority Section**
   - Build section detailing Disan Hidrolik Makine regional authorized service expertise.
5. **Task 1.5: Build Contact & Direct Action Section**
   - Interactive contact card with `tel:+90...` and `mailto:info@...` links.
6. **Task 1.6: Polish & Mobile Responsive Verification**
   - Ensure pixel-perfect layout across desktop, tablet, and mobile devices.

---

## 5. Acceptance Criteria

- [ ] Demo ilk bakışta modern, endüstriyel ve son derece prestijli bir kurumsal algı veriyor.
- [ ] 3 temel hizmet `DataService` üzerinden dinamik render ediliyor.
- [ ] Telefon ve e-posta butonları mobilde ve masaüstünde doğrudan işlem başlatıyor.
- [ ] Sektör klişeleri (`sanayi = varsayılan lacivert`) içermeyen özgün bir visual concept sunuluyor.
- [ ] Mobil ve masaüstü görünümlerde hiçbir kırılma bulunmuyor.
