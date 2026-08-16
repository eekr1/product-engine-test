# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Agent Instructions

## 1. Canonical Read Order

Bu projede göreve başlayan yeni bir ajan aşağıdaki sırayı takip etmelidir:

```text
1. README.md
2. ai/PROJECT_BRAIN.md
3. ai/PRODUCT_RULES.md
4. ai/TECH_CONTEXT.md
5. design/DESIGN_RULES.md
6. project/PROJECT_PLAN.md
7. waves/WAVE_MAP.md
8. ai/CURRENT_STATUS.md
9. waves/plans/WAVE_<NN>.md (Aktif wave)
10. ai/NEXT_TASKS.md
11. ai/DECISIONS.md
```

## 2. Agent Behavior Rules

- **AB-001 (Strict FCL Compliance)**: Source allowlist `FCL-001..FCL-006` dışındaki hiçbir firma gerçeği (stok garantisi, orijinal parça garantisi, mobil filo, SLA, periyodik bakım paketleri, pres revizyonu, sertifika, referans, adres veya çalışma saati) koda veya metinlere eklenemez.
- **AB-002 (No Invented Backend)**: Gerçek backend, API endpoint'i veya veritabanı şeması uydurulamaz. Frontend verisi strictly `src/config/siteData.js` adapter'ından çekilir.
- **AB-003 (Model-Agnostic Operation)**: Bu talimatlar belirli bir AI modeline bağımlı değildir; standart geliştirme ve test prosedürlerini tanımlar.

## 3. Active Wave Execution Rule

- Ajan yalnızca `ai/CURRENT_STATUS.md` içerisinde belirtilen aktif wave (`WAVE_00`) ve ilgili plan (`waves/plans/WAVE_00.md`) kapsamındaki görevleri yürütür.
- Aktif wave tamamlanmadan sonraki wave işlerine geçilemez.
- Plan dışı yeni capability veya component icat edilemez.

## 4. Coding / Architecture Conventions

- **Clean Frontend Architecture**: HTML5, Vanilla JavaScript (ES6+ Modules), Vanilla CSS3 (Custom Properties).
- **CSS Custom Properties**: Tüm renk, font ve spacing değerleri `main.css` değişkenlerinden okunur (`var(--color-...)`).
- **Data Boundary**: Presentation bileşenleri doğrudan `siteData.js` adapter'ından veri alır; HTML içerisine metin verisi kontrolsüz hardcode edilmez.

## 5. Verification Mandates

- Kod yazıldıktan veya değiştirildikten sonra tarayıcıda görsel ve fonksiyonel kontroller yapılır.
- Konsolda hiçbir JS hatası veya kırık link uyarısı olmamalıdır.
- Responsive görünüm mobil (<768px) ve masaüstü (>1200px) cihazlarda doğrulanmalıdır.

## 6. Documentation Update / Handoff Rule

- Bir wave tamamlandığında ajan `ai/CURRENT_STATUS.md` ve `ai/NEXT_TASKS.md` dosyalarını günceller.
- Önemli teknik veya ürün kararları alındığında `ai/DECISIONS.md` belgesine yeni kayıt eklenir.

## 7. Stop / Clarification Rules

- Kullanıcı tarafından onaylanmamış yeni bir ürün özelliği veya backend entegrasyonu talep edildiğinde ajan execution'ı durdurur ve onay ister.
