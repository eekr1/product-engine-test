# Product Engine — Active Runs Katmanı (`runs/active/`)

## 1. Amaç ve Kapsam

`runs/active/` klasörü, Product Engine tarafımdan aktif olarak yürütülen, henüz nihai kapanışına ulaşmamış tüm çalıştırma (run) oturumlarının yaşadığı fiziksel alandır.

Bir run yaşam döngüsünü tamamlayana (başarılı veya başarısız/iptal olarak sonlanana) kadar tüm operasyonel belgeleri ve çalışma çıktıları ile birlikte bu klasör altında barındırılır.

---

## 2. Barındırılan Run Durumları (Active States)

`runs/active/<run-id>/` altında yalnızca aşağıdaki durumlara (`status`) sahip run klasörleri bulunabilir:

- **Created:** Run kimliği oluşturuldu, dizin açıldı.
- **Initialized:** Girdi anlık görüntüsü alındı, paket seçimi kaydedildi.
- **Running:** Doküman üretimi aktif şekilde devam ediyor.
- **Blocked:** Kritik bir engel veya çözülemeyen çelişki nedeniyle bekleniyor.
- **Paused:** Operatör kararı veya netleştirme sorusu yanıtı bekleniyor.
- **Resumed:** Duraklatılmış durumdan tekrar çalışmaya başlandı.
- **Validation:** Çalışma çıktıları doğrulama aşamasında denetleniyor.

> **NOT:** `Paused` ve `Blocked` durumundaki çalışmalar da fiziksel olarak `runs/active/` klasöründe kalmaya devam eder. Ayrı bir `paused/` veya `blocked/` klasörü oluşturulmaz.

---

## 3. Active Run İçi Yapı

Aktif durumdaki her bir run klasörü (`runs/active/<run-id>/`) aşağıdaki kanonik 11 belgeyi ve `working-output/` dizinini barındırmalıdır:

```text
runs/active/<run-id>/
├── RUN_MANIFEST.md          → Durum, metadata ve üst özet
├── INPUT_SNAPSHOT.md        → Onaylı girdinin değişmez anlık görüntüsü
├── PACKAGE_SELECTION.md     → Seçilen paket ve teslimat profili gerekçesi
├── SOURCE_REGISTER.md       → Kullanılan kaynak, şablon ve referans listesi
├── ASSUMPTIONS.md           → Üretim sırasında yapılan varsayımlar
├── CONFLICTS.md             → Tespit edilen veya çözülen çelişkiler
├── DECISIONS.md             → Operasyonel çalıştırma kararları
├── RUN_LOG.md               → Kronolojik olay günlüğü
├── PROGRESS.md              → Aşama ve doküman üretim ilerlemesi
├── VALIDATION_REPORT.md     → Doğrulama denetim sonuçları (PASS/CONDITIONAL PASS/FAIL)
├── COMPLETION_REPORT.md     → Kapanış özeti taslağı
└── working-output/          → Doğrulama öncesi geçici/taslak dokümanlar
```

---

## 4. Working Output İzolasyonu

- Üretilen tüm geçici ve taslak proje dokümanları **yalnızca** `runs/active/<run-id>/working-output/` klasöründe tutulur.
- Çalışma `Validation` aşamasından başarıyla geçmeden ve run `Completed` durumuna ulaşmadan hiçbir belge `outputs/` katmanına aktarılamaz.

---

## 5. Yetim Run İzolasyonu ve Temizlik Kuralları (No Orphan Runs)

1. **Manuel Yetim Klasör Yasağı:** `runs/active/` altında içi boş, sahipsiz veya manuel bırakılmış runs klasörleri oluşturulamaz (`MUST NOT`).
2. **Kesintisiz Yaşam Döngüsü:** Bir run yarım kaldığında veya duraklatıldığında `status` alanı `Blocked` veya `Paused` yapılmalı, nedeni `RUN_LOG.md` ve `RUN_MANIFEST.md` içerisine kaydedilmelidir.
3. **Kapanış ve Taşıma:** Run tamamlandığında `runs/completed/<run-id>/` dizinine; başarısız olduğunda veya iptal edildiğinde ise `runs/failed/<run-id>/` dizinine bütün olarak taşınır. `active/` dizininde iz bırakılmaz.
