// import React, { useState } from 'react';
import projList from './displist';

  let imgDir = './images/';

  // The state gets changed in the Nav component
  function Projects ({ currentPage, handleChange }) {

    return (
      projList.map((proj, ndx) =>
        <div key={ndx} className={(ndx === 0) ? "top-card" : "card-column"}>
          <figure className="proj-card">
            <span data-descr>
              <a onClick={() => handleChange(proj.id)}>
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

