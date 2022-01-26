import React, { useState } from 'react';
import projList from './displist';
import FSBlog from './fsb';

// const cardClass = document.querySelector("main");

  let imgDir = './images/';
  let pagePath = './';
  let jsEnding = ".js";

  const pageChange = () => {<FSBlog />};

  function Projects ({ currentPage, handleDetails }) {
    let ndx = 0;
    
    return (
      projList.map((proj) =>
        <div className={(ndx++ === 0) ? "top-card" : "card-column"}>
          <figure className="proj-card">
            <span data-descr>
              <a href={pagePath+proj.id+jsEnding}>
                <h4 className="card-title">{proj.title}</h4>
                <img src={imgDir+proj.img} alt={proj.alt}/>
              </a>
            </span>
          </figure>
        </div>
      )
    )
  }

export default Projects;

{/* <button onClick={() => setCurrentPage('FSBlog')}>Click Me</button> */}
{/* <button onClick={() => <FSBlog />}>Click Me</button> */}

{/* <a
onClick={() => handlePageChange('Contact')}
// Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
>Contact Me</a> */}
