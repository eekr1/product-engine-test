# Site Architecture Rules

## Amaç

Bu belge, Product Engine içinde **corporate website page/surface architecture** semantiğinin tek canonical sahibidir.

Bu belge page copy, visual design, routing library veya wave isimleri belirlemez. Şunları belirler:

- corporate website için approved page/surface architecture beklentisi,
- page proposal → explicit approval sınırı,
- distinct page'lerin single-page section'lara collapse edilme yasağı,
- page setinin design/wave/navigation coverage beklentisi,
- corporate sales demo breadth tabanı.

Canonical invariant:

```text
corporate website ≠ landing page
Prototype/demo maturity ≠ reduced site architecture
```

---

## 1. Canonical Site Architecture Model

`project_type: corporate-website` için approved project input aşağıdaki canonical alanı taşımak zorundadır:

```text
site_architecture
```

Her distinct implementation surface benzersiz bir page ID ile kaydedilir:

```text
PAGE-001
PAGE-002
PAGE-003
...
```

Minimum page record:

```text
Page ID
Page Name
Purpose
Route / Navigation Identity
Scope Status
Primary Content / Capability Boundaries
Parent / Detail Relation (applicable ise)
```

`Scope Status` executable page için `IN_SCOPE` olmalıdır. Future veya unresolved surface bugünkü approved page setine dahil edilemez.

---

## 2. Corporate Website Breadth Invariant

Corporate website, tek bir marketing surface'in hero/services/contact bölümlerine bölünmesi olarak modellenemez.

Aşağıdaki ayrım zorunludur:

```text
single presentation surface
≠
corporate website information architecture
```

Corporate website'in gerçek kapsamı distinct bilgi görevleri taşıyorsa bunlar distinct page/surface olarak modellenmelidir.

Tipik responsibility class'ları, yalnız project context gerçekten destekliyorsa şunları içerebilir:

```text
Home
Corporate / About
Services / Products Overview
Service / Product Detail
Projects / References
Contact
other project-specific corporate surfaces
```

Bu liste otomatik page üretme izni değildir. Exact page seti source/current context'ten önerilir ve explicit approval ile kesinleşir.

---

## 3. Proposal → Approval Gate

Source/brief kurumsal web sitesi niyetini açıkça taşıyor fakat exact page listesi eksikse intake agent güvenli bir **Proposed Site Architecture** sunmalıdır.

Örnek:

```text
Source intent:
"Kurumsal site; firma, hizmetler ve iletişim gösterilsin."

Allowed pending proposal:
PAGE-001 Home
PAGE-002 Corporate
PAGE-003 Services
PAGE-004 Contact
```

Agent proposal üretebilir; fakat proposal executable truth değildir.

```text
proposed architecture
→ pending PROJECT_INPUT
→ explicit user approval
→ approved site_architecture
```

Explicit approval öncesinde:

- page seti generation authority değildir,
- run başlatılamaz,
- proposal `approved` gibi yazılamaz.

Yeni factual business claim gerektiren page/surface önerilemez. Page architecture presentation yapısını organize edebilir; firma gerçeği icat edemez.

---

## 4. Distinct Page Collapse Yasağı

Approved distinct page seti single-page section navigation'a sessizce indirgenemez.

Canonical rule:

```text
APPROVED_PAGE_SET size > 1
→ each approved page remains a distinct routable/navigable implementation surface
```

Geçersiz örnek:

```text
Approved:
PAGE-001 Home
PAGE-002 Corporate
PAGE-003 Services
PAGE-004 Contact

Implementation plan:
/
  #corporate
  #services
  #contact

→ INVALID
```

Anchor navigation yalnız approved architecture açıkça tek-surface navigation olarak tanımlanmışsa kullanılabilir. `corporate-website` project type için tek-surface yapı default veya silent reduction olamaz.

---

## 5. Routing / Navigation Semantics

Corporate website page seti gerçek navigable surfaces üretmelidir.

```text
approved page identity
→ navigation identity
→ implementation surface
```

Exact router/framework project-specific TECH_CONTEXT kararıdır. Bu belge React Router, Next.js veya başka library zorunlu kılmaz.

Ancak navigation shell:

- approved page setini eksiksiz temsil etmeli,
- nonexistent page icat etmemeli,
- distinct approved page'i section anchor'a collapse etmemeli,
- desktop/mobile navigation davranışında aynı information architecture'ı korumalıdır.

---

## 6. Service / Product Detail Semantics

Approved scope birden fazla distinct hizmet/ürün içeriyorsa Engine şunu değerlendirmelidir:

```text
overview surface
+
applicable detail surfaces
```

Detail page otomatik zorunlu değildir; ancak satış demosu veya corporate information architecture içinde hizmetlerin ayrı keşif/detay görevi taşıdığı source/current context'ten makul biçimde anlaşılıyorsa intake proposal'ında görünür hale getirilmelidir.

Bir detail page onaylandığında bağımsız page ID alır ve sonradan kart/accordion içine sessizce collapse edilemez.

---

## 7. Design Planning Relationship

Multi-page corporate website için Engine'in varsayılan intake önerisi:

```text
design_planning: standard
```

Gerekçe:

- global shell/navigation,
- design system,
- distinct page design contracts,
- cross-page responsive consistency

gibi ihtiyaçların görünür olmasıdır.

Bu otomatik approval değildir. Kullanıcı `light` seçebilir; ancak multi-page corporate website'te `light` önerilecek/seçilecekse page architecture'ın nasıl implementation-ready kalacağı pending intake'te açık rationale ile görünmelidir.

Delivery profile bu kararı düşüremez:

```text
Prototype corporate website
≠
single-page or reduced design breadth
```

---

## 8. Generation Coverage Contract

Approved corporate page seti downstream generation için coverage authority'dir.

```text
APPROVED_PAGE_SET
→ navigation/global shell coverage
→ PAGE-DESIGN instances when applicable
→ WAVE_MAP page/surface coverage
→ WAVE_PLAN implementation coverage
```

Wave count page count'a eşit olmak zorunda değildir. Coherent pages aynı wave içinde uygulanabilir; ancak hiçbir approved page kaybolamaz, başka page'e collapse edilemez veya final QA içine gizlenemez.

---

## 9. Validation Sets

Validator minimum şu setleri çıkarmalıdır:

```text
APPROVED_PAGE_SET
PLANNED_PAGE_SET
NAVIGATION_PAGE_SET
PAGE_DESIGN_INSTANCE_SET   (applicable ise)
```

Corporate website için blocking invariants:

```text
APPROVED_PAGE_SET == PLANNED_PAGE_SET
APPROVED_PAGE_SET == NAVIGATION_PAGE_SET
```

`design_planning: standard | full` ise ayrıca:

```text
APPROVED_PAGE_SET == PAGE_DESIGN_INSTANCE_SET
```

Hariç tutulan teknik-only/non-navigable implementation surfaces bu setlere page gibi eklenmez.

Fail durumları:

- approved page missing,
- unapproved page added,
- distinct page anchor section'a collapse edilmiş,
- navigation approved page'i taşımıyor,
- applicable PAGE-DESIGN instance missing,
- page setleri arasında identity drift var.

---

## 10. Scope Safety

Page architecture yeni factual truth üretmez.

Allowed:

```text
approved "Yedek Parça Temini" hizmeti
→ Services overview + approved Yedek Parça detail presentation
```

Not allowed:

```text
approved "Yedek Parça Temini"
→ "Orijinal Parça Stok Merkezi" page
```

Page purpose/content her zaman approved scope + factual claim boundaries içinde kalmalıdır.

---

## Core Invariants

```text
corporate-website is a first-class project type
sales demo is delivery context, not project type
corporate website ≠ landing page
Prototype ≠ page reduction
approved distinct pages ≠ anchor sections
page proposal ≠ approval
site architecture ≠ factual enrichment
wave grouping ≠ page omission
```
