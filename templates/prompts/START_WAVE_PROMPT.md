# START_WAVE_PROMPT

## Template Metadata

```yaml
template_id: start-wave-prompt
template_name: Start Wave Prompt Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: prompt
category: prompts
supported_packages:
  - web-app
  - api-service
  - mobile-app
  - content-platform
  - saas
supported_delivery_profiles:
  - implementation-ready
  - production-ready
required_inputs:
  - wave_map
conditional_inputs: []
dependencies: []
output_filename: not_applicable
```

## Amaç

Projeyle ilgili belirlenmiş belirli bir dalgayı (Wave) başlatan ajana yönelik repository-first çalışma prompt'udur.

## Kullanım Koşulları

Bir teslimat dalgası (Wave) başlatılırken kullanılır.

## İçerik Üretim Kuralları

- Model bağımsızdır.
- Ajanı `WAVE_MAP.md` ve ilgili `WAVE_PLAN.md` belgelerini okumaya ve kapsam sınırlarına uymaya zorlar.

---

# PROMPT START

# Wave Başlatma Talimatı (Start Wave)

Belirtilen Dalga ID'si (`{{TARGET_WAVE_ID}}`) için aşağıdaki adımları uygulayarak çalışmayı başlat:

1. **Önce Oku**:
   - `WAVE_MAP.md`
   - `WAVE_PLAN.md` (ilgili dalga planı)
   - `PROJECT_BRAIN.md`
   - `PRODUCT_RULES.md`
   - `TECH_CONTEXT.md`

2. **Kapsam ve Bağımlılık Kontrolü**:
   - `{{TARGET_WAVE_ID}}` için tanımlanan kapsam içi maddeleri ve çıkış kriterlerini doğrula.
   - Önceki dalga çıkış kriterlerinin karşılandığını teyit et.

3. **Çalışma İlerlemesini Güncelle**:
   - `CURRENT_STATUS.md` ve `NEXT_TASKS.md` belgelerini güncelle.

4. **Uygulamaya Başla**:
   - Dalga planındaki görevleri sırayla yürüt. Kod veya dokümantasyon ürettikçe doğrulama kriterlerini uygula.

Kapsam dışı olarak belirtilen maddelere müdahale etme.

# PROMPT END
