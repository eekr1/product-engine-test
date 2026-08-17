# Trakya Teknik Makine Kurumsal Web Sitesi Demo — WAVE_00: Foundation & Setup

- **Status**: Ready for Execution
- **Parent Wave**: `WAVE_00` in `waves/WAVE_MAP.md`
- **Goal**: Vite + React + TypeScript baseline'ını, package-managed bağımlılık yapısını (`package.json`), CSS Custom Properties (`styles/tokens.css`) ve clean service/data-access adapter mimarisini kurmak.

## 1. Parent Wave Map Entry

```text
Wave ID: WAVE_00
Wave Name: Foundation & Setup
Committed Capabilities: CAP-001, CAP-002, CAP-003
Covered Page IDs: N/A (Foundation Wave)
Target Delivery State: Demo-Ready Foundation
```

## 2. Parent Capability Coverage

| Plan Capability | Parent Capability | Relation | Result |
|---|---|---|---|
| Vite + React + TS Setup | `CAP-001` (Vite + React + TS baseline initialization) | implementation-of | PASS |
| Design Tokens & CSS Reset | `CAP-002` (CSS Custom Properties & global style definition) | implementation-of | PASS |
| Mock Data & Data Adapter | `CAP-003` (Local Mock Data & Data Adapter Interface Layer) | implementation-of | PASS |

## 3. Parent Page Coverage

| Plan Page ID | Parent Covered Page ID | Route/Surface Responsibility | Result |
|---|---|---|---|
| N/A | N/A | Altyapı wave'i (sayfa bağımsız foundation) | PASS |

## 4. Why This Wave / Dependency Rationale

Shell (`WAVE_01`) ve sayfa arayüzleri (`WAVE_02`, `WAVE_03`) geliştirilmeden önce tipografi, renk rolleri, layout reset kuralları ve veri erişim arabiriminin dondurulması gereklidir. `Continuation Expected: YES` ve `Approved Zero-Build Constraint: NONE` kısıtlarına tam uyum için package-managed baseline bu wave'de kurulur.

## 5. Canonical Sources to Read

- `ai/PROJECT_BRAIN.md`
- `ai/PRODUCT_RULES.md`
- `ai/TECH_CONTEXT.md`
- `ai/DECISIONS.md`
- `design/DESIGN_RULES.md`
- `design/DESIGN_SYSTEM.md`

## 6. Dependencies

None. (İlk teslimat aşamasıdır).

## 7. Scope

### In Scope
- `package.json` bağımlılık yönetimi ve komutlar (`npm run dev`, `npm run build`, `npm run preview`).
- Vite, TypeScript (`tsconfig.json`) ve proje dizin yapısı initialization.
- `src/styles/tokens.css` (Antrasit zemin, amber accent, tipografi ve spacing token'ları).
- `src/styles/global.css` (CSS Reset, layout utility sınıfları, WCAG contrast kuralları).
- `src/services/mockData.ts` (Kaynak destekli firma ve 3 approved hizmet verisi).
- `src/services/dataAdapter.ts` (UI ile veri deposu arasındaki izole interface).

### Out of Scope
- Global shell header/footer bileşenlerinin üretilmesi (`WAVE_01`).
- Sayfa arayüzlerinin üretilmesi (`WAVE_02`, `WAVE_03`).
- Gerçek API/backend entegrasyonu veya veritabanı kurulumu.

## 8. Expected Result / Target Structure

```text
/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── src/
    ├── styles/
    │   ├── tokens.css
    │   └── global.css
    ├── services/
    │   ├── mockData.ts
    │   └── dataAdapter.ts
    └── main.tsx
```

## 9. Implementation Checklist

- [ ] **Task 0.1: Project Baseline Setup**
  - Location: `/package.json`, `/vite.config.ts`, `/tsconfig.json`, `/index.html`
  - Parent Capability: `CAP-001`
  - Implementation: Modüler Vite + React + TypeScript projesi paket bağımlılıklarının yapılandırılması. `npm run dev`, `npm run build`, `npm run preview` komutlarının tanımlanması.
  - Verification: Terminalde `npm run build` hatasız tamamlanmalı.

- [ ] **Task 0.2: Design Tokens & CSS Foundation**
  - Location: `src/styles/tokens.css`, `src/styles/global.css`
  - Parent Capability: `CAP-002`
  - Implementation: `DESIGN_SYSTEM.md` token'larının (`--bg-app: #0F141C`, `--bg-surface: #161D2A`, `--accent-primary: #FF9500`, vb.) `:root` CSS değişkenleri olarak tanımlanması. Global reset ve layout yardımcı sınıflarının eklenmesi.
  - Verification: Stil dosyalarının `index.html`/`main.tsx` içine hatasız import edilmesi.

- [ ] **Task 0.3: Data Adapter & FCL Mock Data Store**
  - Location: `src/services/mockData.ts`, `src/services/dataAdapter.ts`
  - Parent Capability: `CAP-003`
  - Implementation: `SRC-001` doğrulanmış verilerinin (Trakya Teknik Makine, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi, 3 approved hizmet) TypeScript interface'leri ile tanımlanması. `dataAdapter.ts` arabirimi (`getCompanyInfo()`, `getServices()`, `getServiceById(id)`) üzerinden UI'a sunulması. Exact contact verileri bilinmediği için placeholder/unknown olarak yönetilmesi.
  - Verification: Mock veride FCL dışı iddia bulunmaması (`stok`, `garanti`, `SLA`, `mobil filo` = 0).

## 10. State / Role / Responsive Coverage

- **Loading State**: `dataAdapter.ts` asenkron `Promise` dondurerek gelecekteki API çağrılarına uyumlu mock veri yükleme durumunu destekler.
- **Responsive Baseline**: `tokens.css` içinde responsive breakpoint ve spacing ölçekleri tanımlanmıştır.

## 11. Automated Verification

- `npm run build`: TypeScript ve Vite derlemesinin hatasız geçmesi.

## 12. Manual QA / Debug Verification

- Derlenen paketin `npm run preview` ile yerelde sorunsuz başlatılabilmesi.
- CSS değişkenlerinin tarayıcı inspector üzerinde `:root` içinde görünebilmesi.

## 13. Acceptance / Exit Criteria

- [ ] Modüler Vite + React + TS projesi derlenmektedir.
- [ ] `tokens.css` ve `global.css` tasarımı eksiksiz temsil etmektedir.
- [ ] `dataAdapter.ts` arayüzü mock veriyi FCL sınırlarında sarmalamıştır.

## 14. Handoff / Stop Rule

- `WAVE_00` tamamlandıktan sonra `ai/CURRENT_STATUS.md` güncellenir ve `WAVE_01` (Global Shell) başlatılır.

---
## Wave Result

`Status: Pending Execution` (Pre-execution planning phase completed).
