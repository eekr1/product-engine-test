# Trakya Teknik Makine — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

1. **Yetkili Servis Doğruluğu**: Sitede Trakya Teknik Makine'nin "Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi" olduğu bilgisi açıkça öne çıkarılmalı; başka markalar için yetkili servislik iddiası eklenmemelidir.
2. **3 Temel Hizmet Kuralı**: Firmanın öne çıkan üç temel hizmet alanı — *Yedek Parça Temini*, *Yerinde Teknik Destek*, *Makine Bakım ve Onarım* — ayrı ve belirgin içerik alanları olarak sunulmalıdır.
3. **Doğrulanmış Bilgi İlkesi**: Mevcut web sitesinde (trakyateknikmakine.com) bulunmayan sahte sertifika, müşteri referansı veya doğrulanmamış hizmet iddiası uydurulmamalıdır.
4. **Doğrudan İletişim Önceliği**: Telefon ve e-posta bağlantıları tek tıkla cihazın varsayılan arama veya e-posta uygulamasını başlatacak standart HTML protokollere (`tel:`, `mailto:`) sahip olmalıdır.

## 2. Davranış ve Akış Kısıtlamaları

1. **Satış Demosu Bütünlüğü**: Arayüz potansiyel müşteri görüşmesinde eksik/kırık sayfa veya tamamlanmamış placeholder hissi vermemeli; uçtan uca çalışır bir frontend deneyimi sunmalıdır.
2. **Throwaway Kod Yasağı**: Frontend bileşenleri mock verileri doğrudan JSX/HTML içine gömmemeli; mock service katmanı üzerinden veri tüketmelidir.
3. **Mevcut Siteden Bağımsız Tasarım**: Eski SITE123 sitesinin görsel tasarımı kopyalanmayacak; firmanın gerçek hizmet metinleri korunarak projeye özgü yeni bir visual concept uygulanacaktır.

## 3. Kapsam Sınırları ve Kuralları

1. **Demo Kapsamı**: Arayüz responsive masaüstü ve mobil cihazlarda sorunsuz görüntülenmelidir.
2. **Kapsam Dışı İşlevler**: İlk aşamada admin paneli, kullanıcı girişi, veritabanı bağlantısı, e-ticaret/online ödeme kapsam dışındadır.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

1. **Açık Hizmet Hiyerarşisi**: Kullanıcı siteye girdiğinde ilk 3 saniyede firmanın ne yaptığını, Disan Hidrolik yetkili servisi olduğunu ve 3 temel hizmet alanını anlayabilmelidir.
2. **Erişilebilir İletişim CTA'ları**: İletişim bilgileri (telefon, e-posta, adres) sayfa boyunca kolay erişilebilir alanlarda ve mobilde sabit/erişilebilir aksiyon çubuğunda sunulmalıdır.
3. **Performans ve Uyum**: Arayüz hızlı yüklenmeli, mobil dokunmatik hedef boyutlarına (min 44x44px) uygun olmalı ve modern tarayıcılarda sorunsuz çalışmalıdır.
