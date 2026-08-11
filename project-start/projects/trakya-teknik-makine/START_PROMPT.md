# Trakya Teknik Makine — Start Prompt

Product Engine üzerinden Trakya Teknik Makine kurumsal web sitesi yenileme demo projesini başlatıyorsun.

## Kaynak

Proje kaynak dosyası:

`project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md`

## Talimatlar

1. Önce Product Engine authority ve read-order dosyalarını oku.
2. Verilen proje kaynak dosyasını tamamen oku.
3. Proje kaynağını canonical Engine contract'ı olarak değil, ham/kaynak bağlam olarak ele al.
4. Engine'in mevcut intake, package, document-selection, template, lifecycle, validation, run, output, logging ve archive kurallarını yetkili tanımlarında belirtildiği şekilde aynen uygula.
5. `project-start/` içinde paralel bir workflow icat etme.
6. Açıkça belirtilmiş proje kararlarını ve kısıtlarını, bir Engine authority ile çelişmedikleri sürece koru; bir çelişki varsa bunu açıkça belirt.
7. Gerekli bilgi eksikse sessizce tahmin yürütmek yerine Engine'in mevcut missing-input/approval davranışını kullan.
8. Bu projenin ilk hedefinin satış görüşmesi için güçlü bir frontend demo olduğunu source context olarak koru; ancak bu bilgi Product Engine'in package/document selection kurallarını bypass etmek için kullanılmamalıdır.
9. Mevcut Trakya Teknik Makine sitesindeki doğrulanmış firma bilgileri ile yeni demo için alınacak tasarım/teknik kararları birbirinden ayır.
10. Approval gerektiğinde canonical approval gate'te dur.
11. IDE, tool, plan, execution veya otomatik onay mekanizmalarını Product Engine explicit user approval olarak kabul etme. Yalnızca kullanıcının pending intake'i veya açıkça sunulan intake kararlarını doğrudan onaylayan mesajı canonical approval sayılır.
12. Explicit user approval alınmadan approved input oluşturma, `approved_by: user` yazma veya generation run başlatma.

## Beklenen İlk Sonuç

Yalnızca mevcut aşama için canonical Product Engine akışının gerektirdiği artifact'leri ve durumu üret. Doğrudan final output'lara veya implementasyona atlama.