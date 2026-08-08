# Product Engine — Completed Runs Katmanı (`runs/completed/`)

## 1. Amaç ve Kapsam

`runs/completed/` klasörü, Product Engine doğrulama süreçlerinden başarıyla geçmiş (`PASS` veya onaylı `CONDITIONAL PASS`) ve kapanış işlemleri eksiksiz tamamlanmış çalıştırmaların (`run`) tarihsel operasyonel kanıtlarını saklar.

Bu klasördeki tüm run kayıtları dondurulmuş (immutable) üretim kanıtları olarak muhafaza edilir.

---

## 2. Kabul Kriterleri (Completed Gate)

Bir çalışmanın `runs/active/` dizininden `runs/completed/` dizinine taşınabilmesi için aşağıdaki tüm şartların sağlanmış olması zorunludur:

1. **Tam Üretim:** Seçilen pakete (`PACKAGE_SELECTION`) ait tüm zorunlu dokümanlar eksiksiz üretilmiş olmalıdır.
2. **Doğrulama Onayı:** `VALIDATION_REPORT.md` sonucu `PASS` veya kullanıcı onaylı `CONDITIONAL PASS` olmalıdır.
3. **Nihai Çıktı Aktarımı:** Temiz nihai dokümanlar `outputs/<category>/<project-slug>/versions/<version>/` dizinine yayınlanmış olmalıdır.
4. **Latest Semantiği:** `outputs/<category>/<project-slug>/latest/` sembolik/güncel referansı bu sürüme işaret edecek şekilde güncellenmiş olmalıdır.
5. **Rapor Tamamlığı:** `RUN_MANIFEST.md` üzerindeki `completed_at`, `output_version` ve `output_ref` alanları doldurulmuş, `COMPLETION_REPORT.md` hazırlanmış olmalıdır.

---

## 3. Tarihsel Kanıt Niteliği ve Çıktı Sınırı

- **Çıktı Sahipliği:** Müşteriye veya kullanıcıya sunulacak nihai proje dokümanları `runs/completed/` içinde **saklanmaz**. Nihai çıktılar `outputs/` katmanının mülkiyetindedir.
- **Operasyonel İzlilik:** `runs/completed/<run-id>/` klasörü, söz konusu doküman paketinin hangi şartlarda, hangi şablon sürüpleriyle, hangi varsayım ve kararlarla üretildiğini kanıtlayan operasyonel arşivdir.

---

## 4. İmmutability Semantiği ve Kontrollü Lifecycle Güncellemesi

Tamamlanmış run kayıtlarının değişmezliği ve yaşam döngüsü güncellemeleri aşağıdaki kurallara bağlıdır:

### Tarihsel Üretim Kanıtları (Immutable Execution Evidence)
Çalışmanın üretimi sırasında oluşmuş tüm operasyonel kanıtlar **kesinlikle değiştirilemez, yeniden yazılamaz veya silinemez (`MUST NOT`)**:
- `INPUT_SNAPSHOT.md` değiştirilemez.
- `PACKAGE_SELECTION.md` yeniden düzenlenemez.
- `ASSUMPTIONS.md`, `CONFLICTS.md`, `DECISIONS.md` geçmişi silinemez.
- `VALIDATION_REPORT.md` ve `COMPLETION_REPORT.md` geriye dönük değiştirilemez.
- `working-output/` içeriği yeniden üretilemez veya silinemez.

### Kontrollü Yaşam Döngüsü Eklemeleri (Controlled Lifecycle Annotation)
Approved Run Protocol tarafından tanımlanan `Completed → Invalidated` geçişi gerçekleştiğinde, tarihsel üretim kanıtları yeniden yazılmaksızın **yalnızca kontrollü metadata güncellemesi** yapılır:
1. **Status Anotasyonu:** `RUN_MANIFEST.md` belgesindeki `status` alanı `status: Invalidated` olarak güncellenir.
2. **Append-Only Olay Kaydı:** `RUN_LOG.md` belgesinin sonuna geçmiş olaylar değiştirilmeksizin append-only biçimde invalidation olayı kaydedilir:
   ```text
   Timestamp: <ISO-8601>
   Event: Invalidated
   Reason: <Geçersiz kılma nedeni>
   Replacement Run ID: <Varsa yeni run ID'si>
   ```

---

## 5. Sonradan Geçersiz Kılma (Invalidated Runs) Davranışı

Tamamlanmış bir run, ilerleyen zamanlarda proje kapsamının değişmesi, girdi revizyonu veya teknik kararların yenilenmesi nedeniyle geçerliliğini yitirebilir.

- **Fiziksel Konum:** Geçersiz kılınan bir run klasörü `runs/completed/` altındaki konumunda korunmaya devam eder. Ayrı bir `runs/invalidated/` klasörü **oluşturulmaz** ve run klasörü silinmez.
- **Durum Güncellemesi:** `RUN_MANIFEST.md` üzerindeki `status` değeri `Invalidated` olarak saklanır.
- **Outputs Bağlantısı:** `outputs/` katmanındaki `latest/` referansı geçersiz kılınan bu run'ın çıktısına işaret ettirilemez (`MUST NOT`).
