# Reference Wave — Vibehall Wave 07 Home Giriş Deneyimi

> **REFERENCE ONLY — NON-AUTHORITATIVE**
>
> Bu dosya `Design_Wave_Plan.md` içindeki gerçek Vibehall Wave 07 bölümünün izole quality/depth referansıdır. Project facts, scope, filenames, technologies, completion state veya `[x]` işaretleri başka projeye taşınamaz. Yeni Product Engine wave'i kendi template'i ve current project authorities ile pre-execution state'te üretilir.

---

### Wave 07 — Home Giriş Deneyimi

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-23.

**Hedef:**
Home, ilk viewport'ta Vibehall vaadini, iki gerçek CTA'yı ve gerçek live-room varlığını ferah ve sinematik biçimde teslim eder.

**Neden bu sırada geliyor:**
Home kompozisyonu Wave 04–05 shell sistemlerini ve Wave 06 ortak RoomCard/media yapısını tüketir; bu altyapılar tamamlanmadan ekran ya kendi shell/kart varyantlarını üretir ya da gerçek live-room kanıtını güvenli biçimde gösteremez.

**Bağımlılıklar:**
- Wave 04–06 tamamlanmış olmalıdır.
- Home'daki room verisi mevcut Discover API kontratından gelmelidir.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 07 — Home Giriş Deneyimi`
- `Roads/project-foundation/01-product-definition/product-principles.md`
  - `## 3. Room-First Principle`
  - `## 9. Simple Without Feeling Empty`
- `Design/HOME_DESIGN_PACKAGE.md`
  - `## 2. İlk Beş Saniye Deneyimi`
  - `## 4. Kilitli Desktop Kompozisyon`
  - `## 8. Live Rooms Bölümü`
  - `## 18. Açık Oda Yok Durumu`
  - `## 26. Responsive Davranış`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/HomeShellPage.tsx`, `Vibe frontend/src/pages/DiscoverShellPage.tsx`, `Vibe frontend/src/rooms/roomApi.ts`, `Vibe frontend/src/lib/routes.ts`, `Vibe frontend/src/styles/pages.css`, `Vibe frontend/src/styles/responsive.css` ve Wave 06 shared RoomCard/media sahipliği.

**Görsel referans:**
- Görsel 1: Home Design Package — desktop header, hero mesajı, iki CTA, atmosferik görsel ve ilk viewport'ta başlayan live-room kompozisyonu.
- Görsel 2: Home Design Package — live rooms normal, loading, no-rooms ve lokal error durumları.
- Görsel 3: Home Design Package — tablet ve mobil blok sırası, CTA yoğunluğu ve ilk RoomCard görünürlüğü.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki oda, host, avatar, thumbnail, participant count, ürün claim'i veya dekoratif içerikler temsilîdir; gerçek Discover response'u ve canonical copy sınırları yerine kullanılamaz.

---

**Kapsam içi:**
- Home header entegrasyonu, ilk viewport hero hiyerarşisi ve belgelenmiş iki CTA davranışı.
- Mevcut Discover API'sinden gelen kontrollü live-room subset'i ve Wave 06 RoomCard tüketimi.
- Initial loading, no-live-rooms, lokal error ve auth-session loading durumları.
- Belgelenmiş desktop/mobil kompozisyon, erişilebilirlik, reduced motion ve LCP/layout-shift güvenliği.

**Kapsam dışı:**
- Discover search, category, sort, query URL state veya pagination; Wave 08'e aittir.
- Room Context Auth preview ve güvenli Room return intent; Wave 10'a aittir.
- Global people/video search, editorial recommendation, trending, popularity skoru veya sahte live-room verisi.
- Yeni analytics ürünü, SSR mimarisi, backend endpoint'i, API alanı veya database değişikliği.
- Tek kullanımlık Home parçalarını genel component ailesine dönüştürme; Wave 25 consolidation sorumluluğudur.

---

**Implementation kontrol listesi:**

*Kompozisyon ve gerçek aksiyonlar:*
- [x] `HomeShellPage.tsx` içindeki mevcut hero, preview, story-card ve split-band bloklarını `HOME_DESIGN_PACKAGE.md` hiyerarşisiyle eşleştir; kaldırılan blokların gerçek ürün kabiliyeti kaybettirmediğini doğrula.
- [x] Home route'unu Wave 04–05 `AppShell` header/navigasyonunun tüketicisi olarak bırak; Home'a özel ikinci header veya navigation ağacı oluşturma.
- [x] Hero copy bloğunu gerçek `h1`, kısa destek metni ve belgelenmiş ilk-beş-saniye sırasıyla kur; doğrulanmamış ürün veya aktivite claim'i ekleme.
- [x] `Enter the hall` CTA'sını mevcut custom-router callback'i üzerinden `/discover` hedefine bağla.
- [x] `Open a room` CTA'sını aktif member için `/create-room`, guest için mevcut auth + güvenli `/create-room` return intent akışına bağla.
- [x] CTA görsel önceliğini `Enter the hall` ana keşif aksiyonu ile `Open a room` host aksiyonunun belgelenmiş hiyerarşisine göre doğrula.

*Live-room verisi ve ortak kart tüketimi:*
- [x] Home live-room isteğini `roomApi.ts` içindeki mevcut `listPublicRooms` ve `DiscoverRoomsInput` kontratı üzerinden yap; yeni Home endpoint'i veya duplicate room tipi ekleme.
- [x] Gösterilecek kontrollü subset'i mevcut server-side Discover sırasından ve viewport kapasitesinden üret; hard-coded room, editorial ranking veya yeni trending algoritması kullanma.
- [x] Live-room sonuçlarını yalnız Wave 06 shared RoomCard/media bileşeniyle render et; Home'a özel kart anatomisi veya aura implementation'ı yazma.
- [x] `View all`/Discover aksiyonunu gerçek `/discover` route'una bağla ve Home subset'ini bütün Discover listesi gibi sunma.
- [x] Home isteğinde component unmount, yeni istek veya geç response durumlarında stale verinin güncel sonucu ezmesini engelle.

*State, responsive ve performans:*
- [x] İlk yüklemede hero metnini ve shell'i görünür tut; live-room alanında Wave 03/06 geometrisiyle eşleşen skeleton kartları kullan.
- [x] Hiç live public room yokken sahte kart üretmeden `The hall is quiet right now` yönündeki empty state'i ve gerçek `Open a room` aksiyonunu göster.
- [x] Live-room isteği başarısız olduğunda hero ve shell'i koruyan lokal error/retry yüzeyi sun; bütün Home'u global error ekranına dönüştürme.
- [x] `AuthContext` session kontrolü sürerken header/CTA alanında guest-member layout sıçramasını sınırlayan mevcut shell loading davranışını tüket.
- [x] Prompt'a eklenecek hero görselini bilgi taşıyorsa anlamlı alt metinle, dekoratifse screen reader'dan gizleyerek ve stable boyut ayırarak entegre et.
- [x] Geniş desktop'ta hero ile live-room başlangıcını aynı ilk viewport içinde tut; kartları aşağı iten gereksiz story/dashboard blokları üretme.
- [x] Mobilde minimal header → vaat → destek metni → iki CTA → sadeleştirilmiş atmosfer → ilk RoomCard sırasını koru ve yatay overflow oluşturma.
- [x] Heading sırası, CTA accessible name'leri, RoomCard keyboard erişimi ve minimum `44×44px` touch target'ları ile Home erişilebilirliğini tamamla.
- [x] Hero/aura/CTA geçişlerini mevcut motion tokenlarıyla sınırla; `prefers-reduced-motion` altında parallax, lift, zoom ve sürekli dekoratif hareketi kapat.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Home ve gerçek live-room kartları görünür; `Enter the hall` Discover'a, `Open a room` güvenli auth return intent'e gider.
- [x] Member state — İki CTA gerçek `/discover` ve `/create-room` hedefleriyle çalışır; session hazır olduğunda gereksiz auth gate gösterilmez.
- [-] Host state — Home'da aktif Room hostuna özgü kontrol veya ayrı hero davranışı bulunmuyor.
- [-] Admin state — Home'da admin'e özgü yüzey veya CTA bulunmuyor; admin normal authenticated kullanıcı shell'ini kullanır.
- [x] Loading state — Hero ve shell korunurken RoomCard skeleton'ları gerçek kart geometrisini ayırır; auth kontrolü layout zıplatmaz.
- [x] Empty state — Hiç live public room yokken sahte içerik olmadan sakin açıklama ve `Open a room` aksiyonu görünür.
- [x] Error state — Live-room fetch hatası lokal retry ile ele alınır; Home'un temel vaat ve CTA'ları kullanılabilir kalır.
- [-] Denied / unavailable state — Home public giriş yüzeyidir; Room access denial seçilen Room'un sonraki policy/gate zincirine aittir.
- [-] Reconnecting state — Bu Wave yeni Home realtime socket'i kurmaz; realtime reconnect davranışı Room runtime Wave'lerine aittir.
- [x] Mobile davranışı — Belgelenmiş blok sırası, safe area, okunabilir CTA'lar ve ilk RoomCard yatay overflow olmadan çalışır.
- [x] Klavye / focus davranışı — CTA'lar ve RoomCard'lar mantıklı tab sırası, görünür focus ve açık accessible name taşır.
- [x] Reduced motion davranışı — Atmosfer korunurken parallax/lift/zoom/sürekli hareket kapanır ve bütün bilgi statik olarak erişilebilir kalır.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Home component testleri guest/member CTA hedeflerini, loading/empty/error ayrımını ve yalnız gerçek Discover sonucunun render edildiğini doğruluyor.
- [x] Home route/metadata testi `/` route başlığını, tek `h1` semantiğini ve custom-router navigasyon hedeflerini doğruluyor.
- [x] Browser accessibility/performance kontrolü keyboard akışında kritik ihlal, yatay overflow, belirgin layout shift veya eager yüklenen gereksiz RoomCard medyası olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave07-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası guest ve member için iki Home CTA'sının doğru route/auth sonucuna ulaştığını evet/hayır ile doğruluyor.
- [x] QA dosyası gerçek room, initial loading, hiç-room-yok ve fetch-error durumlarında hero ile live-room alanının doğru kaldığını doğruluyor.
- [x] QA dosyası desktop, tablet ve mobilde ilk vaat, iki CTA ve en az ilk live-room kanıtının doğru görsel sırada olduğunu kontrol ediyor.
- [x] QA dosyası keyboard, screen reader adı, reduced motion, LCP asset ve yatay overflow kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki header → hero → CTA → atmosfer → live rooms blok sırası korundu.
- [x] İlk viewport ana vaat, iki gerçek CTA ve canlı oda varlığını birlikte gösteriyor.
- [x] Görsel odak hiyerarşisi doğru — Ana vaat ve `Enter the hall` baskın, shell ve ikincil bilgiler sakin.
- [x] Tipografi hiyerarşisi doğru — Hero başlığı Manrope, arayüz/copy Inter kullanıyor.
- [x] Accent `#FF625A` yalnız ana CTA, focus ve kontrollü vurgularda kullanıldı; büyük zemine yayılmadı.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti kalıcı hero/form yüzeyine uygulanmadı; varsa yalnız geçici overlay katmanında kaldı.
- [x] Sahte room, host, participant count, popularity, trending veya doğrulanmamış ürün claim'i yok.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi hero, CTA, empty ve error metinlerinde sağlandı.
- [x] Klavye focus görünür ve CTA/RoomCard sırası mantıklı.
- [x] Desktop, tablet ve mobilde yatay overflow yok.
- [x] Mevcut fonksiyonlar korundu — public Home, Discover API, auth session ve custom-router kontratları değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Home ilk viewport'ta doğrulanmış vaat, iki gerçek CTA ve gerçek live-room varlığını aynı hiyerarşide teslim eder.
- [x] Home yalnız mevcut Discover kontratını ve Wave 06 shared RoomCard'ı kullanır; sahte veri veya duplicate kart sistemi içermez.
- [x] Guest/member, loading/empty/error, desktop/mobile, keyboard ve reduced-motion senaryoları staging'de doğrulanmıştır.
- [x] Home assetleri belirgin layout shift veya gereksiz LCP yükü üretmez; shell ve route davranışı korunur.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave07-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 07'yi onayladı ve Codex durdu

---

### Wave 07 Sonucu — 2026-07-23

- Home ilk viewport'u tek gerçek `h1`, canonical vaat, `Enter the hall` ve auth-aware `Open a room` CTA'ları, dekoratif optimize WebP atmosferi ve gerçek live-room başlangıcıyla tamamlandı.
- Home yalnız mevcut Discover `listPublicRooms` kontratını, Wave 03 state primitive'lerini ve Wave 06 shared RoomCard'ı tüketir; public/live filtre, altı oda sınırı, server sırası ve stale-response koruması eklendi.
- Guest/member CTA, loading/empty/error/retry, keyboard/focus, reduced-motion, responsive ve yatay overflow sınırları doğrulandı; backend, API, database, auth, realtime ve route kontratları değiştirilmedi.
- Member Social Rail sonrası ana yüzeyi sola sabitleyen shell geometrisi QA sırasında bulundu ve kökten düzeltildi; rail genişliği kullanılabilir alandan düşülerek Home ve Discover kalan desktop alanında dengeli biçimde ortalandı.
- Frontend typecheck ve build geçti; Vitest tam suite `87/87`, focused Wave 07 suite `6/6`, Wave 07 Chromium E2E `4/4`, responsive shell E2E `4/4` ve Social Rail E2E `3/3` geçti. Mevcut `500 kB` üzeri chunk uyarısı blocker değildir.
- `tests/wave07-tests.md` içindeki 85 QA maddesi kullanıcı kabulüyle tamamlandı; blocker bildirilmedi ve kullanıcı Wave 07 için 2026-07-23 tarihinde açık kapanış onayı verdi.
- Wave 07 QA-closed oldu. Wave 08 yalnız sıradaki Wave olarak kaydedildi; implementation veya hazırlık çalışması başlatılmadan Codex durdu.
