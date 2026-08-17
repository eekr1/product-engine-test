# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Agent Instructions

## 1. Canonical Read Order

Her yeni ajan oturumunda takip edilecek resmi okuma sırası:

1. [README.md](../README.md) — Proje başlangıcı ve komutlar
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Proje kimliği, amaç ve karar özeti
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) — Davranış kuralları, kapsam ve UX kısıtları
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) — Teknik yığın, rotalama ve servis boundary'si
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) — Görsel konsept ve anti-template kuralları
6. [design/DESIGN_SYSTEM.md](../design/DESIGN_SYSTEM.md) — Token'lar, renkler ve tipografi
7. [design/GLOBAL_SHELL.md](../design/GLOBAL_SHELL.md) — Ortak düzen, header ve navigasyon
8. [design/pages/HOME_DESIGN_PACKAGE.md](../design/pages/HOME_DESIGN_PACKAGE.md) (ilgili sayfa tasarım paketleri)
9. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Teslimat stratejisi
10. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) — Dalga yapısı ve sayfa haritası
11. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) — Anlık durum
12. [waves/plans/WAVE_00.md](../waves/plans/WAVE_00.md) (veya aktif dalga planı)
13. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) — Uygulanacak sıradaki işler
14. [ai/DECISIONS.md](./DECISIONS.md) — Alınan kalıcı kararlar

## 2. Agent Behavior Rules

- **Strict Scope Limit**: Approved scope dışında kesinlikle yeni capability (form, submit, harita, WhatsApp, randevu, e-ticaret) eklenemez.
- **Strict Factual Limit**: Source material'da açıkça bulunmayan şirket bilgisi (tarihçe, referans logosu, sertifika, çalışan sayısı, stok garantisi, mobil filo, SLA süresi) uydurulamaz.
- **Strict Site Architecture Limit**: 7 onaylı sayfa (`PAGE-001` - `PAGE-007`) korunmalıdır. İki sayfa tek sayfadaki `#section` anchor'ına collapse edilemez.
- **No Mock Form / Submit**: İletişim sayfasında veya modal'larda mesaj yazma/gönderme alanları eklenemez. Yalnızca `tel:` ve `mailto:` bağlantıları sunulabilir.

## 3. Active Wave Execution Rule

- Ajan yalnızca [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) içinde aktif olarak işaretlenen dalganın planına (`waves/plans/WAVE_<NN>.md`) ve [ai/NEXT_TASKS.md](./NEXT_TASKS.md) listesine göre kod yazmalıdır.
- Gelecek dalga görevleri erken uygulanamaz.
- Aktif dalga tamamlandığında [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) ve [ai/NEXT_TASKS.md](./NEXT_TASKS.md) güncellenmelidir.

## 4. Coding / Architecture Conventions

- Component-oriented, package-managed Vite + React + TypeScript mimarisi uygulanır.
- UI bileşenleri mock verileri doğrudan import etmez; `src/services/` adapter katmanı üzerinden veri alır.
- Class-based stiller yerine CSS Variables (`tokens.css`) kullanılır.
- Kod spagettiye dönüştürülmez; sayfa bileşenleri `src/pages/`, genel bileşenler `src/components/` altında tutulur.

## 5. Verification Mandates

- Kod yazımı sonrası `npm run build` çalıştırılarak derleme hatası olmadığı kanıtlanmalıdır.
- `npm run dev` ile geliştirme sunucusu doğrulanmalıdır.
- Sayfalar arası rotalamanın 7 onaylı sayfa arasında sorunsuz çalıştığı test edilmelidir.

## 6. Documentation Update / Handoff Rule

- Bir dalga tamamlandığında `ai/CURRENT_STATUS.md` içindeki `Completed` ve `Active Wave` alanları güncellenmelidir.
- Yeni teknik veya mimari karar alındığında `ai/DECISIONS.md` belgesine `Engine Resolved` olarak kaydedilmelidir.

## 7. Stop / Clarification Rules

- Kullanıcıdan onaylanmamış yeni bir sayfa veya yetkisiz etkileşim (form/submit/harita) istendiğinde çalışma durdurulmalı ve kullanıcıya açıklama yapılmalıdır.
