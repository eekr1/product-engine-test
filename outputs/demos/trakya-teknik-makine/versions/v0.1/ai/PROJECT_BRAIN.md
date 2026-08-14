# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo
- **Proje Slug**: `trakya-teknik-makine`
- **Tanım**: Trakya Teknik Makine'nin mevcut kurumsal web sitesindeki doğrulanmış firma, yetkili servis ve hizmet içeriklerini koruyarak, satış görüşmesinde firmaya sunulabilecek modern, güvenilir ve yüksek kaliteli bir kurumsal frontend demo oluşturulması.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Mevcut web sitesi (SITE123 altyapılı) firmanın temel bilgilerini ve hizmetlerini barındırmakla birlikte görsel sunum, kurumsal algı, içerik hiyerarşisi ve satış görüşmesinde yaratacağı prestij açısından modern standartların gerisindedir.
- **Değer Önermesi**: Firmanın gerçek marka kimliğini ve Disan Hidrolik yetkili servisi unvanını öne çıkaran, 3 temel hizmet alanını (Yedek Parça, Yerinde Destek, Bakım & Onarım) güçlü görsel hiyerarşiyle sunan responsive ve prestijli kurumsal frontend deneyimi.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Kullanıcılar**: Trakya bölgesindeki sanayi tesisleri, makine işletmecileri, bakım/onarım ve yedek parça arayan teknik sorumlular.
- **İkincil Kullanıcılar**: Satın alma ve operasyon yetkilileri, firma güvenilirliğini araştıran potansiyel müşteriler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**: Responsive kurumsal frontend demo uygulaması, ana sayfa hero karşılama, Disan Hidrolik yetkili servis duyurusu, 3 temel hizmet alanının detaylı sunumu, kurumsal güven & bölge gücü bölümü, telefon ve e-posta doğrudan iletişim CTA'ları, `CompanyService` data-access boundary.
- **Kapsam Dışı**: Admin paneli/CMS backend, veritabanı, kullanıcı girişi/auth, e-ticaret, doğrulanmamış referans/iddialar, form backend submit simülasyonu, canlı harita veya WhatsApp entegrasyonu.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Client-side modüler kurumsal web uygulaması (Engine package resolution ile stack-neutral clean frontend), mock data servisi (`CompanyService`).
- **Veri Sınırı**: UI bileşenleri veriyi doğrudan HTML içine gömmek yerine `CompanyService` katmanından okur.

## 6. Kritik Kararlar Özet Tablosu

| Karar ID | Karar Konusu | Karar | Gerekçe |
|---|---|---|---|
| DEC-001 | Delivery Profile | `Prototype` | Satış görüşmesi odaklı frontend demo. |
| DEC-002 | Implementation Planning | `standard` | Agent-ready 5 wave'lik net uygulama planı. |
| DEC-003 | Design Planning | `light` | Projeye özgü endüstriyel görsel kimlik (`DESIGN_RULES.md`). |
| DEC-004 | Data Boundary | `CompanyService` mock adapter | Backend uydurmadan gelecekteki API entegrasyonuna hazır mimari. |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Product Engine v0.2.0 generation tamamlandı. 5 execution wave'i planlandı (`WAVE_00` - `WAVE_04`).

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [DECISIONS.md](./DECISIONS.md)
- [CURRENT_STATUS.md](./CURRENT_STATUS.md)
- [NEXT_TASKS.md](./NEXT_TASKS.md)
- [AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md)
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
