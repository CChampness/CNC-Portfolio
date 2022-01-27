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
      <h3>Github repo:</h3>
      <hr/>
      <h3>Live deployment:</h3>
      <hr/>
      <h3>Walkthrough video:</h3>
      <hr/>
    </>
  )
}


export default Fsb
