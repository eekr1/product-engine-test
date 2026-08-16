# Product Engine — Engine Issues (`logs/ISSUES.md`)

## 1. Amaç ve Kapsam

Bu belge, Product Engine’in çekirdek motor yapısında, paket kurallarında, şablonlarında veya doğrulama süreçlerinde tespit edilen, **doğrulanmış ve çözülmesi gereken sistemsel kusurların (defect/bug) yaşam döngüsü takip merkezidir**.

### Issue Kavramı (Defect / Bug)
Bir durumun `ISSUES.md` içinde yer alabilmesi için:
- Gözlemlenmiş ve kanıtlanmış,
- Tekrar üretilebilir veya teknik olarak doğrulanabilir,
- Sistem kalitesini, tutarlılığını veya kullanılabilirliğini olumsuz etkileyen,
- Mevcut motor sözleşmelerine göre bir kusur (`defect`) niteliğinde olması zorunludur.

---

## 2. Issue ≠ Improvement Ayrımı

```text
ISSUE → mevcut davranışta doğrulanmış kusur
IMPROVEMENT → doğru çalışan sistemi daha iyi hale getirme
```

---

## 3. Kanonik Issue Yapısı

Her issue minimum status, severity, category, owner, first/last seen, related runs, related change ve validation run alanlarını taşır.

---

## 4. Durum ve Önem Seviyeleri

Allowed status: `Open | Investigating | Planned | In Progress | Blocked | Implemented — Awaiting Validation | Resolved | Won't Fix | Duplicate | Invalid`.

Severity: `Critical | Major | Minor | Low`.

---

## 5. Resolved Gate

Bir issue ancak fix + canonical docs + changelog + gerçek validation run + non-recurrence evidence tamamlandığında `Resolved` olabilir. Fix uygulanmış ama fresh validation tamamlanmamışsa `Implemented — Awaiting Validation` kalır.

---

## 6. Güncel Issue Durumu

```text
Open Issues                           : 0
Implemented — Awaiting Validation     : 1
Resolved Issues                       : 0
Total Recorded                        : 1
```

---

## ISSUE-001 — Demo frontend stack continuation readiness not enforced

- **Status:** Implemented — Awaiting Validation
- **Severity:** Major
- **Category:** Engine Rules | Packages | Templates | Validation
- **Owner:** engine maintainer
- **First Seen:** 2026-08-17
- **Last Seen:** 2026-08-17
- **Related Runs:** `RUN-20260815-001`, `RUN-20260817-002`
- **Resolved in Version:** not_assigned
- **Related Change:** PE-CHANGE-007, PE-CHANGE-008
- **Validation Run:** `RUN-20260817-002` = FAILED TO RESOLVE ISSUE; next fresh run required

### Description
Engine demo/prototype projelerde data/service boundary'yi doğru kurmasına rağmen continuation beklenen sales/client demo için frontend stack/tooling seçimini blocking biçimde enforce etmiyordu.

### Evidence
İlk Trakya implementation dependency-free Vanilla foundation üretti. v0.2.1 sonrası fresh `RUN-20260817-002` yeni continuation rationale bölümünü üretti fakat yine Vanilla seçti ve bunu “ileride React/Vite/Next.js'e migrate edilebilir” gerekçesiyle meşrulaştırdı. `WAVE_00` hâlâ package manifest/dev-build tooling olmadan `index.html + src/` foundation planladı. Validator `VAL-09` yalnız data adapter/future API path kontrol ederek PASS verdi.

### Root Cause Refined
v0.2.1 iki loophole bıraktı:

1. `PLANNING_PROFILES` zero-build istisnasını agent-generated “low migration rationale” ile açabiliyordu.
2. `VAL-09` continuation stack/tooling evidence'ını blocking doğrulamıyordu.

### v0.2.2 Resolution
- Continuation beklenen sales/client demo için explicit approved user/project/environment zero-build constraint yoksa package-managed/component-oriented baseline **REQUIRED**.
- Agent/Engine kendi rationale'ıyla zero-build istisnası yaratamaz.
- “Future framework migration” same-codebase continuation değildir.
- TECH_CONTEXT explicit continuation evidence + approved zero-build constraint + package manifest + dev/build/preview commands üretmek zorundadır.
- `VAL-09` bu alanları blocking olarak doğrular.

Issue fresh v0.2.2 real run başarılı olana kadar `Implemented — Awaiting Validation` kalır.
