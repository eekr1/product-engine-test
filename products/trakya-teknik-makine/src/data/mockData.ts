export interface CompanyInfo {
  name: string;
  shortName: string;
  officialStatus: string;
  authorizedBrand: string;
  region: string;
  summary: string;
  contact: {
    phoneAvailable: boolean;
    emailAvailable: boolean;
    phoneLabel: string;
    emailLabel: string;
  };
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  pageId: string;
  route: string;
  features: string[];
}

export const companyData: CompanyInfo = {
  name: "Trakya Teknik Makine",
  shortName: "Trakya Teknik",
  officialStatus: "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi",
  authorizedBrand: "Disan Hidrolik Makine",
  region: "Trakya Bölgesi",
  summary: "Trakya Teknik Makine, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olarak bölgedeki sanayi ve endüstriyel işletmelere yetkili servis güvencesiyle yedek parça temini, yerinde teknik destek ve makine bakım-onarım hizmetleri sunmaktadır.",
  contact: {
    phoneAvailable: true,
    emailAvailable: true,
    phoneLabel: "Telefon ile Doğrudan İletişim",
    emailLabel: "E-Posta ile Doğrudan İletişim",
  },
};

export const servicesData: ServiceItem[] = [
  {
    id: "SRV-001",
    slug: "yedek-parca-temini",
    title: "Yedek Parça Temini",
    shortDescription: "Disan Hidrolik yetkili servis standartlarında makine ve ekipman yedek parça temin hizmeti.",
    fullDescription: "Trakya Teknik Makine, Disan Hidrolik yetkili servis sorumluluğu ile Trakya bölgesindeki sanayi tesislerine ve makine kullanıcılarına ihtiyaç duyulan hidrolik ve mekanik yedek parçaların temin sürecini yürütür.",
    pageId: "PAGE-004",
    route: "/hizmetler/yedek-parca-temini",
    features: [
      "Yetkili Servis Güvencesiyle Parça Temini",
      "Endüstriyel Makine ve Ekipman Parçaları",
      "Trakya Bölgesi Odaklı Hizmet"
    ]
  },
  {
    id: "SRV-002",
    slug: "yerinde-teknik-destek",
    title: "Yerinde Teknik Destek",
    shortDescription: "Trakya bölgesindeki işletmeler için sahadan doğrudan teknik müdahale ve yerinde servis hizmeti.",
    fullDescription: "İşletmelerin üretim aksamalarını en aza indirmek amacıyla Trakya Teknik Makine uzman teknik personeli ile sahada, makine başında yerinde teknik destek hizmeti sunar.",
    pageId: "PAGE-005",
    route: "/hizmetler/yerinde-teknik-destek",
    features: [
      "Sahada ve Makine Başında Teknik Destek",
      "Arıza Tespit ve Yönlendirme",
      "Trakya Sanayi Tesislerine Doğrudan Hizmet"
    ]
  },
  {
    id: "SRV-003",
    slug: "makine-bakim-onarim",
    title: "Makine Bakım ve Onarım",
    shortDescription: "Disan Hidrolik yetkili servis uzmanlığıyla makine bakım, teknik kontrol ve onarım çözümleri.",
    fullDescription: "Trakya Teknik Makine, Disan Hidrolik yetkili servisi olarak endüstriyel makinelerin teknik bakımlarını ve arızalanan bileşenlerinin onarım işlemlerini teknik standartlara uygun şekilde gerçekleştirir.",
    pageId: "PAGE-006",
    route: "/hizmetler/makine-bakim-onarim",
    features: [
      "Yetkili Servis Standartlarında Bakım ve Onarım",
      "Hidrolik ve Mekanik Sistem Kontrolleri",
      "Uzman Teknik Müdahale"
    ]
  }
];
