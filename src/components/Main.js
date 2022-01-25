import React, { useState } from 'react';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function Main({ currentPage}) {

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Projects') {
      return (
        <section class="row justify-center">
          <Projects />
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
