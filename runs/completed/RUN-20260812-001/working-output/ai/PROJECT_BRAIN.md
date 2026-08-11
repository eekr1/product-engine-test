# Trakya Teknik Makine — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesini, firmanın gerçek hizmetlerini ve Disan Hidrolik yetkili servisliğini daha profesyonel, modern ve güven veren biçimde sunan bir kurumsal frontend demosu ile yeniden ele almak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut SITE123 altyapılı web sitesi firmanın temel bilgilerini sunmakla birlikte görsel hiyerarşi, kurumsal algı ve potansiyel müşteri satış görüşmesinde yaratacağı ilk izlenim açısından modernleştirilmeye ihtiyaç duymaktadır.
- **Değer Önermesi**: Firmanın 3 temel hizmet alanını (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) ve Disan Hidrolik Trakya Bölgesi yetkili servisi konumunu modern, profesyonel, mobil uyumlu ve güven veren bir kurumsal frontend arayüzü ile sunmak.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesinde makine bakım, onarım veya teknik servis arayan işletmeler; yedek parça temini arayan ekipman kullanıcıları; yerinde destek arayan müşteriler.
- **İkincil Kullanıcılar**: Firma hakkında güvenilirlik ve hizmet kapsamı araştıran satın alma/operasyon sorumluları; iletişim bilgisi arayan mevcut müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Responsive kurumsal frontend demo arayüzü, Ana sayfa ve kurumsal/hizmet/iletişim bölümleri, gerçek firma bilgilerinin modern hiyerarşiyle sunumu, telefon/e-posta CTA'ları, clean presentation ↔ service/data-access boundary (integration readiness).
- **Kapsam Dışı**: Gerçek admin paneli, backend ve veritabanı uygulaması, kullanıcı hesabı/authentication, online ödeme, doğrulanmamış firma iddiaları, production deployment / domain taşınması.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Hızlı çalıştırılabilir, kolay sunulabilir kurumsal frontend demo. UI presentation bileşenleri ile mock data/service layer birbirinden tamamen ayrılmıştır (stack-neutral preview environment).

## 6. Kritik Kararlar Özet Tablosu

| Decision ID | Konu | Karar | Durum | Source |
|---|---|---|---|---|
| DEC-001 | Base Package | `demo-frontend` + `existing-project` extension seçilmiştir | User Approved | `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` |
| DEC-002 | Planning Profiles | `delivery_profile: Prototype`, `implementation_planning: standard`, `design_planning: light` | User Approved | `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` |
| DEC-003 | Architecture Boundary | Decoupled presentation ↔ mock service boundary uygulanacaktır | Engine Resolved | `engine/PLANNING_PROFILES.md` |
| DEC-004 | Wave Scope | 4 bağımsız deliverable wave'i (`WAVE_00` .. `WAVE_03`) tanımlanmıştır | Engine Resolved | `engine/VALIDATION_RULES.md` |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Generation aşamasında olup `WAVE_00` (Foundation & Design System Setup) ilk aktif uygulama wave'i olarak hazırdır.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
