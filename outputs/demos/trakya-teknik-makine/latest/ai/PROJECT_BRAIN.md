# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın gerçek hizmetlerini ve Disan Hidrolik yetkili servis kimliğini koruyarak, satış görüşmesinde gösterilmek üzere modern, profesyonel ve yüksek kaliteli bir frontend demo ile yeniden ele almak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut SITE123 altyapısındaki web sitesi görsel sunum, içerik hiyerarşisi, tipografi ve kurumsal güven algısı açısından modern standartların gerisinde kalmakta, satış görüşmesinde firmanın dijital gücünü yansıtamamaktadır.
- **Değer Önermesi**: Firmanın Trakya bölgesindeki makine bakım, onarım, yedek parça tecrübesini ve yetkili servis gücünü ön plana çıkaran, modern, hızlı, mobil uyumlu ve müşteri görüşmelerinde "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını net biçimde veren proaktif bir satış demosu sunmak.

## 3. Hedef Kullanıcı Kitleleri

- **İşletme Sahipleri ve Fabrika Yöneticileri:** Trakya bölgesinde endüstriyel makine bakım, onarım, hidrolik servis veya yedek parça ihtiyacı olan birincil hedef kitle.
- **Satın Alma ve Operasyon Sorumluları:** Tedarikçi ve yetkili servis doğrulaması yapan ikincil hedef kitle.
- **Satış Temsilcisi / Geliştirici (Enis):** Potansiyel müşteriye demoyu sunacak ve yenileme projesi teklifini destekleyecek kullanıcı.

## 4. Temel Kapsam Özeti

- **Kapsam İçi:** Responsive kurumsal frontend demo, modern visual concept, 3 ana hizmet bölümü (Yedek Parça, Yerinde Destek, Bakım/Onarım), Disan Hidrolik yetkili servis kimliği vurgusu, hızlı iletişim CTA'ları, katmanlı Service/Data-Access Boundary (mock adapter).
- **Kapsam Dışı:** Gerçek admin paneli/CMS, canlı backend API/veritabanı, kullanıcı girişi, e-ticaret, production deployment.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını:** Local preview environment (Vanilla Component mimarisi / modüler HTML, CSS, JS yapısı).
- **Mimari Yaklaşım:** Presentation Layer $\rightarrow$ Typed Service/Data Access Interface $\rightarrow$ Local Mock Adapter (Integration-Ready).

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Karar | Gerekçe | Durum |
|---|---|---|---|
| DEC-001 | Satış Demosu Odaklılık | Öncelikli hedef canlı üretim sistemi değil, müşteri sunumudur. | Onaylandı |
| DEC-002 | Mevcut Firma Gerçeklerinin Korunması | Disan Hidrolik yetkili servisi ve 3 temel hizmet açık kaynak doğrulamasıdır. | Onaylandı |
| DEC-003 | Service / Data Boundary Ayrımı | Prototype mimarisi throwaway olmamalı, gelecekteki API entegrasyonunu desteklemelidir. | Onaylandı |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Generation & Execution Planning (Phase 2). `WAVE_00`, `WAVE_01` ve `WAVE_02` planlaması aktif yürütülmektedir.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
