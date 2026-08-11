# Trakya Teknik Makine — Next Tasks

## 1. Active Wave

- **Wave**: `WAVE_00` (Foundation, Mock Service Boundary & Design Tokens Setup)
- **Plan**: [waves/plans/WAVE_00.md](../waves/plans/WAVE_00.md)

---

## 2. Immediate Tasks

1. **TSK-00-1: Proje Temel Yapısı ve Bağımlılıkların Kurulumu**
   - Modern frontend proje iskeletini (HTML/JS/CSS veya Vite-React yapısını) başlatmak ve gerekli klasör hiyerarşisini oluşturmak.
2. **TSK-00-2: Design Tokens & CSS Variables Kurulumu**
   - [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) içinde tanımlanan renk rolleri, tipografi ve spacing değişkenlerini CSS değişkenleri (`:root`) olarak tanımlamak.
3. **TSK-00-3: Service Adapter Boundary & Mock Content Yapısı**
   - `IDataService` arayüzünü tanımlamak ve doğrulanmış firma/hizmet verilerini döndüren `MockDataService` adaptörünü yazmak.

---

## 3. Dependencies / Preconditions

- Approved Project Input snapshot'ı ve kanonik onay tamamlanmış olmalıdır.
- Node.js ve paket yöneticisi ortamı hazır olmalıdır.

---

## 4. Per-Task Done Criteria

- **TSK-00-1 Done**: Proje derlenebilir ve yerel geliştirme sunucusu hatasız başlatılabilir durumda olmalıdır.
- **TSK-00-2 Done**: CSS değişkenleri tanımlanmış ve temel sıfırlama (reset) stilleri uygulanmış olmalıdır.
- **TSK-00-3 Done**: `MockDataService` metotları firma bilgilerini ve 3 temel hizmet verisini tip güvenli biçimde döndürmelidir.

---

## 5. Stop / Clarification Conditions

- Firma beyanları dışında kanıtlanmamış yeni veri talebi olursa durulup netleştirme istenmelidir.
- Backend/API entegrasyonu uydurulmaya çalışılırsa durulup service boundary korunmalıdır.
