# CORPORATE_WEBSITE_PACKAGE

## Package Kimliği

```yaml
package_id: corporate-website
package_name: Corporate Website Package
package_type: base
version: 3.0.0
status: active
compatible_project_types:
  - corporate-website
```

## Amaç

Firma/marka/kurum için kurumsal kimlik, hizmet/ürün keşfi, güven içeriği, iletişim ve gerçek **multi-page information architecture** taşıyan web projelerinin domain scope sınırını tanımlar.

Implementation/design planning depth bu dosyanın değil `PLANNING_PROFILE_OVERLAY.md` authority'sidir. Exact page/surface semantics `engine/SITE_ARCHITECTURE_RULES.md` authority'sidir.

---

## Base Domain Documents

```text
README-DOC
PROJECT-BRAIN
DESIGN
PRODUCT-RULES
```

Gerçek teknik/dinamik özelliklere göre TECH/DATA/API vb. contextual belgeler ayrıca çözülür; planning minimumu overlay tarafından eklenir.

---

## Corporate Website Semantics

Canonical invariants:

```text
corporate website ≠ landing page
sales demo ≠ project type
Prototype ≠ site breadth reduction
approved page ≠ anchor section
```

Corporate website package tek bir marketing surface'in hero + services + contact bölümleriyle tamamlanmış sayılmasına izin vermez.

Approved `site_architecture`:

- gerçek page/surface identity'lerini tanımlar,
- navigation shell tarafından temsil edilir,
- WAVE_MAP içinde eksiksiz implementation coverage alır,
- design planning applicable olduğunda page design coverage'a dönüşür,
- delivery profile gerekçesiyle sessizce küçültülemez.

Exact page count hard-code edilmez. Breadth approved information architecture'dan türetilir.

---

## Domain Kuralları

- İçerik hierarchy, güven, servis/ürün keşfi ve iletişim aksiyonları gerçek business scope'a dayanır.
- Home, Corporate/About, Services/Products, Detail, Projects/References, Contact gibi responsibility class'ları yalnız source/current context desteklediğinde pending architecture proposal'ına girebilir.
- Form/panel/CMS/API yalnız approved scope'taysa gerçek teknik contract olarak ele alınır.
- Kurumsal site olması generic corporate template kullanma izni değildir.
- Brand asset yoksa marka gerçeği uydurulmaz; Engine project-specific design synthesis üretebilir.
- Bir page yalnız başka bir approved page'in section'ı olarak uygulanacaksa bu relation approved site architecture'ta açıkça tanımlı olmalıdır; agent kendi başına collapse kararı veremez.

---

## Page Architecture Guard

Canonical owner: `engine/SITE_ARCHITECTURE_RULES.md`.

Package-level enforcement:

```text
project_type: corporate-website
→ approved site_architecture REQUIRED
→ APPROVED_PAGE_SET non-empty
→ distinct page identities preserved
→ real navigation coverage REQUIRED
```

Geçersiz reduction:

```text
Approved: Home + Corporate + Services + Contact
Generated: one page with #corporate + #services + #contact
→ FAIL
```

Corporate website sales demo için exact page set source'ta eksikse intake agent önce Proposed Site Architecture sunmalı; package generation pending proposal üzerinden başlamamalıdır.

---

## Design Planning Expectation

Multi-page corporate website için default intake recommendation:

```text
design_planning: standard
```

Bu recommendation:

- design system,
- global shell/navigation,
- distinct page design contracts,
- cross-page responsive/state consistency

için uygundur.

Kullanıcı `light` seçebilir; fakat page architecture yine eksiksiz implementation-ready kalmalı ve pending intake'te rationale görünür olmalıdır.

---

## Backend / CMS Readiness

İlk sürüm static/frontend olabilir. Bu durumda future CMS/backend ihtiyacı:

- presentation'dan ayrılmış content/data boundary,
- config/environment separation,
- replaceable local/mock content source

ile desteklenir.

Gerçek CMS/backend kararı verilmeden provider/schema/API uydurulmaz.

Continuation beklenen sales/client corporate demo aynı codebase üzerinde büyüyebilecek frontend foundation kullanmalıdır; ilgili stack/tooling invariant'ları `engine/PLANNING_PROFILES.md` ve TECH_CONTEXT tarafından uygulanır.

---

## Wave / Execution Breadth

Wave count page count'a eşit olmak zorunda değildir.

Allowed:

```text
Foundation
→ Global Shell / Routing
→ Home + Corporate (coherent wave ise)
→ Services Overview + approved Detail surfaces
→ Contact
→ Cross-page QA
```

Not allowed:

- approved page'i hiç planlamamak,
- approved page'i final QA içine gizlemek,
- distinct page'leri single landing surface'e collapse etmek,
- reference wave count'a uymak için yapay micro-wave üretmek.

---

## Validation

Bu package için blocking kontroller:

- `project_type == corporate-website`,
- approved `site_architecture` mevcut,
- `APPROVED_PAGE_SET == PLANNED_PAGE_SET`,
- `APPROVED_PAGE_SET == NAVIGATION_PAGE_SET`,
- design `standard | full` ise applicable page-design instances approved page setini karşılıyor,
- distinct approved page → distinct routable/navigable implementation surface,
- generic corporate template drift yok,
- product/business fact ile creative design decision ayrılmış,
- planning overlay minimumu korunmuş,
- dynamic form/CMS/API yalnız gerçek scope'ta dokümante edilmiş,
- continuation-ready frontend foundation korunmuş.

Page architecture guard ihlali → validation FAIL / upstream intake veya generation repair.
