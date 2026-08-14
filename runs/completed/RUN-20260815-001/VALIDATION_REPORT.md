# Validation Report — RUN-20260815-001

- **Validation Result**: CONDITIONAL PASS
- **Validation Target**: `runs/active/RUN-20260815-001/working-output/`
- **Validation Date**: 2026-08-15T02:22:34+03:00

## 1. Canonical Gate Coverage

- **Expected Gates**: VAL-01 .. VAL-19 (19/19 evaluated)
- **Executed Gates**: 19
- **Missing Gates**: None
- **Overall Gate Summary**: 18 PASS, 1 UNVERIFIED (VAL-15), 0 FAIL

## 2. Evidence Priority / Observable Trace Status

- **Observable Trace Status**: UNAVAILABLE
- **Trace Evidence Origin**: Filesystem Artifact Verification & Internal Pipeline Logs
- **Highest Evidence Level Used**: E2 (Filesystem / Produced Artifact State) & E3 (Approved Input / SCP / FCL)
- **Evidence Contradictions**: None detected between filesystem state and operational registries.

> Note: Per `VALIDATION_RULES.md` VAL-15, when independent IDE/tool execution trace is UNAVAILABLE, VAL-15 evaluates as UNVERIFIED, yielding overall CONDITIONAL PASS.

## 3. Dynamic Instance Coverage

- **Expected Wave IDs**: `{'WAVE_00', 'WAVE_01', 'WAVE_02', 'WAVE_03', 'WAVE_04'}`
- **Actual Wave Plans**: `{'WAVE_00', 'WAVE_01', 'WAVE_02', 'WAVE_03', 'WAVE_04'}`
- **Dynamic Coverage Result**: PASS (`EXPECTED == ACTUAL`)

## 4. WAVE_MAP Capability Diff

| Wave ID | Map Capability Atom | Exact Approved Support ID | Exact Approved Support Meaning | Relation | Result |
|---|---|---|---|---|---|
| WAVE_00 | Modüler frontend proje yapısı | SCP-001 | Modern responsive kurumsal demo altyapısı | implementation-of | PASS |
| WAVE_00 | Service layer & Local data adapter boundary | SCP-006 | Sahte backend uydurmadan data-access boundary | implementation-of | PASS |
| WAVE_00 | Temel mock veri modelleri | SCP-007 | Doğrulanmış firma verilerinin korunması | implementation-of | PASS |
| WAVE_01 | Navigation Header & Kurumsal Marka Kimliği | SCP-002 | Ana sayfa karşılama ve logo/marka alanı | implementation-of | PASS |
| WAVE_01 | Disan Hidrolik Trakya Bölge Yetkili Servisi Duyurusu | SCP-002 | Servis yetki unvanı vurgusu | detail-of | PASS |
| WAVE_01 | Hero karşılama ve doğrudan telefon/e-posta CTA'ları | SCP-005 | Temel doğrudan iletişim CTA'ları | detail-of | PASS |
| WAVE_02 | Yedek Parça Temini Hizmet Sunumu | SCP-003 | 3 temel hizmet alanı detay ve teknik vurgu | implementation-of | PASS |
| WAVE_02 | Yerinde Teknik Destek Hizmet Sunumu | SCP-003 | 3 temel hizmet alanı detay ve teknik vurgu | implementation-of | PASS |
| WAVE_02 | Bakım & Onarım Hizmet Sunumu | SCP-003 | 3 temel hizmet alanı detay ve teknik vurgu | implementation-of | PASS |
| WAVE_03 | Kurumsal Tanıtım ve Bölge Servis Gücü Bölümü | SCP-004 | Kurumsal güven ve bölge odaklı yetkinlik tanıtımı | implementation-of | PASS |
| WAVE_03 | İletişim Bilgileri ve Doğrudan Erişilebilir Telefon/E-posta CTA'ları | SCP-005 | Doğrudan iletişim CTA'ları erişimi | implementation-of | PASS |
| WAVE_04 | Proje Geneli Responsive ve Mobil Uyum Doğrulaması | SCP-001 | Responsive kurumsal frontend demo uygulaması | verification-of | PASS |

```text
MAP_CAPABILITY_ATOMS = 12
SUPPORTED_MAP_CAPABILITIES = 12
UNSUPPORTED_MAP_CAPABILITIES = []
```

## 5. WAVE_PLAN Parent Capability Diff

| Wave Plan | Plan Capability Atom | Exact Parent Capability Atom | Relation | Result |
|---|---|---|---|---|
| WAVE_00 | Modüler HTML5/CSS/JS iskeleti | Modüler frontend proje yapısı | implementation-of | PASS |
| WAVE_00 | `css/main.css` design tokens | Modüler frontend proje yapısı | detail-of | PASS |
| WAVE_00 | `CompanyService` & `LocalCompanyAdapter` | Service layer & Local data adapter boundary | implementation-of | PASS |
| WAVE_00 | `CompanyData.js` & `ServicesData.js` | Temel mock veri modelleri | implementation-of | PASS |
| WAVE_01 | Header Navigation bileşeni | Navigation Header & Kurumsal Marka Kimliği | implementation-of | PASS |
| WAVE_01 | Disan Hidrolik Badge | Disan Hidrolik Trakya Bölge Yetkili Servisi Duyurusu | detail-of | PASS |
| WAVE_01 | Hero Karşılama Alanı | Hero karşılama ve doğrudan telefon/e-posta CTA'ları | implementation-of | PASS |
| WAVE_01 | `tel:` ve `mailto:` CTA butonları | Hero karşılama ve doğrudan telefon/e-posta CTA'ları | detail-of | PASS |
| WAVE_02 | Services Section Layout | Yedek Parça Temini Hizmet Sunumu | implementation-of | PASS |
| WAVE_02 | Yedek Parça Kartı | Yedek Parça Temini Hizmet Sunumu | detail-of | PASS |
| WAVE_02 | Yerinde Destek Kartı | Yerinde Teknik Destek Hizmet Sunumu | detail-of | PASS |
| WAVE_02 | Bakım & Onarım Kartı | Bakım & Onarım Hizmet Sunumu | detail-of | PASS |
| WAVE_03 | About Component | Kurumsal Tanıtım ve Bölge Servis Gücü Bölümü | implementation-of | PASS |
| WAVE_03 | Contact Component | İletişim Bilgileri ve Doğrudan Erişilebilir Telefon/E-posta CTA'ları | implementation-of | PASS |
| WAVE_03 | Footer Component | Kurumsal Tanıtım ve Bölge Servis Gücü Bölümü | detail-of | PASS |
| WAVE_04 | Responsive Layout Audit | Proje Geneli Responsive ve Mobil Uyum Doğrulaması | implementation-of | PASS |
| WAVE_04 | Service Boundary Audit | Presentation Readiness & Service Boundary Audit | verification-of | PASS |

```text
PLAN_CAPABILITY_ATOMS = 17
PARENT_CAPABILITY_ATOMS = 12
NEW_PLAN_CAPABILITIES = []
```

## 6. Source Registry Consistency

- **SOURCE_REGISTER_SOURCE_SET**: `['SRC-001', 'SRC-002']`
- **VALIDATION_SOURCE_SET**: `['SRC-001', 'SRC-002']`
- **SOURCE_SET_EQUAL**: YES

| Source ID | SOURCE_REGISTER Identity | Validation Identity | SOURCE_REGISTER Usage State | Validation Usage State | Exact Match |
|---|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | consumed | consumed | YES |
| SRC-002 | `https://www.trakyateknikmakine.com/` | `https://www.trakyateknikmakine.com/` | registered | registered | YES |

## 7. Source → FCL → Generated Claim Checks

| FCL ID | FCL Claim | Supporting Source ID | Source Usage State | Exact Evidence | FCL ⊆ Source | Generated Claim ⊆ FCL |
|---|---|---|---|---|---|---|
| FCL-001 | Firma Unvanı: Trakya Teknik Makine | SRC-001 | consumed | Section 1 (Proje adı / tanımı) | PASS | PASS |
| FCL-002 | Disan Hidrolik Trakya Bölge Yetkili Servisi | SRC-001 | consumed | Section 5 (Paragraf 3) & Section 8 | PASS | PASS |
| FCL-003 | 3 Ana Hizmet (Yedek Parça, Teknik Destek, Bakım-Onarım) | SRC-001 | consumed | Section 8 (Paragraf 5) | PASS | PASS |
| FCL-004 | Faaliyet Bölgesi: Trakya Bölgesi | SRC-001 | consumed | Section 4 & Section 8 | PASS | PASS |
| FCL-005 | Mevcut Altyapı: SITE123 tabanlı web sitesi | SRC-001 | consumed | Section 8 | PASS | PASS |

## 8. External Source Consumption Checks

| Source ID | SOURCE_REGISTER Usage State | Independent Read/Open/Fetch Event | Evidence Origin | Consumption Claim Valid |
|---|---|---|---|---|
| SRC-002 | registered | None (URL recorded as reference authority; no external HTTP fetch) | SOURCE_REGISTER | YES (Remains `registered`) |

## 9. Point-of-Use Read/Write Token Pairing

- **Trace Status**: UNAVAILABLE
- **VAL-15 Evaluation**: UNVERIFIED (Trace unavailable; single-use token pairing cannot be verified from external trace log).

```text
READ_TOKEN_COUNT = N/A
WRITE_EVENT_COUNT = 17
CONSUMED_READ_TOKENS = N/A
UNPAIRED_WRITES = N/A
REUSED_READ_TOKENS = N/A
```

## 10. Validation Timing / Chronology

```text
last_artifact_created: 2026-08-15T02:22:34+03:00
validation_started_at: 2026-08-15T02:22:34+03:00
validation_report_created_at: 2026-08-15T02:22:34+03:00
publication_target: outputs/demos/trakya-teknik-makine/versions/v0.1/
```

## 11. Blocking Validation Checks

| Gate ID | Gate Name | Status | Details / Evidence |
|---|---|---|---|
| VAL-01 | Input Snapshot Freeze Integrity | PASS | Snapshot donduruldu, `INPUT_SNAPSHOT.md` ile uyumlu |
| VAL-02 | Document Catalog Compliance | PASS | Tüm belgeler Document Catalog tanımlarıyla birebir eşleşiyor |
| VAL-03 | Dynamic Instance Coverage | PASS | EXPECTED == ACTUAL (5 wave plans) |
| VAL-04 | Approved Scope Integrity | PASS | `UNSUPPORTED_MAP_CAPABILITIES == []` & `NEW_PLAN_CAPABILITIES == []` |
| VAL-05 | Wave Decomposition Depth | PASS | 5 distinct wave, acyclic dependency chain |
| VAL-06 | Decision Completeness | PASS | Critical unresolved karar kalmadı |
| VAL-07 | Cross-Document Consistency | PASS | Document set ve source identities %100 tutarlı |
| VAL-08 | Decision Provenance & Coverage | PASS | Kararlar User Approved ve Engine Resolved olarak kaynaklandırıldı |
| VAL-09 | Tech Context / Integration | PASS | Clean data-access boundary (`CompanyService`), sahte backend yok |
| VAL-10 | Design Profile & Quality | PASS | `DESIGN_RULES.md` projeye özgü endüstriyel görsel kimliği kuruyor |
| VAL-11 | Project Plan & Wave Alignment | PASS | Roadmap ve Wave Map sırası özdeş |
| VAL-12 | Ownership & Assumption Integrity | PASS | Information ownership kuralları korundu |
| VAL-13 | Source Claim Integrity | PASS | FCL ⊆ Source & Generated ⊆ FCL, Source usage state mirroring OK |
| VAL-14 | Template / Placeholder Check | PASS | Unresolved placeholder veya leked kalmadı |
| VAL-15 | Point-of-Use Trace Integrity | UNVERIFIED | Independent observable trace UNAVAILABLE |
| VAL-16 | Validation Timeline Integrity | PASS | Validation Target `runs/active/RUN-20260815-001/working-output/` |
| VAL-17 | Engine Boundary Integrity | PASS | Protected Engine yüzeyleri mutate edilmedi |
| VAL-18 | Output Path Integrity | PASS | Final paths OUTPUT_STRUCTURE ile uyumlu |
| VAL-19 | Traceability & Lifecycle | PASS | Manifest, progress ve validation aynı version'ı hedefliyor |

## 12. Violations & Evidence

- **Blocking Violations**: None.
- **Evidence Limitation**: VAL-15 UNVERIFIED due to unavailable independent execution trace.

## 13. Repair Actions

None required. Overall status is CONDITIONAL PASS (eligible for operator publication approval).
