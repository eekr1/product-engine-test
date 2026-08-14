# Operational Assumptions — RUN-20260814-001

```text
Assumption ID : ASM-001
Alan          : primary_language
Yapılan       : Türkçe ("tr")
Sınıf         : safe
Gerekçe       : Firma Trakya bölgesinde yerel hizmet vermekte ve kaynak metinler Türkçe sunulmaktadır.
Kaynak        : Proje bağlamı ve mevcut web sitesi
Durum         : confirmed (approved input v1 ile doğrulandı)

Assumption ID : ASM-002
Alan          : project_type
Yapılan       : landing-page
Sınıf         : safe
Gerekçe       : Proje temel olarak kurumsal tanıtım, hizmet sunumu ve iletişim odaklı web yüzeyidir.
Kaynak        : Proje kapsamı
Durum         : confirmed (approved input v1 ile doğrulandı)

Assumption ID : ASM-003
Alan          : project_state
Yapılan       : existing
Sınıf         : safe
Gerekçe       : Proje sıfırdan marka yaratma değil, yayında olan mevcut sitenin yenilenmesidir.
Kaynak        : engine/PROJECT_INTAKE.md kuralları
Durum         : confirmed (approved input v1 ile doğrulandı)

Assumption ID : ASM-004
Alan          : execution_stack
Yapılan       : Vanilla JS + HTML5 + CSS3 (Vite preview ile)
Sınıf         : bounded
Gerekçe       : Satış demosu için ek bağımlılık ve karmaşıklık olmaksızın hızlı, yüksek performanslı ve taşınabilir standart web teknolojileri tercih edilmiştir.
Kaynak        : Standart frontend demo uygulama pratiği
Durum         : pending_review
```
