/**
 * Trakya Teknik Makine — Data Access Service Adapter
 * Clean boundary isolating UI presentation from data storage.
 * All UI presentation modules MUST consume data via this adapter.
 */

import { mockCompanyInfo, mockServices, mockContactMethods } from '../data/mockData.js';

export const dataService = {
  /**
   * Fetch canonical company profile & status information
   * @returns {Promise<Object>}
   */
  async getCompanyInfo() {
    return Promise.resolve({ ...mockCompanyInfo });
  },

  /**
   * Fetch approved 3 services
   * @returns {Promise<Array>}
   */
  async getServices() {
    return Promise.resolve(mockServices.map(service => ({ ...service })));
  },

  /**
   * Fetch direct contact schema methods
   * @returns {Promise<Array>}
   */
  async getContactMethods() {
    return Promise.resolve(mockContactMethods.map(method => ({ ...method })));
  }
};

export default dataService;
