# Product Engine — Old Runs Katmanı (`archive/old-runs/`)

> [!WARNING]
> **Aktif Sistem İzolasyonu Uyarısı**
> 
> Bu klasördeki (`archive/old-runs/`) çalıştırmalar aktif operasyonel dizinlerden (`runs/active/`, `runs/completed/`, `runs/failed/`) tarihsel saklama alanına aktarılmış geçmiş çalıştırma kayıtlarıdır.
> 
> Bu kayıtlar:
> - Aktif operasyonel takip alanında yer almaz,
> - Yeniden yürütülebilir veya aktif tamir bekleyen run sayılmaz,
> - Yalnızca geçmiş çalıştırma kanıtlarını incelemek ve audit amacıyla okunabilir.

---

## 1. Amaç ve Kapsam

`archive/old-runs/` klasörünün görevi, aktif operasyon alanlarında (`runs/completed/` veya `runs/failed/`) tutulmasına artık gerek kalmayan, tamamlanmış, iptal edilmiş veya geçersiz kılınmış tarihsel çalışmalara (`run`) ait kayıtları dondurulmuş olarak saklamaktır.

---

## 2. Current Runs Contract Üstünlüğü ve Operasyonel Dizinler

> [!IMPORTANT]
> **Approved Runs Sözleşmesi Önceliği**
> 
> Approved V0 `runs/` sözleşmesine göre bir çalıştırmanın authoritative operasyonel konumları şunlardır:
> - `runs/active/` (Devam eden, engellenen veya duraklatılan run'lar)
> - `runs/completed/` (Başarıyla tamamlanmış run'lar)
> - `runs/failed/` (Başarısız veya iptal edilmiş run'lar)
> 
> V0 build aşamasında mevcut `runs/completed/` veya `runs/failed/` altındaki çalıştırmalar archive'a kopyalanamaz veya taşınamaz. `old-runs/` klasörü yalnızca gelecekte açık bir arşivleme kararı alındığında kullanılır.

---

## 3. Kanonik Çalıştırma Kanıtlarının Değişmezliği Kuralı (Immutable Evidence Rule)

Bir çalıştırma terminal duruma ulaştıktan sonra o çalıştırmaya ait tüm dosyalar **immutable (değişmez) yürütme kanıtıdır (`execution evidence`)**.

Arşivleme işlemi (`archive move`), sırf arşiv metadata'sı eklemek veya tarihsel hareket kaydı düşmek amacıyla kanonik run kanıt dosyalarını kesinlikle değiştiremez (`MUST NOT`).

Özellikle aşağıdaki dosyalar arşivleme nedeniyle **asla modifiye edilemez, ön bilgi (frontmatter) enjekte edilemez ve üzerine yazılamaz**:

```text
RUN_MANIFEST.md
INPUT_SNAPSHOT.md
PACKAGE_SELECTION.md
SOURCE_REGISTER.md
ASSUMPTIONS.md
CONFLICTS.md
DECISIONS.md
RUN_LOG.md
PROGRESS.md
VALIDATION_REPORT.md
COMPLETION_REPORT.md
working-output/
```

### 3.1. Arşivleme Sırasında Yasaklanan Eylemler
- **`RUN_MANIFEST.md` Mutasyon Yasağı:** Manifest dosyasının başına YAML frontmatter enjekte edilemez (`MUST NOT`). Manifest, runtime status ve execution authority olarak aynen kalır.
- **`RUN_LOG.md` Append Yasağı:** Arşivleme fiziksel bir depolama hareketidir; runtime olayı değildir. Sırf arşive taşındı diye `RUN_LOG.md` içerisine yeni event satırı eklenemez.
- **`INPUT_SNAPSHOT.md` Değişmezliği:** Snapshot, initialization anındaki approved truth kaydıdır. Arşiv tarihi veya konumu snapshot içine yazılamaz.
- **`VALIDATION` / `COMPLETION` Raporu Değişmezliği:** Bu belgeler çalıştırma anındaki başarı kanıtlarıdır; depolama durumuyla güncellenemez.
- **`output_ref` Değişmezliği:** `RUN_MANIFEST.md` içerisindeki `output_ref` alanı dondurulmuş tarihsel çıktı yoludur; arşiv yollarına çevrilemez.

---

## 4. Archive-Owned Metadata Record (`ARCHIVE_RECORD.md`)

Arşivlenen bir çalıştırmaya ait arşiv metadata'sı, çalıştırmanın kanonik dosyalarına müdahale edilmeksizin, archive katmanının mülkiyetinde olan ayrı bir **sidecar belgesinde** tutulur:

```text
archive/old-runs/<run-id>/ARCHIVE_RECORD.md
```

### 4.1. Kanonik Arşivlenmiş Run Dizin Yapısı (Future Structure)
Gelecekte gerçek bir çalıştırma arşive aktarıldığında klasör yapısı tam olarak şu şekilde oluşur:

```text
archive/old-runs/<run-id>/
├── ARCHIVE_RECORD.md        [Archive-owned sidecar metadata]
├── RUN_MANIFEST.md          [Immutable runtime evidence]
├── INPUT_SNAPSHOT.md        [Immutable runtime evidence]
├── PACKAGE_SELECTION.md     [Immutable runtime evidence]
├── SOURCE_REGISTER.md       [Immutable runtime evidence]
├── ASSUMPTIONS.md           [Immutable runtime evidence]
├── CONFLICTS.md             [Immutable runtime evidence]
├── DECISIONS.md             [Immutable runtime evidence]
├── RUN_LOG.md               [Immutable runtime evidence]
├── PROGRESS.md              [Immutable runtime evidence]
├── VALIDATION_REPORT.md     [Immutable runtime evidence]
├── COMPLETION_REPORT.md     [Immutable runtime evidence]
└── working-output/          [Immutable runtime evidence]
```

### 4.2. `ARCHIVE_RECORD.md` Otoritesi ve Sorumluluğu
- `ARCHIVE_RECORD.md` bir runtime sözleşmesi **değildir**; `templates/runs/` şablon setine dahil edilemez ve aktif çalışmalarda üretilemez.
- Yalnızca çalıştırma `archive/old-runs/` altına aktarıldığında archive katmanı tarafından üretilir.
- Çalıştırmanın ne zaman, neden, kimin tarafından ve hangi orijinal yoldan arşivlendiğini açıklar.

---

## 5. `ARCHIVE_RECORD.md` Metadata Şeması ve Terim Ayrımı

Arşiv sidecar belgesi dondurulduğunda aşağıdaki standart YAML frontmatter formatını taşır:

```yaml
---
archive_id: ARC-RUN-001
content_type: run
run_id: RUN-20260801-001
original_path: runs/completed/RUN-20260801-001/
archived_path: archive/old-runs/RUN-20260801-001/
archive_status: historical
archive_reason: Historical retention after operational review period.
archived_at: 2026-08-10
archived_by: operator
replacement: not_applicable
related_outputs:
  - outputs/products/example-project/versions/v1.0/
notes: ""
---
```

### 5.1. Durum Çakışmasını Önleme (`archive_status` vs `RUN_MANIFEST.status`)
- **`RUN_MANIFEST.status`**: Çalıştırmanın runtime yaşam döngüsü durumudur (`Completed`, `Failed`, `Cancelled`, `Invalidated`). Arşive taşıma runtime status değerini kesinlikle değiştiremez!
- **`ARCHIVE_RECORD.archive_status`**: Arşivleme sınıflandırma durumudur (`historical`, `deprecated`, `invalidated`). Karışıklığı önlemek için sidecar metadata'sında strictly `archive_status` terimi kullanılır.

### 5.2. Arşive Taşıma ≠ Invalidation (Archive Move ≠ Invalidated)
- Bir çalıştırmanın arşive aktarılması onun geçersiz (`Invalidated`) kılındığı anlamına gelmez.
- `Completed` durumundaki bir çalıştırma arşivde de `RUN_MANIFEST.status: Completed` olarak kalır.
- `Invalidated` durumu yalnızca proje gerçeği veya kararları değiştiğinde `RUN_PROTOCOL.md` kurallarınca verilen bir runtime kararıdır.

---

## 6. Mevcut Başlangıç Durumu (V0 Initial State)

Bu klasör V0 mimarisi itibarıyla sözleşmeye uygun, yalnız bu rehber belgeden oluşan nötr başlangıç durumundadır (`Empty Archive Is Valid`). Sahte run kaydı, sahte `ARCHIVE_RECORD.md` dosyası veya yapay arşiv klasörü üretilmemiştir.
