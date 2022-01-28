function Resume() {
  return (
    <div className="Resume div">
      <h3>Resume</h3>
      <article>
        <h4>Summary</h4>
        <p>
        Chris Champness is a software engineer with 25 years of experience in both very large
        and very small organizations.  He has been cited as an
        outstanding team collaborator, as well as a persistent individual contributor.
        His enthusiasm for the mission is demonstrated by the many successful
        outcomes on the products and projects he has worked on.  At Harris Corporation, Chris
        developed a version of the UNIX System V Operating System which conformed to the DoD
        specification at the B2 Trusted Computing Level.  He produced key software
        modules for the 3G Cellular Data Plane product while at InterDigital Communications Corporation (IDCC).
        He led a team to develop control software that runs the Diesel Monitoring System
        for extreme-duty mining trucks while at GE Transportation Systems.  At Computer
        Science Innovations, which is now part of Northrup-Grumman, he wrote a client-side application for
        viewing high-dimensional data.  When he's off the clock, he can be found hiking, kayaking,
        gardening, woodworking, singing, or praying, but not all at once!
        Currently he is taking the Georgia Tech Full-Stack Web Coding Bootcamp.  When he
        completes the program, he intends to offer web development services to businesses,
        small organizations, and individuals.
        </p>
      </article>
      <article>
        <h4>Skills</h4>
        {/* <p> */}
          <ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Full-Stack Web Development</li>
            <li>Embedded Software</li>
            <li>C++</li>
          </ul>
        {/* </p> */}
      </article>
      <article>
        <h4>Experience</h4>
          {/* <p> */}
          <dl>
            <dt>Home Depot</dt>
            <dd>- Sales Associate (2020-2021)</dd>
            <dt>Toccoa Hardware</dt>
            <dd>- Small Engine Parts Manager (2018-2020)</dd>
            <dt>Technical Equipment Distributors, Inc.</dt>
            <dd>- Warehouse Manager (2015-2017)</dd>
            <dt>Home Depot</dt>
            <dd>- Sales Associate (2014-2015)</dd>
            <dt>NCH Software</dt>
            <dd>- Software Engineer (2009-2010)</dd>
            <dt>InterDigital Communications LLC</dt>
            <dd>- Staff Software Engineer (2005-2009)</dd>
            <dt>Essex/CSI (now part of Northrup Grumman)</dt>
            <dd>- Principal Software Engineer (2002-2005)</dd>
            <dt>General Electric Transportation (now Wabtec)</dt>
            <dd>- Lead Professional Band Software Engineer (2000-2002)</dd>
            <dt>Computer Science Innovations</dt>
            <dd>- Principal Software Engineer (1990-2000)</dd>
            <dt>Harris Corporation</dt>
            <dd>- Lead Software Engineer (1985-1990)</dd>
            <dt>Georgia Tech Research Institute</dt>
            <dd>- Engineering Research Associate (1982-1985)</dd>
          </dl>
          {/* </p> */}
        </article>
        <article>
          <h4>Education and Training</h4>
        {/* <p> */}
          <ul>
            <li>Georgia Tech Full-Stack Web Development Coding Bootcamp (2021)</li>
            <li>Georgia Institute of Technology Bachelor ComputerScience (1985, Honors)</li>
          </ul>
        {/* </p> */}
      </article>
    </div>
  );
}

export default Resume;

