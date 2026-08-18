import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceDetailHero } from '../components/ServiceDetailHero';
import { ContactInfoSidebar } from '../components/ContactInfoSidebar';
import { getServiceBySlug } from '../services/servicesService';
import { ServiceItem } from '../data/mockData';

export const YerindeDestekDetailPage: React.FC = () => {
  const [service, setService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    getServiceBySlug('yerinde-teknik-destek').then((data) => {
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
            { label: 'Yerinde Teknik Destek' }
          ]}
        />

        {/* Hero */}
        <ServiceDetailHero
          title={service?.title || 'Yerinde Teknik Destek'}
          pageId="PAGE-005"
          description={service?.fullDescription || 'İşletmelerin üretim aksamalarını en aza indirmek amacıyla Trakya Teknik Makine uzman teknik personeli ile sahada, makine başında yerinde teknik destek hizmeti sunar.'}
        />

        {/* Detail Layout Grid */}
        <div className="detail-layout-grid" style={{ marginBottom: 'var(--space-3xl)' }}>
          {/* Main Content */}
          <div className="detail-main-content">
            <div className="scope-card">
              <h3 className="scope-card-title">
                <span>📍</span>
                <span>Trakya Bölgesi Yerinde Destek Bağlamı</span>
              </h3>
              <p className="scope-card-desc">
                Trakya bölgesindeki sanayi tesislerine sahadan doğrudan müdahale ve yerinde teknik servis desteği ulaştırıyoruz.
              </p>
            </div>

            <div className="scope-card">
              <h3 className="scope-card-title">
                <span>🛠️</span>
                <span>Makine Arıza & Teknik İnceleme Desteği</span>
              </h3>
              <p className="scope-card-desc">
                Makine başı teknik inceleme, arıza tespiti ve işletme sahasında gerekli teknik müdahalelerin yetkili servis standardında yapılması.
              </p>
            </div>

            <div className="scope-card">
              <h3 className="scope-card-title">
                <span>🛡️</span>
                <span>Yetkili Servis Disiplini ve Güvencesi</span>
              </h3>
              <p className="scope-card-desc">
                Disan Hidrolik yetkili servis uzmanlığı ile sahadaki teknik problemlerin doğru yöntem ve ekipmanlarla çözülmesini sağlıyoruz.
              </p>
            </div>

            <div className="callout-panel">
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '4px' }}>
                  Yerinde Teknik Destek İçin Bize Ulaşın
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
