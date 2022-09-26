import React from 'react';

let proj = {
  "id": "Tan",
  "img": "TakeANote.png",
  "alt": "Take-A-Note",
  "title": "Take-A-Note",
  "text": "This is an ExpressJS app that is deployed on the Heroku host server. It is a "+
          "fully-featured CRUD (Create, Read, Update, Delete) application which is "+
          "implemented with POST, GET, PUT, and DELETE routes.",
  "live": "https://damp-ravine-72371.herokuapp.com",
}

let imgDir = './images/';
  
function Tan() {
  return (
    <>
      <h3 className="card-title">{proj.title}</h3>
      <hr/>
      <p>{proj.text}</p>
      <hr/>
      <a href={proj.live} target="_blank"><h4>Live deployment on Heroku</h4></a>
      <br/>
      <a href="https://github.com/CChampness/Take-A-Note" target="_blank"><h4>Github Repository</h4></a>
      <br/>
    </>
  )
}

export default Tan
