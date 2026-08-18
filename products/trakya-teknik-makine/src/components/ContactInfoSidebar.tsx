import React from 'react';
import { Link } from 'react-router-dom';
import { AuthorityBadge } from './AuthorityBadge';

export const ContactInfoSidebar: React.FC = () => {
  return (
    <aside className="contact-sidebar">
      <AuthorityBadge />

      <div className="sidebar-card">
        <h3 className="sidebar-title">Doğrudan İletişim</h3>
        <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
          Teknik yetkililerimizle telefon veya e-posta kanalımız üzerinden doğrudan iletişime geçebilirsiniz.
        </p>

        <div className="sidebar-contact-list">
          <div className="sidebar-contact-item">
            <span>📍 Hizmet Alanı:</span>
            <span style={{ color: 'var(--color-text-main)', fontWeight: 500 }}>Trakya Bölgesi</span>
          </div>
          <div className="sidebar-contact-item">
            <span>📞 Telefon:</span>
            <Link to="/iletisim" style={{ color: 'var(--color-accent-primary)', fontWeight: 600 }}>
              Doğrudan Telefon Kanalı
            </Link>
          </div>
          <div className="sidebar-contact-item">
            <span>✉️ E-Posta:</span>
            <Link to="/iletisim" style={{ color: 'var(--color-accent-primary)', fontWeight: 600 }}>
              Doğrudan E-Posta Kanalı
            </Link>
          </div>
        </div>

        <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border)' }}>
          <Link to="/iletisim" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            İletişim Sayfasına Git →
          </Link>
        </div>
      </div>

      <div className="sidebar-card">
        <h3 className="sidebar-title">Hizmetler Navigasyonu</h3>
        <ul className="footer-links">
          <li>
            <Link to="/hizmetler" className="footer-link">← Hizmetler Overview</Link>
          </li>
          <li>
            <Link to="/hizmetler/yedek-parca-temini" className="footer-link">Yedek Parça Temini</Link>
          </li>
          <li>
            <Link to="/hizmetler/yerinde-teknik-destek" className="footer-link">Yerinde Teknik Destek</Link>
          </li>
          <li>
            <Link to="/hizmetler/makine-bakim-onarim" className="footer-link">Makine Bakım ve Onarım</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
