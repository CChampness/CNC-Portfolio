import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState('Projects');

  return (
    <React.Fragment>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Main currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </React.Fragment>
  );
}

export default PortfolioApp;