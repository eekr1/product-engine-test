# Trakya Teknik Makine — Agent Instructions

## 1. Canonical Read Order

Projeye katılan veya yeni bir wave çalıştırması üstlenen herhangi bir yetkin AI ajanı için kanonik okuma sırası:

1. [README.md](../README.md)
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md)
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md)
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md)
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md)
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md)
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md)
9. Aktif wave planı: [waves/plans/WAVE_00.md](../waves/plans/WAVE_00.md)
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md)
11. [ai/DECISIONS.md](./DECISIONS.md)

## 2. Agent Behavior Rules

- Ajan herhangi bir özel AI sağlayıcısına veya model serisine bağımlı davranmamalıdır.
- Ajan Product Engine yetkili sözleşmelerini ve `inputs/approved/trakya-teknik-makine/PROJECT_INPUT.md` onaylı projesini tek doğru kabul etmelidir.
- Ajan sessizce backend, API, veritabanı veya doğrulanmamış firma iddiaları uydurmamalıdır.
- Demo veya prototip olması kod kalitesini, responsive standartlarını veya mimari sınırları düşürme hakkı vermez.

## 3. Active Wave Execution Rule

- Ajan yalnızca [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) belgesinde belirtilen aktif wave'in planını uygular.
- Aktif wave dışındaki gelecek wave'lerin işlerini sessizce öne çekemez veya aktif wave tamamlanmadan sonraki wave'e geçemez.
- Ajan aktif wave'i tamamladığında [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md), [ai/NEXT_TASKS.md](./NEXT_TASKS.md) ve ilgili wave plan dosyasını günceller.

## 4. Coding / Architecture Conventions

- Presentation katmanı ile data layer kesin biçimde ayrılmalıdır. UI bileşenleri mock veriyi doğrudan HTML içine sabitlememeli; `service.js` arayüzü üzerinden okumalıdır.
- CSS değişkenleri (`variables.css`) kullanılarak [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) visual concept ve HSL renk paletine sadık kalınmalıdır.
- Mobil cihazlarda minimum dokunmatik hedef boyutu (44x44px) ve kontrast oranları korunmalıdır.

## 5. Verification Mandates

- Kod üretildikten sonra tarayıcı simülasyonu veya syntax denetimi ile çalışırlığı doğrulanmalıdır.
- Responsive görünüm masaüstü (1024px+), tablet (768px-1023px) ve mobil (<768px) ekranlarda test edilmelidir.

## 6. Documentation Update / Handoff Rule

- Bir görevi veya wave'i tamamlayan ajan, yaptığı değişiklikleri ve son durum bilgisini [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) belgesine kaydeder.
- Alınan yeni mimari kararlar varsa [ai/DECISIONS.md](./DECISIONS.md) dosyasına ekler.

## 7. Stop / Clarification Rules

- Kullanıcı kararı gerektiren kritik bir belirsizlik veya onaylı kapsamı aşan durum ortaya çıkarsa ajan çalışmayı durdurur ve clarification talep eder.
