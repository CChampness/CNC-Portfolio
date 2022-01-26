import React from 'react';
import projList from './displist';

let proj = {
  "id": "Mt",
  "img": "mtrd.png",
  "alt": "Materials Trader",
  "title": "Materials Trader",
  "text": "The Materials Trader app provides the means to establish a peer-to-peer bulk "+
          "recycling network, by facilitating the exchange of waste materials among "+
          "consumers and businesses.  Categories include paper, plastic, glass, aluminum, "+
          "and many more.  I worked with three other collaborators on this project.",
  "video": "https://drive.google.com/file/d/1pjfldH-52UGu2uFExDSPg9XFFh4kNT8K/view?usp=sharing",
  "live": "https://materials-trader.herokuapp.com/"
  }

let imgDir = './CNC-Portfolio/images/';
let pagePath = './pages/CNC-Portfolio/';
let jsEnding = ".js";

  
function Mt() {
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

export default Mt
