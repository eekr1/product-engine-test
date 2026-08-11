# CORPORATE_WEBSITE_PACKAGE

## Package Kimliği

```yaml
package_id: corporate-website
package_name: Corporate Website Package
package_type: base
version: 2.0.0
status: active
compatible_project_types:
  - landing-page
  - web-app
  - content-platform
```

## Amaç

Kurumsal kimlik, hizmet/ürün anlatımı, iletişim ve içerik odaklı web projelerinin **domain scope** sınırını tanımlar.

Implementation/design planning depth bu dosyanın değil `PLANNING_PROFILE_OVERLAY.md` authority'sidir.

---

## Base Domain Documents

```text
README-DOC
PROJECT-BRAIN
DESIGN
PRODUCT-RULES (applicable product type'ta)
```

Gerçek teknik/dinamik özelliklere göre TECH/DATA/API vb. contextual belgeler ayrıca çözülür; planning minimumu overlay tarafından eklenir.

---

## Domain Kuralları

- İçerik hierarchy, güven, servis/ürün keşfi ve iletişim aksiyonları gerçek business scope'a dayanır.
- Form/panel/CMS/API yalnız approved scope'taysa gerçek teknik contract olarak ele alınır.
- Kurumsal site olması generic corporate template kullanma izni değildir.
- UI applicable olduğundan design planning gerekir.
- Brand asset yoksa marka gerçeği uydurulmaz; Engine project-specific design synthesis üretebilir.

---

## Backend / CMS Readiness

İlk sürüm statik/frontend olabilir. Bu durumda future CMS/backend ihtiyacı:

- presentation'dan ayrılmış content/data boundary,
- config/environment separation,
- replaceable local/mock content source

ile desteklenir.

Gerçek CMS/backend kararı verilmeden provider/schema/API uydurulmaz.

---

## Validation

- Generic corporate template drift yok.
- Product/business fact ile creative design decision ayrılmış.
- Planning overlay minimumu korunmuş.
- Dynamic form/CMS/API yalnız gerçek scope'ta dokümante edilmiş.
- Design profile minimumu korunmuş.
