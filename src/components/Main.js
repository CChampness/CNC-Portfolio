import React, { useState } from 'react';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function Main({ currentPage, handlePageChange}) {

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Projects') {
      return (
        <section className="row justify-center">
          <h3>Portfolio</h3>
          <Projects  currentPage={currentPage} handlePageChange={handlePageChange}/>
        </section>
      );
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />
  };

  return (
    <main>
      {renderPage()}
    </main>
  );
}

export default Main;
