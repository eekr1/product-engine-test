# TEST_STRATEGY_TEMPLATE

## Template Metadata

```yaml
template_id: test-strategy-template
template_name: Test Strategy Template
document_id: TEST
version: 1.0.0
status: active
template_type: document
category: project
supported_packages:
  - web-app
  - api-service
  - mobile-app
  - saas
supported_delivery_profiles:
  - implementation-ready
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs: []
dependencies:
  - PROJECT-BRAIN
  - TECH-CTX
output_filename: TEST_STRATEGY.md
```

## Amaç

Projenin nasıl test edileceğini, hangi test katmanlarının (unit, integration, e2e) kullanılacağını, kapsama hedeflerini ve doğrulama süreçlerini tanımlamak.

## Kullanım Koşulları

Implementation Ready ve Production Ready projelerde zorunludur.

## Girdi Kaynakları

- `PROJECT_BRAIN.md`, `TECH_CONTEXT.md`

## Zorunlu Bölümler

- Test Katmanları ve Kapsam (Test Levels & Scope)
- Test Araçları ve Frameworkler (Test Tools & Frameworks)
- Kritik Test Senaryoları (Critical Test Scenarios)
- Kapsama ve Kalite Hedefleri (Coverage & Quality Targets)

## Koşullu Bölümler

- `[CONDITIONAL: include only if automated e2e testing is required]` E2E Otomasyon Stratejisi

## İçerik Üretim Kuralları

- Belirli bir test kütüphanesini önceden varsayılan gerçek gibi dayatmamalı; projenin stack kararına (`TECH_CONTEXT.md`) uyumlu test yaklaşımı sunmalıdır.
- Kritik kullanıcı akışlarını kapsayan somut senaryolar içermelidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{TEST_LEVELS_SUMMARY}}`: Birim, entegrasyon ve kabul test katmanları.
- `{{TEST_TOOLS_LIST}}`: Kullanılacak test kütüphaneleri ve araçları.
- `{{CRITICAL_SCENARIOS_LIST}}`: Kritik iş akışlarının test senaryoları.
- `{{COVERAGE_TARGETS_SUMMARY}}`: Hedeflenen kod kapsam yüzdeleri ve kalite eşikleri.

## Kapsam Dışı

- Tekil test kodlarının tam metinleri
- Dağıtım sunucusu kurulumları (bkz: `DEPLOYMENT.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `test_levels`, `test_scope`, `coverage_targets`, `test_tools`.
- Referenced By: `WAVE_PLAN.md`, `NEXT_TASKS.md`.

## Delivery Profile Davranışı

- **Implementation Ready**: Temel unit ve integration test yaklaşımı.
- **Production Ready**: Otomatik E2E testleri, CI test kapıları (quality gates) ve performans/güvenlik test stratejileri.

## Validation Beklentileri

- Test araçları `TECH_CONTEXT.md` ile uyumlu seçilmelidir.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Test Strategy

## 1. Test Katmanları ve Kapsam

{{TEST_LEVELS_SUMMARY}}

## 2. Test Araçları ve Frameworkler

{{TEST_TOOLS_LIST}}

## 3. Kritik Test Senaryoları

{{CRITICAL_SCENARIOS_LIST}}

## 4. Kapsama ve Kalite Hedefleri

{{COVERAGE_TARGETS_SUMMARY}}

[CONDITIONAL: include only if automated e2e testing is required]
## 5. End-to-End (E2E) Otomasyon Stratejisi

- UI ve entegrasyon seviyesinde E2E senaryolarının otomasyonu.

# OUTPUT DOCUMENT END
