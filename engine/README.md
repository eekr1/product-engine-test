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
5.  engine/SITE_ARCHITECTURE_RULES.md   (corporate/page architecture applicable ise)
6.  engine/PLANNING_PROFILES.md
7.  engine/DOCUMENT_CATALOG.md
8.  engine/PACKAGE_RULES.md
9.  engine/ASSUMPTION_RULES.md
10. engine/CONFLICT_RESOLUTION.md
11. engine/INFORMATION_MAP.md
12. engine/GENERATION_PIPELINE.md
13. engine/OUTPUT_STRUCTURE.md
14. engine/VALIDATION_RULES.md
15. engine/RUN_PROTOCOL.md
16. Selected packages/
17. Relevant templates/
18. Active project source/input according to lifecycle
```

Tüm belgelerin her task öncesi baştan okunması zorunlu değildir; point-of-use refresh gereken template/authority'ler ilgili runtime contract tarafından belirlenir.

---

## Hangi Soru Hangi Dosyanın Sahibi

| Soru | Authoritative Dosya |
|---|---|
| Hangi project type/input alanları gerekli? | `PROJECT_INTAKE.md` |
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
