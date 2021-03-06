// import React, { useState } from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <nav>
      <a onClick={() => handlePageChange('About')}>About</a>
      <a onClick={() => handlePageChange('Projects')}>Projects</a>
      {/* <a onClick={() => handlePageChange('ContactForm')}>Contact</a> */}
      <a onClick={() => handlePageChange('Resume')}>Resume</a>

      <a href='' className="noshow" onClick={() => handlePageChange('Mm')}></a>
      <a href='' className="noshow" onClick={() => handlePageChange('Mt')}></a>
      <a href='' className="noshow" onClick={() => handlePageChange('Dp')}></a>
      <a href='' className="noshow" onClick={() => handlePageChange('Cq')}></a>
      <a href='' className="noshow" onClick={() => handlePageChange('Fsb')}></a>
      <a href='' className="noshow" onClick={() => handlePageChange('Tan')}></a>
      <a href='' className="noshow" onClick={() => handlePageChange('Tpg')}></a>
      <a href='' className="noshow" onClick={() => handlePageChange('Wa')}></a>
    </nav>
  );
}

export default Nav;
