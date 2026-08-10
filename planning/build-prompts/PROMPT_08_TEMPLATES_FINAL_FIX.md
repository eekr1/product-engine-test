~~~md
# PROMPT_08_TEMPLATES_FINAL_FIX

Product Engine `templates/` klasörü için final consistency fix turudur.

Amaç mevcut template mimarisini yeniden tasarlamak değildir.

Yalnızca templates audit sırasında tespit edilen aşağıdaki driftleri düzelt:

1. `supported_packages` ile `project_type` kavramlarının karışması
2. `RUN_MANIFEST_TEMPLATE.md` ile Approved Run Protocol uyumsuzlukları
3. Validation vocabulary ve working-output/final-output sırası
4. `START_PROJECT_PROMPT.md` içinde pipeline bypass edilmesi
5. `file:///` link sızıntıları
6. `ENV_EXAMPLE_TEMPLATE.md` içindeki stack-specific varsayımlar
7. Run template metadata `category` standardı

Approved engine ve packages authoritative kaynaklardır.

Bu görevde yalnızca `templates/` klasörü değiştirilebilir.

---

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `engine/DOCUMENT_CATALOG.md`
3. `engine/INFORMATION_MAP.md`
4. `engine/PACKAGE_RULES.md`
5. `engine/GENERATION_PIPELINE.md`
6. `engine/RUN_PROTOCOL.md`
7. `engine/VALIDATION_RULES.md`
8. `engine/OUTPUT_STRUCTURE.md`
9. `engine/ASSUMPTION_RULES.md`
10. `planning/TEMPLATES_FOLDER_SPEC.md`
11. `planning/RUNS_FOLDER_SPEC.md`

Ardından:

12. `packages/README.md`
13. `packages/DEMO_FRONTEND_PACKAGE.md`
14. `packages/CORPORATE_WEBSITE_PACKAGE.md`
15. `packages/SAAS_PACKAGE.md`
16. `packages/EXISTING_PROJECT_PACKAGE.md`
17. `packages/API_SERVICE_PACKAGE.md`

Son olarak `templates/` altındaki tüm mevcut template dosyalarını tara.

Engine dependency semantics fixi artık Approved durumdadır.

Dependency ilişkileri active `project_type + delivery_profile` applicability’ye göre çözülür.

---

# 2. Mevcut Template Mimarisini Koru

Şunları değiştirme:

- klasör yapısı,
- template dosya adları,
- mevcut Document Catalog ID eşlemeleri,
- structural / document / prompt / operational ayrımı,
- placeholder sistemi,
- output skeleton sistemi,
- model bağımsızlığı,
- run template seti,
- design structural template seti,
- wave template seti.

Bu görev cleanup + consistency fixidir.

---

# 3. `supported_packages` / `project_type` Ayrımını Düzelt

Bazı template metadata’larında `supported_packages` alanına yanlışlıkla project type değerleri yazılmıştır.

Örnek hatalı değerler:

```text
web-app
mobile-app
landing-page
content-platform
integration
infrastructure
prototype
~~~

Bunlar package ID değildir.

Geçerli package ID’leri yalnızca:

```text
demo-frontend
corporate-website
saas
existing-project
api-service
```

ve gerektiğinde:

```text
all
```

olabilir.

------

## Kural

`supported_packages` yalnız gerçek package ID’leri içermelidir.

Project type applicability zaten:

```text
engine/DOCUMENT_CATALOG.md
```

tarafından yönetilir.

Template metadata içine yeni `supported_project_types` alanı icat etme.

Template metadata package selection owner’ı değildir.

------

## Uygulama

Tüm `templates/` klasörünü tara.

Özellikle:

- AI templates
- Project templates
- Design structural templates
- Wave templates
- Prompt templates
- Run templates

içindeki `supported_packages` değerlerini kontrol et.

Package olmayan değerleri kaldır veya doğru package ID ile değiştir.

Kararı current approved `packages/` belgelerine göre ver.

Bir template bütün package’larda kullanılabiliyorsa:

```yaml
supported_packages:
  - all
```

kullanılabilir.

------

# 4. RUN_MANIFEST_TEMPLATE Fix

`templates/runs/RUN_MANIFEST_TEMPLATE.md`,
`engine/RUN_PROTOCOL.md` ile birebir uyumlu olmalıdır.

------

## Run ID

Approved Run ID standardı:

```text
RUN-<YYYYMMDD>-<sequence>
```

Örnek:

```text
RUN-20260808-001
```

Template içindeki proje-spesifik veya farklı formatlı Run ID örneklerini kaldır.

Gerçek proje ismi kullanma.

------

## Engine Version

Şu tür hardcoded değer kullanma:

```yaml
engine_version: 1.0.0
```

Yerine runtime-resolved placeholder kullan:

```text
{{ENGINE_VERSION}}
```

Engine version Product Engine runtime tarafından çözülmelidir.

Template kendi başına version truth üretmemelidir.

------

## Run Manifest Fields

Approved `RUN_PROTOCOL.md` ile uyumlu alanları destekle:

```text
run_id
status
created_at
completed_at
agent_id
project_slug
selected_package
delivery_profile
documents_produced
validation_result
output_version
output_ref
```

Gerekli ek alanlar kullanılabilir ancak authoritative alanlarla çelişemez.

------

## Validation Result Vocabulary

Run Manifest:

```text
PASS
CONDITIONAL PASS
FAIL
```

değerlerini kullanmalıdır.

`PASSED` veya `FAILED` gibi ayrı vocabulary üretme.

------

## Output Reference

Şu hatalı sade yapı kullanılmamalıdır:

```text
outputs/{{PROJECT_SLUG}}/
```

Output reference:

```text
outputs/<category>/<project-slug>/versions/<output-version>/
```

veya runtime placeholder ile eşdeğer biçimde olmalıdır.

`latest/` ayrı bir validated-active pointer mantığıdır.

Template Output Structure’ı yeniden tanımlamamalıdır.

------

## Cancelled / Failed

`Cancelled` ve `Failed` ayrı status değerleri olarak korunmalıdır.

Cancelled run teknik fail gibi yeniden etiketlenmemelidir.

------

# 5. Validation Vocabulary Fix

`templates/runs/VALIDATION_REPORT_TEMPLATE.md` şu authoritative sonuçları kullanmalıdır:

```text
PASS
CONDITIONAL PASS
FAIL
```

Şu vocabulary kullanılmamalıdır:

```text
PASSED
FAILED
SUCCESS
WARNING
```

overall validation sonucu olarak.

Per-check seviyesinde:

```text
PASS
FAIL
WARNING
```

gibi kontrol sonuçları kullanılabilir.

Ama final validation sonucu yalnız:

```text
PASS
CONDITIONAL PASS
FAIL
```

olmalıdır.

------

# 6. Validation Input Fix

Validation’ın primary target’ı final `outputs/` değildir.

Approved pipeline:

```text
Generate documents
↓
runs/active/<run-id>/working-output/
↓
Validation
↓
Repair if needed
↓
PASS / approved CONDITIONAL PASS
↓
Final output
```

Bu nedenle:

```
VALIDATION_REPORT_TEMPLATE.md
```

ve ilgili prompt template’lerinde validation kaynağı:

```text
working-output
```

olmalıdır.

Final outputs ancak validation geçtikten sonra oluşturulur.

------

# 7. START_PROJECT_PROMPT Pipeline Fix

`templates/prompts/START_PROJECT_PROMPT.md`
Approved Generation Pipeline’ı bypass etmemelidir.

Şu yaklaşım yanlış:

```text
Dokümanları üret
→ doğrudan outputs/ içine yaz
```

Doğru akış:

```text
Approved input
↓
Package selection
↓
Run initialization
↓
Document selection
↓
Template resolution
↓
Information distribution
↓
Assumption/conflict handling
↓
runs/active/<run-id>/working-output/
↓
Validation
↓
Repair
↓
Final outputs/
↓
Run completion
```

Prompt bunu tamamen tekrar eden devasa manual’a dönüşmesin.

Yalnızca agent’ı authoritative pipeline’a yönlendirsin.

Önerilen davranış:

```text
engine/GENERATION_PIPELINE.md
ve
engine/RUN_PROTOCOL.md
uyarınca run'ı başlat ve tamamla.
```

Doğrudan final `outputs/` içine yazma talimatını kaldır.

------

# 8. Diğer Prompt Template’lerini de Kontrol Et

Şunları tara:

```text
START_WAVE_PROMPT.md
CONTINUE_WAVE_PROMPT.md
UPDATE_DOCS_PROMPT.md
VALIDATE_PROJECT_PROMPT.md
```

Aşağıdaki driftlerden biri varsa düzelt:

- validation’dan önce final output’a yazma,
- run records ile final output’u karıştırma,
- engine pipeline’ı bypass etme,
- model-specific davranış,
- outdated validation vocabulary.

Sadece gerçekten gerekli değişiklikleri yap.

------

# 9. `file:///` Linklerini Temizle

Tüm `templates/` klasöründe:

```text
file:///
```

ara.

Hiçbir local file URI kalmamalıdır.

Özellikle mevcut örnekler:

```text
PROJECT_BRAIN_TEMPLATE.md
README_TEMPLATE.md
```

içinde bulunmaktadır.

------

## Document Reference Kuralı

Final project output içindeki belgeler aynı output paketinde olacaksa relative repository/project links kullanılabilir.

Örnek:

```md
[PRODUCT_RULES.md](./PRODUCT_RULES.md)
```

veya sade text reference:

```text
PRODUCT_RULES.md
```

kullanılabilir.

Template source dosyasına link verme.

Final README’de:

```text
ENV_EXAMPLE_TEMPLATE.md
```

gibi template dosyasına yönlendirme yapma.

Final output document kullanıcıyı template sistemine değil, gerçek output artefact’ına yönlendirmelidir.

Eğer `.env.example` üretilmişse:

```text
.env.example
```

olarak referans ver.

------

# 10. ENV_EXAMPLE_TEMPLATE Fix

`templates/project/ENV_EXAMPLE_TEMPLATE.md` model ve stack bağımsız olmalıdır.

Şu tür default gerçekler uydurulmamalıdır:

```text
NODE_ENV
PORT=3000
DATABASE_URL=postgresql://...
NEXTAUTH_URL
AUTH_SECRET
```

Bunlar yalnız gerçekten approved project context bunu gerektiriyorsa üretilebilir.

Template’in kendisi Node.js, PostgreSQL, NextAuth veya belirli framework seçmemelidir.

------

## Doğru Yaklaşım

Template generic structure sunmalıdır.

Örneğin:

```text
# Application Configuration
{{APP_ENV_VARIABLES_BLOCK}}

[CONDITIONAL: include only if database exists]
# Database Configuration
{{DATABASE_ENV_VARIABLES_BLOCK}}

[CONDITIONAL: include only if authentication exists]
# Authentication / Security
{{AUTH_ENV_VARIABLES_BLOCK}}

[CONDITIONAL: include only if third-party services exist]
# External Services
{{THIRD_PARTY_ENV_VARIABLES_BLOCK}}
```

Gerçek environment variable isimleri approved technical context üzerinden çözülmelidir.

------

## Secret Safety

Gerçek:

- secret,
- token,
- password,
- API key,
- private key

asla yazılmamalıdır.

`.env.example` yalnız placeholder/example değerleri içermelidir.

------

# 11. Run Template Category Standardı

`templates/README.md` metadata standardı:

```text
category:
ai | project | design | waves | prompts | operational
```

olarak tanımlanmıştır.

Run operational template’lerinde:

```yaml
category: runs
```

kullanılmışsa bunu:

```yaml
category: operational
```

olarak standardize et.

Özellikle:

```text
RUN_MANIFEST_TEMPLATE.md
INPUT_SNAPSHOT_TEMPLATE.md
PACKAGE_SELECTION_TEMPLATE.md
SOURCE_REGISTER_TEMPLATE.md
ASSUMPTIONS_TEMPLATE.md
CONFLICTS_TEMPLATE.md
DECISIONS_TEMPLATE.md
RUN_LOG_TEMPLATE.md
PROGRESS_TEMPLATE.md
VALIDATION_REPORT_TEMPLATE.md
COMPLETION_REPORT_TEMPLATE.md
```

dosyalarını kontrol et.

`template_type`:

```text
operational
```

olarak kalmalıdır.

`RUN_MANIFEST_TEMPLATE.md` catalog ID olarak:

```text
RUN-MANIFEST
```

kullanmaya devam eder.

------

# 12. Placeholder Audit

Tüm templates altında placeholder standardını kontrol et.

Aynı kavram için gereksiz farklı isimler oluşmuşsa yalnız açık ve güvenli durumlarda standardize et.

Özellikle:

```text
PROJECT_NAME
PROJECT_SLUG
DELIVERY_PROFILE
RUN_ID
ENGINE_VERSION
OUTPUT_VERSION
OUTPUT_REF
VALIDATION_RESULT
```

run ve document templates arasında tutarlı olmalıdır.

Ancak geniş kapsamlı rename yaparak gereksiz churn oluşturma.

------

# 13. Model Independence Audit

Aşağıdaki isimlerin üretim davranışının parçası olmadığına emin ol:

```text
Claude
Gemini
GPT
Codex
```

Dokümantasyon içinde yalnızca "model-specific olmamalıdır" gibi açıklayıcı örnek cümlede bulunması sorun değildir.

Prompt’un veya template’in belirli modele özel talimat vermesi yasaktır.

------

# 14. Information Ownership Audit

Fix sırasında:

- PRODUCT_RULES → product behavior/rules
- TECH_CONTEXT → technical context
- DESIGN_RULES → design/UX rules
- DATA_MODEL → data structure
- API_CONTRACTS → API surface
- CURRENT_STATUS → current truth
- RUN_MANIFEST → run identity/state

ownership sınırlarını koru.

Bir drift’i düzeltirken başka belgeye bilgi sahipliği taşıma.

------

# 15. Dependency Semantics Uyumu

Engine’de yeni Approved dependency rule artık geçerlidir:

```text
Dependency only applies if dependency document itself is applicable
to active project_type + delivery_profile.
```

Template’ler dependency listelerini unconditional force-generation olarak yorumlamamalıdır.

Template metadata’daki dependencies alanı Document Catalog ile uyumlu kalmalıdır.

Dependency skip edilmesi başka document’a ownership migration yaratmamalıdır.

------

# 16. Final Output Temizliği

Final output skeleton’larında şunlar bulunmamalıdır:

- `file:///`
- template source paths
- `templates/...` linkleri
- hardcoded runtime engine version
- gerçek proje isimleri
- gerçek customer/company verisi
- gerçek credential
- unresolved template metadata
- run operational content

------

# 17. Scope Discipline

Bu görevde yalnızca:

```text
templates/
```

altındaki gerekli dosyaları değiştir.

Değiştirme:

- `engine/`
- `packages/`
- `planning/`
- `inputs/`
- `runs/`
- `outputs/`
- `logs/`
- `examples/`
- `archive/`
- root README
- Product Engine Brain

Kök task prompt dosyasının committe bulunması bu çalışma talimatının normal parçasıdır; ancak runtime sistem dosyası değildir.

------

# 18. Son Audit

Düzeltmeler tamamlandıktan sonra aşağıdakileri tek tek doğrula:

1. `supported_packages` içinde project type değeri kaldı mı?
2. Yalnız geçerli package ID veya `all` kullanılıyor mu?
3. Run ID standardı `RUN-YYYYMMDD-XXX` ile uyumlu mu?
4. Run Manifest engine version hardcode ediyor mu? Etmemeli.
5. Run Manifest output path `OUTPUT_STRUCTURE.md` ile uyumlu mu?
6. Validation final vocabulary yalnız `PASS / CONDITIONAL PASS / FAIL` mı?
7. Validation working-output üzerinde mi çalışıyor?
8. START_PROJECT prompt validation’dan önce final output’a yazıyor mu? Yazmamalı.
9. Diğer prompt’larda pipeline bypass var mı?
10. `file:///` kaldı mı?
11. Template final output’ları `templates/...` dosyalarına link veriyor mu?
12. ENV template Node/Postgres/NextAuth gibi stack varsayıyor mu?
13. Gerçek secret/credential var mı?
14. Run operational template category’leri `operational` mı?
15. Structural templates hâlâ `document_id: not_applicable` mı?
16. RUN_MANIFEST hâlâ `RUN-MANIFEST` ID’sine sahip mi?
17. Dependency semantics Approved engine ile uyumlu mu?
18. Information ownership korundu mu?
19. Yeni Document ID oluşturuldu mu? Oluşturulmamalı.
20. Yalnızca `templates/` değiştirildi mi?

------

# 19. Çalışma Sonu Raporu

## Düzeltilen Dosyalar

Değiştirilen template dosyalarını ve nedeni kısa yaz.

## Metadata Fixleri

Özetle:

- supported_packages
- category
- version/runtime placeholders

## Run Template Fixleri

Özetle:

- Run ID
- engine version
- output ref
- validation vocabulary
- status handling

## Pipeline Fixleri

Özetle:

- working-output
- validation
- repair
- final output
- prompt behavior

## Portability Fixleri

Özetle:

- file:///
- relative references
- template-source leakage

## ENV Template Fixi

Stack bağımsız hale geldiğini doğrula.

## Korunan Kararlar

Şunları doğrula:

- Document Catalog owner
- Information Map owner
- Package selection owner
- Run Protocol owner
- Output Structure owner
- Assumption Rules owner
- model independence

## Açık Noktalar

Yalnız gerçekten sonraki folder buildlerine bırakılması gereken maddeleri yaz.

## Sonuç

Şunlardan biriyle bitir:

```text
TEMPLATES_FINAL_FIX_COMPLETE
```

veya:

```text
TEMPLATES_FINAL_FIX_BLOCKED
```

Blocked ise gerçek engeli açıkla.