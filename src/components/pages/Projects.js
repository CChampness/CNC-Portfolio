import React, { useState } from 'react';
import projList from './displist';
import FSBlog from './fsb';

  let imgDir = './CNC-Portfolio/images/';
  let pagePath = './';
  let jsEnding = ".js";

  const pageChange = () => {<FSBlog />};

  // function Projects ({ currentPage, handleDetails }) {

  function Projects () {
    const [currentPage, handleDetails] = useState('FSBlog');
    // handleDetails('FSBlog');

    return (
      projList.map((proj, ndx) =>
        <div key={ndx} className={(ndx === 0) ? "top-card" : "card-column"}>
          <figure className="proj-card">
            <span data-descr>
              <a onClick={() => handleDetails(proj.id+jsEnding)}>
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

{/* <a href={pagePath+proj.id+jsEnding}> */}

{/* <button onClick={() => setCurrentPage('FSBlog')}>Click Me</button> */}
{/* <button onClick={() => <FSBlog />}>Click Me</button> */}

{/* <a
onClick={() => handlePageChange('Contact')}
// Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
>Contact Me</a> */}
