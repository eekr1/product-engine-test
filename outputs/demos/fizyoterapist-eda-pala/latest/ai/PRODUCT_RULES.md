# Fizyoterapist Eda Pala Web Sitesi Demo — Product Rules

## 1. İş Mantığı ve Ürün Kuralları

- `PR-01` | **Factual Source Closed Boundary**: Web sitesinde yalnızca onaylı 4 factual bilgi (Eda Pala, Fizyoterapist, Tekirdağ, Instagram URL) yer alabilir.
- `PR-02` | **No Medical Claims**: Tedavi yöntemleri, hastalık/tanı listeleri, seans süresi veya sağlık iyileşme iddiaları eklenemez.
- `PR-03` | **No Unverified Identity Claims**: Eğitim (üniversite, derece), sertifika, deneyim yılı veya klinik sahipliği iddiaları uydurulamaz.
- `PR-04` | **Clean Content Boundary**: Web sitesi içeriği kod bileşenlerine hardcode edilmeyip statik konfigürasyon veri soyutlamasından (`siteConfig` / local JSON data adapter) okunmalıdır.

## 2. Davranış ve Akış Kısıtlamaları

- `BC-01` | **Outbound Instagram Flow**: Ziyaretçilerin sosyal medya etkileşimi yalnız onaylı Instagram URL'sine (`https://www.instagram.com/fizyoterapistedapala?igsh=aXNtbGgyZ3hwbzVv`) yönlendiren güvenli outbound link (`target="_blank"` rel="noopener noreferrer") ile sağlanır.
- `BC-02` | **No Unapproved Interactions**: İletişim formu submission backend'i, canlı WhatsApp sohbet widget'ı, randevu takvimi modalı veya sahte harita entegrasyonu eklenemez.
- `BC-03` | **No Mock Data Leakage**: Gelecekte eklenecek doğrulanmış bilgiler için arayüzde sahte isim, sahte telefon veya sahte klinik adresi gösterilemez; doğrulanmamış alanlar açık handles olarak tutulur.

## 3. Kapsam Sınırları ve Kuralları

- `SR-01` | **Kişisel Marka Sunumu**: Landing page ilk bakışta Fizyoterapist Eda Pala adını, mesleki unvanını ve Tekirdağ konum bağlamını profesyonel ve sade bir dille sunmalıdır.
- `SR-02` | **Generic Sağlık Klişelerinden Kaçınma**: Mavi/turkuaz gradient stok tıbbi fotoğraflar, anatomik çizimler, 3 jenerik hizmet kartı klişeleri kullanılmamalıdır.
- `SR-03` | **Scope Expansion Guard**: Prototip veya satış demosu niteliği onaylanmamış form, harita veya backend yetenekleri ekleme izni vermez.

## 4. Kullanıcı Deneyimi ve İşlevsel Kurallar

- `UX-01` | **Responsive Ergonomy**: Sayfa mobil, tablet ve masaüstü ekran boyutlarında tam uyumlu (fluid typography, flexible grid, responsive spacing) çalışmalıdır.
- `UX-02` | **Erişilebilirlik Baseline**: Tipografi kontrast oranları WCAG AA standartlarına uygun olmalı; butonlar ve etkileşim öğeleri belirgin focus ve hover state'lerine sahip olmalıdır.
- `UX-03` | **Net Yönlendirme**: Ziyaretçi sayfaya girdiğinde 3 saniye içinde Fizyoterapist Eda Pala profilini ve Instagram üzerinden iletişim kurma imkanını fark edebilmelidir.
