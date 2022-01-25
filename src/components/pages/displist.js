const projList = [
  { "id": "mt",
    "img": "mtrd.png",
    "alt": "Materials Trader",
    "title": "Materials Trader",
    "text": "The Materials Trader app provides the means to establish a peer-to-peer bulk "+
            "recycling network, by facilitating the exchange of waste materials among "+
            "consumers and businesses.  Categories include paper, plastic, glass, aluminum, "+
            "and many more.  I worked with three other collaborators on this project.",
    "video": "https://drive.google.com/file/d/1pjfldH-52UGu2uFExDSPg9XFFh4kNT8K/view?usp=sharing",
    "live": "https://materials-trader.herokuapp.com/"
  },
  { "id": "ba",
    "img": "bikeadventure.png",
    "alt": "Bike Adventure Map App",
    "title": "Bike Adventure Planning App",
    "text": "The Bicycle Adventure Planner helps a cyclist plan a good route, "+
            "so that it will incorporate the sysclist's prefences to make for "+
            "an enjoyable ride.  The planner prompts the user for the desired "+
            "approximate location for a ride, then displays a map with the proposed "+
            "route outlined.  The difficulty level of the route is represented by "+
            "the color of the route."
  },
  { "id": "wa",
    "img": "weatherapp.png",
    "alt": "Weather Panel",
    "title": "Weather Panel",
    "text": "The Weather Panel app runs in the browser to display current and forecast "+
            "weather for any city that the user requests.  The app uses two third-party "+
            "APIs from *openweathermap.org*.  The HTML and CSS are dynamically updated "+
            "from JavaScript.",
    "live": "https://cchampness.github.io/WeatherPanel"
  },
  { "id": "cq",
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
  },
  { "id": "tpg",
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
  },
  { "id": "ecms",
    "img": "ecms.png",
    "alt": "Employee CMS",
    "title": "EmployeeCMS",
    "text": "The EmployeeCMS is a Content Management System to track employees, departments, "+
            "and roles within an organization. The EmployeeCMS app runs under NodeJs to enable "+
            "a non-technical user to easily view and interact with information stored in the "+
            "database containing employee data. The app manages a company's employee database, "+
            "using Node.js, Inquirer, and MySQL.",
    "video": "https://watch.screencastify.com/v/P1dwg5RPuzw7Bm4yUr5T"
  },
  { "id": "dp",
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
  },
  { "id": "pwg",
  "img": "pwgen.gif",
  "alt": "Password Generator",
  "title": "Password Generator",
  "text": "The Password Generator is an application that enables employees to generate random "+
          "passwords based on criteria that they’ve selected. It runs in the browser and "+
          "features dynamically updated HTML and CSS powered by JavaScript. It has a responsive "+
          "user interface that adapts to multiple screen sizes.",
  "live": "https://cchampness.github.io/Password-Generator"
  },
  { "id": "mt",
    "img": "Mining-truck.png",
    "alt": "Diesel Monitoring System",
    "title": "Mining Truck Engine Monitoring System",
    "text": "On this project, I led a team of six software engineers to develop the "+
            "control software that runs the Diesel Monitoring System for extreme-duty "+
            "mining trucks operating at the Chuquicamata copper mine in Chile. This was "+
            "done while at General Electric Transportation Systems (now Wabtec)."
  },
  { "id": "gbia",
    "img": "order-battle.png",
    "alt": "Order of Battle",
    "title": "Geographical Battlefield Intelligence Analysis",
    "text": "The Geographical Battlefiled Intelligence Analysis was developed while I "+
            "was an undergraduate working at the Georgia Tech Research Institute.  The "+
            "maps for the product were stored on laser disc.  The image selection, "+
            "database access, and graphical symbology were written in Pascal and assembler."
  },
  { "id": "cad",
    "img": "traindispatch2.jpg",
    "alt": "Computer Aided Dispatch",
    "title": "Railroad Dispatch",
    "text": "The Computer Aided Railroad Dispatch System was a product of GE Transportaion "+
            "Systems (now Wabtec).  This was a very large development effort using over "+
            "160 engineers for 12 years.  There were several customers including the "+
            "Union Pacific, BNSF, Norfolk Southern, and CSX railroads.  The development "+
            "environment was IBM Rational Clearcase and the implmentation language was C++."
  },
  { "id": "ndv",
    "img": "ndimv2.jpg",
    "alt": "N-Dimensional Visualizer",
    "title": "N-Dimensional Visualizer",
    "text": "The N-Dimensional Visualizer was a web-based application in which I wrote "+
            "to give visual insight into clustering behavior in higher-dimensional data "+
            "sets, of up to 10 dimensions.  I implemented the app on the server side in "+
            "C++, with OpenGL and svg for graphic rendering."
  },
  { "id": "fsb",
    "img": "FS-techblog.png",
    "alt": "Full Stack Blog",
    "title": "FS-Blog",
    "text": "This is a Full Stack CMS-style app that manages the content of a tech blog site.",
    "live": "https://shielded-journey-82964.herokuapp.com"
  },
  { "id": "estr",
    "img": "e-store.png",
    "alt": "E-Store",
    "title": "E-Store",
    "text": "The E-Store app is a backend which provides an api to give internet access "+
            "to a client who wishes to use the RESTful \"CRUD\" features to access and "+
            "maintain a database of products, categories, and tags for an e-commerce store.",
    "video": "https://watch.screencastify.com/v/tndAmP87tfIarw9kq4mU",
  },
  { "id": "tan",
    "img": "TakeANote.png",
    "alt": "Take-A-Note",
    "title": "Take-A-Note",
    "text": "This is an ExpressJS app that is deployed on the Heroku host server. It is a "+
            "fully-featured CRUD (Create, Read, Update, Delete) application which is "+
            "implemented with POST, GET, PUT, and DELETE routes.",
    "live": "https://damp-ravine-72371.herokuapp.com",
  },
];

export default projList;

