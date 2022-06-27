import React from 'react';

let proj = {
  "id": "Mm",
  "img": "mm.png",
  "alt": "Talk2Me",
  "title": "Talk 2 Me",
  "text": "Talk2Me is a language practice site for linguaphiles to find one another, "+
  "practice conversation, and share resources. You can use this site to find other "+
  "lovers of language learning who will be happy to share conversation practice with you.",
"live": "https://moremessages.herokuapp.com/"
}

const projName = "/CNC-Portfolio/";
const imgDir = window.location.origin + projName + "images/";
  
function Mt() {
  return (
    <>
      <h3 className="card-title">{proj.title}</h3>
      <hr/>
      <p>{proj.text}</p>
      <hr/>
      <a href={proj.live} target="_blank"><h4>Live deployment</h4></a>
      <br/>
      <a href="https://github.com/CChampness/Talk2Me" target="_blank"><h4>Github Repository</h4></a>
      <br/>
    </>
  )
}

export default Mt
