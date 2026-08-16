/**
 * Trakya Teknik Makine — Direct Contact CTA Cards Component
 * Renders Phone (tel:) and Email (mailto:) direct action cards.
 * Strict compliance with FCL-007 (No invented backend or fake addresses).
 */

function getContactIconSvg(type) {
  if (type === 'phone') {
    return `
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    `;
  }
  // Email icon default
  return `
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  `;
}

export function renderContactCtaCard(method) {
  const cardElement = document.createElement('article');
  cardElement.className = 'contact-cta-card';
  cardElement.setAttribute('data-contact-type', method.type);

  const iconSvg = getContactIconSvg(method.type);
  const actionText = method.type === 'phone' ? 'Telefon ile Ulaşın' : 'E-posta Gönderin';

  cardElement.innerHTML = `
    <div class="contact-icon-wrapper">
      ${iconSvg}
    </div>
    <h3 class="contact-card-title">${method.label}</h3>
    <p class="contact-card-desc">${method.description}</p>
    <a href="${method.actionUrl}" class="btn-contact-cta" aria-label="${method.label}">
      ${iconSvg}
      <span>${actionText}</span>
    </a>
  `;

  return cardElement;
}

export function renderContactCtaCards(contactMethods) {
  const fragment = document.createDocumentFragment();
  contactMethods.forEach(method => {
    const cardEl = renderContactCtaCard(method);
    fragment.appendChild(cardEl);
  });
  return fragment;
}

export default renderContactCtaCards;
