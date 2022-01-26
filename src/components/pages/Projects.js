import React, { useState } from 'react';
import projList from './displist';
import MT from './mt';
import FSBlog from './fsb';

  let imgDir = './CNC-Portfolio/images/';
  let pagePath = './pages/CNC-Portfolio/';
  let jsEnding = ".js";

  function Projects ({ currentPage, handlePageChange }) {

    return (
      projList.map((proj, ndx) =>
        <div key={ndx} className={(ndx === 0) ? "top-card" : "card-column"}>
          <figure className="proj-card">
            <span data-descr>
              <a onClick={() => handlePageChange(pagePath+proj.id+jsEnding)}>
                <h4 className="card-title">{proj.title}</h4>
                <img src={imgDir+proj.img} alt={proj.alt}/>
              </a>
              <h1>page: {pagePath+proj.id+jsEnding}</h1>
            </span>
          </figure>
        </div>
      )
    )
  }

export default Projects;

