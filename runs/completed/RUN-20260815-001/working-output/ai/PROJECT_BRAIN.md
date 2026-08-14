# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini (SITE123 altyapılı www.trakyateknikmakine.com), firmanın Hizmetlerini (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve yetkili servis kimliğini (Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi) daha profesyonel, modern ve güven veren bir sunumla yeniden ele alan frontend kurumsal satış demosu projesi.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut web sitesi SITE123 altyapısı üzerinde zayıf görsel hiyerarşi, eski tipografi ve yetersiz mobil görünüm sunmakta, firmanın teknik yetkinliğini ve Disan Hidrolik yetkili servis gücünü satış görüşmesinde yeterince güçlü yansıtamamaktadır.
- **Değer Önermesi**: Firma gerçekliğini ve doğrulanmış verileri aynen koruyarak, potansiyel müşteri satış görüşmesinde "mevcut sitenizi bu seviyeye taşıyabiliriz" mesajını açıkça ileten, son derece profesyonel, yüksek estetik standartlara sahip, mobil uyumlu ve modüler bir kurumsal frontend satış demosu sunmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesindeki sanayi tesisleri, makine kullanıcıları, bakım/onarım ve yedek parça temini arayan işletme yetkilileri.
- **İkincil Kullanıcılar**: Güvenilirlik ve teknik yetkinlik araştırması yapan satın alma / operasyon sorumluları.
- **Gösterim Kullanıcısı (Internal)**: Satış görüşmesinde demoyu sunan Enis.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**:
  - Modern, responsive kurumsal frontend demo (Single Page / Multi-section Landing Page).
  - Doğrulanmış firma verileri ile içerik yapısı (Hakkımızda, Hizmetlerimiz, Yetkili Servislik, İletişim).
  - Projeye özgü `DESIGN_RULES` ile görsel sistem ve tipografi.
  - Statik / mock data adapter üzerinden çalışan presentation'dan ayrılmış clean data boundary.
  - Cihaz uyumlu doğrudan telefon (`tel:`) ve e-posta (`mailto:`) CTA'ları.
- **Kapsam Dışı**:
  - Gerçek backend, DB veya API sunucusu.
  - Admin paneli / CMS entegrasyonu.
  - Kullanıcı girişi / auth / e-ticaret.
  - Doğrulanmamış form modalları, canlı harita widget'ları, WhatsApp botları.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Presentation-layer HTML/CSS/JS (Clean Vanilla / Web Standards Baseline), local static mock adapter (`MachineService`), zero-coupling data layer.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Karar Konusu | Karar | Gerekçe |
|---|---|---|---|
| DEC-001 | Teslim Amacı | Satış Demosu (Prototype) | Müşteri sunumunda güven ve kurumsal kalite göstermek |
| DEC-002 | Data Boundary | Local Mock Adapter (`MachineService`) | Backend olmadan presentation katmanını temiz ve sürdürülebilir tutmak |
| DEC-003 | Tasarım Profili | Light (`DESIGN_RULES`) | Projeye özgü görsel kimlik ve anti-template kalite tabanı |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: `RUN-20260815-001` aktif. Dokümantasyon paketi üretiliyor.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
