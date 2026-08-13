# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Wave Map

## 1. Wave Architecture Principles

- **Single Deliverable Focus**: Her wave tek bir bağımsız ve doğrulanabilir teslimat sonucunu (surface/foundation/QA) temsil eder.
- **No Mega-Wave**: `Core Frontend` gibi birden fazla bağımsız kullanıcı yüzeyini tek torbaya atan dev dalgalar yasaktır.
- **Deterministic Separation**: `demo-frontend` package kuralı uyarınca Services ve Contact sorumlulukları ayrı dalgalar halindedir; bütün projeyi kapsayan son QA (Cross-Cutting QA) ayrı bir final dalga olarak tanımlanmıştır.
- **Scope Truth Boundary**: Future/unresolved scope dalga planına eklenemez. Yalnızca approved input kapsamındaki veri ve yüzeyler işlenir.

## 2. Wave Map Summary

| Wave ID | Wave Adı | Odak / Sorumluluk Alanı | Bağımlılık | Hedef Deliverable |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Setup | Proje şablonu, CSS design tokens ve `companyMockData.js` adapter katmanı | Yok | Temel altyapı & mock adapter |
| `WAVE_01` | Hero & Identity Surface | Header, Hero, kurumsal slogan ve Disan Hidrolik Yetkili Servisliği rozeti | `WAVE_00` | Birincil giriş ve güven yüzeyi |
| `WAVE_02` | Services Presentation Surface | 3 ana hizmetin (Yedek Parça, Yerinde Destek, Bakım & Onarım) detaylı sunumu | `WAVE_01` | Hizmet portföyü yüzeyi |
| `WAVE_03` | Contact & Action Surface | Telefon/e-posta CTA'ları, adres bilgisi ve iletişim formu/etkileşim bileşenleri | `WAVE_02` | Dönüşüm ve iletişim yüzeyi |
| `WAVE_04` | Cross-Cutting QA & Demo Polish | Tüm ekran boyutlarında (320px..1440px) responsive doğrulama, FCL kontrolü ve satış sunumu cilalaması | `WAVE_03` | Satışa hazır agent-ready demo |

## 3. Dependency Chain

```text
WAVE_00 (Foundation & Setup)
  └──> WAVE_01 (Hero & Identity Surface)
        └──> WAVE_02 (Services Presentation Surface)
              └──> WAVE_03 (Contact & Action Surface)
                    └──> WAVE_04 (Cross-Cutting QA & Polish)
```

## 4. Wave Entries

### WAVE_00: Foundation & Setup
- **Amaç**: Presentation katmanı klasör şemasını, CSS custom properties (`tokens.css`) ve `companyMockData.js` adapter katmanını kurmak.
- **Deliverable**: Temel HTML5/CSS/JS altyapısı ve mock adapter servisi.
- **Exit Kriteri**: Design tokens hazır, mock data adapter'ı doğrulanmış veriyi (FCL-001..FCL-006) döndürüyor.

### WAVE_01: Hero & Identity Surface
- **Amaç**: Birincil giriş yüzeyini, Header/Navigation'ı, kurumsal marka sunumunu ve Disan Hidrolik Yetkili Servisliği rozetini oluşturmak.
- **Deliverable**: Hero ve kurumsal kimlik arayüz yüzeyi.
- **Exit Kriteri**: Ziyaretçi ilk 3 saniyede firma adını, yetkili servisliğini ve bölgesel odak noktasını görebiliyor.

### WAVE_02: Services Presentation Surface
- **Amaç**: Firmanın 3 temel hizmetini (Yedek Parça Temini, Yerinde Destek, Bakım-Onarım) zengin kart yapısı ve teknik detaylarla sunmak.
- **Deliverable**: Hizmetler sunum yüzeyi.
- **Exit Kriteri**: Hizmet kartları mock adapter'dan gelen verileri doğru görsel hiyerarşiyle sergiliyor.

### WAVE_03: Contact & Action Surface
- **Amaç**: İletişim bilgilerini, telefon (`tel:`) ve e-posta (`mailto:`) CTA'larını ve hızlı iletişim form/etkileşim bileşenlerini kurmak.
- **Deliverable**: İletişim ve dönüşüm yüzeyi.
- **Exit Kriteri**: Mobil ve masaüstü kullanıcısı tek tıkla telefon araması veya e-posta gönderme eylemi başlatabiliyor.

### WAVE_04: Cross-Cutting QA & Demo Polish
- **Amaç**: Tüm yüzeylerin responsive davranışlarını (320px..1440px), FCL metin doğruluğunu ve satış görüşmesi sunum kalitesini test edip son dokunuşları yapmak.
- **Deliverable**: Doğrulanmış, hatasız ve satışa hazır kurumsal frontend demo.
- **Exit Kriteri**: Lighthouse performans > 90, hiçbir breakpoint'te kayma yok, FCL doğrulaması eksiksiz.

## 5. Cross-Wave Invariants

- Gelecek wave'lerin işleri aktif wave planına gizlenemez.
- FCL dışı uydurma iddialar veya sahte REST API endpoint'leri üretilemez.
- Her wave sonunda presentation katmanı çalışan ve önizlenebilir bir durumda dondurulur.

## 6. Global Exit / Handoff Rules

- `WAVE_04` tamamlandığında demo müşteri sunumuna teslim edilebilir sayılır.
- Kod ve dokümantasyon yeni bir ajanın ek mimari planlama yapmadan koda müdahale edebileceği agent-ready standarttadır.
