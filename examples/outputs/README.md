# Product Engine — Examples Outputs Katmanı (`examples/outputs/`)

## 1. Amacı ve Sistem İçindeki Yeri

`examples/outputs/` klasörü, Product Engine doğrulama (`Validation`) süreçlerinden başarıyla geçmiş, temiz, doğrudan kullanılabilir nihai proje dokümantasyon teslimatlarının (`final deliverables`) sentetik gösterim katmanıdır.

Bu katmanın temel amaçları:
- **Temiz Deliverable Gösterimi:** Taslak izlerinden (`working-output/`), run belgelerinden ve şablon talimatlarından tamamen arındırılmış temiz nihai doküman paketinin nasıl göründüğünü sergilemek (`web-app-minimal-001`).
- **Kalite Standartları Gösterimi:** Sıfır çözülmemiş placeholder, sıfır secret ve sıfır makineye özel yol ilkesinin uygulandığı örnek paket sunmak.
- **Test Fixture Desteği:** Output denetimlerini, doküman temizlik kontrollerini ve ajan oryantasyonunu destekleyecek standart nihai çıktı verisi sağlamak.

---

## 2. Otorite Sınırı ve Runtime İzolasyonu

- `examples/outputs/` altındaki belgeler **gerçekleştirilmiş müşteri/ürün teslimatı değildir**.
- Gerçek nihai çıktılar runtime `outputs/demos/` ve `outputs/products/` dizinlerinde saklanır.
- Buradaki örnekler runtime `outputs/` klasörüne kopyalanamaz veya canlı ürün teslimatı gibi referans gösterilemez.

---

## 3. Klasör Yapısı ve Scenario İlişkisi

`examples/outputs/` klasöründe her sentetik çıktı senaryosu kendi `scenario_id` klasöründe tutulur:

```text
examples/outputs/
├── README.md                      (Bu rehber belgesi)
└── web-app-minimal-001/           (Clean positive output deliverable fixture)
    ├── SCENARIO.md                (Senaryo metadata ve test hedefi)
    ├── README.md                  (Projenin kendi temiz README belgesi)
    ├── PROJECT_BRAIN.md           (Temiz çekirdek ürün bağlamı)
    └── PRODUCT_RULES.md           (Temiz iş kuralları belgesi)
```

---

## 4. Output Cleanliness ve Sızıntı Yasağı Sözleşmesi (Strict Output Rules)

Positive output örnekleri aşağıdaki 6 temizlik kuralına **istisnasız uymak zorundadır**:

1. **Sıfır Unresolved Placeholder:** `{{PROJECT_NAME}}`, `{{PLACEHOLDER}}`, `<TODO>`, `<TBD>` gibi şablon yer tutucuları kesinlikle bulunamaz.
2. **Sıfır Run Operasyonel Belgesi Sızıntısı:** `RUN_MANIFEST.md`, `INPUT_SNAPSHOT.md`, `PACKAGE_SELECTION.md`, `SOURCE_REGISTER.md`, `ASSUMPTIONS.md`, `CONFLICTS.md`, `DECISIONS.md`, `RUN_LOG.md`, `VALIDATION_REPORT.md` vb. dosyalar nihai çıktı paketine kopyalanamaz.
3. **Sıfır Şablon Direktifi Sızıntısı:** `[CONDITIONAL: ...]`, `# OUTPUT DOCUMENT START`, generation direktifleri veya şablon dahili yorumları nihai metinlerde bulunamaz.
4. **Sıfır Secret / Credential:** Şifreler, API anahtarları, auth token'ları yazılamaz. Yalnızca güvenli değişken adları (`EXAMPLE_API_KEY`) gösterilebilir.
5. **Sıfır Makineye Özel Yol (Machine-Local Path Ban):** `file:///`, `C:\Users\...`, `/home/...` gibi yerel sistem yolları kullanılamaz. Repo-relative yollar kullanılır.
6. **Sıfır Private CoT:** Ajanların gizli akıl yürütme metinleri veya içsel düşünce süreçleri saklanamaz.

---

## 5. Output Versioning Semantiği

- **`output_version` Standardı:** Semver etiketi olarak yazılır (`v0.1`, `v0.2`, `v1.0`).
- **Input Versioning Ayrımı:** Input sürümü (`v1`, `v2`) ile output sürümü (`v0.1`, `v1.0`) birbirinden bağımsızdır.
