# PLANNING_PROFILE_OVERLAY

## Amaç

Bu belge, tüm base package'ların üzerine uygulanan ortak planning-profile doküman katmanını tanımlar.

Base package proje türünün/teslim bağlamının domain belgelerini belirler. Bu overlay ise approved intake'teki:

```text
implementation_planning
design_planning (applicable ise)
```

alanlarına göre agent-ready implementation ve design planning belgelerini deterministik biçimde ekler.

Bu bir alternatif base package değildir; shared overlay'dir.

---

## Authority

- Profile semantiği: `engine/PLANNING_PROFILES.md`
- Document kimlikleri/applicability: `engine/DOCUMENT_CATALOG.md`
- Paket çözümleme sırası: `engine/PACKAGE_RULES.md`

Base package ile bu overlay çelişirse:

- base package domain-specific required belgelerde sahibidir,
- planning profile minimumunda bu overlay sahibidir,
- `DOCUMENT_CATALOG.md` Document ID ve applicability için son kayıt merkezidir.

---

## 1. Implementation Planning Matrix

### `standard`

Aşağıdaki canonical belgeler, project type için applicable oldukları ölçüde required'dır:

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
WAVE-PLAN (WAVE_MAP'teki her implementation wave için dynamic instance)
```

`standard` Product Engine'in agent-ready minimumudur.

Bir base package, `Prototype`, demo, landing veya hızlı teslim gerekçesiyle bu seti sessizce daraltamaz.

### `full`

`standard` setinin tamamını içerir.

Aşağıdaki belgeler gerçek scope/karmaşıklık koşulu karşılanırsa eklenir:

```text
DATA
API
TEST
PROD-STRAT
DEPLOY
OPS
```

Koşullar:

- `DATA`: gerçek kalıcı/önemli veri modeli varsa.
- `API`: gerçek API surface approved scope içindeyse.
- `TEST`: risk/karmaşıklık dedicated test strategy gerektiriyorsa.
- `PROD-STRAT`: gerçek ürün stratejisi kullanıcı tarafından sağlanmış/onaylanmışsa.
- `DEPLOY`: gerçek deployment target approved scope içindeyse.
- `OPS`: gerçek production operations scope içindeyse.

`full` bu belgelerin hepsini otomatik üretmek anlamına gelmez.

---

## 2. Design Planning Matrix

Bu bölüm yalnız UI/UX applicable projelerde kullanılır.

### `light`

```text
DESIGN
```

`DESIGN_RULES.md` güçlü, projeye özgü, non-generic ve uygulanabilir olmak zorundadır.

`light` tasarım kalitesini değil artifact sayısını sınırlar.

### `standard`

```text
DESIGN
DESIGN-SYSTEM
GLOBAL-SHELL        (shell/navigation applicable ise)
PAGE-DESIGN         (her distinct page/screen implementation surface için)
SYSTEM-STATES       (interactive UI ise)
```

Page sayısı project type veya template tarafından sabitlenmez. Engine approved scope'taki distinct implementation surface'leri çıkarır ve tek `PAGE-DESIGN` canonical template'inden gerekli instance'ları üretir.

### `full`

`standard` setinin tamamını içerir ve gerçek UX karmaşıklığına göre:

```text
FEATURE-DESIGN      (cross-screen / complex feature başına)
ADMIN-DESIGN        (admin/moderation/operational UI varsa)
```

instance/conditional belgelerini ekler.

Full design planning, her page'i feature gibi bölmek veya gereksiz dosya çoğaltmak için kullanılamaz.

---

## 3. Demo / Prototype Kuralı

Demo/frontend prototype için önerilen varsayılan teklif:

```yaml
implementation_planning: standard
design_planning: light
```

Ancak bu yalnız intake önerisidir; canonical explicit approval gerektirir.

Bu profile ile:

- implementation planı agent-ready seviyede kalır,
- `TECH_CONTEXT` integration readiness taşır,
- `WAVE_MAP` + wave plan instance'ları üretilir,
- design artifact sayısı hafif kalır,
- `DESIGN_RULES` generic veya düşük kalite olamaz,
- gerçek backend yoksa DATA/API uydurulmaz.

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

Her distinct page/screen implementation surface için bir instance:

```text
HOME_DESIGN_PACKAGE.md
SERVICES_DESIGN_PACKAGE.md
ROOM_DESIGN_PACKAGE.md
...
```

### FEATURE-DESIGN

Yalnız `design_planning: full` ve gerçek complex/cross-screen feature varsa:

```text
ROOM_LIFECYCLE_DESIGN_PACKAGE.md
MATCHING_FLOW_DESIGN_PACKAGE.md
...
```

Instance isimleri proje scope'undan türetilir; yeni Document ID oluşturulmaz.

---

## 5. Quality Floor

Overlay tarafından seçilen bütün belgeler `engine/PLANNING_PROFILES.md` kalite tabanına tabidir.

```text
profile depth ≠ quality level
demo ≠ throwaway architecture
light design ≠ generic design
integration ready ≠ invented backend
```

Bu dört invariant package reduction ile kaldırılamaz.
