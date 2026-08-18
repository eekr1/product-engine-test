import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobil Navigasyon Menüsü">
        <div className="drawer-header">
          <span className="drawer-title">Menü</span>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Menüyü Kapat">
            ✕
          </button>
        </div>

        <nav className="drawer-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'drawer-nav-item active' : 'drawer-nav-item')}
            onClick={onClose}
          >
            Ana Sayfa
          </NavLink>

          <NavLink
            to="/kurumsal"
            className={({ isActive }) => (isActive ? 'drawer-nav-item active' : 'drawer-nav-item')}
            onClick={onClose}
          >
            Kurumsal
          </NavLink>

          <NavLink
            to="/hizmetler"
            end
            className={({ isActive }) => (isActive ? 'drawer-nav-item active' : 'drawer-nav-item')}
            onClick={onClose}
          >
            Hizmetler Overview
          </NavLink>

          <NavLink
            to="/hizmetler/yedek-parca-temini"
            className={({ isActive }) => (isActive ? 'drawer-nav-item sub-item active' : 'drawer-nav-item sub-item')}
            onClick={onClose}
          >
            ↳ Yedek Parça Temini
          </NavLink>

          <NavLink
            to="/hizmetler/yerinde-teknik-destek"
            className={({ isActive }) => (isActive ? 'drawer-nav-item sub-item active' : 'drawer-nav-item sub-item')}
            onClick={onClose}
          >
            ↳ Yerinde Teknik Destek
          </NavLink>

          <NavLink
            to="/hizmetler/makine-bakim-onarim"
            className={({ isActive }) => (isActive ? 'drawer-nav-item sub-item active' : 'drawer-nav-item sub-item')}
            onClick={onClose}
          >
            ↳ Makine Bakım ve Onarım
          </NavLink>

          <NavLink
            to="/iletisim"
            className={({ isActive }) => (isActive ? 'drawer-nav-item active' : 'drawer-nav-item')}
            onClick={onClose}
          >
            İletişim
          </NavLink>
        </nav>

        <div className="drawer-footer">
          <NavLink to="/iletisim" className="btn-contact-cta" style={{ justifyContent: 'center' }} onClick={onClose}>
            Doğrudan İletişim
          </NavLink>
        </div>
      </div>
    </>
  );
};
