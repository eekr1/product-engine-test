# Fizyoterapist Eda Pala Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- `PR-01` (Strict Factual Provenance): Web sitesinde sunulacak kişisel ve mesleki bilgiler **yalnızca** `Eda Pala` (İsim), `Fizyoterapist` (Mesleki Unvan), `Tekirdağ` (Konum Bağlamı) ve onaylı Instagram profili bağlantısı ile sınırlıdır.
- `PR-02` (Outbound CTA Rule): Kullanıcının iletişim kurma veya sosyal medyayı inceleme eylemi, Instagram profil yönlendirmesi (`https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`) üzerinden `target="_blank" rel="noopener noreferrer"` öznitelikleriyle sağlanır.
- `PR-03` (Static Presentation Identity): Uygulama bir frontend tanıtım/satış demosu olarak çalışır. Sunum verileri modüler statik konfigürasyondan beslenir.

## 2. Davranış ve Akış Kısıtlamaları (Health Domain Guard)

- `BC-01` (Zero Unverified Health Claims): Web sitesinde kaynak metinde doğrulanmamış hiçbir tedavi yöntemi, uzmanlık alanı, rehabilitasyon programı veya tıbbi rahatsızlık/hastalık ismi **yer alamaz**.
- `BC-02` (Zero Fake Credentials): Eğitim, üniversite, sertifika, deneyim yılı, klinik adresi veya mesleki başarı iddiası **üretilemez**.
- `BC-03` (Zero Fake Contact & Operational Claims): Fiziksel adres, harita konumu, telefon numarası, e-posta adresi, çalışma saatleri veya fiyat tarifesi uydurulamaz.
- `BC-04` (Zero Patient Reviews & Success Rates): Hasta yorumu, danışan mektubu, başarı oranı veya önce/sonra görseli eklenemez.
- `BC-05` (Zero Interactive Backend Capabilities): Online randevu formu, iletişim formu backend'i, WhatsApp sohbet butonu veya dinamik modal etkileşimi icat edilemez.

## 3. Kapsam Sınırları ve Kuralları

- `SR-01` (Demo Boundary): Bu projenin `Prototype` olması satış demosu olgunluğunu gösterir. Kod veya mimari kalitesini düşürmez, ancak approved scope dışındaki özellikleri meşrulaştırmaz.
- `SR-02` (Future Integration Readiness): Statik veri yapısı, gelecekte müşteriden doğrulanmış biyografi, klinik ve iletişim bilgileri geldiğinde refactoring gerektirmeyecek modülerlikte tasarlanmalıdır.
- `SR-03` (Presentation Cleanness): Doğrulanmamış içerik alanları sahte/placeholder metinlerle doldurulmak yerine layout ve kompozisyon gücüyle (tipografi, dingin alanlar, insan odaklı tasarım) ele alınır.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- `UX-01` (Instant Persona Recognition): Ziyaretçi ilk etkileşimde (hero bölümünde) sayfanın Fizyoterapist Eda Pala'ya ait olduğunu, unvanın Fizyoterapist ve konum bağlamının Tekirdağ olduğunu tereddütsüz anlamalıdır.
- `UX-02` (Responsive Baseline): Masaüstü, tablet ve mobil cihazlarda taşma, bozulma veya okuma zorluğu yaşanmaksızın %100 responsive düzen sunulmalıdır.
- `UX-03` (Anti-Clinic-Cliché Aesthetics): Parlak turkuaz/mavi gradientler, stetoskoplu doktor stok görselleri ve 3 sahte hizmet kutusu gibi sektör klişeleri kullanılmayacaktır.
- `UX-04` (Accessible Outbound CTA): Instagram yönlendirme butonu ve sosyal ağ ikonları ekran okuyucular ve klavye gezintisi için uygun erişilebilirlik özniteliklerine (`aria-label`, visible focus state) sahip olmalıdır.
