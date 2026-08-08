# PROJECT_BRAIN_TEMPLATE

## Template Metadata

```yaml
template_id: project-brain-template
template_name: Project Brain Template
document_id: PROJECT-BRAIN
version: 1.0.0
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
conditional_inputs: []
dependencies: []
output_filename: PROJECT_BRAIN.md
```

## Amaç

Projenin tüm bağlamını, amacını, hedef kitlesini, mimari özetini ve durumunu tek bir yerde özetleyen ajanın birincil başvuru belgesini oluşturmak.

## Kullanım Koşulları

Tüm proje paketlerinde ve delivery profile seviyelerinde zorunludur (`Required: required`).

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- `engine/INFORMATION_MAP.md` (Bağlam sınırları uyarınca)

## Zorunlu Bölümler

- Proje Kimliği ve Amacı
- Problem ve Değer Önermesi
- Hedef Kullanıcı Kitleleri
- Temel Kapsam Özeti
- Sistem Mimari Özeti
- Kritik Kararlar Özet Tablosu
- Aktif Faz ve Durum Özeti
- İlgili Doküman Referansları

## Koşullu Bölümler

- `[CONDITIONAL: include only if product has strategy document]` Büyüme ve Strateji Özeti

## İçerik Üretim Kuralları

- `PROJECT_BRAIN.md` projenin merkezi özetidir; diğer detaylı belgelerin (örn: `PRODUCT_RULES`, `TECH_CONTEXT`) tam metinlerini kopyalamamalı, özetleyip ilgili belgelere link/referans vermelidir.
- Uydurma veya varsayımsal bilgi eklenmemelidir. Eksik bilgiler için `engine/ASSUMPTION_RULES.md` uyarınca kayıt yapılmalıdır.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Projenin resmi adı.
- `{{PROJECT_SLUG}}`: Projenin kısa kimliği (slug).
- `{{PROJECT_PURPOSE}}`: Projenin tek cümlelik tanımı ve amacı.
- `{{PROBLEM_STATEMENT}}`: Çözülen temel problem.
- `{{VALUE_PROPOSITION}}`: Sağlanan değer önermesi.
- `{{TARGET_USERS_LIST}}`: Hedef kullanıcı rolleri listesi.
- `{{SCOPE_SUMMARY}}`: Kapsam içi ve kapsam dışı özet.
- `{{TECH_STACK_SUMMARY}}`: Kullanılan teknoloji yığını özeti.
- `{{KEY_DECISIONS_TABLE}}`: Kritik mimari ve ürün kararlarının özet tablosu.
- `{{CURRENT_PHASE_SUMMARY}}`: Projenin mevcut aşaması ve durumu.

## Kapsam Dışı

- Detaylı API sözleşmeleri (bkz: `API_CONTRACTS.md`)
- Detaylı veritabanı şemaları (bkz: `DATA_MODEL.md`)
- Tam kodlama kuralları (bkz: `AGENT_INSTRUCTIONS.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `project_purpose`, `project_summary`, `tech_overview`, `scope_summary`, `key_decisions_summary`, `current_phase_summary`.
- Referenced By: `README.md`, `CURRENT_STATUS.md`, `TECH_CONTEXT.md`, `PRODUCT_RULES.md`.

## Delivery Profile Davranışı

- **Foundation**: Yüksek seviye proje amacı ve temel kapsam özeti.
- **Prototype**: Kullanıcı rolleri ve görsel/işlevsel odak noktaları eklenir.
- **Implementation Ready**: Detaylı bağımlılık haritası ve karar tablosu eklenir.
- **Production Ready**: Operasyonel hedefler ve sürdürülebilirlik notları dahil edilir.

## Validation Beklentileri

- `PRODUCT_RULES.md` ve `TECH_CONTEXT.md` ile bağlamsal çelişki barındırmamalıdır.
- Çözülmemiş placeholder kalmamalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: {{PROJECT_NAME}}
- **Proje Slug**: {{PROJECT_SLUG}}
- **Tanım**: {{PROJECT_PURPOSE}}

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: {{PROBLEM_STATEMENT}}
- **Değer Önermesi**: {{VALUE_PROPOSITION}}

## 3. Hedef Kullanıcı Kitleleri

{{TARGET_USERS_LIST}}

## 4. Temel Kapsam Özeti

{{SCOPE_SUMMARY}}

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: {{TECH_STACK_SUMMARY}}

## 6. Kritik Kararlar Özet Tablosu

{{KEY_DECISIONS_TABLE}}

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: {{CURRENT_PHASE_SUMMARY}}

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)

# OUTPUT DOCUMENT END
