# Product Engine — Deprecated Templates Katmanı (`archive/deprecated-templates/`)

> [!WARNING]
> **Aktif Sistem İzolasyonu Uyarısı**
> 
> Bu klasördeki (`archive/deprecated-templates/`) şablonlar artık aktif üretimde kullanılmayan eski şablon sürümleridir.
> 
> Bu şablonlar:
> - Aktif paketler (`packages/`) tarafından üretim şablonu olarak **SEÇİLEMEZ**,
> - `engine/DOCUMENT_CATALOG.md` tarafından aktif şablon konumu gösterilemez,
> - Güncel çalıştırmalarda (`runs/`) doküman üretimi için kullanılamaz.

---

## 1. Amaç ve Kapsam

`archive/deprecated-templates/` klasörünün görevi, yeni bir sürümle değiştirilmiş, placeholder standardı güncellenmiş veya kullanımı sonlandırılmış eski doküman şablonlarını saklamaktır.

Bu klasör şu temel soruların yanıtını verir:
- Hangi şablon sürümü ne zaman deprecated oldu?
- Yerine geçen güncel şablon hangisidir?
- Geçmiş bir `run` sırasında üretilmiş dokümanlar hangi eski şablon yapısına dayanıyordu?

---

## 2. Giriş ve Hariç Tutma Kriterleri (Entry & Exclusion Criteria)

### 2.1. Giriş Kriterleri (Entry Criteria)
Bir şablon dosyası yalnızca şu durumlarda buraya aktarılır:
- Yerine yeni bir şablon sürümü (`v2.0` vb.) yayınlanmış ve eski sürüm üretkenlikten kaldırılmışsa,
- Doküman türü `engine/DOCUMENT_CATALOG.md` tarafından emekliye ayrılmışsa,
- Eski yer tutucu (`placeholder`) veya metadata standardına ait olup aktif standartla uyumsuzlaşmışsa.

### 2.2. Hariç Tutma Kriterleri (Exclusion Criteria)
Aşağıdakiler kesinlikle bu klasöre konulamaz:
- Aktif `templates/` klasöründeki üretim şablonları,
- Aktif paketler (`packages/`),
- Taslak çalışma metinleri veya sahte örnek şablonlar.

*Not: V0 build sırasında aktif `templates/` klasöründen hiçbir canlı şablon buraya taşınmaz veya kopyalanmaz.*

---

## 3. Yapılandırma İlkesi (V0 Structure & Premature Subfolder Ban)

V0 aşamasında `archive/deprecated-templates/` altında erken klasör parçalanması (`premature subfolders`) yapılmaz.

Şimdilik yalnızca bu rehber dosya (`README.md`) bulunur:
```text
archive/deprecated-templates/
└── README.md
```

Gelecekte gerçek bir şablon arşivlendiğinde, repository genelinde seçilecek tekil yaklaşıma göre alt klasörler (ör. `v0.1/` veya kategori bazlı `ai/`, `project/`) ihtiyaç oranında oluşturulur. Önceden boş kategori dizinleri (`ai/`, `project/`, `design/`, `waves/`, `prompts/`) açılması yasaktır.

---

## 4. Metadata ve İzlenebilirlik Standardı

Arşivlenen her şablon dosyası kendi başında aşağıdaki YAML frontmatter metadata bloğunu taşımalıdır:

```yaml
---
archive_id: ARC-TEMPLATE-001
content_type: template
original_path: templates/ai/PROJECT_BRAIN_TEMPLATE.md
archived_path: archive/deprecated-templates/PROJECT_BRAIN_TEMPLATE_v0.1.md
original_version: 0.1
status: deprecated
archive_reason: Yeni metadata ve placeholder standardı nedeniyle değiştirildi.
archived_at: 2026-08-10
archived_by: execution-agent
replacement: templates/ai/PROJECT_BRAIN_TEMPLATE.md
related_runs: []
notes: ""
---
```

---

## 5. Eski Run Uyumluluğu ve Restore Akışı

- **Eski Run Uyumluluğu:** Geçmiş çalıştırmaların (`runs/completed/`) bağımlı olduğu şablon yapısını doğrulayabilmesi için arşivlenen şablonun orijinal sürüm bilgisi ve kimliği korunur.
- **Restore (Geri Alma):** Deprecated bir şablon doğrudan `templates/` klasörüne kopyalanarak aktif üretim şablonu yapılamaz. Geri alma gerekiyorsa güncel `templates/` standartlarına uygun yeni bir sürüm oluşturulmalı ve paket sözleşmeleri güncellenmelidir.

---

## 6. Mevcut Başlangıç Durumu (V0 Initial State)

Bu klasör V0 mimarisi itibarıyla sözleşmeye uygun, yalnız bu rehber belgeden oluşan nötr başlangıç durumundadır. Sahte şablon veya yapay arşiv kaydı üretilmemiştir.
