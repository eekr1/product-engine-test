# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Agent Instructions

## 1. Canonical Read Order

Projede çalışmaya başlayacak herhangi bir AI ajanın okuması gereken kanonik sıradır:

1. [README.md](../README.md) — Kök giriş noktası ve doküman haritası
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Proje vizyonu, temel kapsamı ve kimliği
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) — Ürün davranış kuralları ve doğrulanmış firma bilgileri
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) — Mimari sınırlar ve clean data service boundary
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) — Görsel tasarım dili, renkler, tipografi ve layout kuralları
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Teslimat aşamaları ve milestone'lar
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) — Dalga planı haritası
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) — Aktif durum ve aktif wave (`WAVE_00`)
9. Aktif wave planı: [waves/plans/WAVE_00.md](../waves/plans/WAVE_00.md)
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) — Uygulanacak ilk somut görevler

## 2. Agent Behavior Rules

- **Model Bağımsızlığı**: Ajan, kullandığı AI modelinden veya araç ortamından bağımsız biçimde Product Engine sözleşmelerini aynen uygulamalıdır.
- **Scope Disiplini**: Ajan, aktif wave scope'u dışına sessizce çıkamaz; out-of-scope iş icat edemez.
- **Doğrulanmış Gerçeklik**: Ajan, firma hakkında doğrulanmamış yeni müşteri, sertifika veya hizmet iddiası uyduramaz.
- **No Throwaway Code**: Demo veya prototype olması spagetti kod yazma izni vermez. Temiz, modüler Vanilla JS/CSS standartları korunur.

## 3. Active Wave Execution Rule

- Ajan her oturumda öncelikle `CURRENT_STATUS.md` içindeki aktif wave'i tespit eder.
- Yalnızca aktif wave'in (`WAVE_00.md`) checklist adımlarını sırasıyla uygular.
- Aktif wave tamamlanmadan sonraki wave işlerine geçilemez.

## 4. Coding / Architecture Conventions

- CSS Custom Properties (`main.css`) kullanılarak renk ve spacing değişkenleri merkezi yönetilir.
- JS tarafında ES6 modüler yapısı tercih edilir (`export/import`).
- `CompanyService` veri erişim arayüzü korunmalı; presentation bileşenleri doğrudan hardcoded veri taşımamalıdır.

## 5. Verification Mandates

- Kod değişikliklerinden sonra tarayıcıda veya static preview ortamında görsel/konsol doğrulaması yapılır.
- 320px mobil ekran genişliğinde container kırılması veya taşma olmadığını kontrol edin.

## 6. Documentation Update / Handoff Rule

- Bir wave checklist görevi tamamlandığında `CURRENT_STATUS.md` ve `NEXT_TASKS.md` güncellenmelidir.
- Önemli bir teknik/tasarım kararı alındığında `DECISIONS.md` belgesine kaydedilmelidir.

## 7. Stop / Clarification Rules

- Aktif wave uygulanırken mevcut firma bilgileriyle çelişen bir kısıt veya belirsizlik doğarsa işlem durdurulmalı ve kullanıcıya netleştirme sorusu sorulmalıdır.
