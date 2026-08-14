# Agent Start Prompt Template

Product Engine üzerinden bir proje başlatıyorsun.

Bu prompt yalnızca **Phase A — Intake Session** içindir.

## Kaynak

Proje kaynak dosyası:

`{{PROJECT_SOURCE_PATH}}`

## Session Boundary

Bu oturumun tek amacı canonical pending `PROJECT_INPUT` üretmek ve approval gate'te durmaktır.

Bu oturumda:

- generation run başlatma,
- output dokümanları üretme,
- WAVE_MAP / WAVE_PLAN üretme,
- publication yapma,
- approved input sonrasındaki runtime işlerini yürütme.

Approved input elde edildikten sonra bu chat **sona erer**. Sonraki runtime yeni bir chat/session içinde `INPUT_START_PROMPT.md` ile başlatılır.

## Talimatlar

1. Önce Product Engine authority ve canonical read-order dosyalarını oku.
2. Verilen proje kaynak dosyasını tamamen oku.
3. Proje kaynağını canonical Engine contract'ı olarak değil, ham/kaynak bağlam olarak ele al.
4. Yalnız intake için gerekli Engine authority/template dosyalarını uygula; `project-start/` içinde paralel workflow icat etme.
5. Açıkça belirtilmiş proje kararlarını ve kısıtlarını, bir Engine authority ile çelişmedikleri sürece koru; bir çelişki varsa açıkça belirt.
6. Gerekli bilgi eksikse sessizce tahmin yürütme; Engine'in missing-input / assumption / approval davranışını kullan.
7. `demo`, `sales demo`, `prototype` veya benzeri ifadeleri yalnız delivery purpose / runtime maturity bağlamı olarak yorumla. Bunlar yeni feature, mock interaction, placeholder capability, scope genişlemesi veya daha düşük implementation/design quality izni değildir.
8. Pending `PROJECT_INPUT` içindeki current executable scope ile Future / Open Question / Out of Scope sınırlarını açık ve birbirinden ayrı tut.
9. Approval gerektiğinde canonical approval gate'te dur.
10. IDE, tool, plan, execution veya otomatik onay mekanizmalarını Product Engine explicit user approval olarak kabul etme.
11. Explicit user approval alınmadan `status: approved`, `approved_by: user` veya eşdeğer bir onay kaydı üretme; approved input oluşturma ve generation run başlatma.
12. Kullanıcı pending input'u explicit biçimde onayladığında canonical approved input'u oluştur/güncelle ve **orada dur**. Aynı chat içinde run'a devam etme.

## Beklenen Sonuç

Bu session sonunda yalnız intake katmanı tamamlanmış olmalıdır:

```text
raw/source context
→ pending PROJECT_INPUT
→ explicit user approval
→ approved PROJECT_INPUT
→ STOP / NEW CHAT
```

Yeni chat, project-specific `INPUT_START_PROMPT.md` üzerinden approved input'u tek authoritative project context olarak kullanarak devam eder.
