# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Decisions

## Project Architectural & Product Decisions

| Decision ID | Area | Decision | Rationale | Status |
|---|---|---|---|---|
| DEC-01 | Product Scope | Frontend Sales Demo | Projenin birincil hedefi potansiyel müşteri satış görüşmesinde gösterilecek modern bir web sitesi demosu sunmaktır. | Approved |
| DEC-02 | Data Integrity | Preserve Verified Facts | Mevcut sitedeki firma bilgileri, Disan yetkili servis tanımı ve 3 ana hizmet korunmuş; sahte iddialar uydurulmamıştır. | Approved |
| DEC-03 | Architecture | Service / Data Boundary | Demo scope'u kod kalitesini düşürmez. `UI -> Service Interface -> Local Mock Data Provider` mimarisi dondurulmuştur. | Approved |
| DEC-04 | Design | Precision Industrial Modernism | Ucuz lacivert kurumsal tema klişesinden kaçınılarak projeye özgü yüksek kontrastlı endüstriyel görsel dil kurulmuştur. | Approved |
| DEC-05 | Technology | Vanilla CSS & Modern JS | Ağır CSS framework bağımlılığı olmaksızın CSS Tokens ve modüler JS ile performanslı ve temiz frontend altyapısı seçilmiştir. | Approved |
