# Package Selection — RUN-20260811-002

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend` (`DEMO_FRONTEND_PACKAGE.md`)
- **Eklenti / Bağlam**: `corporate-website` domain bağlamı + `existing-project` transition bağlamı
- **Shared Overlay**: `packages/PLANNING_PROFILE_OVERLAY.md` (zorunlu adım)
- **Delivery Profile**: `Prototype`
- **Implementation Planning**: `standard`
- **Design Planning**: `light`
- **Proje Türü**: `landing-page`

## 2. Seçim Gerekçesi

- **Demo Frontend Package:** Çalışmanın ilk hedefi potansiyel müşteriye gösterilecek profesyonel ve modern bir kurumsal frontend demosu hazırlamaktır.
- **Shared Planning Overlay (standard + light):** Agent-ready minimum seviye için `README-DOC`, `PROJECT-BRAIN`, `PRODUCT-RULES`, `TECH-CTX`, `STATUS`, `TASKS`, `DECISIONS`, `AGENT-INST`, `PROJ-PLAN`, `DESIGN`, `WAVE-MAP` ve dynamic `WAVE-PLAN` planlarını deterministik biçimde ekler.
- **Light Design Planning:** Kapsam sınırlı sayfa hiyerarşisi içerdiğinden tasarım dokümantasyon yükü hafif tutulur (`DESIGN_RULES.md`); ancak visual concept, tipografi, kompozisyon, spacing ve anti-template kurallarından taviz verilmez.

## 3. Üretilecek Doküman Listesi

| Document ID | Dosya Yolu | Sorumluluk | Gerekçe |
|---|---|---|---|
| `README-DOC` | `README.md` | Root Entry Point & Read Order | Standard implementation minimum |
| `PROJECT-BRAIN` | `ai/PROJECT_BRAIN.md` | Proje Özeti & Otorite Haritası | Standard implementation minimum |
| `PRODUCT-RULES` | `ai/PRODUCT_RULES.md` | Ürün Kapsam & Davranış Kuralları | Standard implementation minimum |
| `TECH-CTX` | `ai/TECH_CONTEXT.md` | Mimari & Integration Boundary | Standard implementation minimum |
| `STATUS` | `ai/CURRENT_STATUS.md` | Mevcut Durum & Wave Takibi | Standard implementation minimum |
| `TASKS` | `ai/NEXT_TASKS.md` | Sıradaki Uygulanabilir Görevler | Standard implementation minimum |
| `DECISIONS` | `ai/DECISIONS.md` | Mimari & Tasarım Kararları | Standard implementation minimum |
| `AGENT-INST` | `ai/AGENT_INSTRUCTIONS.md` | Ajan Çalışma Talimatları | Standard implementation minimum |
| `PROJ-PLAN` | `project/PROJECT_PLAN.md` | Proje Teslim & Milestone Planı | Standard implementation minimum |
| `DESIGN` | `design/DESIGN_RULES.md` | Görsel Dil & Anti-Template İlkeleri | Light design planning zorunluluğu |
| `WAVE-MAP` | `waves/WAVE_MAP.md` | Dalga Haritası | Standard implementation minimum |
| `WAVE-PLAN` | `waves/plans/WAVE_00.md` | Foundation & Setup Wave Planı | Dynamic Wave Instance |
| `WAVE-PLAN` | `waves/plans/WAVE_01.md` | Corporate Demo UI Implementation | Dynamic Wave Instance |

## 4. Hariç Bırakılan Dokümanlar

- `DATA_MODEL.md` / `API_CONTRACTS.md`: Approved scope'ta gerçek backend/veritabanı yoktur. Sahte backend/API contract'ı uydurmak `PLANNING_PROFILES.md` ve `PACKAGE_RULES.md` uyarınca kesinlikle yasaktır. Integration-readiness `TECH_CONTEXT.md` service/data boundary ilkeleriyle sağlanır.
- `DESIGN_SYSTEM.md` / `GLOBAL_SHELL.md` / `PAGE_DESIGN_PACKAGE.md`: `design_planning: light` profili gereği artifact sayısı hafif tutulmuştur; visual direction `DESIGN_RULES.md` içindedir.
- `DEPLOYMENT.md` / `OPERATIONS.md`: Production deployment ve canlı operasyonlar approved scope dışında kalmaktadır.
