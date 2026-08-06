# AGENT_INSTRUCTIONS.md

Bu dosya Vibehall üzerinde çalışacak yapay zeka ajanlarının nasıl davranması gerektiğini anlatır.  
Yeni bir sohbet veya ajan başladığında bu dosya ve diğer context dosyaları okunarak hızlıca proje bağlamına girilir.

---

## 1. Başlangıç Okuma Sırası

Her yeni ajan veya sohbet şu sırayla okumalıdır:

1. `ai/PROJECT_BRAIN.md` — Ürünün ruhu, vizyonu, temel hissi. **Her şeyden önce okunur.**
2. `ai/CURRENT_STATUS.md` — Projenin gerçek güncel durumu.
3. `ai/PRODUCT_RULES.md` — Korunması gereken ürün kuralları.
4. `ai/TECH_CONTEXT.md` — Stack, klasör yapısı, script'ler, env değişkenleri.
5. `ai/DECISIONS.md` — Alınmış önemli kararlar ve nedenleri.
6. `ai/NEXT_TASKS.md` — Sıradaki görevler ve öncelikler.
7. Aktif tasarım execution işi için `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md` — plan sözleşmeleri ve kaynak hiyerarşisi.
8. `Design_Wave_Map.md` — onaylı sıra, kapsam sahiplikleri ve bağımlılıklar.
9. `Design_Wave_Plan.md` — yalnız aktif Wave bölümü; ardından o Wave'in canonical ve `Design/` referansları.

Okuma sırası esnektir; ama `PROJECT_BRAIN.md` her zaman ilk okunur.

---

## 2. Çalışmaya Başlamadan Önce

- Mevcut wave durumunu `CURRENT_STATUS.md`'den kontrol et.
- Sıradaki görevi `NEXT_TASKS.md`'den öğren.
- İlgili canonical dokümanı `Roads/project-foundation/` içinde bul ve oku.
- `DECISIONS.md`'deki kararlarla çatışan bir şey yapmayı planlıyorsan dur ve kullanıcıya sor.
- Aktif tasarım execution zincirinde Wave 00–16 QA-closed / kullanıcı onaylıdır. Execution cursor Wave 17'dir; Wave 17 implementation veya hazırlığı yalnız yeni açık kullanıcı talimatı ve gerekli prompt görselleriyle başlatılabilir.
- Aynı anda yalnız bir Design Wave uygula; aktif Wave'in QA ve kullanıcı onayı tamamlanmadan sonraki Wave'e geçme.
- `Big_Design_Plan.md`, `Design_Wave_Map.md` ve `Design_Wave_Plan.md` hükümlerini birlikte koru; sıra, kapsam veya bağımlılığı kendiliğinden değiştirme.

---

## 3. Kod Değiştirme Kuralları

### 3.1 Temel Kurallar
- **Kod değiştirmeden önce anlama.** Önce oku, sonra değiştir.
- **Çalışan sistemi gereksiz yere bozma.** Bir şeyi düzeltmek istiyorsan, var olan akışı önce anla.
- **Kısa yamalar değil, kök çözümler.** Yüzeysel fix yapmak yerine neden olduğunu anla ve oradan düzelt.
- **Teknik karar gerekiyorsa kaydet.** `DECISIONS.md` veya `Roads/.../decision-log.md` güncelle.
- **Wave sınırlarını atlatma.** Şu anki wave tamamlanmadan bir sonraki wave'in özelliklerini ekleme.

### 3.2 Frontend Değişiklikleri
- Custom router kullanılıyor; React Router veya diğer router kütüphaneleri ekleme.
- Design system Waves 23-31'de kuruldu; yeni UI bu sisteme uygun olmalı.
- Tailwind CSS veya harici CSS framework ekleme; vanilla CSS/design system kullan.
- Navigasyon için `vibehall:before-navigate` CustomEvent'ini anlayarak çalış.

### 3.3 Backend Değişiklikleri
- ESM (`"type": "module"`); `import` kullan, `require` değil.
- Yeni route ekleniyorsa `src/app.ts`'e register edilmeli.
- `SOCIAL_ENABLED` ve `DIRECT_MESSAGES_ENABLED` flag'lerini atlatma.
- Auth middleware'i olan route'larda `request.user` var olduğunu kontrol et.
- CSRF token `X-CSRF-Token` header'ı mutation requestlerinde zorunlu.

### 3.4 Veritabanı Değişiklikleri
- Schema değişikliği = yeni migration. `prisma db push` production'da kullanılmaz.
- `prisma migrate dev` ile lokal migration oluştur; commit et.
- Migration adlandırma: `YYYYMMDDHHMMSS_wave{N}_{kısa_açıklama}` formatı.
- Seed değişikliği yalnız kategori verisi içinse idempotent olmalı.

---

## 4. Dikkat Edilmesi Gereken Özel Durumlar

### 4.1 SOCIAL_ENABLED Flag
- `SOCIAL_ENABLED=false` varsayılan. Social route'ları test edeceksen staging'de `true` ve Redis gerekli.
- Flag false iken social API'lara istek gelirse 404 döner; bu beklenen davranış.

### 4.2 Worker Mode
- `WORKER_ENABLED=false` varsayılan. Avatar işleme ve account deletion job'ları için `true` olmalı.
- `WORKER_MODE=embedded` → backend süreciyle aynı process.
- `WORKER_MODE=standalone` → ayrı worker process (`npm run worker:dev` veya `npm run worker:start`).
- Production'da standalone önerilir.

### 4.3 Admin Bootstrap
- `ADMIN_BOOTSTRAP_SECRET` ile `/api/admin/bootstrap` endpoint'i ilk admin oluşturur.
- İlk admin oluşturulunca `ADMIN_BOOTSTRAP_ALLOW_AFTER_ADMIN_EXISTS=false` ile otomatik kilitleniyor.
- Bu secret production'da ayarlandıktan sonra env var'dan kaldırılmalı veya boş bırakılmalı.

### 4.4 Playback State In-Memory
- `src/realtime.ts` içindeki `playbackByRoom: Map<string, PlaybackState>` sunucu bellektedir.
- Restart = sıfırlanma. Bu bilinçli bir trade-off; veritabanına taşıma planı yok.

### 4.5 Block / Privacy Sızdırma
- Block yönü (`blockerId` kim?) API response'larından asla sızdırılmamalı.
- Restricted/suspended/banned hesap durumu ordinary social akışlarda revealing mesaj vermemeli.
- Bu kurallar güvenlik/privacy açısından kritik.

---

## 5. Rapor ve Güncelleme Kuralları

### 5.1 Wave Tamamlanınca
- İlgili wave planındaki checklist maddelerini `[x]` olarak işaretle.
- `CURRENT_STATUS.md`'i güncelle: tamamlanan wave'i "Tamamlanmış" bloğuna ekle.
- Her wave sonunda `ai/` klasörü de gözden geçirilir; durum, sıradaki iş, teknik bağlam, karar veya agent kuralı değiştiyse ilgili dosya aynı wave içinde güncellenir.
- `NEXT_TASKS.md`'i güncelle: tamamlanan task'ları kaldır/güncelle, yenileri ekle.
- Büyük bir karar alındıysa `DECISIONS.md`'e ekle.

### 5.2 Önemli Teknik Karar Alınınca
- `DECISIONS.md`'e yeni entry ekle.
- Uzun geçmiş için `Roads/project-foundation/08-reference/decision-log.md`'e de ekle.

### 5.3 Yeni Wave Başlarken
- Tasarım dönüşümünde yalnız kullanıcı tarafından başlatılan aktif Wave uygulanır; otomatik doğrulama, tests/waveNN-tests.md, manuel QA ve açık kullanıcı onayı olmadan sıradaki Wave başlatılmaz.
- `CURRENT_STATUS.md`'de "Aktif Wave" bölümünü güncelle.
- `NEXT_TASKS.md`'den o wave'in task'larını "Öncelik 1" olarak öne al.

---

## 6. Ne Yapmamalısın

- **Ürünü yeniden yorumlama.** Vibehall'ın ne olduğunu `PROJECT_BRAIN.md`'den öğren; kendi anlayışına göre yeniden şekillendirme.
- **Olmayan özellikleri icat etme.** Var olduğunu zannettiğin ama kodda/planda görmediğin şeyi uygulama.
- **Design Wave atlatma.** Wave 00–16 QA-closed durumundadır. Aktif Design Wave yoktur; execution cursor Wave 17'dir. Yeni açık kullanıcı talimatı ve gerekli prompt görselleri olmadan Wave 17 implementation, component/style hazırlığı, test veya refactor alma.
- **Plan dışı kapsam açma.** Yeni özellik, backend/database redesign veya belgelenmemiş UX kararı ekleme; aktif Wave açıkça gerektirmedikçe backend/database koduna dokunma.
- **DB push ile migration.** Production ve staging'de `prisma migrate deploy` kullan.
- **React Router veya Tailwind ekleme.** Proje custom router ve vanilla CSS kullanıyor.
- **Block yönünü veya account state sebebini sızdırma.** Privacy ve güvenlik kuralı.
- **Chat'i ödanın merkezine yerleştirme.** Chat destekleyici; room deneyimi merkezdedir.
- **Sosyal ağ özelliği ekleme.** Followers, likes, feed, puan sistemi yok ve olmamalı.

---

## 7. Canonical Dosya Haritası

Herhangi bir konuyu daha derin anlamak için doğru canonical dosyaya git:

| Konu | Dosya |
|------|-------|
| Ürün tanımı ve kimliği | `Roads/project-foundation/01-product-definition/` |
| Sistem kuralları, REST/WebSocket kontratları | `Roads/project-foundation/02-system-definition/` |
| Veri modeli, entity tanımları | `Roads/project-foundation/03-data-definition/` |
| UI/UX spesifikasyonları, sayfa tasarımları | `Roads/project-foundation/04-ui-ux-definition/` |
| Güvenlik, moderasyon, raporlama kuralları | `Roads/project-foundation/05-governance-and-safety/` |
| Build disiplini, deploy runbook, migration | `Roads/project-foundation/06-build-strategy/` |
| Roadmap ve wave planları | `Roads/project-foundation/07-roadmaps/plans/` |
| Karar geçmişi | `Roads/project-foundation/08-reference/decision-log.md` |
| Manuel QA kontrol listeleri | `tests/wave*-tests.md` |
| Geliştirme kuralları, script adları | `DEVELOPMENT.md` |

---

## 8. Çalışma Ortamı Notları

- **OS:** Windows; PowerShell'de `npm.ps1` engelleniyorsa `npm.cmd` kullan.
- **Frontend dev server:** `cd "Vibe frontend" && npm run dev` → `http://localhost:5173`
- **Backend dev server:** `cd "Vibe backend" && npm run dev` → `http://localhost:4000`
- **Kök kolaylık:** `npm run dev:frontend` veya `npm run dev:backend` (local-only).
- **Prisma komutları:** `cd "Vibe backend"` içinde çalıştır.
---

## WAVE44_AGENT_NOTE_2026_07_11

- Wave43-44 capability pair yerelde uygulandi; ortak QA dosyasi `tests/wave43-44-tests.md`.
- Yeni ajanlar Wave45'e baslamadan once kullanici Wave43-44 staging/manual QA onayini aramali.
- Her wave sonunda `ai/` klasoru guncelleme kurali devam ediyor.
---

## WAVE45_AGENT_NOTE_2026_07_11

- Wave45 yerelde uygulandi; Wave46 siradaki kapsamdir.
- Kullanici Wave43-44-45-46 testlerini plan bitince toplu yapmak istiyor.
- Wave46 tamamlanmadan social plan kapatilmis sayilmaz; kullanici final QA/onayi gerekir.
- Wave45 operations endpointleri admin-only olmalidir; normal kullaniciya operational retry/reconcile acilmaz.
---

## WAVE46_AGENT_NOTE_2026_07_11

- Waves 43-46 are implemented locally; do not start a new implementation wave from social-plan.md.
- Next work is shared staging/manual QA using `tests/wave43-44-tests.md`, `tests/wave45-tests.md`, and `tests/wave46-tests.md`.
- Social plan is not truly closed until the user explicitly approves Wave46 after QA.
- Preserve no-casual-admin-browse and deferred-feature boundaries during any fixes.
## WAVE46_VERIFICATION_AGENT_NOTE_2026_07_11

- Do not reopen implementation just because automated local gates are green; final closure still requires manual staging evidence in `tests/wave43-44-tests.md`, `tests/wave45-tests.md`, and `tests/wave46-tests.md`.
- If user reports a Wave46 QA failure, fix only the failed surface, rerun relevant local tests, and update AI/status notes.

## WAVE46_FINAL_CLOSURE_AGENT_NOTE_2026_07_12

- Social plan Waves 32-46 are closed by user acceptance; do not treat `social-plan.md` as an active wave queue.
- Before future work, read `ai/CURRENT_STATUS.md` and `ai/NEXT_TASKS.md`; start a new plan or targeted fix scope instead of extending the closed social plan.
- Preserve final social boundaries: no feed/followers/global member directory, no general admin friendship graph or DM inbox browsing, no privacy leaks around block direction/account state/evidence internals.
- If a regression appears from Waves 32-46, handle it as a focused fix: reproduce, patch only the affected surface, rerun relevant tests, and update AI/status notes.
## WAVE10_FINAL_CLOSURE_AGENT_NOTE_2026_07_28

- Wave 10 implementation, automatic validation, `tests/wave10-tests.md` staging/browser manuel QA ve kullanıcı kabulüyle QA-closed durumundadır.
- Güvenli return intent yalnız allowlisted internal route'ları ve exact `/room?roomId=...` hedefini kabul eder. Gate yalnız mevcut `access/check` presenter'ını kullanır; join/password/invite/capacity/ban/block authority Room route'unda yeniden çalışır.
- Wave 10 yalnız doğrulanmış bir regresyon veya açık kullanıcı talimatıyla yeniden açılabilir.
- Bu Wave 10 kapanış notu yazıldığında Wave 11 sıradaki aktif işti; güncel durum aşağıdaki Wave 11 final kapanış notudur. Wave 12'ye açık kullanıcı talimatı olmadan geçme ve Wave 25 consolidation işini erkene alma.
## WAVE11_FINAL_CLOSURE_AGENT_NOTE_2026_07_28

- Wave 11 Create Room ve Host Olarak Geçiş implementation, automatic validation, `tests/wave11-tests.md` staging/browser manuel QA ve kullanıcı kabulüyle QA-closed durumundadır.
- Frontend YouTube preflight yalnız mevcut backend host/path/11-karakter video-id kontratını mirror eder ve deterministic thumbnail URL'si gösterir; gerçek video title metadata'sı yoktur. Yeni scraping/oEmbed/metadata endpoint'i veya backend davranışı ekleme.
- Wave 11 yalnız doğrulanmış bir regresyon veya açık kullanıcı talimatıyla yeniden açılabilir.
- Bu Wave 11 kapanış notu tarihsel kayıttır; güncel durum aşağıdaki Wave 12 yerel implementation notudur. Wave 25 consolidation'a erken geçme.

## WAVE12_LOCAL_IMPLEMENTATION_AGENT_NOTE_2026_07_28

- Wave 12 Room Ortak Runtime ve Lifecycle State Foundation yerel implementation ve automatic validation aşamasını tamamladı. Layout-neutral `RoomRuntimeController`/`useRoomRuntime`, authoritative REST giriş zinciri, join sonrası tek realtime subscription, snapshot/event reconcile ve idempotent lifecycle cleanup tek sahipliktedir.
- Frontend typecheck/build, focused Wave 12 Vitest 26/26, tam Vitest 145/145 ve ilgili Chromium regresyonu 19/19 geçti. Frontend commitleri `e502e84`, `794b02c`; backend, database, API, auth/session ve realtime davranışı değişmedi.
- Bu yerel implementation notu tarihsel kayıttır; güncel durum aşağıdaki Wave 12 final kapanış notudur. Wave 25 işi alma.

## WAVE12_FINAL_CLOSURE_AGENT_NOTE_2026_07_28

- Kullanıcı `tests/wave12-tests.md` içindeki `[x]`, `[ x]`, `[x ]` ve serbest biçimli QA işaretlerinin geçti sayıldığını, blocker bulunmadığını ve Wave 12'nin kapatılmasını açıkça onayladı. İşaretler standart `[x]` biçimine normalize edildi.
- Wave 12 Room Ortak Runtime ve Lifecycle State Foundation implementation, automatic validation ve staging/manual QA ile QA-closed / kullanıcı onaylıdır. Frontend commitleri `e502e84`, `794b02c`; typecheck/build, focused Vitest 26/26, tam Vitest 145/145 ve ilgili Chromium regresyonu 19/19 geçti.
- Backend, database, API, auth/session ve realtime davranışı değiştirilmedi. Wave 12 yalnız doğrulanmış bir regresyon veya açık kullanıcı talimatıyla yeniden açılabilir.
- Bu Wave 12 kapanış notu tarihsel kayıttır. Güncel cursor ve Wave 13 kapanış durumu aşağıdaki final notta tutulur.

### Design Wave 13 Yerel Implementation Notu — 2026-07-28

- Wave 13 Room Desktop Participant ve Cinematic Deneyimi yalnız participant desktop kapsamıyla uygulandı; host Wave 14, mobile Wave 15 ve consolidation Wave 25 kapsamları alınmadı.
- Minimal context bar, gerçek yaklaşık 75/25 player/chat kompozisyonu, statik thumbnail aura, participant playback lock, calm chat, gerçek presence paneli, member options/report/leave, remount etmeyen cinematic ve ayrı fullscreen tamamlandı.
- Staging QA'da bulunan participant/report overlay stretch-spacing blocker'ı `dc780c1` ile kapatıldı; participant report reason native listesi mevcut kontrat korunarak Wave 13-scoped Vibehall picker'a `74fe751` ile çevrildi. Picker portalının modal arkasında kalması yalnız bu menünün layer seviyesini düzelten `f23f9f8` ile kapatıldı. Frontend typecheck/build, tam Vitest 154/154, focused Wave 13 Vitest 9/9, focused Chromium 5/5 ve ilgili Chromium regresyonu 24/24 geçti. Frontend commitleri `5005811`, `b8d9252`, `dc780c1`, `74fe751`, `f23f9f8`.
- Backend, database, API, auth/session, realtime, route ve dependency kontratları değişmedi.

### Design Wave 13 Final Kapanış Notu — 2026-07-28

- Kullanıcı `tests/wave13-tests.md` staging/manual QA ve blocker retest maddelerinin tamamını geçti saydığını ve Wave 13'ün kapatılmasını açıkça onayladı; bütün işaretler standart `[x]` biçimine normalize edildi.
- Wave 13 Room Desktop Participant ve Cinematic Deneyimi QA-closed / kullanıcı onaylıdır; yalnız doğrulanmış bir regresyon veya açık kullanıcı talimatıyla yeniden açılabilir.
- Execution cursor Wave 14 — Room Desktop Host, Moderasyon ve Kapanış'tır. Wave 14 implementation, component/style hazırlığı, test veya refactor başlatılmadı; açık kullanıcı talimatı ve gerekli prompt görselleri beklenir.

### Design Wave 14 Yerel Implementation Notu — 2026-07-28

- Wave 14 yalnız desktop host, moderation ve ended kapsamıyla uygulandı; mobile Wave 15 ve consolidation Wave 25 kapsamları alınmadı.
- Host UI yalnız Wave 12 authoritative Room rolünden açılır. Player/socket/ack durumuna bağlı playback guard'ı, mevcut friend invite akışı, gerçek presence management, ayrı kick/room-ban confirmation'ları, tek close mutation ve bütün client'larda tutarlı ended continuation state tamamlandı.
- Frontend typecheck/build, tam Vitest 162/162, focused Wave 12–14 23/23, focused Wave 14 Chromium 3/3 ve Wave 13–14 Chromium regresyonu 8/8 geçti. Frontend commitleri `38737f1`, `5c4aedc`; backend ve kontratlar değişmedi.
- Bu yerel implementation notu tarihsel kayıttır; yazıldığı anda `tests/wave14-tests.md` staging/manual QA ve kullanıcı kabulü için açıktı. Güncel durum aşağıdaki Wave 14 final kapanış notunda tutulur; Wave 15 başlatılmadı.

### Design Wave 14 Final Kapanış Notu — 2026-08-04

- Kullanıcı `tests/wave14-tests.md` içindeki `[x]`, `[ x]` ve `[x ]` işaretlerinin tamamını geçti saydığını ve Wave 14'ün kapatılmasını açıkça onayladı; bütün işaretler standart `[x]` biçimine normalize edildi.
- Wave 14 Room Desktop Host, Moderasyon ve Kapanış implementation, automatic validation ve staging/manual QA ile QA-closed / kullanıcı onaylıdır. Blocker veya canonical belgelerle açıklanmayan görsel sapma bildirilmedi.
- Frontend commitleri `38737f1`, `5c4aedc`; typecheck/build, tam Vitest 162/162, focused Wave 12–14 23/23, focused Wave 14 Chromium 3/3 ve Wave 13–14 Chromium regresyonu 8/8 geçti. Backend ve kontratlar değişmedi.
- Execution cursor Wave 15 — Room Mobile Deneyimi'dir. Wave 15 implementation, component/style hazırlığı, test veya refactor başlatılmadı; açık kullanıcı talimatı ve gerekli prompt görselleri beklenir.

### Design Wave 15 Yerel Implementation Notu — 2026-08-04

- Wave 15 yalnız Room mobile deneyimi kapsamında uygulandı; Wave 16+, Wave 25 consolidation ve genel responsive cleanup kapsamları alınmadı.
- Kullanıcı ayrı mobil board üretmediğini ve prompt'taki Room Desktop Design Package görsel dilinin canonical mobil kurallara mümkün olduğunca uyarlanmasını açıkça kabul etti.
- Wave 12 tek Room runtime authority'si korunarak video → metadata → chat sırası, tek chat scroll yüzeyi, visual viewport/safe-area/keyboard uyumu, participant ve host BottomSheet akışları, ayrı destructive confirmation Modal'ları, role/state erişimi ve mobil ended görünümü tamamlandı.
- Frontend commitleri `8b60658`, `3343458`; typecheck/build, tam Vitest 170/170, focused Wave 15 Vitest 8/8, focused Wave 15 Chromium 4/4 ve Wave 13–15 Chromium Room regresyonu 12/12 geçti. Backend ve kontratlar değişmedi.
- Bu yerel implementation notu tarihsel kayıttır; güncel kapanış durumu aşağıdaki Wave 15 final kapanış notunda tutulur.

### Design Wave 15 Final Kapanış Notu — 2026-08-04

- Kullanıcı `tests/wave15-tests.md` içindeki bütün staging/manual QA, görsel, touch, keyboard, screen-reader, reduced-motion, role/state ve debug maddelerini geçti saydı; bütün checkbox'lar standart `[x]` biçimine normalize edildi.
- Wave 15 Room Mobile Deneyimi implementation, automatic validation ve staging/manual QA ile QA-closed / kullanıcı onaylıdır. Blocker veya canonical belgelerle açıklanmayan görsel sapma bildirilmedi.
- Frontend commitleri `8b60658`, `3343458`; typecheck/build, tam Vitest 170/170, focused Wave 15 Vitest 8/8, focused Wave 15 Chromium 4/4 ve Wave 13–15 Chromium Room regresyonu 12/12 geçti. Backend ve kontratlar değişmedi.
- Execution cursor Wave 16 — Own ve Public Profile Deneyimi'dir. Wave 16 implementation, component/style hazırlığı, test veya refactor başlatılmadı; açık kullanıcı talimatı ve gerekli prompt görselleri beklenir.

### Design Wave 16 Yerel Implementation Notu — 2026-08-04

- Wave 16 yalnız own/public profile deneyimi kapsamında uygulandı; Settings/account/privacy Wave 17, Social Hub Wave 18–19 ve consolidation Wave 25 kapsamları alınmadı.
- Minimal presenter allowlist kimliği, CSS/token tabanlı upload olmayan atmosfer, shared edit Modal, managed avatar recovery, authoritative relationship primary aksiyonu, secondary report/block menüsü, friends-only Message ve neutral unavailable yüzeyi tamamlandı.
- Frontend commitleri `f40c790`, `18222d3`; typecheck/build, tam Vitest 187/187, focused Wave 16 17/17 ve profile Chromium regresyonu 11/11 geçti. Backend, database, API, auth/session, realtime, route ve dependency kontratları değişmedi.
- `tests/wave16-tests.md` staging/manual QA ve kullanıcı onayı için açıktır. Wave 16 QA-closed değildir; kullanıcı onayı olmadan Wave sonucu doldurulmaz ve Wave 17 başlatılmaz.

### Design Wave 16 Final Kapanış Notu — 2026-08-04

- Kullanıcı `tests/wave16-tests.md` içindeki bütün staging/manual QA, görsel, responsive, keyboard, screen-reader, reduced-motion, relationship/safety, failure ve debug maddelerini geçti saydı; bütün checkbox'lar standart `[x]` biçimine normalize edildi.
- Wave 16 Own ve Public Profile Deneyimi implementation, automatic validation ve kullanıcı kabulüyle QA-closed oldu. Blocker veya canonical belgelerle açıklanmayan görsel sapma bildirilmedi.
- Frontend commitleri `f40c790`, `18222d3`; typecheck/build, tam Vitest 187/187, focused Wave 16 17/17 ve Wave 16 + historical profile Chromium regresyonu 11/11 geçti. Backend, database, API, auth/session, realtime, route ve dependency kontratları değişmedi.
- Execution cursor Wave 17 — Settings, Privacy ve Account Safety'dir; bu yalnız sıradaki Wave kaydıdır. Wave 17 implementation, component/style hazırlığı, test veya refactor başlatılmadı.
