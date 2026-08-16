# Fizyoterapist Eda Pala Web Sitesi Demo — Project Brain

## 1. Proje Kimliği ve Amacı

- **Proje Adı**: Fizyoterapist Eda Pala Web Sitesi Demo
- **Proje Slug**: `fizyoterapist-eda-pala`
- **Tanım**: Tekirdağ'daki Fizyoterapist Eda Pala için doğrulanmış sınırlı bilgilerle çalışan; modern, güven veren ve profesyonel bir frontend web sitesi demosu oluşturmak.

## 2. Problem ve Değer Önermesi

- **Çözülen Problem**: Fizyoterapist Eda Pala için potansiyel müşterilere ve satış görüşmelerine sunulabilecek modern dijital bir web tanıtım yüzeyi bulunmamaktadır. Sağlık/klinik iddiaları uydurmadan güvenilir bir dijital profil sunulması gerekmektedir.
- **Değer Önermesi**: Doğrulanmış factual bilgilerle (Eda Pala, Fizyoterapist, Tekirdağ, Instagram URL) çalışan; abartılı klinik klişelerinden uzak, modern tipografi ve responsive layout ile kişisel markayı güçlü sunan frontend demosu.

## 3. Hedef Kullanıcı Kitleleri

- **Birincil Ziyaretçiler**: Tekirdağ bağlamında bir fizyoterapist hakkında temel profesyonel bilgi arayan ve Fizyoterapist Eda Pala'nın dijital profilini görmek isteyen potansiyel ziyaretçiler.
- **İkincil Ziyaretçiler**: Fizyoterapist Eda Pala ile sosyal medya profili üzerinden iletişim kurmak isteyen kişiler.

## 4. Temel Kapsam Özeti

- **Kapsam İçi**:
  - Eda Pala adını, `Fizyoterapist` unvanını ve `Tekirdağ` konum bağlamını sergileyen responsive landing page.
  - Onaylı Instagram profiline outbound link / CTA (`https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`).
  - Statik lokal konfigürasyon veri soyutlaması (clean content boundary).
  - Modern tipografi, whitespace ve sakin renk paleti.
- **Kapsam Dışı**:
  - Tedavi yöntemleri, hastalık/rahatsızlık listesi, uzmanlık alanları.
  - Eğitim, sertifika, deneyim yılı iddiaları.
  - Klinik adı, exact klinik adresi, telefon/e-posta, çalışma saatleri, fiyat bilgisi.
  - Form backend'i, canlı harita, WhatsApp entegrasyonu, online randevu modalları, veritabanı veya API.

## 5. Sistem Mimari Özeti

- **Teknoloji Yığını**: Frontend-only static web architecture. Statik HTML/CSS/JS preview ortamı veya modern lightweight component yapısı.
- **Data Boundary**: Local static configuration data adapter (clean content/data boundary).

## 6. Kritik Kararlar Özet Tablosu

| Decision ID | Karar | Gerekçe | Durum |
|---|---|---|---|
| `DEC-001` | Sınırlı factual allowlist kullanımı | Sağlık alanında doğrulanmamış içerik uydurmayı engellemek | Approved |
| `DEC-002` | Outbound Instagram CTA entegrasyonu | Sosyal medya profilinin tek onaylı iletişim kanalı olması | Approved |
| `DEC-003` | Clean local configuration boundary | İleride gerçek veri geldiğinde UI kodunu değiştirmeden bağlama imkanı | Approved |

## 7. Aktif Faz ve Durum Özeti

- **Mevcut Durum**: Initial Setup / Prototype Generation Phase.
- **Aktif Wave**: `WAVE_00` — Project Setup & Local Preview Foundation.

## 8. Doküman Referansları

- [PRODUCT_RULES.md](./PRODUCT_RULES.md)
- [TECH_CONTEXT.md](./TECH_CONTEXT.md)
- [CURRENT_STATUS.md](./CURRENT_STATUS.md)
- [NEXT_TASKS.md](./NEXT_TASKS.md)
- [AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md)
- [DECISIONS.md](./DECISIONS.md)
- [PROJECT_PLAN.md](../project/PROJECT_PLAN.md)
- [DESIGN_RULES.md](../design/DESIGN_RULES.md)
- [WAVE_MAP.md](../waves/WAVE_MAP.md)
