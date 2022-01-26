import React, { useState } from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <nav> 
      <a onClick={() => handlePageChange('About')}>About Me</a>
      <a onClick={() => handlePageChange('Projects')}>Portfolio</a>
      <a onClick={() => handlePageChange('Contact')}>Contact Me</a>
      <a onClick={() => handlePageChange('Resume')}>Resume</a>

      <a onClick={() => handlePageChange('Mt')}></a>
      <a onClick={() => handlePageChange('Dp')}></a>
      <a onClick={() => handlePageChange('Cq')}></a>
      <a onClick={() => handlePageChange('Fsb')}></a>
      <a onClick={() => handlePageChange('Tan')}></a>
      <a onClick={() => handlePageChange('Tpg')}></a>
      <a onClick={() => handlePageChange('Wa')}></a>
    </nav>
  );
}

export default Nav;
