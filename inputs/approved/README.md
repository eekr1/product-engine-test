# Approved Inputs (`inputs/approved/`)

## 1. Amacı ve Tanımı

`inputs/approved/` klasörü;
- tüm zorunlu intake alanları doldurulmuş,
- kritik çelişki ve belirsizlikleri çözülmüş,
- varsayımları görünür hale getirilmiş,
- `source_count` ve kaynak kayıtları eksiksiz,
- kullanıcı tarafından **açıkça onaylanmış (explicit approval)**

proje girdi kayıtlarının saklandığı alandır.

> [!IMPORTANT]
> **Generation Source of Truth:**
> Product Engine üzerindeki tüm üretim run'ları (`runs/`) yalnızca `inputs/approved/` altındaki geçerli ve onaylı proje girdilerini kullanabilir.

---

## 2. Tek Canonical Klasör ve Dosya Yapısı

V0 için approved alanındaki sürümlenmiş proje yapısının tek canonical fiziksel formatı şudur:

```text
inputs/approved/<project-slug>/
├── v1/
│   ├── PROJECT_INPUT.md
│   ├── sources/          [opsiyonel]
│   └── attachments/      [opsiyonel]
├── v2/
│   ├── PROJECT_INPUT.md
│   ├── sources/          [opsiyonel]
│   └── attachments/      [opsiyonel]
└── ...
```

*(Not: `history/` alt klasörleri, flat dosya alternatifleri veya kök seviyede tutulan aktif dosya yaklaşımları kullanılmaz. Tek standart yukarıdaki `v1/`, `v2/` klasör yapısıdır.)*

---

## 3. Approved Immutability (Tam Değişmezlik) İlkesi

Approved duruma gelmiş bir input dosyası **asla ve kesinlikle doğrudan düzenlenmez (in-place overwrite veya inplace mutation yapılmaz)**.

Onaylanmış her sürüm, geçmiş çalışmalara ve run kayıtlarına kanıt oluşturan **Logical Immutable Version**'dır.

### Inplace Mutation Yasağı
Bir `v1/PROJECT_INPUT.md` onaylandıktan sonra, dosyanın `status` alanı veya başka herhangi bir kısmı fiziksel olarak **değiştirilemez**. Dosyayı açıp `status: superseded` olarak güncellemek dahi **yasaktır**.

---

## 4. Forward Reference ile Logical Superseded Mantığı

Bir sürümün eskimesi (supersede olması) mutate edilerek değil, **yeni sürümün forward reference yapmasıyla (ileri yönlü referansı ile)** çözülür:

1. **v1 Oluşumu:** Kullanıcı onaylar. `inputs/approved/<project-slug>/v1/PROJECT_INPUT.md` oluşturulur.
   - `input_id: INPUT-EXAMPLE-PROJECT-V1`
   - `input_version: "1"`
   - `status: approved`
   - `supersedes: ""`
2. **Revizyon Talebi:** Yeni bilgi geldiğinde `inputs/pending/<project-slug>/PROJECT_INPUT.md` üzerinde v2 adayı hazırlanır.
3. **v2 Oluşumu ve Onayı:** Kullanıcı açık onay verdiğinde `inputs/approved/<project-slug>/v2/PROJECT_INPUT.md` oluşturulur.
   - `input_id: INPUT-EXAMPLE-PROJECT-V2`
   - `input_version: "2"`
   - `status: approved`
   - `supersedes: INPUT-EXAMPLE-PROJECT-V1`

### Logical Interpretation (Mantıksal Yorumlama)
- `v1` dosyası fiziksel olarak **dokunulmadan** ilk haliyle kalır.
- Sistem `v2` dosyasının `supersedes: INPUT-EXAMPLE-PROJECT-V1` alanına bakarak `v1`'in **logical olarak superseded olduğunu** anlar.
- Eski versiyonların dosyalarını değiştirmek için reverse pointer veya inplace status update yapılmaz.

---

## 5. Canonical Versioning ve Metadata Standardı

Sürüm numaraları sade ve artan tamsayılar (`1`, `2`, `3`) ve ilgili klasör adları (`v1`, `v2`, `v3`) şeklinde tutulur. Semantic versioning (`1.0`, `2.0`) kullanılmaz.

### Canonical Version Metadata Örneği
```yaml
input_id: INPUT-EXAMPLE-PROJECT-V2
project_name: Example Project
project_slug: example-project
input_version: "2"
status: approved
project_type: web-app
project_state: existing
delivery_profile: Prototype
primary_language: tr
created_at: {{CREATED_AT}}
updated_at: {{UPDATED_AT}}
approved_at: {{APPROVED_AT}}
approved_by: user
supersedes: INPUT-EXAMPLE-PROJECT-V1
source_type: user-provided
source_count: 2
```

---

## 6. Current Active Approved Version Kuralı

Bir projenin aktif kullanımda olan onaylı girdisi, o proje slug'ına ait `inputs/approved/<project-slug>/` altında bulunan **en yüksek `vN` sürüm numarasına sahip klasördeki `PROJECT_INPUT.md`** dosyasıdır.

Gereksiz pointer, symlink, `latest/` klasörü veya ayrı manifest oluşturulmaz.

---

## 7. Approved Input ile Run Snapshot Ayrımı

- `inputs/approved/<project-slug>/vN/PROJECT_INPUT.md`: Yeniden kullanılabilir onaylı proje gerçeğidir (**Reusable Current Truth**).
- `runs/active/<run-id>/INPUT_SNAPSHOT.md`: O run başladığı anda kullanılan exact approved input sürümünün dondurulmuş operasyonel kopyasıdır (**Immutable Operational Snapshot**).

Run başladıktan sonra `inputs/approved/` altına yeni bir `vN+1` sürümü onaylansa dahi, mevcut çalışmanın `INPUT_SNAPSHOT.md` kopyası **değişmez**. Yeni input sürümünün çıktılara yansıması için **yeni bir run** açılması şarttır.
