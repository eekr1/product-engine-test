import React from 'react';

interface ServiceDetailHeroProps {
  title: string;
  pageId: string;
  description: string;
}

export const ServiceDetailHero: React.FC<ServiceDetailHeroProps> = ({ title, pageId, description }) => {
  return (
    <div className="service-detail-hero">
      <div className="service-detail-badge">
        <span className="badge-dot" />
        <span>{pageId} • Disan Hidrolik Yetkili Servisi</span>
      </div>
      <h1 className="service-detail-title">{title}</h1>
      <p className="service-detail-lead">{description}</p>
    </div>
  );
};
