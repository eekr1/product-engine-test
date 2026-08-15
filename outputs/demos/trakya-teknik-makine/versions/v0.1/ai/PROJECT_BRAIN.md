# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin kurumsal kimliğini, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü ve 3 approved hizmetini (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) proaktif satış görüşmelerinde etkileyici biçimde sergileyen modern kurumsal frontend demo sitesidir.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Firmanın potansiyel müşterilere ve satış görüşmelerine sunabileceği, hizmet kapsamını ve yetkili servis güvencesini anında net ve profesyonel biçimde aktaran modern bir dijital vitrinin bulunmaması.
- **Değer Önermesi**: Trakya Teknik Makine'nin nitelikli servis/parça hizmetlerini ve yetkili servis statüsünü vurgulayan, hızlı anlaşılır, görsel açıdan güven veren ve doğrudan iletişim kanallarına yönlendiren responsive frontend demo sunmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım/onarım, yedek parça temini ve yerinde teknik destek arayan işletmeler ve makine kullanıcıları.
- **İkincil Kullanıcılar**: Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları.

## 4. Temel Kapsam Özeti

- **Kapsam Dahili**: Responsive (masaüstü & mobil) kurumsal frontend demo; ana kurumsal tanıtım arayüzü ve navigasyon; Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünün vurgulanması; 3 approved hizmetin (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) görsel ve metinsel sunumu; telefon ve e-posta direct-contact CTA yüzeyleri; mock/local veri için temiz frontend service/data-access boundary katmanı.
- **Kapsam Dışı**: Gerçek admin paneli/CMS, backend, veritabanı, auth, e-ticaret/ödeme, canlı harita, WhatsApp entegrasyonu, gerçek form submit backend'i, production deployment, source dosyada bulunmayan firma iddiaları (stok garantisi, mobil filo, acil müdahale SLA, periyodik bakım detayları, sertifikalar, referanslar, adres vb.).

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Frontend demo mimarisi (modern HTML/CSS/JavaScript baseline, responsive layout, mock data service adapter boundary).
- **Service/Data Access Boundary**: Data presentation component'leri mock veriye doğrudan erişmez; frontend service adapter (`src/services/dataService.js`) üzerinden read-only erişim sağlar.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Alan | Karar | Gerekçe | Status |
|---|---|---|---|---|
| DEC-001 | Delivery | Proaktif Satış Demosu (`Prototype`) | İlk hedef satış sunumudur. | User Approved |
| DEC-002 | Architecture | Clean Frontend Service Adapter Boundary | İleride gerçek backend/API bağlandığında UI katmanını değiştirmeden geçiş olanağı sağlar. | Engine Resolved |
| DEC-003 | Scope | Strict Factual Claim Allowlist | Source dosyada bulunmayan firma/hizmet iddiaları uydurulmaz. | User Approved |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Generation & Planning Phase (Run ID: `RUN-20260815-001`). 5 Delivery Waves (WAVE_00 .. WAVE_04) tanımlanmıştır.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
- [DECISIONS.md](./DECISIONS.md)
