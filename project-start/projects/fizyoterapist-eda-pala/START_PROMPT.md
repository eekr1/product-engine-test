# Fizyoterapist Eda Pala — Start Prompt

Product Engine üzerinden Fizyoterapist Eda Pala profesyonel web sitesi projesi için **Phase A — Intake Session** başlatıyorsun.

## Kaynak

Proje kaynak dosyası:

`project-start/projects/fizyoterapist-eda-pala/FIZYOTERAPIST_EDA_PALA_PROJECT.md`

## Session Boundary

Bu chat'in tek amacı Fizyoterapist Eda Pala için canonical pending `PROJECT_INPUT` üretmek, gerekli intake kararlarını ve eksik bilgi sınırlarını görünür hale getirmek ve explicit user approval gate'te durmaktır.

Bu chat içinde generation run başlatma, WAVE_MAP/WAVE_PLAN veya final output üretme, validation/publication yapma.

Approved input oluşturulduktan sonra **STOP**. Runtime yeni chat içinde `project-start/projects/fizyoterapist-eda-pala/INPUT_START_PROMPT.md` ile başlatılacaktır.

## Source-Closed Project Truth

`FIZYOTERAPIST_EDA_PALA_PROJECT.md` bu intake session için yeterli ve self-contained project source'dur.

Mevcut proje bilgileri sınırlıdır. Bu nedenle:

- Dış web sitesi, arama motoru veya sosyal medya araştırması/açma/fetch yapma.
- Source içinde verilen Instagram URL'sini factual enrichment amacıyla açma veya profil içeriğinden yeni claim çıkarma.
- Source dosyada bulunmayan mesleki uzmanlık, tedavi alanı, hizmet, yöntem, hastalık/rahatsızlık, eğitim, sertifika, deneyim, klinik, adres, çalışma saati, fiyat veya sağlık sonucu bilgisi ekleme.
- `Fizyoterapist` ifadesini `uzman fizyoterapist`, `doktor` veya belirli bir klinik uzmanlığa genişletme.
- `Tekirdağ` ifadesini exact klinik lokasyonu, belirli ilçe, evde hizmet veya geniş hizmet bölgesi iddiasına dönüştürme.
- Eksik alanları generic fizyoterapi hizmet listeleri, tedavi kartları, hasta yorumları veya placeholder gerçeklerle doldurma.

Kullanıcı tarafından sağlanan Instagram URL'si yalnız source-backed outbound profile link olarak kullanılabilir; profil içeriği project truth değildir.

Teknik implementation ve yaratıcı design kararları Engine tarafından çözülebilir; kişi/meslek/sağlık gerçekleri source-backed olmalıdır.

## Talimatlar

1. Önce Product Engine authority ve canonical read-order dosyalarını oku.
2. `FIZYOTERAPIST_EDA_PALA_PROJECT.md` dosyasını tamamen oku.
3. Proje kaynağını canonical Engine contract'ı olarak değil, source truth material olarak ele al.
4. Yalnız intake için gerekli Engine authority/template dosyalarını uygula; paralel workflow icat etme.
5. Source dosyadaki exact factual allowlist ile Engine-resolved tasarım/teknik kararları birbirinden açıkça ayır.
6. Açıkça belirtilmiş proje kararlarını ve kısıtlarını, bir Engine authority ile çelişmedikleri sürece koru.
7. Gerekli factual bilgi eksikse sessizce tahmin yürütme; missing-input / open-question / assumption / approval davranışını kullan.
8. `Prototype` ve satış demosu amacını yalnız delivery purpose/runtime maturity olarak yorumla. Bunlar yeni feature, booking, form, map, WhatsApp, placeholder capability, sağlık claim'i, scope genişlemesi veya düşük kalite izni değildir.
9. Pending input içinde current executable scope ile Future / Open Question / Out of Scope sınırlarını açıkça ayır.
10. Website content density'yi artırmak için source-backed olmayan domain içeriği üretme.
11. Instagram URL'sini varsa yalnız outbound link capability olarak taşı; içeriğini source olarak kaydetme veya araştırma.
12. Approval gerektiğinde canonical approval gate'te dur.
13. IDE, tool, plan, execution veya otomatik onay mekanizmalarını explicit user approval olarak kabul etme.
14. Kullanıcının pending intake'i doğrudan onaylayan mesajı olmadan approved input oluşturma veya `approved_by: user` yazma.
15. Explicit user approval geldiğinde canonical approved input'u `inputs/approved/fizyoterapist-eda-pala/v1/PROJECT_INPUT.md` altında oluştur/güncelle ve aynı chat içinde run'a geçmeden dur.

## Beklenen Sonuç

```text
FIZYOTERAPIST_EDA_PALA_PROJECT.md
→ pending PROJECT_INPUT
→ explicit user approval
→ approved PROJECT_INPUT v1
→ STOP / NEW CHAT
```

Sonraki chat `INPUT_START_PROMPT.md` ile yalnız approved input'u authoritative project context kabul ederek başlayacaktır.
