import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';
import { AuthorityBadge } from '../components/AuthorityBadge';
import { getCompanyInfo } from '../services/companyService';
import { CompanyInfo } from '../data/mockData';

export const CorporatePage: React.FC = () => {
  const [company, setCompany] = useState<CompanyInfo | null>(null);

  useEffect(() => {
    getCompanyInfo().then((data) => {
      setCompany(data);
    });
  }, []);

  return (
    <div className="corporate-page">
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: 'Kurumsal' }]} />

        {/* Page Header */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <span className="section-tag">Kurumsal Profil</span>
          <h1 className="section-title" style={{ fontSize: '2.5rem' }}>
            Firma ve Yetkili Servis Kimliğimiz
          </h1>
          <p className="section-subtitle">
            Trakya Teknik Makine — Disan Hidrolik Makine Trakya Bölge Yetkili Servisi
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="corporate-grid" style={{ marginBottom: 'var(--space-3xl)' }}>
          {/* Main Text Content */}
          <div className="corporate-main-text">
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-main)', marginBottom: 'var(--space-xs)' }}>
              Trakya Bölgesinde Teknik Uzmanlık ve Yetkili Servis Güvencesi
            </h2>
            <p>
              {company?.summary || 'Trakya Teknik Makine, Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olarak bölgedeki sanayi ve endüstriyel işletmelere yetkili servis güvencesiyle yedek parça temini, yerinde teknik destek ve makine bakım-onarım hizmetleri sunmaktadır.'}
            </p>
            <p>
              Endüstriyel tesislerin makine parklarında ihtiyaç duyulan yetkili servis disiplinini sahaya taşıyan Trakya Teknik Makine; yedek parça temin süreçlerini, arıza tespitlerini ve yerinde teknik müdahaleleri kalite standartlarından taviz vermeden yürütür.
            </p>
            <p>
              Firma faaliyetlerimiz Trakya bölgesindeki sanayi hatlarında makine sürekliliğini ve teknik güvenliği sağlamaya odaklanmıştır.
            </p>
          </div>

          {/* Authorized Service Card */}
          <div className="authorized-panel">
            <AuthorityBadge />
            <h3 className="authorized-panel-title">Trakya Bölge Yetkili Servisi</h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
              Disan Hidrolik Makine markasının Trakya bölgesi yetkili servisi olarak orijinal yedek parça temini, yetkili servis standartlarında bakım ve teknik destek sorumluluğunu üstleniyoruz.
            </p>
            
            <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px dashed var(--color-border)' }}>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-accent-primary)' }}>
                Hizmet Bölgesi: Trakya Bölgesi Sanayi Tesisleri
              </span>
            </div>
          </div>
        </div>

        {/* 3 Service Pillars */}
        <div style={{ marginBottom: 'var(--space-3xl)' }}>
          <div className="section-header">
            <span className="section-tag">Faaliyet Alanları</span>
            <h2 className="section-title">Temel Hizmet Sorumluluklarımız</h2>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <span style={{ fontSize: '20px', color: 'var(--color-accent-primary)' }}>📦</span>
              <h3 className="pillar-title">Yedek Parça Temini</h3>
              <p className="pillar-desc">
                Disan Hidrolik yetkili servis güvencesiyle endüstriyel makine ve ekipman yedek parçalarının temin süreçleri.
              </p>
              <Link to="/hizmetler/yedek-parca-temini" style={{ fontSize: '13px', color: 'var(--color-accent-primary)', fontWeight: 600, marginTop: '8px' }}>
                Hizmet Detayı →
              </Link>
            </div>

            <div className="pillar-card">
              <span style={{ fontSize: '20px', color: 'var(--color-accent-primary)' }}>🛠️</span>
              <h3 className="pillar-title">Yerinde Teknik Destek</h3>
              <p className="pillar-desc">
                Trakya bölgesindeki sanayi tesislerine sahada, makine başında arıza tespit ve doğrudan teknik servis müdahalesi.
              </p>
              <Link to="/hizmetler/yerinde-teknik-destek" style={{ fontSize: '13px', color: 'var(--color-accent-primary)', fontWeight: 600, marginTop: '8px' }}>
                Hizmet Detayı →
              </Link>
            </div>

            <div className="pillar-card">
              <span style={{ fontSize: '20px', color: 'var(--color-accent-primary)' }}>⚙️</span>
              <h3 className="pillar-title">Makine Bakım ve Onarım</h3>
              <p className="pillar-desc">
                Endüstriyel makinelerin teknik bakımları ve yetkili servis uzmanlığı ile hidrolik-mekanik onarım çözümleri.
              </p>
              <Link to="/hizmetler/makine-bakim-onarim" style={{ fontSize: '13px', color: 'var(--color-accent-primary)', fontWeight: 600, marginTop: '8px' }}>
                Hizmet Detayı →
              </Link>
            </div>
          </div>
        </div>

        {/* Callout Action */}
        <div className="callout-panel" style={{ marginBottom: 'var(--space-3xl)' }}>
          <div>
            <h3 className="callout-title">Hizmetlerimiz Hakkında Detaylı Bilgi Alın</h3>
            <p className="callout-desc">3 onaylı hizmet alanımızı detaylı inceleyebilir veya doğrudan yetkililerimizle iletişime geçebilirsiniz.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
            <Link to="/hizmetler" className="btn-primary">Hizmetler Overview →</Link>
            <Link to="/iletisim" className="btn-secondary">İletişim</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
