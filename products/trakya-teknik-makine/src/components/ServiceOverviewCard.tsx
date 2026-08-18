import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../data/mockData';

interface ServiceOverviewCardProps {
  service: ServiceItem;
}

export const ServiceOverviewCard: React.FC<ServiceOverviewCardProps> = ({ service }) => {
  return (
    <div className="service-card" style={{ marginBottom: 'var(--space-xl)' }}>
      <span className="service-card-tag">{service.pageId} • Disan Yetkili Servis Güvencesi</span>
      <h3 className="service-card-title" style={{ fontSize: '1.5rem' }}>{service.title}</h3>
      <p className="service-card-desc" style={{ fontSize: '15px' }}>{service.fullDescription}</p>

      <ul className="service-card-features">
        {service.features.map((feature, idx) => (
          <li key={idx} className="service-card-feature-item">
            <span style={{ color: 'var(--color-accent-primary)', fontWeight: 'bold' }}>✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to={service.route} className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
          Detaylı İncele →
        </Link>
        <Link to="/iletisim" className="btn-secondary" style={{ padding: '10px 16px', fontSize: '13px' }}>
          İletişim
        </Link>
      </div>
    </div>
  );
};
