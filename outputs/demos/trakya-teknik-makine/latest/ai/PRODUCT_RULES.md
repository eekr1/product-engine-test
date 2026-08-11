# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- **RULE-001 (Doğrulanmış İddia İlkesi):** Yeni web sitesinde sunulan firma bilgileri, yetkili servis unvanı (Disan Hidrolik Trakya Bölgesi Yetkili Servisi) ve 3 temel hizmet (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım) doğrulanmış mevcut kaynaklarla %100 uyumlu olmalıdır. Kanıtlanmamış sertifika, referans veya müşteri yorumu eklenemez.
- **RULE-002 (Görsel Sunum Üstünlüğü):** Demo, mevcut SITE123 şablonuna kıyasla belirgin biçimde daha modern, kurumsal güven uyandıran ve endüstriyel estetiğe sahip görsel hiyerarşi sunmalıdır.
- **RULE-003 (Hızlı İletişim Erişilebilirliği):** Ziyaretçi hangi bölümde olursa olsun iletişim noktalarına (telefon, e-posta, iletişim CTA) 1 tıklama ile ulaşabilmelidir.
- **RULE-004 (Hizmet Odaklılık):** Üç temel hizmet alanı (Bakım/Onarım, Yedek Parça, Yerinde Destek) ana sayfada ve ilgili detay sunumlarında eşit kurumsal ağırlıkla ve net ikonografi/açıklamalarla sergilenmelidir.

## 2. Davranış ve Akış Kısıtlamaları

- **CONSTRAINT-001 (Gerçekleşmeyen İşlem Yasağı):** Demo ortamında çalışmayan sahte form gönderimleri veya kafa karıştıran sahte başarılı bildirim ekranları gösterilmemelidir. İletişim butonları doğrudan cihaz e-posta/telefon istemcisini veya açık WhatsApp bağlantısını tetiklemelidir.
- **CONSTRAINT-002 (Throwaway Kod Yasağı):** Presentation katmanı bileşenleri mock verileri doğrudan kendi gövdelerinde hardcode etmemelidir; veriler bir data/service adapter arayüzünden okunmalıdır.

## 3. Kapsam Sınırları ve Kuralları

- **SCOPE-001 (Frontend Scope Boundary):** Çalışma yalnızca responsive frontend kurumsal web sitesi demosunu kapsar.
- **SCOPE-002 (Out of Scope Features):** Kullanıcı kaydı/girişi, e-ticaret ödeme sistemi, admin yönetim paneli ve backend API uygulaması ilk demo kapsamında kesinlikle yer almaz.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- **UX-RULE-001 (Responsive Tutarlılık):** Masaüstü, tablet ve mobil cihazlarda aynı kurumsal kalite, tipografik okunabilirlik ve akıcı gezinme sağlanmalıdır.
- **UX-RULE-002 (Performans & Yükleme):** Görseller ve sayfa bileşenleri anında yüklenmeli, satış görüşmesi esnasında donma veya donuk görünüm yaşanmamalıdır.
- **UX-RULE-003 (Güven Unsurları):** Disan Hidrolik yetkili servisi logosu/vurgusu ve Trakya bölgesindeki yerel hizmet gücü belirgin visual card'lar ile öne çıkarılmalıdır.
