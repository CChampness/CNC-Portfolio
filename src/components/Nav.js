import React, { useState } from 'react';

function Nav(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  return (
    <nav>
      <a href="#about-section">About Me</a>
      <a href="#work">Portfolio</a>
      <a href="#contact">Contact Me</a>
      <a href="Resume.html">Resume</a>
    </nav>
  
  );
}

export default Nav;
