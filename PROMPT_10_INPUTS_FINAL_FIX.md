~~~md
# PROMPT_10_INPUTS_FINAL_FIX

Product Engine `inputs/` klasörü için final consistency fix turudur.

`engine/`, `packages/` ve `templates/` Approved ve Closed durumdadır.

`inputs/` ana build tamamlanmıştır; bu görev yalnızca audit sırasında bulunan küçük tutarsızlıkları düzeltir.

Amaç `inputs/` mimarisini yeniden tasarlamak değildir.

Yalnızca aşağıdaki konuları düzelt:

1. Approved immutability ile `superseded` status mutation çelişkisi
2. Birden fazla fiziksel versioning yaklaşımının aynı anda bırakılması
3. Reusable input belgelerine gerçek proje isimlerinin sızması
4. Canonical metadata içinde `source_count` coverage eksikliği
5. README/example timestamp’larının placeholder standardına çekilmesi

Yalnızca `inputs/` klasöründe çalış.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/INPUTS_FOLDER_SPEC.md`
3. `engine/PROJECT_INTAKE.md`
4. `engine/ASSUMPTION_RULES.md`
5. `engine/CONFLICT_RESOLUTION.md`
6. `engine/RUN_PROTOCOL.md`
7. `templates/runs/INPUT_SNAPSHOT_TEMPLATE.md`

Ardından mevcut:

8. `inputs/README.md`
9. `inputs/PROJECT_INPUT_TEMPLATE.md`
10. `inputs/pending/README.md`
11. `inputs/approved/README.md`

dosyalarını tamamen incele.

---

# 2. Approved Immutability Kuralını Tekleştir

Mevcut belgelerde şu çelişki var:

```text
Approved input immutable / in-place overwrite yasak
~~~

deniyor ancak aynı zamanda eski approved version’ın:

```text
status: superseded
```

olarak sonradan güncellenebileceği söyleniyor.

Bu iki davranış birlikte kullanılmamalıdır.

Approved bir input version oluşturulduktan sonra fiziksel dosyanın içeriği değişmemelidir.

Authoritative davranış:

```text
Approved v1
→ immutable olarak korunur

Yeni değişiklik
→ pending v2 adayı

Explicit approval
→ approved v2

approved v2:
supersedes: <v1 input_id>
```

Eski v1 dosyasına dönüp:

```yaml
status: superseded
```

yazmak için dosyayı değiştirme.

------

# 3. Superseded Semantics

`superseded` kavramı korunabilir ancak immutable geçmiş kaydı mutate edilmeden yorumlanmalıdır.

Tercih edilen model:

```text
Bir approved version,
daha yeni bir approved version tarafından `supersedes` alanında referanslanıyorsa
logical olarak superseded kabul edilir.
```

Örnek:

```yaml
# v1
input_id: INPUT-EXAMPLE-PROJECT-V1
status: approved
supersedes: ""

# v2
input_id: INPUT-EXAMPLE-PROJECT-V2
status: approved
supersedes: INPUT-EXAMPLE-PROJECT-V1
```

v1 fiziksel olarak değiştirilmez.

v2 mevcut olduğunda v1 logical olarak eski/superseded version kabul edilir.

Gereksiz reverse pointer sistemi kurma.

------

# 4. Tek Fiziksel Versioning Standardı Seç

Mevcut belgelerde aynı anda:

- tek `PROJECT_INPUT.md`
- `history/`
- flat `<project-slug>-v1.md`
- version klasörleri

gibi birden fazla yöntem açık bırakılmıştır.

V0 için tek canonical fiziksel yapı seç.

Bu görev için kullanılacak canonical yapı:

```text
inputs/
├── pending/
│   └── <project-slug>/
│       └── PROJECT_INPUT.md
│
└── approved/
    └── <project-slug>/
        ├── v1/
        │   └── PROJECT_INPUT.md
        ├── v2/
        │   └── PROJECT_INPUT.md
        └── ...
```

------

# 5. Pending Version Davranışı

Aynı project slug için V0’da yalnızca tek aktif pending revision bulunmalıdır.

Pending dosyanın metadata’sında aday version tutulabilir:

```yaml
input_version: "2"
```

veya mevcut standardınla uyumlu biçimde.

Ancak fiziksel pending path:

```text
inputs/pending/<project-slug>/PROJECT_INPUT.md
```

olarak kalmalıdır.

Yeni pending revision başladığında önceki aktif pending revision’ın üzerine kör overwrite yapılmamalıdır.

Eğer önceki pending abandoned ise README’de sade şekilde:

```text
replace only when intentionally restarting the pending revision
```

veya eşdeğer açık kural kullan.

Karmaşık pending-history sistemi kurma.

------

# 6. Approved Version Naming

Approved version klasörleri:

```text
v1
v2
v3
```

şeklinde sade artan integer version kullanmalıdır.

Canonical metadata ile fiziksel klasör adı tutarlı olmalıdır.

Örnek:

```yaml
input_version: "1"
```

ve path:

```text
inputs/approved/example-project/v1/PROJECT_INPUT.md
```

`1.0`, `2.0` gibi başka format kullanma.

Semantic versioning oluşturma.

------

# 7. Input ID Standardı

Mevcut deterministic format korunabilir:

```text
INPUT-<PROJECT-SLUG-UPPER>-V<NUMBER>
```

Örnek:

```text
INPUT-EXAMPLE-PROJECT-V1
```

`input_id` ve `input_version` birebir uyumlu olmalıdır.

Örnek:

```yaml
input_id: INPUT-EXAMPLE-PROJECT-V2
input_version: "2"
```

------

# 8. Active Approved Version Kuralı

Current active approved version:

```text
aynı project_slug altında bulunan en yüksek approved version
```

olarak belirlenir.

Ancak bu yalnızca fiziksel version path ve metadata tutarlıysa uygulanır.

Pointer, symlink, `latest/` klasörü veya ayrı manifest oluşturma.

------

# 9. Run Snapshot İlişkisini Koru

Yeni versioning standardından sonra da şu sınır değişmemelidir:

```text
inputs/approved/<project-slug>/vN/PROJECT_INPUT.md
```

→ reusable approved truth

```text
runs/active/<run-id>/INPUT_SNAPSHOT.md
```

→ o run başladığı anda kullanılan exact approved version’ın immutable operational snapshot’ı

Run snapshot:

- approved input’a live reference değildir,
- sonradan değişmez,
- yeni approved version oluşunca otomatik güncellenmez.

Yeni approved version kullanılacaksa yeni run gerekir.

------

# 10. Real Project Leakage Cleanup

Reusable `inputs/` belgelerinde gerçek proje veya şirket isimleri bulunmamalıdır.

Tüm `inputs/` klasörünü tara.

Özellikle kaldır:

```text
io-makina
vibehall
talkx
```

ve başka gerçek repository project/company isimleri varsa onları da kaldır.

Yerine yalnız generic örnekler kullan:

```text
example-project
sample-app
example-service
Example Project
```

Reusable contract gerçek proje geçmişine bağımlı olmamalıdır.

------

# 11. `source_count` Metadata Coverage

`planning/INPUTS_FOLDER_SPEC.md` input metadata contract’ında `source_count` alanını tanımlar.

Canonical input metadata’ya:

```yaml
source_count: {{SOURCE_COUNT}}
```

ekle.

Placeholder tanımını da açıklığa kavuştur.

`source_count`:

```text
PROJECT_INPUT.md içinde kayıtlı kaynak/provenance entry sayısı
```

anlamına gelsin.

Bu alan package veya document selection için authority değildir.

------

# 12. Metadata Standardını Tekleştir

Canonical `PROJECT_INPUT_TEMPLATE.md` minimum metadata standardı:

```yaml
input_id:
project_name:
project_slug:
input_version:
status:
project_type:
project_state:
delivery_profile:
primary_language:
created_at:
updated_at:
approved_at:
approved_by:
supersedes:
source_type:
source_count:
```

Gereksiz yeni metadata alanları icat etme.

------

# 13. Status Semantics

Canonical current statuses:

```text
pending
approved
```

temel lifecycle durumlarıdır.

`superseded`, immutable old approved dosyanın fiziksel status mutation’ı olarak kullanılmamalıdır.

README’de gerekiyorsa:

```text
logical superseded
```

olarak açıklanabilir.

Örneğin:

```text
Approved v1, Approved v2 tarafından supersede edildiğinde
v1 dosyası değişmeden historical approved version olarak kalır.
```

------

# 14. Timestamp Placeholder Standardı

Reusable README ve template örneklerinde gerçek run zamanı gibi görünen hardcoded timestamp kullanma.

Örnek olarak:

```text
2026-08-08T04:30:00Z
```

gibi değerler yerine:

```text
{{CREATED_AT}}
{{UPDATED_AT}}
{{APPROVED_AT}}
```

veya:

```text
<ISO-8601-TIMESTAMP>
```

kullan.

Format açıklaması olarak şu kalabilir:

```text
YYYY-MM-DDTHH:mm:ssZ
```

Ama reusable contract gerçek çalışma timestamp’i taşımamalıdır.

------

# 15. Canonical Template Fix

`inputs/PROJECT_INPUT_TEMPLATE.md` içinde:

- `input_version` integer-like version standardına çek
- `source_count` ekle
- `supersedes` mantığını yeni immutable modelle uyumlu tut
- real project leakage olmadığını doğrula
- gerçek timestamp bırakma
- canonical project_type listesini koru
- canonical Delivery Profile değerlerini koru
- SaaS project type yapma

------

# 16. README Fix

`inputs/README.md` içinde:

- yalnız tek fiziksel versioning modelini göster
- flat-file alternatiflerini kaldır
- `history/` alternatifini kaldır
- active approved version kuralını yeni modelle açıklığa kavuştur
- immutable old version mutation’ını kaldır
- `superseded` semantics’i forward reference (`supersedes`) üzerinden açıkla
- gerçek proje isimlerini kaldır
- timestamp örneklerini placeholder yap
- source_count metadata’yı ekle

README yine `engine/PROJECT_INTAKE.md` sözleşmesinin kopyası haline gelmemelidir.

------

# 17. Pending README Fix

`inputs/pending/README.md` içinde canonical path yalnız:

```text
inputs/pending/<project-slug>/PROJECT_INPUT.md
```

olarak gösterilmeli.

Flat file alternatifi kaldır.

Aynı slug için tek aktif pending revision kuralını belirt.

Pending generation source değildir.

------

# 18. Approved README Fix

`inputs/approved/README.md` içinde canonical path yalnız:

```text
inputs/approved/<project-slug>/v1/PROJECT_INPUT.md
inputs/approved/<project-slug>/v2/PROJECT_INPUT.md
...
```

olarak gösterilmeli.

Şunları kaldır:

- `history/`
- flat `<project-slug>-v1.md`
- root-level active `PROJECT_INPUT.md`
- old approved file’ın status’unu inplace değiştirme yaklaşımı

Approved versions immutable historical truth olarak kalmalıdır.

------

# 19. Scope Discipline

Bu görevde yalnızca şu dosyalar gerekiyorsa değiştir:

```text
inputs/README.md
inputs/PROJECT_INPUT_TEMPLATE.md
inputs/pending/README.md
inputs/approved/README.md
```

Başka dosya oluşturma zorunluluğu yoktur.

Şunları değiştirme:

- `engine/`
- `packages/`
- `templates/`
- `planning/`
- `runs/`
- `outputs/`
- `logs/`
- `examples/`
- `archive/`
- root README
- Product Engine Brain

------

# 20. Final Audit

Fix tamamlandıktan sonra tek tek doğrula:

1. Approved version dosyaları gerçekten immutable mı?
2. Eski approved dosyayı `status: superseded` yapmak için mutate etme davranışı kaldı mı?
3. Yeni approved version yalnız `supersedes` ile eskiyi referanslıyor mu?
4. Tek canonical approved versioning path kullanılıyor mu?
5. Flat-file alternatif kaldı mı? Kalmamalı.
6. `history/` alternatifi kaldı mı? Kalmamalı.
7. Root-level active approved `PROJECT_INPUT.md` yaklaşımı kaldı mı? Kalmamalı.
8. Pending path tek standarda sahip mi?
9. Aynı slug için tek aktif pending revision kuralı açık mı?
10. Version klasörleri `v1`, `v2`, `v3` formatında mı?
11. Metadata `input_version` buna uyumlu mu?
12. `input_id` version ile uyumlu mu?
13. `source_count` metadata mevcut mu?
14. Real project/company isimleri reusable inputs belgelerinde kaldı mı? Kalmamalı.
15. Hardcoded çalışma timestamp’leri kaldı mı? Kalmamalı.
16. Project type canonical değerleri korundu mu?
17. SaaS project type drift’i var mı? Olmamalı.
18. Delivery Profile canonical değerleri korundu mu?
19. Approved input ↔ run snapshot sınırı değişmedi mi?
20. Package/document selection ownership inputs’a taşındı mı? Taşınmamalı.
21. Yalnızca `inputs/` değiştirildi mi?

------

# 21. Çalışma Sonu Raporu

## Değiştirilen Dosyalar

## Final Versioning Standardı

Şu yapıyı doğrula:

```text
inputs/pending/<project-slug>/PROJECT_INPUT.md

inputs/approved/<project-slug>/
├── v1/PROJECT_INPUT.md
├── v2/PROJECT_INPUT.md
└── ...
```

## Immutability

Eski Approved version’ların mutate edilmediğini doğrula.

## Supersedes Semantics

Yeni version’ın eski version’ı forward reference ile geçersiz kıldığını açıkla.

## Metadata

Şunların hizalandığını doğrula:

```text
input_id
input_version
source_count
supersedes
timestamps
```

## Leakage Cleanup

Gerçek proje/company isimlerinin temizlendiğini doğrula.

## Run Boundary

Approved input ile INPUT_SNAPSHOT ayrımının korunduğunu doğrula.

## Sonuç

Şunlardan biriyle bitir:

```text
INPUTS_FINAL_FIX_COMPLETE
```

veya:

```text
INPUTS_FINAL_FIX_BLOCKED
```

Blocked ise yalnızca gerçek engeli açıkla.