# Product Engine — Engine Changelog (`logs/ENGINE_CHANGELOG.md`)

## 1. Amaç ve Otorite

Bu belge, Product Engine'in çekirdek motor yapısında (`engine/`), paket kurallarında (`packages/`), şablon standartlarında (`templates/`), girdi/run/çıktı yaşam döngülerinde ve klasör mimarisinde yapılan kalıcı değişikliklerin tek resmi tarihsel geçmiş kaynağıdır.

### Sürüm Otoritesi Modeli

- **Root `README.md`**: Güncel aktif Product Engine sürümünün birincil otoritesi.
- **`logs/ENGINE_CHANGELOG.md`**: Product Engine sürüm geçmişinin birincil otoritesi.

Güncel aktif sürüm: `v0.2.0`.

---

## 2. Changelog-Worthy Değişiklikler

Aşağıdakiler changelog'a kaydedilir:

- yeni veya değişen engine contract'ları,
- package/document selection davranışı,
- planning profile semantiği,
- canonical template/document type değişiklikleri,
- intake/approval/run lifecycle değişiklikleri,
- output hierarchy ve versioning değişiklikleri,
- validation contract değişiklikleri,
- deprecated/removed canonical dosyalar,
- geriye dönük uyumluluğu etkileyen mimari kararlar.

Typo, format ve tek-run operasyon notları changelog kaydı değildir.

---

## 3. Kayıt Şeması

```markdown
## PE-CHANGE-<NNN> — <YYYY-MM-DD>

- **Version:** vX.Y.Z
- **Change Type:** Added | Changed | Fixed | Deprecated | Removed | Security | Documentation
- **Affected Area:** <areas>
- **Breaking Change:** Yes | No
- **Related Issue:** <ISSUE-XXX | None>
- **Related Run:** <RUN-YYYYMMDD-XXX | None>

### Summary
...

### Reason
...

### Impact
...
```

Change ID'ler artan sırada ve immutable'dır.

---

## 4. Sürüm Geçmişi

### v0.1.0 — First Real Engine Runtime

`v0.1.0`, Product Engine'in ilk gerçek proje run'ını gerçekleştiren temel runtime sürümüdür.

Historical kanıt:

- `runs/completed/RUN-20260811-001/`
- `outputs/demos/trakya-teknik-makine/versions/v0.1/`

Bu historical artefact'ler `v0.2.0` contract'larına uyarlamak amacıyla geriye dönük mutate edilmez.

---

## PE-CHANGE-001 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Added
- **Affected Area:** engine/ | packages/ | templates/ | inputs/ | runs/ | outputs/ | project-start/
- **Breaking Change:** Yes
- **Related Issue:** None
- **Related Run:** RUN-20260811-001

### Summary

Product Engine'e delivery maturity'den bağımsız iki planning ekseni eklendi:

```text
implementation_planning: standard | full
design_planning: light | standard | full (UI/UX applicable ise)
```

`engine/PLANNING_PROFILES.md` yeni canonical authority olarak eklendi. `standard` implementation planning agent-ready minimum olarak tanımlandı. `light` design planning daha az artifact fakat aynı kalite tabanı prensibiyle tanımlandı.

### Reason

İlk gerçek Trakya Teknik Makine run'ı, `Prototype` delivery profile'ın mevcut package/catalog kuralları nedeniyle yalnız dört temel belge üretmesinin Engine'in gerçek hedefi olan "yeni agent doğrudan implementation'a başlayabilsin" kriterini karşılamadığını gösterdi.

Delivery maturity ile execution/design planning depth aynı kavram olarak kullanılıyordu. Bu coupling kaldırıldı.

### Impact

- `Prototype` artık implementation planning'i otomatik azaltmaz.
- Demo/prototype projeler throwaway architecture olarak değerlendirilemez.
- UI projelerinde design planning `light | standard | full` ile bağımsız çözülür.
- Planning profile değerleri approved input truth'un parçasıdır.

---

## PE-CHANGE-002 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Changed
- **Affected Area:** packages/ | engine/DOCUMENT_CATALOG.md | engine/PACKAGE_RULES.md
- **Breaking Change:** Yes
- **Related Issue:** None
- **Related Run:** RUN-20260811-001

### Summary

Base package'ların planning depth sahipliği kaldırıldı. Shared `packages/PLANNING_PROFILE_OVERLAY.md` eklendi.

Base package artık domain/scope ihtiyacını; planning overlay ise execution/design depth'i belirler.

### Reason

`Prototype → TECH_CONTEXT/WAVE planning çıkar` gibi package-level daraltmalar yeni agent-ready kalite tabanıyla çelişiyordu ve farklı package'lar arasında drift riski yaratıyordu.

### Impact

Planning profile minimumları hiçbir base package tarafından sessizce düşürülemez. `TECH_CONTEXT`, planning/wave/state dokümanları ve design artifact'leri delivery profile'dan bağımsız olarak seçilebilir.

---

## PE-CHANGE-003 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Added
- **Affected Area:** templates/design/ | engine/DOCUMENT_CATALOG.md | engine/INFORMATION_MAP.md
- **Breaking Change:** Yes
- **Related Issue:** None
- **Related Run:** None

### Summary

Design Engine canonical document modeline yükseltildi. Yeni/aktif design artifact family:

```text
DESIGN
DESIGN-SYSTEM
GLOBAL-SHELL
PAGE-DESIGN
FEATURE-DESIGN
SYSTEM-STATES
ADMIN-DESIGN
```

Generic single-skeleton page ve feature package template'leri tanımlandı.

### Reason

Tek `DESIGN_RULES.md`, büyük veya gerçek UI ürünlerinde agent'ın ekran/feature tasarımını implementation-ready seviyede anlaması için yeterli değildi. `ref/design` içindeki proje-özel pattern'ler generic Engine contract'larına dönüştürülmeliydi.

### Impact

- `light`: güçlü DESIGN_RULES tabanı.
- `standard`: design system, global shell, page/screen packages ve system states.
- `full`: standard + gerçek karmaşıklığın gerektirdiği feature/admin/complex-flow planning.
- Sektör klişeleri ve generic template görünümü default design reasoning olarak kabul edilmez.

---

## PE-CHANGE-004 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Changed
- **Affected Area:** templates/waves/ | engine/GENERATION_PIPELINE.md | engine/VALIDATION_RULES.md
- **Breaking Change:** Yes
- **Related Issue:** None
- **Related Run:** None

### Summary

Wave sistemi tek canonical skeleton'a indirildi:

```text
waves/WAVE_MAP.md
waves/plans/WAVE_<NN>.md
```

Eski duplicate `STANDARD_WAVE_TEMPLATE.md` ve `STANDART WAVE TEMPLATE.md` kaldırıldı; iyi execution disiplinleri `WAVE_PLAN_TEMPLATE.md` içine taşındı.

### Reason

Birden fazla wave skeleton aynı kavram için farklı contract üretme riski taşıyordu. Engine'in Single-Skeleton prensibiyle çelişiyordu.

### Impact

Her selected wave için ayrı uygulanabilir plan ve acceptance/validation contract üretilebilir. `NEXT_TASKS` aktif wave planından türetilir; `CURRENT_STATUS` aktif wave durumunu taşır.

---

## PE-CHANGE-005 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Changed
- **Affected Area:** engine/VALIDATION_RULES.md | engine/OUTPUT_STRUCTURE.md | templates/ai/TECH_CONTEXT_TEMPLATE.md
- **Breaking Change:** Yes
- **Related Issue:** None
- **Related Run:** RUN-20260811-001

### Summary

Agent-readiness, design coverage, planning profile compliance, backend/integration readiness ve cross-document consistency validation katmanları genişletildi.

Frontend/demo projelerinde gerçek backend yoksa endpoint/schema uydurmak yasak; fakat mock/local data ile future API adapter arasında temiz service/data-access boundary planlamak zorunlu kalite tabanıdır.

### Reason

İlk gerçek run, output'un doküman olarak geçerli olmasının tek başına implementation-ready olması anlamına gelmediğini gösterdi.

### Impact

Yeni temel kabul kriteri:

> Projeyi daha önce görmemiş yeni bir agent, final output'u okuyup yeni mimari planlama yapmadan aktif `WAVE_<NN>` planını uygulamaya başlayabilmelidir.

Bu sağlanmıyorsa output validation PASS alamaz.

---

## PE-CHANGE-006 — 2026-08-11

- **Version:** v0.2.0
- **Change Type:** Fixed
- **Affected Area:** project-start/ | templates/ | inputs/ | outputs/
- **Breaking Change:** No
- **Related Issue:** None
- **Related Run:** RUN-20260811-001

### Summary

Post-build integration audit cleanup uygulandı:

- duplicate top-level project-start templates kaldırıldı,
- `project-start/templates/` tek canonical project-start skeleton authority olarak bırakıldı,
- Trakya source `delivery_profile / implementation_planning / design_planning` schema'sına migrate edildi,
- eski Trakya pending/approved current input artefact'leri temizlendi,
- `outputs/.../latest/` altındaki eski `v0.1.0` current view kaldırıldı,
- historical `versions/v0.1/` ve completed first-run kaydı korundu.

### Reason

Yeni `v0.2.0` architecture sonrası `v0.1.0` current-state artefact'lerinin yeni run'ı etkileyebilmesi ve iki farklı project-start skeleton bulunması authority drift yaratıyordu.

### Impact

Trakya Teknik Makine ikinci gerçek test için temiz source state'ine döndü. Bir sonraki run yeni input ve yeni output version üretmek zorundadır.

---

## PE-CHANGE-007 — 2026-08-12

- **Version:** v0.2.0
- **Change Type:** Added
- **Affected Area:** inputs/ | runs/ | outputs/ | logs/
- **Breaking Change:** No
- **Related Issue:** None
- **Related Run:** RUN-20260812-001

### Summary

Trakya Teknik Makine kurumsal web sitesi yenileme projesinin ikinci gerçek çalıştırması (`RUN-20260812-001`) Product Engine v0.2.0 mimarisinde başarıyla gerçekleştirildi:

- Explicit user approval gate işletildi ve `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` donduruldu.
- `demo-frontend` base package + `standard` implementation + `light` design planning overlay donduruldu.
- Canonical document package (`README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `STATUS`, `TASKS`, `AGENT-INST`, `DECISIONS`, `PROJ-PLAN`, `DESIGN`, `WAVE-MAP`, `WAVE-PLAN`) ve 4 dynamic wave planı (`WAVE_00` .. `WAVE_03`) üretildi.
- Artifact Production Loop & Point-of-Use Template Refresh kanıtları operasyonel kayıtlara yazıldı.
- Validation PASS aldı. Temiz çıktı `outputs/demos/trakya-teknik-makine/versions/v0.2/` ve `outputs/demos/trakya-teknik-makine/latest/` konumunda yayınlandı.
- Operational run kaydı `runs/completed/RUN-20260812-001/` konumuna taşındı.

### Reason

Product Engine v0.2.0 planning profile, design planning ve validation yeniliklerini temiz bir gerçek proje çalıştırması üzerinde uçtan uca doğrulamak.

### Impact

Product Engine v0.2.0 mimarisi ikinci gerçek proje run'ı ile başarıyla doğrulanmış ve dondurulmuştur.

---

## 5. Güncel Durum

```text
Active Engine Version Authority : Root README.md (v0.2.0)
Version History Authority       : logs/ENGINE_CHANGELOG.md
Recorded Change Entries         : 7
Next Acceptance Gate            : v0.2.0 Production Release / Next Project Verification
```

