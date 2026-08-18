import { companyData, CompanyInfo } from '../data/mockData';

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const getCompanyInfo = async (): Promise<CompanyInfo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(companyData);
    }, 50);
  });
};
