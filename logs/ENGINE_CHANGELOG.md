# Product Engine — Engine Changelog (`logs/ENGINE_CHANGELOG.md`)

## 1. Amaç ve Otorite

Bu belge, Product Engine’in çekirdek motor yapısında (`engine/`), paket kurallarında (`packages/`), şablon standartlarında (`templates/`), girdi/run/çıktı yaşam döngülerinde ve klasör mimarisinde yapılan tüm **kalıcı değişikliklerin tek resmi tarihsel geçmiş kaynağıdır (version history authority)**.

### Sürüm Otoritesi Modeli (Version Authority Model)
- **Kök `README.md`**: Güncel aktif Product Engine sürümünün birincil otoritesidir (`current active version authority`).
- **`logs/ENGINE_CHANGELOG.md`**: Product Engine sürüm geçmişinin birincil otoritesidir (`version history authority`).

*Not: Kök `README.md` belgesinde henüz aktif bir motor sürümü atanmamışsa changelog kayıtlarında sahte semantic version uydurulmaz; `version: not_assigned` nötr değeri kullanılır.*

---

## 2. Changelog Kayıt Kriterleri (Changelog-Worthiness)

### Kaydedilmesi Gereken Değişiklikler (Changelog-Worthy)
Aşağıdaki motor seviyesindeki kalıcı değişiklikler kesinlikle bu belgeye eklenmelidir:
- Yeni bir engine sözleşmesi eklenmesi veya mevcut sözleşme sorumluluğunun değişmesi
- Yeni paket eklenmesi veya paket seçim kurallarının değişmesi
- Şablon yapısı, standartları veya yer tutucu (`placeholder`) kurallarının değişmesi
- Girdi kabul, anlık görüntü (`snapshot`) veya onay süreçlerinin değişmesi
- Run yaşam döngüsü, durum semantiği veya dizin taşıma kurallarının değişmesi
- Çıktı hiyerarşisi, sürümleme veya `latest/` türetilmiş görünüm mantığının değişmesi
- Validation seviyeleri, kuralları veya tamir (`repair`) sınırlarının değişmesi
- Dosya/klasör adlandırma veya yetki/okuma sırası sözleşmelerinin değişmesi
- Deprecated hale getirilen belge, kural veya şablonlar
- Geriye dönük uyumluluğu etkileyen mimari kararlar

### Kaydedilmemesi Gerekenler (Not Changelog-Worthy)
Aşağıdaki küçük veya geçici işlemler changelog belgesine **eklenmez**:
- Harf, yazım (typo) veya basit biçimlendirme düzeltmeleri
- Küçük ifade ve netleştirme düzenlemeleri
- Tek bir projeye veya run'a özgü operasyonel kararlar ve varsayımlar
- Çalıştırma sırasındaki geçici çelişkiler
- Bireysel git commit mesajları veya orchestration prompt dosyaları (`PROMPT_XX_*.md`)

---

## 3. Kanonik Kayıt Yapısı ve Şeması (Entry Schema)

Her changelog kaydı dondurulduğunda eksiksiz olarak aşağıdaki standart alanları taşımalıdır:

```markdown
## PE-CHANGE-<NNN> — <YYYY-MM-DD>

- **Version:** <not_assigned | vX.Y>
- **Change Type:** <Added | Changed | Fixed | Deprecated | Removed | Security | Documentation>
- **Affected Area:** <engine/ | packages/ | templates/ | inputs/ | runs/ | outputs/ | logs/ | folder structure>
- **Breaking Change:** <Yes | No>
- **Related Issue:** <ISSUE-XXX | None>
- **Related Run:** <RUN-YYYYMMDD-XXX | None>

### Summary
<Değişikliğin kısa ve net özeti>

### Reason
<Değişikliğin yapılma gerekçesi ve çözdüğü kök neden>

### Impact
<Sisteme, bileşenlere ve geriye dönük uyumluluğa etkisi>
```

---

## 4. Standart Değişiklik Türleri (Change Type Vocabulary)

Changelog kayıtlarında yalnızca aşağıdaki 7 standart değişiklik türü kullanılabilir:

| Tür | Tanım |
| :--- | :--- |
| **`Added`** | Sisteme eklenen yeni özellik, sözleşme, paket veya şablon. |
| **`Changed`** | Mevcut bir sözleşme, kural veya davranışın değiştirilmesi. |
| **`Fixed`** | Doğrulanmış bir sistemsel kusurun veya hatanın düzeltilmesi. |
| **`Deprecated`** | Gelecekte kaldırılacak olan eski özellik veya sözleşme uyarısı. |
| **`Removed`** | Sistemden tamamen kaldırılan özellik, kural veya dosya. |
| **`Security`** | Gizlilik, yetkilendirme veya veri güvenliği ile ilgili iyileştirmeler. |
| **`Documentation`** | Engine davranışını ve kullanımını tanımlayan ana belgelerdeki önemli mimari güncellemeler. |

---

## 5. Değişiklik Kimliği Standardı (Change ID Rule)

- Format: `PE-CHANGE-<NNN>` (Örn: `PE-CHANGE-001`, `PE-CHANGE-002`).
- Değişmezlik: Bir Change ID oluşturulduktan sonra başlık veya içerik revize edilse dahi KESİNLİKLE değiştirilemez (`MUST NOT`).
- Sıralama: Numaralar `001`'den başlayarak artan sırada atanır. Silinen bir kaydın numarası yeniden kullanılamaz.

---

## 6. Sürüm Geçmişi ve Güncel Durum (Neutral Initial State)

```text
Active Engine Version Authority : Root README.md (not_assigned)
Version History Authority       : logs/ENGINE_CHANGELOG.md
Total Recorded Changes          : 0
```

> [!NOTE]
> Henüz resmi olarak sürümlenmiş ve dondurulmuş bir Product Engine runtime sürümü veya kaydedilmiş resmi bir changelog girdisi bulunmamaktadır.
>
> Yeni bir engine seviyesi kalıcı değişiklik yapıldığında yukarıdaki kanonik şemaya uygun olarak `PE-CHANGE-001` kimliği ile ilk kayıt açılacaktır. Sahte geçmiş verisi veya uydurma changelog kaydı eklenmemiştir.
