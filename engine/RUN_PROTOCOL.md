# Run Protocol

## Amaç

Bu belge, tek bir Product Engine çalışmasının (run) nasıl başlatılacağını, yönetileceğini ve kapatılacağını tanımlar.

Bu belge üretim sürecinin mantığını tanımlamaz — o `GENERATION_PIPELINE.md`'nin sorumluluğundadır.

Bu belge bir run'ın:

- nasıl oluşturulduğunu,
- kimliğinin nasıl belirlendiğini,
- kayıt yapısını,
- durum geçişlerini,
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

## Run Oluşturma

Yeni bir run şu koşullarda oluşturulur:

```text
1. Onaylı proje girdisi (approved input) mevcuttur.
2. Run önceki bir run'ın devamı değildir (yeni oturum veya yeni scope).
3. Mevcut run tamamlanmış, başarısız veya geçersiz kılınmıştır.
```

Aynı anda iki aktif run MUST NOT açık tutulur.

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

## Run Durumları

```text
initializing
  → Run oluşturuldu, girdi doğrulanıyor.

in_progress
  → Üretim devam ediyor.

paused
  → Kullanıcı kararı veya clarification bekleniyor.

blocked
  → Çözülemeyen çelişki veya kritik eksiklik nedeniyle durduruldu.

validating
  → Validation aşamasında.

completed
  → Validation'dan geçti, final output hazır.

failed
  → İkinci validation'dan sonra da FAIL aldı veya kritik hata oluştu.

invalidated
  → Daha sonra geçersiz kılındı (yeni bilgi, scope değişikliği vb.).
```

---

## Input Snapshot

Run başlangıcında, approved girdi anlık görüntüsü alınır ve run kaydına bağlanır.

```text
Input Snapshot:
  - Tüm approved input alanları
  - Onay tarihi
  - Kullanıcı tarafından onaylandığını gösteren kayıt
```

Girdi snapshot alındıktan sonra run süresince değiştirilemez (MUST NOT).

Girdi değişmesi gerekiyorsa mevcut run geçersiz kılınır ve yeni run açılır.

---

## Run Manifest

Her run, aşağıdaki alanları içeren bir Run Manifest belgesi oluşturur:

```text
run_id            : RUN-YYYYMMDD-XXX
status            : (güncel run durumu)
created_at        : ISO 8601 tarih
completed_at      : ISO 8601 tarih (tamamlandığında)
agent_id          : Çalıştıran ajan kimliği (izlenebilirlik için)
input_snapshot_ref: İlgili approved input referansı
selected_package  : packages/<profile>/<type>.md
delivery_profile  : Foundation | Prototype | Implementation Ready | Production Ready
documents_produced: Üretilen doküman ID listesi
assumptions       : (ASM-XXX listesi, bkz: ASSUMPTION_RULES.md)
conflicts         : (CON-XXX listesi, bkz: CONFLICT_RESOLUTION.md)
decisions         : Önemli run içi kararlar
validation_result : PASS | CONDITIONAL PASS | FAIL
output_version    : Atanan çıktı sürümü (ör. v0.1)
output_ref        : outputs/<category>/<project-slug>/versions/<output_version>/
notes             : Varsa ek açıklamalar
```

Run Manifest, run klasöründe tutulur:

```text
runs/<run-id>/RUN_LOG.md
```

Template konumu: `templates/runs/RUN_LOG.md`

---

## Source Register

Her run, kullandığı kaynak ve referansları kayıt altına alır:

```text
- Kullanılan paket dosyası
- Kullanılan template dosyaları
- Başvurulan ref belgeleri (varsa)
- Engine sözleşme sürümü (opsiyonel)
```

Bu kayıt izlenebilirlik ve ileride tekrar üretim için gereklidir.

---

## Pause ve Resume

```text
Pause:
  → Kullanıcı kararı bekleniyor veya clarification sorusu yanıtlanmamış.
  → Run durumu "paused" olarak güncellenir.
  → Mevcut çalışma durumu ve bekleyen sorular run manifest'ine yazılır.

Resume:
  → Kullanıcı yanıt verdi veya onay sağladı.
  → Run kaldığı yerden devam eder.
  → Input snapshot değişmediyse yeni snapshot gerekmez.
```

---

## Başarılı Run Kapanışı

Aşağıdaki koşulların tamamı sağlandığında run "completed" olarak kapatılır:

```text
1. Tüm required dokümanlar üretildi.
2. Validation sonucu PASS veya onaylı CONDITIONAL PASS.
3. Final output OUTPUT_STRUCTURE.md'ye göre yerleştirildi.
4. latest/ güncellendi.
5. Run Manifest tamamlandı.
6. Run durumu "completed" olarak güncellendi.
```

---

## Başarısız Run Kapanışı

Aşağıdaki durumlardan biri oluştuğunda run "failed" olarak kapatılır:

```text
1. İkinci validation'dan sonra da FAIL alındı.
2. Üretim kritik bir hatayla durdu ve kurtarılamadı.
3. Kullanıcı run'ı iptal etti.
```

Başarısız run:

- Final output olarak işlenmez.
- latest/ güncellenmez.
- Run Manifest başarısızlık nedeni ve durumunu içerir.

---

## Run Geçersiz Kılma (Invalidation)

Tamamlanmış bir run aşağıdaki durumlarda geçersiz kılınır:

```text
- Proje kapsamı önemli ölçüde değişti.
- Temel teknik kararlar değişti.
- Approved girdi revize edildi.
- Output'un mevcut durumu yanlış temsil ettiği anlaşıldı.
```

Geçersiz kılınan run:

- "invalidated" durumuna alınır.
- versions/ altındaki kaydı korunur (silinmez).
- latest/ geçersiz run'a işaret etmemelidir.
- Yeni run açılır.

---

## Yeni Run Gerektiren Durumlar

Mevcut run devam ettirilemez, yeni run açılmalıdır:

```text
- Approved girdi run başladıktan sonra değiştirilmek isteniyor.
- Run scope'u değişiyor (yeni doküman türleri eklenecek veya çıkarılacak).
- Proje slug veya kategorisi değişiyor.
- Önceki run "failed" veya "invalidated" durumunda.
```

---

## Run Kayıtlarının Final Output ile İlişkisi

Run kayıtları final output içine MUST NOT sızmaz.

```text
runs/<run-id>/
  → Sadece run operasyon kayıtları
  → Working output (geçici)
  → Run Manifest

outputs/<category>/<project-slug>/
  → Sadece temiz, doğrulanmış proje dokümanları
  → Run logları, assumption kayıtları, conflict kayıtları bu klasörde OLMAMALI
```

Bu ayrım `OUTPUT_STRUCTURE.md` ile birlikte korunur.
