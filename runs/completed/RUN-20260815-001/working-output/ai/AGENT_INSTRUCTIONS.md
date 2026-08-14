# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projeye katılan veya yeni göreve başlayan bir ajan aşağıdaki sırayı takip ederek bağlamı öğrenmelidir:

1. `README.md` (Dokümantasyon paketi giriş noktası ve genel harita)
2. `ai/PROJECT_BRAIN.md` (Projenin amacı, kapsamı ve temel özet)
3. `ai/PRODUCT_RULES.md` (İş mantığı, ürün kuralları ve kısıtlamalar)
4. `ai/TECH_CONTEXT.md` (Teknoloji yığını, mimari sınırlar ve integration readiness)
5. `design/DESIGN_RULES.md` (Visual concept, renk paleti, tipografi ve anti-template kuralları)
6. `project/PROJECT_PLAN.md` (Roadmap ve milestone aşamaları)
7. `waves/WAVE_MAP.md` (Wave decomposition haritası)
8. `ai/CURRENT_STATUS.md` (Mevcut durum ve aktif wave bilgisi)
9. Aktif `waves/plans/WAVE_<NN>.md` (Detaylı dalga sözleşmesi)
10. `ai/NEXT_TASKS.md` (Sıradaki somut iş kuyruğu)
11. `ai/DECISIONS.md` ve `ai/AGENT_INSTRUCTIONS.md` (Mimari kararlar ve bu rehber)

## 2. Agent Behavior Rules

- **AB-001 (Model Bağımsızlığı)**: Ajan hangi AI sağlayıcısı (Gemini, Claude, GPT, Codex vb.) olursa olsun, sistem kurallarını ve mimari sınırları yalnız proje dokümanlarından öğrenir.
- **AB-002 (Doğrulanmış Veri İlkesi)**: Ajan hiçbir koşulda doğrulanmamış firma iddiası, sahte müşteri yorumu veya uydurma sertifika ekleyemez. Sadece FCL (Factual Claim Allowlist) içindeki doğrulanmış verileri kullanır.
- **AB-003 (Kapsam İhlali Yasaktır)**: Approved scope dışındaki form submit endpoint'i, harita widget'ı, WhatsApp butonu veya sahte backend API'si eklenemez.
- **AB-004 (Mimari Kalite Tabanı)**: Demo/prototype olması throwaway veya kalitesiz kod yazma izni vermez. `companyService` / `contentAdapter` mimari sınırı korunur.

## 3. Active Wave Execution Rule

- Ajan yalnız `ai/CURRENT_STATUS.md` üzerinde aktif olarak gösterilen wave (`WAVE_<NN>`) kapsamında çalışır.
- Ajan aktif WAVE_PLAN scope'unda tanımlanmamış yeni bir yetenek veya bağımsız bileşeni plan dışı ekleyemez.

## 4. Coding / Architecture Conventions

- **Vanilla Modern Web Stack**: Clean HTML5 semantik etiketleri, `:root` CSS variables tabanlı modüler Vanilla CSS ve ES6+ JavaScript.
- **Data Boundary**: Presentation bileşenleri doğrudan hardcoded veri içermez; `companyService.js` üzerinden veri okur.
- **Responsive-First Layout**: Mobile (<768px), Tablet (768px-1023px) ve Desktop (>=1024px) breakpoint'leri sorunsuz desteklenmelidir.

## 5. Verification Mandates

- Ajan geliştirdiği her bileşen için şu doğrulamaları yapmalıdır:
  1. HTML ve CSS syntax hatalarının olmaması.
  2. `tel:` ve `mailto:` bağlantılarının doğruluğu.
  3. Veri katmanının `companyService` üzerinden sorunsuz çekilmesi.
  4. Responsive düzende taşma veya kırılma olmaması.

## 6. Documentation Update / Handoff Rule

- Bir dalga (wave) tamamlandığında ajan:
  1. `waves/plans/WAVE_<NN>.md` içindeki checklist maddelerini işaretler ve status'u günceller.
  2. `ai/CURRENT_STATUS.md` dokümanını completed ve next active wave ile günceller.
  3. `ai/NEXT_TASKS.md` iş listesini bir sonraki wave görevlerine göre yeniler.
  4. Alınan yeni kalıcı mimari kararları `ai/DECISIONS.md` dosyasına kaydeder.

## 7. Stop / Clarification Rules

- Ajan aşağıdaki durumlarda durmalı ve kullanıcıya açıklama yapmalıdır:
  - Approved scope dışına çıkan yeni bir talep geldiğinde.
  - Sektör veya marka verisiyle ilgili açık çelişki tespit edildiğinde.
  - `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` üzerinde onaylanmamış bir kapsam değişikliği istendiğinde.
