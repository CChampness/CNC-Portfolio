import React, { useState } from 'react';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Mt from './pages/Mt';


function Main({ currentPage, setCurrentPage}) {

  const handleChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
      return <About />;
      case 'Projects':
        return (
          <section className="row justify-center">
            <h3>Portfolio</h3>
            <Projects  currentPage={currentPage} handleChange={handleChange}/>
          </section>
        );
      case 'Contact':
        return <Contact />;
      case 'Mt':
        return <Mt />;
      default:
        return <Resume />
    }
  };

  return (
    <main>
      {renderPage()}
    </main>
  );
}

export default Main;
