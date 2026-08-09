# Product Engine — Examples Inputs Katmanı (`examples/inputs/`)

## 1. Amacı ve Sistem İçindeki Yeri

`examples/inputs/` klasörü, Product Engine'e sağlanan proje girdilerinin (`PROJECT_INPUT.md`) onaylanmış (`approved`) ve taslak/bekleyen (`pending`) hallerinin nasıl göründüğünü gösteren sentetik örnek katmanıdır.

Bu katmanın temel amaçları:
- **Approved Input Örneği Gösterimi:** Tamamlanmış, tutarlı, canonical intake standartlarına uygun ve üretime hazır bir girdi belgesinin yapısını sergilemek.
- **Pending Input Örneği Gösterimi:** Eksik zorunlu bilgi, çözülmemiş kritik çelişki veya onay bekleyen durumlar nedeniyle `pending` durumunda kalan ve çalıştırma (`run`) başlatılamayacağını gösteren girdi örneği sunmak.
- **Test Fixture Desteği:** Intake doğrulama (`Intake Validation`) mantığını ve otomasyon testlerini besleyecek sentetik veri sağlamak.

---

## 2. Otorite Sınırı ve Runtime İzolasyonu

- `examples/inputs/` altındaki belgeler **bağlayıcı proje gerçeği (Project Truth) değildir**.
- Gerçek proje girdileri runtime `inputs/approved/` ve `inputs/pending/` dizinlerinde saklanır.
- Buradaki örnekler runtime `inputs/` klasörüne kopyalanamaz veya otomatik olarak onaylı proje girdisi muamelesi göremez.

---

## 3. Klasör Yapısı ve Scenario İlişkisi

`examples/inputs/` klasöründe her sentetik senaryo kendi `scenario_id` adı verilen alt klasöründe tutulur:

```text
examples/inputs/
├── README.md                  (Bu rehber belgesi)
├── web-app-minimal-001/       (Positive approved input fixture)
│   ├── SCENARIO.md            (Senaryo metadata ve test hedefi)
│   └── PROJECT_INPUT.md       (Sentetik onaylı proje girdisi)
├── web-app-pending-001/       (Negative pending input fixture)
│   ├── SCENARIO.md            (Senaryo metadata ve test hedefi)
│   └── PROJECT_INPUT.md       (Sentetik eksik/taslak proje girdisi)
└── web-app-blocked-001/       (Edge-case approved input fixture for blocked run)
    ├── SCENARIO.md            (Senaryo metadata ve test hedefi)
    └── PROJECT_INPUT.md       (Sentetik onaylı proje girdisi)
```

---

## 4. Input Versioning ve Metadata Sözleşmesi

- **`input_version` Standardı:** Tam sayı dizesi olarak yazılır (`"1"`, `"2"`). `v1.0` gibi semver etiketi yazılmaz.
- **`input_id` Standardı:** Proje slug'ından türeyen kanonik format: `INPUT-<PROJECT-SLUG-UPPER>-V<NUMBER>` (Örn: `INPUT-TASK-TRACKER-DEMO-V1`, `INPUT-ANALYTICS-DASHBOARD-DEMO-V1`, `INPUT-REALTIME-SYNC-APP-V1`).
- **`status` Ayrımı:**
  - `status: approved`: `approved_by: user` ve `approved_at` kaydı taşır. Generation pipeline için geçerli girdidir.
  - `status: pending`: Eksik zorunlu alanlar içerir. Generation pipeline başlatılamaz (`Run Creation Gate` engeller).
- **Approved Input ≠ Conflict-Free Run:** Onaylı bir girdi (`status: approved`) kullanıcı gerçeğini doğru yansıtabilir; ancak çalıştırma sırasında mimari veya teknik gereksinim çelişkileri ortaya çıkarsa run durumu `Blocked` olur.
- **Proje Türü ve Profili:** `project_type` 10 kanonik değerden biri, `delivery_profile` 4 kanonik değerden biri olmalıdır.
