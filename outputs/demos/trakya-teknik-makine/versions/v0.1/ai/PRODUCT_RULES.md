# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PRD-01 (Firma Doğruluğu Rule)**: Demo içinde kullanılan tüm firma ismi, yetkili servislik beyanı (Disan Hidrolik Trakya Bölge Yetkili Servisi) ve 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) doğrulanmış gerçek kaynaklarla (`trakyateknikmakine.com`) %100 birebir örtüşmelidir (`VAL-13`).
- **PRD-02 (Anti-Enrichment Rule)**: Doğrulanmamış 7/24 garanti, sahte sertifika, sahte müşteri yorumu veya kanıtlanmamış istatistiksel veriler demo içeriğine eklenemez.
- **PRD-03 (Service Boundary Rule)**: Hizmetler ve firma bilgileri presentation katmanına doğrudan harç gibi gömülemez; soyutlanmış data service interface'inden (mock adapter) çekilmelidir.
- **PRD-04 (Conversion Priority Rule)**: Her ana bölüm (Hero, Hizmetler, Kurumsal Hakkında) ziyaretçiyi hızlı ve eyleme geçirilebilir telefon veya e-posta iletişim kanallarına yönlendirecek CTA elemanlarını içermelidir.

## 2. Davranış ve Akış Kısıtlamaları

- **CON-01 (No Authentication)**: Demo içinde kullanıcı girişi, üye olma, şifre sıfırlama veya auth paneli bulunmayacaktır.
- **CON-02 (No E-Commerce)**: Sepet, online ödeme, fiyatlandırma veya doğrudan sipariş tamamlama akışı kapsam dışıdır.
- **CON-03 (No Real Admin)**: Gerçek zamanlı içerik yönetim paneli veya CMS fonksiyonu ilk demo aşamasında yer almaz.
- **CON-04 (Clean Data Isolation)**: Mock/local veriler component'lerin içinde dağıtılmamalı, merkezi data dosyasından soyut servis aracılığıyla okunmalıdır.

## 3. Kapsam Sınırları ve Kuralları

- **SCP-R01**: Kapsam içi: Ana Sayfa, Kurumsal Güven (Hakkımızda), 3 Ana Hizmet Detay Sunumu, İletişim & CTA bölümleri.
- **SCP-R02**: Kapsam dışı: Backend veritabanı, sunucu tarafı API, e-posta gönderim backend'i, domain/hosting geçiş operasyonları.
- **SCP-R03**: Gelecek Kapsam (Future Scope): Canlı WhatsApp hattı entegrasyonu, harita bileşeni ve dinamik teklif alma formu ileride backend eklendiğinde devreye girecek işlevlerdir; bugünkü demo scope'unda bloke edici gösterilemez.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-01 (Responsive First)**: Tüm arayüz elemanları masaüstü (1440px+), tablet (768px-1024px) ve mobil (375px-430px) ekran boyutlarında kusursuz hiyerarşi ve erişilebilirlik sunmalıdır.
- **UX-02 (Visual Hierarchy)**: Disan Hidrolik yetkili servisliği ve 3 ana hizmet vurgusu ilk 5 saniyede ziyaretçi tarafından fark edilebilir netlikte yer almalıdır.
- **UX-03 (Touch & Telephony Handling)**: Mobil cihazlarda telefon CTA butonları `tel:` bağlantısı ile cihazın arama işlevini, e-posta CTA butonları `mailto:` bağlantısını tetiklemelidir.
- **UX-04 (Performance & Perception)**: Görsel ve sayfa yüklenme algısı anlık (smooth & fast) olmalı; jenerik ve ağır üçüncü parti template kütüphanelerine bağımlı kalınmamalıdır.
