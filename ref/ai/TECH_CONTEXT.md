# TECH_CONTEXT.md

Bu dosya Vibehall projesinin teknik yapısını, kullandığı teknolojileri, klasörlerin görevlerini, çalıştırma/deploy mantığını ve bilinen teknik gerçekleri içerir.  
Tahmin değil, mevcut kod ve gerçek proje yapısı esas alınır.

---

## 1. Proje Yapısı (Workspace)

```
Vibehall/                     ← Yerel çalışma alanı (Git reposu değil, deploy edilmez)
├── ai/                       ← Agent context dosyaları (bu dosyalar)
├── Design/                   ← Ekran ve sistem bazlı onaylı tasarım sözleşmeleri
├── Design_Wave_Map.md        ← Onaylı Wave 00–29 sırası, kapsamı ve bağımlılıkları
├── Design_Wave_Plan.md       ← Wave 00–29 ayrıntılı execution ve QA planı
├── Roads/                    ← Planlama, canonical docs, karar log
│   └── project-foundation/   ← Tüm canonical belgelerin ev sahibi
│       ├── 01-product-definition/
│       ├── 02-system-definition/
│       ├── 03-data-definition/
│       ├── 04-ui-ux-definition/
│       ├── 05-governance-and-safety/
│       ├── 06-build-strategy/
│       ├── 07-roadmaps/
│       │   └── plans/        ← Operasyonel wave planları
│       └── 08-reference/     ← decision-log.md, brand, tasarım notları
├── tests/                    ← Aktif Wave QA dosyalarının üretileceği local alan
│   └── TestOldPlan/          ← Önceki planların tarihsel manuel QA kayıtları
├── Vibe backend/             ← Standalone backend Git reposu
├── Vibe frontend/            ← Standalone frontend Git reposu
├── DEVELOPMENT.md            ← Geliştirme kuralları, script adları, wave özeti
└── package.json              ← Kök kolaylık scriptleri (local-only)
```

> **Önemli:** `Vibe frontend/` ve `Vibe backend/` ayrı standalone Git repolarıdır. Her biri bağımsız deploy edilir. Üst `Vibehall/` klasörü local-only'dir; Render veya CI bu klasörü kullanmaz.

### Tasarım Dönüşümü Plan Dosyaları

- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`: plan sözleşmeleri, kaynak hiyerarşisi, QA kuralları ve değiştirilmeyen standart Wave template'i.
- `Design_Wave_Map.md`: kullanıcı onaylı Wave sırası, kapsam sahiplikleri ve teknik/ürün bağımlılıkları.
- `Design_Wave_Plan.md`: aktif Wave'in implementation checklist'i, state/rol matrisi, doğrulama ve çıkış kriterleri.
- `Design/`: aktif Wave'in referans verdiği ekran/sistem tasarım paketleri.

Bu dosyalar local-only planlama/QA katmanındadır; frontend veya backend deploy artifact'inin parçası değildir. Design Wave 00–29 için QA dosyaları ancak ilgili Wave uygulanırken `tests/waveNN-tests.md` olarak oluşturulur.

---

## 2. Backend Teknoloji Stack'i

| Katman | Teknoloji | Versiyon |
|--------|-----------|---------|
| Runtime | Node.js (ESM) | — |
| Framework | Fastify | ^5.6.2 |
| Dil | TypeScript | ^5.9.3 |
| ORM | Prisma | 6.19.3 |
| Veritabanı | PostgreSQL | — |
| Gerçek zamanlı | Socket.IO | ^4.8.1 |
| Redis adapter | @socket.io/redis-adapter | ^8.3.0 |
| Redis client | redis | ^5.8.2 |
| Auth | JWT (jsonwebtoken) + bcryptjs + cookie | — |
| Object Storage | AWS S3-compatible (AWS SDK v3) | — |
| Avatar işleme | sharp | ^0.35.3 |
| Validation | Zod | ^4.2.1 |
| Email | console (debug) veya Brevo | — |
| Dev runner | tsx watch | ^4.21.0 |
| Test | Vitest | ^3.2.4 |

### Backend Kaynak Klasörleri (`Vibe backend/src/`)

| Klasör | Görev |
|--------|-------|
| `app.ts` | Fastify app factory; tüm route grupları buraya register edilir |
| `index.ts` | Entry point; server başlatma |
| `config.ts` | `RuntimeConfig` tipi ve env var okuma |
| `realtime.ts` | Socket.IO server; tüm realtime event handling |
| `worker.ts` | Standalone worker entry point |
| `auth/` | auth-plugin, auth-service, auth-types, password-reset-service |
| `contracts/` | Paylaşımlı tip/enum kontratlar |
| `db/` | Prisma client singleton |
| `jobs/` | Durable job worker: job-store, worker-runtime, handlers, outbox |
| `lib/` | input-safety, rate-limit gibi utility modüller |
| `media/` | Media source parsing/validation (YouTube) |
| `messaging/` | Legacy/ayrı messaging alanı varsa kontrol et; aktif DM social servisleri Wave 41-42 ile `social/` altında |
| `moderation/` | Moderasyon action servisleri |
| `notifications/` | Notification service (in-app) |
| `policy/` | account-policy değerlendirme |
| `realtime/` | redis-runtime (Redis adapter) |
| `rooms/` | room-presenter, room-realtime-bus |
| `routes/` | HTTP route grupları: auth, users, rooms, categories, content, moderation, social, admin, health |
| `security/` | request-security (CSRF vb.) |
| `social/` | relationship, presence, notification, participation, room-invite servisleri |
| `storage/` | ObjectStorage abstraction (S3) |
| `users/` | User servisleri |

### Backend Route Grupları

| Dosya | Prefix | Açıklama |
|-------|--------|---------|
| `routes/health.ts` | `/health`, `/ready`, `/api/health`, `/api/ready` | Sağlık kontrolü |
| `routes/auth.ts` | `/api/auth/...` | Signup, login, logout, me, password reset |
| `routes/users.ts` | `/api/users/...` | Profil, settings, avatar, account silme |
| `routes/rooms.ts` | `/api/rooms/...` | Oluşturma, listeleme, erişim, moderation |
| `routes/categories.ts` | `/api/categories` | Kategori listesi |
| `routes/content.ts` | `/api/content/...` | Platform içerik sayfaları |
| `routes/moderation.ts` | `/api/moderation/...` | Room moderation, raporlar |
| `routes/social.ts` | `/api/social/...` | Arkadaşlık, block, presence, notification, invite |
| `routes/admin.ts` | `/api/admin/...` | Admin panel API'ları |

### Prisma Şeması — Temel Modeller

| Model | Açıklama |
|-------|---------|
| `User` | Kullanıcı: id, email, username, displayName, passwordHash, accountState, role |
| `Room` | Oda: slug, title, hostUserId, categoryId, sourceVideoId, visibility, state |
| `RoomParticipant` | Aktif katılım kaydı: roomId, userId, role (host/participant), state |
| `RoomParticipationSession` | Tam katılım süresi kaydı |
| `SharedEncounter` | People You Watched With: iki kullanıcının aynı odada 5+ dk geçirmesi |
| `Message` | Chat mesajı: roomId, userId, body, state |
| `ModerationAction` | Kick/ban log: roomId, actorUserId, targetUserId |
| `Report` | Rapor: targetType (room/user/message), reason, status |
| `AdminActionLog` | Admin eylem logu |
| `Category` | Oda kategorisi: name, slug, isActive, sortOrder |
| `Friendship` | Karşılıklı arkadaşlık |
| `FriendRequest` | Arkadaşlık isteği lifecycle |
| `UserBlock` | Global block kaydı |
| `SocialSettings` | Privacy tercihleri (friendRequestPrivacy, onlinePrivacy, lastSeenPrivacy, invitePrivacy) |
| `Notification` | In-app bildirim: type, state, actionState, readAt |
| `RoomInvite` | Oda daveti: kind (public/private), state, grantTokenHash |
| `PlatformContent` | Yönetilen platform sayfaları (Terms/Privacy/vb.) |
| `PasswordResetToken` | Şifre sıfırlama token |
| `OutboxEvent` | Durable outbox pattern (event publishing) |
| `DurableJob` | Durable job queue (avatar cleanup, account deletion, vb.) |

---

## 3. Frontend Teknoloji Stack'i

| Katman | Teknoloji | Versiyon |
|--------|-----------|---------|
| Framework | React | ^19.2.3 |
| Build tool | Vite | ^7.2.7 |
| Dil | TypeScript | ^5.9.3 |
| Gerçek zamanlı | socket.io-client | ^4.8.1 |
| Test (unit) | Vitest | ^3.2.4 |
| Test (E2E) | Playwright | ^1.61.1 |
| Accessibility test | @axe-core/playwright | ^4.12.1 |

> **Not:** React Router KULLANILMIYOR. Router custom olarak `history.pushState` tabanlı implement edildi (`src/App.tsx`, `src/lib/routes.ts`).  
> Tailwind CSS KULLANILMIYOR; design system Waves 23-31'de vanilla CSS ile kuruldu.

### Frontend Kaynak Klasörleri (`Vibe frontend/src/`)

| Klasör/Dosya | Görev |
|--------------|-------|
| `App.tsx` | Custom router: route matching, navigation, title update |
| `main.tsx` | Entry point |
| `lib/routes.ts` | Route tanımları (path, component, title) |
| `lib/api.ts` | HTTP API client (fetch wrapper) |
| `pages/` | Her sayfanın ana bileşeni |
| `components/` | Paylaşımlı UI bileşenleri, AppShell |
| `auth/AuthContext.tsx` | Auth state context |
| `rooms/` | YouTubeRoomPlayer, realtimeClient, roomApi |
| `social/` | SocialRail, RelationshipActions, RoomInviteCard, socialApi |
| `admin/` | Admin bileşenleri |
| `users/` | User profil bileşenleri |
| `content/` | Platform içerik sayfaları |
| `styles/` | Design system CSS |

### Frontend Sayfaları (`src/pages/`)

| Sayfa | Route | Açıklama |
|-------|-------|---------|
| `HomeShellPage` | `/` | Landing / Home |
| `DiscoverShellPage` | `/discover` | Canlı odaları keşfet |
| `CreateRoomPage` | `/create-room` | Oda oluştur |
| `RoomShellPage` | `/room?...` | Oda deneyimi (player + chat + participants) |
| `AuthPage` | `/auth`, `/auth/reset` | Login/signup, şifre sıfırlama |
| `FriendsPage` | `/friends` | Arkadaşlar, istekler, People You Watched With, Blocked |
| `MessagesPage` | `/messages` | Friends-only direct message konuşma listesi ve conversation deneyimi |
| `OwnerProfilePage` | `/profile` | Kendi profil görünümü |
| `ProfileSettingsPage` | `/settings` | Profil, privacy, hesap ayarları |
| `MemberProfilePage` | `/users/:username` | Başka üyelerin profili |
| `AdminShellPage` | `/admin` | Admin kontrol paneli |
| `PlatformContentPage` | `/terms`, `/privacy`, `/community-guidelines`, `/support` | Platform sayfaları |
| `NotFoundPage` | `*` | 404 |

---

## 4. Ortam Değişkenleri

### Backend (`.env.example`)

| Değişken | Varsayılan | Açıklama |
|----------|-----------|---------|
| `NODE_ENV` | `development` | `development/test/production` |
| `PORT` | `4000` | Sunucu portu |
| `LOG_LEVEL` | `info` | Fastify log seviyesi |
| `CORS_ORIGIN` | `http://localhost:5173` | Frontend origin |
| `DATABASE_URL` | `postgresql://...` | PostgreSQL bağlantısı |
| `SESSION_SECRET` | — | Cookie imzalama |
| `CSRF_PROTECTION_ENABLED` | `true` | CSRF koruma |
| `CSRF_SECRET` | — | CSRF imzalama |
| `ADMIN_BOOTSTRAP_SECRET` | — | İlk admin oluşturma; sonra kaldırılmalı |
| `ADMIN_BOOTSTRAP_ALLOW_AFTER_ADMIN_EXISTS` | `false` | Acil recovery override |
| `FRONTEND_URL` | `http://localhost:5173` | Password reset maili için |
| `EMAIL_PROVIDER` | `console` | `console` veya `brevo` |
| `EMAIL_FROM` | — | Gönderici adresi |
| `BREVO_API_KEY` | — | Brevo ile email |
| `SOCIAL_ENABLED` | `false` | Social feature flag |
| `DIRECT_MESSAGES_ENABLED` | `false` | DM feature flag |
| `REDIS_URL` | — | Redis bağlantısı (Social için zorunlu) |
| `OBJECT_STORAGE_ENDPOINT` | — | S3-compatible endpoint |
| `OBJECT_STORAGE_REGION` | `auto` | Bölge |
| `OBJECT_STORAGE_ACCESS_KEY_ID` | — | Access key |
| `OBJECT_STORAGE_SECRET_ACCESS_KEY` | — | Secret key |
| `OBJECT_STORAGE_PUBLIC_BASE_URL` | — | CDN/bucket base URL |
| `OBJECT_STORAGE_AVATAR_BUCKET` | `vibehall-avatars` | Avatar bucket adı |
| `OBJECT_STORAGE_EVIDENCE_BUCKET` | `vibehall-evidence` | Rapor kanıt bucket |
| `WORKER_ENABLED` | `false` | Worker aktif mi |
| `WORKER_MODE` | — | `embedded` veya `standalone` |
| `WORKER_POLL_INTERVAL_MS` | `1000` | Job polling aralığı |
| `WORKER_MAX_ATTEMPTS` | `8` | Max job retry |
| `SOCIAL_ENCOUNTER_MIN_OVERLAP_SECONDS` | `300` | People You Watched With minimum süre |
| `SOCIAL_ENCOUNTER_MAX_CONCURRENCY` | `50` | Encounter öneri max concurrency |
| `SOCIAL_ENCOUNTER_WINDOW_DAYS` | `30` | Encounter penceresi |

### Frontend (`.env.example`)

| Değişken | Açıklama |
|----------|---------|
| `VITE_API_BASE_URL` | Backend API base URL |
| `VITE_WS_URL` | Backend WebSocket URL |

---

## 5. Geliştirme ve Script'ler

### Backend Script'leri (`Vibe backend/`)

```bash
npm run dev                      # tsx watch src/index.ts (geliştirme)
npm run build                    # TypeScript derleme
npm run typecheck                # tsc --noEmit
npm run test                     # Vitest
npm run prisma:generate          # Prisma client üret
npm run prisma:validate          # Schema doğrula
npm run prisma:migrate           # Lokal migration oluştur/uygula
npm run prisma:migrate:deploy    # Production migration (deploy)
npm run prisma:seed              # Seed (kategori verisi)
npm run worker:dev               # Worker geliştirme modu
npm run render:build             # prisma generate + tsc (Render build)
npm run render:start:production  # prisma migrate deploy + node dist/index.js
npm run render:start:staging     # db:prepare + node dist/index.js
```

### Frontend Script'leri (`Vibe frontend/`)

```bash
npm run dev         # Vite geliştirme sunucusu (port 5173)
npm run build       # tsc + vite build
npm run typecheck   # tsc -b
npm run test        # Vitest
npm run test:e2e    # Playwright
```

### Kök Script'ler (`Vibehall/`)

```bash
npm run dev:frontend    # Kısa yol (yerel kullanım)
npm run dev:backend     # Kısa yol (yerel kullanım)
```

> Windows PowerShell'de `npm.ps1` execution policy engeli varsa `npm.cmd` kullan.

---

## 6. Realtime Mimari

- **Socket.IO server** backend'de `src/realtime.ts` içinde tanımlı.
- Auth: Cookie tabanlı JWT doğrulama; socket middleware üzerinden.
- Redis adapter: `@socket.io/redis-adapter` ile horizontal scaling desteği.
- **Playback state:** In-memory `Map<roomId, PlaybackState>`; yeniden başlatmada sıfırlanır (in-memory kaçınılmaz).
- **Room lifecycle bus:** `src/rooms/room-realtime-bus.ts` — oda eventlerini realtime socket'e iletir.
- **Social realtime bus:** `src/social/social-realtime-bus.ts` — arkadaş/presence/notification eventleri.

---

## 7. Veri ve Migration Disiplini

- `prisma/schema.prisma`: tüm modeller ve enumlar burada.
- `prisma/migrations/`: committed migration dosyaları.
- **Lokal:** `prisma migrate dev` (migration oluştur + uygula).
- **Production:** `prisma migrate deploy` (committed migration'ları uygula, `db push` kullanılmaz).
- **Staging:** `db:prepare` helper ile `db push` tabanlı (geçici kolaylık).
- `prisma/seed.ts`: Yalnız kategori verisi; idempotent.

---

## 8. Deployment

- **Platform:** Render.com — frontend (Static Site) + backend (Web Service) ayrı.
- **Frontend Root Directory:** `Vibe frontend`
- **Backend Root Directory:** `Vibe backend`
- **Worker:** Production'da ayrı Render service önerilir (`WORKER_MODE=standalone`). Tek instance staging/hobby için `WORKER_MODE=embedded`.
- **DB:** PostgreSQL service (Render veya external).
- **Redis:** `SOCIAL_ENABLED=true` için zorunlu.
- **Object Storage:** S3-compatible (Cloudflare R2, AWS S3, vb.); avatar ve evidence bucket'ları ayrı.

---

## 9. Bilinen Teknik Notlar ve Kısıtlamalar

- **Playback state in-memory:** Sunucu restart edildiğinde paylaşımlı oynatma pozisyonu sıfırlanır.
- **SOCIAL_ENABLED=false varsayılan:** Social rotalar production'da açılana kadar kapalı kalmalı. Redis bağlantısı test edilmeden true yapılmamalı.
- **WORKER_MODE=embedded çok instance'ta sorunlu:** Her instance kendi worker'ını başlatır; production'da `standalone` kullan.
- **Admin bootstrap:** İlk admin oluşturulduktan sonra `ADMIN_BOOTSTRAP_SECRET` env var'ı kaldırılmalı veya boş bırakılmalı.
- **Custom router:** React Router yok; navigasyon `window.history.pushState` ve `CustomEvent("vibehall:before-navigate")` ile çalışır.
- **CSRF koruma:** `X-CSRF-Token` header'ı mutation (POST/PATCH/DELETE) requestlerinde gereklidir.
- **Wave 39 migration:** `20260708000000_wave39_room_invites` — staging'de deploy edilmesi gereken room invite/private grant migration.
- **`avatarUrl` kolonu deprecated:** Wave 33 ile kullanımdan kaldırıldı; `avatar128Key`, `avatar512Key` kullanılıyor.
### Wave 40 frontend invite yüzeyleri

- `Vibe frontend/src/social/socialApi.ts`: RoomInvite tipleri ve list/send/accept/decline/revoke API fonksiyonları.
- `Vibe frontend/src/social/RoomInviteCard.tsx`: Public/private davet lifecycle kartı.
- `Vibe frontend/src/social/SocialRail.tsx`: `Invites` tabı, aktif/geçmiş sıralaması, Room drawer invite context.
- `Vibe frontend/src/pages/FriendsPage.tsx`: `/friends?view=invites` full management görünümü.
- `Vibe frontend/src/social/RelationshipActions.tsx` ve `SocialIdentity.tsx`: eligible friend için room-context `Invite` aksiyonu.
- Standalone `/invites` route'u yok; custom router korunur.
### Wave 41-42 direct messaging backend + frontend

- Prisma migration: `Vibe backend/prisma/migrations/20260709000000_wave41_direct_messages/migration.sql`.
- Models/enums: `Conversation`, `ConversationMemberState`, `DirectMessage`, `DirectMessageState`, notification type/source `direct_message_received` / `direct_message`.
- Backend services: `src/social/direct-message-service.ts`, `src/social/direct-message-realtime-bus.ts`; block flow DM boundaries'i temizler, per-user delete cleared boundary kullanır.
- HTTP routes behind `DIRECT_MESSAGES_ENABLED`: `/api/social/dm/conversations`, `/api/social/dm/messages`, `/api/social/dm/conversations/:conversationId/messages`, `/delivered`, `/read`, DELETE conversation.
- Socket events: `dm.message.created`, `dm.delivery.ack`, `dm.delivery.updated`, `dm.read.advance`, `dm.read.updated`, `dm.typing`, `dm.typing.updated`, `dm.conversation.deleted`.
- Worker job: `dm.cleanup` removes both-deleted conversations after 30 days unless held for moderation.
- Frontend surfaces: `Vibe frontend/src/pages/MessagesPage.tsx`, `src/social/ConversationPanel.tsx`, `DirectMessageList.tsx`, `DirectMessageComposer.tsx`, `useDirectMessageRealtime.ts`, `SocialRail.tsx` Messages tab.
- Wave42 stabilization: DM realtime refresh/append, delete conversation UI, block/unblock history boundary, room invite cards in message flow, draft/minimized chip behavior and SocialRail loading/reconnect loop fix tamamlandı.
- Known non-blocker: composer send button may stay disabled briefly and message may appear after ~1-2 seconds; accepted for later UX/performance polish, not a Wave42 blocker.
### Wave 43 social reporting/evidence foundation

- Prisma migration: `Vibe backend/prisma/migrations/20260711000000_wave43_social_reporting_evidence/migration.sql`.
- Report target typing expanded with `profile` and `direct_message`; legacy `room`, `user`, `message` reports remain supported.
- New models: `ReportEvidence`, `ReportEvidenceAccessLog`, `ReportEvidenceRetentionState`.
- Backend service: `Vibe backend/src/moderation/social-report-evidence-service.ts`.
- DM report evidence capture stores canonical full-conversation JSON plus focused 50/50 context as gzip + AES-256-GCM encrypted private evidence object; checksum/captureVersion/retention metadata persisted in DB.
- Report creation fails safely if evidence storage fails; no falsely complete DM evidence report is created.
- Reported DM conversation is marked `heldForModeration=true`; DM cleanup skips held conversations.
- Admin report-linked APIs only: `/api/admin/reports/:reportId/context`, `/api/admin/reports/:reportId/evidence`, `/api/admin/reports/:reportId/evidence/:evidenceId/access`.
- Evidence access URL generation is short-lived and writes `ReportEvidenceAccessLog` audit rows.
- No general friendship graph or general DM browse endpoint was added.
---

## WAVE43_44_TECH_NOTE_2026_07_11

- Report target types now include legacy `room`, `user`, `message` plus social `profile` and `direct_message`.
- Direct-message reports create private immutable evidence metadata (`ReportEvidence`) and audited access logs (`ReportEvidenceAccessLog`).
- Admin report-linked endpoints:
  - `GET /api/admin/reports/:reportId/context`
  - `GET /api/admin/reports/:reportId/evidence`
  - `POST /api/admin/reports/:reportId/evidence/:evidenceId/access`
- Frontend additions:
  - `src/social/ReportDialog.tsx`
  - Profile report flow in `src/social/RelationshipActions.tsx`
  - DM message report flow in `src/social/DirectMessageList.tsx`
  - Admin focused context/evidence viewer in `src/pages/AdminShellPage.tsx`
- Shared QA file for the pair: `tests/wave43-44-tests.md`.
---

## WAVE45_TECH_NOTE_2026_07_11

- Operational status service: `Vibe backend/src/operations/operational-status.ts`.
- Durable job stale lock threshold: 15 minutes (`DEFAULT_STALE_JOB_LOCK_MS`).
- Worker handler added: `social.lifecycle.reconcile`.
- Admin-only operational endpoints:
  - `GET /api/admin/operations`
  - `POST /api/admin/operations/reconcile`
  - `POST /api/admin/jobs/:jobId/retry`
- Public safe operational surfaces:
  - `/ready` checks database and operational degraded state.
  - `/api/metrics` returns safe queue/lifecycle/evidence counters only.
- Reconciliation covers expired friend requests, expired room invites/grants, due DM cleanup, held cleanup suppression, terminal notification cleanup, shared encounter expiry, stale job recovery, and evidence retention counts.
- Runbook updated: `Roads/project-foundation/06-build-strategy/production-discipline-and-deploy-runbook.md` Wave45 Social Operations Gate.
- Manual QA file: `tests/wave45-tests.md`.
---

## WAVE46_TECH_NOTE_2026_07_11

- Final release gate runbook: `Roads/project-foundation/06-build-strategy/social-release-final-acceptance-runbook.md`.
- Final QA checklist: `tests/wave46-tests.md`.
- Backend release-readiness test: `Vibe backend/tests/wave46-release-readiness.test.ts`.
- Frontend route inventory test now expects approved `/messages` and still rejects unplanned `/feed`, `/members`, `/notifications` routes.
- Wave46 adds no product feature; it locks release readiness, regression matrix, no-casual-browse boundaries, feature flag order, and final closure evidence.
## WAVE46_VERIFICATION_NOTE_2026_07_11

- Verified backend typecheck/build/full Vitest after adding `wave46-release-readiness.test.ts`.
- Verified frontend typecheck/build/unit Vitest after route inventory update.
- Existing Playwright specs cover Waves 34/36/38/40 surfaces and should be run in browser-ready staging when closing Wave46.

## WAVE46_FINAL_CLOSURE_TECH_NOTE_2026_07_12

- Social plan Waves 32-46 are QA-closed by user acceptance as of 2026-07-12.
- Closed QA files: `tests/wave43-44-tests.md`, `tests/wave45-tests.md`, `tests/wave46-tests.md`.
- Final release acceptance runbook remains the reference for production-shaped rollout: `Roads/project-foundation/06-build-strategy/social-release-final-acceptance-runbook.md`.
- No new social wave should be started from `social-plan.md`; future work should be a new plan, targeted fix, or polish backlog.
- Known non-blocker retained for future polish: DM composer send button can remain disabled briefly and message visibility can lag about 1-2 seconds.

---

## DESIGN_WAVE_00_MIGRATION_BASELINE_2026_07_18

**Wave 00 kapanış durumu:** Read-only repository audit'i, yerel dokümantasyon, otomatik doğrulama ve `tests/wave00-tests.md` manuel QA kabulü tamamlandı. Wave 00, 2026-07-18 tarihinde kullanıcı onayıyla QA-closed oldu. Güncel Wave 01 implementation durumu bu dosyanın 12. bölümünde kayıtlıdır.

### 1. Kaynak hizalama ve kapsam sınırı

- Zorunlu `ai/` bağlamı, `Big_Design_Plan.md`, `Design_Wave_Map.md`, `Design_Wave_Plan.md` Wave 00, canonical `frontend-modules.md` sınırları ve `Design/README.md` okundu.
- Ürün/teknik davranış seviyesinde Wave 00 kapsamını değiştiren çelişki bulunmadı.
- Başlangıçta bulunan üç stale metadata etiketi Wave 00 kapanışında uzlaştırıldı. Wave 01 implementation sırasında plan belgeleri değiştirilmedi; QA kapanış koşulu 2026-07-20 tarihinde kullanıcı onayıyla sağlandıktan sonra plan sonuç/status satırları ve `ai/` bağlamı güncellendi.
- Audit sırasında frontend/backend ürün kodu, CSS, route, API, auth, realtime, database veya migration değiştirilmedi. Yeni component veya test kodu eklenmedi.

### 2. Repository ve başlangıç worktree baseline'ı

| Alan | Gerçek sınır | Başlangıç durumu |
|---|---|---|
| `Vibehall/` | Local-only planlama, AI context ve QA alanı; Git reposu değil | `git rev-parse` beklenen biçimde başarısız: üst klasörde `.git` yok |
| `Vibe frontend/` | Standalone React/Vite/TypeScript reposu | `main`; `git status --short` boş/clean |
| `Vibe backend/` | Standalone Fastify/Prisma/Socket.IO reposu | `main`; `git status --short` boş/clean |

### 3. Başlangıç komut ve doğrulama matrisi

| Repo | Komut | 2026-07-18 sonucu |
|---|---|---|
| Frontend | `npm.cmd run typecheck` | Geçti |
| Frontend | `npm.cmd run build` | Geçti; 98 module, CSS 71.79 kB (gzip 12.05 kB), JS 414.02 kB (gzip 119.29 kB) |
| Frontend | `npm.cmd run test` | Geçti; 2 dosya, 10/10 test. `route-inventory.test.ts` 2/2 geçti |
| Backend | `npm.cmd run typecheck` | Geçti |
| Backend | `npm.cmd run build` | Geçti |
| Backend | `npm.cmd run test` | Baseline fail: 15 dosya geçti, 1 dosya failed, 1 dosya skipped; 91 passed, 1 failed, 3 skipped |

Backend başarısızlığının kanıtı: `Vibe backend/tests/wave46-release-readiness.test.ts` kökte `tests/wave43-44-tests.md` arıyor. Dosya, önceki plan testleri için bilinçli tarihsel arşiv olan `tests/TestOldPlan/wave43-44-tests.md` altındadır. Yeni Design Wave testleri doğrudan `tests/` altında tutulur. Bu stale legacy test referansı ürün runtime davranışı veya Wave 00 için blocker değildir; arşiv sınırı korunmuş ve eski test dosyaları taşınmamıştır.

### 4. Route, shell ve rol erişim envanteri

Custom router sahibi `src/App.tsx`'tir. Route eşleme `pathname` üzerinden exact path veya route'a özgü `match` ile yapılır. `navigate()` önce cancelable `vibehall:before-navigate` event'ini yayınlar, sonra `history.pushState` ve local React state güncellemesi yapar. `popstate` de aynı event ile korunur; iptal edilirse mevcut `locationPath` tekrar history'ye yazılır. Sayfa başlığı active route title ile güncellenir.

| Route | Page sahibi | Erişim baseline'ı | Primary nav | Mevcut shell davranışı |
|---|---|---|---|---|
| `/` | `HomeShellPage` | Public; CTA current user'a göre değişir | Evet | Global header/masthead/footer; member ise Social Rail uygun |
| `/discover` | `DiscoverShellPage` | Public/optional auth; room click `/room`a gider | Evet | Global shell; member ise Social Rail |
| `/create-room` | `CreateRoomPage` | Guest için `AuthRequiredGate`; member create formu | Hayır | Global shell; member ise Social Rail |
| `/room` | `RoomShellPage` | Guest için `AuthRequiredGate`; member/host access ve join state'leri | Hayır | Social `drawer` moduna geçer fakat global header, page masthead ve footer hâlen görünür |
| `/friends` | `FriendsPage` | Guest için `AuthRequiredGate`; member-only listeler | Hayır | Global shell + Social Rail |
| `/messages` | `MessagesPage` | Frontend'de açık auth gate yok; backend-auth/feature-disabled error üzerinden dolaylı korunur | Hayır | Global shell + Social Rail |
| `/auth` | `AuthPage` | Public login/signup/forgot | Hayır | Global shell; social gizli |
| `/auth/reset` | `AuthPage` | Public token reset | Hayır | Global shell; social gizli |
| `/profile` | `OwnerProfilePage` | Guest için `AuthRequiredGate`; member-only | Hayır | Global shell + Social Rail |
| `/settings` | `ProfileSettingsPage` | Guest için `AuthRequiredGate`; member-only | Hayır | Global shell + Social Rail |
| `/users/:username` | `MemberProfilePage` | Public minimal profile; member relationship actions | Hayır | Global shell + Social Rail (member) |
| `/admin` | `AdminShellPage` | Guest auth gate; member için explicit admin-denied; admin-only data | Hayır | Global header/masthead/footer kalır; Social Rail gizli |
| `/terms` | `TermsPage` | Public, published content | Hayır | Global shell; social gizli |
| `/privacy` | `PrivacyPage` | Public, published content | Hayır | Global shell; social gizli |
| `/community-guidelines` | `CommunityGuidelinesPage` | Public, published content | Hayır | Global shell; social gizli |
| `/support` | `SupportPage` | Public, published content | Hayır | Global shell; social gizli |
| `*` | `NotFoundPage` | Public 404 | Hayır | Global shell; social gizli |

`AppShell.tsx` gerçek sahibi: bütün route'lar için topbar, primary nav, create action, account/admin/logout aksiyonları, masthead, footer, Social Rail ve docked `ConversationPanel`. Social visibility `hiddenSocialRoutes` ile kapatılır; normal member route'larda rail, Room'da drawer kullanılır. Admin linki yalnız `currentUser.role === admin` iken görünür ama backend `adminOnly` gate authoritative kalır.

### 5. Component teknik sahiplik haritası

| Alan | Ana sahipler | Baseline notu |
|---|---|---|
| App orchestration | `src/App.tsx`, `src/lib/routes.ts`, `src/components/AppShell.tsx` | Custom router ve global shell tek merkezde; route-level code splitting yok |
| Shared state/gate | `AuthRequiredGate.tsx`, `ErrorBoundary.tsx`, `LoadingState.tsx` | `LoadingState` yalnız root `Suspense` fallback'inde; page'ler kendi inline loading markup'ını tekrar ediyor |
| Auth | `AuthContext.tsx`, `AuthPage.tsx` | Session `/auth/me`; mutations ortak API/CSRF client'ı üzerinden |
| Room | `RoomShellPage.tsx` (1400 satır), `YouTubeRoomPlayer.tsx`, `roomApi.ts`, `realtimeClient.ts` | Join/access/player/chat/presence/moderation/report/end ve realtime büyük ölçüde tek page monolitinde |
| Admin | `AdminShellPage.tsx` (1797 satır), `adminApi.ts` | Overview/users/rooms/reports/moderation/categories/content aynı page monolitinde |
| Social | `SocialRail`, `SocialIdentity`, `RelationshipActions`, `RoomInviteCard`, `BlockedAccountsPanel`, `ReportDialog` | Rail + full-page Friends aynı API/state ailelerini farklı markup'larla tüketiyor |
| DM | `MessagesPage`, `ConversationPanel`, `DirectMessageList`, `DirectMessageComposer`, `useDirectMessageRealtime` | Full-page ve docked panel liste/composer primitive'lerini paylaşıyor; conversation list presentation ayrı |
| Profile | `ProfileIdentityCard`, `AvatarCropper`, `OwnerProfilePage`, `MemberProfilePage`, `ProfileSettingsPage` | Identity card/avatar shared; settings kendi modal/focus yönetimine sahip |
| Public content | `PlatformContentPage`, `contentApi.ts` | Terms/privacy/guidelines/support tek güvenli renderer'ı paylaşır |
| RoomCard | `src/rooms/RoomCard.tsx`, `src/styles/room-card.css`, `src/components/feedback/Feedback.tsx` | Shared public/live kart gerçek `Room` tipini tüketir; Discover migrate edildi, Home integration'ı Wave 07'ye aittir |

Tekrarlanan kalıplar refactor edilmeden işaretlendi:

- Button varyant class'ları (`primary-action`, `secondary-action`, `danger-action`, `text-action`) shared component olmadan çok sayıda page/component içinde inline kullanılıyor.
- Inline loading markup'ı Admin, Friends, Profile, Platform Content, Room ve Blocked Accounts içinde tekrar ediyor.
- Empty/error markup'ı Discover, Friends, Messages, Room, Admin, Social Rail ve DM bileşenlerinde dağınık.
- `getInitials` hem `AppShell.tsx` hem `DiscoverShellPage.tsx` içinde ayrı tanımlı.
- `RoomInviteCard`, `ProfileIdentityCard`, DM list/composer ve relationship actions gerçek shared component örnekleridir; migration sırasında korunmalıdır.

### 6. CSS katmanı, token ve responsive baseline

`src/styles.css` import sırası: `tokens.css` → `base.css` → `shell.css` → `primitives.css` → `forms.css` → `feedback.css` → `pages.css` → `room.css` → `admin.css` → `responsive.css`.

| Dosya | Mevcut sorumluluk |
|---|---|
| `tokens.css` | Font, renk, spacing, container, radius, shadow, focus, motion ve z-index custom property'leri |
| `base.css` | Box sizing, root/body, global focus-visible, disabled state ve reduced motion |
| `shell.css` | Topbar/nav/account/main masthead/footer/auth gate/not-found shell |
| `primitives.css` | Surface panel, badge, status, dialog/overlay temel stilleri |
| `forms.css` | Action button class'ları, input/form, auth ve create-room düzenleri |
| `feedback.css` | Loading, skeleton, banner, error/success feedback ve animation |
| `pages.css` | Home/Discover/profile/settings/friends/social rail/messages/content stilleri |
| `room.css` | Room/player/chat/presence/host/moderation ve Room responsive/motion |
| `admin.css` | Admin console/sidebar/toolbar/list/detail/table ve responsive kuralları |
| `responsive.css` | Global 1040/960/760/480 breakpoint override'ları ve mobil Social Rail |

Custom property ve görsel değer taraması:

- Tanımsız kullanımlar: `--text-muted` (`pages.css:1288`), `--color-bg-base` (`pages.css:1453,1530`), `--radius-lg` (`pages.css:1533,1609`), `--shadow-lg` (`pages.css:1610`), `--warning-text` (`pages.css:1293`, yalnız bu kullanımda fallback var).
- `--font-size-display`, `--font-size-heading`, `--font-size-title` `tokens.css`te tanımlanır ve `responsive.css` media bloklarında bilinçli override edilir.
- Token dosyası dışındaki hard-coded renkler: `pages.css:1258` rgba white background, `1259` rgba white border, `1293` `#f7c66f` fallback, `1597` `rgba(4, 7, 18, 0.72)` backdrop.
- Mevcut palette hedef tasarım sözleşmesiyle aynı değildir (`--color-bg #0d0f10`, `--color-accent #e65b4f`; hedef değerler Wave 01'e aittir). Wave 00 bunları değiştirmedi.
- Kontrast baseline'ı: text/bg 16.93:1, muted/bg 9.12:1, text/surface 15.72:1, muted/surface 8.47:1, accent-contrast/accent 5.39:1. `--color-text-disabled` / bg 4.07:1 olduğundan normal boyutta anlam taşıyan disabled copy için WCAG AA riskidir. `--color-bg-base` tanımsız olduğu için accent-soft DM bubble text rengi inheritance'a kalabilir; görsel QA gerekir.
- Breakpoint'ler: 1040px (shell/admin/social rail), 960px (create/room/settings grid), 760px (ana mobil dönüşüm, Room/Admin/Social), 480px (dar ekran action/grid).
- `html` ve `body` `min-width: 320px` ve `overflow-x: clip` kullanır. Bu taşmayı görünmez kılabilir; 320/375/480/760/960/1040/1440 viewport manual QA'sı gerekir.
- Global focus-visible outline + shadow sağlar. Settings delete dialog initial focus, Escape ve Tab trap uygular. `ReportDialog` `role=dialog`/`aria-modal` kullanır fakat initial focus, Escape, focus trap/restore source baseline'da görülmedi. Diğer destructive aksiyonların çoğu native `window.confirm` kullanır.
- Global reduced motion animation/transition duration'larını `0.01ms`e indirir; feedback ve Room animation'ları ayrıca yalnız `prefers-reduced-motion: no-preference` altında açılır.

### 7. State ve rol baseline'ı

| State/rol | Gerçek UI sahipleri |
|---|---|
| Guest | Home/Discover/public content/public profile; Create/Room/Friends/Profile/Settings/Admin `AuthRequiredGate`; Messages explicit gate eksik |
| Member | Global account/friends/social actions; create/profile/settings/friends/messages; Room participant akışı |
| Host | `RoomShellPage` içindeki `isHost`; playback, invite, moderation, close/leave/end |
| Admin | `AppShell` admin linki + `AdminShellPage` role gate; backend `adminOnly = authenticate + requireActiveAccount + requireAdmin` |
| Initial loading | Root Suspense `LoadingState`; auth check; Discover skeleton; Room join/load; profile/settings/content/admin/social inline loaders |
| Refresh/local loading | Discover load-more, Friends refresh/load-more, Admin action state, Social Rail quiet refresh, DM send/delete/read/delivery |
| Empty | Discover no-live/no-results, Friends list/filter, DM conversation/message, Room chat/participant, Admin list/detail, Social Rail |
| Error | Root `ErrorBoundary`; `ApiClientError` mapping; page/section `form-error`, `state-banner`, retry/reload |
| Denied/unavailable | Auth gates, admin denied, profile unavailable, unpublished content, feature disabled, Room ended/full/banned/private/password/player-unavailable |
| Offline/reconnecting | Room socket status + realtime banner; Social Rail `stale`; DM hooks HTTP list/message refresh callbacksıyla reconcile olur |
| Mobile | Global responsive layer + Room/Admin/Social media blokları; gerçek cihaz/browser QA bekliyor |
| Keyboard/focus | Global focus-visible; settings dialog trap; native confirms; ReportDialog gap kayıtlı |
| Reduced motion | Global reduce override + no-preference-only feedback/Room animations |

### 8. Korunacak REST/auth contract baseline'ı

| Aile | Frontend sahibi | Backend sahibi ve authoritative gate |
|---|---|---|
| API transport | `src/lib/api.ts` | Cookie credentials; mutation öncesi `/api/auth/csrf`; `X-CSRF-Token`; success/error envelope |
| Auth | `AuthContext.tsx`, `AuthPage.tsx` | `routes/auth.ts`; signup/login/reset/logout public mutation, `/auth/me` authenticated |
| Discover/categories | `roomApi.ts` | Categories public; `GET /discover/rooms` optional auth ve public/live policy |
| Room | `roomApi.ts`, `RoomShellPage.tsx` | Access-check optional auth; get/join/password/messages/close/leave active account; moderation ayrı route |
| Profile/settings/avatar | `profileApi.ts` | Public profile optional auth; own/settings auth; mutations active-account/auth ve social flag |
| Social/invites/presence | `socialApi.ts` | `SOCIAL_ENABLED`, authenticated reads, gerekli mutations active-account |
| Direct messages | `socialApi.ts`, DM components | `DIRECT_MESSAGES_ENABLED` ayrıca `SOCIAL_ENABLED=true`; friends-only backend enforcement |
| Content | `contentApi.ts`, `PlatformContentPage.tsx` | Public published content |
| Admin | `adminApi.ts`, `AdminShellPage.tsx` | Bootstrap hariç `adminOnly`, global CSRF mutation hook ve audit davranışı |

Backend'de `GET /api/admin/operations`, `POST /api/admin/operations/reconcile`, `POST /api/admin/jobs/:jobId/retry` vardır; mevcut `adminApi.ts` ve `AdminShellPage.tsx` bu endpoint'leri tüketmiyor. Canonical/AI status ile gerçek frontend arasında migration riski olarak kaydedildi, Wave 00'da değiştirilmedi.

### 9. Realtime event ve reconcile baseline'ı

Tek frontend socket factory `rooms/realtimeClient.ts` üzerinden `/realtime` namespace'ine bağlanır; Room, Social Rail ve DM aynı typed event ailesini tüketir.

| Event ailesi | Server→client | Client→server | UI/reconcile sahibi |
|---|---|---|---|
| Connection | `connection.ready`, `connection.error`, native connect/disconnect/error | — | Room socket status; Social Rail stale/ready |
| Room lifecycle | `room.state.snapshot`, `room.subscription.ready/closed`, `room.ended`, `room.access.revoked` | `room.subscribe`, `room.unsubscribe` | `RoomShellPage`; reconnect subscribe ack + snapshot |
| Presence | `room.presence.updated`, `room.user.joined/left` | — | `RoomShellPage`; participant snapshot/update |
| Playback | `playback.state.updated` | `playback.state.set` | `RoomShellPage` + `YouTubeRoomPlayer`; host authority |
| Chat/moderation | `chat.message.created`, `moderation.action.applied`, `access.feedback` | `chat.message.send` | `RoomShellPage`; dedupe/access feedback |
| Social | `presence.friends.snapshot`, `presence.friend.updated`, `relationship.invalidated`, `notification.invalidated` | — | `SocialRail`; quiet HTTP refresh |
| DM | `dm.message.created`, `dm.delivery.updated`, `dm.read.updated`, `dm.typing.updated`, `dm.conversation.deleted` | `dm.delivery.ack`, `dm.read.advance`, `dm.typing` | DM hooks/list/pages; HTTP refresh reconcile |

Backend üretim sahipleri `realtime.ts`, `rooms/room-realtime-bus.ts`, `social/social-realtime-bus.ts` ve `social/direct-message-realtime-bus.ts`tir. Playback state in-memory kalır; REST/auth/database sözleşmesi Wave 00'da değişmedi.

### 10. Migration risk kaydı ve Wave 01 güvenlik sınırı

1. Backend full Vitest baseline kırık: eski Wave46 contract testi arşivlenmiş QA dosyasını yanlış path'te arıyor. Tasarım migration'ından önce ayrı focused fix/onay gerekir.
2. Canonical Room shell exclusion henüz gerçek değildir; `/room` global topbar/masthead/footer içinde kalır. Yalnız ilgili shell/Room Wave'inde düzeltilmelidir.
3. `/messages` frontend explicit member gate taşımıyor; backend auth hatası UI error'a dönüşüyor. Auth davranışı değiştirilmeden ilgili Messages Wave'inde ele alınmalıdır.
4. Wave 00 baseline'ında CSS'te tanımsız tokenlar, eski foundation palette değerleri ve disabled-text riski vardı. Wave 01 implementation'ı tanımsız custom property referanslarını ve eski foundation palette değerlerini kapattı; canonical disabled tokenı korundu ve normal text tokenları otomatik WCAG AA kontrat testinden geçti. Staging/manual QA 2026-07-20 tarihinde kullanıcı onayıyla tamamlandı.
5. Home'daki statik `preview-live-pill`, “Play” işareti ve host-led preview gerçek API verisi değildir; fake live activity algısı riski olarak Home Wave'ine bırakıldı.
6. `ProfileIdentityCard` “Presence will appear...” placeholder copy'si mevcut social/presence durumuyla stale olabilir; Profile Wave'inde canonical ile karşılaştırılmalıdır.
7. `ReportDialog` modal focus/escape/restore açığı Wave 02 shared overlay primitive migration'ıyla source düzeyinde kapatıldı; staging keyboard QA kanıtı `tests/wave02-tests.md` üzerinden bekleniyor.
8. `RoomShellPage` ve `AdminShellPage` çok büyük monolitlerdir; Wave 25 consolidation işi erkene alınamaz.
9. `overflow-x: clip` gerçek taşmayı maskeleyebilir. Viewport manual QA kanıtı olmadan “overflow yok” kabul edilmez.
10. Home/Discover shared gerçek RoomCard sahipliğini kullanır; Home integration Wave 07 kapsamında tamamlandı ve kullanıcı kabulüyle QA-closed oldu.
11. Room report details alanı canonical flow ve backend schema'da opsiyoneldir; Social `ReportDialog` alanı Wave 02 öncesinden beri required tutar. Kullanıcı mevcut iki akışı Wave 02 QA'sında non-blocker kabul etti; ilgili ürün davranışı Wave 02 kapsamında değiştirilmedi.

### 11. Wave 00 QA kapanışı — 2026-07-18

- Kullanıcı `tests/wave00-tests.md` içindeki Wave 00 testlerinin geçtiğini ve blocker bulunmadığını açıkça onayladı.
- Bütün uygulanabilir Wave 00 implementation, state/rol, automatic validation, manual QA, debug ve exit maddeleri kapatıldı; görsel implementation maddeleri N/A kaldı.
- Ürün kodu, component, style, backend, database, API, auth veya realtime davranışı değiştirilmedi.
- `tests/TestOldPlan/` önceki planların bilinçli tarihsel test arşividir; yeni Design Wave testleri doğrudan `tests/` altında kalır.
- Bu baseline Wave 01 için doğrulanmış girdi sağlar fakat Wave 01'i başlatma yetkisi vermez. Codex Wave 01'e başlamadan durmuştur.

### 12. Wave 01 yerel implementation — 2026-07-18

- `Vibe frontend/src/styles/tokens.css` canonical Hall `#090A0F`, üç mat surface, text, border, `#FF625A` accent, semantic state, spacing, container, radius, shadow, glass, motion, focus ve z-index ailelerinin tek merkezi kaynağı hâline getirildi.
- Mevcut ekran tüketicileri için yalnız build-stable semantic alias katmanı korundu; legacy normal-surface glass aliasları mat surface tokenlarına bağlandı. Gerçek transient glass ailesi ayrı tutuldu.
- Manrope `600/700` ve Inter `400/500/600`, kullanıcı onayıyla `@fontsource` latin-ext self-hosted assetleri olarak eklendi. Başlıklar Manrope, global interface/body Inter ve güvenli system fallback kullanır.
- `base.css` global heading, focus ve token-driven reduced-motion foundation'ını; `responsive.css` tablet/mobile/compact typography ve gutter aliaslarını tüketir. `index.html` theme-color `#090A0F` ile hizalıdır; logo/favikon tasarımı değiştirilmedi.
- Yeni `Vibe frontend/tests/wave01-token-contract.test.ts` exact palette, typography, spacing, border, glass, shadow, radius, motion, focus, z-index, normal-text WCAG AA, theme-color, eski palette ve undefined/self-referencing custom property sınırlarını doğrular.
- Final yerel doğrulama: frontend typecheck geçti; build geçti (98 module, CSS 76.19 kB / gzip 12.88 kB); Vitest 3 dosya 17/17 geçti, Wave 01 kontratı 7/7 geçti.
- `tests/wave01-tests.md` oluşturuldu ve 2026-07-20 tarihinde kullanıcı tarafından staging/manual QA ile tamamlandı. Blocker bildirilmedi; Wave 01 QA-closed oldu.

### 13. Wave 01 QA kapanışı — 2026-07-20

- Kullanıcı `tests/wave01-tests.md` içindeki staging/browser testlerini tamamladığını ve Wave 01'in kapatılmasını açıkça onayladı.
- Home, Discover, Auth, Room, Own Profile ve Admin başlangıç yüzeyleri; guest/member/host/admin ile loading/empty/error/denied/reconnecting state'leri; font loading/fallback; focus/keyboard; normal/reduced motion; responsive/overflow; contrast ve asset failure sınırları blocker olmadan geçti.
- Primary action focus halkası görünür ve işlevsel bulundu. Kullanıcının tonun tam nar çiçeği gibi algılanmadığı gözlemi non-blocker olarak QA kaydında korundu; ileride ilgili kontrol/görsel polish Wave'inde canonical focus tokenı bozulmadan yeniden gözlemlenecek.
- Frontend final doğrulaması typecheck/build ve 3 dosyada 17/17 Vitest; Wave 01 token contract testi 7/7 olarak geçti.
- `Design_Wave_Plan.md` Wave 01 checklist, debug, exit ve sonuç bölümleri; plan metadata'sı ile `ai/` durum belgeleri kapanışa göre hizalandı.
- Backend, database, API, auth, realtime, route veya component davranışı değiştirilmedi. Wave 02 yalnız sıradaki Wave olarak kaydedildi; implementation'ı başlatılmadı.

### 14. Wave 02 yerel implementation — 2026-07-20

- `src/components/ui/` altında canonical Button/IconButton, FormField ve field ailesi, Avatar, izinli Badge/StatusIndicator, Surface/Panel ve Modal/SidePanel/Drawer/BottomSheet/PopoverMenu primitive'leri oluşturuldu.
- Ortak kontroller canonical 36/44/48 px control ve 44 px hit-area tokenlarını; avatarlar 24/32/40/48/112 px boyut ailesini tüketir. Normal yüzeyler mattır; glass yalnız transient overlay/menu katmanında kullanılır.
- Overlay altyapısı portal, dialog semantics, initial focus, Tab/Shift+Tab trap, Escape, dış tıklama, nested body scroll lock, güvenli focus restore, cleanup ve viewport-clamped popover keyboard sözleşmelerini ortaklaştırır.
- `ReportDialog` ve account deletion dialog ortak Modal/FormField/Button primitive'lerine; shell, profile, social ve room içindeki uygun kimlik yüzeyleri ortak Avatar'a taşındı. API, backend, database, auth, realtime ve route sözleşmeleri değiştirilmedi.
- `tests/wave02-tests.md` manual QA dosyası ve `Vibe frontend/tests/wave02-primitives.test.tsx` focused contract paketi eklendi. Final yerel doğrulama: frontend typecheck geçti; build geçti (108 module, CSS 82.92 kB / gzip 14.08 kB, JS 418.57 kB / gzip 120.97 kB); Vitest 4 dosya 31/31 geçti, Wave 02 focused testleri 14/14 geçti.
- Wave 02 yerel implementation ve automatic validation aşaması bu kayıtla tamamlandı; staging/browser kapanışı aşağıdaki QA kaydında belgelenmiştir.

### 15. Wave 02 QA kapanışı — 2026-07-20

- Kullanıcı `tests/wave02-tests.md` içindeki desktop/mobile, guest/member/host/admin, control/form, avatar/status/surface, overlay, keyboard/focus, reduced-motion, responsive/overflow ve regression senaryolarını tamamladı; blocker bildirilmedi.
- Room report details alanının opsiyonel, Social `ReportDialog` alanının required olması Wave 02 öncesi davranış farkı ve non-blocker olarak kaydedildi. Account deletion modalının aktif request sırasında source sözleşmesiyle dismiss edilemediği, başarılı lifecycle sonunda kapanmasının beklenen davranış olduğu doğrulandı.
- Kapanış retest'i frontend typecheck/build ve 4 dosyada 31/31 Vitest olarak geçti; focused Wave 02 primitive suite'i 14/14 kaldı.
- Wave 02 kullanıcı kabulüyle QA-closed oldu. Backend, database, API, auth, realtime, route veya capability değiştirilmedi; Wave 03 başlatılmadan Codex durdu.

### 16. Wave 03 yerel implementation — 2026-07-20

- `Vibe frontend/src/components/feedback/` altında token-driven SkeletonBlock/SkeletonText, RoomCard/UserRow/Message skeleton'ları, 16:9 MediaPlaceholder, InlineLoader/ButtonLoadingState, EmptyState, Inline/Section/PageError, RetryAction, ConnectionBanner, ActionFeedback ve tek global ToastProvider oluşturuldu.
- `Vibe frontend/src/lib/errorMapping.ts`, `ApiClientError.code` değerlerini authentication, permission, validation, room-state, network, feature, rate-limit, conflict ve unknown güvenli mesaj ailelerine eşler; raw HTTP/Prisma/socket/internal detay UI'a taşınmaz.
- `@phosphor-icons/react@^2.1.10` canonical state/feedback ikon bağımlılığı olarak eklendi. State ikonları metin ve semantik rolün yerine geçmez; ikinci bir icon sistemi oluşturulmaz.
- Discover, Friends, Messages/DM, profile/settings, social, admin, auth, platform content, create-room/report/avatar ve yalnız generic Room initial-loading yüzeyleri semantik olarak uygun ortak primitive'lere taşındı. Refresh/reconnect sırasında mevcut içerik korunur; full-page spinner yalnız kısa root bootstrap istisnasıdır.
- `tests/wave03-tests.md` manuel QA kaydı ve `Vibe frontend/tests/wave03-feedback-system.test.tsx` focused contract paketi eklendi. Final yerel doğrulama: frontend typecheck geçti; build geçti (4654 module, CSS 89.41 kB / gzip 14.96 kB, JS 448.14 kB / gzip 130.28 kB); Vitest 5 dosyada 48/48, Wave 03 focused testleri 17/17 geçti.
- Backend, database, API, auth, realtime, route ve Room-specific lifecycle/snapshot/reconcile davranışları değiştirilmedi. Wave 03 staging/browser QA ve kullanıcı onayı beklediği için QA-closed değildir; Wave 04 kilitlidir.

### 17. Wave 03 QA kapanışı — 2026-07-20

- Kullanıcı `tests/wave03-tests.md` içindeki guest/member/host/admin, desktop/tablet/mobile, loading/empty/error, offline/reconnect, retry, toast, keyboard/screen-reader, reduced-motion ve regression senaryolarını tamamladı; blocker bildirilmedi.
- Discover RoomCard/skeleton yoğunluğunun System States Board'a göre büyük algılanması non-blocker olarak kaydedildi. Wave 03 skeleton'ı mevcut gerçek kart geometrisini korur; final RoomCard ölçüsü, yoğunluğu ve ortak anatomisi canonical Wave 06'nın sorumluluğundadır.
- Kapanış retest'i frontend typecheck/build ve 5 dosyada 48/48 Vitest olarak geçti; focused Wave 03 feedback suite'i 17/17 kaldı.
- Wave 03 kullanıcı kabulüyle QA-closed oldu. Backend, database, API, auth, route, realtime state makinesi ve Room lifecycle/reconcile davranışı değiştirilmedi; Wave 04 başlatılmadan Codex durdu.

### 18. Wave 04 yerel implementation — 2026-07-20

- Mevcut custom router korunarak her route'a `home`, `app`, `utility`, `admin` veya `room` shell metadata'sı verildi. Yeni route eklenmedi; primary navigation yalnız mevcut Home, Discover ve Create Room hedeflerini kullanır ve aktif durum route metadata'sından türetilir.
- `AppShell` route-aware hale getirildi: Home desktop header'ı yaklaşık 72 px, normal uygulama header'ı yaklaşık 64 px'tir. Auth bootstrap nötr placeholder gösterir; guest Log in/Sign up aksiyonlarını, member gerçek avatar/isim/username ve Social erişimini görür. Profil menüsü Wave 02 `PopoverMenu` primitive'iyle Profile, Settings, koşullu Admin ve Logout davranışlarını taşır.
- Desktop Social Rail, gerçek `getNotificationSummary` verisiyle collapsed/expanded sunulur; açık/kapalı tercihi local storage'da korunur ve özet/panel hataları shell'den izole edilir. Sabit sahte sayaç, sahte avatar veya sahte social state eklenmedi.
- Room route'u global header, Social Rail, docked conversation ve profil menüsü dahil shell-owned yüzeyleri render etmez. Mobile/tablet navigation Wave 05'e bırakıldı; backend, database, API, auth ve realtime davranışı değiştirilmedi.
- `tests/wave04-tests.md`, `Vibe frontend/tests/wave04-shell-navigation.test.tsx` ve ilgili mevcut Social Rail E2E senaryoları güncellendi. Final yerel doğrulama: frontend typecheck geçti; build geçti (4654 module, CSS 92.48 kB / gzip 15.62 kB, JS 487.14 kB / gzip 140.16 kB); Vitest 6 dosyada 60/60, Wave 04 focused testleri 12/12 ve Chromium E2E 3/3 geçti.
- Bu yerel implementation kaydı yazıldığında Wave 04 staging/browser manuel QA ve açık kullanıcı onayı bekliyordu; kapanış sonucu aşağıdaki 2026-07-23 tarihli QA kaydında belgelenmiştir.

### 19. Wave 04 QA kapanışı — 2026-07-23

- Kullanıcı `tests/wave04-tests.md` içindeki guest/member/host/admin, 1440px/1280px/1041px desktop, Home/app header, profile menu, Social Rail collapsed/expanded, gerçek count, loading/empty/error/reconnect, Room shell exclusion, keyboard/focus, reduced-motion ve regression senaryolarını tamamladı; blocker ve non-blocker bildirilmedi.
- Kullanıcının serbest biçimli `[ x]` ve `[x ]` işaretlerinin tamamlandı anlamına geldiği açıkça doğrulandı; QA kaydı standart `[x]` biçimine normalize edildi ve kullanıcı Wave 04'ün geçtiğini/onaylandığını belirtti.
- Kapanış retest'i frontend typecheck/build ve 6 dosyada 60/60 Vitest olarak geçti; focused Wave 04 shell/navigation suite'i 12/12 ve Chromium Social Rail/Room E2E paketi 3/3 kaldı.
- Wave 04 kullanıcı kabulüyle QA-closed oldu. Backend, database, API, auth, route, realtime state makinesi ve Room lifecycle davranışı değiştirilmedi; Wave 05 başlatılmadan Codex durdu.

### 20. Wave 05 implementation ve QA kapanışı — 2026-07-23

- `Vibe frontend/src/components/AppShell.tsx` Wave 04 route metadata'sını tek kaynak olarak tüketen responsive shell seçimine geçirildi. Desktop `1041px+`, tablet `640–1040px`, mobile `<640px` sınırlarında desktop header/rail ile responsive header/menu aynı anda interaktif veya screen-reader görünür olmaz.
- Mobil minimal header yaklaşık 60px token/safe-area karakterinde menu tetikleyicisi, sakin Vibehall/page context alanı ve yalnız tablet member route'larında gerçek notification summary kullanan Social tetikleyicisi taşır. Tam menu guest/member/admin görünürlüğünü mevcut Home, Discover, Create Room, Friends, Messages, Invites, People You Watched With, Blocked, Profile, Settings, Support, Admin ve Logout yollarına bağlar.
- Mobil menu ile tablet Social Drawer Wave 02 `Drawer` primitive'ini kullanır; focus trap, Escape, backdrop/outside-close, body scroll lock, connected-trigger focus restore ve viewport scroll davranışı ortak overlay sahipliğinde kalır.
- `Vibe frontend/src/social/SocialRail.tsx` benzersiz id/title bağlarını ve yalnız drawer modunda feature-aware gerçek social destination shortcut'larını kabul eder. Desktop rail davranışı değişmedi; tablet drawer mevcut SocialRail data/state/realtime içeriğini yeniden kullanır.
- `Vibe frontend/src/styles/shell.css` responsive header/menu/drawer, safe-area, 44px touch target ve overflow sınırlarını; `src/styles/pages.css` tablet social destination shortcut sunumunu taşır. Kalıcı header mattır, glass yalnız transient Drawer yüzeyinde ortak primitive'den gelir.
- Room route'u AppShell early return ile mobile header, menu, tablet Drawer, desktop rail, docked conversation ve footer dahil bütün global shell yüzeylerinden arındırılmış kalır. Utility/Admin içerik layout'ları, Home/Discover/Auth/Profile/Social/Messages iç kompozisyonları ve Room mobile düzeni değiştirilmedi.
- Yeni otomatik kanıtlar: `Vibe frontend/tests/wave05-responsive-shell.test.tsx` 12/12 ve `Vibe frontend/e2e/wave05-responsive-shell.spec.ts` Chromium 4/4. Final frontend typecheck/build ve tam Vitest paketi 7 dosyada 72/72 geçti; build mevcut 500kB chunk uyarısını korur.
- `tests/wave05-tests.md` staging/manual QA kaydı kullanıcı tarafından blocker olmadan tamamlandı. Wave 05 kullanıcı kabulüyle QA-closed oldu; Wave 06 başlatılmadı. Backend, database, API, auth, realtime veya custom router kontratı değişmedi.

### 21. Wave 06 yerel implementation — 2026-07-23

- `Vibe frontend/src/rooms/RoomCard.tsx` mevcut `Room` tipini doğrudan tüketen tek public/live RoomCard sahibidir. Gerçek title/category/host/avatar/Live/participant/capacity/nearly-full alanlarını, tek accessible button ve mevcut `/room?roomId=<id>` custom-router hedefini kullanır; join mutation veya ikinci frontend room modeli eklemez.
- `Vibe frontend/src/styles/room-card.css` `16:9` medya, neutral loading/error fallback, thumbnail'in blur/karartılmış kopyasından statik aura, yaklaşık 4px desktop lift, kontrollü thumbnail zoom, mobile visible entry affordance ve reduced-motion kapanışını tek shared stil sahipliğinde taşır. Component tokenları `tokens.css` içindedir; kalıcı card mattır, mor accent kullanılmaz.
- `DiscoverShellPage.tsx` inline kart/helper/selector sahipliğinden shared RoomCard tüketicisine geçirildi. Search, category, sort, cursor/load-more, quiet refresh, empty/error copy ve Room route/gate davranışı değiştirilmedi. Home integration'ı Wave 07'ye bırakıldı.
- Wave 03 `RoomCardSkeleton`, gerçek kartın aynı aspect tokenı ve metadata/title/host/footer yoğunluğuna hizalandı. Yeni focused kanıtlar `tests/wave06-room-card.test.tsx` 9/9 ve `e2e/wave06-room-card.spec.ts` Chromium 2/2'dir.
- Final yerel doğrulama: frontend typecheck geçti; production build geçti (4655 module, CSS 101.16 kB / gzip 16.90 kB, JS 514.27 kB / gzip 145.73 kB); tam Vitest paketi 8 dosyada 81/81 geçti. Build mevcut 500 kB chunk uyarısını korur.
- `tests/wave06-tests.md` oluşturuldu. Bu yerel implementation kaydı yazıldığında staging/manual QA ve açık kullanıcı onayı bekliyordu; kapanış aşağıdaki QA kaydında belgelenmiştir. Backend, database, API, auth, realtime ve route kontratları değiştirilmedi.

### 22. Wave 06 QA kapanışı — 2026-07-23

- Kullanıcı `tests/wave06-tests.md` içindeki gerçek/missing/failed thumbnail, gerçek Room verisi, aura/fallback, desktop hover/focus, mobil tap, reduced-motion, guest/member/host, accessibility, overflow ve regression senaryolarını tamamladı; blocker bildirilmedi.
- Kullanıcının serbest biçimli `[ x]`, `[x ]` ve `[x]` işaretlerinin tamamlandı anlamına geldiği doğrulandı; 85 manuel QA maddesi standart `[x]` biçimine normalize edildi ve sonuç `Geçti` olarak kaydedildi.
- Kapanış kanıtı frontend typecheck/build, tam Vitest 81/81, focused Wave 06 suite'i 9/9 ve Chromium E2E 2/2 olarak kaldı; ürün kodu manuel QA kapanışında değiştirilmedi.
- Wave 06 kullanıcı kabulüyle QA-closed oldu. Backend, database, API, auth, realtime ve route kontratları değiştirilmedi; Wave 07 başlatılmadan Codex durdu.


### 23. Wave 07 yerel implementation — 2026-07-23

- Vibe frontend/src/pages/HomeShellPage.tsx ilk Home viewport'unu tek h1, canonical copy, Enter the hall ve auth-aware Open a room CTA'larıyla kurar. Guest güvenli auth return intent, member /create-room; ana CTA /discover hedefini kullanır.
- Home live-room yüzeyi yalnız mevcut listPublicRooms limit 6 kontratını tüketir, server sırasını korur, public/live savunma filtresi uygular ve Wave 06 RoomCard ile render eder. Request sequence guard unmount/retry/geç-response yarışını engeller; yeni endpoint, room tipi veya realtime socket yoktur.
- Initial loading RoomCardSkeleton, no-room EmptyState, fetch error/retry SectionError ile lokal kalır. Home hero ve CTA'lar bu state'lerde kullanılabilir kalır.
- Vibe frontend/public/images/vibehall-home-hall.webp prompt içindeki onaylı kompozisyon ve canonical coral palette temel alınarak üretilmiş dekoratif, metinsiz 1792×896 WebP asset'idir; 67,936 bayttır ve explicit ölçü/eager/high-priority ile layout/LCP sınırını korur. RoomCard medyası lazy kalır.
- AppShell yalnız Home route'unda generic page masthead'i kaldırır; Home kendi tek hero h1'ini taşır. Diğer route masthead ve custom-router davranışı değişmez.
- Otomatik kanıt: frontend typecheck/build geçti; tam Vitest 9 dosyada 87/87, tests/wave07-home.test.tsx 6/6 ve e2e/wave07-home.spec.ts Chromium 4/4 geçti. Build önceki 500 kB chunk uyarısını korur.
- `tests/wave07-tests.md` staging/manual QA ve kullanıcı kabulüyle 2026-07-23 tarihinde kapandı. Backend, database, REST, auth, realtime ve route kontratları değiştirilmedi; Wave 08 başlatılmadı.

### 24. Wave 07 QA kapanışı — 2026-07-23

- Kullanıcı `tests/wave07-tests.md` kapsamını tamamladığını, blocker kalmadığını ve Wave 07 kapanışını açıkça onayladı; QA dosyasındaki toplam 85 madde standart `[x]` olarak kaydedildi ve sonuç `Geçti` oldu.
- Manuel QA sırasında member Social Rail genel `.main-surface` sol margin değerini sabitleyerek Home ve Discover içeriğini sola yaslıyordu. `shell.css`, aktif rail genişliğini kullanılabilir desktop alandan düşürüp ana yüzey/footer alanını kalan bölgede ortalayacak biçimde düzeltildi; guest geometrisi ve sidebar davranışı korundu.
- Kapanış doğrulaması frontend typecheck/build, tam Vitest 87/87, focused Wave 07 unit 6/6, Wave 07 Chromium E2E 4/4, Wave 05 responsive shell E2E 4/4 ve Wave 38 Social Rail E2E 3/3 olarak geçti. Mevcut 500 kB üzeri chunk uyarısı blocker değildir.
- Backend, database, REST API, auth, realtime ve route kontratları değiştirilmedi. Wave 07 QA-closed oldu; Wave 08 yalnız sıradaki Wave olarak kaydedildi ve başlatılmadan Codex durdu.

### 25. Wave 08 yerel implementation — 2026-07-23

- `Vibe frontend/src/pages/DiscoverShellPage.tsx` tek page-owned Discover h1, tek shared-form query toolbar, URL `search`/`categorySlug`/`sort` hydration ve browser history sync, 320 ms bounded search debounce, request-sequence stale-response guard ve mevcut `DiscoverRoomsInput/Result` kontratını kullanan query sahipliğine geçirildi.
- Category kaynağı yalnız mevcut `/categories` endpoint'idir. `All` ve gerçek aktif kategorileri gösteren shortcut row aynı `categorySlug` state'ini dropdown ve URL ile çift yönlü paylaşır; mobilde kendi içinde yatay kayar ve seçili chip görünür alanda kalır. Geçersiz category/sort URL değerleri backend'e gönderilmeden güvenli varsayılana düşer; room, category ve load-more hataları birbirini devirmeyen ayrı lokal state sahipleridir.
- Public/live sonuçlar Wave 06 shared RoomCard ile semantik list/grid içinde render edilir. Controlled cursor load-more mevcut kartları korur, duplicate id eklemez ve failure/retry alt bölümde kalır. Discover kart seçimi yalnız mevcut `/room?roomId=<id>` handoff'unu üretir; join/auth/password/access kararı Discover'a taşınmaz.
- Initial RoomCardSkeleton, quiet refresh, no-live/no-search/no-filter empty state'leri, safe error/retry, result/load-more polite announcement, responsive 1–4 kolon grid, 44 px touch/focus ve reduced-motion sınırları tamamlandı. Trending, tags, global search, verified, hard-coded count ve yardımcı sağ panel eklenmedi.
- `Vibe frontend/tests/wave08-discover.test.tsx` 8/8 ve category shortcut senkronu dahil `Vibe frontend/e2e/wave08-discover.spec.ts` Chromium 5/5 geçti. Final frontend typecheck/build ve tam Vitest paketi 10 dosyada 95/95; Wave 05/06/38 regresyon E2E paketi 9/9 geçti. Build önceki 500 kB chunk uyarısını korur.
- `tests/wave08-tests.md` staging/browser manuel QA kaydı oluşturuldu. Backend, database, REST API, auth, realtime, route veya dependency değiştirilmedi. Kapanış durumu aşağıdaki QA kaydında belgelenmiştir.

### 26. Wave 08 QA kapanışı — 2026-07-24

- Kullanıcı `tests/wave08-tests.md` içindeki staging, guest/member/host, query/history, category shortcut, loading/empty/error, pagination, responsive, keyboard, screen-reader, reduced-motion ve regression senaryolarını tamamladığını; category chip row'un sorunsuz çalıştığını ve blocker bulunmadığını açıkça onayladı.
- Kullanıcının serbest biçimli `[x ]`, `[ x]` ve `[x]` işaretlerinin tamamlandı anlamına geldiği doğrulandı; bütün QA checkbox'ları standart `[x]` biçimine normalize edildi ve sonuç `Geçti` olarak kaydedildi.
- Kapanış kanıtı frontend typecheck/build, tam Vitest 95/95, focused Wave 08 suite 8/8, Wave 08 Chromium E2E 5/5 ve shell/RoomCard/Social Rail regresyon E2E 9/9 olarak geçti. Mevcut 500 kB üzeri chunk uyarısı blocker değildir.
- Wave 08 kullanıcı kabulüyle QA-closed oldu. Backend, database, REST API, auth, realtime, route veya dependency değiştirilmedi; Wave 09 başlatılmadan Codex durdu.

### 27. Wave 09 yerel implementation — 2026-07-24

- `Vibe frontend/src/pages/AuthPage.tsx` dört mevcut mode'u (`login`, `signup`, `forgot`, `reset`) tek normal auth form ailesinde korur. Payload alanları ve frontend limitleri mevcut `AuthContext`, API ve backend `auth.ts` şemalarıyla eşleştirilmiştir; yeni provider, alan, session modeli veya auth davranışı eklenmemiştir.
- Wave 02 `Button`, `Input`, `FormField` ve Wave 03 `ActionFeedback`/`InlineError` primitive'leri kullanılır. Field/form/network/account-state/reset-token feedback'i ayrıdır; forgot response hesap varlığını sızdırmaz; submit ref guard hızlı ikinci request'i engeller.
- `forms.css` ve `responsive.css` auth panelini canonical mat üç-katman yüzey, coral accent, Manrope/Inter hiyerarşisi, 44px+ control, mobile single-column, focus ve reduced-motion sınırlarında tutar. Temsilî Room preview, Room Context iki-kolon kompozisyonu ve return-intent güvenlik redesign'ı Wave 10'a bırakılmıştır.
- Otomatik kanıt: frontend typecheck ve production build geçti; tam Vitest 11 dosyada 103/103, `tests/wave09-auth.test.tsx` 8/8, `e2e/wave09-auth.spec.ts` Chromium 5/5 ve Wave 05/07/08 regresyon paketi 13/13 geçti. Build önceki 500 kB chunk uyarısını korur.
- `tests/wave09-tests.md` password-manager/autofill, gerçek mobile keyboard, screen-reader/WCAG AA, tam viewport matrisi ve staging görsel karşılaştırmasıyla kullanıcı tarafından tamamlandı; kapanış aşağıdaki kullanıcı kabul kaydında belgelenmiştir.
- Backend, database, REST API, auth/session/cookie, CSRF, rate limit, reset-token, realtime, route ve dependency kodu değiştirilmedi.

### 28. Wave 09 kullanıcı QA blocker düzeltmesi — 2026-07-24

- Kök neden 1: Custom router aynı `/auth` pathname'i içinde query mode'unu değiştirirken `AuthPage` yalnız native `popstate` dinliyordu; üst shell Log in/Sign up aksiyonları URL'yi güncelliyor fakat görünür mode state'ini senkronlamıyordu. Başarılı internal navigation sonrası `vibehall:navigate` eventi yayımlanır ve `AuthPage` bu event ile login/signup/forgot/reset mode'unu senkronlar.
- Auth route'u üzerindeki shell mode değişimlerinde mevcut `returnTo` korunur; auth URL'si kendisini nested return target olarak üretmez.
- Kök neden 2: Wave 09 öncesi `.auth-panel label { display: grid }` selector'ı shared `FormField` label'ını ezerek required `*` işaretini alt satıra taşıyordu. Auth-owned override label'ı baseline hizalı `inline-flex` yapar; shared primitive değiştirilmemiştir.
- Regresyon kanıtı: typecheck/build, tam Vitest 103/103, focused Wave 09 8/8, yeni shell mode/returnTo/required hizası senaryosu dahil Chromium E2E 5/5 ve Wave 05/07/08 E2E 13/13 geçti.
- Room preview/two-column Room Context Auth Wave 10 kapsamıdır. `Stay signed in` mevcut backend session/cookie kontratında ayrı bir seçenek değildir ve Wave 09 görsel notunda temsili kabul edilmiştir; ikisi de bu düzeltmede eklenmemiştir.
- `tests/wave09-tests.md` içindeki iki etkilenen staging retest'i kullanıcı tarafından tamamlandı; kapanış aşağıdaki kullanıcı kabul kaydında belgelenmiştir.

### 29. Wave 09 QA kapanışı — 2026-07-24

- Kullanıcı Wave 09 düzenlemelerinin tamamlandığını, blocker-fix retest'lerinin geçtiğini ve Wave 09'un kapatılmasını açıkça onayladı.
- `tests/wave09-tests.md` içindeki serbest biçimli `[ x]`, `[x ]` ve `[x]` işaretleri standart `[x]` biçimine normalize edildi; sonuç `Geçti` ve durum `QA-closed / kullanıcı onaylı` olarak kaydedildi.
- Kapanış kanıtı frontend typecheck/build, tam Vitest 103/103, focused Wave 09 8/8, shell auth mode/returnTo/required hizası dahil Chromium E2E 5/5 ve Wave 05/07/08 regresyon E2E 13/13 olarak kaldı.
- İlk QA'daki shell auth mode senkronu ve required `*` label hizası blocker'ları `a73b6fb designwave09fix` sonrası kullanıcı retest'iyle kapandı.
- Room preview/two-column Room Context Auth Wave 10'a bırakıldı; `Stay signed in` ve yeni session/provider davranışı eklenmedi. Backend, database, REST API, auth/session/cookie, realtime, route ve dependency kontratları değiştirilmedi.
- Wave 09 kullanıcı kabulüyle QA-closed oldu. Aktif Design Wave yoktur; Wave 10 yalnız sıradaki Wave'dir ve başlatılmadan Codex durdu.
### 30. Wave 10 yerel implementation — 2026-07-26

- `Vibe frontend/src/lib/returnIntent.ts` auth dönüş hedefini bilinen internal Vibehall route allowlist'iyle sınırlar. Room hedefi yalnız tek ve boş olmayan `roomId` taşıyan `/room?roomId=...` biçiminde kabul edilir; missing/unknown/protocol-relative/absolute external/encoded external/duplicate veya ek keyfi Room query değerleri güvenli `/` fallback'ine düşer.
- `AuthPage.tsx` login/signup/forgot mode geçişlerinde yalnız doğrulanmış return target'ını korur. Zaten authenticated member/host Room intent'iyle auth route'una gelirse formu yeniden zorlamadan doğrulanmış Room route'una döner.
- `RoomAuthGateLayout.tsx` yalnız mevcut public `checkRoomAccess(roomId)` response'unu kullanarak gerçek title/thumbnail/host/Live/category/participant count context'i sunar. Yeni endpoint, preview modeli, join izni, password veya invite grant üretmez. Preview loading/error/retry auth submit state'inden ayrıdır; not-found/ended/full/banned/account-denied/access-denied sakin unavailable state'lere eşlenir.
- Başarılı auth sonrasında `/room?roomId=...` açılır ve mevcut `RoomShellPage` sırasıyla authenticated `getRoom`, `access/check`, private password/invite/capacity/ban/block ve join zincirini yeniden çalıştırır. Gate response'u participant/join kanıtı değildir.
- `forms.css` ve `responsive.css` canonical üç mat surface, 16:9 Room media, desktop dengeli iki kolon, 960px ve altında sıralı preview→form, safe-area/keyboard/overflow ve reduced-motion sınırlarını taşır. Wave 09 auth field/payload/autofill davranışı yeniden yazılmadı.
- Otomatik kanıtlar: frontend typecheck ve production build geçti; tam Vitest 13 dosyada 111/111, focused Wave 10 unit testleri 8/8 ve Wave 10 Chromium E2E 4/4 geçti. Wave 05 responsive shell, Wave 06 RoomCard, Wave 07 Home, Wave 08 Discover, Wave 09 Auth ve Wave 10 Gate sequential Chromium regresyon paketi 24/24 geçti. İlk parallel toplu koşumdaki tek Wave 08 category-state flake'i izole ve final sequential koşumlarda geçerek ürün regression'ı olmadığını doğruladı.
- Frontend commitleri `73f063f designwave10 secure room return intent` ve `7f4600f designwave10 add room context auth gate`tir. `tests/wave10-tests.md` staging/browser manuel QA ve kullanıcı onayıyla 2026-07-28 tarihinde QA-closed oldu.
- Backend, database, REST API, auth/session/cookie/CSRF, realtime, route ve dependency kontratları değişmedi. Wave 11 başlatılmadı.

### 31. Wave 10 QA kapanışı — 2026-07-28

- Kullanıcı `tests/wave10-tests.md` staging/browser senaryolarını tamamladığını, tüm işaretli maddelerin geçtiğini ve Wave 10'un kapatılmasını açıkça onayladı.
- Serbest biçimli `[ x]`, `[x ]` ve `[x]` işaretleri standart `[x]` biçimine normalize edildi; nihai karar `Geçti`, blocker ve açık non-blocker durumu yok olarak kaydedildi.
- Kapanış kanıtı frontend typecheck/build, tam Vitest 111/111, focused Wave 10 unit 8/8, Wave 10 Chromium E2E 4/4 ve ilgili sequential Chromium regresyon paketi 24/24 olarak kaldı.
- Backend, database, REST API, auth/session/cookie/CSRF, realtime, route ve dependency kontratları değiştirilmedi. Wave 10 QA-closed oldu; aktif Design Wave yoktur ve Wave 11 başlatılmadı.

## DESIGN_WAVE_11_LOCAL_IMPLEMENTATION_2026_07_28

- `Vibe frontend/src/pages/CreateRoomPage.tsx` mevcut room-create payload'ını koruyarak canonical Create Room akışına taşındı: YouTube-first kompozisyon, gerçek title/category/capacity/visibility/password alanları, yalnız syntactic local preflight, API category loading/error/retry, safe field/form errors ve ilk-hata focus'u eklendi.
- Submit ref guard aynı kullanıcı aksiyonundan ikinci `POST /api/rooms` üretmez. Failure değerleri korur; public başarı gerçek `room.id` ile doğrudan Room'a gider; private başarı yalnız gerçek id'den güvenli copy URL üretir ve password/grant token taşımaz.
- `forms.css` ve `responsive.css` canonical matte üç-surface sistemi, kontrollü coral accent, desktop atmosfer+ana form dengesi, mobil tek kolon, 48px CTA, safe area, keyboard scroll, görünür focus ve reduced-motion sınırlarını taşır.
- `Vibe frontend/tests/wave11-create-room.test.tsx` 8/8 ve `Vibe frontend/e2e/wave11-create-room.spec.ts` Chromium 6/6 geçti. Tam Vitest 14 dosyada 119/119; Wave 05–11 sequential Chromium regresyon paketi 30/30 geçti. Frontend typecheck ve production build geçti; mevcut 500 kB chunk uyarısı non-blocker olarak kaldı.
- `tests/wave11-tests.md` Türkçe staging/browser manuel QA, debug ve exit-gate kaydı olarak oluşturuldu. Bu yerel implementation kaydı yazıldığında Wave 11 QA-closed değildi; kullanıcı QA/onayı bekleniyordu. Kapanış aşağıdaki Wave 11 QA kapanışı bölümünde belgelenmiştir.
- Backend, database, REST API, auth/session/cookie/CSRF, rate limit, realtime, route ve dependency kontratları değiştirilmedi.
### 32. Wave 11 QA kapanışı ve thumbnail düzeltmesi — 2026-07-28

- Kullanıcı `tests/wave11-tests.md` içindeki staging/browser senaryolarını tamamladığını ve `[x]`, `[ x]`, `[x ]` biçimlerinin geçti anlamına geldiğini bildirdi. Toplam 112 mevcut QA maddesi standart `[x]` biçimine normalize edildi; blocker kalmadı ve Wave 11 kapanışı açıkça onaylandı.
- Kapanış düzeltmesinde `CreateRoomPage.tsx` frontend YouTube parser'ı mevcut backend `youtube.ts` host/path/11-karakter video-id kontratıyla hizalandı. Deterministic `https://img.youtube.com/vi/<videoId>/hqdefault.jpg` kapağı form preview'unda ve desktop atmosfer panelinde kullanılır; loading ve görsel-hata fallback'i formun kullanılabilirliğini korur.
- Gerçek video adı eklenmedi; mevcut kontratta title metadata'sı bulunmadığı için scraping, oEmbed, metadata endpoint'i, yeni provider veya backend davranışı üretilmedi.
- Final doğrulama: frontend typecheck ve production build geçti; tam Vitest 14 dosyada 119/119, focused Wave 11 unit 8/8, focused Wave 11 Chromium E2E 8/8 ve Wave 05–11 sequential Chromium regresyonu tek worker ile 32/32 geçti. İlk paralel regresyonda Wave 05 member-menu testi bir kez flake oldu; izole tekrar ve final sequential pakette geçti, Wave 05 kodu değiştirilmedi. Mevcut 500 kB üzeri chunk uyarısı non-blocker olarak kaldı.
- Frontend commitleri `3782df5 designwave11 implement create room flow`, `4b7d5c5 designwave11 add create room coverage` ve `f962de0 designwave11 add youtube thumbnail preview` olarak kaydedildi.
- Backend, database, REST API, auth/session/cookie/CSRF, rate limit, realtime, route ve dependency kontratları değiştirilmedi. Wave 11 QA-closed / kullanıcı onaylıdır; aktif Design Wave yoktur ve Wave 12 başlatılmadı.
### 33. Wave 11 final plan/AI handoff sync — 2026-07-28

- Üç authoritative plan dosyasının üst durum kayıtları Wave 00–11 QA-closed / kullanıcı onaylı olacak biçimde güncellendi.
- Execution cursor Wave 12 — Room Ortak Runtime ve Lifecycle State Foundation olarak kaydedildi; bu yalnız sıradaki Wave konumudur, aktif implementation anlamına gelmez.
- Wave 12 kodu, component'i, style'ı, testi, refactor'ı veya hazırlık çalışması başlatılmadı. Başlatma kapısı açık kullanıcı talimatı ve Wave'in gerekli görsel referanslarıdır.
- Bu senkron yalnız plan ve AI bağlamını güncelledi; frontend/backend ürün dosyaları değiştirilmedi ve Wave 11 kapanış kanıtları korunmuştur.

### 34. Wave 12 yerel implementation ve otomatik doğrulama — 2026-07-28

- `Vibe frontend/src/rooms/roomRuntimeState.ts` access, connection ve player durumlarını birbirinden ayırır; message merge, room-id/event-id dedupe, atomic presence, authoritative snapshot ve monotonic playback `updatedAt` reconcile saf fonksiyonlarını taşır.
- `Vibe frontend/src/rooms/roomRuntime.ts` layout-neutral `RoomRuntimeController` ve `useRoomRuntime` sahibidir. Giriş zinciri `getRoom → checkRoomAccess → joinRoom/unlockPrivateRoom → listRoomMessages` sırasını korur; socket yalnız aktif participant sonrası kurulur. Reconnect REST + socket snapshot reconcile, generation stale-response guard ve idempotent unsubscribe/disconnect cleanup tek sahipliktedir.
- `Vibe frontend/src/pages/RoomShellPage.tsx` duplicate lokal REST/socket sahipliğinden ortak runtime tüketicisine geçti. Reconnect/degraded feedback shared Wave 03 primitive'lerini kullanır; mevcut Room/player/chat içeriği reconnect sırasında korunur. Desktop participant/cinematic, host manage veya mobile final kompozisyonu eklenmedi.
- `Vibe frontend/src/rooms/YouTubeRoomPlayer.tsx` remote-state release timer'ını effect cleanup'ta temizler. `realtimeClient.ts` yalnız backend'in mevcut `global_block` / `access_revoked` payload varyantlarını frontend tipinde doğru temsil eder; event veya backend davranışı değişmez.
- Yeni otomatik kanıtlar: `tests/wave12-room-runtime.test.ts` 9/9, `tests/wave12-room-runtime-controller.test.ts` 11/11 ve `tests/wave12-room-runtime-ui.test.tsx` 6/6. Final frontend typecheck/build, tam Vitest 145/145 ve ilgili Chromium regresyonu 19/19 geçti. Build mevcut 500 kB üzeri chunk uyarısını korur.
- Frontend commitleri `e502e84 designwave12 add room runtime state model` ve `794b02c designwave12 integrate room runtime lifecycle` olarak kaydedildi. Backend worktree temizdir; database, REST API, auth/session/cookie/CSRF, realtime davranışı, route ve dependency kontratları değişmedi.
- `tests/wave12-tests.md` staging/manual QA kaydı olarak oluşturuldu. Prompt'ta yalnız System States Board sağlandığı için Room Desktop görsel 2–3 karşılaştırmaları ve kullanıcı onayı açıktır; Wave 12 QA-closed değildir ve Wave 13 başlatılmadı.

### 35. Wave 12 QA kapanışı — 2026-07-28

- Kullanıcı `tests/wave12-tests.md` manuel QA maddelerini tamamladığını, farklı checkbox yazımlarının geçti sayıldığını, blocker bulunmadığını ve Wave 12'nin kapatılmasını açıkça onayladı. Serbest biçimli işaretler standart `[x]` biçimine normalize edildi.
- Kapanış kanıtı frontend typecheck/build, focused Wave 12 Vitest 26/26, tam Vitest 145/145 ve ilgili Chromium regresyonu 19/19 olarak kaldı. QA kapanışında frontend/backend ürün kodu değiştirilmedi.
- Mevcut 500 kB üzeri build chunk uyarısı değişmeyen non-blocker'dır. Backend, database, REST API, auth/session/cookie/CSRF, realtime davranışı, route ve dependency kontratları değiştirilmedi.
- Wave 12 QA-closed / kullanıcı onaylı oldu. Execution cursor Wave 13'tür; Wave 13 implementation veya hazırlık çalışması başlatılmadan Codex durdu.

### 36. Wave 13 yerel implementation ve otomatik doğrulama — 2026-07-28

- `RoomShellPage.tsx` participant role için Wave 12 `useRoomRuntime` çıktısını tüketen ayrı desktop sunum dalına geçti; ikinci access/socket/playback/message state ağacı kurulmadı ve legacy host dalı Wave 14 için değiştirilmedi.
- Participant Room minimal context bar, güvenli back/leave cleanup, gerçek Room/host/count, yaklaşık 75/25 player/chat düzeni, gerçek thumbnail kaynaklı statik aura, calm chat, gerçek presence overlay'i ve yalnız member options/report/leave aksiyonlarını taşır.
- `YouTubeRoomPlayer.tsx` participant host-authoritative kilidini korur; player-unavailable state için lokal retry eklenmiştir. Cinematic yalnız layout state'idir ve player'ı remount etmez; browser fullscreen ayrı kontrol ve accessible name taşır.
- Wide/normal/narrow desktop, reduced motion, focus, duplicate send/leave guard, report feedback ve kritik axe sınırları doğrulandı. Staging QA'daki participant/report overlay stretch-spacing blocker'ı shared primitive değiştirilmeden scoped compact rows/padding/form rhythm ile `dc780c1` commit'inde düzeltildi. Participant report modalındaki native reason `select`, mevcut sekiz reason ve `/reports` payload kontratı korunarak shared primitive'i değiştirmeyen portal tabanlı Wave 13 Vibehall picker'a `74fe751` ile çevrildi; ok tuşu, Escape/outside close, selected state ve trigger focus restore browser testinde doğrulandı. Picker portalının `--z-menu` seviyesinde kalıp modal backdrop arkasında görünmesi, yalnız `.room-report-reason-menu` taşıyan layer'ı `calc(var(--z-modal) + 1)` seviyesine alan `f23f9f8` ile düzeltildi; browser testi option merkezinde gerçek topmost hit target'ı doğrular. Focused Wave 13 Chromium 5/5, ilgili Chromium regresyonu 24/24, focused Wave 13 Vitest 9/9, tam frontend Vitest 154/154, frontend typecheck ve production build geçti. Frontend commitleri `5005811`, `b8d9252`, `dc780c1`, `74fe751`, `f23f9f8`.
- `tests/wave13-tests.md` Türkçe staging/manual QA kaydı olarak oluşturuldu; kapanış durumu aşağıdaki final kayıtla belgelenmiştir.
- Backend, database, REST API, auth/session/cookie/CSRF, Socket.IO realtime, route ve dependency kontratları değiştirilmedi.

### 37. Wave 13 QA kapanışı — 2026-07-28

- Kullanıcı `tests/wave13-tests.md` içindeki staging/manual QA, participant/report overlay retest'i ve report reason picker stacking retest'inin tamamını geçti saydığını ve Wave 13'ün kapatılmasını açıkça onayladı. `[x]`, `[ x]`, `[x ]` ve açık kalan kullanıcı QA maddeleri standart `[x]` biçimine normalize edildi.
- Final kanıt frontend typecheck/build, tam Vitest 154/154, focused Wave 13 Vitest 9/9, focused Chromium 5/5 ve ilgili sequential Chromium regresyonu 24/24 olarak kaldı. Mevcut 500 kB üzeri build chunk uyarısı değişmeyen non-blocker'dır.
- Participant/report overlay, Vibehall report reason picker ve picker portal stacking bulguları sırasıyla `dc780c1`, `74fe751` ve `f23f9f8` sonrası staging retest ile kapandı; açık blocker veya açıklanmamış görsel sapma kalmadı.
- Wave 13 QA-closed / kullanıcı onaylı oldu. Backend, database, REST API, auth/session/cookie/CSRF, Socket.IO realtime, route ve dependency kontratları değiştirilmedi.
- Execution cursor Wave 14 — Room Desktop Host, Moderasyon ve Kapanış'tır; bu yalnız sıradaki Wave kaydıdır. Wave 14 implementation, component/style hazırlığı, test veya refactor başlatılmadı.

### 38. Wave 14 yerel implementation ve otomatik doğrulama — 2026-07-28

- `Vibe frontend/src/pages/RoomShellPage.tsx` Wave 12 authoritative Room rolünü kullanarak Wave 13 participant-first desktop kompozisyonuna düşük ağırlıklı host control strip ekler. Host yetkisi global admin/member identity veya client user-id tahmininden türetilmez.
- Playback komutları gerçek player readiness, socket connection ve mevcut playback ack zincirine bağlıdır; ref guard pending tekrarını engeller. Native YouTube host play/pause niyeti de `YouTubeRoomPlayer.tsx` üzerinden aynı ack-authoritative akışa döner.
- Invite mevcut `listFriends` / `sendRoomInvite` kontratını kullanır; copy link yalnız gerçek Room id taşır. Manage paneli gerçek presence tüketir; kick ve room-ban ayrı shared confirmation, mevcut payload ve hedefe özel pending/feedback taşır.
- End Room ve host leave shared confirmation kullanır; güvenli default focus Cancel'dadır, close mutation tekilleştirilir ve failure live bağlamı korur. Authoritative ended state host/participant için player, composer ve host kontrollerini kapatır; `/discover`, `/create-room` ve mevcut `/friends?view=watched` devam hedeflerini sunar.
- `room.css` wide/normal/narrow desktop, token tabanlı mat surface, görünür focus, WCAG hedefi ve reduced-motion sınırlarını ekler. Mobile host sheet veya ortak overlay consolidation yapılmadı.
- Otomatik kanıt: frontend typecheck/build, tam Vitest 19 dosyada 162/162, focused Wave 12–14 kontrat testleri 23/23, focused Wave 14 Chromium 3/3 ve Wave 13–14 Chromium regresyonu 8/8 geçti. Frontend commitleri `38737f1`, `5c4aedc`; build mevcut 500 kB üzeri chunk uyarısını korur.
- `tests/wave14-tests.md` staging/manual QA kaydı olarak oluşturuldu. Bu yerel implementation kaydı yazıldığında Wave 14 QA-closed değildi; güncel kapanış durumu aşağıdaki Wave 14 QA kapanışı bölümünde tutulur. Backend worktree temizdi; database, REST API, auth/session/cookie/CSRF, Socket.IO event, route ve dependency kontratları değişmedi, Wave 15 başlatılmadı.

### 39. Wave 14 QA kapanışı — 2026-08-04

- Kullanıcı `tests/wave14-tests.md` içindeki bütün staging/manual QA, görsel, keyboard, screen-reader, reduced-motion, unauthorized, failure/reconnect ve debug maddelerini geçti saydı; serbest biçimli checkbox işaretleri standart `[x]` biçimine normalize edildi.
- Blocker veya canonical belgelerle açıklanmayan görsel sapma bildirilmedi. Mevcut 500 kB üzeri build chunk uyarısı değişmeyen non-blocker olarak kaldı.
- Kapanış kanıtı frontend typecheck/build, tam Vitest 162/162, focused Wave 12–14 23/23, focused Wave 14 Chromium 3/3 ve Wave 13–14 Chromium regresyonu 8/8 olarak kaldı. Frontend/backend ürün kodu bu kapanış senkronunda değiştirilmedi.
- Wave 14 QA-closed / kullanıcı onaylı oldu. Backend, database, REST API, auth/session/cookie/CSRF, Socket.IO event, route ve dependency kontratları değişmedi. Execution cursor Wave 15'tir; Wave 15 başlatılmadı.

### 40. Wave 15 yerel implementation ve otomatik doğrulama — 2026-08-04

- Kullanıcı ayrı mobil board üretmediğini ve prompt'taki Room Desktop Design Package görsel dilinin canonical mobil kurallara mümkün olduğunca uyarlanmasını açıkça kabul etti; canonical mobile responsive, Room ve accessibility hükümleri bağlayıcı kaldı.
- `Vibe frontend/src/pages/RoomShellPage.tsx`, Wave 12 tek runtime/socket/player/message authority'sini koruyarak mobil `matchMedia` seçimi, `visualViewport` yüksekliği, video → metadata → chat sırası, participant/options ve host controls/manage/invite BottomSheet akışları ile destructive aksiyonlar için ayrı confirmation Modal'ları tüketir.
- `Vibe frontend/src/styles/room.css`, safe-area/keyboard/orientation uyumlu kalan yükseklik geometrisini, tek chat scroll container'ını, 44 px kontrol hedeflerini, tablet/telefon host ve ended düzenini, overflow sınırını ve reduced-motion davranışını Wave 15 kapsamında tanımlar.
- Otomatik kanıt: frontend typecheck/build, tam Vitest 20 dosyada 170/170, focused Wave 15 Vitest 8/8, focused Wave 15 Chromium 4/4 ve Wave 13–15 Chromium Room regresyonu tek worker ile 12/12 geçti. İlk E2E turunda bulunan mobil Back accessible-name blocker'ı kalıcı `aria-label` ile kapatıldı; full regression'da bulunan gizli metadata duplicate'i conditional render ile giderildi.
- Frontend commitleri `8b60658`, `3343458`. `tests/wave15-tests.md` staging/manual QA ve açık kullanıcı onayı için bekler; Wave 15 QA-closed değildir. Backend, database, REST API, auth/session/cookie/CSRF, Socket.IO event, route ve dependency kontratları değişmedi; Wave 16 başlatılmadı.

### 41. Wave 15 QA kapanışı — 2026-08-04

- Kullanıcı `tests/wave15-tests.md` içindeki bütün staging/manual QA, görsel, touch, keyboard, screen-reader, reduced-motion, role/state ve debug maddelerini geçti saydı; bütün checkbox'lar standart `[x]` biçimine normalize edildi.
- Blocker veya canonical belgelerle açıklanmayan görsel sapma bildirilmedi. Ayrı mobil board bulunmaması kullanıcının önceden verdiği desktop Room görsel dilini canonical mobil hükümlere uyarlama kararıyla kapandı; mevcut 500 kB üzeri build chunk uyarısı değişmeyen non-blocker olarak kaldı.
- Kapanış kanıtı frontend typecheck/build, tam Vitest 170/170, focused Wave 15 Vitest 8/8, focused Wave 15 Chromium 4/4 ve Wave 13–15 Chromium Room regresyonu 12/12 olarak kaldı. Frontend/backend ürün kodu bu kapanış senkronunda değiştirilmedi.
- Wave 15 QA-closed / kullanıcı onaylı oldu. Backend, database, REST API, auth/session/cookie/CSRF, Socket.IO event, route ve dependency kontratları değişmedi. Execution cursor Wave 16'dır; Wave 16 başlatılmadı.

### 42. Wave 16 yerel implementation ve otomatik doğrulama — 2026-08-04

- `OwnerProfilePage.tsx`, `MemberProfilePage.tsx`, `ProfileIdentityCard.tsx` ve Wave 02 primitive'leri own/guest/member/unavailable varyantlarını tek minimal kimlik hiyerarşisinde sunar. Atmosferik üst yüzey CSS/token tabanlıdır ve cover/upload capability'si değildir.
- `ProfileEditDialog.tsx` shared Modal, read-only username, mevcut display name/bio validation, tek `updateMyProfile()` mutation'ı, double-submit guard, failure'da draft koruması, unsaved close ve focus restore kullanır. Mobilde yalnız profile edit için scoped full-screen yüzey vardır.
- `AvatarCropper.tsx` mevcut JPEG/PNG/WebP ve 5 MB sözleşmesini, keyboard crop, managed upload/remove ve global identity refresh'i korur; upload ile remove failure retry'ları işlem türüne göre ayrılmıştır ve önceki avatar korunur.
- Public profile ana aksiyonu yalnız authoritative `RelationshipState` ve mevcut profile capability sonucundan türetilir. Add friend/Accept tek primary; pending/friends status; confirmed friend + DM capability için mevcut `/messages?targetUserId=` route'u kullanılır. Report/Block shared `PopoverMenu` ve `ReportDialog` içindedir; blocked/unavailable generic privacy-safe profile yüzeyine döner.
- Yeni backend, database, API, auth, realtime, route, dependency, profile alanı veya username mutation'ı eklenmedi. Settings/account/privacy, Social Hub, Wave 17+ ve Wave 25 kapsamları alınmadı.
- Otomatik kanıt: frontend typecheck/build, tam Vitest 21 dosyada 187/187, focused Wave 16 Vitest 17/17 ve Wave 16 + historical profile Chromium regresyonu tek worker ile 11/11 geçti. Frontend commitleri `f40c790`, `18222d3`; mevcut 500 kB üzeri chunk uyarısı değişmeyen non-blocker'dır.
- `tests/wave16-tests.md` staging/manual QA için oluşturuldu. Wave 16 QA-closed değildir; kullanıcı QA/onayı beklenir ve Wave 17 başlatılmaz.

### 43. Wave 16 QA kapanışı — 2026-08-04

- Kullanıcı `tests/wave16-tests.md` içindeki bütün staging/manual QA, görsel, responsive, keyboard, screen-reader, reduced-motion, relationship/safety, failure ve debug maddelerini geçti saydı; bütün checkbox'lar standart `[x]` biçimine normalize edildi.
- Blocker veya canonical belgelerle açıklanmayan görsel sapma bildirilmedi. Prompt görselindeki kapsam dışı cover upload, recent/public Room history, editable username, Settings/Privacy/Connected Devices ve mobile bottom nav Wave 16'ya alınmadı; mevcut 500 kB üzeri build chunk uyarısı değişmeyen non-blocker olarak kaldı.
- Kapanış kanıtı frontend typecheck/build, tam Vitest 21 dosyada 187/187, focused Wave 16 Vitest 17/17 ve Wave 16 + historical profile Chromium regresyonu tek worker ile 11/11 olarak kaldı. Frontend/backend ürün kodu bu kapanış senkronunda değiştirilmedi.
- Wave 16 QA-closed / kullanıcı onaylı oldu. Backend, database, REST API, auth/session/cookie/CSRF, realtime, route ve dependency kontratları değişmedi. Execution cursor Wave 17'dir; Wave 17 implementation veya hazırlık çalışması başlatılmadı.
