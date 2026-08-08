# UPDATE_DOCS_PROMPT

## Template Metadata

```yaml
template_id: update-docs-prompt
template_name: Update Docs Prompt Template
document_id: not_applicable
version: 1.0.0
status: active
template_type: prompt
category: prompts
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
required_inputs:
  - changed_sources
conditional_inputs: []
dependencies: []
output_filename: not_applicable
```

## Amaç

Proje girdilerinde, kararlarında veya kapsam sınırlarında değişiklik meydana geldiğinde dokümantasyon paketinin güncellenmesini tetikleyen prompt şablonudur.

## Kullanım Koşulları

Değişiklik veya güncelleme run'larında (Update Run) kullanılır.

## İçerik Üretim Kuralları

- Model bağımsızdır.
- Ajanı `engine/INFORMATION_MAP.md` belgesindeki güncelleme zincirine zorlar.

---

# PROMPT START

# Dokümantasyon Güncelleme Talimatı (Update Docs)

Değişen proje bilgisi uyarınca dokümantasyon paketini güncellemek için aşağıdaki adımları izle:

1. **Değişiklik Kaynağını İncele**:
   - `inputs/` içindeki güncellenmiş bilgiyi veya yeni kararı oku.

2. **Bilgi Sahipliğini Doğrula**:
   - `engine/INFORMATION_MAP.md` belgesine bakarak bilginin birincil sahibi olan dokümanı (Primary Owner) tespit et.

3. **Güncelleme Zincirini Çalıştır**:
   - Bilginin birincil sahibi olan dokümanı güncelle.
   - Bağımlı belgelerde (`Referenced By` ve `Derived Into`) güncelleme zincirini kontrol et ve gerekiyorsa güncelle (örn: `PROJECT_BRAIN` değiştiyse -> `TECH_CONTEXT` ve `PRODUCT_RULES` bağımlılıklarını incele).

4. **Çapraz Tutarlılık Kontrolü**:
   - `engine/VALIDATION_RULES.md` kurallarına göre belgeler arası çelişki olmadığını doğrula.

# PROMPT END
