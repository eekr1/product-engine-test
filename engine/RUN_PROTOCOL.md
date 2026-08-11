# Run Protocol

## Amaç

Bu belge tek bir Product Engine run'ının operasyonel yaşam döngüsünü, kayıtlarını, profile/package snapshot'larını ve kapanış konumunu tanımlar.

Generation mantığı `GENERATION_PIPELINE.md`'ye aittir.

Run kayıtları private chain-of-thought içermez; yalnız sonuç, karar, kısa gerekçe ve izlenebilir metadata tutulur.

---

# Run Klasör Yapısı

```text
runs/
├── README.md
├── active/
├── completed/
└── failed/
```

Aktif run:

```text
runs/active/<run-id>/
├── RUN_MANIFEST.md
├── INPUT_SNAPSHOT.md
├── PACKAGE_SELECTION.md
├── SOURCE_REGISTER.md
├── ASSUMPTIONS.md
├── CONFLICTS.md
├── DECISIONS.md
├── RUN_LOG.md
├── PROGRESS.md
├── VALIDATION_REPORT.md
├── COMPLETION_REPORT.md
└── working-output/
```

---

# Run Location Exclusivity

Aynı `run-id` aynı anda yalnız bir lifecycle klasöründe bulunabilir.

```text
active
OR completed
OR failed
```

MUST NOT:

```text
runs/active/RUN-X/
+
runs/completed/RUN-X/
```

Completion/failure move işleminde source `active/` kopyası fiziksel olarak kaldırılmalıdır.

---

# Run Başlatma Koşulları

Yeni generation run yalnız:

1. canonical explicit approval almış approved input varsa,
2. approved input canonical planning profile alanlarını taşıyorsa,
3. aynı proje/scope için çakışan active run yoksa

başlatılır.

Required approved snapshot alanları:

```text
input_id / input_version
project_slug
project_type
project_state
delivery_profile
implementation_planning
design_planning (UI/UX applicable ise)
```

Planning profile package stage'inde yeniden tahmin edilmez.

---

# Run ID

```text
RUN-<YYYYMMDD>-<sequence>
```

Run ID immutable ve benzersizdir.

---

# Lifecycle

Canonical ana akış:

```text
Created
→ Initialized
→ Running
→ Validation
→ Completed
```

Alternatifler:

```text
Running → Blocked → Running
Running → Paused → Resumed → Running
Running/Validation → Failed
Running → Cancelled
Completed → Invalidated
```

Status vocabulary dışı değer icat edilmez.

---

# RUN_MANIFEST Minimumu

Manifest en az:

```text
run_id
status
created_at / updated_at / completed_at
agent_id
project_slug
input_id / input_version
selected_package
delivery_profile
implementation_planning
design_planning (or N/A only non-UI)
documents_produced
dynamic_instances_produced
validation_result
output_version
output_ref
```

tutmalıdır.

`dynamic_instances_produced` gerçek path'leriyle en az:

- WAVE-PLAN instance'larını,
- PAGE-DESIGN instance'larını,
- FEATURE-DESIGN instance'larını

izlenebilir kılar.

Manifest planning profile değerleri INPUT_SNAPSHOT ile birebir eşleşmelidir.

---

# INPUT_SNAPSHOT

Run Initialized olurken aktif approved input immutable operasyonel snapshot olarak alınır.

Run başladıktan sonra approved project truth yeni version'a geçse bile snapshot değiştirilmez.

Yeni input truth → yeni run.

---

# PACKAGE_SELECTION

Package selection kaydı:

```text
base package
planning profile overlay
implementation planning
design planning
resolved canonical document IDs
conditional include/exclude decisions
dynamic instance resolution summary
```

içermelidir.

Planning overlay reduction ile düşürülemez.

---

# SOURCE_REGISTER

En az kullanılan:

- approved input,
- base package,
- `packages/PLANNING_PROFILE_OVERLAY.md`,
- relevant engine contracts,
- canonical templates,
- project-provided/repository/ref sources

kaydedilir.

`ref/` source'ları Reference Only olarak ayrılır; project truth gibi gösterilmez.

---

# ASSUMPTIONS / CONFLICTS / DECISIONS

- Assumption kayıtları `ASSUMPTION_RULES.md` formatına uyar.
- Conflict kayıtları `CONFLICT_RESOLUTION.md`'ye uyar.
- Run-level decisions operasyon sırasında alınan kısa karar kayıtlarıdır; final project `ai/DECISIONS.md` ile aynı dosya değildir.
- Private reasoning saklanmaz.

---

# PROGRESS

Progress canonical generation pipeline stage'lerini izler.

Dynamic instance üretiminde yalnız toplam yüzde değil gerçek coverage görünür olmalıdır:

```text
WAVE plans: 4/4
Page design instances: 5/5
Feature design instances: 2/2
```

applicable ise.

---

# Pause / Blocked

Kullanıcı kararı veya clarification bekleniyorsa run uygun status'a alınır.

Input snapshot'ı değiştirecek scope/profile değişikliği gerekiyorsa active run üzerinde mutate edilmez; yeni pending/approved input + yeni run gerekir.

---

# Validation

`VALIDATION_REPORT.md` en az:

- canonical document coverage,
- dynamic instance coverage,
- planning profile compliance,
- approval integrity,
- integration readiness,
- design profile/quality checks,
- agent-ready acceptance test,
- lifecycle location integrity (completion sırasında)

sonuçlarını taşır.

---

# Başarılı Kapanış

Sıra:

```text
1. Required canonical documents + dynamic instances üretildi.
2. Validation PASS veya accepted CONDITIONAL PASS alındı.
3. output_version tahsis edildi.
4. versions/<version>/ canonical package yayınlandı.
5. latest/ güncellendi.
6. RUN_MANIFEST output refs + status Completed ile donduruldu.
7. COMPLETION_REPORT yazıldı.
8. Run klasörü runs/completed/<run-id>/ konumuna taşındı.
9. runs/active/<run-id>/ artık mevcut olmadığı doğrulandı.
```

`status: Completed` yazmak fiziksel move olmadan yeterli değildir.

---

# Failed / Cancelled

Failed:

- final output yayınlanmaz,
- latest değişmez,
- run `runs/failed/<run-id>/` altına taşınır,
- active kopya kalmaz.

Cancelled:

- status `Cancelled` kalır,
- ayrı cancelled folder olmadığı için `runs/failed/<run-id>/` altında tutulabilir,
- final output/latest yok,
- active kopya yok.

---

# Invalidation

Completed run sonradan:

- approved truth değişti,
- major scope/architecture değişti,
- output'un yanlış gerçeği temsil ettiği anlaşıldı

ise `Invalidated` olabilir.

History silinmez. `latest/` invalidated run'a bağlı kalamaz. Yeni run açılır.

---

# Final Output Boundary

Run operasyon dosyaları final output içine MUST NOT sızar.

```text
runs/
→ execution evidence

outputs/
→ clean agent-ready project package
```

Bu ayrım `OUTPUT_STRUCTURE.md` tarafından fiziksel olarak enforce edilir.
