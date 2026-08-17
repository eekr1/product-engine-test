# PROJECT_BRAIN_TEMPLATE

## Template Metadata

```yaml
template_id: project-brain-template
template_name: Project Brain Template
document_id: PROJECT-BRAIN
version: 1.1.0
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
required_inputs:
  - approved_intake
conditional_inputs:
  - approved_site_architecture
dependencies: []
output_filename: PROJECT_BRAIN.md
```

## Amaç

Projenin tüm bağlamını, amacını, hedef kitlesini, approved scope/site architecture özetini, mimari özetini ve durumunu tek yerde sunan ajanın birincil başvuru belgesini oluşturmak.

## Kullanım Koşulları

Tüm proje paketlerinde ve delivery profile seviyelerinde zorunludur.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- Corporate website için approved Site Architecture registry
- `engine/INFORMATION_MAP.md`

## Zorunlu Bölümler

- Proje Kimliği ve Amacı
- Problem ve Değer Önermesi
- Hedef Kullanıcı Kitleleri
- Temel Kapsam Özeti
- Site / Surface Architecture Özeti (applicable ise)
- Sistem Mimari Özeti
- Kritik Kararlar Özet Tablosu
- Aktif Faz ve Durum Özeti
- İlgili Doküman Referansları

## İçerik Üretim Kuralları

- PROJECT_BRAIN merkezi özet belgesidir; detay owner belgeleri kopyalanmaz.
- Corporate website'te approved `PAGE-XXX` seti kısa ve exact identity'lerle özetlenir.
- PROJECT_BRAIN yeni page/surface icat edemez veya approved distinct page'leri merge edemez.
- Uydurma/varsayımsal factual bilgi eklenmez.
- `Prototype` wording'i approved page breadth'ini küçültmez.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{PROJECT_SLUG}}`
- `{{PROJECT_TYPE}}`
- `{{PROJECT_PURPOSE}}`
- `{{PROBLEM_STATEMENT}}`
- `{{VALUE_PROPOSITION}}`
- `{{TARGET_USERS_LIST}}`
- `{{SCOPE_SUMMARY}}`
- `{{SITE_ARCHITECTURE_SUMMARY}}`
- `{{TECH_STACK_SUMMARY}}`
- `{{KEY_DECISIONS_TABLE}}`
- `{{CURRENT_PHASE_SUMMARY}}`

## Kapsam Dışı

- Site architecture semantiğini yeniden tanımlamak (bkz: `engine/SITE_ARCHITECTURE_RULES.md`)
- Detaylı API sözleşmeleri
- Detaylı data model
- Tam coding instructions

## Diğer Dokümanlarla İlişki

- Primary Owner: `project_purpose`, `project_summary`, `tech_overview`, `scope_summary`, `site_architecture_summary`, `key_decisions_summary`, `current_phase_summary`.
- Site architecture truth owner: Approved Project Input.
- Referenced By: `README.md`, `CURRENT_STATUS.md`, `TECH_CONTEXT.md`, `PRODUCT_RULES.md`.

## Validation Beklentileri

- Approved input ve site architecture ile exact identity consistency korunmalı.
- PRODUCT_RULES / TECH_CONTEXT ile çelişmemeli.
- Çözülmemiş placeholder kalmamalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: {{PROJECT_NAME}}
- **Proje Slug**: {{PROJECT_SLUG}}
- **Proje Türü**: {{PROJECT_TYPE}}
- **Tanım**: {{PROJECT_PURPOSE}}

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: {{PROBLEM_STATEMENT}}
- **Değer Önermesi**: {{VALUE_PROPOSITION}}

## 3. Hedef Kullanıcı Kitleleri

{{TARGET_USERS_LIST}}

## 4. Temel Kapsam Özeti

{{SCOPE_SUMMARY}}

## 5. Site / Surface Architecture Özeti

{{SITE_ARCHITECTURE_SUMMARY}}

## 6. Sistem Mimari Özeti

- **Teknoloji Yığını**: {{TECH_STACK_SUMMARY}}

## 7. Kritik Kararlar Özet Tablosu

{{KEY_DECISIONS_TABLE}}

## 8. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: {{CURRENT_PHASE_SUMMARY}}

## 9. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)

# OUTPUT DOCUMENT END
