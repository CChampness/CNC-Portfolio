import React from 'react';

let imgDir = './CNC-Portfolio/images/';
let proj = {
  "id": "Dp",
  "img": "DayPlanner.gif",
  "alt": "Day Planner App",
  "title": "Day Planner",
  "text": "This is a simple calendar application which allows the user to save events for "+
          "each hour of the day.  It runs in the browser and features dynamically "+
          "updated HTML and CSS powered by jQuery. The [Moment.js](https://momentjs.com/) "+
          "library is used to get the date and time. This mobile-responsive app can be "+
          "extremely useful for anyone with a busy schedule.  At the beginning of the day, "+
          "or the evening before,the user can very easily set up their schedule for the "+
          "day.  As the day goes along, the user can modify the plan as needed, and even "+
          "put in notes on previous hours.  Then, at the end of the day, the user can "+
          "look at the schedule to review any notes or events that were entered.  The "+
          "calendar is cleared by the 'Clear schedule' button so that the following day's "+
          "schedule can be entered.",
  "live": "https://CChampness.github.io/WorkdayCalendar"
}

function Dp() {
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

export default Dp
