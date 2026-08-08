# Product Engine — Completed Runs Katmanı (`runs/completed/`)

## 1. Amaç ve Kapsam

`runs/completed/` klasörü, Product Engine doğrulama süreçlerinden başarıyla geçmiş (`PASS` veya onaylı `CONDITIONAL PASS`) ve kapanış işlemleri eksiksiz tamamlanmış çalıştırmaların (`run`) tarihsel operasyonel kanıtlarını saklar.

Bu klasördeki tüm run kayıtları dondurulmuş (immutable) kabul edilir.

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
- **Operasyonel İzlilik:** `runs/completed/<run-id>/` klasörü, söz konusu doküman paketinin hangi şartlarda, hangi şablon sürümleriyle, hangi varsayım ve kararlarla üretildiğini kanıtlayan operasyonel arşivdir.
- **Değişmezlik (Immutability):** Tamamlanmış bir run klasörünün içeriği veya belgeleri sonradan düzenlenemez, değiştirilemez veya silinemez.

---

## 4. Sonradan Geçersiz Kılma (Invalidated Runs)

Tamamlanmış bir run, ilerleyen zamanlarda proje kapsamının değişmesi, girdi revizyonu veya teknik kararların yenilenmesi nedeniyle geçerliliğini yitirebilir.

- **Fiziksel Konum:** Geçersiz kılınan bir run klasörü `runs/completed/` altındaki konumunda korunmaya devam eder (silinmez veya başka bir yere taşınmaz).
- **Durum Güncellemesi:** `RUN_MANIFEST.md` belgesindeki `status` değeri `Invalidated` olarak güncellenir.
- **Outputs Bağlantısı:** `outputs/` katmanındaki `latest/` referansı geçersiz kılınan bu run'ın çıktısına işaret edemez.
- **İzlenebilirlik:** Çalışmanın neden geçersiz kılındığı ve hangi yeni run ile değiştirildiği `RUN_LOG.md` belgesine kaydedilir.
