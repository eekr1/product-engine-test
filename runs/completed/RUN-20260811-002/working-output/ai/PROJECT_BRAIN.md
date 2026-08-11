# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini (SITE123 altyapılı), firmanın doğrulanmış hizmetlerini ve Disan Hidrolik Trakya yetkili servisi unvanını koruyarak, satış görüşmesinde potansiyel müşteriye gösterilebilecek modern, güven veren ve görsel olarak güçlü bir frontend demo ile yeniden tasarlamak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut SITE123 tabanlı web sitesi firmanın temel bilgilerini sunuyor ancak görsel sunum, kurumsal algı, içerik hiyerarşisi ve potansiyel müşterilerle yapılacak satış görüşmelerinde yaratacağı kurumsal güven hissi açısından modernize edilmeye ihtiyaç duymaktadır.
- **Değer Önermesi**: Gerçek firma bilgilerini koruyan; Disan Hidrolik yetkili servisi konumunu, yedek parça temini, yerinde destek, bakım/onarım uzmanlıklarını öne çıkaran; satış görüşmesinde "mevcut sitenizi bu kaliteye taşıyabiliriz" mesajını açıkça veren modern kurumsal frontend demo.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım, onarım veya teknik servis ihtiyacı olan işletmeler; yedek parça temini veya yerinde teknik destek arayan sanayi ve ekipman kullanıcıları.
- **İkincil Kullanıcılar**: Firma hakkında güvenilirlik ve hizmet kapsamı araştıran satın alma/operasyon sorumluları; hızlı iletişim kurmak isteyen mevcut müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Responsive kurumsal frontend demo, Ana sayfa ve kurumsal/hizmet/iletişim bölümleri, 3 ana hizmet sunumu (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım), Disan Hidrolik yetkili servis vurgusu, telefon/e-posta iletişim CTA'ları, clean service/data-access boundaries.
- **Kapsam Dışı**: İlk demo aşamasında backend, veritabanı, CMS/admin paneli, kullanıcı girişi, e-ticaret, doğrulanmamış yeni firma iddiaları/referansları, production deployment ve domain taşıma.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Frontend-only demo katmanı. Presentational UI component'leri yerel mock/static data katmanı ile temiz bir service boundary üzerinden haberleşir.
- **Entegrasyon Hazırlığı**: Gelecekte gerçek REST API veya CMS eklendiğinde UI katmanı değişmeden yalnızca data adapter yenilenecek şekilde tasarlanmıştır.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Karar | Kategori | Gerekçe |
|---|---|---|---|
| DEC-001 | Satış Odaklı Frontend Demo | Ürün | Potansiyel müşteri görüşmesinde ilk izlenimi ve kurumsal güveni üst seviyeye çıkarmak. |
| DEC-002 | `delivery_profile: Prototype`, `implementation_planning: standard`, `design_planning: light` | Planning Profile | Hızlı ve özgün frontend demo sunumu için optimum planning dengesi. |
| DEC-003 | `project_state: existing` | Kapsam | Mevcut SITE123 sitesi ve doğrulanmış firma bilgileri dondurularak kaynak alınmıştır. |
| DEC-004 | Clean Service/Data Boundary | Mimari | Presentation bileşenleri mock veriye doğrudan gömülmeyerek sürdürülebilirlik sağlanır. |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine v0.2.0 approved input sonrası generation fazında. Dokümantasyon paketi donduruldu, ilk implementation wave'leri (WAVE_00 ve WAVE_01) koda geçilmeye hazır durumda.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/ai/PRODUCT_RULES.md) — Ürün davranış ve UX kuralları
- [TECH_CONTEXT.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/ai/TECH_CONTEXT.md) — Teknik mimari ve entegrasyon sınırları
- [DESIGN_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/design/DESIGN_RULES.md) — Görsel dil ve UX ilkeleri
- [DECISIONS.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/latest/ai/DECISIONS.md) — Detaylı mimari ve ürün kararları
