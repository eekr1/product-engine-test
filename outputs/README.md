# Product Engine — Outputs Katmanı Kullanım Rehberi

## 1. Amaç ve Kapsam

`outputs/` katmanı, Product Engine tarafından üretilmiş, validation (doğrulama) süreçlerinden başarıyla geçmiş, temiz ve doğrudan kullanılabilir nihai proje dokümantasyon teslimatlarının (final deliverables) saklandığı kanonik katmandır.

Bu katman şu temel sorulara deterministik cevaplar verir:
- Başarılı bir çalıştırma (run) sonucunda hangi temiz proje belgeleri teslim edildi?
- Çıktı hangi kategoriye (`demos` veya `products`), hangi projeye (`project-slug`) ve hangi sürüme (`output-version`) aittir?
- Çıktı hangi kaynak çalıştırma (`run_id`) ve onaylı girdi sürümü (`input_version`) tarafından üretildi?
- En güncel ve geçerli proje çıktısı hangisidir (`latest/`)?
- Geçmiş sürümler nasıl dondurulur ve saklanır (`versions/`)?
- Geçersiz kılınan (`Invalidated`) bir çıktı sonrasında sistem ve `latest/` nasıl davranır?

---

## 2. Katmanlar Arası Mülkiyet ve Sorumluluk Ayrımı (Ownership Boundaries)

Product Engine mimarisinde her katmanın sorumluluğu kesin çizgilerle ayrılmıştır:

```text
inputs/
→ Onaylanmış proje gerçeği (Project Truth: Ne biliyoruz?)

engine/
→ Üretim, doğrulama, paket ve çıktı kuralları (Sistem mantığı ve ilkeler)

packages/
→ Girdiye göre hangi doküman paketinin üretileceği (Kapsam tanımı)

templates/
→ Üretilecek dokümanların yapısal şablonları (Doküman formatları)

runs/
→ Operasyonel çalışma kaydı, yürütme kanıtları ve taslak üretim alanı (working-output)

outputs/
→ Doğrulanmış, temiz ve doğrudan kullanılabilir nihai proje çıktıları (Final deliverables)

logs/
→ Kalıcı motor seviyesi mimari hafıza (ENGINE_CHANGELOG)
```

### `outputs/` Katmanının Yasaklı Rolleri
`outputs/` katmanı:
- Taslak çalışma alanı (`working workspace`) **değildir**,
- Çalıştırma geçmişi veya operasyonel iz deposu **değildir**,
- Validation raporu veya kalite kontrol notları deposu **değildir**,
- Şablon (`template`) veya blueprint deposu **değildir**,
- Proje gerçeğinin (`Project Truth`) sahibi **değildir**.

---

## 3. Kanonik Klasör Yapısı (Canonical Output Structure)

Product Engine `outputs/` katmanı aşağıdaki onaylanmış kanonik hiyerarşiyi uygular:

```text
outputs/
├── README.md
├── demos/
│   └── README.md
└── products/
    └── README.md
```

Çalışma zamanında (runtime) üretilen proje çıktıları bu iki kategori altında dikey olarak yapılandırılır:

```text
outputs/<category>/<project-slug>/
├── latest/
│   ├── README.md
│   ├── PROJECT_BRAIN.md
│   ├── PRODUCT_RULES.md       (koşullu)
│   ├── TECH_CONTEXT.md        (koşullu)
│   ├── DATA_MODEL.md          (koşullu)
│   ├── API_CONTRACTS.md       (koşullu)
│   └── ... (seçilen pakete ait temiz teslimat belgeleri)
└── versions/
    ├── v0.1/
    ├── v0.2/
    └── v1.0/
```

### Yapısal İlkeler
1. **Üst Seviye Kategoriler:** Yalnızca `demos/` ve `products/` dizinleri kullanılabilir. Yeni top-level klasörler (ör. `saas/`, `websites/`, `apps/`, `production/`, `prototype/`) **oluşturulamaz**.
2. **Project Slug:** Proje klasör adı (`<project-slug>`), `inputs/approved/<project-slug>/` katmanındaki onaylanmış proje slug'ı ile birebir aynı olmalıdır (küçük harfli, tire ile ayrılmış, Türkçe karakter içermeyen).
3. **Gereksiz Klasör Yasağı:** Fiziksel olarak henüz çıktı üretilmemiş durumlar için dummy/örnek sürüm klasörleri (ör. `outputs/demos/example-project/...`) önceden açılmaz.

---

## 4. Kanonik Çıktı Kategorileri (Canonical Output Categories)

`outputs/` katmanında 2 temel teslimat kategorisi tanımlıdır:

- **`demos/`:** Sunulabilir, test edilebilir, erken aşama veya konsept doğrulama teslimatları.
- **`products/`:** Uygulamaya hazır (`Implementation Ready`) veya üretime hazır (`Production Ready`) teslimatlar.

### KRİTİK AYRIM: Kategori ≠ Teslimat Profili (Category ≠ Delivery Profile)
`outputs/` kategorisi ile `inputs/` / `packages/` katmanlarındaki teslimat profili (`Delivery Profile`) aynı kavramlar değildir:
- `products/` kategorisindeki bir çıktı otomatik olarak `Production Ready` teslimat profili anlamına gelmez.
- `demos/` kategorisindeki bir çıktı da yalnız `Prototype` profili anlamına gelmez.
- **Kategori Çözümleme (Category Resolution):** Bir çalıştırmanın çıktısının `demos/` veya `products/` altına mı yazılacağı `engine/PACKAGE_RULES.md` ve ilgili paket sözleşmesi tarafından çözümlenir. `outputs/` katmanı kendi paket/kategori seçim mantığını icat etmez; yalnızca çözümlenmiş kategoriyi uygular.

---

## 5. Çıktı Yayınlama Kapısı ve Pipeline (Final Output Creation Gate)

Bir proje çıktısının `outputs/` katmanında yayınlanabilmesi için çalıştırmanın (`run`) aşağıdaki finalization koşullarını eksiksiz sağlaması zorunludur:

```text
[runs/active/<run-id>/working-output/]
                 │
                 ▼
       [Aşama 9: Validation]
                 │
                 ▼
     [PASS / CONDITIONAL PASS]
                 │
                 ▼
 [Aşama 11: Final Output Assembly & Publication]
                 │
                 ▼
 [outputs/<category>/<project-slug>/versions/<output-version>/]
                 │
                 ▼
 [outputs/<category>/<project-slug>/latest/ Güncellemesi]
                 │
                 ▼
  [Aşama 12: Completed Run Closure]
```

### Yayınlama Kapısı Kontrol Listesi (Publication Gate Criteria)
- [ ] Run aktif durumda ve `Validation` aşamasını tamamlamış olmalıdır.
- [ ] Seçilen paketin gerektirdiği tüm zorunlu belgeler `working-output/` altında eksiksiz üretilmiş olmalıdır.
- [ ] Validation sonucu `PASS` veya açıkça onaylanmış `CONDITIONAL PASS` olmalıdır (`FAIL` alan çıktılar kesinlikle yayınlanamaz).
- [ ] Output kategorisi (`demos` veya `products`) motor kurallarınca çözümlenmiş olmalıdır.
- [ ] Çıktı sürüm numarası (`output_version`) atanmış olmalıdır.
- [ ] Çıktı bütünlüğü ve temizlik kontrolleri (placeholder, run izleri, gizli anahtarlar, yerel yollar) doğrulanmış olmalıdır.

---

## 6. Çalışma Alanı ve Nihai Çıktı Kesin Ayrımı (Working Output ≠ Final Output)

Product Engine'de taslak çalışma ile temiz teslimat arasında aşılmaz bir sınır vardır:

| Özellik | Working Output (`runs/active/<run-id>/working-output/`) | Final Output (`outputs/<category>/<project-slug>/...`) |
| :--- | :--- | :--- |
| **Amacı** | Üretim workspace'i, taslakların montajı ve tamiri | Temiz, doğrulanmış, doğrudan kullanılabilir nihai paket |
| **Eksiklik / Placeholder** | Geçici olarak içerebilir | **KESİNLİKLE YASAK** (Temizlenmiş olmak zorundadır) |
| **Operasyonel İzler** | Geçici taslaklar, çalışma notları barındırabilir | **KESİNLİKLE YASAK** (Yalnız temiz proje dokümanları) |
| **Doğrulama Durumu** | Doğrulama bekliyor veya tamir aşamasında | Validation'dan `PASS` / `CONDITIONAL PASS` almış |
| **Kullanım Amacı** | İç üretim takibi | Ajanların veya geliştiricilerin doğrudan kullanımı |

---

## 7. Çıktı Sürümleme ve Tarihsel Sürüm Değişmezliği (Output Versioning & Immutability)

- **Input Versioning'den Bağımsızlık:** Output sürümlemesi (`v0.1`, `v0.2`, `v1.0`), input sürümlemesinden (`v1`, `v2`) bağımsız artabilir.
- **Tarihsel Sürüm Konumu:** Her yayınlanan çıktı `outputs/<category>/<project-slug>/versions/<output-version>/` altında saklanır.

### Immutability (Değişmezlik) Kuralları
1. **In-place Overwrite Yasağı:** Yayınlanmış bir tarihsel çıktı sürümü (`versions/v0.1/`) yeni bir run çalıştırıldı veya yeni sürüm yayınlandı diye **silinemez, modifiye edilemez veya üzerine yazılamaz**.
2. **Aynı Sürüm Üzerine Yazma Yasağı:** Aynı kategori ve proje slug'ı altında mevcut olan bir sürüm dizinine (`versions/v0.1/`) ikinci bir çalıştırmanın çıktısı yazılamaz. Yeni bir çalışma yeni bir `output_version` almak zorundadır.
3. **Tek Çalıştırma — Tek Çıktı Sözleşmesi:** Tek bir başarılı run yalnızca **tek bir kanonik `output_version`** ve **tek bir `output_ref`** üretebilir. Tamir ve tekrar denemeler `working-output` seviyesinde kalır.

---

## 8. `latest/` Klasör Semantiği ve Güncelleme Sırası

`latest/` klasörü tarihsel bir kaynak veya bağımsız bir sürüm deposu **değildir**.

- **Rolü:** Projenin şu andaki **aktif, en son doğrulanmış ve geçerli yayınlanmış çıktısını (`current valid published output view`)** temsil eder.
- **Tarihsel Kaynak:** Projenin tarihsel geçmişi `versions/` dizini altındadır; `latest/` klasörü kendi başına ayrı bir sürüm tarihi tutmaz.

### Atomik Güncelleme Sırası (Atomic Publication Order)
Bir çalıştırma başarıyla tamamlandığında `latest/` klasörü aşağıdaki sırayla güncellenir:
1. `versions/<new-version>/` altına temiz çıktı belgeleri eksiksiz yazılır.
2. Çıktı bütünlüğü ve temizliği teyit edilir.
3. `latest/` klasörünün içeriği yeni sürümün temiz kopyasıyla güncellenir.
4. `RUN_MANIFEST.md` içindeki `output_ref` alanı dondurulur (`outputs/<category>/<project-slug>/versions/<output-version>/`).
5. Çalıştırma `Completed` olarak kapatılır ve `runs/completed/` dizinine taşınır.

*Not: `latest/` hiçbir zaman eksik, kısmi veya doğrulanmamış bir sürüme işaret edemez.*

---

## 9. Tamamlanmayan Çalıştırmalar (Failed, Cancelled, Blocked, Paused Rules)

Final çıktı yayınlama hakkı **yalnızca başarılı (`Completed`) çalışan çalıştırmalara aittir**.

- **Failed Runs (`runs/failed/<run-id>/`):** Başarısız veya validation `FAIL` alan çalıştırmalar kesinlikle final output **yayınlayamaz**. Yeni sürüm oluşturamaz, `latest/` içeriğini değiştiremez.
- **Cancelled Runs (`runs/failed/<run-id>/` - status: Cancelled):** İptal edilen çalıştırmalar kesinlikle final output **yayınlayamaz**.
- **Blocked / Paused Runs (`runs/active/<run-id>/`):** Duraklatılmış veya engellenmiş çalıştırmalar final output **yayınlayamaz**. Taslaklar `working-output/` içinde kalır.

---

## 10. Geçersiz Kılma Semantiği (Invalidated Run & `latest/` Behavior)

Approved `engine/RUN_PROTOCOL.md` uyarınca tamamlanmış bir çalıştırma sonradan `Completed → Invalidated` durumuna geçebilir.

### Invalidation ≠ Delete (Silme Yasağı)
- Bir çalıştırma geçersiz kılındığında onun `versions/<output-version>/` altındaki tarihsel çıktı klasörü **silinmez**. Audit ve geçmiş takibi için `versions/` altında aynen korunur.

### Invalidation Sonrası `latest/` Deterministik Davranışı
Bir projenin aktif `latest/` çıktısına kaynaklık eden sürüm geçersiz kılanırsa (`Invalidated` olursa):
1. Tarihsel çıktı `versions/<output-version>/` dizininde kalmaya devam eder.
2. `latest/` klasörü geçersiz kılınan bu içeriği temsil etmeyi derhal bırakır.
3. **Valid Fallback Semantiği:** Eğer projenin geçmişinde daha eski ve hâlâ **geçerli (valid)** olan başka bir `versions/` sürümü varsa, `latest/` klasörü o en yüksek geçerli sürüme geri döner (`fallback`).
4. **Current-Unavailable State:** Eğer projenin geçmişinde hiç geçerli sürüm kalmamışsa, `latest/` klasörü aktif/geçerli çıktı bulunmadığını belirtecek şekilde temizlenir ve boş/kullanılamaz durumda tutulur.

---

## 11. İzlenebilirlik ve Sızıntı Yasağı Kuralları (Traceability & Leakage Prevention)

### İzlenebilirlik (Traceability)
Her yayınlanmış çıktı sürümü için kaynak çalıştırma bilgisi geriye dönük izlenebilir olmalıdır:
- Çalıştırma tarafında: `RUN_MANIFEST.md` -> `output_version` ve `output_ref`
- Çıktı tarafında: Repo-relative `output_ref` (`outputs/<category>/<project-slug>/versions/<output-version>/`)

Yeni özel metadata dosyaları (`OUTPUT_MANIFEST.md`, `VERSION_MANIFEST.md`, `OUTPUT_METADATA.json` vb.) **oluşturulmaz**; izlenebilirlik `RUN_MANIFEST.md` ve standart doküman başlıkları ile sağlanır.

### Temizlik ve Sızıntı Yasağı (Strict Leakage Ban)
Nihai çıktı belgeleri içerisine kesinlikle aşağıdakiler **sızamaz**:

1. **Run Operasyonel Dosyaları:** `RUN_MANIFEST.md`, `INPUT_SNAPSHOT.md`, `PACKAGE_SELECTION.md`, `SOURCE_REGISTER.md`, `ASSUMPTIONS.md`, `CONFLICTS.md`, `RUN_LOG.md`, `PROGRESS.md`, `VALIDATION_REPORT.md`, `COMPLETION_REPORT.md` vb. operasyonel dosyalar `outputs/` klasörüne kopyalanamaz.
2. **Şablon Talimatları ve Dahili Yorumlar:** `templates/` kaynak yolları, `[CONDITIONAL: ...]`, `OUTPUT DOCUMENT START`, generation direktifleri veya dahili yorumlar nihai metinlerde kalamaz.
3. **Çözülmemiş Placeholder'lar:** `{{PROJECT_NAME}}`, `{{PLACEHOLDER}}`, `{{TODO}}`, `<TBD>` gibi şablon yer tutucuları bulunamaz.
4. **Yerel Makine Yolları (Machine-Local Paths):** `file:///...`, `C:\Users\...`, `/Users/...` gibi ortam bağımlı yollar yasaktır. Sadece repo-relative yollar kullanılabilir.
5. **Secret ve Hassas Veriler:** Şifreler, API anahtarları, auth token'ları, private key'ler çıktıya yazılamaz. Yalnızca safe variable isimleri (`DATABASE_URL`, `API_KEY`) gösterilebilir.

---

## 12. Çıktı Doküman Seti ve Dosya Adlandırma (Document Set & Naming Standards)

- **Kanonik Dosya İsimleri:** Çıktı dosyalarının adları `engine/DOCUMENT_CATALOG.md` ve ilgili şablon standartlarına tam uymalıdır:
  - `README.md`
  - `PROJECT_BRAIN.md`
  - `PRODUCT_RULES.md`
  - `TECH_CONTEXT.md`
  - `DATA_MODEL.md`
  - `API_CONTRACTS.md`
  - `.env.example`
  - vb.
- **Koşullu Belgeler (Conditional Documents):** Seçilen paket uyarınca geçerli/gerekli olmayan koşullu dokümanlar için **boş dosya veya placeholder dosya oluşturulamaz**. Çıktı klasörü yalnız seçilmiş ve üretilmiş belgeleri taşır.
- **Proje README vs Kategori README:**
  - `outputs/demos/README.md` ve `outputs/products/README.md` rehber belgelerdir; proje sürümlerine kopyalanmaz.
  - Projenin `latest/README.md` veya `versions/vN/README.md` belgesi ise üretilen projenin kendi temiz tanıtım ve kullanım belgesidir (Product Engine operasyonel talimatlarını içermez).

---

## 13. Proje Kimliği Kararlılığı ve Düzeltmeler (Identity Stability & User Corrections)

- **Slug Kararlılığı:** Proje slug'ı approved input slug'ı değiştmediği sürece değiştirilemez.
- **Kullanıcı Düzeltmeleri:** Yayınlanmış bir nihai çıktı üzerinde doğrudan elle müdahale / in-place editleme yapılmaz. Proje gerçeğini etkileyen bir değişiklik gerektiğinde:
  ```text
  inputs revizyonu (vN+1 approved input)
  → yeni run (new Run ID)
  → validation
  → yeni çıktı sürümü (new output version)
  ```
  akışı uygulanır.

---

## 14. Kontrol ve Denetim Listesi (Final Audit Checklist)

`outputs/` katmanında işlem yaparken veya doğrularken şu 32 madde kontrol edilir:

1. Üst seviye kategoriler yalnız `demos/` ve `products/` mı?
2. Yeni kategori icat edilmiş mi? (Edilmemeli)
3. Proje yapısı `<project-slug>/latest/` ve `versions/` şeklinde mi?
4. Working-output ile final output ayrımı korunmuş mu?
5. Validation öncesi yayınlama engelleniyor mu?
6. `FAIL` alan çalışma yayınlanabiliyor mu? (Yayınlanamamalı)
7. Failed run çıktı yayınlayabiliyor mu? (Yayınlayamamalı)
8. Cancelled run çıktı yayınlayabiliyor mu? (Yayınlayamamalı)
9. Blocked/Paused run çıktı yayınlayabiliyor mu? (Yayınlayamamalı)
10. Tarihsel sürümler immutable mı?
11. Aynı çıktı sürümü üzerine yazılabiliyor mu? (Yazılamamalı)
12. `latest/` tarihsel kaynak olarak kullanılıyor mu? (Kullanılmamalı)
13. `latest/` yalnız güncel geçerli çıktıyı mı temsil ediyor?
14. Invalidated tarihsel sürüm korunuyor mu?
15. `latest/` invalidated çıktıyı temsil edebiliyor mu? (Edememeli)
16. Invalidated sonrası geçerli eski sürüme fallback kuralı açık mı?
17. Run operasyonel dosyaları çıktıya sızıyor mu? (Sızmamalı)
18. Şablon talimatları çıktıya sızıyor mu? (Sızmamalı)
19. Çözülmemiş placeholder'lar kalıyor mu? (Kalmamalı)
20. Doküman seçim mantığı outputs katmanına taşınmış mı? (Taşınmamalı)
21. Paket seçim mantığı outputs katmanına taşınmış mı? (Taşınmamalı)
22. Kategori ile Teslimat Profili karıştırılmış mı? (Karıştırılmamalı)
23. Project slug approved input ile tam uyumlu mu?
24. Çıktı dosya adları kanonik katalog adlarına uyuyor mu?
25. Secret sızıntısı engelleniyor mu?
26. Yerel makine yolları engelleniyor mu?
27. `output_ref` repo-relative mi?
28. Aynı run iki kez yayınlama yapabiliyor mu? (Yapamamalı)
29. Atomik yayınlama sırası korunuyor mu?
30. Gerçek proje/şirket dummy çıktısı oluşturulmuş mu? (Oluşturulmamalı)
31. Çifte template/manifest sistemi oluşturulmuş mu? (Oluşturulmamalı)
32. Yalnızca `outputs/` katmanı sınırlarında mı çalışıldı?
