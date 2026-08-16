/**
 * Trakya Teknik Makine — Disan Authorized Service Badge Component
 * Renders authorized service badge card with technical trust aesthetics.
 * FCL-002: Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
 */

export function renderAuthorizedServiceBadge(companyInfo) {
  const badgeCard = document.createElement('div');
  badgeCard.className = 'authorized-service-badge-card';

  const brandName = companyInfo.authorizedBrand || 'Disan Hidrolik Makine';
  const roleName = companyInfo.authorizedRole || 'Trakya Bölge Yetkili Servisi';

  badgeCard.innerHTML = `
    <div class="badge-card-header">
      <span class="badge-status-dot" aria-hidden="true"></span>
      <span class="badge-category-label">Bölge Yetkili Servisi</span>
    </div>
    <div class="badge-card-body">
      <div class="badge-brand-title">${brandName}</div>
      <div class="badge-role-title">${roleName}</div>
    </div>
    <div class="badge-card-footer">
      <svg class="badge-shield-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
      <span>Yetkili Servis Güvencesi</span>
    </div>
  `;

  return badgeCard;
}

export default renderAuthorizedServiceBadge;
