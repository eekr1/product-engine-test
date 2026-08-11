# DECISIONS_TEMPLATE

## Template Metadata

```yaml
template_id: decisions-template
template_name: Decisions Template
document_id: DECISIONS
version: 1.2.0
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
→ kullanıcı tarafından canonical approval / approved input ile açıkça kabul edilmiş karar

Engine Resolved
→ approved scope ve Engine contract'ları içinde, kullanıcı onayı gerektirmeden generation sırasında çözülen teknik/uygulama kararı

Pending Review
→ implementation için henüz kesinleşmesi gereken karar

Superseded
→ daha yeni bir karar tarafından yürürlükten kaldırılan kayıt
```

`Engine Resolved` kullanıcı onayı değildir. Kullanıcının seçmesi gereken kritik ürün/teknik karar bu statüyle sessizce çözülemez.

## İçerik Üretim Kuralları

- Private chain-of-thought saklanmaz; yalnız karar sonucu, kısa gerekçe, alternatif özeti ve etkiler kaydedilir.
- Assumption decision gibi gösterilmez.
- Kullanıcı tarafından onaylanması gereken karar agent tarafından `User Approved` veya `Engine Resolved` yapılamaz.
- Engine contract'ından türeyen implementation kararı `Engine Resolved` olarak kaynaklandırılır.
- Karar değişirse eski kayıt silinmez; `Superseded` olarak izlenebilir kalır.
- `Approval Source` yalnız `User Approved` için kullanılır; `Engine Source` ise Engine Resolved kararın dayandığı contract/document referansını gösterir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{ARCHITECTURAL_DECISIONS}}`
- `{{PRODUCT_SCOPE_DECISIONS}}`
- `{{DESIGN_UX_DECISIONS}}`
- `{{DEPRECATED_DECISIONS}}`

## Karar Formatı

- **ID**: DEC-XXX
- **Tarih**: YYYY-MM-DD
- **Konu**
- **Karar**
- **Kısa Gerekçe**
- **Etkiler**
- **Durum**: User Approved | Engine Resolved | Pending Review | Superseded
- **Source**: approved input / canonical Engine contract / ilgili document

## Validation Beklentileri

- TECH_CONTEXT / PRODUCT_RULES / DESIGN belgeleriyle çelişmemeli.
- `User Approved` etiketi için gerçek kullanıcı approval kaynağı bulunmalı.
- `Engine Resolved` karar approved scope'u değiştirmemeli ve kullanıcı kararı gerektiren alanı sessizce kapatmamalı.
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
