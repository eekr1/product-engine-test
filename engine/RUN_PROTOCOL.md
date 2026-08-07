# Run Protocol

## Amaç

Bu belge, tek bir Product Engine çalışmasının (run) nasıl başlatılacağını, yönetileceğini ve kapatılacağını tanımlar.

Bu belge üretim sürecinin mantığını tanımlamaz — o `GENERATION_PIPELINE.md`'nin sorumluluğundadır.

Bu belge bir run'ın:

- nasıl oluşturulduğunu,
- kimliğinin nasıl belirlendiğini,
- run klasörü yapısını,
- durum geçişlerini,
- kayıt belgelerini,
- kapanış sürecini

tanımlar.

Run kayıtları private chain-of-thought içermez. Yalnızca sonuç, karar ve kısa gerekçe tutulur.

Run template'lerinin authoritative konumu: `templates/runs/`

## Kapsam Dışı

- Engine üretim mantığının tam tekrarı → `GENERATION_PIPELINE.md`
- Kalıcı Engine Changelog → `logs/ENGINE_CHANGELOG.md`
- Template içerikleri → `templates/`
- Paketlerin gerçek içerik listeleri → `packages/`

---

## Run Klasör Yapısı

Runs klasörünün genel yapısı:

```text
runs/
├── README.md
├── active/
├── completed/
└── failed/
```

Bir run kendi klasöründe tutulur:

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

Başarılı run tamamlandığında: `runs/completed/<run-id>/`

Başarısız run: `runs/failed/<run-id>/`

---

## Run Oluşturma

Yeni bir run şu koşullarda oluşturulur:

```text
1. Onaylı proje girdisi (approved input) mevcuttur.
2. Aynı proje ve aynı aktif scope için çakışan başka bir aktif run yoktur.
3. Mevcut run tamamlanmış, başarısız veya geçersiz kılınmıştır.
```

Aynı proje ve aynı aktif scope için birden fazla çakışan aktif run MUST NOT açık tutulur.

Farklı projeler için paralel run'lar mümkündür.

---

## Run Kimliği

Her run'a benzersiz bir Run ID atanır.

Önerilen format:

```text
RUN-<YYYYMMDD>-<sequence>
Örnek: RUN-20260808-001
```

Sequence, o tarih içindeki sıra numarasını gösterir. Aynı gün birden fazla run açılabilir.

Run ID bir kez atandıktan sonra değiştirilemez (MUST NOT).

---

## Run Durum Yaşam Döngüsü

Ana akış:

```text
Created
→ Initialized
→ Running
→ Validation
→ Completed
```

Alternatif durumlar:

```text
Running → Blocked → Running (clarification sonrası)
Running → Paused → Resumed
Running → Failed
Validation → Failed
Running → Cancelled
Completed → Invalidated
```

Run durumu `RUN_MANIFEST.md` içerisinde açıkça kaydedilir.

### Durum Tanımları

```text
Created      : Run kimliği oluşturuldu, başlatılmadı.
Initialized  : Run başlatıldı; input snapshot alındı, paket seçildi.
Running      : Üretim aşaması aktif.
Validation   : Validation aşamasında.
Completed    : Validation'dan geçti, final output hazır.
Blocked      : Çözülemeyen çelişki veya kritik eksiklik nedeniyle durduruldu.
Paused       : Kullanıcı kararı veya clarification bekleniyor.
Resumed      : Paused durumdan devam edildi.
Failed       : Validation'dan geçemedi veya kritik hata oluştu.
Cancelled    : Kullanıcı tarafından iptal edildi.
Invalidated  : Tamamlanmış run sonradan geçersiz kılındı.
```

---

## Run Belgeleri ve Sorumlulukları

### RUN_MANIFEST.md

Run'ın kimliğini, durumunu ve önemli kararların özetini tutar.

```text
run_id            : RUN-YYYYMMDD-XXX
status            : (güncel run durumu)
created_at        : ISO 8601 tarih
completed_at      : ISO 8601 tarih (tamamlandığında)
agent_id          : Çalıştıran ajan kimliği (izlenebilirlik için)
project_slug      : Proje tanımlayıcısı
selected_package  : packages/<PACKAGE_NAME>.md
delivery_profile  : Foundation | Prototype | Implementation Ready | Production Ready
documents_produced: Üretilen doküman ID listesi
validation_result : PASS | CONDITIONAL PASS | FAIL
output_version    : Atanan çıktı sürümü (ör. v0.1)
output_ref        : outputs/<category>/<project-slug>/versions/<output_version>/
```

### INPUT_SNAPSHOT.md

Run başlangıcında alınan onaylı girdi anlık görüntüsü.

### PACKAGE_SELECTION.md

Seçilen paketin gerekçesi ve genişletme/daraltma kararları.

### SOURCE_REGISTER.md

Kullanılan paket, template dosyaları ve ref belgelerinin listesi.

### ASSUMPTIONS.md

Yapılan tüm assumption kayıtları. Bkz: `ASSUMPTION_RULES.md`.

### CONFLICTS.md

Çözülen veya blocked durumundaki çelişki kayıtları. Bkz: `CONFLICT_RESOLUTION.md`.

### DECISIONS.md

Run süresince alınan önemli kararlar.

### RUN_LOG.md

Run sırasındaki önemli olayların kronolojik kaydı. RUN_MANIFEST'in özetini tekrar etmez.

### PROGRESS.md

Üretim aşamalarının tamamlanma durumu.

### VALIDATION_REPORT.md

Validation sonuçları, geçen ve başarısız olan kontroller.

### COMPLETION_REPORT.md

Run'ın kapanış özeti.

---

## Input Snapshot

Run başlangıcında, approved girdi anlık görüntüsü alınır ve `INPUT_SNAPSHOT.md`'e kaydedilir.

Girdi snapshot alındıktan sonra run süresince değiştirilemez (MUST NOT).

Girdi değişmesi gerekiyorsa mevcut run geçersiz kılınır ve yeni run açılır.

---

## Pause ve Resume

```text
Pause:
→ Kullanıcı kararı bekleniyor veya clarification sorusu yanıtlanmamış.
→ Run durumu "Paused" olarak güncellenir.
→ Bekleyen sorular PROGRESS.md veya RUN_MANIFEST.md'e yazılır.

Resume:
→ Kullanıcı yanıt verdi veya onay sağladı.
→ Run "Resumed" sonrası "Running" durumuna geçer.
→ Input snapshot değişmediyse yeni snapshot gerekmez.
```

---

## Başarılı Run Kapanışı

Aşağıdaki koşulların tamamı sağlandığında run "Completed" olarak kapatılır:

```text
1. Tüm required dokümanlar üretildi.
2. Validation sonucu PASS veya onaylı CONDITIONAL PASS.
3. Final output OUTPUT_STRUCTURE.md'ye göre yerleştirildi.
4. latest/ güncellendi.
5. RUN_MANIFEST.md tamamlandı.
6. Run klasörü runs/completed/<run-id>/ konumuna taşındı.
```

---

## Başarısız Run Kapanışı

Aşağıdaki durumlardan biri oluştuğunda run "Failed" olarak kapatılır:

```text
1. İkinci validation'dan sonra da FAIL alındı.
2. Üretim kritik bir hatayla durdu ve kurtarılamadı.
3. Kullanıcı run'ı iptal etti (Cancelled).
```

Başarısız run:

- Final output olarak işlenmez.
- `latest/` güncellenmez.
- Run klasörü `runs/failed/<run-id>/` konumuna taşınır.

---

## Run Geçersiz Kılma (Invalidation)

Tamamlanmış bir run aşağıdaki durumlarda "Invalidated" olarak işaretlenir:

```text
- Proje kapsamı önemli ölçüde değişti.
- Temel teknik kararlar değişti.
- Approved girdi revize edildi.
- Output'un mevcut durumu yanlış temsil ettiği anlaşıldı.
```

Geçersiz kılınan run:

- `runs/completed/` veya `runs/failed/` altındaki kaydı korunur (silinmez).
- `latest/` geçersiz run'a işaret etmemelidir.
- Yeni run açılır.

---

## Yeni Run Gerektiren Durumlar

Mevcut run devam ettirilemez, yeni run açılmalıdır:

```text
- Approved girdi run başladıktan sonra değiştirilmek isteniyor.
- Run scope'u değişiyor (yeni doküman türleri eklenecek veya çıkarılacak).
- Proje slug veya kategorisi değişiyor.
- Önceki run "Failed" veya "Invalidated" durumunda.
```

---

## Run Kayıtlarının Final Output ile İlişkisi

Run kayıtları final output içine MUST NOT sızmaz.

```text
runs/active/<run-id>/
  → Sadece run operasyon kayıtları ve working-output/

outputs/<category>/<project-slug>/
  → Sadece temiz, doğrulanmış proje dokümanları
```

Bu ayrım `OUTPUT_STRUCTURE.md` ile birlikte korunur.
