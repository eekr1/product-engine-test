# Trakya Teknik Makine Kurumsal Web Sitesi Demo — İletişim Sayfası Design Package

- **Page ID**: `PAGE-007`
- **Page/Screen**: İletişim
- **Slug**: `contact`
- **Approved Relation**: Child of Root
- **Route / Entry Context**: `/iletisim` (Direct URL / Primary Navigation)
- **Amaç**: Approved direct-contact capability'lerini ayrı iletişim yüzeyinde sunmak.

## 1. User Goal & Primary Actions

- **Kullanıcı Hedefleri**:
  - Trakya Teknik Makine ile iletişime geçebileceği kurumsal kanalları görmek.
  - Firma adı, yetkili servis statüsü ve Trakya bölgesi servis bağlamında iletişim talebi iletmek.
- **Birincil Aksiyonlar**:
  - Direct Contact Actions (Telefon / E-posta yönlendirmeleri — placeholder/unknown yönetimi ile).
  - Demo iletişim formu (frontend-only interactive demo state).

## 2. Information Hierarchy

1. **Page Header**: İletişim başlığı ve kurumsal iletişim açıklaması.
2. **Company & Authorized Service Identity Card**: Trakya Teknik Makine unvanı ve Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü vurgulu iletişim kartı.
3. **Direct Contact Channels Block**:
   - Telefon: Direct call capability (exact numara kaynakta olmadığı için `Belirtilen İletişim Kanalı (Placeholder)` olarak yönetilir).
   - E-posta: Mailto capability (exact adres kaynakta olmadığı için `Belirtilen E-posta Kanalı (Placeholder)` olarak yönetilir).
   - Servis Bölgesi: Trakya Bölgesi.
4. **Interactive Demo Form**: Frontend-only demo mesaj formu (isim, e-posta, konu, mesaj). Submit basıldığında demo onay mesajı gösterilir; backend gönderimi yapılmaz.

## 3. Layout & Section Breakdown

- **Page Hero**: Koyu antrasit zemin (`#0F141C`), "İletişim & Servis Talebi" başlığı.
- **Contact Grid**: 2 sütunlu düzen. Sol sütunda kurumsal iletişim kanalları ve yetkili servis kartı, sağ sütunda demo mesaj formu (`#161D2A` yüzey + amber accent buton).

## 4. Component Composition

- `Header` & `Footer` (`GLOBAL_SHELL`)
- `PageHeader`
- `ContactInfoCard`
- `DemoContactForm`

## 5. States & Edge Cases

- **Form Submit State**: Frontend demo submit sonrası `System States` standartlarında onay mesajı ("Mesajınız demo ortamında alınmıştır").
- **FCL Safety**: Exact tel/eposta/adres source truth bulunmadığı için uydurma numara veya adres yazılmaz.

## 6. Responsive Behavior

- **Desktop (`> 1024px`)**: 2 sütunlu iletişim düzeni.
- **Mobile (`< 640px`)**: Tek sütunlu dikey form ve iletişim kartı akışı.

## 7. Accessibility / Keyboard / Focus

- Form girdilerinde açık `<label>` etiketleri ve focus ring.

## 8. Data & Integration Touchpoints

- Data Source: `src/services/dataAdapter.ts` -> `getCompanyInfo()`.

## 9. Acceptance Notes

- Sayfa `/iletisim` rotasında ayrık bir sayfa olarak çalışır.
- Canlı harita, WhatsApp veya backend submit eklenmemiştir.
