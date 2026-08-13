# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_02: Service Presentation Surface

- **Status**: Ready for Execution
- **Goal**: Firmanın 3 temel hizmetini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) teknik detaylar ve yüksek görsel hiyerarşi ile sunan Service kartlarını inşa etmek.

## 1. Why This Wave / Dependency Rationale

- Trakya Teknik Makine'nin iş modelini ve müşteri sunduğu çözümleri tanımlayan ana içerik alanıdır. Satış görüşmesinde "neler sunuluyor" sorusunun yanıtıdır.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](../../ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](../../ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](../../ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](../../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../WAVE_MAP.md)
- [WAVE_01.md](./WAVE_01.md)

## 3. Dependencies

- `WAVE_01` (Hero ve Kurumsal yapı tamamlanmış olmalıdır).

## 4. Scope

### In Scope
- 3 Temel Hizmet Bölümü (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım).
- Hizmet Kartları Mimarisi (İkon, Hizmet Başlığı, Açıklama Metni, Teknik Kapsam Listesi).
- Etkileşimli Hizmet Detay Modal/Panel bileşeni (Ziyaretçinin hizmet detayını incelemesi için).
- Mobil cihazlarda dikey akışlı responsive kart düzeni.

### Out of Scope
- İletişim bölümü ve harita (Wave 03'e aittir).

## 5. Expected Result / Target Structure

```text
components/
├── ServiceGrid.js
├── ServiceCard.js
└── ServiceModal.js
styles/
└── components/
    ├── service-grid.css
    └── service-card.css
```

## 6. Implementation Checklist

### 6.1 Hizmetler Izgarası (Service Grid)
- [ ] 1.1 Hizmetler bölümü ana kapsayıcısını (`<section class="services">`) kurgula.
- [ ] 1.2 Bölüm başlığını ("Hizmetlerimiz ve Uzmanlık Alanlarımız") ve alt açıklamasını ekle.
- [ ] 1.3 `layout.css` grid yapısını kullanarak 3-sütunlu responsive kart düzenini kur.

### 6.2 3 Ana Hizmet Kartının İnşası
- [ ] 2.1 **Hizmet 1 — Yedek Parça Temini:** İkon, Orijinal parça vurgusu, hızlı temin avantajı ve açıklama kartını `companyData.js` üzerinden bağla.
- [ ] 2.2 **Hizmet 2 — Yerinde Teknik Destek:** İkon, Trakya bölgesi mobil müdahale vurgusu ve teknik destek kapsama listesini bağla.
- [ ] 2.3 **Hizmet 3 — Makine Bakım ve Onarım:** İkon, Periyodik bakım, hidrolik revizyon ve arıza onarım detay listesini bağla.

### 6.3 Hizmet Detay Etkileşimi (Service Modal / Drawer)
- [ ] 3.1 Kart üzerine tıklandığında açılan hafif hizmet detay modal/drawer bileşenini oluştur.
- [ ] 3.2 Modal içinde ilgili hizmetin teknik süreç aşamalarını ve iletişim CTA butonunu göster.
- [ ] 3.3 ESC tuşu veya dışarı tıklama ile modal kapatma fonksiyonunu ekle.

## 7. State / Role / Responsive Coverage

- Masaüstü: 3 sütun yanyana düzen.
- Tablet: 2 sütun + 1 alt sütun düzeni.
- Mobil: Tek sütun dikey kart akışı.
- State: ServiceCard hover parlaklığı, Modal Open/Closed durumları.

## 8. Automated Verification

- Tarayıcı konsol kontrolü (Modal tetikleme hatalarının olmaması).

## 9. Manual QA / Debug Verification

- Her 3 hizmet kartına tıklanarak modalın doğru içerikle açıldığı test edilir.
- Mobil görünümde kartların ekran sınırı içinde kaldığı ve kaydırma yapmadığı doğrulanır.

## 10. Acceptance / Exit Criteria

- [ ] 3 ana hizmet kartı tasarıma uygun biçimde geliştirildi.
- [ ] Hizmet metinleri ve özellikleri `companyData.js` üzerinden dinamik çekiliyor.
- [ ] Hizmet detay modalı sorunsuz çalışıyor.
- [ ] Sektör klişelerinden uzak özgün mühendislik estetiği sağlandı.

## 11. Handoff / Stop Rule

- Wave 02 tamamlandıktan sonra `WAVE_03` (Contact, Map & Presentation QA) başlatılabilir.

---

## Wave Result

Status: Pending Execution (Not executed yet).
