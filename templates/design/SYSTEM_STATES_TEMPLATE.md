# SYSTEM_STATES_TEMPLATE

## Template Metadata

```yaml
template_id: system-states-template
template_name: System States Structural Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: structural
category: design
supported_packages:
  - web-app
  - mobile-app
  - saas
  - demo-frontend
supported_delivery_profiles:
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - design_rules
  - product_rules
conditional_inputs: []
dependencies:
  - DESIGN
output_filename: not_applicable
```

## Amaç

Sistemdeki ortak arayüz durumlarını (Loading, Empty, Error, Success, Disabled, Offline) standartlaştıran yapısal şablon sunmak.

## Kullanım Koşulları

Tüm UI projelerinde sistem genelindeki durum standartlarını belirlemek için kullanılır.

## Girdi Kaynakları

- `DESIGN_RULES.md`, `PRODUCT_RULES.md`

## Zorunlu Bölümler

- Yüklenme Durumu (Loading State)
- Boş Veri Durumu (Empty State)
- Hata Durumu (Error State)
- Başarı / Onay Durumu (Success State)

## Koşullu Bölümler

- `[CONDITIONAL: include only if offline mode is supported]` Çevrimdışı (Offline) Durumu

## İçerik Üretim Kuralları

- Bağımsız Document Catalog ID'si içermemelidir (`document_id: not_applicable`).
- Her durum için kullanıcıya gösterilecek mesaj, görsel/ikon ve aksiyon (retry, go back vb.) kurallarını tanımlamalıdır.

## Placeholder Tanımları

- `{{LOADING_STATE_SPEC}}`: Skeleton/Spinner görsel ve UX standartları.
- `{{EMPTY_STATE_SPEC}}`: Veri olmadığında gösterilecek ilustrasyon/metin ve yönlendirme butonu.
- `{{ERROR_STATE_SPEC}}`: Hata mesajı, ikonu ve tekrar deneme (Retry) mekanizması.

## Kapsam Dışı

- Tekil sayfa tasarımları (bkz: `PAGE_SPEC_TEMPLATE.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Ortak sistem durumları sözleşmesi.
- Referenced By: `DESIGN_RULES.md`, `PAGE_SPEC_TEMPLATE.md`.

## Delivery Profile Davranışı

- Kullanıcıya her senaryoda tutarlı geri bildirim verilmesini sağlar.

## Validation Beklentileri

- Standart arayüz durumlarının tümünü kapsamalıdır.

---

# OUTPUT DOCUMENT START

# System States Specification

## 1. Yüklenme Durumu (Loading State)

{{LOADING_STATE_SPEC}}

## 2. Boş Veri Durumu (Empty State)

{{EMPTY_STATE_SPEC}}

## 3. Hata Durumu (Error State)

{{ERROR_STATE_SPEC}}

## 4. Başarı / Onay Durumu (Success State)

- İşlem başarılı olduğunda gösterilecek toast/modal/bildirim standartları.

[CONDITIONAL: include only if offline mode is supported]
## 5. Çevrimdışı (Offline) Durumu

- İnternet bağlantısı kesildiğinde gösterilecek uyarı ve offline önbellek davranışı.

# OUTPUT DOCUMENT END
