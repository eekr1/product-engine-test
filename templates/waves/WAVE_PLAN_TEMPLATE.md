# WAVE_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: wave-plan-template
template_name: Canonical Wave Plan Template
document_id: WAVE-PLAN
version: 2.1.0
status: active
template_type: dynamic-document
category: waves
supported_packages:
  - all
supported_delivery_profiles:
  - foundation
  - prototype
  - implementation-ready
  - production-ready
supported_implementation_planning:
  - standard
  - full
required_inputs:
  - wave_map
  - tech_context
conditional_inputs:
  - product_rules
  - design_documents
  - test_strategy
dependencies:
  - WAVE-MAP
  - TECH-CTX
output_filename_pattern: waves/plans/WAVE_<NN>.md
```

## Amaç

Tek bir implementation wave'ini başka bir mimari/teknik planlama turu gerektirmeden uygulanabilir hâle getiren canonical execution contract'ıdır.

> **A wave is not a task summary. It is an execution contract.**

Her wave için aynı template kullanılır. Yeni wave yeni Document ID değildir.

## Wave Boyutu İlkesi

Bir wave:

- tek anlamlı teslim üretmeli,
- bağımsız doğrulanabilmeli,
- dependency zinciri açık olmalı,
- makul bir çalışma oturumunda ilerletilebilir olmalı,
- gereksiz mikro-wave veya dev mega-wave olmamalıdır.

Implementation checklist çoğu normal wave'de yaklaşık **10–20 doğrulanabilir görev** derinliğine ulaşabilir. Bu kota değildir; önemli olan agent'ın tekrar plan çıkarmak zorunda kalmamasıdır.

## Zorunlu Bölümler

- Wave Identity & Status
- Goal
- Why This Wave / Dependency Rationale
- Canonical Sources to Read
- Dependencies
- In Scope / Out of Scope
- Expected Result / Target Structure
- Implementation Checklist
- State / Role / Responsive Coverage
- Automated Verification
- Manual QA / Debug Verification
- Acceptance / Exit Criteria
- Handoff / Stop Rule
- Wave Result

## İçerik Üretim Kuralları

- WAVE_MAP scope'unu aşamaz.
- Checklist kısa görev özeti olamaz; anlamlı alt başlıklara bölünür.
- Her görev atomic, doğrulanabilir ve gerçek bir çıktı üretir.
- Her wave sonunda beklenen dosya/klasör/bileşen/state sonucu açıkça anlaşılmalıdır.
- Teknik boundary, design authority ve data/service sınırları task seviyesinde korunur.
- TECH_CONTEXT boundary'lerini değiştirecek iş varsa bunun explicit decision/clarification gerektirip gerektirmediği belirtilir.
- Design scope varsa ilgili canonical design docs listelenir.
- Her wave'in dependency chain'i açıkça yazılır; okuyucuya tahmin ettirilmez.
- Test/QA komutları yalnız gerçek execution stack kesinleşmişse yazılır; bilinmeyen komut uydurulmaz.
- Aktif wave'i uygulamak için gerekli stack/tool/architecture kararı unresolved ise wave `Ready for Execution` olamaz; stop/clarification gerekir.
- Kullanıcı onayı gereken checkpoint varsa açık stop rule belirtilir.
- Wave tamamlanmadan sonuç bölümü başarıyla doldurulmuş gibi gösterilmez.

## Task Derinlik Standardı

Her anlamlı task veya task grubu şu dört soruya cevap vermelidir:

```text
Ne yapılacak?
Hangi boundary/kurallar korunacak?
Beklenen somut sonuç nedir?
Done olduğu nasıl doğrulanacak?
```

Uzun tutorial yazılmaz; fakat agent'ın yeniden implementation planı üretmesine ihtiyaç bırakılmaz.

## Placeholder Tanımları

- `{{PROJECT_NAME}}`
- `{{WAVE_ID}}`
- `{{WAVE_NAME}}`
- `{{WAVE_STATUS}}`
- `{{WAVE_GOAL}}`
- `{{WHY_THIS_WAVE}}`
- `{{CANONICAL_SOURCES}}`
- `{{DEPENDENCIES}}`
- `{{IN_SCOPE}}`
- `{{OUT_OF_SCOPE}}`
- `{{EXPECTED_RESULT}}`
- `{{IMPLEMENTATION_CHECKLIST}}`
- `{{STATE_ROLE_COVERAGE}}`
- `{{AUTOMATED_VERIFICATION}}`
- `{{MANUAL_QA}}`
- `{{ACCEPTANCE_CRITERIA}}`
- `{{HANDOFF_STOP_RULE}}`
- `{{WAVE_RESULT_PLACEHOLDER}}`

## Validation Beklentileri

- Wave map'teki scope ve dependency ile birebir uyumlu olmalı.
- Active wave başka bir planlama turu olmadan uygulanabilir olmalı.
- Expected Result ile checklist ve acceptance criteria aynı teslimi tarif etmeli.
- Acceptance criteria task listesinin gerçek sonucunu ölçmeli.
- NEXT_TASKS aktif wave'in ilk uygulanabilir görevleriyle uyumlu olmalı.
- Kapsam dışı maddeler açık olmalı.
- Kanıt olmadan tamamlanmış state yazılmamalı.

---

# OUTPUT DOCUMENT START

# {{PROJECT_NAME}} — {{WAVE_ID}}: {{WAVE_NAME}}

- **Status**: {{WAVE_STATUS}}
- **Goal**: {{WAVE_GOAL}}

## 1. Why This Wave / Dependency Rationale

{{WHY_THIS_WAVE}}

## 2. Canonical Sources to Read

{{CANONICAL_SOURCES}}

## 3. Dependencies

{{DEPENDENCIES}}

## 4. Scope

### In Scope

{{IN_SCOPE}}

### Out of Scope

{{OUT_OF_SCOPE}}

## 5. Expected Result / Target Structure

{{EXPECTED_RESULT}}

## 6. Implementation Checklist

{{IMPLEMENTATION_CHECKLIST}}

## 7. State / Role / Responsive Coverage

{{STATE_ROLE_COVERAGE}}

## 8. Automated Verification

{{AUTOMATED_VERIFICATION}}

## 9. Manual QA / Debug Verification

{{MANUAL_QA}}

## 10. Acceptance / Exit Criteria

{{ACCEPTANCE_CRITERIA}}

## 11. Handoff / Stop Rule

{{HANDOFF_STOP_RULE}}

---

## Wave Result

> Bu bölüm wave tamamlandıktan sonra gerçek sonuç, değişen önemli alanlar, validation sonucu ve varsa kullanıcı approval bilgisiyle doldurulur. Wave başlamadan başarı sonucu uydurulmaz.

{{WAVE_RESULT_PLACEHOLDER}}

# OUTPUT DOCUMENT END
