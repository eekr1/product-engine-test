import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { ServiceOverviewCard } from '../components/ServiceOverviewCard';
import { getAllServices } from '../services/servicesService';
import { ServiceItem } from '../data/mockData';

export const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllServices().then((data) => {
      setServices(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="services-overview-page">
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Hizmetler' }]} />

        {/* Page Header */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <span className="section-tag">Hizmet Kataloğu</span>
          <h1 className="section-title" style={{ fontSize: '2.5rem' }}>
            Hizmetlerimiz (Overview)
          </h1>
          <p className="section-subtitle">
            Disan Hidrolik Trakya Bölge Yetkili Servisi güvencesiyle sunulan 3 temel teknik hizmetimiz.
          </p>
        </div>

        {/* Overview Banner */}
        <div className="overview-banner-card">
          <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--color-accent-primary)', fontWeight: 600 }}>
            🛡️ Yetkili Servis Disiplini
          </span>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--color-text-main)' }}>
            Trakya Sanayisine Özel Teknik Servis & Parça Çözümleri
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Trakya Teknik Makine olarak endüstriyel makine parklarının ihtiyacı olan yedek parça temini, sahadan yerinde teknik destek ve periyodik makine bakım-onarım hizmetlerini tek bir çatı altında sunuyoruz.
          </p>
        </div>

        {/* Services List */}
        {loading ? (
          <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--color-text-muted)' }}>
            Hizmet verileri yükleniyor...
          </div>
        ) : (
          <div style={{ marginBottom: 'var(--space-3xl)' }}>
            {services.map((service) => (
              <ServiceOverviewCard key={service.id} service={service} />
            ))}
          </div>
        )}

        {/* Callout Panel */}
        <div className="callout-panel" style={{ marginBottom: 'var(--space-3xl)' }}>
          <div>
            <h3 className="callout-title">Teknik Destek veya Parça Talebi İçin Ulaşın</h3>
            <p className="callout-desc">
              Yetkililerimizle telefon veya e-posta kanalımız üzerinden doğrudan iletişime geçebilirsiniz.
            </p>
          </div>
          <Link to="/iletisim" className="btn-primary">
            İletişim Kanalına Git →
          </Link>
        </div>
      </div>
    </div>
  );
};
