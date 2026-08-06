# NEXT_TASKS.md

Bu dosya projede siradaki yapilacak net isleri ve oncelikleri tutar.
Son güncelleme: 2026-08-04

## Şu An Neredeyiz?

- Tasarım araştırma ve planlama fazı tamamlandı.
- `Design_Wave_Map.md` ve Wave 00–29'u içeren `Design_Wave_Plan.md` kullanıcı tarafından onaylandı.
- Aktif faz tasarım dönüşümü implementation/execution aşamasıdır.
- Wave 00 read-only repository audit'i, migration-baseline dokümantasyonu, otomatik doğrulaması ve manuel QA'sı kullanıcı kabulüyle 2026-07-18 tarihinde QA-closed oldu.
- Wave 01 design token/font/focus/motion foundation implementation'ı, otomatik doğrulamaları ve staging/manual QA'sı kullanıcı kabulüyle 2026-07-20 tarihinde QA-closed oldu.
- Wave 02 shared control/form/identity/status/surface/overlay primitive implementation'ı, otomatik doğrulamaları ve staging/browser QA'sı kullanıcı kabulüyle 2026-07-20 tarihinde QA-closed oldu.
- Wave 03 ortak loading/empty/error/feedback implementation'ı, otomatik doğrulamaları ve staging/browser QA'sı kullanıcı kabulüyle 2026-07-20 tarihinde QA-closed oldu.
- Wave 04 desktop global shell/navigation implementation'ı, otomatik doğrulamaları ve staging/browser QA'sı kullanıcı kabulüyle 2026-07-23 tarihinde QA-closed oldu.
- Wave 05 tablet/mobile shell implementation'ı, otomatik doğrulamaları ve `tests/wave05-tests.md` staging/manual QA kaydı blocker olmadan tamamlandı. Wave 05, 2026-07-23 tarihinde kullanıcı kabulüyle QA-closed oldu.
- Wave 06 shared RoomCard/media/aura implementation'ı, otomatik doğrulamaları ve `tests/wave06-tests.md` manuel QA kaydı blocker olmadan tamamlandı. Wave 06, 2026-07-23 tarihinde kullanıcı kabulüyle QA-closed oldu.
- Wave 07 Home giriş deneyimi implementation, automatic validation, staging/manual QA ve kullanıcı kabulüyle 2026-07-23 tarihinde QA-closed oldu. Social Rail sonrası desktop ana yüzey dengesi kapanış düzeltmesiyle tamamlandı; regresyon testleri geçti.
- Wave 08 Discover koridoru ve query deneyimi implementation, automatic validation, category shortcut kapanış düzeltmesi, staging/browser manuel QA ve kullanıcı kabulüyle 2026-07-24 tarihinde QA-closed oldu. Frontend typecheck/build, Vitest 95/95, focused Wave 08 suite 8/8, Wave 08 Chromium E2E 5/5 ve shell/RoomCard/Social Rail regresyon E2E 9/9 geçti.
- Wave 09 Normal Auth Görsel Foundation implementation, automatic validation, blocker-fix retest, staging/browser manuel QA ve kullanıcı kabulüyle 2026-07-24 tarihinde QA-closed oldu. Frontend typecheck/build, Vitest 103/103, focused Wave 09 8/8, Wave 09 Chromium E2E 5/5 ve shell/Home/Discover regresyon E2E 13/13 geçti.
- Wave 10 Room Context Auth Gate ve Return Intent implementation, automatic validation, staging/browser manuel QA ve kullanıcı kabulüyle 2026-07-28 tarihinde QA-closed oldu. Frontend typecheck/build, tam Vitest 111/111, focused Wave 10 unit 8/8, Chromium E2E 4/4 ve ilgili sequential regresyon paketi 24/24 geçti; blocker bildirilmedi.
- Wave 11 Create Room ve Host Olarak Geçiş implementation, backend-aligned thumbnail kapanış düzeltmesi, automatic validation, staging/browser manuel QA ve kullanıcı kabulüyle 2026-07-28 tarihinde QA-closed oldu. Frontend typecheck/build, tam Vitest 119/119, focused Wave 11 unit 8/8, Chromium E2E 8/8 ve Wave 05–11 sequential regresyon 32/32 geçti; blocker kalmadı.
- Wave 12 Room Ortak Runtime ve Lifecycle State Foundation implementation, automatic validation, staging/manual QA ve kullanıcı kabulüyle 2026-07-28 tarihinde QA-closed oldu. Frontend typecheck/build, focused Wave 12 Vitest 26/26, tam Vitest 145/145 ve ilgili Chromium regresyonu 19/19 geçti; `tests/wave12-tests.md` blocker olmadan tamamlandı. Backend, database, API, auth/session ve realtime davranışı değişmedi.
- Wave 13 Room Desktop Participant ve Cinematic Deneyimi implementation, automatic validation, staging/manual QA, blocker retest'leri ve kullanıcı kabulüyle 2026-07-28 tarihinde QA-closed oldu. Participant/report overlay düzeltmesi `dc780c1`, Vibehall report reason picker `74fe751` ve picker stacking düzeltmesi `f23f9f8` ile kapatıldı. Frontend typecheck/build, tam Vitest 154/154, focused Wave 13 Vitest 9/9, focused Chromium 5/5 ve ilgili Chromium regresyonu 24/24 geçti. Frontend commitleri `5005811`, `b8d9252`, `dc780c1`, `74fe751`, `f23f9f8`. `tests/wave13-tests.md` blocker olmadan tamamlandı. Backend, database, API, auth/session ve realtime davranışı değişmedi.
- Wave 14 Room Desktop Host, Moderasyon ve Kapanış implementation, automatic validation, staging/manual QA ve kullanıcı kabulüyle 2026-08-04 tarihinde QA-closed oldu. Frontend typecheck/build, tam Vitest 162/162, focused Wave 12–14 23/23, focused Wave 14 Chromium 3/3 ve Wave 13–14 Chromium regresyonu 8/8 geçti. Frontend commitleri `38737f1`, `5c4aedc`; `tests/wave14-tests.md` bütün maddeleriyle kapatıldı. Blocker bildirilmedi; backend, database, API, auth/session ve realtime davranışı değişmedi.
- Wave 15 Room Mobile Deneyimi implementation, automatic validation, staging/manual QA ve kullanıcı kabulüyle 2026-08-04 tarihinde QA-closed oldu. Frontend typecheck/build, tam Vitest 170/170, focused Wave 15 Vitest 8/8, focused Wave 15 Chromium 4/4 ve Wave 13–15 Chromium Room regresyonu 12/12 geçti. Frontend commitleri `8b60658`, `3343458`; `tests/wave15-tests.md` bütün maddeleriyle kapatıldı. Blocker bildirilmedi; backend, database, API, auth/session ve realtime davranışı değişmedi.
- Wave 16 Own ve Public Profile Deneyimi implementation, automatic validation, staging/manual QA ve kullanıcı kabulüyle 2026-08-04 tarihinde QA-closed oldu. Frontend commitleri `f40c790`, `18222d3`; typecheck/build, tam Vitest 187/187, focused Wave 16 17/17 ve profile Chromium regresyonu 11/11 geçti. `tests/wave16-tests.md` bütün maddeleriyle kapatıldı; blocker bildirilmedi.
- Önceki `social-plan.md` Waves 32–46 QA-closed durumdadır ve aktif iş kuyruğu değildir.

## 1. Öncelik 1 — Wave 17 Başlatma Kapısı (Başlatılmadı)

- Execution cursor Wave 17 — Settings, Privacy ve Account Safety'dir; bu yalnız sıradaki iş kaydıdır.
- Wave 17 implementation, component/style hazırlığı, test, refactor veya Wave 25 consolidation işi başlatılmaz.
- Wave 17 yalnız yeni açık kullanıcı talimatı ve Wave içinde istenen prompt görselleri geldikten sonra canonical okuma sırasıyla başlatılabilir.
- Yeni talimat gelene kadar aktif Design Wave yoktur; Wave 16 kapanış kanıtı korunur.

## 2. Execution Kapısı

- Wave numarası, sırası, kapsamı veya bağımlılığı kullanıcı onayı olmadan değiştirilemez.
- Aynı anda yalnız bir Wave uygulanır.
- Aktif Wave'in otomatik doğrulaması, `tests/waveNN-tests.md` manuel QA kanıtı ve kullanıcı onayı tamamlanmadan sonraki Wave'e geçilmez.
- Yeni özellik, backend redesign, database redesign veya plan dışı UX kararı eklenmez.
- Wave açıkça gerektirmedikçe backend veya database kodu değiştirilmez.
- Görsel gerektiren Wave'lerde ilgili onaylı görseller prompt'a eklenmeden implementation başlatılmaz.

## 3. Authoritative Plan Kaynakları

- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md` — plan sözleşmeleri, kaynak hiyerarşisi, QA kuralları ve standart Wave template'i
- `Design_Wave_Map.md` — onaylı Wave sırası, kapsam sahiplikleri ve bağımlılıklar
- `Design_Wave_Plan.md` — aktif Wave'in ayrıntılı implementation ve kapanış sözleşmesi

