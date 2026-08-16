# Product Engine

## Product Engine Nedir?

Product Engine, projelerde kullanılan AI dokümantasyon yapısını standartlaştıran, yapılandırılmış proje girdisini alarak modele bağımlı olmaksızın tutarlı, kullanıma hazır ve doğrudan ajanlar tarafından işlenebilir bir dokümantasyon paketi üreten sistemdir.

Kullanılan ajanın Codex, Claude, Gemini veya başka bir sistem olması fark etmeksizin; ajan ürünün amacını, kurallarını, mimarisini, mevcut durumunu, tasarım bağlamını ve execution wave'lerini proje belgelerinden okuyarak doğrudan üretime başlayabilmelidir.

---

## Current Version

```text
Product Engine Version: 0.2.2
Active Version Authority: Root README.md (bu dosya)
Version History Authority: logs/ENGINE_CHANGELOG.md
```

`v0.2.2`, continuation-ready frontend stack guard'ını deterministic hale getirir. Continuation beklenen sales/client demo projelerinde explicit approved zero-build constraint yoksa package-managed, component-oriented frontend baseline ve repeatable dev/build/preview workflow zorunludur. Agent'ın “ileride framework'e migrate edilir” veya “Vanilla düşük maliyetli” yorumu istisna oluşturamaz; `VAL-09` bu kuralı blocking olarak doğrular.

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
| `logs/` | Kalıcı motor hafızası, changelog, issue/hardening takibi ve engine-level history. |
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
└── Persistent engine-level memory, issue/hardening tracking & version history

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

Core quality rules:

```text
Profile depth ≠ quality level
Prototype/demo ≠ throwaway architecture
Integration-ready ≠ invented backend
Continuation expected + no approved zero-build constraint → package-managed/component-oriented baseline REQUIRED
Future framework migration ≠ same-codebase continuation
```

---

## Current Build State

```text
Core Engine Foundation                    : Completed
Planning / Wave / Design Systems           : Completed
Continuation-Ready Stack Guard v0.2.1      : Failed real-run validation
Deterministic Continuation Gate v0.2.2     : Implemented — Awaiting Validation
Overall v0.2.2 State                       : Operational; next Trakya run is validation target
```

`ISSUE-001` açık kalır. `RUN-20260817-002`, v0.2.1'in agent-generated rationale ile Vanilla'ya kaçabildiğini kanıtladı. v0.2.2 bu loophole'u kapatır ve `VAL-09` enforcement ekler.

---

## Version History Boundary

- `v0.1.0`: İlk gerçek Engine runtime.
- `v0.2.0`: Planning profiles + implementation/design/wave architecture.
- `v0.2.1`: Continuation-ready stack intent/rationale guard.
- `v0.2.2`: Deterministic continuation gate + blocking VAL-09 enforcement.

Historical eski run/output yeni contract'lara göre geriye dönük mutate edilmez; validation için fresh run kullanılır.
