# EXISTING_PROJECT_PACKAGE

## Package Kimliği

```yaml
package_id: existing-project
package_name: Existing Project Extension
package_type: extension
version: 2.0.0
status: active
compatible_project_types:
  - all
```

## Amaç

Existing/brownfield projelerde current reality, target state ve transition scope'un korunmasını sağlayan extension context'idir.

Tek başına planning depth belirlemez; base package + `PLANNING_PROFILE_OVERLAY.md` ile birlikte uygulanır.

---

## Existing Project Invariants

```text
Current Reality
≠
Target State
≠
Current Run / Transition Scope
```

Ajan:

- mevcut çalışan sistemi future target gibi yeniden yazamaz,
- future target'ı mevcut gerçeklik gibi gösteremez,
- mevcut repo/docs içindeki stale bilgiyi sessizce authoritative kabul edemez,
- mevcut valid kararları gerekçesiz overwrite edemez.

---

## Required Context

Existing project intake en az:

- current code/repo/docs sources,
- current stack ve çalışan özellikler,
- known debt/issues,
- target state,
- bu run'ın transition scope'u

bilgilerini çözümlemelidir.

`STATUS` planning overlay standard setinin zaten parçasıdır; existing project'te özellikle current reality'nin primary owner'ı olarak kritik önem taşır.

---

## Extension Effects

Real existing context'e göre:

- CURRENT_STATUS başlangıçta mevcut gerçeği yansıtır,
- TECH_CONTEXT mevcut stack + target boundary ayrımını korur,
- PROJECT_PLAN migration/transition milestone'larını gösterebilir,
- WAVE_MAP ilk wave'leri safe transition/foundation olarak kurgular,
- DATA/API/design docs yalnız mevcut veya approved target scope kadar üretilir.

---

## Validation

- Current vs target drift yok.
- Existing facts assumption olarak yeniden uydurulmamış.
- Stale/uncertain source görünür işaretlenmiş.
- Planning overlay minimumu korunmuş.
- Transition wave'leri mevcut sistemi gereksiz kırmadan ilerliyor.
