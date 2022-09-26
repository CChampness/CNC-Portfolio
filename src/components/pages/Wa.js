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
      <h3 className="card-title">{proj.title}</h3>
      <hr/>
      <p>{proj.text}</p>
      <hr/>
      <a href={proj.live} target="_blank" target="_blank"><h4>Live deployment</h4></a>
      <br/>
      <a href="https://github.com/CChampness/WeatherPanel" target="_blank" target="_blank"><h4>Github Repository</h4></a>
      <br/>
    </>
  )
}

export default Wa
