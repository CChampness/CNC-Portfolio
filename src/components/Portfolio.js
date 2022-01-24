import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div className="PFContainer">
    <React.Fragment>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Main currentPage={currentPage} />
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default PortfolioApp;