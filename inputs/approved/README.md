# Approved Inputs (`inputs/approved/`)

## 1. Amacı ve Tanımı

`inputs/approved/` klasörü;
- tüm zorunlu intake alanları doldurulmuş,
- kritik çelişki ve belirsizlikleri çözülmüş,
- varsayımları görünür hale getirilmiş,
- kullanıcı tarafından **açıkça onaylanmış (explicit approval)**

proje girdi kayıtlarının saklandığı alandır.

> [!IMPORTANT]
> **Generation Source of Truth:**
> Product Engine üzerindeki tüm üretim run'ları (`runs/`) yalnızca `inputs/approved/` altındaki geçerli ve onaylı proje girdilerini kullanabilir.

---

## 2. Immutability (Değişmezlik) ve In-Place Overwrite Yasağı

Approved bir input dosyası **asla doğrudan düzenlenmez (in-place overwrite yapılmaz)**.

Onaylanmış her sürüm, geçmiş çalışmalara ve run kayıtlarına kanıt oluşturan **Logical Immutable Version**'dır.

### Bilgi Değişikliği / Revizyon Süreci
Proje hakkında yeni bir bilgi geldiğinde veya kapsam değiştiğinde izlenecek adım:

```text
Eski Approved Sürüm (v1) Korunur (status: superseded yapılabilir)
       │
       ▼
Yeni Pending Revision (v2 adayı) `inputs/pending/<project-slug>/` altında oluşturulur
       │
       ▼
Kullanıcıdan Açık Onay (Explicit Approval) Alınır
       │
       ▼
Yeni Approved Version (v2) `inputs/approved/<project-slug>/` altında oluşur
```

---

## 3. Sürümleme ve Metadata Standardı

Approved dosyalar aşağıdaki versioning yapısını korur:

```text
inputs/approved/<project-slug>/
├── PROJECT_INPUT.md        (Aktif v1 veya en güncel approved sürüm)
└── history/                 [opsiyonel]
    ├── PROJECT_INPUT_V1.md
    └── PROJECT_INPUT_V2.md
```

Veya flat sürümleme:
- `inputs/approved/<project-slug>-v1.md`
- `inputs/approved/<project-slug>-v2.md`

### Version Metadata Alanları
```yaml
input_id: INPUT-EXAMPLE-PROJECT-V2
project_name: Example Project
project_slug: example-project
input_version: "2.0"
status: approved # pending | approved | superseded
approved_at: 2026-08-08T05:00:00Z
approved_by: user
supersedes: INPUT-EXAMPLE-PROJECT-V1
```

---

## 4. Current Active Approved Version Kuralı

Bir projenin aktif kullanımda olan onaylı girdisi, o proje slug'ına ait **status'ü approved olan en yüksek sürüm numaralı** dosyadır. Gereksiz pointer, symlink veya karmaşık branching yapılmaz.

---

## 5. Approved Input ile Run Snapshot Ayrımı

- `inputs/approved/<project-slug>/`: Yeniden kullanılabilir güncel proje gerçeğidir (**Current Reusable Truth**).
- `runs/active/<run-id>/INPUT_SNAPSHOT.md`: O run başladığı anda kullanılan approved input sürümünün dondurulmuş operasyonel kopyasıdır (**Immutable Operational Snapshot**).

Run başladıktan sonra `inputs/approved/` içeriği revize edilse veya yeni sürüm onaylansa dahi, mevcut çalışmanın `INPUT_SNAPSHOT.md` kopyası **değişmez**. Yeni input sürümünün çıktılara yansıması için **yeni bir run** açılması şarttır.
