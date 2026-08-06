# STANDART WAVE TEMPLATE

> Aşağıdaki blok her yeni wave için kopyalanır ve doldurulur.
> Template içindeki `[KÖŞELI PARANTEZ İÇİ]` alanlar gerçek wave yazılırken doldurulur ve parantezler kaldırılır.
> Template kendisi bu dosyada kalır ve silinmez.

---

### Wave [NN] — [Başlık]

**Durum:** Yazıldı, uygulanmadı.

**Hedef:**
[Bu wave'in tek cümlelik amacı. Ne teslim ediyor? Bittiğinde ne değişmiş olacak?]

**Neden bu sırada geliyor:**
[Bu wave neden bir öncekinden sonra, bir sonrakinden önce olmak zorunda? Dependency mantığını kısaca açıkla. Okuyucuya dependency zincirini tahmin ettirme.]

**Bağımlılıklar:**
- [Önceki wave veya koşul — örn. "Wave NN-1 tamamlandı ve kullanıcı onayladı"]
- [Varsa ikinci bağımlılık]

**Canonical hizalama:**
Bu wave'de okunması gereken kaynak dosyalar:
- `Roads/project-foundation/[ilgili dosya]`
- `Design/[ilgili paket dosyası]`
- [Gerekirse ek kaynak]

**Görsel referans:**
- Görsel 1: [Hangi ekran / hangi durum]
- Görsel 2: [Varsa]
- Görsel 3: [Varsa]

> Görseller wave başlamadan önce kullanıcı tarafından prompt'a eklenir. Agent dosya sisteminden görsel okumaya çalışmaz.

---

**Kapsam içi:**
[Madde madde, net ve sınırlı. Belirsiz ifade kullanma. Her madde bağımsız doğrulanabilir olmalı.]
- [Madde 1]
- [Madde 2]

**Kapsam dışı:**
[Bu wave'de kesinlikle yapılmayacaklar. Bunları açıkça yazmak agent'ın kaymasını önler.]
- [Madde 1]
- [Madde 2]

---

**Implementation kontrol listesi:**

*[Alt bölüm başlığı — örn. CSS Mimarisi / Bileşenler / Davranış / State]:*
- [ ] [Görev — atomic, doğrulanabilir, tek sorumluluk taşıyan]
- [ ] [Görev]

*[Alt bölüm başlığı]:*
- [ ] [Görev]
- [ ] [Görev]

---

**State ve rol kontrol listesi:**
[Wave hangi state kombinasyonlarını etkiliyor? Hiçbiri atlanamaz. Geçerli olmayanları sil ve nedenini yaz.]
- [ ] Guest state
- [ ] Member state
- [ ] Host state (geçerliyse)
- [ ] Admin state (geçerliyse)
- [ ] Loading state
- [ ] Empty state
- [ ] Error state
- [ ] Denied / unavailable state
- [ ] Reconnecting state (geçerliyse)
- [ ] Mobile davranışı
- [ ] Klavye / focus davranışı
- [ ] Reduced motion davranışı

---

**Otomatik doğrulama:**
- [ ] Frontend typecheck geçiyor (`npm run typecheck`)
- [ ] Frontend build geçiyor (`npm run build`)
- [ ] [Varsa ek otomatik test — Vitest, Playwright vb.]
- [ ] Backend typecheck geçiyor (backend değiştiyse)
- [ ] Backend build geçiyor (backend değiştiyse)

---

**Manuel QA dosyası:**
- [ ] `tests/wave[NN]-tests.md` Türkçe olarak oluşturuldu
- [ ] [QA dosyasında kontrol edilecek özel senaryo]
- [ ] [QA dosyasında kontrol edilecek özel senaryo]

---

**Debug ve doğrulama kontrol listesi:**
[Bu liste staging'de yapılan görsel ve davranışsal karşılaştırmanın çerçevesi. Her madde "evet / hayır" ile yanıtlanabilir olmalı.]
- [ ] Görsel referanstaki blok sırası korundu
- [ ] Ana oranlar (video/chat, içerik/boşluk) korundu
- [ ] Görsel odak hiyerarşisi doğru — video en baskın, navigasyon en sakin
- [ ] Tipografi hiyerarşisi (Manrope başlık, Inter arayüz) doğru uygulandı
- [ ] Accent `#FF625A` kontrollü kullanıldı — arka plan ya da büyük yüzeylerde değil
- [ ] Derinlik sistemi üç katmanda kaldı (`#090A0F` / `#10121A` / `#171A24`)
- [ ] Cam efekti yalnızca geçici katmanlarda (modal, toast, video overlay) kullanıldı
- [ ] Sahte içerik veya sahte aktivite yok
- [ ] `prefers-reduced-motion` destekleniyor
- [ ] WCAG AA kontrast hedefi normal metinlerde sağlandı
- [ ] Klavye focus görünür
- [ ] Yatay overflow yok
- [ ] Mevcut fonksiyonlar korundu — API kontratları, auth, realtime davranış
- [ ] Görsel referanstan açıklanmamış sapma yok; varsa kullanıcıya bildirildi

---

**Çıkış kriterleri:**
[Wave'in "tamamlandı" sayılması için hepsinin sağlanması gereken koşullar. Bunlar muğlak değil, doğrulanabilir olmalı.]
- [ ] [Kriter 1 — örn. "Home sayfası görsel referansla tutarlı; guest ve member state'leri çalışıyor"]
- [ ] [Kriter 2]
- [ ] [Kriter 3]
- [ ] Otomatik doğrulama kontrol listesi geçti
- [ ] Kullanıcı `tests/wave[NN]-tests.md` dosyasını doldurdu ve blocker bildirmedi
- [ ] Kullanıcı Wave [NN]'i onayladı ve Codex durdu

---

### Wave [NN] Sonucu — [YYYY-AA-GG]

> Bu bölüm wave tamamlandıktan SONRA doldurulur. Wave yazılırken boş bırakılır.

[Ne uygulandı? Hangi dosyalar değişti? Hangi kararlar alındı? Önemli sınırlılıklar neler? Doğrulama nasıl geçti? Kullanıcı onayı ne zaman alındı?]

---
---

# TEMPLATE KULLANIM KILAVUZU

Bu bölüm template'i doğru kullanan agent ve kullanıcı için referanstır.

## Template'i kopyalarken

1. `Wave [NN] — [Başlık]` kısmına gerçek numara ve başlık yaz
2. `[KÖŞELI PARANTEZ İÇİ]` olan her alanı doldur
3. Geçerli olmayan maddeleri sil — ama neden sildiğini birkaç kelimeyle not et
4. Boş alan bırakma; emin değilsen "Henüz belirlenmedi" yaz ve wave başlamadan netleştir
5. `Wave [NN] Sonucu` bölümünü wave tamamlanana kadar boş bırak

## Kontrol listelerinde kural

- `[ ]` — yapılmadı veya doğrulanmadı
- `[x]` — tamamlandı ve kanıt var
- `[-]` — bu wave için geçerli değil (neden geçersiz olduğunu yanına yaz)

Kanıt olmadan `[x]` işaretleme. Staging'de görmeyi beklerken değil, gördükten sonra işaretle.

## Wave boyutu

Bir Wave'in implementation listesi çoğunlukla 10–20 doğrulanabilir görev
içermelidir. Bu bir hedef aralıktır, zorunlu kota değildir.

Wave boyutu görev sayısından çok:
- tek bir anlamlı teslim üretmesi,
- bağımsız doğrulanabilmesi,
- makul bir çalışma oturumunda tamamlanabilmesi
üzerinden değerlendirilir.

## Bağımlılık kuralı

Her wave "Bağımlılıklar" bölümünde önceki wave'e açıkça referans verir. Bağımlılık zinciri kırılırsa wave başlatılmaz.