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

Approved input elde edildikten sonra bu chat sona erer. Sonraki runtime yeni bir chat/session içinde `INPUT_START_PROMPT.md` ile başlatılır.

## Source-Closed Intake Boundary

Normal Product Engine intake'i **source-closed** çalışır.

```text
PROJECT_SOURCE_PATH = project factual universe
```

- Proje gerçeğini tamamlamak için dış web sitesi, arama motoru, sosyal medya veya başka external source araştırması yapma.
- Source dosyada URL geçse bile onu otomatik authority veya enrichment izni sayma.
- Source dosyada bulunmayan firma/domain gerçeğini tahmin etme veya adjacent sektör bilgisiyle doldurma.
- Missing factual detail gerekiyorsa pending input'ta açık soru / eksik bilgi olarak bırak.
- External research yalnız kullanıcı açıkça ayrı bir `research/source enrichment` işi isterse yapılabilir ve normal intake contract'ından ayrı tutulur.

Teknik implementation seçimleri ile gerçek dünya claim'lerini ayır:

```text
Engine-resolvable implementation detail:
component split, layout, file responsibility, adapter shape, responsive behavior

Source-backed factual truth:
service details, stock/availability, operating hours, certificates, partner status,
addresses, contact facts, technical capabilities, company claims
```

İkinci grup source dosyada açık support olmadan PROJECT_INPUT'a eklenemez.

## Talimatlar

1. Önce Product Engine authority ve canonical read-order dosyalarını oku.
2. Verilen proje kaynak dosyasını tamamen oku.
3. Proje kaynağını canonical Engine contract'ı olarak değil, source truth material olarak ele al.
4. Yalnız intake için gerekli Engine authority/template dosyalarını uygula; paralel workflow icat etme.
5. Açıkça belirtilmiş proje kararlarını ve kısıtlarını, bir Engine authority ile çelişmedikleri sürece koru.
6. Gerekli bilgi eksikse sessizce tahmin yürütme; missing-input / assumption / approval davranışını kullan.
7. `demo`, `sales demo`, `prototype` veya benzeri ifadeleri yalnız delivery purpose / runtime maturity bağlamı olarak yorumla. Bunlar yeni feature, mock interaction, placeholder capability, scope genişlemesi veya daha düşük implementation/design quality izni değildir.
8. Pending `PROJECT_INPUT` içindeki current executable scope ile Future / Open Question / Out of Scope sınırlarını açık ve birbirinden ayrı tut.
9. Source dosyadaki factual truth'u genişletme; source-backed olmayan qualifier, teknik alt hizmet, süreç, stok/availability, çalışma saati, sertifika veya başka company claim ekleme.
10. Approval gerektiğinde canonical approval gate'te dur.
11. IDE, tool, plan, execution veya otomatik onay mekanizmalarını Product Engine explicit user approval olarak kabul etme.
12. Explicit user approval alınmadan `status: approved`, `approved_by: user` veya eşdeğer bir onay kaydı üretme; approved input oluşturma ve generation run başlatma.
13. Kullanıcı pending input'u explicit biçimde onayladığında canonical approved input'u oluştur/güncelle ve orada dur. Aynı chat içinde run'a devam etme.

## Beklenen Sonuç

```text
self-contained project source
→ pending PROJECT_INPUT
→ explicit user approval
→ approved PROJECT_INPUT
→ STOP / NEW CHAT
```

Yeni chat, project-specific `INPUT_START_PROMPT.md` üzerinden approved input'u tek authoritative project context olarak kullanarak devam eder.
