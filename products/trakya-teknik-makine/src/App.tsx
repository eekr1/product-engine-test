import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CorporatePage } from './pages/CorporatePage';
import { ServicesPage } from './pages/ServicesPage';
import { YedekParcaDetailPage } from './pages/YedekParcaDetailPage';
import { YerindeDestekDetailPage } from './pages/YerindeDestekDetailPage';
import { MakineBakimDetailPage } from './pages/MakineBakimDetailPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="kurumsal" element={<CorporatePage />} />
          <Route path="hizmetler" element={<ServicesPage />} />
          <Route path="hizmetler/yedek-parca-temini" element={<YedekParcaDetailPage />} />
          <Route path="hizmetler/yerinde-teknik-destek" element={<YerindeDestekDetailPage />} />
          <Route path="hizmetler/makine-bakim-onarim" element={<MakineBakimDetailPage />} />
          <Route path="iletisim" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
