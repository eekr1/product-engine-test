# Assumptions Register — RUN-20260815-01

## 1. Aktif Varsayımlar Listesi

| Assumption ID | Class | Context | Assumption | Rationale | Impact | Validation Needed | Status |
|---|---|---|---|---|---|---|---|
| ASM-001 | Technical | Stack Resolution | Frontend demo HTML/CSS/Vanilla JS veya Vite modern UI stack ile inşa edilecektir | Demo bağımsız, yüksek performanslı ve hızlı çalıştırılabilir olmalıdır | UI/UX visual composition framework'ünü etkiler | No | Active |
| ASM-002 | Design | Visual Rules | `design_planning: light` seviyesi 1 ana kurumsal landing page yüzeyinin visual/UI kurallarını ve responsive düzen ilkelerini kapsayacaktır | Tek ana sayfa satış demosu hedeflenmektedir | Visual rules tek belgede toplanır | No | Active |
| ASM-003 | Data Boundary | Mock Data Access | Demodaki firma ve 3 hizmet verisi local static service/adapter katmanı (`companyService.js`) üzerinden sunulacaktır | UI bileşenlerine hardcode veri gömülmesini engeller | Clean architecture ve gelecekte backend entegrasyonu kolaylığı | No | Active |

## 2. Onaylanan veya Doğrulanan Varsayımlar

- `ASM-001..ASM-003` active statüsündedir.

## 3. Yüksek Riskli Varsayımlar ve Kullanıcı Onay Beklentisi

- Yüksek riskli onay bekleyen varsayım bulunmamaktadır.
