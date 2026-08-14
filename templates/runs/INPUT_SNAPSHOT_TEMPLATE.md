# INPUT_SNAPSHOT_TEMPLATE

## Template Metadata

```yaml
template_id: input-snapshot-template
template_name: Input Snapshot Operational Template
document_id: not_applicable
version: 1.2.0
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
  - approved_intake
conditional_inputs: []
dependencies: []
output_filename: INPUT_SNAPSHOT.md
```

## Amaç

Run başladığı anda kullanılan onaylı proje verisinin değişmez kopyasını ve Approved Scope Registry'yi dondurmak.

## Kullanım Koşulları

Run başlangıcında (`Initialized`) oluşturulur.

## Approved Scope Registry Contract

Approved intake içindeki scope-bearing öğeler `SCP-XXX` kayıtlarına normalize edilir.

Allowed status vocabulary:

```text
IN_SCOPE
KNOWN_DECISION
VERIFIED_CURRENT_TRUTH
OPEN_QUESTION
FUTURE
OUT_OF_SCOPE
```

Her kayıt minimum:

```text
Scope ID: SCP-XXX
Item: exact approved scope item / capability / deliverable
Status: canonical scope status
Source: approved input section / exact evidence
Executable: YES | NO
```

### Exact executable semantics

```text
IN_SCOPE                → YES
KNOWN_DECISION          → YES
VERIFIED_CURRENT_TRUTH  → NO
OPEN_QUESTION           → NO
FUTURE                  → NO
OUT_OF_SCOPE            → NO
```

`VERIFIED_CURRENT_TRUTH` yalnız factual/reference authority'dir; hiçbir feature, component, task veya deliverable authorize etmez. `YES (reference only)` gibi hibrit değerler yasaktır.

Canonical invariants:

```text
SCP semantic scope ⊆ exact approved input semantic support
task/deliverable semantic scope ⊆ referenced executable SCP semantic scope
```

SCP ID yalnız var olduğu için task authorize etmez. ID, Item, Status ve Executable birlikte exact registry kaydından resolve edilmelidir. Bir doküman `SCP-014` için registry'den farklı isim/anlam kullanıyorsa semantic identity mismatch oluşur ve validation FAIL'dir.

Örnek:

```text
SCP-003 | Phone + Email CTA | IN_SCOPE | Executable YES
→ tel/mailto task authorize edebilir
→ address card / map / WhatsApp / form authorize edemez

SCP-007 | Existing company information | VERIFIED_CURRENT_TRUTH | Executable NO
→ factual copy için reference olabilir
→ Address & Map Card task'ını authorize edemez
```

Registry approved input'tan daha geniş olamaz. Run sırasında yeni current-scope capability için yeni explicit approval/input version gerekir.

## İçerik Üretim Kuralları

- Run başladıktan sonra snapshot değiştirilmez.
- Approved Scope Registry scope-bearing input öğelerini kayıpsız sınıflandırır.
- `VERIFIED_CURRENT_TRUTH`, `OPEN_QUESTION`, `FUTURE`, `OUT_OF_SCOPE` her zaman `Executable: NO` taşır.
- Duplicate SCP oluşturulmaz.
- Downstream belgeler SCP ID + Item + Status + Executable değerlerini registry ile exact eşleştirmelidir.

## Validation Beklentileri

- Snapshot approved input ile eşleşmelidir.
- Registry approved input'tan semantik olarak geniş olamaz.
- Executable generated item yalnız `IN_SCOPE|KNOWN_DECISION + Executable YES` SCP ile traceable olmalıdır.
- Reference-only SCP executable task'ta Scope Ref olarak kullanılırsa FAIL.
- SCP ID semantic identity mismatch varsa FAIL.

---

# OUTPUT DOCUMENT START

# Input Snapshot — {{RUN_ID}}

- **Input ID**: {{INPUT_ID}}
- **Input Version**: {{INPUT_VERSION}}
- **Approval Date**: {{APPROVAL_DATE}}

## 1. Onaylı Proje Özeti (Snapshot)

{{INTAKE_SNAPSHOT_CONTENT}}

## 2. Başlangıç Kapsamı ve Teslimat Hedefi

- **Proje Türü**: {{PROJECT_TYPE}}
- **Hedef Delivery Profile**: {{TARGET_PROFILE}}

## 3. Approved Scope Registry

{{APPROVED_SCOPE_REGISTRY}}

[CONDITIONAL: include only if input has user attachments]
## 4. Ek Veri ve Dosya Referansları

- Kullanıcı tarafından sağlanan ek belge ve ham veri kaynaklarının referansları.

# OUTPUT DOCUMENT END
