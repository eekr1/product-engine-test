# Product Engine — Failed Runs Katmanı (`runs/failed/`)

## 1. Amaç ve Kapsam

`runs/failed/` klasörü, doğrulama aşamasını geçemeyen, teknik/operasyonel bir terminal engel nedeniyle tamamlanamayan (`Failed`) veya kullanıcı/operatör kararıyla bilinçli olarak iptal edilen (`Cancelled`) çalıştırmaların tarihsel operasyonel kayıtlarını saklar.

Bu klasörün temel amacı, başarısızlık veya iptal nedenlerinin kök neden analizine (root cause analysis), denetlenebilirliğe ve sistem iyileştirmelerine imkan tanıyacak şekilde saklanmasıdır.

---

## 2. Barındırılan Durumlar ve Otorite

`runs/failed/` dizini altında fiziksel olarak iki temel durumdaki run klasörleri yer alabilir:

1. **`Failed`:**
   - Üretim sürecinde unrecoverable bir teknik hatanın oluşması,
   - Kurtarılamayan kritik bir üretim/sistem hatasının meydana gelmesi,
   - Doğrulama tamir denemeleri (`repair`) sınırı sonrasında da `FAIL` sonucu alınması.
2. **`Cancelled`:**
   - Kullanıcı veya operatörün çalışmayı bilinçli olarak durdurması,
   - Hatalı girdi/kapsam kullanıldığının fark edilerek çalışmanın iptal edilmesi,
   - Proje hedefinin değişmesi veya `Blocked` durumundaki bir çalışmanın iptal kararı verilerek kapatılması.

### Critical Unresolved Conflict & Blocked Ayrımı
- **Çelişki Kuralı:** Çözülemeyen kritik çelişkiler (`critical unresolved conflicts`) veya eksik bilgi durumları çalıştırmayı doğrudan `Failed` durumuna **geçirmez**.
- **`Blocked` Semantiği:** Kritik bir çelişki tespit edildiğinde run `Blocked` durumuna geçer ve fiziksel olarak `runs/active/<run-id>/` dizininde kalır.
- **Sonuçlanma:** `Blocked` durumundaki çalışma, çelişki çözülürse `Running` olarak devam eder; çözülemez veya sonlandırılmak istenirse operatör kararıyla `Cancelled` durumuna geçirilerek kapatılır.

### Otorite ve Status Ayrımı (Cancelled ≠ Failed Rule)
- **Manifest Otoritesi:** Klasörün fiziksel olarak `failed/` altında bulunması onun teknik olarak başarısız olduğu anlamına gelmez. Gerçek durum her zaman `RUN_MANIFEST.md` içerisindeki `status` alanında yazan değerdir.
- **Kesin Durum Koruması:** `Cancelled` durumundaki bir çalıştırma **hiçbir şekilde `Failed` durumuna dönüştürülemez (`MUST NOT`)**. Manifest üzerindeki `status: Cancelled` değeri aynen korunur.

---

## 3. Kanıt Koruması ve Kısıtlamalar

- **Operasyonel Kanıtların Saklanması:** Başarısız veya iptal edilen bir run klasörü silinmez. `RUN_MANIFEST.md`, `RUN_LOG.md`, `PROGRESS.md`, varsa `VALIDATION_REPORT.md` ve duruma uygun `working-output/` içerikleri analiz amacıyla muhafaza edilir.
- **Outputs Yasağı:** `runs/failed/` altındaki hiçbir çalıştırma nihai ürün olarak `outputs/` katmanına aktarılamaz.
- **Latest Yasağı:** `outputs/.../latest/` güncel referansı bu klasördeki bir run'a kesinlikle işaret ettirilemez.
- **Yeni Run Gereksinimi:** Başarısız veya iptal olan bir run kaldığı yerden devam ettirilemez; düzeltilmiş girdi veya şartlarla yeni bir Run ID alınarak temiz bir çalışmanın açılması zorunludur.
