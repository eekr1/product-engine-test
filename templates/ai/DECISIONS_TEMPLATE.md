# DECISIONS_TEMPLATE

## Template Metadata

```yaml
template_id: decisions-template
template_name: Decisions Template
document_id: DECISIONS
version: 1.0.0
status: active
template_type: document
category: ai
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs: []
dependencies:
  - PROJECT-BRAIN
output_filename: DECISIONS.md
```

## Amaç

Proje süresince alınan kritik mimari, ürün ve tasarım kararlarını, gerekçelerini, değerlendirilen alternatifleri ve sonuçlarını denetlenebilir biçimde kayıt altına almak.

## Kullanım Koşulları

Tüm proje türlerinde zorunludur.

## Girdi Kaynakları

- Mimari ve Ürün Kararları
- `PROJECT_BRAIN.md`

## Zorunlu Bölümler

- Karar Kayıt Standardı (Decision Record Format)
- Mimari Kararlar (Architectural Decisions)
- Ürün ve Kapsam Kararları (Product & Scope Decisions)
- Tasarım ve UX Kararları (Design & UX Decisions)

## Koşullu Bölümler

- `[CONDITIONAL: include only if operational decisions exist]` Altyapı ve Operasyonel Kararlar

## İçerik Üretim Kuralları

- Karar kayıtları standart formatta (Karar, Tarih, Bağlam, Karar, Gerekçe, Alternatifler, Sonuçlar, Durum) yazılmalıdır.
- Modelin private chain-of-thought süreci istenmemeli veya saklanmamalıdır. Yalnızca rasyonel ve kısa gerekçeler kaydedilmelidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{DECISION_ENTRIES_LIST}}`: Standart karar giriş kayıtlarının listesi.

## Kapsam Dışı

- Run anındaki operasyonel loglar (bkz: `templates/runs/DECISIONS_TEMPLATE.md`)
- Kodlama seviyesi geçici kararlar

## Diğer Dokümanlarla İlişki

- Primary Owner: `architectural_decisions`, `product_decisions`, `design_decisions`, `decision_rationale`.
- Referenced By: `PROJECT_BRAIN.md`, `TECH_CONTEXT.md`.

## Delivery Profile Davranışı

- Tüm Delivery Profile seviyelerinde kararları tarih sırasına göre net ve şeffaf biçimde belgeler.

## Validation Beklentileri

- Kaydedilen kararlar `TECH_CONTEXT.md` veya `PRODUCT_RULES.md` ile çelişmemelidir.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Decisions Register

## 1. Karar Kayıt Formatı

Her karar aşağıdaki yapıda tutulur:
- **ID**: DEC-XXX
- **Tarih**: YYYY-MM-DD
- **Konu / Karar**: Kararın adı
- **Bağlam (Context)**: Kararı gerektiren durum
- **Alınan Karar (Decision)**: Seçilen çözüm
- **Gerekçe (Rationale)**: Kararın gerekçesi
- **Değerlendirilen Alternatifler (Alternatives)**: Reddedilen seçenekler ve nedenleri
- **Sonuçlar (Consequences)**: Etkiler ve sorumluluklar
- **Durum (Status)**: Approved / Proposed / Deprecated

## 2. Mimari ve Teknik Kararlar

{{DECISION_ENTRIES_LIST}}

## 3. Ürün ve Kapsam Kararları

- Ürün işlevselliği ve kapsam kısıtlamalarına dair kararlar.

## 4. Tasarım ve UX Kararları

- Görsel dil ve kullanıcı deneyimine dair kritik kararlar.

# OUTPUT DOCUMENT END
