# DECISIONS_TEMPLATE

## Template Metadata

```yaml
template_id: decisions-template
template_name: Decisions Template
document_id: DECISIONS
version: 1.3.0
status: active
template_type: document
category: ai
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
supported_implementation_planning:
  - standard
  - full
required_inputs:
  - approved_intake
dependencies:
  - PROJECT-BRAIN
output_filename: DECISIONS.md
```

## Amaç

Proje süresince alınan kalıcı mimari, ürün, kapsam ve tasarım kararlarını kısa gerekçeleri ve **karar kaynağı** ile denetlenebilir biçimde tutmak.

## Kullanım Koşulları

`implementation_planning: standard | full` projelerde zorunludur.

## Zorunlu Bölümler

- Decision Record Standard
- Architectural / Technical Decisions
- Product / Scope Decisions
- Design / UX Decisions
- Deprecated / Superseded Decisions

## Karar Durumu Vocabulary

Yalnız şu durumlar kullanılır:

```text
User Approved
→ exact karar approved input içinde açıkça bulunuyor veya kullanıcı bu exact kararı doğrudan onayladı

Engine Resolved
→ approved scope değişmeden, generation sırasında Engine tarafından exact implementation/design/technical seçim olarak çözüldü

Pending Review
→ kesinleşmesi gereken karar

Superseded
→ daha yeni karar tarafından yürürlükten kaldırıldı
```

## Provenance Ownership Rule

Generic project approval, Engine'in daha sonra seçtiği exact kararı `User Approved` yapmaz.

```text
User approved: "non-generic modern design"
Engine later chooses: exact palette #0F172A + #0EA5E9
→ palette decision = Engine Resolved
```

```text
User approved: "stack-neutral / Engine may choose practical stack"
Engine later chooses: Vanilla HTML/CSS/JS
→ exact stack decision = Engine Resolved
```

`User Approved` kullanmak için source'ta **kararın kendisi** trace edilebilir olmalıdır; yalnız genel approval mesajına referans vermek yeterli değildir.

## Decision Coverage Rule

Final execution reality'yi değiştiren kalıcı seçimler DECISIONS içinde kayıtlı olmalıdır.

Özellikle applicable olduğunda:

```text
exact frontend/runtime/framework choice
build/tooling choice
service/data architecture choice
exact visual concept / palette / typography choice
scope inclusion/exclusion resolution
wave architecture boundary that changes implementation
```

TECH_CONTEXT veya DESIGN_RULES exact bir seçim söylüyor fakat DECISIONS kaydı yoksa provenance coverage eksiktir.

## İçerik Üretim Kuralları

- Private chain-of-thought saklanmaz; yalnız karar sonucu, kısa gerekçe, alternatif özeti ve etkiler kaydedilir.
- Assumption decision gibi gösterilmez.
- Kullanıcı tarafından onaylanması gereken karar agent tarafından `User Approved` veya `Engine Resolved` yapılamaz.
- Engine contract'ından veya bounded generation resolution'dan türeyen exact karar `Engine Resolved` olarak kaynaklandırılır.
- Kullanıcı approval mesajı sadece approved input'taki exact kararları User Approved yapar; generation sonrası exact detail'leri kapsamaz.
- Karar değişirse eski kayıt silinmez; `Superseded` olarak izlenebilir kalır.
- `Source`, kararın gerçekten nereden geldiğini göstermelidir; downstream document kendi kararının sahte upstream kaynağı olamaz.

## Karar Formatı

- **ID**: DEC-XXX
- **Tarih**: YYYY-MM-DD
- **Konu**
- **Karar**
- **Kısa Gerekçe**
- **Etkiler**
- **Durum**: User Approved | Engine Resolved | Pending Review | Superseded
- **Source**: exact approved input field/user statement veya canonical Engine contract + resolving document

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{ARCHITECTURAL_DECISIONS}}`
- `{{PRODUCT_SCOPE_DECISIONS}}`
- `{{DESIGN_UX_DECISIONS}}`
- `{{DEPRECATED_DECISIONS}}`

## Validation Beklentileri

- TECH_CONTEXT / PRODUCT_RULES / DESIGN / WAVE belgeleriyle çelişmemeli.
- `User Approved` etiketi için exact kullanıcı karar kaynağı bulunmalı.
- Generic approval, Engine-selected exact stack/palette/tooling için yeterli provenance değildir.
- `Engine Resolved` karar approved scope'u değiştirmemeli ve kullanıcı kararı gerektiren alanı sessizce kapatmamalı.
- Final execution/design reality'deki significant Engine-selected kararların DECISIONS coverage'ı bulunmalı.
- `Pending Review` execution-critical ise active wave `Ready for Execution` olamaz.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Decisions

## 1. Decision Record Standard

Yukarıdaki canonical karar formatı ve provenance vocabulary kullanılır.

## 2. Architectural / Technical Decisions

{{ARCHITECTURAL_DECISIONS}}

## 3. Product / Scope Decisions

{{PRODUCT_SCOPE_DECISIONS}}

## 4. Design / UX Decisions

{{DESIGN_UX_DECISIONS}}

## 5. Deprecated / Superseded Decisions

{{DEPRECATED_DECISIONS}}

# OUTPUT DOCUMENT END
