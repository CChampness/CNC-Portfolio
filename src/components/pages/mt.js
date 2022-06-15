import React from 'react';

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

let imgDir = './images/';
  
function Mt() {
  return (
    <>
      <h3 className="card-title">{proj.title}</h3>
      <hr/>
      <p>{proj.text}</p>
      <hr/>
      <img src={imgDir+proj.img} alt={proj.alt}/>
      <hr/>
      <a href="https://github.com/djdyer/materials-trader"><h4>Github Repository</h4></a>
      <br/>
      <a href={proj.live}><h4>Live deployment</h4></a>
      <br/>
      <a href={proj.video}><h4>Walkthrough video</h4></a>
      <br/>
    </>
  )
}

export default Mt
