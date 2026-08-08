# Product Engine — Runs Katmanı Kullanım Rehberi

## 1. Amaç ve Kapsam

`runs/` katmanı, Product Engine'in tek bir çalıştırma (execution) sürecine ait tüm operasyonel hafızasını, süreç kayıtlarını, kararlarını ve geçici üretim çıktılarını saklayan katmandır.

Bu katmanın temel amacı:
- Bir Product Engine çalışmasının ne zaman, kimin tarafından ve hangi şartlarda başlatıldığını,
- Hangi onaylı girdi sürümünün (`inputs/`) girdi olarak alındığını,
- Hangi paket (`packages/`) ve teslimat profilinin (delivery profile) seçildiğini,
- Üretim sırasında hangi şablon (`templates/`) ve referans kaynaklarının kullanıldığını,
- Çalışma esnasında oluşan varsayımları (`ASSUMPTIONS`), çelişkileri (`CONFLICTS`) ve kararları (`DECISIONS`),
- Çalışmanın anlık yaşam döngüsü durumunu (`status`) ve kronolojik olay geçmişini (`RUN_LOG`),
- Doğrulama (`VALIDATION_REPORT`) ve kapanış (`COMPLETION_REPORT`) raporlarını,
- Doğrulama öncesi çalışma çıktılarını (`working-output/`)

deterministik, izlenebilir ve denetlenebilir bir biçimde tek bir yerde toplamaktır.

### Sorumluluk Sınırları ve Mülkiyet (Ownership Boundaries)

`runs/` katmanı sistemdeki diğer katmanların alanına müdahale etmez:
- **Project Truth Owner değildir:** Proje hakkındaki onaylanmış değişmez gerçeklik `inputs/` katmanına aittir. `runs/` yalnızca başlangıçta bu bilginin immutable anlık görüntüsünü (`INPUT_SNAPSHOT.md`) saklar.
- **Final Output Owner değildir:** Müşteriye veya kullanıcıya sunulacak nihai, temiz ve doğrulanmış proje dokümanları `outputs/` katmanına aittir.
- **Engine Changelog değildir:** Product Engine'in mimari değişiklik geçmişi ve kalıcı dersleri `logs/ENGINE_CHANGELOG.md` belgesine yazılır.
- **Private CoT Deposu değildir:** Modelin gizli akıl yürütme (chain-of-thought) süreçleri kaydedilmez; yalnızca kararlar, açık gerekçeler, durumlar ve kanıtlar tutulur.

---

## 2. Fiziksel Klasör Yapısı

`runs/` katmanı aşağıdaki standart ve sabit fiziksel klasör ağacına sahiptir:

```text
runs/
├── README.md
├── active/
│   └── README.md
├── completed/
│   └── README.md
└── failed/
    └── README.md
```

### Klasör Kuralları
1. V0 mimarisinde top-level seviyede yeni status klasörleri (`paused/`, `cancelled/`, `invalidated/`, `archived/`, `history/` vb.) **oluşturulamaz**.
2. Fiziksel klasör konumu çalışmanın temel durumunu yansıtır, ancak detaylı çalışma durumu her zaman run klasörü içindeki `RUN_MANIFEST.md` belgesindeki `status` alanından okunur.
3. Statik/örnek run verileri veya taslak klasörler önceden oluşturulmaz; her run klasörü runtime sırasında dinamik olarak üretilir.

---

## 3. Kanonik Run Klasör Yapısı (Per-Run Canonical Structure)

Runtime sırasında başlatılan her bir run, `runs/active/<run-id>/` altında aşağıdaki 11 kanonik operasyonel belgeyi ve `working-output/` dizinini eksiksiz olarak içermelidir:

```text
runs/active/<run-id>/
├── RUN_MANIFEST.md
├── INPUT_SNAPSHOT.md
├── PACKAGE_SELECTION.md
├── SOURCE_REGISTER.md
├── ASSUMPTIONS.md
├── CONFLICTS.md
├── DECISIONS.md
├── RUN_LOG.md
├── PROGRESS.md
├── VALIDATION_REPORT.md
├── COMPLETION_REPORT.md
└── working-output/
```

Her bir belgenin yapısal otoritesi `templates/runs/` altındaki onaylanmış şablonlardır. Bu şablon seti haricinde yeni operasyonel belge türü uydurulamaz.

---

## 4. Run ID Standardı

Her çalıştırma benzersiz, kararlı (stable) ve oluşturulduktan sonra değiştirilemez bir kimliğe sahiptir.

### Standart Format
```text
RUN-<YYYYMMDD>-<sequence>
```

- **Örnek:** `RUN-20260808-001`, `RUN-20260808-002`
- **Tarih Formatı:** `YYYYMMDD` (Örn: `20260808`)
- **Sıra Numarası (`sequence`):** Aynı gün açılan çalıştırmalar için `001`'den başlayan 3 haneli artan sayı.
- **Klasör Adı:** Fiziksel run klasör adı exact Run ID olmalıdır (Örn: `runs/active/RUN-20260808-001/`).
- **Değişmezlik Kuralı:** Run ID oluşturulduktan sonra hiçbir aşamada değiştirilemez. Proje adı/slug'ı Run ID içine gömülmek zorunda değildir; proje bilgisi `RUN_MANIFEST.md` içerisinde saklanır.

---

## 5. Run Başlatma Önkoşulları (Run Creation Gate)

Yeni bir run yalnızca aşağıdaki 5 kuralın tamamı doğrulandığında açılabilir:

1. **Approved Input Varlığı:** `inputs/approved/<project-slug>/vN/PROJECT_INPUT.md` konumunda onaylanmış, geçerli bir proje girdisi bulunmalıdır. (Pending durumdaki onaylanmamış girdiler ile run açılamaz!)
2. **Kesin Sürüm Seçimi:** Çalıştırılacak onaylı girdinin kesin sürüm numarası (`v1`, `v2`, `vN` vb.) belirtilmiş olmalıdır.
3. **Paralel Çalışma Preflight Kontrolü:** Aynı proje ve aynı aktif kapsam (scope) için şu anda `active/` altında devam eden çakışan başka bir aktif run bulunmamalıdır.
4. **Benzersiz Run ID:** Oluşturulan Run ID sistemde daha önce kullanılmamış olmalıdır.
5. **Kanonik Belge Setinin Hazırlığı:** `templates/runs/` altındaki şablonlar kullanılarak ilk başlangıç belgeleri oluşturulabilir durumda olmalıdır.

---

## 6. Paralel Run Güvenliği (Parallel Run Safety)

Sistemde veri tutarlılığını ve çakışmasız çalışma emniyetini sağlamak için şu preflight kuralı uygulanır:

- **Aynı Proje + Aynı Aktif Scope:** Çakışan aktif çalışmalara izin verilmez (`MUST NOT`). Mevcut run bitmeden (`Completed`, `Failed` veya `Cancelled` olmadan) aynı proje ve kapsamda yeni run açılamaz.
- **Farklı Projeler:** Farklı projeler (`project-slug`) için tamamen bağımsız paralel run'lar çalıştırılabilir.
- **Farklı Bağımsız Scope'lar:** Aynı proje içinde olsa dahi, çakışmayan ve tamamen bağımsız modül/kapsamlar için engine sözleşmelerinin izin verdiği ölçüde ayrı run'lar yürütülebilir.

---

## 7. Run Yaşam Döngüsü ve Durum Semantiği (Run Lifecycle)

Run yaşam döngüsü `engine/RUN_PROTOCOL.md` sözleşmesi ile tam uyumludur.

```text
       [Created]
           │
     [Initialized]
           │
       [Running] ───────────► [Blocked] (Kritik Engel / Çelişki)
           │                      │
           │◄─────────────────────┼─ (Çözüm Sonrası)
           │                      │
           │                      └─► [Cancelled] (İptal Kararı)
           ├───────────────► [Paused] (Bekleme/Açıklama)
           │                    │
           │◄───────────────────┴─ [Resumed]
           │
      [Validation]
           │
   ┌───────┴───────┐
   ▼               ▼
[Completed]     [Failed] (Unrecoverable Hata / Repair Sınırı)
```

### Durum Tanımları (Status Vocabulary)

1. **Created:** Run kimliği (Run ID) atandı ve dizin yapısı kuruldu; ancak girdi snapshot'ı ve paket seçimi henüz tamamlanmadı.
2. **Initialized:** Onaylı girdi snapshot'ı alındı, paket ve teslimat profili kaydedildi, ilk operasyonel belgeler hazırlandı. Üretime geçilebilir.
3. **Running:** Doküman üretim pipeline'ı aktif olarak çalışıyor, `working-output/` altında taslaklar üretiliyor.
4. **Blocked:** Kritik bir çelişki (`CONFLICT`), eksik bilgi veya aşılması gereken bir engel nedeniyle üretim ilerletilemiyor. Çözülene kadar beklenir (doğrudan `Failed` yapılmaz).
5. **Paused:** Operatör/kullanıcı kararı veya netleştirme (clarification) talebi nedeniyle çalışma bilinçli olarak duraklatıldı.
6. **Resumed:** `Paused` durumundaki çalışmaya kullanıcı yanıtı veya onayı sonrası tekrar devam edildi; çalışma doğrudan `Running` durumuna döner.
7. **Validation:** `working-output/` altındaki belgeler tamamlandı ve doğrulama kurallarına (`VALIDATION_RULES`) göre denetleniyor.
8. **Completed:** Validation aşaması `PASS` veya onaylı `CONDITIONAL PASS` aldı, nihai çıktılar `outputs/` katmanına aktarıldı, run başarıyla kapatıldı.
9. **Failed:** Üretim esnasında unrecoverable bir teknik/üretim hatası oluştu veya validation tekrar denemeleri (`repair`) sınırı sonrasında da `FAIL` alındı.
10. **Cancelled:** Kullanıcı veya operatör tarafından çalışma bilinçli olarak iptal edildi. `status` değeri **Cancelled** olarak kalır.
11. **Invalidated:** Tamamlanmış (`Completed`) bir run, sonradan proje girdisi veya kapsamı değiştiği için geçmişe dönük olarak geçersiz kılındı.

---

## 8. Fiziksel Klasör Taşıma Kuralları (Physical Folder Movement & Atomicity)

Bir run'ın fiziksel dizin konumu yaşam döngüsü boyunca aşağıdaki kurallara göre değiştirilir:

| Run Durumu | Fiziksel Dizin Konumu |
| :--- | :--- |
| `Created`, `Initialized`, `Running`, `Blocked`, `Paused`, `Resumed`, `Validation` | `runs/active/<run-id>/` |
| `Completed` | `runs/completed/<run-id>/` |
| `Failed`, `Cancelled` | `runs/failed/<run-id>/` |

### Taşınma Atomisitesi (Folder Move Atomicity)
- Run kapanış süreci (`RUN_MANIFEST` güncellenmesi, `COMPLETION_REPORT` yazılması, çıktının `outputs/` katmanına aktarılması) eksiksiz tamamlanmadan run klasörü terminal dizinlerine (`completed/` veya `failed/`) **taşınamaz**.
- Taşıma işlemi sırasında tüm operasyonel belgeler ve `working-output/` içeriği bir bütün olarak korunarak aktarılır.

### Cancelled vs Failed Ayrımı
- `Cancelled` durumu bir teknik başarısızlık (`Failed`) değildir; bilinçli bir kullanıcı/operatör sonlandırmasıdır.
- V0 mimarisinde ayrı bir `runs/cancelled/` klasörü bulunmadığı için `Cancelled` run'lar fiziksel olarak `runs/failed/<run-id>/` altında tutulabilir.
- **KRİTİK KURAL:** `Cancelled` durumundaki bir çalışmanın `RUN_MANIFEST.md` içerisindeki status değeri **asla `Failed` olarak değiştirilemez**; `status: Cancelled` olarak korunmalıdır.

---

## 9. Belgelerin Sorumluluk Ayrımı

### RUN_MANIFEST vs RUN_LOG
- **`RUN_MANIFEST.md`:** Run'ın kimlik, anlık durum (`status`), girdi/paket seçimi ve nihai sonuç özetidir. Kronolojik olay günlüğü tutmaz.
- **`RUN_LOG.md`:** Run sırasında gerçekleşen önemli operasyonel olayların (aşama geçişleri, duraklatma/devam, tamir denemeleri, doğrulama sonuçları) kronolojik kaydıdır. Manifest özetini tekrar etmez.

### VALIDATION_REPORT vs COMPLETION_REPORT vs RUN_MANIFEST
- **`VALIDATION_REPORT.md`:** `working-output/` belgelerinin doğrulama kurallarına göre denetim sonuçlarını ve geçen/başarısız olan kontrolleri detaylandırır.
- **`COMPLETION_REPORT.md`:** Çalışmanın sonlandırma/kapanış özetidir; tamamlanan hedefleri, üretilen belgeleri, kabul edilen şartları ve çıktı referanslarını sunar.
- **`RUN_MANIFEST.md`:** Üst seviye metadata ve yaşam döngüsü anahtarıdır.

---

## 10. Girdi Anlık Görüntüsü (INPUT_SNAPSHOT) Kuralları

- **Oluşturulma:** Run `Initialized` durumuna geçerken `inputs/approved/<project-slug>/vN/PROJECT_INPUT.md` (Örn: `inputs/approved/example-project/v1/PROJECT_INPUT.md`) içeriği okunarak `INPUT_SNAPSHOT.md` oluşturulur.
- **Değişmezlik (Immutability):** Snapshot alındığı andan itibaren **tamamen değiştirilemezdir (immutable)**. Run devam ederken kaynak approved input güncellense dahi aktif run'ın snapshot'ı değiştirilmez.
- **İçerik:** Snapshot; girdi ID'si (Örn: `input_id: INPUT-EXAMPLE-V1`), sürüm numarası (`input_version: "1"`), onay metadata'sı, kaynak referansı ve doğrulanmış girdi metnini tam olarak saklamalıdır.

---

## 11. Paket Seçimi ve Kaynak Kaydı

- **`PACKAGE_SELECTION.md`:** `engine/PACKAGE_RULES.md` kurallarına göre seçilen paketi, teslimat profilini, belge dahil etme/hariç tutma kararlarını ve seçim gerekçesini saklar.
- **`SOURCE_REGISTER.md`:** Run sırasında kullanılan approved input, engine sözleşmeleri, paket tanımları, şablon sürümleri ve referans belgeleri portable bağıl yollarla kaydeder. (Yerel makine yolları `file:///` veya `C:\...` kesinlikle kullanılamaz).

---

## 12. Varsayım, Çelişki ve Karar Yönetimi

- **`ASSUMPTIONS.md`:** Üretim sırasında yapılan operasyonel varsayımlar `engine/ASSUMPTION_RULES.md` ilkelerine uygun şekilde kaydedilir. Private CoT içermez.
- **`CONFLICTS.md`:** Girdiler veya şablonlar arasında tespit edilen çelişkiler `engine/CONFLICT_RESOLUTION.md` kurallarına göre kaydedilir. Çözülemeyen kritik çelişkiler çalışmayı `Blocked` durumuna geçirir (`runs/active/` içinde tutulur, doğrudan `Failed` yapılmaz). Silent overwrite yasaktır!
- **`DECISIONS.md`:** Sadece çalıştırma sırasındaki operasyonel kararları (sıralama, tamir stratejisi vb.) saklar. Kalıcı mimarlık/ürün kararları nihai proje dokümanlarının sorumluluğundadır.

---

## 13. Working Output ve Output Sınırı (Output Boundary)

- **İzolasyon:** Üretim sırasındaki tüm taslak dokümanlar yalnızca `runs/active/<run-id>/working-output/` klasörü altında oluşturulur ve düzenlenir.
- **Yayınlama Sınırı:** Doğrulama (`Validation`) tamamlanmadan ve run `Completed` durumuna geçmeden hiçbir belge `outputs/` katmanına yazılamaz.
- **Temizlik:** `working-output/` eksik, yer tutucu içeren veya tamir bekleyen sürümleri barındırabilir. Müşteriye teslim edilecek nihai paket `outputs/` altındadır.

---

## 14. Doğrulama (Validation) ve Tamir (Repair) Akışı

- **Vocabulary Standartları:** Overall validation sonucu yalnızca aşağıdaki 3 ifadeden biri olabilir:
  - `PASS`
  - `CONDITIONAL PASS`
  - `FAIL`
  *(Alternatif terimler: `PASSED`, `FAILED`, `SUCCESS`, `SUCCESSFUL` kullanımı KESİNLİKLE YASAKTIR).*
- **Tamir Döngüsü (Repair Loop):** Validation `FAIL` veya `CONDITIONAL PASS` verdiğinde, `working-output/` üzerinde düzeltme yapılır, deneme `RUN_LOG` ve `VALIDATION_REPORT` dosyalarına kaydedilir ve tekrar doğrulama yapılır. Engine retry limitine uyulur.

---

## 15. Çalışmanın Kapatılması ve Özel Durumlar

### Başarılı Kapatma (Completion Gate)
Aşağıdaki şartların TAMAMI sağlandığında run `Completed` yapılır:
1. Tüm gerekli dokümanlar üretildi.
2. Validation sonucu `PASS` veya onaylı `CONDITIONAL PASS`.
3. Temiz çıktılar `outputs/<category>/<project-slug>/versions/<version>/` dizinine aktarıldı.
4. `outputs/<category>/<project-slug>/latest/` güncellendi.
5. `RUN_MANIFEST.md` ve `COMPLETION_REPORT.md` eksiksiz tamamlandı.
6. Run klasörü `runs/completed/<run-id>/` konumuna taşındı.

### Aynı Girdi ile Yeni Run (Same Input, New Run)
Aynı onaylı girdi sürümü (`PROJECT_INPUT.md v1`) farklı zamanlarda yeniden run başlatmak için kullanılabilir. Her run kendi benzersiz Run ID'sine, snapshot'ına ve loglarına sahiptir.

### Aktif Run Sırasında Yeni Girdi Gelmesi (New Input During Active Run)
Aktif run sırasında proje gerçeği değişirse, mevcut `INPUT_SNAPSHOT.md` sessizce değiştirilmez!
1. Aktif run durumuna göre `Paused`, `Cancelled` veya `Invalidated` yapılır.
2. Yeni bilgi `inputs/` katmanında yeni onaylı sürüm (`v2`) olarak kaydedilir.
3. Yeni onaylı sürüm ile tamamen yeni bir run başlatılır.

### Geçersiz Kılma (Invalidation Semantics)
Tamamlanmış bir run sonradan geçersiz kalırsa:
- **Tarihsel Üretim Kanıtı (Execution Evidence):** Üretim sırasında oluşan kanıtlar (`INPUT_SNAPSHOT`, `PACKAGE_SELECTION`, `ASSUMPTIONS`, `CONFLICTS`, `DECISIONS`, `VALIDATION_REPORT`, `COMPLETION_REPORT`, `working-output`) tamamen **immutable (değişmez)** kalır ve yeniden yazılmaz.
- **Kontrollü Lifecycle Metadata Güncellemesi:**
  - `RUN_MANIFEST.md` belgesindeki `status` değeri `status: Invalidated` olarak güncellenir.
  - `RUN_LOG.md` belgesine append-only biçimde geçersiz kılma olayı (`timestamp`, `event: Invalidated`, `reason`, `replacement_run_id`) eklenir.
- **Fiziksel Konum:** Klasör `runs/completed/<run-id>/` altında saklanmaya devam eder (ayrı bir `runs/invalidated/` klasörü açılmaz ve dosya silinmez).
- **Outputs Bağlantısı:** `outputs/.../latest/` referansı bu geçersiz kılınan run'ın çıktısına işaret edemez.

---

## 16. Güvenlik, Taşınabilirlik ve Non-Functional Kurallar

1. **Private CoT Yasaktır:** Hiçbir run belgesinde gizli düşünce zinciri (chain-of-thought), içsel ajan sohbeti saklanamaz.
2. **Secret ve Credential Yasaktır:** Şifreler, API key'leri, token'lar veya özel anahtarlar run belgelerine yazılamaz.
3. **Makine Bağımsız Yollar (Repo-Relative Paths):** `file:///`, `C:\Users\...`, `/home/...` gibi yerel sistem yolları kullanılamaz. Tüm referanslar repository köküne göre bağıl olmalıdır (Örn: `inputs/approved/example-project/v1/PROJECT_INPUT.md`).
4. **Gerçek Proje Sızıntısı Yasaktır:** Reusable rehber ve şablonlarda gerçek şirket/proje isimleri kullanılmaz; generic örnekler (`example-project`, `sample-app`, `RUN-20260808-001`) tercih edilir.
5. **Agent Tarafsızlığı (Agent Neutrality):** `agent_id` alanı jenerik tanımlar (`agent-01`, `execution-agent`) taşır. LLM model isimleri hardcode edilemez.
