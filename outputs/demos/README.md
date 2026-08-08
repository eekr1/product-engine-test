# Product Engine — Outputs Demos Kategorisi Rehberi

## 1. Amaç ve Kapsam

`outputs/demos/` dizini, Product Engine tarafından üretilmiş demo niteliğindeki, sunulabilir, test edilebilir veya konsept doğrulama seviyesindeki nihai proje çıktılarını saklayan kanonik alt kategoridir.

---

## 2. Klasör Yapısı ve Semantik

Runtime sırasında bu kategori altında üretilen proje çıktıları şu standart yapıyı izler:

```text
outputs/demos/<project-slug>/
├── latest/
│   ├── README.md
│   ├── PROJECT_BRAIN.md
│   └── ... (seçilen pakete ait doğrulanmış temiz proje belgeleri)
└── versions/
    ├── v0.1/
    ├── v0.2/
    └── ...
```

- **`latest/`:** Projenin şu anda geçerli, en son doğrulanmış ve aktif demo çıktısını gösterir (`derived current valid view`).
- **`versions/`:** Projenin geçmiş demo sürümlerini dondurulmuş (`immutable`) olarak saklar.

---

## 3. Kategori Sorumluluk Sınırları

1. **Kategori Seçim Authority'si:** Bir projenin `demos/` altında mı yoksa `products/` altında mı üretileceği kararını bu klasör vermez. Kategori çözümü `engine/PACKAGE_RULES.md` ve onaylı paket sözleşmeleri tarafından gerçekleştirilir. `outputs/demos/` yalnızca çözümlenmiş kategoriyi barındırır.
2. **Kategori ≠ Teslimat Profili (Category ≠ Delivery Profile):** `demos/` kategorisi otomatik olarak yalnızca `Prototype` teslimat profili anlamına gelmez. Farklı teslimat profillerindeki erken teslimatlar da motor kurallarınca buraya yönlendirilebilir.
3. **Yayınlama Kapısı Şartı:** Yalnızca başarılı sonlandırma kapısı şartlarını sağlayan (`successful completion gate eligibility`), `VALIDATION_RULES` standartlarından geçmiş (`PASS` veya onaylı `CONDITIONAL PASS`), yer tutuculardan ve operasyonel çalışma izlerinden (`runs/`) arındırılmış nihai teslimatlar yayınlanabilir.

---

## 4. Operasyonel Sızıntı Yasağı (README Leakage Ban)

Bu `outputs/demos/README.md` belgesi, Product Engine'in çıktı kategorisi operasyonel rehberidir.

- Proje çıktı üretimi (`generation`) sırasında bu rehber dosya projenin `latest/` veya `versions/` dizinlerine **kesinlikle kopyalanamaz**.
- Projenin teslimat paketi içerisindeki `README.md` belgesi projenin kendi temiz tanıtım belgesi olmalıdır.
