# Source Register — RUN-20260814-001

## 1. Girdi ve Sözleşme Kaynakları

- **Engine Specs**: `engine/` (Binding runtime authority)
- **Input Snapshot**: `INPUT_SNAPSHOT.md` (Binding operational truth)
- **Approved Input**: `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` (Canonical project truth)

## 2. Source Register & Usage Record

| Source ID | Kaynak | Tür | Usage State | Claim Scope | Evidence Location |
|---|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | project-start-scenario | consumed | Proje brief'i, amaç, müşteri ve satış demosu bağlamı | Tüm dosya |
| SRC-02 | `https://www.trakyateknikmakine.com/` | existing-website | consumed | Doğrulanmış firma adı, Disan Hidrolik yetkili servisliği, 3 ana hizmet ve iletişim bilgileri | Sitedeki açık metinler |

## 3. Factual Claim Allowlist (FCL)

`VAL-13` blocking invariant: `FCL ⊆ exact supporting source evidence` ve `generated claim ⊆ FCL`.

| FCL ID | Factual Claim | Supporting Source ID | Exact Source Evidence | Claim Status |
|---|---|---|---|---|
| FCL-001 | Firma resmi unvanı/marka adı "Trakya Teknik Makine"'dir. | SRC-01, SRC-02 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` Sec 1 & website | Valid |
| FCL-002 | Firma Disan Hidrolik Makine Trakya Bölge Yetkili Servisidir. | SRC-01, SRC-02 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` Sec 5 & website | Valid |
| FCL-003 | Temel Hizmet 1: "Yedek Parça Temini" | SRC-01, SRC-02 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` Sec 8 & website | Valid |
| FCL-004 | Temel Hizmet 2: "Yerinde Teknik Destek" | SRC-01, SRC-02 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` Sec 8 & website | Valid |
| FCL-005 | Temel Hizmet 3: "Makine Bakım ve Onarım" | SRC-01, SRC-02 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` Sec 8 & website | Valid |
| FCL-006 | Firma faaliyet alanı makine bakım, onarım, yedek parça ve hidrolik sistemlerdir. | SRC-01 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` Sec 1 & 8 | Valid |
| FCL-007 | Mevcut altyapı SITE123 sistemindedir. | SRC-01 | `TRAKYA_TEKNIK_MAKINE_PROJECT.md` Sec 8 | Valid |

> [!CAUTION]
> Yukarıdaki FCL listesinde bulunmayan veya exact source evidence ile desteklenmeyen ekstra sertifika, 7/24 garanti, sahte müşteri yorumu veya doğrulanmamış sayısal iddialar üretilemez (`VAL-13 FAIL`).
