# Product Engine — Examples Runs Katmanı (`examples/runs/`)

## 1. Amacı ve Sistem İçindeki Yeri

`examples/runs/` klasörü, bir Product Engine çalışmasının (`run`) operasyonel yaşam döngüsünü, ürettiği kanıt belgelerini ve süreç durumlarını gösteren sentetik örnek katmanıdır.

Bu katmanın temel amaçları:
- **Completed Run Örneği Gösterimi:** Onaylı bir girdiden başlanarak tüm adımları başarıyla tamamlanan (`Completed`), doğrulamadan `PASS` alan ve temiz çıktıları `outputs/` katmanına aktarılan bir çalışmanın operasyonel belgelerini sergilemek (`web-app-minimal-001`).
- **Blocked Run Örneği Gösterimi:** Üretim aşamasında kritik bir çelişki (`Conflict`) tespit edildiğinde çalışmanın nasıl `Blocked` durumuna geçtiğini ve çözülene kadar bekletildiğini gösteren örneği sunmak (`web-app-blocked-001`).
- **Test Fixture Desteği:** Run yaşam döngüsü denetimlerini, manifest güncellemelerini ve durum geçiş mantığını test edecek standart veri sağlamak.

---

## 2. Otorite Sınırı ve Runtime İzolasyonu

- `examples/runs/` altındaki dizinler **gerçekleştirilmiş runtime run geçmişi değildir**.
- Gerçek çalıştırma kayıtları runtime `runs/active/`, `runs/completed/` ve `runs/failed/` dizinlerinde tutulur.
- Buradaki örnekler runtime `runs/` klasörüne kopyalanamaz veya canlı run geçmişi gibi indekslenemez (`logs/RUN_INDEX.md` güncellenmez).

---

## 3. Klasör Yapısı ve Kanonik Per-Run Dosya Seti

`examples/runs/` klasöründe her sentetik çalıştırma kendi `scenario_id` adı verilen klasöründe tutulur:

```text
examples/runs/
├── README.md                      (Bu rehber belgesi)
├── web-app-minimal-001/           (Completed positive run fixture)
│   ├── SCENARIO.md                (Senaryo metadata ve test hedefi)
│   ├── RUN_MANIFEST.md            (Üst seviye çalışma metadata'sı)
│   ├── INPUT_SNAPSHOT.md          (Onaylı girdi snapshot'ı)
│   ├── PACKAGE_SELECTION.md      (Seçilen paket ve profil kararı)
│   ├── SOURCE_REGISTER.md         (Kullanılan kaynaklar)
│   ├── ASSUMPTIONS.md             (Operasyonel varsayımlar)
│   ├── CONFLICTS.md               (Çözülmüş çelişkiler)
│   ├── DECISIONS.md               (Çalışma kararları)
│   ├── RUN_LOG.md                 (Kronolojik olay kaydı)
│   ├── PROGRESS.md                (İlerleme durumu)
│   ├── VALIDATION_REPORT.md       (Doğrulama raporu)
│   ├── COMPLETION_REPORT.md       (Kapanış raporu)
│   └── working-output/            (Taslak üretim alanı)
└── web-app-blocked-001/           (Blocked edge-case run fixture)
    ├── SCENARIO.md
    └── ... (Kanonik operasyonel dosyalar)
```

---

## 4. Canonical RUN_MANIFEST Fields & Vocabulary Standards

- **Kanonik Manifest Alanları:** Approved `templates/runs/RUN_MANIFEST_TEMPLATE.md` ile tam uyum:
  `selected_package` (NOT `package_id`), `validation_result` (NOT `overall_validation`), `documents_produced`, `output_version`, `output_ref`.
- **`output_ref` Semantiği:** `RUN_MANIFEST.md` içindeki `output_ref` her zaman kanonik runtime yayın dizinini gösterir (`outputs/<category>/<project-slug>/versions/<output-version>/`). Örnek materyalin fiziksel repository saklama konumu (`examples/outputs/web-app-minimal-001/`) ise `SCENARIO.md` belgesinde açıklanır.
- **Run ID Standardı:** `RUN-<YYYYMMDD>-<sequence>` (Örn: `RUN-20260101-001`).
- **Status Vocabulary:** Yalnızca `engine/RUN_PROTOCOL.md` kanonik terimleri kullanılır:
  `Created`, `Initialized`, `Running`, `Validation`, `Completed`, `Blocked`, `Paused`, `Resumed`, `Failed`, `Cancelled`, `Invalidated`.
- **Blocked ≠ Failed Ayrımı:** Critical conflict veya netleştirme ihtiyacı olduğunda durum `Blocked` olur. Bu durum teknik bir başarısızlık (`Failed`) değildir. Henüz yapılmayan doğrulama için `validation_result: null` veya raporda `validation not executed` belirtilir; uydurma alan isimleri üretilmez.
- **Sahte Detay Yasağı:** Run loglarında gereksiz 40-50 sahte olay üretilmez. Yalnızca test edilen davranışı gösteren minimum kronolojik olaylar kaydedilir.
