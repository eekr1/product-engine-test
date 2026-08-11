# Trakya Teknik Makine — Product Rules

## 1. Kapsam ve Davranış Kuralları

- **PR-001 (Doğrulanmış Firma Beyanlarının Korunması):** Demo içinde yer alan firma unvanı (Trakya Teknik Makine), yetkili servis tanımı (Disan Hidrolik Makine Trakya Bölge Yetkili Servisi) ve 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) eksiksiz korunmalıdır.
- **PR-002 (Doğrulanmamış Bilgi Uydurmama):** Sitede bulunmayan müşteri referansları, sertifika iddiaları, sahte ekip kadrosu veya kanıtlanmamış başarı istatistikleri uydurulmamalıdır.
- **PR-003 (Mobil ve Masaüstü Kusursuzluk):** Demo, hem masaüstü hem de mobil cihazlarda satış görüşmesi sırasında herhangi bir görsel kırılma olmadan sorunsuz gösterilebilmelidir.

---

## 2. Kullanıcı Deneyimi ve İletişim Kısıtları

- **PR-004 (Erişilebilir İletişim CTA'ları):** Telefon numaraları ve e-posta adresleri tıklanabilir bağlantılar (`tel:` ve `mailto:`) olarak sunulmalıdır.
- **PR-005 (Hızlı Hizmet Keşfi):** Ziyaretçi ana sayfaya girdiğinde ilk 5 saniye içinde firmanın uzmanlığını ve 3 ana hizmet alanını net biçimde algılayabilmelidir.
- **PR-006 (Görsel Sunum Kalitesi):** Hizmetler yalnızca düz metin olarak değil, endüstriyel görsel kartlar, teknik simgeler ve belirgin içerik hiyerarşisi ile sunulmalıdır.

---

## 3. Mimari ve Veri Kısıtları

- **PR-007 (Clean Data Boundary):** Mock veriler HTML/JS bileşenlerinin içine düzensiz biçimde gömülmemelidir; `DataService` mock adapter üzerinden sunulmalıdır.
- **PR-008 (Sahte Backend Yasaktır):** Henüz kararlaştırılmamış API endpoint'leri, database şemaları veya backend servisleri uydurulmamalıdır.
