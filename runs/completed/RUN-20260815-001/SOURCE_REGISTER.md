# SOURCE_REGISTER — RUN-20260815-001

```yaml
run_id: RUN-20260815-001
source_count: 5
fcl_count: 7
```

## 1. Registered Sources

| Source ID | Kaynak Path / Adı | Tür | Güven Seviyesi | Consumption State | Kullanım Amacı |
|---|---|---|---|---|---|
| `SRC-01` | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | Source Material | Yüksek | consumed | Ham brief ve firma gerçekleri bağlamı |
| `SRC-02` | `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` | Approved Project Input | En Yüksek (Primary Truth) | consumed | Dondurulmuş canonical proje girdisi |
| `SRC-03` | `packages/DEMO_FRONTEND_PACKAGE.md` | Engine Base Package | Canonical Authority | consumed | Base domain paket kuralları |
| `SRC-04` | `packages/PLANNING_PROFILE_OVERLAY.md` | Engine Overlay | Canonical Authority | consumed | Implementation/design profile overlay |
| `SRC-05` | `engine/` contracts | Engine Contracts | Canonical Authority | consumed | Çalışma zamanı ve doğrulama kuralları |

## 2. Factual Claim List (FCL Registry)

| FCL ID | Factual Claim | Supporting Source ID | Supporting Content Snippet | Verification State |
|---|---|---|---|---|
| `FCL-01` | Firma ticari unvanı Trakya Teknik Makine'dir. | `SRC-02` | `project_name: Trakya Teknik Makine Kurumsal Web Sitesi Demo`, `Firma Adı: Trakya Teknik Makine` | VERIFIED |
| `FCL-02` | Firma Disan Hidrolik Makine Trakya Bölge Yetkili Servisidir. | `SRC-02` | `Statü: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` | VERIFIED |
| `FCL-03` | Ana Hizmet 1 Yedek Parça Temini'dir. | `SRC-02` | `Ana Hizmet 1: Yedek Parça Temini` | VERIFIED |
| `FCL-04` | Ana Hizmet 2 Yerinde Teknik Destek'tir. | `SRC-02` | `Ana Hizmet 2: Yerinde Teknik Destek` | VERIFIED |
| `FCL-05` | Ana Hizmet 3 Makine Bakım ve Onarım'dır. | `SRC-02` | `Ana Hizmet 3: Makine Bakım ve Onarım` | VERIFIED |
| `FCL-06` | Firma Trakya Bölgesinde endüstriyel/makine teknik servis bağlamında faaliyet göstermektedir. | `SRC-02` | `Bölge: Trakya Bölgesi, endüstriyel/makine teknik servis bağlamı` | VERIFIED |
| `FCL-07` | İletişim direct-contact CTA (telefon/e-posta) olarak sunulacak, backend form/harita/WhatsApp kullanılmayacaktır. | `SRC-02` | `CMS, backend, veritabanı, auth, e-ticaret, canlı harita, WhatsApp, form backend kapsam dışıdır.` | VERIFIED |
