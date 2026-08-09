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

## 3. Giriş Kriterleri ve Taşıma Kuralları

Bir çalıştırma yalnızca aşağıdaki koşulların tamamı sağlandığında `old-runs/` altına aktarılabilir:
1. Çalıştırma terminal duruma (`Completed`, `Failed`, `Cancelled` veya `Invalidated`) ulaşmış olmalıdır.
2. Aktif inceleme veya tamir gereksinimi tamamen bitmiş olmalıdır.
3. Bağlı çıktı durumu (`outputs/`) netleşmiş olmalıdır.
4. `logs/RUN_INDEX.md` kaydı taranmış ve indeks yolu güncellenmiş olmalıdır.

### 3.1. Arşivlenen Run İçin Değişmezlik Kuralları (Immutability Rules)
Bir run `old-runs/` altına taşındığında:
- **Run ID Değişmez:** Run ID (`RUN-YYYYMMDD-XXX`) kesinlikle değiştirilemez.
- **Manifest Korunur:** `RUN_MANIFEST.md` belgesi ve içindeki tüm kararlar, girdi anlık görüntüsü (`INPUT_SNAPSHOT.md`) ve doğrulama raporları olduğu gibi korunur.
- **Output Referansı Korunur:** `output_ref` alanı dondurulur.
- **Status Değişmez:** Arşive taşınmak çalışmanın yaşam döngüsü durumunu (`status`) değiştirmez (Arşivleme ≠ Invalidated). `Completed` olan bir run arşivde de `status: Completed` olarak kalır.

---

## 4. Metadata Standardı

Arşivlenen run klasörü içinde `RUN_MANIFEST.md` belgesinin başına veya klasör seviyesine aşağıdaki arşiv metadata bilgisi eklenir:

```yaml
---
archive_id: ARC-RUN-001
content_type: run
original_path: runs/completed/RUN-20260801-001
archived_path: archive/old-runs/RUN-20260801-001
run_id: RUN-20260801-001
status: Completed
archive_reason: Tarihsel arşivleme politikası gereği aktarıldı.
archived_at: 2026-08-10
archived_by: execution-agent
replacement: not_applicable
related_outputs:
  - outputs/products/sample-project/versions/v1.0/
---
```

---

## 5. Mevcut Başlangıç Durumu (V0 Initial State)

Bu klasör V0 mimarisi itibarıyla sözleşmeye uygun, yalnız bu rehber belgeden oluşan nötr başlangıç durumundadır (`Empty Archive Is Valid`). Sahte run kaydı veya yapay arşiv klasörü üretilmemiştir.
