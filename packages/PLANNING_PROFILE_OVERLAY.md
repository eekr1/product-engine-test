# PLANNING_PROFILE_OVERLAY

## Amaç

Bu belge, tüm base package'ların üzerine uygulanan ortak planning-profile doküman katmanını tanımlar.

Base package proje domain'ini belirler. Bu overlay approved intake'teki:

```text
implementation_planning
design_planning (applicable ise)
```

alanlarına göre agent-ready implementation ve design planning belgelerini deterministik biçimde ekler.

Bu bir alternatif base package değildir; shared overlay'dir. Approved project scope veya site/page architecture breadth'ini değiştiremez.

---

## Authority

- Profile semantiği: `engine/PLANNING_PROFILES.md`
- Corporate page semantics: `engine/SITE_ARCHITECTURE_RULES.md`
- Document kimlikleri/applicability: `engine/DOCUMENT_CATALOG.md`
- Paket çözümleme sırası: `engine/PACKAGE_RULES.md`

Base package ile overlay çelişirse:

- base package domain-specific requirements sahibidir,
- planning profile minimumunda overlay sahibidir,
- approved page/scope breadth project input sahibidir,
- `DOCUMENT_CATALOG.md` Document ID/applicability registry'sidir.

---

## 1. Implementation Planning Matrix

### `standard`

Applicable oldukları ölçüde required:

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
WAVE-PLAN (her resolved implementation wave için)
```

`standard` Product Engine'in agent-ready minimumudur.

Bir base package, `Prototype`, demo veya hızlı teslim gerekçesiyle bu seti ya da approved page/scope breadth'ini sessizce daraltamaz.

### `full`

`standard` setinin tamamını içerir.

Gerçek scope/complexity gerektiriyorsa:

```text
DATA
API
TEST
PROD-STRAT
DEPLOY
OPS
```

uygulanır.

`full` her conditional belgeyi otomatik üretmek değildir.

---

## 2. Design Planning Matrix

Yalnız UI/UX applicable projelerde.

### `light`

```text
DESIGN
```

`DESIGN_RULES.md` güçlü, project-specific, non-generic ve uygulanabilir olmalıdır.

`light` artifact sayısını sınırlar; approved UI/page scope'u azaltmaz.

### `standard`

```text
DESIGN
DESIGN-SYSTEM
GLOBAL-SHELL        (shell/navigation applicable ise)
PAGE-DESIGN         (her approved/distinct page/screen implementation surface için)
SYSTEM-STATES       (interactive UI ise)
```

Page count template tarafından sabitlenmez. Corporate website'te dynamic PAGE-DESIGN expected seti approved PAGE registry'den türetilir.

### `full`

`standard` setinin tamamı + gerçek UX complexity varsa:

```text
FEATURE-DESIGN      (cross-screen / complex feature başına)
ADMIN-DESIGN        (admin/moderation/operational UI varsa)
```

Full design planning gereksiz dosya çoğaltma izni değildir.

---

## 3. Profile Recommendation Context

### Compact UI Proof / Frontend Prototype

Gerçekten single/few-surface concept proof için makul pending recommendation:

```yaml
implementation_planning: standard
design_planning: light
```

Bu recommendation explicit approval gerektirir.

### Multi-Page Corporate Website

Default pending recommendation:

```yaml
implementation_planning: standard
design_planning: standard
```

Nedeni:

- real global navigation shell,
- shared design system,
- approved distinct page contracts,
- cross-page responsive/state consistency.

`delivery_profile: Prototype` bu recommendation'ı otomatik `light`a düşürmez ve approved page architecture'ı küçültmez.

Kullanıcı corporate website için `light` seçebilir; ancak page architecture implementation planning'de yine eksiksiz korunmalı ve profile rationale pending intake'te görünür olmalıdır.

---

## 4. Dynamic Instance Resolution

### WAVE-PLAN

`WAVE_MAP.md` içindeki her implementation wave için bir instance:

```text
waves/plans/WAVE_00.md
waves/plans/WAVE_01.md
...
```

### PAGE-DESIGN

`design_planning: standard | full` için her approved/distinct page/screen implementation surface başına bir instance:

```text
HOME_DESIGN_PACKAGE.md
CORPORATE_DESIGN_PACKAGE.md
SERVICES_DESIGN_PACKAGE.md
CONTACT_DESIGN_PACKAGE.md
...
```

Corporate website:

```text
PAGE_DESIGN_INSTANCE_SET == APPROVED_PAGE_SET
```

### FEATURE-DESIGN

Yalnız `design_planning: full` ve gerçek complex/cross-screen feature varsa instance üretilir.

Instance isimleri approved scope'dan türetilir; yeni Document ID/page truth üretilmez.

---

## 5. Quality Floor

```text
profile depth ≠ quality level
profile depth ≠ approved scope breadth
Prototype/demo ≠ page reduction
demo ≠ throwaway architecture
light design ≠ generic design
integration ready ≠ invented backend
```

Bu invariant'lar package reduction veya delivery wording ile kaldırılamaz.
