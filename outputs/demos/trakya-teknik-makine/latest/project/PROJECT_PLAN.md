# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Project Plan

## 1. Delivery Strategy

Proje, potansiyel müşteri satış görüşmesine sunulmak üzere proaktif bir **frontend sunum prototipi (Prototype)** olarak teslim edilecektir. Mimarlık, throwaway kod yazımını engellemek amacıyla istemci tarafında UI presentation ve local data/service katmanlarına ayrılmıştır. Teslimat, bağımsız olarak doğrulanabilir 5 dalgadan (`WAVE_00` - `WAVE_04`) oluşan kademeli bir execution roadmap izler.

## 2. Phases / Milestones

- **Milestone 1 (Altyapı & Tasarım Sistemi — WAVE_00)**: HTML/CSS/JS modüler yapısının, visual token'ların ve `contentService` mock data adaptörünün dondurulması.
- **Milestone 2 (Ana Giriş & Yetkili Servis Güvenliği — WAVE_01)**: Hero bölümü, 3 saniye kuralı mesajı ve Disan Hidrolik yetkili servis rozetinin tamamlanması.
- **Milestone 3 (Hizmet Kataloğu & Sunum — WAVE_02)**: 3 temel hizmetin (Yedek Parça, Yerinde Destek, Bakım/Onarım) kartlı visual spec sheet estetiği ile sergilenmesi.
- **Milestone 4 (İletişim & Aksiyon Katmanı — WAVE_03)**: Telefon, mail, adres ve mobil hızlı erişim iletişim aksiyonlarının tamamlanması.
- **Milestone 5 (Final Responsive & Satış Sunumu QA — WAVE_04)**: Tüm cihaz genişliklerinde (320px - 2560px) responsive uyum ve satış sunumu kalite kabulü.

## 3. Wave Relationship

Plan doğrudan `WAVE_MAP.md` ile birebir uyumludur:
`WAVE_00` (Foundation) ➔ `WAVE_01` (Hero/Trust) ➔ `WAVE_02` (Services) ➔ `WAVE_03` (Contact) ➔ `WAVE_04` (Final QA).

## 4. Dependency Overview

Tüm geliştirme adımları istemci tarafında yerel web standartlarına dayanır. Harici bağımlılık olarak yalnızca Google Fonts (`Inter`, `Outfit`) ve yerel preview ortamı (`Vite`) bulunmaktadır. Sunucu, veritabanı veya dış API bağımlılığı bulunmamaktadır.

## 5. Deliverables

- Modüler frontend kaynak kod yapısı (`src/styles/`, `src/components/`, `src/services/`, `src/data/`).
- Duyarlı (responsive) tek sayfa kurumsal demo web uygulaması.
- Tamamlanmış ve ajana hazır Product Engine dokümantasyon paketi.

## 6. Acceptance Conditions

- [ ] Demo ilk bakışta mevcut SITE123 sitesinden belirgin biçimde daha modern ve profesyonel görünmektedir.
- [ ] 3 temel hizmet ve Disan Hidrolik yetkili servisliği hızlıca anlaşılmaktadır.
- [ ] Mobil ve masaüstü görünümlerde sıfır kayma ve kırılma vardır.
- [ ] İletişim CTA'ları cihaz protokollerine tam uyumludur.

## 7. Scope Growth / Upgrade Boundaries

- **Mevcut Kapsam (Committed Scope)**: Responsive frontend demo, local mock data, 3 hizmet ve iletişim aksiyonları.
- **Gelecek Genişleme Sınırı (Future Upgrade Boundaries)**: Satış görüşmesi sonrasında müşteri onayı ile eklenebilecek gerçek CMS/Admin paneli, online teklif motoru, WhatsApp canlı destek hattı ve gerçek backend/DB entegrasyonu bugünkü committed scope'u değiştirmeden temiz adapter katmanı üzerinden eklenebilecektir.
