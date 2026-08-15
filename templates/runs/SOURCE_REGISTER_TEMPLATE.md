# SOURCE_REGISTER_TEMPLATE

## Template Metadata

```yaml
template_id: source-register-template
template_name: Source Register Operational Template
document_id: not_applicable
version: 1.6.0
status: active
template_type: operational
category: operational
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - run_manifest
  - input_snapshot
conditional_inputs: []
dependencies: []
output_filename: SOURCE_REGISTER.md
```

## Amaç

Run sırasında kullanılan **factual project sources** ve exact claim support boundary'lerini kayıt altına almak; FCL allowlist'i yalnız gerçek project source evidence üzerinden üretmek.

## Canonical Source Ownership Model

Normal Product Engine run'ı **source-closed** çalışır.

```text
PROJECT_SOURCE factual truth
→ APPROVED_PROJECT_INPUT approval/filter/structure boundary
→ INPUT_SNAPSHOT frozen approved derivative
→ SOURCE_REGISTER / FCL from exact PROJECT_SOURCE evidence
→ generated docs
```

Bu zincirde yalnız `PROJECT_SOURCE` factual source'tur.

Aşağıdakiler **SOURCE_REGISTER factual source setine SRC kaydı olarak giremez**:

```text
APPROVED_PROJECT_INPUT
INPUT_SNAPSHOT
engine/*
packages/*
templates/*
ref/*
README / runtime contracts / planning overlays
other generated or derived documents
```

Bunlar kendi rollerinde authority, derivative, template veya quality reference olabilir; **factual source değildir**.

Canonical classification:

```text
PROJECT_SOURCE -> factual source / SRC identity
APPROVED_PROJECT_INPUT -> approved derivative authority, NOT SRC
INPUT_SNAPSHOT -> frozen derivative registry, NOT SRC
engine/* -> runtime authority, NOT SRC
packages/* -> package authority, NOT SRC
templates/* -> generation schema, NOT SRC
ref/* -> non-authoritative quality reference, NOT SRC
```

Bir document'ın runtime sırasında okunmuş/consumed olması onu factual source yapmaz.

## Default Source Model

Normal akışta dış web sitesi, arama motoru, sosyal medya veya başka external URL project truth authority'si olarak eklenmez. Proje source dosyasında bir URL geçmiş olması tek başına SOURCE_REGISTER'a external source ekleme veya o kaynaktan claim üretme izni değildir.

External factual source yalnız kullanıcı açıkça ayrı bir research/source-enrichment işi talep etmiş, source gerçekten okunmuş/fetch edilmiş ve bu factual role açıkça kaydedilmişse eklenebilir.

## Source Support Contract

Her factual source kaydı minimum:

```text
Source ID
Source path / identity
Source role: factual-project-source | explicit-enrichment-source
Usage State
Claim Scope
Exact Evidence Location
```

Normal project-start akışında primary factual source project source file'dır. Approved input ve input snapshot bu source truth'un canonicalized/frozen türevleridir, bağımsız yeni fact kaynağı değildir.

### Source Set Self-Check

SOURCE_REGISTER yazılmadan önce:

```text
for each proposed SRC identity:
  ask: does this artifact contain independent project-world factual evidence?
  if artifact role is derivative/authority/template/package/ref/generated -> REMOVE FROM SRC SET
```

Normal source-closed tek-source run'da beklenen pattern:

```text
SOURCE_REGISTER_SOURCE_SET = {PROJECT_SOURCE}
```

Project input, package veya engine dosyalarının SRC kimliği olarak görünmesi classification failure'dır.

## Factual Claim Allowlist Contract

Blocking invariants:

```text
Approved PROJECT_INPUT factual content subset-of exact PROJECT_SOURCE evidence
FCL semantic content subset-of exact PROJECT_SOURCE evidence
Generated factual claim subset-of referenced FCL semantic content
```

FCL provenance `APPROVED_PROJECT_INPUT`, `INPUT_SNAPSHOT`, package veya engine authority üzerinden kurulamaz. Bu belgeler source truth'u filtreleyebilir/yapılandırabilir fakat source evidence yerine geçemez.

Source evidence inference/classification izni değildir. Source'ta açıkça bulunmayan capability, faaliyet alanı, teknik alt kapsam, süreç, modifier, availability veya operational fact FCL'ye eklenemez.

Örnek:

```text
Source: Yedek Parça Temini
Allowed FCL: Yedek Parça Temini
Forbidden without exact support: orijinal parça, stoktan teslim, marka bazlı parça kapsamı

Source: Yerinde Teknik Destek
Allowed FCL: Yerinde Teknik Destek
Forbidden without exact support: mobil filo, acil müdahale, SLA

Source: Makine Bakım ve Onarım
Allowed FCL: Makine Bakım ve Onarım
Forbidden without exact support: periyodik bakım, hidrolik pres, revizyon, güç ünitesi
```

## Implementation Detail vs Factual Truth

Engine teknik implementation kararı üretebilir:

```text
component split
file responsibility
layout/grid
adapter/interface shape
responsive behavior
non-factual interaction styling
verification strategy
```

Ancak gerçek dünya/company/domain claim'leri exact source-backed olmak zorundadır:

```text
service qualifiers
stock/availability
operating hours
address/contact facts
certificates/partnership claims
specific technical capabilities
customer/project/reference claims
```

## Separate Non-Source Usage Records

Template versions ve quality-reference usage SOURCE_REGISTER içinde ayrı operational sections olarak kaydedilebilir, fakat bunlara `SRC-*` identity verilmez ve `SOURCE_REGISTER_SOURCE_SET` içine dahil edilmez.

```text
SRC-*          -> factual source identities only
Template table -> template/version evidence only
Ref usage      -> quality-calibration evidence only
Authority read -> runtime trace/authority evidence only
```

## Validation Beklentileri

- SOURCE_REGISTER factual source setinde yalnız gerçek factual project/enrichment sources bulunmalıdır.
- Approved input, input snapshot, engine/package/template/ref/generated document `SRC-*` olarak kayıtlıysa VAL-12 + VAL-13 FAIL.
- Her FCL exact supporting PROJECT_SOURCE evidence location taşımalıdır.
- FCL provenance yalnız approved input/derived authority'ye dayanıyorsa VAL-13 FAIL.
- Approved input source truth'u genişletirse VAL-13 FAIL.
- FCL source evidence'tan genişse VAL-13 FAIL.
- WAVE_MAP/WAVE_PLAN dahil generated factual claim FCL'den genişse VAL-13 FAIL.
- Factual scan yalnız FCL tablosuyla sınırlı kalamaz; executable prose, goals, scope, deliverables, task behavior, acceptance ve content copy içindeki company/domain claims de kontrol edilir.

---

# OUTPUT DOCUMENT START

# Source Register — {{RUN_ID}}

## 1. Project Factual Sources

{{PROJECT_SOURCE_TABLE}}

## 2. Canonical Truth Chain

```text
PROJECT_SOURCE
→ APPROVED_PROJECT_INPUT
→ INPUT_SNAPSHOT
→ FCL
```

## 3. Derived / Runtime Authorities (NOT SOURCES)

{{DERIVED_RUNTIME_AUTHORITIES_TABLE}}

## 4. Template Sürüm Kayıtları (NOT SOURCES)

{{TEMPLATE_VERSIONS_TABLE}}

## 5. Referans Belgeleri Kullanım Kaydı (NOT SOURCES)

{{REF_USAGE_TABLE}}

## 6. Factual Claim Allowlist

{{FACTUAL_CLAIM_ALLOWLIST}}

# OUTPUT DOCUMENT END
