# Source Register — RUN-20260817-002

## 1. Project Factual Sources

| Source ID | Source Path | Role | Usage State | Claim Scope | Exact Evidence Location |
|---|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | factual-project-source | consumed | Project Identity, Status, 3 Services, Regional Context | Lines 93-102 |

> `SOURCE_REGISTER_SOURCE_SET` = {`SRC-01`}

## 2. Canonical Truth Chain

```text
PROJECT_SOURCE (SRC-01)
→ APPROVED_PROJECT_INPUT (inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md)
→ INPUT_SNAPSHOT (runs/active/RUN-20260817-002/INPUT_SNAPSHOT.md)
→ FCL (Factual Claim Allowlist)
```

## 3. Derived / Runtime Authorities (NOT SOURCES)

| Authority Name | Path | Classification Role | Notes |
|---|---|---|---|
| Approved Project Input | `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` | Approved Derivative Authority | Scope & approval boundary |
| Input Snapshot | `runs/active/RUN-20260817-002/INPUT_SNAPSHOT.md` | Frozen Derivative Registry | Run snapshot |
| Engine Runtime Specs | `engine/*.md` | Runtime Engine Authority | System execution contracts |
| Package Rules | `engine/PACKAGE_RULES.md` & `packages/*` | Package Selection Authority | Base package & overlays |
| Catalog | `engine/DOCUMENT_CATALOG.md` | Catalog Authority | Canonical document specs |

## 4. Template Sürüm Kayıtları (NOT SOURCES)

| Template ID | Template Path | Version | Usage |
|---|---|---|---|
| SOURCE_REGISTER_TEMPLATE | `templates/runs/SOURCE_REGISTER_TEMPLATE.md` | 1.6.0 | Operational Record |
| WAVE_MAP_TEMPLATE | `templates/waves/WAVE_MAP_TEMPLATE.md` | 1.0.0 | Dynamic Instance Generation |
| WAVE_PLAN_TEMPLATE | `templates/waves/WAVE_PLAN_TEMPLATE.md` | 1.0.0 | Dynamic Instance Generation |
| VALIDATION_REPORT_TEMPLATE | `templates/runs/VALIDATION_REPORT_TEMPLATE.md` | 1.3.0 | Operational Validation |

## 5. Referans Belgeleri Kullanım Kaydı (NOT SOURCES)

| Reference Name | Path | Calibration Type | Usage Context |
|---|---|---|---|
| WAVE_MAP_REFERENCE | `ref/waves/WAVE_MAP_REFERENCE.md` | Quality & Depth Calibration | WAVE_MAP decomposition depth |
| WAVE_07_HOME_REFERENCE | `ref/waves/WAVE_07_HOME_REFERENCE.md` | Depth & Structure Calibration | UI Wave Plans (WAVE_01..04) |
| WAVE_12_RUNTIME_REFERENCE | `ref/waves/WAVE_12_RUNTIME_REFERENCE.md` | Depth & Structure Calibration | Foundation/QA Wave Plans (WAVE_00, WAVE_05) |

## 6. Factual Claim Allowlist

| FCL ID | Factual Claim | Allowed Semantic Range | Forbidden Speculative Expansions | Exact Source Evidence Location |
|---|---|---|---|---|
| FCL-001 | Firma Adı: Trakya Teknik Makine | "Trakya Teknik Makine" firma adı kullanımı | Uydurma unvan, şirket türü veya grup şirket iddiaları | SRC-01: Line 96 |
| FCL-002 | Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi | "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" yetkili servis statüsü sunumu | Türkiye geneli yetkili servis, distribütörlük, ana bayilik, fabrika iddiaları | SRC-01: Line 97 |
| FCL-003 | Ana Hizmet 1: Yedek Parça Temini | "Yedek Parça Temini" temel hizmet sunumu | Orijinal/stok parça, marka bazlı parça kapsamı, stok garantisi | SRC-01: Line 98 |
| FCL-004 | Ana Hizmet 2: Yerinde Teknik Destek | "Yerinde Teknik Destek" temel hizmet sunumu | Mobil filo, acil müdahale, 7/24 servis, SLA/müdahale süresi | SRC-01: Line 99 |
| FCL-005 | Ana Hizmet 3: Makine Bakım ve Onarım | "Makine Bakım ve Onarım" temel hizmet sunumu | Periyodik bakım paketleri, pres revizyonu, hidrolik ünite uzmanlığı | SRC-01: Line 100 |
| FCL-006 | Faaliyet Bağlamı: Trakya bölgesi, endüstriyel/makine teknik servis bağlamı | Trakya bölgesi genel endüstriyel teknik servis bağlamı | Spesifik adres, şube, ilçe, çalışma saatleri, kapsama garantisi | SRC-01: Line 101 |
