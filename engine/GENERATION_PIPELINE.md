# Generation Pipeline

## Amaç

Bu belge, Product Engine'in tek bir run içinde approved project truth'u agent-ready, validated ve versioned proje dokümantasyon paketine dönüştürürken izlediği canonical runtime execution flow'u tanımlar.

Bu pipeline model/tool bağımsızdır.

## Kapsam Dışı

- Intake alanlarının anlamı → `PROJECT_INTAKE.md`
- Planning profile semantiği → `PLANNING_PROFILES.md`
- Package seçim detayları → `PACKAGE_RULES.md`
- Document registry → `DOCUMENT_CATALOG.md`
- Bilgi sahipliği → `INFORMATION_MAP.md`
- Validation ayrıntıları → `VALIDATION_RULES.md`
- Run kayıt yaşam döngüsü → `RUN_PROTOCOL.md`
- Output fiziksel yapısı → `OUTPUT_STRUCTURE.md`

---

# Pipeline Aşamaları

## Aşama 1 — Project Intake / Normalization

```text
Girdi   : Ham proje brief'i, kaynak dosyaları, existing project context
Eylem   : PROJECT_INTAKE kurallarıyla canonical alanlara normalize edilir.
          delivery_profile, implementation_planning ve applicable ise design_planning için
          açık öneri/gerekçe hazırlanır.
          Missing input, assumption ve conflict'ler görünür hale getirilir.
Çıktı   : inputs/pending/<project-slug>/PROJECT_INPUT.md
Durma   : Critical missing/conflict veya karar gerektiren belirsizlik varsa kullanıcıya taşınır.
```

Planning profile önerisi pending aşamada yapılabilir; canonical truth değildir.

---

## Aşama 2 — Canonical Explicit Approval Gate

```text
Girdi   : Pending input + açık karar/assumption/profile özeti
Eylem   : Kullanıcı pending project truth'u doğrudan ve bilinçli biçimde onaylar.
Çıktı   : inputs/approved/<project-slug>/vN/PROJECT_INPUT.md
Durma   : Explicit user approval yoksa pipeline burada durur.
```

IDE/tool/plan/auto-approval bu gate'i geçemez.

Approved input oluşturulmadan package/document generation run başlatılamaz.

---

## Aşama 3 — Base Package + Planning Overlay Resolution

```text
Girdi   : Approved input
          project_type
          delivery_profile
          implementation_planning
          design_planning (applicable ise)

Eylem   :
1. PACKAGE_RULES ile base package seçilir.
2. packages/PLANNING_PROFILE_OVERLAY.md uygulanır.
3. Base package domain-required belgeleri ile planning minimumları birleştirilir.
4. Contextual extension/reduction koşulları uygulanır.
5. Reduction planning profile minimumunu ihlal edemez.

Çıktı   : Resolved package context + candidate canonical Document ID seti
Durma   : Approved input profile/enum eksik veya invalid ise intake correction gerekir.
```

Önemli invariant:

```text
base package
+
planning overlay
+
contextual conditions
=
resolved document scope
```

---

## Aşama 4 — Canonical Document + Dynamic Instance Resolution

`DOCUMENT_CATALOG.md` candidate seti filtreler ve gerçek document/instance planını oluşturur.

### 4.1 Canonical Document Resolution

Her Document ID için sırayla:

1. Project type applicable mı?
2. Delivery profile applicable mı?
3. Implementation planning condition applicable mı?
4. Design planning condition applicable mı?
5. Conditional scope gerçekten mevcut mu?
6. Dependencies applicable mı?
7. Canonical template mevcut mu?

### 4.2 Wave Instance Resolution

`implementation_planning: standard | full` ise:

```text
WAVE-MAP
→ bütün implementation wave'lerini çözer
→ her implementation wave için bir WAVE-PLAN instance üretim planına eklenir

waves/plans/WAVE_00.md
waves/plans/WAVE_01.md
...
```

Her wave yeni Document ID değildir; bütün instance'lar `WAVE-PLAN` kimliğini kullanır.

### 4.3 Page / Screen Instance Resolution

`design_planning: standard | full` ve UI page/screen surface'leri varsa:

- approved scope ve product flows içindeki distinct implementation surface'ler belirlenir,
- küçük section farklılıkları ayrı page sayılmaz,
- her distinct surface için bir `PAGE-DESIGN` instance planlanır.

Örnek:

```text
HOME_DESIGN_PACKAGE.md
SERVICES_DESIGN_PACKAGE.md
ROOM_DESIGN_PACKAGE.md
```

### 4.4 Feature Instance Resolution

Yalnız `design_planning: full` ise ve gerçek cross-screen / complex interaction feature varsa `FEATURE-DESIGN` instance üretilir.

Basit page davranışı feature package'a yükseltilmez.

### 4.5 Admin / Operational Resolution

`ADMIN-DESIGN` yalnız:

- design planning full,
- gerçek admin/moderation/operational UI approved scope'ta

ise seçilir.

Çıktı:

```text
Canonical Document ID seti
+
Dynamic instance registry
+
Template mapping
```

Template eksikse generation başlamaz; catalog/template contract hatası raporlanır.

---

## Aşama 5 — Template Resolution

Her canonical document/instance için ilgili template okunur.

```text
Girdi   : Document + dynamic instance registry
Eylem   : Template metadata, required sections, placeholders, dependencies okunur.
Çıktı   : Generation-ready document plans
Durma   : Missing/duplicate/conflicting canonical skeleton varsa FAIL / Engine contract repair gerekir.
```

Single-Skeleton kuralı korunur:

- yeni page instance → yeni template değil,
- yeni feature instance → yeni template değil,
- yeni wave → yeni template değil.

---

## Aşama 6 — Information Distribution

Approved input ve resolved project context, `INFORMATION_MAP.md` ownership kurallarıyla doğru belgelere dağıtılır.

Primary owner dışındaki belgeler aynı bilgiyi yeniden sahiplenmez; gerektiğinde kısa referans verir.

Örnek ownership zinciri:

```text
technical architecture / integration readiness → TECH-CTX
visual concept → DESIGN
design tokens → DESIGN-SYSTEM
global shell/navigation → GLOBAL-SHELL
page-specific layout/actions → PAGE-DESIGN
cross-screen feature flow → FEATURE-DESIGN
shared UI states → SYSTEM-STATES
wave architecture → WAVE-MAP
wave execution tasks/acceptance → WAVE-PLAN
current project truth → STATUS
immediate active-wave queue → TASKS
```

---

## Aşama 7 — Missing / Assumption / Conflict Handling

Generation öncesi ve sırasında ortaya çıkan eksik veya çelişkili bilgiler:

- `ASSUMPTION_RULES.md`
- `CONFLICT_RESOLUTION.md`

uyarınca ele alınır.

### Critical Stop

Aşağıdakiler varsayımla geçilemez:

- approved scope'u değiştiren ürün kararı,
- gerçek backend/API/database target'ı,
- production deployment target'ı,
- authentication/security kararı,
- kullanıcı tarafından seçilmesi gereken kritik ürün tercihi.

### Integration Readiness Sınırı

Backend yokken clean boundary üretilebilir; fake endpoint/database üretilemez.

---

## Aşama 8 — Dependency-Ordered Generation

Generation, resolved dependency graph sırasıyla yapılır.

Genel sıra:

```text
Approved Input
    ↓
PROJECT-BRAIN
    ↓
PRODUCT-RULES
    ↓
TECH-CTX
    ↓
┌──────────────────────────────┬──────────────────────────────────┐
│ Implementation Planning      │ Design Planning (UI applicable)  │
│                              │                                  │
│ WAVE-MAP                     │ DESIGN                           │
│   ↓                          │   ↓                              │
│ WAVE-PLAN instances          │ DESIGN-SYSTEM (std/full)         │
│                              │   ↓                              │
│ PROJ-PLAN                    │ GLOBAL-SHELL (if applicable)     │
│                              │ PAGE-DESIGN instances            │
│ STATUS                       │ SYSTEM-STATES (interactive)      │
│   ↓                          │   ↓                              │
│ TASKS                        │ FEATURE-DESIGN (full/conditional)│
│                              │ ADMIN-DESIGN (full/conditional)  │
└──────────────────────────────┴──────────────────────────────────┘
    ↓
AGENT-INST / DECISIONS / README-DOC
    ↓
conditional DATA / API / TEST / PROD-STRAT / DEPLOY / OPS
```

Dependency graph gerçek catalog applicability ile çözülür; bu diyagram zorla document üretmez.

### Standard Implementation Minimum

Applicable implementation-bearing projede `implementation_planning: standard` en az:

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

üretir.

### Design Minimumları

```text
design light
→ DESIGN

design standard
→ DESIGN
→ DESIGN-SYSTEM
→ GLOBAL-SHELL (if applicable)
→ PAGE-DESIGN instances
→ SYSTEM-STATES (interactive UI)

design full
→ standard set
→ FEATURE-DESIGN instances (only if justified)
→ ADMIN-DESIGN (only if justified)
```

---

## Aşama 9 — Validation

Working output `VALIDATION_RULES.md` ile doğrulanır.

Validation yalnız dosya varlığını değil şunları da kontrol eder:

- planning profile compliance,
- dynamic instance coverage,
- wave coverage,
- page/feature coverage,
- information ownership,
- integration readiness,
- design anti-template/quality invariants,
- cross-document consistency,
- agent-readiness,
- approval integrity,
- run lifecycle integrity.

Sonuç:

```text
PASS
CONDITIONAL PASS
FAIL
```

FAIL → Aşama 10.

Accepted CONDITIONAL PASS → publication'a ilerleyebilir.

---

## Aşama 10 — Repair

Validation bulguları working output üzerinde düzeltilir ve validation tekrar çalıştırılır.

İkinci validation sonrası kritik FAIL devam ediyorsa run `Failed` kapanır; final output yayınlanmaz.

---

## Aşama 11 — Publication

PASS veya kabul edilmiş CONDITIONAL PASS sonrasında:

1. `output_version` tahsis edilir.
2. Clean final output `OUTPUT_STRUCTURE.md` canonical yapısıyla `versions/<version>/` içine yazılır.
3. `latest/` aynı sürümün türetilmiş görünümü olarak güncellenir.
4. Run manifest document/instance registry ve output ref ile dondurulur.

Working/runtime kayıtları final project package'a sızmaz.

---

## Aşama 12 — Run Completion

Run:

- status `Completed`,
- validation sonucu,
- selected base package,
- delivery profile,
- implementation/design planning profiles,
- canonical documents,
- dynamic instances,
- output version/ref

ile dondurulur.

Run klasörü `runs/completed/<run-id>/` konumuna taşınır ve aynı ID `runs/active/` altında kalamaz.

---

# Pipeline Geri Dönüş Noktaları

```text
Aşama 1
← pending intake correction / clarification / approval reddi

Aşama 3
← approved scope/profile yeni input version ile değişti

Aşama 4
← package/catalog/template contract düzeltildi

Aşama 9
← repair sonrası re-validation
```

Approved input run başladıktan sonra değişirse aktif run üzerinde mutate edilmez; yeni approved input version + yeni run gerekir.

---

# Agent-Ready Completion Invariant

Successful Product Engine output'un nihai uygulama testi şudur:

> Yetkin, projeyi daha önce görmemiş yeni bir ajan output paketini açtığında canonical read order'ı, projenin teknik/tasarım sınırlarını, aktif wave'i ve sıradaki görevleri anlayabilmeli; yeni bir mimari planlama turu yapmadan aktif `WAVE_<NN>.md` planını uygulamaya başlayabilmelidir.

Bu koşul sağlanmıyorsa dokümanlar biçimsel olarak doğru olsa dahi Product Engine hedefi tam karşılanmış sayılmaz.
