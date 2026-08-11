# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — WAVE_01: Core Frontend Demo & Assembly

- **Status**: Pending Execution (Blocked by `WAVE_00`)
- **Goal**: Modern kurumsal frontend demo görsel bileşenlerini (Hero, Hizmetler Grid'i, Yetkili Servis Rozeti, İletişim CTA) inşa etmek ve etkileşimli demoyu tamamlamak.

## 1. Why This Wave / Dependency Rationale

`WAVE_00` ile kurulan temel altyapı, CSS değişkenleri ve `CompanyService` katmanı üzerine inşa edilir. Bu wave, projenin temel çıktısı olan "satış görüşmesinde potansiyel müşteriye gösterilebilir modern frontend demo" sunumunu gerçekleştirir.

## 2. Canonical Sources to Read

- [PROJECT_BRAIN.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/ai/PROJECT_BRAIN.md)
- [PRODUCT_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/ai/PRODUCT_RULES.md)
- [TECH_CONTEXT.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/ai/TECH_CONTEXT.md)
- [DESIGN_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/design/DESIGN_RULES.md)
- [WAVE_00.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/waves/plans/WAVE_00.md)

## 3. Dependencies

- `WAVE_00` tamamlanmış ve dondurulmuş olmalıdır.

## 4. Scope

### In Scope

- Header & Navigation Shell bileşeni.
- Hero bölümü (Endüstriyel dinamik görünüm, ana slogan, hızlı iletişim CTA).
- Disan Hidrolik Trakya Bölgesi Yetkili Servis vurgu rozeti ve kartı.
- 3 Ana Hizmet Kart Grid'i (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım).
- Kurumsal Hakkımızda / Güven unsurları bölümü.
- İletişim & Harita/Konum bilgi bölümü (Telefon, E-posta, Adres).
- Mobil cihazlara özel alt sabit hızlı arama çubuğu.
- Hover animasyonları ve akıcı görünüm etkileşimleri.

### Out of Scope

- Gerçek backend form işleme, admin paneli, kullanıcı girişi.

## 5. Expected Result / Target Structure

```text
src/
├── components/
│   ├── Header.ts/html
│   ├── Hero.ts/html
│   ├── AuthorityBadge.ts/html
│   ├── ServicesGrid.ts/html
│   ├── ContactSection.ts/html
│   └── MobileQuickBar.ts/html
└── index.html (Montajlanmış Demo Arayüzü)
```

## 6. Implementation Checklist

- [ ] **Task 01-01 (Header & Navigation)**: Logotype, navigasyon bağlantıları ve hızlı arama CTA'sını içeren responsive header bileşenini oluştur.
- [ ] **Task 01-02 (Hero Component)**: Güçlü tipografi ve endüstriyel görsel atmosfer sunan Hero alanını inşa et. Ana mesaj: Trakya Bölgesi Yetkili Makine Servisi & Bakım Onarım.
- [ ] **Task 01-03 (Authority Badge & Trust)**: Disan Hidrolik yetkili servis logosunu ve bölgesel hizmet yetkinliğini sergileyen güven kartını ekle.
- [ ] **Task 01-04 (Services Grid)**: `CompanyService` katmanından çekilen 3 ana hizmet verisini (Bakım/Onarım, Yedek Parça, Yerinde Destek) [DESIGN_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/design/DESIGN_RULES.md) kart yapısıyla monte et.
- [ ] **Task 01-05 (Contact & Quick CTA)**: Telefon, e-posta ve iletişim formunu içeren bölümü inşa et. Mobil cihazlarda alt sabit hızlı arama çubuğunu aktifleştir.
- [ ] **Task 01-06 (Polishing & Transitions)**: Kart hover durumları, yumuşak geçişler ve mikro etkileşimleri uygula.

## 7. State / Role / Responsive Coverage

- Masaüstü (1024px+): Izgara düzeni ve zengin görsel kompozisyon.
- Tablet (768px - 1023px): Çift kolonlu kart yapısı ve katlanabilir menü.
- Mobil (<768px): Tek kolonlu dikey görünüm, parmakla kolay tıklanabilir 48px+ hızlı iletişim butonları.

## 8. Automated Verification

- Bileşenlerin DOM montajı ve `CompanyService` veri eşleşmeleri konsol hatası vermeden gerçekleşmelidir.

## 9. Manual QA / Debug Verification

- Tarayıcı çözünürlükleri değiştirilerek taşma, metin çakışması veya kırılma olmadığı doğrulanır.
- Telefon/e-posta butonlarına tıklandığında cihaz protokollerinin (`tel:`, `mailto:`) tetiklendiği kontrol edilir.

## 10. Acceptance / Exit Criteria

- Demo ilk bakışta mevcut SITE123 sitesinden belirgin biçimde daha modern ve kurumsal görünmektedir.
- 3 temel hizmet ve yetkili servis unvanı net biçimde sunulmaktadır.
- Satış görüşmesinde müşteri sunumuna hazır niteliktedir.

## 11. Handoff / Stop Rule

- `WAVE_01` tamamlandığında [CURRENT_STATUS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/ai/CURRENT_STATUS.md) belgesini güncelle ve run kapanışını raporla.

---

## Wave Result

*Henüz çalıştırılmadı.*
