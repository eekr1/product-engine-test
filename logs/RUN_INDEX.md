# Product Engine — Run Index (`logs/RUN_INDEX.md`)

## 1. Amaç ve Otorite

Bu belge, Product Engine tarafından başlatılan ve yürütülen tüm çalıştırmaların (`run`) üst seviye özet kayıt tablosudur (**secondary index**).

### Otorite Sınırı (Manifest Authority Rule)
- **Authoritative Source of Truth:** Bir çalıştırmanın anlık durumunun, karar detaylarının ve yürütme metadata'sının tek authoritative kaynağı `runs/<location>/<run-id>/RUN_MANIFEST.md` belgesidir.
- **`RUN_INDEX.md` Rolü:** Bu belge manifestlerin yerine geçmez; çalıştırmalar arasında hızlı görünüm, filtreleme ve karşılaştırma imkanı sunar.
- **Detay Sızıntısı Yasağı:** Run bazlı kronolojik loglar (`RUN_LOG.md`), detaylı doğrulama kontrolleri (`VALIDATION_REPORT.md`), varsayımlar ve çelişkiler bu indekse kopyalanmaz (`MUST NOT`).

---

## 2. Kanonik Run Durumları (Canonical Status Vocabulary)

Run Index içerisindeki `Status` kolonunda strictly `engine/RUN_PROTOCOL.md` tarafından onaylanmış aşağıdaki kanonik durum terimleri kullanılır:

```text
Created      : Run ID atandı, dizin açıldı.
Initialized  : Input snapshot alındı, paket seçildi.
Running      : Doküman üretimi aktif.
Validation   : Doğrulama kontrolleri yapılıyor.
Completed    : Validation'dan geçti, temiz çıktı yayınlandı.
Blocked      : Kritik çelişki/eksiklik nedeniyle durduruldu (active dizininde bekliyor).
Paused       : Kullanıcı kararı/netleştirme nedeniyle duraklatıldı.
Resumed      : Duraklatılan çalışmaya tekrar devam edildi.
Failed       : Kurtarılamayan hata veya validation başarısızlığı ile kapanan run.
Cancelled    : Kullanıcı/operatör tarafından bilinçli olarak iptal edilen run.
Invalidated  : Tamamlanmış run sonradan geriye dönük geçersiz kılındı.
```

*Not: `Active`, `Success`, `Done`, `Error`, `Passed` gibi onaylanmamış terimlerin kullanımı KESİNLİKLE YASAKTIR.*

---

## 3. Güncelleme Kuralları (Update Rules)

1. **Run Başlatıldığında:** Çalıştırma `Initialized` durumuna geçtiğinde indekse yeni bir özet satırı eklenir.
2. **Durum Değişikliklerinde:** Çalıştırma `Running`, `Validation`, `Blocked`, `Paused` gibi aşamalara geçtikçe `Status` alanı güncellenir.
3. **Kapanış Aşamasında:** Run terminal duruma (`Completed`, `Failed`, `Cancelled`) ulaştığında `Status`, `Validation`, `Output Ref` ve `Note` alanları nihai haliyle dondurulur.
4. **Başarısız ve İptal Edilen Run'lar:** `RUN_INDEX.md` yalnızca başarılı çalışmaları listelemez. `Failed`, `Cancelled` ve `Invalidated` durumundaki tüm çalıştırmalar tarihsel izlenebilirlik için görünür kalır.
5. **Geçersiz Kılma (Invalidation):** Bir çalışmanın kaynak girdisi veya kapsamı değiştiğinde indeksteki satırı silinmez; `Status` değeri `Invalidated` olarak güncellenir.

---

## 4. Run Index Tablo Yapısı (Table Schema)

İndeks tablosunda aşağıdaki kanonik kolon yapısı uygulanır:

```markdown
| Run ID | Project Slug | Package | Profile | Status | Validation | Date | Output Ref | Note |
|---|---|---|---|---|---|---|---|---|
```

### Kolon Tanımları
- **Run ID:** Kanonik çalıştırma kimliği (`RUN-YYYYMMDD-XXX`).
- **Project Slug:** Proje tanımlayıcısı (`inputs/approved/<project-slug>/`).
- **Package:** Seçilen doküman paketi (Örn: `Corporate Website`, `SaaS Product`).
- **Profile:** Teslimat profili (`Foundation` | `Prototype` | `Implementation Ready` | `Production Ready`).
- **Status:** Kanonik yaşam döngüsü durumu.
- **Validation:** Doğrulama sonucu (`PASS` | `CONDITIONAL PASS` | `FAIL` | `Pending`).
- **Date:** Çalıştırmanın son işlem tarihi (`YYYY-MM-DD`).
- **Output Ref:** Yayınlanan çıktının bağıl yolu (Örn: `outputs/demos/example-project/versions/v0.1` | `N/A`).
- **Note:** Birkaç kelimelik özet sonuç veya kapatma notu.

---

## 5. Şablon ve Format Gösterimi (Format Demonstration)

Gelecekte gerçekleştirilecek çalıştırmalar için referans tablo formatı şu şekilde olacaktır:

```markdown
| Run ID | Project Slug | Package | Profile | Status | Validation | Date | Output Ref | Note |
|---|---|---|---|---|---|---|---|---|
| RUN-20260101-001 | example-project | demo-frontend | Prototype | Completed | PASS | 2026-01-01 | outputs/demos/example-project/versions/v0.1 | Örnek başarılı üretim formatı |
```

---

## 6. Güncel İndeks Durumu (Initial State)

```text
Total Indexed Runs : 0
Active Runs        : 0
Completed Runs     : 0
Failed Runs        : 0
Invalidated Runs   : 0
```

> [!NOTE]
> Henüz gerçekleştirilmiş ve dondurulmuş gerçek bir Product Engine runtime çalışması bulunmamaktadır.
>
> İlk çalıştırma başlatıldığında kanonik formata uygun olarak tabloya ilk indeks satırı eklenecektir. Sahte run verisi, git commit geçmişi veya uydurma proje isimleri indekse dahil edilmemiştir.
