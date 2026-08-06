# PRODUCT_RULES.md

Bu dosya Vibehall'ın ürün kurallarını, korunması gereken deneyim ilkelerini ve "yapılmaması gerekenleri" içerir.  
Her kural, koda veya tasarıma dönüşmeden önce bu liste ile kontrol edilmelidir.  
Kurallar `PROJECT_BRAIN.md`'deki ruha ters düşmemeli.

---

## 1. Temel Ürün Kuralları (Asla İhlal Edilmez)

### 1.1 Oda Kuralları
- Her odanın tek bir hostu vardır. Host değişmez; el değiştirme yoktur.
- Host oda içinde tek otorite sahibidir: oynatma kontrolü, kick, ban, oda kapatma.
- Host odayı kapattığında veya açıkça ayrıldığında oda **hemen biter** — tüm katılımcılar için.
- Sona ermiş oda tekrar açılamaz.
- Oda oluşturulur oluşturulmaz `live` state'e geçer; "taslak" yoktur.
- Oda kapasitesini aşan katılım bloklanır.

### 1.2 Erişim Kuralları
- Misafirler (giriş yapmamış kullanıcılar) Discover'ı ve public profilleri görebilir; odaya giremez.
- Odaya girmek için hesap ve oturum gereklidir.
- Özel (private) oda: direct link + giriş yapmış hesap + doğru şifre. Discover'da görünmez.
- Private oda'ya arkadaş daveti (Wave 39+): host invite + accept → şifresiz giriş hakkı. Normal capacity/ban/room-end kontrolleri geçerlidir.
- Banlanan kullanıcı o odaya bir daha giremez; direct link veya şifre bu yasağı bypass edemez.
- Block: birbirini bloklayan kullanıcılar birbirinin host ettiği odayı Discover'da göremez; birbirinin odasına giremez.

### 1.3 Chat Kuralları
- Kullanıcı odaya katıldığında sohbet başlar; daha önceki mesajlar gösterilmez (tam transcript yok).
- Chat, oda deneyimini destekleyen ikincil bir unsurdur; odanın merkezi değildir.
- Chat, odayı boğmamalıdır. Gürültü değil, atmosfer.

### 1.4 Oynatma Kuralları
- Paylaşımlı oynatma host'a aittir: play, pause, seek.
- Katılımcılar paylaşımlı oynatmayı kontrol edemez.
- Yeni katılan ve yeniden bağlanan kullanıcılar mevcut paylaşımlı pozisyona sync olur.
- Drift correction uygulanır; küçük sapmalar otomatik düzeltilir.

---

## 2. Keşif (Discover) Kuralları

- Discover yalnızca `live` + `public` odaları gösterir.
- Private odalar Discover'da asla görünmez.
- Discover; arama (title/host/category), kategori filtresi, sıralama (yeni, aktif, neredeyse dolu) destekler.
- Misafir Discover'ı görebilir fakat odaya girmek için auth kapısından geçer.

---

## 3. Moderasyon ve Güvenlik Kuralları

- Kick: kullanıcıyı o anki oda oturumundan çıkarır. Yasak değildir; tekrar girebilir.
- Ban: kullanıcıyı o odadan kalıcı olarak yasaklar. Room ban, global ban değildir.
- Raporlama: oda, kullanıcı ve mesaj raporlanabilir (harassment, hate_speech, spam, vb.).
- Raporlar admin tarafından incelenir; `open → reviewed/action_taken/dismissed/escalated` akışı.
- Admin, hesap durumlarını değiştirebilir: `active → restricted/suspended/banned`.
- Son aktif adminin kendi hesabını kısıtlaması engellenir.

---

## 4. Sosyal Katman Kuralları

- Vibehall genel sosyal ağa dönüşmemeli; sosyal katman oda merkezli olmalıdır.
- Arkadaşlık: karşılıklı (mutual), istek tabanlı, expiry/cooldown/limit içerir.
- Takipçi, beğeni, puan, rozet, sıralama, performans döngüsü yoktur.
- Global kullanıcı dizini veya arama yoktur; yalnız arkadaş listesi yerel filtrelenir.
- Block: iki yönlü erişim engeli; gizlilik yönü API'lardan sızdırılmaz.
- Presence: Online/Offline + coarse last-seen; dakika düzeyinde timestamp kamuya gösterilmez.
- Privacy tercihleri (`onlinePrivacy`, `lastSeenPrivacy`, `invitePrivacy`, `friendRequestPrivacy`) kullanıcı tarafından ayarlanır.
- Bildirimler in-app'tir; email/push henüz yoktur.

---

## 5. Profil ve Kimlik Kuralları

- Username değiştirilemez, benzersizdir ve `@username` formatında gösterilir.
- Display name: 2-48 karakter, değiştirilebilir.
- Bio: isteğe bağlı, max 160 karakter, düz metin.
- Avatar: yönetilen yükleme (JPEG/PNG/WebP, max 5MB); backend işleme → 128px + 512px WebP. Harici URL düzenleme kaldırıldı.
- Profil herkese açık değildir: misafir minimal görünüm alır (avatar, displayName, @username, bio, katılım ay/yıl, auth CTA).
- Arkadaş listesi/sayısı, email, rol, moderasyon geçmişi asla herkese açık değildir.

---

## 6. Admin Kuralları

- Admin paneli yalnız `UserRole.admin` rolüne açıktır.
- Admin `/admin` route'u normal navigasyonda gizlidir.
- Admin bootstrap secret, en az bir aktif admin var olduktan sonra kilitlenir.
- Son aktif admin kendi hesabını kısıtlayamaz.
- Yönetici rolü genişletme (moderator) henüz yapılmadı; gerektiğinde ayrı plan gerektirir.

---

## 7. İçerik ve Platform Kuralları

- Platform içerik sayfaları (Terms, Privacy, Community Guidelines, Support) admin tarafından yönetilir.
- İçerik taslak (draft) ve yayınlanmış (published) state'e sahiptir.
- Şu an yalnız YouTube desteklenmektedir (`MediaSourceProvider.youtube`).
- Kaynak URL'den video ID ayrıştırılır ve normalize edilir; thumbnail ve başlık meta verisi kullanılır.

---

## 8. Yapılmaması Gerekenler

- Odayı "sadece bir video oynatıcı" ya da "link paylaşım sitesi" gibi hissettiren değişiklikler yapılmamalı.
- Discord klonu olmaya doğru sürüklenmemeli: karmaşık kanal yapıları, sunucu sistemi, vb.
- Gereksiz özellikler eklenerek ana oda deneyimi zayıflatılmamalı.
- Atmosfer hissi karmaşık dashboard arayüzüne dönüştürülmemeli.
- Kullanıcı zorla sosyalleşmeye itilmemeli; Vibehall olasılık açar, baskı yapmaz.
- Profil ego yarışmasına dönüşmemeli; asıl yıldız oda atmosferidir.
- Teknik düzeltmeler köke inmeli; yüzeysel yama uygulanmamalı.
- Wave sınırları atlanmamalı; her wave debug + verification ile tamamlanmalı.
- "Gerçek kod" ile çelişen canonik dokümanlar sessizce yok sayılmamalı; çatışma onay gerektiriyorsa durdurulmalı.

---

## 9. Tasarım Kuralları (Kısa)

- Dark-first tasarım; gece kullanımına uygun atmosfer.
- Sade ama boş değil; canlı ama kalabalık değil.
- İnsan varlığı küçük detaylarla hissettirilir: katılımcı sayısı, canlı oda kartları, presence göstergesi.
- Design system Waves 23-31'de kuruldu; yeni UI bu sistemi bozmamalı.
- Oda sayfası en değerli tasarım yüzeyidir; video önce gelir.
