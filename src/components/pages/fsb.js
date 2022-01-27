import React from 'react';

let proj = {
  "id": "Fsb",
  "img": "FS-techblog.png",
  "alt": "Full Stack Blog",
  "title": "FS-Blog",
  "text": "This is a Full Stack CMS-style app that manages the content of a tech blog site.",
  "live": "https://shielded-journey-82964.herokuapp.com"
}

let imgDir = './images/';
  
function Fsb() {
  return (
    <>
      <hr/>
      <h3 className="card-title">{proj.title}</h3>
      <hr/>
      <p>{proj.text}</p>
      <hr/>
      <img src={imgDir+proj.img} alt={proj.alt}/>
      <hr/>
      <a href="https://github.com/CChampness/FS-Blog"><h4>Github Repository</h4></a>
      <br/>
      <a href={proj.live}><h4>Live deployment</h4></a>
      <br/>
   </>
  )
}


export default Fsb
