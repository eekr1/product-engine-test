# OPERATIONS_TEMPLATE

## Template Metadata

```yaml
template_id: operations-template
template_name: Operations Template
document_id: OPS
version: 1.0.0
status: active
template_type: document
category: project
supported_packages:
  - web-app
  - api-service
  - saas
supported_delivery_profiles:
  - production-ready
required_inputs:
  - approved_intake
conditional_inputs: []
dependencies:
  - DEPLOY
output_filename: OPERATIONS.md
```

## Amaç

Sistemin production ortamında nasıl işletileceğini, izleneceğini (monitoring), alarm mekanizmalarını, yedekleme (backup) ve olay müdahale (incident response) prosedürlerini tanımlamak.

## Kullanım Koşulları

Production Ready delivery profile seviyesindeki projelerde zorunludur. Gereksiz enterprise bürokrasisi oluşturulmamalıdır.

## Girdi Kaynakları

- `DEPLOYMENT.md`
- `TECH_CONTEXT.md`

## Zorunlu Bölümler

- İzleme ve Metrikler (Monitoring & Metrics)
- Alarm Kriterleri ve Kanalları (Alerting Rules)
- Yedekleme ve Kurtarma (Backup & Recovery)
- Olay Müdahale Prosedürleri (Incident Response)

## Koşullu Bölümler

- `[CONDITIONAL: include only if scheduled maintenance exists]` Rutin Bakım Prosedürleri

## İçerik Üretim Kuralları

- Yalın, uygulanabilir ve pratik operasyonel rehberlik sunmalıdır.
- Gereksiz bürokratik onay süreçleri veya uydurma operasyon ekipleri eklenmemelidir.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`: Proje adı.
- `{{MONITORING_SETUP_SUMMARY}}`: Health check, log takibi ve performans izleme.
- `{{ALERTING_RULES_LIST}}`: Kritik durum alarm kuralları ve eşik değerleri.
- `{{BACKUP_STRATEGY_BLOCK}}`: Veritabanı ve dosya yedekleme sıklığı/yöntemi.
- `{{INCIDENT_RESPONSE_STEPS}}`: Çökme veya kesinti anında atılacak adımlar.

## Kapsam Dışı

- CI/CD build ve deploy adımları (bkz: `DEPLOYMENT.md`)
- Kod seviyesi hataların ayıklanması

## Diğer Dokümanlarla İlişki

- Primary Owner: `monitoring`, `alerting`, `backup`, `incident_response`, `maintenance_procedures`.
- Referenced By: `DEPLOYMENT.md`.

## Delivery Profile Davranışı

- Production Ready projelerde sistem sürekliliği ve operasyonel kalite için gereklidir.

## Validation Beklentileri

- `DEPLOYMENT.md` altyapısı ile çelişmemelidir.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — Operations

## 1. İzleme ve Metrikler (Monitoring & Metrics)

{{MONITORING_SETUP_SUMMARY}}

## 2. Alarm Kriterleri ve Bildirimler (Alerting)

{{ALERTING_RULES_LIST}}

## 3. Yedekleme ve Kurtarma (Backup & Recovery)

{{BACKUP_STRATEGY_BLOCK}}

## 4. Olay Müdahale Prosedürü (Incident Response)

{{INCIDENT_RESPONSE_STEPS}}

[CONDITIONAL: include only if scheduled maintenance exists]
## 5. Rutin Bakım Prosedürleri

- Periyodik veritabanı temizliği, güncelleme ve bakım pencereleri.

# OUTPUT DOCUMENT END
