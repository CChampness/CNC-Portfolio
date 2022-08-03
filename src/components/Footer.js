// import React, { useState } from 'react';

function Footer() {
  return (
    <>
    <hr/>
    <footer>
      <div>
        <h1>How to find me:</h1>
      </div>
      <div className="footerIcons">
        <div className="abouttip">
          <span className="abouttiptext">On Github</span>
          <a href="https://github.com/CChampness"><i className="fa-brands fa-github fa-4x"></i></a>
        </div>
        <div className="abouttip">
          <span className="abouttiptext">By Phone</span>
          <a href="tel:706-254-4879"><i className="fa-solid fa-phone fa-4x"></i></a>
        </div>
        <div className="abouttip">
          <span className="abouttiptext">By Email</span>
          <a href="mailto:champnesschris@gmail.com"><i className="fa-solid fa-paper-plane fa-4x"></i></a>
        </div>
        <div className="abouttip">
          <span className="abouttiptext">On LinkedIn</span>
          <a href="https://www.linkedin.com/in/chris-champness-4a71775"><i className="fa-brands fa-linkedin-in fa-4x"></i></a>
        </div>
        <div className="abouttip">
          <span className="abouttiptext">StackOverflow</span>
          <a href="https://stackoverflow.com/users/16466286/chris"><i className="fa-brands fa-stack-overflow fa-4x"></i></a>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;

