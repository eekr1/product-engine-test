# Trakya Teknik Makine Kurumsal Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **PR-BUS-001 (Firma & Statü Sunumu)**: Trakya Teknik Makine adı ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü ana sayfa ve kurumsal sayfada öne çıkarılmalı, doğrulanmamış distribütörlük veya üretici unvanı eklenmemelidir.
- **PR-BUS-002 (3 Approved Hizmet Sunumu)**: Hizmetler overview ve detail yüzeylerinde yalnız approved 3 hizmet sunulur:
  1. Yedek Parça Temini
  2. Yerinde Teknik Destek
  3. Makine Bakım ve Onarım
- **PR-BUS-003 (Service Discovery & Detail Flow)**: Her approved hizmet için hem Hizmetler overview sayfasında özet sunum hem de ayrı Service Detail sayfasında odaklı detay sunumu sağlanmalıdır.
- **PR-BUS-004 (Direct Contact Capability)**: İletişim sayfasında direct-contact yönlendirmeleri sunulur. Exact telefon ve e-posta source truth olmadığı için placeholder/unknown olarak yönetilir; uydurma numara veya adres eklenemez.

## 2. Davranış ve Akış Kısıtlamaları

- **PR-CON-001 (FCL Constraint)**: Source-backed olmayan firma ve hizmet iddiaları (stok garantisi, orijinal parça sertifikası, mobil filo büyüklüğü, acil müdahale süresi, SLA, periyodik bakım paketleri, revizyon garantisi, spesifik makine uzmanlıkları, referanslar, sertifikalar) üretilemez.
- **PR-CON-002 (Out of Scope Features)**: Admin paneli, CMS, veritabanı, gerçek API backend'i, kullanıcı girişi, e-ticaret, canlı harita, WhatsApp entegrasyonu ve form submit backend'i mevcut kapsam dışındadır.
- **PR-CON-003 (Prototype Delivery Context)**: `Prototype` teslim olgunluğu demo hedefini temsil eder; ancak page breadth, visual quality veya architecture standardını düşürme gerekçesi olamaz.

## 3. Kapsam Sınırları ve Kuralları

- **PR-SCP-001 (In-Scope Surfaces)**: 7 onaylı distinct sayfa dışına çıkan yeni sayfa eklenemez.
- **PR-SCP-002 (In-Scope Capabilities)**: Demo kapsamı modern responsive frontend sunumu, 7 sayfalı navigasyon, hizmet keşif akışı ve direct-contact capability'leri ile sınırlıdır.
- **PR-SCP-003 (Future Scope Boundary)**: İleride eklenebilecek CMS, gerçek backend veya canlı harita entegrasyonları bugünkü committed scope gibi sunulamaz.

## 4. Site / Surface Integrity Rules

- **PR-SURF-001 (Immutable Page Set)**: `APPROVED_PAGE_SET` (`PAGE-001` .. `PAGE-007`) run boyunca sabittir. Page identity silinemez veya yenisi eklenemez.
- **PR-SURF-002 (Distinct Page Collapse Prohibition)**: Onaylanmış 7 distinct sayfa (`PAGE-001` Ana Sayfa, `PAGE-002` Kurumsal, `PAGE-003` Hizmetler, `PAGE-004` Yedek Parça Detay, `PAGE-005` Yerinde Destek Detay, `PAGE-006` Bakım Onarım Detay, `PAGE-007` İletişim) tek sayfalık anchor section'lara (`/#kurumsal`, `/#hizmetler`, `/#iletisim`) collapse edilemez.
- **PR-SURF-003 (Routable Surface Identity)**: Her onaylı sayfa kendi benzersiz URL route identity'sine (`/`, `/kurumsal`, `/hizmetler`, `/hizmetler/yedek-parca-temini`, `/hizmetler/yerinde-teknik-destek`, `/hizmetler/makine-bakim-onarim`, `/iletisim`) sahip distinct bir arayüz olarak çalışır.

## 5. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **PR-UX-001 (Cross-Page Responsive Consistency)**: Desktop, tablet ve mobile görünümlerde global navigation, header, footer ve tipografi tutarlılığı korunur.
- **PR-UX-002 (Industrial Precision Tone)**: Tasarım modern, endüstriyel, temiz ve güven veren bir kurumsal dil taşır. Generic lacivert şablon klişeleri kullanılmaz.
- **PR-UX-003 (Service Detail Identity)**: Service Detail sayfaları kartların büyütülmüş kopyası gibi görünmemeli; factual kısıtlar dahilinde sayfa kompozisyonu özgünleşmelidir.
