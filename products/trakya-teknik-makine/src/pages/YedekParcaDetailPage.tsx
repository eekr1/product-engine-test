import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceDetailHero } from '../components/ServiceDetailHero';
import { ContactInfoSidebar } from '../components/ContactInfoSidebar';
import { getServiceBySlug } from '../services/servicesService';
import { ServiceItem } from '../data/mockData';

export const YedekParcaDetailPage: React.FC = () => {
  const [service, setService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    getServiceBySlug('yedek-parca-temini').then((data) => {
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
            { label: 'Yedek Parça Temini' }
          ]}
        />

        {/* Hero */}
        <ServiceDetailHero
          title={service?.title || 'Yedek Parça Temini'}
          pageId="PAGE-004"
          description={service?.fullDescription || 'Trakya Teknik Makine, Disan Hidrolik yetkili servis sorumluluğu ile Trakya bölgesindeki sanayi tesislerine ve makine kullanıcılarına ihtiyaç duyulan hidrolik ve mekanik yedek parçaların temin sürecini yürütür.'}
        />

        {/* Detail Layout Grid */}
        <div className="detail-layout-grid" style={{ marginBottom: 'var(--space-3xl)' }}>
          {/* Main Content */}
          <div className="detail-main-content">
            <div className="scope-card">
              <h3 className="scope-card-title">
                <span>📦</span>
                <span>Makine ve Ekipman Yedek Parça Tedariği</span>
              </h3>
              <p className="scope-card-desc">
                Disan Hidrolik yetkili servisi sıfatıyla sanayi makinelerinin ihtiyaç duyduğu hidrolik bileşenler ve mekanik aksamların doğru nitelikte temin edilmesini sağlıyoruz.
              </p>
            </div>

            <div className="scope-card">
              <h3 className="scope-card-title">
                <span>🔍</span>
                <span>Teknik Destek Uyumlu Parça Seçimi</span>
              </h3>
              <p className="scope-card-desc">
                Temin edilen yedek parçalar makine spesifikasyonlarına göre değerlendirilir ve yetkili servis teknik bilgisiyle sisteminize uygunluğu kontrol edilir.
              </p>
            </div>

            <div className="scope-card">
              <h3 className="scope-card-title">
                <span>📍</span>
                <span>Trakya Bölgesi Odaklı Hizmet Bağlamı</span>
              </h3>
              <p className="scope-card-desc">
                Trakya bölgesindeki sanayi tesisleri ve makine kullanıcıları için yedek parça gereksinimlerini doğrudan iletişim kanallarımız üzerinden karşılıyoruz.
              </p>
            </div>

            <div className="callout-panel">
              <div>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--color-text-main)', marginBottom: '4px' }}>
                  Yedek Parça Temini İçin Bize Ulaşın
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
