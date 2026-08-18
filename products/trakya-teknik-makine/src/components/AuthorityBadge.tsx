import React from 'react';

interface AuthorityBadgeProps {
  subtitle?: string;
}

export const AuthorityBadge: React.FC<AuthorityBadgeProps> = ({
  subtitle = "Disan Hidrolik Makine Trakya Bölge Yetkili Servisi"
}) => {
  return (
    <div className="authority-badge-card">
      <div className="authority-icon-box">
        ✓
      </div>
      <div className="authority-badge-text">
        <span className="authority-badge-title">Yetkili Servis Güvencesi</span>
        <span className="authority-badge-subtitle">{subtitle}</span>
      </div>
    </div>
  );
};
