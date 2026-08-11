# Assumptions — RUN-20260812-001

## Registered Assumptions

| ID | Sınıf | Tanım | Gerekçe | Durum |
|---|---|---|---|---|
| ASM-01 | Safe | Frontend satış demosu için lokal/static mock veri kullanımı müşteri sunumu açısından yeterlidir. | Müşteri henüz backend siparişi vermemiştir. | Confirmed |
| ASM-02 | Safe | Telefon (`tel:`) ve e-posta (`mailto:`) direct contact CTA'ları ilk demo için yeterli iletişim mekanizmasıdır. | Mevcut sitedeki birincil iletişim kanalı telefon ve e-postadır. | Confirmed |
| ASM-03 | Safe | Frontend stack-neutral preview environment olarak standardize edilecek; UI presentation ↔ service adapter katmanı ayrılacaktır. | Presentation component'lerini kirletmeden decoupled data-access sağlar. | Confirmed |
