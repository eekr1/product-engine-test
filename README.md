# Product Engine

## Product Engine Nedir?

Product Engine, projelerde kullanılan AI dokümantasyon yapısını standartlaştıran, yapılandırılmış proje girdisini alarak modele bağımlı olmaksızın tutarlı, kullanıma hazır ve doğrudan ajanlar tarafından işlenebilir bir dokümantasyon paketi üreten sistemdir.

Kullanılan ajanın Codex, Claude, Gemini veya başka bir sistem olması fark etmeksizin; ajan ürünün amacını, kurallarını, mimarisini, mevcut durumunu ve görevlerini proje belgelerinden okuyarak doğrudan üretime başlayabilir.

---

## Current Version

```text
Product Engine Version: 0.1.0
Active Version Authority: Root README.md (bu dosya)
Version History Authority: logs/ENGINE_CHANGELOG.md
```

Bu dosya (Root `README.md`), Product Engine'in tek birincil aktif sürüm otoritesidir (`current active version authority`). Sürüm geçmişinin sahibi ise `logs/ENGINE_CHANGELOG.md` belgesidir.

---

## Repository Map

| Klasör / Dosya | Rol ve Açıklama |
|---|---|
| `README.md` | Repository giriş noktası, aktif sürüm otoritesi ve canonical boot order rehberi. |
| `PRODUCT_ENGINE_BRAIN.md` | Product Engine'in amacı, vizyonu, girdileri, çıktıları ve temel operating philosophy belgesi. |
| `engine/` | Çalışma zamanı sözleşmeleri (intake, package, generation, validation, run protocol). |
| `packages/` | Farklı proje türleri ve teslim olgunluk seviyeleri için tanımlanmış doküman paketleri. |
| `templates/` | Dokümanların standart şablonları, bölüm yapıları ve placeholder kuralları. |
| `inputs/` | Proje fikirlerinin kabul edildiği, doğrulandığı ve onaylandığı girdi katmanı. |
| `runs/` | Tekil Product Engine çalışmalarının operasyonel yaşam döngüsü ve kayıt yeri. |
| `outputs/` | Geçerli kılınmış ve teslim edilebilir nihai ürün dokümantasyon paketleri. |
| `logs/` | Kalıcı motor hafızası (changelog, issue takibi, geliştirme fikirleri backlog'u). |
| `examples/` | Doğru/hatalı çalışma örnekleri ve test senaryoları (non-authoritative). |
| `archive/` | Aktif kullanımdan kaldırılmış tarihsel materyal ve izole edilmiş belgeler. |
| `planning/` | İnşa süreci şartnameleri ve tarihsel build takibi (runtime authority değildir). |

---

## Authority Hierarchy

Product Engine repository'sinde hangi katmanın hangi konuda yetkili olduğu açıkça tanımlanmıştır:

```text
Root README
├── Repository entry point
├── Current Product Engine active version authority (v0.1.0)
├── Current system state
├── Canonical agent boot / read order
└── Active vs historical layers map

PRODUCT_ENGINE_BRAIN
└── Product Engine'in amacı, vizyonu, sınırları ve temel operating philosophy

engine/
└── Runtime behavior contracts (intake, pipeline, validation, conflict resolution)

packages/
└── Package definitions and document scope rules

templates/
└── Generation structures, document skeletons, placeholder definitions

inputs/
└── Approved project truth (input snapshots)

runs/
└── Execution evidence and operational run manifests

outputs/
└── Final validated deliverable document packages

logs/
└── Persistent engine-level memory & version history authority (ENGINE_CHANGELOG.md)

examples/
└── Non-authoritative reference fixtures and test scenarios

archive/
└── Inactive historical material and isolated legacy artifacts

planning/
└── Historical build-design specifications & build status (runtime authority değildir)

planning/build-prompts/
└── Historical build orchestration artifacts (runtime authority değildir)
```

---

## Canonical Agent Boot / Read Order

> [!IMPORTANT]
> **Önemli Kavram Ayrımı**
> ```text
> Agent Boot Read Order ≠ Runtime Execution Flow
> ```
> - **Agent Boot Read Order**: Bir ajanın Product Engine sistemini ve çalışma kurallarını anlamak için okuduğu dokümantasyon sırasıdır.
> - **Runtime Execution Flow**: Bir çalıştırma (`run`) sırasında verinin ve adımların akış sırasıdır (`engine/GENERATION_PIPELINE.md` tarafından yönetilir).

Bir ajan Product Engine rolünü üstlenirken aşağıdaki kanonik okuma sırasını takip eder:

1. **Root `README.md`** *(Sistem genel görünümü, aktif sürüm ve authority haritası)*
2. **`PRODUCT_ENGINE_BRAIN.md`** *(Product Engine vizyonu, girdisi, çıktısı ve sınırları)*
3. **`engine/README.md`** *(Runtime sözleşmeleri navigasyonu)*
4. **İlgili Runtime Contracts** (`engine/` altındaki sözleşmeler: intake, package rules, pipeline, validation vb.)
5. **Seçilen Package** (`packages/` altındaki ilgili paket tanımı)
6. **İlgili Templates** (`templates/` altındaki doküman şablonları)
7. **Aktif Approved Input** (`inputs/approved/` altındaki onaylı proje girdisi)
8. **Run Records** (Çalışma esnasında `runs/` altındaki operasyonel kayıtlar)

> [!NOTE]
> `planning/`, `examples/`, `archive/`, `ref/` ve `planning/build-prompts/` altındaki tarihsel prompt dosyaları varsayılan Agent Boot Read Order'a dahil değildir. Yalnızca tarihsel araştırma, denetim veya mimari geliştirme gerektiğinde başvurulur.

---

## Quick Navigation & Usage Guide

- **Product Engine'i kullanacaksanız nereden başlarsınız?**
  [Canonical Agent Boot / Read Order](README.md#canonical-agent-boot--read-order) sırasını takip edin: `README.md` → `PRODUCT_ENGINE_BRAIN.md` → `engine/README.md` → İlgili Runtime Contracts.
- **Runtime contracts nerede?**
  [engine/README.md](engine/README.md) ve `engine/` altındaki çalışma zamanı sözleşmelerindedir.
- **Build history nerede?**
  [planning/BUILD_STATUS.md](planning/BUILD_STATUS.md) durum belgesinde ve [planning/build-prompts/](planning/build-prompts/) klasöründeki tarihsel yapım promptlarındadır.
- **Examples nerede?**
  [examples/README.md](examples/README.md) ve `examples/` altındaki referans fixture/senaryolardadır.
- **Archive ne zaman okunur?**
  [archive/README.md](archive/README.md) katmanı yalnızca geriye dönük araştırma, denetim (`audit`) veya eski run bağlamını inceleme gerektiğinde okunur; aktif üretimde varsayılan okuma sırasına dahil değildir.
- **Root veya planning altındaki historical prompt'lar active instruction mıdır?**
  Hayır. `planning/build-prompts/` altındaki prompt'ların hiçbiri aktif runtime otoritesi veya aktif talimat değildir; ilk yapım sürecinde kullanılan tamamlanmış tarihsel orchestration belgeleridir.

---

## Current Build State

```text
Planning Phase               : Completed
Core Folder Builds           : Completed (CLOSED)
Final Integration Audit      : Completed
Integration Fixes            : Completed (Wave 01–05)
Final Re-Audit               : Completed
Overall Repository State     : Completed
```

Bütün ana klasörler (`engine`, `packages`, `templates`, `inputs`, `runs`, `outputs`, `logs`, `examples`, `archive`) inşa edilmiş, entegrasyon düzeltme dalgaları (Wave 01–05) tamamlanmış ve repository final re-audit aşamasına hazır hale getirilmiştir.

---

## Historical / Non-Runtime Layers

- **`planning/`**: Product Engine'in ilk inşa sürecinde kullanılan şartnameleri ve tarihsel durum takibini barındırır. Tamamlanmış runtime sözleşmelerinin üzerine geçemez.
- **`planning/build-prompts/`**: Klasör bazlı adım adım inşa sürecinde kullanılan tarihsel orchestration prompt belgeleridir (`PROMPT_01_*` .. `PROMPT_21_*`). Runtime otoritesi taşımazlar ve aktif talimat değildirler.
- **`examples/`**: Sistemin doğru ve hatalı çalışma davranışlarını gösteren referans örneklerdir; otorite kaynağı değildir.
- **`archive/`**: Kullanımdan kaldırılmış veya dondurulmuş tarihsel belgelerdir; aktif sistemden izole edilmiştir.
- **`ref/`**: Kalite ve yapı referanslarıdır; bağlayıcı değildir.
