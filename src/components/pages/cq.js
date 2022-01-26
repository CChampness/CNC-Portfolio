import React from 'react';

let proj = {
 "id": "Cq",
  "img": "CodingQuiz.gif",
  "alt": "Coding Quiz",
  "title": "JavaScript Coding Quiz",
  "text": "The Coding Quiz application presents a coding quiz for topics in HTML, CSS, "+
          "and JavaScript. It is a timed test that pops up multiple-choice questions to "+
          "simulate a coding assessment as part of a job interview. There is also a "+
          "feature that keeps track of the user's scores so that they can be viewed from "+
          "the same screen. The app runs in the browser and it features dynamically "+
          "updated HTML and CSS powered by JavaScript. It is responsive so that the "+
          "user can run it conveniently on a mobile device.",
  "live": "https://cchampness.github.io/JavascriptCodingTest"
}

let imgDir = './CNC-Portfolio/images/';
  
function Cq() {
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
      {/* <Link to="https://github.com/djdyer/materials-trader">Repo</Link> */}
      <hr/>
      <h3>Live deployment:</h3>
      <hr/>
      <h3>Walkthrough video:</h3>
      <hr/>
    </>
  )
}

export default Cq

