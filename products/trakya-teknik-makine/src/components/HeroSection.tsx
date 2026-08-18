import React from 'react';
import { Link } from 'react-router-dom';
import { AuthorityBadge } from './AuthorityBadge';

interface HeroSectionProps {
  title?: string;
  description?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Trakya Bölgesi Yetkili Makine Servisi",
  description = "Trakya Teknik Makine, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi sorumluluğu ile sanayi tesislerine yetkili servis güvencesiyle teknik destek, bakım ve yedek parça hizmetleri sunar."
}) => {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <AuthorityBadge />
          
          <h1 className="hero-title">
            {title}
          </h1>
          
          <p className="hero-description">
            {description}
          </p>
          
          <div className="hero-btn-group">
            <Link to="/hizmetler" className="btn-primary">
              Hizmetlerimizi İnceleyin →
            </Link>
            <Link to="/iletisim" className="btn-secondary">
              Doğrudan İletişim
            </Link>
          </div>
        </div>

        <div className="hero-card-preview">
          <div className="hero-preview-title">
            <span style={{ color: 'var(--color-accent-primary)' }}>⚙️</span>
            <span>Yetkili Servis Hizmet Kapsamı</span>
          </div>
          <ul className="hero-preview-list">
            <li className="hero-preview-item">
              <span className="hero-preview-icon">✓</span>
              <span>Disan Hidrolik Trakya Bölge Yetkili Servis Güvencesi</span>
            </li>
            <li className="hero-preview-item">
              <span className="hero-preview-icon">✓</span>
              <span>Endüstriyel Makine & Ekipman Yedek Parça Temini</span>
            </li>
            <li className="hero-preview-item">
              <span className="hero-preview-icon">✓</span>
              <span>Trakya Sanayi Tesislerine Yerinde Teknik Destek</span>
            </li>
            <li className="hero-preview-item">
              <span className="hero-preview-icon">✓</span>
              <span>Uzman Teknik Ekip ile Bakım ve Onarım</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
