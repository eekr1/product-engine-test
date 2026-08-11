# Trakya Teknik Makine — Agent Instructions

## 1. Canonical Read Order

Bu projede göreve başlayan her yeni AI ajan sırasıyla aşağıdaki belgeleri okumalıdır:

1. [README.md](../README.md) (Proje giriş noktası ve okuma sırası)
2. [PROJECT_BRAIN.md](./PROJECT_BRAIN.md) (Proje kimliği, amacı ve genel özeti)
3. [PRODUCT_RULES.md](./PRODUCT_RULES.md) (Ürün kuralları ve kapsam kısıtlamaları)
4. [TECH_CONTEXT.md](./TECH_CONTEXT.md) (Teknoloji yığını ve mimari sınırlar)
5. [DESIGN_RULES.md](../design/DESIGN_RULES.md) (Tasarım ilkeleri, renk paleti ve tipografi)
6. [PROJECT_PLAN.md](../project/PROJECT_PLAN.md) (Üst seviye uygulama yol haritası)
7. [WAVE_MAP.md](../waves/WAVE_MAP.md) (Wave mimarisi ve bağımlılık zinciri)
8. [CURRENT_STATUS.md](./CURRENT_STATUS.md) (Aktif wave ve anlık durum)
9. Aktif wave belgesi: [WAVE_00.md](../waves/plans/WAVE_00.md)
10. [NEXT_TASKS.md](./NEXT_TASKS.md) (Sıradaki somut görevler)
11. [AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md) (Bu çalışma talimatları belgesi)
12. [DECISIONS.md](./DECISIONS.md) (Alınmış mimari ve ürün kararları)

## 2. Agent Behavior Rules

- **AB-001 (Model Bağımsızlığı)**: Ajan, belirli bir AI sağlayıcısına özel kod veya komut varsayımında bulunmamalıdır.
- **AB-002 (Doğrulanmış Gerçeklik)**: Firma tanıtım metinleri, adres, telefon ve yetkili servis bilgileri mevcut sitedeki doğrulanmış verilerden sapmamalıdır. Sahte veri uydurulmamalıdır.
- **AB-003 (Sınır Koruma)**: Kapsam dışındaki backend, veritabanı veya CMS altyapısı varmış gibi sahte kontratlar yazılmamalıdır.

## 3. Active Wave Execution Rule

- Ajan her çalışma oturumunda yalnız `CURRENT_STATUS.md` belgesinde aktif olan wave'i (`WAVE_00`) ve onun planını (`WAVE_00.md`) uygular.
- Ajan aktif wave tamamlanmadan sonraki wave'in işlerine geçemez.

## 4. Coding / Architecture Conventions

- HTML5 semantik etiketler tercih edilmelidir (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Tasarım stılleri `styles/main.css` içindeki CSS değişkenlerini (`var(--accent-amber)` vb.) kullanmalıdır.
- Veri erişimi `CompanyDataService` servisi üzerinden soyutlanmalıdır.

## 5. Verification Mandates

- Yazılan kodlar yerel tarayıcı ortamında konsol hatası vermeden açılabilmelidir.
- Responsive görünümler mobil ve masaüstü genişliklerinde doğrulanmalıdır.

## 6. Documentation Update / Handoff Rule

- Bir wave görevi tamamlandığında ajan `CURRENT_STATUS.md` ve `NEXT_TASKS.md` belgelerini güncel duruma göre günceller.
- Yeni bir mimari veya tasarım kararı alındığında `DECISIONS.md` belgesine kaydeder.

## 7. Stop / Clarification Rules

- Aktif wave uygulanırken unapproved scope değişikliği veya critical conflict tespit edilirse ajan durmalı ve kullanıcıdan açıklama istemelidir.
