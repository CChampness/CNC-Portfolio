import React, { useState } from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <nav> 
      <a
        onClick={() => handlePageChange('About')}
        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        // className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
      >About Me</a>

      <a
        onClick={() => handlePageChange('Projects')}
        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        // className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
      >Portfolio</a>

      <a
        onClick={() => handlePageChange('Contact')}
        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        // className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
      >Contact Me</a>

      <a
        onClick={() => handlePageChange('Resume')}
        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        // className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
      >Resume</a>
    </nav>
  );
}

export default Nav;
