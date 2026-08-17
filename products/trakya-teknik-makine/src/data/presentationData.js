/**
 * Trakya Teknik Makine Presentation Data
 * Frozen source-backed factual content (FCL-001 .. FCL-006).
 * No invented claims, stock guarantees, SLA, or mobile fleet specs added.
 */

export const presentationData = {
  company: {
    name: "Trakya Teknik Makine",
    authorizedStatus: "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi",
    regionContext: "Trakya Bölgesi Endüstriyel Makine Teknik Servis Uzmanlığı",
    tagline: "Endüstriyel Makine Bakım, Onarım ve Teknik Destek Çözümleri",
    description: "Trakya bölgesinde makine bakım/onarım, yedek parça temini ve yerinde teknik destek ihtiyaçlarınız için Disan Hidrolik Makine Trakya Bölge Yetkili Servisi güvencesi.",
  },
  services: [
    {
      id: "spare-parts",
      title: "Yedek Parça Temini",
      description: "Makine ve ekipmanlarınız için ihtiyaç duyulan yedek parçaların temini ve teknik tedarik desteği.",
      category: "Tedarik & Parça",
    },
    {
      id: "onsite-support",
      title: "Yerinde Teknik Destek",
      description: "İşletmenizin yerinde teknik inceleme, arıza tespiti ve doğrudan saha desteği hizmetleri.",
      category: "Saha Hizmetleri",
    },
    {
      id: "maintenance-repair",
      title: "Makine Bakım ve Onarım",
      description: "Endüstriyel makineleriniz için profesyonel bakım ve onarım hizmetleri.",
      category: "Teknik Servis",
    },
  ],
  contact: {
    phoneCTA: {
      label: "Telefon ile İletişim",
      action: "tel:", // Exact phone number reserved as open question / boundary
      isDirectContact: true,
    },
    emailCTA: {
      label: "E-posta Gönder",
      action: "mailto:", // Exact email address reserved as open question / boundary
      isDirectContact: true,
    },
  },
};
