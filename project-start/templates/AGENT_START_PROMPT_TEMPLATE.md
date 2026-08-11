# Agent Start Prompt Template

Product Engine üzerinden bir proje başlatıyorsun.

## Kaynak

Proje kaynak dosyası:

`{{PROJECT_SOURCE_PATH}}`

## Talimatlar

1. Önce Product Engine authority ve read-order dosyalarını oku.
2. Verilen proje kaynak dosyasını tamamen oku.
3. Proje kaynağını canonical Engine contract'ı olarak değil, ham/kaynak bağlam olarak ele al.
4. Engine'in mevcut intake, package, document-selection, template, lifecycle, validation, run, output, logging ve archive kurallarını yetkili tanımlarında belirtildiği şekilde aynen uygula.
5. `project-start/` içinde paralel bir workflow icat etme.
6. Açıkça belirtilmiş proje kararlarını ve kısıtlarını, bir Engine authority ile çelişmedikleri sürece koru; bir çelişki varsa bunu açıkça belirt.
7. Gerekli bilgi eksikse sessizce tahmin yürütmek yerine Engine'in mevcut missing-input/approval davranışını kullan.
8. Approval gerektiğinde canonical approval gate'te dur.

## Beklenen İlk Sonuç

Yalnızca mevcut aşama için canonical Product Engine akışının gerektirdiği artifact'leri ve durumu üret. Doğrudan final output'lara atlama.
