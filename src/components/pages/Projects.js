import projList from './displist';
  const projName = "/CNC-Portfolio/"; // For local only
  // const projName = ""; // For gh-pages deployment (remember, there can be a delay)

  const imgDir = window.location.origin + projName + "images/";

  // The state gets changed in the Nav component
  function Projects ({ currentPage, handleChange }) {
    return (
      projList.map((proj, ndx) =>
        <div key={ndx} className={(ndx === 0) ? "top-card" : "card-column"}>
          <figure className="proj-card">
            <a onClick={() => handleChange(proj.id)}>
              <div className="tooltip">
                <h4 className="card-title">{proj.title}</h4>
                <span className="tooltiptext neon-text">Click for details!</span>
                <img src={imgDir+proj.img} alt={proj.alt}/>
              </div>
            </a>
          </figure>
        </div>
      )
    );
 }

  //   return (
  //     projList.map((proj, ndx) =>
  //       <div key={ndx} className={(ndx === 0) ? "top-card" : "card-column"}>
  //         <figure className="proj-card">
  //           <span data-descr>
  //             <a onClick={() => handleChange(proj.id)}>
  //               <h4 className="card-title">{proj.title}</h4>
  //               <img src={imgDir+proj.img} alt={proj.alt}/>
  //             </a>
  //           </span>
  //         </figure>
  //       </div>
  //     )
  //   )
  // }

export default Projects;

