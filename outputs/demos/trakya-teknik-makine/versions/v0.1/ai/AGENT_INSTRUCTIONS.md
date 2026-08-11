# Trakya Teknik Makine — Agent Instructions

## 1. Canonical Read Order

Projeye katılan her ajan çalışmaya başlamadan önce aşağıdaki sırayı izlemelidir:

1. [README.md](../README.md) — Giriş noktası ve komut rehberi
2. [ai/PROJECT_BRAIN.md](./PROJECT_BRAIN.md) — Merkezi amaç ve bağlam
3. [ai/PRODUCT_RULES.md](./PRODUCT_RULES.md) — İş mantığı ve kapsam kuralları
4. [ai/TECH_CONTEXT.md](./TECH_CONTEXT.md) — Mimari ve service boundary tanımı
5. [design/DESIGN_RULES.md](../design/DESIGN_RULES.md) — Görsel yönelim ve anti-template kuralları
6. [project/PROJECT_PLAN.md](../project/PROJECT_PLAN.md) — Proje aşamaları
7. [waves/WAVE_MAP.md](../waves/WAVE_MAP.md) — Dalga haritası
8. [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) — Anlık durum ve aktif wave
9. [waves/plans/WAVE_00.md](../waves/plans/WAVE_00.md) — Aktif Wave uygulama planı
10. [ai/NEXT_TASKS.md](./NEXT_TASKS.md) — Sıradaki görev listesi

---

## 2. Agent Behavior Rules

- **Model Bağımsızlığı**: Model-specific varsayım yapmayın. Markdown belgelerini authoritative sözleşme kabul edin.
- **Doğrulanmış Bilgi İlkesi**: Mevcut web sitesi dışından kanıtlanmamış yeni firma bilgisi veya müşteri iddiaları uydurmayın.
- **Quality Floor İlkesi**: Prototype/demo gerekçesiyle kod kalitesini düşürmeyin, spagetti kod yazmayın.

---

## 3. Active Wave Execution Rule

- Ajan her oturumda yalnız [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) belgesinde tanımlı aktif wave'in [waves/plans/WAVE_<NN>.md](../waves/plans/WAVE_00.md) planını uygulamalıdır.
- Aktif wave tamamlanmadan bir sonraki wave'in kodlarına geçilmemelidir.

---

## 4. Coding / Architecture Conventions

- **Service Adapter Boundary**: UI presentation katmanı mock veriye doğrudan erişmemeli; `IDataService` arayüzü üzerinden erişmelidir.
- **Environment & Config Separation**: Metinler ve ayarlar kod içine gömülmemeli (hardcode edilmemeli); mock/config katmanından tüketilmelidir.
- **Clean Component Structure**: Bileşenler modüler, anlaşılır ve tek bir sorumluluğa sahip olmalıdır.

---

## 5. Verification Mandates

- Kod yazımı tamamlandıktan sonra build ve dev sunucu başlatma komutları çalıştırılarak hatasız derlendiği doğrulanmalıdır.
- Mobil ve masaüstü responsive görünümler ve buton erişilebilirlikleri kontrol edilmelidir.

---

## 6. Documentation Update / Handoff Rule

- Bir wave tamamlandığında ajan [ai/CURRENT_STATUS.md](./CURRENT_STATUS.md) belgesindeki aktif wave bilgisini güncellemeli ve [ai/NEXT_TASKS.md](./NEXT_TASKS.md) listesini bir sonraki wave görevlerine göre yenilemelidir.
- Yeni bir mimari veya teknik karar alındığında bu karar [ai/DECISIONS.md](./DECISIONS.md) belgesine gerekçesiyle yazılmalıdır.

---

## 7. Stop / Clarification Rules

- Doğrulanmış firma beyanlarıyla çelişen bir talep alındığında durun ve kullanıcıdan netleştirme isteyin.
- Backend/API entegrasyonu uydurması istenirse durun ve service boundary ilkelerini hatırlatın.
