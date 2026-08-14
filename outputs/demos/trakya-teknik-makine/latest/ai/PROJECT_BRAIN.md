# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın gerçek hizmet ve yetkili servislik verilerini koruyarak daha güçlü, modern ve güven veren bir görsel/teknik deneyimle sunan satış amaçlı frontend demo projesi.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut web sitesi (SITE123 altyapısında) temel bilgileri sunmakla birlikte, potansiyel müşterilerle yapılacak satış görüşmelerinde firmanın teknik yetkinliğini, servis gücünü ve modern vizyonunu yansıtmakta yetersiz kalmaktadır.
- **Değer Önermesi**: Satış görüşmelerinde "mevcut sitenizi bu kaliteye taşıyabiliriz" mesajını açıkça veren; responsive, modern visual concept'e sahip, mimari açıdan clean service/adapter sınırıyla geliştirilmiş etkileyici bir kurumsal frontend demo.

## 3. Hedef Kullanıcı Kitleleri

- **Bölge İşletmeleri (Birincil)**: Trakya bölgesinde endüstriyel makine bakım, onarım ve yerinde servis desteği arayan fabrika/tesis operasyon sorumluları.
- **Yedek Parça Arayanlar (Birincil)**: Hidrolik ve endüstriyel makine ekipman ve yedek parça ihtiyacı olan müşteriler.
- **Satın Alma & İdari Sorumlular (İkincil)**: Firma güvenilirliğini ve hizmet kapsamını değerlendiren karar vericiler.

## 4. Temel Kapsam Özeti

- **Kapsam Dahili**: Modern responsive frontend demo (Vite + React), Ana Sayfa, Kurumsal/Hakkımızda, Hizmetlerimiz (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım), Disan Hidrolik Yetkili Servisliği vurgusu, İletişim bölümü & CTA'lar, Clean presentation/mock service boundary, canonical Product Engine dokümantasyon paketi.
- **Kapsam Dışı**: Gerçek backend/veritabanı, yönetim (admin) paneli, kullanıcı hesapları/auth, e-ticaret, doğrulanmamış firma iddiaları, canlı production deployment / domain transferi.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Modern Web Standards, Vite, React, Modular Component Architecture, CSS Design Tokens, Clean Data-Access Service Adapter (Mock Provider).

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Karar | Gerekçe | Durum |
|---|---|---|---|
| DEC-01 | Frontend Demo Odaklılık | İlk hedef proaktif satış görüşmesidir. | Approved |
| DEC-02 | Dondurulmuş Gerçek Firma Bilgileri | Firma hakkında doğrulanmamış bilgi üretilmeyecektir. | Approved |
| DEC-03 | Delivery Profile: Prototype / Implementation: standard / Design: light | Satış demosu için agent-ready minimum planlama derinliği. | Approved |
| DEC-04 | Clean Service Boundary (No Direct Hardcoding) | Demodan sonra gerçek backend geçişinde UI yeniden yazımını önler. | Approved |
| DEC-05 | Vite + React Frontend Stack | Kullanıcı explicit approval ile onaylanmıştır. | Approved |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine `v0.2.0` planlama dalgası tamamlanmış; `RUN-20260814-001` ile canonical dokümantasyon ve dynamic wave planları üretilmiştir. Geliştirici ajanın koda başlayabileceği netliktedir.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [CURRENT_STATUS.md](./CURRENT_STATUS.md)
- [NEXT_TASKS.md](./NEXT_TASKS.md)
