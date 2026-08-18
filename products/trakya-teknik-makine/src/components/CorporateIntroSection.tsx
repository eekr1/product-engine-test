import React from 'react';
import { Link } from 'react-router-dom';

export const CorporateIntroSection: React.FC = () => {
  return (
    <section className="section">
      <div className="container corporate-grid">
        <div className="corporate-main-text">
          <span className="section-tag">Kurumsal Kimlik</span>
          <h2 className="section-title">
            Trakya Teknik Makine Hakkında
          </h2>
          <p>
            Trakya Teknik Makine, Trakya bölgesindeki endüstriyel işletmelerin ve sanayi kuruluşlarının makine servis ve yedek parça gereksinimlerini teknik hassasiyetle karşılamaktadır.
          </p>
          <p>
            Disan Hidrolik Makine Trakya Bölge Yetkili Servisi olarak, firmanın teknik yetkinliğini ve orijinal servis disiplinini sahaya taşımakta; yedek parça temininden yerinde müdahaleye ve periyodik teknik bakımlara kadar geniş bir yelpazede hizmet sunmaktayız.
          </p>
          <div style={{ marginTop: 'var(--space-md)' }}>
            <Link to="/kurumsal" className="btn-secondary">
              Kurumsal Detayları İnceleyin →
            </Link>
          </div>
        </div>

        <div className="authorized-panel">
          <div className="authorized-panel-header">
            <span style={{ fontSize: '24px', color: 'var(--color-accent-primary)' }}>🛡️</span>
            <div>
              <h3 className="authorized-panel-title">Disan Hidrolik Yetkili Servisi</h3>
              <p style={{ fontSize: '13px', color: 'var(--color-accent-primary)', fontFamily: 'var(--font-mono)' }}>
                Trakya Bölgesi Resmi Servis Statüsü
              </p>
            </div>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Trakya Teknik Makine, Disan Hidrolik markasının bölgedeki yetkili servis temsilcisi sıfatıyla sanayi makinelerinizin teknik kontrol ve yedek parça standartlarını garanti altına alır.
          </p>
        </div>
      </div>
    </section>
  );
};
