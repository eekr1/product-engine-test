# Validation Rules

## Amaç

Product Engine working output'unun yalnız eksiksiz değil, gerçekten **agent-ready** olup olmadığını doğrular.

## Sonuçlar

```text
PASS             → publication yapılabilir
CONDITIONAL PASS → yalnız non-blocking bulgu vardır
FAIL             → blocking contract ihlali vardır; publication yapılamaz
```

---

# Blocking Validation Set

## 1. Approval Integrity

- approved input mevcut mu?
- canonical planning profile alanları geçerli mi?
- `approved_by: user` gerçek explicit user approval'a dayanıyor mu?
- auto/tool/plan approval kullanılmış mı?

İhlal → FAIL.

## 2. Package + Planning Compliance

Resolved set:

```text
base package + planning overlay + contextual conditions
```

ile uyumlu olmalıdır. Standard implementation minimumu veya applicable design minimumu eksikse FAIL.

## 3. Canonical Document / Dynamic Instance Coverage

- required canonical documents mevcut mu?
- WAVE_MAP'teki her wave için WAVE_PLAN var mı?
- standard/full design'da gereken page/feature instances mevcut mu?
- gereksiz alternate Document ID/skeleton icat edilmiş mi?

Eksik required coverage → FAIL.

## 4. Wave Execution Depth

Her wave bir task özeti değil execution contract olmalıdır.

Kontrol:

- goal/dependency/in-out scope açık mı?
- expected result / target structure anlaşılır mı?
- implementation checklist anlamlı alt gruplara ayrılmış mı?
- görevler atomic ve doğrulanabilir mi?
- normal kapsamlı wave yeterli implementation derinliğine sahip mi (çoğu durumda yaklaşık 10–20 doğrulanabilir görev; kota değildir)?
- state/role/responsive coverage applicable alanları kapsıyor mu?
- verification + manual QA/debug + exit criteria somut mu?
- agent wave'i okuyunca tekrar mini implementation planı üretmek zorunda mı?

Son sorunun cevabı evet ise → FAIL.

## 5. Execution-Critical Decision Completeness

Aktif/ilk wave'i uygulama yolunu değiştiren unresolved karar var mı?

Örnek:

```text
TECH_CONTEXT: Vite veya Vanilla
README: npm run dev
WAVE_00: Vite/React veya JS
```

Bu durumda output executable değildir → FAIL.

Execution-critical unresolved karar varken:

- active wave `Ready for Execution` olamaz,
- CURRENT_STATUS blocker yok diyemez,
- NEXT_TASKS executable queue veremez,
- README kesin command yazamaz.

## 6. Cross-Document Execution Consistency

Şunlar aynı execution reality'yi anlatmalıdır:

```text
README
TECH_CONTEXT
CURRENT_STATUS
NEXT_TASKS
active WAVE_PLAN
DECISIONS
```

Stack/tool/build command/architecture boundary çelişkisi → FAIL.

Küçük terminoloji drift'i → CONDITIONAL PASS.

## 7. Decision Provenance

Allowed project decision statuses:

```text
User Approved
Engine Resolved
Pending Review
Superseded
```

- `User Approved` için canonical user approval kaynağı olmalı.
- `Engine Resolved` approved scope'u değiştirmemeli.
- Kullanıcı kararı gerektiren kritik konu `Engine Resolved` yapılamaz.
- execution-critical `Pending Review` varken agent-ready PASS verilemez.

İhlal → FAIL.

## 8. Tech Context / Integration Readiness

Frontend/demo için:

- current data source açık mı?
- mock/local data boundary var mı?
- presentation ↔ service/data boundary belli mi?
- future real adapter noktası belli mi?
- approved olmayan backend/API/database uydurulmuş mu?

Throwaway architecture veya invented backend → FAIL.

## 9. Design Profile + Quality

- `light` → güçlü, project-specific DESIGN_RULES
- `standard` → applicable design system/shell/page/state coverage
- `full` → standard + justified feature/admin coverage

`light` düşük kalite/generic template gerekçesi olamaz. Sektör klişesi tek visual concept gerekçesi olamaz.

## 10. Project Plan / Wave / State Alignment

- PROJECT_PLAN ↔ WAVE_MAP sıra/scope uyumlu mu?
- CURRENT_STATUS gerçek active wave'i gösteriyor mu?
- NEXT_TASKS active wave'in immediate queue'su mu?
- blocker varsa executable gibi gösterilmiş mi?

Critical mismatch → FAIL.

## 11. Information Ownership / Assumption / Conflict Integrity

- canonical owner sınırları korunuyor mu?
- prohibited/kayıtsız assumption var mı?
- `confirmed` için gerçek authority var mı?
- critical conflict çözülmüş mü?

Critical ihlal → FAIL.

## 12. Template / Placeholder / Project Leakage

- tek canonical skeleton kullanılmış mı?
- required sections dolu mu?
- placeholder/template instruction sızmış mı?
- başka projeye ait truth/design/stack sızmış mı?

Critical ihlal → FAIL.

## 13. Output + Operational Path Integrity

Final output path'leri `OUTPUT_STRUCTURE.md` ile birebir uyumlu olmalıdır.

Operational records (`PACKAGE_SELECTION`, manifest, progress vb.) canonical path'i kendileri icat edemez; gerçek resolved/published path'i kaydetmelidir.

Örnek:

```text
project/PROJECT_PLAN.md
waves/WAVE_MAP.md
waves/plans/WAVE_00.md
design/DESIGN_RULES.md
```

Gerçek output ile operational record path'i çelişiyorsa → FAIL.

## 14. Traceability + Lifecycle

Manifest en az input/package/profiles/documents/dynamic instances/validation/output refs taşır.

Aynı run ID yalnız bir lifecycle location'da bulunabilir.

```text
Completed → runs/completed/<run-id>/
```

Active kopya kalırsa → FAIL.

---

# Agent-Ready Acceptance Test

Projeyi hiç görmemiş yetkin yeni bir ajan yalnız final package ile:

1. read order'ı bulabiliyor mu?
2. scope ve teknik/design authority'yi anlayabiliyor mu?
3. active wave'i belirleyebiliyor mu?
4. active WAVE_PLAN + NEXT_TASKS ile **yeni planlama veya kritik teknik seçim yapmadan** implementation'a başlayabiliyor mu?
5. done/QA/stop koşullarını anlayabiliyor mu?

4. madde sağlanmıyorsa → FAIL.

---

# Validation Report Minimumu

```text
result
run_id
base package + profiles
canonical document coverage
dynamic instance coverage
wave execution depth result
execution-critical decision result
cross-document execution consistency
approval integrity
decision provenance
integration readiness
design quality
operational path integrity
agent-ready acceptance
lifecycle location integrity
failed checks / warnings / repair actions
```

Publication yalnız PASS veya gerçekten non-blocking ve açıkça kabul edilmiş CONDITIONAL PASS sonrası yapılabilir.
