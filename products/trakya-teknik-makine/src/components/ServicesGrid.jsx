import React from 'react';
import presentationService from '../services/presentationService';
import ServiceCard from './ServiceCard';
import './ServicesGrid.css';

export function ServicesGrid() {
  const services = presentationService.getServices();

  return (
    <section className="services-section" id="hizmetler">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">DOĞRULANMIŞ HİZMET KAPSAMI</span>
          <h2 className="section-title">Uzman Teknik Servis ve Tedarik Çözümleri</h2>
          <p className="section-subtitle">
            Disan Hidrolik Makine Trakya Bölge Yetkili Servisi güvencesiyle endüstriyel tesislerinizin teknik ihtiyaçlarına özel hizmet sunuyoruz.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
