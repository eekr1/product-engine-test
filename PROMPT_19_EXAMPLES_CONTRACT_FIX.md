~~~md
# PROMPT_19_EXAMPLES_CONTRACT_FIX

Product Engine `examples/` klasörü için son contract consistency fix turudur.

`engine/`, `packages/`, `templates/`, `inputs/`, `runs/`, `outputs/` ve `logs/` Approved ve Closed durumdadır.

`examples/` ana build ve ilk final fix tamamlanmıştır.

Bu görevde yalnızca tek gerçek contract drift düzeltilecektir:

```text
Approved input
→ intake sırasında bilinen kritik conflict içeremez.

Run
→ daha sonra yeni operational / technical conflict keşfedebilir
→ bu durumda Blocked olabilir.
~~~

Mevcut `web-app-blocked-001` fixture bu sınırı yanlış öğretmektedir.

Amaç examples mimarisini yeniden tasarlamak değildir.

Yalnızca blocked scenario semantics’i düzelt.

------

# 1. Önce Oku

Aşağıdaki belgeleri sırayla oku:

1. `PRODUCT_ENGINE_BRAIN.md`
2. `inputs/README.md`
3. `engine/PROJECT_INTAKE.md`
4. `engine/CONFLICT_RESOLUTION.md`
5. `engine/RUN_PROTOCOL.md`
6. `runs/README.md`
7. `examples/README.md`

Ardından blocked fixture setini tamamen oku:

1. `examples/inputs/web-app-blocked-001/SCENARIO.md`
2. `examples/inputs/web-app-blocked-001/PROJECT_INPUT.md`
3. `examples/runs/web-app-blocked-001/SCENARIO.md`
4. `examples/runs/web-app-blocked-001/INPUT_SNAPSHOT.md`
5. `examples/runs/web-app-blocked-001/CONFLICTS.md`
6. `examples/runs/web-app-blocked-001/RUN_MANIFEST.md`
7. `examples/runs/web-app-blocked-001/RUN_LOG.md`
8. `examples/runs/web-app-blocked-001/PROGRESS.md`
9. `examples/runs/web-app-blocked-001/COMPLETION_REPORT.md`
10. `examples/runs/web-app-blocked-001/VALIDATION_REPORT.md`

Son olarak:

1. `examples/outputs/web-app-minimal-001/SCENARIO.md`

dosyasını minor wording için kontrol et.

Approved runtime/input contracts authoritative kaynaktır.

------

# 2. Core Contract

Şu kural mutlak olarak korunmalıdır:

```text
Known critical conflict
→ input cannot be approved
```

Approved input:

```text
status: approved
```

ise intake aşamasındaki bütün bilinen kritik conflict’ler çözülmüş olmalıdır.

------

# 3. Approved Input Semantics

`examples/inputs/web-app-blocked-001/PROJECT_INPUT.md` artık intake sırasında açık bir kritik çelişki taşımamalıdır.

Şunları kaldır veya yeniden yaz:

```text
serverless static frontend
+
mandatory authoritative realtime server database sync
```

gibi aynı anda conflict oluşturan approved truth kombinasyonlarını.

------

# 4. Approved Input Hedefi

Blocked scenario için approved input şu tip conflict-free truth taşımalıdır:

```text
Project goal:
Realtime messaging experience gösteren frontend prototype.

Delivery:
Prototype

Selected delivery intent:
demo-frontend uyumlu client-side prototype

Current scope:
UI interactions
mock/simulated realtime behavior
frontend demonstration

Backend:
current prototype scope dışında
```

Exact içerik mevcut fixture yapısına doğal şekilde uyarlanabilir.

------

# 5. Conflicts Section

Approved input içindeki:

```text
## Conflicts
```

bölümü varsa:

```text
No unresolved critical conflicts.
```

anlamını taşımalıdır.

Known critical conflict bırakma.

------

# 6. Approval Verification

Approved input verification checklist şunu doğrulamalıdır:

```text
status: approved
explicit user approval exists
required fields complete
no unresolved critical conflict
```

------

# 7. Runtime Conflict Discovery

Blocked run ise intake sonrasında yeni bir teknik/operasyonel gerçek keşfetmelidir.

Örnek scenario:

```text
Approved intake:
frontend prototype + simulated realtime behavior

Run sırasında yeni dependency/source/requirement validation:
prototype'ın yalnız simülasyon olmaması,
gerçek authoritative multi-user persistence gerektirdiği doğrulandı.

Bu yeni gereksinim:
demo-frontend/static prototype scope ile çelişiyor.

Result:
critical runtime conflict
→ Blocked
```

------

# 8. Runtime Conflict Source

Yeni conflict’in kaynağı açık olmalıdır.

Örneğin:

```text
runtime clarification
dependency requirement
technical feasibility review
new authoritative source
scope validation
```

kullanılabilir.

Ama "approved input zaten conflict içeriyordu" semantics’ine geri dönme.

------

# 9. INPUT_SNAPSHOT

`INPUT_SNAPSHOT.md` approved input’un conflict-free halini yansıtmalıdır.

Snapshot immutable approved truth’dur.

Snapshot içine sonradan keşfedilen runtime conflict’i geri yazma.

------

# 10. CONFLICTS.md Ownership

Run sırasında keşfedilen critical conflict:

```text
examples/runs/web-app-blocked-001/CONFLICTS.md
```

içinde tutulmalıdır.

Burada açıkça:

```text
detected_during_run: true
source: runtime discovery / clarification
severity: critical
status: unresolved
```

anlamı bulunmalıdır.

Exact format mevcut contract’a göre uyarlanabilir.

------

# 11. RUN_LOG

`RUN_LOG.md` chronology şu anlama gelmelidir:

```text
Run initialized from approved input
→ package/scope evaluation started
→ new technical requirement discovered
→ critical conflict registered
→ status changed to Blocked
```

Intake conflict çözülmemişken run başlamış gibi görünmemelidir.

------

# 12. RUN_MANIFEST

Mevcut canonical fields korunmalıdır:

```text
selected_package
validation_result
documents_produced
output_version
output_ref
```

Status:

```text
Blocked
```

olarak kalmalıdır.

Yeni manifest field üretme.

------

# 13. Blocked ≠ Failed

Şu davranış değişmemelidir:

```text
critical runtime conflict
→ Blocked
```

Doğrudan:

```text
Failed
```

yapma.

------

# 14. Blocked Run Output

Blocked run:

```text
no final output
no canonical output publish
no latest update
```

davranışını korumalıdır.

------

# 15. Validation Semantics

Blocked run Validation aşamasına geçmediyse:

```text
PASS
CONDITIONAL PASS
FAIL
```

sonucu üretme.

`validation_result` canonical field olarak kalmalı ama henüz result bulunmadığı açık olmalıdır.

Existing neutral representation Approved contract’a aykırı değilse korunabilir.

------

# 16. Completion Report

Blocked run için `COMPLETION_REPORT.md`:

```text
run completed successfully
```

anlamı vermemelidir.

Açıkça:

```text
run is not completed
run is currently Blocked
no final publication occurred
```

demelidir.

------

# 17. SCENARIO Input Description

`examples/inputs/web-app-blocked-001/SCENARIO.md` şu distinction’ı açıkça öğretmelidir:

```text
This input is valid and approved.

The scenario is not blocked because intake was invalid.

The run becomes Blocked because a new critical runtime conflict
is discovered after initialization.
```

------

# 18. SCENARIO Run Description

`examples/runs/web-app-blocked-001/SCENARIO.md` şu akışı göstermelidir:

```text
approved input
→ successful initialization
→ runtime discovery
→ critical conflict
→ Blocked
```

------

# 19. Do Not Rewrite Scenario Identity

Şunları değiştirme:

```text
scenario_id: web-app-blocked-001
project_slug: realtime-sync-app
input_id: INPUT-REALTIME-SYNC-APP-V1
selected_package: demo-frontend
delivery_profile: Prototype
```

Sadece semantic content’i düzelt.

------

# 20. No New Input Lifecycle

Şu yanlış modeli oluşturma:

```text
approved-with-conflict
```

diye yeni bir input state yoktur.

Canonical input statuses yalnız:

```text
pending
approved
```

olarak kalır.

------

# 21. No Run-Specific Truth Backwrite

Runtime sırasında keşfedilen conflict yüzünden approved input fixture’ını:

```text
status: pending
```

yapma.

Historical fixture scenario’nun amacı:

```text
valid approved input
→ later blocked run
```

davranışını öğretmektir.

------

# 22. Minor Output Scenario Wording

`examples/outputs/web-app-minimal-001/SCENARIO.md` içinde synthetic fixture gerçek runtime’da gerçekten publish edilmiş gibi yazılmışsa wording’i minimum düzeyde düzelt.

Tercih edilen semantics:

```text
This fixture represents the clean output that would be published to:

outputs/demos/task-tracker-demo/versions/v0.1/

during an equivalent real runtime run.
```

Türkçe doğal karşılığını kullan.

------

# 23. Runtime vs Fixture Reality

Output scenario açıkça şunu ayırmalıdır:

```text
canonical runtime path
→ real execution semantics

examples/... physical path
→ synthetic fixture storage
```

Gerçek runtime run yapılmış gibi kesin geçmiş anlatımı kullanma.

------

# 24. Preserve All Previous Fixes

Şunları bozma:

```text
INPUT-TASK-TRACKER-DEMO-V1
INPUT-ANALYTICS-DASHBOARD-DEMO-V1
INPUT-REALTIME-SYNC-APP-V1

selected_package
validation_result
documents_produced

outputs/demos/task-tracker-demo/versions/v0.1/
```

------

# 25. No Other Scenario Changes

`web-app-minimal-001` ve `web-app-pending-001` fixture’larına yalnız stale reference oluşmuşsa dokun.

Gereksiz yeniden yazma yapma.

------

# 26. No Architecture Changes

Şunları oluşturma:

```text
examples/scenarios/
examples/invalid/
examples/fixtures/
```

Top-level structure aynı kalmalı.

------

# 27. No Runtime Mutation

Şunlara dokunma:

```text
inputs/
runs/
outputs/
logs/
```

Tüm değişiklikler:

```text
examples/
```

altında kalmalıdır.

------

# 28. No Logs Pollution

Bu fixture correction runtime event değildir.

`logs/` güncelleme.

------

# 29. Security

Şunları koru:

```text
no real project data
no secrets
no credentials
no machine-local paths
no private chain-of-thought
no model-specific dependency
```

------

# 30. Scope Discipline

Bu görev sırasında beklenen değişiklikler yalnız şuralarda olabilir:

```text
examples/inputs/web-app-blocked-001/
examples/runs/web-app-blocked-001/
examples/outputs/web-app-minimal-001/SCENARIO.md
```

Gerekli stale reference varsa `examples/README.md` veya ilgili alt README minimal düzeyde güncellenebilir.

Başka klasöre dokunma.

Kök `PROMPT_19_EXAMPLES_CONTRACT_FIX.md` task artefact’ının committe bulunması normaldir.

------

# 31. Final Audit

Fix tamamlandıktan sonra tek tek doğrula:

1. Approved blocked input içinde known critical conflict kaldı mı? Kalmamalı.
2. Input `status: approved` için conflict-free intake semantics var mı?
3. Approval checklist unresolved critical conflict olmadığını doğruluyor mu?
4. Snapshot conflict-free approved input’u mu temsil ediyor?
5. Runtime conflict yalnız run layer’da mı ortaya çıkıyor?
6. `CONFLICTS.md` conflict’in run sırasında keşfedildiğini açıklıyor mu?
7. `RUN_LOG` initialization sonrası conflict discovery gösteriyor mu?
8. Run `Blocked` olarak mı kalıyor?
9. Blocked doğrudan Failed yapılmış mı? Yapılmamalı.
10. Final output publish edilmiş mi? Edilmemeli.
11. Validation sonucu uydurulmuş mu? Uydurulmamalı.
12. Completion report run’ın tamamlanmadığını açıkça söylüyor mu?
13. Input scenario valid-approved-input → later-blocked-run ayrımını açıklıyor mu?
14. Run scenario lifecycle sırasını doğru gösteriyor mu?
15. Canonical IDs korunuyor mu?
16. Canonical RUN_MANIFEST fields korunuyor mu?
17. Output scenario synthetic representation wording’i doğru mu?
18. Real runtime execution yapılmış gibi yanlış ifade kaldı mı?
19. Security / privacy / CoT kuralları korunuyor mu?
20. Yalnız `examples/` değiştirildi mi?

------

# 32. Çalışma Sonu Raporu

## Blocked Input

Şunu doğrula:

```text
approved input
→ no known unresolved critical conflict
```

## Runtime Discovery

Şunu doğrula:

```text
run initialized
→ new technical requirement discovered
→ critical runtime conflict
→ Blocked
```

## Ownership

Şunu doğrula:

```text
input truth
→ INPUT_SNAPSHOT

runtime conflict
→ CONFLICTS.md / RUN_LOG / RUN_MANIFEST
```

## Publication

Şunu doğrula:

```text
Blocked
→ no final output
→ no output publish
```

## Output Fixture Wording

Şunu doğrula:

```text
canonical runtime path
!=
physical example fixture path
```

ve fixture’ın gerçek runtime history gibi sunulmadığını belirt.

## Korunan Kararlar

Şunları doğrula:

- canonical input IDs
- canonical RUN_MANIFEST fields
- Blocked ≠ Failed
- examples non-authoritative
- synthetic-first
- no runtime mutation
- no logs pollution
- no private CoT
- no secrets/local paths
- model-independent

## Sonuç

Şunlardan biriyle bitir:

```text
EXAMPLES_CONTRACT_FIX_COMPLETE
```

veya:

```text
EXAMPLES_CONTRACT_FIX_BLOCKED
```

Blocked ise yalnız gerçek engeli açıkla.