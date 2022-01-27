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

export default Tpg
