import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { MobileDrawer } from './MobileDrawer';

export const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith('/hizmetler');

  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          {/* Brand Logo & Disan Authorized Service Badge */}
          <div className="brand-logo-group">
            <Link to="/" className="brand-link">
              <span className="brand-title">
                TRAKYA <span className="brand-title-accent">TEKNİK</span>
              </span>
            </Link>
            <div className="disan-badge" title="Disan Hidrolik Makine Trakya Bölge Yetkili Servisi">
              <span className="badge-dot" />
              <span>Disan Yetkili Servisi</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Ana Navigasyon">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Ana Sayfa
            </NavLink>

            <NavLink
              to="/kurumsal"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Kurumsal
            </NavLink>

            {/* Hizmetler Dropdown */}
            <div
              className="nav-item-wrapper"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavLink
                to="/hizmetler"
                className={() => (isServicesActive ? 'nav-link active' : 'nav-link')}
              >
                Hizmetler
                <span className="dropdown-chevron">▼</span>
              </NavLink>

              {isDropdownOpen && (
                <div className="dropdown-menu" role="menu">
                  <NavLink
                    to="/hizmetler"
                    end
                    className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Tüm Hizmetler (Overview)
                  </NavLink>
                  <NavLink
                    to="/hizmetler/yedek-parca-temini"
                    className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Yedek Parça Temini
                  </NavLink>
                  <NavLink
                    to="/hizmetler/yerinde-teknik-destek"
                    className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Yerinde Teknik Destek
                  </NavLink>
                  <NavLink
                    to="/hizmetler/makine-bakim-onarim"
                    className={({ isActive }) => (isActive ? 'dropdown-item active' : 'dropdown-item')}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Makine Bakım ve Onarım
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/iletisim"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              İletişim
            </NavLink>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <Link to="/iletisim" className="btn-contact-cta">
              Doğrudan İletişim
            </Link>

            <button
              className="mobile-toggle-btn"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Navigasyonu Aç"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
};
