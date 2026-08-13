# Product Engine — Run Index (`logs/RUN_INDEX.md`)

## 1. Amaç ve Otorite

Bu belge, Product Engine tarafından başlatılan ve yürütülen tüm çalıştırmaların (`run`) üst seviye özet kayıt tablosudur (**secondary index**).

### Otorite Sınırı (Manifest Authority Rule)
- **Authoritative Source of Truth:** Bir çalıştırmanın anlık durumunun, karar detaylarının ve yürütme metadata'sının tek authoritative kaynağı `runs/<location>/<run-id>/RUN_MANIFEST.md` belgesidir.
- **`RUN_INDEX.md` Rolü:** Bu belge manifestlerin yerine geçmez; çalıştırmalar arasında hızlı görünüm, filtreleme ve karşılaştırma imkanı sunar.
- **Detay Sızıntısı Yasağı:** Run bazlı kronolojik loglar (`RUN_LOG.md`), detaylı doğrulama kontrolleri (`VALIDATION_REPORT.md`), varsayımlar ve çelişkiler bu indekse kopyalanmaz (`MUST NOT`).

---

## 2. Kanonik Vocabulary ve Terminoloji

### Run Durumları (Run Status Vocabulary)
`Status` kolonunda strictly `engine/RUN_PROTOCOL.md` tarafından onaylanmış aşağıdaki kanonik durum terimleri kullanılır:

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

### Doğrulama Durumları (Validation Column Semantics)
`Validation` kolonunda onaylanmış doğrulama sonuçları ile doğrulanmamış nötr indeks değerleri aşağıdaki biçimde gösterilir:

```text
PASS             : Doğrulama kurallarından eksiksiz geçti.
CONDITIONAL PASS : Küçük ve onaylı şartlarla kabul edildi.
FAIL             : Doğrulama kurallarından geçemedi.
N/A              : Doğrulama henüz gerçekleşmedi veya uygulanabilir sonuç yok (Not Applicable).
```

### Paket Kimlikleri (Canonical Package IDs)
`Package` kolonunda display name yerine strictly `engine/PACKAGE_RULES.md` kanonik paket kimlikleri kullanılır:

```text
demo-frontend
corporate-website
saas
existing-project
api-service
```

### Teslimat Profilleri (Delivery Profiles)
`Profile` kolonunda onaylanmış profil isimleri kullanılır:

```text
Foundation
Prototype
Implementation Ready
Production Ready
```

---

## 3. Güncelleme Kuralları (Update Rules)

1. **Run Başlatıldığında:** Çalıştırma `Initialized` durumuna geçtiğinde indekse yeni bir özet satırı eklenir. `Validation` değeri `N/A` olarak başlar.
2. **Durum Değişikliklerinde:** Çalıştırma `Running`, `Validation`, `Blocked`, `Paused` gibi aşamalara geçtikçe `Status` alanı güncellenir.
3. **Kapanış Aşamasında:** Run terminal duruma (`Completed`, `Failed`, `Cancelled`) ulaştığında `Status`, `Validation`, `Output Ref` ve `Note` alanları nihai haliyle dondurulur.

---

## 4. Run Index Tablo Yapısı (Table Schema)

| Run ID | Project Slug | Package | Profile | Status | Validation | Date | Output Ref | Note |
|---|---|---|---|---|---|---|---|---|

---

## 5. Güncel İndeks Durumu

```text
Total Indexed Runs : 1
Active Runs        : 0
Completed Runs     : 1
Failed Runs        : 0
Invalidated Runs   : 0
```

| Run ID | Project Slug | Package | Profile | Status | Validation | Date | Output Ref | Note |
|---|---|---|---|---|---|---|---|---|
| `RUN-20260813-001` | `trakya-teknik-makine` | `demo-frontend` | `Prototype` | `Completed` | `PASS` | 2026-08-13 | `outputs/demos/trakya-teknik-makine/versions/v0.2.0` | Trakya Teknik Makine kurumsal frontend demo dokümantasyon paketi başarıyla donduruldu |
