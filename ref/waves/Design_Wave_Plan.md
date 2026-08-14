# Vibehall Design Wave Plan

> **Belge durumu:** Wave 00–18 kullanıcı kabulüyle QA-closed. Wave 19–28 implementation/test hazırlığı tamamlandı; kullanıcı talimatıyla hazırlanmış otomatik testler/runtime ölçümleri/staging/manual QA bütün Wave'lerin sonundaki toplu tura ertelendi. Wave 19–28 QA-closed değildir.
> **Son kapanan Wave:** Wave 18 — Social Hub Foundation, Friends ve Reconnection (2026-08-11)
> **Execution cursor:** Wave 28 — ölçülmüş frontend route/font optimizasyonu ve frontend/backend test paketi hazırlandı; frontend typecheck/build geçti. Hazırlanmış Vitest/Playwright/backend doğrulamaları, LCP/CLS/reconnect ölçümleri, staging/manual QA ve kullanıcı onayı toplu tura ertelendi. Wave 24 dead-letter row Retry blocker'ı açık kalır. Wave 29 başlatılmadı.
> **Wave kaynağı:** `Design_Wave_Map.md`
> **Template kaynağı:** `Big_Design_Plan.md`
> **Kapsam:** Mevcut ürün kabiliyetlerini ve canonical sözleşmeleri koruyarak Vibehall tasarım dönüşümünün uygulanması.
> **Kural:** Wave sırası, kapsamı ve bağımlılıkları kullanıcı onayı olmadan değiştirilemez.

## Kullanım Protokolü

1. Önce `ai/` klasöründeki zorunlu proje bağlamını oku.
2. Ardından `Big_Design_Plan.md` içindeki plan sözleşmelerini oku.
3. Aktif Wave’in bu dosyadaki bölümünü oku.
4. Aktif Wave’de belirtilen canonical ve Design referanslarını incele.
5. Yalnızca aktif Wave’i uygula.
6. QA, test kanıtı ve kullanıcı onayı olmadan sonraki Wave’e geçme.

## Wave Index

- [Wave 00 — Mevcut Sistem Envanteri ve Göç Güvenlik Sınırı](#wave-00--mevcut-sistem-envanteri-ve-göç-güvenlik-sınırı)
- [Wave 01 — Design Tokenları ve Görsel Foundation](#wave-01--design-tokenları-ve-görsel-foundation)
- [Wave 02 — Ortak Kontroller, Kimlik ve Overlay Primitive'leri](#wave-02--ortak-kontroller-kimlik-ve-overlay-primitiveleri)
- [Wave 03 — Ortak Loading, Empty, Error ve Feedback Sistemi](#wave-03--ortak-loading-empty-error-ve-feedback-sistemi)
- [Wave 04 — Desktop Global Shell ve Navigasyon](#wave-04--desktop-global-shell-ve-navigasyon)
- [Wave 05 — Tablet ve Mobil Shell](#wave-05--tablet-ve-mobil-shell)
- [Wave 06 — Ortak RoomCard, Medya ve Aura Foundation](#wave-06--ortak-roomcard-medya-ve-aura-foundation)
- [Wave 07 — Home Giriş Deneyimi](#wave-07--home-giriş-deneyimi)
- [Wave 08 — Discover Koridoru ve Query Deneyimi](#wave-08--discover-koridoru-ve-query-deneyimi)
- [Wave 09 — Normal Auth Görsel Foundation](#wave-09--normal-auth-görsel-foundation)
- [Wave 10 — Room Context Auth Gate ve Return Intent](#wave-10--room-context-auth-gate-ve-return-intent)
- [Wave 11 — Create Room ve Host Olarak Geçiş](#wave-11--create-room-ve-host-olarak-geçiş)
- [Wave 12 — Room Ortak Runtime ve Lifecycle State Foundation](#wave-12--room-ortak-runtime-ve-lifecycle-state-foundation)
- [Wave 13 — Room Desktop Participant ve Cinematic Deneyimi](#wave-13--room-desktop-participant-ve-cinematic-deneyimi)
- [Wave 14 — Room Desktop Host, Moderasyon ve Kapanış](#wave-14--room-desktop-host-moderasyon-ve-kapanış)
- [Wave 15 — Room Mobile Deneyimi](#wave-15--room-mobile-deneyimi)
- [Wave 16 — Own ve Public Profile Deneyimi](#wave-16--own-ve-public-profile-deneyimi)
- [Wave 17 — Settings, Privacy ve Account Safety](#wave-17--settings-privacy-ve-account-safety)
- [Wave 18 — Social Hub Foundation, Friends ve Reconnection](#wave-18--social-hub-foundation-friends-ve-reconnection)
- [Wave 19 — Social Invites, Blocked ve Mobil Kapanış](#wave-19--social-invites-blocked-ve-mobil-kapanış)
- [Wave 20 — Messages Desktop ve DM Güvenilirliği](#wave-20--messages-desktop-ve-dm-güvenilirliği)
- [Wave 21 — Messages Mobile ve Invite Entegrasyonu](#wave-21--messages-mobile-ve-invite-entegrasyonu)
- [Wave 22 — Utility, Legal, Support ve System Pages](#wave-22--utility-legal-support-ve-system-pages)
- [Wave 23 — Admin Design Foundation](#wave-23--admin-design-foundation)
- [Wave 24 — Admin Surface Migration ve Operasyonel State'ler](#wave-24--admin-surface-migration-ve-operasyonel-stateler)
- [Wave 25 — Ortak Component Consolidation ve Stil Borcu Kapanışı](#wave-25--ortak-component-consolidation-ve-stil-borcu-kapanışı)
- [Wave 26 — Responsive, Accessibility ve Reduced Motion Yatay Kapanışı](#wave-26--responsive-accessibility-ve-reduced-motion-yatay-kapanışı)
- [Wave 27 — Uçtan Uca Entegrasyon ve Regression](#wave-27--uçtan-uca-entegrasyon-ve-regression)
- [Wave 28 — Performans ve Production Readiness](#wave-28--performans-ve-production-readiness)
- [Wave 29 — Global Launch Final QA ve Polish](#wave-29--global-launch-final-qa-ve-polish)

---

### Wave 00 — Mevcut Sistem Envanteri ve Göç Güvenlik Sınırı

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-18.

**Hedef:**
Mevcut route, ekran, component, CSS, state, rol ve API/realtime bağımlılıklarının doğrulanmış bir başlangıç envanteri ile tasarım göç sınırı ortaya çıkar.

**Neden bu sırada geliyor:**
Foundation değişikliklerinin hangi gerçek bileşenleri etkilediği bilinmeden token veya shell göçü güvenle başlatılamaz; bu Wave yalnız read-only inceleme ve dokümantasyonla sonraki Wave’lerin tahmine dayalı dosya veya davranış değişikliği yapmasını önler.

**Bağımlılıklar:**
- `ai/` güncel durumu ve `Big_Design_Plan.md` sözleşmeleri okunmuş olmalıdır.
- Frontend ve backend yalnız read-only gerçeklik referansı olarak incelenmelidir.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/NEXT_TASKS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `## 1. Plan Sözleşmeleri`
  - `## 3. Genel Tamamlama ve QA Kuralları`
- `Design_Wave_Map.md`
  - `### Wave 00 — Mevcut Sistem Envanteri ve Göç Güvenlik Sınırı`
- `Roads/project-foundation/02-system-definition/frontend-modules.md`
  - `## 3. Core Frontend Structure Principle`
  - `## 23. Frontend Boundary Rule`
- `Design/README.md`
  - `## Kullanım Kuralları`
  - `## Doküman Dizini`
- Uygulanabilirlik için read-only gerçeklik referansları: `Vibe frontend/src/App.tsx`, `Vibe frontend/src/lib/routes.ts`, `Vibe frontend/src/components/AppShell.tsx`, `Vibe frontend/src/pages/`, `Vibe frontend/src/styles.css`, `Vibe frontend/src/styles/`, `Vibe frontend/src/rooms/roomApi.ts`, `Vibe frontend/src/rooms/realtimeClient.ts` ve karşılık gelen `Vibe backend/src/` modülleri.

**Görsel referans:**
- [-] Görsel implementation bulunmuyor — Bu Wave yalnız mevcut sistemi, staging davranışını ve migration sınırını envanterler.

> Bu Wave için prompt’a tasarım görseli eklenmesi gerekmez. Sonraki görsel Wave’lerde kullanılacak referansların dosya sisteminden okunacağı varsayılmaz.

---

**Kapsam içi:**
- Custom router, AppShell, sayfalar, ortak/social/room/admin bileşenleri ve stil katmanlarının sahiplik haritası.
- Guest, member, host ve admin route/state matrisi ile mevcut loading/error/reconnect yüzeyleri.
- Korunacak REST/WebSocket/auth kontratları ve görsel regression başlangıç yüzeyleri.
- Yalnız inceleme, envanter, doğrulama ve Wave kapanış dokümantasyonu.

**Kapsam dışı:**
- Görsel değişiklik, component refactor’ı veya CSS migration’ı.
- Frontend davranışı, route, auth, API veya realtime akışı değiştirme.
- Backend/database sözleşmesi, schema veya migration değiştirme.
- Yeni test kodu, component veya ürün davranışı oluşturma.

---

**Implementation kontrol listesi:**

*Zorunlu bağlam ve repository baseline:*
- [x] `ai/` klasöründeki zorunlu dosyaları okuyup aktif durum, kapalı planlar, açık teknik borçlar ve korunacak çalışma sınırlarını Wave 00 notlarında kaydet.
- [x] `Vibe frontend/`, `Vibe backend/` ve üst local-only planlama alanının repository sınırlarını ve başlangıç worktree durumlarını değiştirmeden doğrula.
- [x] `Vibe frontend/package.json` ve `Vibe backend/package.json` script’lerini doğrulayıp Wave 00 başlangıç typecheck/build/test komut matrisini kaydet.
- [x] Mevcut frontend ve backend typecheck/build sonuçlarını baseline kanıtı olarak kaydet; başarısızlık varsa tasarım migration’ına başlamadan mevcut hata olarak sınıflandır.

*Route, component ve stil envanteri:*
- [x] `Vibe frontend/src/lib/routes.ts` içindeki bütün route tanımlarını gerçek page component, erişim türü ve primary-nav görünürlüğüyle eşleştir.
- [x] `Vibe frontend/src/App.tsx` içindeki custom route matching, `history.pushState` ve `vibehall:before-navigate` davranışını route envanterine ekle.
- [x] `AppShell.tsx`, `RoomShellPage.tsx`, `AdminShellPage.tsx`, social bileşenleri ve mevcut shared component’ler için tekil teknik sahiplik haritası çıkar.
- [x] `Vibe frontend/src/styles.css` import sırası ile `tokens.css`, `base.css`, `shell.css`, `primitives.css`, `forms.css`, `feedback.css`, `pages.css`, `room.css`, `admin.css` ve `responsive.css` sorumluluklarını eşleştir.
- [x] Kullanılan CSS custom property’lerini, hard-coded görsel değerleri ve tanımsız veya çakışan token referanslarını dosya ve selector düzeyinde envanterle.
- [x] Inline veya tekrar eden button, form, avatar, overlay, loading/error/empty ve RoomCard kalıplarını yeniden yazmadan kaynak konumlarıyla işaretle.
- [x] Mevcut breakpoint, yatay overflow, focus-visible ve `prefers-reduced-motion` davranışlarını desktop/tablet/mobile yüzeyleriyle eşleştir.

*State, rol ve kontrat baseline’ı:*
- [x] Guest, member, host ve admin için erişilebilir route’ları, görünür shell aksiyonlarını ve denied/unavailable sonuçlarını ayrı satırlarda doğrula.
- [x] Initial loading, refresh, local loading, empty, error, denied, unavailable, offline ve reconnecting sunumlarını gerçek component veya page sahipleriyle eşleştir.
- [x] Frontend `roomApi.ts`, auth/social/content/admin API client tiplerini karşılık gelen backend route ve authorization noktalarıyla read-only olarak doğrula.
- [x] `realtimeClient.ts` event ailelerini ve Room/Social/DM tüketicilerini event adı, HTTP reconcile noktası ve UI sahibiyle eşleştir.
- [x] Room route’unda mevcut global shell/footer/rail davranışı, Discover içindeki inline RoomCard ve büyük monolitik page component’leri migration riski olarak açıkça kaydet.
- [x] Doğrulanmış route/component/CSS/state/contract baseline’ını Wave 00 kapanışında `ai/TECH_CONTEXT.md` içinde tarihli tek bir migration-baseline bölümü olarak belgele; kod dosyası değiştirme.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Public route, shell ve auth-gate başlangıç davranışları envanterlenecek.
- [x] Member state — Member-only route ve shell aksiyonları envanterlenecek.
- [x] Host state — Room içindeki host rolü ve global shell sınırı envanterlenecek.
- [x] Admin state — `/admin` erişimi, normal shell görünürlüğü ve admin shell sınırı envanterlenecek.
- [x] Loading state — Initial, refresh ve lokal loading sahipleri kaydedilecek.
- [x] Empty state — Gerçek boş veri ile filtre sonucu boşluğu ayrıştırılacak.
- [x] Error state — Lokal, bölüm, sayfa ve kritik hata yüzeyleri kaydedilecek.
- [x] Denied / unavailable state — Auth, role, room access ve feature-unavailable sonuçları eşlenecek.
- [x] Reconnecting state — Room, Social ve DM reconnect göstergeleri ve reconcile sahipleri kaydedilecek.
- [x] Mobile davranışı — Mevcut breakpoint ve dar ekran shell/layout davranışları envanterlenecek.
- [x] Klavye / focus davranışı — Route, menu, overlay ve retry focus davranışları envanterlenecek.
- [x] Reduced motion davranışı — Global ve bileşen düzeyindeki mevcut destek doğrulanacak.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend mevcut Vitest suite’i geçiyor (`npm run test`)
- [x] Frontend route inventory testi gerçek `routes.ts` içeriğiyle uyumlu geçiyor.
- [-] Backend typecheck geçiyor — Backend değişikliği yapılmayacak; mevcut sonuç yalnız baseline olarak kaydedilecek.
- [-] Backend build geçiyor — Backend değişikliği yapılmayacak; mevcut sonuç yalnız baseline olarak kaydedilecek.

---

**Manuel QA dosyası:**
- [x] `tests/wave00-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası, staging’deki bütün mevcut route’ların açılıp açılmadığını guest/member/admin bağlamlarında evet/hayır ile doğruluyor.
- [x] QA dosyası, en az bir loading, empty, error, denied/unavailable ve reconnecting örneğinin baseline envanterinde gerçek sahibiyle bulunup bulunmadığını doğruluyor.
- [x] QA dosyası, başarısız frontend veya backend isteğinin raw teknik veri sızdırıp sızdırmadığını kontrol ediyor.

---

**Debug ve doğrulama kontrol listesi:**
- [-] Görsel referanstaki blok sırası korundu — Wave 00 görsel implementation yapmıyor.
- [-] Ana oranlar korundu — Wave 00 layout değiştirmiyor.
- [-] Görsel odak hiyerarşisi doğru — Wave 00 görsel karar uygulamıyor.
- [-] Tipografi hiyerarşisi doğru uygulandı — Wave 00 tipografi değiştirmiyor.
- [-] Accent `#FF625A` kontrollü kullanıldı — Wave 00 renk değiştirmiyor.
- [-] Derinlik sistemi üç katmanda kaldı — Wave 00 yüzey değiştirmiyor.
- [-] Cam efekti yalnızca geçici katmanlarda kullanıldı — Wave 00 yüzey değiştirmiyor.
- [x] Sahte içerik veya sahte aktivite bulunan mevcut yüzeyler varsa baseline’da açıkça işaretlendi.
- [x] `prefers-reduced-motion` mevcut uygulaması dosya ve selector düzeyinde doğrulandı.
- [x] WCAG AA kontrast riski taşıyan mevcut token veya yüzeyler kanıtsız düzeltilmeden kaydedildi.
- [x] Klavye focus görünürlüğü route ve overlay matrisi içinde doğrulandı.
- [x] Yatay overflow üreten mevcut yüzeyler viewport bilgisiyle kaydedildi.
- [x] Mevcut fonksiyonlar korundu — Audit sırasında API kontratı, auth veya realtime davranışı değiştirilmedi.
- [-] Görsel referanstan açıklanmamış sapma yok — Wave 00 için görsel referans gerekmiyor.

---

**Çıkış kriterleri:**
- [x] Bütün mevcut route’lar page component, shell varyantı ve rol erişimiyle eşlendi.
- [x] Component/CSS/state sahiplik haritası sonraki Wave’lerin dosya sınırlarını tahminsiz belirleyebilecek ayrıntıda tamamlandı.
- [x] Korunacak REST, auth ve realtime kontratları ile bilinen migration riskleri dokümante edildi.
- [x] Wave 00 sırasında frontend, backend veya database kodu değiştirilmedi.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave00-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 00'ı onayladı ve Codex durdu

---

### Wave 00 Sonucu — 2026-07-18

- Read-only route, component, CSS, state/rol, REST, auth ve realtime envanteri tamamlandı; tarihli migration baseline'ı `ai/TECH_CONTEXT.md` içine kaydedildi.
- `tests/wave00-tests.md` kullanıcı kabulüyle tamamlandı; manual QA blocker'ı bildirilmedi.
- Frontend typecheck, build, Vitest ve route inventory doğrulamaları geçti. Backend typecheck/build baseline'ı geçti.
- Backend full Vitest'teki tek eski QA-path hatası, tarihsel testlerin bilinçli olarak `tests/TestOldPlan/` altında tutulması nedeniyle eski kök path'i arayan stale Wave 46 test referansıdır; ürün davranışı veya Wave 00 için blocker değildir.
- Frontend, backend, database, route, API, auth, realtime, component ve style kodu değiştirilmedi.
- Wave 00 kullanıcı tarafından onaylanıp QA-closed durumuna getirildi. Wave 01 başlatılmadan Codex durdu.

---

### Wave 01 — Design Tokenları ve Görsel Foundation

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-20.

**Hedef:**
Kilitli renk, tipografi, spacing, yüzey, radius, border, shadow, motion ve z-index kararları merkezi token sisteminde doğrulanabilir hâle gelir.

**Neden bu sırada geliyor:**
Bütün primitive ve ekranlar aynı değerleri tükettiği için görsel foundation ilk kod değişikliği olmalıdır; Wave 00 envanteri mevcut token tüketicilerini ve kontrollü migration sınırını belirlemeden bu değişiklik güvenle yapılamaz.

**Bağımlılıklar:**
- Wave 00 envanteri tamamlanmış olmalıdır.
- Global launch planındaki değişmez tasarım kararları çatışmasız doğrulanmış olmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.2 Kaynak hiyerarşisi`
  - `### 1.4 Tasarım değişmezleri`
- `Design_Wave_Map.md`
  - `### Wave 01 — Design Tokenları ve Görsel Foundation`
- `Roads/project-foundation/07-roadmaps/plans/Vibehall-Global-Launch-Readiness&Product-Polish-Plan.md`
  - `# Vibehall Görsel Sistem Kararları`
  - `# Tasarım Sistemi Kesin Kararları`
- `Design/DESIGN_SYSTEM_COMPONENT_BOARD.md`
  - `## 2. Kesin Renk Sistemi`
  - `## 5. Üç Seviyeli Yüzey Sistemi`
  - `## 7. Tipografi Sistemi`
  - `## 34. Teknik Uygulama Yaklaşımı`
- Uygulanabilirlik referansları: `Vibe frontend/src/styles/tokens.css`, `Vibe frontend/src/styles/base.css`, `Vibe frontend/src/styles.css`, `Vibe frontend/index.html` ve Wave 00 CSS/token envanteri.

**Görsel referans:**
- Görsel 1: Design System Component Board — kesin renkler, yüzeyler, tipografi, radius, spacing, shadow ve motion örnekleri.
- Görsel 2: Global görsel sistem referansı — karanlık kabuk, kontrollü nar çiçeği accent ve üç seviyeli derinlik karakteri.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki mor/ultraviyole renkler veya temsilî component içerikleri gerçek token ve ürün sözleşmelerinin yerine geçmez; canonical `#FF625A` accent ve mevcut gerçek veri sınırları korunur.

---

**Kapsam içi:**
- Manrope/Inter, kesin palette ve üç katmanlı yüzey sistemi.
- Spacing, radius, border, shadow, motion duration/easing ve merkezi z-index tokenları.
- Global focus ve `prefers-reduced-motion` temel değişkenleri.
- Mevcut CSS tüketicilerini bozmayan kontrollü token alias/migration katmanı.

**Kapsam dışı:**
- Ekran kompozisyonu, route veya component davranışı değiştirme.
- Button, form, overlay, state, shell veya RoomCard bileşenlerini bu Wave’de yeniden kurma.
- Yeni tema, light mode veya kullanıcı seçilebilir accent.
- Wave 25’e ait genel selector/component consolidation ve sayfa bazlı stil temizliği.
- Backend, database, auth, API veya realtime değişikliği.

---

**Implementation kontrol listesi:**

*Token sözleşmesi:*
- [x] Wave 00 CSS envanterindeki mevcut custom property’leri canonical color, surface, text, border, radius, spacing, typography, shadow, motion ve z-index ailelerine tek tek eşleştir.
- [x] `Vibe frontend/src/styles/tokens.css` içindeki Hall, normal, elevated ve hover surface değerlerini sırasıyla `#090A0F`, `#10121A`, `#171A24` ve `#1D2130` kararlarıyla hizala.
- [x] Primary, secondary, muted ve disabled text tokenlarını canonical değerlerle hizala; saf beyazı uzun metnin varsayılanı yapma.
- [x] Accent, hover, pressed, soft, focus ve accent-on-text tokenlarını `#FF625A` ailesine taşı; marka rengi ile success/warning/error renklerini ayır.
- [x] Normal ve active border tokenlarını canonical opaklıklarla tanımla; her yüzeye otomatik border ekleme.
- [x] Üç seviyeli mat yüzey ile yalnız geçici katmanlarda kullanılacak glass background, blur, border ve shadow tokenlarını ayrı aileler olarak tanımla.

*Tipografi, geometri ve spacing:*
- [x] Manrope ve Inter’ın asset teslim yöntemini mevcut deployment, gizlilik ve dependency sınırlarıyla doğrula; yeni harici kaynak veya package gerekiyorsa kullanıcı onayı almadan dependency ekleme.
- [x] Manrope başlık ve Inter arayüz ailelerini font fallback’leriyle merkezi tokenlara bağla; gereksiz font weight yükleme.
- [x] Hero, page, section, card/title, body, helper ve caption ölçeklerini desktop/mobile sınırlarıyla tokenlaştır.
- [x] `4/8/12/16/24/32/48/64–96px` spacing sistemi ile desktop/tablet/mobile page gutter ve kontrollü container tokenlarını merkezileştir.
- [x] Küçük, normal, büyük yüzey, modal/bottom-sheet ve dairesel avatar radius tokenlarını canonical `10/14/18/22px` sistemine hizala.
- [x] Normal surface, focus surface, transient glass ve action/focus kullanımını ayıran sınırlı shadow tokenlarını tanımla.

*Motion, focus ve migration güvenliği:*
- [x] Instant feedback, surface transition ve spatial transition süre/easing tokenlarını sakin motion sözleşmesine göre tanımla.
- [x] Sticky/menu/overlay/modal/critical ve mevcut player katmanlarını çakışmasız merkezi z-index token ailesinde belgeleyip tanımla.
- [x] En az `2px` görünür focus ring, gerektiğinde yardımcı açık halka ve focus offset değerlerini merkezi tokenlara bağla.
- [x] `Vibe frontend/src/styles/base.css` içindeki global `prefers-reduced-motion` davranışını motion tokenlarıyla hizala; işlevsel feedback’i kapatma.
- [x] `Vibe frontend/index.html` içindeki `theme-color` değerini canonical Hall zeminiyle hizala; logo/favikon tasarımını değiştirme.
- [x] Eski token adlarını kullanan mevcut ekranların build-stable kalması için yalnız gerekli semantic alias’ları tanımla; aynı kavram için paralel kalıcı token sistemi oluşturma.
- [x] `base.css` ve foundation düzeyindeki global kuralları yeni tokenları tüketecek şekilde güncelle; sayfa kompozisyonu veya component selector davranışı değiştirme.
- [x] CSS genelinde tanımsız custom property, eski paletteye ait foundation değeri ve canonical dışı yeni yüzey/radius tokenı kalmadığını otomatik taramayla doğrula.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Public ve auth yüzeyleri aynı global color/type/focus tokenlarını tüketiyor.
- [x] Member state — Member shell ve ekranları token değişiminde okunabilir ve build-stable kalıyor.
- [x] Host state — Room’a özgü davranış değişmeden host yüzeyleri aynı foundation tokenlarını tüketiyor.
- [x] Admin state — Admin davranışı değişmeden ortak token alias’larıyla okunabilir kalıyor.
- [x] Loading state — Loader/skeleton için motion, surface ve state-color tokenları mevcut.
- [x] Empty state — Empty yüzeyleri için canonical surface/text tokenları mevcut.
- [x] Error state — Error rengi accent’ten ayrılmış ve renk dışında anlam desteğine uygun.
- [x] Denied / unavailable state — Warning/error/information tokenları güvenli ayrımı destekliyor.
- [x] Reconnecting state — Reconnect yüzeyi ve motion’ı için ortak tokenlar mevcut.
- [x] Mobile davranışı — Font ölçeği, gutter ve spacing tokenları küçük viewport’ta taşma üretmiyor.
- [x] Klavye / focus davranışı — Focus tokenları bütün interaktif yüzeylerde görünür kalıyor.
- [x] Reduced motion davranışı — Motion tokenları azaltılmış hareket tercihinde işlevsel feedback’i koruyor.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite’i geçiyor (`npm run test`)
- [x] Token kontrat testi kesin palette, typography, radius, motion ve z-index ailelerinin tek merkezi kaynaktan geldiğini doğruluyor.
- [x] CSS custom property taraması tanımsız token referansı bulmuyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave01-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası Home, Discover, Auth, Room, Profile ve Admin başlangıç yüzeylerinde Hall/surface/text/accent tokenlarının canonical değerlere uyup uymadığını evet/hayır ile kontrol ediyor.
- [x] QA dosyası Manrope başlıkların ve Inter arayüz metinlerinin font yükleme başarısı ile güvenli fallback durumunu ayrı ayrı doğruluyor.
- [x] QA dosyası normal ve reduced-motion modlarında focus, transition ve loading göstergelerinin işlevsel kalıp kalmadığını kontrol ediyor.
- [x] QA dosyası token yüklenememesi veya font asset failure durumunda içerik okunabilirliğinin ve layout’un korunup korunmadığını kontrol ediyor.

---

**Debug ve doğrulama kontrol listesi:**
- [-] Görsel referanstaki blok sırası korundu — Wave 01 ekran kompozisyonu değiştirmiyor.
- [-] Ana oranlar korundu — Wave 01 layout oranı değiştirmiyor.
- [x] Görsel odak hiyerarşisi doğru — Token değişimi video/thumbnail odağını navigasyondan daha zayıf hâle getirmiyor.
- [x] Tipografi hiyerarşisi doğru — Manrope başlık, Inter arayüz alanlarında kullanılıyor.
- [x] Accent `#FF625A` kontrollü kullanıldı — Büyük yüzey veya genel arka plan rengine dönüşmedi.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız geçici katman tokenı olarak tanımlandı; normal surface varsayılanı olmadı.
- [x] Sahte içerik veya sahte aktivite eklenmedi.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi normal metinlerde sağlandı.
- [x] Klavye focus görünür.
- [x] Token, font veya gutter değişimi yatay overflow üretmedi.
- [x] Mevcut fonksiyonlar korundu — API kontratları, auth ve realtime davranışı değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] `tokens.css` canonical palette, typography, spacing, radius, border, shadow, motion ve z-index ailelerinin tek merkezi kaynağıdır.
- [x] Manrope/Inter ve focus/reduced-motion foundation’ı desktop ve mobile’da doğrulanmıştır.
- [x] Mevcut ekranlar semantic alias/migration katmanıyla typecheck/build geçer ve davranışsal regression üretmez.
- [x] Yeni tema, light mode, seçilebilir accent veya ekran kompozisyonu eklenmemiştir.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave01-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 01'i onayladı ve Codex durdu

---

### Wave 01 Sonucu — 2026-07-20

- Canonical Hall, üç seviyeli yüzey, text, border, `#FF625A` accent, semantic state, spacing, container, radius, shadow, glass, motion, focus ve z-index token aileleri `Vibe frontend/src/styles/tokens.css` içinde merkezi hâle getirildi.
- Manrope `600/700` ve Inter `400/500/600` latin-ext assetleri kullanıcı onayıyla `@fontsource` paketlerinden self-hosted olarak bağlandı; güvenli system fallback zincirleri korundu.
- Global typography, reduced-motion, responsive gutter/type aliasları ve browser `theme-color` canonical foundation ile hizalandı. Mevcut semantic alias katmanı korunarak route veya component davranışı değiştirilmedi.
- Frontend typecheck ve build geçti. Vitest suite'i 3 dosyada 17/17; Wave 01 token contract testi 7/7 geçti. CSS custom property taraması tanımsız veya self-referencing token bulmadı.
- `tests/wave01-tests.md` staging/manual QA kaydı kullanıcı tarafından 2026-07-20 tarihinde tamamlandı. Blocker bildirilmedi ve Wave 01 açık kullanıcı onayıyla QA-closed oldu.
- Primary action focus halkasının tonu kullanıcı tarafından tam nar çiçeği gibi algılanmadı; halka görünür ve işlevsel bulunduğu için non-blocker olarak kaydedildi. İlgili kontrol/görsel polish Wave'inde canonical focus tokenı korunarak yeniden gözlemlenecek.
- Backend, database, API, auth, realtime, route, component kompozisyonu, logo/favikon ve yeni tema davranışı değiştirilmedi. Wave 02 implementation'ı başlatılmadı.

---

### Wave 02 — Ortak Kontroller, Kimlik ve Overlay Primitive'leri

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-20.

**Hedef:**
Ekranların yeniden kullanacağı erişilebilir kontrol, form, kimlik, yüzey ve geçici katman primitive ailesi tamamlanır.

**Neden bu sırada geliyor:**
State sistemi, shell ve ekranlar ortak Button/FormField/Modal/Drawer ailesine dayanır; Wave 01 token sözleşmesi sabitlenmeden veya Wave 00 mevcut kullanım haritası görülmeden ekran bazlı kopyalar güvenle ortaklaştırılamaz.

**Bağımlılıklar:**
- Wave 01 token sözleşmesi tamamlanmış olmalıdır.
- Mevcut component kullanımları Wave 00 envanterine göre eşlenmiş olmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.3 Repository sınırı`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 02 — Ortak Kontroller, Kimlik ve Overlay Primitive'leri`
- `Roads/project-foundation/02-system-definition/frontend-modules.md`
  - `## 20. Shared UI Components Module`
- `Design/DESIGN_SYSTEM_COMPONENT_BOARD.md`
  - `## 10. Buton Sistemi`
  - `## 12. Input ve Form Alanları`
  - `## 14. Avatar Sistemi`
  - `## 18. Modal`
  - `## 19. Side Panel`
  - `## 20. Bottom Sheet`
- Uygulanabilirlik referansları: `Vibe frontend/src/styles/primitives.css`, `Vibe frontend/src/styles/forms.css`, `Vibe frontend/src/styles/shell.css`, `Vibe frontend/src/components/`, `Vibe frontend/src/users/ProfileIdentityCard.tsx`, `Vibe frontend/src/social/SocialIdentity.tsx`, `Vibe frontend/src/social/ReportDialog.tsx` ve Wave 00 tekrar envanteri.

**Görsel referans:**
- Görsel 1: Design System Component Board — button, IconButton, input, textarea, select, FormField ve validation durumları.
- Görsel 2: Design System Component Board — avatar, gerçek badge/status ve Surface/Panel ailesi.
- Görsel 3: Design System Component Board — modal, menu/popover, side panel, drawer ve bottom-sheet geçici katmanları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki moderator, verified, premium, paylaşım servisi veya temsilî form seçenekleri gerçek capability sayılmaz; yalnız mevcut ürün ve veri kontratları uygulanır.

---

**Kapsam içi:**
- Button/IconButton, input/textarea/select, FormField, validation ve focus davranışı.
- Avatar, gerçek badge/status indicator ve temel Surface/Panel bileşenleri.
- Modal, popover/menu, side panel, drawer/bottom sheet ve focus/escape/restore davranışı.
- Canonical belgelerde gerçekten ortak olduğu doğrulanmış primitive’lerin mevcut kullanımları bozmayacak kontrollü migration’ı.

**Kapsam dışı:**
- Moderator, verified, premium veya görseldeki temsilî ürün öğeleri.
- Sayfaya özgü layout, data fetching, copy veya route davranışı.
- EmptyState, PageError, Toast ve ReconnectBanner sistemi; Wave 03’e aittir.
- Global desktop/mobile shell kompozisyonu; Wave 04 ve 05’e aittir.
- Tek kullanımlık ekran parçalarını gelecekte kullanılabilir varsayımıyla ortaklaştırma veya Wave 25 consolidation kapsamını erkene alma.
- Backend, database, auth, API veya realtime sözleşmesi değiştirme.

---

**Implementation kontrol listesi:**

*Kontrol ve form primitive’leri:*
- [x] Wave 00 envanterindeki mevcut `.primary-action`, `.secondary-action`, `.danger-action`, `.text-action` ve button kullanımlarını canonical Button/IconButton varyantlarına eşleştir; kullanılmayan yeni varyant üretme.
- [x] Shared component sahipliğinde Button API’sini primary, secondary, text ve yalnız mevcut destructive kullanım için danger varyantlarıyla tanımla.
- [x] IconButton için minimum `44×44px` hit area, açık accessible name ve tooltip/focus eşdeğerini tanımla; emoji veya karışık ikon ailesi kullanma ve Phosphor kaynağı yeni dependency gerektiriyorsa kullanıcı onayı almadan ekleme.
- [x] Small/default/large button ölçülerini, hover/pressed/focus/disabled/loading durumlarını Wave 01 tokenlarıyla uygula; loading sırasında genişlik ve label bağlamını koru.
- [x] `Vibe frontend/src/styles/forms.css` içindeki input, textarea ve select taban stillerini ortak minimum yükseklik, mat yüzey, border ve focus kurallarıyla hizala.
- [x] FormField sahipliğinde görünür label, optional hint, required işareti, error id ve `aria-describedby`/`aria-invalid` bağlantısını tek sözleşmede tanımla.
- [x] Validation mesajlarını alanın yanında, düzeltilebilir ve raw backend detayından arındırılmış biçimde sun; yalnız kırmızı border’a güvenme.
- [-] Mevcut checkbox/radio kullanımları varsa aynı label, focus ve touch-target sözleşmesine uyarlayıp yeni ürün seçeneği ekleme — Mevcut TSX tüketicisi bulunmadı; shared `ChoiceField` sözleşmesi label/focus/touch-target desteğiyle hazırlandı, ürün seçeneği eklenmedi.

*Kimlik, durum ve yüzey primitive’leri:*
- [x] Mevcut `ProfileIdentityCard.tsx`, `SocialIdentity.tsx`, AppShell avatarı ve Room host avatarı için ortak avatar boyut/fallback/crop sunum sınırını belirle.
- [x] Avatar primitive’ini managed avatar URL’leri ve initials fallback ile çalışacak şekilde tanımla; harici avatar URL düzenlemeyi geri getirme.
- [x] Badge ve StatusIndicator API’sini yalnız mevcut Host, Admin, Live, Online, Room/report/account/job state türleriyle sınırla.
- [x] Durum göstergelerinde metin veya accessible label desteği sağlayarak rengi tek anlam kaynağı olmaktan çıkar.
- [x] Surface/Panel primitive’lerini üç seviyeli yüzey, optional border ve kontrollü padding varyantlarıyla tanımla; sayfa layout’u veya özel kart anatomisi ekleme.

*Overlay ve etkileşim altyapısı:*
- [x] Modal primitive’inde backdrop, dialog semantiği, accessible title/description, initial focus ve kapatma kontrolünü tanımla.
- [x] Menu/popover primitive’inde tetikleyici ilişkisi, keyboard navigation, viewport sınırı, Escape ve dış tıklama davranışını tanımla.
- [x] SidePanel primitive’inde bağımsız scroll, bağlamı görünür tutan desktop yerleşimi ve erişilebilir close davranışını tanımla.
- [x] Drawer/BottomSheet primitive’inde mobile safe-area, erişilebilir close, scroll sınırı ve kritik destructive işlem için modal ayrımını tanımla.
- [x] Bütün geçici katmanlarda focus trap, background scroll lock, Escape, close sonrası focus restore ve unmount cleanup davranışını tek ortak mekanizmada doğrula.
- [x] Overlay katmanlarını Wave 01 z-index tokenlarıyla hizala; modal, menu, drawer ve player katmanlarında stacking-context çakışması bırakma.
- [x] `ReportDialog.tsx` ve mevcut account deletion overlay gibi gerçek tüketicilerden yalnız temsilci örneklerle primitive uyumunu doğrula; sayfa akışlarını veya copy’yi değiştirme.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Auth ve public yüzeylerde kullanılan kontrol/form primitive’leri erişilebilir.
- [x] Member state — Member aksiyonları ve identity primitive’leri gerçek session verisiyle çalışıyor.
- [x] Host state — Host badge yalnız gerçek host rolünde gösterilebiliyor; host kontrol akışı bu Wave’de değişmiyor.
- [x] Admin state — Admin badge ve destructive kontrol yalnız mevcut admin capability’siyle kullanılabiliyor.
- [x] Loading state — Button loading lokal, double-submit güvenli ve label genişliği sabit.
- [-] Empty state — Ortak EmptyState sistemi Wave 03’ün sorumluluğunda.
- [x] Error state — FormField validation ve action error ilişkisi erişilebilir.
- [-] Denied / unavailable state — Ortak denied/unavailable sunumu Wave 03’ün sorumluluğunda.
- [-] Reconnecting state — Reconnect sunumu Wave 03’ün sorumluluğunda.
- [x] Mobile davranışı — Control hit area, modal, drawer ve bottom sheet safe-area içinde kullanılabilir.
- [x] Klavye / focus davranışı — Bütün control ve overlay’lerde görünür focus, trap, Escape ve restore çalışıyor.
- [x] Reduced motion davranışı — Overlay ve control motion’ı işlevsel state’i kaybetmeden sadeleşiyor.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite’i geçiyor (`npm run test`)
- [x] Focused primitive testleri button durumları, FormField ilişkileri ve overlay focus/Escape/restore davranışlarını doğruluyor.
- [x] Accessibility testleri accessible name, dialog semantiği ve renk-dışı state bilgisinde blocker bulmuyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave02-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası button, input, textarea ve select için default, hover, focus, disabled, loading, valid ve invalid durumlarını evet/hayır ile doğruluyor.
- [x] QA dosyası modal, menu, side panel, drawer ve bottom sheet’in mouse, keyboard, Escape, outside-click ve focus restore davranışlarını kontrol ediyor.
- [x] QA dosyası dar ekranda uzun overlay içeriğinin scroll edilebilir, close/action kontrollerinin erişilebilir ve background scroll’un kilitli olduğunu doğruluyor.
- [x] QA dosyası managed avatar success/fallback ile izin verilmeyen temsilî badge veya share seçeneğinin görünmediğini doğruluyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki component anatomisi ve kontrol durum sırası korundu.
- [-] Ana ekran oranları korundu — Wave 02 sayfa veya video/chat layout’u değiştirmiyor.
- [x] Görsel odak hiyerarşisi doğru — Primary CTA ikincil control ve status öğelerinden daha güçlü, fakat büyük glow taşımıyor.
- [x] Tipografi hiyerarşisi doğru — Control, form ve yardımcı metinler Inter kullanıyor.
- [x] Accent `#FF625A` kontrollü kullanıldı — Primary/focus/selected durumlarla sınırlı.
- [x] Derinlik sistemi üç katmanda kaldı; primitive’ler yeni yüzey rengi üretmedi.
- [x] Cam efekti yalnız modal, menu, drawer ve bottom sheet gibi geçici katmanlarda kullanıldı.
- [x] Sahte badge, rol, paylaşım servisi veya temsilî ürün seçeneği eklenmedi.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi normal control/form metinlerinde sağlandı.
- [x] Klavye focus görünür; overlay kapanınca tetikleyiciye dönüyor.
- [x] Uzun label, validation ve overlay içeriği yatay overflow üretmiyor.
- [x] Mevcut fonksiyonlar korundu — Form submit, auth, API ve mevcut dialog aksiyonları değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Canonical olarak ortak olduğu doğrulanan control, form, identity, surface ve overlay ailelerinin tek erişilebilir primitive sahipliği vardır.
- [x] Mevcut gerçek tüketiciler primitive’leri davranış regression’ı olmadan kullanabilir; sayfaya özgü layout ortaklaştırılmamıştır.
- [x] Overlay focus, Escape, scroll-lock, safe-area ve focus-restore davranışları desktop/mobile’da doğrulanmıştır.
- [x] Moderator/verified/premium, yeni share servisi veya backend capability eklenmemiştir.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave02-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 02'yi onayladı ve Codex durdu

---

### Wave 02 Sonucu — 2026-07-20

- Shared Button/IconButton, FormField ve form controls, Avatar, izinli Badge/StatusIndicator, Surface/Panel ile Modal/PopoverMenu/SidePanel/Drawer/BottomSheet primitive aileleri canonical kapsamda tamamlandı.
- `ReportDialog` ve account deletion overlay ortak Modal/FormField/Button altyapısına; AppShell, Profile, Social ve Room içindeki uygun kimlik yüzeyleri ortak Avatar primitive'ine taşındı.
- Focus trap/restore, Escape, outside-click, nested body scroll lock, safe-area, viewport clamp, keyboard navigation, reduced-motion ve accessible state sözleşmeleri doğrulandı.
- Frontend final retest typecheck ve production build'i geçti; Vitest 4 dosyada 31/31, focused Wave 02 primitive suite'i 14/14 geçti.
- `tests/wave02-tests.md` staging/browser QA kullanıcı tarafından tamamlandı. Desktop/mobile, guest/member/host/admin, control/form, avatar/status/surface, overlay, keyboard/focus, responsive/overflow ve regression kontrollerinde blocker bulunmadı.
- Room report details alanının canonical/backend'de opsiyonel, Social `ReportDialog` içinde required olması Wave 02 öncesi davranış farkı olarak non-blocker kaydedildi; API veya UX davranışı bu Wave'de değiştirilmedi.
- Backend, database, API, auth, realtime, route veya yeni ürün capability'si değiştirilmedi. Wave 02 kullanıcı kabulüyle QA-closed oldu; Codex Wave 03'e geçmeden durdu.

---

### Wave 03 — Ortak Loading, Empty, Error ve Feedback Sistemi

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-20.

**Hedef:**
Ürün genelinde ilk yükleme, refresh, lokal işlem, empty, error, offline, retry, toast ve reconnect sunumu tek ortak sistemden çalışır.

**Neden bu sırada geliyor:**
Shell ve her ekran bu state’lere ihtiyaç duyar; ekranlar kendi spinner, hata veya toast dilini üretmeden önce Wave 01 tokenları ve Wave 02 erişilebilir primitive’leri üzerinde merkezi sahiplik kurulmalıdır.

**Bağımlılıklar:**
- Wave 01 ve 02 tamamlanmış olmalıdır.
- Mevcut hata şekilleri ve async state'ler Wave 00 envanterinde tanımlanmış olmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 3.2 Implementation sırasında`
  - `### 3.3 Durdurmadan önce yerel doğrulama`
- `Design_Wave_Map.md`
  - `### Wave 03 — Ortak Loading, Empty, Error ve Feedback Sistemi`
- `Roads/project-foundation/02-system-definition/frontend-modules.md`
  - `## 21. Feedback and State Components Module`
- `Design/SYSTEM_STATES_BOARD.md`
  - `## 3. State Hiyerarşisi`
  - `## 5. Initial Loading`
  - `## 6. Content Refresh`
  - `## 10. Empty States`
  - `## 18. Error States`
  - `## 22. Offline States`
  - `## 37. Toast ve Feedback Sistemi`
- Uygulanabilirlik referansları: `Vibe frontend/src/components/LoadingState.tsx`, `Vibe frontend/src/components/ErrorBoundary.tsx`, `Vibe frontend/src/lib/api.ts`, `Vibe frontend/src/styles/feedback.css` ve Wave 00’da eşlenen page/social state kullanımları.

**Görsel referans:**
- Görsel 1: System States Board — initial loading, content refresh, inline loading ve media placeholder durumları.
- Görsel 2: System States Board — empty, inline/section/page error, offline ve retry aileleri.
- Görsel 3: System States Board — toast, action feedback ve reconnect sunumu.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki örnek mesajlar, delivered/read, room-ending-soon veya başka temsilî state’ler mevcut API/realtime capability’si sayılmaz; gerçek error code ve state kontratları authoritative kalır.

---

**Kapsam içi:**
- Skeleton/media placeholder, InlineLoader ve ButtonLoader; tam sayfa spinner’ın standart loading çözümü olmaktan çıkarılması.
- EmptyState, InlineError, SectionError/PageError, safe error mapping ve idempotent RetryAction.
- Offline/reconnect banner, toast deduplication, live-region ve bağlam koruma davranışı.
- Canonical olarak ortak olduğu doğrulanan mevcut state wrapper’larının kontrollü migration’ı.

**Kapsam dışı:**
- Room’a özgü authoritative lifecycle, join/access, socket snapshot veya realtime reconcile; Wave 12’ye aittir.
- Her ekranın özgün empty/error copy’si, CTA bağlamı ve sayfa kompozisyonu; ilgili ekran Wave’ine aittir.
- Delivered/read, queue, optimistic mutation veya yeni offline-write capability’si ekleme.
- Page data fetching, API, auth, backend veya database sözleşmesi yeniden tasarlama.
- Wave 25’e ait genel component/style consolidation.

---

**Implementation kontrol listesi:**

*State modeli ve loading foundation:*
- [x] Wave 00 async-state envanterindeki initial loading, refreshing, loading-more, submitting, empty, error, offline ve reconnecting durumlarını ortak adlandırma ve etki alanı matrisiyle eşleştir.
- [x] Bileşen, bölüm, sayfa ve kritik uygulama seviyelerini açık prop/state sınırlarıyla tanımla; tek `isLoading` boolean’ıyla bütün davranışları yönetme.
- [x] `LoadingState.tsx` kullanımını audit ederek tam sayfa spinner’ı yalnız güvenli kısa app bootstrap istisnasına sınırla.
- [x] SkeletonBlock/SkeletonText tabanını gerçek içerik geometrisini koruyacak, screen reader’dan gizlenecek ve reduced-motion’da statik kalacak şekilde oluştur.
- [x] RoomCard, user row, message ve panel gibi belgelenmiş ortak geometriler için ağır asset kullanmadan compose edilebilir skeleton varyantları tanımla.
- [x] MediaPlaceholder ile `16:9` alan ayırma, neutral fallback ve image failure davranışını ortaklaştır; aura’yı gerçek thumbnail gelmeden gösterme.
- [x] InlineLoader ve ButtonLoadingState’i yalnız ilgili alanı bloke edecek, label/width/focus bağlamını koruyacak şekilde tanımla.
- [x] Refresh ve load-more yardımcılarını mevcut içeriği, scroll’u, filter/search değerini ve açık overlay’i koruyacak; duplicate fetch’i engelleyecek sınırlarla uygula.

*Empty, error, offline ve retry:*
- [x] EmptyState anatomisini icon, title, description, gerçek primary action ve nadir secondary action alanlarıyla tanımla; sahte veri veya dekoratif ağır asset zorunluluğu ekleme.
- [x] Platform-level no-data ile filtered no-results durumlarının aynı varyant/copy’ye düşmesini engelleyecek ortak variant sözleşmesini tanımla.
- [x] `ApiClientError` code’larını authentication, permission, validation, room state, network, feature, rate-limit, conflict ve unknown güvenli mesaj ailelerine eşleyen ortak mapper kur.
- [x] InlineError, SectionError ve PageError bileşenlerini hata etki alanına göre ayır; raw HTTP/Prisma/socket/internal enum bilgisini render etme.
- [x] `ErrorBoundary.tsx` kritik render failure yüzeyi ile recoverable page/section hatalarını ayır; global shell mümkünse recoverable hatada görünür kalsın.
- [x] RetryAction’ı yalnız idempotent veya duplicate korumalı işlemlerde etkinleştir; pending retry sırasında ikinci tetiklemeyi engelle ve focus’u koru.
- [x] OfflineBanner ile ReconnectBanner’ı offline, reconnecting, degraded ve failed durumlarını metin/ikonla ayıracak presentational sözleşmeyle oluştur; Room snapshot/reconcile mantığı ekleme.

*Toast, feedback ve migration:*
- [x] Toast sisteminde success, info, warning ve error türlerini metin+ikonla tanımla; aynı mesajları deduplicate et ve eşzamanlı toast yoğunluğunu sınırla.
- [x] Toast yerleşimini desktop shell ve mobile safe-area/composer alanlarıyla çakışmayacak tek global sahiplikte kur.
- [x] Loading, success, error ve reconnect duyurularını uygun `aria-live` politikasına bağla; sürekli realtime event’leri tekrar tekrar okutma.
- [x] Mevcut `.inline-loading`, `.empty-state` ve `.form-error` wrapper’larını yalnız semantik olarak eşleşen yerlerde ortak bileşenlere taşı; page-specific copy, CTA ve data fetching’i değiştirme.
- [x] `feedback.css` stillerini Wave 01 tokenları ve Wave 02 control/surface primitive’leriyle hizala; Bootstrap alert veya beyaz modal görünümü üretme.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Public/auth yüzeylerinde loading, error ve denied copy güvenli ve erişilebilir.
- [x] Member state — Member route’larında state geçişi session ve form bağlamını koruyor.
- [x] Host state — Ortak state primitive’leri host yüzeyinde kullanılabilir; host/Room lifecycle kararı bu Wave’de değiştirilmez.
- [x] Admin state — Admin state yüzeyleri raw operasyon verisi sızdırmadan ortak altyapıyı tüketebiliyor.
- [x] Loading state — Initial, refresh, inline, load-more, media ve button loading ayrılmış durumda.
- [x] Empty state — No-data ile no-results ayrımı ve gerçek CTA sınırı korunuyor.
- [x] Error state — Field/action/section/page/critical error seviyeleri doğru ayrılıyor.
- [x] Denied / unavailable state — Permission, feature ve resource unavailable mesajları güvenli eşleniyor.
- [x] Reconnecting state — Offline/reconnecting/degraded/failed sunumları ayrılıyor ve içerik korunuyor.
- [x] Mobile davranışı — State yüzeyleri safe area içinde, taşmadan ve kullanılabilir CTA’larla çalışıyor.
- [x] Klavye / focus davranışı — Retry, dismiss ve state geçişlerinde görünür focus korunuyor.
- [x] Reduced motion davranışı — Shimmer/slide/pulse sadeleşiyor; işlevsel loading ve feedback kalıyor.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite’i geçiyor (`npm run test`)
- [x] Focused state testleri initial/refresh ayrımı, context preservation ve retry duplicate korumasını doğruluyor.
- [x] Safe error-mapping testleri raw backend/internal hata bilgisinin kullanıcı copy’sine sızmadığını doğruluyor.
- [x] Accessibility testleri skeleton, live-region, retry ve toast semantiğinde blocker bulmuyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave03-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası initial loading’de skeleton, refresh sırasında mevcut içerik ve load-more sırasında yalnız lokal alanın korunmasını evet/hayır ile doğruluyor.
- [x] QA dosyası no-data, no-results, inline error, page error ve critical error örneklerini birbirinden ayrı doğruluyor.
- [x] QA dosyası offline, reconnecting, degraded ve failed durumlarında içerik/focus bağlamının korunup korunmadığını kontrol ediyor.
- [x] QA dosyası başarısız ve başarılı retry ile toast dedupe/dismiss/live-region davranışlarını kontrol ediyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki state component anatomisi ve bilgi sırası korundu.
- [-] Ana video/chat oranları korundu — Wave 03 Room layout veya lifecycle uygulamıyor.
- [x] Görsel odak hiyerarşisi doğru — State mesajı kullanılabilir içeriği gereksiz yere bastırmıyor.
- [x] Tipografi hiyerarşisi doğru — State heading, body ve action metinleri Manrope/Inter sözleşmesine uyuyor.
- [x] Accent `#FF625A` kontrollü kullanıldı; error/warning/success marka renginden ayrıldı.
- [x] Derinlik sistemi üç katmanda kaldı.
- [x] Cam efekti yalnız toast/reconnect gibi geçici katmanlarda kullanıldı.
- [x] Sahte room, user, message, count veya activity ile empty/loading durumu gizlenmedi.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi normal state metinlerinde sağlandı.
- [x] Klavye focus retry, dismiss ve state geçişlerinde görünür.
- [x] Skeleton, error copy ve mobile toast yatay overflow üretmiyor.
- [x] Mevcut fonksiyonlar korundu — API/auth/realtime kontratları ve Room lifecycle davranışı değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Initial/refresh/local loading ile empty/error/offline/reconnect sunumlarının tek ortak component ve token sahipliği vardır.
- [x] Mevcut içerik, scroll, form, filter ve focus bağlamı refresh/error/reconnect sırasında belgelenen sınırlar içinde korunur.
- [x] Raw teknik hata sızdırmayan error mapping, idempotent retry ve deduplicated toast davranışı otomatik ve manuel kanıtla doğrulanmıştır.
- [x] Room-specific lifecycle/reconcile ve ekran-specific copy/layout sonraki sahiplerine bırakılmıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave03-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 03'ü onayladı ve Codex durdu

---

### Wave 03 Sonucu — 2026-07-20

- Ortak state modeli; initial/refresh/loading-more/submitting/empty/error/offline/reconnecting durumlarını component, section, page ve critical etki alanlarıyla ayırdı.
- Skeleton/media, loading, EmptyState, güvenli error mapping, idempotent retry, offline/reconnect, action feedback ve tek global deduplicated toast sahipliği tamamlandı; canonical state ikon sistemi olarak Phosphor React kullanıldı.
- Public/member/host/admin/social/DM temsilci yüzeyleri ortak primitive'lere taşındı. Backend, database, API, auth, route, realtime state makinesi ve Room lifecycle/reconcile davranışı değiştirilmedi.
- Frontend kapanış retest'i typecheck ve production build olarak geçti; Vitest 5 dosyada 48/48, focused Wave 03 suite'i 17/17 geçti.
- `tests/wave03-tests.md` staging/browser QA'sı guest/member/host/admin, desktop/tablet/mobile, keyboard, reduced-motion, error safety, retry, toast ve regression senaryolarında blocker olmadan kullanıcı tarafından tamamlandı.
- Discover RoomCard/skeleton yoğunluğunun Board'a göre büyük algılanması non-blocker olarak kaydedildi. Skeleton mevcut kart geometrisini korur; final RoomCard ölçüsü ve yoğunluğu canonical Wave 06'ya bırakıldı.
- Wave 03 kullanıcı kabulüyle QA-closed oldu. Codex Wave 04'e geçmeden durdu.

---

### Wave 04 — Desktop Global Shell ve Navigasyon

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-23.

**Hedef:**
Home ve normal uygulama header’ları, route-aware AppShell, profile menüsü ve desktop Social Rail gerçek rol/route state’leriyle çalışır.

**Neden bu sırada geliyor:**
Ekran kompozisyonları doğru kullanılabilir alanı ve Room shell exclusion’ı ancak Wave 01–03 foundation’ı üzerinde ortak desktop kabuk sabitlendikten sonra ölçebilir; tablet ve mobil shell aynı route mantığını sonraki Wave’de tüketir.

**Bağımlılıklar:**
- Wave 01–03 tamamlanmış olmalıdır.
- Custom router ve `vibehall:before-navigate` davranışı korunmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 04 — Desktop Global Shell ve Navigasyon`
- `Roads/project-foundation/04-ui-ux-definition/site-map.md`
  - `## 3. Main Site Structure`
  - `## 14. Structural Rules`
- `Design/GLOBAL_SHELL_AND_NAVIGASYON_BOARD.md`
  - `## 2. Shell Aileleri`
  - `## 3. Home Desktop Header`
  - `## 4. Normal Application Desktop Header`
  - `## 6. Desktop Social Rail`
  - `## 14. Room Ekranında Shell’in Kaldırılması`
- Uygulanabilirlik referansları: `Vibe frontend/src/App.tsx`, `Vibe frontend/src/lib/routes.ts`, `Vibe frontend/src/components/AppShell.tsx`, `Vibe frontend/src/social/SocialRail.tsx`, `Vibe frontend/src/styles/shell.css`, `Vibe frontend/src/styles/pages.css` ve `Vibe frontend/src/styles/responsive.css`.

**Görsel referans:**
- Görsel 1: Global Shell ve Navigasyon Board — Home desktop header açık/aktif durumları.
- Görsel 2: Global Shell ve Navigasyon Board — normal application desktop header ve profile menu.
- Görsel 3: Global Shell ve Navigasyon Board — Desktop Social Rail kapalı/açık durumları ve Room shell exclusion.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki global people search, notification center, hard-coded sayaçlar, logo sembolü veya var olmayan route’lar uygulanmaz; yalnız mevcut route ve gerçek notification/social verisi kullanılır.

---

**Kapsam içi:**
- Home/app/utility/admin/Room route varyantları ve aktif route semantiği.
- Guest, member ve admin görünürlüğü; profile menu ve gerçek notification/social count bağlantısı.
- Desktop Social Rail open/closed davranışı.
- Room’da global shell, footer, rail ve shell-owned geçici yüzeylerin tamamen kalkması.

**Kapsam dışı:**
- Mobil menu, tablet drawer, safe-area ve dar ekran shell davranışı; Wave 05’e aittir.
- Yeni route, global people search veya yeni notification center.
- Social Hub, Messages, Profile veya Settings içerik ekranlarını yeniden tasarlama.
- Room minimal context bar, video/chat kompozisyonu veya lifecycle state’i; Room Wave’lerine aittir.
- Backend notification/social API, auth veya custom router sözleşmesi değiştirme.
- Wave 25’e ait genel component/style consolidation.

---

**Implementation kontrol listesi:**

*Route-aware shell foundation:*
- [x] `routes.ts` içindeki gerçek route tanımlarını Home, normal app, utility, admin ve Room shell varyantlarına açık bir route-meta eşlemesiyle bağla; yeni route ekleme.
- [x] `App.tsx` içindeki `history.pushState`, popstate ve `vibehall:before-navigate` akışını değiştirmeden AppShell’e gerekli route bağlamını aktar.
- [x] `AppShell.tsx` içindeki tek topbar yapısını, ortak primitive’leri kullanan Home desktop header ve normal application desktop header varyantlarına ayır.
- [x] Home header’ı yaklaşık `72px`, normal app header’ını yaklaşık `64px` başlangıç hedefiyle tokenlaştır; son değerleri yalnız prompt görseliyle QA sırasında ayarla.
- [x] Ana desktop navigation’da yalnız gerçek Home, Discover ve Create Room erişimlerini göster; Create Room’un mevcut member/auth davranışını değiştirme.
- [x] Aktif route’u route verisinden ve `aria-current` semantiğinden üret; refresh veya nested/matched route durumunda click-state kopyası tutma.
- [x] Wordmark alanını mevcut sade Vibehall kimliğiyle koru; yeni logo, ikon veya marka sembolü tasarlama.

*Guest, member ve admin shell durumları:*
- [x] Auth bootstrap sırasında guest/member header blink’ini önleyen nötr identity placeholder kullan; bütün shell’i loading’e çevirme.
- [x] Guest shell’inde yalnız mevcut Login/Signup ve izinli public navigation aksiyonlarını göster; sahte avatar, social badge veya notification gösterme.
- [x] Member shell’inde managed avatar/initials primitive’i, Create Room, Social ve profile-menu tetikleyicisini gerçek session verisiyle bağla.
- [x] Profile menu içinde yalnız mevcut Profile, Settings ve Logout yollarını göster; kapatma, Escape, outside-click ve focus restore davranışını Wave 02 primitive’iyle uygula.
- [x] `/admin` erişimini yalnız gerçek `admin` rolü için profile menu veya güvenli yardımcı erişimde göster; normal member’a admin affordance sızdırma.
- [x] Notification/social badge toplamını mevcut `getNotificationSummary` response’undan üret; loading/error’da yanlış `0` veya hard-coded count gösterme.

*Desktop Social Rail ve Room exclusion:*
- [x] Mevcut `SocialRail.tsx` içeriğini değiştirmeden desktop’ta canonical collapsed ve expanded kabuk durumlarına bağla.
- [x] Collapsed rail’de gerçek route ikon/accessible label erişimini, expanded rail’de mevcut label ve sayaç görünürlüğünü koru; yeni social alan ekleme.
- [x] Rail open/closed preference’ını mevcut local UI preference ile koru; yalnız bu tercih için backend persistence ekleme.
- [x] Rail açılıp kapanırken ana içerik genişliğini kontrollü yeniden ölç; horizontal overflow, focus kaybı veya otomatik menu açılması üretme.
- [x] Social summary veya rail içeriği başarısız olduğunda primary navigation ve account aksiyonlarını kullanılabilir tut; hata yalnız ilgili rail/count alanında kalmalı.
- [x] Room route’unda global header, page masthead, footer, Social Rail, docked conversation ve profile/menu katmanlarını render etme.
- [x] Room’dan normal route’a dönüldüğünde doğru shell varyantını yeniden kur; custom router davranışını ve mümkün olan mevcut query/scroll bağlamını bozma.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Public nav ve Login/Signup görünür; member/admin/social verisi görünmez.
- [x] Member state — Create Room, Social ve profile menu gerçek session verisiyle kullanılabilir.
- [x] Host state — Room route’unda host için de global shell tamamen kaldırılır; host control eklenmez.
- [x] Admin state — Admin erişimi yalnız admin rolünde görünür ve admin panelinin ayrı shell sınırı korunur.
- [x] Loading state — Auth ve social-count loading shell’i bloke etmez veya yanlış role blink’i üretmez.
- [x] Empty state — Social Rail’in gerçek boş listeleri navigation kabuğunu çökertmez.
- [x] Error state — Notification/social failure primary navigation ve account erişimini kullanılabilir bırakır.
- [x] Denied / unavailable state — Admin veya member-only affordance yetkisiz kullanıcıya gösterilmez.
- [x] Reconnecting state — Social/count reconnect shell’i açıp kapatmaz, focus’u taşımaz ve badge’i zıplatmaz.
- [-] Mobile davranışı — Mobil ve tablet shell Wave 05’in sorumluluğunda.
- [x] Klavye / focus davranışı — Nav, profile menu ve collapsed/expanded rail tamamen klavyeyle kullanılabilir.
- [x] Reduced motion davranışı — Header/rail geçişi kısa fade veya anlık değişime düşer.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite’i geçiyor (`npm run test`)
- [x] Route/shell testleri Home, app, utility, admin ve Room varyantlarını gerçek route envanteriyle doğruluyor.
- [x] Role testleri guest/member/admin görünürlüğü ile `/admin` link sınırını doğruluyor.
- [x] Room exclusion testi global header, masthead, footer, rail ve docked conversation’ın Room route’unda render edilmediğini doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave04-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası Home ve normal app header’ın blok sırası, yükseklik karakteri, active route ve gerçek navigation yollarını evet/hayır ile doğruluyor.
- [x] QA dosyası guest, member ve admin session durumlarında görünen/gizlenen account, Social ve Admin aksiyonlarını kontrol ediyor.
- [x] QA dosyası Social Rail’in collapsed/expanded, gerçek count, loading, empty, error ve reconnect durumlarını kontrol ediyor.
- [x] QA dosyası Room’a girişte global shell/footer/rail’in tamamen kaybolduğunu ve Room’dan çıkışta doğru shell’in geri geldiğini kontrol ediyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki Home/app header ve desktop rail blok sırası korundu.
- [x] Header, rail ve içerik oranları referans karakterini koruyor; rail ana içeriği kullanılamaz hâle getirmiyor.
- [x] Görsel odak hiyerarşisi doğru — Navigasyon içerik/video odağından daha sakin.
- [x] Tipografi hiyerarşisi doğru — Header/rail Inter, gerekli marka/page karakteri Manrope kullanıyor.
- [x] Accent `#FF625A` yalnız active route, focus ve gerekli primary action’da kontrollü kullanıldı.
- [x] Derinlik sistemi üç katmanda kaldı.
- [x] Cam efekti yalnız profile menu gibi geçici katmanlarda kullanıldı; kalıcı header/rail mat kaldı.
- [x] Sahte route, count, avatar, notification veya activity eklenmedi.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi normal navigation metinlerinde sağlandı.
- [x] Klavye focus nav, profile menu ve rail’de görünür ve geri yükleniyor.
- [x] Rail toggle veya uzun user/route label yatay overflow üretmiyor.
- [x] Mevcut fonksiyonlar korundu — Custom router, auth, logout ve social API davranışı değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Desktop Home/app/utility/admin/Room route varyantları tek route-aware AppShell sahipliğinde çalışıyor.
- [x] Guest/member/admin profile-menu ve gerçek social count sınırları erişilebilir ve güvenli biçimde doğrulanmıştır.
- [x] Desktop Social Rail collapsed/expanded çalışıyor; Room route’unda bütün global shell yüzeyleri kaldırılmıştır.
- [x] Mobil/tablet navigation veya yeni route/search/notification capability’si bu Wave’e alınmamıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave04-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 04'ü onayladı ve Codex durdu

---

### Wave 04 Sonucu — 2026-07-23

- Mevcut custom router korunarak Home, normal app, utility, admin ve Room route'ları açık shell metadata'sına bağlandı; Home ve normal application desktop header varyantları canonical 72px/64px karakteriyle tamamlandı.
- Guest/member/admin account görünürlüğü, auth bootstrap placeholder'ı, Wave 02 PopoverMenu tabanlı profile menu, route-derived `aria-current` ve gerçek `getNotificationSummary` badge bağlantısı doğrulandı.
- Desktop Social Rail collapsed/expanded kabuğu, gerçek shortcut/list içeriği, local-only open preference ve hata izolasyonu tamamlandı. Room route'unda global header, rail, docked conversation ve profile/menu dahil bütün shell-owned yüzeyler kaldırıldı.
- Backend, database, API, auth, realtime ve custom router davranışı değiştirilmedi; mobil/tablet shell Wave 05'e, genel consolidation Wave 25'e bırakıldı.
- Kapanış retest'i frontend typecheck ve production build olarak geçti; Vitest 6 dosyada 60/60, focused Wave 04 suite'i 12/12 ve Chromium E2E 3/3 geçti.
- `tests/wave04-tests.md` staging/browser QA'sı guest/member/host/admin, 1440px/1280px/1041px desktop, keyboard, focus, reduced-motion, error/reconnect ve regression senaryolarında blocker olmadan kullanıcı tarafından tamamlandı.
- Wave 04 kullanıcı kabulüyle QA-closed oldu. Codex Wave 05'e geçmeden durdu.

---

### Wave 05 — Tablet ve Mobil Shell

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-23.

**Hedef:**
Tablet social drawer ile mobil minimal header/menu, alt navigasyon eklenmeden guest/member/admin erişimini güvenle sağlar.

**Neden bu sırada geliyor:**
Desktop route varyantları Wave 04’te sabitlenir; mobil shell aynı route ve rol mantığını Wave 02 drawer/bottom-sheet primitive’leri üzerinden farklı interaction, safe-area ve focus modeliyle tüketir.

**Bağımlılıklar:**
- Wave 04 route-aware AppShell tamamlanmış olmalıdır.
- Wave 02 drawer/bottom-sheet primitive'leri hazır olmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 05 — Tablet ve Mobil Shell`
- `Roads/project-foundation/04-ui-ux-definition/mobile-responsive-spec.md`
  - `## 5. Navigation Responsive Behavior`
  - `## 16. Modal and Overlay Responsive Rule`
- `Design/GLOBAL_SHELL_AND_NAVIGASYON_BOARD.md`
  - `## 8. Tablet Social Drawer`
  - `## 9. Mobil Minimal Header`
  - `## 10. Mobil Menü Açık Durumu`
  - `## 30. Responsive Davranış`
- Uygulanabilirlik referansları: `Vibe frontend/src/components/AppShell.tsx`, `Vibe frontend/src/social/SocialRail.tsx`, `Vibe frontend/src/styles/shell.css`, `Vibe frontend/src/styles/responsive.css`, `Vibe frontend/src/lib/routes.ts` ve Wave 04 route/shell testleri.

**Görsel referans:**
- Görsel 1: Global Shell ve Navigasyon Board — tablet Social Drawer kapalı/açık durumları.
- Görsel 2: Global Shell ve Navigasyon Board — mobil minimal header’ın guest/member/admin varyantları.
- Görsel 3: Global Shell ve Navigasyon Board — mobil menu açık durumu, route hiyerarşisi ve safe-area davranışı.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki alt navigasyon, var olmayan route, global people search, notification center veya temsilî badge/count uygulanmaz; mevcut route, auth ve social kontratları kullanılır.

---

**Kapsam içi:**
- Mobil minimal header, erişilebilir tam menu/drawer ve route sonrası kapanma.
- Tablet Social Drawer, touch target, safe area, scroll lock ve focus restore.
- Room route’unda mobil global shell’in yokluğu.
- Utility ve admin route’larının dar ekranda doğru shell sınırına geçmesi; içerik layout’larının yeniden tasarlanması değil.

**Kapsam dışı:**
- Mobil ekranların Home, Discover, Auth, Room, Profile, Social, Messages, Utility veya Admin içerik layout’u.
- Bottom navigation veya belgelenmemiş gesture-only erişim.
- Sticky mini-player, Room composer/keyboard davranışı veya Room mobile kompozisyonu.
- Yeni route, social capability, notification center veya backend preference persistence.
- Wave 25’e ait genel responsive/component consolidation.

---

**Implementation kontrol listesi:**

*Responsive shell seçimi:*
- [x] Wave 04 route-meta ve shell varyantlarını tek kaynak olarak kullan; mobile/tablet için ayrı route listesi veya click-state üretme.
- [x] Başlangıç mobile/tablet/desktop breakpoint’lerini canonical referansla eşleştir ve gerçek header/rail sıkışma noktasında doğrula; yalnız cihaz adıyla keyfî breakpoint ekleme.
- [x] `AppShell.tsx` içinde desktop header/rail ile tablet/mobile shell’in aynı anda interaktif veya screen-reader görünür olmasını engelle.
- [x] `responsive.css` içindeki mevcut topbar wrap davranışını minimal mobile header modeline kontrollü taşı; ekran içerik selector’larını bu Wave’de değiştirme.

*Mobil minimal header ve menu:*
- [x] MobileHeader’ı yaklaşık `56–64px`, safe-area uyumlu ve aynı anda en fazla üç ana ikon/aksiyon gösterecek şekilde Wave 01 tokenlarıyla kur.
- [x] Sol hamburger/geri, orta wordmark veya sayfa bağlamı ve sağdaki yalnız gerçekten gerekli aksiyonların route bazlı görünürlüğünü tanımla.
- [x] Mobil menu’yu Wave 02 overlay/drawer primitive’iyle aç; close, kullanıcı kimliği ve gerçek Home/Discover/Create Room/social/account yollarını canonical hiyerarşide göster.
- [x] Mevcut route bulunmayan menu öğelerini render etme; global search veya alt navigation ekleme.
- [x] Guest menu’de Login/Signup, member menu’de gerçek social/profile/settings/logout ve admin menu’de yalnız yetkili Admin erişimini göster.
- [x] Route seçildiğinde menu’yu kapatıp custom router navigation’ını tek kez çalıştır; logout’u ayrı mevcut güvenli işlem olarak koru.
- [x] Mobile header sticky kullanılacaksa içerik zıplaması üretme; page title, browser zoom ve uzun kullanıcı adı için taşma sınırlarını doğrula.

*Tablet Social Drawer ve etkileşim güvenliği:*
- [x] Desktop kalıcı Social Rail’i tablet genişliğinde kaldırıp mevcut `SocialRail.tsx` içeriğini Wave 02 Drawer primitive’i içinde aç.
- [x] Tablet drawer açıldığında backdrop, background scroll lock, focus trap, Escape/close ve tetikleyiciye focus restore davranışını doğrula.
- [x] Drawer’da yalnız mevcut Friends, Messages, Invites, People You Watched With, Blocked ve Settings yollarını gerçek feature/route varlığına göre göster.
- [x] Gerçek unread/actionable count loading veya error durumunda yanlış `0`/hard-coded sayı gösterme; drawer ve ana menu kullanılabilir kalsın.
- [x] Bütün mobile/tablet nav, close ve account kontrollerinde minimum `44×44px` touch target ve yeterli aralık sağla.
- [x] Overlay içeriği viewport’tan uzunsa bağımsız dikey scroll ve safe-area padding sağla; yatay overflow oluşturma.
- [x] `prefers-reduced-motion` açıkken drawer slide ve menu transition’ını kısa fade veya anlık değişime indir; focus/close feedback’ini koru.
- [x] Room route’unda mobile header, menu trigger, Social Drawer ve global footer render etme; Room içeriği veya minimal context bar ekleme.
- [x] Utility route’larında public mobile shell’i, `/admin` route’unda admin’in kendi dar ekran shell sınırını seç; utility/admin içerik layout’una dokunma.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Mobile menu yalnız public route ve Login/Signup erişimini gösteriyor.
- [x] Member state — Social, profile, settings ve logout gerçek member state’inde erişilebilir.
- [x] Host state — Room route’unda host için de mobile global shell/drawer tamamen kaldırılıyor.
- [x] Admin state — Admin yolu yalnız admin’e görünür; `/admin` kendi shell sınırına geçiyor.
- [x] Loading state — Auth/social count loading header ve menu’yu bloke etmiyor veya yanlış identity göstermiyor.
- [x] Empty state — Social Drawer’ın gerçek boş listeleri menu/navigation erişimini bozmuyor.
- [x] Error state — Count/social failure drawer dışındaki ana navigation’ı kullanılabilir bırakıyor.
- [x] Denied / unavailable state — Yetkisiz route/aksiyon menu’de görünmüyor; unavailable social capability menu’yu çökertmiyor.
- [x] Reconnecting state — Realtime count reconnect menu’yu otomatik açmıyor veya focus’u kaydırmıyor.
- [x] Mobile davranışı — Safe area, touch target, scroll lock ve viewport yükseklikleri doğrulanıyor.
- [x] Klavye / focus davranışı — Menu/drawer trap, Escape, route-close ve focus restore çalışıyor.
- [x] Reduced motion davranışı — Drawer/menu hareketi sadeleşiyor, işlevsel state korunuyor.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite’i geçiyor (`npm run test`)
- [x] Responsive shell testleri desktop/tablet/mobile varyantlarının aynı route-meta kaynağını kullandığını doğruluyor.
- [x] Interaction testleri route seçimi, Escape, scroll-lock ve focus-restore davranışlarını doğruluyor.
- [x] Role testleri mobile menu’de guest/member/admin görünürlüğü ile Room exclusion sınırını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave05-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası mobile header ve menu’yu guest/member/admin state’lerinde gerçek route görünürlüğüyle evet/hayır olarak doğruluyor.
- [x] QA dosyası tablet Social Drawer’ın open/close, backdrop, scroll-lock, Escape, outside-close ve focus restore davranışlarını kontrol ediyor.
- [x] QA dosyası dar viewport, safe-area, browser zoom ve uzun label durumlarında yatay overflow/touch-target sorununu kontrol ediyor.
- [x] QA dosyası Room route’unda mobile shell/footer/drawer’ın bulunmadığını ve normal route’a dönüşte doğru shell’in geri geldiğini kontrol ediyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki mobile header, menu ve tablet drawer blok sırası korundu.
- [x] Header/menu/drawer oranları kullanılabilir alanı boğmuyor; içerik layout’u bu Wave’de değiştirilmedi.
- [x] Görsel odak hiyerarşisi doğru — Mobile navigation sayfa içeriğinden daha sakin.
- [x] Tipografi hiyerarşisi doğru — Menu/nav Inter, gerekli kısa page/brand karakteri Manrope kullanıyor.
- [x] Accent `#FF625A` yalnız active route, focus ve gerekli primary action’da kullanıldı.
- [x] Derinlik sistemi üç katmanda kaldı.
- [x] Cam efekti yalnız menu/drawer gibi geçici katmanlarda kullanıldı.
- [x] Sahte route, count, notification, user veya activity eklenmedi.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi normal mobile navigation metinlerinde sağlandı.
- [x] Klavye focus görünür; menu/drawer kapanınca tetikleyiciye dönüyor.
- [x] Safe-area, uzun label veya browser zoom yatay overflow üretmiyor.
- [x] Mevcut fonksiyonlar korundu — Custom router, auth, logout ve social API davranışı değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Tablet Social Drawer ve mobil minimal header/menu aynı Wave 04 route/role mantığını erişilebilir biçimde tüketiyor.
- [x] Mobile/tablet shell touch, safe-area, scroll-lock, Escape ve focus-restore testlerini geçiyor; alt navigation bulunmuyor.
- [x] Room route’unda bütün global mobile/tablet shell yüzeyleri kaldırılmıştır.
- [x] Ekran içerik layout’ları, yeni route veya backend capability bu Wave’e alınmamıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave05-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 05'i onayladı ve Codex durdu

---

### Wave 05 Sonucu — 2026-07-23

> Bu bölüm wave tamamlandıktan SONRA doldurulur. Wave yazılırken boş bırakılır.

- Wave 04 route metadata ve mevcut auth/role kontratları korunarak desktop `1041px+`, tablet `640–1040px` ve mobile `<640px` shell seçimi tek AppShell sahipliğinde tamamlandı.
- Mobil minimal header; safe-area uyumlu menu tetikleyicisi, sakin Vibehall/page context alanı ve yalnız tablette gerçek notification summary kullanan Social tetikleyicisiyle uygulandı. Tam mobil menu Wave 02 Drawer primitive'ini, gerçek guest/member/admin görünürlüğünü ve mevcut Home/Discover/Create Room/social/account yollarını kullanır.
- Tablet Social Drawer mevcut `SocialRail.tsx` içeriğini ve feature-aware Friends, Messages, Invites, People You Watched With, Blocked ve Settings yollarını ortak overlay/focus/scroll-lock altyapısında sunar. Bottom navigation, search, notification center, yeni route veya backend preference eklenmedi.
- Room erken-return sınırı mobile header, menu, Social Drawer, footer, desktop rail ve docked conversation için korundu. Utility/Admin içerik layout'ları, API, backend, database, auth, realtime ve custom router davranışı değiştirilmedi.
- Yeni focused Vitest kontratı 12/12, Chromium responsive shell E2E paketi 4/4 geçti. Frontend typecheck, production build ve tam Vitest paketi geçti; build yalnız mevcut büyük chunk uyarısını üretir.
- `tests/wave05-tests.md` staging/manual QA kaydı kullanıcı tarafından blocker olmadan tamamlandı. Wave 05, 2026-07-23 tarihinde kullanıcı kabulüyle QA-closed oldu; Codex Wave 06'yı başlatmadan durdu.

---

### Wave 06 — Ortak RoomCard, Medya ve Aura Foundation

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-23.

**Hedef:**
Home ve Discover’ın paylaşacağı gerçek verili RoomCard, thumbnail/fallback, aura ve Live/presence sunumu tek reusable bileşen ailesinde tamamlanır.

**Neden bu sırada geliyor:**
Home ve Discover ayrı Wave’lerdir fakat kart ve medya davranışının iki kez üretilmesi tutarsızlık ve regression yaratır; RoomCard yalnız Wave 01 tokenları ile Wave 02 ortak primitive’lerini gerçek `Room`/Discover response alanları üzerinde tüketir.

**Bağımlılıklar:**
- Wave 01 tokenları ve Wave 02 ortak primitive'leri tamamlanmış olmalıdır.
- Mevcut `Room` ve Discover response alanları doğrulanmış olmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 06 — Ortak RoomCard, Medya ve Aura Foundation`
- `Roads/project-foundation/04-ui-ux-definition/discover-page-spec.md`
  - `## 9. Live Room Grid`
  - `## 10. Room Card Specification`
- `Design/DESIGN_SYSTEM_COMPONENT_BOARD.md`
  - `## 6. İçerikten Doğan Aura Sistemi`
  - `## 16. Live ve Presence Göstergeleri`
  - `## 17. Oda Kartı`
- Uygulanabilirlik referansları: `Vibe frontend/src/rooms/roomApi.ts`, `Vibe frontend/src/pages/DiscoverShellPage.tsx`, `Vibe frontend/src/pages/HomeShellPage.tsx`, `Vibe frontend/src/styles/pages.css`, `Vibe frontend/src/styles/feedback.css` ve Wave 03 media/skeleton primitive’leri.

**Görsel referans:**
- Görsel 1: Design System Component Board — RoomCard’ın `16:9` medya, oda/host bilgisi, Live/category ve participant count anatomisi.
- Görsel 2: Design System Component Board — thumbnail’den doğan aura, hover/focus ve neutral fallback durumları.
- Görsel 3: Design System Component Board — desktop ve mobile RoomCard yoğunluk/touch davranışı.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki oda adı, host, avatar, thumbnail, participant count veya popularity/trending işaretleri temsilîdir; yalnız gerçek `Room`/Discover response alanları render edilir.

---

**Kapsam içi:**
- `16:9` medya alanı, lazy loading, stable fallback ve performanslı statik aura.
- Oda adı, host, gerçek participant count, Live/category ve accessible entry label.
- Desktop hover/focus ile mobil touch davranışının ortak component API’si.
- Mevcut Discover inline kartının ortak RoomCard tüketicisine kontrollü migration’ı.

**Kapsam dışı:**
- Home hero, Home live-room bölüm kompozisyonu veya Home data fetching; Wave 07’ye aittir.
- Discover hero, query/search/filter/sort toolbar, pagination veya empty/error sayfa akışı; Wave 08’e aittir.
- Room Gate, auth return intent, private-room access veya join davranışı.
- Sahte thumbnail, sayaç, trending, popularity veya private room verisi.
- Runtime renk analizi servisi, backend alanı, API veya database değişikliği.
- Genel card/component consolidation; Wave 25’e aittir.

---

**Implementation kontrol listesi:**

*Gerçek veri ve component sınırı:*
- [x] `roomApi.ts` içindeki `Room`, `RoomHost`, `RoomSource`, `RoomCategory`, `card`, participant ve visibility alanlarını backend Discover response’u ile read-only doğrula.
- [x] `DiscoverShellPage.tsx` içindeki inline RoomCard markup, helper, navigation ve `pages.css` selector’larını Wave 00 sahiplik envanteriyle eşleştir.
- [x] Shared RoomCard API’sini mevcut `Room` tipini doğrudan tüketecek şekilde tanımla; oda/host/category için duplicate frontend model oluşturma.
- [x] Kartın tek giriş hedefini mevcut custom-router callback’iyle `/room?roomId=<id>` akışına bağla; nested interactive control veya ikinci join mutation ekleme.
- [x] Kartın accessible name’inde oda adı, host, Live durumu ve gerçek participant bağlamını anlaşılır sırayla sun.

*Medya, fallback ve aura:*
- [x] Thumbnail alanını CSS `aspect-ratio: 16 / 9`, sabit width/height bilgisi ve layout-shift önleyici container ile kur.
- [x] Gerçek thumbnail için native lazy loading/decoding davranışını kullan; ilk viewport önceliğini page sahibi belirlemeden bütün kartları eager yükleme.
- [x] Missing veya failed thumbnail durumunda kırık image göstermeyen nötr fallback sun; oda adı ve diğer metinleri kullanılabilir bırak.
- [x] Aura’yı yalnız gerçek thumbnail’in güçlü blur, karartma, scale ve mask uygulanmış görsel katmanından üret; sahte/rastgele renk oluşturma.
- [x] Aura’yı kart çevresiyle sınırla, chat/metin kontrastını etkileme ve bütün viewport’u tek renge boyama.
- [x] Blur/opacity başlangıç değerlerini canonical desktop/mobile sınırlarında tokenlaştır; kesin görsel değeri prompt karşılaştırması ve performans ölçümüyle ayarla.

*Kart anatomisi ve interaction:*
- [x] Room title, category, host display name/avatar, Live state, gerçek `activeParticipantCount` ve mevcut capacity label’ı tek sakin bilgi hiyerarşisinde render et.
- [x] Host avatarında gerçek `avatarUrl` veya initials fallback kullan; sahte avatar ve harici avatar edit davranışı ekleme.
- [x] Live ve nearly-full gibi mevcut durumları yalnız gerçek response alanlarından metin+renk/ikon desteğiyle göster.
- [x] Desktop hover ve keyboard focus sırasında yaklaşık `4px` yükselme, kontrollü thumbnail zoom ve aura güçlenmesini `200–240ms` sakin motion sınırında uygula.
- [x] Mobilde hover taklit etme; tap feedback’i kısa tut ve kart giriş affordance’ını hover olmadan anlaşılır kıl.
- [x] `prefers-reduced-motion` açıkken lift, scale, thumbnail zoom ve pulse hareketini kapat; focus ve Live bilgisini statik koru.
- [x] Wave 03 RoomCardSkeleton/MediaPlaceholder geometrisini gerçek kartla aynı ölçüde kullan; bu Wave’de list-level loading/empty copy üretme.
- [x] Discover’ın mevcut inline kart render’ını shared RoomCard ile değiştir; search/filter/sort/load-more state ve copy’sine dokunma.
- [x] Yalnız RoomCard’a ait selector’ları mevcut CSS mimarisinde tek shared sahipliğe taşı; Home veya Discover sayfa layout selector’larını taşımama.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Public/live RoomCard görünür ve giriş aksiyonu mevcut Room route/gate zincirine gider.
- [x] Member state — Aynı kart ve gerçek veriler member için duplicate varyant üretmeden çalışır.
- [x] Host state — Gerçek host kimliği kartta gösterilir; host’a özgü control veya farklı kart davranışı eklenmez.
- [-] Admin state — Bu Wave’de admin’e özgü RoomCard davranışı bulunmuyor.
- [x] Loading state — Thumbnail ve kart skeleton geometrisi layout shift üretmiyor.
- [-] Empty state — Room listesinin empty/no-results sunumu Home/Discover ekran Wave’lerinin sorumluluğunda.
- [x] Error state — Thumbnail failure nötr fallback’e düşüyor; list/API error bu component’in sorumluluğunda değil.
- [-] Denied / unavailable state — Access denied/full/ended/gate davranışı bu RoomCard foundation’ın kapsamı dışında.
- [-] Reconnecting state — Room/realtime reconnect davranışı Wave 12’nin sorumluluğunda.
- [x] Mobile davranışı — `16:9` medya, readable metadata ve tap affordance yatay overflow olmadan çalışıyor.
- [x] Klavye / focus davranışı — Kart tek anlamlı focus target ve görünür accessible entry davranışı taşıyor.
- [x] Reduced motion davranışı — Lift/zoom/pulse kapanıyor; Live/focus bilgisi korunuyor.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite’i geçiyor (`npm run test`)
- [x] RoomCard component testleri gerçek response alanları, fallback, accessible label ve navigation hedefini doğruluyor.
- [x] Discover regression testi search/filter/sort/load-more davranışının RoomCard extraction sonrasında değişmediğini doğruluyor.
- [x] CSS/performance kontrolü kartın `16:9` alan ayırdığını, aura katmanının kart sınırını aşmadığını ve tanımsız token kullanmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave’in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave06-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası gerçek thumbnail, missing thumbnail ve failed thumbnail durumlarında kart geometrisi/fallback’in evet/hayır ile doğru olduğunu kontrol ediyor.
- [x] QA dosyası gerçek title, host, category, participant count, Live ve mevcut capacity bilgisinin backend response’uyla birebir olduğunu kontrol ediyor.
- [x] QA dosyası desktop hover/focus, keyboard entry ve mobile tap davranışını normal/reduced-motion modlarında doğruluyor.
- [x] QA dosyası private room, sahte thumbnail/count ve hard-coded popularity/trending bilgisinin hiçbir RoomCard’da görünmediğini kontrol ediyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki media, metadata, title, host ve footer blok sırası korundu.
- [x] `16:9` thumbnail ile kart bilgi alanı oranı referans karakterini koruyor.
- [x] Görsel odak hiyerarşisi doğru — Thumbnail/aura en güçlü, metadata ve giriş affordance’ı ikincil.
- [x] Tipografi hiyerarşisi doğru — Oda adı Manrope, metadata/host/action Inter kullanıyor.
- [x] Accent `#FF625A` kontrollü kullanıldı; kartın tamamını boyamadı.
- [x] Derinlik sistemi üç katmanda kaldı.
- [x] Cam efekti kalıcı RoomCard yüzeyine uygulanmadı; aura içerikten gelen ışık olarak kaldı.
- [x] Sahte thumbnail, room, host, participant count, trending veya popularity verisi yok.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi kart metinlerinde ve Live durumunda sağlandı.
- [x] Klavye focus görünür ve hover affordance’ı focus ile de erişilebilir.
- [x] Uzun title/host/category veya dar viewport yatay overflow üretmiyor.
- [x] Mevcut fonksiyonlar korundu — Discover API, query, pagination ve Room navigation kontratı değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Shared RoomCard yalnız gerçek `Room`/Discover alanlarını kullanan tek component ve stil sahipliğine sahiptir.
- [x] Thumbnail loading/failure, neutral fallback ve statik aura desktop/mobile/reduced-motion senaryolarında doğrulanmıştır.
- [x] Discover mevcut query ve pagination davranışını koruyarak shared RoomCard’ı kullanır; Home integration’ı Wave 07’ye bırakılmıştır.
- [x] Private/fake/trending/popularity verisi, yeni backend alanı veya access/join davranışı eklenmemiştir.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave06-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 06'yı onayladı ve Codex durdu

---

### Wave 06 Sonucu — 2026-07-23

- Shared `RoomCard`, doğrudan gerçek `Room` tipini tüketen tek public/live kart sahibi olarak eklendi; accessible tek giriş hedefi mevcut custom-router ile `/room?roomId=<id>` zincirini koruyor.
- `16:9` lazy medya, missing/failed neutral fallback ve gerçek thumbnail kaynaklı statik aura tamamlandı; desktop hover/focus, mobil tap, reduced-motion ve Wave 03 skeleton geometrisi hizalandı.
- Discover inline kartı shared RoomCard tüketimine geçirildi; search/filter/sort/load-more, empty/error ve Room navigation kontratları korunarak Home entegrasyonu Wave 07 kapsamına bırakıldı.
- Frontend typecheck ve build geçti; Vitest tam suite `81/81`, Wave 06 focused suite `9/9`, Chromium E2E `2/2` geçti. Mevcut `500 kB` üzeri chunk uyarısı yeni Wave 06 hatası değildir.
- `tests/wave06-tests.md` manuel QA matrisi kullanıcı tarafından tamamlandı; blocker bildirilmedi ve kullanıcı Wave 06 için 2026-07-23 tarihinde onay verdi.
- Backend, API, database, auth, realtime ve sonraki Wave kapsamları değiştirilmedi. Wave 07 implementation başlamadan duruldu.

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
---

### Wave 08 — Discover Koridoru ve Query Deneyimi

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-24.

**Hedef:**
Discover yalnız public/live odaları, mevcut search/category/sort/pagination sözleşmeleriyle oda grid'ini başrole alarak sunar.

**Neden bu sırada geliyor:**
Wave 03–06 ortak state, shell ve RoomCard altyapısını kurmuştur; Discover artık bu yatay sahiplikleri tekrar üretmeden query, public/live policy ve sayfa state'lerini tek bağımsız route teslimi olarak kapatabilir.

**Bağımlılıklar:**
- Wave 03–06 ortak state, shell ve RoomCard altyapıları tamamlanmış olmalıdır.
- Mevcut Discover REST kontratı ve private/block filtreleri korunmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 08 — Discover Koridoru ve Query Deneyimi`
- `Roads/project-foundation/04-ui-ux-definition/discover-page-spec.md`
  - `## 6. Search Experience`
  - `## 7. Category Filter Experience`
  - `## 8. Sorting Experience`
  - `## 13. Discover-to-Room Entry Behavior`
- `Design/DISCOVER_DESIGN_PACKAGE.md`
  - `## 3. Kilitli Kompozisyon`
  - `## 10. Oda Grid’i`
  - `## 14. Private Room ve Access Kuralları`
  - `## 18. Loading Davranışı`
  - `## 19. Empty State’ler`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/DiscoverShellPage.tsx`, `Vibe frontend/src/rooms/roomApi.ts`, `Vibe frontend/src/lib/routes.ts`, `Vibe frontend/src/styles/pages.css`, `Vibe frontend/src/styles/responsive.css`, mevcut backend `GET /api/discover/rooms` kontratı ve Wave 03/06 state–RoomCard sahiplikleri.

**Görsel referans:**
- Görsel 1: Discover Design Package — desktop heading, tek query toolbar, sonuç bilgisi ve oda grid'inin baskın kompozisyonu.
- Görsel 2: Discover Design Package — initial loading, quiet query refresh, load-more, no-rooms, no-results ve lokal error durumları.
- Görsel 3: Discover Design Package — tablet/mobil search, category/sort kontrolleri ve 1–2 kolon RoomCard düzeni.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki oda/host/category listeleri, sayaçlar, thumbnail'ler, trending, popular tags, verified işaretleri ve yardımcı paneller temsilîdir; gerçek Discover response'u veya mevcut query/policy kontratlarının yerine geçmez.

---

**Kapsam içi:**
- Discover heading, tek room-search deneyimi, category/sort kontrolleri ve mevcut custom-router query durumu.
- Public/live RoomCard grid'i, mevcut cursor/load-more davranışı ve scroll/sonuç sürekliliği.
- Initial loading, quiet query refresh, no-live-rooms, no-search-results, no-filter-results ve lokal error/retry ayrımı.
- Guest/member Room seçimi için normal `/room` access zincirine güvenli handoff; responsive, keyboard ve reduced motion davranışı.

**Kapsam dışı:**
- Global people/video search, yeni tag sistemi, trending/ranking algoritması, verified sistemi veya hard-coded room count.
- Normal login/signup/reset form tasarımı; Wave 09'a aittir.
- Room Context Auth preview, return-intent güvenliği ve auth sonrası Room dönüşü; Wave 10'a aittir.
- Room player/chat, realtime lifecycle veya access policy kararlarının frontend'e taşınması.
- Discover endpoint'i, private/block politikası, API, backend veya database değişikliği.

---

**Implementation kontrol listesi:**

*Query ve kontrat sahipliği:*
- [x] `DiscoverShellPage.tsx` içindeki mevcut search/category/sort/loading/error/pagination state'lerini `DISCOVER_DESIGN_PACKAGE.md` bloklarıyla ve Wave 00 envanteriyle eşleştir.
- [x] `roomApi.ts` `DiscoverRoomsInput/Result` alanlarını backend `discoverQuerySchema` ile birebir doğrula; yalnız `search`, `categorySlug`, `sort`, `cursor` ve desteklenen `limit` değerlerini gönder.
- [x] İlk render'da izin verilen search/category/sort değerlerini mevcut URL query'sinden okuyup kontrolleri hydrate et; geçersiz değerleri backend kontratına göndermeden güvenli varsayılana düşür.
- [x] Search/category/sort değişikliklerini custom router/history sözleşmesini bozmadan URL query'sine yaz; cursor'ı yeni query'de sıfırla ve browser back/forward davranışını koru.
- [x] Search değişikliklerinde request churn'ü sınırlayan gecikmeli değer ve stale-response koruması uygula; eski response'un yeni filtre sonucunu ezmesini engelle.
- [x] Category seçeneklerini yalnız mevcut `/categories` kaynağından yükle; hard-coded kategori veya category/tag karışımı ekleme.
- [x] Sort kontrolünü yalnız `newest`, `active` ve `nearly-full` enumlarıyla sınırla; yeni ranking veya popularity hesabı üretme.

*Kompozisyon, grid ve pagination:*
- [x] Heading ile tek query toolbar'ı oda grid'inden daha sakin kalacak şekilde yerleştir; global header search ile ikinci room-search alanı üretme.
- [x] Sonuçları yalnız Wave 06 shared RoomCard ile render et; inline kart markup'ı, aura veya media fallback'i Discover içinde yeniden oluşturma.
- [x] `nextCursor` sonucunu mevcut kontrollü `Load more` davranışına bağla; yeni sayfayı mevcut kartların sonuna ekle ve scroll konumunu koru.
- [x] Load-more isteği sırasında yalnız buton/alt bölümü loading yap; mevcut grid ve query kontrollerini kullanılabilir bırak.

*State, access handoff ve responsive:*
- [x] İlk yüklemede Wave 03/06 RoomCardSkeleton grid'ini kullan; kart oranını ayır ve tam sayfa spinner gösterme.
- [x] Search/category/sort yenilenirken mevcut sonuçları mümkün olduğunca koruyan quiet refresh sun; grid blink'i veya tüm sayfayı boşaltma davranışı üretme.
- [x] Hiç live public room, search sonucu yok ve filter sonucu yok durumlarını ayrı copy/aksiyonlarla System States Board diline bağla.
- [x] Room fetch hatasında shell ve query toolbar'ı koruyan lokal retry sun; category veya yardımcı veri hatasını çalışan room grid'ine yayma.
- [x] RoomCard seçimini mevcut `/room?roomId=<id>` route'una bağla; Discover içinde auth, password veya join mutation'ı başlatma.
- [x] Signed-in kullanıcı seçiminde capacity, ban, block ve room-state sonucunu normal Room access check'e bırak; frontend kart verisini access authority olarak kullanma.
- [x] Mobilde tek search, okunabilir category/sort erişimi, 1 kolon veya belgelenmiş kontrollü 2 kolon ve minimum `44×44px` touch target sağla.
- [x] Search label'ı, category/sort announcement'ı, grid semantics, load-more sonuç duyurusu ve görünür focus ile keyboard/screen-reader akışını tamamla.
- [x] Query/filter ve kart geçişlerini motion tokenlarıyla sınırla; `prefers-reduced-motion` altında grid reorder/lift/scroll animasyonlarını kapat.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Public/live grid ve query kontrolleri görünür; RoomCard seçimi normal Room route/gate zincirine gider.
- [x] Member state — Aynı Discover kontratı çalışır; block filtreleri ve Room access policy backend authority olarak korunur.
- [x] Host state — Host kendi public/live odasını gerçek response içinde görebilir; host'a özgü Discover kontrolü veya ranking eklenmez.
- [-] Admin state — Discover'da admin'e özgü grid, policy bypass veya operational kontrol bulunmuyor.
- [x] Loading state — Initial skeleton, quiet query refresh ve lokal load-more loading birbirinden ayrılır.
- [x] Empty state — No-live-rooms, no-search-results ve no-filter-results durumları farklı metin ve gerçek aksiyonlar taşır.
- [x] Error state — Room fetch, category fetch ve load-more hataları mümkün olan en küçük yüzeyde retry ile gösterilir.
- [x] Denied / unavailable state — Room full/ended/banned/blocked/private sonuçları Discover'da tahmin edilmez; normal Room access handoff'u authoritative sonucu gösterir.
- [-] Reconnecting state — Discover bu Wave'de yeni realtime socket kurmaz; Room realtime reconnect Wave 12 ve sonraki Room Wave'lerine aittir.
- [x] Mobile davranışı — Tek query deneyimi, okunabilir grid, touch target ve safe-area davranışı yatay overflow olmadan çalışır.
- [x] Klavye / focus davranışı — Query kontrolleri, RoomCard grid'i ve load-more mantıklı tab sırası ve görünür focus taşır.
- [x] Reduced motion davranışı — Grid geçişleri, kart lift'i ve otomatik scroll/reorder hareketleri kapanır; sonuç bilgisi statik kalır.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Discover testleri URL query ↔ control state eşleşmesini, stale-response korumasını ve yalnız desteklenen query alanlarının gönderildiğini doğruluyor.
- [x] Discover state testleri initial loading, quiet refresh, üç empty state, page error ve load-more failure ayrımını doğruluyor.
- [x] Policy/navigation testleri yalnız backend'den gelen public/live kartların render edildiğini ve kart seçiminin `/room?roomId=<id>` handoff'u ürettiğini doğruluyor.
- [x] Browser accessibility testi search/category/sort, grid ve load-more keyboard/focus/announcement davranışlarında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave08-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası search, category, sort, URL persistence ve browser back/forward sonuçlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası initial loading, quiet refresh, load-more success/failure ve üç ayrı empty state'i kontrol ediyor.
- [x] QA dosyası guest/member RoomCard seçiminin auth/access policy'yi bypass etmeden doğru Room handoff'una ulaştığını doğruluyor.
- [x] QA dosyası private/ended/blocked room sızıntısı, sahte room count/trending/tag ve ikinci search alanı bulunmadığını kontrol ediyor.
- [x] QA dosyası desktop, tablet, mobil, keyboard ve reduced-motion davranışlarını doğruluyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki heading → query toolbar → result info → RoomCard grid → load-more sırası korundu.
- [x] Oda grid'i sayfanın en büyük ve en baskın yüzeyi; query ve yardımcı yüzeyler ikincil kaldı.
- [x] Görsel odak hiyerarşisi doğru — RoomCard/media güçlü, shell ve filtreler sakin.
- [x] Tipografi hiyerarşisi doğru — Sayfa/oda başlıkları Manrope, controls/metadata Inter kullanıyor.
- [x] Accent `#FF625A` yalnız active control, ana CTA ve focus'ta kontrollü kullanıldı.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız geçici popover/bottom-sheet gibi overlay yüzeylerinde kullanıldı; kalıcı grid paneline yayılmadı.
- [x] Sahte room, thumbnail, participant count, global count, trending, popular tags veya verified badge yok.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi query controls, RoomCard, empty/error ve load-more yüzeylerinde sağlandı.
- [x] Klavye focus görünür; search/category/sort/grid/load-more sırası mantıklı.
- [x] Desktop, tablet ve mobilde yatay overflow yok.
- [x] Mevcut fonksiyonlar korundu — Discover query enumları, cursor, public/live ve block policy ile custom-router davranışı değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Discover mevcut search/category/sort/cursor sözleşmesini URL ile tutarlı ve bağımsız doğrulanabilir tek route deneyimi olarak sunar.
- [x] Public/live RoomCard grid'i mevcut backend policy'sini ve Wave 06 shared kart sahipliğini korur; private veya blocked metadata sızdırmaz.
- [x] Initial/refresh/load-more loading, üç empty state ve lokal error/retry senaryoları ayrı ayrı doğrulanmıştır.
- [x] Guest/member access handoff'u, responsive/keyboard/reduced-motion davranışı ve query persistence staging'de geçmiştir.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave08-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 08'i onayladı ve Codex durdu

---

### Wave 08 Sonucu — 2026-07-24

- Discover tek page-owned heading, tek room-search/query toolbar, gerçek category/sort kontrolleri, URL hydration/history ve bounded search debounce ile tamamlandı.
- Gerçek `/categories` kaynağını ve aynı `categorySlug` state'ini kullanan `All` + category shortcut row eklendi; dropdown, chip ve URL çift yönlü senkron kaldı, mobil yatay taşma ve seçili chip görünürlüğü doğrulandı.
- Public/live sonuçlar Wave 06 shared RoomCard ile semantik grid içinde sunuldu; cursor/load-more, quiet refresh, üç empty state ailesi, lokal error/retry ve normal `/room?roomId=<id>` handoff'u korundu.
- Frontend typecheck ve production build geçti. Tam Vitest paketi 10 dosyada 95/95, focused Wave 08 suite'i 8/8, Wave 08 Chromium E2E 5/5 ve shell/RoomCard/Social Rail regresyon E2E paketi 9/9 geçti.
- `tests/wave08-tests.md` staging/browser matrisi blocker olmadan kullanıcı tarafından tamamlandı; serbest biçimli checkbox işaretleri standart `[x]` biçimine normalize edildi.
- Backend, database, REST API, auth, realtime, route veya dependency değiştirilmedi. Trending, Popular tags, How it works, global search, verified ve hard-coded count capability'leri eklenmedi.
- Wave 08, 2026-07-24 tarihinde kullanıcı kabulüyle QA-closed oldu. Wave 09 başlatılmadan Codex durdu.

---

### Wave 09 — Normal Auth Görsel Foundation

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-24.

**Hedef:**
Login, signup ve password-reset yüzeyleri gerçek auth alanlarıyla ortak, erişilebilir ve düşük sürtünmeli form ailesine taşınır.

**Neden bu sırada geliyor:**
Normal auth yüzeyleri Wave 02 form primitive'leri, Wave 03 feedback sistemi ve Wave 05 responsive shell üzerine kurulmalıdır; Room Context Auth Gate bu doğrulanmış form davranışını Wave 10'da oda bağlamıyla birleştirecektir.

**Bağımlılıklar:**
- Wave 02, 03 ve 05 ortak form, feedback ve responsive shell altyapıları tamamlanmış olmalıdır.
- Backend auth validation ve session kontratı değiştirilmeden kullanılmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 09 — Normal Auth Görsel Foundation`
- `Roads/project-foundation/02-system-definition/auth-and-access-rules.md`
  - `## 3. Member-Only Participation Rule`
  - `## 17. Account State Awareness`
- `Design/AUTH_AND_ROOM_GATE_DESIGN_PACKAGE.md`
  - `## 3. Kilitli Kompozisyon`
  - `## 7. Form Bileşenleri`
  - `## 10. Etkileşimler`
  - `## 11. Hata Sistemi`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/AuthPage.tsx`, `Vibe frontend/src/auth/AuthContext.tsx`, `Vibe frontend/src/lib/api.ts`, `Vibe frontend/src/lib/routes.ts`, `Vibe frontend/src/styles/forms.css`, `Vibe frontend/src/styles/responsive.css` ve mevcut backend `src/routes/auth.ts` login/signup/password-reset şemaları.

**Görsel referans:**
- Görsel 1: Auth Design Package — normal desktop login ve signup kompozisyonu, form hiyerarşisi ve alternatif akış bağlantıları.
- Görsel 2: Auth Design Package — forgot-password, reset-password, success, field/form/network error ve lokal submit durumları.
- Görsel 3: Auth Design Package — mobil auth formu, keyboard/autofill yerleşimi, focus ve touch davranışı.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki alanlar, `Stay signed in`, provider butonları, örnek kimlikler ve copy temsilîdir; yalnız mevcut backend auth schema/session kontratı uygulanır.

---

**Kapsam içi:**
- Normal `/auth` login/signup modları ile `/auth/reset` ve forgot-password yüzeylerinin ortak görsel ailesi.
- Mevcut login/signup/reset alanları, autocomplete/password-manager davranışı ve backend-aligned validation.
- Field/form/network/account-state error, lokal submit, success feedback ve double-submit koruması.
- Desktop/mobil form ergonomisi, keyboard/focus, screen-reader duyuruları ve reduced motion.

**Kapsam dışı:**
- Gerçek Room preview, Room Context Auth iki-kolon kompozisyonu ve Room return-intent güvenlik zinciri; Wave 10'a aittir.
- Yeni auth provider, social login, `Stay signed in`, email verification, yeni form alanı veya session/cookie davranışı.
- Auth API, rate limit, password-reset token, backend validation veya database değişikliği.
- Create Room formu veya Room access/join policy uygulaması.
- Tek kullanımlık auth bölümlerini genel consolidation kapsamına taşıma; Wave 25'e aittir.

---

**Implementation kontrol listesi:**

*Gerçek auth kontratı ve modlar:*
- [x] `AuthPage.tsx`, `AuthContext.tsx` ve backend `auth.ts` şemalarındaki login, signup, forgot ve reset alanlarını/limitlerini read-only eşleştir; görsel nedeniyle alan ekleme veya kaldırma.
- [x] `AuthPage` içindeki dört mevcut mode'u (`login`, `signup`, `forgot`, `reset`) normal auth form ailesinin açık durumları olarak koru; yeni wizard veya provider akışı ekleme.
- [x] Normal auth görünümünü formun ana odak olduğu nötr/mat kompozisyona taşı; gerçek Room bağlamı bulunmayan ekranda temsilî room preview render etme.
- [x] Login formunu yalnız mevcut `emailOrUsername` ve `password` payload'ına bağla; doğru `username`/`current-password` autocomplete değerlerini koru.
- [x] Signup formunu yalnız mevcut `email`, `username`, `displayName` ve `password` payload'ına bağla; backend username/password sınırlarıyla çelişen frontend kuralı üretme.
- [x] Forgot-password formunu mevcut `/auth/password-reset/request` safe response kontratına bağla; hesabın varlığını success/error copy'siyle ifşa etme.
- [x] Reset formunu `/auth/reset?token=...` route'u, tek kullanımlık token ve password-confirm eşleşmesiyle koru; missing/invalid/expired token durumlarını ayrı göster.

*Form primitive, feedback ve submit davranışı:*
- [x] Input, label, password control, button ve feedback yüzeylerinde yalnız Wave 02–03 ortak primitive/token sahipliklerini tüket; auth'a özel duplicate control sistemi kurma.
- [x] Her input'a görünür label, doğru autocomplete ve error metniyle programatik ilişki ekle; placeholder'ı label yerine kullanma.
- [x] Frontend hızlı validation'ını backend şema sınırlarıyla hizala; backend'i bypass eden veya daha dar belgelenmemiş alan kuralı ekleme.
- [x] Alan hatası, form-level auth hatası, network hatası ve account-state denial sonucunu kullanıcı dostu fakat bilgi sızdırmayan ayrı feedback yollarına eşleştir.
- [x] Submit sırasında yalnız ana CTA'yı lokal loading/disabled yap; ikinci submit'i engelle ve form layout'unu koru.
- [x] Başarılı login/signup sonucunda yalnız mevcut `AuthContext` session state'ini güncelle; cookie/session saklama davranışını yeniden tasarlama.
- [x] Login/signup/forgot arasında mode değiştirirken URL mode bilgisini mevcut custom-router/history yapısıyla koru; stale error/success mesajını yeni forma taşıma.
- [x] Password manager ve browser autofill sonrasında label, değer, validation ve submit durumunun doğru kaldığını doğrula.

*Responsive ve erişilebilirlik:*
- [x] Submit sonrası alan hatası varsa focus'u ilk geçersiz alana, form-level hata varsa açıklayıcı feedback başlangıcına yönlendir.
- [x] Success, loading ve error mesajlarını uygun `role`/live-region davranışıyla duyur; her tuşta agresif announcement üretme.
- [x] Mobilde tek kolon, tam genişlik input/CTA, görünür aktif input, keyboard-safe scroll ve minimum `44×44px` touch target sağla.
- [x] Auth panelini `forms.css` ve `responsive.css` içinde mevcut selector sahipliklerine kontrollü migrate et; Home/Room Gate/Create Room layout selector'larını bu Wave'e taşıma.
- [x] Focus/feedback geçişlerini motion tokenlarıyla sınırla; `prefers-reduced-motion` altında dekoratif panel ve success hareketlerini kapat.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Login, signup, forgot ve reset yüzeyleri gerçek backend alanları ve düşük sürtünmeli geçişlerle kullanılabilir.
- [x] Member state — Başarılı login/signup mevcut session state'ini günceller ve mevcut güvenli hedef davranışına geçer; duplicate session modeli oluşturmaz.
- [-] Host state — Normal auth formlarında host'a özgü alan veya davranış bulunmuyor.
- [-] Admin state — Admin için ayrı auth formu veya bypass bulunmuyor; admin aynı gerçek auth/session kontratını kullanır.
- [x] Loading state — Her form submit'i lokal CTA loading ile gösterilir; form ve sayfa blink etmez.
- [-] Empty state — Normal auth form ailesinde veri-listesi empty state'i bulunmuyor.
- [x] Error state — Field, form, network, account-state ve reset-token hataları teknik detay sızdırmadan ayrılır.
- [x] Denied / unavailable state — Restricted/suspended/banned veya invalid/expired reset token sonucu mevcut backend kodundan kullanıcı dostu feedback'e çevrilir.
- [-] Reconnecting state — Auth HTTP form akışıdır; realtime reconnect davranışı bu Wave'de bulunmuyor.
- [x] Mobile davranışı — Keyboard/autofill açıkken aktif alan, hata ve submit CTA erişilebilir kalır; yatay overflow oluşmaz.
- [x] Klavye / focus davranışı — Doğal tab sırası, Enter submit, görünür focus ve ilk-hata yönlendirmesi çalışır.
- [x] Reduced motion davranışı — Dekoratif panel/form geçişleri kapanır; loading, error ve success bilgisi statik olarak korunur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Auth mode testleri login/signup/forgot/reset alanlarını, payload'larını ve mode URL geçişlerini mevcut kontratla doğruluyor.
- [x] Auth feedback testleri double-submit, safe password-reset response, missing/invalid token, account-state ve network error davranışını doğruluyor.
- [x] Auth accessibility testleri label/error ilişkisi, autocomplete, live-region ve focus yönlendirmesinde kritik ihlal olmadığını doğruluyor.
- [x] Route inventory testi `/auth` ve `/auth/reset` sahipliklerinin değişmediğini doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave09-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası login ve signup success/failure, yanlış alan, double-submit ve session sonucunu staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası forgot-password safe response ile valid, missing, expired ve used reset-token durumlarını kontrol ediyor.
- [x] QA dosyası password manager, browser autofill, Enter submit, keyboard focus ve screen-reader error announcement davranışlarını doğruluyor.
- [x] QA dosyası desktop/mobil/reduced-motion görsel karşılaştırmasını ve yeni provider/alan/`Stay signed in` eklenmediğini kontrol ediyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki auth amacı → form → ana CTA → alternatif akış → forgot-password sırası korundu.
- [x] Normal auth ekranında form ana odak; temsilî Room preview veya ağır portal dekoru formu bastırmıyor.
- [x] Görsel odak hiyerarşisi doğru — Form/CTA güçlü, yardımcı copy ve linkler ikincil.
- [x] Tipografi hiyerarşisi doğru — Auth başlıkları Manrope, labels/input/actions Inter kullanıyor.
- [x] Accent `#FF625A` ana CTA, focus ve kontrollü error/active durumlarıyla sınırlı.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti kalıcı form panelinde kullanılmadı; varsa yalnız geçici toast/overlay katmanında kaldı.
- [x] Sahte provider, auth alanı, account durumu veya session davranışı yok.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi input, helper, error, success ve CTA metinlerinde sağlandı.
- [x] Klavye focus görünür; mode switch, fields, CTA ve secondary actions sırası mantıklı.
- [x] Mobil keyboard/autofill dahil yatay overflow yok.
- [x] Mevcut fonksiyonlar korundu — auth payload'ları, cookie session, CSRF, rate limit ve password-reset token kontratı değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Login, signup, forgot ve reset yüzeyleri tek tutarlı auth görsel ailesi içinde gerçek backend alanlarıyla çalışır.
- [x] Field/form/network/account-state/reset-token success ve failure durumları lokal, erişilebilir ve bilgi sızdırmayan feedback taşır.
- [x] Double-submit, password manager/autofill, mobile keyboard, focus ve reduced-motion senaryoları doğrulanmıştır.
- [x] Room preview veya Room return-intent güvenliği bu Wave'e taşınmamış; Wave 10 sınırı korunmuştur.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave09-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 09'u onayladı ve Codex durdu

---

### Wave 09 Sonucu — 2026-07-24

- Normal `/auth` login/signup/forgot ve `/auth/reset` yüzeyleri gerçek backend alanlarını ve mevcut session kontratını kullanan ortak, mat, responsive ve erişilebilir auth form ailesine taşındı.
- Shared `Button`, `Input`, `FormField`, `ActionFeedback` ve `InlineError` primitive'leri; backend-aligned validation, safe field/form/network/account-state/reset-token feedback'i, lokal submit, double-submit guard, autocomplete, focus ve reduced-motion davranışı tamamlandı.
- İlk implementation `9f73c62 designwave09`; kullanıcı QA'sında bulunan aynı-route shell auth mode senkronu, `returnTo` koruması ve required `*` label hizası düzeltmesi `a73b6fb designwave09fix` commit'inde kapatıldı.
- Frontend typecheck ve production build geçti. Tam Vitest 11 dosyada 103/103, focused Wave 09 suite 8/8, mode/returnTo/required hizası dahil Wave 09 Chromium E2E 5/5 ve Wave 05/07/08 regresyon E2E paketi 13/13 geçti. Mevcut 500 kB üzeri Vite chunk uyarısı blocker değildir.
- `tests/wave09-tests.md` içindeki desktop/tablet/mobile, login/signup/forgot/reset, password-manager/autofill, keyboard/screen-reader, WCAG AA, reduced-motion, safe feedback ve regression matrisi kullanıcı tarafından tamamlandı; blocker-fix retest'i geçti.
- Room preview ve iki-kolon Room Context Auth Wave 10'a bırakıldı. `Stay signed in`, provider ve yeni session seçeneği mevcut auth kontratında olmadığı için eklenmedi.
- Backend, database, REST API, auth/session/cookie, CSRF, rate limit, reset-token, realtime, route veya dependency davranışı değiştirilmedi.
- Wave 09 kullanıcı kabulüyle QA-closed oldu. Wave 10 yalnız sıradaki Wave olarak kaydedildi ve başlatılmadan Codex durdu.

---

### Wave 10 — Room Context Auth Gate ve Return Intent

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-28.

**Hedef:**
Misafir kullanıcı gerçek oda bağlamını kaybetmeden auth olur ve güvenli return intent üzerinden yeniden normal Room access kontrolüne döner.

**Neden bu sırada geliyor:**
Wave 06 gerçek Room media/context sunumunu ve Wave 09 güvenilir normal auth form ailesini sağlamıştır; bu Wave yalnız bu iki sahipliği güvenli Room return-intent ve authoritative access handoff'u ile birleştirir.

**Bağımlılıklar:**
- Wave 06 ortak Room media/context sunumu ve Wave 09 auth form foundation'ı tamamlanmış olmalıdır.
- Room access check, private password/invite grant, capacity ve ban kuralları authoritative kalmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 10 — Room Context Auth Gate ve Return Intent`
- `Roads/project-foundation/04-ui-ux-definition/core-user-flows.md`
  - `## 4. Flow 1 — Guest Discover to Auth Gate`
  - `## 6. Flow 3 — Private Room Link to Join`
- `Design/AUTH_AND_ROOM_GATE_DESIGN_PACKAGE.md`
  - `## 3. Kilitli Kompozisyon`
  - `## 8. Return Intent ve Oda Bağlamı`
  - `## 9. Room Context Bilgileri`
  - `## 12. Responsive Davranış`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/AuthPage.tsx`, `Vibe frontend/src/pages/RoomShellPage.tsx`, `Vibe frontend/src/components/AuthRequiredGate.tsx`, `Vibe frontend/src/rooms/roomApi.ts`, `Vibe frontend/src/lib/routes.ts`, `Vibe frontend/src/App.tsx`, `Vibe frontend/src/styles/forms.css`, `Vibe frontend/src/styles/responsive.css` ve mevcut backend `POST /api/rooms/:roomId/access/check` kontratı.

**Görsel referans:**
- Görsel 1: Auth ve Room Gate Design Package — desktop iki kolonlu gerçek Room preview + login/signup form kompozisyonu.
- Görsel 2: Auth ve Room Gate Design Package — mobil thumbnail → Room bilgisi → auth formu sırası ve keyboard-safe görünüm.
- Görsel 3: Auth ve Room Gate Design Package — room loading/not-found/ended/full/denied/private ve auth sonrası dönüş durumları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki Room, host, thumbnail, participant/avatar ve access mesajları temsilîdir; yalnız mevcut access-check response'u ve canonical Room policy sonuçları gösterilir.

---

**Kapsam içi:**
- Gerçek Room context preview ile desktop iki kolon ve mobil sıralı auth gate kompozisyonu.
- Login/signup/forgot geçişlerinde Room hedefini koruyan internal-route allowlist ve open-redirect engeli.
- Auth sonrası hedef `/room` route'una dönüş ve normal access-check/private-password/invite/capacity/ban zincirinin yeniden çalışması.
- Room not-found/ended/full/denied/private ve preview loading/error durumlarının güvenli, erişilebilir sunumu.

**Kapsam dışı:**
- Room player, chat, participant layout, playback veya realtime lifecycle; Wave 12–15'e aittir.
- Ban, block, capacity, private password, invite grant veya account-state sözleşmesini değiştirme.
- Yeni guest Room erişimi, auto-join bypass, yeni preview endpoint'i, API alanı, backend veya database değişikliği.
- Normal auth form alanlarını veya Wave 09 görsel foundation'ını yeniden yazma.
- Harici return URL, query içinden keyfî redirect veya private metadata sızıntısı.

---

**Implementation kontrol listesi:**

*Return-intent güvenliği ve route zinciri:*
- [x] `AuthPage`, `RoomShellPage`, `AuthRequiredGate`, `App.tsx` ve `routes.ts` içindeki mevcut `returnTo` üretim/okuma/navigate zincirini uçtan uca çıkar.
- [x] Room intent'ini yalnız mevcut `/room` route'u ve geçerli `roomId` query'si olarak parse et; eksik veya bozuk hedefi güvenli varsayılan route'a düşür.
- [x] Auth return hedefini izin verilen internal Vibehall route'larıyla sınırla; protocol-relative, encoded external, origin değiştiren veya bilinmeyen route değerini reddet.
- [x] Login/signup/forgot mode geçişinde doğrulanmış Room path+query bilgisini koru; kullanıcı girdisini harici URL olarak yeniden serialize etme.
- [x] Başarılı login/signup sonrasında doğrulanmış hedef Room route'una custom-router üzerinden dön; Home/Discover'a bağlamsız redirect üretme.

*Gerçek Room context ve policy handoff:*
- [x] Gate preview verisini yalnız mevcut `checkRoomAccess(roomId)` sonucu veya eşdeğer mevcut güvenli presenter alanlarından al; yeni preview endpoint'i ekleme.
- [x] Desktop'ta Wave 06 media/context yüzeyi ile Wave 09 auth formunu belgelenmiş iki kolon hiyerarşisinde birleştir; form ve preview birbirini bastırmasın.
- [x] Mobilde geri → `16:9` thumbnail → Room adı/host/status → auth mesajı → form → CTA sırasını koru.
- [x] Room title, thumbnail, host, Live, category ve güvenli participant count alanlarını yalnız response'ta gerçekten varsa göster; sahte avatar/count üretme.
- [x] Private Room direct-link preview'sunda yalnız güvenli minimum bağlamı göster; password, invite grant/token veya Discover'da yasak metadata'yı açığa çıkarma.
- [x] Auth tamamlandıktan sonra `RoomShellPage` normal access check'ini yeniden çalıştır; gate verisini join izni veya aktif participant kanıtı olarak kullanma.
- [x] Private password ve accepted invite-grant sonuçlarını auth sonrasında mevcut Room access yüzeyine bırak; gate içinde password bypass veya grant üretme.

*State, feedback ve erişilebilirlik:*
- [x] Preview yüklenirken form/shell geometrisini koruyan lokal media/context skeleton göster; bütün auth sayfasını spinner'a dönüştürme.
- [x] Room not found, ended, full, banned, account-denied ve generic access-denied sonuçlarını mevcut backend code/policy'sine göre ayrı sakin state'lere eşleştir.
- [x] Preview/network hatasında hedefi kaybetmeyen retry ve güvenli geri aksiyonu sun; auth submit hatasını Room preview hatasıyla birleştirme.
- [x] Zaten authenticated member/host hedef Room'a döndüğünde auth formunu tekrar zorlamadan normal access zincirinin çalışmasını koru.
- [x] Gate geri aksiyonunu browser/custom-router geçmişiyle uyumlu yap; kullanıcıyı harici veya doğrulanmamış bir hedefe gönderme.
- [x] Geri, form alanları, CTA, alternatif auth ve forgot-password için doğal focus sırası ile preview alt/heading semantiğini tamamla.
- [x] Mobil keyboard açıldığında Room adı, aktif input, error ve submit CTA'nın erişilebilir kalmasını sağla; yatay overflow oluşturma.
- [x] Aura/preview/form geçişlerini mevcut motion tokenlarıyla sınırla; `prefers-reduced-motion` altında zoom/lift/aura hareketini kapat.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Gerçek hedef Room bağlamı görünür; login/signup/forgot boyunca güvenli intent korunur.
- [x] Member state — Auth tamamlanmış veya session'ı mevcut member normal Room access check'e döner; gate join yetkisi vermez.
- [x] Host state — Kendi Room'una dönen host normal authoritative access zincirinden geçer; host için ayrı auth bypass kuralı eklenmez.
- [-] Admin state — Admin'e özgü Room Gate, policy bypass veya preview alanı bulunmuyor; normal authenticated access kuralları geçerlidir.
- [x] Loading state — Room preview ve auth submit loading'i lokal ve birbirinden ayrıdır; form/context geometrisi korunur.
- [-] Empty state — Room Gate veri listesi sunmaz; missing/not-found Room empty değil unavailable state olarak ele alınır.
- [x] Error state — Preview/network, auth form ve return navigation hataları ayrı retry/feedback yolları taşır.
- [x] Denied / unavailable state — Not-found, ended, full, banned, account-denied, private/password-required ve invite sonucu authoritative policy'ye göre gösterilir.
- [-] Reconnecting state — Gate/auth HTTP akışıdır; Room realtime reconnect Wave 12 ve sonraki Room Wave'lerine aittir.
- [x] Mobile davranışı — Thumbnail/context/form sırası, keyboard, safe area ve touch target'lar yatay overflow olmadan çalışır.
- [x] Klavye / focus davranışı — Geri, form, submit ve alternatif akışların tab sırası görünür ve hata sonrası focus anlaşılırdır.
- [x] Reduced motion davranışı — Preview/aura/form geçişleri kapanır; Room bağlamı ve feedback statik olarak korunur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Return-intent testleri valid `/room?roomId=...`, missing id, unknown route, protocol-relative, absolute external ve encoded redirect denemelerini doğruluyor.
- [x] Gate testleri Room preview loading/success/error ile login↔signup↔forgot geçişlerinde exact target query'nin korunduğunu doğruluyor.
- [x] Post-auth testleri target Room'a dönüşten sonra access check'in yeniden çağrıldığını ve gate'in password/invite/capacity/ban kontrolünü bypass etmediğini doğruluyor.
- [x] Accessibility testi desktop/mobil gate'te heading, alt text, focus order, error announcement ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave10-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası guest public Room → login ve signup → aynı Room → normal access success akışını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası private direct link, password-required, accepted invite grant, ended, full, banned ve access-denied sonuçlarını kontrol ediyor.
- [x] QA dosyası login/signup/forgot geçişlerinde target Room'un kaybolmadığını ve external/open-redirect denemelerinin reddedildiğini doğruluyor.
- [x] QA dosyası preview loading/error/retry, desktop/mobil keyboard/focus ve reduced-motion görsel davranışlarını kontrol ediyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki Room context → auth mesajı → form → ana CTA → alternatif akış sırası korundu.
- [x] Desktop preview/form oranı dengeli; mobilde Room bağlamı formu aşırı aşağı itmiyor.
- [x] Görsel odak hiyerarşisi doğru — Gerçek Room bağlamı ve auth amacı güçlü, yardımcı linkler sakin.
- [x] Tipografi hiyerarşisi doğru — Room/auth başlıkları Manrope, fields/metadata/actions Inter kullanıyor.
- [x] Accent `#FF625A` ana CTA, focus ve kontrollü state vurgularıyla sınırlı.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız geçici toast/overlay katmanında; kalıcı auth form paneli mat kaldı.
- [x] Sahte Room, host, participant/avatar, access izni veya return hedefi yok.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi preview metadata, form, error ve denied/unavailable state'lerinde sağlandı.
- [x] Klavye focus görünür; geri/form/CTA/alternatif akış sırası mantıklı.
- [x] Desktop ve mobilde keyboard açıkken yatay overflow yok.
- [x] Mevcut fonksiyonlar korundu — cookie session, custom router, Room access check, private grant/password, capacity, ban ve block authority değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Guest gerçek Room bağlamını login/signup/forgot boyunca kaybetmeden auth tamamlar ve doğrulanmış internal hedefe döner.
- [x] External/open-redirect girişimleri reddedilir; missing/invalid target güvenli varsayılana düşer.
- [x] Auth sonrası Room access check yeniden çalışır; private password/invite, full, ended, banned ve denied kuralları bypass edilmez.
- [x] Desktop/mobil preview, loading/error/unavailable, keyboard ve reduced-motion senaryoları staging'de doğrulanmıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave10-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 10'u onayladı ve Codex durdu

---

### Wave 10 Sonucu — 2026-07-28

> **Sonuç:** Geçti — QA-closed / kullanıcı onaylı.

- Güvenli internal return-intent allowlist, gerçek Room access preview, desktop/mobil auth gate ve auth sonrası authoritative Room policy handoff tamamlandı.
- Frontend typecheck ve production build geçti; tam Vitest 111/111, focused Wave 10 unit 8/8, Wave 10 Chromium E2E 4/4 ve ilgili sequential regresyon paketi 24/24 geçti.
- `tests/wave10-tests.md` staging/browser manuel QA kaydı kullanıcı tarafından tamamlandı; blocker veya açık non-blocker bildirilmedi.
- Frontend commitleri `73f063f` ve `7f4600f` olarak kaldı. Backend, database, API, auth/session/cookie, realtime, route ve dependency kontratları değiştirilmedi.
- Wave 11 başlatılmadı; yalnız sıradaki Wave olarak bekliyor.

---

### Wave 11 — Create Room ve Host Olarak Geçiş

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-28.

**Hedef:**
Üye gerçek form kontratıyla bir YouTube linkini tek kez canlı odaya dönüştürür ve host olarak oluşturulan Room'a doğal biçimde geçer.

**Neden bu sırada geliyor:**
Create Room, Wave 09 auth/form foundation'ını ve daha önce tamamlanan shell/state primitive'lerini tüketir; mevcut create API'sinin tek-commit sonucu ile hedef Room handoff'u birlikte doğrulanmadan form görsel olarak tamamlanmış sayılamaz.

**Bağımlılıklar:**
- Wave 09 normal auth/form foundation'ı tamamlanmış olmalıdır.
- Mevcut category, media validation ve room-create API kontratları korunmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 11 — Create Room ve Host Olarak Geçiş`
- `Roads/project-foundation/04-ui-ux-definition/create-room-page-spec.md`
  - `## 5. Video Link Input Experience`
  - `## 13. Create Action Behavior`
  - `## 14. Success and Redirect Flow`
- `Design/CREATE_ROOM_DESIGN_PACKAGE.md`
  - `## 4. Gerçek Form Kontratının Korunması`
  - `## 12. Oda Oluşturma Loading Davranışı`
  - `## 13. Başarı ve Room’a Geçiş`
  - `## 21. Responsive Davranış`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/CreateRoomPage.tsx`, `Vibe frontend/src/components/AuthRequiredGate.tsx`, `Vibe frontend/src/rooms/roomApi.ts`, `Vibe frontend/src/styles/forms.css`, `Vibe frontend/src/styles/responsive.css`, mevcut backend `createRoomSchema`, `POST /api/rooms` ve `GET /api/categories` kontratları.

**Görsel referans:**
- Görsel 1: Create Room Design Package — desktop atmosfer/başlık ve ana formun `YouTube link → room bilgileri → access → Create Room` kompozisyonu.
- Görsel 2: Create Room Design Package — URL preview/validation, category loading/error, public/private/password, submit loading/failure ve private link-copy durumları.
- Görsel 3: Create Room Design Package — mobil tek kolon, keyboard-safe input/CTA ve başarıdan Room'a geçiş davranışı.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki video metadata'sı, kanal/izlenme bilgisi, categories, progress adımları, room linki ve başarı süresi temsilîdir; mevcut form/create response kontratının yerine geçmez.

---

**Kapsam içi:**
- Mevcut YouTube URL, title, category, participant limit, visibility ve private password alanlarının belgelenmiş form hiyerarşisi.
- Lokal source preflight/preview, authoritative submit validation, field/form error ve category loading/retry davranışı.
- Tek create mutation, double-create koruması, failure recovery ve girilmiş form değerlerini koruma.
- Public/private başarı sonucunda gerçek Room id ile host geçişi ve yalnız mevcut güvenli link-copy davranışı.
- Desktop/mobil responsive form, keyboard/focus, reduced motion ve erişilebilir feedback.

**Kapsam dışı:**
- Draft/publish wizard, çok adımlı sahte progress, yeni media provider, YouTube scraping veya metadata entegrasyonu.
- Room create API, category/media schema, rate limit, CSRF, backend, database veya host identity redesign.
- Room player/chat/host controls veya runtime lifecycle; Wave 12–15'e aittir.
- Yeni paylaşım sağlayıcısı, social share entegrasyonu veya password/invite token'ını copy link'e ekleme.
- Genel form/component consolidation; Wave 25'e aittir.

---

**Implementation kontrol listesi:**

*Gerçek form ve validation kontratı:*
- [x] `CreateRoomPage.tsx`, `roomApi.ts` `CreateRoomInput` ve backend `createRoomSchema` alan/limitlerini read-only eşleştir; mevcut zorunlu alanı kaldırma veya yeni payload alanı ekleme.
- [x] Sayfa kompozisyonunu `YouTube link → title/category/capacity → visibility/password → Create Room` sırasına taşı; formu wizard veya dashboard'a dönüştürme.
- [x] Guest erişimini Wave 09 auth form foundation'ı ve mevcut güvenli `/create-room` return intent üzerinden geçir; Create Room içinde ikinci auth formu üretme.
- [x] YouTube URL input'una görünür label, natural paste, `url` semantics ve mevcut `2048` karakter sınırını uygula.
- [x] Mevcut `getSourcePreview` benzeri lokal preflight'ı yalnız yardımcı/syntactic state olarak sun; backend submit dönmeden URL'yi doğrulanmış video veya metadata gibi ilan etme.
- [x] URL değiştiğinde önceki preview/success/error bağlamını temizle; yeni YouTube scraping, provider veya metadata endpoint'i ekleme.
- [x] Room title input'unu mevcut `3–96` sınırları ve backend safety sonucuyla hizala; hard-coded örnek title'ı gerçek veri gibi kullanma.
- [x] Category seçeneklerini yalnız mevcut `/categories` response'undan yükle; loading, no-active-category ve fetch-error/retry durumunu formun category alanında lokal göster.
- [x] Participant limit kontrolünü mevcut integer `2–50` kontratıyla sınırla; backend'in enforce etmediği preset veya kapasite ekleme.
- [x] Public/private seçimini gerçek radio semantics ve yalnız mevcut enumlarla uygula; private seçildiğinde password alanını `4–80` sınırlarıyla göster.
- [x] Visibility public'e döndüğünde private password'u submission payload'ından çıkar ve hassas değeri UI/state'te yanlışlıkla taşımamayı doğrula.

*Create mutation, recovery ve Room handoff:*
- [x] Field-level validation ile backend form-level error'larını ayrı feedback yüzeylerine eşleştir; ham parser, Prisma veya teknik hata mesajı gösterme.
- [x] `Create Room` submit'inde yalnız lokal CTA loading kullan, butonu atomik olarak kilitle ve aynı kullanıcı aksiyonundan ikinci `POST /api/rooms` üretme.
- [x] Create payload'ını yalnız `categoryId`, `participantLimit`, koşullu `privatePassword`, `sourceUrl`, `title` ve `visibility` alanlarıyla `createRoom()` üzerinden gönder.
- [x] Create failure durumunda source/title/category/capacity/visibility değerlerini koru, CTA'yı yeniden kullanılabilir yap ve belirsiz sonucu kör duplicate create ile tekrar etme.
- [x] Public Room success sonucunda response'taki gerçek `room.id` ile `/room?roomId=<id>` hedefine geç; client-generated id/slug veya draft/publish adımı üretme.
- [x] Private Room için yalnız mevcut oluşturulmuş Room sonucu destekliyorsa gerçek id'den güvenli link üret; password/invite grant token'ını URL'ye koyma ve mevcut Copy/Enter Room davranışını koru.
- [x] Başarılı create sonrasında host identity/participant rolünü frontend payload'ından üretme; backend'in oluşturduğu host Room sonucunu normal Room route'una bırak.

*Responsive ve erişilebilirlik:*
- [x] Mobilde minimal header, tek kolon form, tam genişlik alanlar, en az `48px` ana CTA, keyboard-safe scroll ve safe-area davranışı sağla.
- [x] Label/error ilişkisi, visibility fieldset/radio, submit announcement, preview alt metni, görünür focus ve `prefers-reduced-motion` davranışını tamamla.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Create Room capability'si açılmaz; login/signup CTA'ları güvenli `/create-room` return intent'e gider.
- [x] Member state — Aktif member bütün gerçek alanlarla tek Room oluşturabilir ve backend sonucuna göre Room'a geçer.
- [x] Host state — Başarılı create sonucu backend tarafından host participant olarak kurulur; frontend yeni host-role sözleşmesi üretmez.
- [-] Admin state — Admin'e özgü create alanı, bypass veya farklı Room davranışı bulunmuyor; aktif admin normal authenticated kontratı kullanır.
- [x] Loading state — Session, category ve submit loading durumları lokal ve birbirinden ayrıdır; sahte progress adımı gösterilmez.
- [x] Empty state — Aktif category bulunmaması formun lokal unavailable/empty durumu olarak açıklanır; geçersiz submission'a izin verilmez.
- [x] Error state — URL preflight, category fetch, field validation, create failure ve copy failure ayrı recovery yolları taşır.
- [x] Denied / unavailable state — Guest/session-expired/account-denied veya aktif-category-yok sonucu capability'yi güvenli biçimde kapatır; backend authority korunur.
- [-] Reconnecting state — Create Room HTTP mutation akışıdır; realtime reconnect hedef Room runtime Wave'lerine aittir.
- [x] Mobile davranışı — Tek kolon form, keyboard, CTA, visibility/password ve preview yatay overflow olmadan çalışır.
- [x] Klavye / focus davranışı — Doğal field sırası, radio keyboard kontrolü, Enter submit, ilk-hata focus'u ve görünür focus çalışır.
- [x] Reduced motion davranışı — Preview/conditional password/success geçişleri kapanır; loading/error/success bilgisi statik korunur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Create Room form testleri gerçek alan/limitleri, category loading/error, visibility-password koşulunu ve public payload'da password bulunmadığını doğruluyor.
- [x] Submit testleri double-create engelini, field/form failure'da değerlerin korunmasını ve yalnız tek `createRoom()` çağrısını doğruluyor.
- [x] Success testleri public/private response'ta gerçek Room id handoff'unu ve copy link'te password/grant token bulunmadığını doğruluyor.
- [x] Accessibility testi labels, fieldset/radio, error association, focus, keyboard ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave11-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası guest auth handoff'u ile member public/private create success akışlarını ve gerçek host Room geçişini staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası invalid/unsupported URL, category failure, title/capacity/password validation, create failure ve retry sırasında form değerlerinin korunduğunu kontrol ediyor.
- [x] QA dosyası hızlı çift tıklamada tek Room oluştuğunu ve private copy link'in password/grant bilgisi taşımadığını doğruluyor.
- [x] QA dosyası desktop/mobil keyboard, focus, screen-reader feedback, touch target, reduced motion ve yatay overflow kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki YouTube link → room bilgileri → access → Create Room blok sırası korundu.
- [x] Desktop form ana çalışma alanı; atmosfer/summary yüzeyi formu bastırmıyor ve mobilde gereksiz üst boşluk üretmiyor.
- [x] Görsel odak hiyerarşisi doğru — YouTube link ve Create Room CTA güçlü, ikincil alanlar sakin.
- [x] Tipografi hiyerarşisi doğru — Sayfa/form bölüm başlıkları Manrope, labels/inputs/actions Inter kullanıyor.
- [x] Accent `#FF625A` ana CTA, selected visibility, focus ve kontrollü feedback ile sınırlı.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti kalıcı form panelinde kullanılmadı; varsa yalnız geçici toast/overlay katmanında kaldı.
- [x] Sahte video metadata'sı, category, progress aşaması, room id, host sonucu veya sharing capability yok.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi fields, visibility, error, preview ve CTA yüzeylerinde sağlandı.
- [x] Klavye focus görünür; field/radio/CTA/copy/enter sırası mantıklı.
- [x] Mobil keyboard ve private password açıkken yatay overflow yok.
- [x] Mevcut fonksiyonlar korundu — auth, categories, media parse, create schema, CSRF, rate limit, live commit ve host Room handoff değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Aktif member mevcut YouTube/title/category/capacity/visibility/password kontratıyla tek live Room oluşturabilir.
- [x] Category, validation, submit ve create failure durumları form değerlerini koruyan lokal recovery taşır; double-create oluşmaz.
- [x] Public/private success gerçek Room id ile güvenli host handoff'u üretir; password/grant bilgisi copy URL'ye sızmaz.
- [x] Guest/member/host, desktop/mobile, keyboard, reduced-motion ve success/failure senaryoları staging'de doğrulanmıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave11-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 11'i onayladı ve Codex durdu

---

### Wave 11 Sonucu — 2026-07-28

> **Sonuç:** Geçti — QA-closed / kullanıcı onaylı.

- Create Room gerçek backend alan/limitleriyle YouTube-first tek form akışına taşındı; category recovery, public/private password koşulu, atomik create ve gerçek Room id ile host handoff tamamlandı.
- Kapanış düzeltmesinde frontend YouTube parser'ı mevcut backend host/path/11-karakter video-id kontratıyla hizalandı. Deterministic `img.youtube.com` kapağı link altında ve desktop atmosfer panelinde gösteriliyor; loading ve görsel-hata fallback'i eklendi. Video adı için yeni scraping, metadata endpoint'i veya backend davranışı eklenmedi.
- Frontend typecheck ve production build geçti; tam Vitest 14 dosyada 119/119, focused Wave 11 unit 8/8, focused Wave 11 Chromium E2E 8/8 ve Wave 05–11 sequential Chromium regresyonu 32/32 geçti. Mevcut 500 kB üzeri chunk uyarısı blocker değildir.
- `tests/wave11-tests.md` içindeki kullanıcı işaretleri standart `[x]` biçimine normalize edildi; manuel QA blocker olmadan tamamlandı ve kullanıcı Wave 11 kapanışını onayladı.
- Frontend commitleri `3782df5`, `4b7d5c5` ve kapanış düzeltmesi `f962de0` olarak kaydedildi. Backend, database, API, auth/session/cookie/CSRF, rate limit, realtime, route ve dependency kontratları değiştirilmedi.
- Wave 12 başlatılmadı; yalnız sıradaki Wave olarak açık kullanıcı talimatını bekliyor.

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

---

### Wave 13 — Room Desktop Participant ve Cinematic Deneyimi

**Durum:** QA-closed / kullanıcı onaylı — 2026-07-28.

**Hedef:**
Desktop participant Room, minimal context bar, video-öncelikli yaklaşık 75/25 düzen, sakin chat ve gerçek cinematic mode ile tamamlanır.

**Neden bu sırada geliyor:**
Ortak runtime Wave 12'de sabitlenmiştir; desktop participant kompozisyonu host kontrollerinden bağımsız doğrulanabilir temel Room teslimidir.

**Bağımlılıklar:**
- Wave 12 tamamlanmış olmalıdır.
- Global shell exclusion Wave 04 tarafından sağlanmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 13 — Room Desktop Participant ve Cinematic Deneyimi`
- `Roads/project-foundation/04-ui-ux-definition/room-page-spec.md`
  - `## 4. Overall Page Structure`
  - `## 6. Video Player Area`
  - `## 11. Chat Panel`
- `Design/ROOM_DESKTOP_DESIGN_PACKAGE.md`
  - `## 4. Participant View — Ana Kompozisyon`
  - `## 5. Minimal Room Context Bar`
  - `## 7. Video Player Alanı`
  - `## 9. Chat Alanı`
  - `## 19. Cinematic Mode`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/RoomShellPage.tsx`, `Vibe frontend/src/rooms/YouTubeRoomPlayer.tsx`, `Vibe frontend/src/rooms/realtimeClient.ts`, `Vibe frontend/src/styles/room.css`, `Vibe frontend/src/styles/responsive.css` ve Wave 12'de sınırlandırılan ortak Room runtime.

**Görsel referans:**
- Görsel 1: Room Desktop Participant — minimal context bar, video-öncelikli yaklaşık 75/25 ana kompozisyon ve sakin chat paneli.
- Görsel 2: Room Desktop Cinematic — player alanı genişlemiş, chat aşağı taşınmış ve global shell görünmeyen cinematic kompozisyon.
- Görsel 3: Normal, wide ve narrow desktop varyantları ile participant listesi, options ve leave/report yüzeyleri.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki Room adı, host, participant, message, sayaç, video ve playback içeriği temsilîdir; gerçek API, role, presence, playback ve chat kontratlarının yerine kullanılamaz.

---

**Kapsam içi:**
- Minimal context bar, Room aura, video/chat oranı, gerçek player sınırları ve participant playback kilidi.
- Chat history/composer, participant erişimi, options/leave/report işlemleri ve lokal chat reconnect feedback'i.
- Cinematic ile fullscreen ayrımı ve wide/normal/narrow desktop davranışları.

**Kapsam dışı:**
- Host playback, participant management, kick, ban ve end-room kontrolleri; Wave 14'e aittir.
- Mobil Room kompozisyonu, bottom-sheet yerleşimi ve mobil keyboard/safe-area sahipliği; Wave 15'e aittir.
- Ortak Room runtime, REST/Socket.IO reconcile veya lifecycle sözleşmelerini yeniden kurmak; Wave 12'nin sahipliğidir.
- Yeni player, chat özelliği, reaction, queue, media provider veya sosyal ürün kabiliyeti.
- Room dışındaki component consolidation çalışmaları; Wave 25'e aittir.

---

**Implementation kontrol listesi:**

*Desktop participant kompozisyonu ve player:*
- [x] `RoomShellPage.tsx` içindeki participant görünümünü Wave 12 runtime çıktılarıyla eşleştir; ikinci access, socket, playback veya message state ağacı oluşturma.
- [x] Wave 04 global shell exclusion sözleşmesini Room route'unda tüket; Room içinde yalnız Design paketindeki minimal context bar'ı göster.
- [x] Minimal context bar'da gerçek geri aksiyonu, Room title, host identity, live durumu, aktif participant count ve role-aware options girişini canonical sırayla yerleştir.
- [x] Geri/leave navigasyonunda mevcut Room cleanup sonucunu bekle ve tarayıcı geçmişi uygunsa önceki bağlama, değilse belgelenmiş Discover hedefine dön.
- [x] Desktop ana alanını yaklaşık 75/25 video/chat ilişkisiyle kur; chat panelini normal desktop'ta belgelenmiş `360–420px` sınırında tut ve dar desktop'ta player'ı ezme.
- [x] Room aura'yı yalnız gerçek thumbnail/source bağlamından türet, statik ve düşük maliyetli tut; video içeriğini taklit eden animasyon veya yeni metadata kaynağı üretme.
- [x] `YouTubeRoomPlayer.tsx` player'ını doğru aspect ratio ve yalnız gerçek provider kontrolleriyle yerleştir; görseldeki sahte transport düğmelerini uygulama.
- [x] Participant playback etkileşimini backend host-authority sonucuna göre kilitle; lokal player event'inden host komutu veya authoritative playback state'i üretme.
- [x] Player-unavailable durumunu player alanında lokal göster; Room context, participant listesi ve chat kullanımını mevcut capability sonucuna göre koru.

*Chat, participant erişimi ve güvenli çıkış:*
- [x] Mevcut message history'yi sakin yoğunluk, gerçek sender identity, timestamp ve system-message ayrımıyla chat panelinde render et; temsilî mesaj ekleme.
- [x] Chat composer'ı mevcut membership/send kontratı, `500` karakter sınırı, lokal sending lock ve güvenli error recovery ile bağla.
- [x] Yeni mesaj geldiğinde yalnız kullanıcı chat sonundaysa otomatik kaydır; geçmiş okurken konumu koru ve erişilebilir yeni-mesaj göstergesi sun.
- [x] Chat'e özgü reconnect/send failure feedback'ini composer yakınında lokal göster; video ve Room context'ini genel error yüzeyiyle kapatma.
- [x] Participant listesini gerçek presence snapshot'ından ikincil bir overlay/panel olarak aç; aktif sayı ile listede tahminî veya mock kişi üretme.
- [x] Participant options yüzeyinde yalnız mevcut member işlemlerini göster; host manage/kick/ban/end aksiyonlarını DOM'a veya keyboard sırasına ekleme.
- [x] Report işlemini mevcut raporlama kontratına bağla; success/failure feedback'i lokal tut ve report sonucundan moderation sonucu varsayma.
- [x] Leave işlemini açık bir kullanıcı aksiyonuna bağla; unsubscribe/leave cleanup tamamlandığında güvenli dönüş yap ve ikinci leave isteğini engelle.

*Cinematic, responsive ve erişilebilirlik:*
- [x] Cinematic mode'u player'ı remount etmeden video alanını genişleten ve chat'i aşağı taşıyan gerçek layout state'i olarak uygula; global shell'i geri getirme.
- [x] Cinematic ile provider/browser fullscreen davranışını ayrı kontroller ve ayrı accessible name'lerle sun; birini diğerinin görsel etiketi olarak kullanma.
- [x] Wide, normal ve narrow desktop geçişlerinde context bar, player, chat ve overlay'lerin yatay overflow üretmediğini; keyboard focus, minimum touch target ve reduced-motion kurallarını koruduğunu doğrula.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Room participant yüzeyi açılmaz; Wave 10 Auth Gate handoff'u ve güvenli return intent korunur.
- [x] Member state — Access/join başarılı participant video, chat, presence, options, report, leave ve cinematic işlemlerini yetkisi ölçüsünde kullanır.
- [-] Host state — Host'a özgü playback, moderation ve end-room kontrolleri bu Wave'de uygulanmaz; Wave 14'e aittir.
- [-] Admin state — Admin'e özgü Room participant görünümü veya bypass bulunmuyor; admin normal authenticated Room kurallarını kullanır.
- [x] Loading state — Room/player/chat loading skeleton'ları doğru geometriyi korur; tam sayfa spinner ve layout sıçraması oluşmaz.
- [x] Empty state — Mesaj yok ve yalnız/az participant durumları sakin, gerçek veriye bağlı ve Room kullanımını engellemeyen sunum taşır.
- [x] Error state — Player, chat send/history, participant list, report ve leave hataları ilgili yüzeyde lokal recovery sunar.
- [x] Denied / unavailable state — Full, ended, banned, private veya player-unavailable sonucu Wave 12 authority'sinden tüketilir; participant layout'u izin üretmez.
- [x] Reconnecting state — Video/chat bağlamı korunur; chat lokal feedback'i ile genel Room reconnect durumu birbirini gereksiz yere kapatmaz.
- [-] Mobile davranışı — Bu Wave yalnız desktop Room kompozisyonunu teslim eder; mobil yerleşim Wave 15'e aittir.
- [x] Klavye / focus davranışı — Context bar, player, chat, participant/options overlay ve cinematic kontrollerinin sırası görünür focus ve geri dönüş taşır.
- [x] Reduced motion davranışı — Aura ve cinematic/layout geçişleri azaltılır veya kapanır; state ve kontrol anlamı statik olarak korunur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Participant Room testleri context bar'ın gerçek Room/host/count verisini ve host kontrollerinin participant DOM'unda bulunmadığını doğruluyor.
- [x] Player testleri participant playback kilidini, player-unavailable lokal state'ini ve cinematic değişiminde player remount olmadığını doğruluyor.
- [x] Chat testleri history/send, `500` karakter sınırı, sending lock, duplicate önleme, scroll koruması ve lokal reconnect/error feedback'ini doğruluyor.
- [x] Navigasyon testi leave/back cleanup'ını, güvenli fallback hedefini ve yinelenen leave isteği oluşmadığını doğruluyor.
- [x] Responsive/accessibility testi wide/normal/narrow desktop, overlay focus, fullscreen-cinematic adları ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave13-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası member participant join, playback lock, video/chat düzeni, message send ve leave success akışlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası player unavailable, chat history/send failure, report failure ve reconnect sırasında video/message/scroll bağlamının korunduğunu kontrol ediyor.
- [x] QA dosyası normal/cinematic/fullscreen ayrımını, player remount olmadığını ve global shell'in Room'a dönmediğini doğruluyor.
- [x] QA dosyası wide/normal/narrow desktop, keyboard, overlay focus dönüşü, screen reader, kontrast ve reduced-motion kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki minimal context bar ile yaklaşık 75/25 video/chat kompozisyonu korunuyor.
- [x] Room route'unda global topbar, masthead, desktop rail ve footer görünmüyor.
- [x] Görsel odak hiyerarşisi doğru — Video baskın, chat sakin, Room context ve options ikincil.
- [x] Tipografi hiyerarşisi doğru — Room başlığı Manrope, context/chat/actions Inter kullanıyor.
- [x] Accent `#FF625A` live/focus/primary state'lerle sınırlı; player veya chat'in geniş yüzeyine yayılmıyor.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız geçici overlay/context yüzeyinde; player ve kalıcı chat paneli okunabilir mat yüzeyde.
- [x] Sahte player kontrolü, message, participant, playback durumu, online sonucu veya moderation aksiyonu yok.
- [x] Cinematic ve fullscreen birbirinden işlevsel ve erişilebilir olarak ayrılıyor.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi context, chat, overlays ve feedback yüzeylerinde sağlandı.
- [x] Klavye focus görünür; overlay kapanışında tetikleyiciye dönüyor ve cinematic geçişinde kaybolmuyor.
- [x] Wide/normal/narrow desktop ile cinematic düzende yatay overflow yok.
- [x] Mevcut fonksiyonlar korundu — Room access, participant playback lock, chat, presence, report, leave ve realtime kontratları değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Desktop participant Room global shell olmadan minimal context bar, video-öncelikli düzen ve sakin chat ile çalışır.
- [x] Participant playback kilidi, chat/participant/options/report/leave davranışları gerçek authority ve veriyle güvenli çalışır.
- [x] Cinematic mode player'ı remount etmeden çalışır ve fullscreen'den açıkça ayrılır.
- [x] Wide/normal/narrow desktop, loading/empty/error/reconnect ve keyboard/reduced-motion senaryoları staging'de doğrulanmıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave13-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 13'ü onayladı ve Codex durdu

---

### Wave 13 Sonucu — 2026-07-28

- Participant desktop Room, Wave 12 tek runtime authority'sini tüketen minimal context bar, gerçek yaklaşık 75/25 video/chat kompozisyonu, statik source aura, host-authoritative participant player, calm chat, gerçek presence paneli, member options/report/leave ve player'ı remount etmeyen cinematic ile tamamlandı; fullscreen ayrı browser davranışı olarak korundu.
- Staging QA'da bulunan participant/report overlay spacing blocker'ı `dc780c1`, native report reason yüzeyi `74fe751` ve picker portal stacking blocker'ı `f23f9f8` ile yalnız Wave 13 consumer sınırında kapatıldı. Shared primitive, backend, database, API, auth/session, realtime, route ve dependency kontratları değiştirilmedi.
- Frontend typecheck ve production build geçti. Tam Vitest 154/154, focused Wave 13 Vitest 9/9, focused Chromium 5/5 ve ilgili sequential Chromium regresyonu 24/24 geçti. Build yalnız önceden var olan 500 kB üzeri chunk uyarısını koruyor.
- Frontend commitleri: `5005811`, `b8d9252`, `dc780c1`, `74fe751`, `f23f9f8`. `tests/wave13-tests.md` içindeki tüm staging/manual QA ve retest maddeleri standart `[x]` biçiminde kapatıldı; açık blocker veya açıklanmamış görsel sapma kalmadı.
- Wave 13, 2026-07-28 tarihinde QA-closed / kullanıcı onaylı oldu. Wave 14 yalnız sıradaki execution cursor olarak hazırdır; implementation, component/style hazırlığı veya refactor başlatılmadı.

---

### Wave 14 — Room Desktop Host, Moderasyon ve Kapanış

**Durum:** QA-closed / kullanıcı onaylı — 2026-08-04.

**Hedef:**
Host aynı sade desktop Room içinde playback, invite, participant management, kick/ban ve end-room işlemlerini güvenle yürütür; bütün client'lar tutarlı ended deneyimine geçer.

**Neden bu sırada geliyor:**
Host kontrolleri participant temelinin üzerine rol bazlı eklenir ve backend authorization/lifecycle sonuçlarıyla ayrı yüksek-risk doğrulama ister.

**Bağımlılıklar:**
- Wave 13 tamamlanmış olmalıdır.
- Mevcut host authority, moderation, invite ve room-ended kontratları korunmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 14 — Room Desktop Host, Moderasyon ve Kapanış`
- `Roads/project-foundation/02-system-definition/room-control-and-behavior-rules.md`
  - `## 3. Host Authority Principle`
  - `## 17. Moderation Authority Rule`
  - `## 18. Kick and Ban Rule`
- `Design/ROOM_DESKTOP_DESIGN_PACKAGE.md`
  - `## 14. Host View`
  - `## 16. Host Invite Davranışı`
  - `## 17. Participant Management`
  - `## 18. End Room`
  - `## 20. Room Ended Durumu`
  - `## 21. People You Watched With`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/RoomShellPage.tsx`, `Vibe frontend/src/rooms/roomApi.ts`, `Vibe frontend/src/rooms/realtimeClient.ts`, `Vibe frontend/src/social/SocialRail.tsx`, `Vibe frontend/src/social/RelationshipActions.tsx`, `Vibe frontend/src/social/RoomInviteCard.tsx`, `Vibe frontend/src/social/socialApi.ts` ve mevcut backend Room/moderation/realtime kontratları.

**Görsel referans:**
- Görsel 1: Room Desktop Host — participant görünümünü bozmayan düşük ağırlıklı playback ve host control strip.
- Görsel 2: Invite ve participant management yüzeyleri ile ayrı kick/ban confirmation ve feedback durumları.
- Görsel 3: End Room confirmation, bütün client'larda Room Ended durumu ve belgelenmiş continuation actions.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki participant, invite adayı, yetki, moderation nedeni, playback ve ended içeriği temsilîdir; gerçek backend authorization, relationship, Room lifecycle ve realtime sonuçlarının yerine kullanılamaz.

---

**Kapsam içi:**
- Düşük ağırlıklı host control strip, gerçek playback sync state'i, invite girişi ve participant management paneli.
- Kick ile room-ban için ayrı confirmation/feedback ve backend authorization sonucunun güvenli sunumu.
- End-room confirmation, realtime ended sonucu, composer/player kontrollerinin kapanması ve belgelenmiş Hall/Create/People You Watched With devam seçenekleri.

**Kapsam dışı:**
- Host transfer, tarayıcı kapandığında yeni otomatik-end davranışı veya Room ownership modeli değişikliği.
- Yeni moderation rolü, admin bypass'ı, yeni invite provider'ı veya yeni sosyal graph kabiliyeti.
- Mobil host sheet/Room kompozisyonu; Wave 15'e aittir.
- Backend authorization, moderation, invite, relationship, realtime event veya database sözleşmesi değişikliği.
- Genel overlay/component consolidation; Wave 25'e aittir.

---

**Implementation kontrol listesi:**

*Host kimliği, playback ve invite:*
- [x] Host görünümünü yalnız Wave 12 authoritative Room snapshot/backend role sonucundan etkinleştir; client user id karşılaştırmasını tek başına yetki kanıtı yapma.
- [x] Wave 13 desktop participant kompozisyonunu koru ve host kontrollerini düşük ağırlıklı bir control strip olarak ekle; ayrı dashboard veya yoğun yönetim sayfası üretme.
- [x] Host playback sync durumunu yalnız gerçek player readiness, socket connection ve backend acknowledgement sonucundan göster; sahte yeşil/connected state üretme.
- [x] Host play/pause/seek komutlarını mevcut playback event/ack kontratına bağla; pending komutta tekrar gönderimi kilitle ve optimistic state'i authority olarak bırakma.
- [x] Reconnecting, player-unavailable veya authority kaybında host playback kontrollerini güvenli kapat; participant player state'ini lokal komutla zorlamaya çalışma.
- [x] Invite girişini mevcut Room-context social/invite akışına bağla; yeni kişi arama, provider, relationship veya davet kontratı ekleme.
- [x] Invite/copy feedback'ini ilgili aksiyon yanında göster; private password, access grant veya hassas Room bilgisini kopyalanan linke ekleme.

*Participant management ve moderasyon:*
- [x] Participant management yüzeyini gerçek presence/participant verisiyle overlay veya yan panel olarak aç; hostu moderasyon hedefi yapma ve mock participant üretme.
- [x] Her participant satırında yalnız mevcut authorization'ın izin verdiği manage işlemlerini göster; yetkisiz kontrolü yalnız CSS ile gizlemeye güvenme.
- [x] Kick aksiyonu için hedef kullanıcı ve işlemin Room'dan çıkarma sonucunu açıkça belirten shared confirmation dialog'u kullan.
- [x] Room-ban aksiyonu için kick'ten ayrı, yeniden girişin engelleneceğini açıklayan destructive confirmation kullan; global account ban anlamı üretme.
- [x] Kick/ban mutation payload'ını mevcut Room ve target participant/user kimliği kontratına göre gönder; frontend'de yeni reason, duration veya policy alanı icat etme.
- [x] Moderation pending sırasında yalnız ilgili hedef aksiyonlarını kilitle; success/failure feedback'ini panelde koru ve ham backend/internal policy mesajı gösterme.
- [x] `moderation.action.applied` ve `room.access.revoked` sonuçlarını Wave 12 runtime üzerinden idempotent tüket; çıkarılan kullanıcıda composer, playback ve subscription'ı güvenli kapat.

*Room kapanışı ve erişilebilir güvenlik:*
- [x] End Room aksiyonunu normal leave'den görsel ve anlamsal olarak ayır; yalnız host options/control strip içinde destructive işlem olarak sun.
- [x] End Room için sonuç kapsamını açıklayan shared confirmation modal'ı kullan; default focus'u güvenli iptal aksiyonunda tut ve Escape/focus restoration davranışını koru.
- [x] Onay sonrası mevcut close/end Room mutation'ını bir kez çağır; pending state'te tekrar gönderimi engelle ve failure durumunda live Room bağlamını koru.
- [x] `room.ended` event/snapshot sonucunu host ve bütün participant client'larında idempotent ended state'ine geçir; lokal host success'ini tek authority yapma.
- [x] Ended state'te composer, playback ve moderation kontrollerini kapat; Hall/Discover, Create Room ve yalnız mevcut capability varsa People You Watched With devam hedeflerini gerçek route'lara bağla.
- [x] Host leave/close-browser davranışını mevcut canonical lifecycle sözleşmesiyle koru; confirmation, keyboard, screen-reader ve reduced-motion doğrulamasını destructive akışların tamamında uygula.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Host kontrolleri ve Room yüzeyi açılmaz; Auth Gate handoff'u korunur.
- [x] Member state — Participant host control, management, kick/ban veya end-room aksiyonlarını görmez; Wave 13 davranışı değişmeden kalır.
- [x] Host state — Playback, invite, participant management, kick/ban ve end-room işlemleri backend authority sınırında kullanılabilir.
- [-] Admin state — Admin'e özgü Room moderation bypass'ı veya host yetkisi bulunmuyor; admin normal Room rolüyle değerlendirilir.
- [x] Loading state — Playback command, invite, participant panel, moderation ve end mutation loading durumları birbirinden lokal ve tekrar güvenlidir.
- [x] Empty state — Invite adayı veya yönetilebilir participant yoksa ilgili panel açıklayıcı empty state gösterir; sahte kişi üretmez.
- [x] Error state — Playback ack, invite/copy, participant load, kick/ban ve end failure'ları ilgili yüzeyde güvenli retry veya kapanış sunar.
- [x] Denied / unavailable state — Authority kaybı, target unavailable, already-ended veya feature unavailable sonucu kontrolleri kapatır ve live başarı varsaymaz.
- [x] Reconnecting state — Host playback/moderation/end mutationları güvenli biçimde kilitlenir; reconnect sonrası authoritative snapshot ile rol ve ended durumu yenilenir.
- [-] Mobile davranışı — Mobil host kontrollerinin sheet yerleşimi bu Wave'de uygulanmaz; Wave 15'e aittir.
- [x] Klavye / focus davranışı — Control strip, invite/manage paneli ve destructive dialog'lar tam keyboard akışı, focus trap ve tetikleyiciye dönüş taşır.
- [x] Reduced motion davranışı — Panel/modal/ended geçişleri azaltılır; moderation ve lifecycle sonuçları animasyonsuz anlaşılır kalır.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Role testi host kontrollerinin yalnız authoritative host sonucunda render edildiğini ve participant/admin kimliğinden yetki türetilmediğini doğruluyor.
- [x] Playback testi pending/ack/failure/reconnect durumlarını, tekrar komut engelini ve participant authority sınırını doğruluyor.
- [x] Invite/moderation testleri mevcut invite kontratını, kick-ban ayrımını, doğru hedef payload'ını ve unauthorized/failure recovery'yi doğruluyor.
- [x] End Room testi confirmation, tek mutation, failure'da live bağlamın korunması ve `room.ended` event'inin bütün client'larda idempotent sonucu doğruluyor.
- [x] Accessibility testi manage/invite/destructive dialog focus trap/restore, accessible name, reduced-motion ve ended continuation kontrollerinde kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave14-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası host playback, invite, participant management, kick, room-ban ve end-room success akışlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası participant'ın host kontrollerini görmediğini ve forged/unauthorized moderation ile end isteğinin başarı sayılmadığını kontrol ediyor.
- [x] QA dosyası playback ack failure, invite unavailable, target left, moderation failure, reconnect ve end failure durumlarında Room bağlamının korunduğunu doğruluyor.
- [x] QA dosyası bütün client'larda ended state, kapalı composer/controls, continuation targets, keyboard, screen reader ve reduced-motion kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki host control strip participant kompozisyonunu ve video önceliğini bozmuyor.
- [x] Host görünümü ayrı dashboard'a dönüşmedi; invite ve participant management ikincil yüzeylerde kaldı.
- [x] Görsel odak hiyerarşisi doğru — Video baskın, host kontrolleri ölçülü, destructive End Room kontrollü ancak ayırt edilebilir.
- [x] Tipografi hiyerarşisi doğru — Room/panel başlıkları Manrope, control/action/feedback Inter kullanıyor.
- [x] Accent `#FF625A` active/focus/primary ile sınırlı; destructive state anlamı yalnız accent'e veya renge bırakılmıyor.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız geçici overlay/modal katmanında; kalıcı host control strip mat ve okunabilir.
- [x] Sahte sync, invite adayı, participant, authority, moderation sonucu veya ended countdown yok.
- [x] Kick ile room-ban metin ve sonuç olarak açıkça ayrılıyor; global ban ima edilmiyor.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi control strip, panel, confirmation, error ve ended yüzeylerinde sağlandı.
- [x] Klavye focus görünür; dialog/panel kapanışında doğru tetikleyiciye dönüyor.
- [x] Host controls, overlays ve ended state wide/normal/narrow desktop'ta yatay overflow üretmiyor.
- [x] Mevcut fonksiyonlar korundu — host authority, playback ack, invite, kick/ban, leave/end ve realtime ended kontratları değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Host sade desktop Room içinde playback, invite ve participant management işlemlerini authoritative yetkiyle güvenle yürütür.
- [x] Kick ile room-ban ayrı confirmation, mutation ve feedback sonuçları taşır; participant host kontrollerine erişemez.
- [x] End Room tek authoritative lifecycle sonucu üretir ve bütün client'lar kapalı composer/controls ile tutarlı ended state'ine geçer.
- [x] Success/failure/reconnect, keyboard, reduced-motion ve unauthorized senaryoları otomatik testler ile staging'de doğrulanmıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave14-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 14'ü onayladı ve Codex durdu

---

### Wave 14 Sonucu — 2026-08-04

- Authoritative Room rolünden açılan düşük ağırlıklı host control strip, gerçek player/socket/ack tabanlı playback durumu, mevcut friend invite akışı ve hassas bilgi taşımayan copy linki tamamlandı; participant-first desktop kompozisyonu korundu.
- Gerçek presence tabanlı participant management, hedefe özel pending/feedback, ayrı kick ve room-ban confirmation'ları mevcut backend authorization/payload kontratlarıyla tamamlandı; yeni moderation rolü, reason, duration, admin bypass veya global ban anlamı eklenmedi.
- End Room ve host leave destructive akışları shared confirmation, güvenli Cancel focus'u, tek mutation guard'ı ve failure recovery ile tamamlandı. Authoritative ended event/snapshot host ve participant client'larda player/composer/host kontrollerini kapattı; /discover, /create-room ve mevcut /friends?view=watched devam hedefleri korundu.
- Frontend typecheck ve production build geçti. Tam Vitest 162/162, focused Wave 12–14 kontrat paketi 23/23, focused Wave 14 Chromium 3/3 ve Wave 13–14 Chromium regresyonu 8/8 geçti. Frontend commitleri 38737f1 ve 5c4aedc; backend, database, API, auth/session, realtime, route ve dependency kontratları değiştirilmedi.
- 	ests/wave14-tests.md içindeki bütün staging/manual QA, görsel, keyboard, screen-reader, reduced-motion, unauthorized, failure/reconnect ve debug maddeleri kullanıcı tarafından geçti sayıldı ve standart [x] biçimine normalize edildi. Blocker veya canonical belgelerle açıklanmayan görsel sapma bildirilmedi.
- Wave 14, 2026-08-04 tarihinde QA-closed / kullanıcı onaylı oldu. Wave 15 yalnız sıradaki execution cursor olarak hazırdır; implementation, component/style hazırlığı, test veya refactor başlatılmadı.

---

### Wave 15 — Room Mobile Deneyimi

**Durum:** QA-closed / kullanıcı onaylı — 2026-08-04.

**Hedef:**
Room Mobile, ortak runtime'ı kullanarak video üstte, oda/host bilgisi altında, chat kalan alanda ve rol işlemleri erişilebilir sheet'lerde olacak şekilde bütün belgelenmiş state'lerle tamamlanır.

**Neden bu sırada geliyor:**
Mobile, desktop CSS'inin daraltılması değildir; ancak yeni davranış icat etmeden önce ortak state ile participant/host akışlarının desktop'ta doğrulanmış olması gerekir.

**Bağımlılıklar:**
- Wave 12–14 tamamlanmış olmalıdır.
- Wave 05 mobil shell ve Wave 02 bottom-sheet primitive'leri hazır olmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 15 — Room Mobile Deneyimi`
- `Roads/project-foundation/04-ui-ux-definition/mobile-responsive-spec.md`
  - `## 7. Room Page Responsive Behavior`
  - `## 9. Chat Responsive Rule`
  - `## 10. Participants and Room Metadata Responsive Rule`
- `Roads/project-foundation/07-roadmaps/plans/Vibehall-Global-Launch-Readiness&Product-Polish-Plan.md`
  - `## 19. Mobil Room Düzeni`
- `Design/ROOM_DESKTOP_DESIGN_PACKAGE.md`
  - `## 36. Responsive Davranış`
  - `## 37. Erişilebilirlik`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/RoomShellPage.tsx`, `Vibe frontend/src/rooms/YouTubeRoomPlayer.tsx`, `Vibe frontend/src/styles/room.css`, `Vibe frontend/src/styles/responsive.css`, Wave 02 overlay primitive'leri, Wave 05 mobil shell ve Wave 12 ortak Room runtime.

**Görsel referans:**
- Görsel 1: Room Mobile Participant — video üstte, kompakt Room/host bilgisi altında ve chat kalan kullanılabilir alanda.
- Görsel 2: Mobile participants/options ile host controls bottom sheet'leri ve ayrı destructive confirmation modal'ı.
- Görsel 3: Mobile loading, reconnecting, player unavailable, denied/full/ended ve keyboard açık composer durumları ile tablet geçişi.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki Room, host, participant, message, player, cihaz ölçüsü ve state içerikleri temsilîdir; gerçek viewport, safe-area, REST/Socket.IO, role ve product capability kontratlarının yerine kullanılamaz.

---

**Kapsam içi:**
- Video → Room/host bilgisi → chat sıralaması, kalan alanı kullanan chat, stabil composer ve safe-area/mobile keyboard davranışı.
- Participants, options ve host kontrollerinin mevcut bottom-sheet/modal primitive'lerinde sunulması; destructive confirmation'ın ayrı tutulması.
- Guest gate handoff'u, member/host davranışları, loading/reconnect/full/denied/ended/player-unavailable state'leri ve tablet geçişi.

**Kapsam dışı:**
- Sticky mini player, belgelenmemiş mobile navigation veya yeni gesture/landscape ürün davranışı.
- Desktop Room kompozisyonu, host authority veya cinematic davranışı değişikliği.
- Ortak Room runtime'ın kopyalanması ya da REST/Socket.IO/auth/backend/database sözleşmelerinin değiştirilmesi.
- Yeni chat, playback, participant, moderation, invite veya sosyal ürün kabiliyeti.
- Genel responsive/component consolidation; Wave 25 ve kapanış Wave'lerine aittir.

---

**Implementation kontrol listesi:**

*Mobil kompozisyon ve player:*
- [x] Mevcut `RoomShellPage.tsx`, `room.css` ve `responsive.css` mobil kurallarını Wave 00 envanteriyle karşılaştır; belgelenmiş davranışı koruyarak kontrollü migration sınırını belirle.
- [x] Mobil görünümü doğrudan Wave 12 Room/role/state/mutation sahipliğine bağla; ikinci socket, access, player, message veya presence state ağacı oluşturma.
- [x] Wave 05 mobil shell/exclusion sözleşmesini Room route'unda tüket; Room deneyimine genel bottom nav, sticky mini player veya belgelenmemiş header ekleme.
- [x] Mobil içerik sırasını video → kompakt Room/host bilgisi → chat olarak kur; source order ile görsel order'ı keyboard ve screen reader için tutarlı bırak.
- [x] `YouTubeRoomPlayer.tsx` alanını stabil aspect ratio ve gerçek provider sınırlarıyla üstte tut; orientation/viewport değişiminde gereksiz remount veya autoplay davranışı üretme.
- [x] Room title, host identity, live durumu ve participant count bilgisini video altında kompakt ancak okunabilir bir metadata yüzeyinde gerçek runtime verisiyle göster.
- [x] Tablet geçişinde video/chat ilişkisini canonical responsive kurala göre ayarla; keyfî sabit `240px` chat yüksekliği veya desktop panelinin sıkıştırılmış kopyasını kullanma.

*Chat, safe area ve sheet sahipliği:*
- [x] Chat history alanını video/metadata sonrasında kalan kullanılabilir yüksekliği tüketen tek scroll container olarak kur; sayfa ile chat arasında çift scroll üretme.
- [x] Composer'ı chat alanının altında stabil tut; `env(safe-area-inset-bottom)`, mobile keyboard ve viewport değişimlerinde input/send kontrolünün görünür kalmasını sağla.
- [x] Keyboard açılıp kapanırken son mesaj bağlamını ve kullanıcının scroll konumunu koru; history'yi sıfırlama veya zorla sona kaydırma.
- [x] Participants girişini Wave 02 bottom-sheet primitive'iyle gerçek presence listesine bağla; sheet kapandığında focus'u tetikleyiciye döndür.
- [x] Member options/leave/report işlemlerini role-aware bottom sheet'te göster; host-only veya unavailable aksiyonları keyboard ağacına ekleme.
- [x] Host playback/invite/participant-management girişlerini ayrı host controls sheet'inde Wave 14 mutation ve authority sonuçlarına bağla; yeni mobil komut üretme.
- [x] Kick, room-ban ve End Room gibi destructive aksiyonlarda sheet üzerinde anında mutation çalıştırma; Wave 02 shared confirmation modal'ını ayrı bir adım olarak kullan.

*State, erişilebilirlik ve sağlamlık:*
- [x] Guest Room girişini Wave 10 Auth Gate'e güvenli Room return intent ile devret; login öncesi runtime veya socket subscription başlatma.
- [x] Initial loading, joining, reconnecting/degraded, full, denied/banned, ended ve player-unavailable durumlarını mobil geometrinin ilgili lokal yüzeylerinde Wave 12 state'inden render et.
- [x] Reconnect sırasında player/message/context'i koru; chat veya player lokal failure'ını bütün mobil Room'u kapatan genel error'a dönüştürme.
- [x] Bottom sheet ve modal'larda focus trap/restore, Escape/close, screen-reader label ve en az `44×44px` touch target davranışını doğrula.
- [x] Aura, sheet, modal, loading ve state geçişlerinde `prefers-reduced-motion` desteği sağla; state anlamını harekete bağımlı bırakma.
- [x] Desteklenen mobil ve tablet viewport'larında safe-area, uzun Room title, keyboard, sheet ve ended state ile yatay overflow/layout shift oluşmadığını; player/chat güncellemelerinin gereksiz geniş rerender üretmediğini doğrula.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Room runtime açılmaz; Wave 10 Auth Gate güvenli Room return intent ile gösterilir.
- [x] Member state — Mobil participant video, chat, participants, options, report ve leave işlemlerini gerçek yetkisi ölçüsünde kullanır.
- [x] Host state — Wave 14 playback, invite, participant management, kick/ban ve end işlemleri mobil host controls sheet'i üzerinden aynı authority ile çalışır.
- [-] Admin state — Admin'e özgü mobil Room bypass'ı veya kontrol seti bulunmuyor; admin mevcut Room rolüyle değerlendirilir.
- [x] Loading state — Video/metadata/chat geometrisi skeleton ile korunur; tam sayfa spinner ve büyük layout sıçraması oluşmaz.
- [x] Empty state — No-messages ve yönetilebilir participant yok durumları ilgili chat/sheet yüzeyinde sakin ve gerçek veriye bağlı sunulur.
- [x] Error state — Player, chat, participants, report, leave, host mutation ve sheet yükleme hataları ilgili mobil yüzeyde recovery taşır.
- [x] Denied / unavailable state — Full, private, denied, banned, ended ve player-unavailable sonuçları authoritative state'ten mobil kompozisyona doğru taşınır.
- [x] Reconnecting state — Video, messages, scroll ve focus korunur; reconnect sonrası aynı ortak runtime snapshot'ı kullanılır.
- [x] Mobile davranışı — Video/metadata/chat sırası, safe area, keyboard, touch target, sheet ve modal davranışları bağımsız mobil teslim olarak çalışır.
- [x] Klavye / focus davranışı — Composer keyboard ile görünür kalır; sheet/modal focus trap ve trigger restoration eksiksiz çalışır.
- [x] Reduced motion davranışı — Aura ve bütün sheet/modal/state geçişleri azaltılır; feedback statik olarak anlaşılır kalır.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Mobil layout testi video → metadata → chat source order'ını, tek chat scroll container'ını ve global bottom nav/sticky mini player bulunmadığını doğruluyor.
- [x] Runtime testi mobile'ın Wave 12 state/socket sahipliğini tükettiğini ve viewport değişiminde player/subscription'ın yeniden oluşturulmadığını doğruluyor.
- [x] Sheet testi participant/member-options/host-controls ayrımını, destructive modal adımını ve role dışı aksiyonların DOM'da bulunmadığını doğruluyor.
- [x] State testi guest gate, loading, reconnecting, full, denied/banned, ended ve player-unavailable mobil sonuçlarını doğruluyor.
- [x] Responsive/accessibility testi keyboard, safe-area, tablet geçişi, focus trap/restore, `44×44px` targets, overflow ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave15-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası guest gate, member participant ve host Room success akışlarını gerçek mobil cihaz/viewport üzerinde staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası video/metadata/chat sırasını, keyboard-safe composer'ı, message scroll korumasını ve tablet geçişini kontrol ediyor.
- [x] QA dosyası participants/options/host sheets, ayrı destructive confirmation, focus restoration ve unauthorized aksiyonların bulunmadığını doğruluyor.
- [x] QA dosyası loading/reconnect/full/denied/banned/ended/player-unavailable, safe-area, orientation, overflow, screen reader ve reduced-motion kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki video → Room/host bilgisi → chat sırası korunuyor.
- [x] Mobil Room'da global bottom nav veya sticky mini player görünmüyor.
- [x] Görsel odak hiyerarşisi doğru — Video baskın, Room metadata kompakt, chat kullanılabilir, role işlemleri sheet içinde ikincil.
- [x] Tipografi hiyerarşisi doğru — Room/sheet başlıkları Manrope, metadata/chat/actions Inter kullanıyor.
- [x] Accent `#FF625A` live/focus/primary ve kontrollü destructive feedback ile sınırlı; geniş mobil yüzeye yayılmıyor.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız geçici sheet/modal katmanında; kalıcı player/chat/metadata yüzeyleri mat ve okunabilir.
- [x] Sahte mobile nav, player kontrolü, participant, message, host authority veya gesture davranışı yok.
- [x] Destructive işlemler sheet'ten ayrı confirmation adımı olmadan çalışmıyor.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi metadata, chat, composer, sheet, modal ve state yüzeylerinde sağlandı.
- [x] Klavye focus görünür; mobile keyboard, sheet ve modal geçişlerinde kaybolmuyor.
- [x] Desteklenen mobil/tablet viewport, safe-area, uzun içerik ve keyboard durumlarında yatay overflow veya çift scroll yok.
- [x] Mevcut fonksiyonlar korundu — Room runtime, player, chat, roles, invite, moderation, lifecycle ve auth handoff kontratları değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Mobil Room bağımsız video/metadata/chat kompozisyonuyla ortak runtime'ı duplicate state veya socket olmadan kullanır.
- [x] Member ve host işlemleri doğru bottom sheet'lerde, destructive işlemler ayrı confirmation modal'ında ve backend authority sınırında çalışır.
- [x] Guest, loading/empty/error/denied/reconnect/ended/player-unavailable ile mobile keyboard/safe-area/tablet senaryoları eksiksiz sunulur.
- [x] Responsive, touch, keyboard, screen-reader, reduced-motion, overflow ve player/chat bağlam koruması staging'de doğrulanmıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave15-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 15'i onayladı ve Codex durdu

---

### Wave 15 Sonucu — 2026-08-04

- Wave 12 tek Room runtime authority'si korunarak mobil video → metadata → chat kompozisyonu, tek kalan-yükseklik chat scroll yüzeyi, visual viewport, safe-area, keyboard ve orientation davranışı tamamlandı; yeni runtime/socket/player/message state ağacı kurulmadı.
- Participant options/presence ile host controls/invite/manage akışları shared BottomSheet ailesine taşındı; kick, room-ban ve End Room destructive işlemleri ayrı shared confirmation Modal'larında ve mevcut backend authority/payload sınırlarında kaldı.
- Guest gate, loading, reconnect/degraded, denied/banned/kicked/left, player-unavailable ve ended sunumları ortak lifecycle state'lerini tüketti. Kullanıcının açık kararıyla ayrı mobil board yerine Room Desktop Design Package görsel dili canonical mobil hükümlere uyarlandı; açıklanmamış görsel sapma bildirilmedi.
- Frontend typecheck ve production build geçti. Tam Vitest 20 dosyada 170/170, focused Wave 15 Vitest 8/8, focused Wave 15 Chromium 4/4 ve Wave 13–15 Chromium Room regresyonu 12/12 geçti. Frontend commitleri `8b60658` ve `3343458`; backend, database, API, auth/session, realtime, route ve dependency kontratları değiştirilmedi.
- `tests/wave15-tests.md` içindeki bütün staging/manual QA, görsel, touch, keyboard, screen-reader, reduced-motion, role/state ve debug maddeleri kullanıcı tarafından geçti sayıldı ve standart `[x]` biçimine normalize edildi. Blocker bildirilmedi; mevcut 500 kB üzeri production chunk uyarısı değişmeyen non-blocker olarak kaldı.
- Wave 15, 2026-08-04 tarihinde QA-closed / kullanıcı onaylı oldu. Wave 16 yalnız sıradaki execution cursor olarak hazırdır; implementation, component/style hazırlığı, test veya refactor başlatılmadı.

---

### Wave 16 — Own ve Public Profile Deneyimi

**Durum:** QA-closed / kullanıcı onaylı — 2026-08-04.

**Hedef:**
Own/public profile, avatar, display name, username, bio ve izinli relationship/safety aksiyonlarını gizlilik sınırları içinde sade kimlik yüzeyi olarak sunar.

**Neden bu sırada geliyor:**
Shell ve ortak identity primitive'leri hazırdır; Settings ve Social Hub doğru profil bileşenleri üzerine kurulmalıdır.

**Bağımlılıklar:**
- Wave 02–05 ortak identity/state ve desktop/mobile shell altyapıları tamamlanmış olmalıdır.
- Managed avatar ve public-profile presenter sözleşmeleri korunmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 16 — Own ve Public Profile Deneyimi`
- `Roads/project-foundation/02-system-definition/auth-and-access-rules.md`
  - `## 11. Visible Identity Rule`
  - `## 13. Avatar Rule`
- `Design/PROFILE_AND_SETTINGS_DESIGN_PACKAGE.md`
  - `## 4. Profil Türleri`
  - `## 5. Kendi Profili — Desktop Kompozisyonu`
  - `## 7. Public Member Profile`
  - `## 11. Profil Düzenleme Modalı`
  - `## 12. Avatar Upload`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/OwnerProfilePage.tsx`, `Vibe frontend/src/pages/MemberProfilePage.tsx`, `Vibe frontend/src/users/ProfileIdentityCard.tsx`, `Vibe frontend/src/users/AvatarCropper.tsx`, `Vibe frontend/src/users/profileApi.ts`, `Vibe frontend/src/users/profileValidation.ts`, `Vibe frontend/src/social/RelationshipActions.tsx` ve mevcut `/profile`, `/users/:username`, `/settings` route'ları.

**Görsel referans:**
- Görsel 1: Own Profile desktop ve mobile — atmosferik fakat upload olmayan üst yüzey, güçlü avatar/kimlik, bio ve tek primary edit aksiyonu.
- Görsel 2: Public Member Profile — guest, authenticated relationship ve restricted/unavailable varyantları.
- Görsel 3: Edit Profile modal/mobile form ile managed avatar select, crop, upload, success ve failure durumları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki avatar, cover, bio, üyelik tarihi, presence, relationship ve oda bağlamı temsilîdir; public presenter, privacy, managed upload ve mevcut social authority kontratlarının yerine kullanılamaz.

---

**Kapsam içi:**
- Own, public ve restricted profile kompozisyonları ile güvenli identity data ayrımı.
- Edit profile, managed avatar upload/remove/fallback, validation ve lokal feedback.
- İzinli friend/message/report/block aksiyonları ile loading, not-found ve unavailable durumları.

**Kapsam dışı:**
- Cover upload, follower/following, like, badge, popularity veya public Room-history özelliği.
- Settings kategori yapısı, privacy/account formları, logout ve account deletion; Wave 17'ye aittir.
- Social Hub liste/sekme/reconnection kompozisyonu; Wave 18–19'a aittir.
- Yeni public-profile alanı, username değişikliği, avatar provider'ı, API, auth, database veya privacy policy değişikliği.
- Tek kullanımlık profil parçalarını Wave 25 adına erken ortaklaştırmak.

---

**Implementation kontrol listesi:**

*Profil türleri ve güvenli kimlik sunumu:*
- [x] `OwnerProfilePage.tsx`, `MemberProfilePage.tsx`, `ProfileIdentityCard.tsx` ve `profileApi.ts` mevcut own/guest/member/restricted presenter alanlarını Wave 00 envanteriyle eşleştir; response'ta olmayan profil alanı üretme.
- [x] `ProfileIdentityCard` içindeki avatar, display name, username, bio ve mevcut member-since sunumunu Wave 02 identity primitive'leriyle uyumlu tek kimlik hiyerarşisinde koru.
- [x] `/profile` own görünümünü global shell içinde atmosferik fakat upload edilemeyen üst yüzey, güçlü kimlik, bio ve tek primary edit/manage aksiyonuyla kur.
- [x] `/users/:username` public görünümünde yalnız presenter'ın izin verdiği avatar, display name, username, bio, güvenli üyelik bilgisi ve relationship aksiyonlarını render et; email, role, internaller veya private geçmiş gösterme.
- [x] Guest public profile sonucunu minimal allowlist kimlik, login/signup CTA ve mevcut `noindex,nofollow` davranışıyla sun; authenticated social/presence bilgisini DOM'a koyma.
- [x] Invalid, deleted, restricted veya block-policy kaynaklı profil sonuçlarını neden ayrıştırmadan nötr `profile unavailable` yüzeyine eşleştir; account/safety reason sızdırma.
- [x] Own profile aksiyonlarını Edit Profile, managed avatar ve Settings handoff'uyla sınırla; public relationship kontrollerini own görünümde çoğaltma.

*Relationship, edit ve avatar akışları:*
- [x] Public profile ana aksiyonunu authoritative `RelationshipState` sonucuna göre Add friend, Request sent/cancel, Accept/Decline veya Message olarak tekil seç; bütün aksiyonları aynı anda gösterme.
- [x] Message aksiyonunu yalnız confirmed-friend ve `DIRECT_MESSAGES_ENABLED` capability'si izin verdiğinde mevcut `/messages?targetUserId=` route'una bağla; friends-only policy'yi frontend görünürlüğüyle bypass etme.
- [x] Report ve Block işlemlerini mevcut `RelationshipActions`/`ReportDialog` kontratlarıyla ikincil safety menu'de sun; mutation success/failure sonrasında relationship state'ini authoritative response ile reconcile et.
- [x] Edit Profile yüzeyinde yalnız mevcut avatar, display name ve bio alanlarını göster; değiştirilemeyen username'ı salt okunur kimlik olarak açıkla ve input/mutation üretme.
- [x] `profileValidation.ts` içindeki display name `2–48`, bio `160` karakter ve plain-text/no-link validation sonucunu field-level error'larla ilişkilendir.
- [x] Profile save işlemini `updateMyProfile()` üzerinden tek mutation olarak çalıştır; double-submit'i engelle, failure'da draft'ı koru ve success'te current-user/profile state'ini gerçek response ile güncelle.
- [x] Edit modalında focus trap, Escape, tetikleyiciye focus restore ve unsaved-changes güvenli kapanışını uygula; mobilde aynı formu uygun full-screen sheet/form yüzeyinde göster.
- [x] `AvatarCropper.tsx` akışını yalnız JPEG/PNG/WebP, mevcut `5 MB` sınırı, keyboard erişilebilir crop ve managed `uploadManagedAvatar()` kontratıyla sürdür.
- [x] Avatar upload progress/error/success state'ini avatar alanında lokal tut; processing sırasında profilin geri kalanını kullanılabilir bırak ve failure'da önceki avatarı koru.
- [x] Managed avatar remove işlemini `removeManagedAvatar()` sonucuna bağla; success'te güvenli initials fallback'i ve global current-user identity refresh'ini doğrula.

*State, responsive ve erişilebilirlik:*
- [x] Own/public profil initial loading için avatar/kimlik/bio geometrisini koruyan skeleton; bio veya ikincil veri yoksa mock içerik üretmeyen sakin empty davranışı uygula.
- [x] Profile fetch, relationship action, edit save, avatar decode/upload/remove ve report/block hatalarını ilgili lokal yüzeylerde teknik olmayan retry/feedback ile ayır.
- [x] Desktop ve mobil profile kompozisyonlarında uzun isim/bio, `44×44px` touch target, heading/DOM sırası, visible focus, live-region, WCAG AA ve `prefers-reduced-motion` davranışını doğrula.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Public profile yalnız allowlist kimliği ve auth CTA'larını gösterir; own profile Auth Gate arkasında kalır ve no-index davranışı korunur.
- [x] Member state — Own profile edit/avatar/Settings; public profile ise authoritative relationship ve safety aksiyonlarını yetkisi ölçüsünde sunar.
- [x] Host state — Host'a özgü profil alanı bulunmaz; host normal member identity/presenter sözleşmesini kullanır.
- [-] Admin state — Admin'e özel public profil verisi veya bypass yoktur; admin normal viewer presenter'ı ile değerlendirilir.
- [x] Loading state — Profil, relationship, save ve avatar loading durumları birbirinden lokal; shell ve profil geometrisi görünür kalır.
- [x] Empty state — Eksik avatar güvenli fallback, boş bio own/public bağlamına uygun davranış ve olmayan ikincil veri için sahte kart üretmeme uygulanır.
- [x] Error state — Fetch, validation, save, upload/remove ve social action hataları draft/eski avatar/bağlamı koruyan recovery taşır.
- [x] Denied / unavailable state — Not-found, restricted, deleted veya block sonucu nötr profile-unavailable mesajına dönüşür; internaller sızmaz.
- [-] Reconnecting state — Profil verisi HTTP tabanlıdır; genel realtime reconnect yüzeyi eklenmez, relationship mutationları response/refetch ile reconcile edilir.
- [x] Mobile davranışı — Minimal header, kontrollü üst yüzey, tek kolon kimlik ve edit sheet/form safe-area ile yatay overflow olmadan çalışır.
- [x] Klavye / focus davranışı — Profil aksiyonları, relationship menu, edit modal ve avatar crop kontrolleri mantıklı sıra, trap ve focus restore taşır.
- [x] Reduced motion davranışı — Aura, modal/sheet ve avatar hover geçişleri azaltılır; loading ve feedback anlaşılır kalır.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Profile presenter testleri own/guest/member/restricted sonuçlarında yalnız izinli identity alanlarının render edildiğini ve internallerin bulunmadığını doğruluyor.
- [x] Relationship testi her state'te tek anlamlı primary action'ı, friends-only Message görünürlüğünü ve block/report reconcile davranışını doğruluyor.
- [x] Edit testi gerçek alanları, validation limitlerini, username read-only davranışını, double-submit engelini ve failure'da draft korumasını doğruluyor.
- [x] Avatar testi file type/size, crop, progress, upload/remove failure'ında eski avatar ve success'te managed/fallback identity refresh davranışını doğruluyor.
- [x] Accessibility/responsive testi desktop/mobil heading, focus trap/restore, crop keyboard, live-region, touch target, overflow ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave16-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası own profile edit/avatar success ile guest/member public profile ve relationship success akışlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası restricted/not-found, profile fetch/save, avatar decode/upload/remove ve relationship/report/block failure durumlarında veri/draft bağlamının korunduğunu kontrol ediyor.
- [x] QA dosyası guest response'ta private alan bulunmadığını, Message aksiyonunun yalnız confirmed friend'de açıldığını ve username değişikliği sunulmadığını doğruluyor.
- [x] QA dosyası desktop/mobil, uzun içerik, keyboard, modal/sheet focus, avatar crop, screen reader, kontrast ve reduced-motion kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki own/public/restricted profil ayrımı korunuyor.
- [x] Atmosferik üst yüzey yeni cover upload veya kullanıcı içeriği türüne dönüşmedi.
- [x] Görsel odak hiyerarşisi doğru — Avatar/display name baskın, username/bio sakin, aksiyonlar role göre kontrollü.
- [x] Tipografi hiyerarşisi doğru — Profil adı/section heading Manrope, username/bio/actions Inter kullanıyor.
- [x] Accent `#FF625A` primary/focus/selected state'le sınırlı; avatar çevresinde sürekli status glow yok.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız geçici modal/safety menu katmanında; kalıcı profile yüzeyi mat ve okunabilir.
- [x] Sahte cover, presence, badge, follower, Room history, friend count veya account-state bilgisi yok.
- [x] Guest/public presenter email, role, private preference, exact last-seen veya safety internali sızdırmıyor.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi kimlik, bio, actions, form ve feedback yüzeylerinde sağlandı.
- [x] Klavye focus görünür; edit/safety yüzeyi kapanınca doğru tetikleyiciye dönüyor.
- [x] Desktop ve mobilde uzun display name/bio ile yatay overflow yok.
- [x] Mevcut fonksiyonlar korundu — auth gate, managed avatar, profile validation, public presenter, relationship/report/block ve friends-only DM kuralları değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Own, guest public, authenticated public ve restricted profile yüzeyleri yalnız izinli identity verisiyle doğru ayrışır.
- [x] Edit profile ile managed avatar upload/remove akışları draft/eski avatar koruması ve güvenli feedback ile çalışır.
- [x] Relationship, Message, report ve block aksiyonları authoritative role/privacy/feature sınırında görünür ve reconcile edilir.
- [x] Desktop/mobil loading/empty/error/unavailable, keyboard, screen-reader ve reduced-motion senaryoları staging'de doğrulanmıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave16-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 16'yı onayladı ve Codex durdu

---

### Wave 16 Sonucu — 2026-08-04

- Own, guest public, authenticated public ve restricted/unavailable profil yüzeyleri yalnız izinli identity verisiyle ayrıştırıldı; atmosferik üst yüzey upload edilebilir cover capability'sine dönüşmedi ve sahte presence, sayaç, follower veya Room history üretilmedi.
- Shared Edit Profile Modal, read-only username, mevcut display name/bio validation, tek save mutation'ı, double-submit koruması, failure'da draft koruması ve authoritative identity refresh ile tamamlandı. Managed avatar upload/remove akışları file/crop sınırlarını, işlem türüne özel retry'ı ve eski avatar/fallback güvenliğini korudu.
- Public profile relationship primary aksiyonu authoritative state'ten türetildi; Message yalnız confirmed friend ve mevcut DM capability sınırında açıldı. Report ve Block shared safety yüzeylerinde kaldı; blocked/restricted/not-found sonuçları neden sızdırmayan neutral unavailable sunumuna eşlendi.
- Frontend typecheck ve production build geçti. Tam Vitest 21 dosyada 187/187, focused Wave 16 Vitest 17/17 ve Wave 16 + historical profile Chromium regresyonu tek worker ile 11/11 geçti. Frontend commitleri `f40c790` ve `18222d3`; backend, database, API, auth/session, realtime, route ve dependency kontratları değiştirilmedi.
- `tests/wave16-tests.md` içindeki bütün staging/manual QA, görsel, responsive, keyboard, screen-reader, reduced-motion, relationship/safety, failure ve debug maddeleri kullanıcı tarafından geçti sayıldı ve standart `[x]` biçimine normalize edildi. Blocker veya canonical belgelerle açıklanmayan görsel sapma bildirilmedi; mevcut 500 kB üzeri production chunk uyarısı değişmeyen non-blocker olarak kaldı.
- Wave 16, 2026-08-04 tarihinde QA-closed / kullanıcı onaylı oldu. Wave 17 yalnız sıradaki execution cursor olarak hazırdır; implementation, component/style hazırlığı, test veya refactor başlatılmadı.

---

### Wave 17 — Settings, Privacy ve Account Safety

**Durum:** QA-closed / kullanıcı onaylı — 2026-08-06.

**Hedef:**
Settings yalnız gerçek account/privacy/blocked/logout/delete kabiliyetlerini kategori tabanlı, güvenilir ve mobilde drill-down çalışan bir yapıda sunar.

**Neden bu sırada geliyor:**
Profil identity/edit davranışları Wave 16'da kapanır; Settings bunların ve mevcut social privacy kontratlarının yönetim yüzeyidir.

**Bağımlılıklar:**
- Wave 16 tamamlanmış olmalıdır.
- Mevcut social settings, account deletion ve logout kontratları authoritative kalmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 17 — Settings, Privacy ve Account Safety`
- `Roads/project-foundation/02-system-definition/frontend-modules.md`
  - `## 11. Settings Module`
- `Design/PROFILE_AND_SETTINGS_DESIGN_PACKAGE.md`
  - `## 13. Settings Ana Yapısı`
  - `## 15. Account Settings`
  - `## 16. Privacy Settings`
  - `## 17. Blocked Accounts`
  - `## 27. Settings Loading ve Error Durumları`
  - `## 33. Mobil Settings Davranışı`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/ProfileSettingsPage.tsx`, `Vibe frontend/src/users/profileApi.ts`, `Vibe frontend/src/social/BlockedAccountsPanel.tsx`, `Vibe frontend/src/social/SocialIdentity.tsx`, `Vibe frontend/src/social/socialApi.ts`, `Vibe frontend/src/auth/AuthContext.tsx` ve mevcut `/settings` ile `/friends?view=blocked` route'ları.

**Görsel referans:**
- Görsel 1: Settings Desktop — kategori listesi, seçili detail alanı ve sakin account/privacy form yüzeyleri.
- Görsel 2: Settings Mobile — kategori listesi → ayrı detail → geri akışı, safe-area ve kritik confirmation modal'ı.
- Görsel 3: Privacy saving/rollback, Blocked Accounts empty/list/unblock ve account deletion success/failure durumları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki email, password change, notification, theme, language, device, read-receipt ve privacy seçenekleri temsilîdir; yalnız mevcut API response, enum, account-deletion ve logout kontratları uygulanabilir.

---

**Kapsam içi:**
- Desktop category/detail ve mobil list → detail Settings navigation.
- Gerçek privacy seçenekleri, Blocked Accounts canonical listesi, logout ve mevcut account deletion.
- Save/saving/rollback/error/success davranışları ile toggle/form erişilebilirliği.

**Kapsam dışı:**
- Connected devices, çalışmayan language/theme/read-receipt/push ayarları veya desteklenmeyen email/password change.
- Yeni privacy backend alanı, account-state kuralı, deletion lifecycle veya session sözleşmesi.
- Profile edit ve avatar implementation'ı; Wave 16'nın sahipliğidir.
- Social Hub genel liste/sekme sistemi ve invite/mobile social kapanışı; Wave 18–19'a aittir.
- Genel form/overlay consolidation; Wave 25'e aittir.

---

**Implementation kontrol listesi:**

*Settings bilgi mimarisi ve kategori sınırı:*
- [x] `ProfileSettingsPage.tsx`, `profileApi.ts`, `BlockedAccountsPanel.tsx` ve auth logout akışındaki gerçek account/privacy/blocked/deletion capability'lerini Wave 00 envanteriyle eşleştir.
- [x] Desktop `/settings` yüzeyini statik Settings başlığı/kategori listesi ile seçili detail alanı olarak düzenle; bütün ayarları tek dev form veya dashboard kart koleksiyonuna dönüştürme.
- [x] Kategori setini yalnız mevcut Account, Privacy, Blocked Accounts ve Log out kabiliyetleriyle üret; feature desteği olmayan kategori veya dead control gösterme.
- [x] Profile identity/edit yönetimini yeniden kurma; Wave 16 own profile/edit yüzeyine açık handoff ver ve aynı save/avatar görevini Settings içinde tekrarlama.
- [x] Seçili kategori fetch/error durumunda kategori shell'ini kullanılabilir bırak; yalnız detail alanına Wave 03 lokal loading/error/retry state'i uygula.
- [x] Mobil Settings'i kategori listesi → tek detail → geri akışı olarak uygula; aktif kategori ve unsaved draft bağlamını geri dönüşte koru.

*Privacy, blocked ve güvenilir save:*
- [x] Privacy formunu yalnız `SocialSettings` response'undaki `friendRequestPrivacy`, `invitePrivacy`, `onlinePrivacy` ve `lastSeenPrivacy` alanlarıyla oluştur.
- [x] Her privacy kontrolünde backend enumundan gelen gerçek seçenekleri ve anlaşılır current-value label'ını kullan; UI-only toggle veya farklı policy seçeneği üretme.
- [x] Privacy save işlemini `updateSocialSettings()` üzerinden yalnız geçerli draft ile çalıştır; lokal saving lock ve double-submit koruması uygula.
- [x] Privacy mutation failure'ında form değerlerini koru, başarı state'ine geçme ve optimistic current value kullandıysan authoritative önceki değere rollback et.
- [x] Save success sonucunda draft/initial snapshot'ı yalnız backend response ile güncelle ve küçük inline/toast feedback'i kontrollü live region ile duyur.
- [x] Settings Blocked Accounts özetini tek canonical `listBlockedMembers()` kaynağı ve mevcut `BlockedAccountsPanel` sahipliğiyle sun; ikinci block cache/listesi üretme.
- [x] Unblock işlemini mevcut `unblockMember()` kontratına bağla, yalnız ilgili satırı kilitle ve success'te canonical listeyi refetch/reconcile et; friendship veya DM'i otomatik geri getirme.

*Account safety, çıkış ve erişilebilirlik:*
- [x] Account detail alanında yalnız mevcut username/kimlik ve desteklenen permanent deletion bilgisini göster; email/password/session-device kontrolü uydurma.
- [x] Delete Account girişini normal ayarlardan görsel/anlamsal olarak ayır ve mevcut password + `DELETE` confirmation şartını shared destructive modal içinde koru.
- [x] `requestAccountDeletion()` mutation'ını tek kez çalıştır; pending state'te kapanış/tekrar gönderimi engelle, failure'da formu koru ve ham retention/internal hata gösterme.
- [x] Deletion success sonucunu mevcut account state ve auth sözleşmesine göre sun; yeni grace period/cancel davranışı üretmeden session/logout handoff'unu tamamla.
- [x] Log out aksiyonunu kategori listesinin ayrı ve açık satırı olarak mevcut `logout()` davranışına bağla; realtime bağlantıları ve hassas local draft/state'i temizleyip güvenli public route'a dön.
- [x] Category/detail geçişi veya route çıkışında dirty privacy/deletion draft'ı için mevcut navigation guard'ı koru; kullanıcı kararı olmadan değişiklikleri kaybetme.
- [x] Desktop/mobil Settings için gerçek form/switch/select semantics, field-error association, modal focus trap/restore, `44×44px` targets, safe-area, WCAG AA ve reduced-motion davranışını doğrula.

---

**State ve rol kontrol listesi:**
- [x] Guest state — `/settings` Auth Gate arkasında kalır; login/signup güvenli `/settings` return intent taşır.
- [x] Member state — Account, gerçek privacy, canonical Blocked Accounts, logout ve mevcut deletion işlemlerini kendi hesabı için yönetir.
- [x] Host state — Host'a özgü Settings kategorisi bulunmaz; host normal member account/privacy sözleşmesini kullanır.
- [-] Admin state — Admin'e özel Settings bypass'ı veya farklı privacy/account formu yoktur; admin kendi hesabında normal member kontratını kullanır.
- [x] Loading state — Settings shell görünür kalır; kategori detail, save, unblock, logout ve deletion loading durumları lokal ayrışır.
- [x] Empty state — Blocked listesi boşsa açıklayıcı state gösterilir; kategori doldurmak için sahte ayar veya kullanıcı üretilmez.
- [x] Error state — Detail fetch, privacy save, unblock, logout ve deletion hataları ilgili yüzeyde draft/bağlam koruyan recovery taşır.
- [x] Denied / unavailable state — Feature-disabled, session-expired, account-restricted veya unsupported setting sonucu kontrolü güvenli kapatır; bypass sunmaz.
- [-] Reconnecting state — Settings mutationları HTTP tabanlıdır; realtime reconnect UI eklenmez, logout mevcut realtime cleanup'ını çalıştırır.
- [x] Mobile davranışı — Kategori listesi/detail/geri akışı, safe-area ve kritik modal tek kolon düzende yatay overflow olmadan çalışır.
- [x] Klavye / focus davranışı — Settings satırları, form kontrolleri ve destructive modal keyboard erişimi, trap ve focus restore taşır.
- [x] Reduced motion davranışı — Kategori, toggle ve modal geçişleri azaltılır; saving/error/success bilgisi statik olarak korunur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Settings category testi yalnız gerçek Account/Privacy/Blocked/Logout alanlarının render edildiğini ve unsupported/dead kontrollerin bulunmadığını doğruluyor.
- [x] Privacy testi mevcut enum/value'ları, tek mutation'ı, double-submit engelini, failure rollback/draft korumasını ve success snapshot'ını doğruluyor.
- [x] Blocked testi tek canonical listeyi, lokal unblock pending/error state'ini ve unblock sonrası friendship/DM'in otomatik dönmediğini doğruluyor.
- [x] Account safety testi password + `DELETE` confirmation, tek deletion mutation, failure koruması, success handoff'u ve logout cleanup'ını doğruluyor.
- [x] Responsive/accessibility testi desktop category/detail, mobil drill-down, dirty guard, modal focus, semantics, touch target, safe-area ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave17-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası account/privacy/blocked kategori navigation, privacy save, unblock, logout ve deletion success akışlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası detail fetch, privacy save rollback, unblock failure, session expiry, logout failure ve deletion failure durumlarında draft/bağlamın korunduğunu kontrol ediyor.
- [x] QA dosyası unsupported email/password/theme/language/read-receipt/device kontrolü bulunmadığını ve unblock'ın friendship/DM'i geri getirmediğini doğruluyor.
- [x] QA dosyası desktop/mobil drill-down, dirty guard, keyboard, modal focus, screen reader, touch, kontrast, safe-area ve reduced-motion kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki desktop category/detail ile mobil list → detail ilişkisi korunuyor.
- [x] Settings dashboard veya bütün alanların aynı anda açık olduğu dev forma dönüşmedi.
- [x] Görsel odak hiyerarşisi doğru — Seçili kategori içeriği baskın, kategori navigation sakin, destructive deletion kontrollü ayrık.
- [x] Tipografi hiyerarşisi doğru — Settings/category heading Manrope, labels/values/actions Inter kullanıyor.
- [x] Accent `#FF625A` selected/focus/save state'le sınırlı; destructive anlam yalnız accent'e bırakılmıyor.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız geçici confirmation/toast yüzeyinde; kalıcı Settings detail mat ve okunabilir.
- [x] Sahte email, password change, devices, notifications, theme, language, read receipts veya privacy enumu yok.
- [x] Blocked Accounts yalnız hesap sahibine görünür ve block yönü/reason internali sızdırmaz.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi category, form, blocked row, feedback ve modal yüzeylerinde sağlandı.
- [x] Klavye focus görünür; detail geri dönüşü ve modal kapanışı doğru kontrolü restore ediyor.
- [x] Desktop/mobil, uzun label/value ve keyboard durumlarında yatay overflow yok.
- [x] Mevcut fonksiyonlar korundu — social settings enumları, canonical block listesi, logout/session cleanup ve account-deletion kontratı değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Desktop ve mobil Settings yalnız gerçek Account/Privacy/Blocked/Logout/Delete kabiliyetlerini açık kategori yapısıyla sunar.
- [x] Privacy save success/failure/rollback ile canonical Blocked Accounts/unblock akışları authoritative state'i korur.
- [x] Logout ve permanent deletion mevcut session/account safety sözleşmesiyle tekrar güvenli ve erişilebilir çalışır.
- [x] Guest/member, loading/empty/error/unavailable, mobile, keyboard ve reduced-motion senaryoları staging'de doğrulanmıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave17-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 17'yi onayladı ve Codex durdu

---

### Wave 17 Sonucu — 2026-08-06

- Desktop category/detail ve mobil liste → tek detail → geri Settings yapısı yalnız gerçek Account, Privacy, Blocked Accounts ve ayrı Log out kabiliyetleriyle tamamlandı. Profile edit/avatar Wave 16 `/profile` sahipliğinde kaldı; notifications, appearance, language, connected devices, email/password change ve read receipts gibi unsupported alanlar eklenmedi.
- Privacy yalnız mevcut dört `SocialSettings` alanını ve backend enumlarını kullandı; save, authoritative response snapshot, dirty guard, double-submit ve failure draft recovery davranışları tamamlandı. Blocked Accounts mevcut shared canonical liste/unblock akışını korudu ve unblock friendship/request/DM'i otomatik geri getirmedi.
- Account yüzeyi yalnız izinli display name/username kimliğini sundu. Password + tam `DELETE` confirmation'lı mevcut deletion request'i, pending kilidi, failure recovery ve logout handoff'u; ayrı normal logout state/retry/cleanup akışıyla birlikte doğrulandı.
- Mobil drill-down, focus restore, safe-area, 44 px touch target, reduced-motion, yatay overflow ve axe serious/critical sınırları doğrulandı. Manuel QA'da bulunan kategori/detail ikon kontrastı `e607d89` ile mevcut `--color-accent-soft-background` tokenına bağlandı ve kullanıcı retest'iyle kapandı.
- Frontend typecheck ve production build geçti. Tam Vitest 22 dosyada 196/196, focused Wave 17 Vitest 9/9, focused Wave 17 Chromium E2E 4/4 ve Wave 16 profile + Wave 17 Settings Chromium regresyonu tek worker ile 9/9 geçti. Frontend commitleri `28d784d`, `e607d89`; backend, database, API, auth/session, realtime, route ve dependency kontratları değiştirilmedi.
- `tests/wave17-tests.md` içindeki bütün staging/manual QA, görsel retest, role/state, responsive, keyboard, screen-reader, failure, debug ve exit maddeleri kullanıcı tarafından geçti sayıldı ve standart `[x]` biçimine normalize edildi. Blocker kalmadı; mevcut 500 kB üzeri production chunk uyarısı değişmeyen non-blocker olarak korundu.
- Wave 17, 2026-08-06 tarihinde QA-closed / kullanıcı onaylı oldu. Wave 18 yalnız sıradaki execution cursor olarak kaydedildi; implementation, component/style hazırlığı, test veya refactor başlatılmadı.

---

### Wave 18 — Social Hub Foundation, Friends ve Reconnection

**Durum:** QA-closed / kullanıcı onaylı — 2026-08-11.

**Hedef:**
Social Hub ortak sekme/satır sistemiyle Friends, Requests ve People You Watched With alanlarını oda merkezli, gerçek state'lerle tamamlar.

**Neden bu sırada geliyor:**
Profile/Settings ve shell social entry noktaları hazırdır; invite/blocked kapanışından önce temel friendship state ailesi tek yerde doğrulanmalıdır.

**Bağımlılıklar:**
- Wave 16 ortak profil/identity sunumu tamamlanmış olmalıdır.
- `SOCIAL_ENABLED`, friendship, presence ve privacy kontratları korunmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 18 — Social Hub Foundation, Friends ve Reconnection`
- `Roads/project-foundation/04-ui-ux-definition/site-map.md`
  - `## Wave 36 Friends Route Activation`
  - `## Wave 38 Social Rail Activation`
- `Design/SOCIAL_HUB_DESIGN_PACKAGE.md`
  - `## 3. Social Hub Bilgi Mimarisi`
  - `## 7. Friends Alanı`
  - `## 8. People You Watched With`
  - `## 9. Friend Requests`
  - `## 14. Liste Satırı Tasarım Sistemi`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/FriendsPage.tsx`, `Vibe frontend/src/social/SocialIdentity.tsx`, `Vibe frontend/src/social/RelationshipActions.tsx`, `Vibe frontend/src/social/SocialRail.tsx`, `Vibe frontend/src/social/socialApi.ts`, `Vibe frontend/src/users/ProfileIdentityCard.tsx` ve mevcut `/friends`, `/friends?view=incoming`, `/friends?view=outgoing`, `/friends?view=watched` route durumları.

**Görsel referans:**
- Görsel 1: Social Hub Desktop foundation — Social Rail ilişkisi, başlık, gerçek sayaçlı tabs ve seçili liste alanı.
- Görsel 2: Friends ile Incoming/Outgoing Requests satır varyantları, lokal search ve action/loading durumları.
- Görsel 3: People You Watched With listesi, güvenli shared-room context, relationship varyantları ve empty/error durumları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki kullanıcılar, sayaçlar, online durumu, ortak oda adı/zamanı, relationship ve listeler temsilîdir; authenticated social API, privacy, retention, block ve feature-flag authority'sinin yerine kullanılamaz.

---

**Kapsam içi:**
- Social Hub foundation, gerçek tab/count ve ortak user-row component'i.
- Friends search yalnız lokal listede; request accept/decline/cancel ve relationship state reconcile.
- People You Watched With privacy/retention/block sınırları, shared-room context ve Room'a geri yönlendiren empty state.

**Kapsam dışı:**
- Feed, followers, global member search, popularity veya yeni social discovery/ranking sistemi.
- Room Invites, Blocked Accounts final entegrasyonu ve mobil Social Hub kapanışı; Wave 19'a aittir.
- Messages Hub veya DM conversation implementation'ı; Wave 20–21'e aittir.
- Yeni friendship, presence, notification, PYWW API/database/realtime kontratı veya `SOCIAL_ENABLED` açılım kararı.
- Wave 16 relationship/profile implementation'ını yeniden yazmak veya Wave 25 consolidation işini erkene çekmek.

---

**Implementation kontrol listesi:**

*Social Hub foundation ve ortak satır:*
- [x] `FriendsPage.tsx`, `SocialIdentity.tsx`, `RelationshipActions.tsx`, `SocialRail.tsx` ve `socialApi.ts` içindeki gerçek list/view/count/cursor sahipliklerini Wave 00 envanteriyle eşleştir.
- [x] `/friends` route'unu `SOCIAL_ENABLED` ve authenticated member sınırında Social Hub başlığı, mevcut shell/Social Rail ve seçili liste alanıyla kur; feature flag'i UI'dan bypass etme.
- [x] Bu Wave'de Friends, Incoming Requests, Outgoing Requests ve People You Watched With view'larını tek query-aware tab ailesinde sun; Invites/Blocked içeriğini Wave 19'a bırak.
- [x] Tab/count değerlerini yalnız gerçek loaded list/snapshot verisinden üret; hard-coded badge, toplam veya online sayısı gösterme.
- [x] Tab değişiminde URL query, aktif tab, her listenin cursor/filter/scroll bağlamı ve stale-response korumasını tutarlı yönet.
- [x] `SocialIdentity` yapısını Wave 16 identity presentation'ını tüketen ortak user-row sınırı olarak uyarla; avatar, kimlik, bağlam, state, tek primary ve kontrollü secondary action slotlarını ayır.
- [x] Friend/request/PYWW satır varyantlarının aynı componentte yalnız kendi geçerli kontrollerini render etmesini sağla; bütün social aksiyonları her satıra doldurma.

*Friends ve Requests:*
- [x] Friends listesini `listFriends()` response/cursor'uyla render et; pagination sırasında mevcut satırları ve stabil row height'ı koru, duplicate user ekleme.
- [x] Friends search'ünü yalnız yüklenmiş/mevcut arkadaşların display name ve username alanlarında lokal filtre olarak çalıştır; global member endpoint'i veya discovery sonucu üretme.
- [x] Presence indicator/filter'ını yalnız gerçek `listFriendPresence()` ve privacy izinli state varsa göster; unavailable/hidden sonucu offline diye tahmin etme.
- [x] Friend satırındaki Message handoff'unu Wave 16 friends-only visibility ve mevcut `/messages?targetUserId=` route'u üzerinden tüket; yeni conversation yetkisi üretme.
- [x] Incoming ve Outgoing Requests sonuçlarını aynı backend listesinde direction alanıyla açıkça ayır; request yönünü client id karşılaştırmasıyla tahmin etme.
- [x] Accept/Decline/Cancel işlemlerini mevcut `respondToFriendRequest()`/`cancelFriendRequest()` kontratlarına bağla; yalnız ilgili satırı kilitle ve double-submit'i engelle.
- [x] Request mutation success/failure, expire, concurrent block veya duplicate accept yarışında optimistic görünümü authoritative relationship/list refetch ile reconcile et.

*Reconnection, state ve erişilebilirlik:*
- [x] People You Watched With listesini `listPeopleWatched()` response/cursor'uyla privacy, retention, block ve account-state filtrelerinin backend sonucuna göre render et.
- [x] PYWW satırındaki shared-room/zaman bağlamını yalnız presenter gerçekten döndürüyorsa güvenli yaklaşık metinle göster; private Room adı veya exact join/leave zamanı uydurma.
- [x] PYWW relationship aksiyonlarında Wave 16 shared `RelationshipActions` sonucunu tüket; no relationship/request/friends state'lerinde Add friend, Request sent veya Message seçeneklerini birbirine karıştırma.
- [x] `dismissPeopleWatched()` işlemini yalnız ilgili satırda kontrollü optimistic remove + failure rollback ile uygula; dismiss'i block/unfriend anlamına dönüştürme.
- [x] Friends/Requests/PYWW için ayrı lokal loading, no-results/empty, action-failed ve load-more state'lerini Wave 03 sistemiyle kur; empty CTA'yı yalnız belgelenmiş Discover/Room yönüne bağla.
- [x] Social realtime/snapshot reconcile sırasında yeni request/friendship/count güncellemelerini blink, scroll jump veya duplicate olmadan işle; tab semantics, keyboard row/menu, WCAG AA ve reduced-motion davranışını doğrula.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Social Hub açılmaz; Auth Gate güvenli `/friends` return intent sunar ve private social count/list fetch yapılmaz.
- [x] Member state — Friends, Incoming/Outgoing Requests ve PYWW listelerini kendi authoritative state'iyle görüntüler ve izinli işlemleri yapar.
- [x] Host state — Host'a özgü Social Hub yetkisi yoktur; aktif host normal member friendship/reconnection kontratını kullanır.
- [-] Admin state — Admin'e özel Social Hub veya başka kullanıcının listesine erişim yoktur; admin kendi member state'iyle değerlendirilir.
- [x] Loading state — Tab shell görünür; initial list, tab switch, row action ve load-more loading durumları lokal ayrışır.
- [x] Empty state — Friends/Requests/PYWW ve local no-results kendi kısa state'ini gösterir; fake kullanıcı veya global search CTA'sı üretmez.
- [x] Error state — Liste, row mutation, pagination ve dismiss hataları ilgili bağlamda retry/rollback sunar.
- [x] Denied / unavailable state — Feature-disabled, session/account, relationship, presence-hidden veya stale request sonucu güvenli unavailable davranışına dönüşür.
- [x] Reconnecting state — Mevcut listeler/scroll korunur; socket geri geldiğinde HTTP snapshot ile count/relationship state'i sessizce reconcile edilir.
- [-] Mobile davranışı — Ortak tab/row semantiği responsive tüketilebilir kalır; final mobil navigation ve yoğunluk Wave 19'a aittir.
- [x] Klavye / focus davranışı — Tabs, search, rows, primary actions ve secondary menu görünür focus, doğru sıra ve işlem sonrası stabil focus taşır.
- [x] Reduced motion davranışı — Tab indicator, row update, count ve empty aura hareketleri azaltılır; loading/state bilgisi korunur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [x] Frontend Vitest suite'i geçiyor (`npm run test`)
- [x] Social Hub foundation testi auth/feature gate, query tab state'i, gerçek count ve Invites/Blocked kapsam sınırını doğruluyor.
- [x] Common row testi friend/request/PYWW varyantlarında yalnız doğru identity/context/action setinin render edildiğini doğruluyor.
- [x] Friends/Requests testi lokal search, cursor pagination, accept/decline/cancel double-submit engeli ve race/failure reconcile davranışını doğruluyor.
- [x] PYWW testi privacy-safe context, relationship aksiyonları, dismiss rollback ve private/exact activity bilgisinin bulunmadığını doğruluyor.
- [x] Realtime/accessibility testi duplicate-free quiet update, count/scroll stabilitesi, tab semantics, keyboard focus ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave18-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası Friends search/message handoff, incoming accept/decline, outgoing cancel ve PYWW add-friend/dismiss success akışlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası feature-disabled, list/pagination failure, expired/concurrent request, dismiss rollback ve presence-hidden durumlarını kontrol ediyor.
- [x] QA dosyası global search/fake count/private Room/exact activity bilgisi bulunmadığını ve relationship state'lerinin çelişmediğini doğruluyor.
- [x] QA dosyası desktop/tablet shell, tab/query/scroll koruması, keyboard, screen reader, kontrast ve reduced-motion kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki Social Hub başlık/tab/liste hiyerarşisi ve oda-merkezli reconnection karakteri korunuyor.
- [x] Social Rail ana navigasyonla yarışmıyor ve Room deneyiminin içine kalıcı olarak girmiyor.
- [x] Görsel odak hiyerarşisi doğru — Seçili liste baskın, kimlik ve primary action net, metadata/secondary menu sakin.
- [x] Tipografi hiyerarşisi doğru — Hub/list heading Manrope, identity/context/actions Inter kullanıyor.
- [x] Accent `#FF625A` active tab, focus ve primary action'la sınırlı; online/presence state'i sahte accent taşımıyor.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız geçici secondary menu/feedback katmanında; kalıcı liste satırları mat ve stabil.
- [x] Sahte user, count, presence, shared Room, exact activity, popularity veya global search sonucu yok.
- [x] Aynı satırda çelişkili Add friend/Message veya Accept/Decline/Cancel seti görünmüyor.
- [x] `prefers-reduced-motion` destekleniyor.
- [x] WCAG AA kontrast hedefi tabs, counts, rows, actions ve state yüzeylerinde sağlandı.
- [x] Klavye focus görünür; tab/row action sonrası liste bağlamı kaybolmuyor.
- [x] Desktop/tablet listelerinde uzun kimlik/context ve pagination sırasında yatay overflow veya layout jump yok.
- [x] Mevcut fonksiyonlar korundu — `SOCIAL_ENABLED`, friendship/presence/privacy, PYWW retention, block ve route kontratları değişmedi.
- [x] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Social Hub foundation gerçek tab/count ve ortak user-row sistemiyle Friends, Requests ve PYWW alanlarını tutarlı sunar.
- [x] Local friend search, request actions ve PYWW reconnection/dismiss akışları authoritative state'le duplicate-free reconcile edilir.
- [x] Privacy/retention/block sınırları private Room veya exact activity verisi sızdırmadan korunur.
- [x] Loading/empty/error/reconnecting, keyboard ve reduced-motion senaryoları otomatik testler ile staging'de doğrulanmıştır.
- [x] Otomatik doğrulama kontrol listesi geçti
- [x] Kullanıcı `tests/wave18-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [x] Kullanıcı Wave 18'i onayladı ve Codex durdu

---

### Wave 18 Sonucu — 2026-08-11

- **Karar:** Geçti — QA-closed / kullanıcı onaylı.
- **Teslim:** Query-aware Friends, Incoming, Outgoing ve People You Watched With tab ailesi; gerçek loaded count'lar; Wave 16 identity sunumunu tüketen ortak satır; lokal friend search/presence; yönlü request aksiyonları; friends-only Message handoff; privacy-safe PYWW ve rollback-safe dismiss tamamlandı.
- **Doğrulama:** Frontend typecheck/build, tam Vitest 23 dosyada 206/206, focused Wave 18 Vitest 10/10 ve Social Hub/Friends/Social Rail Chromium regresyonu tek worker ile 11/11 geçti.
- **QA:** `tests/wave18-tests.md` içindeki bütün staging/manual QA, görsel, role/state, responsive, keyboard, screen-reader, failure, debug ve exit maddeleri kullanıcı kabulüyle standart `[x]` biçiminde kapatıldı; blocker veya açıklanmamış görsel sapma bildirilmedi.
- **Commitler:** Frontend `070ed15`, `d4b0350`.
- **Sınır:** Backend, database, API, auth/session, realtime, route ve dependency kontratları değiştirilmedi. Invites, Blocked Accounts final entegrasyonu ve mobil kapanış Wave 19 kapsamında kaldı; Wave 19 başlatılmadı.

---

### Wave 19 — Social Invites, Blocked ve Mobil Kapanış

**Durum:** Frontend implementation ve mevcut automatic validation tamamlandı; staging/manual QA ve kullanıcı onayı toplu test turuna ertelendi. Wave 19 QA-closed değildir.

**Hedef:**
Room Invites ve Blocked Accounts ortak Social Hub diline taşınır; bütün social alanlar tablet/mobilde tek navigation yöntemiyle tamamlanır.

**Neden bu sırada geliyor:**
Temel tab/satır/relationship altyapısı Wave 18'de sabitlenir; invite lifecycle, block sonuçları ve mobil yoğunluk bunun üzerine eklenir.

**Bağımlılıklar:**
- Wave 18 Social Hub liste/relationship foundation'ı ve Wave 17 canonical Blocked Accounts yüzeyi tamamlanmış olmalıdır.
- Existing invite, notification, block ve Room access policy tek authoritative state olarak kalmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 19 — Social Invites, Blocked ve Mobil Kapanış`
- `Design/SOCIAL_HUB_DESIGN_PACKAGE.md`
  - `## 10. Room Invites`
  - `## 11. Blocked Accounts`
  - `## 12. Mobil Social Hub`
  - `## 20. Realtime Davranış`
  - `## 22. Room Invite Entegrasyonu`
- `Design/SYSTEM_STATES_BOARD.md`
  - `## 16. Diğer Empty State Aileleri`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/FriendsPage.tsx`, `Vibe frontend/src/social/RoomInviteCard.tsx`, `Vibe frontend/src/social/BlockedAccountsPanel.tsx`, `Vibe frontend/src/social/SocialIdentity.tsx`, `Vibe frontend/src/social/RelationshipActions.tsx`, `Vibe frontend/src/social/SocialRail.tsx`, `Vibe frontend/src/social/socialApi.ts` ve mevcut invite/block/notification/Room access kontratları.

**Görsel referans:**
- Görsel 1: Social Hub Invites — active/history ayrımı, invite satır/kart state'leri ve action feedback.
- Görsel 2: Canonical Blocked Accounts listesi, unblock confirmation/success/failure ve empty state.
- Görsel 3: Tablet drawer ile mobil Social Hub tabs/More, tek kolon satırlar, secondary action sheet ve safe-area varyantları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki invite, Room, sender, block tarihi, count, online durumu ve terminal nedenleri temsilîdir; mevcut invite grant, Room access, notification, block, relationship ve privacy authority'sinin yerine kullanılamaz.

---

**Kapsam içi:**
- Invite active/history, accept/decline/revoke ve ended/full/expired/revoked sonuçları.
- Blocked list/unblock ve friendship/DM'nin otomatik geri gelmemesi.
- Mobil tab overflow/More çözümü, tablet drawer ilişkisi, touch/focus ve quiet realtime updates.

**Kapsam dışı:**
- Yeni invite türü, global user directory, toplu unblock veya mobil bottom navigation.
- DM konuşma ekranının yeniden tasarımı; Wave 20–21'e aittir.
- Yeni notification page, invite API/grant, block policy, Room access veya database/realtime sözleşmesi.
- Wave 18 Friends/Requests/PYWW implementasyonını yeniden yazmak.
- Genel mobile navigation veya component consolidation; ilgili shell ve Wave 25 sahipliğinde kalır.

---

**Implementation kontrol listesi:**

*Invite lifecycle ve authoritative Room sonucu:*
- [ ] `FriendsPage.tsx`, `RoomInviteCard.tsx`, `socialApi.ts`, Social Rail invite yüzeyi ve mevcut invite response/action alanlarını Wave 00 envanteriyle eşleştir.
- [ ] Wave 18 tab foundation'ına Invites ve Blocked Accounts alanlarını aynı query/tab semantics ile ekle; ayrı `/invites` veya ikinci social route ailesi üretme.
- [ ] Invites görünümünde pending/actionable kayıtları Active, terminal accepted/declined/revoked/expired/invalidated kayıtları yalnız API gerçekten döndürüyorsa sakin History bağlamında ayır.
- [ ] `RoomInviteCard` içeriğini inviter/recipient, güvenli Room title, public/private kind, expiry/terminal state ve yalnız gerçek action capability'leriyle render et.
- [ ] Accept işlemini mevcut `acceptRoomInvite()` sonucuna bağla; private grant dahil gerçek Room id ile Room access akışına geç ve password/grant bilgisini URL'ye koyma.
- [ ] Decline ve revoke işlemlerini yalnız `invite.actions` izin verdiğinde göster; ilgili kartı lokal kilitle, double-submit'i engelle ve response state'iyle reconcile et.
- [ ] Live/full/ended/expired/revoked/banned/access-unavailable sonuçlarını Room/Invite authority'sinden güvenli copy/CTA'ya eşleştir; invite ile capacity, ban veya feature kontrolünü bypass etme.
- [ ] Aynı invite'ın Social Hub, Social Rail/notification, DM ve Room yüzeylerinde tek id/state sonucunu tüketmesini sağla; yüzeye özel farklı optimistic lifecycle üretme.
- [ ] Invite realtime/snapshot güncellemesinde active/history sırası, count ve scroll konumunu blink veya duplicate olmadan koru.

*Blocked Accounts ve social reconcile:*
- [ ] Blocked görünümünü Wave 17'deki tek canonical `listBlockedMembers()` ve ortak social-row sahipliğiyle render et; Settings ve Social Hub için iki ayrı state cache'i üretme.
- [ ] Unblock aksiyonunu mevcut `unblockMember()` kontratına ve açık kullanıcı confirmation'ına bağla; yalnız ilgili satırı loading yap ve failure'da kaydı koru.
- [ ] Unblock success sonrasında blocked listesi ile relationship snapshot'ını refetch/reconcile et; eski friendship, DM composer, invite veya presence'i otomatik geri açma.
- [ ] Block/relation realtime invalidation sonucunda Friends, Requests, PYWW, Invites, counts ve açık secondary menu state'ini authoritative snapshot ile sessizce uyumla.

*Tablet/mobil kapanış ve erişilebilirlik:*
- [ ] Mobil Social Hub'da Friends/Requests/Invites ana erişimini ve PYWW/Blocked alanlarını canonical tab overflow veya tek `More` çözümüyle sun; aynı anda tab, drawer ve bottom nav çoğaltma.
- [ ] Tablet breakpoint'inde Wave 05 shell drawer ilişkisini kullan; kalıcı desktop Social Rail ile mobil drawer'ı aynı anda görünür bırakma.
- [ ] Mobil social row'larında avatar/kimlik/kısa bağlam/tek primary action düzenini koru; secondary işlemleri mevcut menu/bottom-sheet primitive'ine taşı.
- [ ] Accept/Decline, Join/View ve Unblock kontrollerini en az `44×44px` target ve yanlış dokunmayı önleyen spacing ile yerleştir; uzun kimlik/context yatay taşmasın.
- [ ] Invites ve Blocked için ayrı initial/tab/action/loading, empty, expired/ended ve failure state'lerini lokal göster; tam Hub'ı spinner/error ile kapatma.
- [ ] Quiet realtime update sırasında kullanıcının aktif tab, scroll, focus, open menu/sheet ve pending action bağlamını koru; count değişimini agresif live region ile duyurma.
- [ ] Mobil tab scroll/More, row/menu/sheet, safe-area, screen-reader label, WCAG AA, keyboard erişimi ve `prefers-reduced-motion` davranışını desteklenen viewport'larda doğrula.

---

**State ve rol kontrol listesi:**
- [ ] Guest state — Invites ve Blocked dahil Social Hub açılmaz; auth öncesi private invite/list/count fetch yapılmaz.
- [ ] Member state — Kendi invite active/history ve blocked listesine erişir; yalnız server-permitted accept/decline/revoke/unblock işlemlerini yapar.
- [ ] Host state — Host kendi gönderdiği revoke-capable invite'ları görebilir; ek host social yetkisi veya recipient verisi üretmez.
- [-] Admin state — Admin'e özel invite/block bypass'ı veya başka hesabın listesine erişim yoktur; admin kendi member state'iyle değerlendirilir.
- [ ] Loading state — Tab shell korunur; invite/blocked initial, row action ve pagination loading durumları lokal ayrışır.
- [ ] Empty state — No invites ve no blocked accounts kendi kısa state'ini taşır; fake invite/user veya gereksiz CTA göstermez.
- [ ] Error state — Invite list/action/Room access ve blocked/unblock hataları ilgili satır/kartta güvenli recovery sunar.
- [ ] Denied / unavailable state — Full, ended, expired, revoked, banned, block veya feature/session sonucu authoritative terminal/unavailable state'e dönüşür.
- [ ] Reconnecting state — Mevcut listeler/scroll korunur; invite/block/count state'i HTTP snapshot ve realtime eventlerle duplicate-free reconcile edilir.
- [ ] Mobile davranışı — Tek navigation yöntemi, kontrollü tab overflow/More, tek kolon rows, sheets ve safe-area bütün social alanlarda çalışır.
- [ ] Klavye / focus davranışı — Tabs/More, rows, actions ve sheets keyboard erişimi, görünür focus ve trigger restoration taşır.
- [ ] Reduced motion davranışı — Tab/row/count/sheet geçişleri azaltılır; terminal ve pending state anlamı statik korunur.

---

**Otomatik doğrulama:**
- [ ] Frontend typecheck geçiyor (`npm run typecheck`)
- [ ] Frontend build geçiyor (`npm run build`)
- [ ] Frontend Vitest suite'i geçiyor (`npm run test`)
- [ ] Invite testi active/history ayrımını, capability-temelli actions'ı, accept/decline/revoke tek mutation'ını ve terminal Room sonuçlarını doğruluyor.
- [ ] Invite entegrasyon testi aynı id/state'in Social Hub, DM/notification ve Room handoff'unda tutarlı olduğunu; grant/access bypass bulunmadığını doğruluyor.
- [ ] Blocked testi tek canonical listeyi, unblock failure/success reconcile'ını ve friendship/DM/invite/presence'in otomatik dönmediğini doğruluyor.
- [ ] Responsive testi desktop rail, tablet drawer ve mobil tabs/More arasında breakpoint başına yalnız tek navigation yöntemi bulunduğunu doğruluyor.
- [ ] Accessibility/realtime testi touch target, keyboard/focus restore, safe-area, quiet count/list update, overflow ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [ ] `tests/wave19-tests.md` Türkçe olarak oluşturuldu
- [ ] QA dosyası public/private invite accept, decline, sender revoke, enter Room ve unblock success akışlarını staging'de evet/hayır ile doğruluyor.
- [ ] QA dosyası full/ended/expired/revoked/banned/access-unavailable, invite action failure ve unblock failure durumlarında doğru lokal state'i kontrol ediyor.
- [ ] QA dosyası unblock sonrası friendship/DM/invite/presence'in dönmediğini ve aynı invite state'inin Social/DM/notification/Room yüzeylerinde çelişmediğini doğruluyor.
- [ ] QA dosyası desktop/tablet/mobil navigation, tabs/More, sheets, touch, keyboard, focus, safe-area, realtime scroll ve reduced-motion kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [ ] Görsel referanstaki Invite ve Blocked alanları Wave 18 Social Hub diliyle tutarlı.
- [ ] Her breakpoint'te yalnız tek social navigation yöntemi görünür; mobil bottom nav eklenmedi.
- [ ] Görsel odak hiyerarşisi doğru — Actionable invite/primary action net, terminal history ve blocked metadata sakin.
- [ ] Tipografi hiyerarşisi doğru — Hub/tab heading Manrope, identity/invite/context/actions Inter kullanıyor.
- [ ] Accent `#FF625A` active tab, focus ve primary action'la sınırlı; terminal/blocked state yalnız renkle anlatılmıyor.
- [ ] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [ ] Cam efekti yalnız geçici menu/sheet/feedback katmanında; kalıcı invite/blocked listesi mat ve stabil.
- [ ] Sahte Live, Room capacity, invite, user, block reason/direction veya toplu Clear list aksiyonu yok.
- [ ] Private Room title/grant yalnız izinli invite state'inde güvenli sunuluyor ve URL'ye sızmıyor.
- [ ] `prefers-reduced-motion` destekleniyor.
- [ ] WCAG AA kontrast hedefi tabs, cards/rows, actions, terminal state ve sheets üzerinde sağlandı.
- [ ] Klavye focus görünür; tab/More/sheet/action sonrası doğru bağlama dönüyor.
- [ ] Tablet/mobil uzun içerik, safe-area ve tab overflow sırasında sayfa genelinde yatay overflow yok.
- [ ] Mevcut fonksiyonlar korundu — invite lifecycle/grant, Room access, notification, block, privacy ve feature-flag kontratları değişmedi.
- [ ] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [ ] Room Invites active/history ve bütün terminal/access state'leri aynı canonical lifecycle ile Social Hub'da çalışır.
- [ ] Blocked Accounts tek authoritative listeyi kullanır; unblock hiçbir social capability'yi otomatik geri getirmez.
- [ ] Desktop, tablet ve mobil Social Hub breakpoint başına tek navigation yöntemi ve ortak row/state diliyle tamamlanır.
- [ ] Success/failure/reconnect, touch, keyboard, screen-reader ve reduced-motion senaryoları staging'de doğrulanmıştır.
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave19-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave 19'u onayladı ve Codex durdu

---

### Wave 19 Sonucu — 2026-08-11

- **Durum:** Frontend implementation ve yerel otomatik doğrulama tamamlandı; staging/manual QA ve açık kullanıcı onayı bekleniyor. Wave 19 henüz QA-closed değildir.
- Friends tab foundation'ına aynı `/friends?view=` semantics'iyle Invites ve Blocked Accounts eklendi. Mobil ana erişim Friends/Requests/Invites, ikincil alanlar tek More menüsü; tablet Wave 05 drawer ilişkisini koruyor.
- Invite kartı API'nin gerçek capability ve lifecycle alanlarını tüketiyor; Active/History, accept/decline/revoke, full/ended/expired/revoked/banned/access-unavailable copy'leri ve public/private Room handoff'u grant/password sızdırmadan tamamlandı.
- Settings ve Social Hub tek owner-isolated blocked snapshot kullanıyor. Unblock confirmation, lokal pending/failure, authoritative refetch ve friendship/DM/invite/presence'i otomatik geri açmama sınırı korundu.
- Otomatik kanıt: typecheck ve production build geçti; tam Vitest 24 dosya/213 test, focused Wave 18–19 Vitest 17/17, Wave 19 Chromium 4/4, Wave 18–19 Social Hub regresyonu 9/9 ve ilgili shell/Settings/Room Invite regresyonu 11/11 geçti.
- `tests/wave19-tests.md` Türkçe QA dosyası oluşturuldu. Kullanıcı 2026-08-11 tarihinde Wave 19 testlerini bütün Wave'lerin sonundaki toplu tura erteleyip yalnız Wave 20 implementation'ına geçilmesini açıkça istedi. Wave 19 QA-closed değildir.
- Backend, API, database, auth/session, realtime, route ve dependency kontratları değiştirilmedi. Bilinen non-blocker production build'in mevcut 500 kB üzeri chunk uyarısıdır.

---

### Wave 20 — Messages Desktop ve DM Güvenilirliği

**Durum:** Frontend implementation tamamlandı; typecheck/build geçti. Hazırlanan Vitest, Playwright, staging/manual QA ve kullanıcı onayı toplu test turuna ertelendi; QA-closed değildir. Wave 21 başlatılmadı.

**Hedef:**
Desktop Messages Hub ve ortak conversation primitive'leri friends-only, optimistic/pending/failed/retry ve reconnect reconcile davranışlarıyla güvenilir biçimde tamamlanır.

**Neden bu sırada geliyor:**
Social relationship ve invite state'leri kapanmadan Messages doğru erişim, empty state ve conversation entry davranışını kuramaz.

**Bağımlılıklar:**
- Wave 18 friendship/identity foundation'ı tamamlanmış olmalıdır.
- `DIRECT_MESSAGES_ENABLED`, durable sent state ve friends-only backend enforcement korunmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/AGENT_INSTRUCTIONS.md`
- `ai/DECISIONS.md`
  - `### UK-010: Friends-only Direct Messages`
  - `### TK-008: DM sent state durable PostgreSQL commit'tir`
  - `### TK-009: DM gönderim gecikmesi Wave42 blocker değildir`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 20 — Messages Desktop ve DM Güvenilirliği`
- `Design/MESSAGES_DM_DESIGN_PACKAGE.md`
  - `## 4. Desktop Messages Hub Kompozisyonu`
  - `## 6. Mesaj Geçmişi`
  - `## 7. Mesaj Durumları`
  - `## 8. Composer`
  - `## 10. Realtime Davranış`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/MessagesPage.tsx`, `Vibe frontend/src/social/DirectMessageList.tsx`, `Vibe frontend/src/social/DirectMessageComposer.tsx`, `Vibe frontend/src/social/ConversationPanel.tsx`, `Vibe frontend/src/social/useDirectMessageRealtime.ts`, `Vibe frontend/src/social/socialApi.ts` ve mevcut `/messages`, DM REST/realtime kontratları.

**Görsel referans:**
- Görsel 1: Messages Desktop Hub — conversation list/search/filter, selected/empty state ve açık conversation kompozisyonu.
- Görsel 2: Message history/composer — grouped messages, date separators, pending/sent/failed/retry ve unread/new-message durumları.
- Görsel 3: Reconnecting/read-only/list-error/conversation-error ile mevcut docked conversation panel varyantları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki conversation, friend, unread, presence, typing, delivered/read, invite ve message içerikleri temsilîdir; friends-only authorization, durable PostgreSQL commit, REST/realtime event ve mevcut capability kontratlarının yerine kullanılamaz.

---

**Kapsam içi:**
- Conversation list/search/filter, selected/empty state ve açık conversation kompozisyonu.
- Shared message history/composer, `clientMessageId` tabanlı optimistic/pending/sent/failed/retry ve duplicate önleme.
- Unread/read/delivery yalnız mevcut kontrata göre; reconnect, scroll anchor ve docked panel aynı primitive'leri tüketir.

**Kapsam dışı:**
- Stranger requests, group DM, attachments, edit/unsend, call/video-call, screen share veya global member search.
- Mobil navigation, mobile keyboard/safe-area layout ve RoomInvite kart entegrasyonunun final sunumu; Wave 21'e aittir.
- Yeni DM API, event, queue, database alanı, delivery/read policy veya feature-flag enable kararı.
- Yeni dock sistemi; yalnız mevcut `ConversationPanel` capability'si ortak primitive'leri tüketebilir.
- Wave 25'in genel component consolidation sorumluluğunu erkenden almak.

---

**Implementation kontrol listesi:**

*Desktop Hub ve conversation composition:*
- [x] `MessagesPage.tsx`, `DirectMessageList.tsx`, `DirectMessageComposer.tsx`, `ConversationPanel.tsx`, `useDirectMessageRealtime.ts` ve DM API/event alanlarını Wave 00 envanteriyle eşleştir.
- [x] `/messages` desktop yüzeyini mevcut global shell/Social Rail, conversation listesi ve aktif conversation/empty alanı olarak kur; Messages'a özel ikinci ana navigation üretme.
- [x] Conversation listesini `listDirectMessageConversations()` response/cursor'uyla avatar, identity, safe last-message preview, time ve gerçek unread count kullanarak render et.
- [x] Conversation search'ünü yalnız mevcut conversation/friend identity alanlarında lokal çalıştır; All/Unread filtresini yalnız backend unread count sonucu destekliyorsa göster.
- [x] Seçili conversation'ı URL/entry target, mevcut selection ve authoritative liste sonucu arasında stale kullanıcıya geçmeden koru; bulunmayan target için friends-only safe empty/new-message state kullan.
- [x] Conversation header'ı avatar/display name, izinli presence/read-only state ve mevcut options ile sade tut; search/call/video-call/screen-share kontrolleri ekleme.

*Message history, composer ve gönderim güvenilirliği:*
- [x] `DirectMessageList` history DOM'unu güvenli escaped body/link tokens, sender direction, kontrollü grouping ve gerçek date separators ile sakin mesaj yoğunluğunda render et.
- [x] Message history cursor pagination/load-older akışında üst scroll anchor'ını koru; conversation değişiminde önceki kişiye ait mesajı bir frame bile gösterme.
- [x] Shared `DirectMessageComposer` içinde conversation'a izole draft, mevcut `2000` karakter sınırı, kontrollü textarea büyümesi, Enter/Shift+Enter ve IME-safe gönderim davranışını uygula.
- [x] Her kullanıcı gönderim niyeti için tek geçerli `clientMessageId` üret ve retry tamamlanana kadar aynı optimistic kayıtla ilişkilendir; conversation'lar arasında id taşımama.
- [x] Send başlatıldığında mesajı history'ye optimistic `pending` olarak ekle, composer draft'ını güvenli sırada yönet ve bütün composer'ı gereksiz yere kilitleme.
- [x] `sendDirectMessage()` durable response'u geldiğinde optimistic kaydı server message id/state'iyle yerinde reconcile et; ikinci message row ekleme veya layout jump oluşturma.
- [x] Timeout/failure durumunda kullanıcının metnini history'de `failed` olarak koru ve retry aksiyonunu aynı `clientMessageId` ile çalıştır; duplicate durable row üretme.
- [x] `dm.message.created` event'ini server id ve mevcut `clientMessageId` bağıyla deduplicate et; out-of-order event/HTTP response'un pending/sent state'i geriye çevirmesini engelle.
- [x] `sent` durumunu yalnız PostgreSQL commit döndüren REST/event sonucundan göster; delivered/read göstergelerini yalnız mevcut monoton cursor kontratı gerçekten sağlıyorsa render et.

*Realtime, scroll ve shared consumer güvenliği:*
- [x] Reconnect sonrasında conversation list/history snapshot'ını realtime eventlerle reconcile et; eksik mesajı tamamla, mevcut pending/failed kayıtları ve draft'ı kaybetme.
- [x] Kullanıcı history sonundaysa yeni mesajda auto-scroll yap; geçmiş okuyorsa scroll'u koru ve erişilebilir `New messages` indicator sun.
- [x] Friendship removal, block, account veya feature/session değişiminde conversation'ı mevcut backend sonucuna göre read-only/unavailable yap; composer send'i kapat ve ham policy reason gösterme.
- [x] Mevcut `ConversationPanel` docked consumer'ının aynı history/composer/realtime sahipliğini tüketmesini sağla; ikinci socket, farklı send semantics veya duplicate message store oluşturma.
- [x] List/history/composer loading-empty-error-reconnect state'leri ile desktop keyboard/focus, live-region, WCAG AA, reduced-motion ve large-list rerender/scroll performansını implementation ve hazırlanmış QA kapsamına bağla.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Messages açılmaz; auth öncesi conversation/history/socket fetch yapılmaz ve güvenli `/messages` return intent kullanılır.
- [x] Member state — Confirmed friends arasında list/history/composer erişimi ve server-permitted message işlemleri çalışır.
- [x] Host state — Host'a özgü DM yetkisi yoktur; host normal member friends-only kontratını kullanır.
- [-] Admin state — Admin genel inbox browse edemez ve özel DM bypass'ı yoktur; kendi member conversation'ları dışında veri görmez.
- [x] Loading state — Conversation list, selection/history, older messages ve send pending durumları lokal; shell/composer geometrisi korunur.
- [x] Empty state — No conversations, no search result, no selected conversation ve no messages state'leri fake friend veya global search üretmez.
- [x] Error state — List/history/send/retry/delete-local-view ve realtime failure'ları ilgili bağlamda mesaj/draft koruyan recovery taşır.
- [x] Denied / unavailable state — Feature-disabled, non-friend, block, account/session veya conversation unavailable sonucu composer'ı güvenli kapatır.
- [x] Reconnecting state — Mevcut list/history/draft/scroll korunur; snapshot ile socket eventleri duplicate-free reconcile edilir.
- [-] Mobile davranışı — Ortak history/composer primitive'leri responsive tüketilebilir kalır; mobil navigation/keyboard layout Wave 21'e aittir.
- [x] Klavye / focus davranışı — Conversation list, history actions, composer, retry/options ve docked panel görünür focus ile mantıklı sıra taşır.
- [x] Reduced motion davranışı — Message entry, unread, conversation ve reconnect geçişleri azaltılır; pending/failed anlamı statik korunur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`; mevcut chunk-size uyarısı non-blocker)
- [ ] Frontend Vitest suite'i geçiyor (`npm run test`) — testler hazırlandı, kullanıcı talimatıyla toplu test turuna ertelendi.
- [ ] Messages Hub testi conversation list/search/All-Unread/selected/empty ve friends-only target entry davranışını doğruluyor — Vitest/Playwright kapsamı hazır, çalıştırılmadı.
- [ ] Send reliability testi pending → sent, failure → retry, aynı `clientMessageId`, durable response ve HTTP/event sırası değişse de tek row oluştuğunu doğruluyor — kapsam hazır, çalıştırılmadı.
- [ ] Realtime testi duplicate/out-of-order/new message, read/delivery cursor, reconnect snapshot ve friendship invalidation reconcile davranışını doğruluyor — kapsam hazır, çalıştırılmadı.
- [ ] History testi cursor pagination, conversation switch stale-response koruması, bottom auto-scroll ve geçmiş okurken scroll/new-message indicator davranışını doğruluyor — QA kapsamı hazır, çalıştırılmadı.
- [ ] Shared consumer/accessibility testi full Messages ve mevcut docked panelin aynı primitive/state'i, keyboard/focus, live-region ve reduced-motion ile kullandığını doğruluyor — kapsam hazır, çalıştırılmadı.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave20-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası conversation select/search/filter, first message, optimistic send, durable sent ve docked panel success akışlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası send timeout/failure/retry, reconnect, duplicate/out-of-order event, stale conversation switch ve history pagination durumlarını kontrol ediyor.
- [x] QA dosyası non-friend/block/feature-disabled/read-only sonuçlarını ve stranger/global search/call/attachment/edit kontrolleri bulunmadığını doğruluyor.
- [x] QA dosyası desktop keyboard, focus, screen reader, scroll anchor/new-message indicator, kontrast, reduced-motion ve performance smoke kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [ ] Görsel referanstaki conversation listesi ile açık conversation/empty alan ilişkisi korunuyor.
- [ ] Messages kendi ana navigation'ını üretmiyor; mevcut shell ve Social Rail ile tutarlı.
- [ ] Görsel odak hiyerarşisi doğru — Açık conversation baskın, liste taranabilir, composer güvenilir, metadata sakin.
- [ ] Tipografi hiyerarşisi doğru — Messages/conversation heading Manrope, identity/message/actions Inter kullanıyor.
- [ ] Accent `#FF625A` selected/focus/primary ve kontrollü outgoing ayrımıyla sınırlı; bütün sent mesajlar parlak accent balon değil.
- [ ] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [ ] Cam efekti yalnız geçici menu/feedback katmanında; kalıcı list/history/composer mat ve okunabilir.
- [ ] Sahte conversation, friend, unread, presence, typing, delivered/read, attachment veya call kontrolü yok.
- [ ] Pending/sent/failed/retry geçişleri row blink, duplicate veya message kaybı üretmiyor.
- [ ] `prefers-reduced-motion` destekleniyor.
- [ ] WCAG AA kontrast hedefi list, messages, statuses, composer ve feedback yüzeylerinde sağlandı.
- [ ] Klavye focus görünür; conversation değişimi, retry ve docked panel işlemlerinde kaybolmuyor.
- [ ] Desktop list/history pagination ve uzun message/content sırasında yatay overflow veya scroll jump yok.
- [ ] Mevcut fonksiyonlar korundu — friends-only authorization, `DIRECT_MESSAGES_ENABLED`, durable sent, idempotency, read/delivery ve realtime channel kuralları değişmedi.
- [ ] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [ ] Desktop Messages Hub gerçek conversation list/search/filter, selected/empty ve açık conversation kompozisyonuyla çalışır.
- [ ] Optimistic pending/sent/failed/retry akışı aynı `clientMessageId` ile durable sonucu duplicate veya message kaybı olmadan reconcile eder.
- [ ] Reconnect, pagination, unread/read/delivery ve friendship invalidation bağlam/scroll güvenliğini korur.
- [ ] Full-page ve mevcut docked consumer, loading/error/read-only, keyboard ve reduced-motion senaryolarıyla staging'de doğrulanmıştır.
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave20-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave 20'yi onayladı ve Codex durdu

---

### Wave 20 Sonucu — 2026-08-11

- **Durum:** Frontend implementation tamamlandı; typecheck ve production build geçti. Vitest, Playwright, staging/manual QA, Debug Checklist ve açık kullanıcı onayı bütün Wave'lerin sonundaki toplu test turuna ertelendi. Wave 20 QA-closed değildir.
- Desktop Messages Hub; gerçek conversation listesi, lokal search, All/Unread, selected/empty/new-conversation durumları ve sade açık-conversation kompozisyonuyla mevcut shell/Social Rail içinde tamamlandı.
- Shared conversation/history/composer sahipliği full-page ve mevcut docked panel tarafından tüketiliyor. Conversation-specific draft, cursor/load-older scroll anchor, safe link tokens, date/grouping, pending/sent/failed/retry ve aynı `clientMessageId` ile durable reconcile uygulandı.
- Tek paylaşılan DM socket listener katmanı reconnect snapshot, created/read/delivery/typing/deletion/relationship invalidation eventlerini mevcut REST/realtime kontratlarına bağladı. Backend, API, database, auth/session, realtime event kontratı, route ve dependency değiştirilmedi.
- `tests/wave20-direct-messages.test.ts`, `e2e/wave20-messages.spec.ts` ve `tests/wave20-tests.md` hazırlandı fakat kullanıcı talimatıyla çalıştırılmadı/doldurulmadı. Açık maddeler test ve manuel QA kanıtı olmadan işaretlenmedi.
- Wave 21'e ait mobile navigation, keyboard/safe-area final layout, RoomInvite final sunumu, call/attachment/edit davranışı veya Wave 25 consolidation işi alınmadı. Wave 21 başlatılmadı.

---

### Wave 21 — Messages Mobile ve Invite Entegrasyonu

**Durum:** Frontend implementation tamamlandı; typecheck/build geçti. Hazırlanan Vitest, Playwright, staging/manual QA ve kullanıcı onayı toplu test turuna ertelendi; QA-closed değildir. Wave 22 başlatılmadı.

**Hedef:**
Messages Mobile konuşma listesi → conversation akışını, stable keyboard/composer ve gerçek RoomInvite kartlarıyla aynı ortak DM altyapısı üzerinde tamamlar.

**Neden bu sırada geliyor:**
Conversation ve send/realtime primitive'leri Wave 20'de doğrulanır; mobil yalnız layout, navigation, keyboard ve touch sorumluluğunu üstlenir.

**Bağımlılıklar:**
- Wave 20 tamamlanmış olmalıdır.
- Wave 05 mobil shell ve Wave 19 canonical invite state'i hazır olmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 21 — Messages Mobile ve Invite Entegrasyonu`
- `Design/MESSAGES_DM_DESIGN_PACKAGE.md`
  - `## 11. Room Invite in DM`
  - `## 16. Mobil Konuşma Listesi`
  - `## 17. Mobil Açık Conversation`
  - `## 28. Loading Davranışı`
  - `## 31. Erişilebilirlik`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/MessagesPage.tsx`, `Vibe frontend/src/social/DirectMessageList.tsx`, `Vibe frontend/src/social/DirectMessageComposer.tsx`, `Vibe frontend/src/social/RoomInviteCard.tsx`, `Vibe frontend/src/social/useDirectMessageRealtime.ts`, `Vibe frontend/src/styles/responsive.css`, Wave 05 mobil shell, Wave 19 invite lifecycle ve Wave 20 ortak DM primitive'leri.

**Görsel referans:**
- Görsel 1: Messages Mobile conversation listesi — minimal header, rows, unread state ve selected handoff.
- Görsel 2: Açık mobile conversation — minimal identity header, history, keyboard üstünde stabil composer ve options.
- Görsel 3: DM içindeki RoomInvite live/ended/full/banned/access state'leri ile loading/reconnect/read-only/error varyantları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki cihaz, keyboard, conversation, message, unread, presence, invite, thumbnail, participant count ve Room state'leri temsilîdir; ortak DM, invite, Room access, safe-area ve feature authority kontratlarının yerine kullanılamaz.

---

**Kapsam içi:**
- Tek ekranlı list → conversation → geri akışı ve minimal conversation header.
- Mobil klavye, safe area, composer visibility, last-message/scroll stability ve touch aksiyonları.
- Structured invite card'ın ended/full/banned/access sonuçlarıyla Social/Room state'ine uyumu.

**Kapsam dışı:**
- Ayrı mobil mesajlaşma davranışı, ikinci state store, ikinci socket veya farklı send/retry semantics.
- İşlevsiz attachment/plus, global bottom nav, video/audio call, screen share veya mobile-only gesture özelliği.
- Yeni invite message type, Room preview, access API, keyboard library veya backend/database değişikliği.
- Desktop Messages kompozisyonunu yeniden düzenlemek; Wave 20'nin sahipliğidir.
- Genel responsive veya component consolidation; Wave 25 ve kapanış Wave'lerine aittir.

---

**Implementation kontrol listesi:**

*Mobil navigation ve ortak state tüketimi:*
- [x] `MessagesPage.tsx`, mevcut Messages/DM CSS kuralları ve Wave 05 mobil shell breakpoint'lerini Wave 00 envanteriyle karşılaştır; desktop davranışı bozmadan migration sınırını belirle.
- [x] Mobil Messages'ı doğrudan Wave 20 conversation/history/composer/pending/realtime state sahipliğine bağla; ikinci store, socket veya API fetch zinciri oluşturma.
- [x] Wave 05 minimal mobile header/menu sözleşmesini tüket; Messages içine global bottom navigation veya yeni social drawer ekleme.
- [x] Mobil breakpoint'te conversation listesi ile açık conversation'ı aynı anda yan yana göstermeme; başlangıçta liste, seçimde yalnız conversation yüzeyi göster.
- [x] `/messages?targetUserId=` friend handoff'unda mevcut conversation veya güvenli first-message state'ini doğrudan aç; non-friend/feature-disabled sonucunda boş composer gösterme.
- [x] Conversation seçimi ve mobil geri aksiyonunu mevcut route/query/state mekanizmasıyla yönet; tarayıcı back davranışını tuzağa düşürme veya undocumented route üretme.
- [x] Listeye geri dönüldüğünde search/filter, list scroll, unread/count ve seçili row bağlamını koru; tüm conversation listesini gereksiz yeniden yükleme.

*Açık conversation, keyboard ve touch:*
- [x] Açık conversation header'ını geri, avatar/display name, izinli state ve küçük options menüsüyle minimal tut; call/video-call/search kontrolleri ekleme.
- [x] Message history'yi header ile composer arasında kalan yüksekliği kullanan tek scroll container olarak kur; body/history arasında çift scroll üretme.
- [x] Shared `DirectMessageComposer` yüzeyini mobile keyboard üstünde görünür tut ve `env(safe-area-inset-bottom)` alanını uygula; son mesaj composer arkasında kalmasın.
- [x] Keyboard/orientation/visual viewport değişiminde last-message veya kullanıcının history scroll anchor'ını koru; header büyümesi ve viewport jump'ı minimumda tut.
- [x] Conversation değişiminde draft'ı Wave 20'nin conversation-specific key/state'iyle izole et; bir arkadaşın metnini diğer conversation'a taşıma.
- [x] Conversation row, back, send, retry ve options işlemlerinde minimum `44×44px` touch target ile uzun press davranışının keyboard/menu karşılığını sağla.
- [x] Report/block/delete-local-view gibi mevcut secondary işlemleri mobile options sheet/menu'de sun; unavailable veya belgelenmemiş aksiyonu sırf menü doldurmak için ekleme.

*RoomInvite entegrasyonu ve mobil state'ler:*
- [x] `DirectMessageList` içindeki RoomInvite öğesini Wave 19 canonical `RoomInviteCard` state/action sahipliğini tüketen structured card olarak render et; normal text message'a parse etme.
- [x] Invite kartında yalnız gerçek Room title/host/thumbnail/participant count alanlarını göster ve tek uygun CTA'yı live/accepted capability sonucuna göre sun.
- [x] Live, ended, full, expired/revoked, banned, private-grant ve access-unavailable sonuçlarını Social Hub/Room ile aynı invite id/state üzerinden göster; DM kartı access policy'yi bypass etmesin.
- [x] Conversation/list loading, send pending/failed, reconnecting, friendship read-only ve invite unavailable state'lerini mobilde ilgili lokal yüzeyde göster; tam ekran spinner ile bağlamı silme.
- [ ] Liste → conversation → geri, keyboard, options sheet ve invite CTA akışlarında heading/DOM sırası, focus transfer/restore, screen-reader labels ve kontrollü live-region davranışını doğrula — test ve manuel QA toplu tura ertelendi.
- [ ] Desteklenen mobil/tablet viewport'larında long message/invite, safe-area, keyboard ve reduced-motion ile yatay overflow/layout shift olmadığını ve realtime update'in player dışı geniş rerender üretmediğini doğrula — test ve manuel QA toplu tura ertelendi.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Mobile Messages açılmaz; auth öncesi DM/invite data veya socket yüklenmez ve güvenli return intent korunur.
- [x] Member state — Confirmed friend conversation list/history/composer ve izinli RoomInvite işlemleri ortak authority ile çalışır.
- [x] Host state — Host normal member DM davranışını kullanır; host olduğu Room'a ait invite kartı da aynı canonical invite state'ini tüketir.
- [-] Admin state — Admin'e özel mobil inbox veya DM/invite bypass'ı yoktur; kendi member conversation'ları dışında erişim verilmez.
- [x] Loading state — Liste, conversation, history, older messages ve send loading durumları mobil geometriyi koruyan lokal state'lerdir.
- [x] Empty state — No conversations, no search result, no selected/first message ve no messages durumları fake friend veya global search üretmez.
- [x] Error state — List/history/send/retry/options/invite hataları ilgili mobil yüzeyde message/draft/scroll bağlamını korur.
- [x] Denied / unavailable state — Feature-disabled, non-friend, block, read-only, ended/full/banned/expired invite ve session sonucu güvenli kapalı state'e dönüşür.
- [x] Reconnecting state — Liste/history/draft/scroll ve invite kartları görünür kalır; ortak snapshot/event reconcile sonucu duplicate üretmez.
- [x] Mobile davranışı — List → conversation → geri, minimal header, keyboard-safe composer, safe-area, touch ve tek scroll container kaynak kodda tamamlandı; runtime QA toplu tura ertelendi.
- [x] Klavye / focus davranışı — Row/back/composer/retry/menu/invite CTA için focus aktarımı ve shared overlay restore sözleşmesi kaynak kodda tamamlandı; fiziksel/screen keyboard QA toplu tura ertelendi.
- [x] Reduced motion davranışı — Conversation/message/invite/sheet geçişleri azaltılır; pending/error/reconnect bilgisi statik anlaşılır kalır.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`) — 2026-08-11.
- [x] Frontend build geçiyor (`npm run build`) — 2026-08-11; mevcut 500 kB chunk uyarısı non-blocker.
- [ ] Frontend Vitest suite'i geçiyor (`npm run test`) — Wave 21 testi hazırlandı, kullanıcı talimatıyla çalıştırılmadı.
- [ ] Mobil navigation testi liste → conversation → geri akışını, deep-link target'ı, list search/scroll korumasını ve global bottom nav bulunmadığını doğruluyor — Playwright senaryosu hazırlandı, çalıştırılmadı.
- [ ] Keyboard/layout testi visual viewport, safe-area, orientation, tek history scroll container ve composer/last-message görünürlüğünü doğruluyor — kaynak testi ve QA senaryosu hazırlandı, çalıştırılmadı.
- [ ] Shared-state testi mobilin Wave 20 send/pending/retry/realtime store'unu kullandığını ve ikinci socket/fetch zinciri oluşturmadığını doğruluyor — kaynak testi hazırlandı, çalıştırılmadı.
- [ ] Invite testi canonical card'ın live/ended/full/expired/revoked/banned/private/access sonuçlarını Social/Room state'iyle tutarlı gösterdiğini doğruluyor — kaynak/E2E senaryosu hazırlandı, çalıştırılmadı.
- [ ] Accessibility testi list/conversation focus transferi, options sheet restore, touch target, DOM/live-region, overflow ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor — E2E/manual QA hazırlandı, çalıştırılmadı.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave21-tests.md` Türkçe olarak oluşturuldu.
- [x] QA dosyası conversation list/select/back, friend deep-link, first message, send/retry ve invite live Join success akışlarını gerçek mobil viewport'ta staging'de evet/hayır ile doğrulayacak maddeleri içeriyor; uygulanması ertelendi.
- [x] QA dosyası keyboard aç/kapat, orientation, reconnect, read-only/non-friend, send failure ve invite ended/full/banned/expired/access failure durumlarını kontrol edecek maddeleri içeriyor; uygulanması ertelendi.
- [x] QA dosyası list filter/scroll, conversation draft/history scroll ve last-message bağlamının navigation/keyboard/realtime sırasında korunmasını doğrulayacak maddeleri içeriyor; uygulanması ertelendi.
- [x] QA dosyası safe-area, touch, physical keyboard, screen reader, focus restore, overflow, kontrast ve reduced-motion kontrollerini içeriyor; uygulanması ertelendi.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Görsel referanstaki tek ekranlı conversation listesi → açık conversation → geri akışı kaynak kompozisyonunda korunuyor; mobil runtime QA ertelendi.
- [x] Global bottom nav, ayrı mobile DM store'u veya ikinci realtime bağlantısı eklenmedi.
- [x] Görsel odak hiyerarşisi kaynak kompozisyonunda doğru — Açık conversation/history baskın, header minimal, composer stabil, invite kartı kontrollü.
- [x] Tipografi hiyerarşisi mevcut token sistemiyle korundu — Conversation identity/header Manrope, messages/metadata/actions Inter kullanıyor.
- [x] Accent `#FF625A` selected/focus/primary ile sınırlı; sent bubbles veya invite kartının geniş yüzeyi parlak accent değil.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız shared geçici options sheet/feedback katmanında; kalıcı history/composer/invite card okunabilir mat yüzeyde.
- [x] Sahte attachment/plus, call/video-call, presence, invite metadata veya mobile-only gesture yok.
- [x] Invite kartı Social Hub ve Room access ile aynı canonical `RoomInviteCard` ve lifecycle sonucunu tüketiyor; grant/ban/capacity bypass etmiyor.
- [x] `prefers-reduced-motion` destekleniyor.
- [ ] WCAG AA kontrast hedefi list, header, messages, composer, invite ve state yüzeylerinde sağlandı.
- [ ] Klavye focus görünür; list/conversation, sheet ve invite handoff'unda kaybolmuyor.
- [ ] Safe-area, keyboard, long message/invite ve desteklenen viewport'larda yatay overflow, çift scroll veya composer örtüşmesi yok.
- [x] Mevcut fonksiyonlar korundu — friends-only DM, durable send/idempotency, realtime, invite lifecycle, Room access ve mobile shell kontratları değişmedi.
- [x] Görsel referanstaki mor accent, attachment kontrolü ve temsili oda verileri canonical kapsam dışında bırakıldı; açıklanmamış sapma yok.

---

**Çıkış kriterleri:**
- [x] Mobile Messages aynı Wave 20 state/store'u üzerinde list → conversation → geri akışını kaynak implementation'da tamamlar; runtime doğrulama toplu tura ertelendi.
- [ ] Keyboard, safe-area, composer, history scroll ve touch davranışları desteklenen mobil/tablet viewport'larda stabil çalışır.
- [x] Structured RoomInvite kartları kaynak implementation'da Social Hub/Room ile aynı canonical lifecycle ve access sahipliğini tüketir; runtime doğrulama toplu tura ertelendi.
- [ ] Guest/member, loading/empty/error/denied/reconnect/read-only, keyboard ve reduced-motion senaryoları staging'de doğrulanmıştır.
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave21-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave 21'i onayladı ve Codex durdu

---

### Wave 21 Sonucu — 2026-08-11

> **Sonuç:** Frontend implementation tamamlandı; QA/test kapanışı kullanıcı talimatıyla bütün Wave'lerin sonundaki toplu test turuna ertelendi. Wave 21 QA-closed değildir.

- Mobil Messages aynı Wave 20 conversation/history/composer/realtime sahipliği üzerinde tek ekranlı liste → conversation → geri akışına taşındı. Search/filter/unread/list state'i yerel korunur; friend `targetUserId` mevcut conversation veya güvenli first-message state'ine bağlanır.
- Visual viewport/orientation ölçümü, safe-area padding, tek history scroller, composer görünürlüğü, scroll-anchor ve minimum 44×44 touch hedefleri Wave 21 mobil stil sınırında uygulandı.
- Minimal mobile header ve shared bottom sheet/modal üzerinden View profile, Report, Block ve local Delete seçenekleri bağlandı; call, attachment, global bottom nav veya yeni capability eklenmedi.
- DM timeline, normal mesaj metni parse etmek yerine mevcut canonical `RoomInviteCard` bileşenini tüketir. Yalnız gerçek host eşleşmesi ve participant count/limit bağlamı eklendi; Social/Room lifecycle, capability ve access policy değiştirilmedi.
- Frontend `npm run typecheck` ve `npm run build` geçti. Build mevcut 500 kB üzeri chunk-size uyarısını non-blocker olarak koruyor.
- `tests/wave21-messages-mobile.test.ts`, `e2e/wave21-messages-mobile.spec.ts` ve `tests/wave21-tests.md` hazırlandı; kullanıcı talimatıyla Vitest, Playwright, staging/manual QA ve Debug Checklist çalıştırılmadı/doldurulmadı.
- Frontend commitleri: `762e8f2`, `3014c9d`, `9143c62`. Backend, database, API, auth/session, realtime event ve dependency kontratları değiştirilmedi. Wave 22 başlatılmadı.

---

### Wave 22 — Utility, Legal, Support ve System Pages

**Durum:** Frontend implementation ve test hazırlığı tamamlandı; typecheck/build geçti. Hazırlanan Vitest, Playwright ve manuel QA kullanıcı talimatıyla toplu test turuna ertelendi; QA-closed değildir.

**Hedef:**
Terms, Privacy, Community Guidelines, Support ve Not Found yüzeyleri gerçek yayınlanmış içeriği güvenli, okunabilir ve responsive ortak Utility template ile sunar.

**Neden bu sırada geliyor:**
Shell, state ve primitive sistemi hazırdır; admin content migration'dan önce public render sözleşmesi tek doğru kaynak olarak sabitlenmelidir.

**Bağımlılıklar:**
- Wave 03–05 ortak state ve desktop/mobile shell altyapıları tamamlanmış olmalıdır.
- Mevcut PlatformContent draft/published kontratı ve canonical legal metin korunmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/NEXT_TASKS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 22 — Utility, Legal, Support ve System Pages`
- `Roads/project-foundation/04-ui-ux-definition/site-map.md`
  - `## 12. Static / Legal / Support Surfaces`
- `Design/UTILITY_PAGE_TEMPLATE.MD`
  - `## 4. Desktop Ana Kompozisyon`
  - `## 11. Mobil Ana Kompozisyon`
  - `## 18. İçerik Kaynağı ve Yayınlama`
  - `## 35. SEO ve Metadata`
  - `## 36. İçerik Güvenliği`
  - `## 37. Legal İçerik Bütünlüğü`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/PlatformContentPage.tsx`, `Vibe frontend/src/pages/NotFoundPage.tsx`, `Vibe frontend/src/content/contentApi.ts`, `Vibe frontend/src/lib/routes.ts`, `Vibe frontend/src/components/AppShell.tsx`, `Vibe frontend/src/styles/pages.css`, `Vibe frontend/src/styles/primitives.css`, `Vibe frontend/src/styles/responsive.css` ve mevcut backend `src/routes/content.ts` published-only kontratı.

**Görsel referans:**
- Görsel 1: Utility Desktop — global shell, üst bağlam, `760–840px` okuma sütunu, başlık/meta ve uzun form içerik.
- Görsel 2: Terms/Privacy/Guidelines için heading, anchor, link, liste ve callout varyantları ile loading/error/cached durumları.
- Görsel 3: Support, mobile long-form ve Not Found yüzeyleri; uzun URL, safe-area, text scaling ve deep-link örnekleri.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki legal metin, tarih, support kanalı, claim, link, kategori ve metadata temsilîdir; yalnız yayınlanmış PlatformContent response'u ve canonical legal/support içeriği gerçek ürün davranışı olarak kullanılabilir.

---

**Kapsam içi:**
- `760–840px` okuma sütunu, semantik headings, link/list/callout ve gerçek last-updated.
- Safe rich-content render, published-only public route, XSS/unsafe-link sınırları ve cached/error davranışı.
- Mobil okunabilirlik, anchors/deep links, metadata ve ortak 404/Support uyarlaması.

**Kapsam dışı:**
- Legal metin, tarih, privacy claim veya Community Guidelines hükmü yazma/değiştirme.
- Sahte support email/form/yanıt süresi, yeni Support Center, ticket sistemi veya live chat.
- Yeni CMS, PlatformContent modeli, publish workflow, theme switcher, System Info route'u veya backend/database değişikliği.
- Admin draft editor/publish yüzeyi migration'ı; yalnız Wave 24'te ve bu Wave'in renderer sözleşmesini tüketerek yapılır.
- Genel component consolidation veya print/export özelliğini sırf görselde olduğu için eklemek.

---

**Implementation kontrol listesi:**

*Utility layout ve içerik hiyerarşisi:*
- [x] `PlatformContentPage.tsx`, `NotFoundPage.tsx`, `contentApi.ts`, utility route kayıtları ve ilgili CSS sahipliklerini Wave 00 envanteriyle eşleştir.
- [x] Terms, Privacy, Community Guidelines ve Support için tek Utility layout sınırı kur; tek kullanımlık legal sayfa kopyaları veya route'a özel shell üretme.
- [x] Utility route'larını Wave 04–05 global shell varyantıyla hizala ve mevcut Social Rail exclusion'ını koru; utility'ye özel ana navigation ya da mobil bottom nav ekleme.
- [x] Ana long-form içerik sütununu desktop'ta `760–840px` ile sınırla; çevre container genişlese bile satır uzunluğunu kontrolsüz büyütme.
- [x] Üst bağlamda gerçek geri davranışı, tek `h1`, page title ve published/last-updated metadata sırasını semantik olarak kur; published gövdede ayrı intro yoksa UI metni uydurma.
- [x] Başlık, paragraf, sıralı/sırasız liste, güvenli link ve belgede gerçekten kullanılan callout öğelerini aynı okunabilir spacing/typography sistemiyle render et.

*Published-only render, navigation ve güvenlik:*
- [x] `getPublicPlatformContent(pageKey)` sonucunu public sayfanın tek authoritative içerik kaynağı yap; admin draft alanlarını public state veya DOM'a taşıma.
- [x] Published response başlık/body/tarih alanlarını kayıpsız göster; UI uğruna legal cümle, sıra, tarih veya claim'i normalize ederek değiştirme.
- [x] Canonical olmayan hard-coded legal placeholder/fallback metni yayınlanmış içerik gibi göstermeyi kaldır; yalnız gerçekten doğrulanmış cached/latest-published kopya varsa açık güncellik bilgisiyle kullan.
- [x] Rich-content parser'ı raw HTML/script/iframe çalıştırmadan güvenli block modeline dönüştür; text içeriğini escaped DOM olarak üret.
- [x] Heading ID'lerini içerikten stabil ve çakışmasız üret; table-of-contents/anchor linklerini aynı ID'lere bağla ve route değişiminde stale anchor taşımama.
- [x] Link protocol'ünü allowlist ile doğrula; harici linklerde güvenli `rel`/target davranışı kullan ve `javascript:`/unsafe URL'leri interaktif link olarak render etme.
- [x] Refresh sırasında mevcut published/cached belgeyi ekranda tut; yeni response geldiğinde atomik güncelle ve legal metni loading blink ile boşaltma.
- [x] `/terms#...`, `/privacy#...` gibi deep linklerde sticky-header offset, browser back/forward, hedef heading focus'u ve reduced-motion scroll davranışını uygula.

*Support, system state, metadata ve erişilebilirlik:*
- [x] Support uyarlamasında yalnız published içerikte bulunan gerçek kategori, bağlantı ve iletişim yöntemlerini göster; olmayan Support Center, email, form veya SLA CTA'sı üretme.
- [x] `NotFoundPage.tsx` yüzeyini ortak Utility/system diliyle gerçek Home/Discover/Support hedeflerine bağla; invalid utility route'u application crash'e dönüştürme.
- [x] Her public utility route için gerçek page title, description, canonical URL, language ve robots kararını route metadata'sına bağla; draft veya admin preview'ı indexletme.
- [x] Initial loading, published-content-unavailable, fetch/parser error ve retry state'lerini Wave 03 sistemiyle ayır; zorunlu legal içerik yoksa fake copy yerine güvenli readiness/error yüzeyi göster.
- [x] Mobilde `16–20px` kenar, minimum `16px` body, rahat line-height, URL/list wrap, safe-area ve text zoom ile yatay overflow olmadan continuous legal flow'u koru.
- [x] Main/nav landmarks, heading sırası, skip/anchor erişimi, link names, focus visibility, WCAG AA, screen-reader bölüm okuması, reduced-motion ve uzun-belge rerender performans sınırlarını implementation ve hazırlanmış test kapsamına bağla.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Published utility ve Not Found içerikleri auth gerektirmeden okunur; private/draft/admin metadata sızmaz.
- [x] Member state — Aynı published Utility template'i global shell bağlamında kullanır; member'a farklı legal metin üretilmez.
- [x] Host state — Host'a özgü utility içeriği yoktur; host normal member/public published sözleşmesini kullanır.
- [-] Admin state — Public route'ta admin'e draft preview veya edit kontrolü gösterilmez; admin content migration Wave 24'e aittir.
- [x] Loading state — Shell ve okuma geometrisi korunur; title/meta/text skeleton'ları tam sayfa spinner olmadan gösterilir.
- [x] Empty state — Zorunlu legal içerik eksikliği normal empty değildir; fake placeholder üretilmez.
- [x] Error state — Fetch/parser/unsafe-content hatası teknik detay sızdırmadan retry ve varsa doğrulanmış cached-published içerik sunar.
- [x] Denied / unavailable state — Draft-only, unpublished, invalid page key veya route sonucu public içeriği sızdırmadan unavailable/404 yüzeyine dönüşür.
- [-] Reconnecting state — Utility içerik HTTP/cached akışıdır; realtime reconnect UI eklenmez, refresh sırasında mevcut published içerik korunur.
- [x] Mobile davranışı — Tek kolon long-form, minimal header, anchors, wrap, safe-area ve text scaling sınırları uygulandı.
- [x] Klavye / focus davranışı — Back, table of contents, anchors, links, retry ve Support actions mantıklı sıra ile görünür focus taşır.
- [x] Reduced motion davranışı — Smooth anchor azaltılır; içerik ve feedback statik anlaşılır kalır.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [ ] Frontend Vitest suite'i geçiyor (`npm run test`)
- [ ] Utility route testi Terms/Privacy/Guidelines/Support ve wildcard Not Found route'larının doğru template/metadata ile açıldığını doğruluyor.
- [ ] Content render testi published-only response, heading/list/link/callout DOM'u, stable anchor ID ve legal text sırasının değişmediğini doğruluyor.
- [ ] Security testi draft alanı, raw HTML/script/iframe, unsafe protocol ve canonical olmayan fallback legal copy'nin public DOM'da bulunmadığını doğruluyor.
- [ ] State testi initial load, cached refresh, unpublished/unavailable, fetch/parser failure, retry ve 404/Support handoff davranışını doğruluyor.
- [ ] Responsive/accessibility testi heading/main/nav, anchor focus/back, text zoom, long URL/list, safe-area, WCAG AA ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave22-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası Terms, Privacy, Guidelines, Support ve Not Found success/route/anchor akışlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası unpublished/missing content, fetch/parser failure, retry ve cached refresh sırasında fake/draft/legal copy sızıntısı olmadığını kontrol ediyor.
- [x] QA dosyası unsafe link/raw HTML örneklerinin çalışmadığını, external link güvenliğini ve gerçek published date/metadata gösterimini doğruluyor.
- [x] QA dosyası desktop/mobil text zoom, long URL/list, keyboard, screen reader, focus, contrast, safe-area ve reduced-motion kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [ ] Görsel referanstaki utility shell, context, title/meta ve `760–840px` long-form sütun ilişkisi korunuyor.
- [ ] Legal/Support sayfaları dashboard veya card koleksiyonuna dönüşmedi; içerik okuma odağı baskın.
- [ ] Görsel odak hiyerarşisi doğru — H1 ve belge içeriği baskın, metadata/anchors/related actions ikincil.
- [ ] Tipografi hiyerarşisi doğru — H1/H2/H3 Manrope, body/link/list/meta Inter kullanıyor.
- [ ] Accent `#FF625A` link/focus/selected anchor ile sınırlı; uzun metin veya callout yüzeyine yayılmıyor.
- [ ] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [ ] Cam efekti kalıcı long-form yüzeyde kullanılmadı; varsa yalnız geçici feedback katmanında kaldı.
- [ ] Sahte legal claim, tarih, Support Center, email/SLA, system info veya draft status yok.
- [ ] Public renderer draft/admin metadata, raw HTML, unsafe protocol veya script çalıştırmıyor.
- [ ] `prefers-reduced-motion` destekleniyor.
- [ ] WCAG AA kontrast hedefi long-form text, links, metadata, callout ve state yüzeylerinde sağlandı.
- [ ] Klavye focus görünür; anchor jump sonrası hedef heading ve browser back bağlamı korunuyor.
- [ ] Desktop/mobil text zoom, long heading/URL/list ve safe-area sırasında yatay overflow yok.
- [ ] Mevcut fonksiyonlar korundu — published-only PlatformContent, custom routes, canonical legal text, shell exclusion ve 404 hedefleri değişmedi.
- [ ] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [ ] Terms, Privacy, Guidelines ve Support yalnız gerçek published/canonical içeriği ortak güvenli Utility renderer ile gösterir.
- [ ] Long-form headings, links, lists, anchors, metadata ve mobile text scaling güvenli ve okunabilir çalışır.
- [ ] Draft/XSS/unsafe-link/fake-legal sınırları ile loading/cached/error/unavailable/404 davranışları doğrulanır.
- [ ] Guest/member, desktop/mobil, keyboard, screen-reader ve reduced-motion senaryoları staging'de doğrulanmıştır.
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave22-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave 22'yi onayladı ve Codex durdu

---

### Wave 22 Sonucu — 2026-08-11

Frontend implementation tamamlandı; Wave 22 QA-closed değildir. `PlatformContentPage.tsx` dört public content route'u için tek Utility layout ve published-only state sahipliğine geçirildi. Canonical olmayan hard-coded legal fallback/intro/claim kopyaları kaldırıldı; yalnız başarılı `getPublicPlatformContent(pageKey)` response'u veya aynı oturumda başarıyla doğrulanmış published cache render edilir. `SafeRichTextRenderer.tsx` semantik heading/paragraph/ordered-unordered list/callout block modeli, stabil ve çakışmasız anchor ID, escaped raw HTML ve `http`/`https`/`mailto`/internal/anchor allowlist'i sağlar; unsafe protocol interaktif link olmaz.

Utility route'ları tek `h1`, güvenli Back/Support context bar, gerçek published/updated metadata, optional heading-derived table of contents, deep-link focus ve reduced-motion scroll davranışıyla Wave 04–05 shell'ini tüketir. Route metadata'sına description/canonical/robots eklendi; Utility public route'ları `index,follow`, wildcard Not Found `noindex,nofollow` kullanır. `NotFoundPage.tsx` gerçek Home/Discover/Support hedefleriyle ortak matte Utility/system diline taşındı. `pages.css` `--container-reading` (`840px`) sınırı, Manrope/Inter hiyerarşisi, continuous long-form spacing, link/callout, mobile safe-area/text wrap ve no-overflow sınırlarını tanımlar. Backend, database, API, auth/session, realtime, dependency ve publish workflow değiştirilmedi.

Frontend commitleri `cc90015` (implementation) ve `ded2b09` (test hazırlığı). Hazırlanan doğrulama paketi: `Vibe frontend/tests/wave22-utility.test.tsx`, `Vibe frontend/e2e/wave22-utility.spec.ts` ve kök `tests/wave22-tests.md`. Kullanıcının bütün Wave testlerini sonda topluca yapma talimatıyla Vitest, Playwright, staging ve manuel QA çalıştırılmadı/doldurulmadı. Frontend typecheck ve production build iki implementation diliminden sonra geçti; mevcut 500 kB üzeri chunk uyarısı non-blocker olarak kaldı. Wave 22 kullanıcı onayı ve toplu QA bekler; Wave 23 başlatılmadı.

---

### Wave 23 — Admin Design Foundation

**Durum:** Frontend implementation ve test hazırlığı tamamlandı; typecheck/build geçti. Hazırlanan Vitest, Playwright, staging/manual QA ve kullanıcı onayı toplu test turuna ertelendi; QA-closed değildir. Wave 24 başlatılmadı.

**Hedef:**
Admin için ayrı operasyonel shell, sidebar, toolbar, tablo, metric, badge, filter ve detail overlay ailesi gerçek yetki sınırlarıyla tamamlanır.

**Neden bu sırada geliyor:**
Public design system ve content render hazırdır; büyük admin monoliti gerçek yüzeylere taşınmadan önce ortak operasyon primitive'lerine ayrılmalıdır.

**Bağımlılıklar:**
- Wave 01–03 token, ortak primitive ve state altyapıları tamamlanmış olmalıdır.
- `/admin` role gate, CSRF ve audit davranışları korunmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/NEXT_TASKS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 23 — Admin Design Foundation`
- `Roads/project-foundation/04-ui-ux-definition/admin-panel-ux-spec.md`
  - `## 5. Admin Navigation Structure`
  - `## 14. Search and Filtering Experience`
  - `## 15. Action Confirmation UX`
- `Design/ADMIN_OPERATIONAL_TEMPLATE.md`
  - `## 3. Kilitli Kompozisyon`
  - `## 7. Bileşen Yorumu`
  - `## 9. Responsive Davranış`
  - `## 16. Admin Güvenlik Sınırları`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/AdminShellPage.tsx`, `Vibe frontend/src/admin/adminApi.ts`, `Vibe frontend/src/styles/admin.css`, `Vibe frontend/src/styles/responsive.css`, mevcut `/admin` custom route, auth role gate ve ortak Wave 01–03 token/primitive/state altyapısı.

**Görsel referans:**
- Görsel 1: Admin Desktop Foundation — sabit sidebar, üst context/toolbar ve geniş operasyonel içerik alanı.
- Görsel 2: Metric cards, status badges, filter/search bar, data table/list ve pagination state varyantları.
- Görsel 3: Detail side panel, destructive confirmation modal, loading/empty/error/refresh ve dar laptop/tablet kompozisyonları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki admin bölümleri, metrikler, sayılar, kullanıcılar, loglar, status ve action setleri temsilîdir; yalnız mevcut `/admin` role gate, API response, CSRF ve audit kontratları foundation davranışını belirleyebilir.

---

**Kapsam içi:**
- Admin-only shell/sidebar/toolbar ve route/section navigation.
- Reusable data table/list, metric card, status badge, filters, pagination ve detail side panel/modal.
- Admin loading/empty/error/refresh davranışı ile dar laptop/tablet erişimi.

**Kapsam dışı:**
- Overview, Users, Rooms, Reports, Moderation, Operations, Categories ve Platform Content gerçek data migration'ı; Wave 24'e aittir.
- Analytics, system logs, general DM browser, friendship graph, invite manager veya yeni admin role/capability.
- Backend/admin endpoint, database, CSRF, evidence audit veya last-active-admin kuralı değişikliği.
- Public application shell'ini admin içinde yeniden kullanmak ya da admin kontrollerini normal navigation'a açmak.
- Wave 25 genel consolidation işini admin foundation adına genişletmek.

---

**Implementation kontrol listesi:**

*Shell, navigation ve toolbar foundation:*
- [x] `AdminShellPage.tsx`, `adminApi.ts`, `admin.css` ve mevcut admin section/state/action sahipliklerini Wave 00 envanteriyle eşleştir; henüz gerçek surface render'larını taşımama.
- [x] `/admin` girişinde mevcut authenticated `UserRole.admin` gate'ini ve normal navigation'dan gizlilik kararını koru; frontend görünürlüğünü authorization yerine kullanma.
- [x] Admin foundation sınırlarını shell, navigation, toolbar, metric, table/list, status, filter/pagination, detail ve confirmation olarak tanımla; public primitive'i yalnız canonical olarak ortaksa tüket.
- [x] Desktop admin shell'ini kontrollü sabit genişlikte sidebar, üst context/toolbar ve kalan alanı kullanan operasyonel content bölgesi olarak kur.
- [x] Sidebar'ı yalnız mevcut veya doğrulanmış admin yüzey registry'sinden label-first section navigation ile render et; Messages, friendship graph, analytics veya logs için dead entry ekleme.
- [x] Active section, page title/description, local search/filter/actions ve refresh bilgisini taşıyan toolbar slotlarını tanımla; global user search üretme.
- [x] Dar laptop/tablet breakpoint'inde sidebar'ı erişilebilir drawer/collapsible navigation'a dönüştür; desktop sidebar ve drawer'ı aynı anda aktif bırakma.

*Operasyon primitive'leri:*
- [x] Reusable admin data table/list sınırında semantic header/body/row/cell, stable row key, empty/loading/error slot ve row action alanlarını ayır.
- [x] Table column tanımında responsive priority ve accessible label desteği sağla; veri hücrelerini card koleksiyonuna veya belirsiz icon-only controls'a dönüştürme.
- [x] Metric card primitive'ini gerçek label, value, kısa operational context ve opsiyonel warning state'iyle sınırla; sparkline/yüzde/trend verisi gerektirme.
- [x] Status badge primitive'inde metinsel state ile neutral/success/warning/danger tone eşlemesini ayır; status anlamını yalnız renge bırakma.
- [x] Search/filter toolbar primitive'inde görünür label, gerçek option seti, clear/reset ve lokal pending state'i sun; unsupported filter değeri üretme.
- [x] Pagination adapter'ını mevcut endpoint'in cursor/page/limited-list gerçekliğine göre çalışabilecek şekilde sınırla; client-side total veya next-page tahmini yapma.
- [x] Detail side panel/modal foundation'ında labelled heading, metadata/actions slotları, Escape, focus trap/restore ve açık paneli refresh sırasında koruma davranışını uygula.
- [x] Destructive confirmation modal'ında action, hedef, etki, varsa gerçek reason alanı ve güvenli default focus'u açıkça sun; mutation'ı confirmation öncesi başlatma.

*State, responsive ve güvenlik foundation'ı:*
- [x] Initial loading için metric/table skeleton; empty için kısa operasyonel açıklama; error için lokal retry; mutation için yalnız ilgili control loading bileşenlerini Wave 03 state sistemiyle tanımla.
- [x] Manual/automatic refresh davranışında mevcut table data, scroll, filters ve açık detail paneli koru; bütün admin shell'i loading'e geri döndürme.
- [x] Sidebar, toolbar, filters, table rows/menus, pagination, detail ve modal için keyboard sırası, en az `2px` visible focus, live-region ve screen-reader semantics'i doğrula.
- [x] Dar laptop/tablet'te metric grid, table priority/yatay scroll veya summary davranışı, drawer, modal ve touch targets ile kritik operasyon erişimini koru.
- [x] Foundation'ın mutation katmanında mevcut API client/CSRF'yi tüketmesini, audit gerektiren action'ı atlamamasını ve evidence/last-active-admin/role sınırlarını UI primitive'inde gevşetmemesini doğrula.

---

**State ve rol kontrol listesi:**
- [x] Guest state — `/admin` içeriği ve foundation data fetch'i açılmaz; güvenli unauthorized/auth handoff uygulanır.
- [x] Member state — Normal member admin shell/navigation/data göremez; wrong-role sonucu bilgi sızdırmayan denied yüzeyi taşır.
- [x] Host state — Host rolü admin yetkisi değildir; normal member ile aynı denied davranışı kullanır.
- [x] Admin state — Authenticated admin shell, navigation ve ortak operation primitive'lerini gerçek yetki sınırlarıyla kullanabilir.
- [x] Loading state — Shell/navigation görünür; metric/table/detail ve mutation loading durumları lokal, stabil skeleton/pending state taşır.
- [x] Empty state — Table/list boşluğu kısa ve operasyonel açıklanır; fake row/metric veya gereksiz CTA üretilmez.
- [x] Error state — Shell, list, detail, filter/pagination ve mutation hataları ilgili alanda retry/bağlam koruması sunar.
- [x] Denied / unavailable state — Guest, wrong-role, session-expired veya endpoint unavailable sonucu admin verisini sızdırmadan güvenli kapalı state'e dönüşür.
- [-] Reconnecting state — Admin foundation realtime ürün yüzeyi eklemez; refresh bağlantı hatasında mevcut veriyi koruyan degraded/error davranışı sunar.
- [x] Mobile davranışı — Admin mobile-first değildir; yine de dar laptop/tablet drawer, önemli kolonlar, detail ve kritik actions kullanılabilir kalır.
- [x] Klavye / focus davranışı — Sidebar/drawer, toolbar, table, menu, pagination, detail ve confirmation tam keyboard/focus trap/restore taşır.
- [x] Reduced motion davranışı — Drawer, row, detail/modal ve refresh geçişleri azaltılır; loading/error/status anlamı statik korunur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [ ] Frontend Vitest suite'i geçiyor (`npm run test`) — test kullanıcı talimatıyla toplu tura ertelendi.
- [ ] Admin gate/shell testi guest/member/host/admin ayrımını, normal nav gizliliğini ve section registry dışı dead entry bulunmadığını doğruluyor.
- [ ] Primitive testi metric/status/table/filter/pagination/detail/confirmation slot ve semantic davranışlarını gerçekçi fixture'larla doğruluyor.
- [ ] State testi initial loading, empty, list/detail error, mutation pending/failure ve refresh sırasında data/scroll/panel korumasını doğruluyor.
- [ ] Security testi confirmation öncesi mutation olmadığını, CSRF API client'ının korunduğunu ve evidence/audit/last-active-admin sınırının primitive tarafından bypass edilmediğini doğruluyor.
- [ ] Responsive/accessibility testi desktop/dar laptop/tablet navigation, table priority/scroll, focus trap/restore, visible focus, contrast ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

> Wave 23 Vitest ve Playwright kaynakları hazırlandı; kullanıcı talimatıyla bu turda çalıştırılmadı. Bu maddeler toplu test kanıtı oluşana kadar açık kalır.

---

**Manuel QA dosyası:**
- [x] `tests/wave23-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası admin gate, desktop sidebar/toolbar, section navigation ve foundation primitive success durumlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası guest/member/wrong-role/session-expired, list/detail failure, empty, refresh ve mutation pending/failure foundation durumlarını kontrol ediyor.
- [x] QA dosyası dead admin entry, global search, DM/friend graph/log surface ve confirmation öncesi mutation bulunmadığını doğruluyor.
- [x] QA dosyası desktop/dar laptop/tablet drawer, table, detail/modal, keyboard, screen reader, focus, contrast ve reduced-motion kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**

> Staging/görsel/etkileşim kanıtı kullanıcı talimatıyla toplu QA turuna ertelendi; kanıt olmadan aşağıdaki maddeler işaretlenmedi.
- [ ] Görsel referanstaki sidebar → toolbar → operation content kompozisyonu korunuyor.
- [ ] Admin foundation public app dashboard'una veya dekoratif analytics paneline dönüşmedi.
- [ ] Görsel odak hiyerarşisi doğru — Active operation content baskın, navigation/filters destekleyici, destructive actions kontrollü.
- [ ] Tipografi hiyerarşisi doğru — Admin page/section heading Manrope, table/metric/filter/actions Inter kullanıyor.
- [ ] Accent `#FF625A` active nav, focus ve primary action'la sınırlı; status/destructive anlam yalnız accent'e bırakılmıyor.
- [ ] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [ ] Cam efekti yalnız geçici detail/modal katmanında; kalıcı admin shell/table/metric yüzeyleri mat ve taranabilir.
- [ ] Sahte metric, trend, status, admin section, analytics, logs, DM veya friendship data yok.
- [ ] Evidence, role, CSRF, audit ve last-active-admin güvenlik sınırları component ergonomisi uğruna gevşetilmedi.
- [ ] `prefers-reduced-motion` destekleniyor.
- [ ] WCAG AA kontrast hedefi navigation, metrics, table, badges, filters, panel ve modal yüzeylerinde sağlandı.
- [ ] Klavye focus görünür; drawer/detail/modal kapanışında doğru tetikleyiciye dönüyor.
- [ ] Desktop/dar laptop/tablet'te table/filter/detail sırasında kritik içerik kaybı veya sayfa geneli yatay overflow yok.
- [ ] Mevcut fonksiyonlar korundu — `/admin` gate, custom route, API client, CSRF, audit, evidence ve admin role kuralları değişmedi.
- [ ] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Admin shell/sidebar/toolbar foundation'ı yalnız mevcut admin yüzeylerini güvenli section navigation ile barındırabilir.
- [x] Metric, status, table/list, filters, pagination, detail ve confirmation primitive'leri bağımsız test edilebilir çalışır.
- [x] Loading/empty/error/refresh ile desktop/dar laptop/tablet ve keyboard/focus davranışları tutarlı sunulur.
- [ ] Role gate, CSRF, audit, evidence ve last-active-admin sınırları genişletilmeden otomatik/staging testlerinde doğrulanmıştır.
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave23-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave 23'ü onayladı ve Codex durdu

---

### Wave 23 Sonucu — 2026-08-11

- **Durum:** Frontend implementation ve test hazırlığı tamamlandı; Wave 23 QA-closed değildir. Vitest, Playwright, staging/manual QA, Debug Checklist ve açık kullanıcı onayı bütün Design Wave'lerin sonundaki toplu test turuna ertelendi.
- Doğrulanmış section registry, query-safe `/admin?section=...` navigation ve browser history senkronu kuruldu. Desktop label-first sidebar, dar laptop/tablet Drawer navigation ve lokal search/refresh toolbar foundation'ı mevcut admin role gate arkasında bağlandı; wrong-role denied yüzeyinden gereksiz rol bilgisi kaldırıldı.
- `AdminFoundation.tsx` içinde metric/status, semantic data table, filter/reset, contract-aware cursor/page/limited pagination, focus-trapped detail side panel ve güvenli default focus'lu destructive confirmation modal primitive'leri oluşturuldu. Initial loading/empty/error, preserved-data refresh ve mutation pending slotları Wave 03/shared overlay altyapısını tüketir.
- `admin-foundation.css` canonical tokenlar, üç mat derinlik katmanı, label-first navigation, 44px hit area, responsive table priority/yatay scroll, görünür focus ve reduced-motion sınırlarını uygular. Analytics, logs, Messages/DM browser, invites, friendship graph, sahte metric/trend ve mobile bottom navigation eklenmedi.
- Hazırlanan doğrulama paketi: `Vibe frontend/tests/wave23-admin-foundation.test.tsx`, `Vibe frontend/e2e/wave23-admin-foundation.spec.ts` ve kök `tests/wave23-tests.md`. Kullanıcı talimatıyla Vitest, Playwright, staging ve manuel QA çalıştırılmadı/doldurulmadı.
- Frontend `npm.cmd run typecheck` ve `npm.cmd run build` iki doğrulama turunda geçti. Build'deki mevcut 500 kB üzeri chunk uyarısı non-blocker olarak kaldı. Backend, database, API, auth/session, CSRF, audit, evidence, realtime, route, dependency ve last-active-admin kontratları değiştirilmedi.
- Wave 24 başlatılmadı; mevcut Overview/Users/Rooms/Reports/Moderation/Categories/Platform Content gerçek surface migration'ı Wave 24 kapsamında kaldı.

---
### Wave 24 — Admin Surface Migration ve Operasyonel State'ler

**Durum:** Frontend implementation ve test hazırlığı tamamlandı; toplu automatic/staging/manual QA ve kullanıcı onayı bekliyor. QA-closed değildir.

**Hedef:**
Mevcut Overview, Users, Rooms, Reports, Moderation, Operations, Categories ve Platform Content yüzeyleri ortak admin foundation'a güvenli biçimde taşınır.

**Neden bu sırada geliyor:**
Foundation Wave 23'te bağımsız doğrulanmıştır; şimdi gerçek monolitik içerik parça parça ortak yüzeylere geçirilebilir.

**Bağımlılıklar:**
- Wave 23 tamamlanmış olmalıdır.
- Wave 22'nin güvenli public Platform Content render/preview sözleşmesi yalnız Platform Content edit/publish yüzeyinin migration'ı için tamamlanmış olmalıdır.
- Existing admin REST, evidence audit ve last-active-admin güvenlik kuralları authoritative kalmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/NEXT_TASKS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 24 — Admin Surface Migration ve Operasyonel State'ler`
- `Roads/project-foundation/04-ui-ux-definition/admin-panel-ux-spec.md`
  - `## 6. Admin Home / Overview Page`
  - `## 7. Users Management Page`
  - `## 9. Rooms Management Page`
  - `## 11. Reports Management Page`
  - `## 12. Report Review Experience`
- `Design/ADMIN_OPERATIONAL_TEMPLATE.md`
  - `## 8. Sayfa Aileleri`
  - `## 10. Etkileşimler`
  - `## 15. Mevcut Teknik Yapıyla Uyum`
  - `## 18. Görsel Kabul Kriterleri`
- Uygulanabilirlik referansları: `Vibe frontend/src/pages/AdminShellPage.tsx`, `Vibe frontend/src/admin/adminApi.ts`, `Vibe frontend/src/styles/admin.css`, mevcut backend `src/routes/admin.ts`, `src/operations/operational-status.ts`, `src/moderation/social-report-evidence-service.ts`, Wave 22 Utility renderer ve Wave 23 admin foundation.

**Görsel referans:**
- Görsel 1: Admin Overview, Users ve Rooms — gerçek metric/table/filter/detail ve attention-needed state'leri.
- Görsel 2: Reports/Moderation — review detail, bounded context/evidence metadata, deliberate access ve destructive confirmation.
- Görsel 3: Operations, Categories ve Platform Content — readiness/jobs/reconcile, create/edit/status ve draft/preview/publish/audit durumları.
- Görsel 4: Loading/empty/error/refresh ile desktop, dar laptop ve tablet data-density varyantları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki metric, user, Room, report, severity, evidence, job, log, category ve content verileri temsilîdir; yalnız mevcut admin REST response, audited evidence, operational snapshot, category ve PlatformContent kontratları kullanılabilir.

---

**Kapsam içi:**
- Gerçek backend metrikleri, list/detail/filter/pagination ve destructive confirmations.
- Report-linked evidence/context, audited deliberate access ve bounded social safety göstergeleri.
- Operations readiness/job/reconcile, Platform Content draft/publish ve category yönetimi; responsive data density.

**Kapsam dışı:**
- Yeni admin capability, analytics/trend sistemi, system logs, invitation manager veya moderator rolü.
- Sıradan DM inbox, friendship graph, genel evidence browser veya report dışı private social content erişimi.
- Backend/database contract, admin role, evidence retention, job lifecycle, PlatformContent veya last-active-admin kuralı değişikliği.
- Yeni charting/CMS/editor dependency'si veya public legal metin değişikliği.
- Wave 25 genel consolidation ve Wave 26+ integration/readiness sorumluluklarını erkene çekmek.

---

**Implementation kontrol listesi:**

*Migration baseline, Overview, Users ve Rooms:*
- [x] `AdminShellPage.tsx` içindeki Overview/Users/Rooms/Reports/Moderation/Categories/Content state, filters, detail, mutations ve mevcut API çağrılarını migration öncesi davranış matrisiyle eşleştir.
- [x] Overview metric kartlarını yalnız `getAdminOverview()` response'undaki gerçek değer ve operational anlamla Wave 23 foundation'a taşı; tarihsel yüzde/trend veya tahmin üretme.
- [x] Overview recent Rooms/Reports ve attention-needed özetlerini mevcut response alanlarıyla taranabilir listelere bağla; search/refresh sırasında fake veya stale cross-section count gösterme.
- [x] Users yüzeyini `listAdminUsers()` gerçek search/filter/pagination alanlarıyla shared table/list'e taşı; yalnız response'ta bulunan identity/account/status metadata kolonlarını göster.
- [x] User detail ve account restriction işlemlerini `getAdminUserDetail()`/`updateAdminUserRestriction()` ile detail panel + explicit confirmation akışına bağla; son aktif admin/self-restriction backend sonucunu bypass etme.
- [x] Rooms yüzeyini `listAdminRooms()` gerçek state/visibility/category/host filtreleri ve pagination sonucuyla shared table/list'e taşı.
- [x] Room detail'i `getAdminRoomDetail()` response'uyla side panel/detail yüzeyinde göster; yalnız mevcut admin/report actions'ı sun ve yeni force-close/delete capability üretme.

*Reports, Moderation ve bounded evidence:*
- [x] Reports queue'yu `listAdminReports()` gerçek status/target/search/pagination alanlarıyla shared filters/table'a taşı; desteklenmeyen severity veya priority score uydurma.
- [x] Report detail'i `getAdminReportDetail()` ve `getAdminReportContext()` sonucuyla summary, target, bounded context, history ve action bölgelerine ayır; raw account/social internallerini default görünümde dökme.
- [x] Evidence metadata/listesini yalnız seçili report üzerinden yükle; `createAdminReportEvidenceAccess()` için bilinçli kullanıcı aksiyonu ve kısa ömür/audit bilgisini göster, raw body/storage key'i varsayılan render etme.
- [x] Review status ve mevcut report actions'ı `reviewAdminReport()`/`applyAdminReportAction()` ile hedef/etki/reason belirten confirmation üzerinden çalıştır; pending double-submit'i engelle ve sonucu list/detail ile reconcile et.
- [x] Moderation yüzeyini `listAdminModerationActions()` gerçek actor/target/Room/action/time verisiyle read-only historical table'a taşı; genel friendship/DM browsing bağlantısı ekleme.

*Operations, Categories ve Platform Content:*
- [x] `adminApi.ts` içine yalnız mevcut `GET /admin/operations`, `POST /admin/operations/reconcile` ve `POST /admin/jobs/:jobId/retry` kontratları için doğrulanmış frontend tipleri/fonksiyonları ekle; endpoint veya payload icat etme.
- [x] Operations yüzeyini operational snapshot'taki readiness/status, queue/lifecycle/evidence counters ve failed/dead-letter job verisiyle metric/table foundation'a bağla; public `/metrics` ile admin detail'i karıştırma. (Mevcut response yalnız state sayaçlarını sağlar; job satırı sağlamaz.)
- [x] Lifecycle reconciliation işlemini kapsamını açıklayan confirmation ve lokal pending/success/failure ile mevcut admin-only endpoint'e bağla; sonucu yeni snapshot fetch'iyle reconcile et.
- [ ] Dead-letter retry'ı yalnız snapshot'ın retry-eligible job satırında explicit confirmation ile çalıştır; job id/type/target'ı göster ve success/failure sonrası listeyi authoritative refresh et.
- [x] Categories yüzeyini `listAdminCategories()` ile create/update/active-state işlemlerini shared form/table/confirmation yapısına taşı; slug/sort/status validation ve Discover etkisini mevcut kontratla koru.
- [x] Platform Content list/detail/draft editor'ını mevcut page key, draft/published state, timestamps ve audit kayıtlarıyla taşı; preview'da Wave 22'nin aynı safe renderer'ını kullan ve draft'ı public route'a yazma.
- [x] Publish işlemini hedef page, mevcut draft/published farkı ve sonucu açıklayan confirmation üzerinden `publishAdminPlatformContent()` ile çalıştır; success'te audit/detail/list/public published fetch sonucunu reconcile et.

*Ortak operasyonel kapanış:*
- [x] Bütün section migration'larında lokal loading/empty/error/mutation/refresh state'lerini, filters/pagination/scroll/detail korunmasını ve desktop/dar laptop/tablet keyboard/focus/data-density davranışını Wave 23 foundation üzerinde uygula. (Toplu browser/manual doğrulaması bekliyor.)

---

**State ve rol kontrol listesi:**
> Aşağıdaki state/rol yolları implementation'da bağlandı; browser/staging kanıtı toplu QA turuna ertelendi.
- [x] Guest state — Admin surface/data/action erişimi yoktur; güvenli auth/unauthorized davranışı kullanılır.
- [x] Member state — Admin section, metric, list/detail, operations veya content draft verisi gösterilmez; wrong-role state bilgi sızdırmaz.
- [x] Host state — Host admin yetkisi değildir; normal member ile aynı denied davranışını kullanır.
- [x] Admin state — Mevcut Overview/Users/Rooms/Reports/Moderation/Operations/Categories/Content yetkilerini backend authority sınırında kullanır.
- [x] Loading state — Section shell korunur; metric/list/detail/evidence/operations/content ve mutation loading durumları lokal ayrışır.
- [x] Empty state — No reports/live rooms/jobs/results gibi durumlar operasyonel ve kısa açıklanır; fake row/metric/action üretilmez.
- [x] Error state — Section/list/detail/evidence/action/operations/content hataları ilgili bağlamda retry ve state koruması sunar.
- [x] Denied / unavailable state — Wrong-role, session expiry, last-active-admin, evidence unavailable, stale target/job veya endpoint failure güvenli kapalı state'e dönüşür.
- [x] Reconnecting state — Refresh/connection kaybında mevcut admin data, filters, scroll ve açık detail korunur; recovery authoritative refetch ile tamamlanır.
- [x] Mobile davranışı — Admin desktop öncelikli kalır; dar laptop/tablet drawer, primary columns, detail ve kritik actions kullanılabilir olmalıdır.
- [x] Klavye / focus davranışı — Section navigation, filters, rows/menus, detail, evidence action ve confirmations tam keyboard/focus trap/restore taşır.
- [x] Reduced motion davranışı — Section/table/detail/modal/refresh geçişleri azaltılır; status/pending/error anlamı statik korunur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [ ] Frontend Vitest suite'i geçiyor (`npm run test`)
- [ ] Overview/Users/Rooms testi gerçek API alanları, filters/pagination/detail ve unsupported metric/action bulunmadığını doğruluyor.
- [ ] Reports/Moderation testi status/target filters, detail/context, review/action reconcile ve general DM/friendship browsing bulunmadığını doğruluyor.
- [ ] Evidence testi yalnız selected report üzerinden deliberate access, audited metadata, short-lived result ve default raw evidence/internals bulunmadığını doğruluyor.
- [ ] Operations testi snapshot, reconcile ve dead-letter retry frontend kontratlarını, confirmation/double-submit engelini ve authoritative refresh'i doğruluyor.
- [ ] Categories/Content testi validation, active-state, draft save, shared safe preview, publish confirmation/audit ve public route'ta draft sızıntısı olmadığını doğruluyor.
- [ ] Cross-surface accessibility/responsive testi state/refresh koruması, keyboard/focus, dar laptop/tablet density, contrast ve reduced-motion davranışında kritik ihlal olmadığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave24-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası Overview, Users, Rooms, Reports, Moderation, Operations, Categories ve Platform Content success akışlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası last-active-admin/self restriction, stale target/report/job, evidence unavailable/access failure, reconcile/retry failure ve publish failure durumlarını kontrol ediyor.
- [x] QA dosyası report dışı DM/friend/evidence browse, fake metric/trend, new role/action ve public draft sızıntısı bulunmadığını doğruluyor.
- [x] QA dosyası desktop/dar laptop/tablet filters/pagination/scroll/detail koruması, keyboard, screen reader, focus, contrast ve reduced-motion kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [ ] Görsel referanstaki gerçek admin page families aynı Wave 23 shell/table/detail/action diliyle tutarlı.
- [ ] Overview aşırı yüklü analytics dashboard'una; listeler card duvarına dönüşmedi.
- [ ] Görsel odak hiyerarşisi doğru — Operasyonel liste/detail baskın, metrics/filters destekleyici, destructive actions kontrollü.
- [ ] Tipografi hiyerarşisi doğru — Admin page/detail heading Manrope, metrics/table/filters/actions Inter kullanıyor.
- [ ] Accent `#FF625A` active/focus/primary ile sınırlı; warning/danger/status anlamı yalnız renge bırakılmıyor.
- [ ] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [ ] Cam efekti yalnız geçici detail/modal/evidence action katmanında; kalıcı admin data surfaces mat ve taranabilir.
- [ ] Sahte metric, trend, user, Room, report, severity, job, log, category veya content state yok.
- [ ] Evidence default görünümde raw body/storage internali göstermiyor; access report-linked, deliberate ve audited kalıyor.
- [ ] `prefers-reduced-motion` destekleniyor.
- [ ] WCAG AA kontrast hedefi navigation, metrics, tables, statuses, filters, detail, editor ve modal yüzeylerinde sağlandı.
- [ ] Klavye focus görünür; section/detail/modal/evidence/publish akışlarında kaybolmuyor.
- [ ] Desktop/dar laptop/tablet'te filters/table/detail/editor sırasında kritik kolon/action kaybı veya sayfa geneli overflow yok.
- [ ] Mevcut fonksiyonlar korundu — admin REST, role/CSRF/audit, last-active-admin, evidence, operations, category ve PlatformContent kontratları değişmedi.
- [ ] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [ ] Bütün mevcut admin section'ları gerçek backend verisiyle Wave 23 foundation üzerinde tutarlı list/detail/filter/pagination sunar.
- [ ] Destructive/review/operations/category/content actions confirmation, audit ve authoritative reconcile ile güvenli çalışır.
- [ ] Report-linked evidence ile Platform Content draft/preview/publish sınırları private/draft veri sızdırmadan korunur.
- [ ] Loading/empty/error/reconnect ve desktop/dar laptop/tablet keyboard/accessibility senaryoları staging'de doğrulanmıştır.
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave24-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave 24'ü onayladı ve Codex durdu

---

### Wave 24 Sonucu — 2026-08-11

Wave 24 frontend implementation ve test hazırlığı yalnız kendi kapsamında tamamlandı. Existing Overview, Users, Rooms, Reports, Moderation, Categories ve Platform Content yüzeyleri Wave 23 ortak metric/table/filter/limited-pagination/SidePanel/confirmation foundation'ına taşındı. Operations section registry/API tipleri eklendi; private snapshot gerçek readiness, queue, lifecycle ve evidence sayaçlarını gösterir, confirmed reconciliation success sonrasında authoritative snapshot refetch edilir. Report evidence report-linked/deliberate/audited kaldı; Platform Content draft ve published preview Wave 22 `SafeRichTextRenderer`'ını kullanır. Frontend commitleri `3a1d0fe`, `a2905a6`. Backend, database, API, auth/session, CSRF, realtime, role, evidence retention, job lifecycle, category ve PlatformContent kontratları değiştirilmedi.

Frontend typecheck ve production build geçti; mevcut 500 kB üzeri chunk uyarısı değişmeyen non-blocker'dır. `tests/wave24-admin-surfaces.test.tsx`, `e2e/wave24-admin-surfaces.spec.ts` ve kök `tests/wave24-tests.md` hazırlandı fakat kullanıcı talimatıyla Vitest, Playwright, staging ve manuel QA çalıştırılmadı/doldurulmadı. Bu nedenle Wave 24 QA-closed değildir.

Açık blocker: mevcut `GET /api/admin/operations` yalnız job state sayaçlarını döndürür; retry-eligible dead-letter job `id/type/target` satırı sağlamaz. API/payload uydurma ve backend değişikliği yasak olduğundan row-level Retry UI uygulanmadı. Mevcut `POST /api/admin/jobs/:jobId/retry` için doğrulanmış frontend fonksiyonu hazırdır fakat authoritative job id kaynağı olmadan çağrılmaz. Bu Wave 24 sonuç kaydı yazıldığında Wave 25 başlatılmamıştı; güncel cursor Wave 25 implementation/test hazırlığıdır.

---

### Wave 25 — Ortak Component Consolidation ve Stil Borcu Kapanışı

**Durum:** Frontend implementation ve test hazırlığı tamamlandı; typecheck/build geçti. Hazırlanan Vitest, Playwright, staging/manual QA ve kullanıcı onayı toplu test turuna ertelendi; QA-closed değildir.

**Hedef:**
Ekran göçlerinden sonra ortaya çıkan gerçek tekrarlar tek ortak component/CSS sahipliğinde birleştirilir ve eski dağınık stiller davranış değiştirmeden temizlenir.

**Neden bu sırada geliyor:**
Erken soyutlama yerine bütün hedef ekranlar tamamlandıktan sonra aynı işi yapan component ve varyantlar somut kanıtla görülebilir.

**Bağımlılıklar:**
- Wave 07–24 arasındaki bütün ekran sahipleri tamamlanmış olmalıdır.
- Wave 00 envanteriyle yeni component/stil haritası karşılaştırılmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/NEXT_TASKS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.1 Kapsam sınırı`
  - `### 3.2 Implementation sırasında`
- `Design_Wave_Map.md`
  - `### Wave 25 — Ortak Component Consolidation ve Stil Borcu Kapanışı`
- `Roads/project-foundation/02-system-definition/frontend-modules.md`
  - `## 20. Shared UI Components Module`
  - `## 21. Feedback and State Components Module`
- `Design/DESIGN_SYSTEM_COMPONENT_BOARD.md`
  - `## 35. Mevcut Teknik Yapıyla Uyum`
  - `## 36. Bileşen Envanteri`
- Uygulanabilirlik referansları: `Vibe frontend/src/styles.css`, `Vibe frontend/src/styles/tokens.css`, `base.css`, `shell.css`, `primitives.css`, `forms.css`, `feedback.css`, `pages.css`, `room.css`, `admin.css`, `responsive.css`; `Vibe frontend/src/components/`, `src/social/`, `src/users/`, `src/pages/RoomShellPage.tsx`, `src/pages/AdminShellPage.tsx` ve mevcut Vitest/Playwright altyapısı.

**Görsel referans:**
- Görsel 1: Design System Component Board — ortak kontrol, identity/status, overlay ve feedback varyantları.
- Görsel 2: Home, Discover, Profile, Social, Messages ve Utility ekranlarındaki aynı semantik işi yapan card/row/form örnekleri.
- Görsel 3: Room ve Admin desktop/mobile yüzeylerinde ortaklaştırılabilecek sınırlar ile korunması gereken ekran-özel kompozisyonlar.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki component adları, içerikler ve varyant sayıları temsilîdir; ortaklaştırma kararı yalnız mevcut gerçek tüketiciler, canonical semantik ve çalışan veri/state kontratlarıyla doğrulanabilir.

---

**Kapsam içi:**
- Yinelenen card, row, form, state ve overlay varyantlarını gerçek ortak semantiğe göre tek sahiplikte birleştirmek.
- Eski token alias'larını, doğrulanmış hard-coded stil borcunu, orphan selector'ları ve çakışan responsive CSS'i temizlemek.
- Room/Admin monolitlerinden davranış ve state sahipliğini koruyan güvenli render sınırları çıkarmak.

**Kapsam dışı:**
- Yeni görsel varyant, ürün davranışı, route, state, API veya veri kontratı üretmek.
- Tek kullanımlık ekran parçasını gelecekte kullanılabilir varsayımıyla ortaklaştırmak.
- Mevcut componentleri topluca yeniden yazmak veya yeni CSS/framework/component kütüphanesi eklemek.
- Wave 26 responsive/accessibility kapanışını, Wave 27 regression'ı ya da Wave 28 performans optimizasyonunu öne çekmek.
- Backend veya database değişikliği yapmak.

---

**Implementation kontrol listesi:**

*Envanter ve consolidation kararları:*
- [x] Wave 00 component/CSS envanterini Wave 07–24 sonrasındaki `src/components`, `src/social`, `src/users`, `src/pages` ve `src/styles` sahiplikleriyle karşılaştır.
- [x] Aynı semantik işi yapan component ve CSS varyantlarını gerçek tüketici dosyalarıyla birlikte tek bir duplication tablosunda sınıflandır.
- [x] Ortaklaştırma adayını en az iki doğrulanmış tüketici, aynı davranış/state semantiği ve uyumlu accessibility kontratı bulunması koşuluna bağla.
- [x] Görsel olarak benzeyen fakat ürün davranışı farklı olan tek kullanımlık ekran parçalarını ortak aday listesinden çıkar.

*Component ve stil sahipliği:*
- [x] Tekrarlanan card/row/list-item markup'ını yalnız doğrulanmış ortak prop ve state yüzeyiyle mevcut shared UI katmanında birleştir.
- [x] Tekrarlanan form-field, validation message ve control grouping markup'ını mevcut form kontratlarını değiştirmeden ortak sahipliğe taşı.
- [x] Aynı işlevdeki button, icon action, badge ve status varyantlarını Wave 02 primitive API'sine yönlendir; ekran-özel alias üretme.
- [x] Aynı modal, side panel, bottom sheet ve confirmation davranışını Wave 02 overlay primitive'lerine yönlendir; focus/close sözleşmesini koru.
- [x] Aynı loading, empty, error, retry, toast ve reconnect sunumlarını Wave 03 state componentlerine yönlendir.
- [x] Yinelenen identity/avatar/presence sunumlarını yalnız Wave 02 ve sosyal canonical semantik aynıysa mevcut ortak identity sahipliğinde birleştir.
- [x] `tokens.css` ile eşleşen doğrulanmış hard-coded renk, spacing, radius, border ve motion değerlerini ilgili canonical token'a geçir.
- [x] Eski token alias'larını tüketicileri sıfırlandıktan sonra kaldır; alias silmeden önce repository-wide kullanım taraması yap.
- [x] Kullanıcısı kalmayan selector, class, import ve dead component export'larını kanıtlanmış referans taramasından sonra temizle.
- [x] `styles.css` import sırasını token → base → shell/primitive/form/state → page/room/admin → responsive sahiplik zinciriyle çakışmasız tut.
- [x] Aynı breakpoint için çelişen selector'ları ilgili component/page sahibi ile `responsive.css` arasındaki tek açık sorumluluğa indir.
- [x] `RoomShellPage.tsx` içindeki yalnız render odaklı ve birden fazla Room modu tarafından kullanılan sınırları runtime/realtime state sahipliğini taşımadan ayır.
- [x] `AdminShellPage.tsx` içindeki yalnız render odaklı ortak tablo/detail/confirmation sınırlarını auth, CSRF, mutation ve reconcile sahipliğini taşımadan ayır.
- [x] Consolidation boyunca mevcut prop davranışı, stable key, DOM sırası, accessible name, focus restore ve route/realtime event sözleşmelerini koru.
- [x] Ortaklaştırılan her component ailesinin mevcut success/failure varyantlarını Vitest veya mevcut uygun test katmanında regression testiyle sabitle.
- [ ] Her bağımsız consolidation grubundan sonra frontend typecheck, test ve build çalıştır; hata veren grubu sonraki gruba geçmeden düzelt.

---

**State ve rol kontrol listesi:**
- [x] Guest state — Ortaklaştırılan public card/state/shell tüketicileri auth gerektirmeyen görünürlüğü ve auth gate sınırını korur.
- [x] Member state — Member action, identity ve feedback varyantları yetkili davranışını shared sunuma taşırken korur.
- [x] Host state — Room render sınırları host-only control ve lifecycle authority'yi participant componentlerine sızdırmaz.
- [x] Admin state — Admin ortak yüzeyleri yalnız `/admin` role gate, CSRF, confirmation ve audit kontratları içinde kalır.
- [x] Loading state — Consolidation initial load, quiet refresh ve local mutation loading ayrımını tek spinner davranışına indirmez.
- [x] Empty state — Ekran-özel açıklama/CTA yalnız gerçek capability ile korunur; ortak component sahte CTA üretmez.
- [x] Error state — Field, local, page ve realtime hata kapsamları birleşme sırasında birbirine dönüşmez; retry doğru owner'da kalır.
- [x] Denied / unavailable state — Auth, role, block, room lifecycle ve feature-flag nedenleri private bilgi sızdırmadan ayrı kalır.
- [x] Reconnecting state — Room ve DM reconnect sunumları ortak feedback dilini kullanır; socket lifecycle sahiplikleri birleştirilmez.
- [x] Mobile davranışı — Ortak componentler mevcut desktop/mobile tüketicilerinde aynı content priority ve touch davranışını korur.
- [x] Klavye / focus davranışı — Overlay, row action, form ve route geçişlerinde focus sırası/trap/restore regression üretmez.
- [x] Reduced motion davranışı — Ortak motion sahipliği tüketicilerin `prefers-reduced-motion` davranışını korur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [ ] Frontend Vitest suite'i geçiyor (`npm run test`)
- [ ] Mevcut frontend Playwright suite'i geçiyor (`npm run test:e2e`)
- [ ] Duplication testi aynı canonical component işinin eski ve yeni sahiplikte paralel kalmadığını doğruluyor.
- [x] Static tarama kaldırılan alias, selector, import ve export için repository'de artık canlı tüketici bulunmadığını doğruluyor.
- [ ] Component regression testleri ortaklaştırılan success, disabled/loading, error ve overlay close/focus varyantlarını doğruluyor.
- [ ] Route inventory testi consolidation sonrasında route registry ve custom navigation sözleşmesinin değişmediğini doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave25-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası ortaklaştırılan her component ailesinin en az iki gerçek tüketicide success ve failure varyantlarını staging'de evet/hayır ile karşılaştırıyor.
- [x] QA dosyası Home/Discover/Profile/Social/Messages/Utility ile Room/Admin örneklerinde görsel ve davranış regression'ı olmadığını doğruluyor.
- [x] QA dosyası guest/member/host/admin görünürlüğü, denied state ve feature-flag kapalı durumunda yetki sızıntısı olmadığını kontrol ediyor.
- [x] QA dosyası desktop/mobile, keyboard/focus, screen reader ve reduced-motion kontrollerini içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [x] Her ortaklaştırma için en az iki gerçek tüketici ve aynı semantik davranış kanıtı var.
- [x] Tek kullanımlık ekran parçaları sırf benzer göründüğü için shared katmana taşınmadı.
- [x] Aynı component işi eski ve yeni sahiplikte paralel bırakılmadı.
- [ ] Görsel blok sırası, ana oranlar ve ekran-özel content priority değişmedi.
- [x] Tipografi hiyerarşisi doğru — Manrope başlık, Inter arayüz/metin sahipliği korunuyor.
- [x] Accent `#FF625A` ve sistem renkleri canonical token sahipliğinden geliyor.
- [x] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [x] Cam efekti yalnız geçici katmanlarda kaldı; consolidation kalıcı yüzeyleri glass'a çevirmedi.
- [x] Orphan selector, ölü import/export ve doğrulanmış eski token alias'ı kalmadı.
- [x] CSS import/layer ve responsive override sırası deterministik; selector specificity yarışı üretilmedi.
- [x] Room realtime/player ve Admin auth/CSRF/audit state sahiplikleri render extraction sırasında taşınmadı.
- [x] `prefers-reduced-motion` destekleniyor.
- [ ] WCAG AA kontrast hedefi ve durumların renk dışı anlamı korunuyor.
- [ ] Klavye focus görünür; overlay trap/restore ve row/form action sırası korunuyor.
- [x] Mevcut fonksiyonlar korundu — custom router, API, auth, feature flag ve realtime kontratları değişmedi.
- [ ] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [x] Doğrulanmış tekrarlar tek component/CSS sahibine indirildi; tek kullanımlık sınırlar gereksiz soyutlanmadı.
- [x] Eski alias, hard-code, orphan selector, dead import/export ve responsive çakışmalar kanıtlı biçimde temizlendi.
- [x] Room/Admin güvenli render sınırları runtime, auth, mutation ve realtime sahipliğini değiştirmeden okunabilir hâle geldi.
- [ ] Guest/member/host/admin ile success/failure/mobile/keyboard/reduced-motion regression matrisi staging'de doğrulandı.
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave25-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave 25'i onayladı ve Codex durdu

---

### Wave 25 Sonucu — 2026-08-12

Wave 25 frontend implementation ve test hazırlığı yalnız kendi kapsamında tamamlandı. Gerçek duplication envanteri kök `tests/wave25-tests.md` içinde tüketiciler ve bilinçli dışlamalarla kaydedildi. Room participant/host chat ile participant/moderation list render sınırları `RoomChatPanel` ve `RoomParticipantList` altında birleştirildi; runtime, realtime, player ve mutation sahipliği `RoomShellPage` içinde kaldı. Admin stat/empty/table/detail/confirmation sunumları `AdminFoundation` sahipliğinde toplandı; auth, role gate, CSRF, audit, reconcile ve mutation sahipliği `AdminShellPage` içinde kaldı.

Tekrarlanan action ve form kontrolleri Wave 02 `Button`/`IconButton`/`Input`/`Select`/`Textarea` primitive'lerine yönlendirildi. Doğrulanmış legacy token alias'ları, action selector'ları, numeric `z-index` değerleri ve token dışı hard-coded renkler temizlendi; `styles.css` zinciri responsive son katman olacak şekilde tekilleştirildi. Backend, database, API, auth/session, CSRF, route, feature flag ve realtime kontratları değiştirilmedi.

Frontend typecheck ve production build geçti; mevcut 500 kB üzeri chunk uyarısı değişmeyen non-blocker'dır. `tests/wave25-consolidation.test.ts`, `e2e/wave25-consolidation.spec.ts` ve kök `tests/wave25-tests.md` hazırlandı fakat kullanıcı talimatıyla Vitest, Playwright, staging ve manuel QA çalıştırılmadı/doldurulmadı. Bu nedenle Wave 25 QA-closed değildir. Wave 24 dead-letter row Retry blocker'ı açık kalır. Bu sonuç kaydı yazıldığında Wave 26 başlatılmamıştı; güncel execution durumu belgenin üst kaydında ve Wave 26 sonucunda tutulur.

---

### Wave 26 — Responsive, Accessibility ve Reduced Motion Yatay Kapanışı

**Durum:** Frontend implementation ve test hazırlığı tamamlandı; typecheck/build geçti. Hazırlanan Vitest, Playwright, staging/manual QA ve kullanıcı onayı toplu test turuna ertelendi; QA-closed değildir. Wave 27 başlatılmadı.

**Hedef:**
Bütün route'lar mobil/tablet/desktop, klavye, screen reader, kontrast, touch target ve reduced-motion matrisi üzerinden yatay olarak kapanır.

**Neden bu sırada geliyor:**
Ekran Wave'leri kendi layout sorumluluğunu uygular; sistem genelindeki breakpoint, focus, zoom, overflow ve motion tutarlılığı ancak bütün ürün görünürken doğrulanabilir.

**Bağımlılıklar:**
- Wave 25 tamamlanmış olmalıdır.
- Her ekranın belgelenmiş responsive/erişilebilirlik hükümleri uygulanmış olmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/NEXT_TASKS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.4 Tasarım değişmezleri`
  - `### 3.3 Durdurmadan önce yerel doğrulama`
- `Design_Wave_Map.md`
  - `### Wave 26 — Responsive, Accessibility ve Reduced Motion Yatay Kapanışı`
- `Roads/project-foundation/04-ui-ux-definition/mobile-responsive-spec.md`
  - `## 3. Core Responsive Principle`
  - `## 17. Button and Touch Target Principle`
  - `## 21. Final Responsive Standard`
- `Roads/project-foundation/07-roadmaps/plans/Vibehall-Global-Launch-Readiness&Product-Polish-Plan.md`
  - `## 20. Görsel Erişilebilirlik`
  - `## 22. Reduced Motion Davranışı`
- `Design/SYSTEM_STATES_BOARD.md`
  - `## 45. Azaltılmış Hareket`
  - `## 46. Erişilebilirlik`
- Uygulanabilirlik referansları: `Vibe frontend/src/lib/routes.ts`, `src/App.tsx`, `src/components/AppShell.tsx`, bütün `src/pages/*.tsx`, `src/styles/base.css`, `shell.css`, `primitives.css`, `feedback.css`, `pages.css`, `room.css`, `admin.css`, `responsive.css`, `Vibe frontend/package.json` içindeki Vitest/Playwright ve `@axe-core/playwright` altyapısı.

**Görsel referans:**
- Görsel 1: Onaylı bütün public/member/admin ekranların desktop, dar laptop ve tablet kompozisyonları.
- Görsel 2: Onaylı bütün ekranların mobil, dar mobil, safe-area ve açık yazılım klavyesi kompozisyonları.
- Görsel 3: Focus, text scaling/zoom, loading/error/reconnect ve reduced-motion state board örnekleri.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki cihaz çerçeveleri, metinler, veri uzunlukları ve state örnekleri temsilîdir; responsive öncelik, erişilebilirlik ve ürün davranışı canonical sözleşmelerden alınır.

---

**Kapsam içi:**
- Bütün route'larda mobil/tablet/desktop, text scaling/zoom, safe-area ve overflow doğrulaması.
- Keyboard/focus order/trap/restore, semantic structure, accessible names, live regions ve WCAG AA kapanışı.
- `prefers-reduced-motion` altında aura, transition, pulse ve zoom'un azaltılması; işlevsel feedback'in korunması.

**Kapsam dışı:**
- Yeni mobil UX, navigasyon modeli, breakpoint keyfi veya ekran redesign'ı üretmek.
- Ürün akışını erişilebilirlik için zorunlu ve belgelenmiş küçük uyarlamalar dışında değiştirmek.
- Yeni route, API, state, feature flag, backend veya database kapsamı açmak.
- Wave 27 uçtan uca flow regression'ını veya Wave 28 performans optimizasyonunu bu Wave'e taşımak.
- Onaylı desktop/mobile kompozisyonları kendi görüşüyle yeniden sıralamak.

---

**Implementation kontrol listesi:**

*Responsive yatay matris:*
- [x] `src/lib/routes.ts` içindeki bütün public, auth, member, Room, Social, Messages, Utility, Not Found ve Admin route'larını viewport/state/role matrisiyle eşleştir.
- [ ] Her route'u dar mobil, standart mobil, tablet, dar laptop ve geniş desktop genişliklerinde onaylı content priority korunarak doğrula.
- [ ] Portrait/landscape geçişi, browser chrome değişimi, visual viewport ve açık yazılım klavyesinde sabit/sticky bölgelerin erişilebilirliğini düzelt.
- [ ] Top/bottom safe-area inset'lerini shell, mobile navigation, Room composer, DM composer, bottom sheet ve modal yüzeylerinde doğrula.
- [ ] Yüzde 200 text scaling ve browser zoom/reflow altında heading, label, badge, table/list ve action metinlerinin kırpılmasını düzelt.
- [x] Route ve overlay seviyesinde yatay overflow üreten sabit genişlik, min-width, uzun URL/username/title ve media taşmalarını sahibi olan CSS katmanında düzelt.
- [x] Bütün pointer kontrollerinde yaklaşık minimum `44×44px` touch target ve komşu destructive/primary action ayrımını doğrula.

*Semantik, klavye ve screen reader:*
- [x] Her route'ta tek anlamlı main landmark, tutarlı heading sırası ve navigation/aside/region etiketlerini doğrula.
- [ ] Icon-only button, media control, avatar action, status indicator ve badge'lerin accessible name veya dekoratif gizlilik sözleşmesini düzelt.
- [ ] Table, list, tab, form, chat log ve status markup'ını görsel layout'u bozmadan doğru semantik role/relationship ile hizala.
- [ ] Route, shell, tab, filter, row action, player, composer ve admin kontrollerinde mantıklı Tab/Shift+Tab sırasını doğrula.
- [x] Modal, side panel, bottom sheet ve drawer açılışında initial focus, trap, Escape ve kapanışta trigger'a focus restore davranışını standardize et.
- [x] Custom router ve `vibehall:before-navigate` akışında page title, route değişimi ve yeni sayfa focus bağlamını tutarlı hâle getir.
- [ ] Loading, save success, error, Room ended, session expired ve reconnect bildirimlerini uygun, tekrar etmeyen live-region politikasına bağla.
- [ ] Normal metin, muted metadata, links, focus ring, form/error, status badge ve overlay yüzeylerinde WCAG AA kontrastını ölçerek düzelt.
- [ ] Status, severity, selected, online/offline ve destructive anlamların renk dışında metin, ikon veya semantik işaret taşıdığını doğrula.

*Reduced motion ve otomasyon:*
- [x] `prefers-reduced-motion: reduce` altında page/Room transition, card lift, thumbnail zoom, pulse ve sürekli aura hareketini kapat veya kısa statik geçişe indir.
- [x] Skeleton shimmer, toast slide, reconnect dots ve success animation'ı System States Board kararına göre azalt; state bilgisini kaldırma.
- [x] Reduced motion altında spinner/progress, reconnect sonucu, error ve işlem feedback'i gibi işlevsel göstergelerin anlaşılır kaldığını doğrula.
- [x] Playwright viewport/keyboard/axe/reduced-motion kapsamını route matrisi boyunca ekle ve Wave'e özgü kritik ihlalleri otomatik failure yap.

---

**State ve rol kontrol listesi:**
- [ ] Guest state — Home/Discover/Utility/Auth Gate responsive ve keyboard/screen-reader kullanımında member-only aksiyonu yanlışlıkla açmaz.
- [ ] Member state — Create/Profile/Settings/Social/Messages ve Room participant yüzeyleri bütün yatay kalite matrisinden geçer.
- [ ] Host state — Host player/moderation/close kontrolleri dar alanda erişilebilir, ayırt edilebilir ve participant aksiyonlarıyla çakışmaz.
- [ ] Admin state — Admin sidebar/table/filter/detail/confirmation dar laptop/tablet ve klavye kullanımında operation kaybetmez.
- [ ] Loading state — Skeleton/indicator screen reader'ı tekrarlarla doldurmaz; reduced motion ve reflow altında geometry korunur.
- [ ] Empty state — Heading, açıklama ve gerçek CTA text scaling, focus ve dar mobilde okunabilir kalır.
- [ ] Error state — Field/local/page/critical hata mesajları programatik bağlı, kontrastlı, focus erişimli ve retry edilebilir kalır.
- [ ] Denied / unavailable state — Gate, block, full/ended Room, feature flag ve admin-required state nedenini renk dışında anlaşılır sunar.
- [ ] Reconnecting state — Room/DM reconnect tekrar tekrar okunmaz; mobilde kritik kontrolü kapatmaz ve reduced motion'da anlamını korur.
- [ ] Mobile davranışı — Bütün route'larda safe-area, touch target, keyboard viewport, content priority ve overflow kapanır.
- [ ] Klavye / focus davranışı — Bütün temel akışlar görünür focus, doğru sıra, trap/restore ve route focus yönetimiyle tamamlanabilir.
- [ ] Reduced motion davranışı — Sürekli/dekoratif hareket kapanır; işlevsel loading, hata ve başarı feedback'i korunur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [ ] Frontend Vitest suite'i geçiyor (`npm run test`)
- [ ] Frontend Playwright suite'i geçiyor (`npm run test:e2e`)
- [ ] Route matrisi testi her kayıtlı route'u mobile/tablet/desktop viewport setinde açıyor ve kritik yatay overflow olmadığını doğruluyor.
- [ ] Axe testi guest/member/host/admin temsilî route setinde kritik veya ciddi erişilebilirlik ihlali bırakmıyor.
- [ ] Keyboard testi shell, dialog/sheet/drawer, form, Room/DM composer ve admin table/detail akışlarında focus sırası ile restore davranışını doğruluyor.
- [ ] Reduced-motion testi media query altında aura/zoom/pulse/shimmer'ın durduğunu ve işlevsel feedback'in görünür kaldığını doğruluyor.
- [-] Backend typecheck geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.
- [-] Backend build geçiyor — Backend değişikliği bu Wave'in kapsamı dışında.

---

**Manuel QA dosyası:**
- [x] `tests/wave26-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası her route'u dar mobil, mobil, tablet, dar laptop ve desktop'ta success/failure state'leriyle evet/hayır olarak kontrol ediyor.
- [x] QA dosyası yüzde 200 text scaling, browser zoom/reflow, long content, landscape, safe-area ve açık yazılım klavyesi senaryolarını içeriyor.
- [x] QA dosyası yalnız klavye ve screen reader ile auth, Room, social/DM, utility ve admin temel görevlerinin tamamlanabildiğini doğruluyor.
- [x] QA dosyası normal/reduced-motion karşılaştırması, WCAG AA, touch target, focus trap/restore ve live-region tekrar kontrolünü içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [ ] Her route onaylı desktop/mobile blok ilişkisini ve content priority sırasını koruyor.
- [ ] Dar mobil, tablet, dar laptop ve geniş desktop arasında anlamsız ara breakpoint kırılması yok.
- [ ] Text scaling/zoom, uzun içerik, landscape ve safe-area altında yatay overflow veya erişilemez action yok.
- [ ] Görsel odak hiyerarşisi doğru — Room'da video, içerik sayfalarında ana görev, admin'de operasyonel tarama baskın.
- [ ] Tipografi hiyerarşisi doğru — Manrope başlık, Inter arayüz/metin okunabilir kalıyor.
- [ ] Accent `#FF625A` kontrollü; focus/status anlamı yalnız renge bırakılmıyor.
- [ ] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [ ] Cam/blur metin kontrastını düşürmüyor ve reduced motion davranışını bozmuyor.
- [ ] Touch target'lar yaklaşık minimum `44×44px`; bitişik kritik aksiyonlar yanlış dokunmaya açık değil.
- [ ] Landmarks, headings, accessible names, form relationships ve live regions screen reader'da anlamlı.
- [ ] Klavye focus görünür; route, dialog, sheet, drawer ve panel geçişlerinde kaybolmuyor.
- [ ] `prefers-reduced-motion` sürekli/dekoratif hareketi azaltırken işlevsel feedback'i koruyor.
- [ ] WCAG AA kontrast hedefi normal metin, metadata, control, state ve focus yüzeylerinde sağlandı.
- [ ] Mevcut fonksiyonlar korundu — route, auth, API, feature flag ve realtime davranışı değişmedi.
- [ ] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [ ] Bütün route'lar belirlenen mobile/tablet/desktop, zoom/reflow, safe-area ve overflow matrisinden geçti.
- [ ] Guest/member/host/admin temel görevleri keyboard ve screen reader ile kritik ihlal olmadan tamamlanabiliyor.
- [ ] Focus, semantics, accessible names, live regions, WCAG AA ve touch target şartları yatay olarak kapandı.
- [ ] Reduced-motion altında dekoratif hareket azaldı; loading/error/reconnect/success bilgisi işlevsel kaldı.
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave26-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave 26'yı onayladı ve Codex durdu

---

### Wave 26 Sonucu — 2026-08-12

Wave 26 frontend implementation ve test hazırlığı yalnız kendi kapsamında tamamlandı. `AppShell` custom route değişimlerinde güncel document title ile birlikte route-level ana içeriğe focus taşır; Loading, Room ve Admin iç yüzeylerindeki nested `main` kullanımları kaldırılarak her route için tek main landmark sahipliği kuruldu. `base.css` canonical `44px` pointer target minimumunu, uzun heading/label/table metni wrap'ini ve grid/flex reflow için ortak `min-width: 0` sınırını taşır. Mevcut overlay focus trap/Escape/restore, live-region ve reduced-motion state sözleşmeleri yeniden tasarlanmadan korundu.

Hazırlanan doğrulama paketi `Vibe frontend/tests/wave26-accessibility-contract.test.ts`, `Vibe frontend/e2e/wave26-responsive-accessibility.spec.ts` ve kök `tests/wave26-tests.md` dosyalarından oluşur. Playwright paketi bütün kayıtlı route'ları 320/390/768/1024/1440 genişliklerinde tek main ve yatay overflow, guest/member/admin axe, custom route focus, mobile drawer keyboard restore, touch target ve reduced-motion kontrollerine bağlar.

Frontend typecheck ve production build geçti; mevcut 500 kB üzeri chunk uyarısı değişmeyen non-blocker'dır. Kullanıcının bütün Wave testlerini sonda topluca yapma talimatıyla Vitest, Playwright, staging/manual QA, state/role matrisi, Debug Checklist ve Exit Criteria çalıştırılmadı/doldurulmadı; açık maddeler kanıt olmadan işaretlenmedi. Bu nedenle Wave 26 QA-closed veya kullanıcı onaylı değildir. Backend, database, API, auth/session, realtime, route ve dependency kontratları değiştirilmedi. Wave 24 dead-letter row Retry blocker'ı açık kalır; Wave 27 başlatılmadı.

---

### Wave 27 — Uçtan Uca Entegrasyon ve Regression

**Durum:** Implementation ve test hazırlığı tamamlandı; toplu otomatik/staging/manual QA ve kullanıcı onayı bekleniyor. QA-closed değildir.

**Hedef:**
Guest, member, host ve admin ana akışları ile success/failure/reconnect state kombinasyonları uçtan uca regression matrisi altında doğrulanır ve yalnız bulunan entegrasyon sapmaları düzeltilir.

**Neden bu sırada geliyor:**
Görsel ve yatay kalite işleri tamamlanmadan gerçek cross-route/auth/realtime regression kapanışı yapılamaz.

**Bağımlılıklar:**
- Wave 26 tamamlanmış olmalıdır.
- Bütün ekran Wave'leri typecheck/build geçer durumda olmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/NEXT_TASKS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 3.3 Durdurmadan önce yerel doğrulama`
  - `### 3.4 Wave kapatma`
- `Design_Wave_Map.md`
  - `### Wave 27 — Uçtan Uca Entegrasyon ve Regression`
- `Roads/project-foundation/04-ui-ux-definition/core-user-flows.md`
  - `## 4. Flow 1 — Guest Discover to Auth Gate`
  - `## 7. Flow 4 — Create Room`
  - `## 9. Flow 6 — User Joins Live Room and Enters Current Moment`
  - `## 15. Flow 12 — Admin Reviews Platform State`
- `Roads/project-foundation/06-build-strategy/release-hardening-and-render-checklist.md`
  - `## 6. Regression Flow Checklist`
  - `## 7. Debug and Observability Gate`
- Uygulanabilirlik referansları: `Vibe frontend/src/lib/routes.ts`, `src/App.tsx`, `src/auth/AuthContext.tsx`, `src/pages/`, `src/rooms/roomApi.ts`, `src/rooms/realtimeClient.ts`, `src/social/socialApi.ts`, `src/social/useDirectMessageRealtime.ts`, frontend Vitest/Playwright suite'leri; backend `tests/contracts.test.ts`, `tests/request-security.test.ts`, `tests/integration-harness.test.ts` ve mevcut Wave 33–46 social testleri.

**Görsel referans:**
- Görsel 1: Guest Home/Discover → Auth Gate → Auth → hedef Room dönüş akışının onaylı desktop/mobile ekranları.
- Görsel 2: Member create/join, host Room, participant reconnect/end ve ilgili loading/error/denied state ekranları.
- Görsel 3: Profile/Social/Invites/Messages/Utility/Admin entegrasyon akışlarının onaylı success/failure ekranları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki kullanıcılar, odalar, mesajlar, raporlar, sayılar ve hata metinleri temsilîdir; test verisi ve beklenen sonuçlar mevcut API, auth, realtime, feature-flag ve canonical ürün kontratlarından türetilir.

---

**Kapsam içi:**
- Guest Home/Discover → Gate → Auth → Room; member create → host Room; participant join → reconnect → ended akışları.
- Profile, social, invite, DM, block, report ile Utility/Admin content/review entegrasyonları.
- Loading, empty, error, denied, unavailable, reconnecting, role visibility ve cross-route state/scroll/focus regresyonları.

**Kapsam dışı:**
- Yeni ürün özelliği, UX kararı, geniş refactor, yeni test-only ürün davranışı veya veri modeli üretmek.
- Test bulgusu olmadan frontend, backend, API, auth, realtime veya database kontratını değiştirmek.
- Performans tuning, deployment/feature-flag açılımı veya production release kararı; Wave 28'e aittir.
- Görsel final polish ve bütün ekranların referansla son kabulü; Wave 29'a aittir.
- Testi geçirmek için privacy, authorization, CSRF, moderation veya Room lifecycle sınırını gevşetmek.

---

**Implementation kontrol listesi:**

*Regression matrisi ve temel akışlar:*
- [x] Kayıtlı route'ları guest/member/host/admin rolleri ve success/loading/empty/error/denied/unavailable/reconnecting state'leriyle tek uçtan uca regression matrisine bağla.
- [x] Guest Home ve Discover browsing → member-only action → AuthRequiredGate akışını original return intent korunarak otomatikleştir.
- [ ] Signup/login/logout/session refresh, yanlış credential, session expiry ve auth return intent akışlarını doğrudan route refresh ile birlikte doğrula.
- [ ] Member create-room public/private validation → submit → live Room → host authority geçişini gerçek backend ve realtime ile doğrula.
- [ ] Public Room join ile private link → auth → password/invite grant → current live moment senkronizasyonunu ayrı senaryolarla doğrula.
- [ ] Room full, wrong password, banned, ended, unavailable ve denied girişlerinin doğru state yüzeyinde kaldığını ve private bilgi sızdırmadığını doğrula.
- [ ] Participant presence/chat/playback state'inin reconnect sonrası authoritative Room state ile duplicate event üretmeden uzlaştığını doğrula.
- [ ] Host playback, kick, ban, close ve explicit leave akışlarının yalnız host yetkisiyle çalıştığını ve participant sonuç state'ini doğrula.

*Profile, social, content ve admin entegrasyonu:*
- [ ] Own/public profile ile Settings update, avatar/bio/privacy ve unsaved-navigation davranışını mevcut capability/visibility kontratlarıyla doğrula.
- [ ] Friends request/accept/reject/cancel, People You Watched With ve presence görünürlüğü akışlarını feature flag ve privacy sınırlarıyla doğrula.
- [ ] Native Room invite create/accept/decline/expire ile private grant akışını Social Rail, Friends ve Room context tüketicileri arasında doğrula.
- [ ] Global block'un friendship/pending/invite/DM/Room erişim sonuçlarını yön bilgisi veya account-state nedeni sızdırmadan doğrula.
- [ ] Friends-only DM list/open/send/idempotent retry/delivered/read/delete/reconnect davranışını Messages ve docked ConversationPanel arasında doğrula.
- [ ] Room/user/message/profile/DM report akışını immutable evidence ve report-linked admin review sınırıyla doğrula.
- [ ] Terms/Privacy/Guidelines/Support published-only render ile Admin Platform Content draft/preview/publish/revert entegrasyonunu doğrula.
- [ ] Admin overview/users/rooms/reports/moderation/operations/categories/content yüzeylerini role gate, CSRF, confirmation, audit ve authoritative refresh ile doğrula.

*Cross-route state ve bulgu düzeltme:*
- [ ] Browser back/forward, direct deep link, hard refresh ve custom navigation sırasında scroll, focus, open overlay ve unsaved state'in belgelenmiş davranışını doğrula.
- [ ] HTTP failure, socket disconnect/reconnect, stale refresh ve duplicate delivery simülasyonlarında loading/error/retry/reconcile sınırlarını doğrula.
- [ ] Yalnız tekrar üretilebilen regression bulgusunu sahibi olan en dar frontend/backend katmanında düzelt; kontrat değişikliği gerekiyorsa dur ve kullanıcı kararı iste.
- [ ] Her düzeltmeye önce başarısız olan regression senaryosunu sabitleyen test ekle; ilgili suite, tam frontend/backend suite ve build kapılarını yeniden çalıştır.

---

**State ve rol kontrol listesi:**
- [ ] Guest state — Public browsing çalışır; Room/social/DM/admin katılımı doğru auth/denied gate'e gider ve return intent korunur.
- [ ] Member state — Auth, create/join, profile/settings, social/invite/DM/report ve utility akışları gerçek capability ile tamamlanır.
- [ ] Host state — Host authority, moderation, close/leave ve Room end sonucu participant akışlarıyla birlikte doğrulanır.
- [ ] Admin state — Role gate, operational surfaces, review/mutation, CSRF, confirmation, audit ve public content publish entegrasyonu doğrulanır.
- [ ] Loading state — Initial load, quiet refresh ve local mutation pending farklı yüzeylerde doğru kalır; dead-end oluşmaz.
- [ ] Empty state — Gerçek boş Room/social/message/admin/content durumları sahte veri veya desteklenmeyen CTA üretmez.
- [ ] Error state — Auth/API/parser/mutation/realtime failures doğru owner'da retry/reconcile verir ve teknik/private detay sızdırmaz.
- [ ] Denied / unavailable state — Auth, private/full/ended/banned/block/flag/admin-required sonuçları canonical ayrımla kapanır.
- [ ] Reconnecting state — Room ve DM socket lifecycle authoritative reconcile ile duplicate message/presence/playback üretmeden toparlanır.
- [ ] Mobile davranışı — Ana E2E akışlar mobil shell, Room Mobile, Social/Messages ve Admin tablet sınırlarında tamamlanabilir.
- [ ] Klavye / focus davranışı — Cross-route, gate, modal/detail, composer ve failure/retry akışlarında focus bağlamı korunur.
- [ ] Reduced motion davranışı — E2E akış bilgisi motion'a bağlı değildir; reconnect/success/error feedback'i reduced motion'da anlaşılır.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [ ] Frontend Vitest suite'i geçiyor (`npm run test`)
- [ ] Frontend Playwright suite'i geçiyor (`npm run test:e2e`)
- [ ] Backend typecheck geçiyor (`npm run typecheck`)
- [ ] Backend build geçiyor (`npm run build`)
- [ ] Backend Vitest suite'i geçiyor (`npm run test`)
- [x] Route inventory testi bütün custom route ve direct-refresh girişlerinin kayıtlı kaldığını doğrulayacak şekilde regression matrisine bağlandı; suite kullanıcı talimatıyla çalıştırılmadı.
- [ ] E2E regression suite'i guest/member/host/admin ana akışlarının success ve failure dallarını gerçek HTTP/realtime sınırlarıyla doğruluyor.
- [ ] Reconnect/idempotency testleri Room ve DM için duplicate event/row, stale state veya kayıp authoritative reconcile olmadığını doğruluyor.

---

**Manuel QA dosyası:**
- [x] `tests/wave27-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası guest → gate → auth → return intent, member create/join ve host/participant Room lifecycle akışlarını staging'de evet/hayır ile doğruluyor.
- [x] QA dosyası profile/settings, social/invites/block, DM ve report/admin review success/failure entegrasyonlarını içeriyor.
- [x] QA dosyası utility publish/read, admin actions, feature flag off/on sırası ve authorization/privacy sızıntısı kontrollerini içeriyor.
- [x] QA dosyası weak network, disconnect/reconnect, hard refresh, back/forward, session expiry, mobile ve keyboard/focus senaryolarını kapsıyor.

---

**Debug ve doğrulama kontrol listesi:**
- [ ] Regression matrisi kayıtlı bütün ana route, rol ve kritik state kombinasyonlarını kapsıyor.
- [ ] Guest browsing → auth gate → return intent akışı dead-end veya hedef kaybı üretmiyor.
- [ ] Private Room şifre/invite grant, full/banned/ended ve current-moment sync kontratları korunuyor.
- [ ] Host authority ve moderation davranışı participant veya member görünürlüğüne sızmıyor.
- [ ] Social/DM feature flag, privacy, block yönü ve friends-only sınırı korunuyor.
- [ ] Report evidence private, immutable ve report-linked kalıyor; genel admin DM/friendship browsing oluşmuyor.
- [ ] Utility published-only render ile Admin draft/preview/publish ayrımı korunuyor.
- [ ] Loading/empty/error/denied/unavailable/reconnecting state'leri yanlış ortak fallback'e dönüşmüyor.
- [ ] Cross-route scroll/focus/overlay/unsaved state canonical davranışı koruyor.
- [ ] Socket reconnect duplicate chat/DM/presence/playback olayı üretmiyor.
- [ ] Görsel odak, tipografi, accent ve üç seviyeli yüzey sistemi regression düzeltmelerinde değişmiyor.
- [ ] `prefers-reduced-motion` ve WCAG AA kapanışı regression düzeltmeleriyle bozulmuyor.
- [ ] Yalnız kanıtlanmış bug düzeltildi; yeni feature, broad refactor veya undocumented behavior eklenmedi.
- [ ] Mevcut API, auth, realtime, CSRF, migration ve database kontratları test bulgusu olmadan değişmedi.
- [ ] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [ ] Guest, member, host ve admin ana akışlarının success/failure/reconnect dalları staging ve otomatik regression matrisinden geçti.
- [ ] Profile/social/invite/DM/block/report ile Utility/Admin entegrasyonlarında bilinen regression kalmadı.
- [ ] Cross-route state, scroll, focus, hard refresh, session expiry ve authoritative realtime reconcile doğrulandı.
- [ ] Bulunan sapmalar yalnız sahibi olan dar katmanda testle sabitlenerek düzeltildi; kapsam veya kontrat genişlemedi.
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave27-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave 27'yi onayladı ve Codex durdu

---

### Wave 27 Sonucu — 2026-08-12

Wave 27 yalnız uçtan uca entegrasyon/regression test hazırlığı kapsamında uygulandı; yeni ürün özelliği, UX kararı, broad refactor, backend/API/database/auth/realtime davranışı veya Wave 28 performans işi alınmadı. `Vibe frontend/tests/wave27-regression-matrix.test.ts` kayıtlı route'ları ve Wave 09–26 otomatik kanıt yüzeylerini guest/member/host/admin, success/failure/denied/recovery ve kilitli privacy/authorization sınırları altında tek matrise bağlar. `Vibe frontend/e2e/wave27-integration-regression.spec.ts` guest Room return intent → auth → authoritative join, guest Discover hard refresh/privacy ve custom back/forward route focus zincirlerini otomatikleştirir. Kök `tests/wave27-tests.md` gerçek staging için auth/create/join/Room lifecycle, profile/settings/social/invite/block/DM/report, Utility/Admin, feature flag, weak network/reconnect, mobile/keyboard/focus, Debug Checklist ve Exit Criteria matrisini içerir.

Frontend typecheck ve production build geçti; build 4672 modülü dönüştürdü ve mevcut 500 kB üzeri chunk uyarısı değişmeyen non-blocker olarak kaldı. Kullanıcının bütün Wave testlerini en sonda topluca yapma talimatıyla frontend Vitest/Playwright, backend typecheck/build/Vitest, staging/manual QA, state/role matrisi, Debug Checklist ve Exit Criteria çalıştırılmadı/doldurulmadı; açık maddeler kanıt olmadan işaretlenmedi. Test çalıştırılmadığı için regression bulgusu veya ürün kodu düzeltmesi üretilmedi. Wave 27 QA-closed veya kullanıcı onaylı değildir. Wave 19–27 toplu QA kuyruğundadır; Wave 24 dead-letter row Retry blocker'ı açık kalır ve Wave 28 başlatılmadı.

---

### Wave 28 — Performans ve Production Readiness

**Durum:** Yazıldı, uygulanmadı.

**Hedef:**
Frontend render/bundle/media performansı, realtime recovery, feature-flag ve mevcut deployment/operasyon kapıları production-shaped koşullarda doğrulanır ve belgelenmiş tasarımı bozmadan iyileştirilir.

**Neden bu sırada geliyor:**
Performans optimizasyonu ancak nihai component ve integration davranışı sabitken ölçülebilir; aksi hâlde ölçümler ve düzeltmeler geçersizleşir.

**Bağımlılıklar:**
- Wave 27 regression kapanışı tamamlanmış olmalıdır.
- Production runbook, env/feature flag ve repository sınırları korunmalıdır.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/NEXT_TASKS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `### 1.3 Repository sınırı`
  - `### 3.3 Durdurmadan önce yerel doğrulama`
- `Design_Wave_Map.md`
  - `### Wave 28 — Performans ve Production Readiness`
- `Roads/project-foundation/06-build-strategy/production-discipline-and-deploy-runbook.md`
  - `## 9. Production Smoke Test`
  - `## 10. Regression Checklist`
  - `## 13. Release Gate`
- `Roads/project-foundation/06-build-strategy/release-hardening-and-render-checklist.md`
  - `## 4. Frontend Release Checklist`
  - `## 8. Render Setup Direction`
  - `## 9. Release Readiness Rule`
- Uygulanabilirlik referansları: `Vibe frontend/package.json`, Vite build çıktısı, `src/lib/routes.ts`, `src/rooms/YouTubeRoomPlayer.tsx`, `src/rooms/realtimeClient.ts`, `src/social/useDirectMessageRealtime.ts`, `src/styles/`; backend `src/config.ts`, `src/routes/health.ts`, `src/operations/operational-status.ts`, `src/realtime.ts`, `src/realtime/redis-runtime.ts`, `src/jobs/worker-runtime.ts`, mevcut Wave 45–46 readiness testleri ve Render runbook'ları.

**Görsel referans:**
- Görsel 1: Onaylı Home, Discover ve Room ekranlarının başlangıç render/LCP alanları ile medya/aura katmanları.
- Görsel 2: Messages, Social ve Room reconnect/degraded/offline feedback yüzeylerinin desktop/mobile durumları.
- Görsel 3: Production smoke sırasında karşılaştırılacak bütün ana route'ların onaylı steady-state ekranları.

> Görseller Wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz. Görseldeki network süreleri, asset boyutları, kullanıcı/oda sayıları ve runtime durumları temsilîdir; performans kabulü ölçüm kanıtına, production readiness ise mevcut runbook/env/feature-flag kontratlarına dayanır.

---

**Kapsam içi:**
- LCP/CLS, route/bundle ağırlığı, asset/font/thumbnail/aura maliyeti ve gereksiz rerender/player remount doğrulaması.
- DM/Room reconnect, quiet refresh, duplicate delivery ve degraded/offline recovery sürelerinin ölçülmesi ve frontend sahipliğindeki doğrulanmış sorunların giderilmesi.
- `SOCIAL_ENABLED` / `DIRECT_MESSAGES_ENABLED`, Redis/storage/worker/readiness, production smoke ve rollback kapılarının doğrulanması.

**Kapsam dışı:**
- Yeni analytics ürünü, veri toplama özelliği, database schema, API veya realtime protokol redesign'ı.
- Ölçülmemiş mikro-optimizasyon, tahminî performance budget veya onaylı görsel kaliteyi düşürmek.
- Backend/database davranışını bu tasarım Wave'i adına değiştirmek; backend yalnız mevcut production kontratlarını doğrulamak için incelenir.
- Yeni deployment sağlayıcısı, infrastructure mimarisi, feature flag veya operasyon yüzeyi eklemek.
- Production'a gerçek trafik açmak ya da feature flag değerini kullanıcı onayı olmadan değiştirmek.

---

**Implementation kontrol listesi:**

*Ölçüm baseline'ı ve frontend performansı:*
- [ ] Production build, throttling profili, cache durumu, test verisi ve viewport setini sabitleyerek tekrar üretilebilir performans baseline'ı kaydet.
- [x] Vite production build çıktısında route başlangıç bundle'larını, ortak chunk'ları ve beklenmeyen büyük asset/dependency katkılarını ölç.
- [ ] Home, Discover ve Room başlangıç render'larında LCP elementini ve blocking font/style/media zincirini ölçerek gerçek bottleneck'i belirle.
- [ ] Home, Discover, Room, Messages ve Admin'de CLS kaynaklarını ölç; dimensionsız media, geç gelen font/state ve overlay kaynaklı kaymaları düzelt.
- [ ] Thumbnail/avatar/media öğelerinde gerçek boyut, aspect-ratio, lazy/eager öncelik ve decode davranışını viewport kullanımına göre doğrula.
- [ ] Manrope/Inter yükleme stratejisinin ilk render'ı gereksiz bloke etmediğini ve fallback swap'in layout shift üretmediğini doğrula.
- [ ] Aura, blur, shadow, filter ve sürekli compositing maliyetini düşük güçlü mobil profilde ölç; yalnız ölçülen pahalı dekoratif katmanı canonical görünümü koruyarak sınırla.
- [ ] React profiler ile Home/Discover/Room/Social/Messages/Admin state değişimlerinde gereksiz geniş rerender zincirlerini belirle ve yalnız kanıtlı owner sınırını düzelt.
- [ ] `YouTubeRoomPlayer.tsx` instance'ının layout, chat, participant, reconnect veya unrelated state değişiminde gereksiz remount olmadığını testle sabitle.
- [ ] Uzun Room/social/message/admin listelerinde stable key, bounded render ve scroll etkileşimini ölç; mevcut ürün davranışını değiştirmeden kanıtlı jank kaynağını gider.

*Realtime recovery ve production kapıları:*
- [ ] DM send → durable commit → realtime visibility süresini ölç; retry/reconnect sırasında duplicate row/event ve uzun disabled feedback davranışını mevcut kontrat içinde doğrula.
- [ ] Room disconnect → reconnect → subscription ready → authoritative playback/chat/presence reconcile süresini ölç ve frontend stale/duplicate render bulgusunu düzelt.
- [ ] HTTP quiet refresh, socket degraded/offline ve network recovery sırasında mevcut içerik korunumu, retry backoff ve state geçiş sürelerini ölç.
- [ ] `SOCIAL_ENABLED` kapalı/açık ve `DIRECT_MESSAGES_ENABLED` bağımlı açılım sırasını mevcut capability response ve UI visibility ile doğrula.
- [ ] Redis, private storage/evidence ve worker readiness gereksinimlerini mevcut config, `/ready`, operational snapshot ve Wave 45–46 test kanıtlarıyla doğrula.
- [ ] `/health`, `/ready`, `/api/metrics` ve admin operations yüzeylerinin secret, object key, raw evidence veya private payload sızdırmadan tanı koyabildiğini doğrula.
- [ ] Frontend `VITE_API_BASE_URL`/`VITE_WS_URL`, backend production env, CORS/session/realtime origin ve static rewrite ayarlarını runbook ile karşılaştır.
- [ ] Production-shaped frontend/backend build, Prisma validate/generate ve mevcut migration deploy dry-run kapılarını güvenli staging ortamında doğrula; schema/migration üretme.
- [ ] Runbook'taki direct refresh, session, public/private Room, two-session chat/playback, admin review ve category smoke senaryolarını release candidate üzerinde çalıştır.
- [ ] Başarısız deploy/smoke için mevcut rollback route'u, log tanı alanları ve release blocker kanıtını kaydet; gerçek deploy/rollback işlemini kullanıcı onayı olmadan başlatma.

---

**State ve rol kontrol listesi:**
- [ ] Guest state — Home/Discover/Auth/Utility ilk render ve public browsing performansı auth/private veri preload'u yapmadan ölçülür.
- [ ] Member state — Create/Profile/Social/Messages/Room route ve feature-flag davranışı production-shaped koşullarda doğrulanır.
- [ ] Host state — Player authority, Room updates ve close/moderation işlemleri profiling sırasında remount veya gecikmiş authority üretmez.
- [ ] Admin state — Admin data surfaces, refresh/actions ve operational/readiness görünürlüğü büyük payload/secret sızıntısı olmadan doğrulanır.
- [ ] Loading state — İlk yükleme geometry'si LCP/CLS'yi kötüleştirmez; spinner/skeleton main-thread maliyeti ölçülür.
- [ ] Empty state — Empty yüzey boş payload'da gereksiz asset/request veya layout shift üretmez.
- [ ] Error state — Network/runtime/deploy failure state'i retry storm, render loop veya teknik/private veri sızıntısı üretmez.
- [ ] Denied / unavailable state — Flag off, role denied, backend not-ready ve Room unavailable sonuçları pahalı/repeated request döngüsüne girmez.
- [ ] Reconnecting state — Room/DM recovery süresi ölçülür; mevcut içerik korunur ve duplicate event/state oluşmaz.
- [ ] Mobile davranışı — Düşük güçlü mobil, yavaş ağ, safe-area ve dokunma akışında LCP/CLS/jank/reconnect kabulü doğrulanır.
- [ ] Klavye / focus davranışı — Lazy render, loading replacement ve reconnect sırasında focus kaybolmaz veya beklenmedik yeniden kurulmaz.
- [ ] Reduced motion davranışı — Dekoratif compositing maliyeti azalır; işlevsel performance/reconnect feedback'i korunur.

---

**Otomatik doğrulama:**
- [x] Frontend typecheck geçiyor (`npm run typecheck`)
- [x] Frontend build geçiyor (`npm run build`)
- [ ] Frontend Vitest suite'i geçiyor (`npm run test`)
- [ ] Frontend Playwright suite'i geçiyor (`npm run test:e2e`)
- [ ] Backend typecheck geçiyor (`npm run typecheck`)
- [ ] Backend build geçiyor (`npm run build`)
- [ ] Backend Vitest suite'i geçiyor (`npm run test`)
- [ ] Prisma schema doğrulaması ve client üretimi mevcut scriptlerle geçiyor (`npm run prisma:validate`, `npm run prisma:generate`).
- [x] Production build raporu route/chunk/asset boyutları ile baseline sonrası farkı kaydediyor ve açıklanmamış kritik artış göstermiyor.
- [ ] Performance/reconnect otomasyonu LCP/CLS, player remount, Room/DM duplicate delivery ve recovery ölçümlerini tekrar üretilebilir biçimde kaydediyor.

---

**Manuel QA dosyası:**
- [x] `tests/wave28-tests.md` Türkçe olarak oluşturuldu
- [x] QA dosyası cold/warm load, yavaş ağ ve düşük güçlü mobil profilde Home/Discover/Room/Messages/Admin render ile görsel stabiliteyi evet/hayır olarak doğruluyor.
- [x] QA dosyası Room ve DM disconnect/reconnect, duplicate prevention, quiet refresh ve degraded/offline recovery sürelerini kontrol ediyor.
- [x] QA dosyası feature flag off/on sırası, Redis/storage/worker/readiness, health/metrics ve private-data sızıntısı kontrollerini içeriyor.
- [x] QA dosyası production smoke, direct refresh, two-session realtime, admin review, log diagnosability ve rollback hazırlığını kapsıyor.

---

**Debug ve doğrulama kontrol listesi:**
- [ ] Baseline ve final ölçüm aynı build, viewport, throttling, cache ve test data koşullarında alındı.
- [ ] Her optimizasyon ölçülmüş bir bottleneck'e bağlı; tahminî micro-optimization eklenmedi.
- [ ] Home/Discover/Room LCP alanı ve bütün kritik route'larda CLS kaynağı açıklanmış durumda.
- [ ] Thumbnail/avatar/font/aura iyileştirmesi onaylı visual hierarchy veya atmosferi düşürmedi.
- [ ] React state iyileştirmeleri stale closure, eksik update veya player remount üretmedi.
- [ ] Room ve DM reconnect authoritative state ile toparlanıyor; duplicate event/row/render yok.
- [ ] Loading/error/offline/reconnect feedback'i performans adına kaldırılmadı veya görünmez kılınmadı.
- [ ] `SOCIAL_ENABLED` ve `DIRECT_MESSAGES_ENABLED` açılım sırası ile flag-off güvenliği korunuyor.
- [ ] Redis/storage/worker/readiness ve operational metrics mevcut canonical sınırda doğrulandı.
- [ ] Health/ready/metrics/log yüzeylerinde secret, object key, raw evidence veya private payload yok.
- [ ] Production env, CORS/session/realtime origin ve static rewrite runbook ile eşleşiyor.
- [ ] Migration deploy yolu test edildi; `db push`, yeni schema veya plansız migration kullanılmadı.
- [ ] Production smoke ve rollback hazırlığı kanıtlandı; kullanıcı onayı olmadan gerçek trafik/flag/deploy state'i değiştirilmedi.
- [ ] `prefers-reduced-motion`, WCAG AA, keyboard/focus ve responsive kapanış optimizasyonlarla bozulmadı.
- [ ] Mevcut API, auth, realtime, database ve deployment kontratları yeniden tasarlanmadı.
- [ ] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi.

---

**Çıkış kriterleri:**
- [ ] Frontend route/bundle/media/render ölçümleri baseline ile karşılaştırıldı; bilinen ciddi LCP/CLS/jank/player-remount sorunu kalmadı.
- [ ] Room/DM reconnect, quiet refresh ve degraded/offline recovery ölçüldü; duplicate veya stale frontend state kalmadı.
- [ ] Feature flag, Redis/storage/worker/readiness, production smoke, log ve rollback kapıları mevcut runbook'a göre doğrulandı.
- [ ] Release candidate onaylı tasarım, responsive/accessibility ve regression kapanışlarını performans adına bozmadı.
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave28-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave 28'i onayladı ve Codex durdu

---

### Wave 28 Sonucu — 2026-08-12

Wave 28 yalnız Performans ve Production Readiness kapsamında uygulandı. Pre-Wave-28 production artifact baseline'ında bütün route'ların tek `685096 B` JavaScript entry'sinde olduğu ve beş self-hosted font için `167320 B` legacy WOFF kopyası üretildiği ölçüldü. Route component'leri `React.lazy` chunk sınırlarına taşındı, AppShell içinde shell/focus bağlamını koruyan route `Suspense` fallback'i eklendi, font yükleme yalnız onaylı Manrope/Inter WOFF2 dosyalarına indirildi ve Vite manifest tabanlı `npm run build:report` raporu hazırlandı. Final production build entry JavaScript'i `408585 B` olarak kaydetti (`-40.36%`); route-start toplamları Home `423092 B`, Room `482557 B`, Admin `479925 B` oldu. Legacy WOFF `0 B`, canonical CSS `186585 B`, toplam JavaScript chunk overhead'iyle baseline'a göre `+1.2%` oldu.

`Vibe frontend/tests/wave28-performance-readiness.test.ts`, `Vibe frontend/e2e/wave28-performance-readiness.spec.ts`, `Vibe backend/tests/wave28-production-readiness.test.ts` ve kök `tests/wave28-tests.md` hazırlandı. Frontend typecheck ve production build geçti. Kullanıcının bütün Wave testlerini en sonda topluca yapma talimatıyla frontend/backend Vitest, Playwright, backend typecheck/build, Prisma validate/generate/migration dry-run, runtime LCP/CLS/React Profiler/player/reconnect ölçümleri, staging/manual QA, production smoke, Debug Checklist ve Exit Criteria çalıştırılmadı/doldurulmadı; açık maddeler kanıt olmadan işaretlenmedi. Görsel referans prompt'a eklenmediği için görsel karşılaştırma yapılmadı.

Backend, database, API, auth/session, realtime protokolü, feature flag değeri, deployment sağlayıcısı ve gerçek deploy/rollback/trafik state'i değiştirilmedi. Wave 28 QA-closed veya kullanıcı onaylı değildir. Wave 19–28 toplu QA kuyruğundadır; Wave 24 dead-letter row Retry blocker'ı açık kalır. Wave 29 başlatılmadı.

---

### Wave 29 — Global Launch Final QA ve Polish

**Durum:** Yazıldı, uygulanmadı.

**Hedef:**
Onaylı görsel referanslar, gerçek cihaz/tarayıcılar, rol/state matrisi ve release kriterleri üzerinden son karşılaştırma yapılarak yalnız belgelenmiş kapsam içindeki polish sapmaları kapatılır.

**Neden bu sırada geliyor:**
Final polish, foundation, bütün ekranlar, regression ve production readiness kapanmadan yapılırsa önceki değişikliklerle yeniden bozulur.

**Bağımlılıklar:**
- Wave 28 release candidate'ı tamamlanmış olmalıdır.
- Her ekranın onaylı görselleri ilgili final QA oturumunda prompt'a yeniden eklenmelidir.

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `ai/PROJECT_BRAIN.md`, `ai/CURRENT_STATUS.md`, `ai/PRODUCT_RULES.md`, `ai/TECH_CONTEXT.md`, `ai/DECISIONS.md`, `ai/NEXT_TASKS.md`, `ai/AGENT_INSTRUCTIONS.md`
- `Design_Wave_Map.md`
  - `### Wave 29 — Global Launch Final QA ve Polish`
- `Roads/project-foundation/07-roadmaps/plans/Big_Design_Plan.md`
  - `## 2. Görsel Referans Protokolü`
  - `## 3. Genel Tamamlama ve QA Kuralları`
- `Roads/project-foundation/07-roadmaps/plans/Vibehall-Global-Launch-Readiness&Product-Polish-Plan.md`
  - `# Görsel Referansların Codex’e Aktarılma Protokolü`
  - `# Planın bitiş kriteri`
- Final karşılaştırma referansları: `Design/DESIGN_SYSTEM_COMPONENT_BOARD.md`, `Design/SYSTEM_STATES_BOARD.md`, `Design/HOME_DESIGN_PACKAGE.md`, `Design/DISCOVER_DESIGN_PACKAGE.md`, `Design/AUTH_AND_ROOM_GATE_DESIGN_PACKAGE.md`, `Design/CREATE_ROOM_DESIGN_PACKAGE.md`, `Design/ROOM_DESKTOP_DESIGN_PACKAGE.md`, `Design/PROFILE_AND_SETTINGS_DESIGN_PACKAGE.md`, `Design/SOCIAL_HUB_DESIGN_PACKAGE.md`, `Design/MESSAGES_DM_DESIGN_PACKAGE.md`, `Design/UTILITY_PAGE_TEMPLATE.MD`, `Design/ADMIN_OPERATIONAL_TEMPLATE.md` ve bu dosyadaki Wave 00–28 kabul kanıtları.
- Uygulanabilirlik referansları: bütün `Vibe frontend/src/lib/routes.ts` route sahipleri, frontend/backend build ve test scriptleri, `tests/wave00-tests.md`–`tests/wave28-tests.md` kapanış kanıtları ve production smoke/release runbook'ları.

**Görsel referans:**
- Görsel 1: Home, Discover, Auth/Gate ve Create Room için onaylı desktop/mobile, loading/empty/error varyantları.
- Görsel 2: Room Desktop participant/cinematic, Room Desktop host/moderation/ended ve Room Mobile state/role varyantları.
- Görsel 3: Profile/Settings, Social Hub, Messages, Utility/System Pages ve Admin için onaylı desktop/mobile/tablet ve state görselleri.
- Görsel 4: Design System Component Board ile System States Board'un interaction, focus, reduced-motion ve feedback karşılaştırmaları.

> Bütün onaylı görseller Wave başlamadan önce kullanıcı tarafından final QA prompt'una yeniden eklenir ve her görselin ekran/state/viewport karşılığı açıkça belirtilir. Agent dosya sisteminden görsel okumaya veya önceki oturum görüntüsünü hatırlamaya çalışmaz. Görseldeki isim, avatar, thumbnail, mesaj, sayaç, metric, tarih ve içerikler temsilîdir; gerçek ürün davranışı ve veri yalnız canonical/API/auth/realtime kontratlarından gelir.

---

**Kapsam içi:**
- Home, Discover, Auth/Gate, Create, Room Desktop/Mobile, Profile/Settings, Social, Messages, Utility ve Admin final karşılaştırması.
- Gerçek içerik uzunlukları, boş veri, zayıf ağ, viewport/browser çeşitleri ile guest/member/host/admin state matrisi.
- Copy tutarlılığı, küçük spacing/contrast/motion/state sapmaları ve release blocker sınıflandırması.

**Kapsam dışı:**
- Yeni özellik, UX kararı, design dokümanı değişikliği veya onaylı kompozisyonu yeniden tasarlamak.
- Gizli backend/database kapsamı, yeni API/realtime/auth kontratı veya plansız deployment/migration değişikliği.
- Final QA'yı yeni consolidation, broad refactor veya performans projesine dönüştürmek.
- Görseldeki temsilî içeriği gerçek ürün capability'si olarak uygulamak.
- Blocker olmayan future backlog maddesini launch kapsamına sessizce taşımak.

---

**Implementation kontrol listesi:**

*Final görsel ve ekran karşılaştırması:*
- [ ] Final QA başlamadan bütün onaylı görselleri ekran/state/viewport etiketiyle prompt'ta yeniden topla ve metinsel Design başlıklarıyla birebir eşleştir.
- [ ] Token, typography, surface, radius, border, icon, shared primitive ve desktop/mobile shell'i Component Board ile bütün route'larda karşılaştır.
- [ ] Home ve Discover desktop/mobile ilk viewport, query/filter, RoomCard, loading/empty/error ve guest/member varyantlarını onaylı görsellerle karşılaştır.
- [ ] Normal Auth, Room Context Auth Gate/return intent ve Create Room success/validation/error/host geçişini desktop/mobile referanslarla karşılaştır.
- [ ] Room Desktop participant/cinematic layout, video/chat/participant oranı, join/reconnect/ended state'lerini ilgili referanslarla karşılaştır.
- [ ] Room Desktop host control, moderation, confirmation, close/leave ve participant sonuç state'lerini host görselleriyle karşılaştır.
- [ ] Room Mobile player/chat/participants/host controls, keyboard/safe-area/reconnect/ended kompozisyonlarını mobil referanslarla karşılaştır.
- [ ] Own/public Profile ile Settings/privacy/account safety desktop/mobile state'lerini ilgili referanslarla karşılaştır.
- [ ] Social Hub friends/requests/PYWW/invites/blocked/presence ve mobil kapanışı ilgili referanslarla karşılaştır.
- [ ] Messages desktop/mobile conversation list, thread/composer, delivery/read/retry/reconnect ve invite entegrasyonunu ilgili referanslarla karşılaştır.
- [ ] Utility/Legal/Support/Not Found ile Admin foundation/surfaces/operations/content state'lerini ilgili utility/admin referanslarıyla karşılaştır.
- [ ] Loading, empty, error, denied, unavailable, reconnecting, toast, success ve critical feedback'i System States Board ile route genelinde karşılaştır.

*Gerçek koşullar ve kontrollü polish:*
- [ ] Gerçek minimum/maksimum title, username, bio, message, URL, legal content, metric ve list uzunluklarında wrap/truncation/overflow davranışını doğrula.
- [ ] Sıfır Room/friend/invite/conversation/report/content sonucu ile boş kategorilerde sahte aktivite veya unsupported CTA bulunmadığını doğrula.
- [ ] Zayıf ağ, gecikmiş HTTP, socket disconnect/reconnect, session expiry ve partial service readiness altında state hiyerarşisini doğrula.
- [ ] Guest, member, host ve admin için görünür navigation/action/state matrisini aynı route'larda karşılaştır ve authorization sızıntısını kontrol et.
- [ ] Desteklenen gerçek mobil/tablet/desktop cihazlarda ve Chrome/Firefox/Safari/Edge sınıfı tarayıcılarda kritik kompozisyon/akış farklarını kaydet.
- [ ] Başlık, CTA, validation, loading/error/empty, moderation, privacy ve support copy'sini canonical ton/anlam tutarlılığıyla kontrol et.
- [ ] Yalnız belgelenmiş ölçü/ton/motion/state sınırındaki küçük sapmaları sahibi olan en dar CSS/component katmanında düzelt ve ilgili regression testini yeniden çalıştır.
- [ ] Her bulguyu release blocker, doğrulanmış non-blocker veya future backlog olarak kanıtıyla sınıflandır; blocker kapanmadan final kabul isteme.

---

**State ve rol kontrol listesi:**
- [ ] Guest state — Home/Discover/Utility browsing, auth gate, return intent ve private/member/admin denial final cihaz/tarayıcı matrisinden geçer.
- [ ] Member state — Auth/Create/Room/Profile/Settings/Social/Messages/Utility ana akışları görsel ve davranışsal kabulden geçer.
- [ ] Host state — Desktop/mobile host controls, moderation, close/leave ve Room end sonuçları bütün final state'lerle doğrulanır.
- [ ] Admin state — Admin shell/surfaces/actions/content/operations tablet/desktop, keyboard ve security sınırlarıyla final kabulden geçer.
- [ ] Loading state — İlk yükleme, quiet refresh ve local mutation loading bütün ekranlarda doğru geometry ve feedback taşır.
- [ ] Empty state — Gerçek boş veri sakin, açıklayıcı ve capability-doğru kalır; fake content veya dead CTA yoktur.
- [ ] Error state — Field/local/page/critical/realtime hataları doğru owner, retry ve güvenli copy ile final kabulden geçer.
- [ ] Denied / unavailable state — Auth/role/block/full/ended/flag/content readiness ayrımları private detay sızdırmadan anlaşılır kalır.
- [ ] Reconnecting state — Room ve DM reconnect zayıf ağda görünür, sakin, duplicate-free ve authoritative sonuçla kapanır.
- [ ] Mobile davranışı — Bütün hedef ekranlar gerçek cihaz, safe-area, keyboard, text scaling ve orientation koşullarında kapanır.
- [ ] Klavye / focus davranışı — Bütün temel görevler görünür focus, doğru order/trap/restore ve route focus bağlamıyla tamamlanır.
- [ ] Reduced motion davranışı — Final referans karakteri korunurken sürekli/dekoratif motion azalır ve işlevsel feedback kalır.

---

**Otomatik doğrulama:**
- [ ] Frontend typecheck geçiyor (`npm run typecheck`)
- [ ] Frontend build geçiyor (`npm run build`)
- [ ] Frontend Vitest suite'i geçiyor (`npm run test`)
- [ ] Frontend Playwright suite'i geçiyor (`npm run test:e2e`)
- [ ] Backend typecheck geçiyor (`npm run typecheck`)
- [ ] Backend build geçiyor (`npm run build`)
- [ ] Backend Vitest suite'i geçiyor (`npm run test`)
- [ ] Prisma schema doğrulaması ve client üretimi geçiyor (`npm run prisma:validate`, `npm run prisma:generate`).
- [ ] Final route/role/state smoke suite'i bütün custom route'ları direct refresh, success ve kritik failure state'leriyle doğruluyor.
- [ ] Visual/a11y/performance regression kanıtları Wave 26–28 baseline'larına göre açıklanmamış kritik fark bırakmıyor.

---

**Manuel QA dosyası:**
- [ ] `tests/wave29-tests.md` Türkçe olarak oluşturuldu
- [ ] QA dosyası bütün ekranların onaylı görselle desktop/mobile/tablet karşılaştırmasını staging'de evet/hayır ile kapsıyor.
- [ ] QA dosyası guest/member/host/admin ile loading/empty/error/denied/unavailable/reconnecting success/failure matrisini içeriyor.
- [ ] QA dosyası gerçek içerik uzunluğu, boş veri, zayıf ağ, text scaling, safe-area, keyboard/screen reader ve reduced-motion senaryolarını kapsıyor.
- [ ] QA dosyası gerçek cihaz/tarayıcı, production smoke, performance baseline, feature flag/readiness ve release blocker kapanış kanıtını içeriyor.

---

**Debug ve doğrulama kontrol listesi:**
- [ ] Bütün onaylı görseller final QA prompt'una yeniden eklendi ve ekran/state/viewport karşılığı açıkça belirtildi.
- [ ] Görsel referanslardaki blok sırası, ana oranlar, visual hierarchy, spacing karakteri ve atmosfer korunuyor.
- [ ] Home, Discover ve Room aynı tasarım evreninde; hiçbir ekran generic dashboard veya farklı ürün gibi görünmüyor.
- [ ] Room'da video/atmosfer ana odak; chat ve navigation destekleyici hiyerarşide kalıyor.
- [ ] Tipografi hiyerarşisi doğru — Manrope başlık, Inter arayüz/metin bütün route'larda tutarlı.
- [ ] Accent `#FF625A` kontrollü; büyük yüzey, uzun metin veya rastgele badge dekorasyonuna yayılmıyor.
- [ ] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`).
- [ ] Cam efekti yalnız modal, toast, video overlay gibi geçici katmanlarda kaldı.
- [ ] Sahte oda, kullanıcı, aktivite, metric, legal metin, support kanalı veya admin capability yok.
- [ ] Gerçek uzun/kısa içerik, boş veri, zayıf ağ ve bütün kritik state'lerde layout/flow bozulmuyor.
- [ ] Guest/member/host/admin action ve visibility sınırlarında authorization/privacy sızıntısı yok.
- [ ] `prefers-reduced-motion` destekleniyor ve işlevsel feedback korunuyor.
- [ ] WCAG AA, screen reader semantiği, touch target ve görünür keyboard focus final matriste geçiyor.
- [ ] Mobil/tablet/desktop ve hedef tarayıcılarda kritik overflow, focus, keyboard veya safe-area sorunu yok.
- [ ] Frontend render/realtime ve production readiness Wave 28 kabul seviyesinden gerilemedi.
- [ ] Mevcut API, auth, realtime, feature flag, moderation, evidence, database ve deploy kontratları korundu.
- [ ] Yalnız belgelenmiş polish sapmaları düzeltildi; yeni feature, UX/design kararı veya hidden backend kapsamı açılmadı.
- [ ] Açık her bulgu blocker/non-blocker/backlog olarak kanıtla sınıflandırıldı; gizli borç bırakılmadı.
- [ ] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi ve karar alınmadan kabul edilmedi.

---

**Çıkış kriterleri:**
- [ ] Bütün hedef ekranlar onaylı görseller, gerçek cihaz/tarayıcılar ve guest/member/host/admin state matrisiyle karşılaştırıldı.
- [ ] Responsive, accessibility, reduced motion, integration, performance ve production readiness kapanışlarında bilinen ciddi gerileme yok.
- [ ] Yalnız belgelenmiş kapsam içindeki polish sapmaları kapandı; yeni ürün/UX/API/backend/database kararı eklenmedi.
- [ ] Açık blocker yok; kalan bilinçli non-blocker/future backlog maddeleri görünür kanıt ve sahiplikle kaydedildi.
- [ ] Vibehall için bilinen ciddi görsel, akış, mobil, erişilebilirlik, performans veya production engeli olmayan Global Launch Ready aday doğrulandı.
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave29-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave 29'u onayladı ve Codex durdu

---

### Wave 29 Sonucu — [YYYY-AA-GG]

> Bu bölüm wave tamamlandıktan SONRA doldurulur. Wave yazılırken boş bırakılır.

---
