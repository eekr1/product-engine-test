import React from 'react';
import { AuthorityBadge } from './AuthorityBadge';

export const RegionalServiceContextCard: React.FC = () => {
  return (
    <div className="overview-banner-card" style={{ marginTop: 'var(--space-2xl)', padding: 'var(--space-2xl)' }}>
      <AuthorityBadge />
      <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-main)', marginTop: 'var(--space-sm)' }}>
        Trakya Bölgesi Sanayi Hatlarına Doğrudan Hizmet
      </h3>
      <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
        Trakya Teknik Makine, Disan Hidrolik Trakya Bölge Yetkili Servisi olarak bölgedeki tüm sanayi tesisleri ve makine kullanıcıları için doğrudan telefon ve e-posta iletişim kanallarını açık tutmaktadır.
      </p>
    </div>
  );
};
