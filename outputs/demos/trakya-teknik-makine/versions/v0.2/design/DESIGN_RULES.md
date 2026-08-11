# Trakya Teknik Makine Kurumsal Web Sitesi Yenileme Demo — Design Rules

## 1. Visual Concept & Design Character

- **Tasarım Konsepti**: **"Precision Engineering & Trusted Service (Hassas Mühendislik & Güvenilir Servis)"**.
- **Tasarım Karakteri**: Teknik olarak yetkin, endüstriyel olarak sağlam, kurumsal düzeyde güven verici, modern ve dinamik.
- **Odak Noktası**: Ağır sanayi/makine servis kalitesini ve Disan Hidrolik yetkili servis unvanını hantal bir görünüm yerine, aerodinamik yüzeyler, derin teknik tonlar, güçlü tipografi ve akıcı görsel hiyerarşi ile sunmak.

## 2. Differentiation / Anti-Template Rationale

- **Anti-Template İlkesi**: Standart jenerik sanayi klişesi olan *"klasik lacivert + düz 3 kutu + üstte büyük stok fotoğraf"* yapısı kesinlikle uygulanmaz.
- **Farklılaşma Yaklaşımı**: Trakya Teknik Makine'nin 3 ana hizmeti (Yedek Parça, Yerinde Destek, Bakım & Onarım) asimetrik fakat dengeli endüstriyel kart ızgaraları, yetkili servis rozet vurguları, teknik ikonografi ve mikro-animasyonlar ile sunulur.

## 3. Composition & Layout Principles

- **Grid & Asymmetry**: Temiz 12-kolonlu esnek ızgara yapısı. Hizmet sunumlarında ve Hero alanında kurumsal düzeni bozmayan kontrollü asimetri.
- **Whitespace & Spacing**: Dar ve sıkışık endüstriyel katalog görünümü yerine, içeriğe nefes aldıran geniş ve modern padding/margin sistemi.
- **Surface Elevation**: Yumuşak koyu/açık kontrast katmanları ve hafif cam efekti (glassmorphism/subtle elevation) ile teknik derinlik hissi.

## 4. Color Direction & Semantic Roles

- **Primary Brand / Industrial**: Derin Çelik Mavisi (`#0F172A` / `#1E293B`) — Güven ve kurumsal duruş.
- **Accent / Energy & Precision**: Canlı Kehribar Turuncusu / Servis Sarısı (`#F59E0B` / `#D97706`) — Hizmet dinamizmi ve aksiyon çağrısı (CTA).
- **Surface / Background**: Temiz çelik grisi tonlar (`#F8FAFC`, `#F1F5F9`) & Koyu alanlar için granit katmanları (`#0F172A`).
- **Text & Contrast**: Yüksek kontrastlı okunabilirlik (`#0F172A` birincil metin, `#64748B` ikincil açıklama).

## 5. Typography Direction

- **Primary Sans-Serif (Headings & UI)**: Modern, keskin ve teknik karakter taşıyan font (örn. *Outfit*, *Inter* veya *Roboto*).
- **Monospace / Technical Accent**: İletişim numaraları, teknik yetkili servis kodlarında ve kart etiketlerinde kullanılan teknik alan fontu (`JetBrains Mono` veya `Roboto Mono`).
- **Hierarchy**: Belirgin başlık ölçekleri (`h1`: 3.2rem bold, `h2`: 2.2rem semi-bold, `body`: 1rem regular).

## 6. Interaction & Motion Principles

- **Micro-Animations**: Kart hover durumlarında hafif yukarı yükselme, border-glow efekti ve ivmeli renk geçişleri (`transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`).
- **CTA Dynamics**: Telefon ve e-posta butonlarında tıklama hissini güçlendiren hafif ölçeklenme (scale transform) ve ikon haraketliliği.

## 7. Responsive Principles

- **Desktop (1024px+)**: Çok kolonlu düzen, geniş hero kompozisyonu ve etkileşimli hizmet kartları.
- **Mobile (<768px)**: Tek kolonlu akıcı görünüm, parmakla kolay erişilebilir 48px+ dokunmatik iletişim CTA alanları ve sabit hızlı arama/iletişim çubuğu.

## 8. Accessibility Baseline

- **WCAG AA Compliance**: Metin ve arka plan renk kontrast oranları en az 4.5:1 seviyesinde tutulur.
- **Focus States**: Klavye gezinmesinde görünür odak göstergeleri (`focus-visible: ring-2 ring-amber-500`).

## 9. Imagery / Iconography Direction

- **Iconography**: Çizgisel ve modern teknik SVG ikonlar (dişli, bakım anahtarı, yedek parça kutusu, destek kalkanı, yetkili servis mührü).
- **Imagery**: Kalitesiz stok fotoğraflar yerine, temiz endüstriyel makine detayları ve yetkili servis odaklı kurumsal görseller.

## 10. Explicit Design Anti-Patterns

- ❌ Düşük kontrastlı gri metinler.
- ❌ Sıkışık, okunmayan teknik katalog tabloları.
- ❌ Çalışmayan jenerik formlar veya sahte butonlar.
- ❌ Mobilde kırılan veya içeriği gizleyen sabit elemanlar.
