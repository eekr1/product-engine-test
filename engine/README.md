# Product Engine — Engine Klasörü

## Amaç

Bu klasör Product Engine'in çalışma zamanı sözleşmelerini içerir.

Bir ajan bu belgeler ve approved project truth üzerinden Product Engine'in nasıl davranacağını anlayabilmelidir.

---

## Klasördeki Dosyalar ve Görevleri

| Dosya | Görev |
|---|---|
| `README.md` | Navigasyon ve başlangıç belgesi. |
| `PROJECT_INTAKE.md` | Project type vocabulary, required input fields ve explicit approval lifecycle. |
| `CAPABILITY_SCOPE_RULES.md` | Executable capability semantic authorization'ın canonical sahibi. |
| `SITE_ARCHITECTURE_RULES.md` | Corporate website approved page/surface architecture semantiğinin canonical sahibi. |
| `PLANNING_PROFILES.md` | Implementation/design planning depth, quality floor ve continuation readiness. |
| `DOCUMENT_CATALOG.md` | Canonical document type registry. |
| `PACKAGE_RULES.md` | Approved domain/project type'tan deterministic base package selection. |
| `INFORMATION_MAP.md` | Her bilgi türünün primary owner sınırı. |
| `GENERATION_PIPELINE.md` | Uçtan uca generation ve dynamic instance checkpoints. |
| `OUTPUT_STRUCTURE.md` | Published output structure/versioning. |
| `VALIDATION_RULES.md` | Canonical VAL-01..VAL-19 gates. |
| `ASSUMPTION_RULES.md` | Eksik bilgi davranışı. |
| `CONFLICT_RESOLUTION.md` | Conflict precedence/repair. |
| `RUN_PROTOCOL.md` | Run operational lifecycle. |

---

## Agent Boot / Reference Read Order

> Agent Boot Read Order ≠ Runtime Execution Flow. Runtime order `GENERATION_PIPELINE.md` sahibidir.

```text
1.  Root README.md
2.  PRODUCT_ENGINE_BRAIN.md
3.  engine/README.md
4.  engine/PROJECT_INTAKE.md
5.  engine/CAPABILITY_SCOPE_RULES.md
6.  engine/SITE_ARCHITECTURE_RULES.md   (corporate/page architecture applicable ise)
7.  engine/PLANNING_PROFILES.md
8.  engine/DOCUMENT_CATALOG.md
9.  engine/PACKAGE_RULES.md
10. engine/ASSUMPTION_RULES.md
11. engine/CONFLICT_RESOLUTION.md
12. engine/INFORMATION_MAP.md
13. engine/GENERATION_PIPELINE.md
14. engine/OUTPUT_STRUCTURE.md
15. engine/VALIDATION_RULES.md
16. engine/RUN_PROTOCOL.md
17. Selected packages/
18. Relevant templates/
19. Active project source/input according to lifecycle
```

Tüm belgelerin her task öncesi baştan okunması zorunlu değildir; point-of-use refresh gereken template/authority'ler ilgili runtime contract tarafından belirlenir.

---

## Hangi Soru Hangi Dosyanın Sahibi

| Soru | Authoritative Dosya |
|---|---|
| Hangi project type/input alanları gerekli? | `PROJECT_INTAKE.md` |
| Generated behavior/capability approved scope tarafından authorize edilmiş mi? | `CAPABILITY_SCOPE_RULES.md` |
| Corporate website page/surface architecture nasıl modellenir? | `SITE_ARCHITECTURE_RULES.md` |
| Implementation/design planning ne kadar derin? | `PLANNING_PROFILES.md` |
| Continuation-ready frontend baseline nedir? | `PLANNING_PROFILES.md` |
| Hangi canonical docs var? | `DOCUMENT_CATALOG.md` |
| Hangi package seçilir? | `PACKAGE_RULES.md` |
| Bilgi hangi doc'un sahibi? | `INFORMATION_MAP.md` |
| Generation sırası/checkpoints? | `GENERATION_PIPELINE.md` |
| Output nasıl publish/version edilir? | `OUTPUT_STRUCTURE.md` |
| Output geçerli mi? | `VALIDATION_RULES.md` |
| Eksik bilgi? | `ASSUMPTION_RULES.md` |
| Conflict? | `CONFLICT_RESOLUTION.md` |
| Run lifecycle? | `RUN_PROTOCOL.md` |

---

## Ana Klasörlerle İlişki

```text
engine/    → Product Engine davranış contracts
packages/  → domain/base packages + planning overlay
templates/ → canonical artifact skeletons
inputs/    → pending/approved project truth
runs/      → operational execution records
outputs/   → published agent-ready documentation packages
logs/      → persistent engine history/issues/changelog
ref/       → non-authoritative quality calibration references
```

---

## Temel Terimler

| Terim | Tanım |
|---|---|
| **Project Type** | Domain/solution class; örn. `corporate-website`, `web-app`, `api-service` |
| **Delivery Profile** | Teslim olgunluğu; project type değildir |
| **Capability Atom** | Independently meaningful executable behavior/action/state/deliverable |
| **Approved Executable Support** | Capability atomunu exact semantic meaning ile authorize eden `IN_SCOPE | KNOWN_DECISION` + `Executable=YES` support |
| **Site Architecture** | Corporate website için approved PAGE-XXX registry |
| **Approved Page Set** | Current executable `IN_SCOPE` PAGE identities |
| **Implementation Planning** | Execution planning depth (`standard | full`) |
| **Design Planning** | Design planning depth (`light | standard | full`) |
| **Package** | Project/domain context için base package |
| **Template** | Canonical artifact skeleton |
| **Run** | Tek Product Engine generation lifecycle |
| **Output** | Successful run sonunda published clean documentation package |
| **Assumption** | Kontrollü/kayıtlı çıkarım |
| **Conflict** | Authority uyumsuzluğu |
| **Validation** | VAL gates ile correctness/consistency kontrolü |

---

## Capability Scope Core Distinction

```text
relatedness ≠ authorization
approved page existence ≠ all plausible interactions on that page
upstream generated artifact ≠ scope authority
```

Örnek:

```text
approved Contact page + phone/email direct contact
≠ contact form + submit + success state
```

Her independently meaningful generated behavior exact approved executable support ister.

---

## Corporate Website Core Distinction

```text
corporate-website = project/domain type
Prototype / sales demo = delivery context
site_architecture = approved page breadth
```

Dolayısıyla:

```text
corporate-website + Prototype
≠ landing/single-page reduction
```

Approved distinct pages real navigable implementation surfaces olarak korunur.

---

## Model Bağımsızlığı

Engine belirli AI modeline bağımlı değildir. Markdown okuyabilen, repository/files üzerinde çalışabilen ve canonical contracts'i uygulayabilen yetkin ajan Product Engine rolünü yerine getirebilir.
