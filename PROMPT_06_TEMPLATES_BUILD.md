# PROMPT_06_TEMPLATES_BUILD

Product Engine’in `templates/` build aşamasıdır.

`engine/` ve `packages/` klasörleri Approved durumdadır.

Bu görevde `templates/` klasörünü gerçek, kullanılabilir ve model-bağımsız template sözleşmeleriyle doldur.

Amaç boş Markdown iskeletleri oluşturmak değildir.

Her template:

- ne üretileceğini,
- hangi bilgiyi nereden alacağını,
- hangi bölümlerin zorunlu veya koşullu olduğunu,
- eksik bilgiyle nasıl davranacağını,
- farklı delivery profile seviyelerinde nasıl ölçekleneceğini,
- hangi bilgiyi içermemesi gerektiğini,
- nihai output’un nasıl görünmesi gerektiğini

bir ajanın doğrudan uygulayabileceği kadar açık tanımlamalıdır.

Yeni Product Engine mimarisi tasarlama.

Approved engine/package sözleşmelerini değiştirme veya override etme.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `planning/README.md`
3. `planning/BUILD_STATUS.md`
4. `planning/TEMPLATES_FOLDER_SPEC.md`
5. `planning/ENGINE_FOLDER_SPEC.md`
6. `planning/PACKAGES_FOLDER_SPEC.md`
7. `planning/RUNS_FOLDER_SPEC.md`

Ardından Approved engine sözleşmelerinden:

8. `engine/README.md`
9. `engine/PROJECT_INTAKE.md`
10. `engine/DOCUMENT_CATALOG.md`
11. `engine/INFORMATION_MAP.md`
12. `engine/PACKAGE_RULES.md`
13. `engine/GENERATION_PIPELINE.md`
14. `engine/VALIDATION_RULES.md`
15. `engine/ASSUMPTION_RULES.md`
16. `engine/CONFLICT_RESOLUTION.md`
17. `engine/OUTPUT_STRUCTURE.md`
18. `engine/RUN_PROTOCOL.md`

Ardından:

19. `packages/README.md`
20. `packages/DEMO_FRONTEND_PACKAGE.md`
21. `packages/CORPORATE_WEBSITE_PACKAGE.md`
22. `packages/SAAS_PACKAGE.md`
23. `packages/EXISTING_PROJECT_PACKAGE.md`
24. `packages/API_SERVICE_PACKAGE.md`

Son olarak mevcut `ref/` belgelerini yalnızca ilgili template için kalite/yapı referansı gerektiğinde incele.

`ref/` authoritative project truth değildir.

---

# 2. Temel Sorumluluk Ayrımı

Aşağıdaki ownership sınırlarını koru:

```text
engine/DOCUMENT_CATALOG.md
→ hangi document kimliklerinin var olduğunu belirler.

engine/INFORMATION_MAP.md
→ hangi bilgi türünün hangi document'a ait olduğunu belirler.

packages/
→ hangi document'ın hangi proje bağlamında üretileceğini belirler.

templates/
→ seçilen document'ın nasıl üretileceğini belirler.

engine/ASSUMPTION_RULES.md
→ eksik bilgiyle nasıl davranılacağını belirler.

engine/VALIDATION_RULES.md
→ genel validation davranışını belirler.

engine/RUN_PROTOCOL.md
→ run yaşam döngüsünü belirler.

outputs/
→ final belgelerin nerede tutulacağını belirler.
```

Template bu kaynakların hiçbirini override edemez.

---

# 3. Hedef Klasör Yapısı

Başlangıç hedefi:

```text
templates/
├── README.md
│
├── ai/
│   ├── PROJECT_BRAIN_TEMPLATE.md
│   ├── PRODUCT_RULES_TEMPLATE.md
│   ├── TECH_CONTEXT_TEMPLATE.md
│   ├── PRODUCT_STRATEGY_TEMPLATE.md
│   ├── CURRENT_STATUS_TEMPLATE.md
│   ├── NEXT_TASKS_TEMPLATE.md
│   ├── DECISIONS_TEMPLATE.md
│   └── AGENT_INSTRUCTIONS_TEMPLATE.md
│
├── project/
│   ├── README_TEMPLATE.md
│   ├── PROJECT_PLAN_TEMPLATE.md
│   ├── DATA_MODEL_TEMPLATE.md
│   ├── API_CONTRACTS_TEMPLATE.md
│   ├── DEPLOYMENT_TEMPLATE.md
│   ├── OPERATIONS_TEMPLATE.md
│   ├── TEST_STRATEGY_TEMPLATE.md
│   └── ENV_EXAMPLE_TEMPLATE.md
│
├── design/
│   ├── DESIGN_RULES_TEMPLATE.md
│   ├── DESIGN_SYSTEM_TEMPLATE.md
│   ├── DESIGN_PACKAGE_TEMPLATE.md
│   ├── GLOBAL_SHELL_TEMPLATE.md
│   ├── PAGE_SPEC_TEMPLATE.md
│   ├── COMPONENT_SPEC_TEMPLATE.md
│   └── SYSTEM_STATES_TEMPLATE.md
│
├── waves/
│   ├── WAVE_MAP_TEMPLATE.md
│   ├── WAVE_PLAN_TEMPLATE.md
│   └── STANDARD_WAVE_TEMPLATE.md
│
├── prompts/
│   ├── START_PROJECT_PROMPT.md
│   ├── START_WAVE_PROMPT.md
│   ├── CONTINUE_WAVE_PROMPT.md
│   ├── UPDATE_DOCS_PROMPT.md
│   └── VALIDATE_PROJECT_PROMPT.md
│
└── runs/
    ├── RUN_MANIFEST_TEMPLATE.md
    ├── INPUT_SNAPSHOT_TEMPLATE.md
    ├── PACKAGE_SELECTION_TEMPLATE.md
    ├── SOURCE_REGISTER_TEMPLATE.md
    ├── ASSUMPTIONS_TEMPLATE.md
    ├── CONFLICTS_TEMPLATE.md
    ├── DECISIONS_TEMPLATE.md
    ├── RUN_LOG_TEMPLATE.md
    ├── PROGRESS_TEMPLATE.md
    ├── VALIDATION_REPORT_TEMPLATE.md
    └── COMPLETION_REPORT_TEMPLATE.md
```

`templates/runs/` gerçek run kayıtlarının bulunduğu yer değildir.

Run template authority buradadır.

Gerçek run kayıtları daha sonra `runs/` klasörü tarafından oluşturulur.

---

# 4. Document Template ve Structural Template Ayrımı

Her template aynı tür değildir.

## Document Templates

`engine/DOCUMENT_CATALOG.md` içindeki gerçek output document’larına karşılık gelir.

Örnek:

```text
PROJECT_BRAIN_TEMPLATE.md
→ PROJECT_BRAIN.md

PRODUCT_RULES_TEMPLATE.md
→ PRODUCT_RULES.md

API_CONTRACTS_TEMPLATE.md
→ API_CONTRACTS.md
```

Bu template’lerde gerçek `document_id` kullanılmalıdır.

Yeni document ID oluşturulamaz.

---

## Structural Templates

Bazı template’ler bağımsız final document değil, başka belgelerde kullanılabilecek yapısal sözleşmelerdir.

Örnek:

```text
DESIGN_SYSTEM_TEMPLATE.md
DESIGN_PACKAGE_TEMPLATE.md
GLOBAL_SHELL_TEMPLATE.md
PAGE_SPEC_TEMPLATE.md
COMPONENT_SPEC_TEMPLATE.md
SYSTEM_STATES_TEMPLATE.md
STANDARD_WAVE_TEMPLATE.md
```

Bunlara yeni Document Catalog ID’si icat etme.

Metadata içinde:

```text
document_id: not_applicable
```

veya tek bir ortak standart belirleyerek eşdeğer açık değer kullan.

Bu template’leri bağımsız catalog document’ı gibi gösterme.

---

## Prompt Templates

`templates/prompts/` içindeki dosyalar project document değildir.

Yeni document ID oluşturma.

Bunlar agent-independent çalışma prompt iskeletleridir.

Claude, Gemini, GPT, Codex gibi model isimlerine özel davranış yazma.

---

## Run Templates

`templates/runs/` içindeki belgeler run operasyon kayıtlarının iskeletidir.

`RUN_MANIFEST_TEMPLATE.md` katalogdaki `RUN-MANIFEST` document ID’siyle eşleşir.

Diğer run template’leri operational templates’tir.

Bunlar için yeni project document ID oluşturma.

---

# 5. Her Template İçin Ortak Metadata Standardı

Bütün gerçek template dosyalarında tutarlı metadata biçimi kullan.

Önerilen format:

```yaml
template_id:
template_name:
document_id:
version: 1.0.0
status: active
template_type:
category:
supported_packages:
supported_delivery_profiles:
required_inputs:
conditional_inputs:
dependencies:
output_filename:
```

`template_type` şu değerlerden uygun olanını kullanmalıdır:

```text
document
structural
prompt
operational
```

Document template’lerde:

- `document_id`
- `output_filename`
- applicable profile bilgileri

`DOCUMENT_CATALOG.md` ile birebir uyumlu olmalıdır.

Catalog’da olmayan ID üretme.

---

# 6. Template Ortak Yapısı

Document template’ler mümkün olduğunca şu sözleşmeyi kullansın:

```md
# TEMPLATE_NAME

## Template Metadata

## Amaç

## Kullanım Koşulları

## Girdi Kaynakları

## Zorunlu Bölümler

## Koşullu Bölümler

## İçerik Üretim Kuralları

## Placeholder Tanımları

## Kapsam Dışı

## Diğer Dokümanlarla İlişki

## Delivery Profile Davranışı

## Validation Beklentileri

---

# OUTPUT DOCUMENT START

... nihai document iskeleti ...

# OUTPUT DOCUMENT END
```

Template metadata ve üretim açıklamaları final output’a taşınmamalıdır.

`OUTPUT DOCUMENT START/END` arasındaki bölüm üretilecek gerçek document’ın iskeletidir.

---

# 7. Placeholder Standardı

Ana placeholder biçimi:

```text
{{PLACEHOLDER_NAME}}
```

Placeholder’lar:

- İngilizce,
- büyük harfli,
- boşluksuz,
- underscore ile ayrılmış,
- anlamı açık

olmalıdır.

Örnek:

```text
{{PROJECT_NAME}}
{{PROJECT_PURPOSE}}
{{TARGET_USERS_LIST}}
{{TECH_STACK}}
{{CORE_FLOWS_LIST}}
```

Aynı kavram için template’ler arasında farklı placeholder isimleri üretme.

Örneğin aynı bilgi için:

```text
{{TARGET_USER}}
{{USER_AUDIENCE}}
{{PRIMARY_PERSONA}}
```

gibi üç ayrı standart oluşturma.

Bir ortak placeholder seç.

---

# 8. Placeholder Semantiği

Template’ler gerektiğinde şu türleri destekleyebilir:

```text
Scalar
List
Structured Block
Conditional Block
Reference
```

Ancak template engine syntax icat etme.

Koşullu bölüm gerektiğinde insan ve agent tarafından okunabilir işaretleme kullan.

Örnek:

```text
[CONDITIONAL: include only if project has authentication]
```

veya spec ile uyumlu tek bir ortak format belirle.

Template’ler programming language template engine’ine bağımlı olmamalıdır.

---

# 9. Eksik Bilgi Davranışı

Template hiçbir zaman eksik bilgiyi sessizce uydurmamalıdır.

Eksik bilgi davranışı:

`engine/ASSUMPTION_RULES.md`

ile uyumlu olmalıdır.

Template içerisinde:

```text
{{UNKNOWN}}
```

gibi final output’a bırakılacak anlamsız placeholder üretme.

Üretim sırasında bilgi:

- mevcut kaynaklardan alınmalı,
- izin verilen assumption olarak kaydedilmeli,
- clarification gerektiriyorsa işaretlenmeli,
- üretilemeyecekse ilgili conditional bölüm çıkarılmalı

şeklinde ele alınmalıdır.

Final output’ta unresolved template placeholder kalmamalıdır.

---

# 10. Information Ownership

Her document template, yalnızca `engine/INFORMATION_MAP.md` tarafından kendisine ait olduğu belirtilen bilgileri primary content olarak üretmelidir.

Örnek:

```text
PRODUCT_RULES.md
→ product behavior / rules

TECH_CONTEXT.md
→ stack / architecture / technical constraints

DESIGN_RULES.md
→ visual language / component / UX rules

DATA_MODEL.md
→ entities / relationships / data flows

API_CONTRACTS.md
→ endpoints / request-response / auth surface

CURRENT_STATUS.md
→ current state / blockers / immediate priorities
```

Başka document’ın primary ownership alanını kopyalama.

Cross-reference yapılabilir.

Ownership taşınamaz.

---

# 11. Delivery Profile Davranışı

Template tek bir delivery profile’a özel sert belge olmamalıdır.

Catalog tarafından desteklenen profiller arasında depth ölçekleyebilmelidir.

Genel yaklaşım:

```text
Foundation
→ yüksek seviye minimum bağlam

Prototype
→ hızlı uygulanabilir / sunulabilir yeterlilik

Implementation Ready
→ ajanın doğrudan implementasyona başlayabileceği ayrıntı

Production Ready
→ gerçek deployment, operation, test ve sürdürülebilirlik için gereken ayrıntı
```

Ancak her document yalnızca `DOCUMENT_CATALOG.md` içindeki applicable profile’larda kullanılmalıdır.

Template catalog applicability’yi genişletemez.

---

# 12. AI Template’leri

## PROJECT_BRAIN_TEMPLATE.md

Projenin ana bağlam merkezi.

Şunları desteklemelidir:

- proje kimliği ve amacı,
- problem / değer,
- hedef kullanıcı,
- ana kapsam,
- sistem özeti,
- kritik karar özeti,
- aktif faz/durum özeti,
- önemli doküman referansları.

Diğer belgelerin tüm ayrıntılarını kopyalamamalıdır.

---

## PRODUCT_RULES_TEMPLATE.md

Primary owner:

- product rules,
- behavior constraints,
- scope rules,
- UX behavioral rules.

Teknik implementation detaylarını sahiplenmemelidir.

---

## TECH_CONTEXT_TEMPLATE.md

Primary owner:

- technical stack,
- architecture decisions,
- system components,
- integrations,
- technical constraints.

Product behavior veya design system owner’ı olmamalıdır.

---

## PRODUCT_STRATEGY_TEMPLATE.md

Conditional document.

Şunları destekleyebilir:

- positioning,
- target market,
- competitive context,
- monetization,
- growth direction.

Gerekmediğinde üretilmemelidir.

---

## CURRENT_STATUS_TEMPLATE.md

Current truth document.

Şunları ayırmalıdır:

```text
Current state
Completed
In progress
Blocked
Known issues
Immediate priorities
```

Desired state ile current state’i karıştırmamalıdır.

---

## NEXT_TASKS_TEMPLATE.md

Somut, sıralı, bağımlılığı görülebilir görevler üretmelidir.

Vague backlog’a dönüşmemelidir.

---

## DECISIONS_TEMPLATE.md

Standart decision entry desteklemelidir:

```text
Decision
Date
Context
Decision
Reason
Alternatives
Consequences
Status
```

Private chain-of-thought istememeli veya saklamamalıdır.

Yalnızca kısa karar gerekçesi tutulmalıdır.

---

## AGENT_INSTRUCTIONS_TEMPLATE.md

Projeye özel agent çalışma kuralları.

Model bağımsız olmalıdır.

Claude/Gemini/GPT/Codex özel davranışı yazma.

---

# 13. Project Template’leri

## README_TEMPLATE.md

Yeni agent veya geliştiricinin başlangıç noktasıdır.

Diğer belgeleri tekrar etmek yerine yönlendirmelidir.

---

## PROJECT_PLAN_TEMPLATE.md

Şunları desteklemelidir:

- phases,
- milestones,
- dependencies,
- deliverables,
- acceptance conditions.

Wave system kullanılıyorsa onun yerine geçmemelidir.

---

## DATA_MODEL_TEMPLATE.md

En az:

- entities,
- fields,
- relationships,
- constraints,
- indexes gerektiğinde,
- data flow,
- persistence decisions

için yapısal format sağlamalıdır.

---

## API_CONTRACTS_TEMPLATE.md

Tekrarlanabilir endpoint sözleşmesi tanımla.

Örneğin:

```text
Endpoint
Purpose
Method
Path
Authentication
Request
Validation
Response
Errors
Side Effects
```

Belirli REST/GraphQL stack’ini zorunlu yapma.

---

## DEPLOYMENT_TEMPLATE.md

Production deployment gerçeğini belgelemelidir.

Kullanıcı tarafından doğrulanmamış hosting/domain/environment değerlerini uydurmamalıdır.

---

## OPERATIONS_TEMPLATE.md

Production operation:

- monitoring,
- alerting,
- backup,
- incident response,
- maintenance

gibi alanları desteklemelidir.

Gereksiz enterprise bureaucracy oluşturma.

---

## TEST_STRATEGY_TEMPLATE.md

Test yaklaşımını tanımlar.

Belirli test framework’ünü varsayılan gerçek gibi dayatma.

---

## ENV_EXAMPLE_TEMPLATE.md

Bu bir project configuration structural template olabilir.

Gerçek secret içermemelidir.

Örnek environment variable isimleri, açıklamaları ve required/optional durumlarını tanımlayabilir.

Secret değer üretme.

---

# 14. Design Template’leri

`DESIGN_RULES_TEMPLATE.md` design document’ın primary template’idir.

Yalnızca:

```text
templates/design/DESIGN_RULES_TEMPLATE.md
```

konumunda bulunmalıdır.

`templates/ai/` altında kopyasını oluşturma.

Diğer design template’leri structural template’tir:

```text
DESIGN_SYSTEM_TEMPLATE.md
DESIGN_PACKAGE_TEMPLATE.md
GLOBAL_SHELL_TEMPLATE.md
PAGE_SPEC_TEMPLATE.md
COMPONENT_SPEC_TEMPLATE.md
SYSTEM_STATES_TEMPLATE.md
```

Bunlar gerektiğinde DESIGN_RULES veya design planning üretimini destekleyen tekrar kullanılabilir yapılar olmalıdır.

Yeni Document Catalog ID üretme.

Özellikle:

### PAGE_SPEC_TEMPLATE

En az:

- page purpose,
- layout,
- sections,
- states,
- actions,
- responsive behavior,
- dependencies

gibi alanları destekleyebilir.

### COMPONENT_SPEC_TEMPLATE

En az:

- component purpose,
- inputs/props,
- variants,
- states,
- interactions,
- accessibility,
- responsive behavior

gibi alanları destekleyebilir.

### SYSTEM_STATES_TEMPLATE

Loading / empty / error / success / disabled gibi ortak durumları tanımlayabilecek yapıya sahip olmalıdır.

---

# 15. Wave Template’leri

## WAVE_MAP_TEMPLATE.md

Project delivery waves için üst seviye harita.

Her wave için en az:

```text
Wave ID
Name
Goal
Scope
Dependencies
Primary Deliverables
Exit Criteria
Status
```

gibi yapı desteklenebilir.

---

## WAVE_PLAN_TEMPLATE.md

Bir wave’in ayrıntılı implementation planıdır.

En az:

- goal,
- scope,
- dependencies,
- tasks,
- acceptance criteria,
- validation,
- out-of-scope,
- completion conditions

desteklemelidir.

---

## STANDARD_WAVE_TEMPLATE.md

Structural template’tir.

Yeni document ID oluşturma.

WAVE_MAP / WAVE_PLAN içerisindeki tekrar eden wave yapısını standartlaştırır.

---

# 16. Prompt Template’leri

Aşağıdaki 5 prompt template’i oluştur:

```text
START_PROJECT_PROMPT.md
START_WAVE_PROMPT.md
CONTINUE_WAVE_PROMPT.md
UPDATE_DOCS_PROMPT.md
VALIDATE_PROJECT_PROMPT.md
```

Prompt’lar:

- kısa,
- repository-first,
- authoritative docs okumaya zorlayan,
- scope boundaries belirten,
- gerçekten görevi uygulatmaya yönelik,
- model bağımsız

olmalıdır.

Prompt template’in kendisi devasa operational manual olmamalıdır.

Uzun görev tanımları repository dosyalarında kalabilir.

Prompt’un görevi doğru sözleşmeleri okutup uygulamayı başlatmaktır.

Private chain-of-thought isteme.

---

# 17. Run Template’leri

`templates/runs/` şu run kayıtlarının authoritative template alanıdır:

```text
RUN_MANIFEST.md
INPUT_SNAPSHOT.md
PACKAGE_SELECTION.md
SOURCE_REGISTER.md
ASSUMPTIONS.md
CONFLICTS.md
DECISIONS.md
RUN_LOG.md
PROGRESS.md
VALIDATION_REPORT.md
COMPLETION_REPORT.md
```

Bunların template karşılıklarını oluştur.

---

## RUN_MANIFEST_TEMPLATE.md

En az:

```text
run_id
project_slug
engine_version
run_status
created_at
updated_at
project_type
project_state
delivery_profile
selected_package
input_snapshot
current_stage
output_target
```

gibi run identity/state bilgilerini desteklemelidir.

Authoritative lifecycle:

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

`Cancelled` ile `Failed` aynı status değildir.

---

## INPUT_SNAPSHOT_TEMPLATE.md

Run başladığı anda kullanılan approved project truth snapshot’ını kaydeder.

Güncel `inputs/` ana verisinin owner’ı değildir.

---

## PACKAGE_SELECTION_TEMPLATE.md

Seçilen:

- base package,
- extensions,
- delivery profile,
- seçim gerekçesi,
- reduction/extension kararları

kaydedilir.

Package selection logic’i yeniden yazılmaz.

---

## SOURCE_REGISTER_TEMPLATE.md

Run sırasında kullanılan:

- approved input,
- templates,
- packages,
- refs,
- existing project resources

ve sürüm/referans bilgilerini kaydetmeye uygun olmalıdır.

---

## ASSUMPTIONS_TEMPLATE.md

`engine/ASSUMPTION_RULES.md` ile uyumlu assumption kayıtları.

Her kayıt:

```text
ID
Context
Assumption
Reason
Impact
Validation Needed
Status
```

gibi denetlenebilir yapıya sahip olabilir.

---

## CONFLICTS_TEMPLATE.md

Çelişkileri:

- kaynaklar,
- çatışan bilgi,
- seçilen resolution,
- authority,
- sonuç

olarak kaydetmelidir.

---

## DECISIONS_TEMPLATE.md

Run’a özel operational karar kayıtlarıdır.

Project-level `DECISIONS.md` ile karıştırma.

---

## RUN_LOG_TEMPLATE.md

Kronolojik çalışma izi.

`RUN_MANIFEST.md` yerine geçmez.

Aşırı sohbet/transcript saklama.

Kısa operasyon kaydı tut.

---

## PROGRESS_TEMPLATE.md

Run’ın aşama ve document bazlı ilerlemesini görünür yapmalıdır.

---

## VALIDATION_REPORT_TEMPLATE.md

Validation sonucunu:

```text
Check
Result
Severity
Evidence
Action
Resolution
```

gibi denetlenebilir yapıyla kaydetmelidir.

---

## COMPLETION_REPORT_TEMPLATE.md

Run sonunda:

- ne üretildi,
- validation sonucu,
- output konumu,
- unresolved items,
- final status

kaydedilmelidir.

Completed olmayan run başarıyla tamamlanmış gibi gösterilmemelidir.

---

# 18. README.md

`templates/README.md` template sisteminin giriş noktasıdır.

Kısa ve yönlendirici olmalıdır.

Şunları açıkla:

- template nedir,
- template ne değildir,
- template kategorileri,
- document vs structural vs prompt vs operational template ayrımı,
- metadata standardı,
- placeholder standardı,
- information ownership,
- package ilişkisi,
- ref ilişkisi,
- delivery profile ölçekleme,
- run template authority,
- önerilen okuma sırası.

Bütün template içeriklerini README’ye kopyalama.

---

# 19. Ref Kullanımı

`ref/`:

- kaliteli yapı örneği,
- ayrıntı seviyesi,
- iyi bölümleme

için kullanılabilir.

Ancak:

- proje adı,
- şirket adı,
- teknik karar,
- kullanıcı içeriği,
- tasarım tercihi,
- gerçek endpoint,
- gerçek schema

başka projeden template’e taşınmamalıdır.

Template tamamen project-independent kalmalıdır.

---

# 20. Template Validation

Her template için kontrol et:

1. Metadata var mı?
2. Template type doğru mu?
3. Document template ise document ID catalog’da mevcut mu?
4. Output filename catalog ile aynı mı?
5. Applicable profile’lar catalog ile uyumlu mu?
6. Information ownership ihlali var mı?
7. Placeholder isimleri standart mı?
8. Project-specific bilgi sızmış mı?
9. Ref içeriği kopyalanmış mı?
10. Silent assumption teşvik ediliyor mu?
11. Template instructions final output’a sızıyor mu?
12. Final output iskeleti gerçekten kullanılabilir mi?
13. Conditional bölümler açık mı?
14. Gereksiz bürokrasi var mı?
15. Model-specific davranış var mı?
16. Private chain-of-thought talebi var mı? Olmamalı.
17. Final output’ta unresolved placeholder kalmasını teşvik ediyor mu? Etmemeli.

---

# 21. Kritik Catalog Uyumu

Aşağıdaki document template ilişkilerini özellikle doğrula:

```text
PROJECT-BRAIN
→ templates/ai/PROJECT_BRAIN_TEMPLATE.md

PRODUCT-RULES
→ templates/ai/PRODUCT_RULES_TEMPLATE.md

TECH-CTX
→ templates/ai/TECH_CONTEXT_TEMPLATE.md

PROD-STRAT
→ templates/ai/PRODUCT_STRATEGY_TEMPLATE.md

DESIGN
→ templates/design/DESIGN_RULES_TEMPLATE.md

STATUS
→ templates/ai/CURRENT_STATUS_TEMPLATE.md

TASKS
→ templates/ai/NEXT_TASKS_TEMPLATE.md

DECISIONS
→ templates/ai/DECISIONS_TEMPLATE.md

AGENT-INST
→ templates/ai/AGENT_INSTRUCTIONS_TEMPLATE.md

README-DOC
→ templates/project/README_TEMPLATE.md

PROJ-PLAN
→ templates/project/PROJECT_PLAN_TEMPLATE.md

DATA
→ templates/project/DATA_MODEL_TEMPLATE.md

API
→ templates/project/API_CONTRACTS_TEMPLATE.md

DEPLOY
→ templates/project/DEPLOYMENT_TEMPLATE.md

OPS
→ templates/project/OPERATIONS_TEMPLATE.md

TEST
→ templates/project/TEST_STRATEGY_TEMPLATE.md

WAVE-MAP
→ templates/waves/WAVE_MAP_TEMPLATE.md

WAVE-PLAN
→ templates/waves/WAVE_PLAN_TEMPLATE.md

RUN-MANIFEST
→ templates/runs/RUN_MANIFEST_TEMPLATE.md
```

Bu eşlemeleri değiştirme.

---

# 22. Yasaklar

Bu görev sırasında:

- `engine/` değiştirme.
- `packages/` değiştirme.
- `planning/` değiştirme.
- `inputs/` değiştirme.
- `runs/` gerçek kayıt oluşturma.
- `outputs/` değiştirme.
- `logs/` değiştirme.
- `examples/` değiştirme.
- `archive/` değiştirme.
- kök README’yi değiştirme.
- yeni project type oluşturma.
- yeni package oluşturma.
- yeni Document Catalog ID oluşturma.
- `DESIGN_RULES_TEMPLATE.md` kopyası oluşturma.
- ref belgesini template olarak kopyalama.
- gerçek proje/müşteri verisi kullanma.
- model-specific template üretme.
- secret/token/API key yazma.
- template metadata’yı final output iskeletine dahil etme.

Yalnızca `templates/` klasöründe çalış.

---

# 23. Çalışma Sonu Audit

Build tamamlanınca `templates/` genelinde çapraz kontrol yap.

Özellikle doğrula:

1. Planning’de onaylı klasör yapısı korunuyor mu?
2. Document Catalog’daki bütün template yolları fiziksel olarak mevcut mu?
3. Catalog’da tanımlı olmayan project document ID üretildi mi?
4. Structural template’lere yanlış document ID verildi mi?
5. Run operational template seti eksiksiz mi?
6. RUN_MANIFEST template’i Run Protocol ile uyumlu mu?
7. Cancelled / Failed ayrımı korunuyor mu?
8. Information ownership ihlali var mı?
9. DESIGN_RULES yalnız `templates/design/` altında mı?
10. Placeholder sistemi tutarlı mı?
11. Template metadata standardı tüm dosyalarda tutarlı mı?
12. Delivery Profile davranışları Catalog ile uyumlu mu?
13. Prompt template’leri model-independent mı?
14. Prompt template’leri gereksiz uzun manual’lara dönüşmüş mü?
15. Template instructions ile output document açık ayrılmış mı?
16. Ref/project leakage var mı?
17. Local `file:///` path var mı? Olmamalı.
18. Secret veya gerçek credential örneği var mı? Olmamalı.
19. Yalnızca `templates/` değiştirildi mi?

---

# 24. Çalışma Sonu Raporu

Kısa ama somut rapor ver.

## Oluşturulan Template Grupları

Şunları ayrı özetle:

- AI Templates
- Project Templates
- Design Templates
- Wave Templates
- Prompt Templates
- Run Templates

## Document Catalog Coverage

Catalog’daki bütün `Template Location` yollarının karşılığının oluşturulduğunu doğrula.

Eksik varsa açıkça belirt.

## Structural Templates

Catalog document ID’si olmayan structural template’leri ve neden structural olduklarını belirt.

## Run Templates

Run Protocol ve Runs Folder Spec ile eşleşen operational template setini özetle.

## Korunan Sınırlar

Şunları doğrula:

- Document Catalog identity owner kaldı.
- Information Map ownership owner kaldı.
- Packages selection/scope owner kaldı.
- Assumption Rules eksik bilgi owner’ı kaldı.
- Run Protocol lifecycle owner kaldı.
- Output Structure final placement owner kaldı.

## Açık Noktalar

Yalnızca gerçekten sonraki klasör buildlerine bırakılması gereken konuları yaz.

## Değiştirilen Dosyalar

Yalnızca `templates/` altında değişiklik yapıldığını doğrula.

## Sonuç

Şunlardan biriyle bitir:

```text
TEMPLATES_BUILD_COMPLETE
```

veya:

```text
TEMPLATES_BUILD_BLOCKED
```

Blocked ise yalnızca gerçek engeli açıkla.