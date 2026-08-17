# Product Engine Brain

## Ne Üretir?

Product Engine, projelerde kullanılan AI/project dokümantasyon yapısını standartlaştırır ve approved project truth'u doğrudan ajanların uygulayabileceği coherent bir execution package'ına dönüştürür.

Her proje için:

- domain/project type'ı canonical vocabulary içinde modeller,
- required input/approval boundaries'ini korur,
- applicable package/document setini çözer,
- site/page architecture varsa approved surface truth'unu korur,
- AI/design/project/wave belgelerini üretir,
- teknik ve factual boundary'leri ayırır,
- belgeler arasındaki consistency'yi doğrular,
- yeni ajanı ikinci büyük planning pass gerektirmeden execution'a hazırlamayı hedefler.

Kullanılan ajanın Codex, Claude, Gemini veya başka bir sistem olması fark etmez. Ajan ürünün amacını, approved kapsamını, site/page architecture'ını, kurallarını, mimarisini, mevcut durumunu ve sıradaki execution boundary'lerini proje belgelerinden öğrenir.

---

## Girdi Olarak Ne Alır?

- Proje fikri ve amacı
- Canonical project type/domain context
- Ürün gereksinimleri ve scope boundaries
- Kullanıcı türleri ve temel akışlar
- Corporate/page-based proje ise known/desired site architecture context
- Teknik tercih ve kısıtlar
- Tasarım tercihleri
- Factual/source truth
- Planning profile kararları
- Existing project context (applicable ise)

Project-specific approved truth `inputs/` lifecycle'ında kesinleşir. Brain approval veya project truth storage authority değildir.

---

## Çıktı Olarak Ne Verir?

Projeye göre uyarlanmış, birbiriyle tutarlı ve agent-ready dokümantasyon paketi:

- AI context/rules/state docs
- Project plan
- Technical context
- Design rules/system/shell/page packages (applicable profile'a göre)
- Approved page architecture'ın downstream design/navigation/execution representation'ı
- Wave Map ve implementation-ready Wave Plans
- Decisions / Next Tasks / Agent Instructions
- README
- Conditional data/API/test/deployment/operations docs
- Gerekli implementation structure/boundary guidance

Product Engine'in ana değeri basit tek promptluk output üretmek değil; **project scope, information architecture, architecture, design ve execution boundaries'i birlikte modelleyip korunabilir hale getirmektir.**

---

## Corporate Website Modeling Principle

Corporate website domain'i first-class project type'tır.

```text
project_type: corporate-website
```

Delivery purpose ile karıştırılmaz:

```text
sales demo / Prototype
→ maturity/context
≠ project type
≠ page breadth reduction
```

Corporate website exact page/surface breadth'i approved `site_architecture` truth'undan gelir. Distinct approved pages tek page section/anchor shortcut'ına sessizce indirgenemez.

Semantics authority:

```text
engine/SITE_ARCHITECTURE_RULES.md
```

---

## Model Bağımsızlığı İlkesi

Product Engine belirli bir AI modeline, sağlayıcıya veya özel toolchain'e bağımlı değildir.

Markdown okuyabilen, files/repository üzerinde çalışabilen ve canonical contracts'i uygulayabilen herhangi bir yetkin ajan Product Engine rolünü yerine getirebilir.

---

## İlk Çalışan Sistem Ne Yapar?

1. Structured source/brief'i canonical intake'e normalize eder.
2. Explicit approval öncesi project type, scope, planning profiles ve applicable site architecture'ı görünür kılar.
3. Approved truth'u immutable input/run snapshot'a taşır.
4. Domain package + planning overlay + document/dynamic instances çözer.
5. Source-safe ve architecture-safe docs üretir.
6. Page/capability/wave boundaries'i validation gates ile doğrular.
7. Agent-ready published package üretir.

İlk sistemin kendi başına kod üretmesi gerekmez. Başarı ölçütü; agent'ın approved truth'u bozmadan doğrudan implementation'a başlayabileceği yeterli planning/context üretmesidir.

---

## Temel Sınırlar

- **Brain kural detay deposu değildir:** Runtime behavior `engine/` contracts'indedir.
- **Brain version authority değildir:** Active version root `README.md`, history `logs/ENGINE_CHANGELOG.md` sahibidir.
- **Brain project-specific page truth sahibi değildir:** Approved PROJECT_INPUT sahibidir.
- **Brain build-history tutmaz:** Historical planning/log layers kendi authority sınırlarında kalır.
