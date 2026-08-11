# Trakya Teknik Makine — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın uzmanlığını, 3 ana hizmetini ve Disan Hidrolik yetkili servis partnerliğini öne çıkaran modern, endüstriyel güven hissi veren bir frontend satış demosu ile yenilemek.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut SITE123 tabanlı web sitesi firmanın temel bilgilerini sunmakla birlikte, eski görsel dili ve şablon yapısı nedeniyle potansiyel müşterilerle yapılacak satış görüşmelerinde beklenen modern, güçlü ve güvenilir ilk izlenimi yaratmakta yetersiz kalmaktadır.
- **Değer Önermesi**: Doğrulanmış gerçek firma metinlerini koruyarak; özgün tipografi, güçlü endüstriyel görsel hiyerarşi, hızlı mobil/masaüstü responsive deneyim ve temiz data/service mimari sınırı sunan impresif bir kurumsal frontend demo sağlamak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım, onarım veya yerinde teknik destek arayan sanayi ve imalat işletmeleri; yedek parça temini arayan makine kullanıcıları.
- **İkincil Kullanıcılar**: Satın alma/operasyon sorumluları; firmanın yetkili servis güvenilirliğini araştıran potansiyel ortaklar; iletişim kurmak isteyen mevcut müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Responsive kurumsal frontend demo (Hero, Hizmetler breakdown, Yetkili Servis Vurgusu, İletişim CTA'ları), modern tipografi ve renk sistemi, temiz mock data/service katmanı.
- **Kapsam Dışı**: Gerçek admin paneli, backend/database sunucu altyapısı, authentication, online ödeme, doğrulanmamış yeni firma iddiaları veya production DNS taşınması.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: HTML5, Vanilla CSS3 (Custom Industrial Design Tokens), Modular JavaScript (ES6+ Data Service Layer). Sıfır dış bağımlılık ile yerel preview uyumluluğu.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Konu | Karar | Durum |
|---|---|---|---|
| DEC-001 | Delivery Profile | `Prototype` (Satış demosu odaklı) | Onaylandı |
| DEC-002 | Planning Profile | `implementation: standard`, `design: light` | Onaylandı |
| DEC-003 | Visual Strategy | SITE123 kopyalanmayacak; özgün endüstriyel konsept kurulacak | Onaylandı |
| DEC-004 | Architecture Boundary | UI bileşenleri mock veriye doğrudan bağımlı olmayacak; service adapter kullanılacak | Onaylandı |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine `v0.2.0` canonical generation tamamlanıyor. Execution wave `WAVE_00` hazır durumda.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [CURRENT_STATUS.md](./CURRENT_STATUS.md)
- [NEXT_TASKS.md](./NEXT_TASKS.md)
- [AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md)
- [DECISIONS.md](./DECISIONS.md)
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
