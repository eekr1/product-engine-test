# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00: Foundation & Core Service Boundary`
- **Plan**: `waves/plans/WAVE_00.md`

## 2. Immediate Tasks

1. **Task 00.1**: Modern HTML5 zemin dosyasının (`index.html`) oluşturulması ve meta etiketlerinin yerleştirilmesi.
2. **Task 00.2**: CSS Design Tokens dosyasının (`src/styles/design-tokens.css`) tanımlanması (`--color-navy`, `--color-orange`, tipografi ve spacing değişkenleri).
3. **Task 00.3**: CSS reset ve base layout dosyalarının (`src/styles/base.css`, `src/styles/layout.css`) hazırlanması.
4. **Task 00.4**: Yerel mock veri dosyasının (`src/data/mockCompanyData.js`) dondurulmuş firma gerçekleriyle oluşturulması.
5. **Task 00.5**: Soyut mock data service katmanının (`src/services/mockDataService.js`) `getCompanyInfo()`, `getServices()`, `getContactInfo()` async metodlarıyla yazılması.

## 3. Dependencies / Preconditions

- Approved input and Product Engine contracts exist (`inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md`).
- Active Wave WAVE_00 plan is ready (`waves/plans/WAVE_00.md`).

## 4. Per-Task Done Criteria

- **Task 00.1**: `index.html` oluşturulmuş, Google Fonts bağlantıları eklenmiş ve tarayıcıda hatasız yükleniyor olmalı.
- **Task 00.2**: `design-tokens.css` içinde tüm renk ve tipografi değişkenleri tanımlanmış olmalı.
- **Task 00.3**: 12-column grid ve container kuralları tanımlanmış olmalı.
- **Task 00.4**: `mockCompanyData.js` 3 temel hizmeti ve Disan yetkili servisliğini kayıpsız taşımalı.
- **Task 00.5**: Konsol testinde `mockDataService.getServices()` çağrısı 3 temel hizmet nesnesini dönmeli.

## 5. Stop / Clarification Conditions

- Firmayla ilgili doğrulanmamış yeni bilgi veya sertifika iddiası eklenmesi istenirse işlem durdurulmalı ve clarification sorulmalıdır.
