~~~md
# PROMPT_09_INPUTS_BUILD

Product Engine’in `inputs/` build aşamasıdır.

`engine/`, `packages/` ve `templates/` klasörleri Approved ve Closed durumdadır.

Bu görevde yalnızca `inputs/` klasörünü gerçek, kullanılabilir ve model-bağımsız input management sözleşmeleriyle oluştur.

Amaç basitçe iki boş klasör ve README oluşturmak değildir.

`inputs/` katmanı şu sorulara deterministik cevap verebilmelidir:

- Ham proje bilgisi sisteme nasıl girer?
- Pending input ile Approved input arasındaki fark nedir?
- Proje bilgisi hangi standart yapıya normalize edilir?
- Eksik, belirsiz veya çelişkili bilgi nasıl işaretlenir?
- Kullanıcı onayı ne zaman gerekir?
- Bir input ne zaman engine tarafından kullanılabilir hale gelir?
- Approved input sonradan değiştirilebilir mi?
- Değişiklik gerektiğinde versioning nasıl yapılır?
- Bir generation run hangi input sürümünü kullanır?
- Existing project ile greenfield project girdileri nasıl ayrılır?
- Kaynak/provenance bilgisi nasıl korunur?

Yeni Product Engine mimarisi tasarlama.

Approved engine, package ve template sözleşmelerini değiştirme veya override etme.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/README.md`
3. `planning/BUILD_STATUS.md`
4. `planning/INPUTS_FOLDER_SPEC.md`
5. `planning/RUNS_FOLDER_SPEC.md`

Ardından Approved engine sözleşmelerinden:

6. `engine/README.md`
7. `engine/PROJECT_INTAKE.md`
8. `engine/DOCUMENT_CATALOG.md`
9. `engine/PACKAGE_RULES.md`
10. `engine/INFORMATION_MAP.md`
11. `engine/GENERATION_PIPELINE.md`
12. `engine/ASSUMPTION_RULES.md`
13. `engine/CONFLICT_RESOLUTION.md`
14. `engine/VALIDATION_RULES.md`
15. `engine/RUN_PROTOCOL.md`

Ardından:

16. `packages/README.md`
17. `templates/README.md`
18. `templates/runs/INPUT_SNAPSHOT_TEMPLATE.md`
19. `templates/runs/ASSUMPTIONS_TEMPLATE.md`
20. `templates/runs/CONFLICTS_TEMPLATE.md`
21. `templates/runs/RUN_MANIFEST_TEMPLATE.md`

Gerekli olduğunda diğer approved package/template dosyalarına bakabilirsin.

`ref/` yalnız kalite veya örnek yapı referansıdır.

`ref/` hiçbir zaman authoritative project truth değildir.

---

# 2. Inputs Katmanının Sorumluluğu

`inputs/` Product Engine’in project truth giriş katmanıdır.

Ownership ayrımı:

```text
inputs/
→ proje hakkında kullanıcı tarafından sağlanan ve normalize edilen truth

engine/PROJECT_INTAKE.md
→ hangi bilgilerin alınması gerektiğinin sözleşmesi

engine/ASSUMPTION_RULES.md
→ eksik bilgiyle nasıl davranılacağının kuralları

engine/CONFLICT_RESOLUTION.md
→ çelişkili bilgilerin nasıl çözüleceğinin kuralları

packages/
→ input’a göre hangi package/document setinin seçileceği

templates/
→ seçilen document’ın nasıl üretileceği

runs/
→ belirli bir execution sırasında kullanılan input snapshot’ının kaydı

outputs/
→ approved input’tan üretilmiş final deliverable
~~~

`inputs/` bu katmanların hiçbirinin sorumluluğunu üstlenmemelidir.

------

# 3. Hedef Klasör Yapısı

Approved temel yapı:

```text
inputs/
├── README.md
├── pending/
└── approved/
```

Bu yapıyı koru.

Yeni top-level input klasörü oluşturma.

Örneğin V0’da şunları oluşturma:

```text
drafts/
rejected/
archive/
history/
schemas/
forms/
```

Bunlara gerçekten ihtiyaç varsa sonraki versiyona bırakılabilir.

------

# 4. Input Lifecycle

Authoritative input lifecycle şu mantıkta olmalıdır:

```text
Raw Project Information
↓
Normalization
↓
Pending Input
↓
Clarification / Conflict Resolution
↓
Explicit User Approval
↓
Approved Input
↓
Run Snapshot
```

Pending input doğrudan generation için kullanılamaz.

Generation run yalnız:

```text
inputs/approved/
```

altındaki geçerli Approved input üzerinden başlatılabilir.

------

# 5. Pending Input

`inputs/pending/`:

- henüz tam onaylanmamış,
- clarification bekleyebilen,
- eksik bilgi içerebilen,
- çözümlenmemiş conflict barındırabilen,
- normalization sürecinde olan

project input kayıtlarının alanıdır.

Pending input:

```text
authoritative project truth değildir.
```

Agent pending input’tan doğrudan final project document üretemez.

------

# 6. Approved Input

`inputs/approved/`:

- kullanıcı tarafından açıkça onaylanmış,
- gerekli clarification’ları tamamlanmış,
- kritik conflict’leri çözülmüş,
- Product Engine tarafından generation için kullanılabilir

project truth kayıtlarının alanıdır.

Approved input:

```text
generation source of truth
```

olarak kabul edilir.

Ancak yalnız input layer bakımından source of truth’tur.

Document ownership hâlâ:

```text
engine/INFORMATION_MAP.md
```

tarafından belirlenir.

------

# 7. Explicit Approval Kuralı

Bir pending input sessizce Approved hale getirilemez.

Onay açık olmalıdır.

Geçerli örnekler:

```text
approved
onaylıyorum
devam edebiliriz
bu bilgiler doğru
bu inputu kullan
```

gibi açık kullanıcı eylemleri olabilir.

Agent kendi değerlendirmesiyle:

```text
bilgiler yeterli görünüyor, approved sayıyorum
```

diyemez.

Explicit approval olmadan:

```text
status: approved
```

atanamaz.

------

# 8. Approved Input Immutability

Bir input Approved olduktan sonra sessizce overwrite edilmemelidir.

Approved input:

```text
immutable logical version
```

olarak ele alınmalıdır.

Bir bilgi değişirse:

```text
eski approved sürüm korunur
+
yeni pending revision oluşturulur
+
yeniden explicit approval alınır
+
yeni approved version oluşur
```

Mevcut approved truth doğrudan düzenlenerek geçmiş run’ların referansı bozulmamalıdır.

------

# 9. Versioning

V0 için sade ve deterministic bir version standardı kullan.

Önerilen:

```text
v1
v2
v3
```

veya spec zaten başka format belirtiyorsa onu kullan.

Gereksiz semantic versioning sistemi kurma.

Her approved input version şu bilgileri taşımalıdır:

```text
input_id
project_slug
input_version
status
created_at
approved_at
supersedes
```

`supersedes` ilk version için boş olabilir.

------

# 10. Dosya Konumu ve Naming

Pending ve Approved kayıtların naming convention’ını açıkça tanımla.

Tercihen:

```text
inputs/pending/<project-slug>/
inputs/approved/<project-slug>/
```

altında versioned input kayıtları tutulabilir.

Ancak `planning/INPUTS_FOLDER_SPEC.md` farklı approved fiziksel yapı tanımlıyorsa spec’i uygula.

Amaç:

- aynı projenin input geçmişinin karışmaması,
- run’ın exact approved version’a referans verebilmesi,
- stale input kullanımının engellenmesi.

------

# 11. Canonical Input Document

Bir proje input’unun tek canonical representation’ı olmalıdır.

Gereksiz şekilde:

```text
project.json
project.yaml
PROJECT_INPUT.md
intake.md
manifest.md
```

gibi aynı truth’u farklı dosyalarda tekrar etme.

V0 için insan ve agent tarafından okunabilir, diff-friendly bir format tercih et.

Planning spec aksi bir şey söylemiyorsa Markdown tabanlı canonical input mantığı kullanılabilir.

Input document’ın adı ve formatı README’de tek standarda bağlanmalıdır.

------

# 12. Canonical Input Metadata

Her input kaydı minimum şu metadata’yı desteklemelidir:

```yaml
input_id:
project_name:
project_slug:
input_version:
status:
project_type:
project_state:
delivery_profile:
created_at:
updated_at:
approved_at:
supersedes:
source_type:
```

Status değerleri input lifecycle’ı temsil etmelidir.

Gereksiz status sistemi oluşturma.

V0 için minimum mantık:

```text
pending
approved
superseded
```

yeterli olabilir.

Ancak fiziksel klasör ve logical status birbirine karıştırılmamalıdır.

------

# 13. Project Intake Alanları

Canonical input document:

```text
engine/PROJECT_INTAKE.md
```

içindeki intake contract’ı temsil edebilmelidir.

Input schema’yı yeniden icat etme.

PROJECT_INTAKE’daki:

- required fields,
- conditional fields,
- optional fields,
- allowed values

korunmalıdır.

Input README, PROJECT_INTAKE sözleşmesini kopyalayan ikinci authority haline gelmemelidir.

------

# 14. Project Type

`project_type` yalnız approved canonical değerlerden biri olmalıdır.

Yeni project type oluşturma.

`saas` project type değildir.

SaaS package/context olabilir.

Input içinde:

```text
project_type: saas
```

gibi drift oluşturma.

Engine’de tanımlı canonical project type listesi kullanılmalıdır.

------

# 15. Delivery Profile

Input delivery profile şu canonical değerlerden biri olmalıdır:

```text
Foundation
Prototype
Implementation Ready
Production Ready
```

Bunların farklı casing veya alias’larını truth olarak kullanma.

Örneğin canonical input’ta:

```text
implementation-ready
prod
prototype-ready
```

gibi yeni değerler oluşturma.

Template metadata’daki machine-friendly representation ile input canonical truth’u karıştırma.

------

# 16. Project State

Yeni proje ve mevcut proje ayrımını canonical intake contract’a göre koru.

Özellikle Existing Project senaryosunda input:

```text
current state
desired state
```

bilgilerini birbirine karıştırmamalıdır.

Current implementation gerçekliği:

```text
current truth
```

Desired changes:

```text
target truth
```

olarak ayrı tutulmalıdır.

Agent desired state’i current state gibi yazamaz.

------

# 17. Source / Provenance

Input’a giren önemli bilgilerin kaynağı izlenebilir olmalıdır.

Ancak her cümle için ağır provenance sistemi kurma.

Minimum source türleri:

```text
user-provided
existing-project
provided-document
repository
explicit-assumption
```

gibi kategoriler olabilir.

Bunları yeni authority sistemi haline getirme.

Kaynak kayıtları özellikle şu durumlarda önemlidir:

- existing project,
- birden fazla belge,
- repository analizi,
- çelişkili bilgiler,
- user correction.

------

# 18. Raw Input ve Normalized Truth Ayrımı

Kullanıcı doğal dilde şöyle diyebilir:

```text
“React olsun, mobil de olabilir,
şimdilik demo ama sonra gerçek ürüne çevirebiliriz.”
```

Canonical input bunu daha deterministic hale getirebilir:

```text
project_type:
delivery_profile:
technical_preferences:
future_direction:
```

Ancak normalization sırasında yeni karar icat edilmemelidir.

Normalization:

```text
formatting / classification / organization
```

işidir.

Normalization:

```text
guessing / silent architecture decision
```

değildir.

------

# 19. Missing Information

Zorunlu input alanı eksikse:

```text
pending
```

olarak kalmalıdır.

Agent eksik required field’ı uydurarak Approved hale getiremez.

Eksik alan için:

- clarification iste,
- gerekiyorsa assumption rules uygula,
- sonucu kaydet.

Assumption izinli olsa bile kullanıcı onayı gerektiren alanlarda explicit approval kuralı korunmalıdır.

------

# 20. Assumption Ayrımı

Input truth ile assumption aynı şey değildir.

Approved input içerisinde assumption varsa bunun açıkça assumption olduğu anlaşılmalıdır.

Örneğin:

```text
Assumptions
```

bölümü tutulabilir.

Ancak assumption:

```text
user-provided fact
```

gibi gösterilemez.

`engine/ASSUMPTION_RULES.md` owner olarak kalmalıdır.

Run sırasında yeni assumption oluşursa:

```text
runs/<run-id>/ASSUMPTIONS.md
```

içinde operational olarak kaydedilir.

Input layer run-time assumption log’un yerine geçmez.

------

# 21. Conflict Ayrımı

Pending input sırasında çelişki varsa:

```text
unresolved conflict
```

açıkça görünmelidir.

Critical conflict çözülmeden Approved hale getirilemez.

Conflict resolution:

```text
engine/CONFLICT_RESOLUTION.md
```

tarafından yönetilir.

Input layer conflict resolution algoritması icat etmez.

Approved input’ta unresolved critical conflict kalmamalıdır.

------

# 22. Approved Input ve Run Snapshot Ayrımı

Çok önemli:

```text
inputs/approved/
```

ve:

```text
runs/active/<run-id>/INPUT_SNAPSHOT.md
```

aynı şey değildir.

Approved input:

```text
current reusable project truth
```

Run snapshot:

```text
o run başlarken kullanılan exact approved input version’ın immutable operational snapshot’ı
```

olmalıdır.

Run başladığında Approved input snapshot alınır.

Run sırasında Approved input değişse bile mevcut run snapshot değişmez.

Yeni Approved version kullanılacaksa yeni run gerekir.

------

# 23. Existing Project Inputs

Existing project input’ları gerekirse şu bilgi türlerini destekleyebilmelidir:

```text
current repository/project state
current stack
existing architecture
existing features
known problems
desired changes
constraints
preserve rules
```

Ancak bunları yeni zorunlu global schema olarak dayatma.

PROJECT_INTAKE contract’a ve selected context’e göre conditional ele al.

------

# 24. Greenfield Project Inputs

Yeni projelerde şu ayrımı koru:

```text
Known
Approved preference
Open question
Assumption
Out of scope
Future possibility
```

“Belki sonra ekleriz” ifadesini current requirement yapma.

“Şu an demo” ifadesini production requirement yapma.

------

# 25. Input Completeness

Approved input için minimum acceptance criteria tanımla.

Approved sayılabilmesi için en az:

```text
- PROJECT_INTAKE required fields tamam
- project_type valid
- project_state valid
- delivery_profile valid
- critical ambiguity yok
- critical conflict yok
- prohibited silent assumption yok
- explicit user approval var
- input_id mevcut
- input_version mevcut
```

olmalıdır.

------

# 26. Stale Approved Inputs

Aynı proje için yeni Approved version oluşursa önceki Approved version silinmemelidir.

Eski version:

```text
superseded
```

olarak işaretlenebilir.

Ancak geçmiş run’lar onu referanslamaya devam edebilmelidir.

“Latest input” kavramı kullanılacaksa:

```text
en yüksek version
```

ile aynı şey olduğunu varsayma.

Current active Approved version açık biçimde belirlenmelidir.

Ama bunun için gereksiz pointer sistemi kurma.

README’de sade bir deterministic kural yeterlidir.

------

# 27. Duplicate Projects

Aynı proje için yanlışlıkla iki farklı slug altında Approved input oluşmasını engelleyecek kural tanımla.

Project slug:

- lowercase,
- URL-safe,
- hyphen-separated,
- stable

olmalıdır.

Slug Approved olduktan sonra sessizce değiştirilemez.

Slug değişikliği gerekiyorsa bunun project identity değişikliği olup olmadığı açık değerlendirilmelidir.

------

# 28. Secret / Sensitive Runtime Data

Input records:

- API secrets,
- passwords,
- auth tokens,
- private keys

saklamamalıdır.

Bir integration kullanılacağı bilgisi saklanabilir.

Secret değerinin kendisi saklanmaz.

Örnek:

```text
Uses Stripe API
```

uygun olabilir.

```text
STRIPE_SECRET_KEY=sk_live_...
```

yasaktır.

------

# 29. File / Attachment References

Input harici dosya veya repository kaynağına dayanıyorsa:

- kaynak adı,
- source type,
- kısa açıklama,
- gerekiyorsa path/reference

tutulabilir.

Ancak:

```text
file:///C:/...
```

gibi local machine path’leri canonical input’a yazma.

Repository-relative veya portable reference kullan.

------

# 30. README.md

`inputs/README.md` bu klasörün authoritative kullanım rehberi olmalıdır.

Şunları açıkla:

- inputs katmanının amacı,
- pending / approved farkı,
- input lifecycle,
- approval requirement,
- canonical input representation,
- versioning,
- immutability,
- superseded versions,
- run snapshot ilişkisi,
- missing information davranışı,
- assumptions / conflicts ilişkisi,
- existing vs greenfield yaklaşımı,
- source/provenance,
- secret safety,
- naming rules,
- agent kullanım sırası.

README, PROJECT_INTAKE sözleşmesini tam olarak tekrar etmemelidir.

------

# 31. Fiziksel Başlangıç Artefaktları

Bu build sonunda `inputs/` klasörü yalnızca açıklama README’si ve boş klasörlerden ibaret kalmamalıdır.

Ancak gerçek proje verisi de oluşturulmamalıdır.

Pending ve Approved alanında reusable structural starter/template gerekiyorsa oluşturabilirsin.

Örneğin spec ile uyumlu ise:

```text
inputs/pending/README.md
inputs/approved/README.md
```

gibi rehber dosyaları kullanılabilir.

VEYA:

```text
_INPUT_TEMPLATE.md
```

benzeri tek structural starter düşünülebilir.

Ancak yeni bir `templates/` sistemi oluşturma.

Input starter, `templates/` katmanındaki document template sisteminin alternatifi değildir.

Minimum sufficient yaklaşımı kullan.

------

# 32. Real Project Leakage

Hiçbir gerçek proje/müşteri verisi kullanma.

Özellikle repo geçmişinde görülebilecek:

- gerçek şirket isimleri,
- gerçek proje isimleri,
- gerçek stack tercihleri,
- gerçek domainler,
- gerçek kullanıcı verileri

input örneğine taşınmamalıdır.

Örnek gerekiyorsa tamamen generic kullan:

```text
Example Project
example-project
```

veya placeholder kullan.

------

# 33. Model Independence

Input workflow:

- Claude,
- Gemini,
- GPT,
- Codex

özel olmamalıdır.

Her capable agent aynı input contract’ı anlayabilmelidir.

Private chain-of-thought isteme veya saklama.

Yalnızca:

- normalized facts,
- decisions,
- short rationale,
- assumptions,
- conflicts,
- approval state

saklanabilir.

------

# 34. Input → Package Selection İlişkisi

Input:

```text
project_type
project_state
delivery_profile
```

gibi package selection için gerekli truth’u sağlar.

Ancak:

```text
selected_package
```

input’un primary truth’u olmamalıdır.

Package selection engine tarafından:

```text
engine/PACKAGE_RULES.md
```

uyarınca yapılır ve run sırasında:

```text
PACKAGE_SELECTION.md
```

içinde kaydedilir.

Input layer package seçimini sahiplenmemelidir.

------

# 35. Input → Document Selection İlişkisi

Input doğrudan:

```text
generate PROJECT_BRAIN
generate DATA_MODEL
generate API_CONTRACTS
```

gibi final document seti belirlememelidir.

Document selection:

```text
project_type
+
delivery_profile
+
package
+
Document Catalog applicability
```

üzerinden engine tarafından çözülür.

------

# 36. Input → Technical Decisions

Kullanıcı açıkça stack seçmişse input truth olabilir.

Örnek:

```text
technical_preferences:
  frontend: React
```

Ancak user yalnız:

```text
modern frontend
```

dediyse agent bunu:

```text
React
```

olarak Approved input’a çeviremez.

Assumption Rules uygulanmalıdır.

------

# 37. Input Validation

Pending → Approved geçişinde en az şu kontroller yapılmalıdır:

```text
Structure validation
Required intake validation
Allowed value validation
Project identity validation
Project type validation
Delivery profile validation
Conflict validation
Assumption validation
Approval validation
Secret leakage validation
Portable reference validation
Version continuity validation
```

Bunlar input-level validation’dır.

Final output validation’ın yerine geçmez.

------

# 38. Transition Rules

Aşağıdaki transition’ları açıkça tanımla:

```text
New raw information
→ pending vN
Pending + clarification complete + explicit approval
→ approved vN
Approved vN + requested change
→ new pending vN+1
Pending vN+1 + approval
→ approved vN+1
→ approved vN becomes superseded
```

Approved file inplace overwrite edilmemelidir.

------

# 39. Concurrent Pending Revisions

V0’da aynı proje için birden fazla paralel pending revision açılmasını tercih etme.

Basit kural:

```text
Aynı project_slug için tek aktif pending revision.
```

Yeni revision başlatılacaksa mevcut pending revision:

- tamamlanmalı,
- iptal edilmeli,
- veya açıkça superseded edilmelidir.

Yeni karmaşık branching/version merge sistemi kurma.

------

# 40. Cancellation

Pending input kullanıcı tarafından terk edilirse bunun için ayrı top-level klasör kurma.

README’de V0 davranışını açıkça belirle.

Örneğin:

```text
abandoned pending record may remain as non-active historical record
```

veya planning spec ile uyumlu başka sade çözüm kullan.

Approved input hiçbir zaman cancellation nedeniyle silinmemelidir.

------

# 41. Delete Policy

Approved input history silinmemelidir.

Varsayılan davranış:

```text
do not delete approved versions
```

olmalıdır.

Pending records temizlenebilir mi, saklanır mı konusu README’de minimal ve net şekilde tanımlanmalıdır.

Gereksiz retention policy tasarlama.

------

# 42. Input IDs

`input_id` benzersiz ve stable olmalıdır.

Basit deterministic format tercih et.

Örneğin:

```text
INPUT-<PROJECT-SLUG>-V<NUMBER>
```

veya planning spec’te approved format varsa onu kullan.

Run Manifest / Input Snapshot bu ID’yi referanslayabilmelidir.

------

# 43. Timestamp Standardı

Tarih alanları portable olmalıdır.

ISO 8601 kullan.

Örnek:

```text
2026-08-08T01:30:00Z
```

Template/example içinde gerçek çalışma timestamp’i uydurma.

Placeholder veya generic example kullan.

------

# 44. Authoritative vs Descriptive Fields

Canonical input içinde iki bilgi sınıfını karıştırma.

Authoritative truth:

```text
project_name
project_type
delivery_profile
requirements
constraints
approved preferences
```

Descriptive/supporting context:

```text
background
notes
future ideas
references
```

Future ideas current scope’u override etmemelidir.

------

# 45. Input Approval Record

Approved input içinde approval’ın izlenebilir olması gerekir.

Minimum:

```text
approved: true
approved_at:
approval_source: user
```

veya eşdeğer deterministic yapı kullanılabilir.

Ancak gereksiz kimlik doğrulama sistemi kurma.

------

# 46. Input Starter Structure

Eğer canonical Markdown input starter oluşturulursa, yaklaşık şu ayrımı desteklemelidir:

```text
Metadata

Project Identity

Project Intent

Project Type / State / Delivery Profile

Users / Audience

Scope
- In Scope
- Out of Scope

Functional Requirements

Product Rules / Constraints

Technical Preferences / Constraints

Design Direction

Existing Project Context
[conditional]

Integrations / External Systems
[conditional]

Data / API Expectations
[conditional]

Deployment / Operations Expectations
[conditional]

Known Decisions

Open Questions

Assumptions

Conflicts

Sources / References

Approval
```

Ama:

- `PROJECT_INTAKE.md` ile çelişme,
- her bölümü her projede zorunlu yapma,
- output document ownership’lerini input içine taşımaya çalışma.

Input bilgi toplar.

Output document’lar bilgiyi authoritative ownership’e göre düzenler.

------

# 47. Yasaklar

Bu görev sırasında:

- `engine/` değiştirme.
- `packages/` değiştirme.
- `templates/` değiştirme.
- `planning/` değiştirme.
- `runs/` değiştirme.
- `outputs/` değiştirme.
- `logs/` değiştirme.
- `examples/` değiştirme.
- `archive/` değiştirme.
- kök README değiştirme.
- yeni project type oluşturma.
- yeni Delivery Profile oluşturma.
- yeni package oluşturma.
- new Document Catalog ID oluşturma.
- input layer içinde package selection yapma.
- input layer içinde document selection yapma.
- gerçek proje verisi oluşturma.
- secret/token/password yazma.
- local `file:///` reference kullanma.
- approved input’u mutable truth olarak tasarlama.
- pending input’u generation source olarak kabul etme.

Yalnızca:

```text
inputs/
```

klasöründe çalış.

------

# 48. Çalışma Sonu Audit

Build tamamlandıktan sonra tüm `inputs/` klasörünü çapraz kontrol et.

Şunları tek tek doğrula:

1. `pending/` ve `approved/` sınırı açık mı?
2. Pending generation source olarak kullanılabiliyor mu? Kullanılamamalı.
3. Approved input explicit user approval gerektiriyor mu?
4. Approved input immutable logical version mı?
5. Approved input inplace overwrite edilebiliyor mu? Edilmemeli.
6. Revision yeni pending version üzerinden mi ilerliyor?
7. `input_id` deterministic ve stable mı?
8. `input_version` mevcut mu?
9. `supersedes` ilişkisi destekleniyor mu?
10. `project_type` canonical engine values kullanıyor mu?
11. SaaS yanlışlıkla project type yapılmış mı?
12. Delivery Profile canonical değerleri korunuyor mu?
13. Existing current state / desired state ayrımı korunuyor mu?
14. Required intake field eksikken approval mümkün mü? Olmamalı.
15. Critical unresolved conflict ile approval mümkün mü? Olmamalı.
16. Silent assumption ile approval mümkün mü? Olmamalı.
17. Assumptions facts gibi gösteriliyor mu? Gösterilmemeli.
18. Approved input ile Run Input Snapshot ayrımı açık mı?
19. Run başladıktan sonra snapshot immutable mı?
20. Yeni approved version için yeni run gerekliliği açık mı?
21. Package selection input layer’a taşınmış mı? Taşınmamalı.
22. Document selection input layer’a taşınmış mı? Taşınmamalı.
23. Secret/credential örneği var mı? Olmamalı.
24. `file:///` veya machine-specific path var mı? Olmamalı.
25. Real project/company leakage var mı? Olmamalı.
26. Model-specific behavior var mı? Olmamalı.
27. Private chain-of-thought kaydı isteniyor mu? İstenmemeli.
28. README bütün lifecycle’ı anlaşılır şekilde anlatıyor mu?
29. Gereksiz bureaucracy veya schema duplication var mı?
30. Yalnızca `inputs/` değiştirildi mi?

------

# 49. Çalışma Sonu Raporu

Kısa ama somut rapor ver.

## Oluşturulan Input Yapısı

`inputs/` fiziksel yapısını göster.

## Pending Contract

Pending input’ın:

- amacı,
- lifecycle yeri,
- generation sınırı

özetle.

## Approved Contract

Approved input’ın:

- source-of-truth rolü,
- approval requirement,
- immutability,
- versioning

davranışını özetle.

## Canonical Input Representation

Canonical dosya biçimini ve temel bölümlerini açıkla.

## Versioning

Şunları belirt:

- input_id
- input_version
- supersedes
- current active approved version mantığı

## Run İlişkisi

Approved input ile:

```text
INPUT_SNAPSHOT.md
```

arasındaki farkı açıkla.

## Assumption / Conflict İlişkisi

Engine authority sınırlarının korunduğunu doğrula.

## Security / Portability

Şunları doğrula:

- secret yok,
- credential yok,
- local path yok,
- project leakage yok.

## Değiştirilen Dosyalar

Yalnızca `inputs/` altında değişiklik yapıldığını doğrula.

## Açık Noktalar

Yalnız gerçekten `runs/` veya sonraki folder buildlerine bırakılması gereken maddeleri yaz.

## Sonuç

Şunlardan biriyle bitir:

```text
INPUTS_BUILD_COMPLETE
```

veya:

```text
INPUTS_BUILD_BLOCKED
```

Blocked ise yalnızca gerçek engeli açıkla.