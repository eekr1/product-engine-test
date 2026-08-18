import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { CorporateIntroSection } from '../components/CorporateIntroSection';
import { getAllServices } from '../services/servicesService';
import { ServiceItem } from '../data/mockData';

export const HomePage: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    getAllServices().then((data) => {
      if (isMounted) {
        setServices(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Services Overview Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Uzmanlık Alanlarımız</span>
            <h2 className="section-title">Onaylı Teknik Hizmetlerimiz</h2>
            <p className="section-subtitle">
              Disan Hidrolik yetkili servis güvencesiyle Trakya bölgesindeki makine ve sanayi tesislerine sunulan 3 temel teknik hizmetimiz.
            </p>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-muted)' }}>
              Hizmet verileri yükleniyor...
            </div>
          ) : (
            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="service-card">
                  <span className="service-card-tag">{service.pageId}</span>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.shortDescription}</p>
                  
                  <ul className="service-card-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-card-feature-item">
                        <span style={{ color: 'var(--color-accent-primary)' }}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={service.route} className="service-card-link">
                    <span>Detayı İncele</span>
                    <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. Corporate Capability Highlight */}
      <CorporateIntroSection />

      {/* 4. Direct Contact Callout Panel */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="callout-panel">
            <div className="callout-text">
              <h2 className="callout-title">Teknik Servis ve Parça Temini İçin Bize Ulaşın</h2>
              <p className="callout-desc">
                Trakya bölgesinde yetkili servis güvencesiyle doğrudan telefon veya e-posta kanalımız üzerinden yetkililerimize ulaşabilirsiniz.
              </p>
            </div>
            <Link to="/iletisim" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              İletişim Kanalına Git →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
