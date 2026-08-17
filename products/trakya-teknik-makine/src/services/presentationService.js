/**
 * Service adapter boundary for presentation data.
 * Isolates components from data source details.
 * Today: returns static configuration data from presentationData.js.
 * Future: can fetch from API/CMS without modifying UI components.
 */

import { presentationData } from '../data/presentationData';

export const presentationService = {
  /**
   * Get company identity and status info.
   * @returns {Object} Company info object.
   */
  getCompanyInfo: () => {
    return presentationData.company || {
      name: "Trakya Teknik Makine",
      authorizedStatus: "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi",
      regionContext: "Trakya Bölgesi",
    };
  },

  /**
   * Get verified list of services (FCL-003, FCL-004, FCL-005).
   * @returns {Array} List of service objects.
   */
  getServices: () => {
    return presentationData.services || [];
  },

  /**
   * Get direct contact capability actions.
   * @returns {Object} Contact actions (phone, email).
   */
  getContactActions: () => {
    return presentationData.contact || {
      phoneCTA: { label: "Telefon ile İletişim", action: "tel:", isDirectContact: true },
      emailCTA: { label: "E-posta Gönder", action: "mailto:", isDirectContact: true },
    };
  },
};

export default presentationService;
