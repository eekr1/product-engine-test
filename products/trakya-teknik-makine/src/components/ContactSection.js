/**
 * Trakya Teknik Makine — Direct Contact Section Component
 * Renders Phone (tel:) and Email (mailto:) direct contact CTA section.
 * Consumes data exclusively via dataService.getContactMethods().
 */

import { renderContactCtaCards } from './ContactCtaCards.js';

export async function renderContactSection(dataService) {
  const section = document.createElement('section');
  section.className = 'contact-section';
  section.id = 'contact';

  const container = document.createElement('div');
  container.className = 'container';

  // Section Header
  const header = document.createElement('div');
  header.className = 'contact-header';
  header.innerHTML = `
    <span class="contact-kicker">Doğrudan İletişim</span>
    <h2 class="contact-section-title">Bizimle İletişime <span class="highlight">Geçin</span></h2>
    <p class="contact-section-desc">
      Yetkili servis desteği, teknik bilgi ve yedek parça talepleriniz için doğrudan iletişim kanallarımız üzerinden ulaşabilirsiniz.
    </p>
  `;

  // Grid Container with Skeleton State
  const gridContainer = document.createElement('div');
  gridContainer.className = 'contact-grid-skeleton';
  gridContainer.innerHTML = `
    <div class="skeleton-contact-card"></div>
    <div class="skeleton-contact-card"></div>
  `;

  container.appendChild(header);
  container.appendChild(gridContainer);
  section.appendChild(container);

  try {
    const contactMethods = await dataService.getContactMethods();

    gridContainer.className = 'contact-grid';
    gridContainer.innerHTML = '';

    const cardsFragment = renderContactCtaCards(contactMethods);
    gridContainer.appendChild(cardsFragment);
  } catch (error) {
    console.error('[ContactSection] Failed to load contact methods via dataService:', error);
  }

  return section;
}

export default renderContactSection;
