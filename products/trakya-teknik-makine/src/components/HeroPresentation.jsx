import React from 'react';
import presentationService from '../services/presentationService';
import './HeroPresentation.css';

export function HeroPresentation() {
  const company = presentationService.getCompanyInfo();

  return (
    <section className="hero-section" id="kurumsal">
      <div className="hero-background-pattern"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="authorized-badge">
            <span className="badge-pulse-dot"></span>
            <span className="badge-text">{company.authorizedStatus}</span>
          </div>

          <h1 className="hero-title">
            {company.name}
          </h1>

          <h2 className="hero-subtitle">
            {company.regionContext}
          </h2>

          <p className="hero-description">
            {company.description}
          </p>

          <div className="hero-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="highlight-text">
                <span className="highlight-title">Yetkili Servis Güvencesi</span>
                <span className="highlight-desc">Disan Hidrolik Makine Statüsü</span>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <div className="highlight-text">
                <span className="highlight-title">Bölgesel Destek</span>
                <span className="highlight-desc">Trakya Bölgesi Sanayi Odaklı</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="technical-card">
            <div className="card-header-bar">
              <span className="card-header-dot"></span>
              <span className="card-header-dot"></span>
              <span className="card-header-dot"></span>
              <span className="card-header-title">TEKNİK SERVİS SPESİFİKASYON KABUĞU</span>
            </div>
            <div className="technical-blueprint">
              <svg viewBox="0 0 320 220" className="blueprint-svg" fill="none">
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(217, 119, 6, 0.08)" strokeWidth="1"/>
                </pattern>
                <rect width="320" height="220" fill="url(#grid)" />
                
                <circle cx="160" cy="100" r="45" stroke="#D97706" strokeWidth="1.5" strokeDasharray="4 2" />
                <circle cx="160" cy="100" r="30" stroke="#3A475A" strokeWidth="2" />
                <circle cx="160" cy="100" r="12" fill="#D97706" fillOpacity="0.2" stroke="#D97706" strokeWidth="1.5" />
                
                <line x1="90" y1="100" x2="230" y2="100" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="160" y1="30" x2="160" y2="170" stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
                
                <rect x="25" y="30" width="95" height="28" rx="4" fill="#1E2530" stroke="#3A475A" strokeWidth="1" />
                <text x="33" y="48" fill="#F8FAFC" fontSize="10" fontFamily="sans-serif" fontWeight="600">DISAN SERVİS</text>
                
                <rect x="200" y="150" width="95" height="28" rx="4" fill="#1E2530" stroke="#D97706" strokeWidth="1" />
                <text x="208" y="168" fill="#D97706" fontSize="10" fontFamily="sans-serif" fontWeight="600">TRAKYA TEKNİK</text>

                <polyline points="120,44 140,44 150,75" stroke="#D97706" strokeWidth="1" />
                <polyline points="200,164 180,164 170,125" stroke="#D97706" strokeWidth="1" />
              </svg>
            </div>
            <div className="card-footer-info">
              <div className="info-badge">
                <span className="info-label">STATÜ:</span>
                <span className="info-val">TRAKYA BÖLGE YETKİLİ SERVİSİ</span>
              </div>
              <div className="info-badge">
                <span className="info-label">MARKASAL UZMANLIK:</span>
                <span className="info-val">DİSAN HİDROLİK MAKİNE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPresentation;
