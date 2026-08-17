import React from 'react';
import Header from './components/Header';
import HeroPresentation from './components/HeroPresentation';
import ServicesGrid from './components/ServicesGrid';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <HeroPresentation />
        <ServicesGrid />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
