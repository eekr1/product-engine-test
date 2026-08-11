# Trakya Teknik Makine — WAVE_01: Core UI & Service Showcase

- **Status**: Scheduled
- **Goal**: Modern Hero bölümünü, Disan Hidrolik Yetkili Servis tanımı vurgusunu ve 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) UI bileşenlerini özgün görsel dille geliştirmek.

---

## 1. Why This Wave / Dependency Rationale

`WAVE_00` ile kurulan mock service boundary ve CSS değişkenleri üzerine, satış görüşmesinde gösterilecek temel kurumsal değer ve hizmet sunum alanları inşa edilmelidir.

---

## 2. Canonical Sources to Read

1. [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md)
2. [ai/PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
3. [waves/plans/WAVE_00.md](./WAVE_00.md)

---

## 3. Dependencies

- `WAVE_00` (Foundation & Mock Service Boundary) tamamlanmış olmalıdır.

---

## 4. Scope

### In Scope

- Header / Navigasyon kabuğu (Logo, Menü, Hızlı Arama Butonu).
- Hero Section (Modern kompozisyon, teknik mesaj, hızlı aksiyon CTA).
- Yetkili Servis Vurgu Modülü (Disan Hidrolik Trakya Yetkili Servis beyanı sunumu).
- 3 Temel Hizmet Kart Bileşenleri (Yedek Parça, Yerinde Destek, Bakım-Onarım kartları, hover etkileşimleri, teknik detaylar).

### Out of Scope

- Alt bilgi (footer) ve detaylı iletişim form entegrasyonu (`WAVE_02`).

---

## 5. Implementation Checklist

- [ ] Header / Navigation bileşeninin geliştirilmesi.
- [ ] Hero Section kompozisyonunun ve tipografik hiyerarşisinin inşası.
- [ ] Yetkili Servis tanımı vurgu kartının oluşturulması.
- [ ] Hizmet Kartları Grid modülünün `IDataService` üzerinden verileri çekerek çizilmesi.
- [ ] Hover ve odaklanma etkileşimlerinin eklenmesi.

---

## 6. State / Role / Responsive Coverage

- Hizmet kartları veri yüklenirken skeleton/loading durumu gösterebilmelidir.
- Mobil cihazlarda dikey akış, masaüstünde 3 sütunlu kart gridi sağlanmalıdır.

---

## 7. Automated Verification

- Bileşenlerin hatasız render edilmesi.
- Console veya linter hatası oluşmaması.

---

## 8. Manual QA

- Hizmet kartlarının görsel hiyerarşisinin ve tipografisinin [design/DESIGN_RULES.md](../../design/DESIGN_RULES.md) ile uyumu.
- Hover animasyonlarının yumuşaklığı.

---

## 9. Acceptance / Exit Criteria

1. Ziyaretçi ilk bakışta firmanın uzmanlığını ve 3 temel hizmetini anlaşılır biçimde inceleyebilmelidir.
2. Hizmet bileşenleri verileri `MockDataService` üzerinden tüketmelidir.
3. Sektör klişesi şablon tasarımı yerine özgün endüstriyel görsel dil hissedilmelidir.

---

## 10. Handoff / Stop Rule

- Ana arayüz ve hizmet kartları tamamlandığında [ai/CURRENT_STATUS.md](../../ai/CURRENT_STATUS.md) güncellenerek `WAVE_02` aşamasına geçilmelidir.

---

## Wave Result

- **Result Status**: Scheduled
- **Completion Date**: 
- **Notes**: Wave 01 planlanmıştır.
