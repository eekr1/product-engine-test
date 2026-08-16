/**
 * Trakya Teknik Makine — Canonical Mock Data Store
 * Factual Claim Allowlist (FCL) Bounded — Zero Invented Facts.
 * 
 * Sources:
 * - Approved Input: Trakya Teknik Makine
 * - Status: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
 * - Approved Services: 3 approved items (Yedek Parça Temini, Yerinde Teknik Destek, Makine Bakım ve Onarım)
 */

export const mockCompanyInfo = {
  id: "company-trakya-teknik",
  name: "Trakya Teknik Makine",
  tagline: "Trakya Bölgesi Endüstriyel Makine Çözümleri ve Teknik Servis",
  status: "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi",
  authorizedBrand: "Disan Hidrolik Makine",
  authorizedRole: "Trakya Bölge Yetkili Servisi",
  region: "Trakya Bölgesi",
  description: "Trakya Teknik Makine, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi statüsü ile Trakya bölgesinde endüstriyel makine bakım, onarım, teknik destek ve yedek parça hizmetleri sunmaktadır."
};

export const mockServices = [
  {
    id: "service-yedek-parca",
    title: "Yedek Parça Temini",
    category: "Parça Tedariki",
    description: "Endüstriyel makine sistemleri için yetkili servis kalitesi ve güvencesiyle yedek parça temin hizmeti.",
    icon: "package"
  },
  {
    id: "service-yerinde-destek",
    title: "Yerinde Teknik Destek",
    category: "Teknik Servis",
    description: "Saha operasyonlarınızda makinelerinize doğrudan müdahale sağlayan yerinde teknik destek hizmeti.",
    icon: "wrench"
  },
  {
    id: "service-bakim-onarim",
    title: "Makine Bakım ve Onarım",
    category: "Bakım & Onarım",
    description: "Makine ve hidrolik sistemlerin teknik standartlara uygun profesyonel bakım ve onarım hizmeti.",
    icon: "settings"
  }
];

export const mockContactMethods = [
  {
    id: "contact-phone",
    type: "phone",
    label: "Telefon ile İletişim",
    actionUrl: "tel:",
    description: "Doğrudan telefon hattımız üzerinden teknik destek ve yetkili servis bilgisi alın.",
    icon: "phone"
  },
  {
    id: "contact-email",
    type: "email",
    label: "E-posta ile İletişim",
    actionUrl: "mailto:",
    description: "Yedek parça ve teknik servis talepleriniz için e-posta ile bize ulaşın.",
    icon: "mail"
  }
];
