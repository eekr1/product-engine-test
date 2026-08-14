# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Tech Context

## 1. Teknoloji Yığını (Technology Stack)

- **Frontend Core**: HTML5, Vanilla CSS3 (Custom CSS Design Tokens), Modern JavaScript (ES Modules).
- **Icons & Assets**: Inline SVG simge/amblem yapısı.
- **Local Data & Config**: JSON / JS configuration module tabanlı mock veri kaynağı.
- **Preview Environment**: Statik sunucu / Vite dev server ile lokal önizleme.
- **Unresolved / Deferred Stack**: Gerçek backend framework (Node/Python/Go vb.), üretim veritabanı (PostgreSQL/MySQL vb.) ve production hosting hedefleri onaylı kapsam dışında olduğu için stack-neutral bırakılmıştır.

## 2. Mimari Kararlar ve Yaklaşım

- **TARCH-001 (Clean Presentation Layer):** Arayüz (UI) bileşenleri içerik verisini doğrudan kod içine gömmeyecek; `Service / Data Access Boundary` üzerinden tüketecektir.
- **TARCH-002 (Non-Throwaway Architecture):** Demo bağımsız bir frontend olarak geliştirilecek, ancak veri erişim yapısı gelecekte gerçek bir REST veya GraphQL API adapter'ına bağlanabilecek biçimde tasarlanacaktır.
- **TARCH-003 (Stack-Neutral Integration Boundaries):** Gerçek backend kapsamda olmadığı sürece sahte endpoint URL'leri, uydurma veritabanı şemaları veya backend sunucu bağımlılıkları tanımlanmayacaktır.

## 3. Sistem Bileşenleri ve Boundary'ler

```text
+-------------------------------------------------------------+
|                     UI Presentation Surface                 |
| (Navigation, Hero, Service Cards, Trust Badge, Contact CTA) |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                  Service / Data-Access Interface            |
| (getCompanyDetails, getServicesList, submitContactMessage)  |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
|                     Mock Adapter (Bugün)                    |
|             (Local Config / Static Objects)                 |
+-------------------------------------------------------------+
                              | (Gelecekte Replaceable)
                              v
+-------------------------------------------------------------+
|                Real API Adapter (Gelecekte)                 |
|             (Approved Backend Integration)                  |
+-------------------------------------------------------------+
```

## 4. Data / Service / Integration Readiness

1. **Veri Bugün Nereden Geliyor?**: Yerel konfigürasyon ve sabit mock veri nesnelerinden.
2. **Mock/Local Data Nerede Tutuluyor?**: `src/data/` veya eşdeğer yerel modül katmanında.
3. **UI Veriyi Nasıl Tüketiyor?**: Servis arayüzü (ör. `companyService.getServices()`) üzerinden.
4. **Gerçek Backend Eklendiğinde Ne Değişecek?**: Presentation bileşenleri dokunulmadan kalacak; yalnızca mock adapter yerine `httpApiAdapter` enjekte edilecektir.
5. **Config & Environment Yönetimi**: Çevre değişkenleri (`CONFIG`) uygulama mantığından ayrılacaktır.
6. **Unresolved Konular**: Gerçek backend API endpoint şeması ve veritabanı mimarisi (gelecek aşama).

## 5. Teknik Kısıtlamalar ve Sınırlar

- **TCON-001:** Dış HTTP API bağımlılığı olmaksızın %100 çevrimdışı / lokal çalışabilmelidir.
- **TCON-002:** Üçüncü taraf ağır CSS framework'leri (Tailwind/Bootstrap) yerine projeye özel modüler Vanilla CSS kullanılmalıdır.
- **TCON-003:** Sıfır güvenlik zafiyeti ilkesiyle secret, API key veya hassas veri saklanmamalıdır.
