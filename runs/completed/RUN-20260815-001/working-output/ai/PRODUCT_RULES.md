# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-BUS-001 (Marka Kimliği)**: Firma adı her zaman tam olarak `Trakya Teknik Makine` olarak sunulmalıdır.
- **PR-BUS-002 (Yetkili Servis Vurgusu)**: Firma statüsü `Disan Hidrolik Makine Trakya Bölge Yetkili Servisi` olarak ilk bakışta anlaşılır biçimde konumlandırılmalıdır.
- **PR-BUS-003 (Temel Hizmet Kapsamı)**: Yalnızca onaylı 3 ana hizmet (`Yedek Parça Temini`, `Yerinde Teknik Destek`, `Makine Bakım ve Onarım`) sergilenecektir.
- **PR-BUS-004 (Factual Provenance Boundary)**: Source dosyada bulunmayan ek firma iddiaları (stok garantisi, orijinal parça garantisi, mobil filo, acil müdahale SLA, periyodik bakım detayları, revizyon yetkinliği, adres, çalışma saatleri veya sertifikalar) kesinlikle metin veya görsel kart detaylarına eklenmeyecektir.
- **PR-BUS-005 (Contact Action Handlers)**: Telefon CTA'sı (`tel:`) ve E-posta CTA'sı (`mailto:`) direct contact tetikleyicisi olarak işlev görecektir. Gerçek değerler schema/placeholder kalacaktır.

## 2. Davranış ve Akış Kısıtlamaları

- **PR-BEH-001 (No Invented Backend)**: Frontend demo uygulamasında hiçbir sahte API endpoint, backend veritabanı bağlantısı veya form submit backend'i simüle edilmeyecek; mock/local adapter kullanılacaktır.
- **PR-BEH-002 (No Invented Capabilities)**: Approved scope dışındaki etkileşim bileşenleri (canlı harita, WhatsApp entegrasyonu, modal/popup, mesaj gönderme formu backend'i) eklenmeyecektir.
- **PR-BEH-003 (Read-Only Data Flow)**: UI bileşenleri mock verileri doğrudan kendi içinde hardcode etmeyecek; `src/services/dataService.js` adapter arabirimi üzerinden okuyacaktır.

## 3. Kapsam Sınırları ve Kuralları

- **PR-SCP-001 (Demo Scope Boundaries)**: Proje `Prototype` olgunluğunda bir satış demosudur. Bu durum kod veya mimari kalitenin düşürülmesiniAuthorize etmez.
- **PR-SCP-002 (Out-of-Scope Strict Gate)**: E-ticaret, sepet, ödeme, kullanıcı girişi, admin paneli, CMS entegrasyonu ve canlı harita kapsam dışındadır.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **PR-UX-001 (Kurumsal Güven & Tipografi)**: Görsel tasarım generic lacivert kurumsal tema klişesinden kaçınacak; tipografik hiyerarşi, yüzey derinliği ve endüstriyel güven hissi sunacaktır.
- **PR-UX-002 (Responsive Adaptability)**: Sayfa düzeni masaüstü (1200px+), tablet (768px-1024px) ve mobil (320px-480px) ekranlarda kırılma olmaksızın responsive davranacaktır.
- **PR-UX-003 (Navigasyon Akışı)**: Ziyaretçi hero alanından hizmet kartlarına ve direct contact CTA yüzeylerine pürüzsüz biçimde erişebilecektir.
