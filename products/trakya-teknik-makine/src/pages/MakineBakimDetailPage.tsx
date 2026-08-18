import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceDetailHero } from '../components/ServiceDetailHero';
import { ContactInfoSidebar } from '../components/ContactInfoSidebar';
import { getServiceBySlug } from '../services/servicesService';
import { ServiceItem } from '../data/mockData';

export const MakineBakimDetailPage: React.FC = () => {
  const [service, setService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    getServiceBySlug('makine-bakim-onarim').then((data) => {
      setService(data);
    });
  }, []);

  return (
    <div className="service-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Hizmetler', path: '/hizmetler' },
            { label: 'Makine Bakım ve Onarım' }
          ]}
        />

        {/* Hero */}
        <ServiceDetailHero
          title={service?.title || 'Makine Bakım ve Onarım'}
          pageId="PAGE-006"
          description={service?.fullDescription || 'Trakya Teknik Makine, Disan Hidrolik yetkili servisi olarak endüstriyel makinelerin teknik bakımlarını ve arızalanan bileşenlerinin onarım işlemlerini teknik standartlara uygun şekilde gerçekleştirir.'}
        />

        {/* Detail Layout Grid */}
        <div className="detail-layout-grid" style={{ marginBottom: 'var(--space-3xl)' }}>
          {/* Main Content */}
          <div className="detail-main-content">
            <div className="scope-card">
              <h3 className="scope-card-title">
                <span>⚙️</span>
                <span>Endüstriyel Makine Bakımı</span>
              </h3>
              <p className="scope-card-desc">
                Sanayi makinelerinin teknik kontrolleri, hidrolik ve mekanik aksam bakımlarının yetkili servis prosedürlerine uygun yürütülmesi.
              </p>
            </div>

            <div className="scope-card">
              <h3 className="scope-card-title">
                <span>🔧</span>
                <span>Arıza Tespiti ve Teknik Onarım</span>
              </h3>
              <p className="scope-card-desc">
                Arızalanan bileşenlerin tespiti, teknik kontrolleri ve gerekli durumlarda parça değişimi ile onarım süreçlerinin tamamlanması.
              </p>
            </div>

            <div className="scope-card">
              <h3 className="scope-card-title">
                <span>🛡️</span>
                <span>Yetkili Servis Standartları ile Müdahale</span>
              </h3>
              <p className="scope-card-desc">
                Disan Hidrolik yetkili servis sorumluluğu ile yapılan tüm teknik müdahaleler kurumsal kalite ve güvenilirlik standartlarını taşır.
              </p>
            </div>

            <div className="callout-panel">
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '4px' }}>
                  Makine Bakım ve Onarım Hizmeti İçin Bize Ulaşın
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
                  Telefon veya e-posta kanalımız üzerinden yetkililerimize doğrudan ulaşabilirsiniz.
                </p>
              </div>
              <Link to="/iletisim" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
                İletişim Kanalı →
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <ContactInfoSidebar />
        </div>
      </div>
    </div>
  );
};
