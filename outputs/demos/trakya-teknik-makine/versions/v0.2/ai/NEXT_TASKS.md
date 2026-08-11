# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` — Project Setup & Architecture Foundation
- **Plan**: [WAVE_00.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/waves/plans/WAVE_00.md)

## 2. Immediate Tasks

- **TASK-001**: Frontend demo proje klasör yapısını, stil altyapısını ve CSS/UI token tanımlarını [DESIGN_RULES.md](file:///c:/Users/Enis/Desktop/Product%20Engine/outputs/demos/trakya-teknik-makine/versions/v0.2/design/DESIGN_RULES.md) kılavuzuna uygun olarak kurmak.
- **TASK-002**: Mevcut SITE123 dondurulmuş verilerini (firma profili, Disan Hidrolik yetkili servis bilgisi, 3 ana hizmet detayları, iletişim kanalları) içeren yerel mock data provider katmanını (`src/data/companyData.ts` veya `js`) oluşturmak.
- **TASK-003**: UI bileşenlerinin mock veriyi tüketeceği `CompanyService` veya data access adapter arayüzünü tanımlamak.

## 3. Dependencies / Preconditions

- `PROJECT_INPUT.md` (Approved) — Tamamlandı.
- `TECH_CONTEXT.md` & `DESIGN_RULES.md` — Tamamlandı.

## 4. Per-Task Done Criteria

- **TASK-001 Done**: Temiz responsive layout shell ve CSS renk/tipografi değişkenleri hazır.
- **TASK-002 Done**: Doğrulanmış firma bilgileri ve 3 hizmet verisi yerel mock nesnelerde eksiksiz mevcut.
- **TASK-003 Done**: Service boundary soyutlaması sağlandı; UI doğrudan mock JSON import etmiyor.

## 5. Stop / Clarification Conditions

- Firmaya ait kanıtlanmamış yeni bir sertifika veya iddia ekleme ihtiyacı doğarsa dur ve kullanıcıya danış.
- Kodlama esnasında presentation ile data boundary iç içe geçmeye başlarsa dur ve mimariyi refactor et.
