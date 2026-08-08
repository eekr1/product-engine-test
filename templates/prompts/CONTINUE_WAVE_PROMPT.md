# CONTINUE_WAVE_PROMPT

## Template Metadata

```yaml
template_id: continue-wave-prompt
template_name: Continue Wave Prompt Template
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
  - current_status
  - next_tasks
conditional_inputs: []
dependencies: []
output_filename: not_applicable
```

## Amaç

Aktif olarak devam eden bir dalga çalışmasında (In-Progress Wave) ajanın kaldığı yerden devam etmesini sağlayan prompt şablonudur.

## Kullanım Koşulları

Mevcut bir wave çalışması sürdürülürken veya yeni oturum açıldığında kullanılır.

## İçerik Üretim Kuralları

- Model bağımsızdır.
- Ajanı doğrudan durum belgelerini okumaya yönlendirir.

---

# PROMPT START

# Wave Devam Ettirme Talimatı (Continue Wave)

Aktif dalga çalışmasına devam etmek için aşağıdaki adımları izle:

1. **Durum İncelemesi**:
   - `CURRENT_STATUS.md` dosyasını oku ve tamamlanan/devam eden işleri doğrula.
   - `NEXT_TASKS.md` dosyasından sıradaki birinci görevi tespit et.

2. **Engelleri Kontrol Et**:
   - Bilinen bir engel (blocker) varsa, önce engeli çöz veya `ASSUMPTION_RULES.md` uyarınca kayıt al.

3. **Görevi Yürüt ve Doğrula**:
   - Sıradaki somut görevi uygula.
   - Kabul kriterlerini çalıştırarak doğrulama yap.

4. **Kapanış Güncellemesi**:
   - Görev tamamlandığında `CURRENT_STATUS.md` ve `NEXT_TASKS.md` dosyalarını anlık durumla güncelle.

# PROMPT END
