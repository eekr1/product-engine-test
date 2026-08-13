# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Hero & Identity Surface

- **Status**: Pending Execution
- **Goal**: Birincil giriş yüzeyini (Header, Navigation, Hero Section) ve Disan Hidrolik Yetkili Servisliği güven bölümünü oluşturmak.

## 1. Why This Wave / Dependency Rationale

Hero ve kurumsal kimlik yüzeyi, potansiyel müşterinin veya ziyaretçinin ilk 3 saniyede firma güvenilirliğini, faaliyet alanını ve yetkili servislik statüsünü anlamasını sağlar.

## 2. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 3. Dependencies

- `WAVE_00` (Foundation, design tokens & mock data adapter)

## 4. Scope

### In Scope
- Header & Navigation bar (logo amblemi, navigasyon linkleri, hızlı arama CTA'ı).
- Hero Section (güçlü kurumsal slogan, teknik servis özeti, arama ve iletişim butonları).
- Authorized Trust Badge (Disan Hidrolik Makine Trakya Bölge Yetkili Servisliği özel kartı/rozet bölümü).

### Out of Scope
- Hizmet detay kartlarının oluşturulması (WAVE_02).
- İletişim formu ve adres haritası (WAVE_03).

## 5. Expected Result / Target Structure

- `src/components/Header.js` / `.css` (Header bileşeni)
- `src/components/Hero.js` / `.css` (Hero & Trust Badge bileşeni)

## 6. Implementation Checklist

- [ ] TASK-010: Header & Navigation yapısını semantic `<header>` etiketiyle kur.
- [ ] TASK-011: Hero Section bileşenini `DESIGN_RULES.md` renk ve tipografi kurallarıyla inşa et.
- [ ] TASK-012: Disan Hidrolik Yetkili Servisliği güven rozetini ve açıklamasını ekle (FCL-002).
- [ ] TASK-013: Hero bölümü içindeki birincil CTA (Hemen Ulaş) ve ikincil CTA (Hizmetlerimizi İnceleyin) yönlendirmelerini bağla.

## 7. State / Role / Responsive Coverage

- Masaüstünde yan yana slogan + rozet kompozisyonu; mobilde üst üste dikey düzen.

## 8. Automated Verification

- Component render ve CSS class doğrulama.

## 9. Manual QA / Debug Verification

- İlk ekran (Above-the-fold) görünümünün 320px, 768px ve 1440px ekranlarda tasarımıyla örtüştüğünü onaylama.

## 10. Acceptance / Exit Criteria

- Hero ve Yetkili Servislik bölümü görsel olarak tamamlanmış olmalı.
- Ziyaretçi ilk bakışta firma adını ve Disan Hidrolik Yetkili Servisliğini görebilmeli.

## 11. Handoff / Stop Rule

- WAVE_01 tamamlandığında `WAVE_02`'ye geçilir.

---

## Wave Result

- Status: Pending Execution (Henüz çalıştırılmadı).
