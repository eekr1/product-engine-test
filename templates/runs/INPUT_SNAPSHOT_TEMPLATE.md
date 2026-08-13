# INPUT_SNAPSHOT_TEMPLATE

## Template Metadata

```yaml
template_id: input-snapshot-template
template_name: Input Snapshot Operational Template
document_id: not_applicable
version: 1.1.0
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

Run başladığı anda kullanılan onaylı proje verisinin (approved intake snapshot) değişmez kopyasını ve sürüm kayıtlarını tutmak; ayrıca current scope üyeliğini mekanik olarak doğrulayabilmek için Approved Scope Registry'yi dondurmak.

## Kullanım Koşulları

Run başlangıcında (`Initialized` aşaması) oluşturulur.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md` ve `inputs/` dosyası)

## Zorunlu Bölümler

- Girdi Kimliği ve Sürümü (Input Identity & Version)
- Onaylı Proje Özeti (Approved Project Context)
- Başlangıç Kapsamı ve Hedefler (Initial Scope & Goals)
- Approved Scope Registry

## Approved Scope Registry Contract

Approved intake içindeki scope-bearing öğeler run başında `SCP-XXX` kayıtlarına normalize edilir.

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

Executable semantics:

```text
IN_SCOPE                → YES
KNOWN_DECISION          → YES
VERIFIED_CURRENT_TRUTH  → yalnız factual/reference use; yeni feature scope authorize etmez
OPEN_QUESTION           → NO
FUTURE                  → NO
OUT_OF_SCOPE            → NO
```

Canonical rule:

> A committed deliverable or executable task must map to an SCP record whose status authorizes execution.

Örnek:

```text
SCP-003 | Phone CTA | IN_SCOPE | Executable YES
SCP-101 | Teklif Formu | OPEN_QUESTION | Executable NO
```

`SCP-101` future/open context olarak anılabilir; committed WAVE/PROJECT_PLAN/NEXT_TASKS işi olamaz.

Registry approved input'tan daha geniş olamaz. Run sırasında yeni current-scope item eklemek için yeni explicit approval/input version gerekir.

## Koşullu Bölümler

- `[CONDITIONAL: include only if input has user attachments]` Ek Veri ve Dosya Referansları

## İçerik Üretim Kuralları

- Run başladıktan sonra snapshot değiştirilmemelidir. Yeni bilgi gelirse yeni bir snapshot/run açılmalıdır.
- `inputs/` klasöründeki ana verinin yerine geçmez; sadece anlık dondurulmuş halidir.
- Approved Scope Registry intake'in `In Scope`, `Known Decisions`, `Verified Current Truth`, `Open Questions`, `Future Possibilities` ve `Out of Scope` alanlarını kayıpsız sınıflandırmalıdır.
- `OPEN_QUESTION`, `FUTURE` veya `OUT_OF_SCOPE` kayıt `Executable: YES` olamaz.
- Aynı scope item duplicate SCP kayıtlarıyla çoğaltılmaz; tek canonical kayıt kullanılır.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{INPUT_ID}}`: Girdi kimliği.
- `{{INPUT_VERSION}}`: Girdi sürümü.
- `{{APPROVAL_DATE}}`: Girdinin onaylanma tarihi.
- `{{INTAKE_SNAPSHOT_CONTENT}}`: Onaylı intake verisinin dondurulmuş özeti.
- `{{APPROVED_SCOPE_REGISTRY}}`: SCP kayıtlarının tablosu/listesi.

## Kapsam Dışı

- Run sırasında yapılan yeni varsayımlar (bkz: `ASSUMPTIONS_TEMPLATE.md`)
- Approval sonrası sessiz scope genişletmesi

## Diğer Dokümanlarla İlişki

- Primary Owner: Run başlangıç girdi + approved scope membership kaydı.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`, `engine/GENERATION_PIPELINE.md`, `engine/VALIDATION_RULES.md`, WAVE planning.

## Delivery Profile Davranışı

- Tekrar üretilebilirlik (reproducibility) için dondurulmuş girdi kanıtı sağlar.
- Scope registry tüm delivery profile'larda aynı binding semantics'i taşır.

## Validation Beklentileri

- Snapshot verisi onaylı intake ile birebir eşleşmelidir.
- Registry tüm scope-bearing input öğelerini doğru status ile kapsamalıdır.
- Executable generated item yalnız executable SCP kaydıyla traceable olmalıdır.

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
