# Validation Rules

## Amaç

Bu belge, Product Engine working output'unun final published output olmaya gerçekten hazır olup olmadığını doğrular.

Validation yalnız dosya varlığı kontrolü değildir; package/profile compliance, information ownership, dynamic instance coverage, design/architecture quality invariants, lifecycle integrity ve **agent-readiness** kontrolüdür.

---

# Sonuç Kategorileri

```text
PASS
→ Bütün blocking kontroller geçti; publication yapılabilir.

CONDITIONAL PASS
→ Non-blocking bulgu var; kullanıcı/operatör kabul ederse publication yapılabilir.

FAIL
→ Blocking contract ihlali var; publication yapılamaz, repair zorunludur.
```

İkinci repair validation'ında da blocking FAIL sürerse run `Failed` kapanır.

---

# 1. Approved Input / Approval Integrity

Kontrol:

- Input `status: approved` mı?
- `project_type`, `delivery_profile`, `implementation_planning`, `primary_language` mevcut ve canonical mı?
- UI/UX applicable ise `design_planning: light | standard | full` mevcut mu?
- Canonical explicit user approval kanıtı var mı?
- `approved_by: user` gerçek doğrudan kullanıcı onayıyla destekleniyor mu?
- IDE/tool/plan/auto-approval canonical approval gibi kullanılmış mı?

FAIL:

- pending input ile generation,
- invalid/missing planning profile,
- auto-approval ile approved snapshot,
- kanıtsız `approved_by: user`.

---

# 2. Package + Planning Overlay Compliance

Resolved document set:

```text
base package
+
packages/PLANNING_PROFILE_OVERLAY.md
+
contextual conditions
```

ile birebir uyumlu olmalıdır.

Kontrol:

- Base package doğru mu?
- Approved implementation/design profile korunmuş mu?
- Package reduction profile minimumunu düşürmüş mü?
- Gerekçesiz extra canonical document var mı?
- Conditional document gerçek scope koşuluyla gerekçeli mi?

FAIL:

- Standard implementation minimumundan belge eksiltmek,
- Light design'da DESIGN'i çıkarmak,
- required applicable belge eksikliği,
- gerçek scope olmadan sahte DATA/API/DEPLOY gibi contract üretmek.

Gerekçesiz fakat blocking olmayan extra belge → CONDITIONAL PASS.

---

# 3. Standard Implementation Minimum

Applicable implementation-bearing projede `implementation_planning: standard | full` için minimum:

```text
README-DOC
PROJECT-BRAIN
PRODUCT-RULES
TECH-CTX
STATUS
TASKS
DECISIONS
AGENT-INST
PROJ-PLAN
WAVE-MAP
WAVE-PLAN instances
```

Bu setten applicable required artifact eksikse → FAIL.

Prototype/demo etiketi eksikliği mazur göstermez.

---

# 4. Wave Coverage / Execution Integrity

Kontrol:

- `WAVE_MAP.md` approved scope'u tamamen kapsıyor mu?
- Dependency chain uygulanabilir ve acyclic mi?
- Her implementation wave için `waves/plans/WAVE_<NN>.md` instance'ı var mı?
- Wave ID'leri map ile plan instance'larında birebir mi?
- Her wave in/out scope, atomic tasks, acceptance criteria ve verification taşıyor mu?
- WAVE_PLAN kendi WAVE_MAP scope'unu aşıyor mu?
- Wave 00 anlamlı bir first implementation foundation mı?

FAIL:

- Map'te wave var, plan instance yok,
- plan scope map'i aşıyor,
- critical approved scope hiçbir wave'e map edilmemiş,
- circular dependency,
- active wave uygulanabilir task/acceptance içermiyor.

---

# 5. Project Plan / Wave Consistency

Kontrol:

- PROJECT_PLAN milestone/phase sırası WAVE_MAP ile aynı execution mantığını anlatıyor mu?
- Future scope current committed scope gibi gösterilmiş mi?
- Kullanıcı vermediği halde yapay deadline/timeline uydurulmuş mu?

Kapsam/sıra çelişkisi → FAIL.

Küçük terminoloji drift'i → CONDITIONAL PASS.

---

# 6. Current Status / Next Tasks / Active Wave Integrity

Kontrol:

- CURRENT_STATUS aktif wave'i gerçek WAVE_MAP/WAVE_PLAN ile eşleştiriyor mu?
- NEXT_TASKS yalnız aktif wave'in immediate queue'su mu?
- Tamamlanan iş next task olarak kalmış mı?
- Future wave işi yanlışlıkla primary task olmuş mu?
- Blocker varken task sessizce executable gösterilmiş mi?

FAIL:

- active wave mismatch,
- NEXT_TASKS aktif wave scope'u dışında,
- completed/blocked gerçekliğinin yanlış temsil edilmesi.

---

# 7. Tech Context / Integration Readiness

Özellikle frontend demo/prototype için kontrol:

- Current data source belli mi?
- Mock/local data boundary açık mı?
- UI ile service/data-access boundary tanımlı mı?
- Future real backend adapter noktası anlaşılır mı?
- Environment/config ayrımı belirtilmiş mi?
- Backend/API/database henüz approved değilse unresolved olarak mı tutulmuş?

FAIL:

- mock data'nın architectural boundary olmadan presentation'a dağılması öneriliyorsa,
- demo gerekçesiyle throwaway architecture tarif ediliyorsa,
- onaylanmamış API endpoint/database/backend stack gerçekmiş gibi üretilmişse.

```text
integration-ready → required where relevant
invented backend → prohibited
```

---

# 8. Design Profile Compliance

## `light`

Required:

```text
DESIGN_RULES.md
```

Belge tek başına güçlü visual concept, differentiation rationale, composition, color/typography direction, interaction, responsive ve accessibility guidance vermelidir.

## `standard`

Applicable ise required:

```text
DESIGN_RULES.md
DESIGN_SYSTEM.md
GLOBAL_SHELL.md
SYSTEM_STATES.md
PAGE-DESIGN instances
```

## `full`

Standard set + gerçek scope koşulu varsa:

```text
FEATURE-DESIGN instances
ADMIN_OPERATIONAL_DESIGN.md
```

Eksik required applicable design artifact → FAIL.

---

# 9. Design Quality / Anti-Template Integrity

Bu kontrol estetik zevk puanı değildir; açık contract drift'ini arar.

Kontrol:

- Visual concept proje bağlamından gerekçelendirilmiş mi?
- Tasarım yalnız sektör klişesine mi dayanıyor?
- Generic hazır tema yapısı default olarak mı seçilmiş?
- Color palette tek başına concept gibi sunulmuş mu?
- Trend pattern'i (gradient, glass, bento vb.) içerik/UX gerekçesi olmadan mı kullanılmış?
- Non-generic olma uğruna usability/accessibility bozulmuş mu?
- Light profile düşük tasarım kalitesi gerekçesi yapılmış mı?

FAIL:

- açıkça `light/demo olduğu için generic/basic template yeterli` mantığı,
- sektör klişesini tek tasarım gerekçesi yapmak,
- accessibility/usability'yi bilinçli ihlal eden design direction.

Yeterli farklılaşma gerekçesi zayıf ama repair olmadan kullanılabilir ise → CONDITIONAL PASS.

---

# 10. Page / Screen Design Coverage

`design_planning: standard | full` için:

1. Approved scope + product flows'tan distinct implementation surface registry çıkarılmış mı?
2. Her distinct page/screen için bir `PAGE-DESIGN` instance var mı?
3. Yapay page package çoğaltılmış mı?
4. Page package route/entry, hierarchy, layout, actions, states, responsive, accessibility ve data touchpoints içeriyor mu?
5. Page package global token/shell'i yeniden icat ediyor mu?

FAIL:

- gerçek distinct surface için page package eksik,
- page package PRODUCT_RULES/GLOBAL_SHELL/DESIGN_SYSTEM ile çelişiyor,
- page kendi bağımsız global design system'ini icat ediyor.

Gereksiz micro-surface package çoğaltımı → CONDITIONAL PASS; ciddi drift yaratıyorsa FAIL.

---

# 11. Feature / Admin Design Conditional Coverage

`design_planning: full` için:

- Gerçek cross-screen/complex feature varsa uygun FEATURE-DESIGN instance var mı?
- Basit page interaction gereksiz feature package'a çevrilmiş mi?
- Admin/moderation/operational UI gerçek scope'taysa ADMIN-DESIGN var mı?
- Permission/business truth design belgesinde uydurulmuş mu?

Eksik required-by-real-scope feature/admin design → FAIL.

Gereksiz feature decomposition → CONDITIONAL PASS.

---

# 12. Design System / Shell / State Consistency

Kontrol:

- DESIGN_RULES visual direction ile DESIGN_SYSTEM tokenları uyumlu mu?
- Page/feature docs canonical tokenları kullanıyor mu?
- GLOBAL_SHELL navigation gerçek page setiyle uyumlu mu?
- SYSTEM_STATES ortak state language'ı page/feature docs tarafından korunuyor mu?
- Override varsa gerekçelendirilmiş mi?

Çelişki → FAIL.

Yalnız tekrar/terminoloji drift'i → CONDITIONAL PASS.

---

# 13. Information Ownership Compliance

`INFORMATION_MAP.md` primary owner sınırları uygulanır.

Örnek FAIL:

- PRODUCT_RULES teknik stack sahibi olmuş,
- PAGE-DESIGN kendi global token sistemini tanımlamış,
- FEATURE-DESIGN page layout owner'lığını ele geçirmiş,
- TECH_CONTEXT business rule uydurmuş,
- WAVE_PLAN WAVE_MAP scope'unu değiştirmiş.

Sadece gereksiz tekrar → CONDITIONAL PASS.

Çelişen independent truth → FAIL.

---

# 14. Assumption Compliance

Kontrol:

- Bütün assumption'lar kayıtlı mı?
- Prohibited assumption yapılmış mı?
- `confirmed` için gerçek approval/authority kanıtı var mı?
- Multiple-choice teknik karar yanlışlıkla safe mi sınıflandırılmış?

FAIL:

- kayıt dışı assumption,
- prohibited assumption,
- kanıtsız confirmed,
- critical teknik/product etkili sessiz assumption.

Pending-review non-blocking assumption → CONDITIONAL PASS.

---

# 15. Conflict Resolution Compliance

- Critical conflict çözülmeden generation/publication → FAIL.
- Sessiz overwrite / kayıt dışı conflict resolution → en az CONDITIONAL PASS; scope/architecture etkiliyorsa FAIL.

---

# 16. Template / Single-Skeleton Compliance

Kontrol:

- Her canonical Document ID doğru template'ten mi üretildi?
- Dynamic page/feature/wave instance yeni Document ID veya alternatif skeleton icat etmiş mi?
- Required sections mevcut mu?
- Template metadata final output'a sızmış mı?

FAIL:

- missing required section,
- conflicting alternate skeleton,
- template metadata final output'ta.

Bölüm sırası küçük farklılık → CONDITIONAL PASS.

---

# 17. Content Completeness / Placeholder Cleanliness

FAIL:

- zorunlu bölüm boş,
- `[BURAYA YAZ]`, template placeholder, unresolved required marker,
- üretim talimatı final output'ta.

Current scope'u bloklamayan açık future unresolved item → CONDITIONAL PASS olabilir.

---

# 18. Project Leakage

Başka projeye ait isim, müşteri, stack, tasarım kararı veya ref içeriği yanlışlıkla output'a taşınmışsa → FAIL.

`ref/` yalnız pattern/quality reference olabilir; proje truth kaynağı değildir.

---

# 19. Output Structure / Cleanliness

`OUTPUT_STRUCTURE.md` path mapping uygulanmalıdır.

FAIL:

- owner category yanlış klasörde,
- run operational dosyası final output içinde,
- dynamic instance yanlış path'te,
- required canonical root README yok,
- runtime/working temp artifact sızıntısı.

Pre-publication aşamasında `latest/` veya `versions/` henüz oluşmamış olması hata değildir.

---

# 20. Traceability

RUN_MANIFEST şunları izlenebilir tutmalıdır:

```text
run_id
input id/version
base package
delivery_profile
implementation_planning
design_planning
canonical documents
dynamic instance paths
validation result
output version/ref
```

Critical traceability kaybı → FAIL; küçük metadata eksikliği → CONDITIONAL PASS.

---

# 21. Agent-Ready Acceptance Test

Validation sonunda şu hipotetik test uygulanır:

> Projeyi hiç görmemiş yetkin yeni bir ajan final package'ı açtı.

Ajan yalnız output üzerinden:

1. read order'ı bulabiliyor mu?
2. projenin amacını/scope'unu anlayabiliyor mu?
3. teknik mimari ve integration boundary'lerini anlayabiliyor mu?
4. UI varsa design authority ve ilgili page/feature contract'ını bulabiliyor mu?
5. project roadmap ve wave map'i anlayabiliyor mu?
6. aktif wave'i CURRENT_STATUS'tan belirleyebiliyor mu?
7. ilgili `WAVE_<NN>.md` ve NEXT_TASKS ile **yeni mimari planlama yapmadan implementation'a başlayabiliyor mu?**
8. ne zaman durması/clarification istemesi gerektiğini AGENT_INSTRUCTIONS'tan anlayabiliyor mu?

7. madde sağlanmıyorsa → FAIL.

Diğer maddelerde küçük navigasyon/clarity sorunu varsa → CONDITIONAL PASS; kritik bağlam kaybı varsa FAIL.

Bu test Product Engine'in nihai acceptance invariant'ıdır.

---

# 22. Run Lifecycle Location Integrity

Completion aşamasında:

- aynı run ID aynı anda active/completed/failed altında bulunamaz,
- `Completed` yalnız `runs/completed/<run-id>/`,
- `Failed`/`Cancelled` kapanmış run active altında kopya bırakamaz.

İhlal → FAIL.

---

# Validation Report Gereksinimleri

Her `VALIDATION_REPORT.md` en az şunları içerir:

```text
Validation timestamp
Run ID
Result: PASS | CONDITIONAL PASS | FAIL
Base package
Delivery profile
Implementation planning
Design planning
Canonical document coverage
Dynamic wave/page/feature instance coverage
Failed checks + severity
Warnings
Approval Integrity result
Integration Readiness result (applicable)
Design Profile/Quality result (applicable)
Agent-Ready Acceptance Test result
Repair actions (FAIL ise)
Lifecycle Location Integrity (completion kontrolünde)
```

Publication yalnız PASS veya kullanıcı/operatör tarafından açıkça kabul edilmiş CONDITIONAL PASS sonrası yapılabilir.
