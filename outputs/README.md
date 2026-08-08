# Product Engine — Outputs Katmanı Kullanım Rehberi

## 1. Amaç ve Kapsam

`outputs/` katmanı, Product Engine tarafından üretilmiş, validation (doğrulama) süreçlerinden başarıyla geçmiş, temiz ve doğrudan kullanılabilir nihai proje dokümantasyon teslimatlarının (final deliverables) saklandığı kanonik katmandır.

Bu katman şu temel sorulara deterministik cevaplar verir:
- Başarılı bir çalıştırma (run) sonucunda hangi temiz proje belgeleri teslim edildi?
- Çıktı hangi kategoriye (`demos` veya `products`), hangi projeye (`project-slug`) ve hangi sürüme (`output-version`) aittir?
- Çıktı hangi kaynak çalıştırma (`run_id`) ve onaylı girdi sürümü (`input_version`) tarafından üretildi?
- En güncel ve geçerli proje çıktısı hangisidir (`latest/`)?
- Geçmiş sürümler nasıl dondurulur ve saklanır (`versions/`)?
- Geçersiz kılınan (`Invalidated`) bir çalıştırma sonrasında sistem ve `latest/` türetilmiş görünümü nasıl davranır?

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
- Proje gerçeğinin (`Project Truth`) sahibi **değildir**,
- Sürüm yaşam döngüsü durum veritabanı (status registry) **değildir**.

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

## 5. Çıktı Yayınlama Kapısı ve Yaşam Döngüsü Akışı (Publication Gate & Lifecycle)

Bir proje çıktısının `outputs/` katmanında yayınlanabilmesi için aktif çalıştırmanın **başarılı sonlandırma kapısı şartlarını (`successful completion gate eligibility`)** eksiksiz karşılaması zorunludur.

```text
[runs/active/<run-id>/working-output/]
                 │
                 ▼
       [Aşama 9: Validation]
                 │
                 ▼
     [PASS / CONDITIONAL PASS]
                 │ (Başarılı Sonlandırma Kapısı Sağlandı)
                 ▼
 [Aşama 11: Sürüm Çıktısı Yayınlama (versions/<output-version>/)]
                 │
                 ▼
 [latest/ Klasörünün Güncellenmesi]
                 │
                 ▼
 [RUN_MANIFEST ve COMPLETION_REPORT Finalizasyonu]
                 │
                 ▼
  [Aşama 12: Run Kapanışı (status: Completed)]
```

### Yayınlama Kapısı Kontrol Listesi (Publication Gate Eligibility Criteria)
Final çıktı yayınlama anında çalıştırma henüz terminal `Completed` durumuna geçmiş olmak zorunda değildir; yayınlama kapısı şartlarını karşılamış olması yeterlidir:
- [ ] Run aktif durumda olmalı ve `Validation` aşamasını tamamlamış olmalıdır.
- [ ] Seçilen paketin gerektirdiği tüm zorunlu belgeler `working-output/` altında eksiksiz üretilmiş olmalıdır.
- [ ] Validation sonucu `PASS` veya açıkça onaylanmış `CONDITIONAL PASS` olmalıdır (`FAIL` alan çıktılar kesinlikle yayınlanamaz).
- [ ] Output kategorisi (`demos` veya `products`) motor kurallarınca çözümlenmiş olmalıdır.
- [ ] Çıktı sürüm numarası (`output_version`) atanmış olmalıdır.
- [ ] Çıktı bütünlüğü ve temizlik kontrolleri (placeholder, run izleri, gizli anahtarlar, yerel yollar) doğrulanmış olmalıdır.

Sürüm çıktısı yayınlanıp `latest/` güncellendikten ve `RUN_MANIFEST.md` içerisindeki metadata dondurulduktan sonra çalıştırma terminal `status: Completed` durumuna geçer ve `runs/completed/` dizinine taşınır.

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
3. **Tek Çalıştırma — Tek Çıktı Sözleşmesi:** Tek bir başarılı sonlandırma kapısını geçen çalıştırıcı yalnızca **tek bir kanonik `output_version`** ve **tek bir `output_ref`** üretebilir. Tamir ve tekrar denemeler `working-output` seviyesinde kalır.

---

## 8. `latest/` Klasör Semantiği (Derived View) ve Güncelleme Sırası

`latest/` klasörü tarihsel bir kaynak veya bağımsız bir sürüm deposu **değildir**.

- **Rolü:** Projenin şu andaki **aktif, en son doğrulanmış ve geçerli yayınlanmış çıktısının türetilmiş görünümüdür (`derived current valid view`)**.
- **Tarihsel Kaynak Mülkiyeti:** Projenin tarihsel geçmişinin tek sahibi `versions/` dizinidir; `latest/` klasörü kendi başına ayrı bir sürüm tarihi tutmaz.

### Atomik Güncelleme Sırası (Atomic Publication Order)
Bir çalıştırma yayınlama kapısını geçtiğinde `latest/` klasörü aşağıdaki sırayla güncellenir:
1. `versions/<output-version>/` altına temiz çıktı belgeleri eksiksiz yazılır.
2. Çıktı bütünlüğü ve temizliği teyit edilir.
3. `latest/` klasörünün içeriği yeni sürümün temiz kopyasıyla güncellenir.
4. `RUN_MANIFEST.md` içindeki `output_ref` alanı dondurulur (`outputs/<category>/<project-slug>/versions/<output-version>/`).
5. Çalıştırma `Completed` olarak kapatılır ve `runs/completed/` dizinine taşınır.

*Not: `latest/` hiçbir zaman eksik, kısmi veya doğrulanmamış bir sürüme işaret edemez.*

---

## 9. Yayınlama Yapamayan Çalıştırmalar (Failed, Cancelled, Blocked, Paused Rules)

Final çıktı yayınlama hakkı **yalnızca başarılı sonlandırma kapısını geçen çalıştırmalara aittir**.

- **Failed Runs (`runs/failed/<run-id>/`):** Başarısız veya validation `FAIL` alan çalıştırmalar kesinlikle final output **yayınlayamaz**. Yeni sürüm oluşturamaz, `latest/` içeriğini değiştiremez.
- **Cancelled Runs (`runs/failed/<run-id>/` - status: Cancelled):** İptal edilen çalıştırmalar kesinlikle final output **yayınlayamaz**.
- **Blocked / Paused Runs (`runs/active/<run-id>/`):** Duraklatılmış veya engellenmiş çalıştırmalar final output **yayınlayamaz**. Taslaklar `working-output/` içinde kalır.

---

## 10. Geçersiz Kılma Semantiği ve Deterministik Fallback (Invalidation & Validity Source)

Approved `engine/RUN_PROTOCOL.md` uyarınca tamamlanmış bir çalıştırma sonradan `Completed → Invalidated` durumuna geçebilir.

### Tarihsel Geçerlilik Kaynağı (Validity Source Authority)
`outputs/` katmanı içerisinde ayrı bir durum veritabanı veya manifest dosyası bulunmadığından, tarihsel bir sürümün (`versions/<output-version>/`) geçerli (`valid`) veya geçersiz (`invalidated`) oluşunun **deterministik kaynağı kaynak çalıştırmadır (source run)**:

```text
outputs/<category>/<project-slug>/versions/<output-version>/
                       │
                       ▼ (Traceability Mapping)
runs/completed/<run-id>/RUN_MANIFEST.md  [output_ref]
                       │
                       ▼ (Lifecycle Status Check)
           Source Run Lifecycle Status
   ┌───────────────────┴───────────────────┐
   ▼                                       ▼
status: Completed                     status: Invalidated
(Valid Output Version)               (Invalidated Output Version)
```

1. **Valid Version:** Kaynak çalıştırmasının `RUN_MANIFEST.md` içindeki `status` değeri `Completed` olan ve geçersiz kılınmamış tarihsel sürümdür.
2. **Invalidated Version:** Kaynak çalıştırmasının `status` değeri `Invalidated` olarak güncellenmiş tarihsel sürümdür.

### Invalidation ≠ Delete (Silme ve Modifikasyon Yasağı)
- Bir çalıştırma geçersiz kılındığında onun `versions/<output-version>/` altındaki tarihsel çıktı klasörü **silinmez ve içeriği modifiye edilmez** (klasör içine `INVALIDATED.txt` veya durum manifesti eklenmez). Audit ve geçmiş takibi için `versions/` altında aynen dondurulmuş olarak korunur.
- Çalıştırma durum güncellemeleri yalnızca `runs/` katmanı sorumluluğundadır.

### Invalidation Sonrası `latest/` Deterministik Fallback Algoritması
Bir projenin aktif `latest/` çıktısına kaynaklık eden çalıştırma geçersiz kılınırsa (`status: Invalidated` olursa):
1. `latest/` klasörü geçersiz kılınan bu içeriği temsil etmeyi derhal bırakır.
2. Sistem, aynı proje ve kategori altındaki tüm tarihsel sürümleri (`versions/`) tarar.
3. Her bir sürümün kaynak çalışması `RUN_MANIFEST.md` dosyasındaki `output_ref` alanı üzerinden eşleştirilir.
4. Kaynak çalışmasının `status` değeri `Completed` olan en yüksek sürüm numarasına sahip geçerli tarihsel sürüm seçilir.
5. `latest/` klasörü bu seçilen en yüksek geçerli sürümün temiz kopyası ile güncellenir (`fallback`).
6. Eğer projenin geçmişinde hiç geçerli sürüm kalmamışsa, `latest/` klasörü aktif/geçerli çıktı bulunmadığını belirtecek şekilde temizlenir ve `current-unavailable` durumunda tutulur.

---

## 11. İzlenebilirlik Sözleşmesi ve Metadata Yetki Açıklaması (Traceability & Authority Clarification)

### Otorite Çatışması Açıklaması (Planning vs Runtime Authority Clarification)
`planning/OUTPUTS_FOLDER_SPEC.md` belgesinde yer alan `OUTPUT_MANIFEST.md` ve benzeri çıktı seviyesi manifest önerileri, mimari tasarım aşamasındaki build-time önerileridir. 

**Onaylanmış Runtime Sözleşmeleri Yetkisi (`Precedence Authority`):**
Product Engine V0 yürütme aşamasında `engine/OUTPUT_STRUCTURE.md` ve `engine/RUN_PROTOCOL.md` onaylı runtime sözleşmeleri tam yetkilidir. Bu sözleşmeler uyarınca izlenebilirlik (`traceability`) tek bir kanonik mekanizmayla sağlanır:
- `runs/completed/<run-id>/RUN_MANIFEST.md` belgesi; `output_version` ve exact repo-relative `output_ref` (`outputs/<category>/<project-slug>/versions/<output-version>/`) alanlarını dondurur.

Bu nedenle V0 `outputs/` katmanı içerisinde mükerrer `OUTPUT_MANIFEST.md`, `VERSION_MANIFEST.md`, `OUTPUT_METADATA.json` veya `output-status.json` gibi ikincil metadata dosyaları **oluşturulmaz**.

### Temizlik ve Sızıntı Yasağı (Strict Leakage Ban)
Nihai çıktı belgeleri içerisine kesinlikle aşağıdakiler **sızamaz**:

1. **Run Operasyonel Dosyaları:** `RUN_MANIFEST.md`, `INPUT_SNAPSHOT.md`, `PACKAGE_SELECTION.md`, `SOURCE_REGISTER.md`, `ASSUMPTIONS.md`, `CONFLICTS.md`, `DECISIONS.md`, `RUN_LOG.md`, `PROGRESS.md`, `VALIDATION_REPORT.md`, `COMPLETION_REPORT.md` vb. operasyonel dosyalar `outputs/` klasörüne kopyalanamaz.
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

- **Slug Kararlılığı:** Proje slug'ı approved input slug'ı değişmediği sürece değiştirilemez.
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

`outputs/` katmanında işlem yaparken veya doğrularken şu 25 ana kural kontrol edilir:

1. Publication için run'ın önceden `Completed` olması gerektiğini söyleyen circular ifade kaldırıldı mı? (Kaldırıldı)
2. Publication successful-completion gate şartlarına bağlı mı? (Evet)
3. Publication sonrası run `Completed` olarak kapanıyor mu? (Evet)
4. Failed run yayınlama yapabiliyor mu? (Yayınlayamamalı)
5. Cancelled run yayınlama yapabiliyor mu? (Yayınlayamamalı)
6. Blocked run yayınlama yapabiliyor mu? (Yayınlayamamalı)
7. Paused run yayınlama yapabiliyor mu? (Yayınlayamamalı)
8. `OUTPUT_MANIFEST.md` runtime zorunluluğu kaldırıldı mı? (Kaldırıldı)
9. Mükerrer output metadata veritabanı engellendi mi? (Evet)
10. Planning önerisi vs runtime otorite farkı belgelendi mi? (Evet)
11. `RUN_MANIFEST.md` izlenebilirlik otoritesi olarak tanımlı mı? (Evet)
12. `output_ref` tarihsel `versions/` dizinini gösteriyor mu? (Evet)
13. Tarihsel çıktı geçerliliği kaynak çalıştırma durumu (`source run status`) üzerinden çözülebiliyor mu? (Evet)
14. Geçersiz kılınan çalıştırmanın çıktısı `versions/` altında aynen korunuyor mu? (Evet)
15. Geçersiz kılınan çıktı `latest/` adayı olabiliyor mu? (Olamamalı)
16. Deterministik fallback mekanizması açıkça tanımlı mı? (Evet)
17. Geçerli sürüm kalmadığında `current-unavailable` davranışı tanımlı mı? (Evet)
18. Tarihsel çıktılar in-place modifiye ediliyor mu? (Edilmemeli)
19. `latest/` türetilmiş görünüm (`derived view`) olarak mı tanımlı? (Evet)
20. Sürüm geçmişinin mülkiyeti `versions/` klasöründe mi? (Evet)
21. Outputs katmanı çalıştırma durumu yazıyor mu? (Yazmamalı)
22. Çıktı sürümleme standardı (`v0.1`, `v0.2`, `v1.0`) korundu mu? (Evet)
23. Working-output / final-output sınırı korundu mu? (Evet)
24. Run operasyonel belgelerinin sızması engellendi mi? (Evet)
25. Yalnızca `outputs/` katmanı sınırlarında mı çalışıldı? (Evet)
