# Product Engine

## Product Engine Nedir?

Product Engine, projelerde kullanılan AI dokümantasyon yapısını standartlaştıran, yapılandırılmış proje girdisini alarak modele bağımlı olmaksızın tutarlı, kullanıma hazır ve doğrudan ajanlar tarafından işlenebilir bir dokümantasyon paketi üreten sistemdir.

Kullanılan ajanın Codex, Claude, Gemini veya başka bir sistem olması fark etmeksizin; ajan ürünün amacını, kurallarını, mimarisini, mevcut durumunu, tasarım bağlamını ve execution wave'lerini proje belgelerinden okuyarak doğrudan üretime başlayabilmelidir.

---

## Current Version

```text
Product Engine Version: 0.2.0
Active Version Authority: Root README.md (bu dosya)
Version History Authority: logs/ENGINE_CHANGELOG.md
```

`v0.2.0`, ilk gerçek `v0.1.0` run'ından sonra eklenen Planning Profiles, implementation/wave planning, design planning, integration-readiness, agent-readiness ve genişletilmiş validation mimarisini temsil eder.

Bu dosya (Root `README.md`), Product Engine'in tek birincil aktif sürüm otoritesidir (`current active version authority`). Sürüm geçmişinin sahibi ise `logs/ENGINE_CHANGELOG.md` belgesidir.

---

## Repository Map

| Klasör / Dosya | Rol ve Açıklama |
|---|---|
| `README.md` | Repository giriş noktası, aktif sürüm otoritesi ve canonical boot order rehberi. |
| `PRODUCT_ENGINE_BRAIN.md` | Product Engine'in amacı, vizyonu, girdileri, çıktıları ve temel operating philosophy belgesi. |
| `engine/` | Çalışma zamanı sözleşmeleri: intake, planning profiles, package/document resolution, generation, validation ve run protocol. |
| `packages/` | Domain/base package tanımları ve shared planning overlay kapsamı. |
| `templates/` | Canonical proje dokümanı, design, wave, prompt ve run şablonları. |
| `project-start/` | Ham brief veya yapılandırılmış proje source material'ini canonical intake'e teslim eden pre-run giriş katmanı. Runtime authority değildir. |
| `inputs/` | Pending ve explicit approval sonrası approved proje truth katmanı. |
| `runs/` | Tekil Product Engine çalışmalarının operasyonel yaşam döngüsü ve kayıt yeri. |
| `outputs/` | Geçerli kılınmış ve teslim edilebilir nihai agent-ready proje dokümantasyon paketleri. |
| `logs/` | Kalıcı motor hafızası, changelog ve engine-level history. |
| `examples/` | Doğru/hatalı çalışma örnekleri ve test senaryoları (non-authoritative). |
| `archive/` | Aktif kullanımdan kaldırılmış tarihsel materyal ve izole edilmiş belgeler. |
| `planning/` | İlk inşa süreci şartnameleri ve tarihsel build takibi (runtime authority değildir). |
| `ref/` | Kalite/yapı referansları; active runtime contract değildir. |

---

## Authority Hierarchy

```text
Root README
├── Repository entry point
├── Current Product Engine active version authority
├── Current system state
├── Canonical agent boot / read order
└── Active vs historical layers map

PRODUCT_ENGINE_BRAIN
└── Product Engine amacı, vizyonu, sınırları ve operating philosophy

engine/
└── Runtime behavior contracts

packages/
└── Base package scope + shared planning overlay

templates/
└── Generation structures and canonical skeletons

project-start/
└── Pre-run source/launcher layer; canonical runtime authority değildir

inputs/
└── Pending/approved project truth

runs/
└── Execution evidence and operational run records

outputs/
└── Final validated agent-ready deliverables

logs/
└── Persistent engine-level memory & version history

examples/ / archive/ / planning/ / ref/
└── Non-runtime reference or historical layers
```

---

## Canonical Agent Boot / Read Order

> [!IMPORTANT]
> **Agent Boot Read Order ≠ Runtime Execution Flow**
>
> - Agent Boot Read Order: Ajanın Product Engine authority ve çalışma kurallarını anlama sırası.
> - Runtime Execution Flow: Bir run sırasında verinin/adımların akışı; `engine/GENERATION_PIPELINE.md` sahibidir.

Bir ajan Product Engine rolünü üstlenirken kanonik referans sırası:

1. Root `README.md`
2. `PRODUCT_ENGINE_BRAIN.md`
3. `engine/README.md`
4. Görev için gerekli authoritative `engine/` contracts
5. Seçilen `packages/` contract'ları
6. İlgili `templates/` belgeleri
7. Aktif proje source'u (`project-start/` kullanılıyorsa source context olarak)
8. Aktif pending/approved input (`inputs/` lifecycle durumuna göre)
9. Run başladıysa `runs/` operasyonel kayıtları

`project-start/` içeriği ham/source context'tir; Engine contract'larını geçersiz kılamaz. `planning/`, `examples/`, `archive/`, `ref/` ve `planning/build-prompts/` varsayılan runtime authority/read order değildir.

---

## Runtime Mental Model

```text
PROJECT SOURCE / RAW BRIEF
        ↓
PROJECT INTAKE
        ↓
PLANNING PROFILE RESOLUTION
        ↓
PENDING INPUT
        ↓
EXPLICIT USER APPROVAL
        ↓
APPROVED INPUT
        ↓
BASE PACKAGE + PLANNING OVERLAY
        ↓
DOCUMENT / INSTANCE RESOLUTION
        ↓
GENERATION
        ↓
VALIDATION
        ↓
AGENT-READY OUTPUT
        ↓
RUN COMPLETION / HISTORY
```

Planning axes:

```text
delivery_profile         → teslim olgunluğu
implementation_planning  → standard | full
design_planning          → light | standard | full (UI/UX applicable ise)
```

Core quality rules:

```text
Profile depth ≠ quality level
Prototype/demo ≠ throwaway architecture
Light design ≠ generic/template design
Integration-ready ≠ invented backend
Full ≠ gereksiz belge üretme izni
```

---

## Current Build State

```text
Core Engine Foundation            : Completed
First Real Project Test (v0.1.0)  : Completed
First-Run Hardening               : Completed
Planning Profile System           : Completed
Implementation / Wave Planning    : Completed
Design Planning Foundation        : Completed
Design Canonical Templates        : Completed
Selection / Overlay Integration   : Completed
Validation Expansion              : Completed
Post-Build Integration Audit      : Completed
Audit Cleanup                     : Completed
Second Real Project Validation    : Pending
Overall v0.2.0 State              : Built; awaiting clean second real-project run
```

`v0.2.0` mimarisi ve cleanup tamamlanmıştır. Engine'in bir sonraki kabul kapısı, temizlenmiş Trakya Teknik Makine source'u üzerinden yeni planning profile sisteminin baştan sona gerçek run ile doğrulanmasıdır.

---

## Historical / Non-Runtime Layers

- `planning/`: İlk Product Engine inşa sürecindeki şartnameler ve tarihsel durum takibi. Active contracts üzerine geçemez.
- `planning/build-prompts/`: İlk build orchestration prompt'ları. Runtime instruction değildir.
- `examples/`: Test/reference fixture'ları; authority değildir.
- `archive/`: Kullanımdan kaldırılmış veya dondurulmuş tarihsel belgeler.
- `ref/`: Tasarım ve kalite pattern referansları; canonical rule olarak doğrudan kopyalanmaz.

---

## Version History Boundary

- `v0.1.0`: İlk gerçek Trakya Teknik Makine run'ını gerçekleştiren temel Engine. Historical output `outputs/demos/trakya-teknik-makine/versions/v0.1/` ve `runs/completed/RUN-20260811-001/` altında korunur.
- `v0.2.0`: Planning Profiles + implementation/wave planning + design planning + integration readiness + agent-readiness validation mimarisi.

Historical bir `v0.1.0` run/output yeni `v0.2.0` contract'larına göre geriye dönük olarak mutate edilmez. Yeni contract'ları doğrulamak için yeni intake ve yeni run üretilir.