# Trakya Teknik Makine — Start Prompt

Product Engine üzerinden Trakya Teknik Makine kurumsal web sitesi projesi için **Phase A — Intake Session** başlatıyorsun.

## Kaynak

Proje kaynak dosyası:

`project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md`

## Session Boundary

Bu chat'in tek amacı Trakya Teknik Makine için canonical pending `PROJECT_INPUT` üretmek, gerekli intake kararlarını görünür hale getirmek ve explicit user approval gate'te durmaktır.

Bu chat içinde generation run başlatma, WAVE_MAP/WAVE_PLAN veya final output üretme, validation/publication yapma.

Approved input oluşturulduktan sonra **STOP**. Runtime yeni chat içinde `project-start/projects/trakya-teknik-makine/INPUT_START_PROMPT.md` ile başlatılacaktır.

## Source-Closed Project Truth

`TRAKYA_TEKNIK_MAKINE_PROJECT.md` bu intake session için yeterli ve self-contained project source'dur.

- Dış web sitesi araştırma/açma/fetch yapma.
- Firma için ayrıca site URL'si arama veya SOURCE_REGISTER authority'si üretme.
- Source dosyada bulunmayan firma/hizmet/teknik capability ayrıntısı ekleme.
- `Yedek Parça Temini` ifadesini `stok`, `orijinal parça`, belirli marka/parça kapsamı gibi qualifier'larla genişletme.
- `Yerinde Teknik Destek` ifadesini `mobil filo`, `acil müdahale`, SLA veya benzeri iddialarla genişletme.
- `Makine Bakım ve Onarım` ifadesini belirli makine türü, periyodik bakım, revizyon veya başka alt hizmetlerle genişletme.
- Çalışma saatleri, sertifika, müşteri, referans, adres veya başka firma gerçeği source dosyada açıkça yoksa uydurma.

Teknik implementation kararları Engine tarafından çözülebilir; firma/domain gerçekleri source-backed olmalıdır.

## Talimatlar

1. Önce Product Engine authority ve canonical read-order dosyalarını oku.
2. `TRAKYA_TEKNIK_MAKINE_PROJECT.md` dosyasını tamamen oku.
3. Proje kaynağını canonical Engine contract'ı olarak değil, source truth material olarak ele al.
4. Yalnız intake için gerekli Engine authority/template dosyalarını uygula; paralel workflow icat etme.
5. Source dosyadaki gerçek firma bilgileri ile yeni proje için Engine-resolved tasarım/teknik kararları birbirinden ayır.
6. Açıkça belirtilmiş proje kararlarını ve kısıtlarını, bir Engine authority ile çelişmedikleri sürece koru.
7. Gerekli factual bilgi eksikse sessizce tahmin yürütme; missing-input / open-question / approval davranışını kullan.
8. Satış görüşmesi/frontend demo amacını yalnız delivery purpose olarak yorumla. `demo` veya `Prototype` yeni feature, mock interaction, form, map, WhatsApp, modal, placeholder capability, scope genişlemesi veya düşük kalite izni değildir.
9. Current executable scope ile Future / Open Question / Out of Scope sınırlarını pending input içinde açıkça ayır.
10. Approval gerektiğinde canonical approval gate'te dur.
11. IDE, tool, plan, execution veya otomatik onay mekanizmalarını explicit user approval olarak kabul etme.
12. Kullanıcının pending intake'i doğrudan onaylayan mesajı olmadan approved input oluşturma veya `approved_by: user` yazma.
13. Explicit user approval geldiğinde canonical approved input'u oluştur/güncelle ve aynı chat içinde run'a geçmeden dur.

## Beklenen Sonuç

```text
TRAKYA_TEKNIK_MAKINE_PROJECT.md
→ pending PROJECT_INPUT
→ explicit user approval
→ approved PROJECT_INPUT
→ STOP / NEW CHAT
```

Sonraki chat `INPUT_START_PROMPT.md` ile yalnız approved input'u authoritative project context kabul ederek başlayacaktır.
