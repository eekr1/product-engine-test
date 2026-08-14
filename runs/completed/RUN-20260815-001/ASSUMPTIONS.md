# Assumptions Register — RUN-20260815-001

## 1. Aktif Varsayımlar Listesi

| Assumption ID | Context | Assumption | Reason | Impact | Validation Needed | Status |
|---|---|---|---|---|---|---|
| ASM-01 | Demo ortamı | Demo yerel geliştirme ve önizleme sunucusunda çalışacaktır; özel production sunucu kısıtı tanımlanmamıştır | İlk aşama çıktısı satış demosu olduğu için local dev yeterlidir | Production deployment belgesi üretilmez | No | Approved |
| ASM-02 | Form davranışı | İletişim formu demo aşamasında frontend validation ve yerel geri bildirim simülasyonu sağlayacaktır | Backend API kapsama dahil edilmediği için | UI kullanıcı deneyimi korunur | No | Approved |
| ASM-03 | Logo asset | Vektörel logo olmaması durumunda temiz SVG marka amblemi ve tipografik logo kullanılacaktır | Yüksek çözünürlüklü marka dosyası belirtilmediği için | Tasarım bütünlüğü sağlanır | Yes | Active |

## 2. Onaylanan veya Doğrulanan Varsayımlar

- **ASM-01**: Kullanıcı tarafından satış demosu odağı onaylanmıştır.
- **ASM-02**: Frontend-only mock adapter yaklaşımı onaylanmıştır.
