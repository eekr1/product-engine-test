# Operational Conflicts — RUN-20260814-001

```text
Conflict ID : CNF-001
Konu        : project_state belirlemesi (source hint "yeni" vs Engine authority "existing")
Kaynak 1    : TRAKYA_TEKNIK_MAKINE_PROJECT.md ("Proje modu: yeni")
Kaynak 2    : engine/PROJECT_INTAKE.md ("Mevcut website veya ürün varsa project_state existing'dir")
Çözüm       : Engine authority üstündür. Mevcut yayında site ve firma gerçekliği bulunduğundan project_state canonical olarak 'existing' olarak belirlenmiştir.
Durum       : RESOLVED

Conflict ID : CNF-002
Konu        : Frontend demo vs Production complexity beklentisi
Kaynak 1    : Satış demosu hedefi
Kaynak 2    : Tam üretim sistemi beklentisi ihtimali
Çözüm       : Proje kapsamı net olarak Frontend Demo / Prototype olarak sınırlandırılmış; backend, DB ve Auth kapsam dışı tutulmuştur.
Durum       : RESOLVED
```
