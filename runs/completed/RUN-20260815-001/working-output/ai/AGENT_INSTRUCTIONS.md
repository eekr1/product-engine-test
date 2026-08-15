# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Agent Instructions

## 1. Canonical Read Order

Herhangi bir yetkin AI ajanı bu projede kod geliştirmeden önce aşağıdaki kanonik sırayla dökümanları okumalıdır:

1. [README.md](../README.md) — Root giriş noktası ve agent okuma sırası rehberi
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Proje amacı, kimlik ve genel sınırlar
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) — Ürün kuralları ve source-closed kısıtlamaları
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) — Teknik mimari, mock static adapter ve service boundary kısıtları
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) — Endüstriyel kurumsal görsel kimlik ve UI kuralları
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Proje planı ve milestone'lar
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) — Dalga bazlı execution haritası
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) — Anlık proje durumu ve aktif wave
9. Aktif `waves/plans/WAVE_<NN>.md` — Aktif dalganın exact planlama belgesi
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) — Sıradaki uygulanabilir görevler

## 2. Agent Behavior Rules

- **Source-Closed Rule**: `SOURCE_REGISTER.md` / FCL içinde bulunmayan hiçbir firma gerçeğini (stok, acil 7/24 servis, mobil araç sayısı, SLA süresi, makine modelleri, çalışma saatleri, sertifikalar veya fiziksel adres) uyduramazsınız.
- **No Unapproved Interaction**: Form submit backend'i, canlı harita, WhatsApp ikonu veya yetkilendirme akışları uyduramazsınız.
- **Model Independence**: Ajan kimliği veya kullanılan AI modeli fark etmeksizin kod ve mimari kalite tabanı `Prototype` profilinde dahi korunmalıdır.

## 3. Active Wave Execution Rule

- Yalnızca `CURRENT_STATUS.md` içinde belirtilen aktif wave'i (`WAVE_MAP.md` & `WAVE_<NN>.md`) uygulayabilirsiniz.
- Aktif dalga tamamlanmadan bir sonraki dalganın görevlerine geçemezsiniz.
- Dalga checklist'indeki her task parent capability atomuyla tam eşleşmek zorundadır.

## 4. Coding / Architecture Conventions

- **Modular ES Modules**: JavaScript kodları modüler ES Modül yapısında (`import`/`export`) yazılmalıdır.
- **Presentation-Data Separation**: UI bileşenleri veriyi doğrudan HTML içinde tutmaz; `companyService.js` üzerinden asenkron alır.
- **Vanilla CSS Tokens**: CSS kuralları `index.css` içindeki CSS Custom Properties (`--bg-dark`, `--surface-dark`, `--accent-orange`) üzerinden uygulanmalıdır.

## 5. Verification Mandates

- Kod geliştirmesi yaptıktan sonra HTML, CSS ve JS dosyalarını browser ortamında veya konsolda hatasız çalıştığını doğrulamadan görevi completed ilan edemezsiniz.
- Direct contact CTA butonlarının `tel:` ve `mailto:` link protokollerini taşıdığını test etmelisiniz.

## 6. Documentation Update / Handoff Rule

- Bir dalgayı tamamladığınızda `CURRENT_STATUS.md` ve `NEXT_TASKS.md` dosyalarını bir sonraki dalgaya güncelleyiniz.
- Önemli bir teknik/mimari karar aldıysanız `ai/DECISIONS.md` belgesine ekleyiniz.

## 7. Stop / Clarification Rules

- Approved scope dışına çıkan bir talep veya çelişki ile karşılaşırsanız durup kullanıcıdan/operator'den açıklama talep ediniz.
