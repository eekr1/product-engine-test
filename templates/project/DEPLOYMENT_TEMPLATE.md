# DEPLOYMENT_TEMPLATE

## Template Metadata

```yaml
template_id: deployment-template
template_name: Deployment Template
document_id: DEPLOY
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
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs: []
dependencies:
  - TECH-CTX
output_filename: DEPLOYMENT.md
```

## Amaç

Sistemin staging ve production ortamlarına nasıl dağıtılacağını (deploy), CI/CD adımlarını, ortam değişkenlerini ve geri alma (rollback) stratejilerini tanımlamak.

## Kullanım Koşulları

Production Ready delivery profile seviyesinde zorunludur.

## Girdi Kaynakları

- Approved Project Intake (`engine/PROJECT_INTAKE.md`)
- `TECH_CONTEXT.md`

## Zorunlu Bölümler

- Dağıtım Hedefleri ve Altyapı (Deployment Targets)
- Dağıtım Adımları ve Pipeline (Deployment Steps & Pipeline)
- Ortam Değişkenleri ve Yapılandırma (Environment Configuration)
- Geri Alma Stratejisi (Rollback Strategy)

## Koşullu Bölümler

- `[CONDITIONAL: include only if SSL/domain setup is required]` Domain ve SSL Yapılandırması

## İçerik Üretim Kuralları

- Kullanıcı tarafından doğrulanmamış hosting, domain veya secret değerleri uydurulmamalıdır.
- Gerçek secret, token veya API key örneği içermemelidir (`{{SECRET_NAME}}` formatı kullanılmalıdır).

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{DEPLOYMENT_TARGET_SUMMARY}}`: Vercel, AWS, Docker vb. hedef altyapı.
- `{{PIPELINE_STEPS_LIST}}`: Derleme, test ve canlıya alma adımları.
- `{{REQUIRED_ENV_VARS_LIST}}`: Üretim ortam değişkenleri isim listesi.
- `{{ROLLBACK_PROCEDURE}}`: Başarısız dağıtımda geri alma adımları.

## Kapsam Dışı

- Operasyonel izleme ve alarm kuralları (bkz: `OPERATIONS.md`)
- Kod seviyesi test stratejileri (bkz: `TEST_STRATEGY.md`)

## Diğer Dokümanlarla İlişki

- Primary Owner: `deployment_target`, `deployment_steps`, `env_variables`, `rollback_strategy`.
- Referenced By: `TECH_CONTEXT.md`, `OPERATIONS.md`.

## Delivery Profile Davranışı

- Production Ready projelerde canlıya çıkışın tüm teknik altyapı gereksinimlerini eksiksiz belgelemek.

## Validation Beklentileri

- Gerçek API anahtarı veya şifre sızdırılmamalıdır.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Deployment

## 1. Dağıtım Hedefleri ve Altyapı

{{DEPLOYMENT_TARGET_SUMMARY}}

## 2. Dağıtım Adımları ve Pipeline (CI/CD)

{{PIPELINE_STEPS_LIST}}

## 3. Ortam Değişkenleri ve Yapılandırma

{{REQUIRED_ENV_VARS_LIST}}

## 4. Geri Alma Stratejisi (Rollback)

{{ROLLBACK_PROCEDURE}}

[CONDITIONAL: include only if SSL/domain setup is required]
## 5. Domain ve SSL Yapılandırması

- DNS ayarları, SSL sertifikaları ve yönlendirme kuralları.

# OUTPUT DOCUMENT END
