# Source Register — RUN-20260815-001

## 1. Project Factual Source

| Source ID | Kaynak / Yol | Tür | Usage State | Güven Seviyesi | Kullanım Amacı / Kapsam |
|---|---|---|---|---|---|
| SRC-001 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-source-file | consumed | High | Canonical factual source truth material |

## 2. Canonical Truth Chain

```text
SRC-001 (Project Source File)
→ APPROVED_PROJECT_INPUT (INPUT-TRAKYA_TEKNIK_MAKINE-V1)
→ INPUT_SNAPSHOT (RUN-20260815-001)
→ FCL (Factual Claim Allowlist)
```

## 3. Template Sürüm Kayıtları

| Template ID | Sürüm | Kullanım Alanı |
|---|---|---|
| `run-manifest-template` | 1.1.0 | RUN_MANIFEST.md |
| `input-snapshot-template` | 1.2.0 | INPUT_SNAPSHOT.md |
| `package-selection-template` | 1.0.0 | PACKAGE_SELECTION.md |
| `source-register-template` | 1.5.0 | SOURCE_REGISTER.md |
| `assumptions-template` | 1.0.0 | ASSUMPTIONS.md |
| `conflicts-template` | 1.0.0 | CONFLICTS.md |
| `decisions-template` | 1.0.0 | DECISIONS.md |
| `run-log-template` | 1.0.0 | RUN_LOG.md |
| `progress-template` | 1.0.0 | PROGRESS.md |
| `validation-report-template` | 1.0.0 | VALIDATION_REPORT.md |
| `completion-report-template` | 1.0.0 | COMPLETION_REPORT.md |

## 4. Referans Belgeleri Kullanım Kaydı (Ref Usage)

| Ref ID | Dosya Yolu | Kullanım Amacı | Authority Seviyesi |
|---|---|---|---|
| REF-WAVE-MAP | `ref/waves/WAVE_MAP_REFERENCE.md` | WAVE_MAP point-of-use decomposition calibration | Non-authoritative quality reference |
| REF-WAVE-HOME | `ref/waves/WAVE_07_HOME_REFERENCE.md` | WAVE_PLAN point-of-use implementation depth calibration | Non-authoritative quality reference |

## 5. Factual Claim Allowlist (FCL)

| FCL ID | Factual Claim | Allowed Semantic Scope | Forbidden Semantic Claims | Exact Source Evidence |
|---|---|---|---|---|
| FCL-001 | Firma Adı | "Trakya Teknik Makine" | Diğer firma isimleri veya şirket unvan uydurması | SRC-001 (Line 18) |
| FCL-002 | Servis Statüsü | "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi" | Ana üretici iddiası, münhasır bayi harici uydurma statüler | SRC-001 (Line 19) |
| FCL-003 | Ana Hizmet 1 | "Yedek Parça Temini" | Orijinal yedek parça garantisi, stoktan parça teslim taahhüdü, belirli marka parça stok iddiası | SRC-001 (Line 20) |
| FCL-004 | Ana Hizmet 2 | "Yerinde Teknik Destek" | Mobil destek filosu, 7/24 acil servis, belirli dakikada müdahale/SLA taahhüdü | SRC-001 (Line 21) |
| FCL-005 | Ana Hizmet 3 | "Makine Bakım ve Onarım" | Periyodik bakım anlaşması, sıfır arıza taahhüdü, hidrolik pres/güç ünitesi özel uzmanlık iddiası | SRC-001 (Line 22) |
| FCL-006 | Faaliyet Bağlamı | "Trakya bölgesi endüstriyel/makine teknik servis bağlamı" | Şube adresleri, fiziksel tesis bilgisi, belirli iller için özel taahhütler | SRC-001 (Line 23) |
| FCL-007 | İletişim CTA | "Telefon (tel:) ve E-posta (mailto:) direct-contact CTA'ları" | WhatsApp hattı, canlı sohbet, interaktif harita, online randevu form backend'i | SRC-001 (Line 27) |
