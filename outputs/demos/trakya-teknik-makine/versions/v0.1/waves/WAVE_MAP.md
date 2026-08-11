# Trakya Teknik Makine — Wave Map

## 1. Wave Architecture Principles

- **Sorumluluk Ayrımı**: Her wave tek bir anlamlı ve bağımsız doğrulanabilir geliştirme hedefine odaklanır.
- **Service Boundary Önceliği**: Altyapı ve veri erişim soyutlaması (`WAVE_00`) UI geliştirmelerinden önce kurulur.
- **Aşama Bağımlılığı**: Dikey bağımlılık zinciri esastır (`WAVE_00 -> WAVE_01 -> WAVE_02`); dairesel bağımlılıklara izin verilmez.

---

## 2. Wave Map Summary

| Wave ID | Wave Adı | Odak Noktası | Bağımlılıklar | Başlıca Çıktı |
|---|---|---|---|---|
| `WAVE_00` | Foundation & Mock Service Boundary | Proje kurulumu, CSS değişkenleri, `MockDataService` | Yok (Approved Input) | Çalışır altyapı & veri adaptörü |
| `WAVE_01` | Core UI & Service Showcase | Hero, Yetkili Servis vurgusu, 3 Hizmet bileşeni | `WAVE_00` | Ana sayfa ve Hizmet arayüzleri |
| `WAVE_02` | Polish, Contact & Sales Demo Readiness | Responsive düzenleme, İletişim CTA, Demo kabul doğrulaması | `WAVE_01` | Satış görüşmesine hazır frontend demo |

---

## 3. Dependency Chain

```text
WAVE_00: Foundation & Mock Service Boundary
    ↓
WAVE_01: Core UI & Service Showcase
    ↓
WAVE_02: Polish, Contact & Sales Demo Readiness
```

---

## 4. Wave Entries

### WAVE_00: Foundation & Mock Service Boundary
- **Amaç**: Proje yapısını kurmak, design token'larını tanımlamak ve mock data adapter boundary'sini oluşturmak.
- **Plan Belgesi**: [waves/plans/WAVE_00.md](./plans/WAVE_00.md)

### WAVE_01: Core UI & Service Showcase
- **Amaç**: Modern Hero, Disan Hidrolik Yetkili Servis tanımı vurgusu ve 3 temel hizmet (Yedek Parça, Yerinde Destek, Bakım-Onarım) UI bileşenlerini geliştirmek.
- **Plan Belgesi**: [waves/plans/WAVE_01.md](./plans/WAVE_01.md)

### WAVE_02: Polish, Contact & Sales Demo Readiness
- **Amaç**: İletişim kanallarını eklemek, responsive kontrolleri tamamlamak ve demoyu satış görüşmesinde sorunsuz sunulacak olgunluğa getirmek.
- **Plan Belgesi**: [waves/plans/WAVE_02.md](./plans/WAVE_02.md)

---

## 5. Cross-Wave Invariants

1. Firma metinleri ve beyanları (mevcut site içeriği) tüm dalgalarda korunmalıdır.
2. UI bileşenleri mock veriye sert kodlanmamalı, `IDataService` adaptörü üzerinden erişmelidir.
3. Sektör klişesi şablon tasarım kararları uygulanmamalıdır.

---

## 6. Global Exit / Handoff Rules

- Her wave tamamlandığında [ai/CURRENT_STATUS.md](../ai/CURRENT_STATUS.md) ve [ai/NEXT_TASKS.md](../ai/NEXT_TASKS.md) güncellenmelidir.
- Tüm wave'ler tamamlandığında proje nihai agent-ready doğrulamasından geçerek teslim paketine aktarılır.
