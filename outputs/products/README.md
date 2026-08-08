# Product Engine — Outputs Products Kategorisi Rehberi

## 1. Amaç ve Kapsam

`outputs/products/` dizini, Product Engine tarafından üretilmiş tam kapsamlı, uygulamaya hazır (`Implementation Ready`) veya üretime hazır (`Production Ready`) nitelikteki nihai proje çıktılarını saklayan kanonik alt kategoridir.

---

## 2. Klasör Yapısı ve Semantik

Runtime sırasında bu kategori altında üretilen proje çıktıları şu standart yapıyı izler:

```text
outputs/products/<project-slug>/
├── latest/
│   ├── README.md
│   ├── PROJECT_BRAIN.md
│   └── ... (seçilen pakete ait doğrulanmış temiz proje belgeleri)
└── versions/
    ├── v0.1/
    ├── v0.2/
    └── ...
```

- **`latest/`:** Projenin şu anda geçerli, en son doğrulanmış ve aktif ürün çıktısını gösterir.
- **`versions/`:** Projenin geçmiş ürün sürümlerini dondurulmuş (immutable) olarak saklar.

---

## 3. Kategori Sorumluluk Sınırları

1. **Kategori Seçim Authority'si:** Bir projenin `products/` altında mı yoksa `demos/` altında mı üretileceği kararını bu klasör vermez. Kategori çözümü `engine/PACKAGE_RULES.md` ve onaylı paket sözleşmeleri tarafından gerçekleştirilir. `outputs/products/` yalnızca çözümlenmiş kategoriyi barındırır.
2. **Kategori ≠ Teslimat Profili (Category ≠ Delivery Profile):** `products/` kategorisi otomatik olarak yalnızca `Production Ready` teslimat profili anlamına gelmez. `Implementation Ready` veya paket kurallarının ürün kategorisinde tanımladığı diğer profiller de burada yer alabilir.
3. **Temiz Teslimat Şartı:** Yalnızca `VALIDATION_RULES` standartlarından geçmiş (`PASS` veya onaylı `CONDITIONAL PASS`), yer tutuculardan ve operasyonel çalışma izlerinden (`runs/`) arındırılmış nihai teslimatlar tutulur.

---

## 4. Operasyonel Sızıntı Yasağı (README Leakage Ban)

Bu `outputs/products/README.md` belgesi, Product Engine'in çıktı kategorisi operasyonel rehberidir.

- Proje çıktı üretimi (`generation`) sırasında bu rehber dosya projenin `latest/` veya `versions/` dizinlerine **kesinlikle kopyalanamaz**.
- Projenin teslimat paketi içerisindeki `README.md` belgesi projenin kendi temiz tanıtım belgesi olmalıdır.
