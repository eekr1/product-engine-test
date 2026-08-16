/**
 * Trakya Teknik Makine — Corporate Hero Presentation Component
 * Renders corporate identity, single <h1> title, and authorized service badge.
 * Consumes data exclusively via dataService.getCompanyInfo().
 */

import { renderAuthorizedServiceBadge } from './AuthorizedServiceBadge.js';

export async function renderHeroSection(dataService) {
  const heroSection = document.createElement('section');
  heroSection.className = 'hero-section';
  heroSection.id = 'hero-corporate';

  // Render initial skeleton layout for loading state
  heroSection.innerHTML = `
    <div class="container">
      <div class="hero-layout skeleton-loading">
        <div class="hero-content">
          <div class="skeleton-pill"></div>
          <div class="skeleton-title"></div>
          <div class="skeleton-text"></div>
        </div>
      </div>
    </div>
  `;

  try {
    const companyInfo = await dataService.getCompanyInfo();

    heroSection.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'container';

    const heroLayout = document.createElement('div');
    heroLayout.className = 'hero-layout';

    // Left Column: Main Corporate Identity & Description
    const heroContent = document.createElement('div');
    heroContent.className = 'hero-content';

    const kicker = document.createElement('div');
    kicker.className = 'hero-kicker';
    kicker.innerHTML = `
      <span class="kicker-tag">${companyInfo.region || 'Trakya Bölgesi'}</span>
      <span class="kicker-divider">•</span>
      <span class="kicker-subtitle">Endüstriyel Teknik Servis</span>
    `;

    // Single <h1> for SEO & Semantic HTML compliance
    const title = document.createElement('h1');
    title.className = 'hero-title';
    title.innerHTML = `Trakya Teknik <span class="highlight">Makine</span>`;

    const description = document.createElement('p');
    description.className = 'hero-description';
    description.textContent = companyInfo.description;

    const technicalMeta = document.createElement('div');
    technicalMeta.className = 'hero-technical-meta';
    technicalMeta.innerHTML = `
      <div class="meta-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        <span>Endüstriyel Makine Servisi</span>
      </div>
      <div class="meta-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
        <span>Trakya Bölge Hizmet Alanı</span>
      </div>
    `;

    heroContent.appendChild(kicker);
    heroContent.appendChild(title);
    heroContent.appendChild(description);
    heroContent.appendChild(technicalMeta);

    // Right Column: Disan Authorized Badge Surface
    const heroBadgeColumn = document.createElement('div');
    heroBadgeColumn.className = 'hero-badge-column';

    const badgeElement = renderAuthorizedServiceBadge(companyInfo);
    heroBadgeColumn.appendChild(badgeElement);

    heroLayout.appendChild(heroContent);
    heroLayout.appendChild(heroBadgeColumn);
    container.appendChild(heroLayout);
    heroSection.appendChild(container);

  } catch (error) {
    console.error('[HeroSection] Failed to load company info via dataService:', error);
  }

  return heroSection;
}

export default renderHeroSection;
