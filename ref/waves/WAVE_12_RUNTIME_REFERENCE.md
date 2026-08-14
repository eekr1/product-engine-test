# Reference Wave — Vibehall Wave 12 Room Runtime Foundation

> **REFERENCE ONLY — NON-AUTHORITATIVE**
>
> Bu dosya `Design_Wave_Plan.md` içindeki gerçek Vibehall Wave 12 bölümünün izole quality/depth referansıdır. Project facts, scope, filenames, technologies, completion state veya `[x]` işaretleri başka projeye taşınamaz. Yeni Product Engine wave'i kendi template'i ve current project authorities ile pre-execution state'te üretilir.

---

### Wave 12 — Room Ortak Runtime ve Lifecycle State Foundation

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-28.

**Hedef:**
Room'un join/access/playback/chat/presence/reconnect/ended durumları desktop ve mobile'ın paylaşacağı açık, authoritative ve bağlam koruyan bir UI state katmanında birleşir.

**Neden bu sırada geliyor:**
Desktop ve mobile kompozisyonlarının REST access, Socket.IO subscription, playback, chat ve cleanup davranışlarını ayrı ayrı kurması duplicate event, player remount ve policy sapması yaratır; bu nedenle görsel Room Wave'lerinden önce layout'tan bağımsız ortak runtime sabitlenmelidir.

**Bağımlılıklar:**
- Wave 03 ortak loading/error/reconnect state sistemi tamamlanmış olmalıdır.
- Mevcut REST, Socket.IO ve host-authority sözleşmeleri değişmeden kullanılmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 12 — Room Ortak Runtime ve Lifecycle State Foundation`
- `Roads/project-foundation/02-system-definition/websocket-contract-v1.md`
  - `## 5. Room Subscription and Join Sync Family`
  - `## 7. Room Lifecycle Event Family`
  - `## 9. Shared Playback Event Family`
- `Design/SYSTEM_STATES_BOARD.md`
  - `## 31. Room States`
  - `## 48. Teknik State Modeli`
  - `## 49. Realtime ve HTTP Reconcile`
- `Design/ROOM_DESKTOP_DESIGN_PACKAGE.md`
  - `## 24. Room Loading State`
  - `## 25. Reconnecting Durumu`
  - `## 43. Realtime ve Güvenilirlik Gereksinimleri`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/RoomShellPage.tsx`, `Vibe frontend/src/rooms/roomApi.ts`, `Vibe frontend/src/rooms/realtimeClient.ts`, `Vibe frontend/src/rooms/YouTubeRoomPlayer.tsx`, `Vibe frontend/src/styles/room.css`, `Vibe frontend/src/styles/feedback.css` ve mevcut backend `src/realtime.ts`/Room REST kontratları.

**Görsel referans:**
- Görsel 1: System States Board — Room initial loading, joining, reconnecting/degraded ve recovery durumlarının ortak görsel ailesi.
- Görsel 2: Room Desktop Design Package — ended, full, denied/banned, private-password ve player-unavailable durumları.
- Görsel 3: Room Desktop Design Package — reconnect sırasında video, chat, focus ve mevcut bağlamın korunduğu normal Room görünümü.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki event, sayaç, mesaj, participant, playback zamanı ve hata nedenleri temsilîdir; mevcut REST/Socket.IO envelope ve backend authority yerine kullanılamaz.

---

**Kapsam içi:**
- Initial/checking/joining/live/reconnecting/degraded/ended/full/denied/banned/private/player-unavailable state ayrımı.
- REST access/join/message snapshot ile Socket.IO room snapshot/presence/chat/playback/lifecycle olaylarının ortak reconcile zinciri.
- Duplicate/out-of-order koruması, stale Room geçişi engeli ve idempotent ended/access-revoked cleanup.
- Player/chat/presence lifecycle cleanup, rol/access state'i ve desktop/mobile tarafından tüketilecek layout-neutral runtime sınırı.

**Kapsam dışı:**
- Desktop participant/host veya mobil Room son kompozisyonu; Wave 13–15'e aittir.
- Cinematic mode, host manage paneli, mobile sheet yerleşimi veya yeni görsel kontrol hiyerarşisi.
- Backend event, auth, Room API, database, playback-authority veya moderation policy değişikliği.
- Yeni reconnect protokolü, message history/retention ürünü veya offline Room desteği.
- Room dışındaki genel state/component consolidation; Wave 25'e aittir.

---

**Implementation kontrol listesi:**

*State modeli ve authoritative giriş zinciri:*
- [x] `RoomShellPage.tsx` içindeki `AccessState`, `SocketStatus`, loading/mutation flag'leri, Room/player/chat/presence state'leri ve bütün REST/Socket.IO geçişlerini Wave 00 envanteriyle eşleştir.
- [x] Ortak Room lifecycle modelinde initial checking, joining, live, reconnecting, degraded, ended, full, denied, banned, kicked/left, private-password-required ve player-unavailable durumlarını birbirinden açıkça ayır.
- [x] `getRoom → checkRoomAccess → joinRoom/unlockPrivateRoom → listRoomMessages` sırasını backend authority'yi koruyan tek giriş zinciri olarak tut; client state'ten join izni türetme.
- [x] Room subscription'ı yalnız aktif participant ve başarılı access/join sonrasında başlat; auth/access başarısızken socket channel'a katılma.
- [x] `room.state.snapshot` sonucunu Room, playback, participants ve current-user role için authoritative reconcile kaynağı olarak uygula.

*Realtime reconcile ve duplicate koruması:*
- [x] `chat.message.created` olaylarını mevcut message id ile deduplicate et; HTTP history ile socket mesajı aynı kaydı iki kez üretmesin.
- [x] Presence snapshot/update olaylarında participant listesini ve `activeParticipantCount` değerini aynı Room kimliği için atomik ve tahminsiz güncelle.
- [x] Playback snapshot/update olaylarında authoritative `status`, `positionSeconds`, `sourceTime` ve `updatedAt` alanlarını koru; participant'ın lokal state'ini authority yapma.
- [x] Socket disconnect/connect_error/connection.error durumlarını reconnecting ve degraded olarak ayır; raw socket mesajını doğrudan kullanıcıya gösterme.
- [x] Reconnect sonrasında mevcut REST access/Room/message snapshot ile socket snapshot'ı yeniden reconcile et; missing state'i tamamla ve stale response'un yeni lifecycle state'ini ezmesini engelle.
- [x] Event envelope `eventId`/Room id bağlamını kullanarak farklı Room'dan, duplicate veya artık geçersiz lifecycle'dan gelen olayı yoksay.
- [x] `room.ended` olayını idempotent işle; player/chat/presence'i kapat, Room'u yeniden live göstermeme ve event tekrarında ikinci cleanup çalıştırmama.
- [x] `room.access.revoked`/moderation sonucunda participant state, message send, subscription ve presence'i güvenli temizle; kick ile ban kullanıcı mesajını policy internali sızdırmadan ayır.

*Lifecycle cleanup, bağlam ve performans:*
- [x] Route/unmount/leave/ended/access-revoked sırasında `room.unsubscribe`, socket disconnect, timer/listener ve player callback cleanup'ını tek sahiplikte ve tekrar güvenli çalıştır.
- [x] Reconnect/reconcile sırasında `YouTubeRoomPlayer` instance'ını gereksiz remount etme; player ready ve current playback bağlamını mümkün olduğunca koru.
- [x] Chat refresh/reconnect sırasında mevcut mesajları ve kullanıcının scroll konumunu koru; kullanıcı geçmiş okurken zorla sona kaydırma.
- [x] Reconnect banner'ı veya lokal player/chat indicator'ı açıldığında mevcut focus'u kaybetme; recovery sonrası focus'u kendiliğinden başka kontrole taşıma.
- [x] Room, chat, presence ve playback güncellemelerinin ilgisiz büyük yüzeyleri gereksiz rerender etmesini önleyecek mevcut component sınırlarını ölç ve yalnız doğrulanmış ortak sınırları ayır.
- [x] Ortak error mapping ile auth/access/full/ended/banned/network/feature/player hatalarını güvenli kullanıcı state'lerine çevir; block yönü, private grant veya internal code sızdırma.
- [x] Layout-neutral runtime API'sini desktop ve mobile tüketicilerinin aynı Room/role/state/mutation sonuçlarını kullanacağı şekilde sınırla; ikinci socket veya duplicate REST akışı oluşturma.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Room runtime başlamaz; Wave 10 Auth Gate handoff'u korunur ve auth öncesi socket subscription yapılmaz.
- [x] Member state — Access/join başarılı member authoritative snapshot, playback, chat ve presence state'lerini tüketir.
- [x] Host state — Host rolü snapshot/backend sonucundan belirlenir; host playback authority client id tahminiyle üretilmez.
- [-] Admin state — Admin'e özgü Room runtime veya policy bypass bulunmuyor; admin normal authenticated Room kurallarını kullanır.
- [x] Loading state — Session/checking/joining/player/chat loading durumları lokal ve ayrı tutulur; tam sayfa spinner kullanılmaz.
- [-] Empty state — Runtime veri-listesi empty sunumu üretmez; no-messages Wave 13 chat kompozisyonuna aittir.
- [x] Error state — REST, subscription, chat, playback ve feature/player hataları birbirinden ayrılır ve güvenli retry/handoff taşır.
- [x] Denied / unavailable state — Full, ended, banned, kicked, private-password, access-denied ve player/feature-unavailable authoritative sonuçtan türetilir.
- [x] Reconnecting state — Mevcut video/chat bağlamı korunur; reconnect sonrası REST + socket snapshot reconcile ve duplicate önleme çalışır.
- [x] Mobile davranışı — Runtime viewport'tan bağımsızdır; mobil tüketici için ikinci socket/state ağacı oluşturmaz.
- [x] Klavye / focus davranışı — State banner/retry değişimleri mevcut focus'u sebepsiz kaydırmaz ve kontrollü live-region kullanır.
- [x] Reduced motion davranışı — Runtime bilgisini iletmek için animasyona güvenmez; reconnect/loading göstergeleri azaltılmış hareketle anlaşılır kalır.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Room runtime testleri access/check/join/private/full/ended/banned giriş zincirini ve auth öncesi subscription yapılmadığını doğruluyor.
- [x] Realtime testleri snapshot, duplicate chat, presence, playback, ended ve access-revoked event'lerini idempotent olarak doğruluyor.
- [x] Reconnect testleri REST + socket reconcile sonrasında Room/participant/message/playback state'inin authoritative ve duplicate-free kaldığını doğruluyor.
- [x] Cleanup testi unmount/leave/ended/revoked durumlarında unsubscribe, disconnect, listener ve player cleanup'ının tek kez güvenli çalıştığını doğruluyor.
- [x] Performance regression testi chat/presence update veya cinematic dışı state değişiminin player'ı remount etmediğini doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave12-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası public/private join success ile full, ended, banned, denied ve player-unavailable sonuçlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası ağ kesme/geri getirme sonrasında video zamanı, messages, participant count ve role state'inin doğru reconcile olduğunu kontrol ediyor.
- [x] QA dosyası reconnect sırasında mevcut içerik, chat scroll ve keyboard focus'un korunduğunu doğruluyor.
- [x] QA dosyası duplicate message/event, missed ended event recovery ve leave/unmount cleanup senaryolarını içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki initial/joining/live/reconnecting/degraded/ended state ayrımları korunuyor.
- [x] State banner'ları player/chat/Room bağlamını gereksiz yere kapatmıyor.
- [x] Görsel odak hiyerarşisi doğru — Room içeriği baskın, reconnect/loading feedback'i ikincil.
- [x] Tipografi hiyerarşisi doğru — State başlıkları Manrope, teknik olmayan açıklama/actions Inter kullanıyor.
- [x] Accent `#FF625A` focus/retry/active durumda kontrollü; error veya reconnect için büyük yüzeye yayılmıyor.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız geçici state/overlay yüzeyinde; kalıcı Room runtime feedback'i okunabilir mat yüzeyde.
- [x] Sahte progress, countdown, playback sağlık durumu, participant veya message verisi yok.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi loading/reconnect/error/denied state'lerinde sağlandı.
- [x] Klavye focus görünür ve reconcile sırasında kaybolmuyor.
- [x] State değişimleri desktop veya mobilde yatay overflow üretmiyor.
- [x] Mevcut fonksiyonlar korundu — REST access/join, Socket.IO envelope, host authority, chat membership ve Room lifecycle değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Desktop ve mobile aynı layout-neutral Room runtime/state sahipliğini tüketebilir; duplicate socket veya access zinciri bulunmaz.
- [x] Join/access/playback/chat/presence/reconnect/ended akışları authoritative snapshot ve eventlerle idempotent çalışır.
- [x] Reconnect sonrası Room, participant, message ve playback state'i bağlam kaybetmeden ve duplicate üretmeden reconcile edilir.
- [x] Player/chat/presence cleanup ile role/access güvenlik sınırları otomatik ve staging testlerinde doğrulanmıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave12-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 12'yi onayladı ve Codex durdu

---

### Wave 12 Sonucu — 2026-07-28

- Yerel implementation tamamlandı: layout-neutral `RoomRuntimeController`/`useRoomRuntime`, açık lifecycle/connection/player state modeli, authoritative REST giriş zinciri, join sonrası tek socket subscription ve snapshot/event reconcile tek sahiplikte birleştirildi.
- Duplicate/out-of-order ve stale-response guard'ları; idempotent ended/revoked/leave/unmount cleanup; reconnect sırasında message/player/focus bağlamını koruyan sunum sınırı eklendi.
- Frontend typecheck ve production build geçti. Focused Wave 12 Vitest 26/26, tam Vitest 145/145 ve ilgili Chromium regresyonu 19/19 geçti. Build yalnız önceden var olan 500 kB üzeri chunk uyarısını koruyor.
- Frontend commitleri: `e502e84`, `794b02c`. Backend, database, API, auth/session, realtime davranışı, route ve dependency kontratları değiştirilmedi.
- `tests/wave12-tests.md` içindeki kullanıcı işaretleri standart `[x]` biçimine normalize edildi. Kullanıcı bütün staging/manual QA maddelerini geçti saydığını, blocker bulunmadığını ve Wave 12'nin kapatılmasını açıkça onayladı.
- Wave 12, 2026-07-28 tarihinde QA-closed / kullanıcı onaylı oldu. Wave 13 yalnız execution cursor olarak sıradadır; implementation veya hazırlık çalışması başlatılmadı.
