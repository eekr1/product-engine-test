# Product Engine — Packages

## Amaç

`packages/` proje bağlamına göre **base domain package** kapsamını ve bütün base package'lara ortak uygulanan **planning profile overlay** katmanını tanımlar.

---

## Runtime Navigation — If You Are Here

Bu bölüm package kurallarını yeniden tanımlamaz; resolution sırasında hangi belgeye ne zaman dönüleceğini gösterir.

```text
IF selecting a package:
→ re-open engine/PACKAGE_RULES.md
→ read approved project_type + project_state + planning profiles
→ open selected base package candidate
→ open PLANNING_PROFILE_OVERLAY.md
→ re-open engine/DOCUMENT_CATALOG.md
→ resolve canonical document set
→ record selection evidence
```

### STOP CHECK

```text
STOP if:
- project/profile truth approved input'tan gelmiyor
- base package seçimi sadece delivery profile adına bakılarak yapılıyor
- overlay minimumları düşürülüyor
- package catalog dışı Document ID üretiyor
- dynamic instance count/context henüz resolve edilmeden instance seti varsayılıyor
```

Package resolution complete olmadan template generation'a geçme.

---

Package sistemi iki parçalıdır:

```text
Base Package
→ proje/domain bağlamının özel belge gereksinimleri

PLANNING_PROFILE_OVERLAY
→ approved implementation/design planning profile minimumları
```

Resolved document scope:

```text
base package
+
PLANNING_PROFILE_OVERLAY
+
contextual conditions
→ canonical document set
```

---

## Authority Ayrımı

```text
engine/PROJECT_INTAKE.md
→ approved project truth için gereken alanlar

engine/PLANNING_PROFILES.md
→ implementation/design planning profile anlamları ve kalite tabanı

engine/PACKAGE_RULES.md
→ base package + overlay resolution sırası

engine/DOCUMENT_CATALOG.md
→ canonical Document ID / applicability registry

packages/<BASE_PACKAGE>.md
→ domain-specific package gereksinimleri

packages/PLANNING_PROFILE_OVERLAY.md
→ bütün package'lar için shared planning minimumları

templates/
→ canonical document skeleton'ları
```

Package yeni Document ID icat edemez ve catalog/planning minimumunu ezemez.

---

## Base Packages

| Package | Ana Kullanım |
|---|---|
| `DEMO_FRONTEND_PACKAGE.md` | Frontend demo / satış prototipi / UI proof |
| `CORPORATE_WEBSITE_PACKAGE.md` | Kurumsal site / içerik-hizmet sunumu |
| `SAAS_PACKAGE.md` | Account/data/backend/API ağırlıklı ürün |
| `EXISTING_PROJECT_PACKAGE.md` | Existing/brownfield proje extension bağlamı |
| `API_SERVICE_PACKAGE.md` | API/backend/integration ağırlıklı servis |

Shared overlay:

| Dosya | Rol |
|---|---|
| `PLANNING_PROFILE_OVERLAY.md` | `implementation_planning` ve applicable `design_planning` profile minimumlarını bütün base package'lara uygular. |

---

## Package Ne Değildir?

Package:

- planning profile authority değildir,
- template deposu değildir,
- output klasörü değildir,
- project truth kaynağı değildir,
- runtime approval gate değildir.

---

## Deterministik Resolution

Approved input üzerinden:

```text
1. project_type okunur
2. delivery_profile okunur
3. implementation_planning okunur
4. design_planning (applicable ise) okunur
5. base package seçilir
6. base package domain candidate seti alınır
7. PLANNING_PROFILE_OVERLAY uygulanır
8. DOCUMENT_CATALOG type/profile/planning applicability filtreleri uygulanır
9. contextual DATA/API/TEST/DEPLOY/OPS vb. koşullar değerlendirilir
10. dynamic WAVE/PAGE/FEATURE instance registry çözülür
```

Profile tahmini bu aşamada yapılmaz; approved input'ta kesinleşmiş olmalıdır.

---

## Planning Overlay Minimumları

### Implementation `standard`

Applicable project type için agent-ready minimum:

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

### Implementation `full`

Standard set korunur; gerçek scope/karmaşıklık koşuluna göre:

```text
DATA
API
TEST
PROD-STRAT
DEPLOY
OPS
```

değerlendirilir.

Full = hepsini otomatik üret demek değildir.

### Design `light`

```text
DESIGN
```

Light artifact sayısı hafiftir; design quality düşük değildir.

### Design `standard`

Applicable ise:

```text
DESIGN
DESIGN-SYSTEM
GLOBAL-SHELL
PAGE-DESIGN instances
SYSTEM-STATES
```

### Design `full`

Standard set + gerçek ihtiyaç varsa:

```text
FEATURE-DESIGN instances
ADMIN-DESIGN
```

---

## Demo / Prototype Invariant

```text
demo ≠ throwaway architecture
Prototype ≠ planning reduction
design light ≠ generic design
integration-ready ≠ invented backend
```

---

## Extension / Merge Kuralları

1. Aynı Document ID iki kez üretilmez.
2. Base + extension birleşiminde catalog applicability korunur.
3. Planning overlay minimumu extension/reduction tarafından düşürülemez.
4. Existing-project gibi extension context yeni project truth uyduramaz.
5. Dynamic instance'lar aynı canonical ID/template'i kullanır.

---

## Agent Reference Read Order

```text
1. Root README.md
2. PRODUCT_ENGINE_BRAIN.md
3. engine/README.md
4. engine/PROJECT_INTAKE.md
5. engine/PLANNING_PROFILES.md
6. engine/DOCUMENT_CATALOG.md
7. engine/PACKAGE_RULES.md
8. packages/README.md
9. selected base package
10. packages/PLANNING_PROFILE_OVERLAY.md
11. relevant templates
```

Runtime execution sırası `engine/GENERATION_PIPELINE.md` tarafından yönetilir.
