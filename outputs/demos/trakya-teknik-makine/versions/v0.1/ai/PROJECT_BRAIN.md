# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin gerçek firma ve hizmet bilgilerini profesyonel, modern ve güven veren biçimde sunan kurumsal frontend demo hazırlamak ve potansiyel satış görüşmesinde ikna edici bir kurumsal sunum yüzeyi sağlamak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Trakya Teknik Makine'nin potansiyel müşterilere ve satış görüşmelerinde hizmet yetkinliklerini, bölge yetkili servis statüsünü hızlı ve profesyonel bir görsel/işlevsel yüzeyde sunabileceği modern bir kurumsal web varlığının/demosunun olmaması.
- **Değer Önermesi**: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliği ve 3 approved ana hizmeti (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) modern tipografi, temiz endüstriyel görsel dil ve responsive direct-contact CTA'ları ile sunarak müşteri güvenini tesis etmek.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler; yedek parça temini arayan makine ve ekipman kullanıcıları; yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Kullanıcılar**: Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları; Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

## 4. Temel Kapsam Özeti

### In Scope
- Modern ve responsive kurumsal frontend demo (landing page).
- Disan Hidrolik Makine Trakya Bölge Yetkili Servisi kimliğinin sunumu.
- Üç approved ana hizmetin (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) görsel ve metinsel sunumu.
- Telefon ve e-posta direct-contact CTA alanları.
- Mock/local içerik için temiz frontend service/data-access boundary.

### Out of Scope
- Backend, veritabanı veya gerçek API uygulaması.
- Canlı harita entegrasyonu (Google Maps vb.).
- WhatsApp entegrasyonu veya widget'ı.
- Gerçek form submit backend'i.
- Source dosyada bulunmayan yeni firma iddiaları, hizmet alt kapsamları, sertifikalar, mobil filo, SLA veya adres.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Stack neutral pure frontend demo (HTML5, Vanilla CSS, JS/TS). Clean presentation service/data-access boundary ve mock adapter layer.

## 6. Kritik Kararlar Özet Tablosu

| Decision ID | Karar | Statü | Gerekçe |
|---|---|---|---|
| DEC-01 | pure frontend demo | Approved | Proje potansiyel satış görüşmesi için hazırlanan bir prototiptir. |
| DEC-02 | clean service/data-access boundary | Approved | İleride gerçek backend eklendiğinde UI katmanının yeniden yazılmasını önler. |
| DEC-03 | non-generic endüstriyel tasarım | Approved | Sektör klişesi lacivert hero şablonlarından kaçınarak özgün kurumsal karakter yaratır. |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: `RUN-20260815-001` - Initial planning & document package generation phase (Wave 00 preparation).

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
