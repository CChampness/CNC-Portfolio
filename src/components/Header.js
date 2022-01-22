
import React, { useState } from 'react';
import Nav from './Nav';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';



function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  // Checking to see what the value of `currentPage` is,
  // then return the corresponding component and render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Projects />;
    }
    if (currentPage === 'Contact Me') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header>
      <h1 className="page-title">
        Chris Champness
      </h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </header>
  );
}

export default Header;