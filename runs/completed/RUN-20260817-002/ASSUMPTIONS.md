# Assumptions Register — RUN-20260817-002

## 1. Aktif Varsayımlar Listesi

| ID | Context | Assumption | Reason | Impact | Validation Needed | Status |
|---|---|---|---|---|---|---|
| ASM-01 | Dil bağlamı | Projenin Türkçe (`tr`) dilinde kurumsal bir frontend demo olarak sunulması. | Target user ve marka bağlamı Trakya bölgesidir. | Tüm landing page metin dili Türkçe olacaktır. | No | Validated |
| ASM-02 | Bölge bağlamı | Trakya bölgesi bağlamının genel bölge/endüstri bağlamında sunulması, uydurma spesifik ilçe/adres bilgisine dönüştürülmemesi. | Source-backed adres bulunmamaktadır. | Adres kartı generic bölge vurgusu ile sunulur. | No | Validated |
| ASM-03 | Frontend Mimari | Gelecekte eklenecek doğrulanmış iletişim ve hizmet detayları için modüler frontend data configuration mimarisinin hazırlanması. | Clean data boundary kuralı. | Presentation ile content verisi ayrılır. | No | Validated |

## 2. Onaylanan veya Doğrulanan Varsayımlar

- ASM-01, ASM-02 ve ASM-03 onaylı `PROJECT_INPUT` belgesinde teyit edilmiştir.
