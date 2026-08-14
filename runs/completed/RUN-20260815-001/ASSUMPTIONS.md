# Assumptions — RUN-20260815-001

## 1. Kayıtlı Varsayımlar Listesi

| Assumption ID | Category | Yapılan Varsayım / Karar | Risk Class | Gerekçe | Source Context | Status |
|---|---|---|---|---|---|---|
| ASM-001 | primary_language | Birincil arayüz dili Türkçe (`tr`) olarak belirlenmiştir. | safe | Mevcut web sitesi ve brief metinleri Türkçe olarak sunulmuştur. | proje bağlamı | pending_review |
| ASM-002 | target_users | Hedef kitle Trakya bölgesindeki ağır makine, hidrolik aksam ve sanayi tesisi sorumlularıdır. | safe | Firma adı, yetkili servis tanımı ve hizmet bölgesinden doğrudan türetilmiştir. | proje bağlamı | pending_review |
| ASM-003 | data_boundary | Yerel JS/JSON mock data adapter katmanı kullanılacaktır. | safe | Frontend demo projesinde gerçek backend olmadan veri erişimini ayırmanın en temiz yoludur. | endüstri standardı | pending_review |

## 2. Invariant Kontrolü

- Hiçbir varsayım ticari model, yasal zorunluluk, müşteri kimliği, credential, production deployment veya sahte backend entegrasyonu uydurmamıştır.
