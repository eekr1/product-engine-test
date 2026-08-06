# DECISIONS.md

Bu dosya projede alınmış önemli kararları ve bu kararların nedenlerini kaydeder.  
Amaç: gelecekte çalışan ajanların aynı konuları tekrar sorgulayıp projeyi dağıtmasını önlemek.  
Detaylı karar geçmişi için: `Roads/project-foundation/08-reference/decision-log.md`

---

## Teknik Mimari Kararları

### TK-001: Ayrı Git Repoları
**Karar:** Frontend ve backend ayrı standalone Git repolarıdır.  
**Neden:** Bağımsız deploy; Render'da her biri kendi servisini kurar. Üst `Vibehall/` klasörü local-only.  
**Etki:** `Vibe frontend/` ve `Vibe backend/` asla üst klasöre bağımlı olmamalı.

### TK-002: Custom Router (No React Router)
**Karar:** Frontend'de React Router kullanılmadı; `history.pushState` + `CustomEvent` tabanlı custom router.  
**Neden:** Proje başından beri böyle kuruldu ve Wave 23-31 design pass ile pekiştirildi.  
**Etki:** Navigasyon için `vibehall:before-navigate` event'ini engelleyen yerler önce kontrol edilmeli. React Router eklenmemeli.

### TK-003: Socket.IO + In-Memory Playback State
**Karar:** Paylaşımlı oynatma state'i sunucu belleğinde (Map) tutulur; veritabanına yazılmaz.  
**Neden:** Gerçek zamanlı, düşük gecikmeli sync için.  
**Etki:** Sunucu restart edildiğinde playback pozisyonu sıfırlanır. Bu kabul edilebilir trade-off.

### TK-004: SOCIAL_ENABLED Feature Flag
**Karar:** Social layer (arkadaşlık, presence, notification, invite) `SOCIAL_ENABLED` env flag arkasında.  
**Neden:** Kontrollü açılım; Redis ve object storage olmadan social çalışmaz.  
**Etki:** Production'da `SOCIAL_ENABLED=true` yapmadan önce Redis bağlantısı ve object storage test edilmeli.

### TK-005: WORKER_MODE — Embedded vs Standalone
**Karar:** Worker production'da `standalone`, single-instance staging'de `embedded` kullanılabilir.  
**Neden:** Horizontal scaling'de her instance embedded worker başlatırsa çift işlem sorunu oluşur.  
**Etki:** Production veya multiple instance durumunda `WORKER_MODE=standalone` ve ayrı worker servisi zorunlu.

### TK-006: Managed Avatar Upload (Harici URL Kaldırıldı)
**Karar:** Wave 33 ile harici avatar URL düzenleme kaldırıldı. Sadece yönetilen yükleme: JPEG/PNG/WebP → sharp → 128px + 512px WebP → S3.  
**Neden:** Güvenlik, boyut kontrolü, CDN tutarlılığı.  
**Etki:** `avatarUrl` kolonu deprecated; `avatar128Key`, `avatar512Key` kullanılıyor.

### TK-007: Prisma Migrate Deploy (db push değil)
**Karar:** Production migration stratejisi `prisma migrate deploy`; `prisma db push` yalnız geçici staging kolaylığı.  
**Neden:** Denetlenebilir, geri alınabilir, committed migration dosyaları.  
**Etki:** Staging DB daha önce `db push` ile hazırlandıysa, production geçişte fresh DB veya baseline gerekebilir.

---

## Ürün Kararları

### UK-001: Tek Host Otoritesi
**Karar:** Her odanın tek bir hostu var; host el değiştiremez; host tek oda otoritesidir.  
**Neden:** Ürün "host-led geçici oda" konseptine dayanıyor.  
**Etki:** Oda lifecycle, moderation, oynatma kontrolü hepsi host'a bağlı.

### UK-002: Host Ayrılınca Oda Biter
**Karar:** Host odayı kapattığında veya açıkça ayrıldığında oda hemen biter.  
**Neden:** Oda host'un varlığıyla anlam kazanır; host'suz oda anlamsız.  
**Etki:** Host leave = room end; katılımcıların orada kalması mümkün değil.

### UK-003: Browser-Close / Navigation Auto-End Ertelendi
**Karar:** Host tarayıcıyı kapattığında veya navigate ettiğinde odayı otomatik bitirme kararı ertelendi.  
**Neden:** En iyi UX belirsiz: explicit close mi, disconnect timeout mu, handoff mi?  
**Etki:** Şu an yalnız explicit host close çalışıyor. Browser close → hangout sona erme davranışı belirsiz.

### UK-004: Misafir Oda Giremez
**Karar:** Giriş yapmamış kullanıcılar Discover'ı görebilir fakat odaya giremez; auth kapısı devreye girer.  
**Neden:** Oda deneyimi insan varlığını gerektirir; kayıtsız erişim kimlik ve güven sorunları yaratır.  
**Etki:** Auth return intent implementasyonu var; misafir direct link → auth → geri dönüş.

### UK-005: Private Oda Discover'da Görünmez
**Karar:** Private odalar kesinlikle Discover'da görünmez.  
**Neden:** Özel = sadece davet yoluyla ulaşılır.  
**Etki:** Direct link + auth + şifre (veya Wave 39+ invite grant). Discover API'si sadece `public` odaları döner.

### UK-006: Chat Oda'nın Merkezi Değil
**Karar:** Chat odayı destekler ama merkezinde değildir.  
**Neden:** Vibehall gürültülü bir sosyal medya değil, atmosfer yeri.  
**Etki:** Chat opsiyoneldir; kullanıcı konuşmadan da orada var olabilir.

### UK-007: Sosyal Katman Oda Merkezli Kalmalı
**Karar:** Sosyal özellikler genel sosyal ağa dönüşmemeli; followers, like, feed, puan sistemi yok.  
**Neden:** Vibehall'ın ruhu "aynı anda aynı yerde olmak"; ego performansı değil.  
**Etki:** People You Watched With, friendship, presence — hepsi oda bağlamından türüyor.

### UK-008: Admin Paneli /admin Route'unda, Normal Nav'da Gizli
**Karar:** Admin paneli frontend route sistemi içinde `/admin` path'inde; ayrı subdomain/app değil.  
**Neden:** MVP hızı; backend'de admin role kontrolü yeterli güvenlik.  
**Etki:** Normal kullanıcı navigasyonunda görünmüyor. Gelecekte ayrı domain/app seçeneği açık bırakıldı.

### UK-009: Admin/Moderator Rol Genişletme Ertelendi
**Karar:** Wave 13'te `admin` ve `member` rolü korundu; moderator rolü eklenmedi.  
**Neden:** Schema, permission matrix, UI ve QA tasarımı gerektiriyor; MVP için fazla.  
**Etki:** Moderator rol ihtiyacı doğarsa ayrı plan ve onay gerektirir.

---

## Build / Süreç Kararları

### BK-001: Wave Tabanlı Build Disiplini
**Karar:** Her wave tamamlanmadan bir sonrakine geçilmez; debug + verification + rapor zorunlu.  
**Neden:** Kör ilerleme birikimli hatalara yol açar.  
**Etki:** Wave'ler atlanamaz; eksik QA olan wave'in üstüne feature eklenmez.

### BK-002: Design System Waves 23-31
**Karar:** Visual redesign ayrı bir plan altında (user-facing-design-execution-plan.md) yürütüldü ve tamamlandı.  
**Neden:** Tüm sayfalar aynı anda tutarlı bir design system'e geçiş.  
**Etki:** Yeni UI bileşenleri bu design system'e uygun olmalı; Tailwind veya harici CSS framework eklenmemeli.

### BK-003: Mobile QA Ertelendi
**Karar:** Wave 14'ten beri mobile QA kasıtlı olarak erteleniyor.  
**Neden:** Design pass tamamlandıktan sonra mobile-specific redesign daha verimli.  
**Etki:** Şu an mobile görünüm test edilmedi. Ciddi production lansmanı öncesinde mobile QA gerekli.

**2026-07-20 güncellemesi:** Bu erteleme yeni tasarım dönüşümü planında sona erdirildi. Mobile sorumlulukları `Design_Wave_Plan.md` içindeki ilgili Wave'lere bağlandı. Wave 01 foundation desktop/mobile token QA'sı kullanıcı onayıyla kapandı; mobile ekran ve shell Wave'leri henüz uygulanmadığı için ürün genelindeki mobile kapanış tamamlanmış değildir.

### BK-004: Canonical Dokümanlar Koda Karşı Öncelikli
**Karar:** Kod ile canonical doc çatışırsa sessizce kodu baz alma; çatışma locked product behavior'ı değiştiriyorsa dur ve kullanıcı onayı iste.  
**Neden:** Kod zaman içinde dağılabilir; canonical dokümanlar niyeti korur.  
**Etki:** Ajan çatışma bulursa önce `Roads/project-foundation/` dosyalarını okur; sonra kullanıcıyı bilgilendirir.

### BK-005: AI Context Klasörü Her Wave Sonrası Güncellenir
**Karar:** Kök dizindeki `ai/` klasörü ajanların ilk okuyacağı proje beyni kabul edildi. Her wave sonunda `CURRENT_STATUS.md`, `NEXT_TASKS.md`, `DECISIONS.md`, `TECH_CONTEXT.md` ve `AGENT_INSTRUCTIONS.md` gözden geçirilir; wave sonucu proje durumunu, sıradaki işi, teknik dosya haritasını veya çalışma kuralını değiştirdiyse aynı wave içinde güncellenir.  
**Neden:** Yeni sohbet/ajan projeye hızlı ve doğru bağlamla girsin; güncel olmayan roadmap/durum bilgisiyle yanlış wave'e başlamasın.  
**Etki:** Planlar ve wave kapanış raporları artık `ai/` güncelleme kontrolünü içerir. `PROJECT_BRAIN.md` yalnız ürün ruhu/vizyon değişirse güncellenir.

### BK-006: Tasarım Dönüşümü Wave 00–29 Execution Sözleşmesi
**Karar:** Tasarım araştırma/planlama fazı tamamlandı. `Big_Design_Plan.md`, `Design_Wave_Map.md` ve `Design_Wave_Plan.md` implementation sırasında authoritative plan kaynaklarıdır. İlk iş Wave 00'dır; Wave'ler onaylı sırayla ve aynı anda yalnız bir tane uygulanır.  
**Neden:** Foundation, ekran, realtime, responsive ve launch kapanışları gerçek bağımlılıklara sahiptir; paralel veya sırasız uygulama kapsam sızıntısı ve birikimli regression üretir.  
**Etki:** Wave 00–29 sırası/kapsamı/bağımlılıkları kullanıcı onayı olmadan değiştirilemez. Aktif Wave QA, test kanıtı ve kullanıcı onayıyla kapanmadan sonraki Wave başlamaz. Plan yeni özellik, backend/database redesign veya plan dışı UX kararı için yetki vermez. Wave 00–16 QA-closed / kullanıcı onaylıdır. Kullanıcı ayrı mobil board yerine Room Desktop Design Package görsel dilinin canonical mobil kurallara uyarlanmasını Wave 15 için açıkça kabul etti ve Wave 15'i 2026-08-04 tarihinde kapattı; bu karar yeni UX veya sonraki Wave kapsamı açmaz. Wave 16, 2026-08-04 tarihinde kullanıcı kabulüyle kapandı. Execution cursor Wave 17'dir; açık kullanıcı talimatı ve gerekli prompt görselleri olmadan başlatılamaz.

### BK-007: Design Wave QA ile Tarihsel QA Arşivi Ayrıdır
**Karar:** Güncel Design Wave manuel QA dosyaları doğrudan `tests/waveNN-tests.md` altında tutulur. Önceki planların test kayıtları bilinçli tarihsel arşiv olarak `tests/TestOldPlan/` altında kalır; kapanış amacıyla köke geri taşınmaz veya yeni Design Wave kayıtlarıyla karıştırılmaz.  
**Neden:** Eski ve yeni Wave numaralarının aynı test alanında anlam çakışması oluşturmasını önlemek ve her execution planının QA zincirini açık tutmak.  
**Etki:** Eski bir test arşiv dosyasını kökte arayan legacy contract testi stale referans olarak sınıflandırılır; ürün davranışını veya aktif Design Wave kapanışını etkilemiyorsa ilgili Wave dışında refactor edilmez.
---

## Ertelenen / Açık Kararlar

| Konu | Durum | Not |
|------|-------|-----|
| Host browser-close auto-end | Açık | Explicit close korunuyor; diğer seçenekler belgelendi |
| Admin/Moderator rol genişletme | Ertelendi | Ayrı plan ve schema gerektirir |
| Mobile QA ve mobile redesign | Tasarım planında / uygulanmadı | İlgili Wave sahipleri tanımlandı; execution henüz başlamadı |
| Direct messages | Tamamlandı / flag arkasında | Wave 41-42 friends-only DM capability pair kullanıcı onayıyla kapandı; production enable kontrollü yapılır |
| Production DB migration timing | Kısmi | Wave 15'te belgelendi; live switch yapılmadı |
| Wave 39-40 room invites QA | Kapandı | Staging/manual QA kullanıcı onaylı |

### UK-010: Friends-only Direct Messages
**Karar:** Direct messages yalniz confirmed friends arasinda, one-to-one ve `DIRECT_MESSAGES_ENABLED` feature flag arkasinda ilerler. Stranger request, group DM, attachment, edit, unsend, mute, call ve preview fetch yoktur.
**Neden:** Vibehall sosyal katmani oda merkezli ve sakin kalmali; DM sadece olusan guvenli baglari destekler.
**Etki:** Wave 41 backend foundation ve Wave 42 final UX kullanıcı onayıyla kapandı. Sonraki reporting/evidence işleri bu friends-only DM sınırlarını korumalıdır.

### TK-008: DM sent state durable PostgreSQL commit'tir
**Karar:** DM `sent` durumu socket emit degil, `DirectMessage` row'unun PostgreSQL commit olmasidir. Delivery/read cursor'lari ayridir ve monoton ilerler.
**Neden:** Offline delivery, reconnect ve retry/idempotency icin tek authoritative kaynak DB olmalidir.
**Etki:** `clientMessageId` retry duplicate row uretmez; delivered/read socket/API ack'leri cursor state'i ilerletir.
### TK-009: DM gönderim gecikmesi Wave42 blocker değildir
**Karar:** Mesaj gönderirken butonun kısa süre disabled kalması ve mesajın yaklaşık 1-2 sn sonra görünmesi Wave42 kapanışına engel sayılmadı.
**Neden:** Sistem doğru çalışıyor; realtime, read/unread, delete, block/unblock ve SocialRail stabil. Bu davranış kullanıcı hissi/polish seviyesi bir iyileştirme.
**Etki:** İleride optimistic UI, sending state, latency feedback ve retry davranışı birlikte ele alınacak; Wave43'e geçişi engellemez.

### TK-010: Report evidence private, immutable ve report-linked kalır
**Karar:** DM report evidence full-conversation snapshot olarak report anında yakalanır, private evidence bucket'a encrypted object olarak yazılır ve yalnız report-linked admin API üzerinden kısa süreli audited access URL üretir.
**Neden:** Admin review için gerekli bağlam korunmalı ama genel DM/friendship browsing yüzeyi açılmamalı.
**Etki:** Evidence storage başarısızsa DM report oluşturulmaz. Conversation heldForModeration olur; cleanup evidence'ı yok edemez. Wave44 UI bu bounded API'leri kullanmalıdır.

### TK-011: Manrope ve Inter Self-Hosted Fontsource Assetleridir
**Karar:** Wave 01 font foundation'ı kullanıcı onayıyla `@fontsource/manrope` ve `@fontsource/inter` paketlerinden self-hosted latin-ext assetleri kullanır. Yalnız Manrope `600/700` ile Inter `400/500/600` yüklenir; güvenli system fallback zincirleri korunur.  
**Neden:** Canonical Manrope/Inter ayrımını üçüncü taraf runtime font isteği, gizlilik bağımlılığı veya gereksiz weight yükü oluşturmadan deploy artifact'ine dahil etmek.  
**Etki:** Frontend build font assetlerini kendi static çıktısında üretir. Harici Google Fonts isteği yoktur; yeni weight, font ailesi veya delivery yöntemi ayrı gerekçe ve onay olmadan eklenmez.

### TK-012: Canonical State İkon Sistemi Phosphor React'tır
**Karar:** Wave 03 ortak loading, empty, error, connection, retry, action feedback ve toast yüzeylerinde canonical ikon kaynağı olarak `@phosphor-icons/react` kullanılır.  
**Neden:** Kullanıcı canonical ikon sisteminin eklenmesini açıkça onayladı; System States Board metin+ikon ayrımını ortak ve tutarlı tek sahiplikte gerektiriyor.  
**Etki:** State ikonları erişilebilir metin/semantic role yerine geçmez ve dekoratif kullanımda assistive technology'den gizlenir. Wave 03 dışında toplu ikon migration'ı yapılmaz; ikinci bir state icon sistemi eklenmez.
