# Trakya Teknik Makine — Start Prompt

Product Engine v0.3.0 üzerinden Trakya Teknik Makine için **Phase A — Intake Session** başlatıyorsun.

## Kaynak

`project-start/projects/trakya-teknik-makine/TRAKYA_TEKNIK_MAKINE_PROJECT.md`

## Session Boundary

Bu chat'in tek amacı canonical pending `PROJECT_INPUT` üretmek, project type/planning/site architecture kararlarını kullanıcıya görünür kılmak ve explicit approval gate'te durmaktır.

Bu chat içinde generation run, WAVE_MAP/WAVE_PLAN, output, validation, publication veya implementation başlatma.

Approved input oluşturulduktan sonra **STOP**. Runtime yeni chat içinde `INPUT_START_PROMPT.md` ile başlayacaktır.

---

## Source-Closed Project Truth

Source file bu intake için self-contained factual project universe'dür.

- External web/search/social research yapma.
- Source dışı firma/hizmet/capability/fact ekleme.
- `Yedek Parça Temini` → stok/orijinal parça/garanti anlamına genişletme.
- `Yerinde Teknik Destek` → mobil filo/acil müdahale/SLA anlamına genişletme.
- `Makine Bakım ve Onarım` → periyodik bakım/revizyon/spesifik makine uzmanlığı anlamına genişletme.
- Contact values source'ta yoksa uydurma.
- Page architecture yeni factual company claim authorize etmez.

Technical/design synthesis Engine-resolved olabilir; company/domain claims source-backed olmalıdır.

---

## Corporate Website Gate

Source intent first-class:

```text
project_type: corporate-website
delivery_profile: Prototype
implementation_planning: standard
design_planning: standard   # source recommendation; approval required
```

`demo` / `sales demo` project type değildir.

Intake sırasında `engine/SITE_ARCHITECTURE_RULES.md` fresh-read et ve source'taki desired structure'dan pending Proposed Site Architecture üret.

Expected proposal responsibilities source'ta şunları taşır:

```text
Home
Corporate
Services
Yedek Parça Temini Detail
Yerinde Teknik Destek Detail
Makine Bakım ve Onarım Detail
Contact
```

Bunlara canonical `PAGE-XXX` identities, purpose, route/navigation identity, IN_SCOPE status, content/capability boundary ve parent/detail relation ata.

Bu listeden yeni factual page/capability üretme. Referanslar/Projeler/Harita/Form/WhatsApp gibi yüzeyleri current scope'a ekleme.

Pending page registry **approved değildir**. Kullanıcıya project type + planning profiles + proposed page registry açıkça gösterilmeden approval isteğine geçme.

Canonical invariants:

```text
corporate website ≠ landing page
Prototype ≠ page breadth reduction
proposed architecture ≠ approved architecture
approved distinct pages ≠ anchor sections
```

---

## Talimatlar

1. Root README → PRODUCT_ENGINE_BRAIN → engine/README read order'ını uygula.
2. Intake için `PROJECT_INTAKE`, `SITE_ARCHITECTURE_RULES`, `PLANNING_PROFILES`, assumptions/conflicts ve `inputs/PROJECT_INPUT_TEMPLATE.md` authority'lerini oku.
3. Source file'ı tamamen oku.
4. `project_type: corporate-website` intent'ini narrow single-page type'a dönüştürme.
5. Proposed Site Architecture'ı pending input Section 6'ya PAGE identities ile yaz.
6. Current Scope / Future / Open Question / Out of Scope ayrımını koru.
7. Source factual truth'u genişletme.
8. Antrasit/amber technical precision direction'ı creative preference olarak koruyabilirsin; official brand fact olarak yazma.
9. IDE/tool/plan/auto approval user approval değildir.
10. User pending intake'i doğrudan approve etmeden `status: approved`, `approved_by: user` veya approved input oluşturma.
11. User explicit approve ettiğinde approved PROJECT_INPUT'u oluştur ve **aynı chat içinde run'a geçmeden STOP et**.

## Beklenen Sonuç

```text
TRAKYA_TEKNIK_MAKINE_PROJECT.md
→ pending PROJECT_INPUT
   project_type: corporate-website
   planning profiles
   proposed PAGE-XXX registry
→ explicit user approval
→ approved PROJECT_INPUT
→ STOP / NEW CHAT
```
