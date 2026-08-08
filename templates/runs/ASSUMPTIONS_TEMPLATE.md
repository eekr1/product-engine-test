# ASSUMPTIONS_TEMPLATE

## Template Metadata

```yaml
template_id: assumptions-template
template_name: Assumptions Operational Template
document_id: not_applicable
version: 1.0.0
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
  - assumption_rules
conditional_inputs: []
dependencies: []
output_filename: ASSUMPTIONS.md
```

## Amaç

Run sırasında eksik veya belirsiz bilgiler nedeniyle `engine/ASSUMPTION_RULES.md` uyarınca yapılan tüm varsayımları denetlenebilir biçimde kayıt altına almak.

## Kullanım Koşulları

Eksik bilgiyle karşılaşıldığında varsayım kaydı oluşturulması zorunludur.

## Girdi Kaynakları

- `engine/ASSUMPTION_RULES.md`

## Zorunlu Bölümler

- Varsayım Kayıt Standardı (Assumption Entry Standard)
- Aktif Varsayımlar Listesi (Active Assumptions)
- Onaylanan / Doğrulanan Varsayımlar (Validated Assumptions)

## Koşullu Bölümler

- `[CONDITIONAL: include only if high risk assumptions exist]` Yüksek Riskli Varsayımlar ve Kullanıcı Onay Beklentisi

## İçerik Üretim Kuralları

- Her kayıt: ID, Bağlam (Context), Varsayım (Assumption), Gerekçe (Reason), Etki (Impact), Kullanıcı Doğrulama İhtiyacı (Validation Needed: Yes/No), Durum (Status: Active/Approved/Rejected).
- Sessiz uydurma yapılmamalı; her varsayım kayıt altına alınmalıdır.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{ASSUMPTIONS_ENTRIES_TABLE}}`: Varsayım kayıtları tablosu.

## Kapsam Dışı

- Karar gerekçeleri (bkz: `DECISIONS_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Run varsayım kayıt tescili.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`, `COMPLETION_REPORT_TEMPLATE.md`.

## Delivery Profile Davranışı

- Üretim sırasında ajanın uydurma yapmasını engeller, şeffaflığı sağlar.

## Validation Beklentileri

- `engine/ASSUMPTION_RULES.md` sınırlarını aşan varsayım yapılmamalıdır.

---

# OUTPUT DOCUMENT START

# Assumptions Register — {{RUN_ID}}

## 1. Aktif Varsayımlar Listesi

{{ASSUMPTIONS_ENTRIES_TABLE}}

## 2. Onaylanan veya Doğrulanan Varsayımlar

- Kullanıcı tarafından teyit edilerek kesinleşen varsayımlar.

[CONDITIONAL: include only if high risk assumptions exist]
## 3. Yüksek Riskli Varsayımlar ve Kullanıcı Onay Beklentisi

- Kritik mimari veya ürün kararlarını etkileyen, onay bekleyen varsayımlar.

# OUTPUT DOCUMENT END
