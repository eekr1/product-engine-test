# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation & Data-Access Boundary Setup)
- **Plan**: [WAVE_00.md](../waves/plans/WAVE_00.md)

## 2. Immediate Tasks

- [ ] **TASK-001:** Vite + React proje dizin iskeletini ve klasör yapısını (`src/components/`, `src/services/`, `src/data/`, `src/styles/`, `src/config/`) oluşturmak.
- [ ] **TASK-002:** `src/styles/tokens.css` dosyasında projeye özgü CSS Design Tokens (endüstriyel renk paleti, tipografi ölçeği, spacing, surface elevation ve border-radius kuralları) tanımlamak.
- [ ] **TASK-003:** `src/data/mockData.js` dosyasında dondurulmuş gerçek firma verilerini (firma profili, Disan Hidrolik yetkili servisliği, 3 ana hizmet ve iletişim verileri) yapılandırmak.
- [ ] **TASK-004:** `src/services/companyService.js` ve `src/services/contactService.js` adapter katmanını oluşturmak ve mock veriyi UI bileşenlerine bağlayan custom hook'ları (`useCompanyData`, `useServicesData`) tanımlamak.

## 3. Dependencies / Preconditions

- Node.js ve npm ortamının kurulu olması.
- React + Vite bağımlılıklarının initialize edilmesi.
- `inputs/approved/trakya-teknik-makine/v1/PROJECT_INPUT.md` dondurulmuş firma verilerine sadık kalınması.

## 4. Per-Task Done Criteria

- **TASK-001 Done:** Vite+React projesi hatasız derlenmeli ve `npm run dev` ile önizleme sunucusu çalışmalıdır.
- **TASK-002 Done:** `tokens.css` içinde lacivert klişesine düşmeyen özgün endüstriyel tasarım token'ları tanımlanmış olmalıdır.
- **TASK-003 Done:** `mockData.js` dondurulmuş gerçek firma verilerini eksiksiz içermelidir.
- **TASK-004 Done:** Mock service adapter, UI bileşenlerinin veri okuyabileceği async/sync servis arayüzünü sunmalıdır (`hardcoded UI component forbidden`).

## 5. Stop / Clarification Conditions

- Firma hakkında doğrulanmamış yeni hizmet, referans veya yetkinlik iddiası eklenmesi istendiğinde durulur ve netleştirme yapılır.
- Presentation katmanı doğrudan veriyi kendi içine gömmeye (hardcoding) çalışırsa mimari uyarı verilir ve service adapter'a yönlendirilir.
