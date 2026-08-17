import React, { useState } from 'react';
import presentationService from '../services/presentationService';
import './Header.css';

export function Header() {
  const company = presentationService.getCompanyInfo();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-top-accent"></div>
      <div className="container header-container">
        <div className="header-brand">
          <div className="brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">{company.name}</span>
            <span className="brand-status-micro">{company.authorizedStatus}</span>
          </div>
        </div>

        <nav className={`header-nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <a href="#kurumsal" className="nav-link active" onClick={() => setMobileMenuOpen(false)}>Kurumsal</a>
          <a href="#hizmetler" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Hizmetlerimiz</a>
          <a href="#iletisim" className="nav-link" onClick={() => setMobileMenuOpen(false)}>İletişim</a>
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
