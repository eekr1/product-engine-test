# Assumptions Register — RUN-20260817-001

## 1. Aktif Varsayımlar Listesi

| Assumption ID | Context | Assumption | Rationale | Impact | Validation Needed | Status |
|---|---|---|---|---|---|---|
| ASM-01 | Proje Dili | Proje dili Türkçe (`tr`) olarak geliştirilecektir. | Approved input (Line 12) ve project source dosyası Türkçe dilindedir. | Tüm frontend copy ve içerik Türkçe olacaktır. | No | Validated |
| ASM-02 | Konum Bağlamı | Tekirdağ konumu genel il düzeyinde tanıtılacak, spesifik ilçe veya klinik adresi iddiasına dönüştürülmeyecektir. | Approved input ASM-02 kuralı uyarınca source'ta ilçe veya adres bulunmamaktadır. | Konum bağlamı sayfa başlığı ve alt başlığında il seviyesinde sunulur. | No | Validated |
| ASM-03 | Modüler İçerik Katmanı | Gelecekte eklenecek doğrulanmış biyografi ve hizmet bilgileri için modüler bir local content configuration adaptör yapısı hazırlanacaktır. | Approved input ASM-03 ve Section 7 gereği mimari re-write gerektirmeyen temiz frontend sınırı tutulmalıdır. | Local/static configuration JS katmanı izole tutulur. | No | Validated |

## 2. Onaylanan veya Doğrulanan Varsayımlar

- **ASM-01**: Kullanıcı tarafından `PROJECT_INPUT.md` v1 onayı ile teyit edilmiştir.
- **ASM-02**: Kullanıcı tarafından `PROJECT_INPUT.md` v1 onayı ile teyit edilmiştir.
- **ASM-03**: Kullanıcı tarafından `PROJECT_INPUT.md` v1 onayı ile teyit edilmiştir.
