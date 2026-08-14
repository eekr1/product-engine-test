# Package Selection — RUN-20260815-001

## 1. Seçilen Paket ve Profil

- **Temel Paket**: `demo-frontend` (Eklenti: `existing-project`)
- **Delivery Profile**: Prototype
- **Implementation Planning**: standard
- **Design Planning**: light
- **Proje Türü**: landing-page

## 2. Seçim Gerekçesi

Projenin birincil hedefi Trakya Teknik Makine için potansiyel müşteriye sunulacak yüksek kaliteli bir kurumsal frontend satış demosu hazırlamaktır. `demo-frontend` base paketi frontend odaklı teslimatı yönetirken, `existing-project` eklentisi mevcut web sitesindeki doğrulanmış firma bilgilerinin korunmasını ve transition bağlamını garanti eder. `PLANNING_PROFILE_OVERLAY.md` uyarınca `implementation: standard` agent-ready mimari dokümantasyon setini, `design: light` ise projeye özgü görsel tasarım kurallarını ekler.

## 3. Üretilecek Doküman Listesi

| Document ID | Canonical File Path | Category | Profile Scope | Neden Dahil Edildi? |
|---|---|---|---|---|
| README-DOC | `README.md` | project | standard | Kök read-order ve proje giriş noktası |
| PROJECT-BRAIN | `ai/PROJECT_BRAIN.md` | ai | standard | Proje amacı, kapsamı ve karar özetleri |
| PRODUCT-RULES | `ai/PRODUCT_RULES.md` | ai | standard | Ürün davranış ve UX kuralları |
| TECH-CTX | `ai/TECH_CONTEXT.md` | ai | standard | Frontend teknik stack, mock adapter ve boundary tanımı |
| DESIGN | `design/DESIGN_RULES.md` | design | light | Görsel konsept, tipografi, renk, spacing ve responsive kurallar |
| STATUS | `ai/CURRENT_STATUS.md` | ai | standard | Aktif faz ve wave durum takibi |
| TASKS | `ai/NEXT_TASKS.md` | ai | standard | Sıradaki uygulanabilir görevler |
| DECISIONS | `ai/DECISIONS.md` | ai | standard | Proje ve mimari karar kaydı |
| AGENT-INST | `ai/AGENT_INSTRUCTIONS.md` | ai | standard | Ajan çalışma ve dalga yürütme kuralları |
| PROJ-PLAN | `project/PROJECT_PLAN.md` | project | standard | Fazlar, dalgalar ve teslimat yaklaşımı |
| WAVE-MAP | `waves/WAVE_MAP.md` | waves | standard | Dalga haritası ve bağımlılık matrisi |
| WAVE-PLAN | `waves/plans/WAVE_00.md` ... `WAVE_05.md` | waves | standard | Dalga uygulama planları |

## 4. Hariç Bırakılan Dokümanlar

- **DATA (`DATA_MODEL.md`)**: Onaylı scope'ta gerçek veritabanı / persistent data kalıcılığı bulunmadığı için hariç tutulmuştur.
- **API (`API_CONTRACTS.md`)**: Gerçek backend API kapsam dışında olduğu için (mock adapter kullanılmaktadır) hariç tutulmuştur.
- **TEST, DEPLOY, OPS, PROD-STRAT**: `Prototype` delivery profile ve `standard` implementation planning kapsamında conditional olan bu belgeler onaylanmış ek production scope olmadığı için eklenmemiştir.
- **DESIGN-SYSTEM, GLOBAL-SHELL, PAGE-DESIGN, SYSTEM-STATES**: `design_planning: light` seviyesinde zorunlu olmayıp `DESIGN_RULES.md` altında konsolide edildiği için hariç bırakılmıştır.

## 5. Uygulanan Paket Eklentileri (Extensions)

- **`existing-project` Extension**: Mevcut web sitesi (`https://www.trakyateknikmakine.com/`) gerçekliklerini Current Reality, Target State ve Transition Scope olarak belgelerde dondurur.
