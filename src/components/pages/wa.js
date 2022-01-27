import React from 'react';

let proj = {
  "id": "Wa",
  "img": "weatherapp.png",
  "alt": "Weather Panel",
  "title": "Weather Panel",
  "text": "The Weather Panel app runs in the browser to display current and forecast "+
          "weather for any city that the user requests.  The app uses two third-party "+
          "APIs from *openweathermap.org*.  The HTML and CSS are dynamically updated "+
          "from JavaScript.",
  "live": "https://cchampness.github.io/WeatherPanel"
}

let imgDir = './images/';
  
function Wa() {
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

export default Wa
