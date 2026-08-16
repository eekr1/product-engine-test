/**
 * Trakya Teknik Makine — Core Services Presentation Section Component
 * Renders the 3 approved services in a responsive grid.
 * Consumes data exclusively via dataService.getServices().
 */

import { renderServiceCard } from './ServiceCard.js';

export async function renderServicesSection(dataService) {
  const section = document.createElement('section');
  section.className = 'services-section';
  section.id = 'services';

  // Section Header Layout
  const container = document.createElement('div');
  container.className = 'container';

  const header = document.createElement('div');
  header.className = 'services-header';
  header.innerHTML = `
    <span class="services-kicker">Hizmet Kapsamı</span>
    <h2 class="services-section-title">Endüstriyel Teknik <span class="highlight">Hizmetlerimiz</span></h2>
    <p class="services-section-desc">
      Disan Hidrolik Makine Trakya Bölge Yetkili Servisi güvencesiyle sunulan yetkili bakım, onarım, teknik destek ve yedek parça çözümlerimiz.
    </p>
  `;

  // Grid Container with Skeleton Placeholder
  const gridContainer = document.createElement('div');
  gridContainer.className = 'services-grid-skeleton';
  gridContainer.innerHTML = `
    <div class="skeleton-card"></div>
    <div class="skeleton-card"></div>
    <div class="skeleton-card"></div>
  `;

  container.appendChild(header);
  container.appendChild(gridContainer);
  section.appendChild(container);

  try {
    const services = await dataService.getServices();

    // Replace skeleton with actual 3 approved service cards
    gridContainer.className = 'services-grid';
    gridContainer.innerHTML = '';

    services.forEach(service => {
      const cardEl = renderServiceCard(service);
      gridContainer.appendChild(cardEl);
    });
  } catch (error) {
    console.error('[ServicesSection] Failed to load services via dataService:', error);
  }

  return section;
}

export default renderServicesSection;
