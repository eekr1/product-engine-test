import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { DirectPhoneContactCard } from '../components/DirectPhoneContactCard';
import { DirectEmailContactCard } from '../components/DirectEmailContactCard';
import { RegionalServiceContextCard } from '../components/RegionalServiceContextCard';

export const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'İletişim' }]} />

        {/* Page Header */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <span className="section-tag">İletişim Kanalları</span>
          <h1 className="section-title" style={{ fontSize: '2.5rem' }}>
            Doğrudan İletişim Kanalları
          </h1>
          <p className="section-subtitle">
            Trakya Teknik Makine yetkililerine doğrudan telefon veya e-posta yoluyla ulaşabilirsiniz.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-xl)' }}>
          <DirectPhoneContactCard />
          <DirectEmailContactCard />
        </div>

        {/* Regional Context Card */}
        <RegionalServiceContextCard />

        {/* Navigation Callout */}
        <div className="callout-panel" style={{ margin: 'var(--space-2xl) 0 var(--space-3xl)' }}>
          <div>
            <h3 className="callout-title">Hizmet Alanlarımızı İncelediniz mi?</h3>
            <p className="callout-desc">
              Yetkili servis standartlarında sunulan 3 temel teknik hizmetimizin detaylarına göz atabilirsiniz.
            </p>
          </div>
          <Link to="/hizmetler" className="btn-primary">
            Hizmetler Overview →
          </Link>
        </div>
      </div>
    </div>
  );
};
