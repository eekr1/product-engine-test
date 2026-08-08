# PACKAGE_SELECTION_TEMPLATE

## Template Metadata

```yaml
template_id: package-selection-template
template_name: Package Selection Operational Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: operational
category: runs
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
  - package_rules
conditional_inputs: []
dependencies: []
output_filename: PACKAGE_SELECTION.md
```

## Amaç

Run için hangi temel paketin (base package), eklentilerin (extensions) ve teslimat profilinin (delivery profile) neden seçildiğini gerekçeleriyle belgelemek.

## Kullanım Koşulları

Run başlangıcında (`Initialized` aşaması) oluşturulur.

## Girdi Kaynakları

- Approved Intake
- `engine/PACKAGE_RULES.md`
- Paket Belgeleri (`packages/`)

## Zorunlu Bölümler

- Seçilen Paket ve Profil (Selected Package & Profile)
- Seçim Gerekçesi ve Sinyaller (Selection Rationale & Signals)
- Dahil Edilen Doküman Listesi (Included Documents List)
- Hariç Tutulan / İptal Edilen Dokümanlar (Excluded Documents)

## Koşullu Bölümler

- `[CONDITIONAL: include only if package extensions are applied]` Uygulanan Paket Eklentileri (Extensions)

## İçerik Üretim Kuralları

- `engine/PACKAGE_RULES.md` karar mantığını yeniden yazmaz; run'a özel seçim kanıtını saklar.
- Doküman zorunlulukları (required vs conditional) belirtilmelidir.

## Placeholder Tanımları

- `{{RUN_ID}}`: Run kimliği.
- `{{BASE_PACKAGE_ID}}`: Seçilen temel paket (örn: `saas-package`).
- `{{DELIVERY_PROFILE}}`: Seçilen profil.
- `{{SELECTION_RATIONALE}}`: Seçim mantığı ve intake sinyalleri.
- `{{INCLUDED_DOCS_TABLE}}`: Üretilecek dokümanların listesi ve nedenleri.

## Kapsam Dışı

- Paket kurallarının genel tanımları (bkz: `engine/PACKAGE_RULES.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: Run paket seçim kanıtı.
- Referenced By: `RUN_MANIFEST_TEMPLATE.md`.

## Delivery Profile Davranışı

- Hangi dokümanların neden üretildiğini şeffaf hale getirir.

## Validation Beklentileri

- Seçilen paket `engine/PACKAGE_RULES.md` karar matrisi ile uyumlu olmalıdır.

---

# OUTPUT DOCUMENT START

# Package Selection — {{RUN_ID}}

## 1. Seçilen Paket ve Profil

- **Temel Paket**: {{BASE_PACKAGE_ID}}
- **Delivery Profile**: {{DELIVERY_PROFILE}}
- **Proje Türü**: {{PROJECT_TYPE}}

## 2. Seçim Gerekçesi

{{SELECTION_RATIONALE}}

## 3. Üretilecek Doküman Listesi

{{INCLUDED_DOCS_TABLE}}

## 4. Hariç Bırakılan Dokümanlar

- Kapsam ve profil uyarınca bu çalışmada üretilmeyecek dokümanlar ve nedenleri.

[CONDITIONAL: include only if package extensions are applied]
## 5. Uygulanan Paket Eklentileri (Extensions)

- Eklenecek ek doküman veya yapısal modüller.

# OUTPUT DOCUMENT END
