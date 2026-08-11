# Generation Pipeline

## Amaç

Product Engine'in approved project truth'u, model/tool bağımsız biçimde agent-ready, validated ve versioned dokümantasyon paketine dönüştüren canonical runtime akışıdır.

## Authority Boundaries

- Intake → `PROJECT_INTAKE.md`
- Planning profiles → `PLANNING_PROFILES.md`
- Package selection → `PACKAGE_RULES.md`
- Documents → `DOCUMENT_CATALOG.md`
- Information ownership → `INFORMATION_MAP.md`
- Validation → `VALIDATION_RULES.md`
- Run lifecycle → `RUN_PROTOCOL.md`
- Output paths → `OUTPUT_STRUCTURE.md`

---

# Point-of-Use Authority Refresh

Boot sırasında bir authority/template okunmuş olması, daha sonra memory'den uygulanması için yeterli değildir.

Canonical kural:

> Authority must be close to the action it governs.

Bir artifact üretilmeden veya lifecycle transition yapılmadan hemen önce, o işi yöneten canonical authority/template yeniden açılır. Önceden topluca okunmuş template'lere memory'den güvenilmez.

## Artifact Production Loop

Her canonical document ve her dynamic instance **ayrı ayrı** şu döngüden geçer:

```text
1. Resolve next artifact
2. Re-read its canonical template
3. Re-read only its primary authority/dependencies
4. Generate the artifact
5. Re-read template validation expectations
6. Compare generated artifact against the template/authority
7. Repair if needed
8. Mark artifact locally complete
9. Only then move to the next artifact
```

Önemli:

- Template'ler batch-read edilip sonraki birden fazla artifact memory'den üretilemez.
- Aynı template'ten birden fazla dynamic instance çıkıyorsa her instance öncesinde template yeniden açılır.
- Örnek: `WAVE_00` öncesinde `WAVE_PLAN_TEMPLATE.md` açıldıysa, `WAVE_01` öncesinde de yeniden açılır.
- Local self-check final validation'ın yerine geçmez; yalnız artifact'ın kendi contract'ına uygun çıkmasını sağlar.

## Transition Authority Refresh

Lifecycle kapılarında transition yapılmadan hemen önce ilgili authority yeniden açılır:

```text
pending → approved      → PROJECT_INTAKE approval rules
resolution → generation → PACKAGE_RULES / DOCUMENT_CATALOG / selected templates
generation → validation → VALIDATION_RULES
validation → publication → OUTPUT_STRUCTURE
active → completed/failed → RUN_PROTOCOL completion/failure rules
```

Transition authority refresh yapılmadan lifecycle state değiştirilmez.

---

# Pipeline

## 1. Intake / Normalization

Ham brief ve kaynaklar canonical pending input'a normalize edilir.

Point-of-use refresh:

```text
PROJECT_INTAKE.md
PROJECT_INPUT_TEMPLATE.md
```

```text
outputs: inputs/pending/<slug>/PROJECT_INPUT.md
stop: critical missing/conflict/decision varsa
```

## 2. Explicit Approval Gate

Approval transition öncesinde `PROJECT_INTAKE.md` approval rules yeniden okunur.

Yalnız doğrudan kullanıcı onayı pending input'u approved yapabilir.

```text
IDE/tool/plan/auto-approval ≠ canonical approval
```

Approved input olmadan generation run başlayamaz.

## 3. Package + Planning Resolution

Resolution anında `PACKAGE_RULES.md`, selected base package ve `PLANNING_PROFILE_OVERLAY.md` yeniden okunur.

Approved truth'tan:

```text
base package
+ PLANNING_PROFILE_OVERLAY
+ contextual conditions
```

çözülür. Planning minimumu package tarafından düşürülemez.

## 4. Document + Dynamic Instance Resolution

`DOCUMENT_CATALOG.md` point-of-use yeniden okunarak canonical Document ID seti ve dynamic instance registry çıkarılır.

- her implementation wave → `waves/plans/WAVE_<NN>.md`
- design standard/full → gerçek distinct page/screen başına PAGE-DESIGN
- design full → yalnız gerçek complex feature/admin scope için FEATURE/ADMIN

Yeni instance yeni Document ID değildir.

## 5. Template Resolution

Her document/instance tek canonical template'ini kullanır. Missing/duplicate/conflicting skeleton → generation başlamaz.

Bu aşamada template'leri topluca okuyup generation boyunca memory'den kullanmak yasaktır. Template resolution yalnız hangi template'in kullanılacağını belirler; gerçek template içeriği Artifact Production Loop içinde artifact üretiminden hemen önce yeniden okunur.

## 6. Information Distribution

Approved truth, `INFORMATION_MAP.md` owner kurallarıyla dağıtılır. Aynı bilgi birden fazla independent authority'ye dönüşmez.

## 7. Missing / Assumption / Conflict Handling

`ASSUMPTION_RULES.md` ve `CONFLICT_RESOLUTION.md` uygulanır.

### Execution-Critical Decision Gate

Bir karar **aktif/ilk wave'in uygulanma biçimini değiştiriyorsa** execution-critical'dır.

Örnekler:

- frontend runtime/stack seçimi,
- package manager / build command,
- gerçek framework seçimi,
- auth yaklaşımı,
- gerçek API/backend target'ı,
- implementation'ı iki farklı yola bölen architecture choice.

Kural:

```text
execution-critical unresolved decision
→ ilgili WAVE_<NN> Ready for Execution OLAMAZ
→ README gerçekmiş gibi command yazamaz
→ NEXT_TASKS executable gösterilemez
→ clarification / decision resolution gerekir
```

Engine approved scope'u değiştirmeyen düşük-risk implementation detayını `Engine Resolved` olarak çözebilir. Kullanıcının seçmesi gereken kritik karar sessizce çözülemez.

## 8. Dependency-Ordered Generation

Genel sıra:

```text
Approved Input
→ PROJECT-BRAIN
→ PRODUCT-RULES
→ TECH-CTX
→ DESIGN (UI)
→ WAVE-MAP
→ WAVE-PLAN instances
→ PROJECT_PLAN
→ STATUS
→ TASKS
→ AGENT-INST
→ DECISIONS
→ README-DOC
→ conditional DATA/API/TEST/DEPLOY/OPS
```

Bu sıra Artifact Production Loop'u bypass etmez. Her satırda sıradaki artifact için template + primary authority/dependencies fresh-read edilir, artifact üretilir, local compare/repair tamamlanır; sonra sonraki artifact'a geçilir.

### Dynamic Instance Example

```text
Resolve WAVE_00
→ re-read WAVE_PLAN_TEMPLATE + WAVE_MAP + TECH_CONTEXT + applicable design authority
→ generate WAVE_00
→ re-read template validation expectations
→ compare/repair

Resolve WAVE_01
→ WAVE_PLAN_TEMPLATE'ı YENİDEN re-read et
→ WAVE_MAP + relevant authorities yeniden oku
→ generate WAVE_01
→ compare/repair
```

### Standard Implementation Minimum

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

### Design Minimums

```text
light    → DESIGN
standard → DESIGN + DESIGN-SYSTEM + applicable GLOBAL-SHELL/PAGE-DESIGN/SYSTEM-STATES
full     → standard + justified FEATURE-DESIGN/ADMIN-DESIGN
```

## 9. Pre-Validation Execution Consistency Check

Validation'a gitmeden önce şu belgeler aynı executable reality'yi anlatmalıdır:

```text
TECH_CONTEXT
README
CURRENT_STATUS
NEXT_TASKS
active WAVE_PLAN
DECISIONS
```

Örnek invalid state:

```text
TECH_CONTEXT: stack unresolved
README: npm run dev
WAVE_00: Vite veya Vanilla
→ inconsistent → repair/clarification
```

## 10. Validation / Repair

Validation transition öncesinde `VALIDATION_RULES.md` yeniden açılır ve mevcut working output'a karşı uygulanır.

```text
PASS             → publication
CONDITIONAL PASS → yalnız non-blocking bulgu + açık kabul
FAIL             → repair; devam ederse run Failed
```

Execution-critical unresolved decision CONDITIONAL PASS olamaz; blocking FAIL'dir.

## 11. Publication

Publication transition öncesinde `OUTPUT_STRUCTURE.md` yeniden açılır.

PASS sonrası:

1. output version tahsis edilir.
2. `OUTPUT_STRUCTURE.md` path mapping ile `versions/<version>/` yayınlanır.
3. `latest/` aynı sürümün türetilmiş görünümü olur.
4. Run records gerçek published path'leri kaydeder.

## 12. Completion

Completion transition öncesinde `RUN_PROTOCOL.md` successful completion kuralları yeniden açılır.

Run Completed olarak dondurulur ve `runs/completed/<run-id>/` konumuna **move** edilir. Aynı ID active altında kalamaz.

---

# Agent-Ready Completion Invariant

> Projeyi hiç görmemiş yetkin yeni bir ajan, output paketini okuyup yeni bir mimari/teknik planlama turu yapmadan aktif `WAVE_<NN>.md` planını uygulamaya başlayabilmelidir.

Bu koşul sağlanmıyorsa output biçimsel olarak eksiksiz olsa bile Product Engine generation'ı başarılı sayılmaz.
