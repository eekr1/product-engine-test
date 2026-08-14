# Assumptions: RUN-20260814-001

| Assumption ID | Alan | Yapılan Varsayım | Sınıf | Gerekçe | Kaynak | Durum |
|---|---|---|---|---|---|---|
| ASM-01 | `primary_language` | Türkçe (tr) | Safe | Firma Trakya bölgesinde yerel hizmet vermektedir. | Proje Bağlamı | confirmed |
| ASM-02 | `project_type` | `web-app` | Safe | Kurumsal frontend demo yapısı web-app kategorisindedir. | Engine Standardı | confirmed |
| ASM-03 | `project_state` | `existing` | Safe | Yayında mevcut bir web sitesi ve dondurulmuş firma bilgileri mevcuttur. | Proje Bağlamı | confirmed |
| ASM-04 | `technical_stack` | Vite + React | Bounded | Kullanıcı explicit user approval ile seçmiştir. | User Approval | confirmed |
