import React from 'react';
import presentationService from '../services/presentationService';
import './Footer.css';

export function Footer() {
  const company = presentationService.getCompanyInfo();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-brand-title">{company.name}</h3>
            <p className="footer-brand-status">{company.authorizedStatus}</p>
            <p className="footer-brand-desc">{company.description}</p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Hızlı Bağlantılar</h4>
            <ul className="footer-nav-list">
              <li><a href="#kurumsal">Kurumsal Tanıtım</a></li>
              <li><a href="#hizmetler">Hizmetlerimiz</a></li>
              <li><a href="#iletisim">İletişim Kanalları</a></li>
            </ul>
          </div>

          <div className="footer-scope">
            <h4 className="footer-heading">Bölgesel Hizmet Alanı</h4>
            <p className="scope-text">{company.regionContext}</p>
            <span className="scope-badge">Mühendislik Servis Disiplini</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} {company.name}. Tüm hakları saklıdır. — {company.authorizedStatus}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
