# Assumptions Register — RUN-20260813-001

## 1. Aktif Varsayımlar Listesi

| Assumption ID | Alan / Bağlam | Yapılan Varsayım | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| `ASM-001` | `primary_language` | Türkçe (`tr`) | safe | Hedef kitle Trakya bölgesi işletmeleri ve tüm mevcut kaynak içerikler Türkçe | Proje Bağlamı | `confirmed` |
| `ASM-002` | `project_type` | `landing-page` | bounded | Kurumsal tanıtım, hizmet sunumu ve yetkili servis vurgusu taşıyan frontend demo yapısı | Proje Bağlamı | `confirmed` |
| `ASM-003` | Logo Varlıkları | SVG/CSS marka amblemi | safe | Yüksek çözünürlüklü vektör logosu henüz bulunmadığı için frontend demo aşamasında temiz SVG/CSS tipografik marka amblemi kullanılacaktır | Proje Bağlamı | `confirmed` |
| `ASM-004` | Mock Data Adapter | Static JSON/JS Service Adapter | safe | Backend bulunmadığı için veriler component'lere gömülmeyip mock adapter interface'i üzerinden UI'a sunulacaktır | Proje Bağlamı | `confirmed` |

## 2. Onaylanan veya Doğrulanan Varsayımlar

- `ASM-001` ve `ASM-002` explicit user approval ile dondurulmuş ve approved input gerçeği olmuştur. Status: `confirmed`.
- `ASM-003` ve `ASM-004` safe/bounded mimari kararlar olarak `confirmed` durumuna alınmıştır.
