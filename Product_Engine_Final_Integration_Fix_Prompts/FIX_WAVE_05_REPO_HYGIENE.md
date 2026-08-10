# Product Engine — Final Integration Fix
# Wave 05 — Root Artifact Cleanup & Final Repository Hygiene

Repo: `eekr1/product-engine-test`

Wave 01–04 tamamlanmış olmalıdır.

## Amaç

Final runtime sistemini historical build artifacts, stale planning references, naming drift ve gereksiz documentation noise'dan ayırmak.

Bu wave runtime mimarisini değiştirmez.

---

# Önce Oku

1. `README.md`
2. `PRODUCT_ENGINE_BRAIN.md`
3. `planning/README.md`
4. `planning/BUILD_STATUS.md`
5. `archive/README.md`
6. `logs/README.md`
7. root'taki tüm `PROMPT_XX*` dosyaları
8. repository root tree

---

# Görev 1 — Root PROMPT_XX Inventory

Tüm root `PROMPT_XX*` dosyalarını listele.

Her biri için sınıflandır:

```text
historical build orchestration artifact
active runtime prompt
obsolete duplicate
naming error
```

Final integration sonrası bu dosyaların runtime authority olmadığını root README zaten belirtmiş olmalı.

---

# Görev 2 — Build Prompt'larını Runtime Yüzeyinden Ayır

Tercih edilen sade yaklaşım:

```text
planning/build-prompts/
```

gibi tek tarihsel konuma taşımak.

Ancak mevcut planning/archive contract'larını önce kontrol et.

Hedef:

- root temiz kalsın,
- historical build promptlar kaybolmasın,
- git history dışında da okunabilir kalsın,
- agent root'a geldiğinde bunları active task sanmasın.

Yeni top-level klasör icat etmekten kaçın.

En doğal mevcut historical/build-design layer `planning/` ise promptları onun altında tut.

Örnek:

```text
planning/build-prompts/PROMPT_03_PACKAGES_BUILD.md
planning/build-prompts/PROMPT_06_TEMPLATES_BUILD.md
...
```

Eğer repo contracts buna açıkça engelse en azından root README'de historical banner + naming cleanup uygula.

---

# Görev 3 — `.md.md` Naming Drift Düzelt

`PROMPT_03_PACKAGES_BUILD.md.md`

gibi double extension varsa canonical `.md` adına düzelt.

Referansları repo genelinde güncelle.

Broken references bırakma.

---

# Görev 4 — Stale Planning References Cleanup

Repository genelinde runtime docs içinde:

```text
planning/... authoritative
planning/... must read before runtime
planning BUILD_STATUS as current runtime truth
```

gibi stale ifadeleri ara.

Runtime docs planning'i yalnız historical/build design reference olarak görmeli.

Build promptlar planning okumaya devam edebilir; çünkü onlar historical build artifacts.

---

# Görev 5 — Historical vs Active Navigation

Root README'de final navigation şu sorulara açık cevap vermeli:

- Product Engine'i kullanacaksam nereden başlarım?
- Runtime contracts nerede?
- Build history nerede?
- Examples nerede?
- Archive ne zaman okunur?
- Root'taki hiçbir historical prompt active instruction mı?

Root'ta ambiguity bırakma.

---

# Görev 6 — Gereksiz Complexity Sweep

Repo genelinde yalnız documentation complexity açısından ara:

- aynı kavramın 3+ yerde tekrar tanımı,
- artık kullanılmayan future design notes,
- V0 runtime'a katkısı olmayan build commentary,
- stale "later decide" ifadeleri,
- eski alternatifi hâlâ current option gibi anlatan bölümler.

Ancak:

- yeni mimari tasarlama,
- sırf kısa olsun diye faydalı contract silme,
- historical record'ı yok etme.

Sadece final system surface'i sadeleştir.

---

# Görev 7 — Cosmetic Sweep

Sadece dokunduğun veya doğrudan ilgili dosyalarda:

- `Deyildir` → `Değildir`
- bozuk heading
- double heading
- obvious typo
- inconsistent path formatting

gibi küçük hataları düzelt.

Repo genelinde agresif language rewrite yapma.

---

# Görev 8 — Final Build Status

`planning/BUILD_STATUS.md` final integration fixes tamamlandıktan sonra güncelle:

```text
Planning: Completed
Folder Builds: Completed
Final Integration Audit: Completed
Integration Fixes: Completed
Final Re-Audit: Pending
```

Final re-audit sonrası ayrıca güncellenmesi gerekebilir.

---

# Validation

1. Root'ta active/historical ambiguity kaldı mı?
2. Build prompts root'tan ayrıldı mı veya açık historical marker aldı mı?
3. Double `.md.md` yok mu?
4. Broken references yok mu?
5. Runtime docs planning'i authority sayıyor mu?
6. Root README clean navigation veriyor mu?
7. Gereksiz duplicate build commentary temizlendi mi?
8. `git diff --check` temiz mi?

Ayrıca mümkünse repo-wide text search yap:

```text
not_assigned
PROMPT_03_PACKAGES_BUILD.md.md
Current Focus: engine/ Build Preparation
gerçek engine belgeleri henüz üretilmemiştir
planning/BUILD_STATUS.md
file:///
C:\Users\
```

Her eşleşmeyi bağlamına göre değerlendir; historical örneklerde kasıtlıysa bırak.

---

# Çalışma Sonu Raporu

- Taşınan/rename edilen root artifacts
- Güncellenen references
- Kapatılan stale planning noktaları
- Complexity cleanup özeti
- Final re-audit'e hazır mı?

Bu wave dışına çıkma.
