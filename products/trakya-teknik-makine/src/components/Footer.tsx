import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Summary */}
          <div className="footer-brand">
            <Link to="/" className="brand-link">
              <span className="brand-title">
                TRAKYA <span className="brand-title-accent">TEKNİK</span>
              </span>
            </Link>
            <div className="disan-badge" style={{ width: 'fit-content' }}>
              <span className="badge-dot" />
              <span>Disan Hidrolik Trakya Bölge Yetkili Servisi</span>
            </div>
            <p className="footer-summary">
              Trakya bölgesinde endüstriyel makine yetkili servis güvencesiyle yedek parça temini, yerinde teknik destek ve makine bakım-onarım çözümleri.
            </p>
          </div>

          {/* Nav Column 1: Kurumsal */}
          <div>
            <h3 className="footer-col-title">Kurumsal</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/kurumsal" className="footer-link">Firma & Yetkili Servis Kimliği</Link>
              </li>
              <li>
                <Link to="/iletisim" className="footer-link">İletişim Kanalı</Link>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Hizmetlerimiz */}
          <div>
            <h3 className="footer-col-title">Hizmetlerimiz</h3>
            <ul className="footer-links">
              <li>
                <Link to="/hizmetler" className="footer-link">Tüm Hizmetler (Overview)</Link>
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

          {/* Nav Column 3: Direct Contact Capabilities */}
          <div>
            <h3 className="footer-col-title">Doğrudan İletişim</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span>📍 Bölge:</span>
                <span style={{ color: 'var(--color-text-main)', fontWeight: 500 }}>Trakya Bölgesi Sanayi Hatları</span>
              </div>
              <div className="footer-contact-item">
                <span>📞 Telefon:</span>
                <Link to="/iletisim" className="footer-contact-link">
                  Doğrudan Telefon Kanalı
                </Link>
              </div>
              <div className="footer-contact-item">
                <span>✉️ E-Posta:</span>
                <Link to="/iletisim" className="footer-contact-link">
                  Doğrudan E-Posta Kanalı
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Trakya Teknik Makine. Tüm hakları saklıdır.</p>
          <p>Disan Hidrolik Makine Trakya Bölge Yetkili Servisi</p>
        </div>
      </div>
    </footer>
  );
};
