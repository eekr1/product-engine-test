# Assumptions Register — RUN-20260814-001

## 1. Aktif Varsayımlar Listesi

| Assumption ID | Alan | Yapılan Varsayım | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| ASM-01 | Dil | Türkçe (`tr`) | safe | Brief metni ve firma unvanı Türkçe olduğu için | Bağlam | confirmed |
| ASM-02 | Çıktı Klasörü | `outputs/demos/trakya-teknik-makine/` | safe | Proje satış demosu/prototipi olduğu için | Paket kuralı | confirmed |
| ASM-03 | Project State | `existing` | bounded | Mevcut site ve korunan firma bilgileri olduğu için | Engine kuralı | confirmed |

## 2. Onaylanan veya Doğrulanan Varsayımlar

- ASM-01, ASM-02 ve ASM-03 kullanıcının explicit user approval mesajı ("onaylıyorum devam et") ile `confirmed` durumuna geçmiştir.
