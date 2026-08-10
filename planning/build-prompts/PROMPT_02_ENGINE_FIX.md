~~~md
# PROMPT_02_ENGINE_FIX

Product Engine `engine/` build sonrası düzeltme turudur.

Amaç mevcut engine dosyalarını yeniden tasarlamak değil; planning ile çelişen noktaları düzeltmek ve engine sözleşmelerini approved repository mimarisiyle hizalamaktır.

Bu görevde yalnızca `engine/` klasörü değiştirilebilir.

## Önce Oku

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/README.md`
3. `planning/BUILD_STATUS.md`
4. `planning/ENGINE_FOLDER_SPEC.md`
5. `planning/PACKAGES_FOLDER_SPEC.md`
6. `planning/TEMPLATES_FOLDER_SPEC.md`
7. `planning/RUNS_FOLDER_SPEC.md`
8. `planning/OUTPUTS_FOLDER_SPEC.md`

Ardından `engine/` altındaki mevcut 11 dosyanın tamamını oku.

Planning belgeleri bu düzeltme turunda authoritative kaynaktır.

---

# Ana Görev

Mevcut engine yapısını koru ancak aşağıdaki planning driftlerini düzelt.

Engine’i sıfırdan yeniden yazma.

## 1. Document Catalog ve Template Mimarisi

`engine/DOCUMENT_CATALOG.md` şu anda planning’de bulunmayan belge ve template aileleri tanımlıyor.

Örneğin:

- `PRODUCT_REQUIREMENTS.md`
- `ARCHITECTURE.md`
- `API_REFERENCE.md`
- `TESTING_STRATEGY.md`
- `templates/product/`
- `templates/technical/`
- `templates/operational/`
- `templates/planning/`

Bunları authoritative sistem olarak kullanma.

Planning’de onaylı template yapısı şudur:

```text
templates/
├── ai/
├── project/
├── design/
├── waves/
├── prompts/
└── runs/
~~~

Planning’de tanımlanmış belge ailesini temel al.

Özellikle mevcut sistemde yer alan gerçek belge kimlikleri ve karşılıkları korunmalıdır:

```text
PROJECT_BRAIN.md
PRODUCT_RULES.md
TECH_CONTEXT.md
PRODUCT_STRATEGY.md        (conditional)
DESIGN_RULES.md            (conditional)
CURRENT_STATUS.md
NEXT_TASKS.md
DECISIONS.md
AGENT_INSTRUCTIONS.md
README.md
PROJECT_PLAN.md
DATA_MODEL.md
API_CONTRACTS.md
DEPLOYMENT.md
OPERATIONS.md
TEST_STRATEGY.md
WAVE_MAP.md
WAVE_PLAN.md
```

`DOCUMENT_CATALOG.md` bu belge ailesine göre hizalanmalıdır.

Yeni belge ailesi icat etme.

Template yolları `planning/TEMPLATES_FOLDER_SPEC.md` ile uyumlu olmalıdır.

------

## 2. Package Yapısını Planning ile Hizala

`engine/PACKAGE_RULES.md` şu anda aşağıdaki gibi bir yapı varsayıyor:

```text
packages/<profile>/<type>.md
```

Bu yapı kullanılmamalıdır.

Planning’de onaylı başlangıç package yapısı:

```text
packages/
├── README.md
├── DEMO_FRONTEND_PACKAGE.md
├── CORPORATE_WEBSITE_PACKAGE.md
├── SAAS_PACKAGE.md
├── EXISTING_PROJECT_PACKAGE.md
└── API_SERVICE_PACKAGE.md
```

Package selection mantığı delivery profile ve project type kullanabilir ancak gerçek package dosyalarının konumu planning’deki düz yapıyla uyumlu olmalıdır.

Yeni package klasör mimarisi oluşturma.

Base package + extension mantığı korunabilir.

------

## 3. Run Protocol'ü Planning ile Hizala

`engine/RUN_PROTOCOL.md`, `planning/RUNS_FOLDER_SPEC.md` ile birebir uyumlu hale getirilmelidir.

Planning’deki başlangıç run yapısı:

```text
runs/
├── README.md
├── active/
├── completed/
└── failed/
```

Bir run için önerilen yapı:

```text
runs/active/<run-id>/
├── RUN_MANIFEST.md
├── INPUT_SNAPSHOT.md
├── PACKAGE_SELECTION.md
├── SOURCE_REGISTER.md
├── ASSUMPTIONS.md
├── CONFLICTS.md
├── DECISIONS.md
├── RUN_LOG.md
├── PROGRESS.md
├── VALIDATION_REPORT.md
├── COMPLETION_REPORT.md
└── working-output/
```

`RUN_LOG.md`, `RUN_MANIFEST.md` yerine kullanılmamalıdır.

Run lifecycle planning ile uyumlu olmalıdır:

```text
Created
→ Initialized
→ Running
→ Validation
→ Completed
```

Alternatif durumlar:

```text
Blocked
Paused
Resumed
Failed
Cancelled
Invalidated
```

Mevcut engine içindeki farklı status isimlerini planning ile hizala.

Run template authoritative konumu:

```text
templates/runs/
```

olarak kalmalıdır.

------

## 4. Drift'in Yayıldığı Engine Belgelerini Hizala

`DOCUMENT_CATALOG.md`, `PACKAGE_RULES.md` ve `RUN_PROTOCOL.md` düzeltildiğinde aşağıdaki belgelerde eski veya yanlış referans kalıp kalmadığını kontrol et:

```text
engine/README.md
engine/PROJECT_INTAKE.md
engine/INFORMATION_MAP.md
engine/GENERATION_PIPELINE.md
engine/OUTPUT_STRUCTURE.md
engine/VALIDATION_RULES.md
engine/ASSUMPTION_RULES.md
engine/CONFLICT_RESOLUTION.md
```

Özellikle şu tip eski referansları düzelt:

```text
PRODUCT_REQUIREMENTS.md
ARCHITECTURE.md
API_REFERENCE.md
TESTING_STRATEGY.md
templates/product/
templates/technical/
templates/operational/
templates/planning/
packages/<profile>/<type>.md
runs/<run-id>/RUN_LOG.md
```

Bunların yerine planning’deki gerçek belge ve klasör yapısını kullan.

------

## 5. Information Ownership Haritasını Gerçek Belgelere Bağla

`engine/INFORMATION_MAP.md` içinde bilgi sahiplikleri planning’deki gerçek belge ailesine göre düzenlenmelidir.

Örnek mantık:

```text
Proje amacı
→ PROJECT_BRAIN.md veya ilgili authoritative proje belgesi

Ürün kuralları
→ PRODUCT_RULES.md

Teknik stack ve mimari bağlam
→ TECH_CONTEXT.md

Ürün stratejisi
→ PRODUCT_STRATEGY.md (koşullu)

Tasarım kuralları
→ DESIGN_RULES.md (koşullu)

Mevcut durum
→ CURRENT_STATUS.md

Sonraki işler
→ NEXT_TASKS.md

Kararlar
→ DECISIONS.md

Proje planı
→ PROJECT_PLAN.md

Veri modeli
→ DATA_MODEL.md

API sözleşmeleri
→ API_CONTRACTS.md

Deployment
→ DEPLOYMENT.md

Operasyon
→ OPERATIONS.md

Test stratejisi
→ TEST_STRATEGY.md

Wave yapısı
→ WAVE_MAP.md / WAVE_PLAN.md
```

Ancak planning veya Product Engine Brain açıkça farklı bir ownership tanımlıyorsa onu esas al.

------

## 6. Output Structure'ı Approved Doküman Ailesiyle Hizala

`engine/OUTPUT_STRUCTURE.md` içindeki örnek final output yapısında planning dışı belge adları kullanılmamalıdır.

Özellikle:

```text
PRODUCT_REQUIREMENTS.md
ARCHITECTURE.md
API_REFERENCE.md
TESTING_STRATEGY.md
```

gibi belge adlarını kaldır veya approved document catalog ile değiştir.

Planning’de onaylı sürümleme yapısını koru:

```text
outputs/<category>/<project-slug>/
├── latest/
└── versions/
```

Working output / final output ayrımını koru.

------

## 7. Küçük İçerik Düzeltmeleri

`PROJECT_INTAKE.md` içindeki bozuk karakter veya encoding hatalarını düzelt.

Örneğin:

```text
başlatamaز
```

gibi bozuk ifadeler normal Türkçe metne çevrilmelidir.

Ayrıca aşağıdaki tarz fazla mutlak ifadeleri minimum yeterlilik ilkesiyle hizala:

```text
Production Ready → her durumda tam kurumsal dokümantasyon
```

Production Ready daha yüksek olgunluk gerektirir ancak gereksiz doküman üretme ilkesi devam eder.

------

## 8. Paralel Run Kuralını Netleştir

`RUN_PROTOCOL.md` içindeki:

```text
Aynı anda iki aktif run MUST NOT açık tutulur.
```

ifadesi global yasak gibi okunmamalıdır.

V0 için kuralı şu mantığa getir:

```text
Aynı proje ve aynı aktif scope için birden fazla çakışan aktif run açılmamalıdır.

Farklı projeler için paralel run'lar mümkündür.
```

------

# Korunması Gerekenler

Şunları bozma:

- engine dosyalarının mevcut genel yapısı
- model bağımsızlığı
- assumption/conflict ayrımı
- validation katmanları
- output/latest + versions kararı
- working output / final output ayrımı
- minimum yeterlilik ilkesi
- private chain-of-thought saklamama
- sessiz overwrite yasağı
- engine klasörünün yalnızca davranış sözleşmelerini sahiplenmesi

------

# Değiştirilebilecek Dosyalar

Yalnızca:

```text
engine/README.md
engine/PROJECT_INTAKE.md
engine/DOCUMENT_CATALOG.md
engine/PACKAGE_RULES.md
engine/INFORMATION_MAP.md
engine/GENERATION_PIPELINE.md
engine/OUTPUT_STRUCTURE.md
engine/VALIDATION_RULES.md
engine/ASSUMPTION_RULES.md
engine/CONFLICT_RESOLUTION.md
engine/RUN_PROTOCOL.md
```

Başka hiçbir dosyayı değiştirme.

------

# Yasaklar

- planning/ dosyalarını değiştirme
- PRODUCT_ENGINE_BRAIN.md değiştirme
- packages/ doldurma
- templates/ doldurma
- inputs/ doldurma
- runs/ doldurma
- outputs/ doldurma
- logs/ doldurma
- examples/ doldurma
- archive/ doldurma
- yeni ana klasör oluşturma
- yeni mimari tasarlama
- planning kararlarını yeniden açma
- engine'i sıfırdan yeniden yazma

------

# Son Kontrol

Düzeltmelerden sonra doğrula:

1. Document Catalog yalnızca approved Product Engine belge ailesini kullanıyor.
2. Template yolları planning/TEMPLATES_FOLDER_SPEC.md ile uyumlu.
3. Package dosya konumları planning/PACKAGES_FOLDER_SPEC.md ile uyumlu.
4. Run yapısı planning/RUNS_FOLDER_SPEC.md ile uyumlu.
5. RUN_MANIFEST ve RUN_LOG ayrı sorumluluklara sahip.
6. Run durum isimleri planning ile uyumlu.
7. Information Map gerçek belge adlarını kullanıyor.
8. Generation Pipeline eski PRD/ARCH/API belge ailesine bağımlı değil.
9. Output Structure approved belge ailesini kullanıyor.
10. Validation eski belge adlarına bağlı değil.
11. Encoding hatası kalmadı.
12. Production Ready gereksiz bürokrasi anlamına gelmiyor.
13. Paralel run kuralı farklı projeleri engellemiyor.
14. Planning dışı yeni belge veya klasör mimarisi oluşturulmadı.
15. Yalnızca engine/ değiştirildi.

------

# Çalışma Sonu Raporu

Kısa rapor ver:

## Düzeltilen Dosyalar

Her dosyada yapılan değişikliği tek cümleyle yaz.

## Kapatılan Driftler

- Document Catalog / Template drift
- Package structure drift
- Run Protocol drift
- Information Map drift
- Pipeline drift
- Output drift

## Korunan Engine Kararları

Değişmeden kalan doğru temel kararları belirt.

## Açık Noktalar

Yalnızca gerçekten sonraki klasörlere bırakılması gereken noktaları yaz.

## Sonuç

Şunlardan biriyle bitir:

```text
ENGINE_FIX_COMPLETE
```

veya

```text
ENGINE_FIX_BLOCKED
```

Blocked ise yalnızca gerçek engeli belirt.