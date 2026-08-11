# Product Engine — Project Start Scenario Template

## Amaç

Bu dosya, Product Engine v0.1.0 kullanılarak yeni veya mevcut bir proje için ilk generation sürecini başlatmak amacıyla kullanılan standart çalışma senaryosu template'idir.

Bu template proje bazında doldurulur.

Product Engine repository içindeki mevcut mimari, runtime contract'lar, package sistemi ve template sistemi bu görev kapsamında değiştirilmez.

İlk aşamanın hedefi:

```text
Raw Brief
→ Project Intake
→ Pending Input
→ Approval Gate
```

Explicit kullanıcı onayı alınmadan generation run başlatılmaz.

---

# 1. Proje Kimliği

```text
project_name: {{PROJECT_NAME}}
project_slug: {{PROJECT_SLUG}}
project_state: {{PROJECT_STATE}}        # new | existing
project_type_hint: {{PROJECT_TYPE_HINT}}
delivery_profile_hint: {{DELIVERY_PROFILE_HINT}}
primary_language: {{PRIMARY_LANGUAGE}}
```

Not:

`project_type_hint` ve `delivery_profile_hint` kullanıcı önerisidir.
Ajan bunları Product Engine contract'larına göre doğrulamalıdır.

---

# 2. Ham Proje Brief'i

{{RAW_PROJECT_BRIEF}}

---

# 3. Proje Amacı

{{PROJECT_PURPOSE}}

---

# 4. Hedef Kullanıcılar

{{TARGET_USERS}}

---

# 5. Temel Kullanıcı Akışları

{{CORE_FLOWS}}

---

# 6. İlk Sürüm Kapsamı

## In Scope

{{IN_SCOPE}}

## Out of Scope

{{OUT_OF_SCOPE}}

## Future / Later

{{FUTURE_SCOPE}}

---

# 7. Teknik Bağlam

## Tercih Edilen Stack

{{TECH_STACK}}

## Bilinen Teknik Kısıtlar

{{TECH_CONSTRAINTS}}

## Entegrasyonlar

{{INTEGRATIONS}}

## Kullanılmaması Gereken Teknolojiler / Yaklaşımlar

{{FORBIDDEN_TECH}}

---

# 8. Tasarım ve UX Yönü

{{DESIGN_DIRECTION}}

---

# 9. Mevcut Proje Bağlamı

Bu bölüm yalnızca `project_state: existing` ise doldurulur.

## Current Reality

{{CURRENT_REALITY}}

## Existing Resources

{{EXISTING_RESOURCES}}

## Known Issues / Debt

{{KNOWN_ISSUES}}

## Target State

{{TARGET_STATE}}

---

# 10. Bilinen Kararlar

{{KNOWN_DECISIONS}}

---

# 11. Açık Kararlar / Belirsizlikler

{{OPEN_DECISIONS}}

---

# 12. Başarı Kriterleri

{{SUCCESS_CRITERIA}}

---

# Product Engine Çalışma Talimatı

Repository içindeki Product Engine v0.1.0 authoritative sistem olarak kullanılacaktır.

Önce root `README.md` içinde tanımlanan canonical Agent Boot / Read Order uygulanmalıdır.

İlgili authoritative kaynaklar gerektiğinde okunmalıdır:

1. `README.md`
2. `PRODUCT_ENGINE_BRAIN.md`
3. `engine/README.md`
4. `engine/PROJECT_INTAKE.md`
5. `engine/DOCUMENT_CATALOG.md`
6. `engine/PACKAGE_RULES.md`
7. `engine/ASSUMPTION_RULES.md`
8. `engine/CONFLICT_RESOLUTION.md`
9. `engine/INFORMATION_MAP.md`
10. `engine/GENERATION_PIPELINE.md`
11. `engine/OUTPUT_STRUCTURE.md`
12. `engine/VALIDATION_RULES.md`
13. `engine/RUN_PROTOCOL.md`
14. Seçilecek package tanımı
15. İlgili templates

`planning/`, `archive/`, `examples/`, `ref/` ve `planning/build-prompts/` aktif runtime authority değildir.

---

# Aşama 1 — Project Intake

Ham brief'i `engine/PROJECT_INTAKE.md` ve `inputs/PROJECT_INPUT_TEMPLATE.md` kurallarına göre değerlendir.

Şu MUST alanlarını kesinleştir:

```text
project_name
project_purpose
project_type
project_state
delivery_profile
primary_language
```

Bu dosyada verilen hint değerlerini contract'lara göre doğrula.

Sessizce uydurulmaması gereken veya package/output davranışını değiştirecek kritik bir belirsizlik varsa kullanıcıya clarification sorusu sor.

Safe assumption yapılabilecek alanları `engine/ASSUMPTION_RULES.md` uyarınca kaydet.

Çelişkileri `engine/CONFLICT_RESOLUTION.md` uyarınca işle.

---

# Aşama 2 — Pending Input

Canonical pending input oluştur:

```text
inputs/pending/{{PROJECT_SLUG}}/PROJECT_INPUT.md
```

`inputs/PROJECT_INPUT_TEMPLATE.md` yapısını kullan.

Ham brief'i `Original Brief` bölümünde koru.

Projeye verilen bilgiler dışında gereksiz özellik icat etme.

Pending input:

```text
status: pending
```

olmalıdır.

---

# Aşama 3 — Approval Gate

Pending input hazır olduğunda burada DUR.

Generation run başlatma.

Kullanıcıya şu approval özetini sun:

1. Project identity
2. Confirmed project type
3. Confirmed delivery profile
4. Ana scope
5. Out of scope
6. Assumption'lar
7. Çelişkiler
8. Açık kararlar / clarification konuları
9. Önerilen package ve seçim gerekçesi
10. Beklenen document seti

Sonunda açıkça sor:

> Bu Project Input'u APPROVED olarak onaylıyor musun?

Explicit kullanıcı onayı alınmadan:

- input'u approved yapma
- run oluşturma
- input snapshot alma
- working-output üretme
- validation çalıştırma
- publication yapma

---

# Approval Sonrası Canonical Akış

Kullanıcı explicit approval verdikten sonra:

```text
Approved Input
→ Package Selection
→ Document Selection
→ Template Resolution
→ Run Creation
→ Immutable Input Snapshot
→ Working Output Generation
→ Pre-Publication Validation
→ Repair (gerekiyorsa)
→ Publication
→ latest/ Update
→ Run Completion
```

Bu akışın authoritative sahibi Product Engine runtime contract'larıdır.

---

# Çalışma Kuralları

- Product Engine mimarisini değiştirme.
- Engine contract'larını değiştirme.
- Package tanımlarını değiştirme.
- Template sistemini değiştirme.
- Gereksiz document family veya top-level klasör oluşturma.
- Approved input olmadan run başlatma.
- Brief'te olmayan kritik iş kurallarını uydurma.
- Private chain-of-thought veya gizli reasoning'i repository dosyalarına yazma.
- Run kayıtlarında yalnız sonuç, karar ve kısa gerekçe tut.
- Repository-first çalış.
- Scope dışına çıkma.

---

# Bu Görevin Bitiş Noktası

Bu çalışma yalnızca şu noktaya kadar ilerler:

```text
Raw Brief
→ Intake
→ Pending PROJECT_INPUT.md
→ Approval Summary
→ User Approval Request
```

Generation henüz başlamaz.
