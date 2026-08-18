import { servicesData, ServiceItem } from '../data/mockData';

export const getAllServices = async (): Promise<ServiceItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(servicesData);
    }, 50);
  });
};

export const getServiceBySlug = async (slug: string): Promise<ServiceItem | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = servicesData.find((s) => s.slug === slug);
      resolve(found || null);
    }, 50);
  });
};
