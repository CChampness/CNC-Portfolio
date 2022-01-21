import React, { useState } from 'react';
import Header from './Header';
import ProjectCollection from './ProjectCollection';
import Footer from './Footer';

function PortfolioApp() {

  return (
    <div>
      <Header />
      <ProjectCollection />
      <Footer />
    </div>
  );
}

export default PortfolioApp;