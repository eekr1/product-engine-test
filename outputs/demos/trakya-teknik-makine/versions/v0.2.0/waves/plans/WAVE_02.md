# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_02: Services Presentation Surface

- **Status**: Pending Execution
- **Goal**: Firmanın 3 temel hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) zengin kart yapısı ve teknik detaylarla sunmak.

## 1. Why This Wave / Dependency Rationale

Firmanın sunduğu temel hizmetler satış görüşmesinin en kritik konusudur. Potansiyel müşteriler firmanın ne tür teknik destek ve parça sağladığını burada detaylıca inceleyecektir.

## 2. Canonical Sources to Read

- [ai/PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)

## 3. Dependencies

- `WAVE_01` (Hero & Identity surface)

## 4. Scope

### In Scope
- 3 Ana Hizmet Kartı bileşeni:
  1. Yedek Parça Temini (FCL-003)
  2. Yerinde Teknik Destek (FCL-004)
  3. Makine Bakım ve Onarım (FCL-005)
- Hizmet kartı içi teknik özellik vurguları, ikonu, kısa açıklama ve iletişim/detay CTA'ları.
- Dynamic data rendering (`companyMockData.getServices()`).

### Out of Scope
- Genel iletişim kanalları ve adres bölümü (WAVE_03).

## 5. Expected Result / Target Structure

- `src/components/ServicesSection.js` / `.css`
- `src/components/ServiceCard.js` / `.css`

## 6. Implementation Checklist

- [ ] TASK-020: `ServicesSection` kapsayıcı bileşenini ve 3 sütunlu grid yapısını oluştur.
- [ ] TASK-021: `ServiceCard` bileşenini tasarla; kart başlığı, ikonu, açıklama metni ve aksiyon butonunu ekle.
- [ ] TASK-022: `companyMockData.getServices()` fonksiyonundan gelen veriyi karta dinamik olarak render et.
- [ ] TASK-023: Kartlar üzerine hover efektleri (`translateY(-4px)` ve accent border) ve tıklama aksiyonları ekle.

## 7. State / Role / Responsive Coverage

- Masaüstünde 3 sütunlu yan yana kartlar; mobilde dikey tek sütun kart akışı.

## 8. Automated Verification

- Mock data kart eşleşme ve render doğrulama.

## 9. Manual QA / Debug Verification

- Hizmet metinlerinin FCL-003..FCL-005 kayıtlarıyla eksiksiz uyumlu olduğunun doğrulanması.

## 10. Acceptance / Exit Criteria

- 3 temel hizmet açık, modern ve yüksek kontrastlı kart tasarımıyla sunulmuş olmalı.
- Veri mock adapter üzerinden dinamik beslenmeli.

## 11. Handoff / Stop Rule

- WAVE_02 tamamlandığında `WAVE_03`'e geçilir.

---

## Wave Result

- Status: Pending Execution (Henüz çalıştırılmadı).
