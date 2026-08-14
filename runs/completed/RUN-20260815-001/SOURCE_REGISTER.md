# Source Register: RUN-20260815-001

## Registered Sources & Fact Claim Allowlist (FCL)

| Source ID | Source Location / URI | Type | Usage State | Access Date | Factual Claim Scope |
|---|---|---|---|---|---|
| SRC-01 | `project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md` | File | `consumed` | 2026-08-15 | Proje hedefleri, kapsamı, kullanıcı rolleri ve kısıtlar |
| SRC-02 | `https://www.trakyateknikmakine.com/` | External Web | `registered` | — | Mevcut firma adı (Trakya Teknik Makine), Disan Hidrolik yetkili servisliği, 3 temel hizmet (Yedek Parça, Teknik Destek, Bakım-Onarım) ve iletişim verileri |

### Source Usage State Invariants
- `SRC-01` yerel dosyadan okunarak `consumed` durumundadır.
- `SRC-02` harici web sitesi olup bu session içinde bağımsız HTTP fetch ile doğrudan okunmadığı için `registered` durumunda kalmalıdır. `consumed` yazılamaz.

### Fact Claim Allowlist (FCL)
- FCL-01: Firma unvanı: Trakya Teknik Makine
- FCL-02: Yetkili Servis: Disan Hidrolik Makine Trakya Bölgesi Yetkili Servisi
- FCL-03: Ana Hizmet 1: Yedek Parça Temini
- FCL-04: Ana Hizmet 2: Yerinde Teknik Destek
- FCL-05: Ana Hizmet 3: Makine Bakım ve Onarım
- FCL-06: Faaliyet Bölgesi / Karakteri: Trakya Bölgesi ağır sanayi ve hidrolik makine teknik servisi
