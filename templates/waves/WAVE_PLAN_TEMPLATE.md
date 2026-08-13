# WAVE_PLAN_TEMPLATE

## Template Metadata

```yaml
template_id: wave-plan-template
template_name: Canonical Wave Plan Template
document_id: WAVE-PLAN
version: 2.4.0
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

- WAVE_MAP tarafından atanmış tek coherent deliverable'ı tamamlamalı,
- bağımsız doğrulanabilmeli,
- dependency zinciri açık olmalı,
- makul bir çalışma oturumunda ilerletilebilir olmalı,
- gereksiz mikro-wave veya dev mega-wave olmamalıdır.

WAVE_PLAN kötü decomposition'ı task numaralarıyla gizleyemez. Map'te tek wave altında birbirinden bağımsız birkaç product surface/feature bulunuyorsa plan decomposition problemi olarak işaretlemeli ve map repair'ına dönmelidir.

Implementation checklist çoğu normal wave'de yaklaşık **10–20 doğrulanabilir görev** derinliğine ulaşabilir. Bu kota değildir; önemli olan agent'ın tekrar plan çıkarmak zorunda kalmamasıdır.

## Complete Deliverable Kuralı

WAVE_MAP bir wave'e `Home`, `Auth`, `Search`, `Checkout`, `API Foundation` veya başka coherent delivery unit atadıysa, wave sonunda bu unit applicable kapsamıyla tamamlanmış olmalıdır.

User-facing surface için applicable olduğunda:

```text
structure/content
visual hierarchy
interaction states
responsive behavior
loading/empty/error states
accessibility/keyboard behavior
service/data boundary integration
verification/manual QA
```

birlikte ele alınır.

Bir surface'in kendi completion sorumluluğu belirsiz `polish later` wave'ine atılamaz. Ancak whole-project regression/final responsive/cross-browser QA farklı bir cross-cutting responsibility ise ayrı final QA wave'ine aittir.

---

# Approved Scope Boundary

WAVE_PLAN yalnız approved **current scope** üretir.

Approved input kategorileri:

```text
In Scope / Known Decisions / verified current truth
→ wave deliverable/task olabilir

Future Possibilities
→ current wave task OLAMAZ

Open Questions / unresolved optional ideas
→ current wave task OLAMAZ

Out of Scope
→ current wave task OLAMAZ
```

Canonical kural:

> Future possibility is not approved scope.

Örnek:

```text
Future Possibilities:
- WhatsApp hızlı destek
- interactive teklif formu
- canlı harita

Current WAVE_PLAN:
- WhatsApp butonu ekle       → INVALID
- Teklif formu simülasyonu   → INVALID
- Canlı harita entegre et    → INVALID
```

Bu öğeler yalnız future/unresolved context olarak anılabilir. Committed implementation task olması için explicit approval + gerekirse yeni input version gerekir.

WAVE_MAP yanlışlıkla future/out-of-scope işi wave'e atamışsa WAVE_PLAN bunu takip etmez; generation map repair'ına döner.

---

# Content Truth Boundary

WAVE_PLAN implementation detayını zenginleştirebilir; fakat approved/verified project truth'u yeni business gerçekleriyle zenginleştiremez.

> Execution planning may transform approved facts into implementation tasks, but may not enrich them into new business claims.

Business/product/service factual claim yalnız aşağıdaki kaynaklardan trace edilebiliyorsa kullanılabilir:

```text
approved input / INPUT_SNAPSHOT
verified project source / SOURCE_REGISTER
canonical PRODUCT_RULES or equivalent project truth authority
```

Allowed:

```text
Approved truth: "Yerinde Teknik Destek"
Wave task: "Yerinde Teknik Destek hizmet kartını oluştur"
```

Not allowed, kaynakta açıkça doğrulanmadıkça:

```text
"7/24 teknik destek"
"hızlı teslimat"
"orijinal/garantili yedek parça"
"mobil servis ekibi"
"aynı gün müdahale"
"hidrolik revizyon"
"periyodik bakım"
"sertifikalı uzman kadro"
performans/süre/garanti/coğrafi kapsam iddiaları
```

Design treatment, layout, interaction, iconography ve görsel dil `Engine Resolved` olabilir. Bunlar firma/hizmet hakkında yeni factual claim'e dönüşemez.

Factual provenance bulunamıyorsa:

```text
remove factual enrichment
or
use neutral wording tied to the approved service name
or
stop for clarification if execution-critical
```

---

# Pre-Execution State Semantics

Generation aşamasında wave henüz uygulanmamıştır:

```text
Ready for Execution / Pending Execution / Blocked
→ Implementation Checklist: [ ]
→ Acceptance / Exit Criteria: [ ]
→ Wave Result: pending / not executed
```

`[x]` yalnız wave gerçekten execute edilmiş ve ilgili madde doğrulanmışsa kullanılabilir.

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

- WAVE_MAP scope'unu aşamaz veya map'te başka wave'e ait deliverable'ı içine çekemez.
- Approved Scope Boundary ihlal edilemez.
- Future/Open/Out-of-Scope öğesi committed task'a dönüştürülemez.
- Checklist coherent implementation groups altında atomic ve doğrulanabilir görevlere ayrılır.
- Her görev gerçek bir çıktı üretmeli ve done koşulu anlaşılmalıdır.
- Her wave sonunda beklenen dosya/klasör/bileşen/state sonucu açıkça anlaşılmalıdır.
- Teknik boundary, design authority ve data/service sınırları task seviyesinde korunur.
- Business/service factual claim'ler Content Truth Boundary'yi ihlal edemez.
- TECH_CONTEXT boundary'lerini değiştirecek iş varsa explicit decision/clarification gerekip gerekmediği belirtilir.
- Design scope varsa ilgili canonical design docs listelenir.
- Dependency chain açık yazılır.
- Test/QA komutları yalnız gerçek execution stack kesinleşmişse yazılır.
- Aktif wave'i uygulamak için gerekli stack/tool/architecture kararı unresolved ise wave `Ready for Execution` olamaz.
- Kullanıcı onayı gereken checkpoint varsa açık stop rule belirtilir.
- Wave tamamlanmadan sonuç bölümü başarıyla doldurulmuş gibi gösterilmez.
- Acceptance criteria somut completion sonuçları içermelidir.

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
- Assigned deliverable wave sonunda complete olmalı.
- Active wave başka planlama turu olmadan uygulanabilir olmalı.
- Expected Result, checklist ve acceptance criteria aynı teslimi tarif etmeli.
- Başka wave olması gereken bağımsız deliverable'lar task numaraları altında saklanmamalı.
- Future/Open/Out-of-Scope item committed task olmamalı.
- Business/service factual claim'lerin approved/verified provenance'ı olmalı.
- NEXT_TASKS aktif wave'in ilk uygulanabilir görevleriyle uyumlu olmalı.
- Pre-execution planlarda checkbox'lar `[ ]` olmalı ve Wave Result başarı iddia etmemeli.
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
