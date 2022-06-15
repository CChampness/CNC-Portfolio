import React from 'react';

let proj = {
  "id": "Tpg",
  "img": "tpg.png",
  "alt": "TeamPageGen",
  "title": "TeamPageGen",
  "text": "This is a command-line app to build an HTML page for a software team's profile. "+
          "It runs under node.js to produce an index.html file. It takes in information from "+
          "the user about employees on a software engineering team, then generates the index.html "+
          "webpage that displays summaries for each person. Testing is also provided by means of "+
          "Jest functions. This helps make the code maintainable. There is a unit test for each "+
          "of the classes.",
  "video": "https://drive.google.com/file/d/104Eg3jqvDR0kNaHWn-uCAOZcHypee3R9/view?usp=sharing"
}

let imgDir = './images/';
  
function Tpg() {
  return (
    <>
      <h3 className="card-title">{proj.title}</h3>
      <hr/>
      <p>{proj.text}</p>
      <hr/>
      <img src={imgDir+proj.img} alt={proj.alt}/>
      <hr/>
      <a href="https://github.com/CChampness/TeamPageGen"><h4>Github Repository</h4></a>
      <br/>
      <a href={proj.video}><h4>Walkthrough video</h4></a>
      <br/>
    </>
  )
}

export default Tpg
