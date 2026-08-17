# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya bölgesinde makine bakım/onarım, yedek parça temini ve yerinde teknik destek arayan endüstriyel işletmelere Trakya Teknik Makine'nin uzmanlığını ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsünü sunan modern, güven veren kurumsal frontend web sitesi demosu.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Trakya Teknik Makine için proaktif satış görüşmelerinde gösterilebilecek, firmanın hizmetlerini ve yetkili servis statüsünü güçlü biçimde yansıtan modern ve profesyonel bir web varlığının bulunmaması.
- **Değer Önermesi**: Trakya Teknik Makine adını, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi unvanını ve doğrulanmış üç temel hizmeti profesyonel, güven veren ve etkileyici bir dijital sunuma dönüştürerek güçlü bir satış demosu oluşturmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım/onarıma ihtiyaç duyan işletmeler, yedek parça temini arayan makine ve ekipman kullanıcıları, yerinde teknik destek arayan potansiyel müşteriler.
- **İkincil Kullanıcılar**: Firma ve hizmet kapsamını değerlendiren satın alma/operasyon sorumluları, Trakya Teknik Makine ile iletişime geçmek isteyen müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam Dahili**: Modern ve responsive kurumsal frontend demo (landing page), Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü sunumu, 3 approved hizmetin sunumu (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım), telefon/e-posta direct-contact CTA yüzeyleri, mock/local veri için temiz frontend service/data-access boundary.
- **Kapsam Dışı**: Gerçek admin paneli/CMS, backend/veritabanı/gerçek API, authentication, e-ticaret/online ödeme, canlı harita entegrasyonu, WhatsApp entegrasyonu, gerçek form submit backend'i, production deployment, source-backed olmayan yeni firma iddiaları veya qualifier'lar.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Vite + React + Vanilla CSS (Continuation-Ready Stack Guard uyarınca paket kontrollü, modüler component mimarisi).
- **Service/Data Boundary**: Presentation bileşenlerinden izole edilmiş static presentation config adaptör katmanı (`src/services/presentationService.js`).

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Karar Konusu | Karar | Gerekçe |
|---|---|---|---|
| DEC-001 | Delivery & Planning Profiles | Delivery Profile: `Prototype`, Implementation: `standard`, Design: `light` | Satış demosu için agent-ready planlama ve özgün endüstriyel visual direction gereksinimi |
| DEC-002 | Continuation Stack | Vite + React + Vanilla CSS | `continuation_expected = YES` kuralı uyarınca demo kabul edildiğinde aynı codebase üzerinde büyümeyi destekleme |
| DEC-003 | Factual Allowlist Boundary | Sadece SRC-01'deki 6 factual claim kullanılır | Stok, orijinal parça, SLA, mobil filo, acil servis, periyodik bakım uydurulamaz |
| DEC-004 | Service/Data Boundary | Presentations static config adapter ile izole edilir | İleride gerçek backend veya CMS bağlandığında UI yeniden yazımını engelleme |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Generation & Planning phase (`Running`). Canonical dokümantasyon paketi üretilmektedir.

## 8. Doküman Referansları

- [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) — Ürün ve kapsam kuralları
- [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) — Mimari ve teknik bağlam
- [ai/DECISIONS.md](./DECISIONS.md) — Proje kararları kayıt kütüğü
- [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) — Tasarım ilkeleri ve renk paleti
- [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) — Execution wave planı
